const a6_0x3193=['GREEN','Constants','exec','test','../../models/Config','compile','exports','Direct\x20Messages\x20Relay','return\x20/\x22\x20+\x20this\x20+\x20\x22/','client','save','Command','relayDirectMessages','document','guild','tag','relayDMs','RED','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','directMessagesRelayDisable','COLORS','user','info'];(function(_0x220414,_0x319383){const _0x471e4b=function(_0x5bbd4a){while(--_0x5bbd4a){_0x220414['push'](_0x220414['shift']());}};const _0x334d99=function(){const _0x32b080={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1ccaf0,_0x25c524,_0x2e52c6,_0x1ff1b2){_0x1ff1b2=_0x1ff1b2||{};let _0x5b989c=_0x25c524+'='+_0x2e52c6;let _0x2a46d4=0x0;for(let _0x2c4d49=0x0,_0x99cebd=_0x1ccaf0['length'];_0x2c4d49<_0x99cebd;_0x2c4d49++){const _0x3a3ff9=_0x1ccaf0[_0x2c4d49];_0x5b989c+=';\x20'+_0x3a3ff9;const _0x5f3614=_0x1ccaf0[_0x3a3ff9];_0x1ccaf0['push'](_0x5f3614);_0x99cebd=_0x1ccaf0['length'];if(_0x5f3614!==!![]){_0x5b989c+='='+_0x5f3614;}}_0x1ff1b2['cookie']=_0x5b989c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37bdf7,_0x868513){_0x37bdf7=_0x37bdf7||function(_0x56d90c){return _0x56d90c;};const _0x450bab=_0x37bdf7(new RegExp('(?:^|;\x20)'+_0x868513['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4a290f=function(_0x2e8600,_0x385594){_0x2e8600(++_0x385594);};_0x4a290f(_0x471e4b,_0x319383);return _0x450bab?decodeURIComponent(_0x450bab[0x1]):undefined;}};const _0x3152f4=function(){const _0x142e22=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x142e22['test'](_0x32b080['removeCookie']['toString']());};_0x32b080['updateCookie']=_0x3152f4;let _0x22a920='';const _0x19c884=_0x32b080['updateCookie']();if(!_0x19c884){_0x32b080['setCookie'](['*'],'counter',0x1);}else if(_0x19c884){_0x22a920=_0x32b080['getCookie'](null,'counter');}else{_0x32b080['removeCookie']();}};_0x334d99();}(a6_0x3193,0xf3));const a6_0x471e=function(_0x220414,_0x319383){_0x220414=_0x220414-0x0;let _0x471e4b=a6_0x3193[_0x220414];return _0x471e4b;};const a6_0x32b080=function(){let _0xcfa72f=!![];return function(_0x48f671,_0x1214f7){const _0x6337c0=_0xcfa72f?function(){if(_0x1214f7){const _0x5c3805=_0x1214f7[a6_0x471e('0x0')](_0x48f671,arguments);_0x1214f7=null;return _0x5c3805;}}:function(){};_0xcfa72f=![];return _0x6337c0;};}();const a6_0x5bbd4a=a6_0x32b080(this,function(){const _0x130b4b=function(){const _0x371bc0=_0x130b4b[a6_0x471e('0x2')](a6_0x471e('0xf'))()[a6_0x471e('0xc')](a6_0x471e('0x1'));return!_0x371bc0[a6_0x471e('0xa')](a6_0x5bbd4a);};return _0x130b4b();});a6_0x5bbd4a();'use strict';const tesseract_1=require('@bastion/tesseract');const Config_1=require(a6_0x471e('0xb'));module[a6_0x471e('0xd')]=class RelayDirectMessages extends tesseract_1[a6_0x471e('0x12')]{constructor(){super(a6_0x471e('0x13'),{'description':'It\x20allows\x20you\x20to\x20toggle\x20Bastion\x27s\x20Direct\x20Message\x20Relay.\x20If\x20enabled,\x20Bastion\x20will\x20relay\x20all\x20direct\x20messages\x20to\x20the\x20bot\x20owners.','triggers':[a6_0x471e('0x17')],'arguments':{},'scope':a6_0x471e('0x15'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this[a6_0x471e('0x9')]=async _0x5916fc=>{const _0x343989=await Config_1['default']['findById'](this[a6_0x471e('0x10')][a6_0x471e('0x5')]['id']);_0x343989[a6_0x471e('0x13')]=_0x343989[a6_0x471e('0x13')]?undefined:!![];await _0x343989[a6_0x471e('0x11')]();await _0x5916fc['channel']['send']({'embed':{'color':_0x343989[a6_0x471e('0x13')]?tesseract_1['Constants'][a6_0x471e('0x4')][a6_0x471e('0x7')]:tesseract_1[a6_0x471e('0x8')][a6_0x471e('0x4')][a6_0x471e('0x18')],'title':a6_0x471e('0xe'),'description':this[a6_0x471e('0x10')]['locale']['getString'](_0x5916fc[a6_0x471e('0x15')][a6_0x471e('0x14')]['language'],a6_0x471e('0x6'),_0x343989['relayDirectMessages']?'directMessagesRelayEnable':a6_0x471e('0x3'),_0x5916fc['author'][a6_0x471e('0x16')])}})['catch'](()=>{});};}};