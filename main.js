// Simple static client JS for demo: mock database and UI interactions
const games = [
{id:1,title:'Neon Drift',platform:'PC',short:'High-speed cyberpunk racer',desc:'Race through neon streets...',cover:'assets/neon-drift.jpg',steam:'#'},
{id:2,title:'Shadowfall',platform:'PC',short:'Dark fantasy RPG',desc:'Explore ancient ruins...',cover:'assets/shadowfall.jpg',steam:'#'},
{id:3,title:'Orbitron',platform:'PC',short:'Sci-fi shooter',desc:'Fight in space arenas...',cover:'assets/orbitron.jpg',steam:'#'}
];


function el(q){return document.querySelector(q)}
function elAll(q){return document.querySelectorAll(q)}


// Insert year
document.addEventListener('DOMContentLoaded',()=>{
['#year','#year2','#year3'].forEach(id=>{const e=document.querySelector(id); if(e) e.textContent=new Date().getFullYear()});


// Fill featured on index
const featured = el('#featured-cards');
if(featured){
games.slice(0,3).forEach(g=>featured.appendChild(card(g)));
}


const catalog = el('#catalog-cards');
if(catalog){
games.forEach(g=>catalog.appendChild(card(g)));
}


// Catalog search
const cs = el('#catalog-search'); if(cs) cs.addEventListener('input', (ev)=>filterCatalog(ev.target.value));


// Search modal
const openSearch = el('#open-search'); if(openSearch) openSearch.addEventListener('click', ()=>el('#search-modal').classList.remove('hidden'));
const closeSearch = el('#close-search'); if(closeSearch) closeSearch.addEventListener('click', ()=>el('#search-modal').classList.add('hidden'));
const searchInput = el('#search-input'); if(searchInput) searchInput.addEventListener('input', (e)=>showSearch(e.target.value));


// Game page rendering
if(el('#game-page')){
const params = new URLSearchParams(location.search);
const id = parseInt(params.get('id')) || 1;
const g = games.find(x=>x.id===id) || games[0];
renderGame(g);
}


// Basic login mock
const loginForm = el('#login-form'); if(loginForm) loginFo