/* ============================================================
   恋愛黒歴史診断（love-kurorekishi.html）
   12問・4択。8つの「黒歴史」タイプに加点、最高点を結果に。
   各タイプ固定の黒歴史度%。責めない・前向き・ポップなトーン。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    // 関連診断（サイト内）
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    ex:       { title:'元彼引きずり度診断', desc:'元彼をどれくらい引きずっているかチェック。', url:'ex-boyfriend-check.html', cta:'診断してみる' },
    check:    { title:'脈なし確定？好き避け？見極め診断', desc:'彼の態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    dame:     { title:'ダメ男ホイホイ診断', desc:'問題のある相手に惹かれる理由を診断。', url:'dameotoko-diagnosis.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    honmei:   { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    kompleks: { title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' },
    // ランキング（note）
    kidoku:       { title:'既読無視しがちなMBTIランキング', desc:'既読無視が多い傾向のタイプを紹介。', url:'https://note.com/intj_analyst/n/n9fa05d63f314' },
    midoku:       { title:'未読無視しがちなMBTIランキング', desc:'すぐ返信しないタイプの特徴を解説。', url:'https://note.com/intj_analyst/n/n983863e05735' },
    sns:          { title:'別れた後にSNSを見てしまうMBTIランキング', desc:'別れた相手をつい追ってしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n8d28d4e40a7f' },
    tameshi_rank: { title:'好きな人を試してしまうMBTIランキング', desc:'わざと距離を置いて相手を試すタイプを解説。', url:'https://note.com/intj_analyst/n/nc69434ab52c1' },
    sukiyoke:     { title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    // 女性タイプ別（note）
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    isfj_f: fem('ISFJ', 'https://note.com/intj_analyst/n/n094e03a3fc66'),
    esfp_f: fem('ESFP', 'https://note.com/intj_analyst/n/n23f7ac68d75e'),
    estp_f: fem('ESTP', 'https://note.com/intj_analyst/n/n9fef45b19f7d')
  };

  const RESULTS = {
    line: {
      name: 'LINE考察黒歴史タイプ', percent: 88,
      pattern: '好きな人のLINEを読み返し、返信速度や絵文字から本音を読み取ろうとするタイプ。根っこには「ちゃんと愛されたい」気持ちがあります。',
      actions: '既読・未読・文面の温度差をチェックし、一言を何日も考えてしまう。',
      pitfall: '情報の少ないLINEで深読みが進み、ありもしない不安を大きくしてしまうこと。',
      next: '気になることは想像で埋めず、会った時の態度で判断を。LINEから少し距離を置くと楽になります。',
      articles: ['line', 'kidoku', 'midoku']
    },
    exwatch: {
      name: '元彼監視黒歴史タイプ', percent: 85,
      pattern: '別れた後も元彼のSNSや近況を見てしまい、忘れたつもりでも気持ちが揺れやすいタイプ。それだけ本気で愛せた証拠です。',
      actions: '元彼のSNSを覗いたり、思い出の品をなかなか捨てられずにいたり。',
      pitfall: '過去を見続けて、新しい一歩を踏み出しづらくなること。',
      next: 'まずは通知や思い出を少し遠ざけて。空いた時間を自分のために使うと、自然に前を向けます。',
      articles: ['ex', 'sns']
    },
    tameshi: {
      name: '試し行動黒歴史タイプ', percent: 84,
      pattern: '相手の気持ちを確かめたくて、わざと冷たくしたり距離を置いたりしてしまうタイプ。不安の裏返しです。',
      actions: '既読をつけず様子を見たり、素っ気なくして反応をうかがったり。',
      pitfall: '試すつもりが相手を遠ざけ、関係をこじらせてしまうこと。',
      next: '試す代わりに、素直に「会いたい」を。確かめなくても伝わる安心が、関係を強くします。',
      articles: ['tameshi_rank', 'check']
    },
    chase: {
      name: '脈なし追跡黒歴史タイプ', percent: 82,
      pattern: '相手の反応が薄いのに、少しの優しさを希望にして追い続けてしまうタイプ。一途で情の深い人です。',
      actions: '脈が薄いと感じても、わずかな優しさに期待して追ってしまう。',
      pitfall: '追うほど苦しくなり、自分を大切にできなくなること。',
      next: 'まず「相手の行動」を見て。優しさが続くかどうかで判断すると、追いすぎを防げます。',
      articles: ['check', 'dame']
    },
    kyuusai: {
      name: 'ダメ男救済黒歴史タイプ', percent: 83,
      pattern: '問題のある相手に「私なら分かってあげられる」と思い、苦しい恋にハマりやすいタイプ。共感力が高い人です。',
      actions: 'ダメだと分かる相手を支え、相手の問題を背負い込んでしまう。',
      pitfall: '相手の課題まで抱え込み、自分が消耗してしまうこと。',
      next: '支えると抱え込むは別もの。あなたが笑顔でいられる距離を、まず大切に。',
      articles: ['dame', 'infp_f', 'infj_f']
    },
    gaman: {
      name: '我慢しすぎ黒歴史タイプ', percent: 80,
      pattern: '嫌われたくなくて本音を飲み込み、気づけば自分ばかり苦しくなっているタイプ。やさしく協調的な人です。',
      actions: '言いたいことを我慢して相手に合わせ、不満をため込む。',
      pitfall: 'ため込んだ気持ちが、ある日いきなり限界になってしまうこと。',
      next: '小さな「私はこうしたい」から練習を。本音を見せられる相手こそ、長く一緒にいられます。',
      articles: ['isfp_f', 'isfj_f', 'jirai']
    },
    sukiyoke: {
      name: '好き避け黒歴史タイプ', percent: 81,
      pattern: '好きな人ほど意識しすぎて、冷たくしたりそっけなくしたりしてしまうタイプ。本気の裏返しです。',
      actions: '好きなのに平気なふりをして、避けたり距離を取ったり。',
      pitfall: '素っ気なさが「脈なし」と誤解され、すれ違ってしまうこと。',
      next: '全部見せなくて大丈夫。小さな「うれしい」を一つ伝えるだけで、距離は縮まります。',
      articles: ['sukiyoke', 'honmei']
    },
    ikioi: {
      name: '勢い恋愛黒歴史タイプ', percent: 84,
      pattern: 'その時の感情で一気に恋に飛び込み、後から現実を見て傷つきやすいタイプ。情熱的で素直な人です。',
      actions: '勢いで距離を詰めたり、衝動的に行動して後悔したり。',
      pitfall: 'ときめき優先で進み、落ち着いて相手を見極める前に深入りすること。',
      next: 'ときめきはそのままに、少し立ち止まる時間も。一晩おく習慣が、勢いの後悔を減らします。',
      articles: ['esfp_f', 'estp_f', 'kompleks']
    }
  };
  const PRIORITY = ['line', 'exwatch', 'tameshi', 'chase', 'kyuusai', 'gaman', 'sukiyoke', 'ikioi'];

  const QUESTIONS = [
    { q: '好きな人から返信が来ない時、やりがちなのは？', a: [
      { t:'line', label:'LINEを何度も読み返して原因を探す' },
      { t:'exwatch', label:'つい相手や元彼のSNSを見に行く' },
      { t:'tameshi', label:'わざと自分も返信を遅らせる' },
      { t:'chase', label:'脈なしかもと思いつつ追ってしまう' } ] },
    { q: '好きな人ができると？', a: [
      { t:'kyuusai', label:'問題を抱えた相手ほど放っておけない' },
      { t:'gaman', label:'嫌われたくなくて本音を抑える' },
      { t:'sukiyoke', label:'好きなのにそっけなくしてしまう' },
      { t:'ikioi', label:'勢いで一気に距離を詰める' } ] },
    { q: '恋愛で後から後悔しやすいのは？', a: [
      { t:'line', label:'考えすぎて自爆した' },
      { t:'exwatch', label:'別れた相手を引きずった' },
      { t:'kyuusai', label:'ダメだと分かる相手を救おうとした' },
      { t:'gaman', label:'本音を言えずに我慢した' } ] },
    { q: 'もうひとつ、後悔しやすいのは？', a: [
      { t:'tameshi', label:'好きな人を試してしまった' },
      { t:'chase', label:'脈なしを追いかけ続けた' },
      { t:'sukiyoke', label:'好きな人に冷たくして後悔した' },
      { t:'ikioi', label:'勢いで進んで傷ついた' } ] },
    { q: '好きな人の前でやりがちなのは？', a: [
      { t:'line', label:'相手の一言を何日も考える' },
      { t:'tameshi', label:'わざと冷たくして反応を見る' },
      { t:'kyuusai', label:'相手の世話を焼きすぎる' },
      { t:'sukiyoke', label:'意識しすぎてそっけなくなる' } ] },
    { q: '不安な時にやりがちなのは？', a: [
      { t:'exwatch', label:'元彼や相手のSNSを見てしまう' },
      { t:'chase', label:'少しの優しさを希望に追ってしまう' },
      { t:'gaman', label:'言いたいことを飲み込む' },
      { t:'ikioi', label:'衝動的に行動してしまう' } ] },
    { q: 'スマホを開くと？', a: [
      { t:'line', label:'相手とのトークを読み返す' },
      { t:'exwatch', label:'つい元彼の近況をチェック' },
      { t:'tameshi', label:'既読をつけず様子を見る' },
      { t:'chase', label:'相手からの反応を何度も確認する' } ] },
    { q: '恋愛中の自分は？', a: [
      { t:'kyuusai', label:'支える役になりがち' },
      { t:'gaman', label:'我慢して合わせがち' },
      { t:'sukiyoke', label:'好きなほど避けがち' },
      { t:'ikioi', label:'感情で突っ走りがち' } ] },
    { q: 'こんな恋にハマりやすい？', a: [
      { t:'line', label:'読めない相手を考え続ける恋' },
      { t:'chase', label:'追えば追うほど苦しい恋' },
      { t:'kyuusai', label:'相手を救おうとする恋' },
      { t:'ikioi', label:'刺激的で勢いのある恋' } ] },
    { q: '別れ・すれ違いの時は？', a: [
      { t:'exwatch', label:'別れた後も引きずって見てしまう' },
      { t:'tameshi', label:'わざと距離を置いて反応を見る' },
      { t:'gaman', label:'本音を言えずに我慢する' },
      { t:'sukiyoke', label:'好きなのに冷たくしてしまう' } ] },
    { q: 'あなたの恋の黒歴史は？', a: [
      { t:'line', label:'LINEの深読みで空回り' },
      { t:'gaman', label:'我慢しすぎて爆発' },
      { t:'tameshi', label:'試して相手を遠ざけた' },
      { t:'ikioi', label:'勢いで動いて後悔' } ] },
    { q: '思い出すと恥ずかしいのは？', a: [
      { t:'exwatch', label:'元彼を未練がましく見ていたこと' },
      { t:'kyuusai', label:'ダメ男に尽くしていたこと' },
      { t:'chase', label:'脈なしを追いかけていたこと' },
      { t:'sukiyoke', label:'好きな人に素っ気なくしていたこと' } ] }
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
    const quiz = document.querySelector('#kuro-quiz');
    const btn = document.querySelector('#kuro-go');
    const out = document.querySelector('#kuro-result');
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
          <p class="result-lead">あなたの恋愛黒歴史は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">黒歴史度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pattern}</p>
        </div>
        <div class="result-block"><h3>📓 やりがちな行動</h3><p>${r.actions}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 次の恋で気をつけるポイント</h3><p>${r.next}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="kuro-retry">もう一度診断する</button>
        <p class="compat-note">※ 黒歴史に見える行動も、根っこは「ちゃんと愛されたい」という素直な気持ち。知っておくだけで、次の恋はもっと軽やかになります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#kuro-retry');
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
