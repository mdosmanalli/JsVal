var SJ=SJ||{};
SJ.validate=function(b){for(var e=[],g=0,h={max:function(a,c){a=parseInt(a);return c.length<=a},min:function(a,c){a=parseInt(a);return c.length>=a},mandatory:function(a,c){return c==true||c!=true&&c.length>0},tel:function(a){return/^[0-9 +()-]+$/.test(a)},email:function(a){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(a)},url:function(a){return/^(https?:\/\/)?(\w+:{0,1}\w*@)?([a-z0-9-\.]+\.)?([a-z0-9-]{2,})\.([a-z]{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]+))?$/.test(a)},fullUrl:function(a){return/^(https?:\/\/)(\w+:{0,1}\w*@)?([a-z0-9-\.]+\.)?([a-z0-9-]{2,})\.([a-z]{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]+))?$/.test(a)},
numeric:function(a){return/[0-9]+$/.test(a)}},i={checkbox:function(a){return a.checked},text:function(a){return a.value}},d=b.length;d--;)for(var f in h)if(b[d].valObj[f])if(!h[f](b[d].valObj[f],i[b[d].field.type](b[d].field))){e[g]={field:b[d].field,errorText:b[d].valObj[f+"Text"]};g++}if(typeof e[0]==="undefined")e[0]={noerrors:true};return e};SJ.log=function(b){typeof console!=="undefined"&&console.log&&console.log(b)};
