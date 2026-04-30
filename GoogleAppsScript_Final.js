/**
 * منصة نطاق منى - Google Apps Script
 * النسخة الكاملة والمحدثة لدعم كافة النماذج والـ RTL
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
    'التحضير اليومي': ["وقت الحفظ", "النطاق", "الالقطاع", "الفترة", "التاريخ والوقت", "كبير المسعفين", "مساعد1", "مساعد2", "مساعد3", "مساعد4", "الوحدات التشغيلية", "مقدمي الخدمة", "الموظفين", "المتطوعين", "المركبات", "القولف", "الراجلة", "مركبات التدخل السريع", "الملاحظات"],
    'تسليم المناوبة': ["وقت الحفظ", "القطاع", "نوع المناوبة", "التاريخ", "الوقت من", "الوقت إلى", "كبير المسعفين المسلم", "كبير المسعفين المستلم", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4", "متوسط زمن الاستجابة", "عدد بلاغات ECHO", "إجمالي البلاغات", "إجمالي عدد الفرق بما في ذلك التداخلية (اوفرلاب) والمدعمه", "عدد الفرق الأساسية", "أحداث طارئة", "M-حادث جسيم", "E-الموقع", "T-نوع الحادث", "H-المخاطر", "A-الوصول", "N-الإصابات", "E-الخدمات", "ملاحظات ميثان", "عدد مركبات الإسعاف", "عدد القولف", "عدد الاستجابة النوعية", "العاملة", "الاحتياط", "الخارج عن الخدمة", "بلاغات الدعم اللوجستي", "البلاغات المفتوحة", "مواقع الانتشار", "الوحدات المتعطلة ومواقعها", "نداء الفرقة 1", "توقيت العطل 1", "نوع العطل 1", "الإجراء المتبع 1", "العودة للخدمة 1", "لوحة المركبة 1", "نداء الفرقة 2", "توقيت العطل 2", "نوع العطل 2", "الإجراء المتبع 2", "العودة للخدمة 2", "لوحة المركبة 2", "نداء الفرقة 3", "توقيت العطل 3", "نوع العطل 3", "الإجراء المتبع 3", "العودة للخدمة 3", "لوحة المركبة 3", "التحذيرات الجوية", "التحذيرات الأمنية", "مواقع خطرة", "إصابات العاملين", "إحاطات أخرى", "ملخص الأحداث", "ملخص الموارد المطلوبة وتوزيعها", "ملاحظات عامة عن المناوبة", "الرسالة النهائية"],
    'نموذج العهد الشخصية للقطاعات': ["وقت الحفظ", "تاريخ التشييك", "وقت التشييك", "القطاع", "الفترة", "كبير المسعفين", "المساعدين", "جهاز لوكس", "جهاز ميندري", "جهاز لايف باك 15", "جهاز اتصال لاسلكي", "المسعف الالكتروني(تابلت)", "جهاز قياس العلامات الحيوية", "ملاحظات عامة"],
    'الخزن الاستراتيجي': ["وقت الحفظ", "تاريخ التشييك", "وقت التشييك", "القائم بالتشييك", "موقع الخزن", "هل يوجد نواقص", "النواقص الطبية", "ملاحظات"],
    'رسائل ميثان': ["وقت الحفظ", "القطاع", "اسم المبلغ", "رقم التواصل", "M - حادث جسيم", "E - الموقع", "T - نوع الحادث", "H - المخاطر", "A - الوصول والمغادرة", "N - الإصابات", "E - الخدمات الإسعافية المطلوبة", "ملاحظات إضافية", "الرسالة النهائية"],
    'خطة الدعم': ["التاريخ", "الوقت", "عدد الفرق", "نوع التدعيم", "وقت الحضور", "اسم مدخل البيانات", "الملاحظات", "القطاع المدعم منه", "القطاع المدعم له", "النطاق المدعم منه", "النطاق المدعم له"],
    'خطة الانتشار': ["الرمز", "القطاع", "نوع الآلية", "مناوبة النقطة", "عدد الفرق الفعلي", "Latitude", "Longitude", "ملاحظة السجل", "الحالة"]
  };
  
  Object.keys(sheetsConfig).forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    sheet.setRightToLeft(true);
    
    // إعداد العناوين إذا كانت الورقة فارغة
    if (sheet.getLastColumn() === 0) {
      sheet.getRange(1, 1, 1, sheetsConfig[name].length).setValues([sheetsConfig[name]]);
      sheet.getRange(1, 1, 1, sheetsConfig[name].length).setFontWeight("bold").setBackground("#f3f3f3");
    }
  });
  
  SpreadsheetApp.getUi().alert('تم إعداد كافة الأوراق وتفعيل اتجاه اليمين لليسار بنجاح.');
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheetName = data.sheetName;
    
    // تحويل الاسم القديم للجديد إذا لزم الأمر
    if (sheetName === 'تشييك الوحدات' || sheetName === 'تشييك الوحدات التشغيلية') {
      sheetName = 'نموذج العهد الشخصية للقطاعات';
    }
    
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({success: false, message: 'الورقة غير موجودة: ' + sheetName})).setMimeType(ContentService.MimeType.JSON);
    }
    
    const rows = data.rows;
    if (!rows || rows.length === 0) {
      return ContentService.createTextOutput(JSON.stringify({success: false, message: 'لا توجد بيانات'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
    const newRows = rows.map(row => {
      return headers.map(header => row[header] !== undefined ? row[header] : '');
    });
    
    sheet.getRange(sheet.getLastRow() + 1, 1, newRows.length, headers.length).setValues(newRows);
    
    return ContentService.createTextOutput(JSON.stringify({success: true, message: 'تم الحفظ بنجاح'})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success: false, message: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const action = e.parameter.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (action === 'getDeployment') {
    const sheet = ss.getSheetByName('خطة الانتشار');
    if (!sheet) return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
    
    const data = sheet.getDataRange().getValues();
    const headers = data.shift();
    const result = data.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
    
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === 'getSupport' || action === 'getSupportData') {
    const sheet = ss.getSheetByName('خطة الدعم');
    if (!sheet) return ContentService.createTextOutput(JSON.stringify({data: []})).setMimeType(ContentService.MimeType.JSON);
    
    const data = sheet.getDataRange().getValues();
    const headers = data.shift();
    const result = data.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
    
    return ContentService.createTextOutput(JSON.stringify({data: result})).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput('Invalid Action').setMimeType(ContentService.MimeType.TEXT);
}
