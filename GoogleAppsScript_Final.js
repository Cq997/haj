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
  const sheets = ['التحضير اليومي', 'تسليم المناوبة', 'تشييك الوحدات', 'الخزن الاستراتيجي', 'رسائل ميثان', 'خطة الدعم', 'خطة الانتشار'];
  
  sheets.forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
    }
    sheet.setRightToLeft(true);
  });
  
  SpreadsheetApp.getUi().alert('تم إعداد كافة الأوراق وتفعيل اتجاه اليمين لليسار بنجاح.');
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(data.sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({success: false, message: 'الورقة غير موجودة'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    const rows = data.rows;
    if (!rows || rows.length === 0) {
      return ContentService.createTextOutput(JSON.stringify({success: false, message: 'لا توجد بيانات'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
    const newRows = rows.map(row => {
      return headers.map(header => row[header] || '');
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
  
  if (action === 'getSupport') {
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
