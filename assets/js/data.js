// 記事データ（仮URL） — 後で差し替えやすい構成にしています
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

/* トップ：人気診断 */
const homeDiagnoses = [
  {title:'あの人の<br>MBTI推測診断',art:'person',url:'diagnosis.html'},
  {title:'MBTI<br>恋愛タイプ診断',art:'heart',url:'love-type.html'},
  {title:'MBTI<br>恋愛相性診断',art:'hearts',url:'compat.html'}
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

/* note有料記事一覧（実記事・タイトル/アイキャッチ画像はnoteから取得） */
const noteSections = [
  {category:'タイプ別｜彼の本音と攻略（男性）',tag:'彼の攻略',items:[
    {title:'INFP 男に溺愛される方法｜優しい理想主義者が「この子だけ」と決める女性',excerpt:'「気になる人が INFP だけど、何を考えているか分からない」 「もっと仲良くなりたいけど、どう接すれば良いの…',img:'https://assets.st-note.com/production/uploads/images/282528047/rectangle_large_type_2_f862ab902495bd86f137a7d604599781.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7e0435072a84'},
    {title:'実は顔じゃない――INTP男が本気で惹かれる女性、恋愛対象外になる女性',excerpt:'「頭が良くて面白い話をしてくれるけど、何を考えているのかさっぱり分からない…」 「デート中も自分の世界に入っち…',img:'https://assets.st-note.com/production/uploads/images/281945781/rectangle_large_type_2_68059c01dce2c296771495344f8b6bb6.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n90001451cc43'},
    {title:'ISTJ男の本音完全解説｜好きな女性への態度・脈ありサイン・落とし方',excerpt:'「真面目で誠実なのは分かるけど、何を考えているのか全然分からない…」 「デートもいつも同じような感じで、ドキド…',img:'https://assets.st-note.com/production/uploads/images/281946381/rectangle_large_type_2_2a49e321aa4266b8beb068d6c84004cb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n4ee8bed2f56f'},
    {title:'なぜ彼女だけ特別扱いされるのか？ENTJ男が本気で惚れる女性の条件',excerpt:'「リーダーシップがあって頼りになるけど、何を考えているのか全然分からない…」 「強引だし、自分の意見を絶対に曲…',img:'https://assets.st-note.com/production/uploads/images/281946572/rectangle_large_type_2_6b6c2cab9ffa8a365859ba1b1e2f5387.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ne34603d2ac07'},
    {title:'INTJ男に溺愛される女性とは？合理主義の彼が手放せなくなる存在の条件',excerpt:'「どうしてこんなに冷たいの？」 「LINE もそっけないし、『好き』なんて言葉、一度も聞いたことがない…」 「…',img:'https://assets.st-note.com/production/uploads/images/281946722/rectangle_large_type_2_41120671fc9111fbc8baccacbce4546a.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfbefa346cf88'},
    {title:'ENFP 男に溺愛される方法｜情熱的な理想家が「唯一無二」と感じる女性',excerpt:'「彼はいつも楽しそうだけど、自分はどう思われているの？」 「もっと深く繋がりたいのに、話題が次々変わって心に届…',img:'https://assets.st-note.com/production/uploads/images/282683371/rectangle_large_type_2_72a93c033ec500ccdfbba55327d223fc.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nbc70089a482b'},
    {title:'ENFJ男の心を掴む方法｜尽くされる女性と恋愛対象外の女性の違い',excerpt:'「優しすぎて、自分が本命かどうか分からない」 「いつも私に合わせてくれるし、周りの人にも親切だけど、彼自身は何…',img:'https://assets.st-note.com/production/uploads/images/283086356/rectangle_large_type_2_d571043e8d0b5a144fc521e2a784aa04.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n06e8e87318cc'},
    {title:'ENTP男は追いかけたい――彼が手放せなくなる女性とは',excerpt:'「話は面白いけど、何を考えているか分からない」 「いつも議論好きで、からかわれてばかりで、本気なのか冗談なのか…',img:'https://assets.st-note.com/production/uploads/images/283094757/rectangle_large_type_2_f3309bd56f61a00f92c6ffb5949ceba3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nad4d3eb11812'},
    {title:'ESFP 男に溺愛される方法｜今を生きる表現者が夢中になる、心を掴む女性',excerpt:'「明るくて楽しい人だけど、真剣な話が全然できない」 「いつも周りに人が集まっていて、自分って彼にとって特別な存…',img:'https://assets.st-note.com/production/uploads/images/283099431/rectangle_large_type_2_f782247cb8dbd2963d97e0afa982c42a.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb30cac97bf89'},
    {title:'ESFJ 男に溺愛される方法｜温かな奉仕者が安心して全てを捧げたくなる女性',excerpt:'「優しすぎて、何を考えているか分からない」 「いつも私のために動いてくれるし、気を遣ってくれるけど、彼自身は何…',img:'https://assets.st-note.com/production/uploads/images/283105376/rectangle_large_type_2_5181ada2724eb95e2e71b6d48c045632.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7f58d1b3eae9'},
    {title:'ESTP男の本命になる方法｜遊び相手と本命女性の決定的な違い',excerpt:'「パワフルで格好いいし、何でもこなしちゃうけど、行動が予測できなくて不安になる」 「いつも自由に動き回っていて…',img:'https://assets.st-note.com/production/uploads/images/283128463/rectangle_large_type_2_b06c4782c25c72062e1e4fccd68b7244.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfceac847c4f8'},
    {title:'なぜ彼女は妻に選ばれたのか？ESTJ男が生涯を共にしたい女性の条件',excerpt:'「真面目でしっかりしていて、頼りになるけど、どこか厳しくて近寄りがたい」 「何を考えているのか分からないし、愛…',img:'https://assets.st-note.com/production/uploads/images/283129563/rectangle_large_type_2_0d6766f205b7efc682abe53569824be5.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n41a385bef40b'},
    {title:'なぜ彼女だけ心を許されたのか？ISFP男が深く愛する女性の条件',excerpt:'「すごく優しくて、一緒にいると心が落ち着くけど、何を考えているのか全然分からない」 「自分のことをほとんど話し…',img:'https://assets.st-note.com/production/uploads/images/283132454/rectangle_large_type_2_44084b097717016dec28a2085953563d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf90247b71f84'},
    {title:'ISFJ男に溺愛される女性とは？彼が生涯守りたいと思う本命の特徴',excerpt:'「とにかく優しくて、いつも私のことを最優先に考えて動いてくれるけど、これって本命だから？ それとも誰にでもこう…',img:'https://assets.st-note.com/production/uploads/images/283132552/rectangle_large_type_2_1e34c606e410ffaf6f4e6a9d652d894f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7601f9712a7c'},
    {title:'無口なISTP男が離れなくなる女性――彼が心を許した本命の特徴',excerpt:'「見た目は格好いいし、何でもできそうな雰囲気があるのに、とにかく無口で、何を考えているのかさっぱり分からない」…',img:'https://assets.st-note.com/production/uploads/images/283134258/rectangle_large_type_2_b5d57383f03010c0a737230b4dacd6dd.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nd86e4c048c06'},
    {title:'INFJ男は理解された瞬間に落ちる――彼が手放せなくなる女性とは',excerpt:'「とても優しくて、思いやりに溢れているのに、どこか一線を引かれているような、遠い存在に感じる」 「話していると…',img:'https://assets.st-note.com/production/uploads/images/283134884/rectangle_large_type_2_82acb6212363ac98a2e383d1974e941e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb8c5e4c23c2c'},
    {title:'嫌われた？INTP男が急に返信しなくなる本当の理由',excerpt:'「嫌われちゃったのかな」 「もう脈なしだと思って、諦めようかと何度も思った」 「なのに数日後には何事もなかった…',img:'https://assets.st-note.com/production/uploads/images/285315013/rectangle_large_type_2_68ec514f0fa72f6d270f2fba75514195.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n38de9357fe77'},
    {title:'INTP男は好きな人ほど避ける――脈なしと勘違いされる恋心の正体',excerpt:'「頭は良いし、話していて面白いのに、私のことになると急に冷たくなる」 「普段はあんなに饒舌なのに、二人きりにな…',img:'https://assets.st-note.com/production/uploads/images/283135253/rectangle_large_type_2_a1fdec913b6553c495bee0eabd7c3290.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n68a36c18da09'},
    {title:'INTP 男に溺愛される方法｜理論派男子が「唯一無二」と認める女性になる',excerpt:'この記事では、何を考えているかわからない、恋愛に淡白に見える INTP 男性が、どんな女性に心を奪われ、時間も…',img:'https://assets.st-note.com/production/uploads/images/279834010/rectangle_large_type_2_b02efe0d5ac171bc8a3993f66152fb3e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n529c1357d391'},
    {title:'INTP 男の恋愛パターン｜好きになる流れ・付き合い方・あるある本音',excerpt:'この記事では、MBTI の中でも「哲学者」「論理学者」と呼ばれる INTP 男性の恋愛における思考回路、行動パ…',img:'https://assets.st-note.com/production/uploads/images/279833539/rectangle_large_type_2_85cb6725206d616112544b49419e646f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n99cb391192b9'},
    {title:'ISTJ男は好きな人ほど慎重になる――脈なしと勘違いされる本気の恋心',excerpt:'「いつも冷静で真面目で、周りからも信頼されている人なのに、私にだけなんだかよそよそしい」 「仕事や約束事はすご…',img:'https://assets.st-note.com/production/uploads/images/283136741/rectangle_large_type_2_2e0ae4853b5a28bcfa71d4435dd795da.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc1c642f6d0bc'}
  ]},
  {category:'タイプ別｜あなたの恋愛傾向（女性）',tag:'あなたの傾向',items:[
    {title:'頭では分かっているのに恋愛だけうまくいかない――INTJ女性が幸せになれない本当の理由',excerpt:'なんで私、恋愛だけこんなに下手なんだろう。 頭では「この人はやめた方がいい」と分かっていた。 周りから見れば明…',img:'https://assets.st-note.com/production/uploads/images/285940911/rectangle_large_type_2_30c58d164279a5fb219648007957fce3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n5e4d6eb0a254'},
    {title:'好きになるほど考えすぎる――INTP女性が恋愛を拗らせやすい理由',excerpt:'なんで私はこんなに考えてしまうんだろう。 返信が来ない。 それだけなのに、もう何時間も理由を考えている。 忙し…',img:'https://assets.st-note.com/production/uploads/images/285943124/rectangle_large_type_2_200bf7a3ec83e6de6bccb846a9b8eef0.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n5eef416fdf6f'},
    {title:'「彼なら変われる」と信じてしまう――INFJ女性が苦しい恋を手放せない理由',excerpt:'本当はもう分かっている。 この恋が私を幸せにしていないことくらい。 彼が変わらないことも。 何度期待しても、ま…',img:'https://assets.st-note.com/production/uploads/images/286015544/rectangle_large_type_2_e117013bc09f8d3ad2ae5d09feee16f7.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf472dfb6c623'},
    {title:'「私だけは理解できる」が危険――INFP女性がダメ男に惹かれやすい理由',excerpt:'どうして私はいつもこうなんだろう。 周りはみんな反対している。 友達も家族も、「その人やめた方がいいよ」と言う…',img:'https://assets.st-note.com/production/uploads/images/286019135/rectangle_large_type_2_d521338467c9b9609af5c29b75b7e52d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n8cd00438b91b'},
    {title:'恋に落ちるのは早いのに続かない――ENFP女性が恋愛で迷子になる理由',excerpt:'まただ。 最初はあんなに好きだったのに。 会えるだけで嬉しくて、LINEが来るだけで幸せで、「この人かもしれな…',img:'https://assets.st-note.com/production/uploads/images/286022529/rectangle_large_type_2_bdec01da33a5ea6716eaa8d4450d15f1.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n20ca6f3e9315'},
    {title:'好きな人を優先しすぎる――ENFJ女性が恋愛で損をしやすい理由',excerpt:'また私ばっかりだ。 会う予定を合わせるのも私。 連絡するのも私。 相手が落ち込んでいたら励ますのも私。 相手の…',img:'https://assets.st-note.com/production/uploads/images/286026353/rectangle_large_type_2_3b2fa79ef41c099ac9ffc8b840783107.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ndd7de83a3e20'},
    {title:'追われると冷める、追うと燃える――ENTP女性の恋愛が難しくなる理由',excerpt:'なんで私はこうなんだろう。 好きだったはずなのに。 あんなに会いたかったのに。 あんなにLINEを待っていたの…',img:'https://assets.st-note.com/production/uploads/images/286029183/rectangle_large_type_2_1ace2be471ab6b24a529670c344c7c7c.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf0c7ae903e18'},
    {title:'恋愛だけ思い通りにならない――ENTJ女性が苦戦しやすい理由',excerpt:'仕事なら分かる。 頑張れば結果が出る。 問題があれば改善できる。 目標があれば達成できる。 うまくいかなければ…',img:'https://assets.st-note.com/production/uploads/images/286033028/rectangle_large_type_2_83dd359aeb1e95f2a24feaec56a872e3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n3cf721ee03ea'},
    {title:'気づけばいつも尽くしている――ISFJ女性が都合のいい女性になりやすい理由',excerpt:'また私ばっかりだ。 会いたい時に会うのは相手の都合。 連絡するのも私。 予定を合わせるのも私。 相手が落ち込ん…',img:'https://assets.st-note.com/production/uploads/images/286072307/rectangle_large_type_2_c1dfc88c8976fb9527fc457846fd1f42.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n094e03a3fc66'},
    {title:'慎重すぎて恋を逃す――ISTJ女性が恋愛で後悔しやすい理由',excerpt:'今でも思い出す。 あの時、もう少し勇気を出していたらどうなっていたんだろう。 嫌われたわけじゃなかった。 脈な…',img:'https://assets.st-note.com/production/uploads/images/286074726/rectangle_large_type_2_c31d1623dc6a365e598591ac200f6b8e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf1b35b99aaff'},
    {title:'嫌われるくらいなら我慢する――ISFP女性が恋愛で苦しくなる理由',excerpt:'別に、重いことを言いたかったわけじゃない。 ただ少し寂しかっただけ。 少し会いたかっただけ。 少しだけ、「私の…',img:'https://assets.st-note.com/production/uploads/images/286079284/rectangle_large_type_2_1a1ffa45c197daa158e07737d095d763.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n56410f928faf'},
    {title:'恋愛だけは面倒になる――ISTP女性が距離を取ってしまう理由',excerpt:'好きじゃないわけじゃない。 むしろ好きだと思う。 会えば楽しいし、一緒にいると安心する。 この人でいいと思って…',img:'https://assets.st-note.com/production/uploads/images/286082182/rectangle_large_type_2_fc5217fd6d69d641f60299d08154551f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n25c05c7672f6'},
    {title:'「必要とされたい」が止まらない――ESFJ女性が苦しい恋を続けてしまう理由',excerpt:'本当は分かっている。 この恋愛が私を幸せにしていないことくらい。 連絡が来るたびに振り回されていることも。 相…',img:'https://assets.st-note.com/production/uploads/images/286084217/rectangle_large_type_2_af79772203cc1f4ed63b996bfcacf008.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7cdf00ad9cdd'},
    {title:'ダメ男は嫌いなのになぜか引き寄せる――ESTJ女性の恋愛の落とし穴',excerpt:'意味が分からない。 私は昔から、だらしない人が嫌いだった。 約束を守らない人も嫌い。 仕事を頑張らない人も嫌い…',img:'https://assets.st-note.com/production/uploads/images/286085908/rectangle_large_type_2_2af7ea08f03bc5e1c24ea20d1c413d4e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ncac5194b7898'},
    {title:'恋は楽しいはずなのに傷つく――ESFP女性が同じ失敗を繰り返す理由',excerpt:'もう何回目だろう。 今度こそ違うと思った。 今度こそ幸せになれると思った。 でもまた同じだった。 最初は楽しか…',img:'https://assets.st-note.com/production/uploads/images/286088799/rectangle_large_type_2_564eb19dc956bc5528b5eb9be0e163f5.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n23f7ac68d75e'},
    {title:'刺激的な恋ばかり選んでしまう――ESTP女性が安定した恋愛を難しくする理由',excerpt:'最初は最高だった。 何をするにも楽しかった。 会うたびにドキドキした。 連絡が来るだけで嬉しかった。 この人と…',img:'https://assets.st-note.com/production/uploads/images/286090304/rectangle_large_type_2_29d011c5f3996fadad48c7fd62755b26.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9fef45b19f7d'}
  ]}
];
