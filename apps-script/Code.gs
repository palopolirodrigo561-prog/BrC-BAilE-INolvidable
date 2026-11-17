// Guarda las firmas del libro en una hoja de Google Sheets.
// Cada firma es una fila: fecha + código. Para borrar una firma, borrá su fila.
var HOJA = 'Firmas';

function hoja_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName(HOJA);
  if (!s) { s = ss.insertSheet(HOJA); s.appendRow(['fecha', 'codigo']); }
  return s;
}

// El libro pide la lista de firmas.
function doGet() {
  var filas = hoja_().getDataRange().getValues().slice(1);
  var codigos = filas.map(function (f) { return String(f[1]); })
                     .filter(function (c) { return c.indexOf('BRC1:') === 0; });
  return ContentService.createTextOutput(JSON.stringify(codigos))
                       .setMimeType(ContentService.MimeType.JSON);
}

// El libro manda una firma nueva.
function doPost(e) {
  var codigo = ((e && e.postData && e.postData.contents) || '').trim();
  if (codigo.indexOf('BRC1:') === 0 && codigo.length < 12000) {
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    hoja_().appendRow([new Date(), codigo]);
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}
