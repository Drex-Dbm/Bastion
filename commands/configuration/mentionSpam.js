const a25_0x403e=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exec','mentionSpam\x20--threshold\x20NUMBER','threshold','RED','apply','document','mentionSpamInfractionsDisable','compile','author','MANAGE_GUILD','Constants','save','Command','test','channel','tag','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','exports','client','mentionSpam','getString','COLORS','locale','@bastion/tesseract','guild'];(function(_0x25a852,_0x403ede){const _0x4c84da=function(_0x129d55){while(--_0x129d55){_0x25a852['push'](_0x25a852['shift']());}};const _0x586bcd=function(){const _0x4194f7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x47ce77,_0x408a7e,_0x3b7463,_0x322d50){_0x322d50=_0x322d50||{};let _0x2d4fc4=_0x408a7e+'='+_0x3b7463;let _0x263e8f=0x0;for(let _0x2e6c03=0x0,_0x980f79=_0x47ce77['length'];_0x2e6c03<_0x980f79;_0x2e6c03++){const _0x108ed9=_0x47ce77[_0x2e6c03];_0x2d4fc4+=';\x20'+_0x108ed9;const _0x4a9ef6=_0x47ce77[_0x108ed9];_0x47ce77['push'](_0x4a9ef6);_0x980f79=_0x47ce77['length'];if(_0x4a9ef6!==!![]){_0x2d4fc4+='='+_0x4a9ef6;}}_0x322d50['cookie']=_0x2d4fc4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40a88a,_0x1fcc4c){_0x40a88a=_0x40a88a||function(_0xfe834c){return _0xfe834c;};const _0x472522=_0x40a88a(new RegExp('(?:^|;\x20)'+_0x1fcc4c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x19ada4=function(_0x3d27b0,_0x2192e0){_0x3d27b0(++_0x2192e0);};_0x19ada4(_0x4c84da,_0x403ede);return _0x472522?decodeURIComponent(_0x472522[0x1]):undefined;}};const _0x562f19=function(){const _0x4957c3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4957c3['test'](_0x4194f7['removeCookie']['toString']());};_0x4194f7['updateCookie']=_0x562f19;let _0x2cf5fa='';const _0x588616=_0x4194f7['updateCookie']();if(!_0x588616){_0x4194f7['setCookie'](['*'],'counter',0x1);}else if(_0x588616){_0x2cf5fa=_0x4194f7['getCookie'](null,'counter');}else{_0x4194f7['removeCookie']();}};_0x586bcd();}(a25_0x403e,0x102));const a25_0x4c84=function(_0x25a852,_0x403ede){_0x25a852=_0x25a852-0x0;let _0x4c84da=a25_0x403e[_0x25a852];return _0x4c84da;};const a25_0x4194f7=function(){let _0x280cd0=!![];return function(_0x276167,_0xd05b6f){const _0x4faa7f=_0x280cd0?function(){if(_0xd05b6f){const _0x412836=_0xd05b6f[a25_0x4c84('0x7')](_0x276167,arguments);_0xd05b6f=null;return _0x412836;}}:function(){};_0x280cd0=![];return _0x4faa7f;};}();const a25_0x129d55=a25_0x4194f7(this,function(){const _0x420b7f=function(){const _0x58d9d4=_0x420b7f['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a25_0x4c84('0xa')](a25_0x4c84('0x2'));return!_0x58d9d4[a25_0x4c84('0x10')](a25_0x129d55);};return _0x420b7f();});a25_0x129d55();'use strict';const tesseract_1=require(a25_0x4c84('0x0'));module[a25_0x4c84('0x14')]=class MentionSpamCommand extends tesseract_1[a25_0x4c84('0xf')]{constructor(){super(a25_0x4c84('0x16'),{'description':a25_0x4c84('0x13'),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':['threshold']},'scope':a25_0x4c84('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a25_0x4c84('0xc')],'syntax':[a25_0x4c84('0x16'),a25_0x4c84('0x4')]});this[a25_0x4c84('0x3')]=async(_0x105634,_0x4bd3c0)=>{const _0x39fd06=_0x105634[a25_0x4c84('0x1')];_0x39fd06[a25_0x4c84('0x8')]['mentionSpam']={..._0x39fd06[a25_0x4c84('0x8')][a25_0x4c84('0x16')],'threshold':typeof _0x4bd3c0[a25_0x4c84('0x5')]==='number'&&_0x4bd3c0[a25_0x4c84('0x5')]>0x1?_0x4bd3c0[a25_0x4c84('0x5')]:undefined};await _0x39fd06[a25_0x4c84('0x8')][a25_0x4c84('0xe')]();await _0x105634[a25_0x4c84('0x11')]['send']({'embed':{'color':_0x39fd06[a25_0x4c84('0x8')]['mentionSpam'][a25_0x4c84('0x5')]?tesseract_1[a25_0x4c84('0xd')][a25_0x4c84('0x18')]['GREEN']:tesseract_1[a25_0x4c84('0xd')][a25_0x4c84('0x18')][a25_0x4c84('0x6')],'description':this[a25_0x4c84('0x15')][a25_0x4c84('0x19')][a25_0x4c84('0x17')](_0x105634[a25_0x4c84('0x1')]['document']['language'],'info',_0x39fd06['document'][a25_0x4c84('0x16')][a25_0x4c84('0x5')]?'mentionSpamInfractionsEnable':a25_0x4c84('0x9'),_0x105634[a25_0x4c84('0xb')][a25_0x4c84('0x12')],_0x39fd06[a25_0x4c84('0x8')][a25_0x4c84('0x16')][a25_0x4c84('0x5')])}})['catch'](()=>{});};}};