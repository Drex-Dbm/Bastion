const a165_0x53a4=['reactionPinning','partial','Listener','apply','catch','channel','_id','messageReactionRemove','Constants','guild','emoji','constructor','has','fetch','handleReactionPinning','value','permissionsFor','../models/Role','getDocument','@bastion/tesseract','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','unpin','handleReactionRoles','default','message','roles','member','name','map','findOne','includes','remove','LISTENER_MODE','../models/ReactionRoleGroup','parseEmoji','animated'];(function(_0x45a4b9,_0x53a4ad){const _0x20310a=function(_0x27629c){while(--_0x27629c){_0x45a4b9['push'](_0x45a4b9['shift']());}};const _0x3ecdca=function(){const _0x4a4acf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5df46f,_0x4fc1b9,_0x34cd27,_0x4a2930){_0x4a2930=_0x4a2930||{};let _0x12eb3c=_0x4fc1b9+'='+_0x34cd27;let _0x8b585d=0x0;for(let _0x2353ca=0x0,_0x4bd720=_0x5df46f['length'];_0x2353ca<_0x4bd720;_0x2353ca++){const _0x47a944=_0x5df46f[_0x2353ca];_0x12eb3c+=';\x20'+_0x47a944;const _0x16180d=_0x5df46f[_0x47a944];_0x5df46f['push'](_0x16180d);_0x4bd720=_0x5df46f['length'];if(_0x16180d!==!![]){_0x12eb3c+='='+_0x16180d;}}_0x4a2930['cookie']=_0x12eb3c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x33688c,_0xd4b424){_0x33688c=_0x33688c||function(_0x15562c){return _0x15562c;};const _0x3513b3=_0x33688c(new RegExp('(?:^|;\x20)'+_0xd4b424['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x22040c=function(_0x44f976,_0x1b3336){_0x44f976(++_0x1b3336);};_0x22040c(_0x20310a,_0x53a4ad);return _0x3513b3?decodeURIComponent(_0x3513b3[0x1]):undefined;}};const _0x7f7a64=function(){const _0x71988a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x71988a['test'](_0x4a4acf['removeCookie']['toString']());};_0x4a4acf['updateCookie']=_0x7f7a64;let _0x30dcf3='';const _0x332b4d=_0x4a4acf['updateCookie']();if(!_0x332b4d){_0x4a4acf['setCookie'](['*'],'counter',0x1);}else if(_0x332b4d){_0x30dcf3=_0x4a4acf['getCookie'](null,'counter');}else{_0x4a4acf['removeCookie']();}};_0x3ecdca();}(a165_0x53a4,0x188));const a165_0x2031=function(_0x45a4b9,_0x53a4ad){_0x45a4b9=_0x45a4b9-0x0;let _0x20310a=a165_0x53a4[_0x45a4b9];return _0x20310a;};const a165_0x4a4acf=function(){let _0xc9f8fe=!![];return function(_0x2cf62b,_0xdac236){const _0x1579f6=_0xc9f8fe?function(){if(_0xdac236){const _0x3b6679=_0xdac236[a165_0x2031('0x7')](_0x2cf62b,arguments);_0xdac236=null;return _0x3b6679;}}:function(){};_0xc9f8fe=![];return _0x1579f6;};}();const a165_0x27629c=a165_0x4a4acf(this,function(){const _0x4dddd6=function(){const _0x506383=_0x4dddd6[a165_0x2031('0xf')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a165_0x2031('0x18'));return!_0x506383['test'](a165_0x27629c);};return _0x4dddd6();});a165_0x27629c();'use strict';const tesseract_1=require(a165_0x2031('0x17'));const ReactionRoleGroup_1=require(a165_0x2031('0x1'));const Role_1=require(a165_0x2031('0x15'));const emojis=require('../utils/emojis');module['exports']=class MessageReactionRemoveListener extends tesseract_1[a165_0x2031('0x6')]{constructor(){super(a165_0x2031('0xb'),{'mode':tesseract_1[a165_0x2031('0xc')][a165_0x2031('0x0')]['ON']});this[a165_0x2031('0x12')]=async(_0x40f94d,_0x41130d)=>{if(!['📌','📍'][a165_0x2031('0x22')](_0x40f94d[a165_0x2031('0xe')][a165_0x2031('0x1f')]))return;if(!_0x40f94d[a165_0x2031('0x1c')][a165_0x2031('0x9')][a165_0x2031('0x14')](_0x41130d)[a165_0x2031('0x10')]('MANAGE_MESSAGES'))return;await _0x40f94d[a165_0x2031('0x1c')][a165_0x2031('0x19')]();};this[a165_0x2031('0x1a')]=async(_0x329457,_0x346c1c)=>{const _0x131999=await ReactionRoleGroup_1[a165_0x2031('0x1b')]['findById'](_0x329457['message']['id']);if(!_0x131999)return;const _0x17b43f=_0x329457[a165_0x2031('0xe')]['id']?'<'+(_0x329457[a165_0x2031('0xe')][a165_0x2031('0x3')]?'a':'')+':'+_0x329457[a165_0x2031('0xe')]['name']+':'+_0x329457[a165_0x2031('0xe')]['id']+'>':_0x329457[a165_0x2031('0xe')]['name'];const _0x34de42=emojis[a165_0x2031('0x2')](_0x17b43f);if(_0x34de42){const _0x3081e4=await Role_1[a165_0x2031('0x1b')][a165_0x2031('0x21')]({'$or':_0x131999[a165_0x2031('0x1d')][a165_0x2031('0x20')](_0x836456=>({'_id':_0x836456})),'guild':_0x329457[a165_0x2031('0x1c')]['guild']['id'],'emoji':_0x34de42[a165_0x2031('0x13')]});if(!_0x3081e4)return;await _0x346c1c[a165_0x2031('0x1d')][a165_0x2031('0x23')](_0x3081e4[a165_0x2031('0xa')],'Removed\x20via\x20Reaction\x20Roles');}};this['exec']=async(_0x104f02,_0xf09112)=>{if(_0x104f02[a165_0x2031('0x5')]){_0x104f02=await _0x104f02[a165_0x2031('0x11')]();}if(_0x104f02['message'][a165_0x2031('0x5')]){_0x104f02[a165_0x2031('0x1c')]=await _0x104f02['message'][a165_0x2031('0x11')]();}if(!_0x104f02[a165_0x2031('0x1c')][a165_0x2031('0xd')])return;const _0x225942=_0x104f02[a165_0x2031('0x1c')][a165_0x2031('0xd')][a165_0x2031('0x1e')](_0xf09112);this[a165_0x2031('0x1a')](_0x104f02,_0x225942)['catch'](()=>{});const _0x1696cc=await _0x104f02[a165_0x2031('0x1c')][a165_0x2031('0xd')][a165_0x2031('0x16')]();if(_0x1696cc[a165_0x2031('0x4')]){this[a165_0x2031('0x12')](_0x104f02,_0x225942)[a165_0x2031('0x8')](()=>{});}};}};