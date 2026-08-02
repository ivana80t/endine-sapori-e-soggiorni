
(function(){
const header=`<header class="shared-header"><div class="shared-inner">
<a class="shared-brand" href="index.html"><strong>ENDINE</strong><span>SAPORI E SOGGIORNI</span></a>
<nav class="shared-nav">
<a href="territorio.html">TERRITORIO</a><a href="borghi.html">BORGHI</a><a href="guide.html">GUIDE</a>
<a href="dove-dormire.html">DOVE DORMIRE</a><a href="dove-mangiare.html">DOVE MANGIARE</a>
<a href="preferiti.html">PREFERITI</a></nav>
<a class="shared-publish" href="pubblica-struttura.html">PUBBLICA LA TUA STRUTTURA</a></div></header>`;
const footer=`<footer class="shared-footer"><div class="container footer-grid">
<div><strong class="footer-title">Endine Sapori e Soggiorni</strong><p>Guida editoriale evergreen al Lago di Endine, alla Val Cavallina e alle attività del territorio.</p></div>
<div><h4>Esplora</h4><a href="territorio.html">Territorio</a><a href="borghi.html">Borghi</a><a href="guide.html">Guide</a><a href="passeggiate.html">Passeggiate</a></div>
<div><h4>Ospitalità</h4><a href="dove-dormire.html">Dove dormire</a><a href="dove-mangiare.html">Dove mangiare</a><a href="pubblica-struttura.html">Pubblica struttura</a></div>
<div><h4>Informazioni</h4><a href="chi-siamo.html">Chi siamo</a><a href="faq.html">FAQ</a><a href="come-arrivare.html">Come arrivare</a><a href="privacy.html">Privacy</a></div>
</div><div class="container footer-legal">© 2026 Endine Sapori e Soggiorni — Portale informativo indipendente.</div></footer>`;
const cta=`<section class="shared-cta"><div class="container"><div><h2>Gestisci una struttura sul Lago di Endine?</h2><p>Presenta la tua attività con una scheda informativa e contatti diretti.</p></div><a href="pubblica-struttura.html">PUBBLICA LA TUA STRUTTURA</a></div></section>`;
const style=`<style>
.shared-header{background:#fff;position:sticky;top:0;z-index:100;border:0}.shared-inner{width:min(1200px,calc(100% - 44px));min-height:116px;margin:auto;display:grid;grid-template-columns:245px 1fr 175px;gap:20px;align-items:center}.shared-brand strong{display:block;font:700 38px/.8 "Cormorant Garamond",serif;color:#17371f}.shared-brand span{display:block;font:600 12px/1.1 "Cormorant Garamond",serif;letter-spacing:.14em;margin-top:10px;color:#425d46}.shared-nav{display:flex;justify-content:center;gap:18px;font-size:11px;font-weight:800}.shared-nav a{padding:45px 0 37px;position:relative}.shared-nav a.active,.shared-nav a:hover{color:#547b42}.shared-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:29px;height:2px;background:#6d9159}.shared-publish{background:#17371f;color:#fff;padding:12px;border-radius:7px;font-size:10px;font-weight:800;text-align:center}.shared-footer{background:#102c18;color:#fff;padding:48px 0 24px}.footer-grid{display:grid;grid-template-columns:1.3fr repeat(3,1fr);gap:35px}.shared-footer a{display:block;font-size:12px;color:#dbe5dc;margin:9px 0}.shared-footer h4{font:700 20px/1 "Cormorant Garamond",serif}.footer-title{font:700 31px/1 "Cormorant Garamond",serif}.shared-footer p{font-size:12px;color:#d7e0d8}.footer-legal{border-top:1px solid rgba(255,255,255,.12);margin-top:30px;padding-top:20px;font-size:11px;color:#c9d3ca}.shared-cta{background:#17371f;color:#fff;padding:52px 0}.shared-cta .container{display:flex;justify-content:space-between;align-items:center;gap:30px}.shared-cta h2{font:700 40px/1 "Cormorant Garamond",serif;margin:0 0 10px}.shared-cta p{margin:0;color:#d8e3d7}.shared-cta a{background:#fff;color:#17371f;padding:14px 18px;border-radius:7px;font-size:11px;font-weight:800}
@media(max-width:920px){.shared-inner{grid-template-columns:1fr;min-height:auto;padding:24px 0}.shared-nav{flex-wrap:wrap}.shared-nav a{padding:6px}.shared-publish{display:none}.footer-grid{grid-template-columns:1fr 1fr}.shared-cta .container{align-items:flex-start;flex-direction:column}}
@media(max-width:600px){.shared-inner{width:calc(100% - 28px)}.footer-grid{grid-template-columns:1fr}.shared-cta h2{font-size:33px}}
</style>`;
document.head.insertAdjacentHTML('beforeend',style);
const h=document.getElementById('site-header'),f=document.getElementById('site-footer'),c=document.getElementById('site-cta-strutture');
if(h)h.innerHTML=header;if(f)f.innerHTML=footer;if(c)c.innerHTML=cta;
const current=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.shared-nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
})();
