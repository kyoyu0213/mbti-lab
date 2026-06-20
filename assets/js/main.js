/* ============ 汎用カード（rankings.html などで使用） ============ */
function renderCards(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(it=>{
    const ext = it.url && it.url.startsWith('http');
    const attr = ext ? ' target="_blank" rel="noopener"' : '';
    const label = ext ? 'noteで読む' : '記事を見る';
    return `
    <article class="card">
      <h4>${it.title}</h4>
      ${it.excerpt ? `<p>${it.excerpt}</p>` : ''}
      <a class="btn" href="${it.url || '#'}"${attr}>${label}</a>
    </article>`;
  }).join('');
}

/* アイキャッチ付きカード（note記事一覧・ランキング一覧で使用） */
function noteCardHtml(n, tag){
  return `
    <article class="note-card">
      <a class="note-thumb" href="${n.url || '#'}" target="_blank" rel="noopener">
        ${n.img ? `<img loading="lazy" src="${n.img}" alt="">` : ''}
      </a>
      <div class="note-body">
        ${tag ? `<span class="tag">${tag}</span>` : ''}
        <h4><a href="${n.url || '#'}" target="_blank" rel="noopener">${n.title}</a></h4>
        ${n.excerpt ? `<p>${n.excerpt}</p>` : ''}
      </div>
    </article>`;
}
function renderNoteCards(selector, items, tag){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(n=>noteCardHtml(n, tag)).join('');
}

/* タイプ別 大きめカード（types.html） */
function renderTypeCards(selector, types){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(types)) return;
  const tags = (typeof SUBHEADINGS !== 'undefined' ? SUBHEADINGS : [])
    .map(s=>`<span class="tag">${s}</span>`).join('');
  const jp = (typeof mbtiName === 'function') ? mbtiName : (()=> '');
  const grp = (typeof mbtiGroup === 'function') ? mbtiGroup : (()=> '');
  el.innerHTML = types.map(t=>{
    const ext = t.url && t.url.startsWith('http');
    const attr = ext ? ' target="_blank" rel="noopener"' : '';
    const label = ext ? 'noteで読む' : '記事を見る';
    const name = jp(t.type);
    return `
    <article class="card type-card-lg">
      <div class="type-head">
        <span class="type-badge mbti-${grp(t.type)}">${t.type}</span>
        <span class="type-label">${name ? `<b class="type-name">${name}</b>` : ''}男性攻略</span>
      </div>
      <div class="meta">${tags}</div>
      <a class="btn" href="${t.url || '#'}"${attr}>${label}</a>
    </article>`;
  }).join('');
}

/* note有料記事 セクション別（note.html） */
function renderNoteSections(selector, sections){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(sections)) return;
  el.innerHTML = sections.map(sec=>`
    <section class="section">
      <h3>${sec.category}</h3>
      <div class="note-list">
        ${sec.items.map(n=>noteCardHtml(n, sec.tag)).join('')}
      </div>
    </section>
  `).join('');
}

/* ============ トップページ ============ */

/* 人気診断カード */
function renderDiagnoses(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  const personSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5"/></svg>`;
  const art = a => a==='person' ? `<div class="diag-art person">${personSvg}</div>`
    : a==='hearts' ? `<div class="diag-art hearts">♥<span>♥</span></div>`
    : `<div class="diag-art heart">♥</div>`;
  el.innerHTML = items.map(it=>`
    <article class="diag-card">
      ${art(it.art)}
      <h4>${it.title}</h4>
      <a class="btn" href="${it.url || '#'}">診断する ›</a>
    </article>
  `).join('');
}

/* ランキング（順位バッジ付きリスト） */
function renderRankList(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map((it,i)=>`
    <li><span class="rank-num">${i+1}</span><a href="${it.url || '#'}">${it.title}</a></li>
  `).join('');
}

/* 男性攻略アバター */
function renderAvatars(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(t=>{
    const bg = t.img ? `style="background-image:url('${t.img}')"` : '';
    return `<a class="avatar-item" href="${t.url || '#'}">
      <span class="avatar" ${bg}></span>
      <span class="avatar-cap"><b>${t.type}</b>男性攻略</span>
    </a>`;
  }).join('');
}

/* コラム カテゴリ リスト */
function renderColumnList(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(c=>`<li><a href="${c.url || '#'}">${c.name}</a></li>`).join('');
}

/* 記事サムネ リスト（人気記事・note） */
function renderThumbList(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(it=>{
    const bg = it.img ? `style="background-image:url('${it.img}')"` : '';
    const glyph = it.img ? '' : '♥';
    const target = (it.url && it.url.startsWith('http')) ? ' target="_blank" rel="noopener"' : '';
    return `<li>
      <span class="thumb" ${bg}>${glyph}</span>
      <a href="${it.url || '#'}"${target}>${it.title}</a>
    </li>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
  /* トップ */
  if(typeof homeDiagnoses !== 'undefined') renderDiagnoses('#home-diagnoses', homeDiagnoses);
  if(typeof homeRankings !== 'undefined') renderRankList('#dash-rankings', homeRankings);
  if(typeof homeTypeGuides !== 'undefined') renderAvatars('#dash-types', homeTypeGuides);
  if(typeof columnCategories !== 'undefined') renderColumnList('#dash-columns', columnCategories);
  if(typeof popularArticles !== 'undefined') renderThumbList('#dash-popular', popularArticles.slice(0,4));
  if(typeof noteSections !== 'undefined'){
    const flatNotes = noteSections.flatMap(s=>s.items).slice(0,3);
    renderThumbList('#dash-note', flatNotes);
  }

  /* サブページ */
  if(typeof rankingSections !== 'undefined') renderNoteSections('#rankings-list', rankingSections);
  if(typeof featuredTypes !== 'undefined') renderTypeCards('#types-cards', featuredTypes);
  if(typeof noteSections !== 'undefined') renderNoteSections('#note-list', noteSections);
});
