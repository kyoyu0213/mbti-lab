/* ============================================================
   恋愛沼診断（love-numa.html）
   どんなMBTIタイプの男性に沼りやすいかを診断。12問・4択。
   結果は8つの「◯◯沼」。読者を責めない、可愛く少し危ういトーン。
   記事は 男性攻略(@) と 個別note(#) を混在管理。差し替え可。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const MALE_ARTICLE = {
    INTP:'https://note.com/intj_analyst/n/n90001451cc43',
    INTJ:'https://note.com/intj_analyst/n/nfbefa346cf88',
    ENTJ:'https://note.com/intj_analyst/n/ne34603d2ac07',
    ISTJ:'https://note.com/intj_analyst/n/n4ee8bed2f56f',
    INFJ:'https://note.com/intj_analyst/n/nb8c5e4c23c2c',
    INFP:'https://note.com/intj_analyst/n/n7e0435072a84',
    ENTP:'https://note.com/intj_analyst/n/nad4d3eb11812',
    ESTP:'https://note.com/intj_analyst/n/nfceac847c4f8'
  };
  const SPECIAL_ARTICLE = {
    intp_pattern: { title:'INTP男の恋愛パターン｜好きになる流れ・付き合い方・あるある本音', desc:'読めないINTP男の恋の進み方を徹底解説。', url:'https://note.com/intj_analyst/n/n99cb391192b9' },
    oresama:      { title:'オレ様男子に弱いMBTIランキング', desc:'強引な男性に惹かれてしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n114ca554cf13' }
  };

  /* 8つの沼タイプ（priority順＝同点時の優先順位） */
  const RESULTS = {
    intp: {
      name: 'INTP沼', catch: '「分からない」が、いちばんの沼。',
      attracted: '何を考えているか分からない、返信が気まぐれ、でも話すと深い知的な人。',
      reason: '読めない相手を理解したくなる探究心が強く、考えるほど気になってしまうから。',
      pitfall: '答えのない言動を考え続け、相手のペースに振り回されてしまうこと。',
      hint: '想像で埋めず、聞いてみるのが近道。謎めいた魅力より、ちゃんと向き合ってくれる人を。',
      articles: ['@INTP', '#intp_pattern']
    },
    intj: {
      name: 'INTJ沼', catch: '心を開いた一瞬に、特別を感じてしまう。',
      attracted: '冷静で距離があり、簡単には心を開かない人。',
      reason: 'そっけない相手がたまに見せる優しさに「特別扱い」を感じ、特別感に弱いから。',
      pitfall: '少しの優しさを大きく受け取り、つれない態度に一喜一憂してしまうこと。',
      hint: '「特別なときだけ」より「いつもの態度」を見て。安定して大切にしてくれる人を選んで。',
      articles: ['@INTJ']
    },
    entj: {
      name: 'ENTJ沼', catch: '頼もしさに、つい身を委ねたくなる。',
      attracted: '自信があり、ぐいぐいリードしてくれる強い人。',
      reason: '引っ張ってくれる頼もしさが心地よく、決断を委ねられる安心感があるから。',
      pitfall: '頼もしさと支配は紙一重。主導権を握られすぎて、自分を出せなくなること。',
      hint: 'リードされる心地よさはそのままに、「私はこう思う」も小さく伝えて。対等さが鍵。',
      articles: ['@ENTJ', '#oresama']
    },
    istj: {
      name: 'ISTJ沼', catch: '分かりにくい愛を、読み解きたくなる。',
      attracted: '真面目で誠実、でも感情表現が少ない人。',
      reason: '不器用な愛情表現を「本心はどうなの？」と読み解きたくなるから。',
      pitfall: '反応の薄さを深読みして、愛されているか不安になってしまうこと。',
      hint: '言葉が少ない人ほど、行動を見て。誠実さは、続く優しさに表れます。',
      articles: ['@ISTJ']
    },
    infj: {
      name: 'INFJ沼', catch: '心の奥で、つながりたくなる。',
      attracted: '優しくて深い、でもどこかミステリアスな人。',
      reason: '精神的なつながりを求める気持ちが強く、相手の内面に惹き込まれるから。',
      pitfall: '深いつながりを求めるほど、相手の世界に入り込みすぎて疲れてしまうこと。',
      hint: '心の距離は、ゆっくりで大丈夫。あなたの世界も大切にしながら近づいて。',
      articles: ['@INFJ']
    },
    infp: {
      name: 'INFP沼', catch: '守りたい気持ちが、止まらない。',
      attracted: '繊細で優しく、守ってあげたくなる人。',
      reason: '相手の世界観や弱さに惹かれ、「私が支えたい」と感じやすいから。',
      pitfall: '守る側に回りすぎて、自分の気持ちが置き去りになってしまうこと。',
      hint: '支えると抱え込むは別もの。あなたも甘えられる関係が、長く続く秘訣です。',
      articles: ['@INFP']
    },
    entp: {
      name: 'ENTP沼', catch: '退屈しない恋に、抜け出せない。',
      attracted: '会話が面白く、予測不能で刺激的な人。',
      reason: '頭の回転の速さとテンポに惹かれ、振り回されても退屈できないから。',
      pitfall: '刺激を「本気度」と勘違いし、つかみどころのなさに振り回されること。',
      hint: 'ドキドキの先に「安心」があるかを確かめて。面白さと誠実さ、両方ある人を。',
      articles: ['@ENTP']
    },
    estp: {
      name: 'ESTP沼', catch: 'ドキドキが、そのまま沼になる。',
      attracted: '行動力があり、刺激的で勢いのある人。',
      reason: 'スピード感とドキドキに心が動き、刺激的な恋にハマりやすいから。',
      pitfall: '勢いに流されて、落ち着いて見極める前に深入りしてしまうこと。',
      hint: 'ときめきはそのままに、少し立ち止まる時間も。穏やかでも飽きない恋は育ちます。',
      articles: ['@ESTP']
    }
  };
  const PRIORITY = ['intp', 'intj', 'entj', 'istj', 'infj', 'infp', 'entp', 'estp'];

  const QUESTIONS = [
    { q: '気づけば惹かれているのは？', a: [
      { t:'intp', label:'何を考えているか分からない人' },
      { t:'intj', label:'クールで簡単に心を開かない人' },
      { t:'entj', label:'自信があって引っ張ってくれる人' },
      { t:'istj', label:'真面目で誠実だけど距離がある人' } ] },
    { q: 'こんな男性にもドキッとする：', a: [
      { t:'infj', label:'優しくてどこかミステリアスな人' },
      { t:'infp', label:'繊細で守ってあげたくなる人' },
      { t:'entp', label:'会話が面白くて予測できない人' },
      { t:'estp', label:'行動力があって勢いのある人' } ] },
    { q: '沼りやすい瞬間は？', a: [
      { t:'intp', label:'返信が遅くて理由を考えてしまう時' },
      { t:'intj', label:'そっけない人が少し優しくしてくれた時' },
      { t:'infj', label:'弱さや孤独を見せられた時' },
      { t:'infp', label:'傷つきやすい一面を見たとき' } ] },
    { q: 'こんな瞬間も沼の入口：', a: [
      { t:'entj', label:'強引にリードされた時' },
      { t:'istj', label:'不器用な優しさに気づいた時' },
      { t:'entp', label:'振り回されても退屈しないと感じた時' },
      { t:'estp', label:'勢いでドキドキさせられた時' } ] },
    { q: '恋愛で一番気になるのは？', a: [
      { t:'intp', label:'相手の本音' },
      { t:'entj', label:'相手の本気度' },
      { t:'infj', label:'相手の過去や傷' },
      { t:'entp', label:'次に何を言い出すか' } ] },
    { q: 'もうひとつ、気になるのは？', a: [
      { t:'intj', label:'どこまで心を開いてくれるか' },
      { t:'istj', label:'言葉にしない愛情' },
      { t:'infp', label:'相手の繊細な気持ち' },
      { t:'estp', label:'一緒にいて楽しいか' } ] },
    { q: '追いかけたくなるのは？', a: [
      { t:'intp', label:'謎が多くて読めない人' },
      { t:'intj', label:'距離があって特別感をくれる人' },
      { t:'entj', label:'頼もしくて決断力のある人' },
      { t:'istj', label:'誠実だけど感情を見せない人' } ] },
    { q: 'こんな人も追いかけたくなる：', a: [
      { t:'infj', label:'精神的につながれる人' },
      { t:'infp', label:'世界観があって守りたくなる人' },
      { t:'entp', label:'頭の回転が速くて刺激的な人' },
      { t:'estp', label:'フットワークが軽くて刺激的な人' } ] },
    { q: 'こんな彼にときめく：', a: [
      { t:'intp', label:'知的で何を考えてるか分からない' },
      { t:'istj', label:'真面目で堅実' },
      { t:'infj', label:'静かで思慮深い' },
      { t:'estp', label:'勢いがあってドキドキする' } ] },
    { q: 'こんな彼にもときめく：', a: [
      { t:'intj', label:'クールで特別扱いしてくれる' },
      { t:'entj', label:'強くて引っ張ってくれる' },
      { t:'infp', label:'優しくて傷つきやすい' },
      { t:'entp', label:'一緒にいて退屈しない' } ] },
    { q: 'あなたが沼りやすいのは？', a: [
      { t:'intp', label:'謎めいた知的な人' },
      { t:'infp', label:'繊細で守りたくなる人' },
      { t:'entj', label:'強くて頼れる人' },
      { t:'estp', label:'刺激的で勢いのある人' } ] },
    { q: 'もうひとつ、沼りやすいのは？', a: [
      { t:'intj', label:'心を開かないクールな人' },
      { t:'infj', label:'深くてミステリアスな人' },
      { t:'istj', label:'誠実で不器用な人' },
      { t:'entp', label:'予測不能で面白い人' } ] }
  ];

  function articleCard(entry) {
    let title, desc, url;
    if (entry[0] === '#') {
      const a = SPECIAL_ARTICLE[entry.slice(1)] || {};
      title = a.title; desc = a.desc; url = a.url || '#';
    } else if (entry[0] === '@') {
      const code = entry.slice(1);
      url = MALE_ARTICLE[code] || '#';
      title = `${L(code)}男性の攻略記事`;
      desc = `${L(code)}タイプの彼の本音・脈ありサイン・落とし穴を解説。`;
    } else {
      url = '#'; title = entry; desc = '';
    }
    const ext = url && url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card"><h4>${title}</h4>${desc ? `<p>${desc}</p>` : ''}<a class="btn" href="${url || '#'}"${at}>noteで読む</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#numa-quiz');
    const btn = document.querySelector('#numa-go');
    const out = document.querySelector('#numa-result');
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
          <p class="result-lead">あなたがいちばん沼りやすいのは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-catch">「${r.catch}」</p>
        </div>
        <div class="result-block"><h3>💧 沼りやすい男性タイプ</h3><p>${r.attracted}</p></div>
        <div class="result-block"><h3>🌀 沼にハマる理由</h3><p>${r.reason}</p></div>
        <div class="result-block"><h3>🕳️ 気をつけたい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">沼から抜け出すヒント記事</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="numa-retry">もう一度診断する</button>
        <p class="compat-note">※ 沼りやすさは、相手を深く見ようとする“あなたの愛情の深さ”の裏返し。クセを知れば、その想いを幸せな恋に活かせます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#numa-retry');
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
