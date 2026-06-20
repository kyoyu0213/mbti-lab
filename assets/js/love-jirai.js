/* ============================================================
   恋愛地雷診断（love-jirai.html）
   12問・4択。8つの「恋愛地雷」タイプに加点、最高点を結果に。
   各タイプ固定の地雷度%。読者を責めない前向きトーン。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    intp_f: fem('INTP', 'https://note.com/intj_analyst/n/n5eef416fdf6f'),
    isfj_f: fem('ISFJ', 'https://note.com/intj_analyst/n/n094e03a3fc66'),
    enfj_f: fem('ENFJ', 'https://note.com/intj_analyst/n/ndd7de83a3e20'),
    esfj_f: fem('ESFJ', 'https://note.com/intj_analyst/n/n7cdf00ad9cdd'),
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    estp_f: fem('ESTP', 'https://note.com/intj_analyst/n/n9fef45b19f7d'),
    entp_f: fem('ENTP', 'https://note.com/intj_analyst/n/nf0c7ae903e18'),
    esfp_f: fem('ESFP', 'https://note.com/intj_analyst/n/n23f7ac68d75e'),
    entj_f: fem('ENTJ', 'https://note.com/intj_analyst/n/n3cf721ee03ea'),
    estj_f: fem('ESTJ', 'https://note.com/intj_analyst/n/ncac5194b7898'),
    istp_f: fem('ISTP', 'https://note.com/intj_analyst/n/n25c05c7672f6'),
    line:    { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    kompleks:{ title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' },
    check:   { title:'脈なし確定？好き避け？見極め診断', desc:'彼の態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    tameshi_rank: { title:'好きな人を試してしまうMBTIランキング', desc:'わざと距離を置いて相手を試すタイプを解説。', url:'https://note.com/intj_analyst/n/nc69434ab52c1' }
  };

  const RESULTS = {
    fukayomi: {
      name: '深読み地雷', percent: 85,
      pattern: '相手のLINEや態度を考えすぎて、自分で不安を大きくしてしまうタイプ。それだけ相手をよく見ている証拠です。',
      pitfall: '想像で悪い方向に考え、ありもしない問題に悩んでしまうこと。',
      scene: '返信が遅い時・態度が少し違う時に、深読みスイッチが入りやすいです。',
      hint: '気になることは想像で埋めず、軽く聞いてみて。確かめると、不安はすっと小さくなります。',
      articles: ['line', 'intp_f']
    },
    tsukushi: {
      name: '尽くしすぎ地雷', percent: 82,
      pattern: '好きな人を優先しすぎて、自分の気持ちを後回しにしやすいタイプ。愛情深い人です。',
      pitfall: '尽くすほど我慢がたまり、見返りを求めて苦しくなること。',
      scene: '相手が困っている時・かまってほしい時に、つい自分を犠牲にしがちです。',
      hint: '「してあげたい」と同じくらい「してほしい」も伝えてOK。お願い上手は、愛され上手です。',
      articles: ['isfj_f', 'enfj_f', 'esfj_f']
    },
    honne: {
      name: '本音封印地雷', percent: 80,
      pattern: '嫌われたくなくて我慢し、本音を言えずに苦しくなりやすいタイプ。協調性のある優しい人です。',
      pitfall: 'ため込んだ気持ちが、ある日いきなり限界になってしまうこと。',
      scene: '意見が違う時・寂しい時に、本音を飲み込みがちです。',
      hint: '小さな「私はこうしたい」から練習を。本音を見せられる相手こそ、長く一緒にいられます。',
      articles: ['isfp_f', 'kompleks']
    },
    tameshi: {
      name: '試し行動地雷', percent: 83,
      pattern: '相手の気持ちを確かめたくて、わざと距離を置いたり反応を見たりしやすいタイプ。不安の裏返しです。',
      pitfall: '試すつもりが相手を遠ざけ、関係をこじらせてしまうこと。',
      scene: '不安な時・愛情を確認したい時に、試し行動が出やすいです。',
      hint: '試す代わりに、素直に「会いたい」を。確かめなくても伝わる安心が、関係を強くします。',
      articles: ['tameshi_rank', 'kompleks']
    },
    kyuusai: {
      name: '救済地雷', percent: 81,
      pattern: '問題のある相手や孤独な相手に惹かれ、「私なら支えられる」と思いやすいタイプ。共感力が高い人です。',
      pitfall: '相手の問題を背負い込みすぎて、自分が消耗してしまうこと。',
      scene: '弱さや孤独を見せられた時に、放っておけなくなります。',
      hint: '支えることと抱え込むことは別もの。あなたが笑顔でいられる距離を、まず大切に。',
      articles: ['infp_f', 'infj_f']
    },
    shigeki: {
      name: '刺激地雷', percent: 84,
      pattern: '安定よりドキドキを求め、危うい恋に惹かれやすいタイプ。情熱的で行動力のある人です。',
      pitfall: '刺激が落ち着くと冷めたと感じ、心地よい関係を手放してしまうこと。',
      scene: '退屈を感じた時・予測不能な相手に出会った時に、刺激を追いがちです。',
      hint: 'ときめきは「深まり」からも生まれます。穏やかなのに飽きない関係を試してみて。',
      articles: ['estp_f', 'entp_f', 'esfp_f']
    },
    control: {
      name: 'コントロール地雷', percent: 78,
      pattern: '恋愛を思い通りに進めたくなり、相手を変えようとしやすいタイプ。面倒見がよく頼れる人です。',
      pitfall: '思い通りにならないとイライラし、相手を窮屈にさせてしまうこと。',
      scene: '相手の行動が気になる時・将来が不安な時に、コントロールしたくなります。',
      hint: '相手は「直す対象」ではなくチーム。任せて待つことが、信頼と心の余裕を生みます。',
      articles: ['entj_f', 'estj_f']
    },
    kaihi: {
      name: '回避地雷', percent: 80,
      pattern: '好きなのに近づかれると距離を取りたくなり、関係を深める前に逃げやすいタイプ。自分を守る力がある人です。',
      pitfall: '怖くなって離れ、あとから後悔してしまうこと。',
      scene: '関係が深まりそうな時・本気になりそうな時に、逃げたくなります。',
      hint: '距離が必要なことを正直に共有を。少しずつでOK、逃げない練習が幸せにつながります。',
      articles: ['istp_f', 'check']
    }
  };
  const PRIORITY = ['fukayomi', 'tsukushi', 'honne', 'tameshi', 'kyuusai', 'shigeki', 'control', 'kaihi'];

  const QUESTIONS = [
    { q: '好きな人ができると？', a: [
      { t:'fukayomi', label:'相手の言動を深読みする' },
      { t:'kyuusai', label:'困っている相手を支えたくなる' },
      { t:'tsukushi', label:'相手に尽くしすぎる' },
      { t:'shigeki', label:'刺激的な相手に惹かれる' } ] },
    { q: '不安になった時は？', a: [
      { t:'tameshi', label:'相手を試したくなる' },
      { t:'honne', label:'相手に合わせて我慢する' },
      { t:'control', label:'相手をコントロールしたくなる' },
      { t:'kaihi', label:'急に距離を取りたくなる' } ] },
    { q: '恋愛で後悔しやすいのは？', a: [
      { t:'fukayomi', label:'考えすぎて動けなかった' },
      { t:'kyuusai', label:'相手の問題を抱え込みすぎた' },
      { t:'tameshi', label:'試すような態度をとった' },
      { t:'honne', label:'本音を言えなかった' } ] },
    { q: '恋愛でやりがちなのは？', a: [
      { t:'tsukushi', label:'尽くしすぎて疲れる' },
      { t:'shigeki', label:'勢いで進んで傷つく' },
      { t:'control', label:'相手を変えようとする' },
      { t:'kaihi', label:'深まる前に逃げてしまう' } ] },
    { q: '好きな人のLINEには？', a: [
      { t:'fukayomi', label:'文面や速度を分析しすぎる' },
      { t:'tsukushi', label:'すぐ返して尽くす' },
      { t:'tameshi', label:'わざと既読をつけず反応を見る' },
      { t:'control', label:'自分のペースに合わせさせたい' } ] },
    { q: '惹かれる相手は？', a: [
      { t:'kyuusai', label:'放っておけない人' },
      { t:'shigeki', label:'危うくて刺激的な人' },
      { t:'honne', label:'自分を否定しない安心できる人' },
      { t:'kaihi', label:'深入りしてこない人' } ] },
    { q: '恋愛中の自分は？', a: [
      { t:'fukayomi', label:'相手の気持ちを推理しがち' },
      { t:'kyuusai', label:'相手を支える役になりがち' },
      { t:'tsukushi', label:'相手中心で動きがち' },
      { t:'shigeki', label:'ドキドキを追いがち' } ] },
    { q: 'すれ違った時は？', a: [
      { t:'tameshi', label:'わざと素っ気なくして反応を見る' },
      { t:'honne', label:'言いたいことを飲み込む' },
      { t:'control', label:'相手を説得して正したくなる' },
      { t:'kaihi', label:'連絡を絶ちたくなる' } ] },
    { q: '関係が進みそうな時は？', a: [
      { t:'fukayomi', label:'不安であれこれ考える' },
      { t:'shigeki', label:'刺激が欲しくて他に目がいく' },
      { t:'tameshi', label:'相手の本気度を試したくなる' },
      { t:'kaihi', label:'怖くなって距離を置く' } ] },
    { q: '好きな人のために？', a: [
      { t:'kyuusai', label:'問題ごと引き受けてしまう' },
      { t:'tsukushi', label:'自分を後回しにして尽くす' },
      { t:'honne', label:'嫌われないよう我慢する' },
      { t:'control', label:'良かれと思って口出しする' } ] },
    { q: '恋がうまくいかない原因は？', a: [
      { t:'fukayomi', label:'考えすぎて空回りする' },
      { t:'honne', label:'本音を見せられない' },
      { t:'tsukushi', label:'尽くしすぎて重くなる' },
      { t:'kaihi', label:'逃げて関係を深められない' } ] },
    { q: 'あなたの恋の落とし穴は？', a: [
      { t:'kyuusai', label:'救おうとして疲れる' },
      { t:'tameshi', label:'試して関係をこじらせる' },
      { t:'shigeki', label:'刺激を求めて安定を壊す' },
      { t:'control', label:'思い通りにして相手が離れる' } ] }
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
    const quiz = document.querySelector('#jirai-quiz');
    const btn = document.querySelector('#jirai-go');
    const out = document.querySelector('#jirai-result');
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
          <p class="result-lead">あなたが踏みやすいのは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">恋愛地雷度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pattern}</p>
        </div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>⚠️ 気をつけたい場面</h3><p>${r.scene}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="jirai-retry">もう一度診断する</button>
        <p class="compat-note">※ 「地雷」は、あなたが一生懸命に恋をするからこそ生まれるクセ。知っておくだけで、同じ失敗はぐっと減らせます。責める必要はありません。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#jirai-retry');
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
