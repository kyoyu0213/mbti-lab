/* ============================================================
   根にもつ度診断（grudge-check.html）
   12問・4択。5スコア（forget/surfaceCalm/midnightRecall/silentResentment/
   longMemory）を集計、最高点を結果に。各タイプ固定の根にもつ度%。
   責めない・仕返し/監視は肯定しない・前向きに締める。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    ex:       { title:'元彼引きずり度診断', desc:'元彼をどれくらい引きずっているかチェック。', url:'ex-boyfriend-check.html', cta:'診断してみる' },
    stalker:  { title:'元彼ストーカー度診断', desc:'元彼への執着度をこっそりチェック。', url:'ex-stalker-check.html', cta:'診断してみる' },
    jealousy: { title:'嫉妬深度診断', desc:'あなたの嫉妬深さと独占欲の出方をチェック。', url:'jealousy-check.html', cta:'診断してみる' },
    haraguro: { title:'恋愛腹黒度診断', desc:'恋愛でどれくらい本音を隠しているかチェック。', url:'love-haraguro.html', cta:'診断してみる' },
    kuro:     { title:'恋愛黒歴史診断', desc:'やりがちな恋のクセ・黒歴史を診断。', url:'love-kurorekishi.html', cta:'診断してみる' },
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    sns:      { title:'別れた後にSNSを見てしまうMBTIランキング', desc:'相手をつい追ってしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n8d28d4e40a7f' },
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b')
  };

  const RESULTS = {
    longMemory: {
      name: '10年後も覚えてるタイプ', percent: 95,
      pattern: '根にもつ度はかなり高め。一度傷つけられたことや裏切られたことを長く覚えており、簡単には信用を戻せないタイプです。',
      scene: '昔の裏切りや傷ついた言葉が、ふとした瞬間に鮮明によみがえる。',
      pitfall: '過去を抱え続けて、新しい関係でも警戒が解けなくなること。',
      hint: '覚えているのは、それだけ真剣だった証。「許す」より「もう手放していい」と自分に許可を出すと、心が軽くなります。',
      articles: ['ex', 'stalker', 'jirai']
    },
    silentResentment: {
      name: '静かな逆恨みタイプ', percent: 80,
      pattern: '表では普通にしていても、心の中では相手への不満や怒りを溜め込みやすいタイプ。言えなかった本音が、後から根にもつ感情に変わりやすいです。',
      scene: '言いたいことを飲み込んだ時、後からじわじわ怒りが残る。',
      pitfall: '溜めた感情が、ある日冷たい態度や距離になって表れること。',
      hint: '怒りは「言えなかったSOS」。小さいうちに言葉にすると、根にもつ前に解消できます。',
      articles: ['haraguro', 'jealousy', 'kuro']
    },
    midnightRecall: {
      name: '夜中に思い出すタイプ', percent: 65,
      pattern: '普段は忘れているつもりでも、夜中や一人の時間にふと思い出してしまうタイプ。過去の言葉や態度を何度も再生しやすいです。',
      scene: '寝る前や一人の時間に、過去のシーンがリプレイされる。',
      pitfall: '反芻するほど記憶が強化され、気持ちが沈んでしまうこと。',
      hint: '思い出したら、スマホや音楽で意識を切り替えて。書き出して「外に出す」のも効果的です。',
      articles: ['line', 'ex']
    },
    surfaceCalm: {
      name: '表面は平気タイプ', percent: 45,
      pattern: 'その場では大人の対応ができるけれど、内心では少し引きずりやすいタイプ。笑っていても、心の中では静かに記録していることがあります。',
      scene: '軽く扱われた時、顔では笑っていても心はメモを取っている。',
      pitfall: '我慢を重ねて、ある日距離を取りたくなってしまうこと。',
      hint: '平気なふりは時に優しさですが、信頼できる相手には小出しに本音を。ため込まないのが一番のケアです。',
      articles: ['isfp_f', 'jirai']
    },
    forget: {
      name: '秒で忘れるタイプ', percent: 15,
      pattern: '根にもつ度は低め。嫌なことがあっても比較的切り替えが早く、過去より今を見やすいタイプです。',
      scene: 'ケンカしても、寝たら案外スッキリしている。',
      pitfall: '切り替えが早いぶん、相手の本当の気持ちを流してしまうことも。',
      hint: 'その軽やかさは才能。たまに立ち止まって気持ちを共有すると、関係がもっと深まります。',
      articles: ['lovetype', 'compat']
    }
  };
  const PRIORITY = ['longMemory', 'silentResentment', 'midnightRecall', 'surfaceCalm', 'forget'];

  const QUESTIONS = [
    { q: '恋人に傷つくことを言われたら？', a: [
      { t:'longMemory', label:'何年経っても覚えていると思う' },
      { t:'midnightRecall', label:'しばらく引きずる' },
      { t:'surfaceCalm', label:'話し合えれば切り替えられる' },
      { t:'forget', label:'その場で忘れることが多い' } ] },
    { q: '友達や恋人に軽く扱われたと感じたら？', a: [
      { t:'surfaceCalm', label:'表には出さないけど心の中で覚えている' },
      { t:'silentResentment', label:'言わずに不満を溜める' },
      { t:'forget', label:'その場で伝える・気にしない' },
      { t:'midnightRecall', label:'あとで何度も思い出す' } ] },
    { q: '元彼にされた嫌なことは？', a: [
      { t:'longMemory', label:'今でも細かく覚えている' },
      { t:'midnightRecall', label:'たまに思い出して腹が立つ' },
      { t:'surfaceCalm', label:'もう整理できている' },
      { t:'forget', label:'ほとんど忘れた' } ] },
    { q: '嫉妬した時は？', a: [
      { t:'silentResentment', label:'我慢して、後から何度も思い出す' },
      { t:'surfaceCalm', label:'少し不機嫌になる' },
      { t:'forget', label:'素直に不安だと伝える' },
      { t:'midnightRecall', label:'夜にひとりで考え込む' } ] },
    { q: '一度「無理」と思った相手には？', a: [
      { t:'longMemory', label:'もう二度と元には戻れない' },
      { t:'silentResentment', label:'表面上は普通でも心で線を引く' },
      { t:'surfaceCalm', label:'謝ってくれたら考える' },
      { t:'forget', label:'わりと普通に戻れる' } ] },
    { q: '言い返せなかった時は？', a: [
      { t:'silentResentment', label:'あとで怒りがじわじわ残る' },
      { t:'midnightRecall', label:'夜に思い出してモヤモヤ' },
      { t:'longMemory', label:'ずっと忘れない' },
      { t:'forget', label:'まあいいかと流せる' } ] },
    { q: '裏切られた経験は？', a: [
      { t:'longMemory', label:'信用が戻らないほど深く残る' },
      { t:'silentResentment', label:'静かに距離を取って覚えておく' },
      { t:'midnightRecall', label:'ふとした時に思い出す' },
      { t:'forget', label:'もう気にしていない' } ] },
    { q: '寝る前に考えるのは？', a: [
      { t:'midnightRecall', label:'過去の嫌だった場面' },
      { t:'longMemory', label:'昔の裏切りや傷ついた言葉' },
      { t:'surfaceCalm', label:'今日あった小さな引っかかり' },
      { t:'forget', label:'明日のことや楽しいこと' } ] },
    { q: '謝られた時は？', a: [
      { t:'longMemory', label:'許しても記憶は消えない' },
      { t:'silentResentment', label:'許したふりで内心は残る' },
      { t:'surfaceCalm', label:'時間をかけて受け入れる' },
      { t:'forget', label:'わりとすぐ水に流せる' } ] },
    { q: '昔のLINEやメッセージは？', a: [
      { t:'longMemory', label:'嫌な内容ほど覚えている' },
      { t:'midnightRecall', label:'たまに見返してしまう' },
      { t:'surfaceCalm', label:'残してはいるが見ない' },
      { t:'forget', label:'消してスッキリする' } ] },
    { q: '心の中の「許せないリスト」は？', a: [
      { t:'longMemory', label:'はっきり存在して消えない' },
      { t:'silentResentment', label:'口には出さないけど在る' },
      { t:'midnightRecall', label:'ふとした時に開いてしまう' },
      { t:'forget', label:'特にない' } ] },
    { q: 'あなたの「もう気にしてない」は？', a: [
      { t:'forget', label:'本当に気にしていない' },
      { t:'surfaceCalm', label:'半分は本音、半分は強がり' },
      { t:'midnightRecall', label:'昼は平気でも夜は別' },
      { t:'silentResentment', label:'実はずっと覚えている' } ] }
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
    const quiz = document.querySelector('#grudge-quiz');
    const btn = document.querySelector('#grudge-go');
    const out = document.querySelector('#grudge-result');
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
          <p class="result-lead">あなたの根にもつ度は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">根にもつ度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pattern}</p>
        </div>
        <div class="result-block"><h3>🌙 思い出しやすい場面</h3><p>${r.scene}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 心を軽くするためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="grudge-retry">もう一度診断する</button>
        <p class="compat-note">※ 忘れられないのは、心が繊細で相手を真剣に受け取っている証。執念ではなく優しさです。少しずつ手放せば、あなたの心はもっと軽くなります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#grudge-retry');
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
