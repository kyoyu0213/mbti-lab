/* ============================================================
   元彼ストーカー度診断（ex-stalker-check.html）
   12問・4択。4スコア（cling/burst/future/selfContain）を集計、最高点を結果に。
   各タイプ固定のストーカー度%。「ストーカー」は診断名のみ。本文は執着/未練/
   忘れられなさ等で表現し、迷惑行為は肯定しない・読者を責めない・前向きに締める。
   ============================================================ */
(function () {
  const ARTICLE_DATA = {
    ex:       { title:'元彼引きずり度診断', desc:'元彼をどれくらい引きずっているかチェック。', url:'ex-boyfriend-check.html', cta:'診断してみる' },
    kuro:     { title:'恋愛黒歴史診断', desc:'やりがちな恋のクセ・黒歴史を診断。', url:'love-kurorekishi.html', cta:'診断してみる' },
    kompleks: { title:'恋愛拗らせタイプ診断', desc:'好きになるほど苦しくなる理由を診断。', url:'love-kompleks.html', cta:'診断してみる' },
    sns:      { title:'別れた後にSNSを見てしまうMBTIランキング', desc:'別れた相手をつい追ってしまうタイプを解説。', url:'https://note.com/intj_analyst/n/n8d28d4e40a7f' },
    koukai:   { title:'別れを後悔しやすいMBTIランキング', desc:'あとから未練が出やすいタイプを解説。', url:'https://note.com/intj_analyst/n/nfbd192ab74c4' }
  };

  /* priority順＝同点時の優先順位（%降順に対応） */
  const RESULTS = {
    cling: {
      name: '未練がましいストーカー予備軍', percent: 85,
      state: 'まだ元彼が心の中心に残っていて、SNSや過去のLINEを見返して気持ちが戻りやすい状態。それだけ本気で好きだった証拠です。',
      actions: 'SNSを巡回したり、連絡先を消せなかったり、復縁を願ったり。',
      pitfall: '過去を追い続けて、新しい一歩を踏み出しづらくなること。',
      hint: '相手のSNSやLINEから少し距離を。見ない時間を増やすほど、心は軽くなっていきます。連絡したくなったら、まず自分の気持ちを整えてから。',
      articles: ['ex', 'sns', 'koukai']
    },
    burst: {
      name: '想いすぎて豹変！？突発的ストーカー', percent: 75,
      state: '普段は落ち着いていても、近況や新しい恋人の気配を見た瞬間に、感情が大きく動きやすい状態です。',
      actions: '突然連絡したくなったり、確認したくなったりする衝動が出やすい。',
      pitfall: '衝動のまま動いて、あとで後悔する行動をとってしまうこと。',
      hint: '感情が爆発しそうな時は、すぐ動かず一晩おいて。落ち着いてからの判断を信じてあげましょう。その連絡が「自分のため」か、一度立ち止まって。',
      articles: ['kuro', 'kompleks']
    },
    selfContain: {
      name: '溜めこみ型 自己完結ストーカー', percent: 65,
      state: '相手に何かをするより、自分の中で思い出や未練を抱え込みやすい状態。送らないLINEや捨てられない写真を、そっと持っています。',
      actions: '夜中に過去のLINEを見返したり、検索したり、一人で考え込んだり。',
      pitfall: '一人で抱え込みすぎて、気づかぬうちに心が疲れてしまうこと。',
      hint: '抱えた気持ちは、信頼できる人に話したり書き出したりして外へ。ため込まないことが、回復の近道です。',
      articles: ['ex', 'kuro']
    },
    future: {
      name: '過去よりも未来！新しい恋に切り替え', percent: 20,
      state: '元彼への執着はかなり低め。過去より、新しい出会いや未来に意識を向けられている状態です。',
      actions: '元彼を思い出しても、引きずらず受け流せています。',
      pitfall: '寂しさから、急いで次の恋に進みすぎないように。',
      hint: '前を向けているのは素敵なこと。焦らず、あなたのペースで次の恋を楽しんで。',
      articles: ['kompleks', 'koukai']
    }
  };
  const PRIORITY = ['cling', 'burst', 'selfContain', 'future'];

  /* 各選択肢: t = スコアキー */
  const QUESTIONS = [
    { q: '元彼のSNSを見る頻度は？', a: [
      { t:'cling', label:'ほぼ毎日見てしまう' },
      { t:'selfContain', label:'こっそり週に何度か見てしまう' },
      { t:'burst', label:'見ると気持ちが一気に乱れる' },
      { t:'future', label:'ほとんど見ない' } ] },
    { q: '元彼の新しい投稿を見つけたら？', a: [
      { t:'cling', label:'誰といたのか深読みして何度も見る' },
      { t:'burst', label:'新しい恋人の気配に感情が爆発しそう' },
      { t:'selfContain', label:'何も言えず一人でモヤモヤする' },
      { t:'future', label:'ふーんと思う程度' } ] },
    { q: '元彼の連絡先は？', a: [
      { t:'cling', label:'まだ消せない（いつか連絡したい）' },
      { t:'selfContain', label:'消したいけど迷って残している' },
      { t:'burst', label:'衝動的に連絡しそうで少し怖い' },
      { t:'future', label:'もう消している／必要なら消せる' } ] },
    { q: '思い出の品は？', a: [
      { t:'selfContain', label:'捨てられずに残している' },
      { t:'cling', label:'大切に取って時々見返す' },
      { t:'burst', label:'見ると感情が溢れて封印した' },
      { t:'future', label:'ほとんど処分した' } ] },
    { q: '夜中にやってしまうことは？', a: [
      { t:'selfContain', label:'過去のLINEを一人で見返す' },
      { t:'cling', label:'元彼のSNSを巡回する' },
      { t:'burst', label:'衝動的に連絡したくなる' },
      { t:'future', label:'ほとんど思い出さない' } ] },
    { q: '元彼に新しい恋人ができたら？', a: [
      { t:'burst', label:'平静でいられず感情が爆発しそう' },
      { t:'cling', label:'ショックで連絡したくなる' },
      { t:'selfContain', label:'表に出さず一人で抱え込む' },
      { t:'future', label:'幸せならいいと思える' } ] },
    { q: 'ふと元彼を思い出すのは？', a: [
      { t:'cling', label:'一日に何度も' },
      { t:'selfContain', label:'夜にひとりで' },
      { t:'burst', label:'きっかけがあると一気に' },
      { t:'future', label:'ほとんどない' } ] },
    { q: '復縁については？', a: [
      { t:'cling', label:'今でも願っている' },
      { t:'burst', label:'ふとした瞬間に強く思う' },
      { t:'selfContain', label:'言えないまま心に秘めている' },
      { t:'future', label:'もう考えていない' } ] },
    { q: '元彼に伝えたい言葉は？', a: [
      { t:'selfContain', label:'送れないLINEとして下書きにある' },
      { t:'cling', label:'機会があれば伝えたい' },
      { t:'burst', label:'衝動で送ってしまいそう' },
      { t:'future', label:'もう特にない' } ] },
    { q: '共通の友人から近況を聞くと？', a: [
      { t:'cling', label:'もっと知りたくて聞いてしまう' },
      { t:'burst', label:'動揺して感情的になる' },
      { t:'selfContain', label:'平気なふりで内心ざわつく' },
      { t:'future', label:'軽く受け流せる' } ] },
    { q: '今のあなたは？', a: [
      { t:'cling', label:'まだ元彼が心の中心' },
      { t:'burst', label:'きっかけ次第で気持ちが揺れる' },
      { t:'selfContain', label:'平気そうで実は引きずっている' },
      { t:'future', label:'新しい出会いに前向き' } ] },
    { q: '「もう終わったこと」と？', a: [
      { t:'cling', label:'思おうとしても無理' },
      { t:'selfContain', label:'頭では分かるが心は別' },
      { t:'burst', label:'普段は平気でも時々あふれる' },
      { t:'future', label:'しっかり思えている' } ] }
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
    const quiz = document.querySelector('#stalker-quiz');
    const btn = document.querySelector('#stalker-go');
    const out = document.querySelector('#stalker-result');
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
          <p class="result-lead">あなたの元彼への執着は…</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">元彼ストーカー度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.state}</p>
        </div>
        <div class="result-block"><h3>📓 やりがちな行動</h3><p>${r.actions}</p></div>
        <div class="result-block"><h3>🕳️ 気をつけたい落とし穴</h3><p>${r.pitfall}</p></div>
        <div class="result-block"><h3>🌸 前に進むためのヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あわせて読みたい・診断</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="stalker-retry">もう一度診断する</button>
        <p class="compat-note">※ 診断名はキャッチコピーです。大切なのは、相手に迷惑をかけないこと。執着は「本気で愛せた証」。少しずつ、あなたの心を軽くしていきましょう。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#stalker-retry');
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
