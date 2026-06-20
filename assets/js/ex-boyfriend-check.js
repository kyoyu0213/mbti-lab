/* ============================================================
   元彼引きずり度診断（ex-boyfriend-check.html）
   12問・4択。各回答 +3/+2/+1/+0 で hikizuriScore を集計（最大36）、
   4タイプ＋引きずり度%を判定。責めず、前向きに締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const ARTICLE_DATA = {
    sns:      { title:'別れた後にSNSを見てしまうMBTIランキング', desc:'別れた相手をつい追ってしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n8d28d4e40a7f' },
    koukai:   { title:'別れを後悔しやすいMBTIランキング', desc:'あとから未練が出やすいタイプを解説。', url:'https://note.com/intj_analyst/n/nfbd192ab74c4' },
    kojirase: { title:'恋愛を拗らせやすいMBTIランキング', desc:'恋をこじらせがちなタイプを解説。', url:'https://note.com/intj_analyst/n/n3b0c13914760' },
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    kompleks: { title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' }
  };

  const TIERS = [
    { min: 27, key: 'juushou' },
    { min: 18, key: 'hozon' },
    { min: 9,  key: 'yuremodori' },
    { min: 0,  key: 'sotsugyou' }
  ];
  const RESULTS = {
    juushou: {
      name: '未練重症タイプ',
      overview: 'まだ元彼が心の中心に残っていて、SNSや連絡、思い出に強く反応しやすい状態。それだけ本気で愛した証拠です。',
      points: 'ふとした瞬間に思い出したり、SNSや近況に気持ちが大きく揺れたりしやすいです。',
      pitfall: '思い出を美化しすぎて、前に進むきっかけを逃してしまうこと。',
      hint: '無理に忘れようとしなくて大丈夫。まずは「彼に使っていた時間」を、少しずつ自分のために使ってみて。',
      articles: ['sns', 'koukai', 'dep']
    },
    hozon: {
      name: '思い出保存タイプ',
      overview: '前には進みたいけれど、元彼との思い出を完全には手放せていない状態。思い出を大切にできる優しさがある人です。',
      points: '新しい恋を考えると、つい元彼と比べてしまう瞬間があります。',
      pitfall: '思い出を基準にしすぎて、新しい出会いの良さに気づきにくくなること。',
      hint: '思い出は無理に消さなくてOK。「あの恋があったから今がある」と置いておけば、次の恋にもそっと進めます。',
      articles: ['koukai', 'kojirase', 'kompleks']
    },
    yuremodori: {
      name: '揺れ戻り注意タイプ',
      overview: '普段は大丈夫でも、連絡や近況をきっかけに気持ちが戻りやすい状態です。',
      points: '元彼から連絡が来たり、近況を知ったりした時に、心が一気に揺れやすいです。',
      pitfall: '寂しい時に勢いで連絡して、振り出しに戻ってしまうこと。',
      hint: '揺れた時こそ、すぐ動かず一晩おいて。落ち着いた自分の判断を信じてあげましょう。',
      articles: ['sns', 'dep', 'kompleks']
    },
    sotsugyou: {
      name: '卒業目前タイプ',
      overview: '未練はかなり整理されていて、新しい恋や自分の生活に意識を向けられる状態。前に進む準備が整いつつあります。',
      points: '元彼を思い出しても、引きずらず受け流せています。',
      pitfall: '「もう平気」と気を張りすぎて、たまの寂しさを無理に抑え込まないで。',
      hint: 'あなたはもう次へ進める段階。新しい出会いや、好きなことに気持ちを向けてみて。',
      articles: ['kojirase', 'kompleks']
    }
  };

  const QUESTIONS = [
    { q: '元彼のSNSを見る頻度は？', a: [
      { p:3, label:'ほぼ毎日見てしまう' },
      { p:2, label:'時々見てしまう' },
      { p:1, label:'たまに思い出した時だけ' },
      { p:0, label:'ほとんど見ない' } ] },
    { q: '元彼から連絡が来たら？', a: [
      { p:3, label:'すぐに返信すると思う' },
      { p:2, label:'迷うけど返信するかも' },
      { p:1, label:'内容による' },
      { p:0, label:'返信しないと思う' } ] },
    { q: '新しい恋を考えた時は？', a: [
      { p:3, label:'元彼と比べてしまう' },
      { p:2, label:'まだ少し抵抗がある' },
      { p:1, label:'いい人がいれば進みたい' },
      { p:0, label:'前向きに考えられる' } ] },
    { q: '別れた理由について？', a: [
      { p:3, label:'何度も考えてしまう' },
      { p:2, label:'まだ納得できていない' },
      { p:1, label:'たまに思い出す程度' },
      { p:0, label:'もう整理できている' } ] },
    { q: '元彼の近況を知った時は？', a: [
      { p:3, label:'かなり心が揺れる' },
      { p:2, label:'少し気になる' },
      { p:1, label:'まあ気になる程度' },
      { p:0, label:'特に何も思わない' } ] },
    { q: '元彼との思い出の品は？', a: [
      { p:3, label:'まだ大切に取ってある' },
      { p:2, label:'捨てられずにいる' },
      { p:1, label:'いつか整理しようと思う' },
      { p:0, label:'もう処分した' } ] },
    { q: 'ふと元彼を思い出すのは？', a: [
      { p:3, label:'一日に何度も' },
      { p:2, label:'一日一回くらい' },
      { p:1, label:'たまに' },
      { p:0, label:'ほとんどない' } ] },
    { q: '思い出の場所や曲に触れると？', a: [
      { p:3, label:'胸が締めつけられる' },
      { p:2, label:'少し切なくなる' },
      { p:1, label:'懐かしいなと思う' },
      { p:0, label:'特に何も感じない' } ] },
    { q: '復縁の可能性を？', a: [
      { p:3, label:'今でも願っている' },
      { p:2, label:'ときどき考える' },
      { p:1, label:'ないと思うが気になる' },
      { p:0, label:'もう考えていない' } ] },
    { q: '元彼に新しい恋人ができたら？', a: [
      { p:3, label:'強くショックを受ける' },
      { p:2, label:'けっこう落ち込む' },
      { p:1, label:'少し気になる' },
      { p:0, label:'幸せならいいと思える' } ] },
    { q: '今の恋愛への気持ちは？', a: [
      { p:3, label:'元彼以上の人はいない気がする' },
      { p:2, label:'つい比べてしまいそう' },
      { p:1, label:'新しい恋もありかも' },
      { p:0, label:'新しい恋を楽しみたい' } ] },
    { q: '「もう終わったこと」と？', a: [
      { p:3, label:'思おうとしても無理' },
      { p:2, label:'頭では分かっているけれど' },
      { p:1, label:'だいぶ思えるようになった' },
      { p:0, label:'しっかり思えている' } ] }
  ];

  const MAX = QUESTIONS.length * 3;

  function articleCard(key) {
    const a = ARTICLE_DATA[key] || {};
    const url = a.url || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    const cta = a.cta || (ext ? 'noteで読む' : '見てみる');
    return `<article class="card"><h4>${a.title || ''}</h4>${a.desc ? `<p>${a.desc}</p>` : ''}<a class="btn" href="${url}"${at}>${cta}</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#ex-quiz');
    const btn = document.querySelector('#ex-go');
    const out = document.querySelector('#ex-result');
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
      let score = 0, answered = 0;
      QUESTIONS.forEach((item, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) { answered++; score += item.a[Number(sel.value)].p; }
      });
      if (answered < QUESTIONS.length) {
        out.innerHTML = `<p class="compat-hint">すべての質問（残り${QUESTIONS.length - answered}問）に答えてください。</p>`;
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const pct = Math.round(score / MAX * 100);
      const tier = TIERS.find(t => score >= t.min) || TIERS[TIERS.length - 1];
      const r = RESULTS[tier.key];
      const cards = r.articles.map(articleCard).join('');
      out.innerHTML = `
        <div class="result-card">
          <p class="result-lead">診断結果</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">元彼引きずり度</p>
          <div class="score"><span class="score-num">${pct}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${pct}%"></span></div>
          <p class="result-feature">${r.overview}</p>
        </div>
        <div class="result-block"><h3>💭 引きずりやすいポイント</h3><p>${r.points}</p></div>
        <div class="result-block"><h3>🕳️ 気をつけたい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 前に進むためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="ex-retry">もう一度診断する</button>
        <p class="compat-note">※ 引きずってしまうのは、それだけ真剣に愛せた証。未練があってもOKです。あなたのペースで、少しずつ前を向けば大丈夫。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#ex-retry');
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
