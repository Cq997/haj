// ============================================
// منصة نطاق منى - تحسينات السرعة والأيقونات
// ============================================

// نظام التخزين المؤقت (Caching System)
const dataCache = {
  deployment: { data: null, timestamp: 0, ttl: 5000 }, // 5 ثواني
  support: { data: null, timestamp: 0, ttl: 5000 },
  daily: { data: null, timestamp: 0, ttl: 5000 }
};

// دالة جلب البيانات مع التخزين المؤقت السريع
async function fetchWithCache(action, cacheKey) {
  const cache = dataCache[cacheKey];
  const now = Date.now();
  
  // إذا كانت البيانات محفوظة وحديثة، أرجعها فوراً
  if (cache.data && (now - cache.timestamp) < cache.ttl) {
    return cache.data;
  }
  
  try {
    const res = await fetch(`${SCRIPT_URL}?action=${action}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache'
    });
    
    if (!res.ok) throw new Error("فشل الاتصال");
    
    const data = await res.json();
    
    // حفظ في الذاكرة المؤقتة
    cache.data = data;
    cache.timestamp = now;
    
    return data;
  } catch (err) {
    console.error(`❌ خطأ في جلب ${action}:`, err);
    return cache.data || []; // أرجع البيانات القديمة إن وجدت
  }
}

// دالة تحديث البيانات الفورية (Force Refresh)
async function forceRefreshData(cacheKey) {
  dataCache[cacheKey].timestamp = 0; // أجبر على تحديث
}

// ============================================
// رسائل الواتساب مع الأيقونات التعريفية
// ============================================

function buildHandoverMessageWithEmojis(row) {
  const date = row["التاريخ"] || new Date().toLocaleDateString('ar-SA');
  const sector = row["القطاع"] || "غير محدد";
  const sender = row["handover_sender"] || "غير محدد";
  const receiver = row["handover_receiver"] || "غير محدد";
  
  const message = `
🏥 *تقرير تسليم المناوبة*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *القطاع:* ${sector}
📅 *التاريخ:* ${date}

👨‍⚕️ *كبير المسعفين المسلم:* ${sender}
👨‍⚕️ *كبير المسعفين المستقبل:* ${receiver}

🚑 *الآليات:*
• العاملة: ${row["العاملة"] || "0"}
• الاحتياط: ${row["الاحتياط"] || "0"}
• خارج الخدمة: ${row["الخارج عن الخدمة"] || "0"}

📊 *الإحصائيات:*
• إجمالي البلاغات: ${row["إجمالي البلاغات"] || "0"}
• الفرق الفعالة: ${row["عدد الفرق الفعالة"] || "0"}
• متوسط الاستجابة: ${row["متوسط زمن الاستجابة"] || "0"} دقيقة

⚠️ *ملاحظات:* ${row["ملاحظات عامة عن المناوبة"] || "لا توجد"}
━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ تم الحفظ بنجاح
  `.trim();
  
  return message;
}

function buildDeploymentMessageWithEmojis(row) {
  const date = row["التاريخ"] || new Date().toLocaleDateString('ar-SA');
  const sector = row["القطاع"] || "غير محدد";
  const code = row["الرمز"] || "غير محدد";
  const status = row["الحالة"] || "غير محدد";
  
  const message = `
🗺️ *خطة الانتشار*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *القطاع:* ${sector}
🏷️ *الرمز:* ${code}
📅 *التاريخ:* ${date}

🚑 *نوع الآلية:* ${row["نوع الآلية"] || "غير محدد"}
👥 *عدد الفرق:* ${row["عدد الفرق الفعلي"] || "0"}
⏰ *الحالة:* ${status}

📍 *الموقع:*
• Lat: ${row["Latitude"] || "غير محدد"}
• Lng: ${row["Longitude"] || "غير محدد"}

💬 *ملاحظات:* ${row["ملاحظة السجل"] || "لا توجد"}
━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ تم الحفظ بنجاح
  `.trim();
  
  return message;
}

function buildPersonalEquipmentMessageWithEmojis(row) {
  const date = row["التاريخ"] || new Date().toLocaleDateString('ar-SA');
  const sector = row["القطاع"] || "غير محدد";
  const lead = row["كبير المسعفين"] || "غير محدد";
  
  const message = `
🏥 *العهد الشخصية*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *القطاع:* ${sector}
👨‍⚕️ *كبير المسعفين:* ${lead}
📅 *التاريخ:* ${date}

🔧 *الأجهزة الطبية:*
• 🔴 لوكس: ${row["حالة جهاز لوكس"] || "غير محدد"}
• 🟢 ميندري: ${row["حالة جهاز ميندري"] || "غير محدد"}
• 🟡 لايف باك: ${row["حالة جهاز لايف باك"] || "غير محدد"}
• 📡 لاسلكي: ${row["حالة جهاز اللاسلكي"] || "غير محدد"}
• 📱 تابلت: ${row["حالة جهاز لوحي (تابلت)"] || "غير محدد"}
• 💓 قياس العلامات: ${row["حالة جهاز قياس العلامات الحيوية"] || "غير محدد"}

📝 *الملاحظات:* ${row["ملاحظات جهاز لوكس"] || "لا توجد"}
━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ تم الحفظ بنجاح
  `.trim();
  
  return message;
}

// ============================================
// دوال الخريطة التفاعلية السريعة
// ============================================

async function updateMapPointsInstantly() {
  try {
    const deploymentData = await fetchWithCache('getDeployment', 'deployment');
    
    if (!window.map || !window.deploymentMarkers) return;
    
    // مسح العلامات القديمة
    Object.values(window.deploymentMarkers).forEach(marker => {
      if (marker) window.map.removeLayer(marker);
    });
    window.deploymentMarkers = {};
    
    // إضافة العلامات الجديدة فوراً
    deploymentData.forEach(point => {
      const lat = parseFloat(point["Latitude"]);
      const lng = parseFloat(point["Longitude"]);
      const code = point["الرمز"] || point["اسم النقطة"];
      const status = point["الحالة"] || "جاهز";
      
      if (!isNaN(lat) && !isNaN(lng)) {
        const color = getStatusColor(status);
        const marker = L.circleMarker([lat, lng], {
          radius: 8,
          fillColor: color,
          color: '#000',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(window.map);
        
        marker.bindPopup(`
          <div style="text-align: center; font-family: Cairo;">
            <strong>${code}</strong><br>
            الحالة: ${status}<br>
            الفرق: ${point["عدد الفرق الفعلي"] || "0"}
          </div>
        `);
        
        window.deploymentMarkers[code] = marker;
      }
    });
    
    console.log("✅ تم تحديث الخريطة بنجاح");
  } catch (err) {
    console.error("❌ خطأ في تحديث الخريطة:", err);
  }
}

function getStatusColor(status) {
  const colors = {
    "جاهز": "#00b894",
    "مدعم": "#fdcb6e",
    "خارج الخدمة": "#d63031"
  };
  return colors[status] || "#0b5ed7";
}

// ============================================
// تحديث الداشبورد الفوري
// ============================================

async function updateDashboardInstantly() {
  try {
    const dailyData = await fetchWithCache('getDailyStats', 'daily');
    
    if (!Array.isArray(dailyData) || dailyData.length === 0) return;
    
    // الحصول على آخر صف
    const latestRow = dailyData[dailyData.length - 1];
    
    // تحديث الأرقام في الداشبورد
    const updates = {
      'totalUnits': latestRow["الوحدات التشغيلية"] || 0,
      'providers': latestRow["مقدمي الخدمة"] || 0,
      'staff': latestRow["الموظفين"] || 0,
      'volunteers': latestRow["المتطوعين"] || 0,
      'vehicles': latestRow["المركبات"] || 0
    };
    
    Object.entries(updates).forEach(([id, value]) => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.textContent = value;
        elem.style.animation = 'pulse 0.5s ease-in-out';
      }
    });
    
    console.log("✅ تم تحديث الداشبورد بنجاح");
  } catch (err) {
    console.error("❌ خطأ في تحديث الداشبورد:", err);
  }
}

// ============================================
// دالة الحفظ المحسّنة
// ============================================

async function saveToGoogleSheetsOptimized(action, data) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...data })
    });
    
    if (!response.ok) throw new Error('فشل الحفظ');
    
    // تحديث الذاكرة المؤقتة فوراً
    forceRefreshData('deployment');
    forceRefreshData('daily');
    
    // تحديث الداشبورد والخريطة فوراً (بدون تأخير)
    setTimeout(() => {
      updateDashboardInstantly();
      updateMapPointsInstantly();
    }, 100); // تأخير بسيط جداً (100ms فقط)
    
    return { success: true };
  } catch (err) {
    console.error("❌ خطأ في الحفظ:", err);
    return { success: false, error: err.message };
  }
}

// ============================================
// تحديث دوري سريع (كل 3 ثواني)
// ============================================

function startFastPolling() {
  setInterval(async () => {
    await updateDashboardInstantly();
    await updateMapPointsInstantly();
  }, 3000); // تحديث كل 3 ثواني بدلاً من دقيقتين
}

// تشغيل التحديث الدوري عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  startFastPolling();
});
