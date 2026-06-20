/* ============================================================
   彼依存度診断（dependence-check.html）
   12問・4択。各回答 +3/+2/+1/+0 で dependenceScore を集計（最大36）、
   4タイプ＋依存度%を判定。読者を否定せず、前向きに締める。
   記事は ARTICLE_DATA を差し替えるだけ。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const ARTICLE_DATA = {
    kojirase:  { title:'恋愛を拗らせやすいMBTIランキング', desc:'恋をこじらせがちなタイプを解説。', url:'https://note.com/intj_analyst/n/n3b0c13914760' },
    dameotoko: { title:'ダメ男を好きになりやすいMBTIランキング', desc:'問題のある相手に惹かれやすいタイプを解説。', url:'https://note.com/intj_analyst/n/nd29819f269a1' },
    sukiyoke:  { title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    infp:      { title:`${L('INFP')}女性の恋愛記事`, desc:'INFP女性の恋愛傾向・本音・幸せのヒント。', url:'https://note.com/intj_analyst/n/n8cd00438b91b' },
    infj:      { title:`${L('INFJ')}女性の恋愛記事`, desc:'INFJ女性の恋愛傾向・本音・幸せのヒント。', url:'https://note.com/intj_analyst/n/nf472dfb6c623' },
    isfj:      { title:`${L('ISFJ')}女性の恋愛記事`, desc:'ISFJ女性の恋愛傾向・本音・幸せのヒント。', url:'https://note.com/intj_analyst/n/n094e03a3fc66' },
    esfj:      { title:`${L('ESFJ')}女性の恋愛記事`, desc:'ESFJ女性の恋愛傾向・本音・幸せのヒント。', url:'https://note.com/intj_analyst/n/n7cdf00ad9cdd' }
  };

  /* スコアしきい値（最大36点）と4タイプ */
  const TIERS = [
    { min: 27, key: 'numa' },
    { min: 18, key: 'yobigun' },
    { min: 9,  key: 'balance' },
    { min: 0,  key: 'jiritsu' }
  ];
  const RESULTS = {
    numa: {
      name: '沼落ち依存タイプ',
      overview: '彼の言動に気持ちが大きく左右され、恋愛が生活の中心になりやすいタイプ。それだけ一途に、深く愛せる人です。',
      situations: '返信が来ない・態度が冷たい・会えない——そんな小さな変化で、頭の中が彼でいっぱいになりやすいです。',
      pitfall: '彼の機嫌に自分の幸せを預けすぎて、振り回されて疲れてしまうこと。',
      hint: '「彼」と同じくらい「自分」も大切にする時間を。あなたが満たされているほど、恋もうまく回り始めます。',
      articles: ['kojirase', 'dameotoko', 'infp']
    },
    yobigun: {
      name: '依存予備軍タイプ',
      overview: '普段は大丈夫でも、好きになるほど不安が強くなり、相手を優先しすぎることがあるタイプ。愛情深い証拠です。',
      situations: '本命ができた時や、相手の気持ちが見えない時に、依存スイッチが入りやすいです。',
      pitfall: '尽くしすぎ・我慢しすぎで、気づけば自分を後回しにしてしまうこと。',
      hint: '不安を感じたら、まず深呼吸。彼に確かめる前に、自分の好きなことで気持ちを整えると安定します。',
      articles: ['kojirase', 'infp', 'esfj']
    },
    balance: {
      name: 'バランス恋愛タイプ',
      overview: '恋愛を大切にしながらも、自分の生活や気持ちもある程度保てるタイプ。心地よい距離感を作れる人です。',
      situations: 'たまに不安になることはあっても、引きずらず切り替えられています。',
      pitfall: 'ときどき相手に合わせすぎる場面が出たら、少しだけ自分の気持ちを優先してOK。',
      hint: '今のバランス感覚は大きな魅力。自分も相手も尊重できる関係を、これからも大切に。',
      articles: ['sukiyoke', 'isfj', 'infj']
    },
    jiritsu: {
      name: '自立恋愛タイプ',
      overview: '恋愛に振り回されにくく、自分の時間やペースを大切にできるタイプ。一緒にいて居心地のいい相手になれます。',
      situations: '相手の言動に一喜一憂しすぎず、落ち着いて関係を築けます。',
      pitfall: 'クールに見えて、好意が相手に伝わりにくいことも。素直な気持ちは時々、言葉に。',
      hint: 'あなたの自立は強み。安心できる相手には少し甘えてみると、関係がもっと深まります。',
      articles: ['infj', 'isfj']
    }
  };

  /* 各選択肢の依存度ポイント（p） */
  const QUESTIONS = [
    { q: '彼から返信が来ない時、あなたは？', a: [
      { p:3, label:'何度もスマホを見てしまう' },
      { p:2, label:'少し不安になるけど待てる' },
      { p:1, label:'用事があるのだと思える' },
      { p:0, label:'むしろ自分の時間を過ごす' } ] },
    { q: '予定がない休日は？', a: [
      { p:3, label:'彼に会えないと寂しい' },
      { p:2, label:'できれば彼と過ごしたい' },
      { p:1, label:'友達や趣味も楽しめる' },
      { p:0, label:'一人時間がかなり好き' } ] },
    { q: '彼の態度が少し冷たいと？', a: [
      { p:3, label:'すぐ不安になる' },
      { p:2, label:'理由を考えてしまう' },
      { p:1, label:'少し気になる程度' },
      { p:0, label:'深く気にしない' } ] },
    { q: '恋愛中の自分は？', a: [
      { p:3, label:'彼中心になりやすい' },
      { p:2, label:'彼を優先することが多い' },
      { p:1, label:'恋愛と自分の生活を分けられる' },
      { p:0, label:'自分のペースを崩したくない' } ] },
    { q: '彼からの連絡頻度は？', a: [
      { p:3, label:'少ないと落ち着かない' },
      { p:2, label:'できれば毎日ほしい' },
      { p:1, label:'適度ならOK' },
      { p:0, label:'頻度はあまり気にしない' } ] },
    { q: 'デートの予定が流れたら？', a: [
      { p:3, label:'一日中落ち込む' },
      { p:2, label:'がっかりするけど切り替える' },
      { p:1, label:'残念だけど別のことをする' },
      { p:0, label:'わりと平気' } ] },
    { q: '彼のSNSを？', a: [
      { p:3, label:'つい何度もチェックする' },
      { p:2, label:'たまに気になって見る' },
      { p:1, label:'ほとんど見ない' },
      { p:0, label:'興味がない' } ] },
    { q: '彼と価値観が合わない時は？', a: [
      { p:3, label:'自分が合わせてしまう' },
      { p:2, label:'なるべく合わせようとする' },
      { p:1, label:'話し合って折り合う' },
      { p:0, label:'無理には合わせない' } ] },
    { q: '彼と数日連絡が取れないと？', a: [
      { p:3, label:'不安で何も手につかない' },
      { p:2, label:'そわそわする' },
      { p:1, label:'少し寂しい程度' },
      { p:0, label:'普段通り過ごせる' } ] },
    { q: '友達と彼、予定が重なったら？', a: [
      { p:3, label:'彼を優先する' },
      { p:2, label:'できれば彼を優先' },
      { p:1, label:'その時々で決める' },
      { p:0, label:'先約を優先する' } ] },
    { q: '彼に嫌われそうな時は？', a: [
      { p:3, label:'自分を抑えてでも合わせる' },
      { p:2, label:'言いたいことを我慢しがち' },
      { p:1, label:'伝えつつ歩み寄る' },
      { p:0, label:'言いたいことは言う' } ] },
    { q: '恋愛がうまくいかない時の気持ちは？', a: [
      { p:3, label:'自分には価値がない気がする' },
      { p:2, label:'かなり落ち込む' },
      { p:1, label:'落ち込むけど立ち直れる' },
      { p:0, label:'次へ切り替えられる' } ] }
  ];

  const MAX = QUESTIONS.length * 3;

  function articleCard(key) {
    const a = ARTICLE_DATA[key] || {};
    const url = a.url || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card"><h4>${a.title || ''}</h4>${a.desc ? `<p>${a.desc}</p>` : ''}<a class="btn" href="${url}"${at}>noteで読む</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#dep-quiz');
    const btn = document.querySelector('#dep-go');
    const out = document.querySelector('#dep-result');
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
          <p class="result-meterlabel">彼への依存度</p>
          <div class="score"><span class="score-num">${pct}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${pct}%"></span></div>
          <p class="result-feature">${r.overview}</p>
        </div>
        <div class="result-block"><h3>📱 依存しやすい場面</h3><p>${r.situations}</p></div>
        <div class="result-block"><h3>🕳️ 気をつけたい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="dep-retry">もう一度診断する</button>
        <p class="compat-note">※ 依存しやすさは「愛情の深さ」の裏返しでもあります。自分を大切にする視点を少し足すと、恋はもっと心地よくなります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#dep-retry');
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
