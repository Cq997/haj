/**
 * منصة نطاق منى - Google Apps Script
 * النسخة الإصلاحية النهائية لضمان حفظ البيانات
 */

const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); 

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let data = {};
    
    // التحقق من طريقة إرسال البيانات (JSON أو Form Parameters)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    const action = data.action;
    let sheetName = "";
    let rowData = [];
    const timestamp = new Date().toLocaleString("ar-SA", { timeZone: "Asia/Riyadh" });

    // خريطة مطابقة الأكشن مع اسم الورقة
    const actionToSheet = {
      'submitHandover': 'تسليم المناوبة',
      'submitPersonalEquipment': 'العهد الشخصية',
      'submitStrategicStock': 'الخزن الاستراتيجي',
      'submitPersonalEquipmentUnits': 'العهد الشخصية للقطاعات',
      'submitMethane': 'رسائل ميثان',
      'submitSupportPlan': 'خطة الدعم',
      'submitDeploymentPlan': 'خطة الانتشار',
      'submitDailyPreparation': 'التحضير اليومي'
    };

    sheetName = actionToSheet[action];
    if (!sheetName) throw new Error('Action not recognized: ' + action);

    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) throw new Error('Sheet not found: ' + sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // بناء الصف بناءً على الهيدرز الموجودة في الشيت لضمان الترتيب الصحيح
    rowData = headers.map(header => {
      if (header === "وقت الحفظ") return timestamp;
      
      // محاولة إيجاد القيمة في البيانات المرسلة (دعم لأسماء الحقول المختلفة)
      const value = data[header] || data[mapHeaderToField(header)] || "";
      return value;
    });

    sheet.appendRow(rowData);

    lock.releaseLock();
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "message": "تم الحفظ بنجاح" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    if (lock.hasLock()) lock.releaseLock();
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// دالة مساعدة لمطابقة أسماء الأعمدة مع أسماء الحقول في HTML
function mapHeaderToField(header) {
  const map = {
    "القطاع": "sector",
    "نوع المناوبة": "shift",
    "التاريخ": "date",
    "الوقت من": "time_from",
    "الوقت إلى": "time_to",
    "كبير المسعفين المسلم": "leader_handover",
    "كبير المسعفين المستلم": "leader_receive",
    "مساعد 1": "assistant1",
    "مساعد 2": "assistant2",
    "مساعد 3": "assistant3",
    "مساعد 4": "assistant4",
    "متوسط زمن الاستجابة": "avg_response_time",
    "متوسط زمن استجابة ECHO": "avg_echo_response_time",
    "إجمالي البلاغات": "total_reports",
    "عدد الفرق الفعالة": "active_teams",
    "عدد الفرق المعتمدة": "approved_teams",
    "أحداث طارئة": "emergency_events"
    // يمكن إضافة المزيد من المطابقات هنا
  };
  return map[header] || header;
}

function doGet(e) {
  const action = e.parameter.action;
  if (action === "getDashboardData") {
    return ContentService.createTextOutput(JSON.stringify(getProcessedDashboardData()))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput("Service is running");
}

// دالة جلب بيانات الداشبورد (مبسطة للسرعة)
function getProcessedDashboardData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return {
    "lastUpdate": new Date().toISOString(),
    "status": "active"
  };
}
