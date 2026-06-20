/* ============================================================
   脈なし確定？好き避け？見極め診断（sukizake-check.html）
   3つの内部スコア（好き避け S / 脈なし M / 慎重 C）を集計し、
   5タイプ＋「好き避け度%」を判定。断定せず、前向きに締める。
   記事は ARTICLE_DATA を差し替えるだけ。
   ============================================================ */
(function () {
  const L = (typeof mbtiLabel === 'function') ? mbtiLabel : (c => c);

  const ARTICLE_DATA = {
    sukiyoke: { title:'好き避けしやすいMBTIランキング', desc:'好きな人ほど避けてしまう16タイプを解説。', url:'https://note.com/intj_analyst/n/nad3060876637' },
    honmei:   { title:'本命にだけ冷たくなるMBTIランキング', desc:'好きな人にだけ素っ気なくなる心理をタイプ別に。', url:'https://note.com/intj_analyst/n/n6543411a2647' },
    kidoku:   { title:'既読無視しがちなMBTIランキング', desc:'既読無視が多い傾向のタイプを紹介。', url:'https://note.com/intj_analyst/n/n9fa05d63f314' },
    midoku:   { title:'未読無視しがちなMBTIランキング', desc:'すぐ返信しないタイプの特徴を解説。', url:'https://note.com/intj_analyst/n/n983863e05735' },
    intp:     { title:`${L('INTP')}男性の攻略記事`, desc:'読めないINTP男の本音と脈ありサイン。', url:'https://note.com/intj_analyst/n/n90001451cc43' },
    intj:     { title:`${L('INTJ')}男性の攻略記事`, desc:'クールなINTJ男の本音と落とし方。', url:'https://note.com/intj_analyst/n/nfbefa346cf88' },
    istj:     { title:`${L('ISTJ')}男性の攻略記事`, desc:'誠実なISTJ男の分かりにくい愛情表現。', url:'https://note.com/intj_analyst/n/n4ee8bed2f56f' }
  };

  const RESULTS = {
    suki_high: {
      name: '好き避け可能性高め', percent: 80,
      overview: 'そっけない態度の裏に、意識しすぎ・緊張・照れが隠れている可能性が高めです。完全に離れるわけではなく、むしろ不自然な距離感が出ています。',
      sukiPoints: 'あなたにだけ態度が違う／二人きりだと優しい／目を逸らしてもまた見てくる、など「避けるのに気にしている」サインが多めです。',
      myakuPoints: 'ただし好き避けは確証を持ちにくいもの。たまたまそっけない日もあるので、決めつけは禁物です。',
      action: 'あなたから軽いきっかけ（短い雑談・小さなお礼）を作ると、相手も安心して態度を出しやすくなります。焦らず、笑顔で接点を増やしてみて。',
      articles: ['sukiyoke', 'honmei', 'intp']
    },
    suki_cautious: {
      name: '好き避けか慎重タイプかも', percent: 60,
      overview: '好意の可能性はありますが、相手が慎重・奥手・警戒心強めで、距離を縮めるのに時間がかかるタイプかもしれません。',
      sukiPoints: 'ゆっくりだけど関わりは続いている／聞けば丁寧に返ってくる、など「嫌ってはいない」サインがあります。',
      myakuPoints: '一方で、自分から積極的に来る動きは少なめ。まだ心を開ききっていない段階の可能性もあります。',
      action: '急がず、安心できる関係づくりを。プレッシャーを与えず少しずつ会話を重ねると、相手のペースで近づけます。',
      articles: ['sukiyoke', 'istj', 'intj']
    },
    hold: {
      name: '判断保留', percent: 50,
      overview: '今は好き避けとも脈なしとも言い切れない状態です。判断材料がまだ足りません。',
      sukiPoints: '好き避けっぽい瞬間（たまの優しさ・視線）も見られます。',
      myakuPoints: '一方でそっけない場面もあり、どちらとも取れる状態です。',
      action: '結論を急がず、もう少し相手の行動を観察してみましょう。あなたから小さくアプローチして、反応の変化を見るのも手です。',
      articles: ['sukiyoke', 'kidoku', 'intp']
    },
    numa_lean: {
      name: '脈なし寄り', percent: 30,
      overview: 'そっけなさに、好意よりも関心の薄さが出ている可能性がやや高めです。関係を進めようとする動きが弱い状態です。',
      sukiPoints: 'ただし、奥手で表に出さないだけの可能性もゼロではありません。',
      myakuPoints: '自分から連絡が少ない／会話を広げない、など関心の薄さを思わせるサインが目立ちます。',
      action: '追いかけすぎず、いったん自分の時間を充実させて。相手の出方を見つつ、無理のない距離で接するのがおすすめです。',
      articles: ['kidoku', 'midoku', 'honmei']
    },
    numa_high: {
      name: '脈なし濃厚', percent: 10,
      overview: '現時点では、好意の可能性は低めです。連絡・会話・態度のどれにも積極性が少ない状態です。',
      sukiPoints: '今は好き避けのサインは少なめ。ただ、状況が変われば関係が動くこともあります。',
      myakuPoints: '自分からの行動がほとんどなく、距離を縮める意思が見えにくい状態です。',
      action: '無理に距離を詰めるより、自分を大切にする時間を。あなたの魅力が伝わる場面が増えれば、関係が変わる可能性もあります。落ち込みすぎないで。',
      articles: ['kidoku', 'midoku', 'honmei']
    }
  };

  /* 各選択肢が S(好き避け) / M(脈なし) / C(慎重) に加点 */
  const QUESTIONS = [
    { q: '彼の態度は？', a: [
      { label:'みんなには普通なのに、あなたにだけそっけない', s:2 },
      { label:'誰に対してもそっけない', c:1 },
      { label:'あなたにも他の人にも優しい（特別扱いはない）', m:1 },
      { label:'そもそも関心がなさそう', m:2 } ] },
    { q: '二人きりの時の態度は？', a: [
      { label:'人前より、二人きりの方が優しい', s:2 },
      { label:'人前と同じく冷たい', m:1 },
      { label:'緊張しているように見える', s:1, c:1 },
      { label:'二人きりになる機会を避ける', m:1 } ] },
    { q: 'LINEの特徴は？', a: [
      { label:'返信は遅いけど、内容は続く', s:1, c:1 },
      { label:'返信が短く、質問も返ってこない', m:2 },
      { label:'たまに急に優しくなる', s:2 },
      { label:'既読無視・未読無視が多い', m:1 } ] },
    { q: '目が合った時は？', a: [
      { label:'すぐ逸らすけど、また見てくる', s:2 },
      { label:'逸らした後も特に反応がない', m:1 },
      { label:'笑ってくれる', s:1 },
      { label:'そもそも目が合わない', m:2 } ] },
    { q: '距離感は？', a: [
      { label:'近づくと引くのに、完全には離れない', s:2 },
      { label:'近づいても距離が縮まらない', m:1 },
      { label:'向こうから近づいてくる時もある', s:1 },
      { label:'必要最低限しか関わらない', m:2 } ] },
    { q: 'あなたの話題になると？', a: [
      { label:'照れたり動揺したりする', s:2 },
      { label:'興味なさそうに流す', m:2 },
      { label:'真面目に聞くけど淡白', c:1 },
      { label:'なぜか機嫌が良くなる', s:1 } ] },
    { q: '周りに人がいると？', a: [
      { label:'急にそっけなくなる', s:2 },
      { label:'いつもと変わらない', m:1 },
      { label:'もともと口数が少ない', c:1 },
      { label:'こっそり気にかけてくれる', s:1 } ] },
    { q: 'デートや遊びの誘いは？', a: [
      { label:'迷うけど来てくれる', s:1, c:1 },
      { label:'やんわり断られる・流される', m:2 },
      { label:'向こうから誘ってくることもある', s:2 },
      { label:'予定を聞いても具体化しない', m:1 } ] },
    { q: '連絡の頻度は？', a: [
      { label:'少ないけど、聞けば丁寧に返ってくる', c:1 },
      { label:'自分からはほとんど来ない', m:2 },
      { label:'気分で急に増えることがある', s:1 },
      { label:'用件だけで終わる', m:1 } ] },
    { q: '相手のタイプは？', a: [
      { label:'奥手・真面目・警戒心が強そう', c:2 },
      { label:'照れ屋でツンデレっぽい', s:1 },
      { label:'クールでドライ', m:1 },
      { label:'恋愛経験が少なそう', c:1 } ] },
    { q: 'あなたへの態度の一貫性は？', a: [
      { label:'冷たい時と優しい時の差が激しい', s:2 },
      { label:'ずっと一定で冷たい', m:2 },
      { label:'ゆっくりだけど少しずつ柔らかくなる', c:1 },
      { label:'日に日に関心が薄れている気がする', m:1 } ] },
    { q: 'あなたの直感では？', a: [
      { label:'嫌われてはいない気がする', s:2 },
      { label:'脈はなさそうと感じる', m:2 },
      { label:'まだ様子見の段階な気がする', c:1 },
      { label:'たまに脈ありかもと思う瞬間がある', s:1 } ] }
  ];

  function judge(S, M, C) {
    if (M >= S * 2 && M >= 6) return 'numa_high';
    if (M > S + 2) return 'numa_lean';
    if (S > M + 3) return 'suki_high';
    if (S >= M && C >= 3) return 'suki_cautious';
    if (S > M + 1) return 'suki_high';
    return 'hold';
  }

  function articleCard(key) {
    const a = ARTICLE_DATA[key] || {};
    const url = a.url || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card"><h4>${a.title || ''}</h4>${a.desc ? `<p>${a.desc}</p>` : ''}<a class="btn" href="${url}"${at}>noteで読む</a></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#suki-quiz');
    const btn = document.querySelector('#suki-go');
    const out = document.querySelector('#suki-result');
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
      let S = 0, M = 0, C = 0, answered = 0;
      QUESTIONS.forEach((item, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) {
          answered++;
          const o = item.a[Number(sel.value)];
          S += o.s || 0; M += o.m || 0; C += o.c || 0;
        }
      });
      if (answered < QUESTIONS.length) {
        out.innerHTML = `<p class="compat-hint">すべての質問（残り${QUESTIONS.length - answered}問）に答えてください。</p>`;
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const r = RESULTS[judge(S, M, C)];
      const cards = r.articles.map(articleCard).join('');
      out.innerHTML = `
        <div class="result-card">
          <p class="result-lead">診断結果</p>
          <p class="result-title">${r.name}</p>
          <p class="result-meterlabel">好き避け度</p>
          <div class="score"><span class="score-num">${r.percent}</span><span class="score-unit">%</span></div>
          <div class="suki-meter"><span style="width:${r.percent}%"></span></div>
          <p class="result-feature">${r.overview}</p>
        </div>
        <div class="result-block"><h3>💗 好き避けっぽいポイント</h3><p>${r.sukiPoints}</p></div>
        <div class="result-block"><h3>🌀 脈なしっぽいポイント</h3><p>${r.myakuPoints}</p></div>
        <div class="result-block"><h3>🌸 これから取るべき行動</h3><p>${r.action}</p></div>
        <h3 class="relate-head">あわせて読みたい</h3>
        <div class="cards">${cards}</div>
        <button type="button" class="btn outline lovetype-retry" id="suki-retry">もう一度診断する</button>
        <p class="compat-note">※ これは行動傾向からの目安で、「絶対に脈なし／絶対に好き」と決まるものではありません。気持ちは、これからの関わり方で変えていけます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#suki-retry');
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
