const a46_0xaedf=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','COLORS','Damn!\x20It\x27s\x20a\x20draw,\x20mate.','Command','BASTION_ERROR_TYPE','INVALID_COMMAND_SYNTAX','IRIS','guild','constructor','toUpperCase','compile','choices','exec','It\x20allows\x20you\x20to\x20play\x20Rock\x20Paper\x20Scissor\x20with\x20Bastion.','PAPER','../../utils/errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','join','includes','**,\x20You\x20chose\x20**','SCISSOR','ROCK','channel','DiscordError','I\x20win!\x20Sorry,\x20human.\x20:yum:','test','exports','floor','You\x20win,\x20human.'];(function(_0x6f9e52,_0xaedfa1){const _0xd2ebc9=function(_0x3d745b){while(--_0x3d745b){_0x6f9e52['push'](_0x6f9e52['shift']());}};const _0xfd1602=function(){const _0x145748={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1d9068,_0x3e7b40,_0x42952f,_0x2bf78f){_0x2bf78f=_0x2bf78f||{};let _0x5cfafb=_0x3e7b40+'='+_0x42952f;let _0x108722=0x0;for(let _0x35240d=0x0,_0x3e6dec=_0x1d9068['length'];_0x35240d<_0x3e6dec;_0x35240d++){const _0x57fc3f=_0x1d9068[_0x35240d];_0x5cfafb+=';\x20'+_0x57fc3f;const _0xa204ec=_0x1d9068[_0x57fc3f];_0x1d9068['push'](_0xa204ec);_0x3e6dec=_0x1d9068['length'];if(_0xa204ec!==!![]){_0x5cfafb+='='+_0xa204ec;}}_0x2bf78f['cookie']=_0x5cfafb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4dde59,_0x37372e){_0x4dde59=_0x4dde59||function(_0x2a9655){return _0x2a9655;};const _0x52fb77=_0x4dde59(new RegExp('(?:^|;\x20)'+_0x37372e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2ecac6=function(_0xd23657,_0x425452){_0xd23657(++_0x425452);};_0x2ecac6(_0xd2ebc9,_0xaedfa1);return _0x52fb77?decodeURIComponent(_0x52fb77[0x1]):undefined;}};const _0x594a50=function(){const _0x41e115=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x41e115['test'](_0x145748['removeCookie']['toString']());};_0x145748['updateCookie']=_0x594a50;let _0x591212='';const _0x2847ad=_0x145748['updateCookie']();if(!_0x2847ad){_0x145748['setCookie'](['*'],'counter',0x1);}else if(_0x2847ad){_0x591212=_0x145748['getCookie'](null,'counter');}else{_0x145748['removeCookie']();}};_0xfd1602();}(a46_0xaedf,0x81));const a46_0xd2eb=function(_0x6f9e52,_0xaedfa1){_0x6f9e52=_0x6f9e52-0x0;let _0xd2ebc9=a46_0xaedf[_0x6f9e52];return _0xd2ebc9;};const a46_0x145748=function(){let _0x11dad6=!![];return function(_0x399f6d,_0x308789){const _0x57034d=_0x11dad6?function(){if(_0x308789){const _0x27a307=_0x308789['apply'](_0x399f6d,arguments);_0x308789=null;return _0x27a307;}}:function(){};_0x11dad6=![];return _0x57034d;};}();const a46_0x3d745b=a46_0x145748(this,function(){const _0x4c0849=function(){const _0x5c17c7=_0x4c0849[a46_0xd2eb('0x4')](a46_0xd2eb('0xc'))()[a46_0xd2eb('0x6')](a46_0xd2eb('0x1a'));return!_0x5c17c7[a46_0xd2eb('0x16')](a46_0x3d745b);};return _0x4c0849();});a46_0x3d745b();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a46_0xd2eb('0xb'));module[a46_0xd2eb('0x17')]=class RockPaperScissorCommand extends tesseract_1[a46_0xd2eb('0x1e')]{constructor(){super('rps',{'description':a46_0xd2eb('0x9'),'triggers':['rockPaperScissor'],'arguments':{},'scope':a46_0xd2eb('0x3'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rps\x20CHOICE']});this[a46_0xd2eb('0x8')]=async(_0x2fae5e,_0xcadcdd)=>{const _0x3e5faa=_0xcadcdd['_'][a46_0xd2eb('0xe')]('')[a46_0xd2eb('0x5')]();if(!this[a46_0xd2eb('0x7')][a46_0xd2eb('0xf')](_0x3e5faa))throw new errors[(a46_0xd2eb('0x14'))](errors[a46_0xd2eb('0x0')][a46_0xd2eb('0x1')],this[a46_0xd2eb('0x1b')]);const _0x18f326=this[a46_0xd2eb('0x7')][Math[a46_0xd2eb('0x18')](Math['random']()*this['choices']['length'])];const _0x2dd695=_0x3e5faa===_0x18f326?a46_0xd2eb('0x1d'):_0x3e5faa==='ROCK'&&_0x18f326===a46_0xd2eb('0x11')?a46_0xd2eb('0x19'):_0x3e5faa===a46_0xd2eb('0xa')&&_0x18f326===a46_0xd2eb('0x12')?a46_0xd2eb('0x19'):_0x3e5faa===a46_0xd2eb('0x11')&&_0x18f326===a46_0xd2eb('0xa')?a46_0xd2eb('0x19'):a46_0xd2eb('0x15');await _0x2fae5e[a46_0xd2eb('0x13')]['send']({'embed':{'color':tesseract_1[a46_0xd2eb('0xd')][a46_0xd2eb('0x1c')][a46_0xd2eb('0x2')],'title':'Rock\x20Paper\x20Scrissor','description':'I\x20chose\x20**'+_0x18f326+a46_0xd2eb('0x10')+_0x3e5faa+'**.\x20'+_0x2dd695}});};this[a46_0xd2eb('0x7')]=['ROCK',a46_0xd2eb('0xa'),a46_0xd2eb('0x11')];}};