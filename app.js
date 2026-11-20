(function(){
var b=document.getElementById('burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded','false')})})}
document.querySelectorAll('[data-copy]').forEach(function(el){el.addEventListener('click',function(){
var t=el.getAttribute('data-copy'),s=el.querySelector('span');
function ok(){if(s){var o=s.textContent;s.textContent='E-mail copiado';setTimeout(function(){s.textContent=o},2200)}}
function fb(){var i=document.createElement('textarea');i.value=t;document.body.appendChild(i);i.select();try{document.execCommand('copy');ok()}catch(x){}document.body.removeChild(i)}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,fb)}else{fb()}})});
document.addEventListener('securitypolicyviolation',function(e){var f=document.querySelector('.mapbox iframe');if(f&&String(e.blockedURI).indexOf('google')>-1)f.hidden=true});
var K='dr_cookie_consent_v1',cb=document.getElementById('cb');
window.dataLayer=window.dataLayer||[];function g(){dataLayer.push(arguments)}
function rd(){try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}}
function ap(c){var a=c.a?'granted':'denied',m=c.m?'granted':'denied';g('consent','update',{analytics_storage:a,ad_storage:m,ad_user_data:m,ad_personalization:m});dataLayer.push({event:'cookie_consent_update'})}
function sv(c){try{localStorage.setItem(K,JSON.stringify(c))}catch(e){}ap(c);cb.hidden=true}
function $(id){return document.getElementById(id)}
if(cb){var c0=rd();if(c0){ap(c0)}else{cb.hidden=false}
$('cb-all').onclick=function(){sv({a:1,m:1})};
$('cb-none').onclick=function(){sv({a:0,m:0})};
$('cb-cfg').onclick=function(){$('cb-opts').hidden=false;$('cb-save').hidden=false;$('cb-cfg').hidden=true};
$('cb-save').onclick=function(){sv({a:$('c-a').checked?1:0,m:$('c-m').checked?1:0})};
document.querySelectorAll('[data-cookie-settings]').forEach(function(el){el.addEventListener('click',function(){var c=rd()||{a:0,m:0};$('c-a').checked=!!c.a;$('c-m').checked=!!c.m;$('cb-opts').hidden=false;$('cb-save').hidden=false;$('cb-cfg').hidden=true;cb.hidden=false})})}
})();