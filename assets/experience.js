'use strict';
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const motion=matchMedia('(prefers-reduced-motion: reduce)'),saveData=navigator.connection?.saveData===true;
function wa(message){return 'https://wa.me/5519997395323?text='+encodeURIComponent(message)}
$$('.wa').forEach(a=>{a.href=wa(a.dataset.product?'Olá, iUP! Gostaria de consultar valores e disponibilidade do '+a.dataset.product+'.':'Olá, iUP! Vim pelo site e gostaria de conhecer os produtos Apple disponíveis.');a.target='_blank';a.rel='noopener'});
const menu=$('.menu'),links=$('.links');function closeMenu(){links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.textContent='☰'}
menu.addEventListener('click',()=>{let open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.textContent=open?'×':'☰'});$$('.links a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&links.classList.contains('open')){closeMenu();menu.focus()}});
if('IntersectionObserver' in window){document.documentElement.classList.add('js');const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08});$$('.reveal').forEach(e=>reveal.observe(e))}
const models={
 iphone17:{name:'iPhone 17',description:'Um novo olhar para tudo o que você ama.',colors:[['Lavanda','#b8bad6','17-lavender.jpg'],['Sálvia','#a9bca3','17-sage.jpg'],['Azul-névoa','#aec5d7','17-blue.jpg'],['Branco','#efefeb','17-white.jpg'],['Preto','#404148','17-black.jpg']]},
 air:{name:'iPhone Air',description:'Design que encanta. Presença que faz a diferença.',colors:[['Azul-céu','#c5d3df','air-blue.jpg'],['Dourado-claro','#e9dfc8','air-gold.jpg'],['Branco-nuvem','#efefeb','air-white.jpg'],['Preto-espacial','#353638','air-black.jpg']]},
 pro:{name:'iPhone 18 Pro',description:'Explore o design, os acabamentos e cada detalhe da linha Pro.',dark:true,colors:[['Bordô','#623743','pro-burgundy.jpg'],['Glacial','#a4b2bc','pro-glacier.jpg'],['Prateado','#d4d4d4','pro-silver.jpg'],['Preto','#2e2e31','pro-black.jpg']]}
};
let modelKey='iphone17',colorIndex=0,imageVersion=0;
function setColor(index,animate=true){colorIndex=index;const m=models[modelKey],c=m.colors[index],img=$('#model-image'),visual=$('.model-visual'),version=++imageVersion;$('#color-name').textContent=c[0];$$('.swatch').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));$('#model-contact').href=wa('Olá, iUP! Gostaria de consultar o '+m.name+' na cor '+c[0]+'. Pode me informar capacidades, valores e disponibilidade?');if(animate&&!motion.matches)visual.classList.add('changing');const next=new Image();next.onload=()=>{if(version!==imageVersion)return;img.src=next.src;img.alt=m.name+' na cor '+c[0];visual.classList.remove('changing')};next.onerror=()=>{if(version===imageVersion)visual.classList.remove('changing')};next.src='assets/apple/'+c[2]}
function setModel(key,focus=false){modelKey=key;colorIndex=0;const m=models[key];$$('[data-model]').forEach(b=>{let on=b.dataset.model===key;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;if(on&&focus)b.focus()});$('#model-panel').setAttribute('aria-labelledby','tab-'+key);$('#model-name').textContent=m.name;$('#model-description').textContent=m.description;$('.model-visual').classList.toggle('is-dark',!!m.dark);$('#color-options').replaceChildren();m.colors.forEach((c,i)=>{let b=document.createElement('button');b.className='swatch';b.style.setProperty('--swatch',c[1]);b.setAttribute('aria-label',c[0]);b.setAttribute('title',c[0]);b.setAttribute('aria-pressed',String(i===0));b.addEventListener('click',()=>setColor(i));$('#color-options').append(b)});setColor(0,false)}
$$('[data-model]').forEach(b=>{b.addEventListener('click',()=>setModel(b.dataset.model));b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let keys=Object.keys(models),i=keys.indexOf(modelKey);i=e.key==='Home'?0:e.key==='End'?keys.length-1:(i+(e.key==='ArrowRight'?1:-1)+keys.length)%keys.length;setModel(keys[i],true)})});$$('[data-explore]').forEach(b=>b.addEventListener('click',()=>{setModel(b.dataset.explore);$('#explorar').scrollIntoView({behavior:motion.matches?'instant':'smooth'})}));setModel('iphone17');
const dialog=$('#detail-dialog');let dialogTrigger=null;function showDetail({name,image,description,dark=false},trigger){dialogTrigger=trigger;$('#dialog-title').textContent=name;$('#dialog-description').textContent=description;$('#dialog-image').src=image;$('#dialog-image').alt=name+' — detalhe do produto';$('.dialog-media').classList.toggle('dark',dark);$('#dialog-contact').href=wa('Olá, iUP! Gostaria de consultar valores e disponibilidade do '+name+'.');dialog.showModal();document.body.style.overflow='hidden'}
const details={
 macbook:{name:'MacBook',image:'assets/catalogo/macbook.webp',description:'Conheça as opções de MacBook para trabalho, estudo e criação. Consulte modelos e disponibilidade com a iUP.'},
 ipad:{name:'iPad',image:'assets/catalogo/ipad.webp',description:'Veja opções de iPad para estudar, desenhar e trabalhar. Consulte modelos e disponibilidade com a iUP.'},
 watch:{name:'Apple Watch',image:'assets/catalogo/watch.webp',dark:true,description:'Acompanhe seus treinos e o dia a dia pelo pulso. Consulte modelos, tamanhos e disponibilidade com a iUP.'},iphone16:{name:'iPhone 16',image:'assets/iphone16.jpg',description:'Mais possibilidades. Do seu jeito, todos os dias. Consulte versões, cores, capacidade e valores.'},air:{name:'iPhone Air',image:'assets/apple/air-design.jpg',description:'Leveza que impressiona. Conheça de perto o design e converse com a iUP sobre sua próxima escolha.'},pro:{name:'iPhone 18 Pro',image:'assets/apple/pro-burgundy.jpg',dark:true,description:'Um olhar mais próximo para o acabamento e o sistema de câmeras. Consulte modelos, cores e disponibilidade com nossa equipe.'},duo:{name:'iPhone Duo',image:'assets/apple/duo-design.jpg',description:'Veja o produto aberto, fechado e em diferentes ângulos. Fale com a iUP para saber mais sobre disponibilidade e condições.'}};
$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>showDetail(details[b.dataset.modal],b)));$('#zoom-model').onclick=e=>{const m=models[modelKey],c=m.colors[colorIndex];showDetail({name:m.name+' · '+c[0],image:'assets/apple/'+c[2],description:m.description,dark:m.dark},e.currentTarget)};$('.dialog-close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});dialog.addEventListener('close',()=>{document.body.style.overflow='';dialogTrigger?.focus({preventScroll:true})});
function loadFilm(video){const source=video.querySelector('source');if(source?.dataset.src){source.src=source.dataset.src;delete source.dataset.src;video.load()}}
const hero = $('#hero-video');
const mobileLayout = matchMedia('(max-width: 800px)');

hero.addEventListener('playing', () => {
  const revealFrame = () => {
    if (!hero.paused) hero.classList.add('hero-frame-ready');
  };
  if (typeof hero.requestVideoFrameCallback === 'function') {
    hero.requestVideoFrameCallback(revealFrame);
  } else {
    requestAnimationFrame(revealFrame);
  }
});
let heroVisible = !('IntersectionObserver' in window);

function syncHeroPlayback() {
  if (!heroVisible || document.hidden || motion.matches || saveData ||
      document.documentElement.classList.contains('intro-playing')) {
    hero.pause();
    return;
  }

  hero.play().catch(() => {
    // The poster stays visible if the browser blocks autoplay.
  });
}

const duo=$('#duo-video'),story=$('.duo-story'),duoReplay=$('#duo-replay');let storyVisible=false,manualDuo=false,ticking=false;
function updateScroll() {
  ticking = false;
  if (motion.matches || mobileLayout.matches) return;

  const heroRect = $('.hero').getBoundingClientRect();
  if (heroRect.bottom > 0 && heroRect.top < innerHeight) {
    const progress = Math.max(0, Math.min(1, -heroRect.top / heroRect.height));
    $('.hero-image').style.transform = `translateX(-50%) translateY(${progress * 30}px) scale(${1 + progress * .055})`;
  }
  if (!storyVisible) return;

  const pinned = $('.duo-sticky');
  const top = parseFloat(getComputedStyle(pinned).top) || 0;
  const distance = Math.max(1, story.offsetHeight - pinned.offsetHeight);
  const progress = Math.max(0, Math.min(1, (top - story.getBoundingClientRect().top) / distance));
  story.style.setProperty('--story-progress', progress.toFixed(4));
  if (!saveData && !manualDuo && duo.readyState >= 1 && Number.isFinite(duo.duration) && !duo.seeking) {
    const time = Math.min(duo.duration - .04, duo.duration * progress);
    if (Math.abs(duo.currentTime - time) > .045) duo.currentTime = Math.max(0, time);
  }
}
mobileLayout.addEventListener('change', () => {
  $('.hero-image').style.removeProperty('transform');
  if (!mobileLayout.matches && storyVisible && !motion.matches && !saveData) loadFilm(duo);
  schedule();
});
function schedule(){if(!ticking){ticking=true;requestAnimationFrame(updateScroll)}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);duo.addEventListener('loadedmetadata',schedule);duo.addEventListener('seeked',()=>{if(storyVisible&&!manualDuo)schedule()});duoReplay.onclick=()=>{loadFilm(duo);if(manualDuo&&!duo.paused){duo.pause();manualDuo=false;duoReplay.textContent='Reproduzir apresentação ↗';schedule()}else{manualDuo=true;duo.currentTime=0;duo.play().then(()=>{duoReplay.textContent='Pausar apresentação Ⅱ'}).catch(()=>{manualDuo=false;duoReplay.textContent='Reproduzir apresentação ↗'})}};duo.addEventListener('ended',()=>{manualDuo=false;duoReplay.textContent='Reproduzir apresentação ↗'});
function syncMotion() {
  document.documentElement.classList.toggle('reduced', motion.matches);
  if (motion.matches) {
    duo.pause();
    manualDuo = false;
    $('.hero-image').style.transform = 'translateX(-50%)';
    duoReplay.textContent = 'Reproduzir apresentação ↗';
  }
  syncHeroPlayback();
  schedule();
}

motion.addEventListener('change', syncMotion);
if ('IntersectionObserver' in window) {
  const films = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.target === hero) {
        heroVisible = entry.isIntersecting;
        syncHeroPlayback();
        continue;
      }
      storyVisible = entry.isIntersecting;
      if (storyVisible && !mobileLayout.matches && !motion.matches && !saveData) {
        loadFilm(duo);
        schedule();
      } else if (!storyVisible) {
        duo.pause();
        manualDuo = false;
        duoReplay.textContent = 'Reproduzir apresentação ↗';
      }
    }
  }, { threshold: .05 });
  films.observe(hero);
  films.observe(story);
}

syncMotion();
document.addEventListener('visibilitychange', () => {
  syncHeroPlayback();
  if (document.hidden) duo.pause();
});

window.addEventListener('iup:intro-ended', syncHeroPlayback);

const productCarousel = $('.product-carousel');
const productCards = $$('.product-carousel .detail-card');
const productDots = $$('[data-product-slide]');
const productArrows = $('.product-arrows');
const productStatus = $('.product-status');
let activeProduct = 0;

function resetProductTilt(card) {
  card.removeAttribute('data-tilting');
  card.style.removeProperty('--tilt-x');
  card.style.removeProperty('--tilt-y');
}

function showProduct(index, announce = true) {
  const count = productCards.length;
  activeProduct = (index + count) % count;
  productCards.forEach((card, position) => {
    const relative = (position - activeProduct + count) % count;
    const active = relative === 0;
    card.dataset.position = active ? 'active' : relative === 1 ? 'next' : relative === count - 1 ? 'previous' : 'hidden';
    card.inert = !active;
    card.setAttribute('aria-hidden', String(!active));
    if (active) productDots[position].setAttribute('aria-current', 'true');
    else productDots[position].removeAttribute('aria-current');
    resetProductTilt(card);
  });
  if (announce) {
    const name = productCards[activeProduct].querySelector('.eyebrow').textContent;
    productStatus.textContent = `${activeProduct + 1} de ${count}. ${name}.`;
  }
}

showProduct(0, false);
productCarousel.dataset.ready = '';
productArrows.hidden = false;
$('.product-pagination').hidden = false;
$$('[data-product-step]').forEach(button => {
  button.addEventListener('click', () => showProduct(activeProduct + Number(button.dataset.productStep)));
});
productDots.forEach(button => {
  button.addEventListener('click', () => showProduct(Number(button.dataset.productSlide)));
});
productCarousel.addEventListener('keydown', event => {
  const step = {ArrowLeft: -1, ArrowRight: 1}[event.key];
  if (!step || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  event.preventDefault();
  if (productCards[activeProduct].contains(event.target)) {
    productArrows.querySelector(`[data-product-step="${step}"]`).focus({preventScroll: true});
  }
  showProduct(activeProduct + step);
});

const precisePointer = matchMedia('(hover: hover) and (pointer: fine)');
productCards.forEach(card => {
  card.addEventListener('pointermove', event => {
    if (motion.matches || !precisePointer.matches || event.pointerType !== 'mouse' ||
        card.dataset.position !== 'active') return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.setAttribute('data-tilting', '');
    card.style.setProperty('--tilt-x', `${(.5 - y) * 6}deg`);
    card.style.setProperty('--tilt-y', `${(x - .5) * 8}deg`);
  });
  card.addEventListener('pointerleave', () => resetProductTilt(card));
});
