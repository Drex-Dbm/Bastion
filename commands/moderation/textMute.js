const a80_0x455a=['exec','COLORS','@bastion/tesseract','catch','resolver','BASTION_ERROR_TYPE','exports','user','memberUnsetTextMute','locale','Reason','member','info','document','constructor','textMute\x20--user\x20USER_ID\x20--\x20REASON','memberSetTextMute','parent','ownerID','canManage','Constants','getString','tag','textMute\x20--unset\x20--user\x20USER_ID\x20--channel\x20--\x20REASON','errors','unauthorized','client','textMute\x20--user\x20USER_ID\x20--channel\x20--\x20REASON','It\x20allows\x20you\x20to\x20text\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel\x20(or\x20category).\x20Text\x20muted\x20users\x20can\x27t\x20send\x20messages\x20in\x20the\x20channels\x20they\x20are\x20muted.','Command','../../utils/errors','guild','name','set','return\x20/\x22\x20+\x20this\x20+\x20\x22/','join','textMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','channel','test','textMute','INVALID_COMMAND_SYNTAX','send','MUTE_MEMBERS','author','apply','language'];(function(_0x57c5e3,_0x455a1b){const _0xd4b6c2=function(_0x4b9808){while(--_0x4b9808){_0x57c5e3['push'](_0x57c5e3['shift']());}};const _0x56bb04=function(){const _0x2c5400={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f42be,_0x5da383,_0x5820dd,_0x8b1702){_0x8b1702=_0x8b1702||{};let _0x18864b=_0x5da383+'='+_0x5820dd;let _0x2c8d1c=0x0;for(let _0x274b2c=0x0,_0xd3c61d=_0x3f42be['length'];_0x274b2c<_0xd3c61d;_0x274b2c++){const _0x30ba3b=_0x3f42be[_0x274b2c];_0x18864b+=';\x20'+_0x30ba3b;const _0x4bc9f3=_0x3f42be[_0x30ba3b];_0x3f42be['push'](_0x4bc9f3);_0xd3c61d=_0x3f42be['length'];if(_0x4bc9f3!==!![]){_0x18864b+='='+_0x4bc9f3;}}_0x8b1702['cookie']=_0x18864b;},'removeCookie':function(){return'dev';},'getCookie':function(_0xd5fefa,_0x49ea1c){_0xd5fefa=_0xd5fefa||function(_0x269862){return _0x269862;};const _0x2af3c4=_0xd5fefa(new RegExp('(?:^|;\x20)'+_0x49ea1c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x38be1e=function(_0x1eded9,_0x3067b9){_0x1eded9(++_0x3067b9);};_0x38be1e(_0xd4b6c2,_0x455a1b);return _0x2af3c4?decodeURIComponent(_0x2af3c4[0x1]):undefined;}};const _0x52b19c=function(){const _0x252097=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x252097['test'](_0x2c5400['removeCookie']['toString']());};_0x2c5400['updateCookie']=_0x52b19c;let _0x17b726='';const _0x4036ad=_0x2c5400['updateCookie']();if(!_0x4036ad){_0x2c5400['setCookie'](['*'],'counter',0x1);}else if(_0x4036ad){_0x17b726=_0x2c5400['getCookie'](null,'counter');}else{_0x2c5400['removeCookie']();}};_0x56bb04();}(a80_0x455a,0x1d5));const a80_0xd4b6=function(_0x57c5e3,_0x455a1b){_0x57c5e3=_0x57c5e3-0x0;let _0xd4b6c2=a80_0x455a[_0x57c5e3];return _0xd4b6c2;};const a80_0x2c5400=function(){let _0x33664c=!![];return function(_0xf5eac5,_0x29e27e){const _0x323225=_0x33664c?function(){if(_0x29e27e){const _0x365d1a=_0x29e27e[a80_0xd4b6('0x23')](_0xf5eac5,arguments);_0x29e27e=null;return _0x365d1a;}}:function(){};_0x33664c=![];return _0x323225;};}();const a80_0x4b9808=a80_0x2c5400(this,function(){const _0x352189=function(){const _0x4bb881=_0x352189[a80_0xd4b6('0x5')](a80_0xd4b6('0x19'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4bb881[a80_0xd4b6('0x1d')](a80_0x4b9808);};return _0x352189();});a80_0x4b9808();'use strict';const tesseract_1=require(a80_0xd4b6('0x27'));const errors=require(a80_0xd4b6('0x15'));module[a80_0xd4b6('0x2b')]=class TextMute extends tesseract_1[a80_0xd4b6('0x14')]{constructor(){super(a80_0xd4b6('0x1e'),{'description':a80_0xd4b6('0x13'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'channel':'c','user':'u'},'default':{'set':!![]},'boolean':[a80_0xd4b6('0x18'),'channel'],'string':[a80_0xd4b6('0x2c')]},'scope':a80_0xd4b6('0x16'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a80_0xd4b6('0x21')],'userPermissions':[a80_0xd4b6('0x21')],'syntax':[a80_0xd4b6('0x6'),a80_0xd4b6('0x12'),a80_0xd4b6('0x1b'),a80_0xd4b6('0xe')]});this[a80_0xd4b6('0x25')]=async(_0x286084,_0xcda7ef)=>{const _0x19649a=this[a80_0xd4b6('0x11')][a80_0xd4b6('0x29')]['resolveGuildMember'](_0x286084[a80_0xd4b6('0x16')],_0xcda7ef[a80_0xd4b6('0x2c')]);if(!_0x19649a)throw new errors['DiscordError'](errors[a80_0xd4b6('0x2a')][a80_0xd4b6('0x1f')],this[a80_0xd4b6('0x17')]);if(_0x286084[a80_0xd4b6('0x22')]['id']!==_0x286084[a80_0xd4b6('0x16')][a80_0xd4b6('0x9')]&&!_0x286084[a80_0xd4b6('0x2')][a80_0xd4b6('0xa')](_0x19649a)){return await _0x286084[a80_0xd4b6('0x1c')][a80_0xd4b6('0x20')]({'embed':{'color':tesseract_1[a80_0xd4b6('0xb')][a80_0xd4b6('0x26')]['RED'],'title':this[a80_0xd4b6('0x11')][a80_0xd4b6('0x0')][a80_0xd4b6('0xc')](_0x286084[a80_0xd4b6('0x16')]['document']['language'],'errors',a80_0xd4b6('0x10')),'description':this[a80_0xd4b6('0x11')][a80_0xd4b6('0x0')][a80_0xd4b6('0xc')](_0x286084[a80_0xd4b6('0x16')]['document'][a80_0xd4b6('0x24')],a80_0xd4b6('0xf'),'rolePosition',_0x286084[a80_0xd4b6('0x22')]['tag'],_0x19649a[a80_0xd4b6('0x2c')][a80_0xd4b6('0xd')])}})[a80_0xd4b6('0x28')](()=>{});}const _0x2f7d87=_0xcda7ef['_'][a80_0xd4b6('0x1a')]('\x20')||'-';const _0xbf3ee0=!_0xcda7ef['channel']&&_0x286084[a80_0xd4b6('0x1c')][a80_0xd4b6('0x8')]?_0x286084[a80_0xd4b6('0x1c')]['parent']:_0x286084[a80_0xd4b6('0x1c')];await _0xbf3ee0['updateOverwrite'](_0x19649a['id'],{'SEND_MESSAGES':_0xcda7ef[a80_0xd4b6('0x18')]?![]:null},_0x2f7d87);await _0x286084['channel'][a80_0xd4b6('0x20')]({'embed':{'color':tesseract_1[a80_0xd4b6('0xb')]['COLORS']['ORANGE'],'description':_0xcda7ef[a80_0xd4b6('0x18')]?this['client'][a80_0xd4b6('0x0')]['getString'](_0x286084['guild']['document'][a80_0xd4b6('0x24')],a80_0xd4b6('0x3'),a80_0xd4b6('0x7'),_0x286084[a80_0xd4b6('0x22')][a80_0xd4b6('0xd')],_0x19649a['user']['tag'],_0xbf3ee0['name']):this[a80_0xd4b6('0x11')]['locale'][a80_0xd4b6('0xc')](_0x286084[a80_0xd4b6('0x16')][a80_0xd4b6('0x4')]['language'],a80_0xd4b6('0x3'),a80_0xd4b6('0x2d'),_0x286084[a80_0xd4b6('0x22')][a80_0xd4b6('0xd')],_0x19649a[a80_0xd4b6('0x2c')][a80_0xd4b6('0xd')]),'fields':[{'name':a80_0xd4b6('0x1'),'value':_0x2f7d87}],'footer':{'text':_0x19649a['id']}}})[a80_0xd4b6('0x28')](()=>{});};}};