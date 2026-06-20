/* ============================================================
   恋愛拗らせタイプ診断（love-kompleks.html）
   10〜12問・4択。各回答が8つの拗らせタイプに加点、最高点を結果に。
   おすすめ記事は女性タイプ別note＋ランキング記事。URLは差し替え可。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c); // INTP（論理学者）

  /* 女性タイプ別 note記事（後から差し替え可） */
  const FEMALE_ARTICLE = {
    INTJ:'https://note.com/intj_analyst/n/n5e4d6eb0a254',
    INTP:'https://note.com/intj_analyst/n/n5eef416fdf6f',
    INFJ:'https://note.com/intj_analyst/n/nf472dfb6c623',
    INFP:'https://note.com/intj_analyst/n/n8cd00438b91b',
    ENFP:'https://note.com/intj_analyst/n/n20ca6f3e9315',
    ENFJ:'https://note.com/intj_analyst/n/ndd7de83a3e20',
    ENTP:'https://note.com/intj_analyst/n/nf0c7ae903e18',
    ENTJ:'https://note.com/intj_analyst/n/n3cf721ee03ea',
    ISFJ:'https://note.com/intj_analyst/n/n094e03a3fc66',
    ISTJ:'https://note.com/intj_analyst/n/nf1b35b99aaff',
    ISFP:'https://note.com/intj_analyst/n/n56410f928faf',
    ISTP:'https://note.com/intj_analyst/n/n25c05c7672f6',
    ESFJ:'https://note.com/intj_analyst/n/n7cdf00ad9cdd',
    ESTJ:'https://note.com/intj_analyst/n/ncac5194b7898',
    ESFP:'https://note.com/intj_analyst/n/n23f7ac68d75e',
    ESTP:'https://note.com/intj_analyst/n/n9fef45b19f7d'
  };
  /* ランキング記事（後から差し替え可） */
  const RANK_ARTICLE = {
    sukiyoke: { title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    honmei:   { title:'本命にだけ冷たくなるMBTIランキング', desc:'好きな人にだけ素っ気なくなる心理をタイプ別に。', url:'https://note.com/intj_analyst/n/n6543411a2647' }
  };

  /* 8つの拗らせタイプ（priority順＝同点時の優先順位） */
  const RESULTS = {
    think: {
      name: '考えすぎ型',
      catch: '考えるより、聞いてみる勇気を。',
      traits: '相手のLINEや態度を分析しすぎて、恋愛が頭から離れなくなるタイプ。観察力と思いやりの裏返しです。',
      pitfall: 'ひとりで答えを探し続け、小さな言動に一喜一憂して疲れてしまうこと。',
      hint: '気になったことは「考える」前に「そのまま聞く」。確かめるだけで、心がふっと軽くなります。',
      articles: ['INTP', 'INTJ']
    },
    rescue: {
      name: '救済型',
      catch: '相手を救う前に、自分を満たして。',
      traits: '問題を抱えた相手や孤独な人に惹かれ、「私なら分かってあげられる」と感じやすい、愛情深いタイプ。',
      pitfall: '相手の課題まで背負い込み、自分がすり減ってしまうこと。',
      hint: '支えることと抱え込むことは別もの。あなたが笑顔でいられる距離を、まず大切に。',
      articles: ['INFP', 'INFJ']
    },
    devote: {
      name: '尽くしすぎ型',
      catch: 'あなたの「したい」も、ちゃんと大切に。',
      traits: '好きな人を最優先して、自分の気持ちを後回しにしやすい、やさしいタイプ。',
      pitfall: '尽くすほど我慢がたまり、「分かってもらえない」と苦しくなること。',
      hint: '「してほしい」も言葉にしてOK。お願い上手は、愛され上手です。',
      articles: ['ISFJ', 'ESFJ', 'ENFJ']
    },
    thrill: {
      name: '刺激追求型',
      catch: 'ドキドキも安心も、両方あっていい。',
      traits: '安心よりときめきを求め、刺激的な恋に惹かれやすい、情熱的なタイプ。',
      pitfall: '刺激が落ち着くと冷めたと感じ、心地よい関係を手放してしまうこと。',
      hint: 'ときめきは「深まり」からも生まれます。同じ人の新しい一面を探してみて。',
      articles: ['ESTP', 'ENTP', 'ESFP', 'ENFP']
    },
    avoid: {
      name: '好き避け型',
      catch: '避けてしまうのは、本気な証拠。',
      traits: '好きな人ほど意識しすぎて、冷たくしたり距離を取ったりしてしまうタイプ。',
      pitfall: '素っ気なさが「脈なし」と誤解され、すれ違ってしまうこと。',
      hint: '全部見せなくて大丈夫。小さな「うれしい」を一つ伝えるだけで、距離は縮まります。',
      articles: ['#sukiyoke', '#honmei']
    },
    suppress: {
      name: '本音封印型',
      catch: '本音は、嫌われる理由にはならない。',
      traits: '嫌われるくらいなら我慢しようとして、本音を飲み込みやすい、協調的なタイプ。',
      pitfall: 'ため込んだ気持ちが、ある日いきなり限界になってしまうこと。',
      hint: '小さな「私はこうしたい」から練習を。本音を見せられる相手こそ、長く一緒にいられます。',
      articles: ['ISFP']
    },
    control: {
      name: 'コントロール型',
      catch: '導く力は、信じる力に変えられる。',
      traits: '恋愛を思い通りに進めたくて、相手を変えたくなりやすい、頼れるタイプ。',
      pitfall: '思い通りにならないとイライラし、相手を窮屈にさせてしまうこと。',
      hint: '相手は「直す対象」ではなくチーム。任せて待つことが、信頼と心の余裕を生みます。',
      articles: ['ENTJ', 'ESTJ']
    },
    cautious: {
      name: '慎重回避型',
      catch: 'こわいのは、ちゃんと大切だから。',
      traits: '傷つくことを恐れて、動けないまま恋を逃しやすい、誠実で慎重なタイプ。',
      pitfall: '考えすぎて一歩が踏み出せず、チャンスを見送ってしまうこと。',
      hint: '完璧なタイミングを待つより、軽い一言から。小さな一歩でOKです。',
      articles: ['ISTJ', 'ISTP']
    }
  };
  const PRIORITY = ['think', 'rescue', 'devote', 'thrill', 'avoid', 'suppress', 'control', 'cautious'];

  const QUESTIONS = [
    { q: '好きな人ができると、まずどうなる？', a: [
      { t:'think', label:'相手の言動を深読みする' },
      { t:'devote', label:'相手のために何かしてあげたくなる' },
      { t:'thrill', label:'一気に盛り上がって行動する' },
      { t:'suppress', label:'嫌われないように様子を見る' } ] },
    { q: '恋愛で一番つらいことは？', a: [
      { t:'think', label:'相手の本音が分からないこと' },
      { t:'devote', label:'必要とされないこと' },
      { t:'thrill', label:'退屈になること' },
      { t:'suppress', label:'本音を言って嫌われること' } ] },
    { q: '苦しい恋にハマる理由は？', a: [
      { t:'think', label:'理由を知りたくて考え続ける' },
      { t:'rescue', label:'私なら支えられると思う' },
      { t:'thrill', label:'ドキドキがあると離れられない' },
      { t:'suppress', label:'我慢すれば関係が壊れないと思う' } ] },
    { q: '好きな人の前でのあなたは？', a: [
      { t:'avoid', label:'好きなほど冷たくしてしまう' },
      { t:'devote', label:'つい尽くしてしまう' },
      { t:'cautious', label:'慎重になって動けない' },
      { t:'control', label:'主導権を握りたくなる' } ] },
    { q: '連絡について、あなたは？', a: [
      { t:'think', label:'返信の意味を深読みする' },
      { t:'avoid', label:'好きな人ほどそっけなくしがち' },
      { t:'thrill', label:'テンションで一気に送る' },
      { t:'cautious', label:'嫌われるのが怖くて慎重になる' } ] },
    { q: '恋愛でやりがちなのは？', a: [
      { t:'devote', label:'尽くしすぎる' },
      { t:'control', label:'相手を変えたくなる' },
      { t:'rescue', label:'放っておけない人を助けたくなる' },
      { t:'avoid', label:'好きな人を避けてしまう' } ] },
    { q: '恋人に求めるのは？', a: [
      { t:'thrill', label:'ドキドキと刺激' },
      { t:'cautious', label:'安心と安定' },
      { t:'control', label:'自分のペースに合うこと' },
      { t:'rescue', label:'自分を必要としてくれること' } ] },
    { q: 'すれ違いやケンカのとき？', a: [
      { t:'suppress', label:'言いたいことを我慢する' },
      { t:'control', label:'相手を説得して正そうとする' },
      { t:'cautious', label:'距離を置いて考えたくなる' },
      { t:'think', label:'原因をひとりで考え込む' } ] },
    { q: '恋が終わりそうなとき？', a: [
      { t:'rescue', label:'自分が支えれば変われると思う' },
      { t:'suppress', label:'本音を言えずに我慢する' },
      { t:'avoid', label:'あえて冷たくしてしまう' },
      { t:'devote', label:'もっと尽くそうとする' } ] },
    { q: '恋愛で一番こわいのは？', a: [
      { t:'cautious', label:'傷つくこと' },
      { t:'suppress', label:'嫌われること' },
      { t:'think', label:'相手の気持ちが読めないこと' },
      { t:'thrill', label:'退屈で冷めてしまうこと' } ] },
    { q: 'デートの進め方は？', a: [
      { t:'control', label:'自分が決めて引っ張る' },
      { t:'devote', label:'相手に合わせて尽くす' },
      { t:'thrill', label:'その場のノリで盛り上がる' },
      { t:'cautious', label:'慎重に少しずつ距離を縮める' } ] },
    { q: 'あなたが恋でこじれやすいのは？', a: [
      { t:'think', label:'考えすぎて動けなくなるから' },
      { t:'rescue', label:'救おうとして自分が疲れるから' },
      { t:'avoid', label:'好きなほど避けてしまうから' },
      { t:'control', label:'思い通りにしたくなるから' } ] }
  ];

  function articleCard(entry) {
    let title, desc, url;
    if (entry[0] === '#') {
      const a = RANK_ARTICLE[entry.slice(1)] || {};
      title = a.title; desc = a.desc; url = a.url || '#';
    } else {
      url = FEMALE_ARTICLE[entry] || '#';
      title = `${L(entry)}女性の恋愛記事`;
      desc = `${L(entry)}女性の恋愛傾向・本音・幸せになるヒントを解説。`;
    }
    const ext = url && url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card"><h4>${title}</h4><p>${desc}</p><a class="btn" href="${url || '#'}"${at}>noteで読む</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#kompleks-quiz');
    const btn = document.querySelector('#kompleks-go');
    const out = document.querySelector('#kompleks-result');
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
          <p class="result-lead">あなたの恋愛拗らせタイプは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-catch">「${r.catch}」</p>
          <p class="result-feature">${r.traits}</p>
        </div>
        <div class="result-block"><h3>🕳️ 陥りやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あなたにおすすめの記事</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="kompleks-retry">もう一度診断する</button>
        <p class="compat-note">※ 拗らせやすさは「欠点」ではなく、まっすぐ恋をする力の裏返しです。クセを知れば、恋はもっと楽になります。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#kompleks-retry');
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
