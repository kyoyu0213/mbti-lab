/* ============================================================
   本命逃し度診断（honmei-nogashi.html）
   12問・4択。8タイプに加点、最高点を結果に。各タイプ固定の本命逃し度%。
   少し切ないが前向き・責めないトーン。記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    check:   { title:'脈なし確定？好き避け？見極め診断', desc:'彼の態度が脈なしか好き避けかを診断。', url:'sukizake-check.html', cta:'診断してみる' },
    line:    { title:'LINE考えすぎ診断', desc:'返信を深読みしすぎていないかチェック。', url:'line-overthinking.html', cta:'診断してみる' },
    honmei:  { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    jirai:   { title:'恋愛地雷診断', desc:'恋愛で踏みやすい失敗パターンを診断。', url:'love-jirai.html', cta:'診断してみる' },
    dame:    { title:'ダメ男ホイホイ診断', desc:'問題のある相手に惹かれる理由を診断。', url:'dameotoko-diagnosis.html', cta:'診断してみる' },
    dep:     { title:'彼依存度診断', desc:'好きな人に振り回されやすい度合いをチェック。', url:'dependence-check.html', cta:'診断してみる' },
    sukiyoke:{ title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    istj_f: fem('ISTJ', 'https://note.com/intj_analyst/n/nf1b35b99aaff'),
    intp_f: fem('INTP', 'https://note.com/intj_analyst/n/n5eef416fdf6f'),
    intj_f: fem('INTJ', 'https://note.com/intj_analyst/n/n5e4d6eb0a254'),
    entj_f: fem('ENTJ', 'https://note.com/intj_analyst/n/n3cf721ee03ea'),
    estp_f: fem('ESTP', 'https://note.com/intj_analyst/n/n9fef45b19f7d'),
    entp_f: fem('ENTP', 'https://note.com/intj_analyst/n/nf0c7ae903e18'),
    esfp_f: fem('ESFP', 'https://note.com/intj_analyst/n/n23f7ac68d75e'),
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    istp_f: fem('ISTP', 'https://note.com/intj_analyst/n/n25c05c7672f6')
  };

  const RESULTS = {
    keikai: {
      name: '警戒しすぎタイプ', percent: 80,
      reason: '傷つくことを恐れて慎重になりすぎ、本命になりそうな相手にも心を開くまで時間がかかるタイプ。',
      actions: '好意を感じても警戒し、確信が持てるまで動けない。',
      pitfall: '慎重にしているうちに、大切にしてくれる相手が離れてしまうこと。',
      hint: '慎重さは長所。完璧な確信を待たず、小さな一歩（一回の返信・ひとこと）から試してみて。',
      articles: ['istj_f', 'check']
    },
    kangae: {
      name: '考えすぎタイプ', percent: 82,
      reason: '相手の言動や未来を考えすぎて、動く前に疲れてしまうタイプ。',
      actions: 'LINEや態度を深読みし、まだ起きていない不安まで抱える。',
      pitfall: '頭の中で結論を出して、動く前にあきらめてしまうこと。',
      hint: '考える前に「聞く・会う」を。情報が増えると、不安はぐっと小さくなります。',
      articles: ['intp_f', 'line']
    },
    sukiyoke: {
      name: '好き避けタイプ', percent: 81,
      reason: '好きな人ほど意識しすぎて、冷たくしたり距離を取ったりしてしまい、誤解されやすいタイプ。',
      actions: '好きなのに平気なふりをして、そっけなくしてしまう。',
      pitfall: '素っ気なさが「脈なし」と誤解され、本命とすれ違うこと。',
      hint: '全部見せなくて大丈夫。小さな「うれしい」を一つ伝えるだけで、距離は縮まります。',
      articles: ['sukiyoke', 'honmei']
    },
    risou: {
      name: '理想高すぎタイプ', percent: 78,
      reason: '相手に求める条件が高くなりすぎ、現実の優しさや安心感を見落としやすいタイプ。',
      actions: '欠点を探したり、「もっといい人がいる」と感じたり。',
      pitfall: '条件にこだわるうちに、本当に合う相手を見送ってしまうこと。',
      hint: '条件より「一緒にいて楽か」を基準に。減点より加点で相手を見ると、良さに気づけます。',
      articles: ['intj_f', 'entj_f']
    },
    shigeki: {
      name: '刺激追求タイプ', percent: 80,
      reason: '安心できる相手より、ドキドキする相手を選びやすく、本命候補を退屈に感じやすいタイプ。',
      actions: '刺激のない相手に物足りなさを感じ、つい刺激的な人へ。',
      pitfall: 'ドキドキを基準にして、穏やかで大切な相手を手放すこと。',
      hint: '安心は退屈ではなく「土台」。穏やかな相手の新しい一面を探してみて。',
      articles: ['estp_f', 'entp_f', 'esfp_f']
    },
    honne: {
      name: '本音封印タイプ', percent: 79,
      reason: '嫌われたくなくて本音を言えず、関係が深まる前に相手との距離ができやすいタイプ。',
      actions: '我慢して合わせ、言いたいことを飲み込む。',
      pitfall: '本音を隠すうちに、相手との心の距離が縮まらないこと。',
      hint: '小さな「私はこうしたい」から練習を。本音は、信頼を深めるきっかけになります。',
      articles: ['isfp_f', 'jirai']
    },
    kyuusai: {
      name: '救済優先タイプ', percent: 81,
      reason: '幸せにしてくれる相手より、助けたい相手・放っておけない相手を選びやすいタイプ。',
      actions: '問題を抱えた相手に惹かれ、支える恋を選びがち。',
      pitfall: '支える恋に疲れて、大切にしてくれる本命候補を見落とすこと。',
      hint: '「助けたい」と「幸せにしてくれる」は別軸。あなたを大切にする人にも目を向けて。',
      articles: ['infp_f', 'infj_f', 'dame']
    },
    jiyuu: {
      name: '自由優先タイプ', percent: 80,
      reason: '恋愛で自由を失うことを恐れ、関係が深まる前に距離を取ってしまいやすいタイプ。',
      actions: '近づかれると身構え、一人の時間を優先する。',
      pitfall: '自由を守るうちに、本命になりそうな相手と深まれないこと。',
      hint: '自由を尊重してくれる相手なら大丈夫。距離が必要なことを、正直に伝えてみて。',
      articles: ['istp_f', 'dep']
    }
  };
  const PRIORITY = ['keikai', 'kangae', 'sukiyoke', 'risou', 'shigeki', 'honne', 'kyuusai', 'jiyuu'];

  const QUESTIONS = [
    { q: '好きな人ができた時、あなたは？', a: [
      { t:'keikai', label:'失敗が怖くてなかなか動けない' },
      { t:'kangae', label:'相手の気持ちを考えすぎる' },
      { t:'sukiyoke', label:'好きなのにそっけなくしてしまう' },
      { t:'risou', label:'もっと条件のいい人が気になる' } ] },
    { q: '好きな人ができた時、もうひとつ近いのは？', a: [
      { t:'shigeki', label:'もっと刺激的な人が気になる' },
      { t:'honne', label:'嫌われたくなくて本音を抑える' },
      { t:'kyuusai', label:'放っておけない人に惹かれる' },
      { t:'jiyuu', label:'自由が減るのが少し怖い' } ] },
    { q: '優しい人に好かれた時は？', a: [
      { t:'keikai', label:'嬉しいけど警戒してしまう' },
      { t:'kangae', label:'裏がないか考えてしまう' },
      { t:'shigeki', label:'物足りなく感じることがある' },
      { t:'honne', label:'どう返せばいいか分からない' } ] },
    { q: '優しい人に好かれた時、もうひとつは？', a: [
      { t:'sukiyoke', label:'照れて素っ気なくしてしまう' },
      { t:'risou', label:'もっといい人がいる気がする' },
      { t:'kyuusai', label:'助けが必要な人の方が気になる' },
      { t:'jiyuu', label:'束縛されそうで身構える' } ] },
    { q: '恋愛で後悔しやすいのは？', a: [
      { t:'keikai', label:'動けないまま終わった' },
      { t:'sukiyoke', label:'好き避けして誤解された' },
      { t:'shigeki', label:'安定した相手を退屈だと思った' },
      { t:'kyuusai', label:'ダメな相手に尽くしすぎた' } ] },
    { q: '恋愛で後悔しやすいのは？（その2）', a: [
      { t:'kangae', label:'考えすぎて動けなかった' },
      { t:'risou', label:'理想を求めて見送った' },
      { t:'honne', label:'本音を言えなかった' },
      { t:'jiyuu', label:'自由を優先して距離を置いた' } ] },
    { q: '関係が進みそうになると？', a: [
      { t:'keikai', label:'怖くなって様子見する' },
      { t:'kangae', label:'あれこれ考えて不安になる' },
      { t:'sukiyoke', label:'距離を取りたくなる' },
      { t:'risou', label:'相手の欠点を探してしまう' } ] },
    { q: '関係が進みそうになると？（その2）', a: [
      { t:'shigeki', label:'この人でいいのか迷う' },
      { t:'honne', label:'本音を言えず固まる' },
      { t:'kyuusai', label:'相手を支える側に回る' },
      { t:'jiyuu', label:'一人の時間が恋しくなる' } ] },
    { q: 'こんな相手は対象外になりがち？', a: [
      { t:'keikai', label:'急に距離を詰めてくる人' },
      { t:'risou', label:'条件が物足りない人' },
      { t:'shigeki', label:'刺激のない安定した人' },
      { t:'jiyuu', label:'距離が近すぎる人' } ] },
    { q: '好きな人の前では？', a: [
      { t:'kangae', label:'言動を深読みしすぎる' },
      { t:'sukiyoke', label:'好きなほど冷たくしてしまう' },
      { t:'honne', label:'言いたいことを我慢する' },
      { t:'kyuusai', label:'つい世話を焼いてしまう' } ] },
    { q: '本命を逃すとしたら、原因は？', a: [
      { t:'keikai', label:'慎重になりすぎるから' },
      { t:'honne', label:'本音を見せられないから' },
      { t:'sukiyoke', label:'好きなほど避けてしまうから' },
      { t:'jiyuu', label:'自由を優先して逃げるから' } ] },
    { q: 'もうひとつ原因があるなら？', a: [
      { t:'kangae', label:'考えすぎて動けないから' },
      { t:'shigeki', label:'刺激を求めて安定を手放すから' },
      { t:'risou', label:'理想が高すぎるから' },
      { t:'kyuusai', label:'救いたい相手を選ぶから' } ] }
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
    const quiz = document.querySelector('#nogashi-quiz');
    const btn = document.querySelector('#nogashi-go');
    const out = document.querySelector('#nogashi-result');
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
          <p class="result-lead">あなたが本命を逃しやすいのは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">本命逃し度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.reason}</p>
        </div>
        <div class="result-block"><h3>📓 やりがちな行動</h3><p>${r.actions}</p></div>
        <div class="result-block"><h3>🕳️ 恋愛で起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 本命を逃さないためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="nogashi-retry">もう一度診断する</button>
        <p class="compat-note">※ 「本命を逃しやすい」と決まっているわけではありません。クセを知って少し勇気を出すだけで、大切な恋はちゃんと掴めます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#nogashi-retry');
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
