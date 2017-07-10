const fsSync = require('fs-sync'),
parser       = require('xml2json'),

utils        = {};

utils.mapXlsx = (columns, rows) => {
  var map = {};
  for (var i = 0; i < rows.length; i++) {
    map[columns[i]] = rows[i]
  }
  return map;
}

utils.parseXml = (xmlFile) => {
  var file = fsSync.read(xmlFile),
  parsed = parser.toJson(file);
  return JSON.parse(parsed);
}

module.exports = utils;