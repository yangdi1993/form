var $checkTerminal = function(){  //判断是否是移动端,并获取移动端
  let flag = false
  if (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) {
    flag = 'Android';
  } else if (navigator.userAgent.indexOf('iPhone') > -1) {
    flag = 'iOS';
  } else if (navigator.userAgent.indexOf('Windows Phone') > -1) {
    flag = 'WP';
  }
  return flag
};

// var $getMobileVersion = function(){  // 获取手机操作系统版本
//   var OSVision = '1.0';
//   var u = navigator.userAgent;
//   var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //Android
//   var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//   if (isAndroid) {
//       OSVision = navigator.userAgent.split(';')[1].match(/\d+\.\d+/g)[0];
//   }
//   if (isIOS) {
//       OSVision = navigator.userAgent.split(';')[1].match(/(\d+)_(\d+)_?(\d+)?/)[0];
//   }
//   return OSVision;
// };

var $currentBrowse = function(){  //获取当前浏览器
  var browser = {};
  var userAgent = navigator.userAgent.toLowerCase();
  var s;
  s = userAgent.match(/msie ([\d.]+)/) ? browser.ie = s[1] : s = userAgent.match(/firefox\/([\d.]+)/) ? browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s = userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(/version\/([\d.]+).*safari/)) ? browser.safari = s[1] : 0;
  var version = "";
  if (browser.ie) {
      version = 'IE ' + browser.ie;
  }
  else {
      if (browser.firefox) {
          version = 'firefox ' + browser.firefox;
      }
      else {
          if (browser.chrome) {
              version = 'chrome ' + browser.chrome;
          }
          else {
              if (browser.opera) {
                  version = 'opera ' + browser.opera;
              }
              else {
                  if (browser.safari) {
                      version = 'safari ' + browser.safari;
                  }
                  else {
                      version = '未知浏览器';
                  }
              }
          }
      }
  }
  return version;
};

var $currentPCOS = function(){  //PC端的操作系统
  var sUserAgent = navigator.userAgent;
  var isWin = (navigator.platform === "Win32") || (navigator.platform === "Windows");
  var isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
  if (isMac) return "Mac";
  var isUnix = (navigator.platform === "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
      var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
      if (isWin2K) return "Win2000";
      var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
      if (isWinXP) return "WinXP";
      var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
      if (isWin2003) return "Win2003";
      var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
      if (isWinVista) return "WinVista";
      var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
      if (isWin7) return "Win7";
      var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
      if (isWin10) return "Win10";
  }
  return "other";
};

var $currentNetwork = function(){  // 获取网络状态
  var netWork;
  // eslint-disable-next-line default-case
  switch (navigator.connection.effectiveType) {
    case 'wifi':
      netWork = 'wifi'; // wifi
      break;
    case '4g':
      netWork = '4G'; // 4g
      break;
    case '2g':
      netWork = '2G'; // 2g
      break;
    case  '3g':
      netWork = '3G'; // 3g
      break;
    case  'ethernet':
      netWork = '以太网'; // ethernet
      break;
    case  'default':
      netWork = '未知'; // 未知
      break;
  }
  return netWork;
};

export {$checkTerminal, $currentBrowse, $currentPCOS, $currentNetwork}