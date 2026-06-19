/* ============================================================
   MBTI恋愛相性診断（compat.html）
   16×16=256通りを汎用ロジックで判定。前向きな結果のみ返す。
   関連note記事のURLは TYPE_ARTICLE / COMPAT_GUIDE_URL を差し替えるだけ。
   ============================================================ */
(function () {
  const TYPES = ['INTJ','INTP','INFJ','INFP','ENTJ','ENTP','ENFJ','ENFP',
                 'ISTJ','ISTP','ISFJ','ISFP','ESTJ','ESTP','ESFJ','ESFP'];

  /* 関連note記事（仮URL・後で差し替え） */
  const TYPE_ARTICLE = {
    INTJ:'#', INTP:'#', INFJ:'#', INFP:'#', ENTJ:'#', ENTP:'#', ENFJ:'#', ENFP:'#',
    ISTJ:'#', ISTP:'#', ISFJ:'#', ISFP:'#', ESTJ:'#', ESTP:'#', ESFJ:'#', ESFP:'#'
  };
  const COMPAT_GUIDE_URL = '#'; // MBTI恋愛相性大全

  function matchCount(a, b) {
    let m = 0;
    for (let i = 0; i < 4; i++) if (a[i] === b[i]) m++;
    return m;
  }

  function diagnose(a, b) {
    const m = matchCount(a, b);
    const score = (a === b) ? 82 : [60, 66, 72, 78][m];
    const sameEI = a[0] === b[0], sameSN = a[1] === b[1], sameTF = a[2] === b[2], sameJP = a[3] === b[3];
    const bothN = a[1] === 'N' && b[1] === 'N';
    const bothS = a[1] === 'S' && b[1] === 'S';

    let title, feature;
    if (a === b) {
      title = '似ているからこそ分かり合える相性';
      feature = '価値観や考え方が近く、自然体でいられる関係です。似ているぶん同じ弱点が同時に出やすいので、そこだけ意識して支え合えると、さらに心地よい関係になります。';
    } else if (bothN) {
      title = '深い会話で惹かれ合う相性';
      feature = '表面的なやりとりより、価値観や将来の話で距離が縮まりやすい関係です。語り合うほどお互いの理解が深まります。';
    } else if (bothS) {
      title = '現実感のある安定相性';
      feature = '生活感覚や現実的な判断が合いやすく、安心感のある関係を築きやすい組み合わせです。';
    } else {
      title = '視点の違いが新鮮な相性';
      feature = '一方は現実を、もう一方は可能性を見るぶん、お互いの視点が新鮮に映ります。違いを面白がれるほど、魅力的な関係になります。';
    }

    const attractions = [];
    if (!sameEI) attractions.push('外向と内向で、お互いの足りないところを自然に補い合えます。');
    if (bothN) attractions.push('将来や価値観の話で、深く共感し合えます。');
    if (bothS) attractions.push('現実的な感覚や生活リズムが合いやすいです。');
    if (sameTF) attractions.push(a[2] === 'T' ? '物事を合理的に進められ、判断がぶつかりにくいです。' : 'お互いの気持ちを大切にし合えます。');
    if (sameJP) attractions.push('予定や連絡のペース感覚が近く、計画を合わせやすいです。');
    if (attractions.length === 0) attractions.push('違いが多いぶん、お互いに新しい発見の多い関係です。');

    const frictions = [];
    if (!sameTF) frictions.push('一方は論理を、もう一方は気持ちを重視するため、悪気なくすれ違うことがあります。');
    if (!sameJP) frictions.push('計画的に進めたい側と流れに任せたい側で、連絡頻度やデートの段取りにズレが出やすいです。');
    if (!sameSN) frictions.push('話が具体的か抽象的かで、かみ合わない瞬間があるかもしれません。');
    if (!sameEI) frictions.push('一緒に過ごしたいペースや、ひとりの時間の取り方に差が出やすいです。');
    if (frictions.length === 0) frictions.push('似ているぶん、同じ弱みが同時に出やすい点だけ気をつけましょう。');

    const tips = ['お互いの違いは「欠点」ではなく「役割分担」と捉えると、関係がぐっと楽になります。'];
    if (!sameTF) tips.push('結論だけでなく「どう感じたか」も一言添えると、気持ちが伝わりやすくなります。');
    if (!sameJP) tips.push('連絡やデートのペースは、最初にゆるく決めておくとお互い安心です。');
    if (!sameSN) tips.push('現実的な相談と、夢や価値観の話、その両方の時間をつくるとバランスが取れます。');
    if (!sameEI) tips.push('会う頻度やひとりの時間は、遠慮せず希望を伝え合うとうまくいきます。');

    const cautions = [];
    if (!sameTF) cautions.push('T（思考）とF（感情）の違い');
    if (!sameJP) cautions.push('J（計画）とP（柔軟）の違い');

    return { score, title, feature, attractions, frictions, tips, cautions };
  }

  function articleCards(a, b) {
    return [
      { title: `${a}タイプの恋愛記事を見る`, url: TYPE_ARTICLE[a] || '#' },
      { title: `${b}タイプの恋愛記事を見る`, url: TYPE_ARTICLE[b] || '#' },
      { title: 'MBTI恋愛相性大全を見る', url: COMPAT_GUIDE_URL }
    ];
  }

  document.addEventListener('DOMContentLoaded', () => {
    const selA = document.querySelector('#compat-you');
    const selB = document.querySelector('#compat-them');
    const btn = document.querySelector('#compat-go');
    const out = document.querySelector('#compat-result');
    if (!selA || !selB || !btn || !out) return;

    const opts = '<option value="">選択してください</option>' +
      TYPES.map(t => `<option value="${t}">${t}</option>`).join('');
    selA.innerHTML = opts;
    selB.innerHTML = opts;

    const li = arr => arr.map(x => `<li>${x}</li>`).join('');

    btn.addEventListener('click', () => {
      const a = selA.value, b = selB.value;
      if (!a || !b) {
        out.innerHTML = '<p class="compat-hint">あなたとあの人のMBTIを両方選んでください。</p>';
        out.hidden = false;
        return;
      }
      const r = diagnose(a, b);
      const cards = articleCards(a, b).map(c => {
        const ext = c.url && c.url.startsWith('http');
        const at = ext ? ' target="_blank" rel="noopener"' : '';
        return `<article class="card"><h4>${c.title}</h4><a class="btn" href="${c.url || '#'}"${at}>記事を見る</a></article>`;
      }).join('');
      const caution = r.cautions.length
        ? `<p class="compat-caution">⚠ ${r.cautions.join('・')}があります。「合わない」のではなく“違い”として受け止めると、すれ違いはぐっと減らせます。</p>`
        : '';
      out.innerHTML = `
        <div class="result-card">
          <p class="result-pair">${a}<span>×</span>${b}</p>
          <p class="result-title">${r.title}</p>
          <div class="score"><span class="score-num">${r.score}</span><span class="score-unit">点</span></div>
          <p class="result-feature">${r.feature}</p>
          ${caution}
        </div>
        <div class="result-block"><h3>💞 惹かれ合うポイント</h3><ul>${li(r.attractions)}</ul></div>
        <div class="result-block"><h3>🌀 すれ違いやすいポイント</h3><ul>${li(r.frictions)}</ul></div>
        <div class="result-block"><h3>🌸 うまくいくためのヒント</h3><ul>${li(r.tips)}</ul></div>
        <h3 class="relate-head">この2人におすすめの記事</h3>
        <div class="cards">${cards}</div>
        <p class="compat-note">※ MBTIはあくまで傾向です。相性は二人のかかわり方で、いくらでも良くしていけます。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
