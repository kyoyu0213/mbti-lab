/* ============================================================
   恋愛コンプレックス診断（love-complex.html）
   12問・4択。6スコアを集計、最高点を結果に。各タイプ固定のコンプレックス度%。
   読者を絶対に否定しない／病気扱いしない／不安を自然に言語化して締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    sat:      { title:'恋愛満足度診断', desc:'今の恋がどれくらい満たされているかチェック。', url:'love-satisfaction.html', cta:'診断してみる' },
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    jealousy: { title:'嫉妬深度診断', desc:'あなたの嫉妬深さと独占欲の出方をチェック。', url:'jealousy-check.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    haraguro: { title:'恋愛腹黒度診断', desc:'恋愛でどれくらい本音を隠しているかチェック。', url:'love-haraguro.html', cta:'診断してみる' },
    honmei:   { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    intj_f: fem('INTJ', 'https://note.com/intj_analyst/n/n5e4d6eb0a254'),
    istp_f: fem('ISTP', 'https://note.com/intj_analyst/n/n25c05c7672f6'),
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf')
  };

  const RESULTS = {
    selfWorth: {
      name: '愛される自信がないタイプ', percent: 85,
      anxiety: '「私なんかを好きになるわけがない」と感じ、好かれていても信じきれない不安。',
      happens: '相手の好意を疑ったり、幸せな時ほど「いつか終わる」と怖くなったりしがち。',
      wants: '本当は、ありのままの自分を「そのままでいい」と受け止めてほしいと願っています。',
      hint: '自信は「持つ」より「思い出す」もの。あなたを大切にしてくれる人の言葉を、否定せず受け取る練習から。',
      articles: ['dep', 'sat', 'infp_f']
    },
    abandonment: {
      name: '捨てられ不安タイプ', percent: 80,
      anxiety: '相手が離れていくことが怖く、返信や態度の小さな変化に敏感になる不安。',
      happens: '安心より不安が勝ち、確認したくなったり、嫌われないよう先回りしたり。',
      wants: '本当は、「何があっても大丈夫」と思える、ゆるがない安心感を求めています。',
      hint: '不安は「大切だからこそ」のサイン。確かめる前に深呼吸。あなたの価値は、相手の反応では決まりません。',
      articles: ['line', 'jealousy', 'dep']
    },
    comparison: {
      name: '比較コンプレックスタイプ', percent: 75,
      anxiety: '他の女性や元カノ、SNSの誰かと比べて落ち込みやすい不安。',
      happens: '自分の良さが見えなくなり、恋愛で気持ちが下がりやすい。',
      wants: '本当は、誰かと比べてではなく「あなたがいい」と選ばれる実感を求めています。',
      hint: '比べる相手は他人ではなく「昨日の自分」。あなたにしかない魅力は、必ず誰かに届いています。',
      articles: ['jealousy', 'jirai', 'sat']
    },
    betrayal: {
      name: '裏切り警戒タイプ', percent: 70,
      anxiety: '一度傷ついた経験が強く残り、信じたいのに信じきれない不安。',
      happens: '相手を試してしまったり、心を開ききる前に身構えたり。',
      wants: '本当は、もう一度安心して人を信じられる、穏やかな関係を求めています。',
      hint: '警戒は、あなたを守ってきた優しい鎧。少しずつ「この人は大丈夫」を確かめれば、鎧は自然にほどけます。',
      articles: ['haraguro', 'honmei', 'jirai']
    },
    independence: {
      name: '自立しすぎタイプ', percent: 65,
      anxiety: '弱みを見せるのが苦手で、本当は寂しいのに一人で抱え込みやすい不安。',
      happens: '恋愛で頼れず、強がってしまって距離ができやすい。',
      wants: '本当は、強くなくても受け止めてもらえる、甘えられる相手を求めています。',
      hint: '頼ることは弱さではなく信頼の証。小さな「助けて」が、相手との距離をぐっと縮めます。',
      articles: ['intj_f', 'istp_f', 'sat']
    },
    healthy: {
      name: '恋愛コンプレックス低めタイプ', percent: 20,
      anxiety: '大きなコンプレックスは少なめ。恋愛でも比較的自分らしくいられています。',
      happens: '不安や劣等感に振り回されにくく、好意も素直に受け取れます。',
      wants: 'お互いを尊重し合える、自然体でいられる関係を大切にしたい気持ち。',
      hint: 'その安定感は大きな魅力。相手の不安にも気づいてあげられると、関係はもっと温かくなります。',
      articles: ['compat', 'lovetype']
    }
  };
  const PRIORITY = ['selfWorth', 'abandonment', 'comparison', 'betrayal', 'independence', 'healthy'];

  const QUESTIONS = [
    { q: '好きな人ができた時、一番不安なのは？', a: [
      { t:'selfWorth', label:'私なんかを好きになるわけがない' },
      { t:'abandonment', label:'いつか嫌われる気がする' },
      { t:'comparison', label:'他にもっと良い人が現れそう' },
      { t:'healthy', label:'特に不安はない' } ] },
    { q: '恋愛で傷つく時は？', a: [
      { t:'selfWorth', label:'自分に魅力がないと感じた時' },
      { t:'abandonment', label:'愛されていない気がした時' },
      { t:'comparison', label:'誰かと比較された時' },
      { t:'betrayal', label:'裏切られた時' } ] },
    { q: '相手から好意を向けられると？', a: [
      { t:'selfWorth', label:'信じられない' },
      { t:'betrayal', label:'裏がある気がする' },
      { t:'abandonment', label:'いつまで続くのか不安' },
      { t:'healthy', label:'素直に嬉しい' } ] },
    { q: 'SNSを見ると？', a: [
      { t:'comparison', label:'他の女性と比べて落ち込む' },
      { t:'abandonment', label:'幸せそうなカップルに焦る' },
      { t:'selfWorth', label:'自分だけ置いていかれる気がする' },
      { t:'healthy', label:'あまり気にならない' } ] },
    { q: '恋愛で一番こわいのは？', a: [
      { t:'selfWorth', label:'選ばれないこと' },
      { t:'abandonment', label:'捨てられること' },
      { t:'betrayal', label:'裏切られること' },
      { t:'independence', label:'自由を失うこと' } ] },
    { q: '弱音や弱みは？', a: [
      { t:'independence', label:'人に見せるのが苦手' },
      { t:'abandonment', label:'見せたら嫌われそうで怖い' },
      { t:'selfWorth', label:'こんな自分を見せたくない' },
      { t:'healthy', label:'信頼できる相手には見せられる' } ] },
    { q: '相手が優しいと？', a: [
      { t:'betrayal', label:'裏があるのではと疑う' },
      { t:'selfWorth', label:'自分には不釣り合いに感じる' },
      { t:'abandonment', label:'失うのが怖くなる' },
      { t:'healthy', label:'ありがたく受け取れる' } ] },
    { q: '恋愛中、つい比べるのは？', a: [
      { t:'comparison', label:'相手の元カノや他の女性と自分' },
      { t:'selfWorth', label:'理想の自分と今の自分' },
      { t:'abandonment', label:'昔うまくいかなかった恋' },
      { t:'healthy', label:'特に比べない' } ] },
    { q: '頼りたい時は？', a: [
      { t:'independence', label:'結局ひとりで抱え込む' },
      { t:'abandonment', label:'重いと思われないか不安' },
      { t:'betrayal', label:'頼って裏切られるのが怖い' },
      { t:'healthy', label:'素直に頼れる' } ] },
    { q: '相手の気持ちを？', a: [
      { t:'betrayal', label:'試して確かめたくなる' },
      { t:'abandonment', label:'何度も確認したくなる' },
      { t:'selfWorth', label:'どうせ自分には…と疑う' },
      { t:'healthy', label:'信じて待てる' } ] },
    { q: '恋愛で繰り返しがちなのは？', a: [
      { t:'selfWorth', label:'自分を後回しにしてしまう' },
      { t:'comparison', label:'人と比べて落ち込む' },
      { t:'independence', label:'強がって距離ができる' },
      { t:'healthy', label:'特に思い当たらない' } ] },
    { q: '本当はどうされたい？', a: [
      { t:'selfWorth', label:'そのままの私でいいと言われたい' },
      { t:'abandonment', label:'ずっとそばにいると安心させてほしい' },
      { t:'independence', label:'強がらなくていいと包んでほしい' },
      { t:'comparison', label:'誰よりあなたがいいと言われたい' } ] }
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
    const quiz = document.querySelector('#complex-quiz');
    const btn = document.querySelector('#complex-go');
    const out = document.querySelector('#complex-result');
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
          <p class="result-lead">あなたの恋愛コンプレックスは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">コンプレックス度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.anxiety}</p>
        </div>
        <div class="result-block"><h3>💭 恋愛で起きやすいこと</h3><p>${r.happens}</p></div>
        <div class="result-block"><h3>💗 本当は求めているもの</h3><p>${r.wants}</p></div>
        <div class="result-block"><h3>🌸 自分を楽にするヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="complex-retry">もう一度診断する</button>
        <p class="compat-note">※ コンプレックスは欠点ではなく、「人を大切に思う気持ち」の裏返し。その不安にはちゃんと理由があります。自分を責めなくて大丈夫です。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#complex-retry');
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
