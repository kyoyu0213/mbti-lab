/* ============================================================
   恋人に求めすぎ度診断（expectation-check.html）
   12問・4択。5スコア（lowExpectation/balanced/mindReading/highStandard/prince）
   を集計、最高点を結果に。各タイプ固定の求めすぎ度%。責めない・前向きに締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    sat:      { title:'恋愛満足度診断', desc:'今の恋がどれくらい満たされているかチェック。', url:'love-satisfaction.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    nogashi:  { title:'本命逃し度診断', desc:'幸せになれそうな恋を逃していないかチェック。', url:'honmei-nogashi.html', cta:'診断してみる' },
    complex:  { title:'恋愛コンプレックス診断', desc:'恋愛で自信がなくなる本当の理由をチェック。', url:'love-complex.html', cta:'診断してみる' },
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    intj_f: fem('INTJ', 'https://note.com/intj_analyst/n/n5e4d6eb0a254'),
    entj_f: fem('ENTJ', 'https://note.com/intj_analyst/n/n3cf721ee03ea'),
    enfj_f: fem('ENFJ', 'https://note.com/intj_analyst/n/ndd7de83a3e20')
  };

  const RESULTS = {
    prince: {
      name: '王子様待ちタイプ', percent: 95,
      seeks: '愛情表現・特別扱い・誠実さ・将来性——「完璧な恋人像」を相手に重ねやすいです。',
      gap: '理想と現実のギャップに、目の前の相手が物足りなく見えてしまうこと。',
      pitfall: '理想を求めるうちに、本当は素敵な相手を見送ってしまうこと。',
      hint: '理想は「願い」であって「条件」ではありません。100点を探すより、一緒にいて心地よい人の良さを見つけてみて。',
      articles: ['complex', 'sat', 'jirai']
    },
    highStandard: {
      name: '理想高すぎタイプ', percent: 80,
      seeks: '愛情表現・誠実さ・将来性など、相手に高い基準を求めやすいです。',
      gap: '欠点が気になって、相手の良いところが見えにくくなること。',
      pitfall: '基準を満たそうとするうちに、相手を減点方式で見てしまうこと。',
      hint: '減点より加点で。「直してほしい」より「ここが好き」を増やすと、関係はぐっと温かくなります。',
      articles: ['intj_f', 'entj_f', 'nogashi']
    },
    mindReading: {
      name: '察してほしいタイプ', percent: 60,
      seeks: '「言わなくても気づいてほしい」という気持ちが強くなりやすいです。',
      gap: '伝える前に期待してしまい、気づいてもらえないとモヤモヤすること。',
      pitfall: '察してもらえない不満が、すれ違いやケンカに変わってしまうこと。',
      hint: '言葉にするのは「負け」ではありません。「こうしてくれると嬉しい」と伝えるほど、愛されやすくなります。',
      articles: ['isfp_f', 'jirai', 'sat']
    },
    balanced: {
      name: '普通タイプ', percent: 40,
      seeks: '恋人に求めるものはあるけれど、現実的な範囲でバランスが取れています。',
      gap: 'ときどき期待が高まる場面もありますが、おおむね健全です。',
      pitfall: '我慢と要求のバランスが崩れた時だけ、少し注意。',
      hint: '今のバランス感覚は理想的。求めることも、受け入れることも、両方できるのが強みです。',
      articles: ['lovetype', 'dep']
    },
    lowExpectation: {
      name: '仏タイプ', percent: 15,
      seeks: '求めすぎ度は低め。相手のペースや違いを受け入れやすく、穏やかにいられます。',
      gap: '受け入れすぎて、自分の希望を後回しにしてしまうことも。',
      pitfall: '我慢が当たり前になって、本当の願いが伝わらないこと。',
      hint: 'その包容力は大きな魅力。たまには「これが嬉しい」と希望を出すと、相手も応えやすくなります。',
      articles: ['compat', 'sat']
    }
  };
  const PRIORITY = ['prince', 'highStandard', 'mindReading', 'balanced', 'lowExpectation'];

  const QUESTIONS = [
    { q: '恋人からの連絡頻度は？', a: [
      { t:'prince', label:'毎日しっかり欲しい' },
      { t:'highStandard', label:'できれば毎日ほしい' },
      { t:'balanced', label:'用事がある時で大丈夫' },
      { t:'lowExpectation', label:'相手のペースでいい' } ] },
    { q: '恋人にしてほしいことは？', a: [
      { t:'mindReading', label:'言わなくても気づいてほしい' },
      { t:'mindReading', label:'できれば察してほしい' },
      { t:'balanced', label:'必要なことは言えば分かってくれればいい' },
      { t:'lowExpectation', label:'そこまで求めない' } ] },
    { q: '愛情表現については？', a: [
      { t:'prince', label:'言葉でも行動でもたくさんほしい' },
      { t:'highStandard', label:'たまには分かりやすく示してほしい' },
      { t:'balanced', label:'行動で伝われば十分' },
      { t:'lowExpectation', label:'あまり気にしない' } ] },
    { q: '恋人の欠点を見つけた時は？', a: [
      { t:'highStandard', label:'直してほしいと思う' },
      { t:'mindReading', label:'気になる部分は察してほしい' },
      { t:'balanced', label:'多少は仕方ないと思う' },
      { t:'lowExpectation', label:'お互い様だと思う' } ] },
    { q: '理想の恋愛に近いのは？', a: [
      { t:'prince', label:'いつも大切にされている実感がほしい' },
      { t:'highStandard', label:'記念日や特別感を大切にしたい' },
      { t:'balanced', label:'安心できれば十分' },
      { t:'lowExpectation', label:'お互い自由でいられればいい' } ] },
    { q: '記念日やイベントは？', a: [
      { t:'prince', label:'毎回しっかり祝ってほしい' },
      { t:'highStandard', label:'ちゃんと覚えていてほしい' },
      { t:'balanced', label:'できる範囲でOK' },
      { t:'lowExpectation', label:'こだわらない' } ] },
    { q: '不満を感じた時は？', a: [
      { t:'mindReading', label:'言わなくても気づいてほしい' },
      { t:'highStandard', label:'はっきり改善を求める' },
      { t:'balanced', label:'落ち着いて伝える' },
      { t:'lowExpectation', label:'あまり気にしない' } ] },
    { q: '恋人に一番してほしいのは？', a: [
      { t:'prince', label:'お姫様のように大切に扱う' },
      { t:'mindReading', label:'察して先回りしてくれる' },
      { t:'balanced', label:'困った時に助けてくれる' },
      { t:'lowExpectation', label:'自然体でいてくれる' } ] },
    { q: '相手のスペックや条件は？', a: [
      { t:'highStandard', label:'ある程度は妥協したくない' },
      { t:'prince', label:'理想をすべて満たしてほしい' },
      { t:'balanced', label:'大事だけど中身重視' },
      { t:'lowExpectation', label:'あまり条件で見ない' } ] },
    { q: '返信が遅いと？', a: [
      { t:'prince', label:'もっと優先してほしいと思う' },
      { t:'mindReading', label:'察して早く返してほしい' },
      { t:'balanced', label:'忙しいのかなと思う' },
      { t:'lowExpectation', label:'気にしない' } ] },
    { q: '恋人に求める愛情の量は？', a: [
      { t:'prince', label:'たっぷり注いでほしい' },
      { t:'highStandard', label:'しっかり伝えてほしい' },
      { t:'balanced', label:'ほどよくあれば十分' },
      { t:'lowExpectation', label:'少なめでも平気' } ] },
    { q: '恋愛で大事にしたいのは？', a: [
      { t:'prince', label:'特別扱いされている実感' },
      { t:'mindReading', label:'分かり合えている感覚' },
      { t:'balanced', label:'お互いを尊重すること' },
      { t:'lowExpectation', label:'お互いの自由' } ] }
  ];

  function articleCard(key) {
    const a = ARTICLE_DATA[key] || {};
    const url = a.url || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    const cta = a.cta || (ext ? 'noteで読む' : '見てみる');
    return `<article class="card"><h4>${a.title || ''}</h4>${a.desc ? `<p>${a.desc}</p>` : ''}<a class="btn" href="${url}"${at}>${cta}</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#exp-quiz');
    const btn = document.querySelector('#exp-go');
    const out = document.querySelector('#exp-result');
    if (!quiz || !btn || !out) return;

    quiz.innerHTML = QUESTIONS.map((item, i) => `
      <div class="quiz-q">
        <p class="quiz-q-title"><span class="qnum">Q${i + 1}</span>${item.q}</p>
        <div class="quiz-opts">
          ${item.a.map((opt, j) => `
            <label class="quiz-opt">
              <input type="radio" name="q${i}" value="${j}">
              <span>${opt.label}</span>
            </label>`).join('')}
        </div>
      </div>`).join('');

    function showResult() {
      const scores = {};
      PRIORITY.forEach(k => scores[k] = 0);
      let answered = 0;
      QUESTIONS.forEach((item, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) { answered++; scores[item.a[Number(sel.value)].t]++; }
      });
      if (answered < QUESTIONS.length) {
        out.innerHTML = `<p class="compat-hint">すべての質問（残り${QUESTIONS.length - answered}問）に答えてください。</p>`;
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      let best = PRIORITY[0];
      PRIORITY.forEach(k => { if (scores[k] > scores[best]) best = k; });
      const r = RESULTS[best];
      const cards = r.articles.map(articleCard).join('');
      out.innerHTML = `
        <div class="result-card">
          <p class="result-lead">あなたの恋人への期待は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">求めすぎ度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.seeks}</p>
        </div>
        <div class="result-block"><h3>🌀 すれ違いやすいポイント</h3><p>${r.gap}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 もっと楽に愛されるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="exp-retry">もう一度診断する</button>
        <p class="compat-note">※ 求めることは、わがままでも重いことでもありません。恋愛に真剣な証。期待を「言葉」にできると、すれ違いはぐっと減ります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#exp-retry');
      if (retry) retry.addEventListener('click', () => {
        quiz.querySelectorAll('input[type="radio"]').forEach(x => { x.checked = false; });
        out.hidden = true;
        out.innerHTML = '';
        document.querySelector('.page-title').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    btn.addEventListener('click', showResult);
  });
})();
