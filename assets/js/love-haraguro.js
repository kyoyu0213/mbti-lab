/* ============================================================
   恋愛腹黒度診断（love-haraguro.html）
   12問・4択。5スコア（angel/beginner/reactionCheck/strategist/mastermind）を
   集計、最高点を結果に。各タイプ固定の腹黒度%。「腹黒」は診断名のみ。本文は
   計算高さ/駆け引き/本音を隠す等で表現。責めない・煽らない・前向きに締める。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    tameshi_rank: { title:'好きな人を試してしまうMBTIランキング', desc:'わざと距離を置いて相手を試すタイプを解説。', url:'https://note.com/intj_analyst/n/nc69434ab52c1' },
    honmei:  { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    check:   { title:'脈なし確定？好き避け？見極め診断', desc:'彼の態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    line:    { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    jirai:   { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    kompleks:{ title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' },
    lovetype:{ title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    compat:  { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    intj_f: fem('INTJ', 'https://note.com/intj_analyst/n/n5e4d6eb0a254'),
    entj_f: fem('ENTJ', 'https://note.com/intj_analyst/n/n3cf721ee03ea'),
    entp_f: fem('ENTP', 'https://note.com/intj_analyst/n/nf0c7ae903e18')
  };

  const RESULTS = {
    mastermind: {
      name: '恋愛黒幕タイプ', percent: 95,
      pattern: '相手の心理を読み、主導権を握ろうとしやすいタイプ。好きだからこそ、相手の反応や関係の流れをコントロールしたくなることがあります。',
      moves: '相手を試したり、心理を読んで言葉や態度を選んだり、関係を思い通りに進めようとする。',
      pitfall: 'コントロールしようとするほど、相手の素直な気持ちが見えにくくなること。',
      hint: '読みの鋭さは才能。たまに「素のあなた」を見せると、相手も本音で返してくれて、関係がぐっと深まります。',
      articles: ['jirai', 'entj_f', 'intj_f']
    },
    strategist: {
      name: '恋愛策士タイプ', percent: 80,
      pattern: '相手の反応を見ながら距離感や言葉を調整できるタイプ。恋愛を感情だけでなく、少し戦略的に進める傾向があります。',
      moves: 'さりげなく探りを入れたり、相手に合わせて作戦を変えたり。',
      pitfall: '考えて動くうちに、自分の本音やタイミングを見失ってしまうこと。',
      hint: '戦略は武器。でも時々は計算を手放して、素直な一言を。そのギャップが、あなたの魅力になります。',
      articles: ['line', 'kompleks', 'entp_f']
    },
    reactionCheck: {
      name: '反応チェックタイプ', percent: 65,
      pattern: '相手の気持ちを確かめたくて、わざと返信を遅らせたり、距離を置いたりしやすいタイプです。',
      moves: '返信のタイミングを計ったり、少し離れて追ってくるか見たり。',
      pitfall: '試すつもりが相手を不安にさせ、関係がこじれてしまうこと。',
      hint: '試す代わりに、素直に「会いたい」を。確かめなくても伝わる安心が、関係を強くします。',
      articles: ['tameshi_rank', 'jirai', 'check']
    },
    beginner: {
      name: '駆け引き初心者タイプ', percent: 40,
      pattern: '本当は素直にしたいけれど、好きな人の前では少しだけ強がったり、平気なふりをしてしまうタイプです。',
      moves: '嬉しいのにクールを装ったり、本音を少し隠したり。',
      pitfall: '強がりが「興味なし」と誤解され、すれ違ってしまうこと。',
      hint: '強がりはほどほどに。小さな「うれしい」を素直に出すだけで、相手は安心して近づけます。',
      articles: ['honmei', 'check']
    },
    angel: {
      name: '裏表なし天使タイプ', percent: 15,
      pattern: '腹黒度は低め。恋愛でも比較的素直で、駆け引きよりも自然体を大切にするタイプです。',
      moves: '思ったことを素直に伝え、好意もまっすぐ表現する。',
      pitfall: '素直すぎて、相手に気持ちを読まれやすい・押し切られやすいこと。',
      hint: 'その素直さは最大の魅力。たまに少しだけ余白（謎）を残すと、相手はもっとあなたに夢中になります。',
      articles: ['lovetype', 'compat']
    }
  };
  const PRIORITY = ['mastermind', 'strategist', 'reactionCheck', 'beginner', 'angel'];

  const QUESTIONS = [
    { q: '好きな人からLINEが来た時、あなたは？', a: [
      { t:'reactionCheck', label:'すぐ返したいけど、あえて少し時間を置く' },
      { t:'strategist', label:'内容を考えてから丁寧に返す' },
      { t:'angel', label:'嬉しいので普通に返す' },
      { t:'beginner', label:'相手のテンションに合わせて返す' } ] },
    { q: '嫉妬した時は？', a: [
      { t:'beginner', label:'平気なふりをして、少し冷たくする' },
      { t:'angel', label:'素直に少し不安だと伝える' },
      { t:'reactionCheck', label:'何も言わずに様子を見る' },
      { t:'mastermind', label:'嫉妬していないふりで情報を集める' } ] },
    { q: '相手の気持ちを確かめたい時は？', a: [
      { t:'reactionCheck', label:'わざと返信を遅らせて反応を見る' },
      { t:'angel', label:'直接聞けるなら聞く' },
      { t:'strategist', label:'さりげなく会話で探る' },
      { t:'reactionCheck', label:'少し距離を置いて追ってくるか見る' } ] },
    { q: '恋愛でやりがちなことは？', a: [
      { t:'mastermind', label:'本音を隠して相手を試す' },
      { t:'beginner', label:'相手に合わせすぎる' },
      { t:'angel', label:'駆け引きは苦手でストレート' },
      { t:'strategist', label:'相手の行動を見て作戦を変える' } ] },
    { q: '好きな人に好かれたい時は？', a: [
      { t:'strategist', label:'相手が好きそうな自分を演じることがある' },
      { t:'angel', label:'自然体でいたい' },
      { t:'beginner', label:'少しは印象を良く見せたい' },
      { t:'strategist', label:'反応を見ながら距離感を調整する' } ] },
    { q: '会話の主導権は？', a: [
      { t:'mastermind', label:'さりげなく自分が握りたい' },
      { t:'strategist', label:'相手を見て合わせたり引いたり' },
      { t:'angel', label:'自然な流れでいい' },
      { t:'beginner', label:'緊張して相手任せになりがち' } ] },
    { q: '相手の本音が見えない時は？', a: [
      { t:'mastermind', label:'心理を読んで誘導したくなる' },
      { t:'reactionCheck', label:'試すような言動で反応を見る' },
      { t:'strategist', label:'情報を集めて分析する' },
      { t:'angel', label:'素直に聞いてみる' } ] },
    { q: 'デートの誘い方は？', a: [
      { t:'strategist', label:'相手が乗りやすい流れを作る' },
      { t:'beginner', label:'断られるのが怖くて遠回し' },
      { t:'angel', label:'ストレートに誘う' },
      { t:'reactionCheck', label:'相手から誘わせるよう仕向ける' } ] },
    { q: '好きな人の前での自分は？', a: [
      { t:'beginner', label:'つい強がってしまう' },
      { t:'mastermind', label:'印象を計算して振る舞う' },
      { t:'angel', label:'ほぼ素のまま' },
      { t:'reactionCheck', label:'相手の出方を見て態度を決める' } ] },
    { q: '関係を進めたい時は？', a: [
      { t:'mastermind', label:'流れをコントロールしたくなる' },
      { t:'strategist', label:'タイミングを計って動く' },
      { t:'beginner', label:'勇気が出ずに様子見' },
      { t:'angel', label:'素直に気持ちを伝える' } ] },
    { q: 'あなたの恋愛スタイルは？', a: [
      { t:'mastermind', label:'相手の心理を読んで動く' },
      { t:'strategist', label:'状況を見て柔軟に作戦変更' },
      { t:'reactionCheck', label:'試しながら距離を測る' },
      { t:'beginner', label:'素直になりたいけど強がる' } ] },
    { q: '本音を見せるのは？', a: [
      { t:'angel', label:'わりとすぐ見せられる' },
      { t:'beginner', label:'少しずつ、勇気を出して' },
      { t:'reactionCheck', label:'相手の本気度を確かめてから' },
      { t:'mastermind', label:'できるだけ手の内は見せない' } ] }
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
    const quiz = document.querySelector('#haraguro-quiz');
    const btn = document.querySelector('#haraguro-go');
    const out = document.querySelector('#haraguro-result');
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
          <p class="result-lead">あなたの恋愛腹黒度は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">腹黒度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pattern}</p>
        </div>
        <div class="result-block"><h3>🎭 やりがちな駆け引き</h3><p>${r.moves}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 もっと楽に恋愛するためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="haraguro-retry">もう一度診断する</button>
        <p class="compat-note">※ 駆け引きや計算は「賢さ」でもあり、性格が悪いわけではありません。少し素直さを足すだけで、あなたの魅力はもっとまっすぐ伝わります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#haraguro-retry');
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
