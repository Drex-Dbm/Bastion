const a83_0x4338=['client','Reason','test','tag','language','user','name','setMute','getString','MUTE_MEMBERS','constructor','COLORS','guild','Command','channel','voiceMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','resolveGuildMember','compile','canManage','apply','set','DiscordError','send','errors','memberUnsetVoiceMute','exports','It\x20allows\x20you\x20to\x20voice\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel.\x20Voice\x20muted\x20users\x20can\x27t\x20speak\x20in\x20the\x20voice\x20channels\x20they\x20are\x20muted.','unauthorized','Constants','info','resolver','locale','catch','return\x20/\x22\x20+\x20this\x20+\x20\x22/','ORANGE','BASTION_ERROR_TYPE','../../utils/errors','ownerID','author','document','memberSetVoiceMute'];(function(_0x2f00f6,_0x433860){const _0x865937=function(_0x47e792){while(--_0x47e792){_0x2f00f6['push'](_0x2f00f6['shift']());}};const _0x1a6a34=function(){const _0x39c020={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x38b519,_0x13cd4c,_0x5c6203,_0x1bed2b){_0x1bed2b=_0x1bed2b||{};let _0x551a00=_0x13cd4c+'='+_0x5c6203;let _0x39c9b5=0x0;for(let _0x6492d0=0x0,_0x13da76=_0x38b519['length'];_0x6492d0<_0x13da76;_0x6492d0++){const _0x5ac7e7=_0x38b519[_0x6492d0];_0x551a00+=';\x20'+_0x5ac7e7;const _0x45060b=_0x38b519[_0x5ac7e7];_0x38b519['push'](_0x45060b);_0x13da76=_0x38b519['length'];if(_0x45060b!==!![]){_0x551a00+='='+_0x45060b;}}_0x1bed2b['cookie']=_0x551a00;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a3631,_0x42e1b4){_0x5a3631=_0x5a3631||function(_0x1535c9){return _0x1535c9;};const _0x16cab5=_0x5a3631(new RegExp('(?:^|;\x20)'+_0x42e1b4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x57198f=function(_0x52f993,_0x7b6a6){_0x52f993(++_0x7b6a6);};_0x57198f(_0x865937,_0x433860);return _0x16cab5?decodeURIComponent(_0x16cab5[0x1]):undefined;}};const _0x3839f1=function(){const _0x5c7bce=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5c7bce['test'](_0x39c020['removeCookie']['toString']());};_0x39c020['updateCookie']=_0x3839f1;let _0xb14bdb='';const _0x379ec9=_0x39c020['updateCookie']();if(!_0x379ec9){_0x39c020['setCookie'](['*'],'counter',0x1);}else if(_0x379ec9){_0xb14bdb=_0x39c020['getCookie'](null,'counter');}else{_0x39c020['removeCookie']();}};_0x1a6a34();}(a83_0x4338,0x129));const a83_0x8659=function(_0x2f00f6,_0x433860){_0x2f00f6=_0x2f00f6-0x0;let _0x865937=a83_0x4338[_0x2f00f6];return _0x865937;};const a83_0x39c020=function(){let _0x2f14a2=!![];return function(_0x235c2d,_0xa156d9){const _0x4b5eb7=_0x2f14a2?function(){if(_0xa156d9){const _0x3418cc=_0xa156d9[a83_0x8659('0x9')](_0x235c2d,arguments);_0xa156d9=null;return _0x3418cc;}}:function(){};_0x2f14a2=![];return _0x4b5eb7;};}();const a83_0x47e792=a83_0x39c020(this,function(){const _0x42fcea=function(){const _0x493664=_0x42fcea[a83_0x8659('0x0')](a83_0x8659('0x17'))()[a83_0x8659('0x7')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x493664[a83_0x8659('0x21')](a83_0x47e792);};return _0x42fcea();});a83_0x47e792();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a83_0x8659('0x1a'));module[a83_0x8659('0xf')]=class VoiceMute extends tesseract_1[a83_0x8659('0x3')]{constructor(){super('voiceMute',{'description':a83_0x8659('0x10'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':['set'],'string':[a83_0x8659('0x24')]},'scope':a83_0x8659('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MUTE_MEMBERS'],'userPermissions':[a83_0x8659('0x28')],'syntax':['voiceMute\x20--user\x20USER_ID\x20--\x20REASON',a83_0x8659('0x5')]});this['exec']=async(_0x1e04b1,_0x152661)=>{const _0x4beec1=this[a83_0x8659('0x1f')][a83_0x8659('0x14')][a83_0x8659('0x6')](_0x1e04b1[a83_0x8659('0x2')],_0x152661[a83_0x8659('0x24')]);if(!_0x4beec1)throw new errors[(a83_0x8659('0xb'))](errors[a83_0x8659('0x19')]['INVALID_COMMAND_SYNTAX'],this[a83_0x8659('0x25')]);if(_0x1e04b1[a83_0x8659('0x1c')]['id']!==_0x1e04b1['guild'][a83_0x8659('0x1b')]&&!_0x1e04b1['member'][a83_0x8659('0x8')](_0x4beec1)){return await _0x1e04b1[a83_0x8659('0x4')]['send']({'embed':{'color':tesseract_1[a83_0x8659('0x12')][a83_0x8659('0x1')]['RED'],'title':this[a83_0x8659('0x1f')][a83_0x8659('0x15')][a83_0x8659('0x27')](_0x1e04b1['guild'][a83_0x8659('0x1d')][a83_0x8659('0x23')],a83_0x8659('0xd'),a83_0x8659('0x11')),'description':this[a83_0x8659('0x1f')]['locale']['getString'](_0x1e04b1[a83_0x8659('0x2')][a83_0x8659('0x1d')][a83_0x8659('0x23')],a83_0x8659('0xd'),'rolePosition',_0x1e04b1[a83_0x8659('0x1c')]['tag'],_0x4beec1['user'][a83_0x8659('0x22')])}})[a83_0x8659('0x16')](()=>{});}const _0x595bfd=_0x152661['_']['join']('\x20')||'-';await _0x4beec1['voice'][a83_0x8659('0x26')](!!_0x152661[a83_0x8659('0xa')],_0x595bfd);await _0x1e04b1[a83_0x8659('0x4')][a83_0x8659('0xc')]({'embed':{'color':tesseract_1[a83_0x8659('0x12')][a83_0x8659('0x1')][a83_0x8659('0x18')],'description':_0x152661['set']?this[a83_0x8659('0x1f')]['locale'][a83_0x8659('0x27')](_0x1e04b1[a83_0x8659('0x2')][a83_0x8659('0x1d')][a83_0x8659('0x23')],a83_0x8659('0x13'),a83_0x8659('0x1e'),_0x1e04b1[a83_0x8659('0x1c')]['tag'],_0x4beec1[a83_0x8659('0x24')][a83_0x8659('0x22')]):this[a83_0x8659('0x1f')][a83_0x8659('0x15')]['getString'](_0x1e04b1[a83_0x8659('0x2')][a83_0x8659('0x1d')][a83_0x8659('0x23')],'info',a83_0x8659('0xe'),_0x1e04b1[a83_0x8659('0x1c')][a83_0x8659('0x22')],_0x4beec1['user'][a83_0x8659('0x22')]),'fields':[{'name':a83_0x8659('0x20'),'value':_0x595bfd}],'footer':{'text':_0x4beec1['id']}}})[a83_0x8659('0x16')](()=>{});};}};