/* ============================================================
   あの人のMBTI推測診断（diagnosis.html）
   ※ 正式なMBTI診断ではありません。本人ではなく、相手の行動から
     「近そうなタイプ傾向」を推測するもの。断定しない表現を使用。
   12問。各回答が4軸(E/I, S/N, T/F, J/P)に加点し、各軸の優勢な極から
   16タイプを組み立てて「〇〇タイプ傾向」として表示。
   おすすめ記事URLは MALE_ARTICLE を差し替えるだけ。
   ============================================================ */
(function () {
  /* 男性攻略 note記事（後から差し替え可） */
  const MALE_ARTICLE = {
    INTJ:'https://note.com/intj_analyst/n/nfbefa346cf88',
    INTP:'https://note.com/intj_analyst/n/n90001451cc43',
    ENTJ:'https://note.com/intj_analyst/n/ne34603d2ac07',
    ENTP:'https://note.com/intj_analyst/n/nad4d3eb11812',
    INFJ:'https://note.com/intj_analyst/n/nb8c5e4c23c2c',
    INFP:'https://note.com/intj_analyst/n/n7e0435072a84',
    ENFJ:'https://note.com/intj_analyst/n/n06e8e87318cc',
    ENFP:'https://note.com/intj_analyst/n/nbc70089a482b',
    ISTJ:'https://note.com/intj_analyst/n/n4ee8bed2f56f',
    ISFJ:'https://note.com/intj_analyst/n/n7601f9712a7c',
    ESTJ:'https://note.com/intj_analyst/n/n41a385bef40b',
    ESFJ:'https://note.com/intj_analyst/n/n7f58d1b3eae9',
    ISTP:'https://note.com/intj_analyst/n/nd86e4c048c06',
    ISFP:'https://note.com/intj_analyst/n/nf90247b71f84',
    ESTP:'https://note.com/intj_analyst/n/nfceac847c4f8',
    ESFP:'https://note.com/intj_analyst/n/nb30cac97bf89'
  };

  /* 各回答が加点する極(pole)。E/I, S/N, T/F, J/P */
  const QUESTIONS = [
    { q: 'あの人の連絡頻度は？', a: [
      { p:['E'], label:'返信は早く、やりとりも多い' },
      { p:['I','T'], label:'必要な時だけ連絡する' },
      { p:['P'], label:'気分によってかなり変わる' },
      { p:['I','N'], label:'返信は遅いが内容は考えられている' } ] },
    { q: 'デートの決め方は？', a: [
      { p:['J'], label:'事前にきちんと決めたい' },
      { p:['P'], label:'その場の流れで決めたい' },
      { p:['F'], label:'相手に合わせることが多い' },
      { p:['E','J'], label:'自分から提案して引っ張る' } ] },
    { q: '好きな人への態度は？', a: [
      { p:['E','F'], label:'分かりやすく好意を出す' },
      { p:['I','T'], label:'好きでもあまり態度に出ない' },
      { p:['P'], label:'気分で近づいたり離れたりする' },
      { p:['I','J'], label:'相手を観察して慎重に動く' } ] },
    { q: '会話の傾向は？', a: [
      { p:['S'], label:'現実的な話が多い' },
      { p:['N'], label:'抽象的・未来の話が多い' },
      { p:['F'], label:'感情や人間関係の話が多い' },
      { p:['T','N'], label:'論理や考察の話が多い' } ] },
    { q: 'トラブルが起きた時は？', a: [
      { p:['F','E'], label:'感情を出して話し合う' },
      { p:['T'], label:'冷静に原因を考える' },
      { p:['I'], label:'一人で整理する時間が必要' },
      { p:['S','E'], label:'すぐ行動して解決しようとする' } ] },
    { q: '休日の過ごし方は？', a: [
      { p:['E'], label:'人と会って予定をたくさん入れる' },
      { p:['I'], label:'家で一人でゆっくり過ごす' },
      { p:['P','S'], label:'思いつきで出かける' },
      { p:['J'], label:'前から計画して動く' } ] },
    { q: '物事の決め方は？', a: [
      { p:['T','S'], label:'事実やデータで判断する' },
      { p:['F'], label:'人の気持ちや空気で判断する' },
      { p:['N','P'], label:'ひらめきや可能性で判断する' },
      { p:['S','J'], label:'経験や定番で判断する' } ] },
    { q: 'LINEの文章は？', a: [
      { p:['T','I'], label:'短く要点だけ' },
      { p:['F','E'], label:'絵文字や気遣いが多い' },
      { p:['N','T'], label:'長文で考察的' },
      { p:['P'], label:'気分でテンションが変わる' } ] },
    { q: '将来の話になると？', a: [
      { p:['S','J'], label:'具体的な計画を立てたがる' },
      { p:['N'], label:'夢や理想を語るのが好き' },
      { p:['F'], label:'二人の気持ちを大事にする' },
      { p:['P'], label:'まだ決めず自由でいたい' } ] },
    { q: 'デート中の振る舞いは？', a: [
      { p:['E','J'], label:'リードして決めてくれる' },
      { p:['F','I'], label:'相手に合わせてくれる' },
      { p:['P'], label:'その時の気分で動く' },
      { p:['J','S'], label:'段取りよく進める' } ] },
    { q: 'ケンカになりそうな時は？', a: [
      { p:['T'], label:'論理的に話そうとする' },
      { p:['F'], label:'気持ちを大事にする' },
      { p:['I'], label:'距離を置いて考えたがる' },
      { p:['E'], label:'その場ですぐ解決したがる' } ] },
    { q: '興味を持ちやすいのは？', a: [
      { p:['N'], label:'新しいアイデアや考え方' },
      { p:['S'], label:'目の前の現実や実用的なこと' },
      { p:['F'], label:'人の心や関係性' },
      { p:['T'], label:'仕組みや理屈' } ] }
  ];

  /* 16タイプの推測結果（前向き・断定しない表現） */
  const RESULTS = {
    INTJ: { catch:'静かに見えて、決めたら一直線。',
      love:'恋愛も計画的に考え、本気になると長期目線で向き合うタイプ傾向。',
      attitude:'好きな人には合理的に尽くしますが、感情表現は控えめです。',
      line:'LINEは用件中心で簡潔。返信は安定していますが甘い言葉は少なめ。',
      friction:'感情のケアより解決を優先しがちで、冷たく感じられることも。',
      hint:'将来像を一緒に描くと心を開きやすいタイプ。気持ちは具体的な言葉で伝えて。' },
    INTP: { catch:'何を考えてるか分かりにくいけど、興味を持つと深い。',
      love:'興味を持った相手には深く向き合うものの、距離感は独特なタイプ傾向。',
      attitude:'好意はストレートに出さず、会話の中身でこっそり示します。',
      line:'LINEは気まぐれ。でも内容に本音や考えがにじみやすいです。',
      friction:'感情の話が苦手で、すれ違うと黙り込みがち。',
      hint:'知的な会話で距離が縮まります。返信ペースは気にしすぎないのが吉。' },
    ENTJ: { catch:'恋愛でも主導権を握る、行動で示すタイプ。',
      love:'曖昧な関係より、はっきりした関係性を好むタイプ傾向。',
      attitude:'好きな相手には積極的にリードし、予定もすぐ押さえます。',
      line:'連絡はマメで即レス傾向。要点がはっきりしています。',
      friction:'仕切りすぎて、相手のペースを置き去りにすることも。',
      hint:'頼られると燃えるタイプ。意見を尊重しつつ甘えるとうまくいきます。' },
    ENTP: { catch:'退屈が苦手、刺激的な会話で惹きつける。',
      love:'新しさや知的な刺激を求め、駆け引きを楽しむタイプ傾向。',
      attitude:'好きな人にはよくかまい、からかったり試したりしがち。',
      line:'ノリのよい返信が多いですが、テンションに波があります。',
      friction:'飽きっぽく見え、本気度が伝わりにくいことも。',
      hint:'一緒に面白がれる関係が鍵。束縛より自由度を残すと長続き。' },
    INFJ: { catch:'物静かだけど、内側はあたたかく一途。',
      love:'相手を深く理解しようとし、理想の関係を大切にするタイプ傾向。',
      attitude:'好きな人には献身的ですが、本心は時間をかけて見せます。',
      line:'丁寧で気遣いのある文章。返信は考えてから送るタイプ。',
      friction:'ため込みやすく、限界まで我慢してしまうことがあります。',
      hint:'安心感と誠実さが何より効きます。気持ちを否定せず受け止めて。' },
    INFP: { catch:'感情を大切に、心を開くまでに時間がかかる。',
      love:'好きな人には深く向き合うけれど、傷つくのを恐れて距離を取ることもあるタイプ傾向。',
      attitude:'好意はそっと示し、特別な相手にだけ素の自分を見せます。',
      line:'気持ちのこもった長めの文章。返信ペースは気分で揺れます。',
      friction:'理想と現実のギャップで、ひとり悩みを抱えがち。',
      hint:'否定せず共感を。世界観や価値観を大事にすると心を開きます。' },
    ENFJ: { catch:'面倒見がよく、相手を幸せにしたい人。',
      love:'相手の気持ちを汲んで尽くす、あたたかいタイプ傾向。',
      attitude:'好きな人には分かりやすく優しく、よく気にかけます。',
      line:'マメで気遣いたっぷり。相手に合わせた返信が得意。',
      friction:'尽くしすぎて自分を後回しにし、見返りを求めてしまうことも。',
      hint:'感謝を言葉で返すと安心します。頼ること自体が喜びになる相手。' },
    ENFP: { catch:'明るくて自由、感情豊かに恋を楽しむ。',
      love:'一緒にいてワクワクできる関係を求めるタイプ傾向。',
      attitude:'好きな人には全力で好意を見せますが、気分の波もあります。',
      line:'テンション高めで絵文字多め。盛り上がると一気に距離が縮みます。',
      friction:'熱量の差で、相手を不安にさせることがあります。',
      hint:'楽しさと共感がカギ。自由を尊重しつつ気持ちを言葉にして。' },
    ISTJ: { catch:'真面目で誠実、約束を必ず守る。',
      love:'慎重に進め、一度決めたら堅実に向き合うタイプ傾向。',
      attitude:'好きでも態度は控えめで、行動と継続で示します。',
      line:'LINEは簡潔で一定のリズム。派手さはないけれど安定。',
      friction:'変化やサプライズが苦手で、堅く見られがち。',
      hint:'急かさず信頼を積むこと。約束を大切にすると安心します。' },
    ISFJ: { catch:'優しく献身的、さりげなく支えてくれる。',
      love:'相手を気づかい、安心できる関係を育てるタイプ傾向。',
      attitude:'好きな人には細やかに尽くしますが、自分からは控えめ。',
      line:'気遣いのある丁寧な返信。マメだけれど押しは強くない。',
      friction:'我慢をため込み、察してほしくなりがち。',
      hint:'小さな気配りに気づいて感謝を。安心させると心を開きます。' },
    ESTJ: { catch:'しっかり者で頼れる、現実的なリーダー。',
      love:'関係をきちんと前に進めたい、責任感の強いタイプ傾向。',
      attitude:'好きな人には面倒見よくリードし、予定を段取ります。',
      line:'連絡はマメで的確。だらだらより要点重視。',
      friction:'正論が強く出て、相手を窮屈にすることも。',
      hint:'頼ると喜ぶタイプ。感謝と尊重を示すと優しさが出ます。' },
    ESFJ: { catch:'社交的で世話好き、みんなを笑顔にしたい。',
      love:'相手や周囲を大切にし、温かい関係を築くタイプ傾向。',
      attitude:'好きな人には分かりやすく親切で、よく気にかけます。',
      line:'マメで明るい返信。気遣いの言葉が多めです。',
      friction:'尽くしすぎて、認められないと寂しくなりがち。',
      hint:'感謝とリアクションが効きます。こまめに気持ちを伝えて。' },
    ISTP: { catch:'クールでマイペース、いざという時頼れる。',
      love:'ベタベタを好まず、自分の距離を保つタイプ傾向。',
      attitude:'好きでも態度はあっさり。行動でさりげなく示します。',
      line:'必要最低限で淡白。でも会えば態度がやさしいことも。',
      friction:'連絡が少なく、気持ちが読みにくいことがあります。',
      hint:'束縛せず自由を尊重。一緒に何かをする時間が距離を縮めます。' },
    ISFP: { catch:'穏やかで優しい、感性を大切にする人。',
      love:'言葉より雰囲気や行動で愛情を示すタイプ傾向。',
      attitude:'好きな人にはそっと寄り添いますが、本音は言いづらい様子。',
      line:'返信はマイペースで控えめ。スタンプや写真が多めなことも。',
      friction:'本音を飲み込みやすく、すれ違いに気づきにくい。',
      hint:'急かさず安心を。さりげない優しさに気づいて受け止めて。' },
    ESTP: { catch:'行動派で刺激好き、ノリと勢いの恋。',
      love:'スリルや楽しさを求め、テンポよく距離を詰めるタイプ傾向。',
      attitude:'好きな人には積極的でストレート。押しが強めです。',
      line:'軽快でテンポよいけれど、長文より会って話す派。',
      friction:'刺激が落ち着くと冷めて見え、軽く思われることも。',
      hint:'一緒に楽しめる体験がカギ。重くしすぎず気持ちは率直に。' },
    ESFP: { catch:'明るくて楽しい、一緒にいると元気になる。',
      love:'今この瞬間を楽しむ、感情豊かなタイプ傾向。',
      attitude:'好きな人には分かりやすく好意を出し、よく構います。',
      line:'明るくマメ、絵文字や写真多め。ノリがいいです。',
      friction:'盛り上がり重視で、深刻な話を避けがち。',
      hint:'楽しい時間を共有しつつ、たまに本音トークを。褒めると伸びます。' }
  };

  function assemble(s) {
    return (s.E >= s.I ? 'E' : 'I')
         + (s.S >= s.N ? 'S' : 'N')
         + (s.F >= s.T ? 'F' : 'T')
         + (s.J >= s.P ? 'J' : 'P');
  }

  function articleCard(type) {
    const url = MALE_ARTICLE[type] || '#';
    const ext = url.startsWith('http');
    const at = ext ? ' target="_blank" rel="noopener"' : '';
    return `<article class="card">
      <h4>${type}男性の攻略記事</h4>
      <p>${type}タイプ傾向の彼の、好きな人への態度・脈ありサイン・落とし穴を解説。</p>
      <a class="btn" href="${url}"${at}>noteで読む</a>
    </article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('#guess-quiz');
    const btn = document.querySelector('#guess-go');
    const out = document.querySelector('#guess-result');
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
      const s = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
      let answered = 0;
      QUESTIONS.forEach((item, i) => {
        const sel = quiz.querySelector(`input[name="q${i}"]:checked`);
        if (sel) {
          answered++;
          item.a[Number(sel.value)].p.forEach(pole => { s[pole]++; });
        }
      });
      if (answered < QUESTIONS.length) {
        out.innerHTML = `<p class="compat-hint">すべての質問（残り${QUESTIONS.length - answered}問）に答えてください。</p>`;
        out.hidden = false;
        out.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      const type = assemble(s);
      const r = RESULTS[type];
      out.innerHTML = `
        <div class="result-card">
          <p class="result-lead">あの人は…</p>
          <p class="result-title">${type}タイプ傾向</p>
          <p class="result-catch">「${r.catch}」</p>
          <p class="result-feature">${r.love}</p>
        </div>
        <div class="result-block"><h3>💗 好きな人への態度</h3><p>${r.attitude}</p></div>
        <div class="result-block"><h3>📱 連絡・LINE傾向</h3><p>${r.line}</p></div>
        <div class="result-block"><h3>🌀 すれ違いやすいポイント</h3><p>${r.friction}</p></div>
        <div class="result-block"><h3>🌸 攻略のヒント</h3><p>${r.hint}</p></div>
        <h3 class="relate-head">あの人を攻略するなら</h3>
        <div class="cards">${articleCard(type)}</div>
        <button type="button" class="btn outline lovetype-retry" id="guess-retry">もう一度診断する</button>
        <p class="compat-note">※ これは行動から近いタイプを推測する診断で、正式なMBTIではありません。あくまで「${type}に近いタイプ傾向」として、相手を理解するヒントにしてください。</p>
      `;
      out.hidden = false;
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const retry = document.querySelector('#guess-retry');
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
