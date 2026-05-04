/**
 * منصة نطاق منى - Google Apps Script
 * النسخة الاحترافية النهائية المتكاملة (v3.2)
 * حل مشكلة الخلايا الفارغة والمطابقة الكاملة 100%
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('منصة نطاق منى')
    .addItem('إعداد الأوراق (RTL)', 'setupSheetsRTL')
    .addToUi();
}

function setupSheetsRTL() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetsConfig = {
	    'التحضير اليومي': ["وقت الحفظ", "النطاق", "القطاع", "الفترة", "التاريخ والوقت", "كبير المسعفين", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4", "الوحدات التشغيلية", "مقدمي الخدمة", "الموظفين", "المتطوعين", "المركبات", "القولف", "الراجلة", "الملاحظات"],
    'تسليم المناوبة': ["وقت الحفظ", "القطاع", "نوع المناوبة", "التاريخ", "الوقت من", "الوقت إلى", "كبير المسعفين المسلم", "كبير المسعفين المستلم", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4", "متوسط زمن الاستجابة", "متوسط زمن استجابة ECHO", "إجمالي البلاغات", "عدد الفرق الفعالة", "عدد الفرق المعتمدة", "أحداث طارئة", "M-حادث جسيم", "E-الموقع", "T-نوع الحادث", "H-المخاطر", "A-الوصول", "N-الإصابات", "E-الخدمات", "ملاحظات ميثان", "عدد مركبات الإسعاف", "عدد القولف", "عدد الاستجابة النوعية", "عدد فرق التدخل السريع", "العاملة", "الاحتياط", "الخارج عن الخدمة", "بلاغات الدعم اللوجستي", "البلاغات المفتوحة", "مواقع الانتشار", "الوحدات المتعطلة ومواقعها", "نداء الفرقة 1", "توقيت العطل 1", "نوع العطل 1", "الإجراء المتبع 1", "العودة للخدمة 1", "لوحة المركبة 1", "نداء الفرقة 2", "توقيت العطل 2", "نوع العطل 2", "الإجراء المتبع 2", "العودة للخدمة 2", "لوحة المركبة 2", "نداء الفرقة 3", "توقيت العطل 3", "نوع العطل 3", "الإجراء المتبع 3", "العودة للخدمة 3", "لوحة المركبة 3", "التحذيرات الجوية", "التحذيرات الأمنية", "مواقع خطرة", "إصابات العاملين", "إحاطات أخرى", "ملخص الأحداث", "ملخص الموارد المطلوبة وتوزيعها", "ملاحظات عامة عن المناوبة"],
    'العهد الشخصية للقطاعات': ["وقت الحفظ", "القطاع", "التاريخ", "فترة المناوبة", "كبير المسعفين", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4", "عدد جهاز لوكس", "حالة جهاز لوكس", "ملاحظات جهاز لوكس", "عدد جهاز ميندري", "حالة جهاز ميندري", "ملاحظات جهاز ميندري", "عدد جهاز لايف باك", "حالة جهاز لايف باك", "ملاحظات جهاز لايف باك", "عدد جهاز اللاسلكي", "حالة جهاز اللاسلكي", "ملاحظات جهاز اللاسلكي", "عدد جهاز لوحي (تابلت)", "حالة جهاز لوحي (تابلت)", "ملاحظات جهاز لوحي (تابلت)", "عدد جهاز قياس العلامات الحيوية", "حالة جهاز قياس العلامات الحيوية", "ملاحظات جهاز قياس العلامات الحيوية"],
    'الخزن الاستراتيجي': ["وقت الحفظ", "التاريخ", "الوقت", "القائم بالتشييك", "موقع الخزن", "هل يوجد نقص طبي", "النقص الطبية"],
    'رسائل ميثان': ["وقت الحفظ", "القطاع", "اسم المبلغ", "رقم التواصل", "M - حادث جسيم", "E - الموقع", "T - نوع الحادث", "H - المخاطر", "A - الوصول والمغادرة", "N - الإصابات", "E - الخدمات الإسعافية المطلوبة", "ملاحظات إضافية"],
    'خطة الدعم': ["وقت الحفظ", "التاريخ", "الوقت", "عدد الفرق", "نوع التدعيم", "وقت الحضور", "اسم مدخل البيانات", "الملاحظات", "القطاع المدعم منه", "القطاع المدعم له", "النطاق المدعم منه", "النطاق المدعم له"],
    'خطة الانتشار': ["وقت الحفظ", "القطاع", "التاريخ", "الوقت", "اسم مدخل البيانات", "صفة مدخل البيانات", "اسم كبير المسعفين المناوب", "أسماء المساعدين", "الرمز", "نوع الآلية", "مناوبة النقطة", "وقت البداية", "وقت النهاية", "الحالة", "عدد الفرق الفعلي", "Latitude", "Longitude", "رابط النقطة", "نوع التدعيم", "جهة التدعيم", "ملاحظة السجل", "ملاحظات عامة"]
  };
  
  Object.keys(sheetsConfig).forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    sheet.setRightToLeft(true);
    sheet.clearContents();
    sheet.getRange(1, 1, 1, sheetsConfig[name].length).setValues([sheetsConfig[name]]);
    sheet.getRange(1, 1, 1, sheetsConfig[name].length).setFontWeight("bold").setBackground("#f3f3f3");
    sheet.setFrozenRows(1);
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let data = {};
    
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        const decoded = decodeURIComponent(e.postData.contents);
        const pairs = decoded.split('&');
        pairs.forEach(pair => {
          const [key, value] = pair.split('=');
          if (key) data[key] = value ? value.replace(/\+/g, ' ') : "";
        });
      }
    } else if (e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    }

    const action = data.action;
    const actionToSheet = {
      'submitDailyPreparation': 'التحضير اليومي',
      'submitHandover': 'تسليم المناوبة',
      'submitPersonalEquipmentUnits': 'العهد الشخصية للقطاعات',
      'submitStrategicStock': 'الخزن الاستراتيجي',
      'submitMethane': 'رسائل ميثان',
      'submitSupportPlan': 'خطة الدعم',
      'submitDeploymentPlan': 'خطة الانتشار'
    };

    const sheetName = actionToSheet[action];
    if (!sheetName) throw new Error('Action not recognized: ' + action);

    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) throw new Error('Sheet not found: ' + sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const timestamp = new Date().toLocaleString("ar-SA", { timeZone: "Asia/Riyadh" });

    // مطابقة البيانات مع الأعمدة بدقة متناهية
    const rowData = headers.map(header => {
      if (header === "وقت الحفظ") return timestamp;
      
      // محاولة إيجاد القيمة في البيانات المرسلة باستخدام المسميات الموحدة
      let val = data[header];
      
      // إذا لم توجد، نجرب البحث عن مفاتيح بديلة (للتوافق مع HTML)
      if (val === undefined || val === "") {
        const mapping = {
          "كبير المسعفين المسلم": data["handover_sender"] || data["كبير المسعفين المسلم"],
          "كبير المسعفين المستلم": data["handover_receiver"] || data["كبير المسعفين المستلم"],
          "مساعد 1": data["handover_assistant1"] || data["pe_units_assistant1"] || data["assistant1"] || data["مساعد 1"],
          "مساعد 2": data["handover_assistant2"] || data["pe_units_assistant2"] || data["assistant2"] || data["مساعد 2"],
          "مساعد 3": data["handover_assistant3"] || data["pe_units_assistant3"] || data["assistant3"] || data["مساعد 3"],
          "مساعد 4": data["handover_assistant4"] || data["pe_units_assistant4"] || data["assistant4"] || data["مساعد 4"],
          "M-حادث جسيم": data["h_methane_major"] || data["M-حادث جسيم"],
          "E-الموقع": data["h_methane_location"] || data["E-الموقع"],
          "T-نوع الحادث": data["h_methane_type"] || data["T-نوع الحادث"],
          "H-المخاطر": data["h_methane_hazards"] || data["H-المخاطر"],
          "A-الوصول": data["h_methane_access"] || data["A-الوصول"],
          "N-الإصابات": data["h_methane_number"] || data["N-الإصابات"],
          "E-الخدمات": data["h_methane_emergency"] || data["E-الخدمات"],
          "ملاحظات ميثان": data["h_methane_notes"] || data["ملاحظات ميثان"],
          "اسم مدخل البيانات": data["deploy_lead_name"] || data["support_entry_name"] || data["اسم مدخل البيانات"],
          "صفة مدخل البيانات": data["deploy_role"] || data["صفة مدخل البيانات"],
          "اسم كبير المسعفين المناوب": data["deploy_current_lead"] || data["اسم كبير المسعفين المناوب"],
          "أسماء المساعدين": data["deploy_assistants_auto"] || data["أسماء المساعدين"],
          "الالقطاع": data["القطاع"] || data["sector"] // تصحيح خطأ مطبعي محتمل في الشيت
        };
        val = mapping[header];
      }
      
      return val !== undefined ? val : "";
    });

    sheet.appendRow(rowData);

    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const action = e.parameter.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  try {
    if (action === 'getDeployment') {
      const sheet = ss.getSheetByName('خطة الانتشار');
      return createJsonResponse(getSheetDataAsJson(sheet));
    }
    
    if (action === 'getSupport') {
      const sheet = ss.getSheetByName('خطة الدعم');
      return createJsonResponse({data: getSheetDataAsJson(sheet)});
    }
  
    if (action === 'getDailyStats') {
      const sheet = ss.getSheetByName('التحضير اليومي');
      return createJsonResponse(getSheetDataAsJson(sheet));
    }
  } catch (err) {
    return createJsonResponse({ "error": err.toString() });
  }

  return ContentService.createTextOutput("Platform Active - v3.2");
}

function getSheetDataAsJson(sheet) {
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data.shift();
  return data.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
