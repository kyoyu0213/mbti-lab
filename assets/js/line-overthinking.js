/* ============================================================
   LINE考えすぎ診断（line-overthinking.html）
   12問・4択。5つのスコア（既読分析/未読不安/妄想/返信待ち/バランス）を集計、
   最高点のタイプを結果に。各タイプに固定の「考えすぎ度%」。
   読者を責めない前向きトーン。記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const ARTICLE_DATA = {
    kidoku:  { title:'既読無視しがちなMBTIランキング', desc:'既読無視が多い傾向のタイプを紹介。', url:'https://note.com/intj_analyst/n/n9fa05d63f314' },
    midoku:  { title:'未読無視しがちなMBTIランキング', desc:'すぐ返信しないタイプの特徴を解説。', url:'https://note.com/intj_analyst/n/n983863e05735' },
    sukiyoke:{ title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    check:   { title:'脈なし確定？好き避け？見極め診断', desc:'彼の冷たい態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    intp_f:  { title:`${L('INTP')}女性の恋愛記事`, desc:'考えすぎやすいINTP女性の恋愛のヒント。', url:'https://note.com/intj_analyst/n/n5eef416fdf6f' },
    intp_m:  { title:`${L('INTP')}男性の攻略記事`, desc:'読めないINTP男の本音と脈ありサイン。', url:'https://note.com/intj_analyst/n/n90001451cc43' },
    intj_m:  { title:`${L('INTJ')}男性の攻略記事`, desc:'クールなINTJ男の本音と落とし方。', url:'https://note.com/intj_analyst/n/nfbefa346cf88' }
  };

  const RESULTS = {
    read: {
      name: '既読分析官タイプ', percent: 90,
      overview: '既読のタイミング、返信速度、文面の温度差まで細かく分析できるタイプ。相手のLINEから本音を読み取ろうとする観察力の高い人です。',
      points: '「いつもより返信が遅い」「絵文字が減った」など、小さな変化に敏感に気づきます。',
      pitfall: '分析するほど深読みが進み、相手にその気がない変化まで気にして疲れてしまうこと。',
      hint: 'LINEは情報が少ないメディア。「分析」を一度止めて、会った時の態度で判断すると、ぐっと楽になります。',
      articles: ['kidoku', 'check', 'intp_m']
    },
    unread: {
      name: '未読監視員タイプ', percent: 85,
      overview: '未読の時間が長いほど不安になりやすいタイプ。相手を想う気持ちが強いぶん、反応を待つのが少し苦手です。',
      points: 'スマホを何度も確認し、「なぜ読まないのか」を考え続けやすいです。',
      pitfall: '未読＝拒否、と結びつけて、実際はただ忙しいだけでも落ち込んでしまうこと。',
      hint: '未読の理由はほとんどが「タイミング」。通知を一時オフにして、自分の時間に没頭する練習を。',
      articles: ['midoku', 'check', 'intp_f']
    },
    imag: {
      name: '妄想探偵タイプ', percent: 80,
      overview: 'LINEの一言から相手の気持ちや状況を推理できる、想像力ゆたかなタイプ。',
      points: '情報が少ないほど想像がふくらみ、つい悪い方向のストーリーまで作ってしまいがちです。',
      pitfall: '頭の中の「推理」を事実だと思い込み、ひとりで不安を大きくしてしまうこと。',
      hint: '気になることは、想像で埋めずに軽く聞いてみて。答え合わせができると、妄想はすっと消えます。',
      articles: ['sukiyoke', 'intp_f', 'intj_m']
    },
    reply: {
      name: '返信待ち不安タイプ', percent: 70,
      overview: '返信が来るまで気持ちが落ち着きにくいタイプ。相手からの反応が、恋の安心材料になっています。',
      points: '送った後そわそわしたり、返信が来ると一気にホッとしたりしやすいです。',
      pitfall: '相手の返信ペースに自分の感情を預けすぎて、振り回されてしまうこと。',
      hint: '返信は「相手の都合」、あなたの価値とは無関係です。送ったら一度スマホを置いて、好きなことを。',
      articles: ['kidoku', 'check', 'intp_f']
    },
    balance: {
      name: 'バランスLINEタイプ', percent: 35,
      overview: 'LINEを気にしすぎず、相手のペースも自分のペースも大切にできるタイプ。恋愛中でも落ち着いてやりとりできます。',
      points: '返信が遅くても「忙しいのかな」と思え、自分の時間も楽しめています。',
      pitfall: '落ち着いているぶん、好意が淡白に伝わることも。たまには素直な一言を添えてみて。',
      hint: '今の余裕は大きな魅力。安心できる相手には、ほんの少し甘えるLINEもおすすめです。',
      articles: ['check', 'intp_f']
    }
  };
  const PRIORITY = ['read', 'unread', 'imag', 'reply', 'balance'];

  /* 各選択肢: {k:スコアキー, p:加点} */
  const QUESTIONS = [
    { q: '好きな人から返信が遅い時、あなたは？', a: [
      { k:'read', p:2, label:'既読時間や返信速度を細かくチェックする' },
      { k:'unread', p:2, label:'何度もスマホを見てしまう' },
      { k:'balance', p:2, label:'忙しいのかなと思える' },
      { k:'reply', p:1, label:'返ってくるまで落ち着かない' } ] },
    { q: '既読がついたのに返信が来ない時は？', a: [
      { k:'read', p:2, label:'何かまずいこと言ったか文面を見返す' },
      { k:'imag', p:2, label:'既読スルーの理由をいろいろ想像する' },
      { k:'balance', p:2, label:'後で返すのかなと思う' },
      { k:'reply', p:1, label:'少し落ち込む' } ] },
    { q: 'LINEの文面で気になるのは？', a: [
      { k:'read', p:2, label:'句読点・絵文字・返信速度まで全部' },
      { k:'imag', p:1, label:'いつもとの温度差から気持ちを推理' },
      { k:'balance', p:2, label:'内容が分かれば十分' },
      { k:'unread', p:1, label:'短いと少し不安になる' } ] },
    { q: '相手の返信がそっけない時は？', a: [
      { k:'imag', p:2, label:'嫌われたかもと想像が広がる' },
      { k:'reply', p:2, label:'不安で反応が欲しくなる' },
      { k:'balance', p:2, label:'そういう日もあると思う' },
      { k:'read', p:1, label:'前のLINEと比べて分析する' } ] },
    { q: '送った後にやりがちなのは？', a: [
      { k:'read', p:2, label:'自分の文面を何度も読み返す' },
      { k:'imag', p:1, label:'相手がどう思ったか想像する' },
      { k:'balance', p:2, label:'送ったらあまり見返さない' },
      { k:'reply', p:1, label:'返信が来るまでソワソワする' } ] },
    { q: '未読が続くと？', a: [
      { k:'unread', p:2, label:'未読の時間がとても気になる' },
      { k:'imag', p:2, label:'読まない理由を考え続ける' },
      { k:'balance', p:2, label:'気にせず過ごせる' },
      { k:'reply', p:1, label:'だんだん不安になる' } ] },
    { q: '通知が鳴ると？', a: [
      { k:'reply', p:2, label:'彼かもと一喜一憂する' },
      { k:'unread', p:2, label:'すぐ確認してしまう' },
      { k:'balance', p:2, label:'あとで見ればいいと思える' },
      { k:'read', p:1, label:'内容より「誰から」を気にする' } ] },
    { q: '既読のタイミングを？', a: [
      { k:'read', p:2, label:'細かく覚えていて分析する' },
      { k:'unread', p:1, label:'遅いと落ち着かない' },
      { k:'balance', p:2, label:'ほとんど気にしない' },
      { k:'imag', p:1, label:'早い遅いで気持ちを推理する' } ] },
    { q: '返信が来ないまま夜になると？', a: [
      { k:'reply', p:2, label:'何も手につかない' },
      { k:'unread', p:2, label:'何度もトーク画面を開く' },
      { k:'balance', p:2, label:'普通に自分のことをする' },
      { k:'imag', p:1, label:'悪いことを考えてしまう' } ] },
    { q: '相手のひとことの温度差は？', a: [
      { k:'read', p:2, label:'敏感に察知して分析する' },
      { k:'imag', p:2, label:'裏の意味を考えてしまう' },
      { k:'balance', p:2, label:'あまり気にならない' },
      { k:'reply', p:1, label:'冷たいと不安になる' } ] },
    { q: 'LINEを送る前は？', a: [
      { k:'read', p:2, label:'何度も書き直して整える' },
      { k:'imag', p:1, label:'どう受け取られるか想像する' },
      { k:'balance', p:2, label:'さっと送る' },
      { k:'reply', p:1, label:'返信を期待してドキドキする' } ] },
    { q: 'LINEで一番気にするのは？', a: [
      { k:'read', p:2, label:'返信速度と文面の細部' },
      { k:'unread', p:2, label:'既読・未読のステータス' },
      { k:'imag', p:2, label:'言葉の裏にある本音' },
      { k:'balance', p:2, label:'特に気にしない' } ] }
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
    const quiz = document.querySelector('#line-quiz');
    const btn = document.querySelector('#line-go');
    const out = document.querySelector('#line-result');
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
        if (sel) { answered++; const o = item.a[Number(sel.value)]; scores[o.k] += o.p; }
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
          <p class="result-lead">診断結果</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">LINE考えすぎ度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.overview}</p>
        </div>
        <div class="result-block"><h3>🔍 考えすぎやすいポイント</h3><p>${r.points}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 少し楽になるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="line-retry">もう一度診断する</button>
        <p class="compat-note">※ LINEの返信だけで相手の気持ちは決まりません。これは“考えすぎぐせ”の目安。あなたの想像力は、自分を大切にする方向にも活かせます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#line-retry');
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
