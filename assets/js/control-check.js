/* ============================================================
   恋愛支配欲診断（control-check.html）
   12問・4択。5スコア（free/watch/lead/possessive/control）を集計、最高点を結果に。
   各タイプ固定の支配欲%。支配欲＝悪にしない／不安の言語化として前向きに締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    sat:      { title:'恋愛満足度診断', desc:'今の恋がどれくらい満たされているかチェック。', url:'love-satisfaction.html', cta:'診断してみる' },
    phero:    { title:'恋愛フェロモン診断', desc:'あなたが恋愛で放つ魅力タイプをチェック。', url:'love-pheromone.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    jealousy: { title:'嫉妬深度診断', desc:'あなたの嫉妬深さと独占欲の出方をチェック。', url:'jealousy-check.html', cta:'診断してみる' },
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    entj_f: fem('ENTJ', 'https://note.com/intj_analyst/n/n3cf721ee03ea'),
    estj_f: fem('ESTJ', 'https://note.com/intj_analyst/n/ncac5194b7898')
  };

  const RESULTS = {
    control: {
      name: '恋愛支配者タイプ', percent: 95,
      distance: '恋愛で主導権を失うことに強いストレスを感じやすいタイプ。相手をコントロールしたいというより、安心したい気持ちが強いです。',
      actions: '状況を把握したくなり、理由を聞いたり関係の流れを握ろうとしたり。',
      feels: '相手は「信頼されていないのかな」と窮屈に感じることがあります。',
      hint: '支配欲の正体は、実は「不安」。把握する代わりに「不安だから安心させて」と言葉にすると、関係はぐっと楽になります。',
      articles: ['jealousy', 'jirai', 'dep']
    },
    possessive: {
      name: '束縛予備軍タイプ', percent: 80,
      distance: '好きになるほど気になり、不安になるほど確認したくなるタイプ。愛情が深いぶん、心が揺れやすいです。',
      actions: '連絡や予定が見えないと不安になり、つい確認したくなる。',
      feels: '相手は「重いかも」と感じたり、逆に「大切にされてる」と感じたり、伝え方しだいです。',
      hint: '不安は「大切な証」。ぶつける前に深呼吸して、責めずに気持ちだけ伝えると、束縛にならずに済みます。',
      articles: ['jealousy', 'dep', 'line']
    },
    lead: {
      name: '主導権握りたいタイプ', percent: 60,
      distance: '恋愛で流れを作る側になりやすいタイプ。悪気はないけれど、自分のペースに相手を乗せたくなります。',
      actions: 'デートや予定を仕切り、関係をリードしようとする。',
      feels: '頼もしく感じてもらえる一方、相手の希望を置き去りにすることも。',
      hint: 'リードは長所。たまに「どうしたい？」と相手に委ねると、対等で心地よい関係になります。',
      articles: ['entj_f', 'estj_f']
    },
    watch: {
      name: '見守りタイプ', percent: 35,
      distance: '適度に気にはなるけれど、基本的には相手を信頼できるタイプ。ほどよい距離感を保てます。',
      actions: '気になっても見守り、必要な時だけ確認する。',
      feels: '相手は安心して、自分らしくいられます。',
      hint: '今の距離感は理想的。信頼を伝える言葉を時々足すと、関係はもっと安定します。',
      articles: ['phero', 'lovetype']
    },
    free: {
      name: '放牧タイプ', percent: 10,
      distance: '支配欲はかなり低め。恋人を一人の人間として尊重でき、束縛も干渉も少ないタイプです。',
      actions: '相手の自由を尊重し、干渉はほとんどしない。',
      feels: '居心地がいい一方、「興味が薄いのかな」と寂しく思わせることも。',
      hint: 'その自立は魅力。たまに「会いたい」「気になる」を見せると、相手はもっと愛されている実感を持てます。',
      articles: ['compat', 'sat']
    }
  };
  const PRIORITY = ['control', 'possessive', 'lead', 'watch', 'free'];

  const QUESTIONS = [
    { q: '恋人から返信が来ない時は？', a: [
      { t:'control', label:'理由を確認したくなる' },
      { t:'possessive', label:'少し不安で気になる' },
      { t:'watch', label:'忙しいんだと思う' },
      { t:'free', label:'ほとんど気にならない' } ] },
    { q: '恋人の異性の友達については？', a: [
      { t:'possessive', label:'正直かなり気になる' },
      { t:'control', label:'誰と仲が良いか把握したい' },
      { t:'watch', label:'信頼しているなら問題ない' },
      { t:'free', label:'全く気にならない' } ] },
    { q: 'デートの予定は？', a: [
      { t:'lead', label:'自分が決めたい' },
      { t:'watch', label:'一緒に決めたい' },
      { t:'free', label:'相手に任せることも多い' },
      { t:'control', label:'段取りまで自分で仕切りたい' } ] },
    { q: '恋人が勝手に予定を入れたら？', a: [
      { t:'control', label:'理由を聞きたくなる' },
      { t:'possessive', label:'少しモヤモヤする' },
      { t:'watch', label:'事前に言ってくれればOK' },
      { t:'free', label:'自由でいいと思う' } ] },
    { q: '恋愛で理想なのは？', a: [
      { t:'possessive', label:'いつも一緒にいたい' },
      { t:'lead', label:'自分がリードする関係' },
      { t:'watch', label:'お互いを尊重し合う関係' },
      { t:'free', label:'自由でいられる関係' } ] },
    { q: '恋人が急に連絡頻度を減らしたら？', a: [
      { t:'control', label:'理由を聞く' },
      { t:'possessive', label:'不安になる' },
      { t:'watch', label:'少し様子を見る' },
      { t:'free', label:'相手のペースだと思う' } ] },
    { q: '恋人の予定を？', a: [
      { t:'control', label:'だいたい把握しておきたい' },
      { t:'lead', label:'自分が調整したくなる' },
      { t:'watch', label:'なんとなく知っていれば十分' },
      { t:'free', label:'気にしない' } ] },
    { q: 'ケンカやすれ違いの時は？', a: [
      { t:'control', label:'相手を説得して正したくなる' },
      { t:'lead', label:'自分が主導して解決する' },
      { t:'possessive', label:'嫌われないか不安になる' },
      { t:'watch', label:'落ち着いて話し合う' } ] },
    { q: '恋人が他の異性と仲良くしていたら？', a: [
      { t:'possessive', label:'独占欲がうずく' },
      { t:'control', label:'関係を確認したくなる' },
      { t:'watch', label:'信頼しているので大丈夫' },
      { t:'free', label:'特に気にしない' } ] },
    { q: '恋愛で安心するのは？', a: [
      { t:'possessive', label:'常に繋がっていると感じる時' },
      { t:'control', label:'状況を把握できている時' },
      { t:'watch', label:'信頼し合えている時' },
      { t:'free', label:'お互い自由でいられる時' } ] },
    { q: '相手を自分のペースに？', a: [
      { t:'lead', label:'自然と乗せたくなる' },
      { t:'control', label:'できれば合わせてほしい' },
      { t:'watch', label:'お互いに合わせ合う' },
      { t:'free', label:'相手のペースを尊重する' } ] },
    { q: 'あなたの恋愛スタイルは？', a: [
      { t:'control', label:'主導権を握っていたい' },
      { t:'lead', label:'引っ張る側になりがち' },
      { t:'watch', label:'見守るのが基本' },
      { t:'free', label:'放任で自由' } ] }
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
    const quiz = document.querySelector('#control-quiz');
    const btn = document.querySelector('#control-go');
    const out = document.querySelector('#control-result');
    if (!quiz || !btn || !out) return;

    quiz.innerHTML = QUESTIONS.map((item, i) => `
      <div class="quiz-q">
        <p class="quiz-q-title"><span class="qnum">Q${i + 1}</span>${item.q}</p>
        <div class="quiz-opts">
          ${item.a.map(opt => `
            <label class="quiz-opt">
              <input type="radio" name="q${i}" value="${opt.t}">
              <span>${opt.label}</span>
            </label>`).join('')}
        </div>
      </div>`).join('');

    function showResult() {
      const scores = {};
      PRIORITY.forEach(k => scores[k] = 0);
      let answered = 0;
      QUESTIONS.forEach((_, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) { scores[sel.value]++; answered++; }
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
          <p class="result-lead">あなたの恋愛支配欲は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">恋愛支配欲</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.distance}</p>
        </div>
        <div class="result-block"><h3>📓 やりがちな行動</h3><p>${r.actions}</p></div>
        <div class="result-block"><h3>💭 相手が感じやすいこと</h3><p>${r.feels}</p></div>
        <div class="result-block"><h3>🌸 幸せな恋愛のヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="control-retry">もう一度診断する</button>
        <p class="compat-note">※ 支配欲は「悪」ではありません。その多くは「安心したい」という気持ちの表れ。正体が分かれば、もっと楽に愛せます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#control-retry');
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
