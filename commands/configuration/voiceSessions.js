const a39_0x10d9=['voice','MANAGE_CHANNELS','constructor','client','GREEN','apply','compile','exports','test','voiceSessions\x20--create','catch','../../utils/omnic','DiscordError','concat','BASTION_ERROR_TYPE','getString','default','Constants','voiceSessions','category','create','MANAGE_GUILD','➕\x20New\x20Voice\x20Channel','tag','It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','channels','voiceSessionCreate','findByIdAndUpdate','name','fetchPremiumTier','document','send','locale','../../utils/constants','Sessional\x20Channels','../../models/Guild','guild','Command','premiumVoiceSessions','categories','INVALID_COMMAND_SYNTAX','language','../../utils/errors'];(function(_0x5904f4,_0x10d9a0){const _0x321bc1=function(_0x2b7b86){while(--_0x2b7b86){_0x5904f4['push'](_0x5904f4['shift']());}};const _0x3ad53b=function(){const _0x1dc345={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5316b5,_0x492af1,_0x5e7c35,_0x2948bd){_0x2948bd=_0x2948bd||{};let _0x4a5ed0=_0x492af1+'='+_0x5e7c35;let _0x60be7c=0x0;for(let _0x11ff03=0x0,_0x411912=_0x5316b5['length'];_0x11ff03<_0x411912;_0x11ff03++){const _0x161f8c=_0x5316b5[_0x11ff03];_0x4a5ed0+=';\x20'+_0x161f8c;const _0x2cc1b9=_0x5316b5[_0x161f8c];_0x5316b5['push'](_0x2cc1b9);_0x411912=_0x5316b5['length'];if(_0x2cc1b9!==!![]){_0x4a5ed0+='='+_0x2cc1b9;}}_0x2948bd['cookie']=_0x4a5ed0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2c66bd,_0x323683){_0x2c66bd=_0x2c66bd||function(_0x4488a2){return _0x4488a2;};const _0x16e6aa=_0x2c66bd(new RegExp('(?:^|;\x20)'+_0x323683['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x242cfc=function(_0x2f1485,_0x3c8408){_0x2f1485(++_0x3c8408);};_0x242cfc(_0x321bc1,_0x10d9a0);return _0x16e6aa?decodeURIComponent(_0x16e6aa[0x1]):undefined;}};const _0x668710=function(){const _0x21dc41=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x21dc41['test'](_0x1dc345['removeCookie']['toString']());};_0x1dc345['updateCookie']=_0x668710;let _0x49af6d='';const _0x23a9ad=_0x1dc345['updateCookie']();if(!_0x23a9ad){_0x1dc345['setCookie'](['*'],'counter',0x1);}else if(_0x23a9ad){_0x49af6d=_0x1dc345['getCookie'](null,'counter');}else{_0x1dc345['removeCookie']();}};_0x3ad53b();}(a39_0x10d9,0x1da));const a39_0x321b=function(_0x5904f4,_0x10d9a0){_0x5904f4=_0x5904f4-0x0;let _0x321bc1=a39_0x10d9[_0x5904f4];return _0x321bc1;};const a39_0x1dc345=function(){let _0x374d04=!![];return function(_0xc315e4,_0x529611){const _0xa423f=_0x374d04?function(){if(_0x529611){const _0xee35ff=_0x529611[a39_0x321b('0x4')](_0xc315e4,arguments);_0x529611=null;return _0xee35ff;}}:function(){};_0x374d04=![];return _0xa423f;};}();const a39_0x2b7b86=a39_0x1dc345(this,function(){const _0x121028=function(){const _0x57a0dc=_0x121028[a39_0x321b('0x1')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a39_0x321b('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x57a0dc[a39_0x321b('0x7')](a39_0x2b7b86);};return _0x121028();});a39_0x2b7b86();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require(a39_0x321b('0x22'));const constants=require(a39_0x321b('0x20'));const errors=require(a39_0x321b('0x29'));const omnic=require(a39_0x321b('0xa'));module[a39_0x321b('0x6')]=class VoiceSessionsCommand extends tesseract_1[a39_0x321b('0x24')]{constructor(){super(a39_0x321b('0x11'),{'description':a39_0x321b('0x17'),'triggers':[],'arguments':{'boolean':[a39_0x321b('0x13')]},'scope':a39_0x321b('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a39_0x321b('0x0')],'userPermissions':[a39_0x321b('0x14')],'syntax':[a39_0x321b('0x8')]});this['exec']=async(_0x3e61b6,_0x1569d7)=>{if(constants['isPublicBastion'](this[a39_0x321b('0x2')]['user'])){const _0x494c38=await omnic[a39_0x321b('0x1c')](_0x3e61b6[a39_0x321b('0x23')])['catch'](()=>{});if(!_0x494c38)throw new errors[(a39_0x321b('0xb'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][a39_0x321b('0x1f')][a39_0x321b('0xe')](_0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x1d')][a39_0x321b('0x28')],'errors',a39_0x321b('0x25')));}if(_0x1569d7[a39_0x321b('0x13')]){const _0x394db5=await _0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x18')][a39_0x321b('0x13')](a39_0x321b('0x21'),{'type':a39_0x321b('0x12')});await _0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x18')]['create'](a39_0x321b('0x15'),{'type':a39_0x321b('0x2a'),'parent':_0x394db5});const _0x1385e8=_0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x1d')][a39_0x321b('0x11')]&&_0x3e61b6['guild']['document'][a39_0x321b('0x11')][a39_0x321b('0x26')]?_0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x1d')][a39_0x321b('0x11')][a39_0x321b('0x26')][a39_0x321b('0xc')](_0x394db5['id']):[_0x394db5['id']];await Guild_1[a39_0x321b('0xf')][a39_0x321b('0x1a')](_0x3e61b6[a39_0x321b('0x23')]['id'],{'voiceSessions':{'categories':_0x1385e8}});return _0x3e61b6['channel'][a39_0x321b('0x1e')]({'embed':{'color':tesseract_1[a39_0x321b('0x10')]['COLORS'][a39_0x321b('0x3')],'description':this[a39_0x321b('0x2')]['locale'][a39_0x321b('0xe')](_0x3e61b6[a39_0x321b('0x23')][a39_0x321b('0x1d')][a39_0x321b('0x28')],'info',a39_0x321b('0x19'),_0x3e61b6['author'][a39_0x321b('0x16')])}})[a39_0x321b('0x9')](()=>{});}throw new errors[(a39_0x321b('0xb'))](errors[a39_0x321b('0xd')][a39_0x321b('0x27')],this[a39_0x321b('0x1b')]);};}};