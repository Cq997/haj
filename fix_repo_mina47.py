import re
import json

# Read the original file
with open('/home/ubuntu/haj_repo/mina47.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix loadDeploymentTemplate to use staticDeploymentPoints if no data is returned from sheet
# We will modify the function to check if items is empty and then use staticDeploymentPoints
new_load_template = """
   async function loadDeploymentTemplate(){
      const sector = document.getElementById('deploy_sector').value;
      const defaultShift = document.getElementById('deploy_shift').value || 'الصباحية';
      const body = document.getElementById('deploymentTableBody');

      body.innerHTML = '';
      if(!sector) return;

      let data = [];
      try {
          data = await fetchDeploymentFromSheet();
      } catch(e) {
          console.log('Error fetching from sheet, using static points');
      }

      let items = data.filter(d => 
          String(d["القطاع"]).trim() === String(sector).trim()
      );

      // If no data in sheet for this sector, use static points
      if (items.length === 0) {
          console.log('No data in sheet for sector ' + sector + ', using static points');
          items = staticDeploymentPoints.filter(p => p.sector === sector).map(p => ({
              "الرمز": p.id,
              "نوع الآلية": p.type,
              "مناوبة النقطة": p.shift,
              "عدد الفرق الفعلي": 1,
              "Latitude": p.lat,
              "Longitude": p.lng,
              "ملاحظة السجل": ""
          }));
      }

      items.forEach((item, index) => {
        body.insertAdjacentHTML('beforeend', createDeploymentRowHTML({
          code: item["الرمز"] || `${sector}-${index + 1}`,
          type: item["نوع الآلية"] || 'مركبة إسعافية',
          shift: item["مناوبة النقطة"] || defaultShift,
          count: item["عدد الفرق الفعلي"] || 1,
          lat: item["Latitude"] || '',
          lng: item["Longitude"] || '',
          note: item["ملاحظة السجل"] || ''
        }));
      });

      refreshDeploymentAdminMode();
    }
"""

# Replace the old function
content = re.sub(r'async function loadDeploymentTemplate\(\)\{.*?refreshDeploymentAdminMode\(\);\s*\}', new_load_template, content, flags=re.DOTALL)

# 2. Fix updateSupportSummary to handle data correctly
new_update_support = """
async function updateSupportSummary() {
  try {
    const response = await fetch(SCRIPT_URL + '?action=getSupport');
    let result = { data: [] };
    
    try {
      const text = await response.text();
      result = JSON.parse(text);
    } catch (e) {
      console.log('Error parsing support data, using local data');
      result.data = window.supportPlanData || [];
    }
    
    const dataArray = Array.isArray(result) ? result : (result.data || []);
    
    if (!dataArray || dataArray.length === 0) {
      document.querySelector('#dashSupportTable tbody').innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted)">- لا توجد بيانات دعم -</td></tr>';
      return;
    }

    const supportMap = {};
    dataArray.forEach(row => {
      const type = row['النوع'] || row['نوع التدعيم'] || (row['القطاع المدعم له'] || row['النطاق المدعم له'] || 'غير محدد');
      const date = row['التاريخ'] || '-';
      const period = row['الفترة'] || row['الوقت'] || '-';
      const key = `${type}|${date}|${period}`;
      
      if (!supportMap[key]) {
        supportMap[key] = { type, date, period, count: 0, teams: 0 };
      }
      supportMap[key].count++;
      supportMap[key].teams += parseInt(row['عدد الفرق'] || row['عدد الفرق المدعمة'] || 1) || 0;
    });

    const tbody = document.querySelector('#dashSupportTable tbody');
    tbody.innerHTML = '';
    Object.values(supportMap).slice(0, 10).forEach(item => {
      tbody.innerHTML += `<tr>
        <td style="font-weight:700">${item.type}</td>
        <td>${item.count}</td>
        <td>${item.teams}</td>
        <td>${item.date}</td>
        <td>${item.period}</td>
      </tr>`;
    });
  } catch (err) {
    console.error('Error in updateSupportSummary:', err);
    document.querySelector('#dashSupportTable tbody').innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--danger)">- خطأ في تحميل البيانات -</td></tr>';
  }
}
"""

content = re.sub(r'async function updateSupportSummary\(\) \{.*?\}', new_update_support, content, flags=re.DOTALL)

# 3. Fix loadLiveDeploymentData to merge static points with live status
new_load_live = """
async function loadLiveDeploymentData(){
  let liveData = [];
  try {
    const sheetData = await fetchDeploymentFromSheet();
    const statusMap = {};
    
    if(Array.isArray(sheetData)){
      sheetData.forEach(d => {
        const code = d["الرمز"] || d["اسم النقطة"];
        if(code) statusMap[code] = d;
      });
    }

    liveData = staticDeploymentPoints.map(p => {
      const live = statusMap[p.id] || {};
      return {
        id: p.id,
        sector: p.sector,
        type: live["نوع الآلية"] || p.type,
        teams: parseInt(live["عدد الفرق الفعلي"] || 1),
        lat: p.lat,
        lng: p.lng,
        status: live["الحالة"] || "جاهز",
        shift: live["مناوبة النقطة"] || p.shift
      };
    });
  } catch(e) {
    console.log('Error loading live data, using static defaults:', e);
    liveData = staticDeploymentPoints.map(p => ({...p, teams: 1}));
  }
  
  updateDashboard(liveData);
  if(window.mapInstance) renderMapMarkers(liveData);
  window.liveDeploymentData = liveData;
}
"""

content = re.sub(r'async function loadLiveDeploymentData\(\)\{.*?\}', new_load_live, content, flags=re.DOTALL)

# Write the fixed file
with open('/home/ubuntu/haj_repo/mina47.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully fixed mina47.html")
