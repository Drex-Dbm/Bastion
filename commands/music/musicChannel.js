const a86_0x457d=['guild','RED','locale','resolver','name','getString','document','catch','channel','COLORS','@bastion/tesseract','../../utils/constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','music','GREEN','language','errors','Command','info','isPublicBastion','apply','musicDisabled','exports','author','voiceChannel','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20Bastion\x27s\x20Music\x20Channels.','voice','exec','musicChannelsAdd','constructor','musicChannel','musicChannel\x20--voice-channel\x20VOICE_CHANNEL_ID','save','Constants','resolveGuildChannel','client'];(function(_0x2c213a,_0x457d88){const _0x4b831b=function(_0x4ee70e){while(--_0x4ee70e){_0x2c213a['push'](_0x2c213a['shift']());}};const _0x33d1b4=function(){const _0xd0317e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5dcc7d,_0x5ba5b3,_0x1292f3,_0x545be6){_0x545be6=_0x545be6||{};let _0x31e8b1=_0x5ba5b3+'='+_0x1292f3;let _0x13d7a0=0x0;for(let _0x124026=0x0,_0x4fb731=_0x5dcc7d['length'];_0x124026<_0x4fb731;_0x124026++){const _0x238099=_0x5dcc7d[_0x124026];_0x31e8b1+=';\x20'+_0x238099;const _0x3443a1=_0x5dcc7d[_0x238099];_0x5dcc7d['push'](_0x3443a1);_0x4fb731=_0x5dcc7d['length'];if(_0x3443a1!==!![]){_0x31e8b1+='='+_0x3443a1;}}_0x545be6['cookie']=_0x31e8b1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4fd6c1,_0xdb8e0a){_0x4fd6c1=_0x4fd6c1||function(_0x421530){return _0x421530;};const _0x8a9627=_0x4fd6c1(new RegExp('(?:^|;\x20)'+_0xdb8e0a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x184d85=function(_0x3f7e2b,_0x49d1fe){_0x3f7e2b(++_0x49d1fe);};_0x184d85(_0x4b831b,_0x457d88);return _0x8a9627?decodeURIComponent(_0x8a9627[0x1]):undefined;}};const _0x160e1f=function(){const _0x1ee502=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ee502['test'](_0xd0317e['removeCookie']['toString']());};_0xd0317e['updateCookie']=_0x160e1f;let _0x35c301='';const _0x40c848=_0xd0317e['updateCookie']();if(!_0x40c848){_0xd0317e['setCookie'](['*'],'counter',0x1);}else if(_0x40c848){_0x35c301=_0xd0317e['getCookie'](null,'counter');}else{_0xd0317e['removeCookie']();}};_0x33d1b4();}(a86_0x457d,0x11d));const a86_0x4b83=function(_0x2c213a,_0x457d88){_0x2c213a=_0x2c213a-0x0;let _0x4b831b=a86_0x457d[_0x2c213a];return _0x4b831b;};const a86_0xd0317e=function(){let _0xd04368=!![];return function(_0x950a46,_0x1fb9ec){const _0x1d7df7=_0xd04368?function(){if(_0x1fb9ec){const _0xc77902=_0x1fb9ec[a86_0x4b83('0x17')](_0x950a46,arguments);_0x1fb9ec=null;return _0xc77902;}}:function(){};_0xd04368=![];return _0x1d7df7;};}();const a86_0x4ee70e=a86_0xd0317e(this,function(){const _0x370498=function(){const _0x55b03b=_0x370498[a86_0x4b83('0x20')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a86_0x4b83('0xf'));return!_0x55b03b['test'](a86_0x4ee70e);};return _0x370498();});a86_0x4ee70e();'use strict';const tesseract_1=require(a86_0x4b83('0xd'));const constants=require(a86_0x4b83('0xe'));module[a86_0x4b83('0x19')]=class MusicChannel extends tesseract_1[a86_0x4b83('0x14')]{constructor(){super(a86_0x4b83('0x21'),{'description':a86_0x4b83('0x1c'),'triggers':[],'arguments':{'string':[a86_0x4b83('0x1b')]},'scope':a86_0x4b83('0x3'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a86_0x4b83('0x22'),a86_0x4b83('0x21')]});this[a86_0x4b83('0x1e')]=async(_0x449dfe,_0x589c10)=>{const _0xb81fe6=_0x449dfe[a86_0x4b83('0x3')];if(!_0xb81fe6['document'][a86_0x4b83('0x10')]||!_0xb81fe6[a86_0x4b83('0x9')][a86_0x4b83('0x10')]['enabled']){return await _0x449dfe[a86_0x4b83('0xb')]['send']({'embed':{'color':tesseract_1[a86_0x4b83('0x0')][a86_0x4b83('0xc')][a86_0x4b83('0x4')],'description':this['client'][a86_0x4b83('0x5')][a86_0x4b83('0x8')](_0x449dfe[a86_0x4b83('0x3')][a86_0x4b83('0x9')][a86_0x4b83('0x12')],a86_0x4b83('0x13'),constants[a86_0x4b83('0x16')](_0x449dfe[a86_0x4b83('0x1a')])?'musicDisabledPublic':a86_0x4b83('0x18'))}})['catch'](()=>{});}const _0x40a005=this['client'][a86_0x4b83('0x6')][a86_0x4b83('0x1')](_0xb81fe6,_0x589c10[a86_0x4b83('0x1b')],[a86_0x4b83('0x1d')]);_0xb81fe6[a86_0x4b83('0x9')]['music']={..._0xb81fe6[a86_0x4b83('0x9')][a86_0x4b83('0x10')],'textChannelId':_0x40a005?_0x449dfe[a86_0x4b83('0xb')]['id']:undefined,'voiceChannelId':_0x40a005?_0x40a005['id']:undefined};_0xb81fe6[a86_0x4b83('0x9')][a86_0x4b83('0x23')]();await _0x449dfe['channel']['send']({'embed':{'color':_0x40a005?tesseract_1[a86_0x4b83('0x0')][a86_0x4b83('0xc')][a86_0x4b83('0x11')]:tesseract_1[a86_0x4b83('0x0')][a86_0x4b83('0xc')][a86_0x4b83('0x4')],'description':this[a86_0x4b83('0x2')][a86_0x4b83('0x5')][a86_0x4b83('0x8')](_0x449dfe[a86_0x4b83('0x3')][a86_0x4b83('0x9')][a86_0x4b83('0x12')],a86_0x4b83('0x15'),_0x40a005?a86_0x4b83('0x1f'):'musicChannelsRemove',_0x449dfe[a86_0x4b83('0x1a')]['tag'],_0x40a005?_0x449dfe[a86_0x4b83('0xb')][a86_0x4b83('0x7')]:null,_0x40a005?_0x40a005[a86_0x4b83('0x7')]:null)}})[a86_0x4b83('0xa')](()=>{});};}};