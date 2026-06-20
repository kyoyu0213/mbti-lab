/* ============================================================
   本命に冷たい診断（honmei-cold-check.html）
   3スコア（本命 H / 好き避け S / 脈なし M）を集計し、5タイプ＋本命可能性%を判定。
   断定せず、前向きに締める。記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const ARTICLE_DATA = {
    honmei:   { title:'本命にだけ冷たくなるMBTIランキング', desc:'好きな人にだけ素っ気なくなる心理をタイプ別に。', url:'https://note.com/intj_analyst/n/n6543411a2647' },
    sukiyoke: { title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    check:    { title:'脈なし確定？好き避け？見極め診断', desc:'彼の冷たい態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    kidoku:   { title:'既読無視しがちなMBTIランキング', desc:'既読無視が多い傾向のタイプを紹介。', url:'https://note.com/intj_analyst/n/n9fa05d63f314' },
    midoku:   { title:'未読無視しがちなMBTIランキング', desc:'すぐ返信しないタイプの特徴を解説。', url:'https://note.com/intj_analyst/n/n983863e05735' },
    intp_m:   { title:`${L('INTP')}男性の攻略記事`, desc:'読めないINTP男の本音と脈ありサイン。', url:'https://note.com/intj_analyst/n/n90001451cc43' },
    intj_m:   { title:`${L('INTJ')}男性の攻略記事`, desc:'クールなINTJ男の本音と落とし方。', url:'https://note.com/intj_analyst/n/nfbefa346cf88' }
  };

  const RESULTS = {
    honmei_clumsy: {
      name: '本命だから不器用タイプ', percent: 85,
      overview: '好意があるからこそ緊張したり、意識しすぎて冷たく見えている可能性が高めです。二人きりでは優しさが顔を出しています。',
      honmeiPoints: 'あなたにだけ態度が違う／二人だと優しい／離れると焦る、など「特別扱い」のサインが多めです。',
      cautionPoints: 'ただし不器用さは伝わりにくいもの。あなたから安心できる空気を作ると、彼も素を出しやすくなります。',
      action: '責めずに、軽い雑談や笑顔で接点を増やして。安心すると、彼の優しさはぐっと出やすくなります。',
      articles: ['honmei', 'sukiyoke', 'intp_m']
    },
    sukizake_keikai: {
      name: '好き避け・警戒タイプ', percent: 70,
      overview: '好意はありそうですが、傷つくことや関係が変わることを恐れて、距離を取っている可能性があります。',
      honmeiPoints: '避けるのに完全には離れない／たまに優しい、など「気にはなっている」サインがあります。',
      cautionPoints: '警戒心が強いぶん、距離が縮まるのに時間がかかるかも。急かすと余計に引いてしまうことも。',
      action: '焦らず安心を積み重ねて。プレッシャーを与えず、少しずつ自然な会話を増やすのがおすすめです。',
      articles: ['sukiyoke', 'check', 'honmei']
    },
    hold: {
      name: '判断保留タイプ', percent: 50,
      overview: '本命だから冷たいのか、単に距離があるのかは、まだ判断しにくい状態です。',
      honmeiPoints: '本命っぽい瞬間（特別扱い・たまの優しさ）も見られます。',
      cautionPoints: '一方でそっけない場面もあり、どちらとも取れる状態です。',
      action: '結論を急がず、もう少し相手の行動を観察を。あなたから小さくアプローチして反応を見るのも手です。',
      articles: ['check', 'sukiyoke', 'honmei']
    },
    myaku_lean: {
      name: '脈なし寄りタイプ', percent: 30,
      overview: '冷たさに、照れや緊張よりも関心の薄さが出ている可能性がやや高めです。',
      honmeiPoints: 'ただし、奥手で表に出さないだけの可能性もゼロではありません。',
      cautionPoints: '自分から関係を進めようとする動きが少なめです。',
      action: '追いかけすぎず、自分の時間も大切に。相手の出方を見つつ、無理のない距離で接してみて。',
      articles: ['kidoku', 'midoku', 'check']
    },
    cold: {
      name: 'ただ冷たいだけタイプ', percent: 10,
      overview: '現時点では、本命だから冷たい可能性は低めです。優しさや歩み寄りが少ない状態です。',
      honmeiPoints: '今は本命のサインは少なめ。ただ、状況が変われば関係が動くこともあります。',
      cautionPoints: '距離を縮める意思が見えにくい状態です。',
      action: '無理に距離を詰めるより、自分を大切にする時間を。あなたの魅力が伝わる場面が増えれば、関係が変わることも。落ち込みすぎないで。',
      articles: ['kidoku', 'midoku', 'honmei']
    }
  };

  /* 各選択肢: h(本命) / s(好き避け) / m(脈なし) に加点 */
  const QUESTIONS = [
    { q: 'あなたへの態度は？', a: [
      { label:'あなたにだけ態度が違う（特別扱い）', h:2 },
      { label:'あなたにだけ距離を置く・避ける', s:2 },
      { label:'誰に対しても同じでそっけない', m:1 },
      { label:'あなたにはむしろ優しい', h:1 } ] },
    { q: '二人きりの時は？', a: [
      { label:'人前より優しい', h:2 },
      { label:'少し緊張しているように見える', s:1 },
      { label:'二人きりを避ける', m:2 },
      { label:'そっけないけど離れない', s:1, h:1 } ] },
    { q: '連絡の特徴は？', a: [
      { label:'返信は遅いけど内容は丁寧', h:2 },
      { label:'たまに急に優しくなる', s:2 },
      { label:'短文で会話が続かない', m:2 },
      { label:'基本的に連絡が来ない', m:1 } ] },
    { q: 'あなたが離れようとすると？', a: [
      { label:'少し焦ったような反応をする', h:2 },
      { label:'様子は見に来るが素っ気ない', s:1 },
      { label:'向こうから連絡してくる', h:1 },
      { label:'特に反応がない', m:2 } ] },
    { q: '周りに人がいる時は？', a: [
      { label:'あなたにだけ冷たくなる', s:2 },
      { label:'普段通り', m:1 },
      { label:'からかうような態度になる', s:1 },
      { label:'ほとんど関わろうとしない', m:2 } ] },
    { q: '目が合うと？', a: [
      { label:'すぐ逸らすけど、また見てくる', s:2 },
      { label:'笑ってくれる', h:1 },
      { label:'逸らしたまま反応がない', m:2 },
      { label:'そもそも目が合わない', m:1 } ] },
    { q: 'あなたが困っている時は？', a: [
      { label:'さりげなく助けてくれる', h:2 },
      { label:'気にかけてくれる', h:1 },
      { label:'特に何もしない', m:2 },
      { label:'心配してそうだが態度はそっけない', s:1 } ] },
    { q: '会話のキャッチボールは？', a: [
      { label:'ゆっくりだけど続く', h:1 },
      { label:'質問が返ってこない', m:2 },
      { label:'照れて短くなる', s:1 },
      { label:'すぐ終わってしまう', m:1 } ] },
    { q: 'デートや誘いは？', a: [
      { label:'迷うけど来てくれる', h:1, s:1 },
      { label:'やんわり避けられる', m:2 },
      { label:'向こうから誘うこともある', h:2 },
      { label:'自分からは動かない', m:1 } ] },
    { q: '冷たさの一貫性は？', a: [
      { label:'冷たい時と優しい時の差が激しい', s:2 },
      { label:'ずっと一定で冷たい', m:2 },
      { label:'二人だと急に柔らかくなる', h:1 },
      { label:'日に日に関心が薄れている気がする', m:1 } ] },
    { q: 'あなたへの関心は？', a: [
      { label:'細かいことをよく覚えている', h:2 },
      { label:'興味なさそうで、実は見ている', s:1 },
      { label:'自分のことしか話さない', m:2 },
      { label:'あなたの話を聞きたがる', h:1 } ] },
    { q: 'あなたの直感では？', a: [
      { label:'嫌われてはいない気がする', h:2 },
      { label:'照れて避けている気がする', s:1 },
      { label:'関心が薄い気がする', m:2 },
      { label:'たまに脈ありかもと思う', h:1 } ] }
  ];

  function judge(H, S, M) {
    if (M >= H * 2 && M >= 6) return 'cold';
    if (M > H + 2) return 'myaku_lean';
    if (H > M + 3) return 'honmei_clumsy';
    if (H >= M && S >= 3) return 'sukizake_keikai';
    if (H > M + 1) return 'honmei_clumsy';
    return 'hold';
  }

  function articleCard(key) {
    const a = ARTICLE_DATA[key] || {};
    const url = a.url || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    const cta = a.cta || (ext ? 'noteで読む' : '見てみる');
    return `<article class="card"><h4>${a.title || ''}</h4>${a.desc ? `<p>${a.desc}</p>` : ''}<a class="btn" href="${url}"${at}>${cta}</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#honmei-quiz');
    const btn = document.querySelector('#honmei-go');
    const out = document.querySelector('#honmei-result');
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
      let H = 0, S = 0, M = 0, answered = 0;
      QUESTIONS.forEach((item, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) {
          answered++;
          const o = item.a[Number(sel.value)];
          H += o.h || 0; S += o.s || 0; M += o.m || 0;
        }
      });
      if (answered < QUESTIONS.length) {
        out.innerHTML = `<p class="compat-hint">すべての質問（残り${QUESTIONS.length - answered}問）に答えてください。</p>`;
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const r = RESULTS[judge(H, S, M)];
      const cards = r.articles.map(articleCard).join('');
      out.innerHTML = `
        <div class="result-card">
          <p class="result-lead">診断結果</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">本命可能性</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.overview}</p>
        </div>
        <div class="result-block"><h3>💗 本命っぽいポイント</h3><p>${r.honmeiPoints}</p></div>
        <div class="result-block"><h3>🌀 注意したいポイント</h3><p>${r.cautionPoints}</p></div>
        <div class="result-block"><h3>🌸 これから取るべき行動</h3><p>${r.action}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="honmei-retry">もう一度診断する</button>
        <p class="compat-note">※ これは行動傾向からの目安で、「絶対に本命／絶対に脈なし」と決まるものではありません。気持ちは、これからの関わり方で変えていけます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#honmei-retry');
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
