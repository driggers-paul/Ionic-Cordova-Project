cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-camera-preview.CameraPreview",
    "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
    "pluginId": "cordova-plugin-camera-preview",
    "clobbers": [
      "CameraPreview"
    ]
  },
  {
    "id": "branch-cordova-sdk.Branch",
    "file": "plugins/branch-cordova-sdk/src/index.js",
    "pluginId": "branch-cordova-sdk",
    "clobbers": [
      "Branch"
    ]
  },
  {
    "id": "cordova-plugin-ionic.common",
    "file": "plugins/cordova-plugin-ionic/dist/common.js",
    "pluginId": "cordova-plugin-ionic",
    "clobbers": [
      "IonicCordova"
    ]
  },
  {
    "id": "cordova-plugin-ionic.guards",
    "file": "plugins/cordova-plugin-ionic/dist/guards.js",
    "pluginId": "cordova-plugin-ionic",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-clipboard.Clipboard",
    "file": "plugins/cordova-clipboard/www/clipboard.js",
    "pluginId": "cordova-clipboard",
    "clobbers": [
      "cordova.plugins.clipboard"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  },
  {
    "id": "cordova-plugin-app-version.AppVersionPlugin",
    "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
    "pluginId": "cordova-plugin-app-version",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "cc.fovea.cordova.purchase.InAppBillingPlugin",
    "file": "plugins/cc.fovea.cordova.purchase/www/store-android.js",
    "pluginId": "cc.fovea.cordova.purchase",
    "clobbers": [
      "store"
    ]
  },
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-statusbar": "2.4.3",
  "cordova-plugin-device": "2.0.3",
  "cordova-plugin-splashscreen": "5.0.3",
  "cordova-plugin-ionic-webview": "2.5.1",
  "cordova-plugin-ionic-keyboard": "2.2.0",
  "cordova-plugin-camera-preview": "0.10.0",
  "branch-cordova-sdk": "3.2.0",
  "cordova-plugin-ionic": "5.4.4",
  "cordova-plugin-inappbrowser": "3.1.0",
  "cordova-plugin-badge": "0.8.8",
  "cordova-plugin-local-notification": "0.9.0-beta.3",
  "cordova-ios-plugin-no-export-compliance": "0.0.5",
  "cordova-clipboard": "1.3.0",
  "phonegap-plugin-barcodescanner": "8.1.0",
  "cordova-plugin-app-version": "0.1.9",
  "cc.fovea.cordova.purchase": "8.1.1",
  "cordova-plugin-firebase": "2.0.5"
};
// BOTTOM OF METADATA
});