/* 共通カードレンダリング */
function renderCards(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(it=>`
    <article class="card">
      <h4>${it.title}</h4>
      ${it.excerpt ? `<p>${it.excerpt}</p>` : ''}
      <a class="btn" href="${it.url || '#'}">記事を見る</a>
    </article>
  `).join('');
}

/* タイプ別男性攻略カード（小見出しをタグ表示） */
function renderTypeCards(selector, types){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(types)) return;
  const tags = (typeof SUBHEADINGS !== 'undefined' ? SUBHEADINGS : [])
    .map(s=>`<span class="tag">${s}</span>`).join('');
  el.innerHTML = types.map(t=>`
    <article class="card">
      <h4>${t.type}男性攻略</h4>
      <div class="meta">${tags}</div>
      <a class="btn" href="${t.url || '#'}">記事を見る</a>
    </article>
  `).join('');
}

/* note有料記事をセクション別に描画 */
function renderNoteSections(selector, sections){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(sections)) return;
  el.innerHTML = sections.map(sec=>`
    <section class="section">
      <h3>${sec.category}</h3>
      <div class="cards">
        ${sec.items.map(n=>`
          <article class="card">
            <h4>${n.title}</h4>
            ${n.excerpt ? `<p>${n.excerpt}</p>` : ''}
            <p class="price">${n.price || '価格：準備中'}</p>
            <a class="btn outline" href="${n.url || '#'}" target="_blank" rel="noopener">noteで読む</a>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
}

/* トップ：人気診断カード */
function renderDiagnoses(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(it=>`
    <article class="card diag-card">
      <span class="badge">診断</span>
      <h4>${it.title}</h4>
      ${it.excerpt ? `<p>${it.excerpt}</p>` : ''}
      <a class="btn primary" href="${it.url || '#'}">診断する（準備中）</a>
    </article>
  `).join('');
}

/* トップ：タイプ別男性攻略の大きめカード */
function renderTypeGuides(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(it=>{
    const rows = Object.entries(it.attrs||{}).map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    return `
    <article class="card type-card-lg">
      <div class="type-head"><span class="type-badge">${it.type}</span><span class="type-label">男性攻略</span></div>
      <dl class="type-attrs">${rows}</dl>
      <a class="btn" href="${it.url || '#'}">攻略を読む</a>
    </article>`;
  }).join('');
}

/* カテゴリチップ */
function renderCategoryChips(selector, items){
  const el = document.querySelector(selector);
  if(!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(c=>`<a class="cat" href="${c.url || '#'}">${c.name}</a>`).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
  if(typeof homeDiagnoses !== 'undefined') renderDiagnoses('#home-diagnoses', homeDiagnoses);
  if(typeof homeRankings !== 'undefined') renderCards('#home-rankings', homeRankings);
  if(typeof homeTypeGuides !== 'undefined') renderTypeGuides('#home-types', homeTypeGuides);
  if(typeof columnCategories !== 'undefined') renderCategoryChips('#home-columns', columnCategories);
  if(typeof popularArticles !== 'undefined') renderCards('#popular-list', popularArticles);
  if(typeof featuredTypes !== 'undefined'){
    renderCards('#types-list', featuredTypes.slice(0,6).map(t=>({title:`${t.type}男性攻略`,excerpt:'好きな人への態度・LINE傾向・脈ありサインほか',url:t.url})));
    renderTypeCards('#types-cards', featuredTypes);
  }
  if(typeof rankingArticles !== 'undefined') renderCards('#rankings-list', rankingArticles);
  if(typeof noteSections !== 'undefined') renderNoteSections('#note-list', noteSections);
});
