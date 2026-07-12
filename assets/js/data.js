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
const rankingSections = [
  {category:'好き避け・連絡・脈ありサイン',tag:'脈・連絡',items:[
    {title:'恋愛で駆け引きが上手いMBTIランキング',excerpt:'「相手の気を引こうとして、わざと連絡を遅らせたり、素っ気なくしたりする」 「自分のことをもっと気にかけてほしくて、相手の反応を見ながら態度を変える」 「どうすれ…',img:'https://assets.st-note.com/production/uploads/images/291377095/rectangle_large_type_2_6e0159960d0b6083e3c51085b2862967.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n67d99338204f'},
    {title:'LINEの返信速度が遅いMBTIランキング',excerpt:'「他の人はすぐに返事をくれるのに、この人からはなかなか連絡が来ない」 「送ってから半日以上経ってようやく返信が来ることが当たり前になっている」 「決して嫌ってい…',img:'https://assets.st-note.com/production/uploads/images/290431272/rectangle_large_type_2_292c730ea2bde22c4adf921daf5ada5d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n48ec6d437576'},
    {title:'好きになると急に饒舌になるMBTIランキング',excerpt:'「普段はそれほど話す方ではないのに、特定の人の前に立つと自分でも驚くほど言葉が次々と出てくる」 「何かを伝えたい、自分のことを知ってほしいという思いが強まり、気…',img:'https://assets.st-note.com/production/uploads/images/290128816/rectangle_large_type_2_73e0c51370bbbe2df09a4208941c405d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n3555a66c5816'},
    {title:'LINEより会いたい MBTIランキング',excerpt:'「文字だけのやり取りでは、相手の本当の気持ちが伝わらない気がする」 「長々とメッセージを打つより、直接顔を見て話した方が早くて分かりやすい」 「画面越しの会話で…',img:'https://assets.st-note.com/production/uploads/images/289323623/rectangle_large_type_2_2ff2654e82564f9c01d674c3fcb2d287.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n221be669038d'},
    {title:'好き避けしやすいMBTIランキング｜好きな人ほど逃げてしまう16タイプ',excerpt:'「全然話しかけてくれない… 嫌われてる？」 「目が合った瞬間、サッとそらされた… 脈なしだよね？」 「他の人と…',img:'https://assets.st-note.com/production/uploads/images/282377567/rectangle_large_type_2_df02fe08687418e4dab186ebd3d68d56.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nad3060876637'},
    {title:'脈なし確定？それとも考え中？既読無視しがちなMBTIランキング',excerpt:'「既読になって何日も経つのに、返事が来ない」「読んだなら一言くらい反応してくれてもいいのに…」「私のこと、どう…',img:'https://assets.st-note.com/production/uploads/images/283139964/rectangle_large_type_2_00ba0bfc30602703edecdd747e83b5af.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9fa05d63f314'},
    {title:'嫌われたと思ったら違った――未読無視しがちなMBTIランキング',excerpt:'「送ったメッセージが何日も未読のまま…」 「既読になってもすぐ返事が来ない」 「いつも自分からばかり送っている…',img:'https://assets.st-note.com/production/uploads/images/283139632/rectangle_large_type_2_7e6a14f5fcaa0dc0bceb0385b821b8d3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n983863e05735'},
    {title:'なぜか本命にだけ素っ気ない…好きな人にだけ冷たくなるMBTIランキング',excerpt:'「他の人には普通なのに、私にだけなんだかそっけない」 「みんなといるときは優しいのに、二人きりになると急に無口…',img:'https://assets.st-note.com/production/uploads/images/283614080/rectangle_large_type_2_931a1a14ca64588e9e14117c3d36566c.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n6543411a2647'},
    {title:'【恋愛 MBTI ランキング】16 タイプ全て！愛情表現がわかりやすいタイプ順｜言葉・行動・本音の伝わりやすさ完全解説',excerpt:'「好きって言ってくれない…」 「何を考えてるか全然わからない…」 「これって愛されてるの？それとも冷めてるの？…',img:'https://assets.st-note.com/production/uploads/images/279834454/rectangle_large_type_2_e474374faa43bd286497eafd57a80af1.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/na2680acdb10c'},
    {title:'わざと距離を置く？好きな人を試してしまうMBTIランキング',excerpt:'「わざと少し冷たくして、相手の反応を見てしまう」 「連絡を少し遅らせたり、本音と逆のことを言ったりしてしまう」…',img:'https://assets.st-note.com/production/uploads/images/285002340/rectangle_large_type_2_0e98c904c71ec10e872879794fbbd772.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc69434ab52c1'}
  ]},
  {category:'ハマり方・惹かれる相手',tag:'ハマり方',items:[
    {title:'なぜかDMが止まらない…SNSナンパされやすいMBTIランキング',excerpt:'「知らない人から急にDMが届く」 「プロフィールや投稿を見た人からアプローチされやすい」 ナンパ目的のDMを受けやすいタイプを分析…',img:'https://assets.st-note.com/production/uploads/images/292395084/rectangle_large_type_2_b73a557b0cb8c98c86a4bf83f77c554e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/na982e5182b4f'},
    {title:'会う前に好きになる？ネット恋愛しやすいMBTIランキング',excerpt:'「実際に会ったことがないのに、その人のことばかり考えてしまう」 「メッセージや通話だけで、すでに強く惹かれている自分がいる」…',img:'https://assets.st-note.com/production/uploads/images/292056816/rectangle_large_type_2_93de12272949424e7f88039dd1d6a24d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n2be92a6904dd'},
    {title:'不倫にハマりやすいMBTIランキング',excerpt:'「最初は軽い気持ちだったのに、いつの間にか深く感情が絡み合い、やめたくてもやめられなくなった」 「今の関係には安定があるけれど刺激が足りず、禁断の恋に新たな生き…',img:'https://assets.st-note.com/production/uploads/images/289632874/rectangle_large_type_2_7b35d36c92b09944c5b60d5bafa376cd.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n281647793659'},
    {title:'メンヘラに好かれやすい MBTI ランキング',excerpt:'「最初は優しく接していただけなのに、いつの間にか相手の全てを背負うような関係になってしまった」 「自分が何とかしてあげなければ、この人はダメになると感じて、…',img:'https://assets.st-note.com/production/uploads/images/288312694/rectangle_large_type_2_b4050087713dc07e83e5e6fd8a9eef7e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n46faf96d1c3a'},
    {title:'なぜかモテる――強オス感があるMBTIランキング',excerpt:'「特別にイケメンというわけでもないのに、なぜか周りから注目される」「何かあったときにこの人に任せれば大丈夫だと安心できる」 「近くにいるだけで落ち着く、自然…',img:'https://assets.st-note.com/production/uploads/images/287969962/rectangle_large_type_2_03895aac9e46597dd20101cbe6bae727.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ne409c3b24129'},
    {title:'セフレ関係から抜け出せない MBTI ランキング',excerpt:'「体の関係から始まったのに、いつの間にか心まで惹かれてしまい、やめたくてもやめられない」 「本当は恋人になりたいのに、今の関係がなくなるのが怖くて、自分から…',img:'https://assets.st-note.com/production/uploads/images/287814692/rectangle_large_type_2_98dc6a771b5054124ba345c3703c02b9.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb89f3037716e'},
    {title:'気づけば年上ばかり好きになる…年上女性に弱いMBTIランキング',excerpt:'「年上の女性が持つ落ち着いた雰囲気や、何でも受け止めてくれる包容力に、なぜか強く惹かれてしまう」 「同年代には…',img:'https://assets.st-note.com/production/uploads/images/286753209/rectangle_large_type_2_164c4d8f9a41c6388f82e3f20678f6b7.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n2e9851272886'},
    {title:'ダメ男を好きになりやすい MBTI ランキング｜なぜ問題のある相手に惹かれてしまうのか',excerpt:'「周りから見ると明らかに問題のある相手なのに、自分だけは良さが分かる気がする」 「最初は頼りなくて放っておけな…',img:'https://assets.st-note.com/production/uploads/images/285932937/rectangle_large_type_2_32d2d1d81062aced395175855ce25f2d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nd29819f269a1'},
    {title:'なぜか惹かれる――オレ様男子に弱いMBTIランキング',excerpt:'「周りに流されず自分の意見をはっきり持っている姿に惹かれる」 「少し強引なくらいリードしてくれると、安心してつ…',img:'https://assets.st-note.com/production/uploads/images/285514886/rectangle_large_type_2_4df5fc97ab0b261b971f5f2ce9cef288.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n114ca554cf13'},
    {title:'追う恋のほうが燃えるMBTIランキング',excerpt:'「自分から積極的に動いて手に入れる恋の方が、何倍も心が躍る」 「相手がなかなか振り向いてくれないほど、逆に気持…',img:'https://assets.st-note.com/production/uploads/images/285610533/rectangle_large_type_2_efe982201cb195960899bc4964bea615.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n06e2ead29518'},
    {title:'気付いたら沼ってる MBTI ランキング｜一度ハマるとなかなか抜け出せない理由',excerpt:'「最初はちょっと気になる程度だったのに、いつの間にか頭から離れなくなっている」 「自分でもおかしいと思いながら…',img:'https://assets.st-note.com/production/uploads/images/285295485/rectangle_large_type_2_101f820ccfa5817950f1bdb1717b825d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf09ee3167eeb'},
    {title:'好きだったのに急に無理になる？蛙化しやすいMBTIランキング',excerpt:'「昨日まで好きだったのに、なんで急に冷めたんだろう」 そんな自分に戸惑ったことはありませんか。 連絡が来るだけ…',img:'https://assets.st-note.com/production/uploads/images/286099062/rectangle_large_type_2_699aad4fb02d9681bef59e744380b9f6.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nae574147006d'},
    {title:'好きだったのに手に入った途端に冷めるMBTIランキング',excerpt:'「振り向かせるまでは毎日夢中で、何をするにも相手のことばかり考えていたのに、両思いになった途端に気持ちが落ち着…',img:'https://assets.st-note.com/production/uploads/images/286361331/rectangle_large_type_2_fa4dba391c65af0efa3e57b7964481cb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ncd3616592bc3'}
  ]},
  {category:'片思い・恋の進み方',tag:'片思い',items:[
    {title:'好きなのに言えない…告白できないMBTIランキング',excerpt:'「好きな人とは長い間仲良くしているのに、一言『好き』と言うだけのことがどうしてもできない」 「告白して関係が壊れるくらいなら、今のままでいいと思ってしまう」…',img:'https://assets.st-note.com/production/uploads/images/287368592/rectangle_large_type_2_4918afd1e2a4c46f78ecb2a4e75f57bb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7cd5b81fe6c9'},
    {title:'気づけば何年も好きだった…片思いが長くなりやすいMBTIランキング',excerpt:'「最初は少しの憧れだったのに、気づけば数年も同じ人を思い続けていた」 「告白する勇気もなく、かといって諦めるこ…',img:'https://assets.st-note.com/production/uploads/images/286523247/rectangle_large_type_2_600f118a8c5e1172b20171ef5caa27c3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n556c2865c09b'},
    {title:'【恋愛 MBTI ランキング】16 タイプ全て！恋愛が発展するのが遅いタイプ順｜信頼構築スピード・心の壁の厚さ',excerpt:'「出会ったその日に意気投合、すぐに付き合い始めた」 「友達として 10 年過ぎて、ようやくお互いの気持ちに気づ…',img:'https://assets.st-note.com/production/uploads/images/280415231/rectangle_large_type_2_32a922e85ece5a699965ea7d6c332934.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n512b4f1835e7'},
    {title:'友情から恋に落ちやすいMBTIランキング｜友達期間が長いほど本気になるタイプは？',excerpt:'「最初はただの友達だったのに、気づいたら目で追っている…」 「長く一緒にいるうちに、信頼がいつの間にか特別な気…',img:'https://assets.st-note.com/production/uploads/images/284175453/rectangle_large_type_2_677416bdd6a505cd55f7efe350e9d35b.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n31d107590ee3'},
    {title:'好き避け・考えすぎ・試し行動…MBTI別「恋愛拗らせ」ランキング',excerpt:'「好きなのに素直になれない」 「気持ちが大きくなるほど距離を取ってしまう」 「考えすぎて動けなくなる」 「良か…',img:'https://assets.st-note.com/production/uploads/images/283438203/rectangle_large_type_2_f0c955a11f9d6aea054eee62b424a152.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n3b0c13914760'},
    {title:'昨日まで好きだったのに…急に冷めるMBTIランキング',excerpt:'「最初はあんなに大好きだったのに、些細なことで一気に気持ちがなくなった」 「一度冷めたら、もう相手のことを見る…',img:'https://assets.st-note.com/production/uploads/images/286098164/rectangle_large_type_2_ce530b76dcb230407dd390424c507e23.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nebacf408de94'}
  ]},
  {category:'別れ・未練・元恋人',tag:'別れ・未練',items:[
    {title:'失恋を引きずりやすいMBTIランキング',excerpt:'「別れてから何ヶ月も経つのに、ふとした瞬間に相手のことを思い出して胸が痛む」 「新しい出会いがあっても、以前の恋と比べてしまい、前に進めない」 「別れた原因を何…',img:'https://assets.st-note.com/production/uploads/images/290862043/rectangle_large_type_2_52772143243ae4868aad96b1954ac956.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc87317c2e6c8'},
    {title:'別れた後にこっそり SNS を見ている MBTI ランキング｜相手の近況が気になってしまう理由',excerpt:'「もう終わった関係なのに、つい相手の SNS を検索してしまう」 「新しい投稿がないか、こっそり確認しては自分…',img:'https://assets.st-note.com/production/uploads/images/284743026/rectangle_large_type_2_b500166ebdd2aab02a0bad6662cb809a.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n8d28d4e40a7f'},
    {title:'「別れなければよかった…」後悔しやすいMBTIランキング',excerpt:'「自分から別れを切り出したのに、なぜか相手のことを思い出してしまう」 「これで正しいと頭では分かっているのに、…',img:'https://assets.st-note.com/production/uploads/images/284437114/rectangle_large_type_2_d8b3568c28c685e4e0824c6e3bdcbc95.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfbd192ab74c4'},
    {title:'実はまだ好きかも？元恋人を忘れられないMBTIランキング',excerpt:'「別れてだいぶ経つのに、ふとした瞬間に思い出してしまう…」 「新しい人と出会っても、どうしても前の恋人と比べて…',img:'https://assets.st-note.com/production/uploads/images/283844307/rectangle_large_type_2_7f475f493a8ae3d4d3b2c82ae340d6a5.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n6395e00693e8'},
    {title:'別れた瞬間、人は本性を出す――MBTI別「冷酷な別れ方」ランキング',excerpt:'恋愛の終わり方ほど、その人の本性が露わになる瞬間はありません。最後まで相手のことを思いやり、丁寧に向き合おうと…',img:'https://assets.st-note.com/production/uploads/images/281947109/rectangle_large_type_2_386d7d59fdb4ed323625ff61e2e170ff.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc9d732ab7300'},
    {title:'別れた後、本性が出る――MBTI別「元恋人の悪口を言う人」ランキング',excerpt:'別れた相手のことをどう扱うか――これほどその人の本質や性格の悪さ、未練の度合いがハッキリ出るポイントはありませ…',img:'https://assets.st-note.com/production/uploads/images/281947566/rectangle_large_type_2_bc392eca4c456d8b5cf4e6fcbfabac10.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n2ea85fb53d28'},
    {title:'別れた後の本性がヤバい！？元恋人の悪口・暴露が多いMBTIランキング',excerpt:'「別れたら綺麗さっぱり忘れる」 「周りの友達全員に『あいつ実はこんな奴だった』と言いふらす」 「悪口は言わない…',img:'https://assets.st-note.com/production/uploads/images/286097798/rectangle_large_type_2_cdff953ed57315b20145c3a56e40118e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nad143675a485'}
  ]},
  {category:'結婚・相性・恋愛の価値観',tag:'結婚・相性',items:[
    {title:'一生独身でも平気な MBTI ランキング',excerpt:'「誰かと一緒にいるより、一人で過ごす時間の方が何倍も充実している」 「結婚や恋愛には興味がないわけではないけれど、いなくても全く困らないし、むしろ自由で楽だ…',img:'https://assets.st-note.com/production/uploads/images/287532374/rectangle_large_type_2_e631cb4b08ad34f79261df4ec1efecca.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nbf8da2425fa2'},
    {title:'結婚するならこのタイプ！長続きするMBTIランキング',excerpt:'「恋愛は楽しい人がいいけど、結婚はまた別」 「長い人生、一緒に暮らしてもストレスが少ない相手がいい」 「人生の…',img:'https://assets.st-note.com/production/uploads/images/286097548/rectangle_large_type_2_2b2cdfce10a10d375ced5665953a2e66.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n0644ba9d4cdc'},
    {title:'結婚するならこのタイプ？浮気しないMBTIランキングTOP16',excerpt:'「恋愛は楽しいだけじゃなく、安心できる関係がいい」 「浮気のリスクが少ない人と付き合いたい」 「長く安定した関…',img:'https://assets.st-note.com/production/uploads/images/286097321/rectangle_large_type_2_37a84399133bf095282a59dad0a753a0.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n162e46347856'},
    {title:'【恋愛 MBTI ランキング】16 タイプ全て！恋人に求める条件が厳しいタイプ順｜理想の高さ・妥協できないポイント',excerpt:'「顔が良ければ他は目をつぶる」 「とりあえず付き合ってみて、合わなければ変えればいい」 「この条件が一つでも欠…',img:'https://assets.st-note.com/production/uploads/images/280400433/rectangle_large_type_2_d55d89a16e426cfa7f8c9a17b53e603e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9c8bd3f6278d'},
    {title:'【恋愛 MBTI ランキング】16 タイプ全て！恋人への依存度が低いタイプ順｜精神的自立度・自由の重視度',excerpt:'「恋人がいないと何も手につかない…」 「常に連絡がないと不安で仕方がない…」 「自分の価値は恋人がいるかどうか…',img:'https://assets.st-note.com/production/uploads/images/280395621/rectangle_large_type_2_c7ae9f0eb25f6074dea19eacb32056b7.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n48f9999c8f97'},
    {title:'【恋愛 MBTI ランキング】16 タイプ全て！揉めたとき「面倒くさい」タイプ順｜喧嘩・トラブル時の対応と本音',excerpt:'「ちょっとした行き違いが、いつまでも終わらない…」 「謝ってほしいだけなのに、理屈ばかり並べられる…」 「急に…',img:'https://assets.st-note.com/production/uploads/images/280394289/rectangle_large_type_2_b8ec5065dca06052c803bf0ff09172ce.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n130d5c5f3407'}
  ]},
  {category:'性格・本性',tag:'性格・本性',items:[
    {title:'楽しいはずなのにぐったり… 人混みデートが苦手な MBTI ランキング',excerpt:'「夏祭りに行ったのに、終わった後はぐったりして何もできない」 「花火大会やフェスは楽しそうだけど、人が多すぎると早く帰りたくなる」 「テーマパークやショッピングモールでは、気づかないうちに疲れがたまっている」…',img:'https://assets.st-note.com/production/uploads/images/293823849/rectangle_large_type_2_f3be9fef0a019b56c94b684b1c27bbe3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9cc0b0c74632'},
    {title:'SNSナンパしやすいMBTIランキング',excerpt:'「気になった人がいるとすぐにメッセージを送る」 「知らない人とでも気軽に話しかけて仲良くなる」 「出会いを求めて積極的に声をかける」…',img:'https://assets.st-note.com/production/uploads/images/293274462/rectangle_large_type_2_733744c7791a6976ef9e5bf534f187dd.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nebc568af6ac4'},
    {title:'匂わせ投稿しがちなMBTIランキング',excerpt:'「何のことか分かる人にだけ分かってほしい」 「言葉にはしないけれど、伝えたいことがある」 「特定の誰かや出来事を思わせるような書き方をしてしまう」…',img:'https://assets.st-note.com/production/uploads/images/292551706/rectangle_large_type_2_1bd7235f552741ac803ea4f92f0f459f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n6f0f7a43f84c'},
    {title:'好きな人を SNS で監視しがちな MBTI ランキング',excerpt:'「相手が投稿するたびにすぐ確認してしまう」 「オンラインになったタイミングや、いいねを付けた相手まで気になる」…',img:'https://assets.st-note.com/production/uploads/images/292397325/rectangle_large_type_2_0477f080bc150365110f47babae6f009.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n816ac22fab05'},
    {title:'恋愛で利用されやすい MBTI ランキング｜優しさや誠実さが損をする理由と特徴',excerpt:'「相手のために全力で尽くしているのに、感謝されるどころか都合よく扱われてしまう」 優しさや誠実さが強いほど、なぜか恋愛で損をしてしまう…',img:'https://assets.st-note.com/production/uploads/images/291968762/rectangle_large_type_2_726c0af59ad4b387e686e30c7a6943aa.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n37507aaf5cc0'},
    {title:'本命と遊びを分けやすいMBTIランキング',excerpt:'「この人は自分を本命として見てくれているのか、それともただの遊びなのか」 「二人きりのときと他の人がいるときで態度が違いすぎて、本音が分からない」 「特別な言葉…',img:'https://assets.st-note.com/production/uploads/images/291652750/rectangle_large_type_2_008f1bc5217a0794b574e77981ee16ef.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc028f709ecac'},
    {title:'恋人を放置しがちなMBTIランキング',excerpt:'「付き合っているのに、まるで一人でいるような寂しさを感じる」 「連絡も少なく、会う時間も作ろうとしない。自分のことが好きなのか分からなくなる」 「悪気はなさそう…',img:'https://assets.st-note.com/production/uploads/images/291164718/rectangle_large_type_2_3fcd3ca736ae2ed9e8bbb8a4d6f92536.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfba3008c7d25'},
    {title:'恋人を束縛しやすいMBTIランキング',excerpt:'「相手の行動や予定を全部把握していないと落ち着かない」 「他の人と親しく話しているのを見ると、不安や怒りが抑えられなくなる」 「自分がこれだけ尽くしているのだか…',img:'https://assets.st-note.com/production/uploads/images/289856384/rectangle_large_type_2_8998938d569ace186b030e1743fd9db3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n298058cbdca1'},
    {title:'独占欲が強い MBTI ランキング',excerpt:'「自分の大切な人やものは、自分だけのものにしておきたい」 「少しでも他の人に関心が向けられると、不安や不快な気持ちが湧いてくる」 「相手の行動や交友関係まで…',img:'https://assets.st-note.com/production/uploads/images/288608162/rectangle_large_type_2_1c92c9979e46c2a9d3a11a61672b0fdb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc5d68f051204'},
    {title:'恋愛で病みやすい MBTI ランキング',excerpt:'「少し連絡が来ないだけで、嫌われたのではないかと不安で眠れなくなる」 「相手の一言がいつまでも心に残り、自分を責めたり落ち込んだりしてしまう」 「恋愛のこと…',img:'https://assets.st-note.com/production/uploads/images/287965171/rectangle_large_type_2_d04a3ea91cbae445a8415db0e22d9a25.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nec82f475a08d'},
    {title:'実はかなり重い？嫉妬深いMBTIランキング',excerpt:'「好きな人が他の人と話しているのを見ただけで、胸が締めつけられるような気持ちになる」 「相手の予定や行動が見え…',img:'https://assets.st-note.com/production/uploads/images/287130141/rectangle_large_type_2_cd03f768994ef2b60d96b69f16dc74e0.jpeg?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n89125acfee0c'},
    {title:'不要になった瞬間、切られる――MBTI別「人間関係が冷酷な人」ランキング',excerpt:'「立場がなくなった途端、連絡が来なくなった…」 「得する相手にだけ愛想が良い人って何を考えてるの？」 「損得で…',img:'https://assets.st-note.com/production/uploads/images/282372607/rectangle_large_type_2_560b08ca9568ef7bc20808af2e3bffee.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n22dd0b42d95a'},
    {title:'絶対に敵にしてはいけないMBTIランキング｜根に持つ度・復讐心の強さを徹底暴露',excerpt:'「あの人、あんなにひどいことを言われたのに、すぐに笑顔で話してる… どうして気にしないの？」 「逆に、ちょっと…',img:'https://assets.st-note.com/production/uploads/images/281945895/rectangle_large_type_2_ae3f62d18a58b8019476365409058ded.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n55c187aaa66a'},
    {title:'表の顔と裏の顔が違いすぎるMBTIランキング｜一番計算高いタイプは誰？',excerpt:'「あの人、いつもニコニコしてるけど、本当は何を考えてるんだろう…」 「裏で自分の悪口言ってるの知ってるけど、表…',img:'https://assets.st-note.com/production/uploads/images/281946213/rectangle_large_type_2_7a2ff19419a25335e1c7e30e449f6b52.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb64a5725a19d'},
    {title:'【MBTI ランキング】16 タイプ全て！動物に好かれやすいタイプ順｜雰囲気・波長・安心感レベル',excerpt:'「なぜか動物が寄ってくる」 「犬や猫が自分だけには懐く」 「動物園に行くといつも人だかりができる」という人がい…',img:'https://assets.st-note.com/production/uploads/images/281796030/rectangle_large_type_2_0c6ffc07837cc4d355784a74c8c56dcb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ne36e1059d578'}
  ]}
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
  {type:'ESFP',url:'https://note.com/intj_analyst/n/nb30cac97bf89'},
  {type:'INTP',url:'https://note.com/intj_analyst/n/n94f3a1e31821',label:'飽き性なINTP男が夢中になり続ける女性'},
  {type:'ESTP',url:'https://note.com/intj_analyst/n/n9c903f89d694',label:'ESTP男を沼らせる方法｜離れられなくなる女性'},
  {type:'ENTJ',url:'https://note.com/intj_analyst/n/n9ccf9735132a',label:'ENTJ男が弱さを見せる唯一の女性'},
  {type:'INTJ',url:'https://note.com/intj_analyst/n/n3c175d294fdd',label:'INTJ男が本気になると見せる独占欲・執着'}
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
    {title:'INTJ男が本気になると見せる意外な独占欲・執着｜冷静な彼が手放したくない女性',excerpt:'「いつも冷静で、何事にも動じなくて、ヤキモチなんて一生かかないタイプに見える」 「他の男性と話していても、彼は全然気にしていない様子。私への興味が薄いのかな…」…',img:'https://assets.st-note.com/production/uploads/images/289314566/rectangle_large_type_2_f070307717408a43f0d9b537db660156.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n3c175d294fdd'},
    {title:'INTJ男に溺愛される女性とは？合理主義の彼が手放せなくなる存在の条件',excerpt:'「どうしてこんなに冷たいの？」 「LINE もそっけないし、『好き』なんて言葉、一度も聞いたことがない…」 「…',img:'https://assets.st-note.com/production/uploads/images/281946722/rectangle_large_type_2_41120671fc9111fbc8baccacbce4546a.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfbefa346cf88'},
    {title:'飽き性なINTP男が夢中になり続ける女性｜彼を退屈させない関係の作り方',excerpt:'「付き合えたときはあんなに夢中だったのに、最近なんだかそっけない…」 「ケンカもしてないし、嫌われた覚えもない。なのに、彼の熱量だけが静かに下がっていく気がする」…',img:'https://assets.st-note.com/production/uploads/images/289244852/rectangle_large_type_2_de8d6902c67ae5989739a6fe3cc972bb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n94f3a1e31821'},
    {title:'実は顔じゃない――INTP男が本気で惹かれる女性、恋愛対象外になる女性',excerpt:'「頭が良くて面白い話をしてくれるけど、何を考えているのかさっぱり分からない…」 「デート中も自分の世界に入っち…',img:'https://assets.st-note.com/production/uploads/images/281945781/rectangle_large_type_2_68059c01dce2c296771495344f8b6bb6.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n90001451cc43'},
    {title:'嫌われた？INTP男が急に返信しなくなる本当の理由',excerpt:'「嫌われちゃったのかな」 「もう脈なしだと思って、諦めようかと何度も思った」 「なのに数日後には何事もなかった…',img:'https://assets.st-note.com/production/uploads/images/285315013/rectangle_large_type_2_68ec514f0fa72f6d270f2fba75514195.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n38de9357fe77'},
    {title:'INTP男は好きな人ほど避ける――脈なしと勘違いされる恋心の正体',excerpt:'「頭は良いし、話していて面白いのに、私のことになると急に冷たくなる」 「普段はあんなに饒舌なのに、二人きりにな…',img:'https://assets.st-note.com/production/uploads/images/283135253/rectangle_large_type_2_a1fdec913b6553c495bee0eabd7c3290.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n68a36c18da09'},
    {title:'INTP 男に溺愛される方法｜理論派男子が「唯一無二」と認める女性になる',excerpt:'この記事では、何を考えているかわからない、恋愛に淡白に見える INTP 男性が、どんな女性に心を奪われ、時間も…',img:'https://assets.st-note.com/production/uploads/images/279834010/rectangle_large_type_2_b02efe0d5ac171bc8a3993f66152fb3e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n529c1357d391'},
    {title:'INTP 男の恋愛パターン｜好きになる流れ・付き合い方・あるある本音',excerpt:'この記事では、MBTI の中でも「哲学者」「論理学者」と呼ばれる INTP 男性の恋愛における思考回路、行動パ…',img:'https://assets.st-note.com/production/uploads/images/279833539/rectangle_large_type_2_85cb6725206d616112544b49419e646f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n99cb391192b9'},
    {title:'ENTJ男が弱さを見せる唯一の女性｜最強の彼が本音をさらけ出す相手とは',excerpt:'「いつも堂々としていて頼りになるけど、弱音なんて一度も聞いたことがない」 「何でも一人で完璧にこなしてしまうから、私が入り込む隙がない気がする」 「この人は、私…',img:'https://assets.st-note.com/production/uploads/images/289301240/rectangle_large_type_2_59ccc5747d71b1495f616d515cb15117.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9ccf9735132a'},
    {title:'なぜ彼女だけ特別扱いされるのか？ENTJ男が本気で惚れる女性の条件',excerpt:'「リーダーシップがあって頼りになるけど、何を考えているのか全然分からない…」 「強引だし、自分の意見を絶対に曲…',img:'https://assets.st-note.com/production/uploads/images/281946572/rectangle_large_type_2_6b6c2cab9ffa8a365859ba1b1e2f5387.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ne34603d2ac07'},
    {title:'ENTP男は追いかけたい――彼が手放せなくなる女性とは',excerpt:'「話は面白いけど、何を考えているか分からない」 「いつも議論好きで、からかわれてばかりで、本気なのか冗談なのか…',img:'https://assets.st-note.com/production/uploads/images/283094757/rectangle_large_type_2_f3309bd56f61a00f92c6ffb5949ceba3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nad4d3eb11812'},
    {title:'INFJ男は理解された瞬間に落ちる――彼が手放せなくなる女性とは',excerpt:'「とても優しくて、思いやりに溢れているのに、どこか一線を引かれているような、遠い存在に感じる」 「話していると…',img:'https://assets.st-note.com/production/uploads/images/283134884/rectangle_large_type_2_82acb6212363ac98a2e383d1974e941e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb8c5e4c23c2c'},
    {title:'INFP 男に溺愛される方法｜優しい理想主義者が「この子だけ」と決める女性',excerpt:'「気になる人が INFP だけど、何を考えているか分からない」 「もっと仲良くなりたいけど、どう接すれば良いの…',img:'https://assets.st-note.com/production/uploads/images/282528047/rectangle_large_type_2_f862ab902495bd86f137a7d604599781.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7e0435072a84'},
    {title:'ENFJ男の心を掴む方法｜尽くされる女性と恋愛対象外の女性の違い',excerpt:'「優しすぎて、自分が本命かどうか分からない」 「いつも私に合わせてくれるし、周りの人にも親切だけど、彼自身は何…',img:'https://assets.st-note.com/production/uploads/images/283086356/rectangle_large_type_2_d571043e8d0b5a144fc521e2a784aa04.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n06e8e87318cc'},
    {title:'ENFP 男に溺愛される方法｜情熱的な理想家が「唯一無二」と感じる女性',excerpt:'「彼はいつも楽しそうだけど、自分はどう思われているの？」 「もっと深く繋がりたいのに、話題が次々変わって心に届…',img:'https://assets.st-note.com/production/uploads/images/282683371/rectangle_large_type_2_72a93c033ec500ccdfbba55327d223fc.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nbc70089a482b'},
    {title:'ISTJ男の本音完全解説｜好きな女性への態度・脈ありサイン・落とし方',excerpt:'「真面目で誠実なのは分かるけど、何を考えているのか全然分からない…」 「デートもいつも同じような感じで、ドキド…',img:'https://assets.st-note.com/production/uploads/images/281946381/rectangle_large_type_2_2a49e321aa4266b8beb068d6c84004cb.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n4ee8bed2f56f'},
    {title:'ISTJ男は好きな人ほど慎重になる――脈なしと勘違いされる本気の恋心',excerpt:'「いつも冷静で真面目で、周りからも信頼されている人なのに、私にだけなんだかよそよそしい」 「仕事や約束事はすご…',img:'https://assets.st-note.com/production/uploads/images/283136741/rectangle_large_type_2_2e0ae4853b5a28bcfa71d4435dd795da.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nc1c642f6d0bc'},
    {title:'ISFJ男に溺愛される女性とは？彼が生涯守りたいと思う本命の特徴',excerpt:'「とにかく優しくて、いつも私のことを最優先に考えて動いてくれるけど、これって本命だから？ それとも誰にでもこう…',img:'https://assets.st-note.com/production/uploads/images/283132552/rectangle_large_type_2_1e34c606e410ffaf6f4e6a9d652d894f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7601f9712a7c'},
    {title:'なぜ彼女は妻に選ばれたのか？ESTJ男が生涯を共にしたい女性の条件',excerpt:'「真面目でしっかりしていて、頼りになるけど、どこか厳しくて近寄りがたい」 「何を考えているのか分からないし、愛…',img:'https://assets.st-note.com/production/uploads/images/283129563/rectangle_large_type_2_0d6766f205b7efc682abe53569824be5.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n41a385bef40b'},
    {title:'ESFJ 男に溺愛される方法｜温かな奉仕者が安心して全てを捧げたくなる女性',excerpt:'「優しすぎて、何を考えているか分からない」 「いつも私のために動いてくれるし、気を遣ってくれるけど、彼自身は何…',img:'https://assets.st-note.com/production/uploads/images/283105376/rectangle_large_type_2_5181ada2724eb95e2e71b6d48c045632.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7f58d1b3eae9'},
    {title:'感情を見せないISTP男が本命にだけ見せる態度｜無口な彼の"特別扱い"の見抜き方',excerpt:'「いつもクールで表情が変わらないから、好かれているのか嫌われているのか、まったく分からない」 「ISTPは行動で愛を示すって聞くけど、その行動が本命だけに向けたものなのか、確信が持てない」…',img:'https://assets.st-note.com/production/uploads/images/293490492/rectangle_large_type_2_7bdbe3585893f2bfce3ad5dd34960a35.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf16f58be9764'},
    {title:'無口なISTP男が離れなくなる女性――彼が心を許した本命の特徴',excerpt:'「見た目は格好いいし、何でもできそうな雰囲気があるのに、とにかく無口で、何を考えているのかさっぱり分からない」…',img:'https://assets.st-note.com/production/uploads/images/283134258/rectangle_large_type_2_b5d57383f03010c0a737230b4dacd6dd.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nd86e4c048c06'},
    {title:'誰にでも優しいISFP男が本命にだけ見せるサイン｜"優しいだけ"と"好き"の決定的な違い',excerpt:'「すごく優しくて一緒にいると落ち着くけど、彼は誰にでも優しいから、私が特別なのか分からない」 「愛情表現が控えめで、自分のことも話してくれないから、本当に好かれているのか確信が持てない」…',img:'https://assets.st-note.com/production/uploads/images/293498319/rectangle_large_type_2_0864f340aca45ad6958067e53bfbe7ec.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb73aec63f1e7'},
    {title:'なぜ彼女だけ心を許されたのか？ISFP男が深く愛する女性の条件',excerpt:'「すごく優しくて、一緒にいると心が落ち着くけど、何を考えているのか全然分からない」 「自分のことをほとんど話し…',img:'https://assets.st-note.com/production/uploads/images/283132454/rectangle_large_type_2_44084b097717016dec28a2085953563d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf90247b71f84'},
    {title:'ESTP男を沼らせる方法｜自由な彼が離れられなくなる女性の特徴',excerpt:'「付き合えたのに、いつまでも彼を自分のものにできた気がしない」 「一緒にいるときは最高に楽しいのに、離れた途端、彼はすぐ別の楽しいことを見つけて、私のことなんて…',img:'https://assets.st-note.com/production/uploads/images/289288346/rectangle_large_type_2_54d9dd904e571c4cff81ee280a1d3699.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9c903f89d694'},
    {title:'ESTP男の本命になる方法｜遊び相手と本命女性の決定的な違い',excerpt:'「パワフルで格好いいし、何でもこなしちゃうけど、行動が予測できなくて不安になる」 「いつも自由に動き回っていて…',img:'https://assets.st-note.com/production/uploads/images/283128463/rectangle_large_type_2_b06c4782c25c72062e1e4fccd68b7244.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nfceac847c4f8'},
    {title:'ESFP 男に溺愛される方法｜今を生きる表現者が夢中になる、心を掴む女性',excerpt:'「明るくて楽しい人だけど、真剣な話が全然できない」 「いつも周りに人が集まっていて、自分って彼にとって特別な存…',img:'https://assets.st-note.com/production/uploads/images/283099431/rectangle_large_type_2_f782247cb8dbd2963d97e0afa982c42a.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nb30cac97bf89'}
  ]},
  {category:'タイプ別｜あなたの恋愛傾向（女性）',tag:'あなたの傾向',items:[
    {title:'頭では分かっているのに恋愛だけうまくいかない――INTJ女性が幸せになれない本当の理由',excerpt:'なんで私、恋愛だけこんなに下手なんだろう。 頭では「この人はやめた方がいい」と分かっていた。 周りから見れば明…',img:'https://assets.st-note.com/production/uploads/images/285940911/rectangle_large_type_2_30c58d164279a5fb219648007957fce3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n5e4d6eb0a254'},
    {title:'好きになるほど考えすぎる――INTP女性が恋愛を拗らせやすい理由',excerpt:'なんで私はこんなに考えてしまうんだろう。 返信が来ない。 それだけなのに、もう何時間も理由を考えている。 忙し…',img:'https://assets.st-note.com/production/uploads/images/285943124/rectangle_large_type_2_200bf7a3ec83e6de6bccb846a9b8eef0.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n5eef416fdf6f'},
    {title:'恋愛だけ思い通りにならない――ENTJ女性が苦戦しやすい理由',excerpt:'仕事なら分かる。 頑張れば結果が出る。 問題があれば改善できる。 目標があれば達成できる。 うまくいかなければ…',img:'https://assets.st-note.com/production/uploads/images/286033028/rectangle_large_type_2_83dd359aeb1e95f2a24feaec56a872e3.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n3cf721ee03ea'},
    {title:'追われると冷める、追うと燃える――ENTP女性の恋愛が難しくなる理由',excerpt:'なんで私はこうなんだろう。 好きだったはずなのに。 あんなに会いたかったのに。 あんなにLINEを待っていたの…',img:'https://assets.st-note.com/production/uploads/images/286029183/rectangle_large_type_2_1ace2be471ab6b24a529670c344c7c7c.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf0c7ae903e18'},
    {title:'「彼なら変われる」と信じてしまう――INFJ女性が苦しい恋を手放せない理由',excerpt:'本当はもう分かっている。 この恋が私を幸せにしていないことくらい。 彼が変わらないことも。 何度期待しても、ま…',img:'https://assets.st-note.com/production/uploads/images/286015544/rectangle_large_type_2_e117013bc09f8d3ad2ae5d09feee16f7.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf472dfb6c623'},
    {title:'「私だけは理解できる」が危険――INFP女性がダメ男に惹かれやすい理由',excerpt:'どうして私はいつもこうなんだろう。 周りはみんな反対している。 友達も家族も、「その人やめた方がいいよ」と言う…',img:'https://assets.st-note.com/production/uploads/images/286019135/rectangle_large_type_2_d521338467c9b9609af5c29b75b7e52d.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n8cd00438b91b'},
    {title:'好きな人を優先しすぎる――ENFJ女性が恋愛で損をしやすい理由',excerpt:'また私ばっかりだ。 会う予定を合わせるのも私。 連絡するのも私。 相手が落ち込んでいたら励ますのも私。 相手の…',img:'https://assets.st-note.com/production/uploads/images/286026353/rectangle_large_type_2_3b2fa79ef41c099ac9ffc8b840783107.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ndd7de83a3e20'},
    {title:'恋に落ちるのは早いのに続かない――ENFP女性が恋愛で迷子になる理由',excerpt:'まただ。 最初はあんなに好きだったのに。 会えるだけで嬉しくて、LINEが来るだけで幸せで、「この人かもしれな…',img:'https://assets.st-note.com/production/uploads/images/286022529/rectangle_large_type_2_bdec01da33a5ea6716eaa8d4450d15f1.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n20ca6f3e9315'},
    {title:'慎重すぎて恋を逃す――ISTJ女性が恋愛で後悔しやすい理由',excerpt:'今でも思い出す。 あの時、もう少し勇気を出していたらどうなっていたんだろう。 嫌われたわけじゃなかった。 脈な…',img:'https://assets.st-note.com/production/uploads/images/286074726/rectangle_large_type_2_c31d1623dc6a365e598591ac200f6b8e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/nf1b35b99aaff'},
    {title:'気づけばいつも尽くしている――ISFJ女性が都合のいい女性になりやすい理由',excerpt:'また私ばっかりだ。 会いたい時に会うのは相手の都合。 連絡するのも私。 予定を合わせるのも私。 相手が落ち込ん…',img:'https://assets.st-note.com/production/uploads/images/286072307/rectangle_large_type_2_c1dfc88c8976fb9527fc457846fd1f42.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n094e03a3fc66'},
    {title:'ダメ男は嫌いなのになぜか引き寄せる――ESTJ女性の恋愛の落とし穴',excerpt:'意味が分からない。 私は昔から、だらしない人が嫌いだった。 約束を守らない人も嫌い。 仕事を頑張らない人も嫌い…',img:'https://assets.st-note.com/production/uploads/images/286085908/rectangle_large_type_2_2af7ea08f03bc5e1c24ea20d1c413d4e.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/ncac5194b7898'},
    {title:'「必要とされたい」が止まらない――ESFJ女性が苦しい恋を続けてしまう理由',excerpt:'本当は分かっている。 この恋愛が私を幸せにしていないことくらい。 連絡が来るたびに振り回されていることも。 相…',img:'https://assets.st-note.com/production/uploads/images/286084217/rectangle_large_type_2_af79772203cc1f4ed63b996bfcacf008.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n7cdf00ad9cdd'},
    {title:'恋愛だけは面倒になる――ISTP女性が距離を取ってしまう理由',excerpt:'好きじゃないわけじゃない。 むしろ好きだと思う。 会えば楽しいし、一緒にいると安心する。 この人でいいと思って…',img:'https://assets.st-note.com/production/uploads/images/286082182/rectangle_large_type_2_fc5217fd6d69d641f60299d08154551f.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n25c05c7672f6'},
    {title:'嫌われるくらいなら我慢する――ISFP女性が恋愛で苦しくなる理由',excerpt:'別に、重いことを言いたかったわけじゃない。 ただ少し寂しかっただけ。 少し会いたかっただけ。 少しだけ、「私の…',img:'https://assets.st-note.com/production/uploads/images/286079284/rectangle_large_type_2_1a1ffa45c197daa158e07737d095d763.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n56410f928faf'},
    {title:'刺激的な恋ばかり選んでしまう――ESTP女性が安定した恋愛を難しくする理由',excerpt:'最初は最高だった。 何をするにも楽しかった。 会うたびにドキドキした。 連絡が来るだけで嬉しかった。 この人と…',img:'https://assets.st-note.com/production/uploads/images/286090304/rectangle_large_type_2_29d011c5f3996fadad48c7fd62755b26.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n9fef45b19f7d'},
    {title:'恋は楽しいはずなのに傷つく――ESFP女性が同じ失敗を繰り返す理由',excerpt:'もう何回目だろう。 今度こそ違うと思った。 今度こそ幸せになれると思った。 でもまた同じだった。 最初は楽しか…',img:'https://assets.st-note.com/production/uploads/images/286088799/rectangle_large_type_2_564eb19dc956bc5528b5eb9be0e163f5.png?fit=bounds&quality=85&width=480',url:'https://note.com/intj_analyst/n/n23f7ac68d75e'}
  ]}
];
