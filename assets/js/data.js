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
  {id:'r1',title:'好き避けしやすいMBTIランキング',excerpt:'好きなほど避けてしまうタイプをランキング形式で解説。',url:'https://note.com/intj_analyst/n/nad3060876637'},
  {id:'r2',title:'既読無視しがちなMBTIランキング',excerpt:'既読無視が多い傾向のタイプを紹介。',url:'https://note.com/intj_analyst/n/n9fa05d63f314'},
  {id:'r3',title:'未読無視しがちなMBTIランキング',excerpt:'すぐ返信しないタイプの特徴。',url:'https://note.com/intj_analyst/n/n983863e05735'},
  {id:'r4',title:'恋愛を拗らせやすいMBTIランキング',excerpt:'恋をこじらせがちなタイプを解説。',url:'https://note.com/intj_analyst/n/n3b0c13914760'},
  {id:'r5',title:'本命にだけ冷たくなるMBTIランキング',excerpt:'本命にだけ素っ気ないタイプを紹介。',url:'https://note.com/intj_analyst/n/n6543411a2647'},
  {id:'r6',title:'友情から恋に落ちやすいMBTIランキング',excerpt:'友人関係から恋愛に発展しやすいタイプ。',url:'https://note.com/intj_analyst/n/n31d107590ee3'},
  {id:'r7',title:'別れた後にSNSを見てしまうMBTIランキング',excerpt:'別れた相手をつい追ってしまうタイプ。',url:'https://note.com/intj_analyst/n/n8d28d4e40a7f'},
  {id:'r8',title:'別れを後悔しやすいMBTIランキング',excerpt:'あとから未練が出やすいタイプを解説。',url:'https://note.com/intj_analyst/n/nfbd192ab74c4'}
];

/* タイプ別男性攻略（16タイプ／note記事リンク） */
const SUBHEADINGS = ['好きな人への態度','好き避け','LINE傾向','脈ありサイン','溺愛される女性の特徴','急に消える理由'];
const featuredTypes = [
  {type:'INTJ',url:'https://note.com/intj_analyst/n/nfbefa346cf88'},
  {type:'INTP',url:'https://note.com/intj_analyst/n/n90001451cc43'},
  {type:'ENTJ',url:'https://note.com/intj_analyst/n/ne34603d2ac07'},
  {type:'ENTP',url:'https://note.com/intj_analyst/n/nad4d3eb11812'},
  {type:'INFJ',url:'https://note.com/intj_analyst/n/nb8c5e4c23c2c'},
  {type:'INFP',url:'https://note.com/intj_analyst/n/n7e0435072a84'},
  {type:'ENFJ',url:'https://note.com/intj_analyst/n/n06e8e87318cc'},
  {type:'ENFP',url:'https://note.com/intj_analyst/n/nbc70089a482b'},
  {type:'ISTJ',url:'https://note.com/intj_analyst/n/n4ee8bed2f56f'},
  {type:'ISFJ',url:'https://note.com/intj_analyst/n/n7601f9712a7c'},
  {type:'ESTJ',url:'https://note.com/intj_analyst/n/n41a385bef40b'},
  {type:'ESFJ',url:'https://note.com/intj_analyst/n/n7f58d1b3eae9'},
  {type:'ISTP',url:'https://note.com/intj_analyst/n/nd86e4c048c06'},
  {type:'ISFP',url:'https://note.com/intj_analyst/n/nf90247b71f84'},
  {type:'ESTP',url:'https://note.com/intj_analyst/n/nfceac847c4f8'},
  {type:'ESFP',url:'https://note.com/intj_analyst/n/nb30cac97bf89'}
];

/* トップ：人気診断（診断機能は準備中→diagnosis.htmlへ） */
const homeDiagnoses = [
  {title:'あの人の<br>MBTI推測診断',art:'person',url:'diagnosis.html'},
  {title:'MBTI<br>恋愛タイプ診断',art:'heart',url:'diagnosis.html'},
  {title:'MBTI<br>恋愛相性診断',art:'hearts',url:'diagnosis.html'}
];

/* トップ：MBTI恋愛ランキング（抜粋） */
const homeRankings = [
  {title:'好き避けランキング',excerpt:'好きな人ほど避けてしまうタイプ。',url:'rankings.html'},
  {title:'本命に冷たいランキング',excerpt:'本命にだけ素っ気なくなるタイプ。',url:'rankings.html'},
  {title:'未読無視ランキング',excerpt:'未読のまま返さないタイプ。',url:'rankings.html'},
  {title:'恋愛を拗らせやすいランキング',excerpt:'恋をこじらせがちなタイプ。',url:'rankings.html'},
  {title:'SNSを監視しがちなランキング',excerpt:'別れた相手をSNSで追ってしまうタイプ。',url:'rankings.html'}
];

/* トップ：タイプ別男性攻略（大きめカード／属性付き） */
const homeTypeGuides = [
  {type:'INTP',attrs:{'好きな人への態度':'分析的に距離を測る','好き避け':'照れると理屈っぽくなる','LINE頻度':'低〜中・気分次第','脈ありサイン':'議論を長く続けたがる'},url:'types.html'},
  {type:'INTJ',attrs:{'好きな人への態度':'冷静だが特別扱い','好き避け':'感情を隠して素っ気なく','LINE頻度':'低・用件中心','脈ありサイン':'将来の話に巻き込む'},url:'types.html'},
  {type:'ENTJ',attrs:{'好きな人への態度':'主導権を握りに来る','好き避け':'ほぼしない','LINE頻度':'中・即レス傾向','脈ありサイン':'予定をすぐ押さえる'},url:'types.html'},
  {type:'ISTJ',attrs:{'好きな人への態度':'誠実で慎重','好き避け':'真面目さゆえ素っ気なく見える','LINE頻度':'低・一定リズム','脈ありサイン':'約束を必ず守る'},url:'types.html'},
  {type:'INFP',attrs:{'好きな人への態度':'やさしく繊細','好き避け':'緊張して避けがち','LINE頻度':'中・長文になりがち','脈ありサイン':'内面の話を打ち明ける'},url:'types.html'}
];

/* トップ：恋愛コラム カテゴリ */
const columnCategories = [
  {name:'片思い',url:'columns.html'},
  {name:'復縁',url:'columns.html'},
  {name:'未読無視',url:'columns.html'},
  {name:'既読無視',url:'columns.html'},
  {name:'友達以上恋人未満',url:'columns.html'},
  {name:'恋愛心理',url:'columns.html'}
];

/* note有料記事一覧（実記事・タイトルはnoteから取得） */
const noteSections = [
  {category:'タイプ別｜彼の本音と攻略（男性）',items:[
    {title:'INFP 男に溺愛される方法｜優しい理想主義者が「この子だけ」と決める女性',url:'https://note.com/intj_analyst/n/n7e0435072a84'},
    {title:'実は顔じゃない――INTP男が本気で惹かれる女性、恋愛対象外になる女性',url:'https://note.com/intj_analyst/n/n90001451cc43'},
    {title:'ISTJ男の本音完全解説｜好きな女性への態度・脈ありサイン・落とし方',url:'https://note.com/intj_analyst/n/n4ee8bed2f56f'},
    {title:'なぜ彼女だけ特別扱いされるのか？ENTJ男が本気で惚れる女性の条件',url:'https://note.com/intj_analyst/n/ne34603d2ac07'},
    {title:'INTJ男に溺愛される女性とは？合理主義の彼が手放せなくなる存在の条件',url:'https://note.com/intj_analyst/n/nfbefa346cf88'},
    {title:'ENFP 男に溺愛される方法｜情熱的な理想家が「唯一無二」と感じる女性',url:'https://note.com/intj_analyst/n/nbc70089a482b'},
    {title:'ENFJ男の心を掴む方法｜尽くされる女性と恋愛対象外の女性の違い',url:'https://note.com/intj_analyst/n/n06e8e87318cc'},
    {title:'ENTP男は追いかけたい――彼が手放せなくなる女性とは',url:'https://note.com/intj_analyst/n/nad4d3eb11812'},
    {title:'ESFP 男に溺愛される方法｜今を生きる表現者が夢中になる、心を掴む女性',url:'https://note.com/intj_analyst/n/nb30cac97bf89'},
    {title:'ESFJ 男に溺愛される方法｜温かな奉仕者が安心して全てを捧げたくなる女性',url:'https://note.com/intj_analyst/n/n7f58d1b3eae9'},
    {title:'ESTP男の本命になる方法｜遊び相手と本命女性の決定的な違い',url:'https://note.com/intj_analyst/n/nfceac847c4f8'},
    {title:'なぜ彼女は妻に選ばれたのか？ESTJ男が生涯を共にしたい女性の条件',url:'https://note.com/intj_analyst/n/n41a385bef40b'},
    {title:'なぜ彼女だけ心を許されたのか？ISFP男が深く愛する女性の条件',url:'https://note.com/intj_analyst/n/nf90247b71f84'},
    {title:'ISFJ男に溺愛される女性とは？彼が生涯守りたいと思う本命の特徴',url:'https://note.com/intj_analyst/n/n7601f9712a7c'},
    {title:'無口なISTP男が離れなくなる女性――彼が心を許した本命の特徴',url:'https://note.com/intj_analyst/n/nd86e4c048c06'},
    {title:'INFJ男は理解された瞬間に落ちる――彼が手放せなくなる女性とは',url:'https://note.com/intj_analyst/n/nb8c5e4c23c2c'},
    {title:'嫌われた？INTP男が急に返信しなくなる本当の理由',url:'https://note.com/intj_analyst/n/n38de9357fe77'},
    {title:'INTP男は好きな人ほど避ける――脈なしと勘違いされる恋心の正体',url:'https://note.com/intj_analyst/n/n68a36c18da09'},
    {title:'INTP 男に溺愛される方法｜理論派男子が「唯一無二」と認める女性になる',url:'https://note.com/intj_analyst/n/n529c1357d391'},
    {title:'INTP 男の恋愛パターン｜好きになる流れ・付き合い方・あるある本音',url:'https://note.com/intj_analyst/n/n99cb391192b9'},
    {title:'ISTJ男は好きな人ほど慎重になる――脈なしと勘違いされる本気の恋心',url:'https://note.com/intj_analyst/n/nc1c642f6d0bc'}
  ]},
  {category:'タイプ別｜あなたの恋愛傾向（女性）',items:[
    {title:'頭では分かっているのに恋愛だけうまくいかない――INTJ女性が幸せになれない本当の理由',url:'https://note.com/intj_analyst/n/n5e4d6eb0a254'},
    {title:'好きになるほど考えすぎる――INTP女性が恋愛を拗らせやすい理由',url:'https://note.com/intj_analyst/n/n5eef416fdf6f'},
    {title:'「彼なら変われる」と信じてしまう――INFJ女性が苦しい恋を手放せない理由',url:'https://note.com/intj_analyst/n/nf472dfb6c623'},
    {title:'「私だけは理解できる」が危険――INFP女性がダメ男に惹かれやすい理由',url:'https://note.com/intj_analyst/n/n8cd00438b91b'},
    {title:'恋に落ちるのは早いのに続かない――ENFP女性が恋愛で迷子になる理由',url:'https://note.com/intj_analyst/n/n20ca6f3e9315'},
    {title:'好きな人を優先しすぎる――ENFJ女性が恋愛で損をしやすい理由',url:'https://note.com/intj_analyst/n/ndd7de83a3e20'},
    {title:'追われると冷める、追うと燃える――ENTP女性の恋愛が難しくなる理由',url:'https://note.com/intj_analyst/n/nf0c7ae903e18'},
    {title:'恋愛だけ思い通りにならない――ENTJ女性が苦戦しやすい理由',url:'https://note.com/intj_analyst/n/n3cf721ee03ea'},
    {title:'気づけばいつも尽くしている――ISFJ女性が都合のいい女性になりやすい理由',url:'https://note.com/intj_analyst/n/n094e03a3fc66'},
    {title:'慎重すぎて恋を逃す――ISTJ女性が恋愛で後悔しやすい理由',url:'https://note.com/intj_analyst/n/nf1b35b99aaff'},
    {title:'嫌われるくらいなら我慢する――ISFP女性が恋愛で苦しくなる理由',url:'https://note.com/intj_analyst/n/n56410f928faf'},
    {title:'恋愛だけは面倒になる――ISTP女性が距離を取ってしまう理由',url:'https://note.com/intj_analyst/n/n25c05c7672f6'},
    {title:'「必要とされたい」が止まらない――ESFJ女性が苦しい恋を続けてしまう理由',url:'https://note.com/intj_analyst/n/n7cdf00ad9cdd'},
    {title:'ダメ男は嫌いなのになぜか引き寄せる――ESTJ女性の恋愛の落とし穴',url:'https://note.com/intj_analyst/n/ncac5194b7898'},
    {title:'恋は楽しいはずなのに傷つく――ESFP女性が同じ失敗を繰り返す理由',url:'https://note.com/intj_analyst/n/n23f7ac68d75e'},
    {title:'刺激的な恋ばかり選んでしまう――ESTP女性が安定した恋愛を難しくする理由',url:'https://note.com/intj_analyst/n/n9fef45b19f7d'}
  ]}
];
