/* ============================================================
   記事データ（仮URL）
   後から記事を追加しやすいよう、すべて配列／オブジェクトで管理。
   url は実際のページ／note URL に差し替えてください。
   ============================================================ */

/* トップの人気記事 */
const popularArticles = [
  {id:'a1',title:'好き避けしやすいMBTIランキング｜好きな人ほど避けてしまう16タイプ',excerpt:'好きな人にだけ素っ気なくなる傾向をタイプ別に解説。',url:'#'},
  {id:'a2',title:'INTP男の恋愛パターン｜好きになる流れ・付き合い方・あるある本音',excerpt:'理論派な彼の恋愛傾向と攻略法。',url:'#'},
  {id:'a3',title:'MBTI恋愛相性大全｜16タイプ全256組み合わせ完全解説',excerpt:'タイプごとの相性の傾向を俯瞰で紹介。',url:'#'},
  {id:'a4',title:'INTJ男に溺愛される女性とは？合理主義の彼が手放せなくなる存在の条件',excerpt:'合理的な彼が夢中になる要素とは。',url:'#'},
  {id:'a5',title:'なぜか本命にだけ素っ気ない…好きな人にだけ冷たくなるMBTIランキング',excerpt:'本命にだけクールな傾向をタイプ別で紹介。',url:'#'},
  {id:'a6',title:'INFP男に溺愛される方法｜優しい理想主義者が「この子だけ」と決める女性',excerpt:'感受性豊かな彼の心をつかむ方法。',url:'#'}
];

/* MBTI恋愛ランキング一覧（8本） */
const rankingArticles = [
  {id:'r1',title:'好き避けしやすいMBTIランキング',excerpt:'好きなほど避けてしまうタイプをランキング形式で解説。',url:'#'},
  {id:'r2',title:'既読無視しがちなMBTIランキング',excerpt:'既読無視が多い傾向のタイプを紹介。',url:'#'},
  {id:'r3',title:'未読無視しがちなMBTIランキング',excerpt:'すぐ返信しないタイプの特徴。',url:'#'},
  {id:'r4',title:'恋愛を拗らせやすいMBTIランキング',excerpt:'恋をこじらせがちなタイプを解説。',url:'#'},
  {id:'r5',title:'本命にだけ冷たくなるMBTIランキング',excerpt:'本命にだけ素っ気ないタイプを紹介。',url:'#'},
  {id:'r6',title:'友情から恋に落ちやすいMBTIランキング',excerpt:'友人関係から恋愛に発展しやすいタイプ。',url:'#'},
  {id:'r7',title:'別れた後にSNSを見てしまうMBTIランキング',excerpt:'別れた相手をつい追ってしまうタイプ。',url:'#'},
  {id:'r8',title:'別れを後悔しやすいMBTIランキング',excerpt:'あとから未練が出やすいタイプを解説。',url:'#'}
];

/* タイプ別男性攻略（優先表示の8タイプ） */
const SUBHEADINGS = ['好きな人への態度','好き避け','LINE傾向','脈ありサイン','溺愛される女性の特徴','急に消える理由'];
const featuredTypes = [
  {type:'INTP',url:'#'},
  {type:'INTJ',url:'#'},
  {type:'ENTJ',url:'#'},
  {type:'ISTJ',url:'#'},
  {type:'INFP',url:'#'},
  {type:'ENTP',url:'#'},
  {type:'INFJ',url:'#'},
  {type:'ISFP',url:'#'}
];

/* note有料記事一覧（セクション別／仮URL） */
const noteSections = [
  {category:'人気記事',items:[
    {title:'好き避けしやすいMBTIランキング',excerpt:'好きな人ほど避けてしまう16タイプを徹底解説。',price:'¥500',url:'https://note.example.com/n/popular1'},
    {title:'INTJ男に溺愛される女性とは？',excerpt:'合理主義の彼が手放せなくなる存在の条件。',price:'¥600',url:'https://note.example.com/n/popular2'}
  ]},
  {category:'MBTI恋愛ランキング',items:[
    {title:'本命にだけ冷たくなるMBTIランキング',excerpt:'好きな人にだけ素っ気なくなる心理をタイプ別に。',price:'¥500',url:'https://note.example.com/n/rank1'},
    {title:'既読無視・未読無視しがちなMBTIランキング',excerpt:'返信が遅い／返さないタイプの本音。',price:'¥500',url:'https://note.example.com/n/rank2'}
  ]},
  {category:'タイプ別男性攻略',items:[
    {title:'INTP男性攻略｜恋愛傾向と落とし方',excerpt:'好きな人への態度・LINE・脈ありサインまで。',price:'¥700',url:'https://note.example.com/n/type1'},
    {title:'INTJ男性攻略｜溺愛される女性になる方法',excerpt:'合理派の彼が本気になる条件を解説。',price:'¥700',url:'https://note.example.com/n/type2'}
  ]},
  {category:'MBTI恋愛相性',items:[
    {title:'MBTI恋愛相性大全｜16タイプ全256組み合わせ',excerpt:'相性の良し悪しと付き合い方を完全網羅。',price:'¥1,200',url:'https://note.example.com/n/aisho1'}
  ]},
  {category:'復縁・未練・別れ系',items:[
    {title:'MBTIで読み解く深層心理と復縁の可能性',excerpt:'別れたあとの心理と復縁できるタイプ。',price:'¥1,200',url:'https://note.example.com/n/recover1'},
    {title:'別れを後悔しやすいMBTIと未練の残し方',excerpt:'未練が長引くタイプの特徴と向き合い方。',price:'¥900',url:'https://note.example.com/n/recover2'}
  ]}
];
