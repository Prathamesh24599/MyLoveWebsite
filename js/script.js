const screens=[...document.querySelectorAll('.screen')];
const show=id=>screens.forEach(s=>s.classList.toggle('active',s.id===id));
const loveNote="You make ordinary moments feel special, and your smile has a way of making my day brighter. I hope this little surprise reminds you how loved and appreciated you are. Keep smiling, Sweetheart. ❤️";
document.getElementById('start').onclick=()=>show('letter');
let timer;
document.getElementById('envelope').onclick=()=>{
 const e=document.getElementById('envelope');if(e.classList.contains('open'))return;
 e.classList.add('open');setTimeout(()=>{show('message');typeNote()},1250);
};
function typeNote(){const el=document.getElementById('typed');el.textContent='';let i=0;clearInterval(timer);timer=setInterval(()=>{el.textContent+=loveNote[i++]||'';if(i>=loveNote.length)clearInterval(timer)},42)}
document.getElementById('last').onclick=()=>show('final');
document.getElementById('again').onclick=()=>{document.getElementById('envelope').classList.remove('open');clearInterval(timer);show('welcome')};
setInterval(()=>{const h=document.createElement('span');h.className='float-heart';h.textContent=['♥','♡','❤'][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+'vw';h.style.fontSize=12+Math.random()*20+'px';h.style.animationDuration=7+Math.random()*7+'s';document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),15000)},650);