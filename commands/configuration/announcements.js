const a15_0x544c=['GREEN','constructor','MANAGE_GUILD','announcements\x20--disable','announcementsDisable','test','Command','apply','compile','exports','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Bastion\x27s\x20Announcements\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Announcement\x20Channel\x20that\x20will\x20receive\x20the\x20announcement\x20broadcasts\x20sent\x20by\x20the\x20bot\x20owners\x20using\x20the\x20`announce`\x20command.','getString','announcements','return\x20/\x22\x20+\x20this\x20+\x20\x22/','@bastion/tesseract','announcementsChannelId','document','guild','locale','RED','disable','client','send','channel','announcementsEnable','Constants','exec'];(function(_0x44f8c9,_0x544cb1){const _0x50671d=function(_0x335e97){while(--_0x335e97){_0x44f8c9['push'](_0x44f8c9['shift']());}};const _0xa593c0=function(){const _0x3f02d1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x779ca0,_0x2558d8,_0x5564a8,_0x2fa6fa){_0x2fa6fa=_0x2fa6fa||{};let _0x35dca4=_0x2558d8+'='+_0x5564a8;let _0xb44f34=0x0;for(let _0x3fe824=0x0,_0x8f1dbf=_0x779ca0['length'];_0x3fe824<_0x8f1dbf;_0x3fe824++){const _0x1a63c2=_0x779ca0[_0x3fe824];_0x35dca4+=';\x20'+_0x1a63c2;const _0x2e6470=_0x779ca0[_0x1a63c2];_0x779ca0['push'](_0x2e6470);_0x8f1dbf=_0x779ca0['length'];if(_0x2e6470!==!![]){_0x35dca4+='='+_0x2e6470;}}_0x2fa6fa['cookie']=_0x35dca4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14ca57,_0x3fa862){_0x14ca57=_0x14ca57||function(_0x7313dc){return _0x7313dc;};const _0x5a827d=_0x14ca57(new RegExp('(?:^|;\x20)'+_0x3fa862['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x89900c=function(_0x50ea30,_0x37ee99){_0x50ea30(++_0x37ee99);};_0x89900c(_0x50671d,_0x544cb1);return _0x5a827d?decodeURIComponent(_0x5a827d[0x1]):undefined;}};const _0x45708b=function(){const _0x836c9f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x836c9f['test'](_0x3f02d1['removeCookie']['toString']());};_0x3f02d1['updateCookie']=_0x45708b;let _0x356bd2='';const _0x145d56=_0x3f02d1['updateCookie']();if(!_0x145d56){_0x3f02d1['setCookie'](['*'],'counter',0x1);}else if(_0x145d56){_0x356bd2=_0x3f02d1['getCookie'](null,'counter');}else{_0x3f02d1['removeCookie']();}};_0xa593c0();}(a15_0x544c,0x186));const a15_0x5067=function(_0x44f8c9,_0x544cb1){_0x44f8c9=_0x44f8c9-0x0;let _0x50671d=a15_0x544c[_0x44f8c9];return _0x50671d;};const a15_0x3f02d1=function(){let _0x2ce61d=!![];return function(_0x383ae3,_0x552b8d){const _0x37030b=_0x2ce61d?function(){if(_0x552b8d){const _0x9225f8=_0x552b8d[a15_0x5067('0x16')](_0x383ae3,arguments);_0x552b8d=null;return _0x9225f8;}}:function(){};_0x2ce61d=![];return _0x37030b;};}();const a15_0x335e97=a15_0x3f02d1(this,function(){const _0x599ffd=function(){const _0x5f46cc=_0x599ffd[a15_0x5067('0x10')](a15_0x5067('0x1'))()[a15_0x5067('0x17')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5f46cc[a15_0x5067('0x14')](a15_0x335e97);};return _0x599ffd();});a15_0x335e97();'use strict';const tesseract_1=require(a15_0x5067('0x2'));module[a15_0x5067('0x18')]=class Announcements extends tesseract_1[a15_0x5067('0x15')]{constructor(){super(a15_0x5067('0x0'),{'description':a15_0x5067('0x19'),'triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':[a15_0x5067('0x8')]},'scope':a15_0x5067('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a15_0x5067('0x11')],'syntax':['announcements',a15_0x5067('0x12')]});this[a15_0x5067('0xe')]=async(_0x179562,_0x3dfb22)=>{const _0x5b7b60=_0x179562['guild'];if(_0x3dfb22[a15_0x5067('0x8')]){_0x5b7b60[a15_0x5067('0x4')]['announcementsChannelId']=undefined;delete _0x5b7b60['document'][a15_0x5067('0x3')];}else{_0x5b7b60[a15_0x5067('0x4')][a15_0x5067('0x3')]=_0x179562[a15_0x5067('0xb')]['id'];}await _0x5b7b60[a15_0x5067('0x4')]['save']();await _0x179562[a15_0x5067('0xb')][a15_0x5067('0xa')]({'embed':{'color':_0x5b7b60[a15_0x5067('0x4')]['announcementsChannelId']?tesseract_1['Constants']['COLORS'][a15_0x5067('0xf')]:tesseract_1[a15_0x5067('0xd')]['COLORS'][a15_0x5067('0x7')],'description':this[a15_0x5067('0x9')][a15_0x5067('0x6')][a15_0x5067('0x1a')](_0x179562['guild'][a15_0x5067('0x4')]['language'],'info',_0x5b7b60[a15_0x5067('0x4')][a15_0x5067('0x3')]?a15_0x5067('0xc'):a15_0x5067('0x13'),_0x179562['author']['tag'])}})['catch'](()=>{});};}};