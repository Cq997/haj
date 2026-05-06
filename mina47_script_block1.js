    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFPfnVSIVVdpgZy25PUhFKjLnWt1JxVt_4Jtu94vz4BzbJBPGb5QTIJ1JA0n8o310jqw/exec';

    const deploymentPlanData = {
      "الجمرات": [
        {id: "J-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4220", lng:"39.8760"},
        {id: "J-2", type: "فريق طبي", time: "08:30", status: "جاهز", support: "لا يوجد", lat:"21.4230", lng:"39.8770"}
      ],
      "القطارات": [
        {id: "T-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4200", lng:"39.8800"},
        {id: "T-2", type: "فريق طبي", time: "08:30", status: "جاهز", support: "لا يوجد", lat:"21.4210", lng:"39.8810"}
      ],
      "بطن منى الجنوبي": [
        {id: "S-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4160", lng:"39.8750"}
      ],
      "بطن منى الشمالي": [
        {id: "N-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4270", lng:"39.8740"}
      ],
      "الشعيبين": [
        {id: "SH-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4300", lng:"39.8700"}
      ],
      "منى الجديد 1": [
        {id: "ND1-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4180", lng:"39.8850"}
      ],
      "منى الجديد 2": [
        {id: "ND2-1", type: "مركبة إسعافية", time: "08:00", status: "جاهز", support: "لا يوجد", lat:"21.4190", lng:"39.8860"}
      ]
    };

    const teamsData = {
      "الجمرات": {
        "الصباحية": { lead:"راكان منصور الحصيني", assistants:["فواز حميد الظفيري","تركي أحمد عبدالله الغامدي","محمد علي عبدالله القحطاني","فيصل جري المطيري"] },
        "المسائية": { lead:"محمد عبدالکريم إبراهيم الدعيجي", assistants:["عبدالله علي القحطاني","عبدالعزيز محمد الجهني","أحمد عبدالرحمن التركستاني",""] }
      },
      "بطن منى الشمالي": {
        "الصباحية": { lead:"حمود سويد العنزي", assistants:["إبراهيم علي إبراهيم جبران","مشاري حامد العتيبي","",""] },
        "المسائية": { lead:"فيصل حمود عبيد العتيبي", assistants:["ناصر عبدالله زوايد","","",""] }
      },
      "بطن منى الجنوبي": {
        "الصباحية": { lead:"سلمان نهير العنزي", assistants:["عبدالرحمن عبدالعزيز السهلي","مساعد حمد الدغيمان","",""] },
        "المسائية": { lead:"محمد منديل المنديل", assistants:["فيصل محمد مقبول السيالي","","",""] }
      },
      "القطارات": {
        "الصباحية": { lead:"مرزوق معيلي الدوسري", assistants:["عبيد سالم رشيدان الرويس","خالد محمد عبدالمجيد العياضي","",""] },
        "المسائية": { lead:"خالد نايف لطيف الشمري", assistants:["خالد علي العنزي","محمد إبراهيم بحري","",""] }
      },
      "منى الجديد 1": {
        "الصباحية": { lead:"عبدالله صالح محمد الغامدي", assistants:["وليد حمود العنزي","فهد حمد الشمري","",""] },
        "المسائية": { lead:"عبدالله باني العنزي", assistants:["سعدون فريح الشمري","","",""] }
      },
      "منى الجديد 2": {
        "الصباحية": { lead:"جاسم عبدالجواد جاسم الجريدان", assistants:["فيصل صقر المطيري","زياد سعيد الشهراني","",""] },
        "المسائية": { lead:"بندر أحمد علواني", assistants:["حاكم سعد الدعرمي","تركي نزال السبيعي","",""] }
      },
      "الشعيبين": {
        "الصباحية": { lead:"موسى علي أحمد غروي", assistants:["طلال علي الشمري","فهد حمود الشمري","",""] },
        "المسائية": { lead:"فواز فهد الأشجعي", assistants:["علي سلامة العنزي","مبارك محسن العجمي","",""] }
      }
    };

    const medicalItemsData = [
      "جهاز لوكس","Mindray","Lifepak 15","جهاز قياس علامات الحيوية","جهاز اتصال لاسلكي","جهاز مسف إلكتروني تابلت","اخرى اذكر","جهاز صدمات خارجي AED","جهاز تنفس صناعي","جهاز لايف باك","جهاز ميندري",
      "جهاز قياس النبض ونسبة الأكسجين بالدم","جهاز قياس السكر بالدم","جهاز الشفط المتنقل الكهربائي","جهاز الدريل العظمي",
      "جهاز قياس الحرارة","سماعة طبية","مقص جراحي","ثاقب زجاج","كشاف ضوء","لوح بورد بلاستيكي طويل",
      "نقالة طي","سكوب","سرير","كرسي الدرج","جبائر شد للفخذ","قاطع خواتم","حقيبة إسعافية بكامل ملحقاتها"
    ];

    const stockItems = [
      { category:'الأجهزة الطبية', item:'جهاز لوكس' },
      { category:'الأجهزة الطبية', item:'جهاز صدمات خارجي AED' },
      { category:'الأجهزة الطبية', item:'جهاز تنفس صناعي' },
      { category:'الأجهزة الطبية', item:'جهاز لايف باك' },
      { category:'الأجهزة الطبية', item:'جهاز ميندري' },
      { category:'الأجهزة الطبية', item:'جهاز قياس العلامات الحيوية' },
      { category:'الأجهزة الطبية', item:'جهاز قياس النبض ونسبة الأكسجين بالدم' },
      { category:'الأجهزة الطبية', item:'جهاز قياس السكر بالدم' },
      { category:'الأجهزة الطبية', item:'جهاز الشفط المتنقل الكهربائي' },
      { category:'الأجهزة الطبية', item:'جهاز الدريل العظمي' },
      { category:'الأجهزة الطبية', item:'جهاز قياس الحرارة' },
      { category:'الأجهزة الطبية', item:'سماعة طبية' },
      { category:'الأجهزة الطبية', item:'مقص جراحي' },
      { category:'الأجهزة الطبية', item:'ثاقب زجاج' },
      { category:'الأجهزة الطبية', item:'كشاف ضوء' },
      { category:'الأجهزة الطبية', item:'لوح بورد بلاستيكي طويل' },
      { category:'الأجهزة الطبية', item:'نقالة طي' },
      { category:'الأجهزة الطبية', item:'سكوب' },
      { category:'الأجهزة الطبية', item:'سرير' },
      { category:'الأجهزة الطبية', item:'كرسي الدرج' },
      { category:'الأجهزة الطبية', item:'جبائر شد للفخذ' },
      { category:'الأجهزة الطبية', item:'قاطع خواتم' },
      { category:'السلامة الشخصية', item:'قفازات' },
      { category:'السلامة الشخصية', item:'ماسك طبي حامي للوجه' },
      { category:'السلامة الشخصية', item:'قاون واقي طبي' },
      { category:'السلامة الشخصية', item:'معقم أيدي' },
      { category:'السلامة الشخصية', item:'معقم أسطح' },
      { category:'السلامة الشخصية', item:'صندوق خاص بالأبر' }
    ];

    const mobileBtn = document.getElementById('mobileBtn');
    const sidebar = document.getElementById('sidebar');

    mobileBtn.addEventListener('click', () => sidebar.classList.toggle('active'));

    // دالة تفعيل اللوحات
    function activatePanel(targetId) {
      console.log("تفعيل اللوحة:", targetId);
      
      // 1. إخفاء جميع اللوحات
      const panels = document.querySelectorAll('.panel');
      panels.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
      });
      
      // 2. إظهار اللوحة المستهدفة
      const target = document.getElementById(targetId);
      if (target) {
        target.style.display = 'block';
        target.classList.add('active');
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        // تهيئة الخريطة إذا كانت اللوحة هي لوحة الخريطة أو الرئيسية
        if ((targetId === 'mapsPanel' || targetId === 'homePanel') && typeof mapInstance !== 'undefined') {
          setTimeout(() => { 
            if (typeof mapInstance !== 'undefined') {
              mapInstance.invalidateSize(); 
              console.log("تم تحديث حجم الخريطة");
            }
          }, 400);
        }
      } else {
        console.error("اللوحة غير موجودة:", targetId);
      }
      
      // 3. تحديث القائمة الجانبية
      document.querySelectorAll('.nav li').forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('data-target') === targetId) {
          li.classList.add('active');
        }
      });
      
      // 4. إغلاق القائمة الجانبية في الجوال
      const sidebarElem = document.getElementById('sidebar');
      if (sidebarElem && window.innerWidth <= 992) {
        sidebarElem.classList.remove('active');
      }
    }
    
    // ربط أحداث النقر للقائمة الجانبية
    document.querySelectorAll('.nav li').forEach(item => {
      item.onclick = function() {
        const target = this.getAttribute('data-target');
        if (target) activatePanel(target);
      };
    });
    
    // جعل الدالة متاحة عالمياً
    window.activatePanel = activatePanel;

    function toggleShortageDetails(){
      const hasShortage = document.getElementById("has_shortage").value;
      document.getElementById("shortage_details_container").style.display = (hasShortage === "نعم") ? "block" : "none";
    }

    function toggleMedicalShortages(){
      const hasShortage = document.getElementById("stock_has_shortage").value;
      document.getElementById("medicalShortagesWrap").style.display = (hasShortage === "نعم") ? "block" : "none";
    }

    function toggleQuickLinks(){
      document.getElementById('quickLinks').classList.toggle('show');
    }

    function updateMapWithDeploymentData(){
      // تحديث الخريطة التفاعلية بعد حفظ بيانات خطة الانتشار
      if(window.map && window.deploymentMarkers){
        window.deploymentMarkers.forEach(marker => window.map.removeLayer(marker));
        window.deploymentMarkers = [];
        fetchDeploymentFromSheet().then(() => {
          renderDeploymentMarkers();
          console.log('تم تحديث الخريطة بنجاح');
        });
      }
    }

    function showAlert(elId, type, message){
      const box = document.getElementById(elId);
      if(!box) return;
      box.className = `alert ${type}`;
      box.textContent = message;
      box.style.display = 'block';
      setTimeout(() => box.style.display = 'none', 5000);
    }

   /***********************
🔗 ربط لوحة القائد
***********************/
function setDashboardLinks(){
  const dashboardUrl = `${SCRIPT_URL}?page=dashboard`;

  ['dashboardLinkTop','dashboardLinkCard','dashboardLinkMap'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.href = dashboardUrl;
  });
}

function setMapLink(){
  const mapUrl = `${SCRIPT_URL}?page=map`;
  const mapFrame = document.getElementById('mapFrame');
  if(mapFrame) mapFrame.src = mapUrl;
}

/***********************
📤 إرسال البيانات للشيت
***********************/
async function saveToGoogleSheets(sheetName, rows){

  try{

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheetName: sheetName,
        rows: rows
      })
    });
    
    // In no-cors mode, we can't read the response, so we assume success if no error
    return { success: true, message: "تم إرسال البيانات بنجاح" };

  } catch (error) {

    return {
      success:false,
      message:"خطأ في الاتصال بالسيرفر"
    };
  }
}


/***********************
📥 جلب نقاط الانتشار من الشيت
***********************/
async function fetchDeploymentFromSheet(){

  try{

    const res = await fetch(`${SCRIPT_URL}?action=getDeployment`);

    if(!res.ok) throw new Error("فشل الاتصال");

    const data = await res.json();

    if(!Array.isArray(data)){
      console.error("⚠️ البيانات غير صحيحة:", data);
      return [];
    }

    return data;

  } catch (error){

    console.error("❌ خطأ:", error);

    return [];
  }
}

    function openWhatsApp(text){
      const encoded = encodeURIComponent(text);
      // استخدام api.whatsapp.com كخيار أكثر استقراراً لجميع المنصات
      const url = `https://api.whatsapp.com/send?text=${encoded}`;
      
      // محاولة فتح الرابط في نافذة جديدة
      const win = window.open(url, '_blank');
      
      // إذا تم حظر النافذة المنبثقة، نقوم بتنبيه المستخدم أو تغيير الموقع الحالي
      if (!win || win.closed || typeof win.closed === 'undefined') {
        // خيار بديل في حال حظر النوافذ المنبثقة
        window.location.href = url;
      }
    }

    const sectorSelect = document.getElementById('sector');
    const shiftTimeSelect = document.getElementById('shift_time');

    function fillTeamData(){
      const sector = sectorSelect.value;
      const shift = shiftTimeSelect.value;
      const team = teamsData?.[sector]?.[shift];
      document.getElementById('ems_lead').value = team?.lead || '';
      document.getElementById('assistant1').value = team?.assistants?.[0] || '';
      document.getElementById('assistant2').value = team?.assistants?.[1] || '';
      document.getElementById('assistant3').value = team?.assistants?.[2] || '';
      document.getElementById('assistant4').value = team?.assistants?.[3] || '';
    }

    sectorSelect.addEventListener('change', fillTeamData);
    shiftTimeSelect.addEventListener('change', fillTeamData);

    function clearDailyForm(){
      ['scope','sector','shift_time','shift_datetime','notes'].forEach(id => {
        const el = document.getElementById(id);
        if(el){
          if(el.tagName === 'SELECT') el.selectedIndex = 0;
          else el.value = '';
        }
      });

      ['operational_units','total_providers','employees_count','volunteers_count','vehicles_count','golf_count','walking_count'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.value = 0;
      });

      fillTeamData();
    }

    async function sendGroundEMS(){
      const required = ['scope','sector','shift_time','shift_datetime'];
      for(const id of required){
        const el = document.getElementById(id);
        if(!el || !String(el.value).trim()){
          showAlert('dailyAlert','error','يرجى تعبئة جميع الحقول المطلوبة');
          return;
        }
      }

      const row = {
        "وقت الحفظ": new Date().toLocaleString('ar-SA'),
        "النطاق": document.getElementById('scope').value,
        "القطاع": document.getElementById('sector').value,
        "الفترة": document.getElementById('shift_time').value,
        "التاريخ والوقت": document.getElementById('shift_datetime').value,
        "كبير المسعفين": document.getElementById('ems_lead').value || '-',
        "مساعد1": document.getElementById('assistant1').value || '-',
        "مساعد2": document.getElementById('assistant2').value || '-',
        "مساعد3": document.getElementById('assistant3').value || '-',
        "مساعد4": document.getElementById('assistant4').value || '-',
        "الوحدات التشغيلية": document.getElementById('operational_units').value || 0,
        "مقدمي الخدمة": document.getElementById('total_providers').value || 0,
        "الموظفين": document.getElementById('employees_count').value || 0,
        "المتطوعين": document.getElementById('volunteers_count').value || 0,
        "المركبات": document.getElementById('vehicles_count').value || 0,
        "القولف": document.getElementById('golf_count').value || 0,
        "الراجلة": document.getElementById('walking_count').value || 0,
        "الملاحظات": document.getElementById('notes').value.trim() || 'لا توجد ملاحظات'
      };

      const save = await saveToGoogleSheets('التحضير اليومي', [row]);
      if(!save.success){
        showAlert('dailyAlert','error','تعذر حفظ البيانات');
        return;
      }

      showAlert('dailyAlert','success','تم حفظ تقرير التحضير اليومي بنجاح');

      let msg = `🚑 *منصة نطاق منى – التحضير اليومي* 🚑\n\n`;
      msg += `📍 *القطاع:* ${row["القطاع"]}\n`;
      msg += `🕘 *الفترة:* ${row["الفترة"]}\n`;
      msg += `🕒 *التاريخ والوقت:* ${row["التاريخ والوقت"]}\n\n`;
      msg += `👤 *كبير المسعفين:* ${row["كبير المسعفين"]}\n`;
      msg += `👥 *المساعدون:* ${row["مساعد1"]} | ${row["مساعد2"]} | ${row["مساعد3"]} | ${row["مساعد4"]}\n\n`;
      msg += `📊 *الإحصائيات:* \n`;
      msg += `• الوحدات التشغيلية: ${row["الوحدات التشغيلية"]}\n`;
      msg += `• إجمالي مقدمي الخدمة: ${row["مقدمي الخدمة"]}\n`;
      msg += `• الموظفين: ${row["الموظفين"]} | المتطوعين: ${row["المتطوعين"]}\n\n`;
      msg += `🚑 *توزيع الآليات:* \n`;
      msg += `• المركبات الإسعافية: ${row["المركبات"]}\n`;
      msg += `• عربات القولف: ${row["القولف"]}\n`;
      msg += `• الفرق الراجلة: ${row["الراجلة"]}\n\n`;
      msg += `📝 *الملاحظات:* \n${row["الملاحظات"]}`;
      openWhatsApp(msg);
    }

    document.getElementById('handover_sector').addEventListener('change', fillHandoverTeamData);
    document.getElementById('handover_shift').addEventListener('change', fillHandoverTeamData);

    function fillHandoverTeamData(){
      const sector = document.getElementById('handover_sector').value;
      const shift = document.getElementById('handover_shift').value;
      const current = teamsData?.[sector]?.[shift];
      const opposite = shift === 'الصباحية' ? 'المسائية' : 'الصباحية';
      const next = teamsData?.[sector]?.[opposite];

      document.getElementById('handover_sender').value = current?.lead || '';
      document.getElementById('handover_receiver').value = next?.lead || '';
      document.getElementById('handover_assistant1').value = current?.assistants?.[0] || '-';
      document.getElementById('handover_assistant2').value = current?.assistants?.[1] || '-';
      document.getElementById('handover_assistant3').value = current?.assistants?.[2] || '-';
      document.getElementById('handover_assistant4').value = current?.assistants?.[3] || '-';
    }

    function getSupportRow(index){
      return {
        call: document.getElementById(`support_call_${index}`).value.trim(),
        time: document.getElementById(`support_time_${index}`).value.trim(),
        type: document.getElementById(`support_type_${index}`).value.trim(),
        action: document.getElementById(`support_action_${index}`).value.trim(),
        back: document.getElementById(`support_return_${index}`).value.trim(),
        plate: document.getElementById(`support_plate_${index}`).value.trim()
      };
    }

    function toggleHandoverMethane(){
      const val = document.getElementById('has_major_events').value;
      const wrap = document.getElementById('handoverMethaneWrap');
      if(val === 'نعم') wrap.classList.remove('hidden');
      else wrap.classList.add('hidden');
    }

    function buildHandoverMessage(row){
      const sites = (row["مواقع الانتشار"] || 'لايوجد')
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => `• ${s}`)
        .join('\n') || '• لايوجد';

      const supportLines = [1,2,3].map(i => {
        const call = row[`نداء الفرقة ${i}`];
        const time = row[`توقيت العطل ${i}`];
        const type = row[`نوع العطل ${i}`];
        const action = row[`الإجراء المتبع ${i}`];
        const back = row[`العودة للخدمة ${i}`];
        const plate = row[`لوحة المركبة ${i}`];
        if (!call && !time && !type && !action && !back && !plate) return '';
        return `• بند ${i}
- نداء الفرقة: ${call || '-'}
- توقيت العطل: ${time || '-'}
- نوع العطل: ${type || '-'}
- الإجراء المتبع: ${action || '-'}
- العودة للخدمة: ${back || '-'}
- لوحة المركبة: ${plate || '-'}`;
      }).filter(Boolean).join('\n\n') || '• لايوجد';

      let methaneSection = '';
      if(row["أحداث طارئة"] === 'نعم'){
        methaneSection = `
🚨 بلاغ ميثان (METHANE) مدمج:
• الحالة: ${row["M-حادث جسيم"] || '-'}
• الموقع: ${row["E-الموقع"] || '-'}
• النوع: ${row["T-نوع الحادث"] || '-'}
• المخاطر: ${row["H-المخاطر"] || '-'}
• الوصول: ${row["A-الوصول"] || '-'}
• الإصابات: ${row["N-الإصابات"] || '-'}
• الخدمات: ${row["E-الخدمات"] || '-'}
• ملاحظات ميثان: ${row["ملاحظات ميثان"] || '-'}
`;
      }

      return `📋 *نموذج تسليم مناوبة كبير المسعفين* 📋

📍 *القطاع:* ${row["القطاع"] || '-'}
🕘 *نوع المناوبة:* ${row["نوع المناوبة"] || '-'}
📅 *التاريخ:* ${row["التاريخ"] || '-'}
⏰ *الوقت:* من ${row["الوقت من"] || '-'} إلى ${row["الوقت إلى"] || '-'}

👤 *كبير المسعفين المسلم:* ${row["كبير المسعفين المسلم"] || '-'}
👤 *كبير المسعفين المستلم:* ${row["كبير المسعفين المستلم"] || '-'}
👥 *المساعدون:* ${row["مساعد 1"]} | ${row["مساعد 2"]} | ${row["مساعد 3"]} | ${row["مساعد 4"]}

📊 *ملخص الوضع الراهن:*
• متوسط زمن الاستجابة: ${row["متوسط زمن الاستجابة"] || '0'}
• متوسط زمن استجابة ECHO: ${row["متوسط زمن استجابة ECHO"] || '0'}
• إجمالي البلاغات: ${row["إجمالي البلاغات"] || '0'}
• عدد الفرق الفعالة: ${row["عدد الفرق الفعالة"] || '0'} من أصل ${row["عدد الفرق المعتمدة"] || '0'}
${methaneSection}
🚑 *الوحدات التشغيلية:*
• مركبات إسعافية: ${row["عدد مركبات الإسعاف"] || '0'}
• قولف: ${row["عدد القولف"] || '0'}
• استجابة نوعية: ${row["عدد الاستجابة النوعية"] || '0'}

🚑 *المركبات والدعم اللوجستي:*
• العاملة: ${row["العاملة"] || '0'}
• الاحتياط: ${row["الاحتياط"] || '0'}
• الخارج عن الخدمة: ${row["الخارج عن الخدمة"] || '0'}
• بلاغات الدعم اللوجستي: ${row["بلاغات الدعم اللوجستي"] || '0'}
• البلاغات المفتوحة: ${row["البلاغات المفتوحة"] || '0'}

📍 *مواقع الانتشار:*
${sites}

🔧 *الوحدات المتعطلة ومواقعها:*
• ${row["الوحدات المتعطلة ومواقعها"] || 'لايوجد'}

🚚 *طلبات الدعم اللوجستي للمركبات:*
${supportLines}

🛡️ *إحاطات الصحة والسلامة:*
• التحذيرات الجوية: ${row["التحذيرات الجوية"] || 'لايوجد'}
• التحذيرات الأمنية: ${row["التحذيرات الأمنية"] || 'لايوجد'}
• مواقع خطرة: ${row["مواقع خطرة"] || 'لايوجد'}
• إصابات العاملين: ${row["إصابات العاملين"] || 'لايوجد'}
• إحاطات أخرى: ${row["إحاطات أخرى"] || 'لايوجد'}

📝 *ملخص الأحداث:*
• ${row["ملخص الأحداث"] || 'لايوجد'}

📦 *ملخص الموارد المطلوبة وتوزيعها:*
• ${row["ملخص الموارد المطلوبة وتوزيعها"] || 'لايوجد'}

📌 *ملاحظات عامة عن المناوبة:*
• ${(row["ملاحظات عامة عن المناوبة"] || 'لايوجد').split('\n').filter(Boolean).join('\n• ')}`;
    }

    async function sendHandoverMerged(){
      const required = ['handover_sector','handover_shift','handover_date','handover_time_from','handover_time_to'];
      for (const id of required){
        const el = document.getElementById(id);
        if (!el || !String(el.value).trim()){
          showAlert('handoverAlert','error','يرجى تعبئة البيانات الأساسية لنموذج تسليم المناوبة');
          return;
        }
      }

      const s1 = getSupportRow(1);
      const s2 = getSupportRow(2);
      const s3 = getSupportRow(3);

      const hasMethane = document.getElementById('has_major_events').value;
      if(hasMethane === 'نعم'){
        const methaneReq = ['h_methane_major','h_methane_location','h_methane_type'];
        for(const id of methaneReq){
          const el = document.getElementById(id);
          if(!el || !String(el.value).trim()){
            showAlert('handoverAlert','error','يرجى تعبئة بيانات رسالة ميثان الأساسية');
            return;
          }
        }
      }

      const row = {
        "وقت الحفظ": new Date().toLocaleString('ar-SA'),
        "القطاع": document.getElementById('handover_sector').value,
        "نوع المناوبة": document.getElementById('handover_shift').value,
        "التاريخ": document.getElementById('handover_date').value,
        "الوقت من": document.getElementById('handover_time_from').value,
        "الوقت إلى": document.getElementById('handover_time_to').value,
        "كبير المسعفين المسلم": document.getElementById('handover_sender').value || '-',
        "كبير المسعفين المستلم": document.getElementById('handover_receiver').value || '-',
        "مساعد 1": document.getElementById('handover_assistant1').value || '-',
        "مساعد 2": document.getElementById('handover_assistant2').value || '-',
        "مساعد 3": document.getElementById('handover_assistant3').value || '-',
        "مساعد 4": document.getElementById('handover_assistant4').value || '-',
        "متوسط زمن الاستجابة": document.getElementById('avg_response').value || '0',
        "متوسط زمن استجابة ECHO": document.getElementById('echo_response').value || '0',
        "إجمالي البلاغات": document.getElementById('total_cases').value || '0',
        "عدد الفرق الفعالة": document.getElementById('active_teams').value || '0',
        "عدد الفرق المعتمدة": document.getElementById('planned_teams').value || '0',
        "أحداث طارئة": hasMethane,
        "M-حادث جسيم": document.getElementById('h_methane_major').value || '-',
        "E-الموقع": document.getElementById('h_methane_location').value || '-',
        "T-نوع الحادث": document.getElementById('h_methane_type').value || '-',
        "H-المخاطر": document.getElementById('h_methane_hazards').value || '-',
        "A-الوصول": document.getElementById('h_methane_access').value || '-',
        "N-الإصابات": document.getElementById('h_methane_casualties').value || '-',
        "E-الخدمات": document.getElementById('h_methane_services').value || '-',
        "ملاحظات ميثان": document.getElementById('h_methane_notes').value || '-',
        "عدد مركبات الإسعاف": document.getElementById('handover_ambulance_count').value || '0',
        "عدد القولف": document.getElementById('handover_golf_count').value || '0',
        "عدد الاستجابة النوعية": document.getElementById('handover_special_response_count').value || '0',
        "العاملة": document.getElementById('working_vehicles').value || '0',
        "الاحتياط": document.getElementById('reserve_vehicles').value || '0',
        "الخارج عن الخدمة": document.getElementById('out_of_service').value || '0',
        "بلاغات الدعم اللوجستي": document.getElementById('logistic_reports').value || '0',
        "البلاغات المفتوحة": document.getElementById('open_logistic_reports').value || '0',
        "مواقع الانتشار": document.getElementById('deployment_sites').value.trim() || 'لايوجد',
        "الوحدات المتعطلة ومواقعها": document.getElementById('faulty_units').value.trim() || 'لايوجد',
        "نداء الفرقة 1": s1.call || '',
        "توقيت العطل 1": s1.time || '',
        "نوع العطل 1": s1.type || '',
        "الإجراء المتبع 1": s1.action || '',
        "العودة للخدمة 1": s1.back || '',
        "لوحة المركبة 1": s1.plate || '',
        "نداء الفرقة 2": s2.call || '',
        "توقيت العطل 2": s2.time || '',
        "نوع العطل 2": s2.type || '',
        "الإجراء المتبع 2": s2.action || '',
        "العودة للخدمة 2": s2.back || '',
        "لوحة المركبة 2": s2.plate || '',
        "نداء الفرقة 3": s3.call || '',
        "توقيت العطل 3": s3.time || '',
        "نوع العطل 3": s3.type || '',
        "الإجراء المتبع 3": s3.action || '',
        "العودة للخدمة 3": s3.back || '',
        "لوحة المركبة 3": s3.plate || '',
        "التحذيرات الجوية": document.getElementById('weather_warning').value.trim() || 'لايوجد',
        "التحذيرات الأمنية": document.getElementById('security_warning').value.trim() || 'لايوجد',
        "مواقع خطرة": document.getElementById('dangerous_sites').value.trim() || 'لايوجد',
        "إصابات العاملين": document.getElementById('worker_injuries').value.trim() || 'لايوجد',
        "إحاطات أخرى": document.getElementById('other_briefings').value.trim() || 'لايوجد',
        "ملخص الأحداث": document.getElementById('events_summary').value.trim() || 'لايوجد',
        "ملخص الموارد المطلوبة وتوزيعها": document.getElementById('resources_summary').value.trim() || 'لايوجد',
        "ملاحظات عامة عن المناوبة": document.getElementById('handover_notes').value.trim() || 'لايوجد'
      };

      row["الرسالة النهائية"] = buildHandoverMessage(row);

      const save = await saveToGoogleSheets('تسليم المناوبة', [row]);
      if(!save.success){
        showAlert('handoverAlert','error','تعذر حفظ بيانات تسليم المناوبة');
        return;
      }

      showAlert('handoverAlert','success','تم حفظ نموذج تسليم المناوبة بنجاح');
      openWhatsApp(row["الرسالة النهائية"]);
    }

    document.getElementById('checker_has_third_party').addEventListener('change', toggleThirdCrewField);
    document.getElementById('unit_type').addEventListener('change', toggleUnitTypeFields);

    function toggleThirdCrewField(){
      const hasThird = document.getElementById('checker_has_third_party').value;
      const wrap = document.getElementById('thirdCrewWrap');
      if(hasThird === 'نعم') wrap.classList.remove('hidden');
      else{
        wrap.classList.add('hidden');
        document.getElementById('crew3_name').value = '';
      }
    }

    function toggleUnitTypeFields(){
      const unitType = document.getElementById('unit_type').value;
      document.getElementById('ambulanceMechanicalWrap').classList.add('hidden');
      document.getElementById('golfWrap').classList.add('hidden');

      if(unitType === 'مركبة إسعافية') document.getElementById('ambulanceMechanicalWrap').classList.remove('hidden');
      if(unitType === 'قولف') document.getElementById('golfWrap').classList.remove('hidden');
    }

    function buildMedicalCheckTable(){
      const medicalBody = document.getElementById('medicalCheckTableBody');
      medicalBody.innerHTML = '';
      medicalItemsData.forEach((item,index)=>{
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item}</td>
          <td>
            <select id="medical_status_${index}"laceholder="ملاحظات"></td>
        `;
        medicalBody.appendChild(row);
      });
    }

    async function sendPersonalCovenant(){
            const required = ['personal_covenant_date','personal_covenant_time','personal_covenant_sector','personal_covenant_shift','personal_covenant_type','personal_covenant_id'];
      for(const id of required){
        const el = document.getElementById(id);
        if(!el || !String(el.value).trim()){
            showAlert('personalCovenantAlert','error','يرجى تعبئة جميع الحقول الأساسية');
          return;
        }
      }

            const covenantItems = [];
      const tableBody = document.getElementById('personalCovenantTableBody');
      for (let i = 0; i < tableBody.rows.length; i++) {
        const row = tableBody.rows[i];
        const itemName = row.cells[0].querySelector('select').value.trim();
        const quantity = row.cells[1].querySelector('input').value.trim();
        const status = row.cells[2].querySelector('select').value;
        const notes = row.cells[3].querySelector('textarea').value.trim();
        if (itemName && quantity && status) {
          covenantItems.push(`${itemName}: الكمية=${quantity}, الحالة=${status}, ملاحظات=${notes || '-'}`);
        }
      }

      if (covenantItems.length === 0) {
        showAlert('personalCovenantAlert','error','يرجى إضافة صنف واحد على الأقل للعهدة الشخصية');
        return;
      }

            const row = {
        "وقت الحفظ": new Date().toLocaleString('ar-SA'),
        "تاريخ العهدة": document.getElementById('personal_covenant_date').value,
        "وقت العهدة": document.getElementById('personal_covenant_time').value,
        "القطاع": document.getElementById('personal_covenant_sector').value,
        "الفترة": document.getElementById('personal_covenant_shift').value,
        "نوع العهدة": document.getElementById('personal_covenant_type').value,
        "رقم العهدة/المعرف": document.getElementById('personal_covenant_id').value.trim(),
        "الأصناف": covenantItems.join(' || '),
        "ملاحظات عامة": document.getElementById("personal_covenant_notes").value.trim() || 'لا توجد ملاحظات',
        "اسم كبير المسعفين والمساعدين": document.getElementById("personal_covenant_paramedic_chief").value.trim(),
        "اسم مدخل البيانات": document.getElementById("personal_covenant_data_entry_name").value.trim()
      };
            const save = await saveToGoogleSheets('العهد الشخصية', [row]);
      if(!save.success){
        showAlert('personalCovenantAlert','error','تعذر حفظ بيانات العهدة الشخصية');
        return;
      }

      showAlert('personalCovenantAlert','success','تم حفظ نموذج العهدة الشخصية بنجاح');

            let msg = `🤝 *نموذج العهد الشخصية* 🤝\n\n`;
      msg += `📍 *القطاع:* ${row["القطاع"]}\n`;
      msg += `🕘 *الفترة:* ${row["الفترة"]}\n`;
      msg += `📅 *التاريخ:* ${row["تاريخ العهدة"]} | ${row["وقت العهدة"]}\n\n`;
      msg += `📝 *تفاصيل العهدة:* \n`;
      msg += `• النوع: ${row["نوع العهدة"]}\n`;
      msg += `• رقم العهدة/المعرف: ${row["رقم العهدة/المعرف"]}\n\n`;
      msg += `📦 *الأصناف:* \n${covenantItems.map(item => `• ${item}`).join('\n')}\n\n`;
      msg += `📝 *ملاحظات عامة:* \n${row["ملاحظات عامة"]}\n\n`;
      msg += `👨‍⚕️ *كبير المسعفين والمساعدين:* ${row["اسم كبير المسعفين والمساعدين"]}\n`;
      msg += `✍️ *مدخل البيانات:* ${row["اسم مدخل البيانات"]}`;
      openWhatsApp(msg);
      clearPersonalCovenantForm();
    }

    function addCovenantItem() {
      const tbody = document.getElementById("personalCovenantTableBody");
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <select>
            <option value="جهاز لوكس">جهاز لوكس</option>
            <option value="ميندري">ميندري</option>
            <option value="لايف باك 15">لايف باك 15</option>
            <option value="جهاز قياس علامات الحيوية">جهاز قياس علامات الحيوية</option>
            <option value="جهاز اتصال لاسلكي">جهاز اتصال لاسلكي</option>
            <option value="جهاز مسف إلكتروني تابلت">جهاز مسف إلكتروني تابلت</option>
            <option value="اخرى اذكر">اخرى اذكر</option>
          </select>
        </td>
        <td><input type="number" min="1" value="1"></td>
        <td>
          <select>
            <option value="سليم">سليم</option>
            <option value="يوجد عطل">يوجد عطل</option>
            <option value="مفقود">مفقود</option>
          </select>
        </td>
        <td><textarea placeholder="ملاحظات الصنف"></textarea></td>
        <td><button class="btn btn-danger btn-sm" onclick="removeCovenantItem(this)"><i class="fas fa-trash"></i></button></td>
      `;
      tbody.appendChild(tr);
    }

    function removeCovenantItem(btn) {
      btn.closest("tr").remove();
    }

    function clearPersonalCovenantForm() {
      document.getElementById("personal_covenant_date").value = "";
      document.getElementById("personal_covenant_time").value = "";
      document.getElementById("personal_covenant_sector").value = "";
      document.getElementById("personal_covenant_shift").value = "";
      document.getElementById("personal_covenant_type").value = "";
      document.getElementById("personal_covenant_id").value = "";
      document.getElementById("personalCovenantTableBody").innerHTML = `
        <tr>
          <td>
          <select>
            <option value="جهاز لوكس">جهاز لوكس</option>
            <option value="ميندري">ميندري</option>
            <option value="لايف باك 15">لايف باك 15</option>
            <option value="جهاز قياس علامات الحيوية">جهاز قياس علامات الحيوية</option>
            <option value="جهاز اتصال لاسلكي">جهاز اتصال لاسلكي</option>
            <option value="جهاز مسف إلكتروني تابلت">جهاز مسف إلكتروني تابلت</option>
            <option value="اخرى اذكر">اخرى اذكر</option>
          </select>
        </td>
          <td><input type="number" min="1" value="1"></td>
          <td>
            <select>
              <option value="سليم">سليم</option>
              <option value="يوجد عطل">يوجد عطل</option>
              <option value="مفقود">مفقود</option>
            </select>
          </td>
          <td><textarea placeholder="ملاحظات الصنف"></textarea></td>
          <td><button class="btn btn-danger btn-sm" onclick="removeCovenantItem(this)"><i class="fas fa-trash"></i></button></td>
        </tr>
      `;
      document.getElementById("personal_covenant_notes").value = "";
      document.getElementById("personal_covenant_paramedic_chief").value = "";
      document.getElementById("personal_covenant_data_entry_name").value = "";
      hideAlert("personalCovenantAlert");
    }



    async function sendStrategicStock(){
      const date = document.getElementById('stock_date').value;
      const time = document.getElementById('stock_time').value;
      const checker = document.getElementById('stock_checker').value.trim();
      const location = document.getElementById('stock_location').value.trim();
      const hasShortage = document.getElementById('stock_has_shortage').value;
      const medicalShortages = document.getElementById('stock_medical_shortages').value.trim();
      const notes = document.getElementById('stock_notes').value.trim();

      if(!date || !time || !checker || !location || !hasShortage){
        showAlert('stockAlert','error','يرجى تعبئة البيانات الأساسية وحالة النقص الطبي');
        return;
      }

      if(hasShortage === 'نعم' && !medicalShortages){
        showAlert('stockAlert','error','يرجى تدوين قائمة الأصناف الناقصة والكميات');
        return;
      }

      let shortageFound = (hasShortage === 'نعم');

      const rows = stockItems.map((entry,index)=>{
        const status = document.getElementById(`stock_status_${index}`).value;
        const current = document.getElementById(`stock_current_${index}`).value || '0';
        if(status === 'يوجد نقص') shortageFound = true;

        return {
          "وقت الحفظ": new Date().toLocaleString('ar-SA'),
          "تاريخ التشييك": date,
          "وقت التشييك": time,
          "القائم بالتشييك": checker,
          "موقع الخزن": location,
          "الفئة": entry.category,
          "الصنف": entry.item,
          "الحالة": status,
          "الكمية الحالية": current,
          "هل يوجد نقص طبي": hasShortage,
          "النواقص الطبية": medicalShortages || '-',
          "ملاحظات": notes || '-'
        };
      });

      const save = await saveToGoogleSheets('الخزن الاستراتيجي', rows);
      if(!save.success){
        showAlert('stockAlert','error','تعذر حفظ بيانات الخزن');
        return;
      }

      if(shortageFound) showAlert('stockAlert','error','تم الحفظ مع تنبيه: يوجد نقص في بعض الأصناف');
      else showAlert('stockAlert','success','تم حفظ نموذج الخزن الاستراتيجي بنجاح');

      let msg = `📦 تقرير الخزن الاستراتيجي\n\n`;
      msg += `📅 ${date}\n⏰ ${time}\n👤 ${checker}\n📍 ${location}\n`;
      if(shortageFound) {
        msg += `\n⚠ يوجد نقص في بعض الأصناف:\n${medicalShortages}`;
      }
      openWhatsApp(msg);
      clearStrategicStockForm();

    // Function to clear the strategic stock form
    function clearStrategicStockForm() {
      document.getElementById('stock_date').value = '';
      document.getElementById('stock_time').value = '';
      document.getElementById('stock_checker').value = '';
      document.getElementById('stock_location').value = '';
      document.getElementById('stock_has_shortage').value = '';
      document.getElementById('stock_medical_shortages').value = '';
      document.getElementById('stock_notes').value = '';
      document.getElementById('medicalShortagesWrap').style.display = 'none';
      // Clear dynamic table rows
      const tableBody = document.getElementById('strategicTableBody');
      tableBody.innerHTML = '';
      // Re-populate with default items
      populateStrategicStockTable();
    }

    // Function to toggle medical shortages field
    // Function to build the strategic stock table structure
    function buildStrategicTable() {
      const tableBody = document.getElementById('strategicTableBody');
      if (!tableBody) return;
      tableBody.innerHTML = '';
      populateStrategicStockTable();
    }

    // Function to populate the strategic stock table with items
    function populateStrategicStockTable() {
      const tableBody = document.getElementById('strategicTableBody');
      if (!tableBody) return;
      
      stockItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.category}</td>
          <td>${item.item}</td>
          <td>
            <select id="stock_status_${index}" class="form-control">
              <option value="متوفر">متوفر</option>
              <option value="يوجد نقص">يوجد نقص</option>
              <option value="غير متوفر">غير متوفر</option>
            </select>
          </td>
          <td>
            <input type="number" id="stock_current_${index}" class="form-control" placeholder="0" min="0">
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    function toggleMedicalShortages(){
      const hasShortage = document.getElementById('stock_has_shortage').value;
      const wrap = document.getElementById('medicalShortagesWrap');
      if(hasShortage === 'نعم') wrap.style.display = 'block';
      else{
        wrap.style.display = 'none';
        document.getElementById('stock_medical_shortages').value = '';
      }
    }









    document.getElementById('deploy_sector').addEventListener('change', handleDeploymentContextChange);
    document.getElementById('deploy_shift').addEventListener('change', handleDeploymentContextChange);
    document.getElementById('deploy_role').addEventListener('change', handleDeploymentRoleChange);

    function handleDeploymentContextChange(){
      fillDeploymentPeople();
      loadDeploymentTemplate();
    }

    function handleDeploymentRoleChange(){
      fillDeploymentPeople();
      refreshDeploymentAdminMode();
    }

    function fillDeploymentPeople(){
      const sector = document.getElementById('deploy_sector').value;
      const shift = document.getElementById('deploy_shift').value;
      const teamShift = shift === 'المسائية' ? 'المسائية' : 'الصباحية';
      const team = teamsData?.[sector]?.[teamShift];

      document.getElementById('deploy_lead_name').value = team?.lead || '';
      document.getElementById('deploy_current_lead').value = team?.lead || '';
      document.getElementById('deploy_assistant1_auto').value = team?.assistants?.[0] || '';
      document.getElementById('deploy_assistant2_auto').value = team?.assistants?.[1] || '';
      document.getElementById('deploy_assistant3_auto').value = team?.assistants?.[2] || '';
      document.getElementById('deploy_assistant4_auto').value = team?.assistants?.[3] || '';


    }

    function getDefaultTimes(shift){
      if (shift === 'الصباحية') return { start:'06:00', end:'18:00' };
      if (shift === 'المسائية') return { start:'18:00', end:'06:00' };
      return { start:'12:00', end:'18:00' };
    }

    function createDeploymentRowHTML(rowData = {}){
      const code = rowData.code || '';
      const type = rowData.type || 'مركبة إسعافية';
      const shift = rowData.shift || 'الصباحية';
      const count = rowData.count || 1;
      const lat = rowData.lat || '';
      const lng = rowData.lng || '';
      const note = rowData.note || '';
      const defaults = getDefaultTimes(shift);
      const startTime = rowData.startTime || defaults.start;
      const endTime = rowData.endTime || defaults.end;

      return `
        <tr>
          <td><input type="text" class="dep-code" value="${code}"></td>
          <td>
            <select class="dep-type">
              <option value="مركبة إسعافية" ${type==='مركبة إسعافية'?'selected':''}>مركبة إسعافية</option>
              <option value="قولف" ${type==='قولف'?'selected':''}>قولف</option>
              <option value="استجابة نوعية" ${type==='استجابة نوعية'?'selected':''}>استجابة نوعية</option>
              <option value="راجلة" ${type==='راجلة'?'selected':''}>راجلة</option>
              <option value="دراجة نارية" ${type==='دراجة نارية'?'selected':''}>دراجة نارية</option>
              <option value="أخرى" ${type==='أخرى'?'selected':''}>أخرى</option>
            </select>
          </td>
          <td>
            <select class="dep-shift" onchange="updateShiftTimes(this)">
              <option value="الصباحية" ${shift==='الصباحية'?'selected':''}>صباحية</option>
              <option value="المسائية" ${shift==='المسائية'?'selected':''}>مسائية</option>
              <option value="اوفرلاب" ${shift==='اوفرلاب'?'selected':''}>اوفرلاب</option>
            </select>
          </td>
          <td><input type="time" class="dep-start-time" value="${startTime}"></td>
          <td><input type="time" class="dep-end-time" value="${endTime}"></td>
          <td>
            <select class="dep-status">
              <option value="جاهزة">جاهزة</option>
              <option value="خارج الخدمة">خارج الخدمة</option>
              <option value="مدعمة">مدعمة</option>
              <option value="متعطلة">متعطلة</option>
            </select>
          </td>
          <td><input type="number" class="dep-count compact-number" min="0" value="${count}"></td>
          <td><input type="text" class="dep-lat" value="${lat}" placeholder="Latitude"></td>
          <td><input type="text" class="dep-lng" value="${lng}" placeholder="Longitude"></td>
          <td><button type="button" class="btn btn-blue" onclick="openRowOnMap(this)">عرض</button></td>
          <td>
            <select class="dep-support-type">
              <option value="">بدون</option>
              <option value="داخل النطاق">داخل النطاق</option>
              <option value="إلى قطاع آخر داخل نطاق منى">إلى قطاع آخر داخل نطاق منى</option>
              <option value="إلى خارج النطاق">إلى خارج النطاق</option>
              <option value="من قطاع آخر داخل نطاق منى">من قطاع آخر داخل نطاق منى</option>
              <option value="من خارج النطاق">من خارج النطاق</option>
              <option value="قبول تدعيم">قبول تدعيم</option>
            </select>
          </td>
          <td><input type="text" class="dep-support-target" placeholder="مثال: الجمرات / العاصمة / عرفات"></td>
          <td><input type="text" class="dep-note" value="${note}" placeholder="ملاحظات"></td>
          <td><button type="button" class="btn btn-danger" onclick="deleteDeploymentRow(this)">حذف</button></td>
        </tr>
      `;
    }

    function updateShiftTimes(selectEl){
      const row = selectEl.closest('tr');
      const shift = selectEl.value;
      const defaults = getDefaultTimes(shift);
      row.querySelector('.dep-start-time').value = defaults.start;
      row.querySelector('.dep-end-time').value = defaults.end;
    }

    function openRowOnMap(button){
      const row = button.closest('tr');
      const lat = row.querySelector('.dep-lat')?.value?.trim();
      const lng = row.querySelector('.dep-lng')?.value?.trim();

      if(!lat || !lng){
        alert('لا توجد إحداثيات لهذه النقطة');
        return;
      }

      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }

    function deleteDeploymentRow(button){
      const role = document.getElementById('deploy_role')?.value;
      const canEdit = role === 'كبير مسعفين' || role === 'مساعد كبير مسعفين';
      if(!canEdit){
        alert('الحذف متاح فقط لكبير المسعفين أو مساعده');
        return;
      }
      button.closest('tr').remove();
    }

    function refreshDeploymentAdminMode(){
      const role = document.getElementById('deploy_role')?.value;
      const canEdit = role === 'كبير مسعفين' || role === 'مساعد كبير مسعفين';

      document.querySelectorAll('#deploymentTableBody tr').forEach(row => {
        row.querySelectorAll('input, select, button').forEach(el => {
          if (!el.classList.contains('btn-blue')) {
            el.disabled = !canEdit;
          }
        });
      });
    }

   async function loadDeploymentTemplate(){

  const sector = document.getElementById('deploy_sector').value;
  const defaultShift = document.getElementById('deploy_shift').value || 'الصباحية';
  const body = document.getElementById('deploymentTableBody');

  body.innerHTML = '';

  if(!sector) {
    body.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#999;">اختر القطاع لعرض النقاط</td></tr>';
    return;
  }

  const data = await fetchDeploymentFromSheet();

const items = data.filter(d => 
  String(d["القطاع"]).trim() === String(sector).trim()
);

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
    

    function addManualDeploymentRow(){
      const role = document.getElementById('deploy_role')?.value;
      const canEdit = role === 'كبير مسعفين' || role === 'مساعد كبير مسعفين';

      if(!canEdit){
        alert('الإضافة متاحة فقط لكبير المسعفين أو مساعده');
        return;
      }

      const defaultShift = document.getElementById('deploy_shift').value || 'الصباحية';
      const tbody = document.getElementById('deploymentTableBody');
      tbody.insertAdjacentHTML('beforeend', createDeploymentRowHTML({
        code: '',
        type: 'مركبة إسعافية',
        shift: defaultShift,
        count: 1,
        lat: '',
        lng: '',
        note: ''
      }));

      refreshDeploymentAdminMode();
    }

    async function sendDeploymentPlanSmart(){
      const sector = document.getElementById('deploy_sector').value;
      const shift = document.getElementById('deploy_shift').value;
      const role = document.getElementById('deploy_role').value;
      const date = document.getElementById('deployment_date').value;
      const time = document.getElementById('deployment_time').value;
      const lead = document.getElementById('deploy_current_lead').value || '-';
      const entryName = document.getElementById('deploy_lead_name').value || '';
      const notes = document.getElementById('deployment_notes').value.trim();

      const canEdit = role === 'كبير مسعفين' || role === 'مساعد كبير مسعفين';

      if(!canEdit){
        showAlert('deploymentAlert','error','التعديل والحفظ متاح فقط لكبير المسعفين أو مساعده');
        return;
      }

      if(!sector || !role || !date || !time || !entryName){
        showAlert('deploymentAlert','error','يرجى تعبئة البيانات الأساسية لخطة الانتشار');
        return;
      }

      const autoAssistants = [
        document.getElementById('deploy_assistant1_auto').value || '-',
        document.getElementById('deploy_assistant2_auto').value || '-',
        document.getElementById('deploy_assistant3_auto').value || '-',
        document.getElementById('deploy_assistant4_auto').value || '-'
      ].join(' | ');

      const rows = [...document.querySelectorAll('#deploymentTableBody tr')].map(row => {
        const lat = row.querySelector('.dep-lat')?.value || '';
        const lng = row.querySelector('.dep-lng')?.value || '';
        return {
          "وقت الحفظ": new Date().toLocaleString('ar-SA'),
          "التاريخ": date,
          "الوقت": time,
          "القطاع": sector,
          "العرض الزمني": shift,
          "صفة مدخل البيانات": role,
          "اسم مدخل البيانات": entryName,
          "اسم كبير المسعفين المناوب": lead,
          "أسماء المساعدين": autoAssistants,
          "الرمز": row.querySelector('.dep-code')?.value || '-',
          "نوع الآلية": row.querySelector('.dep-type')?.value || '-',
          "مناوبة النقطة": row.querySelector('.dep-shift')?.value || '-',
          "وقت البداية": row.querySelector('.dep-start-time')?.value || '-',
          "وقت النهاية": row.querySelector('.dep-end-time')?.value || '-',
          "الحالة": row.querySelector('.dep-status')?.value || '-',
          "عدد الفرق الفعلي": row.querySelector('.dep-count')?.value || 0,
          "Latitude": lat,
          "Longitude": lng,
          "رابط النقطة": lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : '-',
          "نوع التدعيم": row.querySelector('.dep-support-type')?.value || '-',
          "جهة التدعيم": row.querySelector('.dep-support-target')?.value || '-',
          "ملاحظة السجل": row.querySelector('.dep-note')?.value || '-',
          "ملاحظات عامة": notes || '-'
        };
      });

      const save = await saveToGoogleSheets('خطة الانتشار', rows);
      if(!save.success){
        showAlert('deploymentAlert','error','تعذر حفظ خطة الانتشار');
        return;
      }

      showAlert('deploymentAlert','success','تم حفظ خطة الانتشار بنجاح');
      
      // تحديث الداشبورد والخريطة ديناميكياً بعد الحفظ
      setTimeout(() => {
        updateDashboard();
    setInterval(updateDashboard, 60000);
        updateMapWithDeploymentData();
      }, 1000);

      let msg = `📍 *خطة الانتشار - نطاق منى* 📍\n\n`;
      msg += `📍 *القطاع:* ${sector}\n`;
      msg += `🕘 *العرض الزمني:* ${shift}\n`;
      msg += `📅 *التاريخ:* ${date} | ${time}\n\n`;
      msg += `👤 *مدخل البيانات:* ${entryName} (${role})\n`;
      msg += `👨‍⚕️ *كبير المسعفين المناوب:* ${lead}\n`;
      msg += `👥 *المساعدون:* ${autoAssistants}\n\n`;
      msg += `📋 *ملخص الانتشار:* \n`;
      msg += `• إجمالي نقاط الانتشار: ${rows.length}\n`;
      
      const statusCounts = rows.reduce((acc, r) => {
        acc[r["الحالة"]] = (acc[r["الحالة"]] || 0) + 1;
        return acc;
      }, {});
      
      msg += `• جاهزة: ${statusCounts["جاهز"] || 0}\n`;
      msg += `• مدعمة: ${statusCounts["مدعم"] || 0}\n`;
      msg += `• خارج الخدمة: ${statusCounts["خارج الخدمة"] || 0}\n`;
      msg += `• متعطلة: ${statusCounts["متعطلة"] || 0}\n`;

      if(notes) msg += `\n📝 *ملاحظات:* \n${notes}`;
      openWhatsApp(msg);
    }

    async function sendMethaneReport() {
      const sector = document.getElementById('methane_sector')?.value?.trim() || '';
      const reporter = document.getElementById('methane_reporter')?.value?.trim() || '';
      const contact = document.getElementById('methane_contact')?.value?.trim() || '';
      const major = document.getElementById('methane_major')?.value?.trim() || '';
      const location = document.getElementById('methane_location')?.value?.trim() || '';
      const type = document.getElementById('methane_type')?.value?.trim() || '';
      const hazards = document.getElementById('methane_hazards')?.value?.trim() || '';
      const access = document.getElementById('methane_access')?.value?.trim() || '';
      const casualties = document.getElementById('methane_casualties')?.value?.trim() || '';
      const services = document.getElementById('methane_services')?.value?.trim() || '';
      const notes = document.getElementById('methane_notes')?.value?.trim() || '';

      if (!sector || !reporter || !major || !location || !type) {
        showAlert('methaneAlert', 'error', 'يرجى تعبئة: القطاع، اسم المبلغ، M، E، T');
        return;
      }

      const row = {
        "وقت الحفظ": new Date().toLocaleString('ar-SA'),
        "القطاع": sector,
        "اسم المبلغ": reporter,
        "رقم التواصل": contact || '-',
        "M - حادث جسيم": major,
        "E - الموقع": location,
        "T - نوع الحادث": type,
        "H - المخاطر": hazards || 'لا توجد',
        "A - الوصول والمغادرة": access || 'غير محدد',
        "N - الإصابات": casualties || 'غير محدد',
        "E - الخدمات الإسعافية المطلوبة": services || 'غير محدد',
        "ملاحظات إضافية": notes || '-'
      };

      row["الرسالة النهائية"] = buildMethaneMessage(row);

      const save = await saveToGoogleSheets('رسائل ميثان', [row]);
      if (!save.success) {
        showAlert('methaneAlert', 'error', 'تعذر حفظ رسالة ميثان');
        return;
      }

      showAlert('methaneAlert', 'success', 'تم حفظ رسالة ميثان بنجاح');
      openWhatsApp(row["الرسالة النهائية"]);
      clearMethaneForm();
    }

    function buildMethaneMessage(row) {
      return `🚨 رسالة ميثان - تبليغ حادث جسيم

📍 القطاع: ${row["القطاع"]}
👤 المبلغ: ${row["اسم المبلغ"]}
📞 التواصل: ${row["رقم التواصل"]}

⚠️ M - حادث جسيم: ${row["M - حادث جسيم"]}
📍 E - الموقع: ${row["E - الموقع"]}
🔴 T - نوع الحادث: ${row["T - نوع الحادث"]}
⚡ H - المخاطر: ${row["H - المخاطر"]}
🚪 A - الوصول والمغادرة: ${row["A - الوصول والمغادرة"]}
👥 N - الإصابات: ${row["N - الإصابات"]}
🚑 E - الخدمات الإسعافية المطلوبة: ${row["E - الخدمات الإسعافية المطلوبة"]}

📝 ملاحظات إضافية:
${row["ملاحظات إضافية"]}

🕒 وقت البلاغ: ${row["وقت الحفظ"]}
🔔 من منصة نطاق منى`;
    }

    function clearMethaneForm() {
      [
        'methane_sector',
        'methane_reporter',
        'methane_contact',
        'methane_major',
        'methane_location',
        'methane_type',
        'methane_hazards',
        'methane_access',
        'methane_casualties',
        'methane_services',
        'methane_notes'
      ].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else el.value = '';
      });

      const alertBox = document.getElementById('methaneAlert');
      if (alertBox) alertBox.style.display = 'none';
    }

    // ═══════════════════════════════════════════
    // دوال نموذج خطة الدعم
    // ═══════════════════════════════════════════

    function toggleSupportTypeFields() {
      const type = document.getElementById('support_type').value;
      const internalWrap = document.getElementById('internalSupportWrap');
      const externalWrap = document.getElementById('externalSupportWrap');
      
      if (type === 'داخل_النطاق') {
        internalWrap.classList.remove('hidden');
        externalWrap.classList.add('hidden');
      } else if (type === 'خارج_النطاق') {
        internalWrap.classList.add('hidden');
        externalWrap.classList.remove('hidden');
      } else {
        internalWrap.classList.add('hidden');
        externalWrap.classList.add('hidden');
      }
    }

    async function sendSupportPlan() {
      const date = document.getElementById('support_date').value;
      const time = document.getElementById('support_time').value;
      const teamsCount = document.getElementById('support_teams_count').value;
      const type = document.getElementById('support_type').value;
      const arrivalTime = document.getElementById('support_arrival_time').value;
      const entryName = document.getElementById('support_entry_name').value;
      const notes = document.getElementById('support_notes').value;

      if (!date || !time || !type || !arrivalTime || !entryName) {
        showAlert('supportPlanAlert', 'error', 'يرجى تعبئة البيانات الأساسية');
        return;
      }

      let row = {
        'التاريخ': date,
        'الوقت': time,
        'عدد الفرق': teamsCount,
        'نوع التدعيم': type,
        'وقت الحضور': arrivalTime,
        'اسم مدخل البيانات': entryName,
        'الملاحظات': notes
      };

      if (type === 'داخل_النطاق') {
        const fromSector = document.getElementById('support_from_sector').value;
        const toSector = document.getElementById('support_to_sector').value;
        
        if (!fromSector || !toSector) {
          showAlert('supportPlanAlert', 'error', 'يرجى اختيار القطاعات');
          return;
        }
        
        row['القطاع المدعم منه'] = fromSector;
        row['القطاع المدعم له'] = toSector;
      } else {
        const fromZone = document.getElementById('support_from_zone').value;
        const toZone = document.getElementById('support_to_zone').value;
        
        if (!fromZone || !toZone) {
          showAlert('supportPlanAlert', 'error', 'يرجى اختيار النطاقات');
          return;
        }
        
        row['النطاق المدعم منه'] = fromZone;
        row['النطاق المدعم له'] = toZone;
      }

      const save = await saveToGoogleSheets('خطة الدعم', [row]);
      if (!save.success) {
        showAlert('supportPlanAlert', 'error', 'تعذر حفظ خطة الدعم');
        return;
      }

        showAlert('supportPlanAlert','success','تم حفظ خطة الدعم بنجاح');
      
      // تخزين البيانات محلياً لتحديث الداشبورد
      if (!window.supportPlanData) window.supportPlanData = [];
      window.supportPlanData.push(row);
      
      // تحديث الداشبورد بالبيانات الجديدة
      updateSupportSummary();
      
      let msg = `🤝 *خطة الدعم - نطاق منى* 🤝\n\n`;
      msg += `📅 *التاريخ:* ${date} | ${time}\n`;
      msg += `👥 *عدد الفرق:* ${teamsCount}\n`;
      msg += `🔄 *نوع التدعيم:* ${type === 'داخل_النطاق' ? 'داخل النطاق' : 'خارج النطاق'}\n\n`;
      
      if (type === 'داخل_النطاق') {
        msg += `📤 *من القطاع:* ${document.getElementById('support_from_sector').value}\n`;
        msg += `📥 *إلى القطاع:* ${document.getElementById('support_to_sector').value}\n`;
      } else {
        msg += `📤 *من النطاق:* ${document.getElementById('support_from_zone').value}\n`;
        msg += `📥 *إلى النطاق:* ${document.getElementById('support_to_zone').value}\n`;
      }
      
      msg += `⏰ *وقت الحضور:* ${arrivalTime}\n`;
      msg += `👤 *مدخل البيانات:* ${entryName}\n`;
      if (notes) msg += `\n📝 *ملاحظات:* \n${notes}\n`;
      
      openWhatsApp(msg);
      clearSupportPlanForm();
    }

    function clearSupportPlanForm() {
      [
        'support_date',
        'support_time',
        'support_teams_count',
        'support_type',
        'support_from_sector',
        'support_to_sector',
        'support_from_zone',
        'support_to_zone',
        'support_arrival_time',
        'support_entry_name',
        'support_notes'
      ].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else if (el.type === 'number') el.value = '1';
        else el.value = '';
      });

      document.getElementById('internalSupportWrap').classList.add('hidden');
      document.getElementById('externalSupportWrap').classList.add('hidden');
      
      const alertBox = document.getElementById('supportPlanAlert');
      if (alertBox) alertBox.style.display = 'none';
    }

buildMedicalCheckTable();
buildStrategicTable();
setDashboardLinks();
setMapLink();

/* ═══════════════════════════════════════════
   بيانات نقاط الانتشار الثابتة (148 نقطة)
   ═══════════════════════════════════════════ */
const staticDeploymentPoints = [
  {id:"MH1",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.425546,lng:39.86387,status:"جاهز",shift:"الصباحية"},
  {id:"MH2",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.424468,lng:39.863626,status:"جاهز",shift:"الصباحية"},
  {id:"MH3",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.425116,lng:39.865597,status:"جاهز",shift:"الصباحية"},
  {id:"MH4",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4250659,lng:39.8659837,status:"جاهز",shift:"الصباحية"},
  {id:"MH5",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.425314,lng:39.867029,status:"جاهز",shift:"الصباحية"},
  {id:"MH6",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.425174,lng:39.86701,status:"جاهز",shift:"الصباحية"},
  {id:"MH7",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.423748,lng:39.865322,status:"جاهز",shift:"الصباحية"},
  {id:"MH8",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.424757,lng:39.86711,status:"جاهز",shift:"الصباحية"},
  {id:"MH9",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.425946,lng:39.870235,status:"جاهز",shift:"الصباحية"},
  {id:"MH10",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.424427,lng:39.868784,status:"جاهز",shift:"الصباحية"},
  {id:"MH11",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4226793,lng:39.8764637,status:"جاهز",shift:"الصباحية"},
  {id:"MH12",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4245944,lng:39.872963,status:"جاهز",shift:"الصباحية"},
  {id:"MH13",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4225412,lng:39.8764999,status:"جاهز",shift:"الصباحية"},
  {id:"MH14",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.42235,lng:39.868068,status:"جاهز",shift:"الصباحية"},
  {id:"MH15",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.421914,lng:39.869211,status:"جاهز",shift:"الصباحية"},
  {id:"MH16",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4236195,lng:39.8730425,status:"جاهز",shift:"الصباحية"},
  {id:"MH17",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.419938,lng:39.872258,status:"جاهز",shift:"الصباحية"},
  {id:"MH18",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4192968,lng:39.8737655,status:"جاهز",shift:"الصباحية"},
  {id:"MH19",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4228831,lng:39.8712326,status:"جاهز",shift:"الصباحية"},
  {id:"MH20",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4207064,lng:39.8766112,status:"جاهز",shift:"الصباحية"},
  {id:"MH21",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4201379,lng:39.8767965,status:"جاهز",shift:"الصباحية"},
  {id:"MH22",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4253017,lng:39.8670914,status:"جاهز",shift:"الصباحية"},
  {id:"MH23",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.420791,lng:39.8768115,status:"جاهز",shift:"الصباحية"},
  {id:"MH24",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4203237,lng:39.8712934,status:"جاهز",shift:"الصباحية"},
  {id:"MH25",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4200672,lng:39.8776463,status:"جاهز",shift:"الصباحية"},
  {id:"MH26",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.416968,lng:39.8770642,status:"جاهز",shift:"الصباحية"},
  {id:"MH27",sector:"الجمرات",type:"مركبة اسعافية",teams:1,lat:21.4234574,lng:39.8713077,status:"جاهز",shift:"الصباحية"},
  {id:"MH28",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4187865,lng:39.877496,status:"جاهز",shift:"الصباحية"},
  {id:"MH29",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4179375,lng:39.8771044,status:"جاهز",shift:"الصباحية"},
  {id:"MH30",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4213962,lng:39.8708725,status:"جاهز",shift:"الصباحية"},
  {id:"MH31",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4223201,lng:39.8713338,status:"جاهز",shift:"الصباحية"},
  {id:"MH32",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4206621,lng:39.8727285,status:"جاهز",shift:"الصباحية"},
  {id:"MH33",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4214612,lng:39.8732703,status:"جاهز",shift:"الصباحية"},
  {id:"MH34",sector:"الجمرات",type:"راجلة",teams:1,lat:21.419973,lng:39.8737746,status:"جاهز",shift:"الصباحية"},
  {id:"MH35",sector:"الجمرات",type:"راجلة",teams:1,lat:21.4205972,lng:39.8744827,status:"جاهز",shift:"الصباحية"},
  {id:"MH36",sector:"القطارات",type:"قولف",teams:1,lat:21.414271,lng:39.8782808,status:"جاهز",shift:"الصباحية"},
  {id:"MH37",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4160506,lng:39.8770301,status:"جاهز",shift:"الصباحية"},
  {id:"MH38",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4153602,lng:39.8767243,status:"جاهز",shift:"الصباحية"},
  {id:"MH39",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.413141,lng:39.881431,status:"جاهز",shift:"الصباحية"},
  {id:"MH40",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4136279,lng:39.8809927,status:"جاهز",shift:"الصباحية"},
  {id:"MH41",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4123168,lng:39.8824058,status:"جاهز",shift:"الصباحية"},
  {id:"MH42",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4085071,lng:39.8861372,status:"جاهز",shift:"الصباحية"},
  {id:"MH43",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.407028,lng:39.887845,status:"جاهز",shift:"الصباحية"},
  {id:"MH44",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4152823,lng:39.8769795,status:"جاهز",shift:"الصباحية"},
  {id:"MH45",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.42343,lng:39.861696,status:"جاهز",shift:"الصباحية"},
  {id:"MH46",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.412738,lng:39.882661,status:"جاهز",shift:"الصباحية"},
  {id:"MH47",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4121327,lng:39.88039,status:"جاهز",shift:"الصباحية"},
  {id:"MH48",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4114845,lng:39.8840906,status:"جاهز",shift:"الصباحية"},
  {id:"MH49",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4125658,lng:39.8819877,status:"جاهز",shift:"الصباحية"},
  {id:"MH50",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4229275,lng:39.8654266,status:"جاهز",shift:"الصباحية"},
  {id:"MH51",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4208641,lng:39.8683662,status:"جاهز",shift:"الصباحية"},
  {id:"MH52",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4201062,lng:39.8691237,status:"جاهز",shift:"الصباحية"},
  {id:"MH53",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.419427,lng:39.870766,status:"جاهز",shift:"الصباحية"},
  {id:"MH54",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.419418,lng:39.87085,status:"جاهز",shift:"الصباحية"},
  {id:"MH55",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4202552,lng:39.8694404,status:"جاهز",shift:"الصباحية"},
  {id:"MH56",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4233439,lng:39.8631645,status:"جاهز",shift:"الصباحية"},
  {id:"MH57",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.419053,lng:39.871377,status:"جاهز",shift:"الصباحية"},
  {id:"MH58",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4173595,lng:39.8736606,status:"جاهز",shift:"الصباحية"},
  {id:"MH59",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4124092,lng:39.8796805,status:"جاهز",shift:"الصباحية"},
  {id:"MH60",sector:"القطارات",type:"قولف",teams:1,lat:21.4138865,lng:39.8773178,status:"جاهز",shift:"الصباحية"},
  {id:"MH61",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4192661,lng:39.8708881,status:"جاهز",shift:"الصباحية"},
  {id:"MH62",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4157995,lng:39.8752371,status:"جاهز",shift:"الصباحية"},
  {id:"MH63",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4099329,lng:39.8851583,status:"جاهز",shift:"الصباحية"},
  {id:"MH64",sector:"القطارات",type:"مركبة اسعافية",teams:1,lat:21.4066742,lng:39.8890287,status:"جاهز",shift:"الصباحية"},
  {id:"MH65",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4101968,lng:39.8894904,status:"جاهز",shift:"الصباحية"},
  {id:"MH66",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4098272,lng:39.8886697,status:"جاهز",shift:"الصباحية"},
  {id:"MH67",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4145719,lng:39.8849757,status:"جاهز",shift:"الصباحية"},
  {id:"MH68",sector:"بطن منى الجنوبي",type:"راجلة",teams:1,lat:21.4125191,lng:39.8856227,status:"جاهز",shift:"الصباحية"},
  {id:"MH69",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4086113,lng:39.8874781,status:"جاهز",shift:"الصباحية"},
  {id:"MH70",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4140273,lng:39.8836217,status:"جاهز",shift:"الصباحية"},
  {id:"MH71",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4144967,lng:39.8813124,status:"جاهز",shift:"الصباحية"},
  {id:"MH72",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4162396,lng:39.8806847,status:"جاهز",shift:"الصباحية"},
  {id:"MH73",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4178627,lng:39.8799981,status:"جاهز",shift:"الصباحية"},
  {id:"MH74",sector:"بطن منى الجنوبي",type:"راجلة",teams:1,lat:21.4112106,lng:39.8857311,status:"جاهز",shift:"الصباحية"},
  {id:"MH75",sector:"بطن منى الجنوبي",type:"راجلة",teams:1,lat:21.4076471,lng:39.8899628,status:"جاهز",shift:"الصباحية"},
  {id:"MH76",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4093845,lng:39.8907603,status:"جاهز",shift:"الصباحية"},
  {id:"MH77",sector:"بطن منى الجنوبي",type:"مركبة اسعافية",teams:1,lat:21.4133375,lng:39.8826844,status:"جاهز",shift:"الصباحية"},
  {id:"MH78",sector:"بطن منى الجنوبي",type:"راجلة",teams:1,lat:21.4163028,lng:39.883399,status:"جاهز",shift:"الصباحية"},
  {id:"MH79",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4078273,lng:39.8901072,status:"جاهز",shift:"الصباحية"},
  {id:"MH80",sector:"بطن منى الجنوبي",type:"راجلة",teams:1,lat:21.4166004,lng:39.8789371,status:"جاهز",shift:"الصباحية"},
  {id:"MH81",sector:"بطن منى الجنوبي",type:"مركبة اسعافية",teams:1,lat:21.4138466,lng:39.88183,status:"جاهز",shift:"الصباحية"},
  {id:"MH82",sector:"بطن منى الجنوبي",type:"مركبة اسعافية",teams:1,lat:21.4136918,lng:39.8820177,status:"جاهز",shift:"الصباحية"},
  {id:"MH83",sector:"بطن منى الجنوبي",type:"مركبة اسعافية",teams:1,lat:21.4134848,lng:39.8824484,status:"جاهز",shift:"الصباحية"},
  {id:"MH84",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4122543,lng:39.8875193,status:"جاهز",shift:"الصباحية"},
  {id:"MH85",sector:"بطن منى الجنوبي",type:"قولف",teams:1,lat:21.4093626,lng:39.8880329,status:"جاهز",shift:"الصباحية"},
  {id:"MH86",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4193403,lng:39.8812049,status:"جاهز",shift:"الصباحية"},
  {id:"MH87",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4142091,lng:39.892582,status:"جاهز",shift:"الصباحية"},
  {id:"MH88",sector:"بطن منى الشمالي",type:"تدخل سريع",teams:1,lat:21.4165745,lng:39.8846857,status:"جاهز",shift:"الصباحية"},
  {id:"MH89",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4203267,lng:39.8812256,status:"جاهز",shift:"الصباحية"},
  {id:"MH90",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4203141,lng:39.8811459,status:"جاهز",shift:"الصباحية"},
  {id:"MH91",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4197049,lng:39.8839032,status:"جاهز",shift:"الصباحية"},
  {id:"MH92",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4106591,lng:39.8919189,status:"جاهز",shift:"الصباحية"},
  {id:"MH93",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4128478,lng:39.8925071,status:"جاهز",shift:"الصباحية"},
  {id:"MH94",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4154277,lng:39.8905918,status:"جاهز",shift:"الصباحية"},
  {id:"MH95",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4137018,lng:39.888756,status:"جاهز",shift:"الصباحية"},
  {id:"MH96",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.418529,lng:39.8845792,status:"جاهز",shift:"الصباحية"},
  {id:"MH97",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4161219,lng:39.8882369,status:"جاهز",shift:"الصباحية"},
  {id:"MH98",sector:"بطن منى الشمالي",type:"مركبة اسعافية",teams:1,lat:21.4193403,lng:39.8812049,status:"جاهز",shift:"الصباحية"},
  {id:"MH99",sector:"بطن منى الشمالي",type:"راجلة",teams:1,lat:21.4178668,lng:39.885717,status:"جاهز",shift:"الصباحية"},
  {id:"MH100",sector:"بطن منى الشمالي",type:"راجلة",teams:1,lat:21.4171427,lng:39.8836652,status:"جاهز",shift:"الصباحية"},
  {id:"MH101",sector:"بطن منى الشمالي",type:"راجلة",teams:1,lat:21.4155846,lng:39.8878333,status:"جاهز",shift:"الصباحية"},
  {id:"MH102",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4182014,lng:39.8809615,status:"جاهز",shift:"الصباحية"},
  {id:"MH103",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4176508,lng:39.8823898,status:"جاهز",shift:"الصباحية"},
  {id:"MH104",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4138279,lng:39.8904369,status:"جاهز",shift:"الصباحية"},
  {id:"MH105",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.412497,lng:39.8903364,status:"جاهز",shift:"الصباحية"},
  {id:"MH106",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4153377,lng:39.8861448,status:"جاهز",shift:"الصباحية"},
  {id:"MH107",sector:"بطن منى الشمالي",type:"قولف",teams:1,lat:21.4183002,lng:39.8834344,status:"جاهز",shift:"الصباحية"},
  {id:"MH108",sector:"بطن منى الشمالي",type:"تدخل سريع",teams:1,lat:21.4148416,lng:39.8871924,status:"جاهز",shift:"الصباحية"},
  {id:"MH109",sector:"بطن منى الشمالي",type:"راجلة",teams:1,lat:21.4168485,lng:39.8862187,status:"جاهز",shift:"الصباحية"},
  {id:"MH110",sector:"بطن منى الشمالي",type:"تدخل سريع",teams:1,lat:21.4131959,lng:39.8883795,status:"جاهز",shift:"الصباحية"},
  {id:"MH111",sector:"بطن منى الشمالي",type:"راجلة",teams:1,lat:21.4103555,lng:39.8914814,status:"جاهز",shift:"الصباحية"},
  {id:"MH112",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4131758,lng:39.9008867,status:"جاهز",shift:"الصباحية"},
  {id:"MH113",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4185277,lng:39.895871,status:"جاهز",shift:"الصباحية"},
  {id:"MH114",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.419911,lng:39.8925505,status:"جاهز",shift:"الصباحية"},
  {id:"MH115",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4294735,lng:39.9054542,status:"جاهز",shift:"الصباحية"},
  {id:"MH116",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4244071,lng:39.8998937,status:"جاهز",shift:"الصباحية"},
  {id:"MH117",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4205294,lng:39.8923298,status:"جاهز",shift:"الصباحية"},
  {id:"MH118",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4240413,lng:39.8951289,status:"جاهز",shift:"الصباحية"},
  {id:"MH119",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4116982,lng:39.9093006,status:"جاهز",shift:"الصباحية"},
  {id:"MH120",sector:"الشعيبين",type:"مركبة اسعافية",teams:1,lat:21.4114686,lng:39.9094944,status:"جاهز",shift:"الصباحية"},
  {id:"MH121",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4125453,lng:39.8959471,status:"جاهز",shift:"الصباحية"},
  {id:"MH122",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4030243,lng:39.8948683,status:"جاهز",shift:"الصباحية"},
  {id:"MH123",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4031416,lng:39.8940651,status:"جاهز",shift:"الصباحية"},
  {id:"MH124",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.405504,lng:39.8891763,status:"جاهز",shift:"الصباحية"},
  {id:"MH125",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4110131,lng:39.8987977,status:"جاهز",shift:"الصباحية"},
  {id:"MH126",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4070409,lng:39.8974509,status:"جاهز",shift:"الصباحية"},
  {id:"MH127",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4122599,lng:39.8960615,status:"جاهز",shift:"الصباحية"},
  {id:"MH128",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4092911,lng:39.8915339,status:"جاهز",shift:"الصباحية"},
  {id:"MH129",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4116284,lng:39.8929019,status:"جاهز",shift:"الصباحية"},
  {id:"MH130",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4054508,lng:39.8901446,status:"جاهز",shift:"الصباحية"},
  {id:"MH131",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4028988,lng:39.8948493,status:"جاهز",shift:"الصباحية"},
  {id:"MH132",sector:"منى الجديد 1",type:"مركبة اسعافية",teams:1,lat:21.4037029,lng:39.893358,status:"جاهز",shift:"الصباحية"},
  {id:"MH133",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4013019,lng:39.8964704,status:"جاهز",shift:"الصباحية"},
  {id:"MH134",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.397855,lng:39.8995292,status:"جاهز",shift:"الصباحية"},
  {id:"MH135",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.3952977,lng:39.90072,status:"جاهز",shift:"الصباحية"},
  {id:"MH136",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4017411,lng:39.905956,status:"جاهز",shift:"الصباحية"},
  {id:"MH137",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.3995185,lng:39.8998245,status:"جاهز",shift:"الصباحية"},
  {id:"MH138",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4029697,lng:39.8979496,status:"جاهز",shift:"الصباحية"},
  {id:"MH139",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4030097,lng:39.8979496,status:"جاهز",shift:"الصباحية"},
  {id:"MH140",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4058664,lng:39.9019533,status:"جاهز",shift:"الصباحية"},
  {id:"MH141",sector:"منى الجديد 2",type:"قولف",teams:1,lat:21.4104178,lng:39.9018903,status:"جاهز",shift:"الصباحية"},
  {id:"MH142",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4028911,lng:39.8980762,status:"جاهز",shift:"الصباحية"},
  {id:"MH143",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4028661,lng:39.8981352,status:"جاهز",shift:"الصباحية"},
  {id:"MH144",sector:"منى الجديد 2",type:"قولف",teams:1,lat:21.4059077,lng:39.8978724,status:"جاهز",shift:"الصباحية"},
  {id:"MH145",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.4011816,lng:39.9003908,status:"جاهز",shift:"الصباحية"},
  {id:"MH146",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.3959698,lng:39.9073243,status:"جاهز",shift:"الصباحية"},
  {id:"MH147",sector:"منى الجديد 2",type:"مركبة اسعافية",teams:1,lat:21.3958074,lng:39.9038401,status:"جاهز",shift:"الصباحية"},
  {id:"MH148",sector:"منى الجديد 2",type:"قولف",teams:1,lat:21.3935148,lng:39.905436,status:"جاهز",shift:"الصباحية"}
];

/* ═══════════════════════════════════════════
   بيانات الخريطة والداشبورد المباشرة
   ═══════════════════════════════════════════ */
let liveDeploymentData = [...staticDeploymentPoints];
let mapInstance = null;
let mapMarkers = [];

/* ─── تبديل التابات الرئيسية ─── */
function switchMainTab(tabId, btn){
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.main-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId)?.classList.add('active');
  btn?.classList.add('active');
  if(tabId === 'tabMap') initMap();
}

/* ─── ألوان حسب الحالة ─── */
function getStatusColor(status){
  const s = (status || '').trim();
  if(s === 'جاهزة' || s === 'جاهز') return '#00b894';
  if(s === 'مدعمة' || s === 'مدعم') return '#0b5ed7';
  if(s === 'خارج الخدمة') return '#d63031';
  if(s === 'متعطلة' || s === 'موقوف') return '#636e72';
  return '#6c5ce7';
}

/* ─── أيقونات حسب نوع الوحدة ─── */
function getTypeIcon(type){
  const t = (type || '').trim();
  if(t.includes('مركبة') || t.includes('إسعاف') || t.includes('اسعاف')) return '🚑';
  if(t.includes('قولف')) return '🏎️';
  if(t.includes('راجلة')) return '🚶';
  if(t.includes('تدخل سريع')) return '⚡';
  return '📍';
}

/* ─── تهيئة الخريطة ─── */
function initMap(){
  if(mapInstance) {
    mapInstance.invalidateSize();
    return;
  }
  mapInstance = L.map('deploymentMap').setView([21.4150, 39.8850], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(mapInstance);
  renderMapMarkers(liveDeploymentData);
}

/* ─── عرض النقاط على الخريطة ─── */
function renderMapMarkers(data){
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];
  data.forEach(pt => {
    if(!pt.lat || !pt.lng) return;
    const color = getStatusColor(pt.status);
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background:${color};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);cursor:pointer">${getTypeIcon(pt.type)}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
    const marker = L.marker([pt.lat, pt.lng], {icon}).addTo(mapInstance);
    marker.bindPopup(`
      <div style="font-family:Cairo,sans-serif;direction:rtl;min-width:200px">
        <div style="font-weight:800;font-size:1rem;color:#c1121f;margin-bottom:6px">${pt.id}</div>
        <table style="font-size:.82rem;width:100%">
          <tr><td style="font-weight:700;padding:2px 8px">القطاع</td><td>${pt.sector}</td></tr>
          <tr><td style="font-weight:700;padding:2px 8px">النوع</td><td>${pt.type}</td></tr>
          <tr><td style="font-weight:700;padding:2px 8px">الحالة</td><td><span style="background:${color};color:#fff;padding:2px 8px;border-radius:10px;font-size:.75rem">${pt.status}</span></td></tr>
          <tr><td style="font-weight:700;padding:2px 8px">الفرق</td><td>${pt.teams}</td></tr>
          <tr><td style="font-weight:700;padding:2px 8px">المناوبة</td><td>${pt.shift || '-'}</td></tr>
        </table>
        <div style="margin-top:8px;text-align:center">
          <a href="https://www.google.com/maps?q=${pt.lat},${pt.lng}" target="_blank" style="color:#0b5ed7;font-size:.8rem">فتح في Google Maps</a>
        </div>
      </div>
    `);
    mapMarkers.push(marker);
  });
document.getElementById('mapPointCount').textContent = `النقاط المعروضة: ${data.length} من 148`;
}

/* ─── فلترة الخريطة ─── */
function applyMapFilters(){
  const sector = document.getElementById('mapFilterSector').value;
  const status = document.getElementById('mapFilterStatus').value;
  const type = document.getElementById('mapFilterType').value;
  const shift = document.getElementById('mapFilterShift').value;

  let filtered = liveDeploymentData.filter(pt => {
    if(sector !== 'الكل' && pt.sector !== sector) return false;
    if(status !== 'الكل' && pt.status !== status) return false;
    if(type !== 'الكل'){
      const t = (pt.type || '').trim();
      if(type === 'مركبة اسعافية' && !t.includes('مركبة')) return false;
      if(type === 'قولف' && !t.includes('قولف')) return false;
      if(type === 'راجلة' && !t.includes('راجلة')) return false;
      if(type === 'تدخل سريع' && !t.includes('تدخل')) return false;
    }
    if(shift !== 'الكل' && pt.shift !== shift) return false;
    return true;
  });
  renderMapMarkers(filtered);
}

function resetMapFilters(){
  document.getElementById('mapFilterSector').value = 'الكل';
  document.getElementById('mapFilterStatus').value = 'الكل';
  document.getElementById('mapFilterType').value = 'الكل';
  document.getElementById('mapFilterShift').value = 'الكل';
  renderMapMarkers(liveDeploymentData);
}

/* ─── تحديث الداشبورد ─── */
function applyDashboardFilters(){
  const date = document.getElementById('dashFilterDate').value;
  const time = document.getElementById('dashFilterTime').value;
  const sector = document.getElementById('dashFilterSector').value;
  const shift = document.getElementById('dashFilterShift').value;

  let filtered = liveDeploymentData;

  if(date){
    filtered = filtered.filter(d => d["التاريخ"] === date);
  }
  if(time){
    const filterHour = time.split(':')[0];
    filtered = filtered.filter(d => {
      const dTime = d["الوقت"] || "";
      return dTime.startsWith(filterHour + ":");
    });
  }
  if(sector !== 'الكل'){
    filtered = filtered.filter(d => d.sector === sector);
  }
  if(shift !== 'الكل'){
    filtered = filtered.filter(d => d["العرض الزمني"] === shift || d.shift === shift);
  }

  updateDashboard(filtered);
}

function resetDashboardFilters(){
  document.getElementById('dashFilterDate').value = '';
  document.getElementById('dashFilterTime').value = '';
  document.getElementById('dashFilterSector').value = 'الكل';
  document.getElementById('dashFilterShift').value = 'الكل';
  updateDashboard(liveDeploymentData);
}

function updateDashboard(data){
  // KPIs
  const total = data.length; // Dynamic total points
  const ready = data.filter(d => d.status === 'جاهزة' || d.status === 'جاهز').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
  const supported = data.filter(d => d.status === 'مدعمة' || d.status === 'مدعم').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
  const oos = data.filter(d => d.status === 'خارج الخدمة').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
  const broken = data.filter(d => d.status === 'متعطلة' || d.status === 'موقوف').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);

  document.getElementById('kpi_total').textContent = total;
  document.getElementById('kpi_ready').textContent = ready;
  document.getElementById('kpi_supported').textContent = supported;
  document.getElementById('kpi_oos').textContent = oos;
  document.getElementById('kpi_broken').textContent = broken;

  // Sector Table
  const sectors = ['الجمرات','القطارات','بطن منى الجنوبي','بطن منى الشمالي','الشعيبين','منى الجديد 1','منى الجديد 2'];
  const sectorBody = document.querySelector('#dashSectorTable tbody');
  sectorBody.innerHTML = '';
  sectors.forEach(sec => {
    const pts = data.filter(d => d.sector === sec);
    const totalTeamsInSector = pts.reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0); // Calculate total teams dynamically
    const readyTeamsInSector = pts.filter(d => d.status === 'جاهزة' || d.status === 'جاهز').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0); // Calculate ready teams dynamically

    const supportedTeamsInSector = pts.filter(d => d.status === 'مدعمة' || d.status === 'مدعم').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
    const oosTeamsInSector = pts.filter(d => d.status === 'خارج الخدمة').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
    const brokenTeamsInSector = pts.filter(d => d.status === 'متعطلة' || d.status === 'موقوف').reduce((sum, pt) => sum + (parseInt(pt.teams) || 1), 0);
    sectorBody.innerHTML += `<tr>
      <td style='font-weight:700'>${sec}</td>
      <td>${totalTeamsInSector}</td>
      <td><span class='status-badge ready'>${readyTeamsInSector}</span></td>
      <td><span class='status-badge supported'>${supportedTeamsInSector}</span></td>
      <td><span class='status-badge oos'>${oosTeamsInSector}</span></td>
      <td><span class='status-badge broken'>${brokenTeamsInSector}</span></td>
    </tr>`;
  });

  // Type Table
  const types = {};
  data.forEach(d => {
    let t = (d.type || 'أخرى').trim();
    if(t.includes('مركبة') || t.includes('إسعاف') || t.includes('اسعاف')) t = 'مركبة إسعافية';
    types[t] = (types[t] || 0) + 1;
  });
  const typeBody = document.querySelector('#dashTypeTable tbody');
  typeBody.innerHTML = '';
  Object.entries(types).sort((a,b) => b[1]-a[1]).forEach(([t,c]) => {
    typeBody.innerHTML += `<tr>
      <td style="font-weight:700">${getTypeIcon(t)} ${t}</td>
      <td>${c}</td>
      <td>${total ? Math.round(c/total*100) : 0}%</td>
    </tr>`;
  });

  // Status Chart (simple visual bars)
  const statuses = [
    {name:'جاهزة',count:ready,color:'#00b894'},
    {name:'مدعمة',count:supported,color:'#0b5ed7'},
    {name:'خارج الخدمة',count:oos,color:'#d63031'},
    {name:'متعطلة',count:broken,color:'#636e72'}
  ];
  const chartEl = document.getElementById('dashStatusChart');
  chartEl.innerHTML = '';
  statuses.forEach(s => {
    const pct = total ? Math.round(s.count/total*100) : 0;
    chartEl.innerHTML += `
      <div style="text-align:center;min-width:80px">
        <div style="font-size:1.6rem;font-weight:900;color:${s.color}">${s.count}</div>
        <div style="font-size:.72rem;color:var(--muted);margin-bottom:4px">${s.name}</div>
        <div style="background:var(--line);border-radius:6px;height:8px;overflow:hidden">
          <div style="background:${s.color};height:100%;width:${pct}%;border-radius:6px;transition:width .5s"></div>
        </div>
        <div style="font-size:.7rem;color:var(--muted);margin-top:2px">${pct}%</div>
      </div>
    `;
  });

  // Support Summary
  updateSupportSummary();

  // Last Update
  document.getElementById('dashLastUpdate').innerHTML = `
    <div style="font-size:.85rem;color:var(--success);font-weight:700">
      <i class="fas fa-check-circle"></i> تم تحديث البيانات
    </div>
    <div style="font-size:.78rem;color:var(--muted);margin-top:4px">
      ${new Date().toLocaleString('ar-SA')} | إجمالي ${total} نقطة   </div>
  `;
}

/* ═══════════════════════════════════════════
   تحديث ملخص عمليات الدعم في الداشبورد
   ═══════════════════════════════════════════ */
async function updateSupportSummary() {
  try {
    const tbody = document.querySelector('#dashSupportTable tbody');
    if (!tbody) return;
    
    // جلب بيانات الدعم من Google Sheets
    let result = { data: [] };
    
    try {
      const response = await fetch(SCRIPT_URL + '?action=getSupportData', {
        method: 'GET',
        mode: 'cors'
      });
      
      if (response.ok) {
        result = await response.json();
      } else {
        console.log('استجابة الخادم غير صحيحة:', response.status);
      }
    } catch (e) {
      console.log('لم يتم جلب البيانات من Google Sheets، سيتم استخدام البيانات المحلية:', e.message);
    }
    
    // استخدام البيانات المحلية إذا لم تتوفر بيانات من الخادم
    if (!result.data || result.data.length === 0) {
      result.data = window.supportPlanData || [];
    }
    
    if (!result.data || result.data.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted)">- لا توجد بيانات دعم -</td></tr>';
      return;
    }

    // تجميع البيانات حسب القطاع/النطاق والتاريخ والفترة
    const supportMap = {};
    result.data.forEach(row => {
      if (!row) return;
      const type = row['النوع'] || (row['نوع التدعيم'] === 'داخل_النطاق' ? 
        (row['القطاع المدعم له'] || 'بين القطاعات') : 
        (row['النطاق المدعم له'] || 'بين النطاقات'));
      const date = row['التاريخ'] || '-';
      const period = row['الفترة'] || '-';
      const key = `${type}|${date}|${period}`;
      
      if (!supportMap[key]) {
        supportMap[key] = {
          type,
          date,
          period,
          count: 0,
          teams: 0
        };
      }
      supportMap[key].count++;
      supportMap[key].teams += parseInt(row['عدد الفرق'] || row['عدد الفرق المدعمة'] || 1);
    });

    // عرض البيانات في الجدول
    tbody.innerHTML = '';
    const items = Object.values(supportMap).slice(0, 10);
    if (items.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted)">- لا توجد بيانات دعم -</td></tr>';
    } else {
      items.forEach(item => {
        tbody.innerHTML += `<tr>
          <td style="font-weight:700">${item.type}</td>
          <td>${item.count}</td>
          <td>${item.teams}</td>
          <td>${item.date}</td>
          <td>${item.period}</td>
        </tr>`;
      });
    }
  } catch (err) {
    console.error('خطأ في جلب بيانات الدعم:', err);
    const tbody = document.querySelector('#dashSupportTable tbody');
    if (tbody) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted)">- لا توجد بيانات دعم متاحة حالياً -</td></tr>';
    }
  }
}

/* ─── جلب البيانات من Google Sheets وتحديث الخريطة والداشبورد ─── */
async function loadLiveDeploymentData(){
  try {
    const data = await fetchDeploymentFromSheet();
    // نبدأ دائماً بالنقاط الثابتة الـ 148
    let mergedData = staticDeploymentPoints.map(p => ({...p}));

    if(data && data.length > 0){
      data.forEach(livePt => {
        const liveId = livePt["الرمز"] || livePt["اسم النقطة"];
        const index = mergedData.findIndex(p => p.id === liveId);
        if(index !== -1){
          // تحديث النقطة الموجودة ببيانات الشيت
          mergedData[index].status = livePt["الحالة"] || mergedData[index].status;
          mergedData[index].teams = parseInt(livePt["عدد الفرق الفعلي"] || livePt["عدد الفرق بالنقطة"] || mergedData[index].teams);
          mergedData[index].type = livePt["نوع الآلية"] || livePt["الالية المشغلة بالنقطة"] || mergedData[index].type;
          mergedData[index].shift = livePt["مناوبة النقطة"] || livePt["العرض الزمني"] || mergedData[index].shift;
        } else if(liveId) {
          // إضافة نقطة جديدة إذا لم تكن موجودة في الـ 148 (نقاط إضافية)
          mergedData.push({
            id: liveId,
            sector: livePt["القطاع"] || '',
            type: livePt["نوع الآلية"] || livePt["الالية المشغلة بالنقطة"] || '',
            teams: parseInt(livePt["عدد الفرق الفعلي"] || livePt["عدد الفرق بالنقطة"] || 1),
            lat: parseFloat(livePt["Latitude"] || 0),
            lng: parseFloat(livePt["Longitude"] || 0),
            status: livePt["الحالة"] || 'جاهز',
            shift: livePt["مناوبة النقطة"] || livePt["العرض الزمني"] || 'الصباحية'
          });
        }
      });
    }
    liveDeploymentData = mergedData;
  } catch(e) {
    console.log('استخدام البيانات الثابتة بسبب خطأ:', e);
    liveDeploymentData = [...staticDeploymentPoints];
  }
  updateDashboard(liveDeploymentData);
  if(mapInstance) renderMapMarkers(liveDeploymentData);
}

// تحميل البيانات عند بدء التشغيل
loadLiveDeploymentData();

// تحديث تلقائي كل 3 دقائق
setInterval(loadLiveDeploymentData, 180000);

/* لتحميل النقاط الافتراضية للقطاع المختار */
function loadDefaultDeploymentPoints(){
  const sector = document.getElementById('deploy_sector').value;
  const shift = document.getElementById('deploy_shift').value || 'الصباحية';
  
  if(!sector || sector === 'اختر القطاع'){
    showAlert('deploymentAlert','error','يرجى اختيار قطاع أولاً');
    return;
  }
  
  const tbody = document.getElementById('deploymentTableBody');
  if (!tbody) {
    console.error('Table body not found');
    return;
  }
  
  tbody.innerHTML = '';
  
  // البحث عن النقاط التابعة للقطاع المختار
  const sectorPoints = Object.entries(DEPLOYMENT_POINTS).filter(([code, point]) => point.sector === sector);
  
  if(sectorPoints.length === 0){
    showAlert('deploymentAlert','warning','لا توجد نقاط افتراضية لهذا القطاع');
    return;
  }
  
  // إضافة كل نقطة إلى الجدول
  sectorPoints.forEach(([code, point]) => {
    const rowData = {
      code: code,
      type: point.unit_type || 'مركبة إسعافية',
      shift: shift,
      count: 1,
      lat: point.lat || '',
      lng: point.lng || '',
      note: ''
    };
    tbody.insertAdjacentHTML('beforeend', createDeploymentRowHTML(rowData));
  });
  
  showAlert('deploymentAlert','success',`تم تحميل ${sectorPoints.length} نقطة بنجاح لقطاع ${sector}`);
}
