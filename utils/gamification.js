const a211_0xbae5=['__esModule','apply','MAX_EXPERIENCE','constructor','computeLevel','DEFAUL_CURRENCY_REWARD_MULTIPLIER','floor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','MAX_LEVEL','return\x20/\x22\x20+\x20this\x20+\x20\x22/','clamp','computeExperience','compile','../utils/numbers','DEFAUL_LEVELUP_MULTIPLIER','sqrt'];(function(_0xca5d2e,_0xbae5cc){const _0x1eaf09=function(_0x310b0d){while(--_0x310b0d){_0xca5d2e['push'](_0xca5d2e['shift']());}};const _0x1ccd24=function(){const _0x51bb87={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5fa512,_0x7c01e2,_0x1d4faf,_0x5a4d3c){_0x5a4d3c=_0x5a4d3c||{};let _0x48de52=_0x7c01e2+'='+_0x1d4faf;let _0x4a9917=0x0;for(let _0x4cbd34=0x0,_0x2d7f75=_0x5fa512['length'];_0x4cbd34<_0x2d7f75;_0x4cbd34++){const _0x2cac24=_0x5fa512[_0x4cbd34];_0x48de52+=';\x20'+_0x2cac24;const _0x231b64=_0x5fa512[_0x2cac24];_0x5fa512['push'](_0x231b64);_0x2d7f75=_0x5fa512['length'];if(_0x231b64!==!![]){_0x48de52+='='+_0x231b64;}}_0x5a4d3c['cookie']=_0x48de52;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2afd14,_0x43b5d0){_0x2afd14=_0x2afd14||function(_0x5573fe){return _0x5573fe;};const _0x266070=_0x2afd14(new RegExp('(?:^|;\x20)'+_0x43b5d0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x55fefa=function(_0x5c8fb2,_0x40f621){_0x5c8fb2(++_0x40f621);};_0x55fefa(_0x1eaf09,_0xbae5cc);return _0x266070?decodeURIComponent(_0x266070[0x1]):undefined;}};const _0x3d0214=function(){const _0x5794e8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5794e8['test'](_0x51bb87['removeCookie']['toString']());};_0x51bb87['updateCookie']=_0x3d0214;let _0x27ede6='';const _0x226c5c=_0x51bb87['updateCookie']();if(!_0x226c5c){_0x51bb87['setCookie'](['*'],'counter',0x1);}else if(_0x226c5c){_0x27ede6=_0x51bb87['getCookie'](null,'counter');}else{_0x51bb87['removeCookie']();}};_0x1ccd24();}(a211_0xbae5,0x99));const a211_0x1eaf=function(_0xca5d2e,_0xbae5cc){_0xca5d2e=_0xca5d2e-0x0;let _0x1eaf09=a211_0xbae5[_0xca5d2e];return _0x1eaf09;};const a211_0x51bb87=function(){let _0x9cf79=!![];return function(_0x440261,_0x4b5002){const _0x24c13d=_0x9cf79?function(){if(_0x4b5002){const _0x5daaa6=_0x4b5002[a211_0x1eaf('0x8')](_0x440261,arguments);_0x4b5002=null;return _0x5daaa6;}}:function(){};_0x9cf79=![];return _0x24c13d;};}();const a211_0x310b0d=a211_0x51bb87(this,function(){const _0x3c66ee=function(){const _0x14ced5=_0x3c66ee[a211_0x1eaf('0xa')](a211_0x1eaf('0x0'))()[a211_0x1eaf('0x3')](a211_0x1eaf('0xe'));return!_0x14ced5['test'](a211_0x310b0d);};return _0x3c66ee();});a211_0x310b0d();'use strict';Object['defineProperty'](exports,a211_0x1eaf('0x7'),{'value':!![]});exports['computeExperience']=exports[a211_0x1eaf('0xb')]=exports[a211_0x1eaf('0x9')]=exports[a211_0x1eaf('0xf')]=exports[a211_0x1eaf('0x5')]=exports[a211_0x1eaf('0xc')]=void 0x0;const numbers=require(a211_0x1eaf('0x4'));const DEFAUL_LEVELUP_MULTIPLIER=0.42;exports['DEFAUL_LEVELUP_MULTIPLIER']=DEFAUL_LEVELUP_MULTIPLIER;const DEFAUL_CURRENCY_REWARD_MULTIPLIER=0x2a;exports['DEFAUL_CURRENCY_REWARD_MULTIPLIER']=DEFAUL_CURRENCY_REWARD_MULTIPLIER;const MAX_LEVEL=0x2540be400;exports['MAX_LEVEL']=MAX_LEVEL;const computeLevel=(_0x2a73bc,_0x370284)=>{if(!_0x370284)_0x370284=DEFAUL_LEVELUP_MULTIPLIER;return numbers[a211_0x1eaf('0x1')](Math['floor'](_0x370284*Math[a211_0x1eaf('0x6')](_0x2a73bc)),MAX_LEVEL);};exports[a211_0x1eaf('0xb')]=computeLevel;const computeExperience=(_0x234b3f,_0xb61730)=>{if(!_0xb61730)_0xb61730=DEFAUL_LEVELUP_MULTIPLIER;return Math[a211_0x1eaf('0xd')](_0x234b3f/_0xb61730*(_0x234b3f/_0xb61730));};exports[a211_0x1eaf('0x2')]=computeExperience;const MAX_EXPERIENCE=_0x2be41e=>{if(!_0x2be41e)_0x2be41e=DEFAUL_LEVELUP_MULTIPLIER;return computeExperience(MAX_LEVEL,_0x2be41e);};exports[a211_0x1eaf('0x9')]=MAX_EXPERIENCE;