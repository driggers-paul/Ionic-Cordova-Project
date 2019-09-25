const fs = require('fs');
const file_content = fs.readFileSync('package.json');
const content = JSON.parse(file_content);
console.log('Updating config.xml versions to ' + content.version);
const Config = require('cordova-config');
var config = new Config('config.xml');
config.setVersion(content.version);
config.setIOSBundleVersion(content.version);
const bits = content.version.split('.');
if (parseInt(bits[1]) < 10) {
    bits[1] = '0' + bits[1];
}
if (parseInt(bits[2]) < 10) {
    bits[2] = '0' + bits[2];
}
config.setAndroidVersionCode(bits.join(''));
config.write();
