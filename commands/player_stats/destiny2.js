const a98_0x2a2e=['value','join','killsDeathsAssists','profile','combatRating','send','keys','platform','kills','displayValue','Combat\x20Rating','../../utils/omnic','destiny2','\x20Adventures\x20Completed\x0a','/playerstats/destiny2/','exec','Highest\x20Light\x20Level','\x20/\x20','basic','adventuresCompleted','merged','displayName','membership','toUTCString','apply','precisionKills','dateLastPlayed','allTime','../../utils/errors','stats','winLossRatio','compile','secondsPlayed','KAD','assists','toFixed','highestLightLevel','suicides','Last\x20played\x20on\x20','name','steam','INVALID_COMMAND_SYNTAX','../../utils/constants','\x20Heroic\x20Public\x20Events\x20Completed','Best\x20Weapon\x20Type','deaths','heroicPublicEventsCompleted','makeRequest','toLowerCase','Deaths','DESTINY_2','toUpperCase','includes','KDA','constructor','guild','score','data','exports','Kills','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLORS','Total\x20Medals\x20Earned','\x20Suicides','json','indexOf','test','@bastion/tesseract','length','destiny2\x20USERNAME\x20--platform\x20PLATFORM','DiscordError','mergedAllCharacters','platforms'];(function(_0x4e8ccd,_0x2a2e4b){const _0x468c73=function(_0x1207f1){while(--_0x1207f1){_0x4e8ccd['push'](_0x4e8ccd['shift']());}};const _0x254641=function(){const _0x18f273={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1e3bf8,_0x150937,_0x5bcbae,_0xfcd69){_0xfcd69=_0xfcd69||{};let _0xbb07d1=_0x150937+'='+_0x5bcbae;let _0x23276b=0x0;for(let _0x26356c=0x0,_0x2f6cba=_0x1e3bf8['length'];_0x26356c<_0x2f6cba;_0x26356c++){const _0x160ad6=_0x1e3bf8[_0x26356c];_0xbb07d1+=';\x20'+_0x160ad6;const _0x5150a9=_0x1e3bf8[_0x160ad6];_0x1e3bf8['push'](_0x5150a9);_0x2f6cba=_0x1e3bf8['length'];if(_0x5150a9!==!![]){_0xbb07d1+='='+_0x5150a9;}}_0xfcd69['cookie']=_0xbb07d1;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf5ea6c,_0x542cbb){_0xf5ea6c=_0xf5ea6c||function(_0x4cd9d3){return _0x4cd9d3;};const _0x290240=_0xf5ea6c(new RegExp('(?:^|;\x20)'+_0x542cbb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x22c35f=function(_0x28cb3c,_0x2280e2){_0x28cb3c(++_0x2280e2);};_0x22c35f(_0x468c73,_0x2a2e4b);return _0x290240?decodeURIComponent(_0x290240[0x1]):undefined;}};const _0x1f5db1=function(){const _0x32d33e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x32d33e['test'](_0x18f273['removeCookie']['toString']());};_0x18f273['updateCookie']=_0x1f5db1;let _0x18ec72='';const _0x1bd4ac=_0x18f273['updateCookie']();if(!_0x1bd4ac){_0x18f273['setCookie'](['*'],'counter',0x1);}else if(_0x1bd4ac){_0x18ec72=_0x18f273['getCookie'](null,'counter');}else{_0x18f273['removeCookie']();}};_0x254641();}(a98_0x2a2e,0x1ae));const a98_0x468c=function(_0x4e8ccd,_0x2a2e4b){_0x4e8ccd=_0x4e8ccd-0x0;let _0x468c73=a98_0x2a2e[_0x4e8ccd];return _0x468c73;};const a98_0x18f273=function(){let _0x51ec14=!![];return function(_0x377fba,_0x116c21){const _0x287956=_0x51ec14?function(){if(_0x116c21){const _0x4ee7f2=_0x116c21[a98_0x468c('0x20')](_0x377fba,arguments);_0x116c21=null;return _0x4ee7f2;}}:function(){};_0x51ec14=![];return _0x287956;};}();const a98_0x1207f1=a98_0x18f273(this,function(){const _0x4ce716=function(){const _0x2ec980=_0x4ce716[a98_0x468c('0x3e')](a98_0x468c('0x44'))()[a98_0x468c('0x27')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2ec980[a98_0x468c('0x1')](a98_0x1207f1);};return _0x4ce716();});a98_0x1207f1();'use strict';const tesseract_1=require(a98_0x468c('0x2'));const constants=require(a98_0x468c('0x32'));const errors=require(a98_0x468c('0x24'));const omnic=require(a98_0x468c('0x13'));module[a98_0x468c('0x42')]=class Destiny2Command extends tesseract_1['Command']{constructor(){super(a98_0x468c('0x14'),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a98_0x468c('0xf')]},'scope':a98_0x468c('0x3f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['destiny2\x20USERNAME',a98_0x468c('0x4')]});this[a98_0x468c('0x17')]=async(_0x39b638,_0x1a5326)=>{if(!_0x1a5326['_'][a98_0x468c('0x3')])throw new errors[(a98_0x468c('0x5'))](errors['BASTION_ERROR_TYPE'][a98_0x468c('0x31')],this[a98_0x468c('0x2f')]);const _0x143768=_0x1a5326['_'][a98_0x468c('0x9')]('\x20');const _0x1de203=_0x1a5326['platform']&&this['platforms'][a98_0x468c('0x3c')](_0x1a5326[a98_0x468c('0xf')][a98_0x468c('0x38')]())?this[a98_0x468c('0x7')][a98_0x468c('0x0')](_0x1a5326[a98_0x468c('0xf')]['toLowerCase']()):-0x1;const _0x1f5c3e=await omnic[a98_0x468c('0x37')](a98_0x468c('0x16')+_0x1de203+'/'+encodeURIComponent(_0x143768));const _0x329df3=await _0x1f5c3e[a98_0x468c('0x48')]();if(!Object[a98_0x468c('0xe')](_0x329df3)[a98_0x468c('0x3')])throw new Error('PLAYER_DOESNT_EXIST');await _0x39b638['channel'][a98_0x468c('0xd')]({'embed':{'color':constants[a98_0x468c('0x45')][a98_0x468c('0x3a')],'author':{'name':_0x329df3['membership'][a98_0x468c('0x1d')]},'title':'Destiny\x202\x20-\x20Player\x20Stats','description':a98_0x468c('0x2e')+new Date(_0x329df3['profile'][a98_0x468c('0xb')][a98_0x468c('0x41')][a98_0x468c('0x22')])[a98_0x468c('0x1f')](),'fields':[{'name':'Playtime','value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')]['merged'][a98_0x468c('0x23')][a98_0x468c('0x28')][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':'Highest\x20Light\x20Level','value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')]['highestLightLevel'][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x18'),'value':_0x329df3['stats'][a98_0x468c('0x6')][a98_0x468c('0x1c')]['allTime'][a98_0x468c('0x2c')]['basic'][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x12'),'value':_0x329df3[a98_0x468c('0x25')]['mergedAllCharacters'][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0xc')]['basic'][a98_0x468c('0x11')],'inline':!![]},{'name':'Score','value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x40')][a98_0x468c('0x1a')]['displayValue'],'inline':!![]},{'name':'Team\x20Score','value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')]['teamScore'][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x43'),'value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')]['merged']['allTime'][a98_0x468c('0x10')][a98_0x468c('0x1a')]['displayValue']+a98_0x468c('0x19')+_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x21')]['basic'][a98_0x468c('0x11')]+'\x20Precision\x20Kills','inline':!![]},{'name':'Assists','value':_0x329df3['stats'][a98_0x468c('0x6')]['merged'][a98_0x468c('0x23')][a98_0x468c('0x2a')][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x39'),'value':_0x329df3['stats']['mergedAllCharacters'][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x35')]['basic']['displayValue']+'\x20/\x20'+_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')]['allTime'][a98_0x468c('0x2d')][a98_0x468c('0x1a')][a98_0x468c('0x11')]+a98_0x468c('0x47'),'inline':!![]},{'name':'KDR','value':_0x329df3['stats'][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')]['killsDeathsRatio'][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x3d'),'value':_0x329df3[a98_0x468c('0x25')]['mergedAllCharacters'][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0xa')]['basic']['displayValue'],'inline':!![]},{'name':a98_0x468c('0x29'),'value':((_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')]['merged'][a98_0x468c('0x23')][a98_0x468c('0x10')][a98_0x468c('0x1a')]['value']+_0x329df3['stats'][a98_0x468c('0x6')]['merged'][a98_0x468c('0x23')]['assists'][a98_0x468c('0x1a')][a98_0x468c('0x8')])/_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')]['allTime'][a98_0x468c('0x35')]['basic']['value'])[a98_0x468c('0x2b')](0x2),'inline':!![]},{'name':'Win\x20Loss\x20Ratio','value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x26')][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x34'),'value':_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')]['merged'][a98_0x468c('0x23')]['weaponBestType'][a98_0x468c('0x1a')][a98_0x468c('0x11')],'inline':!![]},{'name':a98_0x468c('0x46'),'value':_0x329df3['stats'][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')]['allMedalsEarned'][a98_0x468c('0x1a')]['displayValue'],'inline':!![]},{'name':'Extras','value':_0x329df3['stats'][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')]['objectivesCompleted'][a98_0x468c('0x1a')]['displayValue']+'\x20Objectives\x20Completed\x0a'+_0x329df3[a98_0x468c('0x25')]['mergedAllCharacters'][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x1b')]['basic'][a98_0x468c('0x11')]+a98_0x468c('0x15')+_0x329df3[a98_0x468c('0x25')][a98_0x468c('0x6')][a98_0x468c('0x1c')][a98_0x468c('0x23')][a98_0x468c('0x36')]['basic']['displayValue']+a98_0x468c('0x33')}],'footer':{'text':this[a98_0x468c('0x7')][_0x329df3[a98_0x468c('0x1e')]['membershipType']][a98_0x468c('0x3b')]()+'\x20•\x20Powered\x20by\x20Bungie'}}});};this[a98_0x468c('0x7')]=[null,'xbl','psn',a98_0x468c('0x30'),'blizzard','stadia'];}};