const a138_0x2aae=['getConfigurations','return\x20/\x22\x20+\x20this\x20+\x20\x22/','stdout','start','spawn','discord-rpc','toString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','write','Logger','ipc','totalShards','./package.json','ShardingManager','bastion.traction.one','discord.gg/fzx8fkt','login','b7b407c827109b547ce91a08e7f9168b','BASTION_BOOT_TIME','defineProperty','PORT','267035345537728512','f2be54a6b3bc34a5b849fdeb2e550d68','@bastion/tesseract','info','Bastion','compile','port','apply','homepage','env','shardCreate'];(function(_0x1f0628,_0x2aaee8){const _0xba12fd=function(_0x2db834){while(--_0x2db834){_0x1f0628['push'](_0x1f0628['shift']());}};const _0x46129c=function(){const _0x74d5b1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3a1db9,_0x3d744d,_0x225537,_0x594859){_0x594859=_0x594859||{};let _0x20af72=_0x3d744d+'='+_0x225537;let _0x5ab7b1=0x0;for(let _0x285351=0x0,_0x5b0411=_0x3a1db9['length'];_0x285351<_0x5b0411;_0x285351++){const _0x231e12=_0x3a1db9[_0x285351];_0x20af72+=';\x20'+_0x231e12;const _0x1b7968=_0x3a1db9[_0x231e12];_0x3a1db9['push'](_0x1b7968);_0x5b0411=_0x3a1db9['length'];if(_0x1b7968!==!![]){_0x20af72+='='+_0x1b7968;}}_0x594859['cookie']=_0x20af72;},'removeCookie':function(){return'dev';},'getCookie':function(_0x569c3a,_0x163b32){_0x569c3a=_0x569c3a||function(_0x5cb768){return _0x5cb768;};const _0x2024bc=_0x569c3a(new RegExp('(?:^|;\x20)'+_0x163b32['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x410c4d=function(_0x405325,_0x1d17a1){_0x405325(++_0x1d17a1);};_0x410c4d(_0xba12fd,_0x2aaee8);return _0x2024bc?decodeURIComponent(_0x2024bc[0x1]):undefined;}};const _0x3d1934=function(){const _0x287555=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x287555['test'](_0x74d5b1['removeCookie']['toString']());};_0x74d5b1['updateCookie']=_0x3d1934;let _0x11bf1a='';const _0x5a5115=_0x74d5b1['updateCookie']();if(!_0x5a5115){_0x74d5b1['setCookie'](['*'],'counter',0x1);}else if(_0x5a5115){_0x11bf1a=_0x74d5b1['getCookie'](null,'counter');}else{_0x74d5b1['removeCookie']();}};_0x46129c();}(a138_0x2aae,0xe6));const a138_0xba12=function(_0x1f0628,_0x2aaee8){_0x1f0628=_0x1f0628-0x0;let _0xba12fd=a138_0x2aae[_0x1f0628];return _0xba12fd;};const a138_0x74d5b1=function(){let _0x5d3a78=!![];return function(_0x47e609,_0x37000a){const _0x85d4db=_0x5d3a78?function(){if(_0x37000a){const _0x1ba217=_0x37000a[a138_0xba12('0x16')](_0x47e609,arguments);_0x37000a=null;return _0x1ba217;}}:function(){};_0x5d3a78=![];return _0x85d4db;};}();const a138_0x2db834=a138_0x74d5b1(this,function(){const _0x536b09=function(){const _0x1bf10c=_0x536b09['constructor'](a138_0xba12('0x1b'))()[a138_0xba12('0x14')](a138_0xba12('0x1'));return!_0x1bf10c['test'](a138_0x2db834);};return _0x536b09();});a138_0x2db834();'use strict';Object[a138_0xba12('0xd')](exports,'__esModule',{'value':!![]});const tesseract=require(a138_0xba12('0x11'));const chalk=require('chalk');const DiscordRPC=require(a138_0xba12('0x1f'));const manifest=require(a138_0xba12('0x6'));const configurations=tesseract['settings'][a138_0xba12('0x1a')]();process[a138_0xba12('0x18')][a138_0xba12('0xc')]=Date['now']()[a138_0xba12('0x0')]();process[a138_0xba12('0x1c')][a138_0xba12('0x2')]('\x0a');process[a138_0xba12('0x1c')]['write'](chalk`{cyan Bastion} {grey v${manifest['version']}}\n`);process[a138_0xba12('0x1c')][a138_0xba12('0x2')](chalk`{blue ${manifest[a138_0xba12('0x17')]}}\n`);process['stdout'][a138_0xba12('0x2')]('\x0a');process[a138_0xba12('0x1c')][a138_0xba12('0x2')](chalk`{gray </> with ❤ by The Bastion Bot Team & Contributors}\n`);process['stdout'][a138_0xba12('0x2')](chalk`{gray Copyright © 2017-2020 The Bastion Bot Project}\n`);process[a138_0xba12('0x1c')][a138_0xba12('0x2')]('\x0a');const rpc=new DiscordRPC['Client']({'transport':a138_0xba12('0x4')});rpc[a138_0xba12('0xa')]({'clientId':a138_0xba12('0xf')})['catch'](()=>{});const Manager=new tesseract[(a138_0xba12('0x7'))]('./bastion.js');const server=new tesseract['WebServer'](Manager);server[a138_0xba12('0x1d')](process[a138_0xba12('0x18')][a138_0xba12('0xe')]||configurations[a138_0xba12('0x15')]);Manager[a138_0xba12('0x1e')]();Manager['on'](a138_0xba12('0x19'),_0x2fc00c=>{tesseract[a138_0xba12('0x3')][a138_0xba12('0x12')](chalk`Shard ${_0x2fc00c['id']} - Launching {grey [ ${_0x2fc00c['id']+0x1} of ${Manager[a138_0xba12('0x5')]} ]}`);});rpc['on']('ready',()=>{rpc['setActivity']({'details':a138_0xba12('0x8'),'state':a138_0xba12('0x9'),'startTimestamp':new Date(),'largeImageKey':a138_0xba12('0x10'),'largeImageText':a138_0xba12('0x13'),'smallImageKey':a138_0xba12('0xb'),'smallImageText':'k3rn31p4nic#8383','instance':![]});});