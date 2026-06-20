/* ============================================================
   恋愛満足度診断（love-satisfaction.html）
   12問・4択。5スコア（satisfied/affectionLack/patience/lost/unstableExcitement）
   を集計、最高点を結果に。各タイプ固定の満足度%。やさしく言語化し前向きに締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    honmei:   { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    kompleks: { title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' },
    dame:     { title:'ダメ男ホイホイ診断', desc:'問題のある相手に惹かれる理由を診断。', url:'dameotoko-diagnosis.html', cta:'診断してみる' },
    kuro:     { title:'恋愛黒歴史診断', desc:'やりがちな恋のクセ・黒歴史を診断。', url:'love-kurorekishi.html', cta:'診断してみる' },
    numa:     { title:'恋愛沼診断', desc:'あなたが沼りやすい男性タイプを診断。', url:'love-numa.html', cta:'診断してみる' },
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    isfj_f: fem('ISFJ', 'https://note.com/intj_analyst/n/n094e03a3fc66'),
    enfp_f: fem('ENFP', 'https://note.com/intj_analyst/n/n20ca6f3e9315'),
    estp_f: fem('ESTP', 'https://note.com/intj_analyst/n/n9fef45b19f7d'),
    entp_f: fem('ENTP', 'https://note.com/intj_analyst/n/nf0c7ae903e18')
  };

  const RESULTS = {
    satisfied: {
      name: '恋愛充実タイプ', percent: 90,
      state: '恋愛満足度は高め。相手との関係に安心感があり、自分らしさも保てている状態です。',
      filled: '安心感・信頼・自分らしくいられる時間。',
      lacking: 'あえて言えば、慣れて感謝を忘れないこと。今のバランスは理想的です。',
      hint: '今の幸せは「当たり前」ではなく積み重ね。小さな「ありがとう」を続けると、満たされた関係がもっと長続きします。',
      articles: ['compat', 'lovetype']
    },
    affectionLack: {
      name: '愛情不足タイプ', percent: 55,
      state: '相手のことは好きでも、愛されている実感が足りず、不安になりやすい状態です。もっと言葉や行動で安心したい気持ちがあります。',
      filled: '相手への好きな気持ちと、関係を続けたい意思。',
      lacking: '「大切にされている」という安心感や、愛情のわかりやすい表現。',
      hint: '我慢して待つより、「こうしてくれると嬉しい」と具体的に伝えてみて。求めることは、わがままではありません。',
      articles: ['dep', 'honmei', 'line']
    },
    patience: {
      name: '我慢しすぎタイプ', percent: 45,
      state: '好きだからこそ相手に合わせすぎて、自分の本音を後回しにしている状態です。続いていても、心の中では疲れが溜まりやすいです。',
      filled: '相手を思いやる優しさと、関係を保つ努力。',
      lacking: '自分の気持ちを大切にする時間と、本音を言える安心。',
      hint: '「私はどうしたい？」を一日一回、自分に聞いてあげて。あなたが満たされるほど、恋も心地よくなります。',
      articles: ['isfp_f', 'isfj_f', 'jirai']
    },
    lost: {
      name: '恋愛迷子タイプ', percent: 40,
      state: '好きな気持ちはあるのに、関係の方向性や自分の本音が分からなくなっている状態です。楽しい瞬間と不安な瞬間の差が大きくなりやすいです。',
      filled: '相手への好意と、向き合おうとする気持ち。',
      lacking: '関係の見通しと、自分が本当に望むものの輪郭。',
      hint: '答えを急がなくて大丈夫。「何が嬉しくて、何が不安か」を書き出すと、迷子の地図が少しずつ見えてきます。',
      articles: ['kompleks', 'dame', 'kuro']
    },
    unstableExcitement: {
      name: '刺激はあるけど不安定タイプ', percent: 50,
      state: 'ドキドキや楽しさはあるけれど、安心感が少なく、気持ちが揺れやすい状態です。刺激を恋愛満足度と勘違いしてしまうことがあります。',
      filled: 'ときめきと、恋をしている高揚感。',
      lacking: '落ち着いて自分らしくいられる安心感。',
      hint: '恋愛に必要なのはドキドキだけではありません。「穏やかでも満たされる時間」も、満足度の大事な土台です。',
      articles: ['estp_f', 'entp_f', 'numa']
    }
  };
  const PRIORITY = ['satisfied', 'affectionLack', 'patience', 'lost', 'unstableExcitement'];

  const QUESTIONS = [
    { q: '今の恋愛について、近いのは？', a: [
      { t:'affectionLack', label:'幸せだけど不安も多い' },
      { t:'patience', label:'好きなのに我慢が多い' },
      { t:'unstableExcitement', label:'楽しいけど安定しない' },
      { t:'satisfied', label:'かなり満たされている' } ] },
    { q: '好きな人との関係で一番気になるのは？', a: [
      { t:'affectionLack', label:'愛されている実感が足りない' },
      { t:'patience', label:'自分ばかり頑張っている気がする' },
      { t:'lost', label:'将来が見えなくて不安' },
      { t:'satisfied', label:'特に大きな不満はない' } ] },
    { q: '恋愛中の自分は？', a: [
      { t:'affectionLack', label:'相手の反応で気分が左右される' },
      { t:'patience', label:'本音を我慢してしまう' },
      { t:'unstableExcitement', label:'ドキドキはあるけど疲れる' },
      { t:'satisfied', label:'自分らしくいられる' } ] },
    { q: '今の恋に点数をつけるなら？', a: [
      { t:'affectionLack', label:'高いけど不安がある' },
      { t:'patience', label:'好きだけどしんどい' },
      { t:'unstableExcitement', label:'楽しいけど不安定' },
      { t:'satisfied', label:'安心して幸せ' } ] },
    { q: '恋愛で一番欲しいものは？', a: [
      { t:'satisfied', label:'今のままで十分' },
      { t:'affectionLack', label:'大切にされている実感' },
      { t:'unstableExcitement', label:'刺激やときめき' },
      { t:'lost', label:'関係の方向性・答え' } ] },
    { q: '相手といて感じるのは？', a: [
      { t:'satisfied', label:'安心して素でいられる' },
      { t:'patience', label:'気をつかって疲れる' },
      { t:'lost', label:'楽しい時と不安な時の差が大きい' },
      { t:'affectionLack', label:'もっと愛情がほしい' } ] },
    { q: '二人の将来について？', a: [
      { t:'lost', label:'どうなりたいか分からない' },
      { t:'satisfied', label:'一緒にいる未来が描ける' },
      { t:'affectionLack', label:'不安で考えたくない' },
      { t:'patience', label:'言い出せずに流している' } ] },
    { q: '不満があるときは？', a: [
      { t:'patience', label:'我慢して飲み込む' },
      { t:'affectionLack', label:'不安で確認したくなる' },
      { t:'lost', label:'どうしたいか自分でも曖昧' },
      { t:'satisfied', label:'素直に話し合える' } ] },
    { q: 'ときめきと安心は？', a: [
      { t:'unstableExcitement', label:'ときめき重視で安心は少なめ' },
      { t:'satisfied', label:'どちらもちゃんとある' },
      { t:'affectionLack', label:'安心が足りない' },
      { t:'lost', label:'どちらも曖昧' } ] },
    { q: '一人になった時は？', a: [
      { t:'satisfied', label:'心が満たされている' },
      { t:'affectionLack', label:'寂しくて不安になる' },
      { t:'patience', label:'正直ほっとする自分がいる' },
      { t:'lost', label:'自分の気持ちが分からなくなる' } ] },
    { q: '恋人にもっと求めるなら？', a: [
      { t:'affectionLack', label:'もっと愛情表現がほしい' },
      { t:'patience', label:'もっと私の話を聞いてほしい' },
      { t:'unstableExcitement', label:'もっと刺激がほしい' },
      { t:'satisfied', label:'特にない、満足している' } ] },
    { q: '今の恋を一言で言うと？', a: [
      { t:'satisfied', label:'しあわせ' },
      { t:'affectionLack', label:'ちょっと不安' },
      { t:'patience', label:'好きだけどしんどい' },
      { t:'unstableExcitement', label:'ジェットコースター' } ] }
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
    const quiz = document.querySelector('#sat-quiz');
    const btn = document.querySelector('#sat-go');
    const out = document.querySelector('#sat-result');
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
          <p class="result-lead">あなたの今の恋は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">恋愛満足度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.state}</p>
        </div>
        <div class="result-block"><h3>💗 満たされている部分</h3><p>${r.filled}</p></div>
        <div class="result-block"><h3>🥀 足りていない部分</h3><p>${r.lacking}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="sat-retry">もう一度診断する</button>
        <p class="compat-note">※ 満足度は今この瞬間の目安で、これからいくらでも変えていけます。足りない部分が見えたら、それは幸せに近づくヒントです。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#sat-retry');
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
