const a40_0x5639=['MANAGE_GUILD','document','membershipLimitVotingChannels','votingChannelsRemove','DiscordError','Constants','_id','RED','\x20/\x20','countDocuments','votingChannelsAdd','GREEN','../../utils/errors','VOTING_CHANNELS','getString','compile','../../utils/constants','catch','Voting\x20Channels','name','LIMITED_PREMIUM_MEMBERSHIP','PLATINUM','LIMITS','exec','PREMIUM_MEMBERSHIP_REQUIRED','test','findByIdAndUpdate','exports','user','channels','language','GOLD','has','votingChannels','votingChannels\x20--add','Command','author','COLORS','length','fetchPremiumTier','\x20Voting\x20Channels','IRIS','send','add','remove','client','guild','info','isPublicBastion','return\x20/\x22\x20+\x20this\x20+\x20\x22/','PremiumTier','errors','push','default','../../utils/omnic','locale','votingChannels\x20--remove','constructor','channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','BASTION_ERROR_TYPE','cache','find'];(function(_0x4db21f,_0x563964){const _0x38d115=function(_0x21a55f){while(--_0x21a55f){_0x4db21f['push'](_0x4db21f['shift']());}};const _0x5b41ca=function(){const _0x25412d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2ddf38,_0x38f7da,_0x42dc6c,_0x1ef6f9){_0x1ef6f9=_0x1ef6f9||{};let _0x48c4d6=_0x38f7da+'='+_0x42dc6c;let _0x4a7f4a=0x0;for(let _0x21a0d1=0x0,_0x457142=_0x2ddf38['length'];_0x21a0d1<_0x457142;_0x21a0d1++){const _0xd28dbe=_0x2ddf38[_0x21a0d1];_0x48c4d6+=';\x20'+_0xd28dbe;const _0x44a9c0=_0x2ddf38[_0xd28dbe];_0x2ddf38['push'](_0x44a9c0);_0x457142=_0x2ddf38['length'];if(_0x44a9c0!==!![]){_0x48c4d6+='='+_0x44a9c0;}}_0x1ef6f9['cookie']=_0x48c4d6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x189582,_0x381274){_0x189582=_0x189582||function(_0x578750){return _0x578750;};const _0x4def21=_0x189582(new RegExp('(?:^|;\x20)'+_0x381274['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1a53a1=function(_0x5b1685,_0x24dced){_0x5b1685(++_0x24dced);};_0x1a53a1(_0x38d115,_0x563964);return _0x4def21?decodeURIComponent(_0x4def21[0x1]):undefined;}};const _0x183b85=function(){const _0x65d218=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x65d218['test'](_0x25412d['removeCookie']['toString']());};_0x25412d['updateCookie']=_0x183b85;let _0x57978e='';const _0x2d943c=_0x25412d['updateCookie']();if(!_0x2d943c){_0x25412d['setCookie'](['*'],'counter',0x1);}else if(_0x2d943c){_0x57978e=_0x25412d['getCookie'](null,'counter');}else{_0x25412d['removeCookie']();}};_0x5b41ca();}(a40_0x5639,0x1aa));const a40_0x38d1=function(_0x4db21f,_0x563964){_0x4db21f=_0x4db21f-0x0;let _0x38d115=a40_0x5639[_0x4db21f];return _0x38d115;};const a40_0x25412d=function(){let _0xa46b29=!![];return function(_0x416c6c,_0x114cc7){const _0xd6616=_0xa46b29?function(){if(_0x114cc7){const _0x3fd464=_0x114cc7['apply'](_0x416c6c,arguments);_0x114cc7=null;return _0x3fd464;}}:function(){};_0xa46b29=![];return _0xd6616;};}();const a40_0x21a55f=a40_0x25412d(this,function(){const _0x21ab3e=function(){const _0x6f7d88=_0x21ab3e[a40_0x38d1('0x9')](a40_0x38d1('0x1'))()[a40_0x38d1('0x1e')](a40_0x38d1('0xb'));return!_0x6f7d88[a40_0x38d1('0x28')](a40_0x21a55f);};return _0x21ab3e();});a40_0x21a55f();'use strict';const tesseract_1=require('@bastion/tesseract');const TextChannel_1=require('../../models/TextChannel');const constants=require(a40_0x38d1('0x1f'));const errors=require(a40_0x38d1('0x1b'));const omnic=require(a40_0x38d1('0x6'));module[a40_0x38d1('0x2a')]=class Announcements extends tesseract_1[a40_0x38d1('0x32')]{constructor(){super(a40_0x38d1('0x30'),{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20channels\x20as\x20Voting\x20Channels.\x20If\x20a\x20channel\x20is\x20set\x20as\x20a\x20Voting\x20Channel,\x20anything\x20sent\x20in\x20the\x20channel\x20will\x20be\x20set\x20up\x20for\x20everyone\x20to\x20vote.','triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'boolean':[a40_0x38d1('0x3a'),'remove']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a40_0x38d1('0xf')],'syntax':[a40_0x38d1('0x30'),a40_0x38d1('0x31'),a40_0x38d1('0x8')]});this[a40_0x38d1('0x26')]=async(_0x2f40a6,_0x543c2e)=>{if(_0x543c2e[a40_0x38d1('0x3a')]){if(constants[a40_0x38d1('0x0')](this['client'][a40_0x38d1('0x2b')])){const _0x1249c4=await TextChannel_1[a40_0x38d1('0x5')][a40_0x38d1('0x18')]({'guild':_0x2f40a6['guild']['id'],'voting':!![]});if(_0x1249c4>=constants[a40_0x38d1('0x25')][a40_0x38d1('0x1c')]){const _0x278caa=await omnic[a40_0x38d1('0x36')](_0x2f40a6[a40_0x38d1('0x3d')])[a40_0x38d1('0x20')](()=>{});if(_0x278caa){if(_0x278caa===omnic[a40_0x38d1('0x2')][a40_0x38d1('0x2e')]&&_0x1249c4>=constants['LIMITS']['GOLD']['VOTING_CHANNELS']){throw new errors[(a40_0x38d1('0x13'))](errors[a40_0x38d1('0xc')][a40_0x38d1('0x23')],this['client'][a40_0x38d1('0x7')]['getString'](_0x2f40a6[a40_0x38d1('0x3d')][a40_0x38d1('0x10')][a40_0x38d1('0x2d')],a40_0x38d1('0x3'),a40_0x38d1('0x11'),constants[a40_0x38d1('0x25')][a40_0x38d1('0x2e')][a40_0x38d1('0x1c')]));}else if(_0x278caa===omnic[a40_0x38d1('0x2')]['PLATINUM']&&_0x1249c4>=constants[a40_0x38d1('0x25')]['PLATINUM']['VOTING_CHANNELS']){throw new errors['DiscordError'](errors[a40_0x38d1('0xc')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a40_0x38d1('0x3c')][a40_0x38d1('0x7')][a40_0x38d1('0x1d')](_0x2f40a6['guild']['document']['language'],'errors',a40_0x38d1('0x11'),constants[a40_0x38d1('0x25')][a40_0x38d1('0x24')][a40_0x38d1('0x1c')]));}}else{throw new errors['DiscordError'](errors[a40_0x38d1('0xc')][a40_0x38d1('0x27')],this[a40_0x38d1('0x3c')][a40_0x38d1('0x7')]['getString'](_0x2f40a6[a40_0x38d1('0x3d')][a40_0x38d1('0x10')]['language'],a40_0x38d1('0x3'),'premiumVotingChannels',constants[a40_0x38d1('0x25')][a40_0x38d1('0x1c')]));}}}await TextChannel_1[a40_0x38d1('0x5')][a40_0x38d1('0x29')](_0x2f40a6[a40_0x38d1('0xa')]['id'],{'_id':_0x2f40a6[a40_0x38d1('0xa')]['id'],'guild':_0x2f40a6['guild']['id'],'voting':!![]},{'upsert':!![]});return await _0x2f40a6['channel']['send']({'embed':{'color':tesseract_1[a40_0x38d1('0x14')]['COLORS'][a40_0x38d1('0x1a')],'description':this['client'][a40_0x38d1('0x7')][a40_0x38d1('0x1d')](_0x2f40a6[a40_0x38d1('0x3d')][a40_0x38d1('0x10')][a40_0x38d1('0x2d')],'info',a40_0x38d1('0x19'),_0x2f40a6[a40_0x38d1('0x33')]['tag'])}})[a40_0x38d1('0x20')](()=>{});}if(_0x543c2e[a40_0x38d1('0x3b')]){await TextChannel_1[a40_0x38d1('0x5')][a40_0x38d1('0x29')](_0x2f40a6['channel']['id'],{'_id':_0x2f40a6[a40_0x38d1('0xa')]['id'],'guild':_0x2f40a6[a40_0x38d1('0x3d')]['id'],'$unset':{'voting':0x1}});return await _0x2f40a6[a40_0x38d1('0xa')][a40_0x38d1('0x39')]({'embed':{'color':tesseract_1[a40_0x38d1('0x14')]['COLORS'][a40_0x38d1('0x16')],'description':this[a40_0x38d1('0x3c')][a40_0x38d1('0x7')][a40_0x38d1('0x1d')](_0x2f40a6['guild'][a40_0x38d1('0x10')]['language'],'info',a40_0x38d1('0x12'),_0x2f40a6[a40_0x38d1('0x33')]['tag'])}})['catch'](()=>{});}const _0x4d61f8=await TextChannel_1[a40_0x38d1('0x5')][a40_0x38d1('0xe')]({'guild':_0x2f40a6[a40_0x38d1('0x3d')]['id'],'voting':!![]});const _0x2f3924=[];for(const _0x3dd8c1 of _0x4d61f8){if(_0x2f40a6['guild'][a40_0x38d1('0x2c')][a40_0x38d1('0xd')][a40_0x38d1('0x2f')](_0x3dd8c1[a40_0x38d1('0x15')])){_0x2f3924[a40_0x38d1('0x4')](_0x2f40a6[a40_0x38d1('0x3d')][a40_0x38d1('0x2c')]['cache']['get'](_0x3dd8c1[a40_0x38d1('0x15')])[a40_0x38d1('0x22')]+a40_0x38d1('0x17')+_0x3dd8c1[a40_0x38d1('0x15')]);}else{await _0x3dd8c1[a40_0x38d1('0x3b')]()['catch'](()=>{});}}await _0x2f40a6[a40_0x38d1('0xa')]['send']({'embed':{'color':tesseract_1[a40_0x38d1('0x14')][a40_0x38d1('0x34')][a40_0x38d1('0x38')],'title':a40_0x38d1('0x21'),'description':this[a40_0x38d1('0x3c')][a40_0x38d1('0x7')][a40_0x38d1('0x1d')](_0x2f40a6[a40_0x38d1('0x3d')][a40_0x38d1('0x10')][a40_0x38d1('0x2d')],a40_0x38d1('0x3e'),a40_0x38d1('0x30')),'fields':[{'name':(_0x2f3924[a40_0x38d1('0x35')]?_0x2f3924[a40_0x38d1('0x35')]:'No')+a40_0x38d1('0x37'),'value':_0x2f3924['join']('\x0a\x0a')||'-'}]}})['catch'](()=>{});};}};