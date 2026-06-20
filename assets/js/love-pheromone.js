/* ============================================================
   恋愛フェロモン診断（love-pheromone.html）
   12問・4択。6スコア（healing/devil/swamp/sun/coolGap/hiddenPopular）を集計、
   最高点を結果に。各タイプ固定のフェロモン度%。上品で前向きに締める。
   記事/関連診断は ARTICLE_DATA を差し替え。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);
  function fem(code, url) { return { title: `${L(code)}女性の恋愛記事`, desc: `${L(code)}女性の恋愛傾向・本音・幸せのヒントを解説。`, url }; }

  const ARTICLE_DATA = {
    sat:      { title:'恋愛満足度診断', desc:'今の恋がどれくらい満たされているかチェック。', url:'love-satisfaction.html', cta:'診断してみる' },
    haraguro: { title:'恋愛腹黒度診断', desc:'恋愛でどれくらい本音を隠しているかチェック。', url:'love-haraguro.html', cta:'診断してみる' },
    numa:     { title:'恋愛沼診断', desc:'あなたが沼りやすい男性タイプを診断。', url:'love-numa.html', cta:'診断してみる' },
    kuro:     { title:'恋愛黒歴史診断', desc:'やりがちな恋のクセ・黒歴史を診断。', url:'love-kurorekishi.html', cta:'診断してみる' },
    honmei:   { title:'本命に冷たい診断', desc:'彼の冷たさが本命ゆえかをチェック。', url:'honmei-cold-check.html', cta:'診断してみる' },
    lovetype: { title:'MBTI恋愛タイプ診断', desc:'あなたの恋愛傾向と幸せのヒントが分かる。', url:'love-type.html', cta:'診断してみる' },
    isfj_f: fem('ISFJ', 'https://note.com/intj_analyst/n/n094e03a3fc66'),
    infp_f: fem('INFP', 'https://note.com/intj_analyst/n/n8cd00438b91b'),
    entp_f: fem('ENTP', 'https://note.com/intj_analyst/n/nf0c7ae903e18'),
    esfp_f: fem('ESFP', 'https://note.com/intj_analyst/n/n23f7ac68d75e'),
    intj_f: fem('INTJ', 'https://note.com/intj_analyst/n/n5e4d6eb0a254'),
    infj_f: fem('INFJ', 'https://note.com/intj_analyst/n/nf472dfb6c623'),
    enfp_f: fem('ENFP', 'https://note.com/intj_analyst/n/n20ca6f3e9315'),
    istp_f: fem('ISTP', 'https://note.com/intj_analyst/n/n25c05c7672f6'),
    isfp_f: fem('ISFP', 'https://note.com/intj_analyst/n/n56410f928faf'),
    istj_f: fem('ISTJ', 'https://note.com/intj_analyst/n/nf1b35b99aaff')
  };

  const RESULTS = {
    swamp: {
      name: '沼らせフェロモンタイプ', percent: 90,
      pheromone: '簡単には本音を見せないのに、ふとした瞬間に深さや弱さが見えるタイプ。相手が「もっと知りたい」と感じやすい魅力があります。',
      attracts: '謎を解きたくなる探究心の強い人や、深い関係を求める人。',
      happens: '読めなさが興味を引く一方で、誤解を生んだりすれ違ったりすることも。',
      hint: '余白は武器。でも時々は本音をひとつ見せると、相手は一気にあなたに惹き込まれます。',
      articles: ['numa', 'intj_f', 'infj_f']
    },
    devil: {
      name: '小悪魔フェロモンタイプ', percent: 85,
      pheromone: '近づいたと思ったら少し離れる、素直なようで読めない。相手の興味を自然に引き出しやすいタイプです。',
      attracts: '追いかけたい人や、刺激を楽しめる人。',
      happens: '駆け引きが魅力になる一方、本気度が伝わりにくくなることも。',
      hint: '引きの魅力はそのままに、たまに素直さを。ギャップが、相手の本気を引き出します。',
      articles: ['haraguro', 'entp_f', 'esfp_f']
    },
    coolGap: {
      name: 'クールギャップフェロモンタイプ', percent: 82,
      pheromone: '普段は落ち着いているのに、たまに見せる優しさや照れが刺さるタイプ。ギャップで相手の心に残りやすい魅力があります。',
      attracts: '落ち着いた人や、特別な一面を見たい人。',
      happens: '普段のクールさが「そっけない」と誤解されることも。',
      hint: 'ギャップは最大の武器。普段から小さな笑顔を一つ足すと、特別な瞬間がもっと際立ちます。',
      articles: ['intj_f', 'istp_f', 'honmei']
    },
    sun: {
      name: '太陽フェロモンタイプ', percent: 80,
      pheromone: '明るく、楽しく、自然と場を華やかにするタイプ。一緒にいるだけで元気をもらえるような魅力があります。',
      attracts: '癒されたい人や、一緒に笑いたい人。',
      happens: '明るさで好かれる一方、本音や弱さが伝わりにくいことも。',
      hint: '楽しさはそのままに、たまに「実はね」と弱さも見せて。ギャップで一気に距離が縮まります。',
      articles: ['enfp_f', 'esfp_f', 'kuro']
    },
    healing: {
      name: '癒し系フェロモンタイプ', percent: 75,
      pheromone: '一緒にいると安心する、話しやすい、つい相談したくなる雰囲気を持つタイプ。穏やかで優しい魅力があります。',
      attracts: '安心を求める人や、素を出したい人。',
      happens: '頼られやすい一方、「いい人」止まりで恋に発展しにくいことも。',
      hint: '聞き上手なあなたは、たまに自分の話も。甘えや本音を見せると、安心が「特別」に変わります。',
      articles: ['isfj_f', 'infp_f', 'sat']
    },
    hiddenPopular: {
      name: '隠れモテフェロモンタイプ', percent: 70,
      pheromone: '自分ではモテている自覚が少ないけれど、自然体の雰囲気や飾らなさで好かれやすいタイプ。気づかないところで見られている可能性があります。',
      attracts: '飾らない人が好きな人や、長く一緒にいたい人。',
      happens: '好意に気づかず、チャンスをスルーしてしまうことも。',
      hint: 'あなたの自然体は希少な魅力。少しだけ「好意のサイン」に敏感になると、隠れていた縁に気づけます。',
      articles: ['isfp_f', 'istj_f', 'lovetype']
    }
  };
  const PRIORITY = ['swamp', 'devil', 'coolGap', 'sun', 'healing', 'hiddenPopular'];

  const QUESTIONS = [
    { q: '初対面で言われやすいのは？', a: [
      { t:'healing', label:'話しやすい' },
      { t:'swamp', label:'ミステリアス' },
      { t:'sun', label:'明るくて楽しい' },
      { t:'coolGap', label:'落ち着いている' } ] },
    { q: '恋愛で相手からされやすいことは？', a: [
      { t:'healing', label:'相談される' },
      { t:'devil', label:'追いかけられる' },
      { t:'sun', label:'一緒にいると楽しいと言われる' },
      { t:'hiddenPopular', label:'気づいたら好かれている' } ] },
    { q: '好きな人への態度は？', a: [
      { t:'healing', label:'優しく寄り添う' },
      { t:'devil', label:'少し駆け引きしてしまう' },
      { t:'sun', label:'素直に楽しく接する' },
      { t:'swamp', label:'簡単には心を開かない' } ] },
    { q: 'あなたの魅力に近いのは？', a: [
      { t:'healing', label:'安心感' },
      { t:'devil', label:'色気' },
      { t:'sun', label:'明るさ' },
      { t:'coolGap', label:'ギャップ' } ] },
    { q: '恋愛で無意識にやりがちなことは？', a: [
      { t:'healing', label:'相手の話を聞きすぎる' },
      { t:'devil', label:'反応を見て距離を調整する' },
      { t:'sun', label:'その場を楽しくする' },
      { t:'coolGap', label:'たまに急に距離を取る' } ] },
    { q: '周りからの印象は？', a: [
      { t:'hiddenPopular', label:'自然体で飾らない' },
      { t:'swamp', label:'何を考えているか分からない' },
      { t:'sun', label:'ムードメーカー' },
      { t:'coolGap', label:'クールで近寄りがたい' } ] },
    { q: '相手が惹かれるポイントは？', a: [
      { t:'healing', label:'一緒にいると癒される' },
      { t:'devil', label:'もっと近づきたくなる' },
      { t:'swamp', label:'もっと知りたくなる' },
      { t:'hiddenPopular', label:'気づいたら好きになっている' } ] },
    { q: '弱さやギャップは？', a: [
      { t:'coolGap', label:'普段クールなのにたまに見せる' },
      { t:'swamp', label:'ふとした時ににじむ深さ' },
      { t:'hiddenPopular', label:'自然と出てしまう' },
      { t:'healing', label:'受け止めるのが得意' } ] },
    { q: 'LINEやSNSでは？', a: [
      { t:'devil', label:'程よく駆け引きする' },
      { t:'sun', label:'明るくテンポよく' },
      { t:'hiddenPopular', label:'飾らず自然体' },
      { t:'swamp', label:'多くは語らない' } ] },
    { q: '恋愛で得意なのは？', a: [
      { t:'hiddenPopular', label:'気づけば好かれていること' },
      { t:'devil', label:'興味を引くこと' },
      { t:'swamp', label:'余白で惹きつけること' },
      { t:'sun', label:'楽しませること' } ] },
    { q: '自分のモテ自覚は？', a: [
      { t:'hiddenPopular', label:'あまりない' },
      { t:'devil', label:'少しある' },
      { t:'sun', label:'楽しいとはよく言われる' },
      { t:'coolGap', label:'ギャップでよく言われる' } ] },
    { q: 'あなたの恋愛の雰囲気は？', a: [
      { t:'healing', label:'ほっとする' },
      { t:'devil', label:'ドキドキさせる' },
      { t:'swamp', label:'沼らせる' },
      { t:'coolGap', label:'ギャップで刺さる' } ] }
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
    const quiz = document.querySelector('#phero-quiz');
    const btn = document.querySelector('#phero-go');
    const out = document.querySelector('#phero-result');
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
          <p class="result-lead">あなたが放つ恋愛フェロモンは…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">フェロモン度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.pheromone}</p>
        </div>
        <div class="result-block"><h3>💞 惹きつけやすい相手</h3><p>${r.attracts}</p></div>
        <div class="result-block"><h3>💭 恋愛で起きやすいこと</h3><p>${r.happens}</p></div>
        <div class="result-block"><h3>🌸 魅力を活かすヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="phero-retry">もう一度診断する</button>
        <p class="compat-note">※ フェロモンに優劣はありません。どのタイプも、あなたにしか出せない魅力。活かし方を知れば、もっと自然に惹きつけられます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#phero-retry');
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
