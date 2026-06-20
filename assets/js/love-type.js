/* ============================================================
   MBTI恋愛タイプ診断（love-type.html）
   10問・4択。各回答に恋愛タイプスコアを加算し、最高点を結果に。
   おすすめ記事URLは FEMALE_ARTICLE を差し替えるだけ。
   ============================================================ */
(function () {
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

  /* 8つの恋愛タイプ。priority順＝同点時の優先順位。 */
  const RESULTS = {
    think: {
      name: '考えすぎ恋愛タイプ',
      catch: '答え合わせより、いまの気持ちを大切に。',
      traits: '相手の言葉やLINEを深読みして、ひとりで答えを探し続けるタイプ。観察力と思いやりがある一方、頭の中だけで完結しがちです。',
      pitfall: '考えすぎて動けなくなり、相手の小さな言動に一喜一憂してしまうこと。',
      hint: '「考える」前に「聞いてみる」。気になったことはひとことそのまま伝えると、驚くほど心が軽くなります。',
      articles: ['INTP']
    },
    rescue: {
      name: '救済恋愛タイプ',
      catch: '相手を救う前に、自分も大切に。',
      traits: '問題を抱えた人や孤独な人に惹かれ、「自分なら理解できる」と感じやすい、やさしく一途なタイプです。',
      pitfall: '相手の課題まで背負い込みすぎて、自分が疲れてしまうこと。',
      hint: '支えることと抱え込むことは別もの。あなたが笑顔でいられる距離を、まず大切にしましょう。',
      articles: ['INFP', 'INFJ']
    },
    devote: {
      name: '尽くしすぎ恋愛タイプ',
      catch: 'あなたの幸せも、ちゃんと数に入れて。',
      traits: '好きな人を最優先して、自分の気持ちを後回しにしてでも尽くせる、愛情深いタイプです。',
      pitfall: '尽くすほど我慢がたまり、「分かってもらえない」と感じやすくなること。',
      hint: '「してあげたい」と同じくらい「してほしい」も伝えてOK。お願い上手は、愛され上手です。',
      articles: ['ISFJ', 'ESFJ', 'ENFJ']
    },
    thrill: {
      name: '刺激追求恋愛タイプ',
      catch: 'ドキドキも安心も、両方あっていい。',
      traits: '安定よりときめきを大事にして、刺激的で退屈しない恋に惹かれる、情熱的なタイプです。',
      pitfall: '刺激が落ち着くと冷めたと感じ、本当は心地よい関係を手放してしまうこと。',
      hint: 'ときめきは「新しさ」だけでなく「深まり」からも生まれます。同じ人の新しい一面を探してみて。',
      articles: ['ESTP', 'ENTP', 'ESFP']
    },
    cautious: {
      name: '慎重すぎ恋愛タイプ',
      catch: 'こわいのは、本気な証拠。',
      traits: '傷つくことを避けたくて慎重に進める、誠実で思慮深いタイプです。',
      pitfall: '考えすぎて動けず、気づけば恋のチャンスを逃してしまうこと。',
      hint: '小さな一歩でOK。「完璧なタイミング」を待つより、軽い一言から始めてみましょう。',
      articles: ['ISTJ']
    },
    freedom: {
      name: '自由重視恋愛タイプ',
      catch: '自分らしくいられる恋が、長続きする。',
      traits: '好きでも自分の時間や距離が必要で、束縛されると苦しくなりやすい、自立したタイプです。',
      pitfall: '距離を取りすぎて、相手に「興味がないのかな」と誤解されてしまうこと。',
      hint: '自由が大事なことを、最初に正直に共有を。安心できる相手ほど、あなたの距離を尊重してくれます。',
      articles: ['ISTP']
    },
    control: {
      name: 'コントロール恋愛タイプ',
      catch: '導く力は、信じる力に変えられる。',
      traits: '恋愛を計画的に進めたくて、相手のためを思って動ける、頼れるリーダータイプです。',
      pitfall: '相手を「変えたく」なり、思い通りにならないとイライラしてしまうこと。',
      hint: '相手は「直す対象」ではなくチーム。任せて待つことが、信頼と心の余裕を生みます。',
      articles: ['ENTJ', 'ESTJ']
    },
    suppress: {
      name: '本音を飲み込む恋愛タイプ',
      catch: '本音は、嫌われる理由にはならない。',
      traits: '嫌われたくなくて我慢し、相手に合わせられる、やさしく協調的なタイプです。',
      pitfall: '本音を言えずにため込み、ある日いきなり限界がきてしまうこと。',
      hint: '小さな「私はこうしたい」から練習を。本音を見せられる相手こそ、長く一緒にいられます。',
      articles: ['ISFP']
    }
  };
  const PRIORITY = ['think', 'rescue', 'devote', 'thrill', 'cautious', 'freedom', 'control', 'suppress'];

  const QUESTIONS = [
    { q: '好きな人ができたとき、あなたは？', a: [
      { t: 'thrill', label: 'すぐ行動する' },
      { t: 'cautious', label: 'まず相手をよく観察する' },
      { t: 'think', label: '頭の中で考え続ける' },
      { t: 'suppress', label: '相手に合わせて様子を見る' } ] },
    { q: '恋愛で一番つらいのは？', a: [
      { t: 'think', label: '相手の本音が読めないこと' },
      { t: 'freedom', label: '自由を奪われること' },
      { t: 'devote', label: '必要とされないこと' },
      { t: 'rescue', label: '相手の力になれないこと' } ] },
    { q: '好きになりやすい相手は？', a: [
      { t: 'rescue', label: '少し危うくて放っておけない人' },
      { t: 'think', label: '知的で会話が面白い人' },
      { t: 'cautious', label: '一緒にいて安心できる人' },
      { t: 'thrill', label: '刺激的で退屈しない人' } ] },
    { q: '恋愛でやりがちなのは？', a: [
      { t: 'devote', label: '尽くしすぎる' },
      { t: 'think', label: '考えすぎる' },
      { t: 'freedom', label: '距離を取りすぎる' },
      { t: 'thrill', label: '刺激を求めすぎる' } ] },
    { q: 'デート中、相手が不機嫌そう。あなたは？', a: [
      { t: 'think', label: '理由をあれこれ考え込む' },
      { t: 'devote', label: 'なんとか機嫌を直そうと頑張る' },
      { t: 'suppress', label: '気になるけど言い出せない' },
      { t: 'freedom', label: '自分のペースは崩さない' } ] },
    { q: '付き合うなら、どんな関係が理想？', a: [
      { t: 'control', label: '自分がリードして引っ張る関係' },
      { t: 'thrill', label: 'いつまでもドキドキできる関係' },
      { t: 'cautious', label: '安心して落ち着ける関係' },
      { t: 'rescue', label: '互いに支え合える関係' } ] },
    { q: 'ケンカしたとき、あなたは？', a: [
      { t: 'suppress', label: '言いたいことを我慢してしまう' },
      { t: 'control', label: '相手を説得して正したくなる' },
      { t: 'freedom', label: 'ひとりになりたくなる' },
      { t: 'cautious', label: '嫌われないか不安になる' } ] },
    { q: '好きな人からの返信が遅いと？', a: [
      { t: 'think', label: '意味を深読みしてしまう' },
      { t: 'cautious', label: '不安で何も手につかない' },
      { t: 'freedom', label: '気にせず自分の時間を過ごす' },
      { t: 'devote', label: '自分から何度も連絡したくなる' } ] },
    { q: '恋人にするなら？', a: [
      { t: 'thrill', label: '一緒にいてワクワクする人' },
      { t: 'devote', label: '自分を必要としてくれる人' },
      { t: 'rescue', label: 'ほうっておけない一面がある人' },
      { t: 'control', label: '価値観を合わせて進められる人' } ] },
    { q: '恋愛で一番大事にしたいのは？', a: [
      { t: 'suppress', label: '波風を立てず穏やかでいること' },
      { t: 'control', label: '二人の関係をしっかり前に進めること' },
      { t: 'cautious', label: '慎重に、確実に進めること' },
      { t: 'rescue', label: '相手を理解して支えること' } ] }
  ];

  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c); // INTP（論理学者）

  function articleCard(code) {
    const url = FEMALE_ARTICLE[code] || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card">
      <h4>${L(code)}女性の恋愛タイプ</h4>
      <p>${L(code)}女性の恋愛傾向・本音・幸せになるヒントをくわしく解説。</p>
      <a class="btn" href="${url}"${at}>noteで読む</a>
    </article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#lovetype-quiz');
    const btn = document.querySelector('#lovetype-go');
    const out = document.querySelector('#lovetype-result');
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

    function compute() {
      const scores = {};
      PRIORITY.forEach(k => scores[k] = 0);
      let answered = 0;
      QUESTIONS.forEach((_, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) { scores[sel.value]++; answered++; }
      });
      return { scores, answered };
    }

    function showResult() {
      const { scores, answered } = compute();
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
          <p class="result-lead">あなたの恋愛タイプは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-catch">「${r.catch}」</p>
          <p class="result-feature">${r.traits}</p>
        </div>
        <div class="result-block"><h3>🕳️ 陥りやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あなたにおすすめの記事</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="lovetype-retry">もう一度診断する</button>
        <p class="compat-note">※ 診断結果はあくまで恋愛の傾向です。どのタイプにも素敵な魅力があり、向き合い方しだいで恋はもっとうまくいきます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#lovetype-retry');
      if (retry) retry.addEventListener('click', () => {
        quiz.querySelectorAll('input[type="radio"]').forEach(r => { r.checked = false; });
        out.hidden = true;
        out.innerHTML = '';
        document.querySelector('.page-title').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    btn.addEventListener('click', showResult);
  });
})();
