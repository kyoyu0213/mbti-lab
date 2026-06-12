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

document.addEventListener('DOMContentLoaded',()=>{
  if(typeof popularArticles !== 'undefined') renderCards('#popular-list', popularArticles);
  if(typeof featuredTypes !== 'undefined'){
    renderCards('#types-list', featuredTypes.slice(0,6).map(t=>({title:`${t.type}男性攻略`,excerpt:'好きな人への態度・LINE傾向・脈ありサインほか',url:t.url})));
    renderTypeCards('#types-cards', featuredTypes);
  }
  if(typeof rankingArticles !== 'undefined') renderCards('#rankings-list', rankingArticles);
  if(typeof noteSections !== 'undefined') renderNoteSections('#note-list', noteSections);
});
