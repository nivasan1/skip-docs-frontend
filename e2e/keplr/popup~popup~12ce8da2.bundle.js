(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1432:function(i,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return t}));function r(i,e,o,r){return new(o||(o=Promise))((function(t,n){function a(i){try{b(r.next(i))}catch(i){n(i)}}function s(i){try{b(r.throw(i))}catch(i){n(i)}}function b(i){var e;i.done?t(i.value):(e=i.value,e instanceof o?e:new o((function(i){i(e)}))).then(a,s)}b((r=r.apply(i,e||[])).next())}))}function t(i,e){var o,r,t,n,a={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(t=2&n[0]?r.return:n[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,n[1])).done)return t;switch(r=0,t&&(n=[2&n[0],t.value]),n[0]){case 0:case 1:t=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(t=a.trys,(t=t.length>0&&t[t.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!t||n[1]>t[0]&&n[1]<t[3])){a.label=n[1];break}if(6===n[0]&&a.label<t[1]){a.label=t[1],t=n;break}if(t&&a.label<t[2]){a.label=t[2],a.ops.push(n);break}t[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(i,a)}catch(i){n=[6,i],r=0}finally{o=t=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}}},1453:function(i,e,o){"use strict";(function(i,r){o.d(e,"a",(function(){return t})),o.d(e,"b",(function(){return n}));o(1432);function t(){return"object"==typeof window&&void 0!==(null===window||void 0===window?void 0:window.document)}var n=function(){var i;if(t()){var e=window,o=Array;if(void 0!==e.Prototype&&void 0!==(null===(i=o.prototype)||void 0===i?void 0:i.toJSON))return delete o.prototype.toJSON,!0}return!1}}).call(this,o(26),o(15))},1621:function(i,e,o){var r;!function(t,n){"use strict";var a="model",s="name",b="type",w="vendor",l="version",c="mobile",u="tablet",d="smarttv",p=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},m=function(i,e){return"string"==typeof i&&-1!==f(e).indexOf(f(i))},f=function(i){return i.toLowerCase()},h=function(i,e){if("string"==typeof i)return i=i.replace(/^\s+|\s+$/g,""),void 0===e?i:i.substring(0,255)},v=function(i,e){for(var o,r,t,n,a,s,b=0;b<e.length&&!a;){var w=e[b],l=e[b+1];for(o=r=0;o<w.length&&!a;)if(a=w[o++].exec(i))for(t=0;t<l.length;t++)s=a[++r],"object"==typeof(n=l[t])&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,s):this[n[0]]=n[1]:3==n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=s?s.replace(n[1],n[2]):void 0:this[n[0]]=s?n[1].call(this,s,n[2]):void 0:4==n.length&&(this[n[0]]=s?n[3].call(this,s.replace(n[1],n[2])):void 0):this[n]=s||void 0;b+=2}},g=function(i,e){for(var o in e)if("object"==typeof e[o]&&e[o].length>0){for(var r=0;r<e[o].length;r++)if(m(e[o][r],i))return"?"===o?void 0:o}else if(m(e[o],i))return"?"===o?void 0:o;return i},x={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},k={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[l,[s,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[l,[s,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[s,l],[/opios[\/ ]+([\w\.]+)/i],[l,[s,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[l,[s,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[s,l],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[l,[s,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[l,[s,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[l,[s,"WeChat"]],[/konqueror\/([\w\.]+)/i],[l,[s,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[l,[s,"IE"]],[/yabrowser\/([\w\.]+)/i],[l,[s,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[s,/(.+)/,"$1 Secure Browser"],l],[/\bfocus\/([\w\.]+)/i],[l,[s,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[l,[s,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[l,[s,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[l,[s,"Dolphin"]],[/coast\/([\w\.]+)/i],[l,[s,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[l,[s,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[l,[s,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[s,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[s,/(.+)/,"$1 Browser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],l],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[s,l],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[s],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[s,"Facebook"],l],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[s,l],[/\bgsa\/([\w\.]+) .*safari\//i],[l,[s,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[l,[s,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[s,"Chrome WebView"],l],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[l,[s,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[s,l],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[l,[s,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[l,s],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[s,[l,g,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[s,l],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[s,"Netscape"],l],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[l,[s,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[s,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",f]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[["architecture","arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[["architecture","armhf"]],[/windows (ce|mobile); ppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[["architecture",/ower/,"",f]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[["architecture",f]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[w,"Samsung"],[b,u]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[w,"Samsung"],[b,c]],[/((ipod|iphone)\d+,\d+)/i],[a,[w,"Apple"],[b,c]],[/(ipad\d+,\d+)/i],[a,[w,"Apple"],[b,u]],[/\((ip(?:hone|od)[\w ]*);/i],[a,[w,"Apple"],[b,c]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[w,"Apple"],[b,u]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[w,"Huawei"],[b,u]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[a,[w,"Huawei"],[b,c]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[w,"Xiaomi"],[b,c]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[w,"Xiaomi"],[b,u]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[a,[w,"OPPO"],[b,c]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[w,"Vivo"],[b,c]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[w,"Realme"],[b,c]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[w,"Motorola"],[b,c]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[w,"Motorola"],[b,u]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[w,"LG"],[b,u]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[w,"LG"],[b,c]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[w,"Lenovo"],[b,u]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[w,"Nokia"],[b,c]],[/(pixel c)\b/i],[a,[w,"Google"],[b,u]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[w,"Google"],[b,c]],[/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[w,"Sony"],[b,c]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[w,"Sony"],[b,u]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[w,"OnePlus"],[b,c]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[w,"Amazon"],[b,u]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[w,"Amazon"],[b,c]],[/(playbook);[-\w\),; ]+(rim)/i],[a,w,[b,u]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[w,"BlackBerry"],[b,c]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[w,"ASUS"],[b,u]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[w,"ASUS"],[b,c]],[/(nexus 9)/i],[a,[w,"HTC"],[b,u]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[w,[a,/_/g," "],[b,c]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[w,"Acer"],[b,u]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[w,"Meizu"],[b,c]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[w,"Sharp"],[b,c]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,a,[b,c]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,a,[b,u]],[/(surface duo)/i],[a,[w,"Microsoft"],[b,u]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[w,"Fairphone"],[b,c]],[/(u304aa)/i],[a,[w,"AT&T"],[b,c]],[/\bsie-(\w*)/i],[a,[w,"Siemens"],[b,c]],[/\b(rct\w+) b/i],[a,[w,"RCA"],[b,u]],[/\b(venue[\d ]{2,7}) b/i],[a,[w,"Dell"],[b,u]],[/\b(q(?:mv|ta)\w+) b/i],[a,[w,"Verizon"],[b,u]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[w,"Barnes & Noble"],[b,u]],[/\b(tm\d{3}\w+) b/i],[a,[w,"NuVision"],[b,u]],[/\b(k88) b/i],[a,[w,"ZTE"],[b,u]],[/\b(nx\d{3}j) b/i],[a,[w,"ZTE"],[b,c]],[/\b(gen\d{3}) b.+49h/i],[a,[w,"Swiss"],[b,c]],[/\b(zur\d{3}) b/i],[a,[w,"Swiss"],[b,u]],[/\b((zeki)?tb.*\b) b/i],[a,[w,"Zeki"],[b,u]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],a,[b,u]],[/\b(ns-?\w{0,9}) b/i],[a,[w,"Insignia"],[b,u]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[w,"NextBook"],[b,u]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],a,[b,c]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],a,[b,c]],[/\b(ph-1) /i],[a,[w,"Essential"],[b,c]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[w,"Envizen"],[b,u]],[/\b(trio[-\w\. ]+) b/i],[a,[w,"MachSpeed"],[b,u]],[/\btu_(1491) b/i],[a,[w,"Rotor"],[b,u]],[/(shield[\w ]+) b/i],[a,[w,"Nvidia"],[b,u]],[/(sprint) (\w+)/i],[w,a,[b,c]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[w,"Microsoft"],[b,c]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[w,"Zebra"],[b,u]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[w,"Zebra"],[b,c]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,a,[b,"console"]],[/droid.+; (shield) bui/i],[a,[w,"Nvidia"],[b,"console"]],[/(playstation [345portablevi]+)/i],[a,[w,"Sony"],[b,"console"]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[w,"Microsoft"],[b,"console"]],[/smart-tv.+(samsung)/i],[w,[b,d]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[w,"Samsung"],[b,d]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,"LG"],[b,d]],[/(apple) ?tv/i],[w,[a,"Apple TV"],[b,d]],[/crkey/i],[[a,"Chromecast"],[w,"Google"],[b,d]],[/droid.+aft(\w)( bui|\))/i],[a,[w,"Amazon"],[b,d]],[/\(dtv[\);].+(aquos)/i],[a,[w,"Sharp"],[b,d]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[w,h],[a,h],[b,d]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,d]],[/((pebble))app/i],[w,a,[b,"wearable"]],[/droid.+; (glass) \d/i],[a,[w,"Google"],[b,"wearable"]],[/droid.+; (wt63?0{2,3})\)/i],[a,[w,"Zebra"],[b,"wearable"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[b,"embedded"]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[b,c]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[b,u]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,u]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,c]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[l,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[l,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[s,l],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[l,s]],os:[[/microsoft (windows) (vista|xp)/i],[s,l],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[s,[l,g,x]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[s,"Windows"],[l,g,x]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[l,/_/g,"."],[s,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[s,"Mac OS"],[l,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[l,s],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[s,l],[/\(bb(10);/i],[l,[s,"BlackBerry"]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[l,[s,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[l,[s,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[l,[s,"webOS"]],[/crkey\/([\d\.]+)/i],[l,[s,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[s,"Chromium OS"],l],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[s,l],[/(sunos) ?([\w\.\d]*)/i],[[s,"Solaris"],l],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[s,l]]},y=function(i,e){if("object"==typeof i&&(e=i,i=void 0),!(this instanceof y))return new y(i,e).getResult();var o=i||(void 0!==t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),r=e?function(i,e){var o={};for(var r in i)e[r]&&e[r].length%2==0?o[r]=e[r].concat(i[r]):o[r]=i[r];return o}(k,e):k;return this.getBrowser=function(){var i,e={};return e[s]=void 0,e[l]=void 0,v.call(e,o,r.browser),e.major="string"==typeof(i=e.version)?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0,e},this.getCPU=function(){var i={architecture:void 0};return v.call(i,o,r.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return v.call(i,o,r.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return v.call(i,o,r.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return v.call(i,o,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o="string"==typeof i&&i.length>255?h(i,255):i,this},this.setUA(o),this};y.VERSION="0.7.28",y.BROWSER=p([s,l,"major"]),y.CPU=p(["architecture"]),y.DEVICE=p([a,w,b,"console",c,d,u,"wearable","embedded"]),y.ENGINE=y.OS=p([s,l]),void 0!==e?(void 0!==i&&i.exports&&(e=i.exports=y),e.UAParser=y):o(629)?void 0===(r=function(){return y}.call(e,o,e,i))||(i.exports=r):void 0!==t&&(t.UAParser=y);var S=void 0!==t&&(t.jQuery||t.Zepto);if(S&&!S.ua){var _=new y;S.ua=_.getResult(),S.ua.get=function(){return _.getUA()},S.ua.set=function(i){_.setUA(i);var e=_.getResult();for(var o in e)S.ua[o]=e[o]}}}("object"==typeof window?window:this)},962:function(i,e){function o(i,e,o){"use strict";this.alias=[],this.prob=[],this.outcomes=e||this.indexedOutcomes(i.length),this.rng=o||Math.random,this.precomputeAlias(i)}o.prototype.next=function(i){"use strict";var e=i||1,o=[],r=0;do{var t=Math.floor(this.rng()*this.prob.length);o[r]=this.outcomes[this.rng()<this.prob[t]?t:this.alias[t]]}while(++r<e);return e>1?o:o[0]},o.prototype.precomputeAlias=function(i){"use strict";var e,o,r,t=i.length,n=0,a=0,s=0,b=[],w=[],l=[];for(o=0;o<t;++o){if(i[o]<0)throw"Probability must be a positive: p["+o+"]="+i[o];n+=i[o]}if(0===n)throw"Probability cannot be zero.";for(o=0;o<t;++o)b[o]=i[o]*t/n;for(o=t-1;o>=0;--o)b[o]<1?w[a++]=o:l[s++]=o;for(;a&&s;)r=w[--a],e=l[--s],this.prob[r]=b[r],this.alias[r]=e,b[e]=b[e]+b[r]-1,b[e]<1?w[a++]=e:l[s++]=e;for(;s;)this.prob[l[--s]]=1;for(;a;)this.prob[w[--a]]=1},o.prototype.indexedOutcomes=function(i){"use strict";for(var e=[],o=0;o<i;o++)e[o]=o;return e},o.prototype.randomInt=function(i,e){"use strict";return Math.floor(this.rng()*(e-i))+i},i.exports=function(i,e,r){"use strict";return new o(i,e,r)}}}]);