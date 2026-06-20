/* ============================================================
   ダメ男ホイホイ診断（dameotoko-diagnosis.html）
   どんな「問題のある相手・苦しくなる相手」に惹かれやすいかを診断。
   12問・4択。8タイプに加点し最高点を結果に。読者を責めない前向きトーン。
   記事は 女性タイプ別 / 男性攻略(@) / ランキング(#) を混在管理。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const FEMALE_ARTICLE = {
    INTJ:'https://note.com/intj_analyst/n/n5e4d6eb0a254', INTP:'https://note.com/intj_analyst/n/n5eef416fdf6f',
    INFJ:'https://note.com/intj_analyst/n/nf472dfb6c623', INFP:'https://note.com/intj_analyst/n/n8cd00438b91b',
    ENFP:'https://note.com/intj_analyst/n/n20ca6f3e9315', ENFJ:'https://note.com/intj_analyst/n/ndd7de83a3e20',
    ENTP:'https://note.com/intj_analyst/n/nf0c7ae903e18', ENTJ:'https://note.com/intj_analyst/n/n3cf721ee03ea',
    ISFJ:'https://note.com/intj_analyst/n/n094e03a3fc66', ISTJ:'https://note.com/intj_analyst/n/nf1b35b99aaff',
    ISFP:'https://note.com/intj_analyst/n/n56410f928faf', ISTP:'https://note.com/intj_analyst/n/n25c05c7672f6',
    ESFJ:'https://note.com/intj_analyst/n/n7cdf00ad9cdd', ESTJ:'https://note.com/intj_analyst/n/ncac5194b7898',
    ESFP:'https://note.com/intj_analyst/n/n23f7ac68d75e', ESTP:'https://note.com/intj_analyst/n/n9fef45b19f7d'
  };
  const MALE_ARTICLE = {
    INTJ:'https://note.com/intj_analyst/n/nfbefa346cf88', INTP:'https://note.com/intj_analyst/n/n90001451cc43',
    ENTJ:'https://note.com/intj_analyst/n/ne34603d2ac07'
  };
  const RANK_ARTICLE = {
    oresama: { title:'オレ様男子に弱いMBTIランキング', desc:'なぜか強引な男性に惹かれてしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n114ca554cf13' }
  };

  /* 8タイプ（priority順＝同点時の優先順位） */
  const RESULTS = {
    rescue: {
      name: '救済型ホイホイ',
      catch: 'その優しさは、まず自分にも向けて。',
      attracted: '孤独そうな人、傷ついている人、問題を抱えた人。',
      reason: '相手の痛みに寄り添える共感力が高く、「私だけは理解できる」と感じやすいから。',
      pitfall: '相手の問題まで背負い込み、気づけば自分ばかり苦しくなってしまうこと。',
      hint: 'あなたの優しさは才能。まず自分を満たしてから、無理なく支えられる距離を選んで。',
      articles: ['INFP', 'INFJ']
    },
    caretaker: {
      name: '世話焼き型ホイホイ',
      catch: '頼られる幸せと、対等な愛は別もの。',
      attracted: '頼りない人、生活力が低い人、放っておけない人。',
      reason: '面倒を見ることで愛を感じられる、世話上手で責任感の強さがあるから。',
      pitfall: '母親役・保護者役になりすぎて、恋人ではなく“お世話係”になってしまうこと。',
      hint: 'たまには甘えてOK。あなたが頼る側に回ると、関係はもっと対等で楽になります。',
      articles: ['ISFJ', 'ESFJ', 'ESTJ']
    },
    bossy: {
      name: 'オレ様型ホイホイ',
      catch: '頼もしさと支配は、紙一重。',
      attracted: '強引で自信満々な人、ぐいぐいリードしてくれる人。',
      reason: '引っ張ってくれる頼もしさに安心でき、決断を委ねられる心地よさがあるから。',
      pitfall: '最初は頼もしくても、主導権を握られすぎて自分の意見を言えなくなること。',
      hint: 'リードされる心地よさはそのままに、「私はこう思う」を小さく伝える練習を。対等さが長続きの鍵。',
      articles: ['#oresama', '@ENTJ']
    },
    thrill: {
      name: '刺激型ホイホイ',
      catch: 'ドキドキ＝愛、とは限らない。',
      attracted: '危うい人、自由人、予測不能な人。',
      reason: '安定より刺激に心が動く、好奇心と情熱の強さがあるから。',
      pitfall: '振り回される不安を「恋のドキドキ」と勘違いし、消耗してしまうこと。',
      hint: '安心できる相手にもときめきは育ちます。「穏やかなのに飽きない」関係を一度試してみて。',
      articles: ['ESTP', 'ENTP', 'ESFP', 'ENFP']
    },
    mystery: {
      name: '謎多き男ホイホイ',
      catch: '分からないから好き、は沼の入口。',
      attracted: '何を考えているか分からない人、返信が遅い人、感情を見せない人。',
      reason: '読めない相手を理解したくなる探究心が強く、深く考察できる力があるから。',
      pitfall: '「分からない」が「気になる」に変わり、答えを探して沼りやすいこと。',
      hint: '想像で埋めず、直接聞いてみて。謎より、ちゃんと向き合ってくれる人を選んで。',
      articles: ['@INTP', '@INTJ', 'INTP']
    },
    needed: {
      name: '依存され型ホイホイ',
      catch: '必要とされること＝愛されること、ではない。',
      attracted: '「君がいないとダメ」と言ってくる人。',
      reason: '必要とされると強く心が動く、尽くす力と責任感があるから。',
      pitfall: '必要とされることと愛されることを混同し、離れられなくなること。',
      hint: 'あなたは「役に立つから」ではなく、そのままで愛される価値があります。対等に大切にし合える人を。',
      articles: ['ESFJ', 'ENFJ', 'ISFJ']
    },
    fixer: {
      name: '改造したい型ホイホイ',
      catch: '恋は、改善プロジェクトじゃない。',
      attracted: '未熟な相手、問題のある相手、「伸びしろ」を感じる人。',
      reason: '相手の可能性を見抜く力があり、「私が変えられる」と前向きに信じられるから。',
      pitfall: '恋愛を“育成”にしてしまい、変わらない相手に疲れてしまうこと。',
      hint: '人は「変えるもの」ではなく「選ぶもの」。今のままで一緒にいたい相手を選ぶと、ぐっと楽に。',
      articles: ['INTJ', 'ENTJ', 'ESTJ']
    },
    kindness: {
      name: '優しさ勘違い型ホイホイ',
      catch: '一瞬の優しさより、いつもの態度を見て。',
      attracted: 'たまに優しい人、ふと弱さを見せる人。',
      reason: '小さな優しさに希望を見出せる、相手の良いところを信じる力があるから。',
      pitfall: 'たまの優しさを「本当の姿」と思い込み、つらい時間を耐えてしまうこと。',
      hint: '「特別なときの優しさ」より「いつもの扱い」が本当の姿。普段から大切にしてくれる人を選んで。',
      articles: ['INFP', 'ISFP', 'INFJ']
    }
  };
  const PRIORITY = ['rescue', 'caretaker', 'bossy', 'thrill', 'mystery', 'needed', 'fixer', 'kindness'];

  const QUESTIONS = [
    { q: '気になる相手が問題を抱えていたら？', a: [
      { t:'rescue', label:'私なら理解してあげられると思う' },
      { t:'caretaker', label:'放っておけず支えたくなる' },
      { t:'thrill', label:'危うさに少し惹かれてしまう' },
      { t:'fixer', label:'直せる部分を指摘したくなる' } ] },
    { q: '周りに「やめた方がいい」と言われたら？', a: [
      { t:'rescue', label:'みんな彼の本当の良さを知らないと思う' },
      { t:'needed', label:'でも私がいないとダメかもと思う' },
      { t:'thrill', label:'反対されるほど燃える' },
      { t:'fixer', label:'ちゃんと見極めているから大丈夫と思う' } ] },
    { q: '苦しい恋を続けてしまう理由は？', a: [
      { t:'kindness', label:'彼の可能性を信じているから' },
      { t:'needed', label:'必要とされると離れられないから' },
      { t:'thrill', label:'刺激があって忘れられないから' },
      { t:'fixer', label:'自分なら変えられると思うから' } ] },
    { q: 'ついドキッとする男性は？', a: [
      { t:'bossy', label:'強引でリードしてくれる人' },
      { t:'mystery', label:'何を考えているか分からない人' },
      { t:'thrill', label:'自由で予測できない人' },
      { t:'caretaker', label:'なんだか放っておけない人' } ] },
    { q: 'こう言われると弱いのは？', a: [
      { t:'needed', label:'「君がいないとダメだ」' },
      { t:'bossy', label:'「俺についてこい」' },
      { t:'kindness', label:'「君にだけは本音を話せる」' },
      { t:'rescue', label:'「誰も俺を分かってくれない」' } ] },
    { q: '恋愛でやりがちなのは？', a: [
      { t:'caretaker', label:'気づけば世話を焼いている' },
      { t:'fixer', label:'相手を直そう・育てようとする' },
      { t:'needed', label:'必要とされたくて尽くす' },
      { t:'mystery', label:'分からない相手を考え続ける' } ] },
    { q: '惹かれる「ギャップ」は？', a: [
      { t:'kindness', label:'普段は冷たいのにたまに優しい' },
      { t:'bossy', label:'強そうなのに時々弱さを見せる' },
      { t:'mystery', label:'クールなのにたまに甘える' },
      { t:'thrill', label:'ワルそうなのに憎めない' } ] },
    { q: '連絡が来ないとき、あなたは？', a: [
      { t:'mystery', label:'理由を考え込んで沼る' },
      { t:'needed', label:'必要とされてない気がして不安になる' },
      { t:'rescue', label:'何かあったのかと心配になる' },
      { t:'caretaker', label:'こちらから世話を焼きに行く' } ] },
    { q: 'こんな恋に疲れやすい：', a: [
      { t:'rescue', label:'相手の問題を背負う恋' },
      { t:'caretaker', label:'ずっと支える側の恋' },
      { t:'bossy', label:'振り回される恋' },
      { t:'fixer', label:'相手を変えようとする恋' } ] },
    { q: '第一印象で惹かれるのは？', a: [
      { t:'bossy', label:'自信満々で頼もしい' },
      { t:'thrill', label:'ミステリアスで危うい' },
      { t:'kindness', label:'ふとした優しさ' },
      { t:'mystery', label:'何を考えてるか読めない' } ] },
    { q: '「本当はいい人」と思う瞬間は？', a: [
      { t:'kindness', label:'たまに見せるやさしさ' },
      { t:'rescue', label:'傷ついた過去を知ったとき' },
      { t:'fixer', label:'変われそうな兆しを見たとき' },
      { t:'caretaker', label:'自分を頼ってくれたとき' } ] },
    { q: 'あなたが恋でハマりやすいのは？', a: [
      { t:'rescue', label:'救いたくなる相手' },
      { t:'needed', label:'必要としてくれる相手' },
      { t:'thrill', label:'刺激をくれる相手' },
      { t:'mystery', label:'謎が多い相手' } ] }
  ];

  function articleCard(entry) {
    let title, desc, url;
    if (entry[0] === '#') {
      const a = RANK_ARTICLE[entry.slice(1)] || {};
      title = a.title; desc = a.desc; url = a.url || '#';
    } else if (entry[0] === '@') {
      const code = entry.slice(1);
      url = MALE_ARTICLE[code] || '#';
      title = `${L(code)}男性の攻略記事`;
      desc = `${L(code)}タイプの彼の本音・落とし穴・付き合い方を解説。`;
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
    const quiz = document.querySelector('#dame-quiz');
    const btn = document.querySelector('#dame-go');
    const out = document.querySelector('#dame-result');
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
          <p class="result-lead">あなたのハマりやすいのは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-catch">「${r.catch}」</p>
        </div>
        <div class="result-block"><h3>💘 あなたが惹かれやすい相手</h3><p>${r.attracted}</p></div>
        <div class="result-block"><h3>🧲 ハマりやすい理由</h3><p>${r.reason}</p></div>
        <div class="result-block"><h3>🕳️ 起きやすい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 幸せになるためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あなたにおすすめの記事</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="dame-retry">もう一度診断する</button>
        <p class="compat-note">※ 惹かれやすさは、相手の良さや可能性を見つける“あなたの長所”の裏返し。クセを知れば、その優しさを幸せな恋に活かせます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#dame-retry');
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
