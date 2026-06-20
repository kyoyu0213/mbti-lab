/* ============================================================
   嫉妬深度診断（jealousy-check.html）
   12問・4択。5スコア（low/hidden/snsCheck/possessive/accumulation）を集計、
   最高点を結果に。各タイプ固定の嫉妬深度%。責めない・監視行為は肯定しない・
   前向きに締める。記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    jealousy_rank: { title:'実はかなり重い？嫉妬深いMBTIランキング', desc:'嫉妬深い傾向のタイプをランキングで解説。', url:'https://note.com/intj_analyst/n/n89125acfee0c' },
    sns:           { title:'別れた後にSNSを見てしまうMBTIランキング', desc:'相手をつい追ってしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n8d28d4e40a7f' },
    dep:      { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    line:     { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    stalker:  { title:'元彼ストーカー度診断', desc:'元彼への執着度をこっそりチェック。', url:'ex-stalker-check.html', cta:'診断してみる' },
    jirai:    { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    honmei:   { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    dame:     { title:'ダメ男ホイホイ診断', desc:'問題のある相手に惹かれる理由を診断。', url:'dameotoko-diagnosis.html', cta:'診断してみる' },
    compat:   { title:'MBTI恋愛相性診断', desc:'あなたとあの人の相性をチェック。', url:'compat.html', cta:'診断してみる' },
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b')
  };

  const RESULTS = {
    possessive: {
      name: '独占欲モンスター型', percent: 90,
      pattern: '好きになるほど「自分だけを見てほしい」という気持ちが強くなりやすいタイプ。相手の自由や交友関係に敏感です。',
      scene: '彼の女友達や、見えない予定が気になった時に、独占欲がうずきます。',
      pitfall: '束縛が強くなりすぎて、相手を窮屈にさせてしまうこと。',
      hint: '独占欲は「大切に思う気持ち」の裏返し。信じて少し手放すほど、相手は安心してあなたに向き合えます。',
      articles: ['dep', 'dame', 'jealousy_rank']
    },
    accumulation: {
      name: '静かな嫉妬蓄積型', percent: 75,
      pattern: '嫉妬をすぐには表に出さず、心の中に溜め込みやすいタイプ。後から一気に不機嫌になったり、距離を取ったりします。',
      scene: '気になることがあっても言えず、あとでまとめて気持ちがあふれがち。',
      pitfall: '溜め込んだ不満が突然あふれて、相手を驚かせてしまうこと。',
      hint: '小出しが鍵。小さなモヤモヤのうちに「これ気になったな」と伝えると、爆発を防げます。',
      articles: ['isfp_f', 'infp_f', 'jirai']
    },
    snsCheck: {
      name: 'SNS監視型', percent: 70,
      pattern: '不安になると、相手のSNSやオンライン状況、異性の影を確認したくなるタイプ。',
      scene: '返信が遅い時や不安な時に、つい確認行動をしてしまう。',
      pitfall: '証拠を探すほど不安が増え、かえって安心から遠ざかってしまうこと。',
      hint: '確認したくなったら、まず通知を閉じて深呼吸。安心は「見る」より「聞く・伝える」ことから生まれます。',
      articles: ['line', 'stalker', 'sns']
    },
    hidden: {
      name: '内心メラメラ型', percent: 55,
      pattern: '表では平気なふりをするけれど、内心ではかなり気にしているタイプ。隠すほど態度に出やすいことがあります。',
      scene: '彼が異性と仲良くしている時、笑顔の裏でモヤモヤしがち。',
      pitfall: '我慢がそっけない態度に出て、理由が伝わらずすれ違うこと。',
      hint: '「ちょっとやきもち焼いた」と軽く言葉に。隠すより伝えるほうが、ずっと楽で可愛いです。',
      articles: ['honmei', 'jirai']
    },
    low: {
      name: '嫉妬なんてしません型', percent: 20,
      pattern: '嫉妬深度は低め。相手の交友関係や過去を過度に気にせず、自分のペースを保てるタイプです。',
      scene: '相手が異性と話していても、基本どんと構えていられます。',
      pitfall: 'クールすぎて、相手に「興味がないのかな」と寂しく思わせることも。',
      hint: '信頼できるのは長所。たまに「やきもち」を言葉にすると、可愛げが伝わって関係が深まります。',
      articles: ['dep', 'compat']
    }
  };
  const PRIORITY = ['possessive', 'accumulation', 'snsCheck', 'hidden', 'low'];

  const QUESTIONS = [
    { q: '好きな人が異性と楽しそうに話していたら？', a: [
      { t:'hidden', label:'表に出さないけど内心かなり気になる' },
      { t:'low', label:'少し気になるけど普通にしていられる' },
      { t:'snsCheck', label:'その相手との関係性を知りたくなる' },
      { t:'accumulation', label:'何も言わず、あとでモヤモヤする' } ] },
    { q: '彼が元カノの話をしたら？', a: [
      { t:'hidden', label:'平気なふりをするけどかなり引きずる' },
      { t:'low', label:'過去のことなので気にしない' },
      { t:'snsCheck', label:'元カノのSNSまで見たくなる' },
      { t:'accumulation', label:'言わずに溜め込む' } ] },
    { q: '返信が遅い時に考えることは？', a: [
      { t:'possessive', label:'誰かといるのかと独占欲がうずく' },
      { t:'low', label:'返信は相手のペースだと思う' },
      { t:'snsCheck', label:'オンライン状況やSNSを確認したくなる' },
      { t:'hidden', label:'不安だけど平気なふりをする' } ] },
    { q: '嫉妬した時の行動は？', a: [
      { t:'hidden', label:'何も言わず態度が少し冷たくなる' },
      { t:'low', label:'そもそもあまり嫉妬しない' },
      { t:'snsCheck', label:'相手の行動を確認したくなる' },
      { t:'accumulation', label:'言わずに溜めて後で不機嫌になる' } ] },
    { q: '彼の女友達についてどう思う？', a: [
      { t:'possessive', label:'正直かなり気になる・独占したい' },
      { t:'low', label:'友達なら問題ない' },
      { t:'snsCheck', label:'どんな人か確認したくなる' },
      { t:'hidden', label:'気になるけど平気なふり' } ] },
    { q: '「自分だけを見てほしい」気持ちは？', a: [
      { t:'possessive', label:'とても強い' },
      { t:'accumulation', label:'強いけど言えずに溜める' },
      { t:'low', label:'あまりない、自由でいい' },
      { t:'hidden', label:'内心は強いが見せない' } ] },
    { q: '彼が他の女性を褒めたら？', a: [
      { t:'possessive', label:'自分と比べて独占欲が出る' },
      { t:'hidden', label:'平気なふりをする' },
      { t:'accumulation', label:'何も言わず引きずる' },
      { t:'low', label:'特に気にしない' } ] },
    { q: '不安になったら？', a: [
      { t:'snsCheck', label:'SNSやオンラインを何度も確認' },
      { t:'accumulation', label:'言えずに一人で抱える' },
      { t:'possessive', label:'もっとそばにいてほしくなる' },
      { t:'low', label:'自分の時間で気をそらす' } ] },
    { q: '彼のスマホは気になる？', a: [
      { t:'snsCheck', label:'つい中身を確認したくなる' },
      { t:'possessive', label:'誰と繋がっているか気になる' },
      { t:'hidden', label:'気になるけど我慢する' },
      { t:'low', label:'見ようと思わない' } ] },
    { q: '嫉妬を感じた後は？', a: [
      { t:'accumulation', label:'しばらく引きずって距離を取る' },
      { t:'hidden', label:'冷たい態度で示してしまう' },
      { t:'snsCheck', label:'つい証拠を探してしまう' },
      { t:'low', label:'すぐ切り替えられる' } ] },
    { q: '恋愛で大事にしたいのは？', a: [
      { t:'possessive', label:'自分だけの特別な存在でいたい' },
      { t:'low', label:'お互いの自由を尊重したい' },
      { t:'accumulation', label:'波風を立てず穏やかでいたい' },
      { t:'hidden', label:'不安を見せずに振る舞いたい' } ] },
    { q: 'あなたの嫉妬は？', a: [
      { t:'possessive', label:'独占欲として強く出る' },
      { t:'snsCheck', label:'確認行動として出る' },
      { t:'hidden', label:'表に出さず内心で燃える' },
      { t:'accumulation', label:'溜め込んで後から出る' } ] }
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
    const quiz = document.querySelector('#jealousy-quiz');
    const btn = document.querySelector('#jealousy-go');
    const out = document.querySelector('#jealousy-result');
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
          <p class="result-lead">あなたの嫉妬は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">嫉妬深度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pattern}</p>
        </div>
        <div class="result-block"><h3>🔥 嫉妬が出やすい場面</h3><p>${r.scene}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 嫉妬とうまく付き合うヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="jealousy-retry">もう一度診断する</button>
        <p class="compat-note">※ 嫉妬は「大切に思う気持ち」の裏返し。重いわけでも、ダメなわけでもありません。上手に付き合えば、愛情をまっすぐ届けられます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#jealousy-retry');
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
