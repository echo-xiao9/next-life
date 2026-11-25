// 此刻地球上活着的个体数量（不是每年出生数）。
// conf: 'high' 有普查/统计；'mid' 有同行评审估计；'low' 只有数量级粗估。
// 这张表是整个游戏的“投胎概率”。物种脚本在 species/*.js 里，用 id 对应。
window.ODDS = [
  { id: 'copepod',        pop: 1.0e21,  conf: 'low',  group: 'invert', src: '常被转引的数量级估计（Geoff Boxshall 给出约 1.3×10²¹），没有同行评审的普查' },
  { id: 'nematode',       pop: 4.4e20,  conf: 'mid',  group: 'invert', src: 'van den Hoogen et al. 2019, Nature（土壤线虫）' },
  { id: 'mite',           pop: 4.0e18,  conf: 'low',  group: 'invert', src: 'Rosenberg et al. 2023, Science Advances：土壤节肢动物约 10¹⁹ 只，以螨和跳虫为主；两者如何拆分为粗估' },
  { id: 'springtail',     pop: 4.0e18,  conf: 'low',  group: 'invert', src: 'Rosenberg et al. 2023, Science Advances；拆分为粗估' },
  { id: 'aphid',          pop: 1.4e18,  conf: 'low',  group: 'invert', src: '“其他昆虫”约 10¹⁸ 量级的粗估，以蚜虫为代表' },
  { id: 'mayfly',         pop: 1.0e17,  conf: 'low',  group: 'invert', src: '无可靠全球数量；作为水生昆虫代表的示意性份额' },
  { id: 'ant',            pop: 2.0e16,  conf: 'mid',  group: 'invert', src: 'Schultheiss et al. 2022, PNAS（约 2 京只）' },
  { id: 'lanternfish',    pop: 1.0e15,  conf: 'low',  group: 'fish',   src: 'Irigoien et al. 2014, Nature Communications：中层鱼生物量中位数约 110–150 亿吨，按个体重量折算的粗估' },
  { id: 'krill',          pop: 8.0e14,  conf: 'mid',  group: 'invert', src: 'Atkinson et al. 2009, Deep-Sea Research I：约 8×10¹⁴ 只（生物量约 3.79 亿吨，1926–2004 年平均）' },
  { id: 'mosquito',       pop: 1.1e14,  conf: 'low',  group: 'invert', src: '流行估计（约 110 万亿只），无系统普查' },
  { id: 'sardine',        pop: 1.0e13,  conf: 'low',  group: 'fish',   src: '野生鱼（中层鱼以外）的数量级粗估，以沙丁鱼等饵料鱼为代表' },
  { id: 'honeybee',       pop: 2.5e12,  conf: 'low',  group: 'invert', src: 'FAO：全球约 9 千万个人工蜂群 × 每群 2–3 万只' },
  { id: 'farmed_shrimp',  pop: 2.3e11,  conf: 'low',  group: 'invert', src: 'Waldhorn & Autric（Rethink Priorities）：养殖场里任一时刻约 2300 亿只（90% 区间 1500–3700 亿）' },
  { id: 'farmed_carp',    pop: 1.1e11,  conf: 'low',  group: 'fish',   src: 'Fishcount：任一时刻约 730–1800 亿条养殖鱼（2015 年数据），以鲤科鱼为代表' },
  { id: 'sparrow',        pop: 3.5e10,  conf: 'mid',  group: 'bird',   src: 'Callaghan et al. 2021, PNAS：野生鸟约 500 亿只；留鸟部分以家麻雀为代表' },
  { id: 'swallow',        pop: 1.5e10,  conf: 'mid',  group: 'bird',   src: 'Callaghan et al. 2021, PNAS；候鸟部分以家燕为代表' },
  { id: 'broiler',        pop: 1.6e10,  conf: 'mid',  group: 'bird',   src: 'FAO（2021）：存栏鸡约 259 亿只，其中肉鸡为主；肉鸡与蛋鸡的拆分为估计' },
  { id: 'rat',            pop: 1.0e10,  conf: 'low',  group: 'mammal', src: '野生鼠类的数量级粗估，以褐家鼠为代表' },
  { id: 'human',          pop: 8.2e9,   conf: 'high', group: 'mammal', src: 'UN World Population Prospects 2024' },
  { id: 'layer_hen',      pop: 7.9e9,   conf: 'mid',  group: 'bird',   src: 'Compassion in World Farming 2023 综述：2020 年全球约 79 亿只蛋鸡' },
  { id: 'cattle',         pop: 1.5e9,   conf: 'high', group: 'mammal', src: 'FAO（2021）：约 15 亿头' },
  { id: 'sheep',          pop: 1.3e9,   conf: 'high', group: 'mammal', src: 'FAO（2021）：约 13 亿只' },
  { id: 'pig',            pop: 1.0e9,   conf: 'high', group: 'mammal', src: 'FAO（2021）：约 10 亿头' },
  { id: 'dog',            pop: 9.0e8,   conf: 'low',  group: 'mammal', src: 'Gompper（2014）估计全球近 10 亿只狗；有综述估计约 3/4 自由放养或流浪；此处取 9 亿' },
  { id: 'cat',            pop: 6.0e8,   conf: 'low',  group: 'mammal', src: '约 6 亿只（家猫 + 流浪猫）的常见估计' },
  { id: 'sea_turtle',     pop: 3.0e6,   conf: 'low',  group: 'reptile',src: '绿海龟：没有可靠的全球总数（Seminoff 2004 的评估只统计筑巢雌龟指数），含幼龟的粗估' },
  { id: 'elephant',       pop: 4.15e5,  conf: 'mid',  group: 'mammal', src: 'IUCN 非洲象专家组 2016：约 41.5 万头' },
  { id: 'greenland_shark',pop: 1.0e5,   conf: 'low',  group: 'fish',   src: '没有可靠数量；此处假设 10 万条' },
  { id: 'blue_whale',     pop: 1.0e4,   conf: 'mid',  group: 'mammal', src: 'IUCN 红色名录（Cooke 2018）：成年个体约 5000–15000 头，总数约 1–2.5 万' },
  { id: 'panda',          pop: 2.6e3,   conf: 'high', group: 'mammal', src: '第四次全国大熊猫调查（2015）：野生 1864 只（2024 年官方称约 1900 只）；截至 2023 年底圈养 728 只' },
  // ---- 第二批物种 ----
  { id: 'termite',        pop: 1.0e17,  conf: 'low',  group: 'invert', src: 'Rosenberg et al. 2023：白蚁约占土壤节肢动物生物量（约 2 亿吨干重）的 40%；按每只工蚁约 1 毫克干重折算，约 10¹⁷ 只（粗估）' },
  { id: 'earthworm',      pop: 5.0e15,  conf: 'low',  group: 'invert', src: 'Phillips et al. 2019, Science：各地典型密度为每平方米 5–150 条；按约 50 条 × 约 1 亿平方公里土地粗算，约 5×10¹⁵' },
  { id: 'spider',         pop: 5.0e15,  conf: 'low',  group: 'invert', src: 'Nyffeler & Birkhofer 2017：全球蜘蛛生物量约 2500 万吨；按每只平均约 5 毫克折算，约 5×10¹⁵（粗估）' },
  { id: 'housefly',       pop: 1.0e13,  conf: 'low',  group: 'invert', src: '没有任何全球估计；此处按数量级假设 10¹³' },
  { id: 'squid',          pop: 2.0e11,  conf: 'low',  group: 'invert', src: '全球鱿鱼没有数量统计；仅南大洋鱿鱼存量就曾被估计高达 1 亿吨（1994 年按捕食者摄食量推算），按每只数百克折算为 10¹¹ 量级（粗估）' },
  { id: 'octopus',        pop: 1.0e9,   conf: 'low',  group: 'invert', src: '没有数量统计；按普通章鱼年渔获约 38 万吨、每只 1–2 公斤推测存量的数量级（粗估）' },
  { id: 'frog',           pop: 1.0e11,  conf: 'low',  group: 'amphibian', src: '两栖动物没有全球个体数统计（已描述约 8700 种）；此处按数量级假设 10¹¹' },
  { id: 'salmon',         pop: 5.0e8,   conf: 'low',  group: 'fish',   src: 'Ruggerone et al. 2010：1990–2005 年野生粉红、大麻哈、红大麻哈鲑成鱼平均每年约 5 亿条（不含幼鱼）' },
  { id: 'duck',           pop: 1.1e9,   conf: 'mid',  group: 'bird',   src: 'FAO（转引）：全球存栏鸭约 11 亿只，其中中国约 6.7 亿只（2021）' },
  { id: 'goat',           pop: 1.13e9,  conf: 'high', group: 'mammal', src: 'FAOSTAT（2020）：约 11.3 亿只' },
  { id: 'pigeon',         pop: 2.6e8,   conf: 'low',  group: 'bird',   src: 'BirdLife（引 Rich et al. 2004）：原鸽（含野生与野化）约 2.6 亿只' },
  { id: 'penguin',        pop: 5.5e5,   conf: 'mid',  group: 'bird',   src: 'Fretwell et al. 2012, PLoS ONE：卫星普查约 23.8 万个繁殖对；含幼鸟约 50–60 万只' },
  { id: 'bat',            pop: 5.0e10,  conf: 'low',  group: 'mammal', src: 'Greenspoon et al. 2023, PNAS：蝙蝠约占野生陆地哺乳动物个体数的三分之二；转引估计约 500 亿只' },
  { id: 'wolf',           pop: 2.25e5,  conf: 'mid',  group: 'mammal', src: 'IUCN 2018（转引）：灰狼约 20–25 万只' },
  { id: 'chimpanzee',     pop: 2.0e5,   conf: 'mid',  group: 'mammal', src: 'WWF：野生黑猩猩约 15–25 万只' },
  { id: 'lion',           pop: 2.3e4,   conf: 'mid',  group: 'mammal', src: 'CMS（引 African Lion Database 2023）：非洲约 2.3 万只成年与亚成年狮子' },
];

window.GROUPS = {
  invert:  '无脊椎动物',
  fish:    '鱼',
  bird:    '鸟',
  mammal:  '哺乳动物',
  reptile: '爬行动物',
  amphibian: '两栖动物',
};

;
// Per-species taxonomy, body size and (for animals with no fitting emoji) a pixel sprite.
// Sprites: rows of characters; '.' is transparent, every other character is looked up in `pal`.
window.META = {
  copepod: {
    taxon: '节肢动物门 › 甲壳亚门 › 桡足纲（Copepoda）', size: '成体体长约 2–3 毫米',
    note: '桡足类和磷虾都是甲壳动物，但不是一类：桡足类自成一纲，只有米粒大小；磷虾属于软甲纲，和虾、蟹更近。',
    sprite: ['AA............AA', '..AA........AA..', '....AA....AA....', '......AOOA......', '.....OOOOOO.....', '.....OOLLOO.....',
      '.....OOLLOO.....', '......OLLO......', '......OOOO......', '.......OO.......', '.......OO.......', '......T..T......'],
    pal: { A: '#b8401e', O: '#e5582b', L: '#f3c14a', T: '#d9774e' },
  },
  krill: {
    taxon: '节肢动物门 › 甲壳亚门 › 软甲纲 › 磷虾目（Euphausiacea）', size: '成体体长约 6 厘米',
    note: '磷虾不是桡足类。它属于软甲纲，和虾、蟹同纲，体长是桡足类的二三十倍。',
    sprite: ['A...............', '.A..............', '..ACCCCRCCC.....', '..EECCCCCCRCC...', '..EECCRCCCCCCCC.', '...CCCCCCCCCCRCT',
      '....L.L.L.L.L.TT', '....L.L.L.L.....'],
    pal: { A: '#c8463a', C: '#f08a7a', R: '#c8463a', E: '#161616', L: '#e9a596', T: '#d9776a' },
  },
  nematode: {
    taxon: '线虫动物门（Nematoda）', size: '成虫体长约 1 毫米',
    note: '线虫不是蚯蚓。蚯蚓是环节动物，身体分节；线虫没有体节，通常细得肉眼看不见。',
    sprite: ['................', '..........WWW...', '.........W...W..', '........W.....W.', '........W.......', '.........W......',
      '..........W.....', '...........W....', '...........W....', '..W.......W.....', '...WW...WW......', '.....WWW........'],
    pal: { W: '#c79a63' },
  },
  mite: {
    taxon: '节肢动物门 › 蛛形纲 › 甲螨亚目（Oribatida）', size: '体长约 0.2–1 毫米',
    note: '螨和蜘蛛同属蛛形纲，有八条腿，不是昆虫。',
    sprite: ['................', '...L........L...', '....L.BBBB.L....', '.....BBBBBB.....', '..LLBBHHBBBBLL..', '.....BBHBBBB....',
      '..LLBBBBBBBBLL..', '.....BBBBBB.....', '....L.BBBB.L....', '...L........L...'],
    pal: { B: '#5a3a22', H: '#9a6a3e', L: '#3b2616' },
  },
  springtail: {
    taxon: '节肢动物门 › 六足总纲 › 弹尾纲（Collembola）', size: '体长约 1–3 毫米',
    note: '跳虫有六条腿，但现在一般不把它算作昆虫；腹部下面折着一根“弹器”，靠它弹跳。',
    sprite: ['................', 'AA..............', '..A.............', '...GGGGGGGGG....', '..GDGGGGGGGGGG..', '..GGGGGGGGGGGGG.',
      '...L.L.L...FFFF.', '...L.L.L..FF....'],
    pal: { A: '#4b566a', G: '#7d8aa0', D: '#2b3240', L: '#4b566a', F: '#a7b2c4' },
  },
  mayfly: {
    taxon: '节肢动物门 › 昆虫纲 › 蜉蝣目（Ephemeroptera）', size: '成虫体长约 1–2 厘米（不含尾丝）',
    sprite: ['.....WW.........', '....WWWW........', '...WWWWW........', '..WWWWWW........', '...BBBBBBBBBTT...', '..EBBBBBBBBB.TTT.',
      '...L.L.L......TTT', '..L..L..L.......'],
    pal: { W: '#d9e6ee', B: '#c9a25a', E: '#2b2b2b', L: '#8a6b33', T: '#b89a5e' },
  },
  termite: {
    sprite: ['....A....A......', '.....A..A.......', '......HH........', '.....HHHH.......', '......TT........', '....LTTTTL......',
      '.....TTTT.......', '....LBBBBL......', '....BBBBBB......', '...LBBBBBBL.....', '....BBBBBB......', '.....BBBB.......'],
    pal: { A: '#8a6a3e', H: '#b5823c', T: '#efe3c8', B: '#f3ead6', L: '#8a6a3e' },
  },
  aphid:          { taxon: '节肢动物门 › 昆虫纲 › 半翅目 › 蚜科', size: '体长约 2–4 毫米' },
  ant:            { taxon: '节肢动物门 › 昆虫纲 › 膜翅目 › 蚁科', size: '工蚁体长约 3 毫米' },
  honeybee:       { taxon: '节肢动物门 › 昆虫纲 › 膜翅目 › 蜜蜂科', size: '工蜂体长约 1.2 厘米' },
  mosquito:       { taxon: '节肢动物门 › 昆虫纲 › 双翅目 › 蚊科', size: '体长约 5 毫米' },
  farmed_shrimp:  { taxon: '节肢动物门 › 甲壳亚门 › 软甲纲 › 十足目 › 对虾科', size: '收获时体长约 10–15 厘米' },
  lanternfish:    { taxon: '脊索动物门 › 辐鳍鱼纲 › 灯笼鱼目', size: '多数体长 2–15 厘米' },
  sardine:        { taxon: '脊索动物门 › 辐鳍鱼纲 › 鲱形目 › 鲱科', size: '成鱼体长约 15–25 厘米' },
  farmed_carp:    { taxon: '脊索动物门 › 辐鳍鱼纲 › 鲤形目 › 鲤科', size: '出塘时约 1–2 公斤' },
  greenland_shark:{ taxon: '脊索动物门 › 软骨鱼纲 › 角鲨目 › 睡鲨科', size: '成年体长约 4–5 米' },
  sea_turtle:     { taxon: '脊索动物门 › 爬行纲 › 龟鳖目 › 海龟科', size: '出壳时约 5 厘米，成年背甲约 1 米' },
  sparrow:        { taxon: '脊索动物门 › 鸟纲 › 雀形目 › 雀科', size: '体长约 16 厘米，约 30 克' },
  swallow:        { taxon: '脊索动物门 › 鸟纲 › 雀形目 › 燕科', size: '体长约 17–19 厘米，约 20 克' },
  broiler:        { taxon: '脊索动物门 › 鸟纲 › 鸡形目 › 雉科', size: '出栏时约 2.5 公斤' },
  layer_hen:      { taxon: '脊索动物门 › 鸟纲 › 鸡形目 › 雉科', size: '约 1.5–2 公斤' },
  rat:            { taxon: '脊索动物门 › 哺乳纲 › 啮齿目 › 鼠科', size: '体长约 20–25 厘米（不含尾），约 300 克' },
  human:          { taxon: '脊索动物门 › 哺乳纲 › 灵长目 › 人科', size: '成年身高约 1.6–1.7 米' },
  cattle:         { taxon: '脊索动物门 › 哺乳纲 › 鲸偶蹄目 › 牛科', size: '成年约 400–800 公斤' },
  sheep:          { taxon: '脊索动物门 › 哺乳纲 › 鲸偶蹄目 › 牛科', size: '成年约 45–100 公斤' },
  pig:            { taxon: '脊索动物门 › 哺乳纲 › 鲸偶蹄目 › 猪科', size: '出栏时约 110–120 公斤' },
  dog:            { taxon: '脊索动物门 › 哺乳纲 › 食肉目 › 犬科', size: '体型差异极大，常见 10–30 公斤' },
  cat:            { taxon: '脊索动物门 › 哺乳纲 › 食肉目 › 猫科', size: '约 4 公斤' },
  elephant:       { taxon: '脊索动物门 › 哺乳纲 › 长鼻目 › 象科', size: '成年雌象约 3 吨，雄象约 6 吨' },
  panda:          { taxon: '脊索动物门 › 哺乳纲 › 食肉目 › 熊科', size: '出生约 100 克，成年约 80–120 公斤' },
  blue_whale:     { taxon: '脊索动物门 › 哺乳纲 › 鲸偶蹄目 › 须鲸科', size: '成年体长约 24–30 米' },
};

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'nematode',
  name: '土壤线虫',
  en: 'Soil nematode',
  sci: '小杆线虫（以秀丽隐杆线虫 Caenorhabditis elegans 为例）',
  emoji: '🪱',
  scene: 'soil',
  kind: 'wild',
  tagline: '地上每有一个人，地下就有大约 570 亿条线虫',

  birth: {
    sex: [['雌雄同体', 999], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一只烂苹果的果肉里', 4, { food: +20 }],
        ['一根腐烂的植物茎秆里', 3, { food: +10 }],
        ['温带草地的表层土壤', 3, {}],
        ['一堆堆肥的边缘', 2, { food: +15, risk: 1.1 }],
      ]},
      { label: '品系', options: [
        ['实验室培养皿里传了几百代的标准品系', 4, { food: +5, set: 'lab_strain' }],
        ['从夏威夷野外分离出来的一株品系', 2, { set: 'hawaii' }],
        ['一株对干燥特别能忍的野外品系', 1, { health: +5, set: 'dry_strain' }],
      ]},
      { label: '出生的季节', options: [
        ['雨后的那一周，水膜还厚', 3, { food: +5, set: 'rainy' }],
        ['秋末，落叶正在大量腐烂', 3, { food: +10, risk: 1.1, set: 'autumn_leaf' }],
        ['一个干旱的夏天，水膜薄，细菌少', 2, { health: -5, food: -5, risk: 1.2, set: 'drought_year' }],
      ]},
    ],
    siblings: 300,
    siblingsLabel: '同一位母亲产下的卵',
    intro: '你在{出生地}里从一枚卵中孵出，身长约 0.25 毫米，透明，有 302 个神经元。你是{sex}。和你来自同一位母亲的卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',   name: '卵',     from: 0,   unit: 'hour' },
    { id: 'larva', name: '幼虫（L1–L4）', from: 0.6, unit: 'hour' },
    { id: 'adult', name: '成虫',   from: 3,   unit: 'day'  },
    { id: 'old',   name: '老年',   from: 12,  unit: 'day'  },
  ],
  maturity: 3,
  maxAge: 40,

  survival: [[0,1],[0.6,0.8],[1.5,0.45],[3,0.2],[6,0.09],[12,0.03],[20,0.008],[30,0.001],[40,0]],
  survivalNote: '野外线虫几乎没有存活率数据；实验室寿命约 2–3 周，此曲线按捕食与干旱压力粗估',

  init: { health: 75, food: 55, safety: 50 },
  foodDrain: 4,

  causes: [
    { id: 'mite', escape: true, w: 5, stages: ['larva','adult','old'], short: '被捕食螨吃掉',
      text: '一只捕食螨用螯肢夹住了你。从被发现到被吃掉，不到一秒。' },
    { id: 'fungus', escape: false, w: 3, stages: ['larva','adult','old'], short: '被食线虫真菌勒死',
      text: '你钻进了一个菌丝环。它在十分之一秒里膨胀收紧，菌丝随后长进了你的身体。' },
    { id: 'pristionchus', escape: true, w: 2, stages: ['larva','adult'], short: '被另一种线虫咬死',
      text: '一条太平洋棘口线虫用它的齿咬破了你的表皮。' },
    { id: 'dry', escape: false, w: 3, short: '土壤干透脱水',
      text: '连续几天没下雨，土粒之间的水膜断了。你没能游到湿的地方。' },
    { id: 'pathogen', escape: false, w: 2, stages: ['larva','adult','old'], short: '肠道感染',
      text: '你吃下的细菌在肠道里扎了根，从里面把你吃空。' },
    { id: 'egg_eaten', escape: false, w: 6, stages: ['egg'], short: '还是卵的时候被吃掉',
      text: '你还没孵出来，卵就被一只跳虫连同周围的细菌一起吃了下去。' },
    { id: 'bag', escape: false, w: 1, stages: ['adult','old'], short: '体内孵化（母体被幼虫吃空）',
      text: '食物断绝，你没法再产卵。卵在你体内孵化，幼虫们从里面吃掉了你，然后爬了出去。' },
    { id: 'old', w: 0, short: '衰老', text: '你的咽部越来越慢，最后停了。对一条线虫来说，这算是寿终正寝。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵壳里，你的细胞在按固定的顺序分裂。每一次分裂都和其他同类一模一样。',
      fact: '秀丽隐杆线虫从受精卵到孵化幼虫的整个胚胎细胞谱系已被完整追踪（Sulston 等 1983）' },
    { stages: ['egg'], w: 1, once: true, text: '你从卵壳里挤了出来。', eff: { food: -5 } },
    { stages: ['larva','adult'], w: 4, text: '你吃到一团细菌，咽部每分钟泵动两百多次。', eff: { food: [10, 20] } },
    { stages: ['larva','adult'], w: 2, text: '你沿着气味的浓度往上游，找到了一片新的细菌。', eff: { food: [8, 15] } },
    { stages: ['larva'], w: 2, text: '你蜕了一次皮，旧的角质层留在身后。', eff: { health: +5 },
      fact: '线虫从 L1 到成虫要蜕皮四次' },
    { stages: ['larva','adult','old'], w: 2, text: '一只跳虫从头顶经过，震动传遍了周围的土粒。你立刻后退。', eff: { safety: -10 } },
    { stages: ['larva','adult','old'], w: 1, text: '下雨了。土壤里的水膜变厚，你能游得更远。', eff: { food: +5, safety: +5 } },
    { stages: ['larva','adult','old'], w: 1, text: '太阳晒了一整天，表层土变干。你往深处钻。', eff: { food: -8, health: -5 } },
    { stages: ['larva','adult'], w: 1, text: '周围挤满了同类，到处是它们分泌的信息素。', eff: { food: -10, safety: -5 } },
    { stages: ['adult'], w: 1, once: true, text: '你开始产卵。第一天产下了 {n} 枚。', eff: { offspring: [60, 120] },
      fact: '一只自体受精的秀丽隐杆线虫一生约产 300 枚卵（Hodgkin & Barnes 1991）' },
    { stages: ['adult'], w: 3, need: '!spent', text: '你又产下 {n} 枚卵。', eff: { offspring: [20, 70], food: -5 } },
    { stages: ['adult','old'], w: 1, text: '你碰到一片会让同伴生病的细菌，吃了一口就转身离开了。', eff: { health: -5 },
      fact: '线虫吃过致病的铜绿假单胞菌后，会学会避开它的气味（Zhang, Lu & Bargmann 2005）' },
    { stages: ['adult','old'], w: 1, text: '你周围的细菌变少了，你在原地画着小圈，搜寻。', eff: { food: -5 } },
    { stages: ['larva','adult','old'], w: 1, text: '附近有一只水熊虫在慢慢地爬。你们互不理睬。' },
    { stages: ['adult','old'], w: 1, once: true, text: '一种叫 Orsay 的病毒感染了你的肠道细胞。你吃得少了一些。', eff: { health: -15 },
      fact: '2011 年在法国 Orsay 的野生线虫中发现的 Orsay 病毒，是首个感染秀丽隐杆线虫的天然病毒（Félix 等 2011）' },
    { stages: ['old'], w: 3, text: '你的动作慢了下来，咽部泵动的频率下降了。', eff: { health: -6 } },
    { stages: ['old'], w: 1, text: '你的卵产完了。你在细菌里慢慢地吃。', set: 'spent' },
    { stages: ['larva','adult','old'], w: 1, text: '一条蚯蚓从旁边犁过，整片土都翻了个面。', eff: { safety: -15 } },
    { act: 'forage', stages: ['larva','adult'], w: 3, text: '你趴在一团细菌上，咽部每分钟泵动两百多次，肚子一点点鼓起来。', eff: { food: [12, 20] } },
    { act: 'forage', stages: ['larva','adult'], w: 2, text: '你吃得太快，肠道里一阵发胀。你停下来，等它消化一会儿。', eff: { food: [6, 10], health: -3 } },
    { act: 'hide', stages: ['larva','adult','old'], w: 2, text: '你钻进一道土粒之间的细缝，身体几乎贴满了四周。外面的震动传下来，很快又停了。', eff: { safety: [6, 10], food: -3 } },
    { act: 'hide', stages: ['adult','old'], w: 1, text: '你挤进一块腐殖质的深处。那里很暗，只能靠水膜的气味分辨方向。', eff: { safety: [5, 8], food: -6 } },
    { act: 'rest', stages: ['adult','old'], w: 2, text: '你停在水膜的弯曲处，身体蜷成一个圈，咽部的泵动慢了很多。', eff: { health: [4, 7] } },
    { act: 'rest', stages: ['larva','adult','old'], w: 1, text: '你在一粒土的背后停了很久，像一根断掉的线。', eff: { health: [2, 4], food: -3 } },
    { act: 'explore', stages: ['larva','adult','old'], w: 2, text: '你游进一道没去过的土缝，里面的水膜又冷又薄。你转了几圈，才找到原来的路。', eff: { food: -5, safety: -8 } },
    { act: 'explore', stages: ['adult','old'], w: 2, text: '你沿着一条根须游了很远，碰到一块从没去过的烂叶，里面有一整团细菌。', eff: { food: [20, 30] } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你把卵一枚一枚地产进土粒之间，产下了 {n} 枚。', eff: { offspring: [20, 40] } },
    { act: 'mate', stages: ['adult'], w: 1, need: '!spent', text: '你又产了一批卵，贴在一团正在腐烂的果肉上。', eff: { offspring: [15, 30], food: -5 } },
    { need: 'lab_strain', stages: ['larva', 'adult'], w: 3, text: '你的祖先在培养皿的琼脂上繁殖了很多代。野外的气味对你来说很陌生，你要多试几次才找到细菌。', eff: { food: -5 } },
    { need: 'lab_strain', stages: ['adult', 'old'], w: 1, text: '你的祖先是从英国布里斯托的一堆蘑菇堆肥里分离出来的。那堆堆肥的气味，你仍然认得。', eff: { health: +3 }, fact: '标准实验品系 N2 来自英国布里斯托的一堆蘑菇堆肥（Brenner 1974）' },
    { need: 'hawaii', stages: ['larva', 'adult'], w: 3, text: '温度一升高，你就游得比别的线虫快。同伴还在慢慢地爬，你已经绕到了前面。', eff: { food: +5 } },
    { need: 'hawaii', stages: ['adult', 'old'], w: 2, text: '夏天的土壤里，你的后代长得很快。你在一片烂果里吃到很多，身边到处都是细菌。', eff: { food: +12 } },
    { need: 'dry_strain', stages: ['egg', 'larva'], w: 2, text: '你的卵壳比别的厚一些。土一干，你就缩成一团，等水回来。', eff: { health: +5 } },
    { need: 'dry_strain', stages: ['larva', 'adult', 'old'], w: 3, text: '连续三天没有下雨。周围的同伴都在脱水，你却还能在水膜最薄的地方爬动一会儿。', eff: { health: +6, food: -5 } },
    { need: 'rainy', stages: ['larva'], w: 3, text: '水膜厚得能让你游很远。每游一段，你就碰到一团新的细菌。', eff: { food: +8 } },
    { need: 'rainy', stages: ['adult', 'old'], w: 2, text: '雨停了三天，水膜开始变薄。你提前往深处挪，躲过了表层的干燥。', eff: { safety: +5 } },
    { need: 'autumn_leaf', stages: ['larva', 'adult'], w: 3, text: '落叶一层层压在一起，里面全是正在分解的细菌。你每吃一口，肠道都在发热。', eff: { food: [10, 16] } },
    { need: 'autumn_leaf', stages: ['adult', 'old'], w: 2, text: '烂叶子里爬满了真菌丝。你小心地绕开那些又白又软的细丝。', eff: { food: -4, safety: +4 } },
    { need: 'drought_year', stages: ['larva'], w: 3, text: '表层的水膜几乎断了。你的同伴挤到一小块残留的湿土里，你也跟着挤了进去。', eff: { food: -10, safety: -5 } },
    { need: 'drought_year', stages: ['adult', 'old'], w: 2, text: '这一年夏天，你第一次闻到土壤深处的水分。你游到那里，活了下来。', eff: { health: +4, food: +6 } },
    { need: 'bold', stages: ['larva', 'adult'], w: 2, act: 'explore', text: '你没有等表层的细菌被吃光，直接游进一道陌生的根缝。那里很窄，你挤了很久。', eff: { food: +12, safety: -8 } },
    { need: 'cautious', stages: ['larva', 'adult', 'old'], w: 2, text: '一块土在震动。你停住不动，直到震动完全过去。', eff: { safety: +5 } },
    { need: 'runt', stages: ['larva'], w: 3, text: '你比同批的线虫都细。别的幼虫先挤到了细菌堆上，你只能在边缘啃那些残渣。', eff: { food: -8 } },
  ],

  opening: {
    title: '母亲在找地方产卵',
    body: '你还没出生。母亲正沿着一只烂苹果的边缘爬行：中间细菌最多，同类也最多；边缘细菌稀少，但很少有谁经过。',
    options: [
      { t: '产在细菌最多的中心', hint: '饱食↑ 拥挤，捕食者也多', eff: { food: +20 }, risk: 1.3, riskDays: 3,
        result: '你在一大团细菌中间孵出来，周围挤满了兄弟姐妹。' },
      { t: '产在安静的边缘', hint: '更安全 · 吃得少', eff: { food: -10, safety: +15 }, risk: 0.75, riskDays: 3,
        result: '你在果皮的边上孵出来。四周很安静，细菌也少。' },
    ],
  },

  actions: {
    forage:  { name: '吃细菌', desc: '沿着气味去找细菌最多的地方，埋头吃。', text: ['你埋头吃着一团细菌。', '咽部一下一下地泵动，细菌被送进肠道。', '你沿着烂果肉的边缘慢慢爬，每一口都有东西。'] },
    hide:    { name: '钻进深层土', desc: '躲进土粒之间狭窄的缝隙，避开捕食者，也避开表层的干燥。', text: ['你挤进一条细缝，身体几乎贴满了土粒。', '外面的震动一阵阵传下来，你没有动。', '这里比表层湿，也更暗。'] },
    rest:    { name: '蜷着不动', desc: '停下觅食和移动，让身体慢慢恢复。', text: ['你蜷在水膜里，停止了扭动。', '咽部的泵动慢了下来，身体一点一点回暖。', '周围很安静，你什么也不做。'] },
    explore: { name: '游向新的土层', desc: '离开熟悉的细菌，去远处没有去过的土层找食物。', text: ['你沿着一条根须往深处游。', '土粒之间的水膜变得又冷又薄。', '你闻到一股陌生的气味，朝它爬去。'] },
    mate:    { name: '产卵', desc: '雌雄同体的个体不需要雄虫也能受精，把卵产进土粒之间。', stages: ['adult'], done: '你又产下了 {n} 枚卵。' },
  },
  brood: [20, 60],
  decisions: [
    {
      id: 'pseudomonas', at: 1.0,
      title: '一片诱人的细菌',
      body: '前面有一大片细菌，气味非常浓。旁边的一小片稀稀拉拉，但闻起来很普通。',
      fact: '线虫起初会被铜绿假单胞菌吸引，接触后才学会回避（Zhang 等 2005）；这种细菌能在几天内杀死线虫（Tan 等 1999）',
      options: [
        { t: '冲进那片浓的', hint: '饱食↑↑ 生病风险↑',
          eff: { food: +35 }, risk: 2.2, riskDays: 2, result: '你吃得肚子发亮。几个小时后，肠道开始有点不对劲。' },
        { t: '去那片稀的', hint: '安全',
          eff: { food: +10 }, result: '你吃了一顿普通的饭。' },
      ],
    },
    {
      id: 'dauer', at: 1.3, when: { food: '<55' },
      title: '太挤了，也太饿了',
      body: '食物快吃完了，周围全是同类的信息素。你的身体在等一个决定：继续长大，还是变成另一种形态。',
      fact: '拥挤和缺食时，L2 幼虫可以转入 dauer 休眠幼虫期：口封闭、不进食，可存活数月（Cassada & Russell 1975）',
      options: [
        { t: '进入 dauer 休眠', hint: '不吃不老，等下一次机会',
          skip: [20, 120], kill: 0.35, cause: 'mite', set: 'dauer', eff: { food: 20, safety: +10 },
          result: '你封住了嘴，蜷成一根又细又硬的棍子，开始等。' },
        { t: '继续发育', hint: '饿着长大，风险↑',
          risk: 1.7, riskDays: 2, eff: { food: -5 }, result: '你决定赌一把，继续蜕皮。' },
      ],
    },
    {
      id: 'nictation', at: 2.0, need: 'dauer',
      title: '一只鼠妇经过',
      body: '休眠了很久之后，你感到地面在震动。一只鼠妇正从上方慢慢爬过。你可以竖起身体，用尾巴站着挥动，试着粘到它身上。',
      fact: 'dauer 幼虫会做“站立挥动”（nictation），搭乘蛞蝓、鼠妇和昆虫去新的地方（Lee 等 2011）',
      options: [
        { t: '站起来，挥动', hint: '换个新地方 · 可能摔下去',
          kill: 0.15, cause: 'dry', eff: { food: +40, safety: +10 },
          result: '你粘住了它的腿。几米之后，你掉进了一只刚落地的烂梨里。到处都是细菌。' },
        { t: '原地等雨', hint: '稳妥 · 食物少',
          eff: { food: +10 }, result: '鼠妇走了。两天后下了雨，附近的落叶开始腐烂。你醒了。' },
      ],
    },
    {
      id: 'fungus_trap', at: 4,
      title: '一股好闻的味道',
      body: '你闻到一股混合了食物和同类气味的香味，从一团白色的细丝那边飘过来。',
      fact: '食线虫真菌 Arthrobotrys oligospora 会释放模仿食物和性信息素的气味来引诱线虫（Hsueh 等 2017）',
      options: [
        { t: '过去看看', hint: '可能有食物',
          kill: 0.3, cause: 'fungus', eff: { food: +10 },
          result: '那里什么也没有。你小心地从菌丝环中间退了出来。' },
        { t: '掉头离开', hint: '饿一点',
          eff: { food: -5, safety: +5 }, result: '你往反方向游走了。' },
      ],
    },
    {
      id: 'male', at: 5, need: '!male',
      title: '一条雄虫',
      body: '一条雄性线虫找到了你。你们这种线虫里，雄性大约只有千分之一。',
      fact: '与雄虫交配后，雌雄同体会明显缩小，寿命也明显缩短（Shi & Murphy 2014）',
      options: [
        { t: '交配', hint: '后代↑↑ 寿命↓',
          eff: { offspring: [300, 700] }, risk: 1.6, riskDays: 10,
          result: '之后几天，你产下的卵比以前多得多。你的身体也开始缩小。' },
        { t: '游开', hint: '靠自己的精子',
          eff: {}, result: '你继续用自己的精子给卵受精。' },
      ],
    },
    {
      id: 'mite_wave', at: 9,
      title: '一只捕食螨靠近',
      body: '土里传来一阵细小的震动，一只捕食螨正沿着土粒之间慢慢爬过来。你可以钻进一道窄缝，也可以继续去吃前面那团细菌。',
      options: [
        { t: '钻进窄缝不动', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -10 }, risk: 0.6, riskDays: 4,
          result: '你贴着土粒缩进窄缝里。螯肢擦过了你身边的土，又退了回去。' },
        { t: '继续去吃细菌', hint: '饱食↑ 被夹住的风险↑',
          eff: { food: +20 }, kill: 0.3, cause: 'mite',
          result: '你埋头吃了几口。那只螨停在你身后，你没有察觉，直到螯肢合上。' },
      ],
    },
    {
      id: 'dry_surface', at: 16,
      title: '表层的水膜在变薄',
      body: '连着几天没有下雨，土粒表面的水膜越来越薄，细菌也在缩回深处。你的身体一阵阵发紧。',
      options: [
        { t: '往深层湿土里钻', hint: '安全↑ 食物↓',
          eff: { safety: +8, food: -10 }, risk: 0.7, riskDays: 8,
          result: '你沿着土粒之间的缝隙往下挪，那里还残留着一层水膜。' },
        { t: '留在表层的残水里吃', hint: '饱食↑ 脱水风险↑',
          eff: { food: +12, health: -5 }, kill: 0.1, cause: 'dry',
          result: '你趴在最后一层水膜上吃，身体一天比一天干。' },
      ],
    },
    {
      id: 'last_brood', at: 24, need: '!spent',
      title: '最后一批卵',
      body: '你的卵巢已经空了一大半，剩下的卵还在等着。产下它们，身体会更快地变轻。',
      options: [
        { t: '把剩下的卵全产出去', hint: '后代↑ 体力↓',
          eff: { offspring: [30, 80], health: -10 }, risk: 1.4, riskDays: 6, set: 'spent',
          result: '你把剩下的卵一枚一枚地产进土里。之后，你的动作慢得几乎看不出来。' },
        { t: '留着，慢慢吃', hint: '寿命↑ 后代↓',
          eff: { health: +5, food: +5 }, risk: 0.85, riskDays: 10,
          result: '你没有产卵，继续在细菌之间慢慢地爬。' },
      ],
    },
    {
      id: 'lab_smell', at: 2.5, need: 'lab_strain',
      title: '一股没闻过的气味',
      body: '你的祖先在培养皿里生活了很多代，只认得那几种细菌。现在前面飘来一股陌生的甜味，你不知道它是什么。',
      options: [
        { t: '顺着陌生的气味游', hint: '饱食↑ 风险↑', eff: { food: +15 }, risk: 1.4, riskDays: 2,
          result: '那是一种你的祖先没有闻过的细菌。你吃了一顿，之后胃里一直发沉。' },
        { t: '照着熟悉的路线游', hint: '稳妥 · 吃得少', eff: { food: +5 },
          result: '你沿着记忆里的路线慢慢爬，找到的食物不多，但很稳。' },
      ],
    },
    {
      id: 'drought_pick', at: 10, need: 'drought_year',
      title: '水膜快断了',
      body: '这个夏天没有下雨。表层的水膜一天比一天断得厉害。你还能在它上面吃到东西，但时间不多了。',
      options: [
        { t: '在残留的水膜上多吃几口', hint: '饱食↑ 脱水风险↑', eff: { food: +10 }, kill: 0.1, cause: 'dry',
          result: '你在最后一层水膜里多吃了几口。之后，水膜就断了。' },
        { t: '提前往深土钻', hint: '安全↑ 食物↓', eff: { safety: +10, food: -8 }, risk: 0.7, riskDays: 6,
          result: '你比别的线虫更早地钻进了深处，那里还残留着一层水。' },
      ],
    },
    {
      id: 'curious_smell', at: 12, need: 'curious',
      title: '一道新的气味',
      body: '一股你从没闻过的气味从旁边的土缝里飘出来。它很淡，但很清楚，你有些想靠过去看看。',
      options: [
        { t: '凑过去看看', hint: '可能有食物 · 风险↑', eff: { food: +8 }, risk: 1.2, riskDays: 2,
          result: '那是一片刚冒出来的白色真菌。你闻到了它，但没有靠得太近。' },
        { t: '绕开那股味道', hint: '安稳', eff: { safety: +3 },
          result: '你绕了远路，把那股味道留在了身后。' },
      ],
    },
  ],

  idle: [
    '你在水膜里慢慢地扭动。',
    '土粒之间很暗，也很安静。',
    '你没有眼睛，只有气味、温度和触碰。',
    '你吃，排泄，再吃。',
    '温度降了一点，你的动作也跟着慢了。',
    '一根根毛在附近分泌着糖分，细菌在那里聚集。',
    '你朝着二氧化碳少一点的方向挪动。',
    '远处传来什么东西在土里挖掘的震动。',
  ],

  epitaph: '你是土壤里四点四万亿亿条线虫中的一条。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'copepod',
  name: '桡足类',
  en: 'Copepod (Calanus finmarchicus)',
  sci: 'Calanus finmarchicus（飞马哲水蚤），桡足纲',
  emoji: '🦐',
  scene: 'ocean',
  kind: 'wild',
  tagline: '一生可能只有一年，却是北大西洋食物网的底层之一',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生海区', options: [
        ['挪威海的表层水，春天藻类刚开始大量繁殖的地方', 3, { food: +10 }],
        ['北大西洋西部一片大陆架上的水域', 2, {}],
        ['冰岛西南海域的上升流区', 2, { food: +5 }],
        ['北海北部那片混浊的水团', 1, { risk: 1.2 }],
      ]},
      { label: '春季藻华', options: [
        ['藻华准时开始，你出生在硅藻最多的那几周', 4, { food: +15, set: 'bloom_on' }],
        ['藻华来得早，在你孵化之前就已经过去了', 2, { food: -5, set: 'bloom_early' }],
        ['藻华推迟了，海水一直清澈，你是在饥饿里长大的', 2, { food: -10, risk: 1.2, set: 'bloom_late' }],
        ['这一年几乎没有藻华，表层只有零星的浮游植物', 1, { food: -15, risk: 1.4, set: 'bloom_none' }],
      ]},
      { label: '母亲的经历', options: [
        ['母亲刚从冬天的深海里上来，身上的脂肪还很厚', 3, { health: +5, set: 'deep_mom' }],
        ['母亲整个冬天都待在表层，身体很瘦', 2, { health: -5, set: 'surface_mom' }],
        ['母亲在一大片密集的卵群中产下了你，周围很挤', 2, { food: -5, set: 'crowd_mom' }],
      ]},
    ],
    siblings: 400,
    siblingsLabel: '同一批产下的卵',
    intro: '你是一枚卵，直径约 0.15 毫米，漂在{出生海区}。你是{sex}。同一批产下的卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',       name: '卵',                from: 0,   unit: 'hour' },
    { id: 'nauplius',  name: '无节幼体（N1–N6）',  from: 1.5, unit: 'day'  },
    { id: 'copepodite', name: '桡足幼体（C1–C5）', from: 30,  unit: 'week' },
    { id: 'adult',     name: '成体',               from: 150, unit: 'week' },
    { id: 'old',       name: '老年',               from: 300, unit: 'week' },
  ],
  maturity: 150,
  maxAge: 360,

  survival: [[0,1],[0.5,0.6],[1.5,0.3],[10,0.08],[30,0.03],[100,0.015],[150,0.01],[250,0.004],[300,0.002],[360,0]],
  survivalNote: '桡足类在海里的存活数据来自现场采样和实验室估计，卵到成体的成活率通常只有百分之一左右；此曲线为粗估',

  init: { health: 70, food: 55, safety: 45 },
  foodDrain: 3,

  causes: [
    { id: 'fish_larva', escape: true, w: 4, stages: ['nauplius','copepodite','adult'], short: '被鲱鱼仔鱼吃掉',
      text: '一条鲱鱼仔鱼从下方冲上来，张开的嘴把你和周围的水一起吸了进去。' },
    { id: 'arrow', escape: true, w: 2, stages: ['copepodite','adult'], short: '被箭虫抓住',
      text: '一条箭虫用它的抓取器把你钉住，然后慢慢送进了口中。' },
    { id: 'starve', escape: false, w: 3, stages: ['nauplius','copepodite'], short: '藻华过去，饿死了',
      text: '春天的藻华结束了。海水变得清澈，周围没有一片可以吃的硅藻。' },
    { id: 'nightrise', escape: true, w: 3, stages: ['copepodite','adult'], short: '夜里上浮时被鱼咬住',
      text: '你随着夜色上浮到表层。一条鱼在黑暗里靠近，你只来得及感到水流改变了方向。' },
    { id: 'egg_eaten', escape: false, w: 6, stages: ['egg'], short: '卵被其他浮游动物吃掉',
      text: '一只成体桡足类从旁边游过，把你和周围的卵一起吞了下去。' },
    { id: 'diapause', escape: false, w: 2, stages: ['copepodite'], short: '冬眠时能量耗尽',
      text: '你在深水里靠脂质囊过了整个冬天。春天来得太晚，脂肪已经用完了。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你游得越来越慢，最后停在水里，缓缓下沉。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵黄里储着脂质，这是你最初几天的燃料。',
      fact: '桡足类的卵和早期无节幼体主要依靠卵黄和脂质储备，早期的食物条件会影响它们的存活（Mauchline 1998）' },
    { stages: ['egg'], w: 1, once: true, text: '你从卵壳里挣出来，成为一条无节幼体。身体只有一只眼点，三对附肢在划水。',
      fact: '桡足类的无节幼体通常有 6 个龄期，靠三对附肢划水和摄食（Mauchline 1998）' },
    { stages: ['nauplius'], w: 4, text: '你吃到一个硅藻，它的硅壳在口器里碎开。', eff: { food: [10, 20] } },
    { stages: ['nauplius'], w: 2, text: '你蜕了一次皮，身体比刚才大了一点。', eff: { health: +3 } },
    { stages: ['nauplius','copepodite'], w: 1, text: '一阵风把表层海水搅动了一整天，藻类的浓度因此上升了。', eff: { food: +8 } },
    { stages: ['copepodite'], w: 4, text: '你吃饱了，身体里的脂质囊开始变成淡橙色。', eff: { food: [10, 18] } },
    { stages: ['copepodite'], w: 2, text: '你随着昼夜的变化在水里升降。夜里你在表层，白天你在深处。', eff: { food: +5 } },
    { stages: ['copepodite'], w: 2, text: '一群鲱鱼仔鱼从上方游过，吃掉了你周围的几个同伴。你紧紧地待在原地。', eff: { safety: -10 } },
    { stages: ['copepodite','adult'], w: 1, text: '一股冷水把你卷进了一团温度更低的水里。', eff: { health: -5 } },
    { stages: ['copepodite'], w: 1, text: '日照越来越短。你开始在身体里储存更多的脂肪。', eff: { food: +5 } },
    { stages: ['adult'], w: 1, once: true, text: '你脱掉了最后一层皮，成为成体。', eff: { health: +5 } },
    { stages: ['adult'], w: 1, once: true, need: '!male', text: '你第一次产卵。卵一粒一粒地散进海水里，很快就找不到了。', eff: { offspring: [40, 90] } },
    { stages: ['adult'], w: 3, need: '!male', text: '你又产下 {n} 枚卵。', eff: { offspring: [15, 40], health: -2 } },
    { stages: ['adult'], w: 3, text: '一团悬浮的碎屑里裹着几根硅藻链。你吃掉了它们。', eff: { food: [8, 16] } },
    { stages: ['adult'], w: 2, text: '一条箭虫游过来，两根抓取器在你身边合拢又松开。它没有抓住你。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 2, text: '表层的风暴把你卷到了深处，你花了一整夜才找回原来的深度。', eff: { food: -10, health: -4 } },
    { stages: ['adult','old'], w: 1, text: '你吸进了一颗微塑料碎片。它在你的消化道里停留了很久。',
      fact: '桡足类会误食微塑料，已有实验室研究记录（Cole 等 2013）', eff: { health: -4 } },
    { stages: ['old'], w: 2, need: '!male', text: '你的卵巢已经空了。身体变轻了，游动也慢了。', eff: { health: -6 } },
    { stages: ['old'], w: 1, text: '又一个夜晚，你随着同类上浮，但这次你慢了几秒，前面的同伴已经不见了。', eff: { safety: -5 } },
    { stages: ['copepodite','adult','old'], w: 1, text: '鲸的呼吸声从很远的海面传下来，像一阵低沉的风。' },
    { stages: ['nauplius'], w: 3, act: 'forage', text: '你在表层滤食，口器一开一合，把一小片硅藻链裹进了嘴里。', eff: { food: [10, 18] } },
    { stages: ['copepodite','adult'], w: 3, act: 'forage', text: '表层的硅藻很密，你吃到肠子发亮。', eff: { food: [12, 20] } },
    { stages: ['copepodite','adult'], w: 2, act: 'forage', text: '黄昏的表层，一群鲱鱼仔鱼的影子在上方晃动。你还没吃够，就被水流推着往下沉。', eff: { safety: -12 } },
    { stages: ['copepodite','adult'], w: 2, act: 'hide', text: '深水里很冷，食物也少。你在这里待了几天，身体缩小了一点。', eff: { food: -6 } },
    { stages: ['adult','old'], w: 2, act: 'hide', text: '你从一道冷暖水的界面下面慢慢经过，身上的水流突然变得很轻。', eff: { health: -3, safety: 5 } },
    { stages: ['copepodite','adult','old'], w: 2, act: 'rest', text: '你几乎不划动附肢，一动不动地悬着。身体的消耗慢下来。', eff: { health: +4, food: -2 } },
    { stages: ['copepodite'], w: 2, act: 'explore', text: '你游过一道水温突变的界面，水一下子变凉。身边的同伴很少。', eff: { food: [8, 14] } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你碰到一团漂浮的海藻碎屑，里面裹着成群的硅藻。', eff: { food: [12, 18] } },
    { stages: ['adult','old'], w: 1, act: 'explore', text: '远处的船灯照在水面上，光带一直延伸到你这里。', eff: { safety: -8 } },
    { stages: ['adult'], w: 3, act: 'mate', need: '!male', text: '一只雄体靠近，用附肢抓住你，把精囊送进你身体的生殖孔。', eff: { offspring: [40, 90] } },
    { stages: ['adult'], w: 2, act: 'mate', need: '!male', text: '你在水里等了很久，没有雄体靠近。身体里的卵只能靠自己的储备。', eff: { food: -4 } },
    { need: 'bloom_on', stages: ['nauplius'], w: 3, text: '你在一片硅藻中间游动，每一口都能吃到东西。', eff: { food: [6, 10] } },
    { need: 'bloom_on', stages: ['copepodite'], w: 2, text: '藻华的尾声你一直在吃。水温回升的时候，你的身体比同批的伙伴都结实。', eff: { health: +5 } },
    { need: 'bloom_early', stages: ['nauplius'], w: 3, text: '你刚孵出来，周围的硅藻已经大片沉到了深水里。你只能追着残存的碎屑吃。', eff: { food: -8 } },
    { need: 'bloom_early', stages: ['copepodite'], w: 2, text: '你长到桡足幼体的时候，藻华已经结束了。你从表层慢慢往下找吃的。', eff: { food: -5 } },
    { need: 'bloom_late', stages: ['nauplius'], w: 3, text: '海水一直清澈，你游了很久也找不到一片硅藻。你的身体开始变得透明。', eff: { food: -10, health: -5 } },
    { need: 'bloom_late', stages: ['copepodite'], w: 2, text: '藻华终于来了。你趴在一团刚浮起来的硅藻上，吃到肚子发胀。', eff: { food: +15 } },
    { need: 'bloom_none', stages: ['nauplius', 'copepodite'], w: 3, text: '表层只剩下零星的浮游植物。你靠消耗自己的脂肪撑了很久。', eff: { health: -8 } },
    { need: 'bloom_none', stages: ['copepodite', 'adult'], w: 2, text: '你在深水里找到一小团沉下去的硅藻。那是这一年唯一的一顿饱饭。', eff: { food: +20 } },
    { need: 'deep_mom', stages: ['nauplius', 'copepodite'], w: 2, text: '你的脂肪是母亲在冬天的深水里攒下的。你不急着进食，在水里慢慢地漂。', eff: { health: +5 } },
    { need: 'deep_mom', stages: ['adult'], w: 2, text: '你的脂肪囊很大，像一颗油滴。鱼从上面游过，你却只是慢慢地往下沉。', eff: { safety: -5 } },
    { need: 'surface_mom', stages: ['nauplius'], w: 3, text: '你的母亲没有沉下去过冬。她产下的卵不多，你身边的同伴也少。', eff: { food: +5, safety: +5 } },
    { need: 'surface_mom', stages: ['copepodite', 'adult'], w: 2, text: '你从小就习惯在表层找食物。冬天来的时候，你还没有学会向深处下沉。', eff: { health: -8 } },
    { need: 'crowd_mom', stages: ['nauplius'], w: 3, text: '你们这一批卵都挤在同一片水里。你刚游动就撞上别人的身体，又弹开。', eff: { food: -5, safety: -5 } },
    { need: 'crowd_mom', stages: ['copepodite'], w: 2, text: '你在一群同龄的桡足幼体中间游。鱼从上面冲下来，整群一起散开。', eff: { safety: -5 } },
    { need: 'bold', stages: ['copepodite', 'adult'], w: 2, act: 'explore', text: '你离开了稳定的深层水，游进一片陌生的冷水团。那里的食物更多，鱼也更多。', eff: { food: +10, safety: -10 } },
    { need: 'cautious', stages: ['copepodite', 'adult'], w: 2, text: '一道黑影从上方掠过。你在原地静止了很久，直到确认它不会再回来。', eff: { safety: +6, food: -3 } },
    { need: 'robust', stages: ['adult', 'old'], w: 1, text: '你的脂肪厚实。夜里上浮时，你撞进了一团鱼苗，把它们吃了个干净。', eff: { food: +12 } },
  ],

  opening: {
    title: '母亲在选择放卵的水层',
    body: '你还没有离开母亲的身体。母亲在表层的藻华和深水之间游动，要决定在哪一层水里把卵放出去：上面硅藻多，鱼也多；下面安静，但离食物远。',
    options: [
      { t: '在表层的藻华里放卵', hint: '饱食↑ 鱼也多', eff: { food: 15 }, risk: 1.4, riskDays: 10,
        result: '卵在绿色的表层水里散开。你孵化后很快吃到了硅藻，但这片水里的鱼也一样多。' },
      { t: '在深水里放卵', hint: '安全↑ 饿一点', eff: { food: -10, safety: 10 }, risk: 0.7, riskDays: 10,
        result: '卵沉入深水，你在没有光的水里孵化。这里几乎没有藻类，但很少有鱼来这里。' },
    ],
  },

  actions: {
    forage: { name: '上浮滤食', desc: '沿着叶绿素多的水层上浮，张开附肢把硅藻滤进口里。', text: ['你在绿色的水层里滤食，附肢一伸一缩。', '一团硅藻链被你卷进口中。', '表层的水比深处暖一点，你在这里多停了一会儿。'] },
    hide: { name: '沉入深水', desc: '白天停在几百米深、没有光的水里，躲开吃鱼的眼睛。', text: ['深水里几乎没有光，你的身体慢慢融进黑暗里。', '水温一点点变冷，你的动作也慢下来。', '上方的影子掠过，你没有动。'] },
    rest: { name: '悬停不动', desc: '在水里停住，附肢几乎不划动，减少能量消耗。', text: ['你悬在水里，附肢慢慢地收拢。', '水流把你轻轻推了一下，你又停住了。', '你不去想下一口吃什么，只是等着。'] },
    explore: { name: '横穿水团', desc: '离开熟悉的水层，朝着水温和颜色不同的水团游去。', stages: ['copepodite','adult'], text: ['你穿过一道水温突变的界面，身上一阵发冷。', '远处的水团颜色和你熟悉的不一样。', '你碰到一团碎屑，停下来看了看。'] },
    mate: { name: '与雄体相遇', desc: '遇到雄体时交配，之后把卵一批批放进海水里。', done: '你和雄体交配后，又释放了 {n} 枚卵。', stages: ['adult'], need: '!male', text: ['你在水里慢慢游，寻找靠近的同类。', '一只雄体靠近，用附肢抓住你。', '你身体一松，卵开始一粒粒地散进海水里。'] },
  },

  decisions: [
    {
      id: 'dvm', at: 40,
      title: '夜幕降临',
      body: '海面的光线暗下来，体内的节律在催你上浮。上面有很多藻类，但也有鱼。',
      fact: '昼夜垂直迁移是觅食和躲避捕食之间的一种取舍（Hays 2003 综述）',
      options: [
        { t: '上浮到表层吃饱', hint: '饱食↑↑ 风险↑',
          eff: { food: +25 }, risk: 1.6, riskDays: 1,
          result: '你在黑暗的表层吃满了肠子。远处有一道影子掠过，你没有看清它。' },
        { t: '留在深处', hint: '安全 · 饿一点',
          eff: { food: -8, safety: +10 },
          result: '你停在几百米深的水里，静静等天亮。' },
      ],
    },
    {
      id: 'winter', at: 100, when: { food: '<60' },
      title: '冬天快到了',
      body: '日照一天比一天短，表层的藻类在减少。你的脂质囊够撑一段时间，但接下来的路要自己选。',
      fact: 'Calanus finmarchicus 的 C5 幼体会下沉到深水，进入滞育，几乎不进食地度过冬季（Hirche 1996）',
      options: [
        { t: '下沉到深水，进入滞育', hint: '不进食 · 日历过去，身体不老',
          skip: [150, 240], kill: 0.3, cause: 'diapause', eff: { safety: +15 },
          result: '你沉到几百米的深处。外面的冬天和你无关了，你的身体慢下来。' },
        { t: '留在表层继续吃', hint: '饱食↑ 风险↑↑',
          eff: { food: +15 }, risk: 1.8, riskDays: 60,
          result: '表层还有一些藻类。你留下来，每一口都在和冬天赛跑。' },
      ],
    },
    {
      id: 'spawn', stage: 'adult', need: '!male',
      title: '春天的藻华',
      body: '表层的硅藻大量繁殖，海水变成了淡绿色。你的卵巢已经装满了卵，身体也越来越重。',
      fact: 'Calanus 的产卵量与食物条件相关，藻华期通常是繁殖的高峰（Mauchline 1998）',
      options: [
        { t: '现在就产卵', hint: '后代↑ 体力↓',
          eff: { offspring: [20, 60], health: -10 }, risk: 1.3, riskDays: 5,
          result: '你在表层释放了卵。它们很快就漂散在海水里，看不见了。' },
        { t: '再多吃一阵', hint: '体力↑ 繁殖推迟',
          eff: { food: +20, health: +5 },
          result: '你又吃了几天。卵还在体内，并不急。' },
      ],
    },
    {
      id: 'herring', at: 200,
      title: '一群鲱鱼',
      body: '一群鲱鱼从下方升上来，影子把你周围的水都压暗了。鱼群边缘有食物漂过。',
      fact: 'Calanus 是北大西洋鲱鱼的重要食物之一（Mauchline 1998）',
      options: [
        { t: '混进鱼群的边缘', hint: '食物↑ 风险↑↑',
          kill: 0.2, cause: 'fish_larva', eff: { food: +15 },
          result: '你被水流带进了鱼群的边缘。鱼嘴张开又合上。' },
        { t: '沉到深水', hint: '安全 · 饿',
          eff: { food: -10, safety: +20 },
          result: '你往下沉，鱼群的影子在上方滑过去了。' },
      ],
    },
    {
      id: 'naup_bloom', at: 12,
      title: '浓绿的藻华',
      body: '你已经长出了几对新附肢。前面的水一片浓绿，硅藻多到能看出颜色；另一边的水很稀，只有零星几团藻类。',
      fact: '无节幼体会聚集在藻华区摄食；缺少饵料时，幼体发育变慢，甚至死亡（Mauchline 1998）',
      options: [
        { t: '游进浓绿的藻华', hint: '饱食↑↑ 风险↑', eff: { food: +18 }, risk: 1.4, riskDays: 5,
          result: '你游进浓绿的水里，吃到了很多硅藻。身边也有许多同伴在做同样的事。' },
        { t: '留在稀水里等', hint: '安全 · 饿', eff: { food: -8, safety: +8 }, kill: 0.08, cause: 'starve',
          result: '你在稀水里等了几天。藻类慢慢又出现了，你的身体恢复了一点。' },
      ],
    },
    {
      id: 'chl_layer', at: 75,
      title: '表层的藻类少了',
      body: '表层的硅藻在几天里被吃掉了一大半，水色从绿变浅。深一点的水层还有一些藻类，但离光远，不知道要游多久才能到。',
      fact: 'Calanus 幼体的食物随季节和水层变化很大，藻华过后表层的浮游植物会迅速减少（Mauchline 1998）',
      options: [
        { t: '沉到叶绿素还多的深水层', hint: '食物↑ 风险↑', eff: { food: +8 }, risk: 1.3, riskDays: 10,
          result: '你沉下去，在残留藻类的水层里慢慢吃。那里的光很弱。' },
        { t: '留在表层，吃剩下的碎屑', hint: '食物↑ 鱼↑', eff: { food: +12, safety: -5 }, risk: 1.5, riskDays: 5,
          result: '你在表层吃碎屑。碎屑很少，但你不必往深处游。' },
      ],
    },
    {
      id: 'last_climb', at: 320, stage: 'old',
      title: '最后一次上浮',
      body: '你的卵巢已经空了，身体很轻，游动也慢。夜幕降下来，同伴们开始往表层升。你可以跟上去，也可以留在原地。',
      options: [
        { t: '跟着上浮，吃最后一顿', hint: '饱食↑↑ 风险↑', eff: { food: +20 }, risk: 1.6, riskDays: 1,
          result: '你随着同伴在黑暗的表层吃饱了。直到天亮前，身边的同伴才一个个沉下去。' },
        { t: '留在深处，安静地沉着', hint: '安全↑ 不再进食', eff: { food: -10, safety: +10 },
          result: '你停在深处，动作越来越慢。周围的水很安静。' },
      ],
    },
    {
      id: 'bloom_wait', at: 6, need: 'bloom_late',
      title: '海水还是清的',
      body: '你孵出来才几天，表层的海水仍然清澈。往下沉到温跃层附近，有一些沉下去的碎屑，但离你很远。',
      options: [
        { t: '留在表层等', hint: '饿着，等藻华', eff: { food: -8 }, risk: 1.2, riskDays: 6,
          result: '藻华没有来。你贴着水面停住，身体一天比一天浅。' },
        { t: '沉到深处找碎屑', hint: '饱食↑ 被看见的风险↑', eff: { food: +10 }, risk: 1.5, riskDays: 4,
          result: '你往下沉了很久。碎屑很少，但你至少吃到了一些。' },
      ],
    },
    {
      id: 'fat_keep', at: 60, need: 'deep_mom',
      title: '脂肪还能再攒一阵',
      body: '你的脂肪囊还很厚。你可以现在就蜕成成体，早点产卵；也可以再多吃几周，把身体撑得更饱。',
      options: [
        { t: '现在就蜕成成体', hint: '后代↑ 寿命↓', eff: { offspring: [10, 30], health: -5 }, risk: 1.2, riskDays: 20,
          result: '你很快开始产卵，每一次都只能用上很少的脂肪。' },
        { t: '多吃几周再蜕皮', hint: '体力↑ 后代↓', eff: { food: +15, health: +5 },
          result: '你又在表层吃了一段时间，身体变得沉甸甸的。' },
      ],
    },
    {
      id: 'runt_swarm', at: 150, need: 'runt',
      title: '夜里的上浮',
      body: '你比同批的伙伴小一圈。夜里大群上浮时，你被挤到了水团的边缘，四周都是比你大的身体。',
      options: [
        { t: '跟着大群上浮', hint: '安全↑ 体力↓', eff: { safety: +5, food: -5 }, risk: 1.2, riskDays: 3,
          result: '你跟着上浮，周围的水流一直在颤动。天亮之前，大群又沉了下去。' },
        { t: '留在深处单独觅食', hint: '风险↓ 食物↓', eff: { food: -5 }, risk: 0.8, riskDays: 5,
          result: '你在深水里找到一小片残渣。大群没有等你。' },
      ],
    },
  ],

  idle: [
    '你在水里慢慢漂着，身体的密度和海水几乎一样。',
    '这片水很安静，只有远处的船在震动海水。',
    '水温在慢慢变化，白天和夜里的差别并不大。',
    '表层的光照下来，水的颜色从浅绿慢慢变深。',
    '一团碎屑慢慢沉过你身边，很快消失在暗处。',
    '浮游动物的群体在夜里上浮，白天又沉下去。',
    '你不知道自己在哪个海区，只知道这里有很多同类。',
    '海面上的风把水搅动了一阵，又慢慢平静下来。',
  ],

  epitaph: '你的脂肪最后变成了一条鲱鱼的一部分，而鲱鱼又成了别的东西的食物。海里没有空着的地方。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'krill',
  name: '南极磷虾',
  en: 'Antarctic krill',
  sci: 'Euphausia superba（南极大磷虾）',
  emoji: '🦐',
  scene: 'polar',
  kind: 'wild',
  tagline: '一小只透明的甲壳动物，却是南极食物网的中心',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生水域', options: [
        ['南极半岛西侧的开阔海域', 3, {}],
        ['南乔治亚岛附近的大陆架', 2, { food: +10 }],
        ['罗斯海的冰缘，春天藻类爆发的地方', 2, { food: +15 }],
        ['威德尔海深处', 1, { food: -5, risk: 1.2 }],
      ]},
      { label: '出生那年的海冰与藻类', options: [
        ['海冰多、冰缘藻层厚的强年', 2, { food: +10, set: 'strong_year' }],
        ['海冰和藻类都接近常年的一年', 4, { set: 'mid_year' }],
        ['海冰少、藻层薄的弱年', 2, { food: -10, risk: 1.2, set: 'weak_year' }],
      ]},
      { label: '母亲释放卵的时间', options: [
        ['夏初释放的一批', 3, { health: +3, set: 'early_spawn' }],
        ['盛夏释放的一批，藻华最旺的时候', 4, { food: +6, set: 'peak_spawn' }],
        ['夏末释放的一批，季节已经很短', 2, { food: -6, risk: 1.15, set: 'late_spawn' }],
      ]},
    ],
    siblings: 3000,
    siblingsLabel: '同一位母亲释放的卵',
    intro: '你是一枚卵，直径不到一毫米，正慢慢下沉，身处{出生水域}。你是{sex}。同一批卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',    name: '卵',                  from: 0,    unit: 'day'   },
    { id: 'larva',  name: '幼体（无节、蚤状、膜状）', from: 3,  unit: 'week'  },
    { id: 'juv',    name: '未成熟个体',           from: 120,  unit: 'month' },
    { id: 'adult',  name: '成虫',                from: 730,  unit: 'month' },
    { id: 'old',    name: '老年',                from: 1800, unit: 'month' },
  ],
  maturity: 730,
  maxAge: 2100,

  survival: [[0,1],[3,0.5],[30,0.2],[120,0.08],[365,0.04],[730,0.02],[1095,0.012],[1460,0.006],[1825,0.002],[2100,0]],
  survivalNote: '南极磷虾的寿命多在 5–6 年之间，幼体阶段死亡率极高；此曲线结合野外估计与捕食压力粗估',

  init: { health: 75, food: 60, safety: 45 },
  foodDrain: 2,

  causes: [
    { id: 'whale', escape: true, w: 4, stages: ['juv','adult','old'], short: '被须鲸一口吞下',
      text: '一头须鲸张开口，把你和几千只同伴一起吸进了口中。过滤板把水留下，你留下了。' },
    { id: 'seal', escape: true, w: 3, stages: ['juv','adult'], short: '被海豹或企鹅捕食',
      text: '一只海豹从冰下冲上来，群体一下子散开。它只需要咬住你一次。' },
    { id: 'starve', escape: false, w: 3, stages: ['larva','juv','adult'], short: '冬天饿死',
      text: '冰下的藻类在冬天被吃完了。你的胃空了好几个月，身体一点点变小，最后停了。' },
    { id: 'trawl', escape: true, w: 2, stages: ['adult','old'], short: '被拖网捕捞',
      text: '一张大网从船尾张开，网口吸进了你所在的那片水。你被送进了加工船的冷冻舱。' },
    { id: 'eaten', escape: true, w: 5, stages: ['egg','larva'], short: '被桡足类和鱼吃掉',
      text: '你还在下沉，一条小鱼从上方冲下来，你连一片藻类都没来得及吃。' },
    { id: 'moult', escape: false, w: 1, stages: ['juv','adult'], short: '蜕皮失败',
      text: '旧壳卡在身上，你没能从里面脱出来。过了几天，身体在壳里停止了运动。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的游动越来越慢，最后随着水流沉下去，在海底的软泥里融入了别的生命。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵在海水中缓慢下沉。沉得越深，就越少有东西来吃它。' },
    { stages: ['egg'], w: 1, once: true, text: '你孵化了。你还不会自己找食物，只能靠体内的卵黄支撑。',
      fact: '南极磷虾的发育要经历多个幼体阶段，早期依靠卵黄（Marr 1962）' },
    { stages: ['larva'], w: 4, text: '你吃到一层绿色的藻类，它们在水里像一层薄雾。', eff: { food: [10, 20] } },
    { stages: ['larva'], w: 2, text: '你在冰下的藻层阴影里游动。那里的光很弱，但藻类很多。', eff: { food: +6 } },
    { stages: ['larva','juv'], w: 2, text: '冬天到了，海面结起了冰。冰底附着一层冰藻，你随冰缘一起移动。', eff: { food: +5 } },
    { stages: ['larva'], w: 1, once: true, text: '你蜕了一次皮，身体长大了一点。',
      fact: '南极磷虾的幼体要经过多次蜕皮才能长成成体（Marr 1962）', eff: { health: +5 } },
    { stages: ['juv'], w: 3, text: '你和一大群同类游在一起。它们一起翻动身体，远看像一片银色的云。', eff: { safety: +5 } },
    { stages: ['juv','adult'], w: 2, text: '一只海豹从冰下冲出来，群体一下子散开。你躲进了一团更密的磷虾中间。', eff: { safety: -15 } },
    { stages: ['juv'], w: 2, text: '冬天的食物越来越少。你的身体在缩小，消耗也在降低。', eff: { food: -10, health: -4 } },
    { stages: ['juv','adult'], w: 1, text: '一头蓝鲸从下方冲进磷虾群，张开的口把整片水都卷了进去。', eff: { safety: -15 } },
    { stages: ['adult'], w: 1, once: true, need: '!male', text: '你第一次产卵，释放了几百枚卵。', eff: { offspring: [300, 800] } },
    { stages: ['adult'], w: 3, text: '你在夜里上浮到冰下的藻层吃东西，白天又潜回深处。', eff: { food: [10, 18], safety: -5 } },
    { stages: ['adult'], w: 2, text: '一艘拖网渔船的声音从上方传来，比你以往听到的都要大。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, text: '一群企鹅跃入海中。你周围的同伴一下子散开，你随着水流往下沉。', eff: { safety: -8 } },
    { stages: ['adult'], w: 1, text: '海水温度降低了一点。你的动作慢下来，消耗也少了一些。', eff: { food: -3 } },
    { stages: ['adult'], w: 2, text: '一块浮冰在你上方断裂，碎冰把冰藻撒进了水里。', eff: { food: +8 } },
    { stages: ['adult','old'], w: 1, text: '你的腹部已经瘦下去，外壳显得松弛了。', eff: { health: -5 } },
    { stages: ['old'], w: 3, text: '你的游动一点一点变慢，夜里上浮的距离也越来越短。', eff: { health: -6 } },
    { stages: ['old'], w: 2, text: '你在一片冰下的藻层里停下来，身体慢慢地不再动了。', eff: { health: -10 } },
    { stages: ['juv','adult','old'], w: 1, text: '远处传来鲸的叫声，你的群体跟着一起转向，像同一个身体。' },
    { stages: ['larva'], w: 3, act: 'forage', text: '你刮下一小片冰藻，它们在口器里被嚼碎，绿色的汁水流进胃里。', eff: { food: [10, 18] } },
    { stages: ['juv','adult'], w: 2, act: 'forage', text: '一群同伴排成长队，轮流刮下冰底的藻层。你挤进队伍里吃了一口。', eff: { food: [8, 14] } },
    { stages: ['adult'], w: 2, act: 'forage', text: '你在夜里上浮到冰下，那里的藻层很厚。上方的海豹影子也在移动。', eff: { food: [12, 18], safety: -5 } },
    { stages: ['juv','adult'], w: 2, act: 'hide', text: '深水里很暗，你的消耗降下来，但冬天的藻类在这里也少得多。', eff: { food: -6 } },
    { stages: ['adult','old'], w: 2, act: 'hide', text: '你在深水里待着，头顶的冰下没有声音。', eff: { safety: +8 } },
    { stages: ['juv','adult','old'], w: 2, act: 'rest', text: '群体停在水里，你几乎感觉不到水流。身体的消耗慢了下来。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 2, act: 'explore', text: '你游过一股上升流。深层的营养被带了上来，附近的硅藻一下子多起来。', eff: { food: [14, 22] } },
    { stages: ['juv'], w: 1, act: 'explore', text: '你在一块冰山下找到一片碎冰，碎冰上长满了冰藻。', eff: { food: [8, 12] } },
    { stages: ['adult'], w: 3, act: 'mate', need: '!male', text: '你在表层释放了卵。它们一边下沉一边发育，很快就看不见了。', eff: { offspring: [300, 600] } },
    { stages: ['adult'], w: 2, act: 'mate', need: '!male', text: '这一季的雄性很少，你释放的卵只有一部分能受精。', eff: { offspring: [100, 250] } },
    { stages: ['larva'], w: 4, need: 'strong_year', text: '这一年的冰缘藻层很厚。你刮食时冰藻一层层掉进口中，胃里很快就满了。', eff: { food: [12, 20] } },
    { stages: ['larva','juv'], w: 2, need: 'strong_year', text: '你们这一批同伴特别多，冰下密密麻麻的一片，远看像一块银色的毯子。', eff: { safety: +4 } },
    { stages: ['juv'], w: 2, need: 'strong_year', act: 'forage', text: '你和同伴排成一队刮食冰藻。这一年的藻层够所有人吃。', eff: { food: [8, 14] } },
    { stages: ['larva'], w: 4, need: 'weak_year', text: '冰缘的藻层很薄，你在冰底来回找了很久，才吃到一小口。', eff: { food: -6 } },
    { stages: ['larva'], w: 2, need: 'weak_year', once: true, text: '同一批的同伴少了很多。你游了很远，也很少再遇到别的磷虾。',
      fact: '南大洋部分海域的磷虾丰度在过去几十年有明显下降的记录（Atkinson 等，2004，Nature）', eff: { health: -3 } },
    { stages: ['juv'], w: 2, need: 'weak_year', act: 'forage', text: '你刮下的冰藻很少，胃里常常是空的。身体一点点变轻。', eff: { food: -5, health: -4 } },
    { stages: ['larva'], w: 3, need: 'mid_year', text: '冰缘的藻层不厚也不薄。你每天都能吃到一点，身体长得慢而稳。', eff: { food: +6 } },
    { stages: ['juv'], w: 2, need: 'mid_year', text: '这一年的冬天不算长。春天冰融得不快，你随着水流漂到了新的水层。', eff: { food: +4 } },
    { stages: ['egg'], w: 3, need: 'early_spawn', text: '你的卵在夏初的海水里下沉。水温还低，发育得慢，但周围的食物还没有被吃光。' },
    { stages: ['larva'], w: 3, need: 'early_spawn', text: '你比同批的很多幼体早孵化，赶上了第一波藻华。', eff: { food: +10 } },
    { stages: ['larva'], w: 2, need: 'early_spawn', once: true, text: '你蜕皮的时候正好赶上一阵上升流，营养被带到了你身边。', eff: { health: +4 } },
    { stages: ['egg'], w: 3, need: 'peak_spawn', text: '这一季的卵很多，海面上漂着一层细小的卵，你随着它们一起下沉。' },
    { stages: ['larva'], w: 4, need: 'peak_spawn', text: '这一季的藻华很大。你的口器一碰到藻层，就有吃不完的食物。', eff: { food: [12, 18] } },
    { stages: ['larva','juv'], w: 2, need: 'peak_spawn', text: '同批的幼体很多，你们挤在同一片藻层里，彼此碰撞，像在一团绿色的雾里游。', eff: { food: +5, safety: -4 } },
    { stages: ['egg'], w: 3, need: 'late_spawn', text: '你是夏末释放的卵。下沉途中，水温一天天降低，发育慢了下来。' },
    { stages: ['larva'], w: 3, need: 'late_spawn', text: '你孵化时藻层已经变薄了。只能在冰缘的边上找一点残留的藻，身体很快变瘦。', eff: { food: -8, health: -3 } },
    { stages: ['larva'], w: 2, need: 'late_spawn', text: '你比同批的幼体晚了一步，别的同伴已经占住了那片藻层，你只能绕到边缘去吃。', eff: { food: -5, safety: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'bold', text: '你比同伴更早离开群体，游到一片没有人的藻层边缘，吃得很快。', eff: { food: +6, safety: -4 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '冰下传来一阵异响。同伴们还在犹豫，你已经沉到了深水里。', eff: { safety: +6 } },
    { stages: ['juv','adult'], w: 2, need: 'curious', act: 'explore', text: '你看见一片从没见过的光斑，凑近了看。那是一块融化的冰碎片，上面沾着一层绿色的藻。', eff: { food: +6 } },
    { stages: ['juv','adult'], w: 2, need: 'runt', text: '你的身体比同伴小一圈。群体游动时总把你挤到边缘，你只能在水流最弱的地方吃东西。', eff: { food: -4, safety: -3 } },
    { stages: ['juv','adult','old'], w: 2, need: 'robust', text: '你的外壳厚实，身体有力。一次和同伴的碰撞，把对方挤开了一段距离。', eff: { health: +4 } },
  ],

  opening: {
    title: '母亲在选择释放卵的深度',
    body: '你还是一枚卵，母亲正在冰缘的水域里释放你们。卵会慢慢下沉，孵化之后，幼体再慢慢向上游。你的开始，取决于卵离开母体时在哪一层水里。',
    options: [
      { t: '在冰缘的浅水里释放', hint: '食物↑ 上层的捕食者↑', eff: { food: 15 }, risk: 1.3, riskDays: 30,
        result: '卵在冰缘下方散开。浮冰上的藻层离你很近，但海豹和鱼也在附近游动。' },
      { t: '在深水里释放', hint: '安全↑ 食物少', eff: { food: -5, safety: 10 }, risk: 0.8, riskDays: 30,
        result: '你们在深水里被释放。卵一路下沉，很久之后才孵化，那时上层的捕食者已经离你很远。' },
    ],
  },

  actions: {
    forage: { name: '刮食冰藻', desc: '贴着海冰底部刮下一层冰藻，或在上层水里滤食浮游植物。', text: ['你贴着冰底，把一层绿色的冰藻刮进口中。', '藻层在你的口器前一闪一闪。', '你在上层的水里滤食，身体一伸一缩。'] },
    hide: { name: '潜入深水', desc: '离开冰缘的浅水，沉到几百米深、没有光的水层，躲开海豹和鸟。', stages: ['juv','adult','old'], text: ['深水里的光很淡，你的颜色也慢慢变暗。', '你在暗处缓慢地游，消耗比白天少。', '头顶的鲸声比你以为的要远。'] },
    rest: { name: '随群悬停', desc: '和群体一起在水里悬停，随水流慢慢漂，几乎不耗力。', text: ['你和同伴一起慢慢地漂着。', '群体像一片银色的云，缓缓地转动。', '你停下来，让水流把你推着走。'] },
    explore: { name: '游向新的藻层', desc: '离开自己的群体，去看看别处的冰下有没有藻类爆发。', stages: ['juv','adult'], text: ['你游过一片冰下的阴影，前方的光突然变亮。', '你发现一片新的冰藻层，吃得很快。', '远处的群体比你的要大很多。'] },
    mate: { name: '释放卵', desc: '雌性磷虾在上层水里释放卵，卵一边下沉一边发育。', done: '你在上层水里释放了 {n} 枚卵，它们一边下沉，一边发育。', stages: ['adult'], need: '!male', text: ['你在夜里游到表层，身体里的卵已经饱满。', '一只雄性靠近，把精荚送到你身上。', '卵一粒粒地散进水里，慢慢往下沉。'] },
  },

  decisions: [
    {
      id: 'winter_food', at: 400, when: { food: '<50' },
      title: '冰下的食物快没了',
      body: '冰缘的藻类在冬天已经被吃得差不多了。远处开阔的海域也许更深，食物却更稀少。',
      options: [
        { t: '留在冰缘，缩小身体', hint: '耗能↓ 饿着过冬',
          eff: { food: -10, safety: +5 }, risk: 1.2, riskDays: 90,
          result: '你留在冰下。身体一点点缩小，像在等一个不确定的春天。' },
        { t: '往开阔水域迁移', hint: '食物↑ 风险↑',
          eff: { food: +10 }, risk: 1.5, riskDays: 30,
          result: '你离开了冰缘，朝着远处的深水游去。' },
      ],
    },
    {
      id: 'moult', at: 250,
      title: '旧壳裂开了',
      body: '你身上的旧壳裂出一道缝。蜕皮是长大的必要过程，但在这个时候蜕皮，身体很脆弱。',
      options: [
        { t: '立刻蜕皮', hint: '健康↑ 风险↑',
          kill: 0.1, cause: 'moult', eff: { health: +10, safety: -5 },
          result: '你从旧壳里挣脱出来。新的外壳还很软，你慢慢地游动。' },
        { t: '等一等，等有食物再蜕', hint: '稳妥 · 壳还会裂开',
          eff: { food: +5 }, risk: 1.2, riskDays: 30,
          result: '你停在原地，等待更多的藻类。旧壳又裂了一道缝。' },
      ],
    },
    {
      id: 'whale', stage: 'adult',
      title: '一群须鲸',
      body: '一群须鲸从远处冲过来。它们的口张开，水流像一面墙压过来。',
      options: [
        { t: '散开', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 },
          result: '你和同伴向四面散开。一头鲸从你的身边擦过，没有张口。' },
        { t: '聚成一团，靠近海面', hint: '食物↑ 风险↑↑',
          kill: 0.25, cause: 'whale', eff: { food: +20 },
          result: '你们聚成一个密集的团，往海面靠近。鲸的口张开了。' },
      ],
    },
    {
      id: 'trawl', at: 1000,
      title: '网口在靠近',
      body: '一张拖网的网口正在朝你们这片水移动，水流的声音越来越大。',
      fact: '南极磷虾渔业的年渔获量在数十万吨量级（CCAMLR 渔获统计，2022）',
      options: [
        { t: '随群体往前游', hint: '安全 · 有可能被网住',
          kill: 0.35, cause: 'trawl', eff: { food: +5 },
          result: '你跟着群体往前游。网口的水流把你们卷了进去。' },
        { t: '潜到深处，离开群体', hint: '安全↑ 风险↑',
          eff: { safety: +15 }, risk: 1.3, riskDays: 10,
          result: '你一个人往深处潜。群体的声音越来越远。' },
      ],
    },
    {
      id: 'spawn', at: 1200, need: '!male',
      title: '繁殖的季节',
      body: '春天的藻类爆发了，你的卵巢已经发育得很饱满。现在释放卵，你会失去一些体力。',
      fact: '南极磷虾的卵在下沉过程中孵化，孵化后的幼体再向上游（Marr 1962）',
      options: [
        { t: '现在就产卵', hint: '后代↑↑ 体力↓',
          eff: { offspring: [400, 1200], health: -8 }, risk: 1.2, riskDays: 20,
          result: '你在表层水里释放了卵。它们一边下沉一边发育，很快就看不见了。' },
        { t: '推迟产卵，先吃饱', hint: '体力↑ 繁殖推迟',
          eff: { food: +20, health: +5 },
          result: '你又吃了几周。卵还在体内，不着急。' },
      ],
    },
    {
      id: 'ice_edge', at: 60,
      title: '冰缘的薄藻层',
      body: '你还是幼体，靠冰缘那层薄薄的冰藻活着。春天水温回升，冰开始融化，藻层也会随之散开，你不知道下一层在哪里。',
      fact: '海冰下的冰藻是南极磷虾幼体的重要食物来源之一（Flores 等 2012，PLoS ONE）',
      options: [
        { t: '留在冰缘，吃薄藻层', hint: '饱食↑ 冰下的捕食者↑', eff: { food: +12 }, risk: 1.3, riskDays: 15,
          result: '你留在冰缘，吃着薄薄的冰藻。偶尔有海豹的影子从上面掠过。' },
        { t: '游进开阔的水里', hint: '安全↑ 食物少', eff: { food: -6, safety: +10 },
          result: '你离开冰缘。开阔水里几乎没有藻类，但也没有海豹从冰下冲上来。' },
      ],
    },
    {
      id: 'autumn_deep', at: 1500,
      title: '日照变短的季节',
      body: '一年里的光照在变短。上层的藻类在减少，深水里的温度比较稳定，但食物更稀，只能靠身体里的储备过。',
      options: [
        { t: '留在上层，继续吃藻', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 60,
          result: '你留在上层。藻类越来越少，每一口都是在和冬天赛跑。' },
        { t: '潜入深水，减少消耗', hint: '耗能↓ 饿着', eff: { food: -8, safety: +10 },
          result: '你下潜到深水。那里的水很稳定，你的动作慢了下来。' },
      ],
    },
    {
      id: 'old_last_rise', at: 1850,
      title: '最后一次随群上浮',
      body: '你的身体越来越瘦，外壳也松了。群体还在夜里上浮，你可以跟着，也可以留在深处，慢慢沉下去。',
      options: [
        { t: '跟着群体，最后一次上浮', hint: '饱食↑ 风险↑↑', eff: { food: +15 }, kill: 0.15, cause: 'whale',
          result: '你随群体上浮，吃了一顿。一头须鲸从远处冲过来，群体散开，你从它的身侧擦了过去。' },
        { t: '留在深处，不再上浮', hint: '安全 · 不再进食', eff: { food: -10, safety: +8 },
          result: '你停在深处，水很冷，你的动作慢得几乎看不出来。' },
      ],
    },
    {
      id: 'weak_year_drift', at: 300, need: 'weak_year',
      title: '冰缘的藻层越来越薄',
      body: '你所在的冰缘藻层越来越稀。远处的开阔水域有另一片藻花，但要游很远，路上同伴会越来越少。',
      options: [
        { t: '游向远处的藻花', hint: '食物↑ 风险↑',
          eff: { food: +12 }, risk: 1.4, riskDays: 20,
          result: '你朝远处的藻花游去。路很长，身边的同伴越来越少。' },
        { t: '留在原地，等冰缘再长出藻', hint: '稳妥 · 食物少',
          eff: { food: -8, health: -3 }, risk: 1.1, riskDays: 30,
          result: '你停在冰缘下，等新的冰藻长出来。等待本身也在消耗你。' },
      ],
    },
    {
      id: 'late_spawn_winter', at: 180, need: 'late_spawn',
      title: '冬天之前的最后一层藻',
      body: '夏天快要结束，冰缘的藻层正在退缩。你出生得晚，身体里的储备还不多。',
      options: [
        { t: '冲向最后一片浮冰下的藻层', hint: '食物↑↑ 风险↑',
          kill: 0.1, cause: 'seal', eff: { food: +15 },
          result: '你冲进浮冰下的最后一片藻层，吃得很急。一只海豹的影子从冰边滑过。' },
        { t: '下潜到深水，提前过冬', hint: '耗能↓ 稳妥',
          eff: { food: -6, safety: +8 }, risk: 0.9, riskDays: 60,
          result: '你下潜到深水，身体慢慢不再需要那么多食物。' },
      ],
    },
    {
      id: 'bold_fleet', at: 800, need: 'bold',
      title: '渔船的灯光',
      body: '一艘渔船的灯光在水面上闪动，灯光下漂着食物碎屑。胆子大的同类已经游了过去。',
      options: [
        { t: '靠近灯光，抢食碎屑', hint: '食物↑↑ 风险↑',
          eff: { food: +12 }, risk: 1.5, riskDays: 10,
          result: '你游进灯光的边缘，抢到了一小口碎屑。网口的水流在远处响着。' },
        { t: '远离灯光，回到暗水', hint: '安全↑ 食物少',
          eff: { food: -4, safety: +6 },
          result: '你离开灯光，沉回暗水里。那里没有食物，但也没有网。' },
      ],
    },
  ],

  idle: [
    '你身边的水很冷，身体对此没有什么感觉。',
    '这里的光很淡，颜色偏绿。',
    '海水慢慢流动，把你带向不同的方向。',
    '你感到的只有水温和水流的一点点变化。',
    '一群看不清的小生物从你身边掠过，很快就不见了。',
    '很远的上方，海冰的影子轻轻压在海面上。',
    '你不知道自己在哪个位置，只知道周围有很多同类。',
    '白天和黑夜的差别，在这里几乎感觉不到。',
  ],

  epitaph: '你在南极冰下活过几个冬天。你的身体曾经是一个小小的食物库，最后，你成了海鸟、海豹和鲸的一部分。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'lanternfish',
  name: '灯笼鱼',
  en: 'Lanternfish',
  sci: 'Myctophidae（灯笼鱼科），中层鱼类',
  emoji: '🐟',
  scene: 'deep',
  kind: 'wild',
  tagline: '可能是地球上数量最多的脊椎动物之一，白天待在黑暗的深水里，夜里上浮到表层',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生海区', options: [
        ['北太平洋副热带的开阔海水', 3, {}],
        ['南大洋北缘的温带海域', 2, { risk: 1.1 }],
        ['加那利上升流附近，浮游生物丰富的水域', 2, { food: +10 }],
        ['西印度洋一片深海盆地的上方', 1, { food: -5 }],
      ]},
      { label: '出生那年的海况', options: [
        ['拉尼娜年，上升流把深层营养带上来，浮游生物密', 2, { food: +8, set: 'lanina' }],
        ['厄尔尼诺年，表层暖水压住了上升流，浮游生物稀', 2, { food: -8, risk: 1.15, set: 'elnino' }],
        ['一个平常年份，海况没有什么特别', 4, {}],
      ]},
      { label: '出生的季节', options: [
        ['春季，浮游植物刚刚大量繁殖', 3, { food: +6, set: 'spring' }],
        ['夏季，水温偏暖，卵很快就孵了出来', 2, { risk: 1.1, set: 'summer' }],
        ['冬季，表层水冷，浮游生物少', 2, { food: -8, risk: 0.9, set: 'winter' }],
      ]},
    ],
    siblings: 5000,
    siblingsLabel: '同一批产下的卵',
    intro: '你是一枚卵，漂在{出生海区}，靠近海面。你是{sex}。同一批卵大约有 {siblings} 枚，大多数会被别的东西吃掉。',
  },

  stages: [
    { id: 'egg',   name: '卵',                from: 0,    unit: 'day'   },
    { id: 'larva', name: '仔鱼（表层）',       from: 3,    unit: 'week'  },
    { id: 'juv',   name: '幼鱼（开始垂直迁移）', from: 60,   unit: 'month' },
    { id: 'adult', name: '成鱼',              from: 365,  unit: 'month' },
    { id: 'old',   name: '老年',              from: 900,  unit: 'month' },
  ],
  maturity: 365,
  maxAge: 1460,

  survival: [[0,1],[3,0.2],[21,0.05],[60,0.03],[120,0.02],[365,0.008],[600,0.004],[900,0.001],[1460,0]],
  survivalNote: '中层鱼类的寿命多在 1–4 年；早期死亡率极高，此曲线结合捕食压力和渔业研究的估计粗估',

  init: { health: 70, food: 55, safety: 45 },
  foodDrain: 3,

  causes: [
    { id: 'squid', escape: true, w: 4, stages: ['juv','adult','old'], short: '被鱿鱼抓住',
      text: '一只鱿鱼从黑暗里伸出触腕，卷住了你。它的吸盘在一瞬间收紧。' },
    { id: 'tuna', escape: true, w: 3, stages: ['juv','adult'], short: '被金枪鱼追上',
      text: '一群金枪鱼从上层冲下来，群体被冲散。你来不及找到发光的掩护。' },
    { id: 'seabird', escape: true, w: 2, stages: ['larva'], short: '被海鸟从海面抓走',
      text: '一只海鸟从空中俯冲下来，翅膀几乎没有带起水花。你在它的喙里消失了。' },
    { id: 'egg', escape: false, w: 5, stages: ['egg'], short: '卵被吃掉',
      text: '你还在卵里，就被一只桡足类连同周围的卵一起吃了下去。' },
    { id: 'starve', escape: false, w: 2, stages: ['juv','adult','old'], short: '饿死',
      text: '夜里上浮的路上没有找到足够的浮游动物。你的身体一点点变轻，最后停在水里。' },
    { id: 'dolphin', escape: true, w: 2, stages: ['juv','adult'], short: '被海豚追上',
      text: '一群海豚在你的群体下方跃起，声音在水里很远。你们往四面散开，只有一条没逃掉。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的光越来越暗，游动越来越慢。最后，你下沉到没有光的水里。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵在海面附近漂着，像一颗透明的小珠子。' },
    { stages: ['egg'], w: 1, once: true, text: '你孵化成仔鱼。身体很小，还没有发光器，只能跟着水流游。' },
    { stages: ['larva'], w: 4, text: '你在表层吃到桡足类的幼体，一口一口地咬碎。', eff: { food: [10, 18] } },
    { stages: ['larva'], w: 2, text: '白天，你在阳光下游动。影子清楚地投在水面下，很容易被看见。', eff: { safety: -8 } },
    { stages: ['larva'], w: 2, text: '一团浮游植物碎屑缓缓漂过，你吃掉了其中的一部分。', eff: { food: +5 } },
    { stages: ['larva'], w: 1, once: true, text: '你身体两侧开始长出第一批发光器。它们的光很淡，只有在黑暗中才看得出来。' },
    { stages: ['juv'], w: 3, text: '白天你下潜到几百米深。光线一层层暗下去，水温越来越低。', eff: { food: -3 } },
    { stages: ['juv'], w: 3, text: '夜里你上浮到几十米的水层，和其他鱼一起吃浮游动物。', eff: { food: [10, 16] } },
    { stages: ['juv','adult'], w: 2, text: '你腹侧的发光器闪动，光的强度和头顶的月光对上了。你的影子消失了。',
      fact: '灯笼鱼等中层鱼类用腹侧发光器产生与上方天光相近的光，以消除自身的影子（Herring 2002，《The Biology of the Deep Ocean》）', eff: { safety: +8 } },
    { stages: ['juv'], w: 2, text: '一只鱿鱼从黑暗里伸出触腕，你猛地一闪，躲了过去。', eff: { safety: -10 } },
    { stages: ['adult'], w: 1, once: true, need: '!male', text: '你第一次产卵，卵漂浮在上层的水里。', eff: { offspring: [200, 500] } },
    { stages: ['adult'], w: 3, text: '黎明时分，水层的光开始变亮。你随着群体往深处沉。', eff: { safety: +5, food: -4 } },
    { stages: ['adult'], w: 3, text: '夜里，你的群体上浮。你吃掉了一片桡足类，又吃了一片。', eff: { food: [10, 18] } },
    { stages: ['adult'], w: 2, text: '一群金枪鱼从上层冲下来，群体被冲散。', eff: { safety: -12 } },
    { stages: ['adult'], w: 2, text: '海豚在远处跃出水面。它们的声音穿过很深的水，传到你这里时已经很弱。', eff: { safety: -4 } },
    { stages: ['adult'], w: 1, text: '你的发光器在黑暗里一闪一闪，像一小片移动的星空。' },
    { stages: ['adult'], w: 1, text: '一股暖水把你带到了一片饵料多的地方。', eff: { food: +8 } },
    { stages: ['adult','old'], w: 2, text: '一群别的鱼从旁边经过。你们互相避开，各自游向自己的深度。' },
    { stages: ['old'], w: 3, text: '你的游动慢下来，夜里上浮的距离也越来越短。', eff: { health: -6 } },
    { stages: ['old'], w: 2, text: '你的鳞片掉了一些，发光器的光也暗了。', eff: { health: -5, safety: -5 } },
    { stages: ['old'], w: 1, once: true, need: '!male', text: '你体内的卵巢已经空了。你不再上浮。', set: 'spent' },
    { stages: ['larva'], w: 3, act: 'forage', text: '夜里，你在表层撞上一团磷虾幼体，咬住它的时候身体猛地一抖。', eff: { food: [10, 16], safety: -3 } },
    { stages: ['juv','adult'], w: 3, act: 'forage', text: '夜里你上浮到几十米的水层，嘴里塞满了桡足类。', eff: { food: [12, 18] } },
    { stages: ['juv','adult'], w: 2, act: 'forage', text: '黄昏时，你在浅层吃得正香。一群银色的鲱鱼从上方压下来，你被冲散了。', eff: { food: +6, safety: -10 } },
    { stages: ['juv','adult','old'], w: 2, act: 'hide', text: '深水里有一小团发光的水母，它的光和你的光混在一起，你们互相看不清。', eff: { safety: +6 } },
    { stages: ['old'], w: 1, act: 'hide', text: '你在深水里待了很久。一片鳞片脱落下来，周围的水很冷。', eff: { health: -4 } },
    { stages: ['juv','adult','old'], w: 2, act: 'rest', text: '你悬在一层温水里，身体的光慢慢熄灭，又慢慢亮起。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, act: 'rest', text: '一只鱿鱼的触腕从黑暗里探出来，又缩了回去。', eff: { safety: -6 } },
    { stages: ['juv'], w: 2, act: 'explore', text: '你游进一片冷水团，几种没见过的小鱼在暗处成群地游动。', eff: { food: [6, 10] } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你碰到一团浑浊的水，那里的浮游生物很多，颜色也更暗。', eff: { food: [12, 20], safety: -5 } },
    { stages: ['adult'], w: 3, act: 'mate', need: '!male', text: '你释放了一批卵，它们漂在上层水里，被海水带向不同的方向。', eff: { offspring: [150, 400] } },
    { stages: ['larva'], w: 3, need: 'lanina', text: '表层的水里浮游植物长得很密，你每游一段就能碰到一团食物。', eff: { food: [8, 14] } },
    { stages: ['juv','adult'], w: 2, need: 'lanina', text: '夜里上浮的水层里，磷虾和桡足类比往年多。你吃完一顿，还能再吃一顿。', eff: { food: [6, 10] } },
    { stages: ['larva'], w: 3, need: 'elnino', text: '表层的水暖而薄，你游了很远，也只找到几口吃的。', eff: { food: -10, health: -3 } },
    { stages: ['juv'], w: 2, need: 'elnino', text: '这一年的水温一直偏高。你的代谢跟着快起来，比别的鱼更早觉得饿。', eff: { food: -6 } },
    { stages: ['larva'], w: 3, need: 'spring', text: '春天的表层水里，浮游植物一片一片地绿着。你吃得比别的仔鱼多，身体也长得快。', eff: { food: [6, 10], health: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'spring', text: '你和同一季出生的鱼挤在一起。夜里上浮时，你们的发光器连成一片，很显眼。', eff: { safety: -4 } },
    { stages: ['larva'], w: 3, need: 'summer', text: '水温高，你长得很快，但表层的食物一天比一天少。', eff: { food: -5, health: +4 } },
    { stages: ['larva','juv'], w: 2, need: 'summer', text: '夏天的表层很亮，海鸟比平时多。好几天，你都只敢在夜里靠近海面。', eff: { safety: -6 } },
    { stages: ['larva'], w: 3, need: 'winter', text: '表层的水很冷，浮游动物稀少。你的动作慢下来，每一口都吃得很认真。', eff: { food: -8, health: -4 } },
    { stages: ['juv'], w: 2, need: 'winter', text: '冬天的水层很深，几乎见不到光。你的发光器在黑暗里亮着，是这一片唯一的亮处。', eff: { safety: +5 } },
    { stages: ['juv','adult'], w: 2, need: 'bold', text: '一群金枪鱼从上方冲下来。你没有往深处躲，而是贴着它们的边缘滑过去，顺手吃掉了一只被惊起的桡足类。', eff: { food: +5, safety: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '你在深水里停了很久，等上层的鱼和海鸟都走远，才肯慢慢上浮。', eff: { food: -4, safety: +6 } },
    { stages: ['juv','adult'], w: 2, need: 'curious', text: '远处有一只水母的触手在闪。你游过去看了一眼，它的光和你的光混在一起，你忘了时间。', eff: { food: +4, safety: -3 } },
    { stages: ['larva','juv'], w: 2, need: 'runt', text: '你比身边的同伴小一圈。群体上浮时，你总是落在最后，被浮游生物追着跑。', eff: { food: -5, safety: -4 } },
    { stages: ['adult','old'], w: 2, need: 'robust', text: '你的身体比别的鱼结实。群体冲进一片磷虾时，你挤在最前面，吃到了比别人更多。', eff: { food: +6, health: +4 } },
  ],

  opening: {
    title: '母亲在选择产卵的水层',
    body: '你还是一枚卵，母亲正在上层水里游动。白天它待在几百米深的地方，夜里才上浮。产卵的水层，要么靠近海面的光，要么深一点，离海鸟远一些。',
    options: [
      { t: '在表层水中放卵', hint: '食物↑ 海鸟↑', eff: { food: 10 }, risk: 1.5, riskDays: 21,
        result: '卵在上层的水里漂开，很快被浮游生物的颜色包住。远处的海鸟在水面上盘旋。' },
      { t: '在较深的水层放卵', hint: '安全↑ 食物少', eff: { food: -8, safety: 10 }, risk: 0.8, riskDays: 21,
        result: '卵在较深的水里漂开。那里没有海鸟，但浮游生物也少，你要靠身体里的卵黄撑很久。' },
    ],
  },

  actions: {
    forage: { name: '夜里上浮觅食', desc: '天黑后跟着群体上浮到几十米的水层，吃桡足类和磷虾。白天不去。', text: ['你在黑暗的水层里吃到一只桡足类，又游了一段。', '夜里的水很暗，你腹侧的发光器一闪一闪。', '一团浮游动物从你身前滑过，你张口吞下。'] },
    hide: { name: '白天下潜', desc: '白天下到几百米深的暗水里，躲开鸟和金枪鱼。', stages: ['juv','adult','old'], text: ['光线一层层暗下去，身体的颜色也跟着变暗。', '你的发光器微微闪着，和头顶的光对上了。', '水温越来越低，你的动作慢下来。'] },
    rest: { name: '悬停不动', desc: '在一层水里停住，鳍轻轻拨动，减少消耗。', text: ['你停在水里，鳍轻轻地拨动。', '水流把你推向深处，又慢慢放开。', '你的光慢慢熄灭，过一会儿又亮起来。'] },
    explore: { name: '游向别的水层', desc: '离开群体，朝水温和光线都不同的水层去看看。', stages: ['juv','adult'], text: ['你游进一股暖水，那里的浮游动物比别处多。', '远处的水面上有一块模糊的影子，你不知道是什么。', '你穿过一层水温突变的界面，身上一阵发冷。'] },
    mate: { name: '上层产卵', desc: '成熟的雌鱼在上层水中释放卵，卵漂在海面附近，被温暖的水托着。', done: '你在上层水中产下了 {n} 枚卵。', stages: ['adult'], need: '!male', text: ['你游向上层温暖的水。', '身体里的卵已经成熟，你慢慢放松。', '卵一批批漂散开，被海水带向不同的方向。'] },
  },

  decisions: [
    {
      id: 'dusk', at: 370,
      title: '黄昏',
      body: '夜幕降临，你的群体开始上浮。表层有丰富的食物，也有饥饿的金枪鱼。',
      options: [
        { t: '跟着群体上浮', hint: '饱食↑↑ 风险↑',
          eff: { food: +20 }, risk: 1.6, riskDays: 1,
          result: '你在黑暗的表层吃饱了。远处有一片银色的水花，你没有去看。' },
        { t: '留在深处', hint: '安全 · 饿一点',
          eff: { food: -8, safety: +12 },
          result: '你停在较深的水里，发光器一直闪着，直到天亮。' },
      ],
    },
    {
      id: 'tuna', at: 150, when: { safety: '<60' },
      title: '一群金枪鱼',
      body: '一群金枪鱼的影子从上方压下来。它们游得很快，群体开始散开。',
      options: [
        { t: '冲向黑暗的深水', hint: '安全↑ 风险↑',
          eff: { safety: +15 }, risk: 1.2, riskDays: 3,
          result: '你一头扎进黑暗里。金枪鱼的影子从你身上滑过，没有停下。' },
        { t: '混进群体，闪烁发光器', hint: '危险↑↑',
          kill: 0.2, cause: 'tuna', eff: { food: +5 },
          result: '你们的发光器在水里一起闪烁。金枪鱼调转了方向，却冲进了你们中间。' },
      ],
    },
    {
      id: 'surface', at: 15, stage: 'larva',
      title: '表层的光',
      body: '白天的阳光把表层照亮。海鸟在上空盘旋，它们的影子在水面上来回移动。',
      options: [
        { t: '留在表层吃', hint: '饱食↑ 海鸟↑',
          eff: { food: +10 }, risk: 1.8, riskDays: 2, kill: 0.15, cause: 'seabird',
          result: '你在表层吃到一团食物。一只海鸟在上方落下，又飞起来。' },
        { t: '沉入下层', hint: '安全 · 饿',
          eff: { food: -5, safety: +10 },
          result: '你往下沉，阳光在你身后慢慢消失。' },
      ],
    },
    {
      id: 'spawn', stage: 'adult', need: '!male',
      title: '该产卵了',
      body: '你体内的卵已经成熟。上层的水温适合卵的发育，但海鸟和鱼群也在那里。',
      options: [
        { t: '在上层水中产卵', hint: '后代↑↑ 风险↑',
          eff: { offspring: [200, 600] }, risk: 1.3, riskDays: 3,
          result: '你在上层的水里释放了卵。它们漂散开，很快看不见了。' },
        { t: '留在深处，推迟产卵', hint: '安全 · 后代↓',
          eff: { food: +5, safety: +8 },
          result: '你继续待在深水里。卵还在体内，不着急。' },
      ],
    },
    {
      id: 'first_dive', at: 60,
      title: '第一次下潜',
      body: '你的身体开始能感觉到光线的变化。白天的表层很亮，海鸟在上面盘旋。你可以学着白天往深处沉，也可以留在表层继续吃。',
      options: [
        { t: '白天下潜到几百米', hint: '安全↑ 食物↓', eff: { safety: +10, food: -6 }, risk: 1.1, riskDays: 10,
          result: '你往下沉，光线在身后一层层暗下去。' },
        { t: '留在表层吃', hint: '饱食↑ 金枪鱼↑', eff: { food: +10 }, risk: 1.6, riskDays: 5, kill: 0.1, cause: 'tuna',
          result: '你留在表层吃东西。一群金枪鱼从上方冲下来，你及时沉了下去。' },
      ],
    },
    {
      id: 'lure_dim', at: 600,
      title: '发光器的亮度',
      body: '成鱼的发光器能和头顶的天光对上，让你的影子消失。但亮起来的时候，你在黑暗里也更容易被别的眼睛看见。',
      fact: '灯笼鱼等中层鱼类用腹侧发光器产生与上方天光相近的光，以消除自己的影子（Herring 2002，《The Biology of the Deep Ocean》）',
      options: [
        { t: '保持发光，和群体一起上浮', hint: '饱食↑ 被看见↑', eff: { food: +10, safety: -4 }, risk: 1.2, riskDays: 30,
          result: '你和群体一起亮着上浮。群体里的光连成一片，你吃到了很多。' },
        { t: '把发光器调暗，独自游', hint: '隐蔽↑ 食物↓', eff: { food: -6, safety: +8 },
          result: '你把发光器调暗，独自游在群体的边缘。周围很暗，没有谁注意到你。' },
      ],
    },
    {
      id: 'old_stay_down', at: 1100,
      title: '最后几次上浮',
      body: '你的身体越来越轻，夜里上浮的距离也越来越短。群体还在上浮，你可以跟上去，也可以留在深处，让身体慢慢停下来。',
      options: [
        { t: '跟着群体上浮，吃最后一顿', hint: '饱食↑↑ 风险↑↑', eff: { food: +15 }, kill: 0.15, cause: 'squid',
          result: '你在黑暗的水层里吃饱了。一只鱿鱼的触腕从你身边掠过，你及时拐向了群体中间。' },
        { t: '留在深处，不再上浮', hint: '安全 · 不再进食', eff: { food: -10, safety: +8 },
          result: '你停在深处的黑暗里，不再上浮。周围的水很静，偶尔有一点光闪过。' },
      ],
    },
    {
      id: 'elnino_surface', at: 12, need: 'elnino',
      title: '稀薄的表层',
      body: '表层的水暖而薄，浮游生物比平时稀。你可以留在表层慢慢找吃的，也可以沉到更冷的水里，省着消耗。',
      options: [
        { t: '留在表层，继续找吃的', hint: '饱食↑ 风险↑',
          eff: { food: +8 }, risk: 1.4, riskDays: 10,
          result: '你在暖水里来回游，找到几口吃的。一只海鸟的影子从水面掠过，你没有去看。' },
        { t: '沉到冷水里，省着吃', hint: '安全↑ 食物↓',
          eff: { food: -6, safety: +10 }, risk: 0.85, riskDays: 10,
          result: '你往下沉，身体慢下来。暖水的颜色在头顶渐渐淡去。' },
      ],
    },
    {
      id: 'lanina_bloom', at: 60, need: 'lanina',
      title: '上升流带来的磷虾',
      body: '上升流把深层的营养带到了这里，一大片磷虾正在上浮。你可以全力去吃，也可以只吃一部分，留些力气。',
      options: [
        { t: '全力去吃', hint: '饱食↑↑ 风险↑',
          eff: { food: +18 }, risk: 1.3, riskDays: 5,
          result: '你一直吃到肚子发亮。群体的光在你周围连成一片，你没有注意周围的水。' },
        { t: '吃七分饱，留在群体中间', hint: '饱食↑ 安全↑',
          eff: { food: +8, safety: +6 },
          result: '你吃了一部分，就游回群体中间。磷虾还在上浮，你不再追它们。' },
      ],
    },
    {
      id: 'winter_cold', at: 90, need: 'winter',
      title: '冬天的冷水',
      body: '你在冷水里待了很久，动作一天比一天慢。上层还有一点食物，但那里也更亮，更危险。',
      options: [
        { t: '留在冷水里，减少消耗', hint: '安全↑ 食物↓',
          eff: { food: -5, health: +3 }, risk: 0.9, riskDays: 20,
          result: '你停在冷水里，鳍轻轻地拨动。一个冬天，你很少动。' },
        { t: '上浮到暖一点的水层找吃的', hint: '饱食↑ 风险↑',
          eff: { food: +12 }, risk: 1.4, riskDays: 5, kill: 0.1, cause: 'squid',
          result: '你往上游了一段，吃到了一小团桡足类。一只鱿鱼的触腕在暗处闪了一下。' },
      ],
    },
    {
      id: 'bold_edge', at: 90, need: 'bold',
      title: '群体的边缘',
      body: '群体在上浮，边缘有一只落单的幼鱼，它的光已经暗了下去。磷虾在它前面一片片地漂。你可以冲到前面去，也可以跟着群体走。',
      options: [
        { t: '冲到前面，抢那片磷虾', hint: '饱食↑↑ 风险↑',
          eff: { food: +12 }, risk: 1.3, riskDays: 3,
          result: '你抢到了一口。别的鱼被你挤开，有一条在你身侧急转弯，没有追上来。' },
        { t: '跟着群体，不冒进', hint: '安全↑',
          eff: { safety: +5, food: +3 },
          result: '你跟着群体一起上浮。那只落单的幼鱼被你甩在后面，你没有再看它。' },
      ],
    },
  ],

  idle: [
    '水温在慢慢变化，你感觉得到，却说不清它为什么变。',
    '周围的水时亮时暗，像在慢慢地呼吸。',
    '一只水母漂过，它的触手在你周围缠绕了一下，又松开了。',
    '海流把你往一个方向推了一阵，又慢慢放开。',
    '你不知道上面是白天还是黑夜，只能靠水温的变化来判断时间。',
    '一团细小的生物在水里漂着，很快就被别的什么吃掉了。',
    '远处有一团淡淡的光，很快又暗了下去。',
    '这片水里的食物时多时少，你不太在意。',
  ],

  epitaph: '你一生大多数时间都在没有阳光的水里。那些发光器官是你和周围世界之间仅有的一种交流方式，而周围几乎没有别的眼睛看得到它们。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'sardine',
  name: '沙丁鱼',
  en: 'Sardine',
  sci: 'Sardinops sagax 等沙丁鱼类（野生群体）',
  emoji: '🐟',
  scene: 'ocean',
  kind: 'wild',
  tagline: '一条沙丁鱼能活下来几乎靠运气，但一大群沙丁鱼是海鸟、海豚和大型鱼类的重要食物',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生海区', options: [
        ['一片沿岸上升流区，浮游生物丰富的浅海', 3, { food: +10 }],
        ['大洋西岸的暖流边缘', 2, {}],
        ['一片多风、混浊的近岸海域', 2, { risk: 1.2 }],
        ['远离海岸的开阔海水', 1, { food: -5 }],
      ]},
      { label: '出生那年的海况', options: [
        ['一个常年的年份，水温和洋流都在常规范围', 3, { set: 'normalyr' }],
        ['厄尔尼诺年，东太平洋的暖水向东推进，上升流减弱', 2, { food: -8, risk: 1.1, set: 'elnino' }],
        ['拉尼娜年，冷水上涌增强，浮游生物充足', 2, { food: +8, set: 'lanina' }],
      ]},
      { label: '孵化的季节', options: [
        ['春末孵化，赶上浮游生物的春季高峰', 3, { food: +8, set: 'springhatch' }],
        ['盛夏孵化，水温高，卵的数量多，死得也快', 2, { risk: 1.2, set: 'summerhatch' }],
        ['深秋孵化，浮游生物已经在减少', 2, { food: -6, set: 'autumnhatch' }],
      ]},
    ],
    siblings: 30000,
    siblingsLabel: '同一批在海面上产下的卵',
    intro: '你是一枚卵，漂浮在{出生海区}，直径约一毫米。你是{sex}。同一批卵大约有 {siblings} 枚，但真正能长大的只是很少一部分。',
  },

  stages: [
    { id: 'egg',   name: '卵（漂浮）',  from: 0,    unit: 'day'   },
    { id: 'larva', name: '仔鱼',        from: 3,    unit: 'day'   },
    { id: 'juv',   name: '幼鱼（鱼群）', from: 40,   unit: 'week'  },
    { id: 'adult', name: '成鱼',        from: 365,  unit: 'month' },
    { id: 'old',   name: '老鱼',        from: 1800, unit: 'month' },
  ],
  maturity: 365,
  maxAge: 3650,

  survival: [[0,1],[3,0.05],[40,0.004],[180,0.0015],[365,0.001],[1000,0.0004],[1800,0.0001],[3650,0]],
  survivalNote: '沙丁鱼早期死亡率极高，卵到补充群体的比例通常极低；寿命可达十年以上，此曲线按早期生活史研究和渔业统计粗估',

  init: { health: 70, food: 55, safety: 40 },
  foodDrain: 3,

  causes: [
    { id: 'purse', escape: true, w: 4, stages: ['juv','adult','old'], short: '被围网圈住',
      text: '网圈在船的一侧慢慢收紧，鱼群被挤到一起。你在网里挣扎了几分钟，然后被舀进了鱼舱。' },
    { id: 'dolphin', escape: true, w: 3, stages: ['juv','adult','old'], short: '被海豚赶进鱼球',
      text: '海豚把鱼群围成一团，轮流从外面冲进去吃。你在鱼球的外层，没有躲过第三次冲击。' },
    { id: 'gannet', escape: true, w: 3, stages: ['juv','adult'], short: '被塘鹅俯冲抓走',
      text: '一只塘鹅从十几米高的空中收拢翅膀，直直扎进水里。它的喙把你从鱼群里夹了出来。' },
    { id: 'tuna', escape: true, w: 2, stages: ['juv','adult'], short: '被金枪鱼冲散后吃掉',
      text: '一群金枪鱼从鱼群下方冲上来，鱼群炸开。你游得不够快。' },
    { id: 'larva_eaten', escape: true, w: 6, stages: ['egg','larva'], short: '早期被吃光',
      text: '你还很小，一只桡足类、一只水母或一条更大的鱼，就把你和周围的同伴一起吃了。' },
    { id: 'starve', escape: false, w: 2, stages: ['larva','juv'], short: '浮游生物高峰没赶上，饿死',
      text: '这几天浮游生物突然减少，你的肠子空了。你游过的每一片海都是空的。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的鳞片失去光泽，游动越来越慢，最后落在了鱼群的边缘，慢慢地沉下去。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵漂在海面上，和你一样的卵成千上万地挤在一起。' },
    { stages: ['egg'], w: 1, once: true, text: '你孵化成仔鱼，身长只有几毫米。你的嘴很小，只能吃最微小的浮游生物。' },
    { stages: ['larva'], w: 4, text: '你在浮游生物里找到一只小桡足幼体，吃掉了它。', eff: { food: [10, 18] } },
    { stages: ['larva'], w: 3, text: '一只水母的触手从旁边扫过，你几乎没有躲开。', eff: { safety: -12 } },
    { stages: ['larva'], w: 2, text: '一阵海风把表层的水推向近岸，你被带进了一片温度更高的浅水。', eff: { health: -3 } },
    { stages: ['larva'], w: 2, text: '一整天都没有找到食物。你的身体变得透明，也慢慢变窄了。', eff: { food: -12, health: -5 } },
    { stages: ['juv'], w: 3, text: '你和一群同龄的鱼聚在一起。群体转向时，每条鱼都像同时收到了信号。', eff: { safety: +6 } },
    { stages: ['juv'], w: 3, text: '黄昏时，鱼群贴着海面游动，你吃了很多浮游动物。', eff: { food: [10, 16] } },
    { stages: ['juv'], w: 2, text: '一只海豚从鱼群下方冲进来，你们立刻绕成一个圈。', eff: { safety: -12 } },
    { stages: ['juv'], w: 1, text: '夏天的海水很暖。你的群体游得很慢，吃得也不多。', eff: { food: -5 } },
    { stages: ['adult'], w: 1, once: true, text: '你第一次产卵。你把卵和精子一起释放到水里，它们在海水中相遇。', eff: { offspring: [300, 900] } },
    { stages: ['adult'], w: 3, text: '一群鲣鸟在鱼群上方盘旋。它们的影子落在海面上，鱼群一下子往深处沉。', eff: { safety: -8 } },
    { stages: ['adult'], w: 3, text: '鱼群聚成一个球形，外层的鱼不断被咬掉。你在球的中间，吃到了一些碎屑。', eff: { food: +5, safety: -5 } },
    { stages: ['adult'], w: 2, text: '一艘夜间作业的渔船亮起灯，鱼群被灯光吸引过去。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, text: '远处的围网正在合拢，鱼群在水里被一点点包围。', eff: { safety: -12 } },
    { stages: ['adult'], w: 2, text: '上升流把深层的营养带了上来，浮游生物突然多了起来。', eff: { food: [12, 20] } },
    { stages: ['adult'], w: 1, text: '海水变暖，浮游生物的数量在下降。你的食量少了些。', eff: { food: -8 } },
    { stages: ['adult'], w: 2, text: '你吃饱了，身体变得厚实，在鱼群中游得更稳。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 1, text: '一条金枪鱼从鱼群旁边穿过，鱼群分开又合上。', eff: { safety: -6 } },
    { stages: ['old'], w: 3, text: '你的游动慢下来，只能跟在鱼群的边缘。', eff: { health: -5 } },
    { stages: ['old'], w: 2, text: '你的鳞片失去光泽，身上有了几道旧伤痕。', eff: { health: -4 } },
    { stages: ['old'], w: 1, once: true, text: '你已经很久没有产卵了，身体里的性腺也萎缩了。', set: 'spent' },
    { stages: ['old'], w: 1, text: '一群年轻的沙丁鱼从你身边穿过，你们互相避开。' },
    { stages: ['larva'], w: 3, act: 'forage', text: '你在表层的水里找到一只桡足幼体，吃掉了它。', eff: { food: [8, 14] } },
    { stages: ['juv'], w: 3, act: 'forage', text: '黄昏时，鱼群在海面附近吃浮游动物。夕阳把水染成金色，你吃得很饱。', eff: { food: [10, 14] } },
    { stages: ['adult'], w: 2, act: 'forage', text: '一群鲣鸟在鱼群上方盘旋。你们往下沉，吃到一口浮游动物就被赶了回来。', eff: { food: +5, safety: -8 } },
    { stages: ['juv','adult'], w: 1, act: 'forage', text: '一股冷水突然涌上来，表层的浮游生物一下子沉了下去。', eff: { food: -8 } },
    { stages: ['juv','adult','old'], w: 2, act: 'hide', text: '你挤进鱼球中间。外面有海豚撞击鱼群的声音，中心却很安静。', eff: { safety: +8 } },
    { stages: ['adult','old'], w: 2, act: 'hide', text: '你贴着海底躲着，身下是一层细沙。鸟的影子在远处的水面上来回掠过。', eff: { safety: +5, food: -4 } },
    { stages: ['juv','adult','old'], w: 2, act: 'rest', text: '你随水流漂着，身边的鱼群慢慢转向。你的身体恢复了一点。', eff: { health: +3 } },
    { stages: ['old'], w: 1, act: 'rest', text: '一条鲨鱼从下方慢慢游过，它没有靠近，只是把水压得沉了一下。', eff: { safety: -4 } },
    { stages: ['juv','adult'], w: 2, act: 'explore', text: '你游进一片上升流，那里水温低，浮游生物密，吃得很饱。', eff: { food: [12, 20] } },
    { stages: ['juv'], w: 1, act: 'explore', text: '你离开鱼群，在近岸的浅水里迷了路。礁石很多，你绕了好几圈才找到群体。', eff: { health: -5, safety: -5 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '一片浅海的海草旁，几条小鱼和你一起待了一会儿。它们不是你的群体，各自游开了。', eff: { food: +5 } },
    { stages: ['adult'], w: 3, act: 'mate', text: '你们在海面附近同时释放卵和精子。它们在海水里互相找到对方。', eff: { offspring: [300, 800] } },
    { stages: ['larva'], w: 3, need: 'normalyr', text: '这一年的浮游生物高峰准时到来，你在水面附近吃了几天，没有饿过。', eff: { food: [6, 10] } },
    { stages: ['juv'], w: 2, need: 'normalyr', text: '鱼群按季节迁移，你们沿着熟悉的路线游动，路上没有遇到意外。', eff: { safety: +4 } },
    { stages: ['larva'], w: 3, need: 'elnino', text: '表层的水一直是温的，桡足类幼体散得很开，你好几天都没有遇到一片密集的浮游生物。', eff: { food: -10 } },
    { stages: ['juv'], w: 2, need: 'elnino', text: '一股暖水从南边压过来，鱼群往深水里沉，离开了原来的觅食区。', eff: { food: -6, health: -3 } },
    { stages: ['larva'], w: 3, need: 'lanina', text: '冷水从深处涌上来，表层的营养又密又浓，你一天之内就吃饱了。', eff: { food: [12, 18] } },
    { stages: ['juv'], w: 2, need: 'lanina', text: '冷水把觅食的范围拉长了，你们沿着上升流的边缘游了很久，吃得很饱。', eff: { food: [8, 12], health: +3 } },
    { stages: ['egg'], w: 2, need: 'springhatch', text: '春天的水温一天天升高，卵的发育很顺利，你在一周里就长出了眼点。', eff: { health: +3 } },
    { stages: ['larva'], w: 3, need: 'springhatch', text: '你刚张开嘴，就碰上了一片密集的桡足类幼体，吃得很快。', eff: { food: [10, 16] } },
    { stages: ['egg'], w: 2, need: 'summerhatch', text: '夏天的水很暖，卵发育得很快，也比别人更早地用完了卵黄。', eff: { health: -4 } },
    { stages: ['larva'], w: 3, need: 'summerhatch', text: '水温高，身体的代谢也快，你还没找到足够的食物，身体已经变窄了。', eff: { food: -8, health: -3 } },
    { stages: ['larva'], w: 3, need: 'autumnhatch', text: '秋天的浮游生物越来越少，你每天都在找食物，找到的越来越少。', eff: { food: -10 } },
    { stages: ['juv'], w: 2, need: 'autumnhatch', text: '你比同龄的鱼晚了一季才长大，群体转向时你总是慢半拍，被挤到了边上。', eff: { safety: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'bold', text: '一群海豚从远处冲来，你第一个转向，把鱼群带向了另一侧。', eff: { safety: -4, food: +3 } },
    { stages: ['larva'], w: 2, need: 'runt', text: '你比同龄的仔鱼瘦小，在浮游生物里抢不过别人，只能捡别人不要的碎屑。', eff: { food: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '你在鱼群边缘待了很久，直到确认前面的水是安静的，才跟着群体往前。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '你的身体结实，撞进鱼群深处也没有受伤，群体的尾流把你推到了前面。', eff: { health: +4 } },
  ],

  opening: {
    title: '产卵的时间和水层',
    body: '你还是一枚卵。母亲所在的鱼群正在海面附近聚集，水温合适，产卵就快开始了。白天在表层集中放卵，卵多，但海鸟和鱼都看得见；夜里在深一点的水里放卵，安静得多。',
    options: [
      { t: '白天在表层集中放卵', hint: '卵数量↑ 海鸟↑', eff: { food: 10 }, risk: 1.5, riskDays: 30,
        result: '卵在阳光下的海面附近散开，像一层薄薄的雪。它们很多，但海鸟也很显眼。' },
      { t: '夜里在深一点的水里放卵', hint: '安全↑ 饿一点', eff: { food: -10, safety: 10 }, risk: 0.8, riskDays: 30,
        result: '卵在夜色里沉进水层。这里的浮游生物更少，你和同伴都要靠卵黄撑过最初几天。' },
    ],
  },

  actions: {
    forage: { name: '在表层滤食', desc: '贴着海面吃浮游动物，群体会一起上浮，又一起沉下去。', text: ['你张开口，海水和浮游动物一起涌进来。', '鱼群在海面附近转了一圈，又慢慢下沉。', '水里漂着细小的桡足类，你一口一口咽下去。'] },
    hide: { name: '钻进鱼球中心', desc: '挤进鱼群的中心，或贴着海底躲开海鸟和鲨鱼。', text: ['周围全是鱼，你几乎看不见外面。', '鱼群收紧，每条鱼都在同时转向。', '远处的鸟影掠过海面，你随着鱼群往下沉。'] },
    rest: { name: '随波漂', desc: '在水流里慢慢地漂，几乎不用力。', stages: ['juv','adult','old'], text: ['你随水流漂着，鳍一动不动。', '海浪一起一伏，把你轻轻推着走。', '身边的鱼群慢慢转向，你也跟着转了一下。'] },
    explore: { name: '离群去近岸', desc: '离开鱼群，朝近岸的上升流或浅海游去。', stages: ['juv','adult'], text: ['你游进一片水温稍低的地方，那里的浮游生物多得发绿。', '近岸的海底出现在你下方，光线变得更亮。', '你在浅海碰到几条陌生的小鱼，它们很快又散开了。'] },
    mate: { name: '海面附近放卵', desc: '成熟的鱼群聚在海面附近，同时把卵和精子排进海水。', done: '你和同伴一起释放了 {n} 枚卵，它们很快漂散了。', stages: ['adult'], text: ['鱼群聚在海面附近，水温刚好合适。', '你和同伴同时释放了卵和精子。', '它们在海水里慢慢漂散开，很快就看不见了。'] },
  },

  decisions: [
    {
      id: 'spawn', stage: 'adult',
      title: '繁殖的季节',
      body: '海水的温度达到了适合产卵的范围。你的身体在催促你产卵。产卵时，你们会聚在海面附近。',
      fact: '沙丁鱼把卵和精子直接排入海水，卵和仔鱼的早期死亡率很高（Hjort 1914，关于鱼类早期死亡的经典研究）',
      options: [
        { t: '在表层大量产卵', hint: '后代↑↑ 风险↑',
          eff: { offspring: [400, 1000] }, kill: 0.1, cause: 'gannet', risk: 1.4, riskDays: 5,
          result: '你们在海面附近释放了卵。它们漂散开，像一层薄薄的雪。' },
        { t: '在深水里多停几天', hint: '安全↑ 后代↓',
          eff: { food: +5, safety: +8 },
          result: '你们继续待在深水里。卵还在身体里，不着急。' },
      ],
    },
    {
      id: 'bait_ball', at: 400,
      title: '鱼球',
      body: '一只海豚从下方冲上来，鱼群聚成一团。外层的鱼不断被咬走，中间的鱼还能游动。',
      options: [
        { t: '钻进鱼球中间', hint: '安全↑ 饱食↓',
          eff: { safety: +12, food: -5 },
          result: '你挤进了鱼球的中间。外面的鱼被咬走的声音，从你身边闷闷地传过。' },
        { t: '从鱼球边缘脱离', hint: '危险↑↑',
          kill: 0.2, cause: 'dolphin', eff: { food: +5 }, risk: 1.6, riskDays: 2,
          result: '你从边缘游了出去。海豚的喙在你身后合上，差一点。' },
      ],
    },
    {
      id: 'purse', at: 1000,
      title: '远处的网圈',
      body: '远处的渔船放下了网。网圈的声音沉甸甸地压过来，鱼群在慢慢收拢。',
      fact: '围网是沙丁鱼渔业最常用的渔具之一，渔获也大量用于加工鱼粉和鱼油（FAO《世界渔业和水产养殖状况》，2022）',
      options: [
        { t: '下潜，贴着海底游', hint: '安全 · 风险↑',
          eff: { safety: +15 }, risk: 1.2, riskDays: 5,
          result: '你往深处潜，贴着海底游。网圈在上方收拢，发出一阵很大的声音。' },
        { t: '跟着鱼群游向网口', hint: '危险↑↑',
          kill: 0.4, cause: 'purse', eff: { food: +5 },
          result: '你跟着群体往网口游。网圈在你身后收紧了。' },
      ],
    },
    {
      id: 'larva_food', at: 10, stage: 'larva',
      title: '浮游生物的高峰过去了',
      body: '这几天浮游生物突然减少，你找不到食物。近岸的浅水可能有，但也更危险。',
      options: [
        { t: '去近岸的浅水', hint: '食物↑ 风险↑',
          eff: { food: +15 }, risk: 1.4, riskDays: 10,
          result: '你游到近岸的浅水。那里的食物很多，也有很多更大的鱼。' },
        { t: '留在外海继续找', hint: '安全 · 饿',
          eff: { food: -10, safety: +5 }, risk: 1.2, riskDays: 5,
          result: '你继续在外海游，希望下一片水里有食物。' },
      ],
    },
    {
      id: 'warm_water', at: 25,
      title: '一股温水',
      body: '一股温暖的海流从近岸过来，水温上升了几度。浮游生物在这股水里长得很快，但吃浮游生物的大鱼也喜欢这里。',
      options: [
        { t: '顺着温水游向近岸', hint: '食物↑ 风险↑', eff: { food: +12 }, risk: 1.4, riskDays: 8,
          result: '你游进温水里。这里的食物很多，也有许多比你大得多的鱼。' },
        { t: '待在冷水里', hint: '稳妥 · 饿一点', eff: { food: -6, safety: +5 },
          result: '你留在冷水里，等着水流慢慢把食物送过来。' },
      ],
    },
    {
      id: 'school_size', at: 150,
      title: '大群还是小群',
      body: '你现在已经能成群地游。大鱼群对你有保护，但群里的鱼多，食物也要分着吃。小一点的群食物更容易找到，但不那么安全。',
      options: [
        { t: '留在大群里', hint: '安全↑ 食物少', eff: { safety: +10, food: -4 },
          result: '你继续待在大群里。群体转向时，你跟着一起转。' },
        { t: '去找小一点的群', hint: '食物↑ 风险↑', eff: { food: +10 }, risk: 1.3, riskDays: 20,
          result: '你找到一小群鱼，那里的浮游生物还没被吃完。' },
      ],
    },
    {
      id: 'old_edge', at: 2000,
      title: '鱼群的边缘',
      body: '你的鳞片失去了光泽。鱼群的中心是年轻的鱼，你的位置一点点靠到边缘。那里最容易被看见，也最先被吃掉。',
      options: [
        { t: '回到中心，挤在年轻鱼中间', hint: '安全↑ 食物↓', eff: { safety: +10, food: -4 },
          result: '你慢慢游回群体中间。年轻的鱼推挤着你，但你总算又有了遮蔽。' },
        { t: '留在边缘，接着吃', hint: '饱食↑ 风险↑↑', eff: { food: +10 }, kill: 0.2, cause: 'purse',
          result: '你留在边缘吃了一顿。远处的网圈在收紧，你及时从网圈的缝里游了出去。' },
      ],
    },
    {
      id: 'old_roam', at: 3000,
      title: '最后一季迁徙',
      body: '季节一年一年地换。你的身体比以前轻了很多，群体正准备往温暖的海区迁。你可以跟着群体走，也可以离开，去浅水里待着。',
      options: [
        { t: '跟着群体迁徙', hint: '饱食↑ 风险↑', eff: { food: +8 }, risk: 1.3, riskDays: 60,
          result: '你跟着群体慢慢游。路上的水温一天天升高，食物也比以前多了一点。' },
        { t: '离开群体，独自去浅水', hint: '安全 · 饿', eff: { food: -8, safety: +5 },
          result: '你离开群体，去了浅水。那里很安静，食物也少，但没有大鱼的影子。' },
      ],
    },
    {
      id: 'elnino_drift', need: 'elnino', at: 15,
      title: '暖水压过来了',
      body: '南边来的暖水把表层的浮游生物冲散了。冷水还在深处，但离你很远。',
      options: [
        { t: '往深处的冷水里潜', hint: '安全↑ 饿一点',
          eff: { food: -5, safety: +10 },
          result: '你往深处游。水越来越凉，表层的暖流在你头顶慢慢铺开。' },
        { t: '留在暖水里等浮游生物', hint: '食物 · 风险↑',
          eff: { food: +3 }, risk: 1.3, riskDays: 10,
          result: '你留在暖水里。这里的浮游生物很少，但也还有几口。' },
      ],
    },
    {
      id: 'lanina_front', need: 'lanina', at: 60,
      title: '上升流的边缘',
      body: '冷水从深处涌上来，在海面下形成一道明显的分界线。分界线的一侧浮游生物密得发白，另一侧几乎空无一物。',
      options: [
        { t: '挤进上升流的边缘吃个够', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, kill: 0.1, cause: 'tuna', risk: 1.3, riskDays: 15,
          result: '你挤进了分界线。食物很多，金枪鱼也在下面等着。' },
        { t: '留在群体外围慢慢吃', hint: '稳妥 · 饱食↑',
          eff: { food: +6, safety: +5 },
          result: '你留在群体外围，吃得不多，但每一口都很安全。' },
      ],
    },
    {
      id: 'curious_shore', need: 'curious', at: 120,
      title: '一股陌生的气味',
      body: '鱼群边缘飘来一股陌生的气味，似乎来自近岸的一片海草。它和你以前闻过的都不一样。',
      options: [
        { t: '循着气味去看看', hint: '食物↑ 风险↑',
          eff: { food: +12 }, risk: 1.3, riskDays: 10,
          result: '你离开群体，朝气味来的方向游去。海草里有许多小虫，也有陌生的鱼。' },
        { t: '待在群里别动', hint: '安全↑',
          eff: { safety: +5 },
          result: '你没有去看。群体继续往前，那股气味很快就淡了。' },
      ],
    },
  ],

  idle: [
    '海面的光温暖而明亮，水下的颜色从浅蓝慢慢变深。',
    '远处有一艘船，它的引擎声从水里传过来，闷闷的。',
    '海浪一起一伏，你随着水流轻轻地移动。',
    '周围的水温在慢慢变化，有时高一些，有时低一些。',
    '一只海鸟的影子掠过海面，很快就不见了。',
    '海水里漂着细小的生物，它们随水流漂移，没有方向。',
    '夜里的海面很暗，偶尔有一点微弱的荧光闪过。',
    '有时候你能感到附近的水在轻轻涌动。',
  ],

  epitaph: '一批卵可能有几万枚，能活到成鱼的只是很少几条。这是沙丁鱼的算术，也是海洋的算术。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'farmed_shrimp',
  name: '养殖对虾',
  en: 'Farmed whiteleg shrimp',
  sci: 'Litopenaeus vannamei（凡纳滨对虾），养殖个体',
  emoji: '🦐',
  scene: 'pond',
  kind: 'farmed',
  tagline: '全球养殖对虾的绝大多数，都是这个品种',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '养殖地区', options: [
        ['东南亚沿海的一家育苗场', 3, {}],
        ['中国南方沿海的一家育苗场', 3, { food: +5 }],
        ['厄瓜多尔沿海的一家育苗场', 2, { risk: 1.1 }],
        ['墨西哥太平洋沿岸的一家育苗场', 1, { risk: 1.2 }],
      ]},
      { label: '养殖方式', options: [
        ['传统的粗放土池，每亩放苗很少，主要靠池里长出来的藻类和底栖生物', 2, { food: -5, risk: 0.85, set: 'extensive' }],
        ['半集约的池塘，每天投饵、定时换水，池里的虾比较稀疏', 4, { food: +5, set: 'semi' }],
        ['高密度的集约池，靠增氧机和每天的投饵长大，水质要天天盯着', 3, { risk: 1.15, set: 'intensive' }],
        ['工厂化温室里的生物絮团池，很少换水，靠细菌把废物分解', 1, { food: +10, risk: 1.2, set: 'biofloc' }],
      ]},
      { label: '苗的来源', options: [
        ['普通家系的虾苗，育苗场按生长速度挑选亲虾', 4, { set: 'std' }],
        ['经过抗病选育的家系，亲虾挑的是耐白斑病的个体', 2, { health: +5, set: 'resist' }],
        ['无特定病原（SPF）亲虾育出的苗，育苗场的水经过严格消毒', 2, { health: +5, set: 'spf' }],
        ['用野外采集的亲虾育出的苗，育苗场的记录很少', 1, { risk: 1.2, set: 'wild' }],
      ]},
    ],
    siblings: 1000000,
    siblingsLabel: '同一批育苗池里的受精卵',
    intro: '你是一粒受精卵，在{养殖地区}里孵化。你是{sex}。这一批卵共有 {siblings} 粒，育苗场会按批次筛选，只有一部分会被放进养殖池。',
  },

  stages: [
    { id: 'egg',    name: '卵（育苗池）',     from: 0,    unit: 'hour' },
    { id: 'larva',  name: '无节幼体与溞状幼体', from: 0.5,  unit: 'day'  },
    { id: 'pl',     name: '后期幼体（PL）',    from: 12,   unit: 'day'  },
    { id: 'grow',   name: '养成池中的幼虾',    from: 25,   unit: 'week' },
    { id: 'old',    name: '临近收获的成虾',    from: 100,  unit: 'day'  },
  ],
  maturity: 180,
  maxAge: 130,

  survival: [[0,1],[0.5,0.8],[12,0.55],[25,0.5],[60,0.4],[100,0.3],[120,0.25],[130,0]],
  survivalNote: '育苗期死亡率较高，养成期取决于病害和水质；此曲线为粗估。养殖对虾通常在 3–4 个月内收获，收获即为结束，并非自然寿命',

  init: { health: 80, food: 60, safety: 40 },
  foodDrain: 2,

  causes: [
    { id: 'wssv', escape: false, w: 4, stages: ['grow','old'], short: '白斑综合征',
      text: '你的甲壳上出现了白色的斑点。几天之内，同池的虾陆续停止吃食，池边的水越来越静。' },
    { id: 'ahpnd', escape: false, w: 3, stages: ['grow','old'], short: '急性肝胰腺坏死',
      text: '你的肝胰腺萎缩变色，停止了进食。这种病在池塘里往往很快传开。' },
    { id: 'oxygen', escape: false, w: 3, stages: ['grow','old'], short: '黎明时缺氧',
      text: '凌晨池水的溶解氧降到很低。增氧机的声音在远处响着，但不够快。你没能撑到天亮。' },
    { id: 'molt', escape: true, w: 2, stages: ['grow'], short: '蜕壳时被同类咬伤',
      text: '你蜕壳后身体还是软的。一只同池的虾靠近，咬破了你的新甲壳。' },
    { id: 'hatchery', escape: false, w: 5, stages: ['egg','larva','pl'], short: '育苗期夭折',
      text: '育苗池的水质出了问题，细菌在你们中间扩散。你们没有活到被放进养殖池的那天。' },
    { id: 'predator', escape: true, w: 1, stages: ['grow'], short: '被水鸟叼走',
      text: '一只水鸟从池边俯冲下来。池里的虾一起往深水里沉，你没有沉下去。' },
    { id: 'old', escape: false, w: 0, short: '收获：冰镇后死亡',
      text: '收获的那天，你被捞出池子，倒进装满碎冰的箱子里。低温让你很快停止了动作。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵在育苗池的水里悬浮着。水温保持在二十多摄氏度。' },
    { stages: ['egg'], w: 1, once: true, text: '你孵化成无节幼体。身体很小，靠卵黄囊里的营养生活。' },
    { stages: ['larva'], w: 4, text: '你开始吃育苗场投放的微藻和饵料，身体一天天长大。', eff: { food: [10, 18] } },
    { stages: ['larva'], w: 2, text: '你蜕了一次皮。育苗场的工人每天检查水质和幼体的活动。' },
    { stages: ['larva'], w: 2, text: '池水的颜色变了，育苗场加了一次消毒剂。你有些不舒服，但还是活了下来。', eff: { health: -4 } },
    { stages: ['larva'], w: 1, once: true, text: '育苗阶段通常会经历无节幼体、溞状幼体和糠虾幼体等几个时期。你正在经历其中一段。',
      fact: '对虾育苗阶段要经历多个幼体期，疾病和水质管理在这一阶段非常重要（Lightner 1996，《A Handbook of Shrimp Pathology and Diagnostic Procedures》）' },
    { stages: ['pl'], w: 1, once: true, text: '你变成后期幼体（PL），外形已经接近成虾。育苗场按批次把你们装箱，运往养殖场。' },
    { stages: ['pl'], w: 3, text: '你被放进养殖池。池水是淡绿色的，池边有几个饵料投放点。', eff: { food: +8 } },
    { stages: ['pl'], w: 2, text: '池里的水温突然下降了几度。你停下来，吃得很少。', eff: { health: -4 } },
    { stages: ['grow'], w: 3, text: '你吃饱了。饲料颗粒在你身边慢慢下沉。', eff: { food: [10, 16] } },
    { stages: ['grow'], w: 2, text: '凌晨，池水的溶解氧降低了。增氧机在池子另一边响着，你游到了水面附近。', eff: { health: -3 } },
    { stages: ['grow'], w: 1, once: true, text: '你第一次蜕壳。旧壳脱去后，身体在几个小时里是软的，不能进食。',
      fact: '对虾蜕壳后的软壳期身体脆弱，容易受伤或被同类攻击（Albalat 等 2022，Frontiers in Marine Science）', eff: { health: -5 } },
    { stages: ['grow'], w: 2, text: '饲料台前堆着残余的饲料。你和同伴挤在一起吃，身边的虾多得几乎没有空隙。', eff: { food: +10, safety: -5 } },
    { stages: ['grow'], w: 2, text: '池底的有机物增多，水质变差。你的鳃有些不舒服。', eff: { health: -6 } },
    { stages: ['grow'], w: 1, text: '池里的虾大小参差不齐，较大的虾占了更多的饵料。', eff: { food: -5 } },
    { stages: ['grow'], w: 1, text: '水鸟的影子从池边掠过，池里的虾一下子往深处沉。', eff: { safety: -10 } },
    { stages: ['grow','old'], w: 1, text: '夜里增氧机的声音一直没有停。你在池底慢慢地爬。' },
    { stages: ['old'], w: 3, text: '你的甲壳变硬，身体已经接近收获的大小。', eff: { health: +3 } },
    { stages: ['old'], w: 2, text: '池里有几只虾停止了吃食。它们的肝胰腺颜色变淡，你不知道下一个是不是自己。', eff: { health: -8 } },
    { stages: ['old'], w: 2, text: '收获的日子快到了。工人每天都会在池边测量虾的大小。' },
    { stages: ['old'], w: 1, text: '这几天池水的水质很好，你吃得也好，身体一天比一天结实。', eff: { health: +4 } },
    { stages: ['old'], w: 1, once: true, text: '工人排出了一部分池水，你随着水流被挪到了另一个池子。', eff: { safety: -5 } },
    { stages: ['pl'], w: 3, act: 'forage', text: '你在池底找到一块沉下来的饲料，吃了一口。', eff: { food: [8, 14] } },
    { stages: ['grow'], w: 2, act: 'forage', text: '饲料颗粒散在池底，你和几只虾一起抢。水很浑，你撞到了别的虾。', eff: { food: [10, 16], safety: -5 } },
    { stages: ['grow','old'], w: 2, act: 'forage', text: '你在池底翻出一块残饵，它已经发黑了。你还是吃了下去。', eff: { food: +4, health: -4 } },
    { stages: ['pl'], w: 1, act: 'hide', text: '池里的水流把你推到池边的浅水，那里的水温偏高。', eff: { health: -2 } },
    { stages: ['grow'], w: 2, act: 'hide', text: '你藏在池底的角落，一只虾在你身上踩了一下，你没有动。', eff: { health: -2 } },
    { stages: ['old'], w: 1, act: 'hide', text: '池底的沉淀物很多，你身上落了一层灰。', eff: { health: -3 } },
    { stages: ['grow'], w: 2, act: 'rest', text: '增氧机停了几分钟，池水变静。你停在池底，等它再转起来。', eff: { health: +2 } },
    { stages: ['grow'], w: 2, act: 'explore', text: '你沿池壁游到另一边，水色清了一点，有一小堆饲料还没人来吃。', eff: { food: [8, 12] } },
    { stages: ['old'], w: 1, act: 'explore', text: '池边的水鸟落在围栏上，你游回池中央，身边的虾都在往回走。', eff: { safety: -8 } },
    { stages: ['grow'], w: 1, act: 'explore', text: '池边的一根水管破了，水流从那里冲进来，把你推过了半个池子。', eff: { safety: -4 } },
    { stages: ['grow'], w: 3, need: 'extensive', text: '池子很大，水很浅。池底长满了藻类和底栖的小动物，你一边爬一边吃。', eff: { food: [8, 14] } },
    { stages: ['grow','old'], w: 2, need: 'extensive', text: '很久没有投饵了，池里的虾大小参差不齐，你要和较大的虾抢食。', eff: { food: -6 } },
    { stages: ['grow'], w: 1, need: 'extensive', once: true, text: '一场连续的暴雨把池水冲淡了，盐度降下来。你的身体花了好几天才适应。', eff: { health: -4 } },
    { stages: ['grow'], w: 3, need: 'semi', text: '工人按时撒下饲料，饲料颗粒在水里慢慢下沉，你和同池的虾围过去。', eff: { food: [10, 15] } },
    { stages: ['grow'], w: 2, need: 'semi', text: '工人抽掉了一部分旧水，换进新抽来的水。水温变了，你停了一会儿才恢复过来。', eff: { health: -3 } },
    { stages: ['grow'], w: 3, need: 'intensive', text: '增氧机日夜不停地转，水面上的声音一直很响。你的鳃里全是新鲜的水。', eff: { health: +3 } },
    { stages: ['grow','old'], w: 2, need: 'intensive', text: '池子里挤满了虾，你几乎碰到了身边的每一只。水下的推挤声很清楚。', eff: { safety: -8 } },
    { stages: ['grow'], w: 1, need: 'intensive', once: true, text: '夜里停电了，增氧机停了二十分钟。你们都浮到水面，拼命地抢着吸氧。', eff: { safety: -8, health: -3 } },
    { stages: ['grow'], w: 3, need: 'biofloc', text: '水里漂着一团团絮状物，都是细菌和有机物。你的步足抓住它们，嘴里有一股发酵的味道。', eff: { food: [10, 16] } },
    { stages: ['grow','old'], w: 2, need: 'biofloc', text: '池子几个月没有换水，氨氮慢慢升高。你的触角有些发麻，只好待在上层。', eff: { health: -5 } },
    { stages: ['old'], w: 1, need: 'biofloc', once: true, text: '工人用吸管把池底的絮团抽出来，池水一下子变浑了。', eff: { safety: -5 } },
    { stages: ['larva'], w: 2, need: 'std', text: '育苗池里的水质一天比一天差，你身边的幼体一个接一个停了下来。你还在动。', eff: { health: -3 } },
    { stages: ['grow'], w: 2, need: 'std', text: '你长得比池子里的大部分虾都快，身体一天天重起来。', eff: { food: +6 } },
    { stages: ['grow'], w: 1, need: 'std', once: true, text: '一种病在池子里传开，同池几只虾停止了吃食。你的身体也跟着发白。', eff: { health: -6 } },
    { stages: ['grow'], w: 2, need: 'resist', text: '池子里出现了白斑，你的甲壳上没有斑点。你继续吃，身体很稳。', eff: { health: +4 } },
    { stages: ['pl'], w: 2, need: 'resist', text: '育苗场在放苗前做了快速检测，你们这一批的结果都是阴性。工人把箱子轻轻地搬上车。' },
    { stages: ['grow','old'], w: 1, need: 'resist', text: '隔壁池子里的虾倒下了，你所在的池子只少了几只。', eff: { safety: -3 } },
    { stages: ['larva'], w: 2, need: 'spf', text: '育苗场的水经过臭氧和紫外线消毒，水面几乎没有泡沫。你的身体干净透明。', eff: { health: +4 } },
    { stages: ['pl'], w: 2, need: 'spf', text: '放苗的时候，工人把每一箱幼虾都检查了一遍，然后才封箱。' },
    { stages: ['grow'], w: 1, need: 'spf', text: '这一池的虾长得很整齐。工人说这一批的成活率比去年高。', eff: { food: +4 } },
    { stages: ['larva'], w: 3, need: 'wild', text: '你们这一批的幼体大小不一，育苗场的记录上只写了一个采集的日期。', eff: { health: -4 } },
    { stages: ['pl'], w: 2, need: 'wild', text: '苗在运输箱里挤得很紧，你旁边的几只还没到池子就不动了。', eff: { health: -5 } },
    { stages: ['grow'], w: 2, need: 'wild', text: '你的个头长得慢，同池的虾一次次把你推到池边的浅水里。', eff: { food: -5, safety: -5 } },
    { stages: ['larva'], w: 2, need: 'runt', text: '你比同批的幼体小一圈。你总是在育苗池的角落里，很难抢到饵料。', eff: { food: -5 } },
    { stages: ['pl'], w: 2, need: 'robust', text: '你的体色比同批的幼虾深，身体结实。游动时，身边的虾都让开了路。', eff: { health: +3 } },
    { stages: ['grow'], w: 2, need: 'bold', text: '你总是第一个游向饲料台，身上被撞出了几道伤痕。', eff: { food: +10, health: -3 } },
    { stages: ['grow'], w: 2, need: 'cautious', text: '水流一变，你就缩到池底的角落。你吃得比别的虾少，也很少被撞到。', eff: { safety: +8, food: -4 } },
    { stages: ['grow'], w: 2, need: 'curious', text: '你总在池壁附近转来转去，发现一处没人去的沉淀角，里面有一小堆没吃完的饲料。', eff: { food: +8 } },
  ],

  opening: {
    title: '育苗池里的位置',
    body: '你还是一粒受精卵，在育苗池里悬浮。池子一侧的增氧管冒着细小的气泡，另一侧是投饵的地方，中间挤满了同批的卵和幼体。',
    options: [
      { t: '靠近增氧管', hint: '氧气足 · 水流急', eff: { health: 3 }, risk: 0.8, riskDays: 12,
        result: '增氧管的水流把你们往同一个方向推。池水里的氧气很充足。' },
      { t: '靠近投饵的地方', hint: '饱食↑ 挤在一起', eff: { food: 10 }, risk: 1.3, riskDays: 12,
        result: '饵料每天撒在这一边。你很快吃到了微藻，但挤在一起的卵和幼体，水质也比别处坏得快。' },
    ],
  },

  actions: {
    forage: { name: '池底觅食', desc: '在池底翻找残余的饲料颗粒和沉淀的有机物。', text: ['你在池底翻找残余的饲料颗粒。', '一团沉下来的饲料被你的步足抓住。', '池底有些有机物，你和身边的虾一起挤过去。'] },
    hide: { name: '待在池底', desc: '贴着池底的角落，离开水面、投饵的地方和同池的虾群。', text: ['你贴着池底一动不动，周围只有水流过。', '增氧机的水流把沉淀物吹起来，你又慢慢回到角落。', '一只虾从你身边爬过，你没有动。'] },
    rest: { name: '静止不动', desc: '在池底停住，触角轻轻摆动，减少消耗。', text: ['你停在池底，触角轻轻地摆动。', '池水很安静，你几乎感觉不到时间。', '身上的沉淀物慢慢落下，你也不去拍掉。'] },
    explore: { name: '沿池壁游', desc: '离开中间的人群，沿着池壁往另一头游，看看池子的其他地方。', stages: ['grow','old'], text: ['你沿着池壁往前走，水越来越浅。', '池子另一边的水色不一样，饵料也少。', '一只水鸟的影子从池边掠过，你转身往回走。'] },
    mate: false,
  },

  decisions: [
    {
      id: 'molt', at: 40,
      title: '蜕壳的时机',
      body: '你的旧壳开始裂开。蜕壳会让身体变得柔软，几个小时内不能进食，也容易受到同类攻击。',
      fact: '对虾蜕壳后有一段软壳期，身体脆弱，容易受伤（Albalat 等 2022，Frontiers in Marine Science）',
      options: [
        { t: '现在蜕壳', hint: '体力↑ 风险↑',
          eff: { health: +8 }, kill: 0.1, cause: 'molt', risk: 1.3, riskDays: 1,
          result: '你从旧壳里挣脱出来。新壳还很软，你慢慢地挪到池边的一角。' },
        { t: '等吃饱后再蜕', hint: '饱食↑ 稍慢',
          eff: { food: +8 }, risk: 1.2, riskDays: 2,
          result: '你先吃了一阵，等身体的营养够了，再慢慢蜕壳。' },
      ],
    },
    {
      id: 'feed_rush', at: 35,
      title: '饲料台',
      body: '饲料台前挤满了虾。抢到饲料的虾长得快，但挤在一起也更容易互相伤害。',
      options: [
        { t: '挤进去抢', hint: '饱食↑↑ 风险↑',
          eff: { food: +25 }, risk: 1.3, riskDays: 3,
          result: '你挤到了饲料台前，抢到了一大口饲料。身边的虾也在推挤。' },
        { t: '退到边缘等', hint: '安全 · 饿一点',
          eff: { food: -5, safety: +5 },
          result: '你退到池边。等饲料散开的时候，它们已经沉得很远了。' },
      ],
    },
    {
      id: 'oxygen', at: 60,
      title: '黎明前的缺氧',
      body: '池水的溶解氧在凌晨降低，你感到呼吸困难。增氧机在远处响，但速度不够快。',
      options: [
        { t: '游到水面，靠近增氧水流', hint: '安全↑ 风险↑',
          eff: { health: +3, safety: +5 }, risk: 1.2, riskDays: 1,
          result: '你靠近增氧机搅起的水流。氧气多了一些，但水面上的光很刺眼。' },
        { t: '沉到池底慢慢呼吸', hint: '节能 · 缺氧风险↑',
          kill: 0.2, cause: 'oxygen', eff: { food: -3 },
          result: '你沉到池底，减少了游动。缺氧的水贴着你的鳃慢慢过去。' },
      ],
    },
    {
      id: 'disease', at: 90,
      title: '白色的斑点',
      body: '你的甲壳上出现了几个白色的斑点。同池的几只虾已经停止进食，池边的工人在加快换水。',
      options: [
        { t: '继续吃，等待', hint: '饱食↑ 风险↑↑',
          eff: { food: +10 }, kill: 0.25, cause: 'wssv', risk: 1.8, riskDays: 10,
          result: '你继续吃饲料，斑点在几天之内扩大了。' },
        { t: '躲到池边的浅水区', hint: '稍安全 · 饿',
          eff: { food: -8, safety: +10 }, risk: 1.2, riskDays: 10,
          result: '你躲到了池边的浅水区，那里的水温稍高，同池的虾比较少。' },
      ],
    },
    {
      id: 'stock_corner', at: 18,
      title: '刚被放进池子',
      body: '你被放进养殖池，池水是淡绿色的。水温突然下降了几度，身边的虾都往池子的角落里挤，中间的饵料台却还在冒出饲料的颗粒。',
      options: [
        { t: '往角落里挤', hint: '安全↑ 饱食↓', eff: { safety: +8, food: -5 },
          result: '你挤进角落。这里的水流慢，饲料很少，但身边的虾也少了。' },
        { t: '跟着中间的虾，去饵料台', hint: '饱食↑ 挤', eff: { food: +10, safety: -5 }, risk: 1.2, riskDays: 5,
          result: '你游到饵料台附近，吃到了几粒饲料。推挤的虾很多，你有几次被撞歪了身子。' },
      ],
    },
    {
      id: 'water_change', at: 75,
      title: '换水时的水流',
      body: '工人在池子一角打开了排水口。换水的水流一下子把池底的沉淀物卷起来，新水的温度和你习惯的不一样。',
      options: [
        { t: '游进新水流里', hint: '饱食↑ 应激↑', eff: { food: +8, health: -4 }, risk: 1.2, riskDays: 3,
          result: '你被水流带进新水里。水温变了，你的身体有一阵不适，但新水里的溶解氧更高。' },
        { t: '躲在旧水的角落', hint: '稳妥 · 水质差', eff: { health: -3, safety: +5 }, risk: 1.2, riskDays: 5,
          result: '你躲在旧水的角落，那里水质越来越差，但没有被卷进新水的漩涡。' },
      ],
    },
    {
      id: 'last_feast', at: 110, stage: 'old',
      title: '收获前的最后几天',
      body: '池水里有几只虾停止了吃食。工人开始抽水测量大小，池边的饲料也换成了更好的颗粒。你可以再多吃几天，也可以躲到池底等。',
      options: [
        { t: '继续吃，争取长大', hint: '饱食↑ 病害风险↑', eff: { food: +10 }, kill: 0.15, cause: 'ahpnd', risk: 1.5, riskDays: 5,
          result: '你继续吃，身体又长了一点。池边那几只停止吃食的虾，没有再出现在饲料台前。' },
        { t: '躲到池底，等待', hint: '安全 · 饿', eff: { food: -8, safety: +8 },
          result: '你躲到池底。上面的饲料一点点被吃光，你的身体也慢慢地变轻。' },
      ],
    },
    {
      id: 'shrimp_power_cut', at: 45, need: 'intensive',
      title: '增氧机停了',
      body: '夜里跳了一次闸，增氧机停了二十分钟。池水的氧气在往下掉，几只虾已经浮到了水面。',
      options: [
        { t: '贴着增氧机的出水口', hint: '氧气↑ 体力↓', eff: { health: +2 }, risk: 1.1, riskDays: 1,
          result: '你贴着水流吐出的气泡，直到增氧机重新转起来。' },
        { t: '沉到池底，不动', hint: '节能 · 缺氧风险↑', kill: 0.12, cause: 'oxygen',
          result: '你沉到池底，一动不动。水越来越闷，你没能撑到天亮。' },
      ],
    },
    {
      id: 'shrimp_floc', at: 60, need: 'biofloc',
      title: '絮团越来越厚',
      body: '池水里的絮团越来越厚，颜色发灰。工人在池边接了一根抽水管，准备抽掉一部分。',
      options: [
        { t: '留在絮团里吃', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.3, riskDays: 4,
          result: '你在絮团里吃得很饱，但氨的味道越来越重。' },
        { t: '躲到池边的清水里', hint: '安全↑ 饿一点', eff: { food: -5, safety: +5 },
          result: '你游到池边，那里的水还清，但吃的东西很少。' },
      ],
    },
    {
      id: 'shrimp_wild_box', at: 14, need: 'wild',
      title: '运苗的箱子',
      body: '苗箱在码头上晒了一会儿，箱子里的水温升高了。你们挤在箱底，上层的水很浑。',
      options: [
        { t: '挤到箱子底下的凉水里', hint: '稳妥', eff: { health: +2 }, risk: 0.9, riskDays: 2,
          result: '你挤到箱底，水凉了一些。你身边的几只还没有动。' },
        { t: '爬到箱子上层，靠近换气口', hint: '氧气↑ 风险↑', eff: { health: +3 }, kill: 0.1, cause: 'hatchery', risk: 1.1, riskDays: 2,
          result: '你靠近换气口。气流很弱，但你还能呼吸。' },
      ],
    },
    {
      id: 'shrimp_bold_feed', at: 55, need: 'bold',
      title: '饲料台前的空隙',
      body: '饲料台前突然空出一块地方。水鸟的影子就在池边，池里的虾都在往深处沉。',
      options: [
        { t: '冲到饲料台，抢第一口', hint: '饱食↑↑ 风险↑↑', eff: { food: +15 }, kill: 0.1, cause: 'predator', risk: 1.3, riskDays: 1,
          result: '你抢到了一口饲料，也差一点被水鸟的影子盖住。' },
        { t: '贴着池底慢慢后退', hint: '安全↑', eff: { safety: +5 },
          result: '你贴着池底慢慢后退，直到水鸟飞走。' },
      ],
    },

  ],

  idle: [
    '池水的颜色很淡，光线透下来，亮度随着时间变化。',
    '工人每天在池边走过，他们的影子落在水面上。',
    '池边的水泥很干净，但水下有很多看不见的细菌。',
    '池水在慢慢流动，把饵料和沉淀物一起推向一边。',
    '周围挤满了和你一样的个体，彼此之间几乎没有空隙。',
    '池底的沉淀物里，有时能看到没吃完的饲料颗粒。',
    '水温的变化很慢，你几乎感觉不到它。',
    '夜里的育苗场灯光一直亮着，水面反射出一块白光。',
  ],

  epitaph: '你在一口池子里活了大约四个月。收获那天，你被倒进冰里，然后装箱，运往市场。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'farmed_carp',
  name: '养殖草鱼',
  en: 'Farmed grass carp',
  sci: 'Ctenopharyngodon idella（草鱼），鲤科；中国池塘养殖的主要品种之一',
  emoji: '🐟',
  scene: 'pond',
  kind: 'farmed',
  tagline: '一条池塘里长大的草鱼，大多数会在一两年后被拉网、称重、装上卡车',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '养殖地区', options: [
        ['长江中下游一个养殖县的鱼苗场', 3, {}],
        ['珠江流域一座鱼塘旁的育苗场', 2, { food: +5 }],
        ['四川盆地丘陵地带的一口鱼塘', 2, { risk: 1.1 }],
        ['东北某地水库边的养殖区', 1, { risk: 1.2, food: -5 }],
      ]},
      { label: '养殖模式', options: [
        ['传统的池塘混养，草鱼和鲢鳙一起养，池里有天然的浮游生物', 3, { food: +5, set: 'poly' }],
        ['单养草鱼的池塘，饲料投得多，池里的草鱼密度高', 3, { food: +10, risk: 1.15, set: 'mono' }],
        ['网箱里的养殖，水流通畅，但外面的水鸟也能落到网顶上', 1, { risk: 1.2, set: 'cage' }],
      ]},
      { label: '池塘的水源', options: [
        ['靠雨水和河水补充的池塘', 3, { set: 'river' }],
        ['靠地下水补给、水温偏低的池塘', 2, { health: -3, set: 'well' }],
        ['靠稻田排水循环的池塘', 2, { food: +5, risk: 1.1, set: 'paddy' }],
      ]},
    ],
    siblings: 200000,
    siblingsLabel: '同一批人工催产的鱼卵',
    intro: '你是一枚鱼卵，在{养殖地区}漂着，正在慢慢吸水膨胀。你是{sex}。同一批人工催产的鱼卵有 {siblings} 枚，最后只有少数成为池塘里的成鱼。',
  },

  stages: [
    { id: 'egg',       name: '鱼卵（漂流孵化）', from: 0,   unit: 'hour'  },
    { id: 'fry',       name: '鱼苗（育苗池）',   from: 1,   unit: 'day'   },
    { id: 'fingerling', name: '鱼种（鱼种池）',   from: 30,  unit: 'week'  },
    { id: 'grow',      name: '成长中的草鱼',     from: 180, unit: 'month' },
    { id: 'market',    name: '上市规格的成鱼',   from: 365, unit: 'month' },
  ],
  maturity: 1460,
  maxAge: 730,

  survival: [[0,1],[1,0.8],[30,0.3],[90,0.2],[180,0.15],[365,0.12],[600,0.09],[730,0]],
  survivalNote: '养殖草鱼通常在 1–2 年内上市，死亡多数来自鱼苗期的病害和池塘缺氧；此曲线为粗估，上市即为结束，并非自然寿命',

  init: { health: 75, food: 60, safety: 45 },
  foodDrain: 2,

  causes: [
    { id: 'gcrv', escape: false, w: 4, stages: ['fingerling','grow','market'], short: '草鱼出血病',
      text: '你的身体两侧出现了红色的出血斑。两三天后，你不再游动，只是在水底慢慢地翻着。' },
    { id: 'oxygen', escape: false, w: 3, stages: ['fry','fingerling','grow','market'], short: '黎明时缺氧',
      text: '凌晨池水里的氧气被消耗光了。你和其他鱼一起浮到水面，张大嘴。天亮之前，你没能再沉下去。' },
    { id: 'ichthyo', escape: false, w: 2, stages: ['fry','fingerling'], short: '白点病',
      text: '小瓜虫附着在你的鳃和皮肤上，身上出现了一片片白点。你的呼吸越来越急。' },
    { id: 'fungus', escape: false, w: 4, stages: ['egg','fry'], short: '水霉病',
      text: '水霉菌在你的卵膜和鳃上繁殖。你的身体一点点被白色的菌丝包住。' },
    { id: 'predator', escape: true, w: 1, stages: ['grow','market'], short: '被水鸟叼走',
      text: '一只鸬鹚从池边俯冲下来，喙一张一合，你就不见了。' },
    { id: 'transport', escape: false, w: 2, stages: ['market'], short: '运输途中缺氧',
      text: '你被装进塑料桶，桶里的水越来越少。车开了很久，你在缺氧的水里停止了呼吸。' },
    { id: 'old', escape: false, w: 0, short: '收获：上市', text: '你被拉上岸，称了重，装进塑料桶运往市场。活鱼摊上，有人把你从桶里捞出来，放进一只盆里。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '鱼卵在水流里慢慢漂着，吸水以后逐渐膨胀。' },
    { stages: ['egg'], w: 1, once: true, text: '你孵化成鱼苗。身体只有几毫米长，还靠卵黄囊里的营养生活。' },
    { stages: ['fry'], w: 4, text: '你开始吃池里的浮游动物，身体一点点长大。', eff: { food: [10, 16] } },
    { stages: ['fry'], w: 2, text: '池水的颜色变绿了。工人加了一次肥，浮游生物多了起来。', eff: { food: +5 } },
    { stages: ['fry'], w: 2, text: '育苗池里的小瓜虫附着在你的身上，身上出现了几个白色的小点。', eff: { health: -6 } },
    { stages: ['fry'], w: 1, text: '夜里池水的氧气消耗得很快。你在水面附近呼吸，直到天亮。', eff: { safety: -5 } },
    { stages: ['fingerling'], w: 3, text: '你被放进鱼种池，身边的鱼比你大得多。饵料很快就被它们吃光了。', eff: { food: -5 } },
    { stages: ['fingerling'], w: 3, text: '工人撒下颗粒饲料，你和同伴们一起游上来抢。', eff: { food: [12, 18] } },
    { stages: ['fingerling'], w: 2, text: '池塘的水在夜里变浑，氧气低。你浮到了水面，又慢慢沉下去。', eff: { health: -4 } },
    { stages: ['fingerling'], w: 1, once: true, text: '你第一次被拉网分到另一口池子。拉网时你挤在一群鱼中间，水很浑。', eff: { safety: -5 } },
    { stages: ['grow'], w: 3, text: '你的身体已经有手掌那么长，游得更快，背部的颜色变深了。', eff: { health: +3 } },
    { stages: ['grow'], w: 2, text: '工人撒下饲料，池里的鱼一起冲向池边。你吃到了一大口。', eff: { food: +12 } },
    { stages: ['grow'], w: 2, text: '池边长着一些水草。你咬下一口，它的味道很淡，但它也是你的食物之一。', eff: { food: +10 } },
    { stages: ['grow'], w: 1, text: '一只鸬鹚在池边停下，又飞走了。你的群体一起往深处沉了一下。', eff: { safety: -5 } },
    { stages: ['grow'], w: 2, text: '一场大雨让池水变浑。工人打开了增氧机，水面起了一阵白色的泡沫。', eff: { safety: +3 } },
    { stages: ['grow'], w: 1, once: true, text: '池里的草鱼开始出现出血病。你的身体两侧发红，有几天没有吃东西。', eff: { health: -10 } },
    { stages: ['market'], w: 3, text: '工人把鱼装进网箱，称了重，又放回水里。你在水里挣了一会儿才停下来。', eff: { health: -3 } },
    { stages: ['market'], w: 2, text: '你的体重接近上市的标准。工人开始每周拉网检查。' },
    { stages: ['market'], w: 2, text: '池里的水被抽走了一部分，你挤在剩下的水里。', eff: { safety: -8 } },
    { stages: ['market'], w: 1, text: '池塘上方的天空很亮，一群鸟在远处的树梢间飞过。' },
    { stages: ['fry'], w: 3, act: 'forage', text: '你在池里吃到一群溞类。它们在水里挣扎着，很快被你吞下。', eff: { food: [10, 16] } },
    { stages: ['fingerling'], w: 3, act: 'forage', text: '工人撒下颗粒饲料，你挤在前面吃了一口。', eff: { food: [8, 14] } },
    { stages: ['grow','market'], w: 2, act: 'forage', text: '池边的水草被风吹进水里，一片叶子漂到你面前，你咬了一口。', eff: { food: [6, 10] } },
    { stages: ['grow'], w: 2, act: 'forage', text: '工人撒下饲料，你和同伴一起抢。水很浑，你差点撞上池壁。', eff: { food: +12, safety: -4 } },
    { stages: ['fingerling'], w: 2, act: 'hide', text: '水草的阴影下，你一动不动。鸬鹚的影子从水面掠过，又飞走了。', eff: { safety: +6 } },
    { stages: ['grow','market'], w: 2, act: 'hide', text: '你躲在水草里。叶子上沾了一层浮萍，你的鳞片有点发痒。', eff: { food: -3, safety: +4 } },
    { stages: ['fry','fingerling','grow'], w: 2, act: 'rest', text: '你在池底停下来，周围的沉淀物被吹起来，又慢慢落下。', eff: { health: +2 } },
    { stages: ['fingerling'], w: 1, act: 'explore', text: '你游过池子的一半，遇到了另一群鱼。它们的鳞片颜色不太一样。', eff: { safety: -4 } },
    { stages: ['grow','market'], w: 2, act: 'explore', text: '你游到池子另一端，那里的水更清，但饲料要少很多。', eff: { food: -4, safety: +3 } },
    { stages: ['grow'], w: 1, act: 'explore', text: '你游进池子的深水，水温比池边低，水里的氧气也少。', eff: { health: -3 } },
    { stages: ['fingerling','grow'], w: 3, need: 'poly', text: '池里的鲢鱼和鳙鱼把浮游生物吃得很干净，池水比较稳。', eff: { health: +3 } },
    { stages: ['grow'], w: 2, need: 'poly', text: '池底的草鱼和鲤鱼一起翻土，池水变浑了一阵子，你只好浮在上层。', eff: { safety: -3 } },
    { stages: ['fingerling','grow'], w: 3, need: 'mono', text: '池子里全是草鱼，饲料投下去，它们一起冲过去抢。你的身体很快长大了。', eff: { food: +10, safety: -4 } },
    { stages: ['grow','market'], w: 2, need: 'mono', text: '池子里的密度大，夜里的氧气消耗得很快，你们都浮到了水面。', eff: { health: -4 } },
    { stages: ['grow','market'], w: 3, need: 'cage', text: '你在网箱里游来游去，水流从网眼穿过，很干净。', eff: { health: +3 } },
    { stages: ['grow','market'], w: 2, need: 'cage', text: '一只水鸟落在网顶上，你在网里往下沉，躲开了它的影子。', eff: { safety: +4 } },
    { stages: ['fry','fingerling'], w: 3, need: 'river', text: '大雨之后，河水涌进池子，带来许多浮游动物。你在水面上吃得很饱。', eff: { food: +10 } },
    { stages: ['fry'], w: 2, need: 'river', text: '河水带来了别的鱼苗，它们和你混在一起，池子里一下子拥挤起来。', eff: { safety: -4 } },
    { stages: ['fry','fingerling'], w: 3, need: 'well', text: '池水是从地下抽上来的，水温比较低。你的动作慢了下来。', eff: { health: -3 } },
    { stages: ['grow'], w: 2, need: 'well', text: '井水补给的池子很清，但浮游生物也少，你只能吃饲料。', eff: { food: -5 } },
    { stages: ['fry','fingerling'], w: 3, need: 'paddy', text: '稻田的排水流进了池塘，水的颜色变成了浅褐色。你的鳃有些不舒服。', eff: { health: -4 } },
    { stages: ['fingerling','grow'], w: 2, need: 'paddy', text: '稻田里长出的浮游生物很多，你吃得很饱，身上的颜色也变深了。', eff: { food: +8 } },
    { stages: ['fry'], w: 2, need: 'runt', text: '你比同池的鱼苗小一圈，每次撒饵，你都抢不到前面的位置。', eff: { food: -6 } },
    { stages: ['fingerling','grow'], w: 2, need: 'robust', text: '你比同批的鱼种壮实。拉网的时候，你挣脱了几次，最后还是留在了池子里。', eff: { health: +3 } },
    { stages: ['fingerling'], w: 2, need: 'bold', text: '你第一个游到饲料边上，身上被撞出了一道擦伤。你还是吃到了第一口。', eff: { food: +10, health: -3 } },
    { stages: ['grow'], w: 2, need: 'cautious', text: '一只鸬鹚的影子从水面掠过，你还没停下，就已经钻进了水草的阴影里。', eff: { safety: +6 } },
    { stages: ['grow','market'], w: 2, need: 'curious', text: '你总在池边的水草旁徘徊，发现一只落进水里的蝗虫，你吃掉了它。', eff: { food: +8 } },
  ],

  opening: {
    title: '孵化池里的水流',
    body: '你还是一枚鱼卵，漂在育苗池的水里。增氧机附近水流顺畅、氧气足；池边的静水里很安静，却更容易长出水霉菌。',
    options: [
      { t: '随水流漂到增氧机附近', hint: '氧气足 · 鱼苗多', eff: { health: 3 }, risk: 0.8, riskDays: 30,
        result: '增氧机搅起的水流把你推向池中。水里的氧气很足，你慢慢吸水膨胀。' },
      { t: '漂进池边的静水里', hint: '安静 · 水霉菌多', eff: { health: -3, safety: 5 }, risk: 1.3, riskDays: 10,
        result: '你停在池边的静水里。那里没有人挤，但水霉菌在这里繁殖得很快。' },
    ],
  },

  actions: {
    forage: { name: '吃饲料与水草', desc: '在池子里找饲料颗粒、浮游动物或水草边的叶子。', text: ['你在水里咬住一片水草的叶子，味道很淡。', '工人撒下的饲料颗粒在水里慢慢下沉，你游过去吃了一口。', '池里的浮游动物多的时候，你一口一口地吞。'] },
    hide: { name: '躲进水草丛', desc: '一直待在水草的阴影里，离开人群和水鸟。', stages: ['fingerling','grow','market'], text: ['水草把你裹住，水流变慢了。', '鸬鹚的影子从水面掠过，你一动不动。', '叶子上沾了一层浮萍，你挪了一下身子。'] },
    rest: { name: '沉在池底', desc: '沉到池底，慢慢游动或静止，减少消耗。', text: ['你停在池底，鳍轻轻地拨动。', '池底的沉淀物被吹起来，又慢慢落下。', '水温低的时候，你几乎不动。'] },
    explore: { name: '游到池子另一端', desc: '离开拥挤的鱼群，去池子的另一边看看。', stages: ['fingerling','grow','market'], text: ['你游过池子的一半，遇到了另一群陌生的鱼。', '池子另一端的水更清，但饲料要少很多。', '你游进池子的深水，水温比池边低。'] },
    mate: false,
  },

  decisions: [
    {
      id: 'float', at: 40,
      title: '黎明前的浮头',
      body: '池水的氧气在凌晨消耗光了。你和同池的鱼一起浮到水面，张大嘴，等待天亮。',
      options: [
        { t: '浮在水面，等天亮', hint: '安全↑ 风险↑',
          eff: { health: +2 }, risk: 1.3, riskDays: 1,
          result: '你在水面一直呼吸，直到太阳升起来。周围有几条鱼没有醒过来。' },
        { t: '沉到池底，减少消耗', hint: '节能 · 缺氧风险↑',
          kill: 0.15, cause: 'oxygen', eff: { food: -3 },
          result: '你沉到池底，慢慢地不再游动。水很凉，氧气也很少。' },
      ],
    },
    {
      id: 'virus', at: 200,
      title: '身上的红斑',
      body: '一些鱼身上出现了红斑，有的已经停止游动。工人在加快投饵，也在检查水质。',
      options: [
        { t: '继续吃，保持体力', hint: '饱食↑ 风险↑↑',
          eff: { food: +10 }, kill: 0.25, cause: 'gcrv', risk: 1.8, riskDays: 10,
          result: '你继续吃饲料。红斑在几天之内扩大了，你感到身体越来越沉。' },
        { t: '离开人群，躲到水草边', hint: '安全↑ 饿一点',
          eff: { food: -5, safety: +10 }, risk: 1.2, riskDays: 10,
          result: '你躲到水草边，离开了拥挤的人群。那里的水比较清。' },
      ],
    },
    {
      id: 'feed', at: 100,
      title: '投饵的声音',
      body: '工人的船靠近池边，撒饲料的声音在水面上噼啪响。饲料很快就被抢光了。',
      options: [
        { t: '挤到前面抢', hint: '饱食↑↑ 风险↑',
          eff: { food: +20, safety: -5 }, risk: 1.2, riskDays: 5,
          result: '你挤到了饲料前面，吃到了很多。身边的鱼也在推挤。' },
        { t: '在后面慢慢吃', hint: '稳妥',
          eff: { food: +8 },
          result: '你在后面吃剩下的饲料。它们沉得慢，还够你吃。' },
      ],
    },
    {
      id: 'net', at: 400,
      title: '拉网',
      body: '工人开始拉网。网沿着池底慢慢收拢，上市的鱼会被挑出来，装进塑料桶。',
      options: [
        { t: '随鱼群往网中间挤', hint: '危险↑↑',
          kill: 0.15, cause: 'transport', eff: { safety: -5 },
          result: '你挤进了鱼群的中间，网一步步收紧。你被拉上了岸。' },
        { t: '躲到池边的深水', hint: '安全↑ 风险↑',
          eff: { safety: +15 }, risk: 1.2, riskDays: 5,
          result: '你躲到池边的深水里。网从你身边划过，一时没有收到你。' },
      ],
    },
    {
      id: 'fry_edge', at: 12,
      title: '水草边还是池中央',
      body: '你已经能吃浮游动物了。池子边缘的水草旁浮游生物多，但水霉菌也在那里的静水里繁殖；池中央的水流急，食物少，却比较干净。',
      options: [
        { t: '靠近池边的水草', hint: '饱食↑ 水霉菌↑', eff: { food: +12 }, risk: 1.3, riskDays: 10,
          result: '你游到水草边，浮游动物很多。水霉菌的菌丝在水草上慢慢长开。' },
        { t: '留在池中央', hint: '稳妥 · 饿一点', eff: { food: -6, health: +3 },
          result: '你留在池中央，水流把你推着游。食物少，但你的鳃很干净。' },
      ],
    },
    {
      id: 'pond_mud', at: 300,
      title: '池底的淤泥',
      body: '池底的淤泥越积越厚。夏天的水温升高，溶解氧的变化越来越快，黄昏时氧气下降得尤其快。',
      options: [
        { t: '浮到表层换气', hint: '缺氧风险↓ 安全↓', eff: { health: +5, safety: -5 }, risk: 1.2, riskDays: 1,
          result: '你浮到表层，张大嘴换气。水面上有风，你的身体随着波浪起伏。' },
        { t: '留在池底，减少游动', hint: '节能 · 缺氧风险↑', eff: { food: -3 }, kill: 0.1, cause: 'oxygen',
          result: '你留在池底，尽量不动。池底的水不太流动，但你还能撑过这一夜。' },
      ],
    },
    {
      id: 'market_wait', at: 560,
      title: '快到上市的规格了',
      body: '你的体重接近上市标准。工人还没有拉网，池子里的饲料越来越少，你可以继续吃，争取长得更重；池里的鱼也越来越密。',
      options: [
        { t: '继续吃，争取长得更重', hint: '饱食↑ 病害风险↑', eff: { food: +12 }, kill: 0.1, cause: 'gcrv', risk: 1.5, riskDays: 20,
          result: '你继续吃，体重一点点增加。池边有几条鱼身上出现了红斑，你小心地避开了它们。' },
        { t: '保持体力，待在池底', hint: '稳妥 · 饿一点', eff: { food: -5, health: +3 },
          result: '你待在池底，等工人来拉网。' },
      ],
    },
    {
      id: 'carp_cage_tear', at: 220, need: 'cage',
      title: '网箱的网破了一角',
      body: '网箱的一角被风浪划破，网眼张开了一道口子。你的身体能从那里穿出去，但外面的水很急。',
      options: [
        { t: '从破口游出去，回到池塘里', hint: '自由 · 风险↑', eff: { safety: -5 }, kill: 0.15, cause: 'predator', risk: 1.2, riskDays: 3,
          result: '你从破口游出去。水很急，一只水鸟正从上方盯着你。' },
        { t: '留在网箱里，等人来修', hint: '安全 · 食物少', eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你留在网箱里。修网的人很晚才来，你在里面等了好几天。' },
      ],
    },
    {
      id: 'carp_mono_density', at: 150, need: 'mono',
      title: '池子太挤了',
      body: '池子里的草鱼多得几乎没有空隙。夜里氧气消耗得比去年快，工人在池边加了一台增氧机，但还没开。',
      options: [
        { t: '浮到上层，等增氧机开', hint: '安全 · 风险↑', eff: { safety: +3 }, risk: 1.2, riskDays: 2,
          result: '你浮在上层。远处的增氧机终于响了起来。' },
        { t: '沉到池底，省点力气', hint: '节能 · 缺氧风险↑', eff: { food: -3 }, kill: 0.12, cause: 'oxygen',
          result: '你沉到池底，水越来越闷。' },
      ],
    },
    {
      id: 'carp_paddy_drain', at: 35, need: 'paddy',
      title: '稻田排水',
      body: '稻田的水排进了池塘，水里有一股淡淡的药味。池边的鱼都浮到了上层。',
      options: [
        { t: '跟着水流游进池塘中央', hint: '饱食↑ 风险↑', eff: { food: +6 }, risk: 1.2, riskDays: 5,
          result: '你游到池子中央，水流把你推着，药味淡了一些。' },
        { t: '留在进水口附近，等水变清', hint: '稳妥 · 饿一点', eff: { food: -5, health: +2 },
          result: '你待在进水口的边上，水慢慢变清了。' },
      ],
    },

  ],

  idle: [
    '池水是淡绿色的，能看见的地方很有限。',
    '池底有一层沉淀物，偶尔会被水流搅起来。',
    '增氧机在池子的一角响着，水流把浮萍推向岸边。',
    '工人在池边走过，他们的影子落在水面上。',
    '水流慢慢地推着你，你随它漂一会儿，再停下来。',
    '水温低的时候，什么都慢下来，只是待着。',
    '池边的草被风吹得沙沙响，有几片叶子落进了水里。',
    '这片水的边界在哪里，你并不知道，只知道它很大。',
  ],

  epitaph: '你在一口池塘里长大，被拉网、称重、装进塑料桶，运往市场。这是一条养殖草鱼的一生。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'sea_turtle',
  name: '绿海龟',
  en: 'Green sea turtle',
  sci: 'Chelonia mydas（绿海龟）',
  emoji: '🐢',
  scene: 'reef',
  kind: 'wild',
  tagline: '一窝一百来枚卵，大多数走不到海里，能长到成年的不到千分之一',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '巢穴位置', options: [
        ['海滩高处、阳光直射的沙坑', 2, { risk: 1.1 }],
        ['近水线、比较阴凉的沙坑', 2, {}],
        ['一片椰树阴影下的沙坑', 1, { risk: 0.9 }],
      ]},
      { label: '海洋盆地', options: [
        ['太平洋西岸的一片海滩，洋流会把你带向东方的大洋', 3, { food: +5, set: 'pacific' }],
        ['大西洋西岸的一片海滩，海草床离岸不远', 2, { food: +5, set: 'atlantic' }],
        ['印度洋的一座岛屿，海草丰富，但渔网也多', 2, { risk: 1.2, set: 'indian' }],
      ]},
      { label: '沙滩的守护', options: [
        ['一片有人巡护的保护区海滩，夜里有人打着手电守着', 3, { safety: +10, set: 'protected' }],
        ['一片没人看管的海滩，夜里有车从沙滩上开过', 2, { safety: -10, risk: 1.2, set: 'unguarded' }],
        ['一片被灯光照亮的海滩，海边酒店的灯一夜不灭', 2, { risk: 1.25, set: 'lit' }],
      ]},
    ],
    siblings: 110,
    siblingsLabel: '同一窝产下的卵',
    intro: '你是一枚卵，埋在{巢穴位置}里。沙坑的温度决定了你的性别，这一次，你是{sex}。同一窝卵有 {siblings} 枚，你的母亲在夜里一个人挖好坑，产完，又爬回了海里。',
  },

  stages: [
    { id: 'egg',   name: '卵（沙坑中）',     from: 0,     unit: 'week'  },
    { id: 'hatch', name: '幼龟（沙滩到大海）', from: 60,    unit: 'day'   },
    { id: 'lost',  name: '漂流期（"失踪的年代"）', from: 66, unit: 'month' },
    { id: 'juv',   name: '近岸幼龟（海草与礁区）', from: 1400, unit: 'year' },
    { id: 'adult', name: '成年海龟',         from: 9125,  unit: 'year'  },
    { id: 'old',   name: '老龟',             from: 25550, unit: 'year'  },
  ],
  maturity: 9125,
  maxAge: 26000,

  survival: [[0,1],[30,0.7],[60,0.5],[66,0.3],[70,0.1],[120,0.03],[365,0.01],[1000,0.004],[1500,0.002],[3000,0.0015],[6000,0.0013],[9125,0.001],[15000,0.0008],[20000,0.0004],[25550,0.0002],[26000,0]],
  survivalNote: '幼龟的死亡率是最高的，从沙滩到成年的存活率常被估计在千分之一左右；成年后的曲线为粗估，长寿个体极少',

  init: { health: 80, food: 55, safety: 40 },
  foodDrain: 2,

  causes: [
    { id: 'crab_bird', escape: true, w: 6, stages: ['egg','hatch'], short: '被螃蟹或海鸥吃掉',
      text: '沙滩上的螃蟹和海鸥先找到了刚孵出的幼龟。你只爬了几米，就没有再动。' },
    { id: 'shark', escape: true, w: 4, stages: ['lost','juv','adult'], short: '被鲨鱼咬住',
      text: '一条鲨鱼从下方靠过来，把你的后腿咬住了。你的壳在它的牙齿之间碎开。' },
    { id: 'longline', escape: true, w: 3, stages: ['juv','adult','old'], short: '延绳钓钩住后淹死',
      text: '钩子钩住了你的前肢。你被拖上船，离开水的时间太长，最后没能再呼吸。' },
    { id: 'gillnet', escape: true, w: 2, stages: ['juv','adult','old'], short: '被刺网缠住淹死',
      text: '刺网缠住了你的颈部。你没办法浮上去换气，最后在网里沉了下去。' },
    { id: 'plastic', escape: false, w: 2, stages: ['lost','juv','adult','old'], short: '吞下塑料堵住肠道',
      text: '你把一块半透明的塑料袋当成了水母吞下去。它卡在消化道里，你慢慢地不再吃东西。' },
    { id: 'boat', escape: true, w: 2, stages: ['juv','adult','old'], short: '被船的螺旋桨击中',
      text: '一艘快艇从海面掠过。螺旋桨在你的背甲上划开了一道深口子。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的呼吸间隔越来越长。最后，你在一片海草床里睡了下去，不再醒来。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '沙坑里的温度很稳定。卵在沙子中间一点点长大。' },
    { stages: ['egg'], w: 1, once: true, text: '孵化期间，沙坑的温度正在决定你的性别。温度较高时，通常会发育成雌龟。',
      fact: '绿海龟的性别由孵化温度决定，较高温度倾向于产生雌性（Mrosovsky & Yntema 1980）' },
    { stages: ['hatch'], w: 1, once: true, text: '你从卵壳里挣出来，和同窝的几十只幼龟一起爬向海边。' },
    { stages: ['lost'], w: 4, text: '你随着洋流漂着，身下是一大块马尾藻。它们提供了遮蔽，里面有许多小虾和小鱼。', eff: { food: [10, 16] },
      fact: 'Carr 1987 将幼龟在远洋表层漂流的阶段称为“失踪的年代”（lost years），这一阶段至今仍是研究最少的时期之一' },
    { stages: ['lost'], w: 3, text: '又一块马尾藻漂过来。你钻进去，咬住了藻丝间的小虾。', eff: { food: [8, 12] } },
    { stages: ['lost'], w: 2, text: '海面上的风暴把你打翻，你在水下待了很久，才重新浮上来。', eff: { health: -6 } },
    { stages: ['lost'], w: 2, text: '一只海鸟落在水面，低低地盘旋。你紧紧躲在藻里。', eff: { safety: -8 } },
    { stages: ['lost','juv'], w: 1, text: '一片半透明的塑料袋漂过，像一只水母。你游了过去，吞了一口。', eff: { health: -3 } },
    { stages: ['lost'], w: 1, text: '夜里，海面的磷光在你身边亮起来，像在一片星空里游动。' },
    { stages: ['juv'], w: 3, text: '你游进了海草床，海草的叶子在水里轻轻地摇。', eff: { food: +10 } },
    { stages: ['juv'], w: 2, text: '一群小鱼从海草床里游过，你吃掉了身边的几条。', eff: { food: [8, 14] } },
    { stages: ['juv'], w: 2, text: '你的背甲上附着了一层藤壶，它们让你游得慢了一些。', eff: { food: -3 } },
    { stages: ['juv'], w: 1, once: true, text: '你第一次看到一只大海龟在珊瑚礁边慢慢地吃海草。' },
    { stages: ['juv','adult'], w: 2, text: '一艘渔船的引擎从头顶经过，震得水都在抖。', eff: { safety: -6 } },
    { stages: ['adult'], w: 3, text: '你在海草床上吃草，每一口都咬断了几片叶子。', eff: { food: [12, 18] } },
    { stages: ['adult'], w: 2, text: '你吞下了一块塑料，它在胃里停留了很久。', eff: { health: -4 } },
    { stages: ['adult'], w: 2, text: '远处的一张延绳钓浮子在水面上漂着。你绕了过去。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, text: '一只虎鲨的影子在远处一闪而过。', eff: { safety: -10 } },
    { stages: ['adult'], w: 1, once: true, need: '!male', text: '你第一次爬上沙滩，挖了一个坑，在夜里产下了 {n} 枚卵。', eff: { offspring: [60, 120] } },
    { stages: ['adult','old'], w: 1, text: '夜里，你随着海流游过一片珊瑚礁，礁石的影子在身下移动。' },
    { stages: ['old'], w: 3, text: '你的游动慢了下来，每次呼吸之间停的时间更长。', eff: { health: -5 } },
    { stages: ['old'], w: 2, text: '你的壳上长出了藻类和藤壶。', eff: { health: -2 } },
    { stages: ['old'], w: 1, once: true, need: '!male', text: '你的产卵间隔越来越长，次数也越来越少。', set: 'spent' },
    { stages: ['lost'], w: 3, act: 'forage', text: '你在马尾藻里咬住一只小虾。它缩着身子往藻丛深处钻，你没有追。', eff: { food: [8, 12] } },
    { stages: ['juv'], w: 3, act: 'forage', text: '你咬断了几片海草的叶子，嚼的时候，叶子里的小鱼一下子散开。', eff: { food: [10, 16] } },
    { stages: ['adult'], w: 2, act: 'forage', text: '你在海草床上一口一口地吃草。身下的海草被啃出一片空白。', eff: { food: [12, 18] } },
    { stages: ['old'], w: 1, act: 'forage', text: '你的牙齿磨平了，只能慢慢咬碎海草。', eff: { food: [4, 8] } },
    { stages: ['lost'], w: 2, act: 'hide', text: '你钻进一团马尾藻，身上很快被遮住。里面又暗又热闹，有许多小生物。', eff: { safety: +5, food: +3 } },
    { stages: ['juv','adult'], w: 2, act: 'hide', text: '你躲进珊瑚礁的缝隙，只露出半个头。鲨鱼的影子在礁石外缓缓掠过。', eff: { safety: +8 } },
    { stages: ['juv','adult','old'], w: 2, act: 'rest', text: '你沉在水里，呼吸一次要停很久。周围的水很静。', eff: { health: +4 } },
    { stages: ['lost'], w: 1, act: 'rest', text: '你在马尾藻下沉着睡了一觉，醒来时藻已经漂远了一点。', eff: { health: +3 } },
    { stages: ['juv'], w: 2, act: 'explore', text: '你游进一片陌生的礁区，珊瑚的颜色五颜六色，鱼多得数不清。', eff: { food: [8, 14], safety: -5 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你离开熟悉的海草床，朝远海游了几天。路上只看见蓝色的水，没有任何食物。', eff: { food: -6 } },
    { stages: ['adult'], w: 3, act: 'mate', need: '!male', text: '你爬上沙滩，挖坑产卵。卵一个个落下去，你在夜里一直在做这件事。', eff: { offspring: [60, 120] } },
    { stages: ['adult'], w: 2, act: 'mate', need: '!male', text: '你在海滩上看到远处有手电光一闪，停下挖沙的动作，又慢慢继续挖。', eff: { offspring: [40, 90], safety: -3 } },
    { stages: ['hatch'], w: 2, need: 'pacific', text: '你和同窝的幼龟冲进海里，洋流很快把你们带向东边的深海。', eff: { safety: -3 } },
    { stages: ['lost'], w: 2, need: 'pacific', text: '漂流的日子里，你身下是一大片马尾藻，随着洋流缓缓漂动。你在藻丛里找到了一小群同伴。', eff: { food: +8 } },
    { stages: ['juv'], w: 1, need: 'pacific', text: '你在海草床上慢慢长大，背甲上附着的藻类越来越多。', eff: { health: +3 } },
    { stages: ['hatch'], w: 2, need: 'atlantic', text: '你朝着海水反射的亮光爬过滩涂。岸边一只螃蟹从沙子里探出头，又缩了回去。', eff: { safety: -3 } },
    { stages: ['lost'], w: 2, need: 'atlantic', text: '大西洋的洋流很强。你被带到了一片漂浮的海草旁边，就在那里停了下来。', eff: { food: +5 } },
    { stages: ['juv'], w: 2, need: 'atlantic', act: 'forage', text: '你游到一片海草床，咬断一根叶子，慢慢地嚼。', eff: { food: +12 } },
    { stages: ['juv','adult'], w: 2, need: 'indian', text: '岸边挂着很多渔网。你游过一片浅水，差一点被一根网绳缠住。', eff: { safety: -5 } },
    { stages: ['juv'], w: 2, need: 'indian', act: 'hide', text: '珊瑚礁的缝隙很多，你钻进一个缝里，躲过了一群鱼的追逐。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, need: 'indian', act: 'explore', text: '你游过一片又一片海草床。岛屿在远处的海平面上，只剩下一条线。', eff: { food: +8 } },
    { stages: ['egg'], w: 2, need: 'protected', text: '一个穿着反光背心的人在夜里守着沙坑。他蹲在旁边，用手电小心地照着。', eff: { safety: +5 } },
    { stages: ['hatch'], w: 2, need: 'protected', text: '巡护的人用木板围出一条路，帮你们朝着海的方向爬。你们爬得很慢，但没有偏离。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, need: 'protected', act: 'mate', text: '你回到保护区的海滩，巢的位置上插着一根小标记杆。', eff: { offspring: [20, 40] } },
    { stages: ['egg'], w: 2, need: 'unguarded', text: '半夜有一辆车从沙滩上开过。车轮压过的地方，沙子裂开了一道缝。', eff: { safety: -10 } },
    { stages: ['hatch'], w: 2, need: 'unguarded', text: '幼龟爬到一半时，沙滩上的车灯照了过来。你们在亮光里乱爬，偏离了方向。', eff: { safety: -8 } },
    { stages: ['adult'], w: 1, need: 'unguarded', act: 'mate', text: '你爬上沙滩，正要挖坑，一群人围了过来举着手机。你停了下来，等他们走开。', eff: { safety: -5 } },
    { stages: ['hatch'], w: 3, need: 'lit', text: '海边酒店的灯一整夜都亮着。幼龟们朝着光的方向爬，爬到了草地上，天亮时被太阳晒住。', eff: { safety: -10 },
      fact: '海龟幼体会朝向较亮的方向爬，人造光会让它们偏离大海（Witherington 与 Martin，1996，佛罗里达海龟保护的照明研究报告）' },
    { stages: ['egg'], w: 1, need: 'lit', text: '沙坑上方的灯光一闪一闪。你在卵壳里，不知道光是从哪里来的。' },
    { stages: ['adult'], w: 2, need: 'lit', act: 'mate', text: '你爬上海滩，灯光照亮了你身后的沙滩。你把沙子压得很紧，想让光照不到卵上。', eff: { food: -3 } },
    { stages: ['hatch'], w: 2, need: 'bold', text: '你第一个冲进浪里，其余的幼龟还在沙滩上挣扎。你没有回头看。', eff: { safety: -3 } },
    { stages: ['hatch'], w: 2, need: 'cautious', text: '你在浪边停了一下，等一个浪退下去，才趁着下一个浪冲进海里。', eff: { safety: +5 } },
    { stages: ['lost','juv'], w: 2, need: 'curious', text: '你在漂流的马尾藻里翻来翻去，看见一只小螃蟹被压在一片叶子下面。' },
    { stages: ['hatch'], w: 2, need: 'runt', text: '你个子最小，在沙滩上爬得慢。你被浪推回岸边，只好重新爬一次。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'robust', text: '一条鲨鱼咬住了你的后腿，你用力蹬开，它松了口。你的背甲上留下了一道伤痕。', eff: { health: -5, safety: +3 } },
  ],

  opening: {
    title: '什么时候爬出沙坑',
    body: '你已经破壳，和同窝的幼龟挤在沙坑底下。坑口外的天还亮着一层灰，一些同伴已经开始往上挖沙。等天全黑了再爬，鸟会少一些，但你会比它们晚很久。',
    options: [
      { t: '跟着同窝的幼龟，趁天刚暗就爬', hint: '同伴多 · 天没黑，鸟看得见', eff: { safety: +5 }, risk: 1.2, riskDays: 60,
        result: '你跟着同窝的幼龟一起爬出沙坑。沙面上很快留下一片小小的脚印。' },
      { t: '等天全黑，单独爬', hint: '鸟看不见 · 落在后面', eff: { food: -3 }, risk: 1.3, riskDays: 60,
        result: '你等到天全黑才动。坑口很安静，只有远处海浪的声音。你爬到海边时，同窝的大部分已经走远了。' },
    ],
  },

  actions: {
    forage: { name: '吃海草与小虾', desc: '在海草床上咬断叶子，或在马尾藻里找小虾和小鱼。', stages: ['lost','juv','adult','old'], text: ['你咬断了一片海草的叶子，嚼的时候汁水流出来。', '一只小虾缩着身子往藻丛深处钻，你没有追。', '海草里的小鱼一下子散开，又慢慢聚回来。'] },
    hide: { name: '躲进藻丛或礁缝', desc: '钻进马尾藻或珊瑚礁的缝隙里，只露出半个头，让捕食者找不到你。', stages: ['lost','juv','adult'], text: ['你钻进一团马尾藻，身上很快被遮住。', '礁石外的水很亮，你缩在缝隙里不动。', '一只海鸟在水面盘旋，你没有探出头。'] },
    rest: { name: '沉在水里睡', desc: '在水里停住，把身体沉下去休息，呼吸一次要停很久。', stages: ['lost','juv','adult','old'], text: ['你沉在水里，呼吸一次要停很久。', '一觉醒来，藻已经漂远了一点。', '水流把你慢慢带着走，你没有醒。'] },
    explore: { name: '游向远海', desc: '离开熟悉的海草床，朝着未知的方向游。', stages: ['juv','adult'], text: ['你游过一片没有海草的水，只看见蓝色。', '远处出现了一片陌生的礁区，珊瑚的颜色很杂。', '你游了很久，才找到下一片可以落脚的海草。'] },
    mate: { name: '上岸产卵', desc: '成年雌龟回到熟悉的海滩，在夜里爬上沙滩，挖坑产卵。', done: '你在夜里挖了一个坑，产下了 {n} 枚卵，然后爬回了海里。', stages: ['adult'], need: '!male', text: ['你爬上熟悉的海滩，沙子还留着白天的温度。', '你挖了一个深坑，沙子从你的后肢一点点被推开。', '卵一个个落进坑里，你把沙子慢慢盖上。'] },
  },

  decisions: [
    {
      id: 'beach_run', stage: 'hatch',
      title: '夜里的海滩',
      body: '你从沙坑里爬出来。朝着海的方向有一片亮，那是海面反射的月光。另一边是沙丘，影子很深。',
      options: [
        { t: '朝亮的海面全速爬', hint: '安全↑ 螃蟹和海鸥↑',
          eff: { safety: +5 }, kill: 0.15, cause: 'crab_bird',
          result: '你连续爬了几分钟。几只螃蟹在你身后追了一段，最后没有追上。' },
        { t: '朝沙丘的阴影里爬', hint: '危险↑↑ 脱水↑',
          eff: { health: -10 }, risk: 1.6, riskDays: 1,
          result: '你爬进沙丘的阴影。那里没有海，你只能等天亮，又在太阳下烤了一整天。' },
      ],
    },
    {
      id: 'sargassum', at: 200, stage: 'lost',
      title: '马尾藻',
      body: '一大块马尾藻在远处漂着，里面能躲避捕食者，也有许多小型生物。外海的水更深，那里没有遮蔽。',
      options: [
        { t: '靠近马尾藻，躲在里面', hint: '饱食↑ 安全↑',
          eff: { food: +10, safety: +10 },
          result: '你钻进了马尾藻的缝隙。里面又暗又热闹，有小虾在你身边爬。' },
        { t: '往外海深处游', hint: '饿一点 · 风险↑',
          eff: { food: -5 }, risk: 1.5, riskDays: 60,
          result: '你离开了马尾藻，往海的深处游。周围只剩下蓝色的水。' },
      ],
    },
    {
      id: 'seagrass', at: 2000, stage: 'juv',
      title: '海草床还是礁区',
      body: '近岸的海草床食物多，珊瑚礁边也有很多鱼。但礁边有很多鲨鱼，你要选一个地方长住。',
      options: [
        { t: '留在海草床', hint: '饱食↑ 风险稳定',
          eff: { food: +10 }, risk: 1.2, riskDays: 365,
          result: '你留在海草床上，每天吃一些叶子，身体慢慢长大。' },
        { t: '去礁区边缘', hint: '机会↑ 风险↑↑',
          eff: { food: +5, safety: -5 }, kill: 0.1, cause: 'shark',
          result: '你游到礁区边缘。鱼很多，但有一只大鲨鱼在礁壁下缓慢地转动。' },
      ],
    },
    {
      id: 'return', at: 9500, stage: 'adult', need: '!male',
      title: '回到出生的海滩',
      body: '你的身体里有一种说不清的牵引，方向指向很远的一个海岸。那可能是你出生的海滩，路上要穿过渔场。',
      fact: '海龟能利用地磁场的强度和倾角判断自己的位置，并据此回到出生海域附近（Lohmann & Lohmann 1996）',
      options: [
        { t: '长途洄游去产卵', hint: '后代↑↑ 风险↑',
          eff: { offspring: [60, 120] }, risk: 1.5, riskDays: 60, kill: 0.1, cause: 'longline',
          result: '你游了几百公里。路上经过渔场时，你看见了浮子，但没有绕开。' },
        { t: '留在原来的海草床', hint: '饱食↑ 后代↓',
          eff: { food: +10, safety: +5 },
          result: '你没有去那片远方的海滩，继续在熟悉的海草床上吃草。' },
      ],
    },
    {
      id: 'longline', at: 12000,
      title: '延绳钓线',
      body: '前方有一条延绳钓线，浮子沿着水面排开，鱼饵挂在钩子上。你闻到了鱼的气味。',
      options: [
        { t: '潜到更深的水里，绕开', hint: '安全↑ 饿一点',
          eff: { food: -5, safety: +10 }, risk: 1.2, riskDays: 30,
          result: '你潜到更深的水里，绕过了那条线。你的背上擦过一根细绳。' },
        { t: '吃掉鱼饵', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +15 }, kill: 0.35, cause: 'longline',
          result: '你咬住了鱼饵，钩子插进了你的口角。' },
      ],
    },
    {
      id: 'cold_drift', at: 600, stage: 'lost',
      title: '冷水团',
      body: '你随洋流漂进一片更冷的水里，水温一天天下降。前面是暖流，里面有更多食物，但洋流把你往外推，你要自己决定往哪边游。',
      options: [
        { t: '顺着暖流走', hint: '食物↑ 风险↑', eff: { food: +8 }, risk: 1.3, riskDays: 60,
          result: '你顺着暖流游。这里的藻类和小生物都多了起来，你游得很累，但吃得饱。' },
        { t: '停在冷水里随波漂', hint: '耗能↓ 饿一点', eff: { food: -6, safety: +5 },
          result: '你停在冷水里，随着洋流慢慢漂。周围的水很清，没有食物，也没有捕食者。' },
      ],
    },
    {
      id: 'sun_surface', at: 1000, stage: 'lost',
      title: '海面的阳光',
      body: '海面的水温温暖，你可以浮上去晒一晒，让身体暖起来。但海面上有海鸟，它们在水面上低低地盘旋。',
      options: [
        { t: '浮上去晒太阳', hint: '体力↑ 海鸟↑', eff: { health: +6, safety: -5 }, risk: 1.4, riskDays: 5,
          result: '你浮上海面，晒了几个小时。海鸟从你身边掠过，你又潜了下去。' },
        { t: '留在水下', hint: '安全↑ 体力↓', eff: { health: -2, safety: +5 },
          result: '你留在水下，身上一直是凉的。' },
      ],
    },
    {
      id: 'seagrass_loss', at: 18000, stage: 'adult',
      title: '海草床变灰了',
      body: '这些年，你熟悉的海草床缩小了。一片片海草变成了灰色的泥。远处有一片新长出的海草，但要穿过一片渔场，渔网的浮标在那里排成一排。',
      options: [
        { t: '穿过渔场，去新的海草床', hint: '食物↑↑ 危险↑↑', eff: { food: +15 }, kill: 0.2, cause: 'gillnet', risk: 1.2, riskDays: 5,
          result: '你小心地穿过渔场，网线在你身边晃动。你到了新的海草床，身上留下一道细长的划痕。' },
        { t: '留在剩下的海草床，少吃一些', hint: '稳妥 · 饿一点', eff: { food: -8, health: +3 },
          result: '你留在剩下的海草床上，每天只吃一点。海草长得很慢，但你的身体还能撑着。' },
      ],
    },
    {
      id: 'drift_split', at: 300, need: 'pacific',
      title: '漂流的分岔',
      body: '洋流在你身下分成了两股。一股是温暖的水，里面有很多藻；另一股比较冷，离岸边远一些。',
      options: [
        { t: '顺着温暖的水走', hint: '饱食↑ 风险↑', eff: { food: +5 }, risk: 1.2, riskDays: 60,
          result: '你顺着温暖的洋流漂了很久，身上的藻越来越多。' },
        { t: '往冷水那边去', hint: '安全↑ 饿', eff: { food: -5 }, risk: 0.9, riskDays: 60,
          result: '你慢慢地往冷水那边游。水越来越凉，周围的藻也越来越少。' },
      ],
    },
    {
      id: 'lit_beach', at: 61, need: 'lit',
      title: '亮光的海滩',
      body: '你刚刚爬出沙坑。前面有两条路：一条朝着海面的暗处，一条朝着海边酒店的灯光。',
      options: [
        { t: '朝着暗处爬', hint: '安全↑', eff: { safety: +5 }, risk: 0.8, riskDays: 2,
          result: '你朝着海面上较暗的方向爬，沙子很烫，但路是对的。' },
        { t: '朝着灯光爬', hint: '风险↑↑', eff: { safety: -10 }, kill: 0.2, cause: 'crab_bird',
          result: '你朝着灯光爬去。沙滩上的螃蟹和海鸥也都朝着同一个方向。' },
      ],
    },
    {
      id: 'vehicle_tracks', at: 61, need: 'unguarded',
      title: '车辙',
      body: '夜里的车在沙滩上压出了一道深深的车辙。车辙里的沙子很软，你要从里面爬过去，才能到大海。',
      options: [
        { t: '等车开走了，再慢慢爬', hint: '安全 · 慢', eff: {}, risk: 1.2, riskDays: 2,
          result: '你停在沙滩上等着，车灯一直亮着，直到它们开远了。' },
        { t: '直接从车辙里爬过去', hint: '快 · 风险↑↑', eff: { safety: -5 }, kill: 0.1, cause: 'crab_bird',
          result: '你从车辙里翻了过去，身上沾满了软沙。海鸥在你头顶盘旋。' },
      ],
    },

  ],

  idle: [
    '周围的温度在慢慢变化，白天暖，夜里凉。',
    '一阵风吹过，表面的沙子或水面轻轻地动了一下。',
    '光从很远的地方照过来，亮度随着时间变化。',
    '你不知道自己在哪里，只知道身边的一切都在慢慢变化。',
    '有时会有生物从你附近经过，你并不知道它是什么。',
    '你的身体在慢慢长大，每一天都和昨天有一点不同。',
    '周围很安静，只有远处传来细碎的声响。',
    '这里的一切都很慢，慢得几乎感觉不到时间。',
  ],

  epitaph: '一窝约一百枚卵，能长到成年的只有很少几只。你的一生，是这片海的一小部分。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'blue_whale',
  name: '蓝鲸',
  en: 'Blue whale',
  sci: 'Balaenoptera musculus（蓝鲸），地球上已知最大的动物',
  emoji: '🐋',
  scene: 'ocean',
  kind: 'wild',
  tagline: '地球上已知最大的动物，一生中大部分时间都在吃磷虾',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生海域', options: [
        ['热带或亚热带的温暖海域，蓝鲸的繁殖场之一', 3, {}],
        ['低纬度一片岛屿附近的海域', 2, { food: +5 }],
        ['南半球温暖的沿岸海域', 1, { risk: 1.1 }],
      ]},
      { label: '种群', options: [
        ['南极的冷水区，蓝鲸的南极亚种在夏天到那里吃磷虾', 2, { food: +10, set: 'antarctic' }],
        ['印度洋的温暖海域，这里的蓝鲸是个头较小的侏儒蓝鲸', 2, { food: -5, set: 'pygmy' }],
        ['东北太平洋的沿岸，靠近北美大陆架的海域', 2, { risk: 1.2, set: 'eastpac' }],
      ]},
      { label: '那一年的磷虾', options: [
        ['那一年磷虾特别多，海水的颜色都变了', 2, { food: +10, set: 'krill_rich' }],
        ['那一年和往年差不多，磷虾在老地方', 3, { set: 'krill_normal' }],
        ['那一年海水比往年暖，磷虾群散得很开', 2, { food: -10, risk: 1.1, set: 'krill_poor' }],
      ]},
    ],
    siblings: 1,
    siblingsLabel: '同胎的幼崽（只有你）',
    intro: '你刚出生，长约 7 米，体重约 2.5 吨。你出生在{出生海域}，母鲸很快把你推上水面换气。你是{sex}。鲸一胎通常只有一头幼崽，所以这一胎只有 {siblings} 头，也就是你。',
  },

  stages: [
    { id: 'calf',   name: '幼鲸（哺乳期）',   from: 0,     unit: 'week'  },
    { id: 'weaned', name: '断奶后的幼鲸',     from: 210,   unit: 'month' },
    { id: 'young',  name: '未成年（独立觅食）', from: 1095,  unit: 'year'  },
    { id: 'adult',  name: '成年（迁徙）',     from: 2920,  unit: 'year'  },
    { id: 'old',    name: '老年',             from: 25550, unit: 'year'  },
  ],
  maturity: 2920,
  maxAge: 32850,

  survival: [[0,1],[30,0.97],[210,0.92],[365,0.9],[1095,0.87],[2920,0.8],[7300,0.7],[14600,0.5],[21900,0.25],[25550,0.12],[29200,0.03],[32850,0]],
  survivalNote: '蓝鲸的早期死亡率相对较低，属于接近 I 型的曲线（但幼鲸并非没有死亡）；寿命常估计为 80–90 年，成年后的曲线为粗估',

  init: { health: 80, food: 60, safety: 60 },
  foodDrain: 2,

  causes: [
    { id: 'ship', escape: true, w: 4, stages: ['young','adult','old'], short: '被大船撞上',
      text: '一艘大船的船底撞上了你的背。船没有停下来，你在水里慢慢地往下沉。' },
    { id: 'net', escape: true, w: 3, stages: ['weaned','young','adult','old'], short: '被渔网缠住',
      text: '渔网缠住了你的尾鳍。你挣扎了好几天，伤口一点点感染，最后没能再游到水面换气。' },
    { id: 'mother', escape: false, w: 3, stages: ['calf'], short: '母乳不足，饿死',
      text: '母鲸没有找到足够的磷虾，奶水一天比一天少。你越来越弱，最后不再吸奶。' },
    { id: 'orca', escape: true, w: 2, stages: ['calf','weaned'], short: '被虎鲸围攻',
      text: '一群虎鲸围了上来。母鲸用身体护着你，但它们轮流冲过来，你没能躲开。' },
    { id: 'krill', escape: false, w: 2, stages: ['weaned','young','adult'], short: '磷虾减少，饿死',
      text: '磷虾群在这一带减少了。你吃不饱，脂肪层一点点变薄，最后游不动了。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的换气间隔越来越长。最后一次下沉后，你没有再浮上来，海底的生物陪你度过了最后的时光。' },
  ],

  events: [
    { stages: ['calf'], w: 1, once: true, text: '你第一次呼吸，喷出一道水柱，肺里第一次充满了空气。' },
    { stages: ['calf'], w: 4, text: '母鲸把你推到水面，你吸了一口气，然后又沉下去吃奶。', eff: { health: +3 } },
    { stages: ['calf'], w: 4, text: '你每天要喝下几百升的奶，身体的增长快得惊人。',
      fact: '蓝鲸幼崽在哺乳期每天增重约 90 公斤（Aquarium of the Pacific 蓝鲸资料）', eff: { food: +10 } },
    { stages: ['calf'], w: 3, text: '母鲸在水下挤出浓稠的乳汁，颜色像奶油。你张开口，全部接住了。', eff: { food: +12 } },
    { stages: ['calf'], w: 2, text: '一群虎鲸在远处出现。母鲸侧着身体转了几圈，把你护在身后。', eff: { safety: -10 } },
    { stages: ['calf'], w: 1, text: '母鲸的奶水少了一点，你吃得慢了，只能一直跟在它身边。', eff: { food: -6 } },
    { stages: ['weaned'], w: 1, once: true, text: '你离开了母亲的奶，开始自己吃东西。你的食物主要是磷虾。', eff: { food: +5 } },
    { stages: ['weaned'], w: 4, text: '你张开口，海水和磷虾一起涌了进来。你闭上口，水从须板之间流出去，磷虾留在了口中。', eff: { food: [12, 18] } },
    { stages: ['weaned'], w: 3, text: '一群磷虾在你身边翻腾。你游到它们上方，吃了一大口。', eff: { food: [10, 15] } },
    { stages: ['weaned'], w: 2, text: '一张渔网的碎片缠在你的尾鳍上。你挣扎着往下潜。', eff: { safety: -12, health: -4 } },
    { stages: ['weaned'], w: 2, text: '一群海豚跟了你一程，它们在你的身边跃起又落下。', eff: { safety: +4 } },
    { stages: ['weaned'], w: 1, text: '夏天的表层磷虾渐渐散了。你不得不往更远的水域去找。', eff: { food: -8 } },
    { stages: ['young'], w: 3, text: '你游过很多海域。有一次你进入了一片冷水，那里的磷虾很多。', eff: { food: [10, 16] } },
    { stages: ['young'], w: 2, text: '一艘大船的声音从远处传来，越来越近，你改变了方向。', eff: { safety: -8 } },
    { stages: ['young'], w: 2, text: '一群鲸一起游动。它们的叫声在水里互相回应，传得很远。', eff: { safety: +5 } },
    { stages: ['young'], w: 1, once: true, text: '你第一次跃出水面，身体重重地落回海里，浪花很高。' },
    { stages: ['adult'], w: 3, text: '你张开大口，一次吞进几吨海水，过滤后吃掉磷虾。', eff: { food: [15, 25] } },
    { stages: ['adult'], w: 2, text: '一艘大船从你背上方的水面驶过，船底的阴影掠过你。', eff: { safety: -12 } },
    { stages: ['adult'], w: 2, text: '在繁殖海域，你听到另一头鲸的叫声，声音穿过很远的海水。' },
    { stages: ['adult'], w: 1, once: true, need: '!male', text: '你产下第一头幼崽。它在你身边游动，刚刚学会呼吸。', eff: { offspring: [1, 1] } },
    { stages: ['adult'], w: 1, need: '!male', text: '你又产下一头幼崽。它靠你的奶长大，你要在更远的海域找更多磷虾。', eff: { offspring: [1, 1] } },
    { stages: ['adult'], w: 1, text: '一群磷虾在你的下方被吞进口中，海水变得浑浊。', eff: { food: +10 } },
    { stages: ['adult'], w: 1, text: '海水温度升高，磷虾的位置变远了。你的食量少了一些。', eff: { food: -5 } },
    { stages: ['old'], w: 2, text: '你的游动慢下来。每次浮出水面换气的间隔变得更长。', eff: { health: -5 } },
    { stages: ['old'], w: 1, text: '你的背上附着了一层藤壶和小型甲壳动物。', eff: { health: -2 } },
    { stages: ['old'], w: 1, once: true, need: '!male', text: '你已经很久没有产下幼崽了。你的身体在缓慢地减少能量消耗。', set: 'spent' },
    { stages: ['weaned'], w: 3, act: 'forage', text: '你第一次跟着成鲸吃磷虾。你的口还小，只吃到一小口，但你学会了张大嘴。', eff: { food: [8, 12] } },
    { stages: ['young'], w: 3, act: 'forage', text: '你张开大口冲进磷虾群，海水和磷虾一起涌进口中。', eff: { food: [12, 18] } },
    { stages: ['adult','old'], w: 2, act: 'forage', text: '一群磷虾在冷水里聚成红色的云。你张开口，吞进去几吨海水，滤出来的磷虾够你吃一阵。', eff: { food: [15, 25] } },
    { stages: ['adult'], w: 1, act: 'forage', text: '你在一片冷水里找到大量磷虾，连续吃了几天。', eff: { food: +20 } },
    { stages: ['calf'], w: 2, act: 'hide', text: '你紧贴母亲的身侧，一艘船的声音从远处传来，母鲸把你挡在身后。', eff: { safety: +8 } },
    { stages: ['young','adult'], w: 2, act: 'hide', text: '你潜到几百米深的冷水里，船的声音在上方闷闷地传来。', eff: { safety: +8, food: -3 } },
    { stages: ['calf','weaned','young','adult','old'], w: 2, act: 'rest', text: '你在水里漂着，呼吸一次要停很久。海水很稳定，你的身体慢慢恢复。', eff: { health: +4 } },
    { stages: ['calf'], w: 1, act: 'rest', text: '母鲸在你身边漂着，你贴着它的身体睡着了。', eff: { health: +3 } },
    { stages: ['young'], w: 2, act: 'explore', text: '你游进一片没有来过的海区，水的颜色变得很深。远处有其他鲸的叫声。', eff: { food: +5, safety: -3 } },
    { stages: ['adult'], w: 1, act: 'explore', text: '你沿着洋流游了几百公里，路上没有磷虾。', eff: { food: -8 } },
    { stages: ['adult'], w: 2, act: 'mate', need: '!male', text: '你在繁殖海域遇到一头雄鲸，它的叫声在水里传得很远。你们靠得很近，互相蹭了很久。', eff: { offspring: [1, 1] } },
    { stages: ['weaned'], w: 2, need: 'antarctic', text: '你第一次看见冰山。它的影子在水下慢慢地移动，比你见过的任何一头鲸都要大。' },
    { stages: ['young'], w: 2, act: 'forage', need: 'antarctic', text: '你们在南极的冷水里张开嘴，把一大片磷虾群吞了进去。海水从须板的缝隙里流出来。', eff: { food: +20 } },
    { stages: ['adult'], w: 1, need: 'antarctic', text: '浮冰在你的头顶发出咔咔的响声。你从冰缝里浮上来换气，身边的冰层厚得像一堵墙。', eff: { health: -2 } },
    { stages: ['calf', 'weaned'], w: 2, need: 'pygmy', text: '你的身体比南极的同类小很多。母鲸带着你在温暖的海水里慢慢游，换气的时候你几乎露不出水面。', eff: { health: +3 } },
    { stages: ['young'], w: 2, act: 'forage', need: 'pygmy', text: '这里的磷虾比南极的小，你要吃得更多才能饱。你在水面上停很久，一口一口地吃。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'pygmy', text: '你在印度洋的一个海湾里遇见了一头同类。它的叫声很低，你们在水下互相听了很久。' },
    { stages: ['calf'], w: 2, need: 'eastpac', text: '沿岸的水很浅，海底的光反射到你的身上。一艘小船停在远处，船上的人举起了相机。', eff: { safety: -2 } },
    { stages: ['young', 'adult'], w: 2, act: 'explore', need: 'eastpac', text: '你沿着大陆架往北游，海水很冷，磷虾在水下聚成一道一道的红色。', eff: { food: +8 } },
    { stages: ['adult'], w: 1, need: 'eastpac', text: '海岸上的观景台每个周末都有人站着，望远镜一直对着你的方向。', eff: { safety: -3 } },
    { stages: ['weaned'], w: 2, need: 'krill_rich', text: '母亲很久没有离开你，她的奶很浓。你第一次感觉到肚子里的满足。', eff: { health: +5 } },
    { stages: ['young', 'adult'], w: 2, act: 'forage', need: 'krill_rich', text: '那一年，磷虾在海面下堆成了一层。你吃了一整天，肚子圆了一圈。', eff: { food: +25 } },
    { stages: ['adult'], w: 1, need: 'krill_rich', text: '你的脂肪层厚了很多。你下潜的时候，身上的一层油脂在水下闪着光。', eff: { health: +3 } },
    { stages: ['young'], w: 2, act: 'forage', need: 'krill_normal', text: '那一年，磷虾群还在老地方。你们每天都去同一片海，吃得不多也不少。', eff: { food: +8 } },
    { stages: ['adult'], w: 2, need: 'krill_normal', text: '夏天的海面很平。你在上面换气的时候，周围的海鸟都飞了起来。' },
    { stages: ['adult', 'old'], w: 1, need: 'krill_normal', text: '你在同一片海域转了很多年，每年夏天都在相同的地方找到磷虾。', eff: { health: +2 } },
    { stages: ['weaned', 'young'], w: 2, need: 'krill_poor', text: '磷虾群散得很开，你在海里找了好几天，才找到一小群。你身侧的肋骨越来越明显。', eff: { food: -12 } },
    { stages: ['young', 'adult'], w: 2, act: 'explore', need: 'krill_poor', text: '你游进了一片更远的冷水，那里的磷虾比较小，你吃了很久才饱。', eff: { food: +5, health: -3 } },
    { stages: ['adult'], w: 1, need: 'krill_poor', text: '你的同伴们一起往南游。你跟在它们后面，每次换气都觉得肚子是空的。', eff: { food: -8 } },
    { stages: ['calf'], w: 2, need: 'bold', text: '你第一个朝船的方向游去，在水面上跳了一下。母鲸冲你低低地叫了一声，你又沉回了它的身边。', eff: { safety: -3 } },
    { stages: ['calf', 'weaned'], w: 2, need: 'cautious', text: '你紧紧贴着母鲸，它的背在你的身侧起伏。远处溅起水声，你整个身体都僵住了。', eff: { safety: +5 } },
    { stages: ['young'], w: 1, act: 'explore', need: 'curious', text: '你游进了一条从没去过的海底峡谷。峡谷壁上有一片发光的海藻，你在里面绕了好几圈。', eff: { food: +5 } },
    { stages: ['calf'], w: 1, need: 'runt', text: '你生下来就比一般的蓝鲸幼崽小。你吃奶吃得慢，常常在母鲸身边饿得发抖。', eff: { food: -8 } },
    { stages: ['young', 'adult'], w: 1, need: 'robust', text: '你的身体比同龄的鲸厚实。一次和同伴争夺磷虾群时，你用身体把它挤到了一边。', eff: { food: +10 } },
  ],

  opening: {
    title: '第一次换气',
    body: '你刚刚出生，还在水里。母鲸用鼻子把你推向水面，你的肺还没有完全打开。接下来你要决定，怎样跟着它。',
    options: [
      { t: '贴紧母鲸身侧，跟着它换气', hint: '安全↑ 奶少一点', eff: { safety: 10, food: -3 }, risk: 0.8, riskDays: 30,
        result: '你贴着母亲的身侧上浮，吸进了第一口空气。它的身体挡住了水流，你很快就能跟上它的节奏。' },
      { t: '先在母鲸腹侧吃奶，再上浮', hint: '饱食↑ 换气晚一点', eff: { food: 10, health: -3 }, risk: 1.3, riskDays: 30,
        result: '你在母鲸的腹侧吃了几口奶。上浮晚了几秒，周围的水流把你带偏了一点。' },
    ],
  },

  actions: {
    forage: { name: '张口吞磷虾', desc: '冲进磷虾群，张开大口，靠须板把海水滤出去，留下磷虾。', stages: ['weaned','young','adult','old'], text: ['你张开大口，海水和磷虾一起涌进来。', '你闭上口，水从须板之间流出去，磷虾留在了口中。', '一团红色的磷虾云在你身边翻腾。'] },
    hide: { name: '贴近母鲸或潜入深水', desc: '幼鲸贴着母鲸的身侧，成鲸潜到几百米深的冷水里，都是为了离开表层的危险。', text: ['你紧贴着母亲的身侧，她的身体挡住了水流。', '你潜入深水，船的声音在上方闷闷地传来。', '你在深水里停下来，周围很暗，很冷。'] },
    rest: { name: '漂着休息', desc: '在水里慢慢漂着，减少换气和游动，等待身体恢复。', text: ['你在水里漂着，呼吸一次要等很久。', '海水的温度很稳定，你几乎不需要动。', '母鲸在你身边漂着，你贴着它的身体睡着了。'] },
    explore: { name: '去远方海域', desc: '离开熟悉的海区，沿着海流向远处游，去别的磷虾群。', stages: ['young','adult'], text: ['你游进一片没有来过的海区，水的颜色变深了。', '远处有其他鲸的叫声，你不确定那是不是同伴。', '你沿着洋流游了几百公里，路上没有磷虾。'] },
    mate: { name: '去繁殖海域找雄鲸', desc: '在温暖的繁殖海域，靠叫声和雄鲸相遇，之后怀上幼崽。', done: '你与一头雄鲸相遇，之后的一年里，你怀上了 {n} 头幼崽。', stages: ['adult'], need: '!male', text: ['你向温暖的繁殖海域游去，水越来越清。', '你在海域里听到雄鲸的叫声，它的声音传得很远。', '你们靠得很近，互相蹭了很久。'] },
  },

  decisions: [
    {
      id: 'wean', at: 210,
      title: '断奶',
      body: '母鲸的奶水越来越少，它在催你自己吃东西。你可以独自去觅食，也可以留在母亲身边再待几个月。',
      options: [
        { t: '离开母亲，独自觅食', hint: '食物↑ 风险↑',
          eff: { food: +10 }, risk: 1.3, riskDays: 90,
          result: '你离开母亲，朝着磷虾多的海区游去。身后的水很快就空了。' },
        { t: '留在母亲身边，再待几个月', hint: '安全↑ 饱食↓',
          eff: { safety: +8, food: +4 },
          result: '你继续跟着母亲。它的奶少了，但身边很安全。' },
      ],
    },
    {
      id: 'migrate', at: 3500, stage: 'adult',
      title: '迁徙',
      body: '季节在变。你的身体告诉你该往一个方向去：夏季的高纬海域磷虾很多，冬季的低纬海域适合繁殖。',
      fact: '蓝鲸在夏季高纬觅食海域和冬季低纬繁殖海域之间做季节性迁徙（Mackintosh 1965，《The Stocks of Whales》）',
      options: [
        { t: '去高纬海域觅食', hint: '饱食↑↑ 风险稳定',
          eff: { food: +30 }, risk: 1.2, riskDays: 180,
          result: '你朝着冷水游去。磷虾在那里很多，你吃得很饱。' },
        { t: '去低纬海域繁殖', hint: '繁殖机会↑ 饿一点',
          eff: { food: -10 }, risk: 1.1, riskDays: 180,
          result: '你朝着温暖的海域游去。那里的水很清，你开始留意身边的雌鲸。' },
      ],
    },
    {
      id: 'lunge', at: 5000, stage: 'adult',
      title: '磷虾云',
      body: '前方的水里有一大团磷虾，颜色像一层红雾。你可以加速冲进去，也可以慢慢游，等它们自己散开。',
      options: [
        { t: '张大口冲进去', hint: '饱食↑↑ 体力↓',
          eff: { food: +30, health: -5 }, risk: 1.2, riskDays: 1,
          result: '你冲进了磷虾云。水压把你的口撑得很大，磷虾和海水一起涌了进来。' },
        { t: '慢慢游，等它们散开', hint: '稳妥 · 饿一点',
          eff: { food: +5, safety: +5 },
          result: '你慢慢地游。磷虾在你身边散开，你只吃到了其中的一小部分。' },
      ],
    },
    {
      id: 'ship', at: 8000, stage: 'adult',
      title: '一艘大船',
      body: '一艘大船从正上方靠近，引擎的声音沉重。你可以潜到深处，也可以继续吃。',
      options: [
        { t: '潜到深处', hint: '安全↑ 风险↑',
          eff: { safety: +8, food: -5 }, risk: 1.4, riskDays: 2,
          result: '你潜到深处。船从上方经过，螺旋桨的声音在水里慢慢远去。' },
        { t: '继续吃，不理它', hint: '饱食↑↑ 危险↑↑',
          eff: { food: +15 }, kill: 0.3, cause: 'ship',
          result: '你继续吃磷虾。船身的阴影压下来，你没有来得及躲开。' },
      ],
    },
    {
      id: 'net', at: 15000, stage: 'adult',
      title: '渔网的边缘',
      body: '一排刺网的浮标在前方的水面上排开。那里的磷虾很多，但网线隐在水里，你看不清。',
      options: [
        { t: '绕开网线，去别的海区', hint: '安全 · 饿一点',
          eff: { food: -3 }, risk: 1.3, riskDays: 30,
          result: '你绕开了那片海。浮标在你身后慢慢地消失在水里。' },
        { t: '穿过网线的缝隙，去吃那里的磷虾', hint: '饱食↑↑ 危险↑↑',
          eff: { food: +20 }, kill: 0.25, cause: 'net',
          result: '你穿过网线的缝隙，吃到了很多磷虾。之后，一根细线缠住了你的尾鳍。' },
      ],
    },
    {
      id: 'calf_orca', at: 90,
      title: '虎鲸来了',
      body: '远处有一群虎鲸，它们在水面上溅起一片水花。母鲸侧过身，把你护在中间。但它的位置在外侧，如果虎鲸冲过来，最先碰到的会是它。',
      options: [
        { t: '紧贴母鲸，躲在它的身后', hint: '安全↑ 食物↓', eff: { safety: +12, food: -5 }, risk: 1.1, riskDays: 10,
          result: '你紧贴母鲸，躲在它的阴影里。虎鲸绕了几圈，最后转向了别处。' },
        { t: '离开母亲，往深处沉', hint: '危险↑↑', eff: { safety: -5 }, kill: 0.3, cause: 'orca',
          result: '你沉下去。虎鲸转过身，你从它们的缝隙里游了出来，身上留下几道牙印。' },
      ],
    },
    {
      id: 'krill_south', at: 20000, stage: 'adult',
      title: '磷虾往南退',
      body: '这些年海水变暖，磷虾的分布在缩小，往更南的冷水里退。你以前吃的那片海，现在磷虾越来越少。你要往更南的冷水去找，或者留在老海区，靠少量磷虾撑着。',
      fact: '南大洋的磷虾数量在 20 世纪后半叶明显下降（Atkinson 等 2004，Nature）',
      options: [
        { t: '往更南的冷水去找磷虾', hint: '食物↑ 风险↑', eff: { food: +15 }, risk: 1.3, riskDays: 180,
          result: '你向南游去。路上要穿过几条航线，船的声音此起彼伏，但你找到了新的磷虾群。' },
        { t: '留在老海区，少吃一些', hint: '饱食↓ 稳妥', eff: { food: -10, health: +3 },
          result: '你留在原来的海区，磷虾越来越少。你的脂肪层一点点变薄。' },
      ],
    },
    {
      id: 'last_dive', at: 28000, stage: 'old',
      title: '最后的深潜',
      body: '你的换气间隔越来越长。前方是一片很深的冷水，磷虾可能就在那里。你可以再潜一次，也可以停在表层，等身体慢慢变轻。',
      options: [
        { t: '最后一次深潜找磷虾', hint: '饱食↑ 体力↓↓', eff: { food: +15, health: -6 }, kill: 0.15, cause: 'old',
          result: '你潜到很深的水里，找到了一群磷虾，吃了一顿。上浮的路有点长，但你最终浮上了表层，喘了几口气。' },
        { t: '留在表层，慢慢呼吸', hint: '安全 · 不再进食', eff: { food: -10, health: +2 },
          result: '你停在表层，一次又一次地换气。周围的海鸟落在水面上，你没有动。' },
      ],
    },
    {
      id: 'pygmy_lane', at: 6000, need: 'pygmy',
      title: '一条繁忙的航线',
      body: '你们的海域被一条油轮航线切成了两段。货船的灯在夜里一排排地亮着，它们的引擎声在水下传得很远。你要决定什么时候穿过去。',
      options: [
        { t: '趁夜里穿过航线', hint: '食物不变 · 撞船风险',
          kill: 0.08, cause: 'ship', eff: { food: +5 },
          result: '你们在夜里穿过了航线。一艘油轮的螺旋桨在远处搅动着水，声音很大，但没有碰到你们。' },
        { t: '绕远路，去北边的海湾', hint: '安全↑ · 磷虾少',
          eff: { food: -8, safety: +5 }, risk: 0.9, riskDays: 365,
          result: '你绕了很远的路。北边的海湾很安静，但磷虾比你记忆里少了很多。' },
      ],
    },
    {
      id: 'krill_poor_year', at: 12000, need: 'krill_poor',
      title: '磷虾不够的一年',
      body: '那一年夏天，磷虾群的位置比往年浅，离你的海域很远。你可以跟着它们走，也可以留在老海域，靠身上的脂肪撑过去。',
      options: [
        { t: '跟着磷虾群去更远的海区', hint: '食物↑ · 路上消耗大',
          eff: { food: +15, health: -5 }, risk: 1.2, riskDays: 180,
          result: '你跟着磷虾群游了两个月。路很长，但你吃到了一顿像样的饭。' },
        { t: '留在老海域，靠脂肪撑着', hint: '体力↑ · 饱食↓',
          eff: { food: -12, health: +3 },
          result: '你留在老海域，每天只吃到很少的磷虾。你身上的脂肪一点点地变薄。' },
      ],
    },
  ],

  idle: [
    '你在海里慢慢地游，尾鳍一上一下地划动。',
    '远处有另一头鲸的呼吸声，它在水面上喷出一道水柱。',
    '海水很深，光线在身下变成了蓝色。',
    '你在深水里停下来，听到远处的船在震动海水。',
    '你的皮肤上有些细小的划痕，是海里的磨蹭留下的。',
    '潜水的时候，你的心跳会变得很慢。',
    '一群海鸟在远处的水面上盘旋，很快就散开了。',
    '身边的水流很稳，你随着它慢慢地移动。',
  ],

  epitaph: '你是地球上已知最大的动物。你一生大部分时间都在吃磷虾，而二十世纪的大规模捕鲸，让蓝鲸的数量降到了很低的水平。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'mite',
  name: '甲螨',
  en: 'Oribatid mite',
  sci: '甲螨亚目（Oribatida，土壤甲螨）',
  emoji: '🕷',
  scene: 'soil',
  kind: 'wild',
  tagline: '森林落叶层里数量最多的节肢动物之一，一平方米常有几万只',

  birth: {
    rolls: [
      { label: '出生地', options: [
        ['一层厚厚的落叶下面', 4, { food: +5 }],
        ['苔藓垫的根部', 3, {}],
        ['一棵老橡树周围的腐殖质', 2, { food: +10 }],
        ['草地上干燥的表层土', 1, { food: -5, risk: 1.3 }],
      ]},
      { label: '出生季节', options: [
        ['初春，雪刚化开的时候', 3, { health: +5 }],
        ['深秋，落叶刚落下的时候', 2, { food: +10 }],
        ['盛夏，地面已经干透的时候', 2, { health: -5, risk: 1.2 }],
      ]},
      { label: '落叶层', options: [
        ['一块被白腐菌分解得很软的木头', 3, { food: +15, set: 'rotwood' }],
        ['一层针叶林的松针，堆得很厚', 3, { food: -5, set: 'needles' }],
        ['一片苔藓的根下，又湿又暗', 2, { health: +5, set: 'moss' }],
        ['一片被人踩过的草坪下面的枯叶', 1, { risk: 1.3, set: 'lawn' }],
      ]},
    ],
    siblings: 12,
    siblingsLabel: '同一批产下的卵',
    intro: '你是一枚卵，还没有孵化，外壳很薄。你在{出生地}，时间是{出生季节}。和你同一批产下的卵有 {siblings} 枚，其中大多数活不到成虫。',
  },

  stages: [
    { id: 'egg',   name: '卵',              from: 0,   unit: 'week' },
    { id: 'larva', name: '幼虫（六足）',     from: 21,  unit: 'week' },
    { id: 'proto', name: '第一若螨（八足）', from: 49,  unit: 'week' },
    { id: 'deuto', name: '第二若螨',         from: 98,  unit: 'week' },
    { id: 'adult', name: '成虫',            from: 150, unit: 'week' },
    { id: 'old',   name: '老年',            from: 420, unit: 'week' },
  ],
  maturity: 150,
  maxAge: 600,

  survival: [[0,1],[7,0.8],[21,0.5],[49,0.3],[98,0.2],[150,0.12],[250,0.06],[350,0.025],[450,0.008],[550,0.002],[600,0.001]],
  survivalNote: '甲螨的野外存活率很少被直接测量；此曲线按土壤捕食、真菌感染与干旱压力粗估，寿命按一到两年的量级估计',

  init: { health: 70, food: 50, safety: 50 },
  foodDrain: 2,

  causes: [
    { id: 'gamasid', escape: true, w: 4, stages: ['larva','proto','deuto','adult','old'], short: '被革螨捕食',
      text: '一只革螨用螯肢抓住了你，又用步足把你按在地面上。它吸干了你的体液，留下一层空壳。' },
    { id: 'beetle', escape: true, w: 3, stages: ['deuto','adult','old'], short: '被步甲吃掉',
      text: '一只步甲的大颚夹住了你。它跑得很快，你来不及缩进外壳。' },
    { id: 'fungus', escape: false, w: 2, stages: ['larva','proto','deuto','adult','old'], short: '被虫生真菌感染',
      text: '一根菌丝穿过了你的表皮。它在你体内慢慢地长，直到整个身体都变成了白色的菌丝。' },
    { id: 'egg_eaten', escape: false, w: 3, stages: ['egg'], short: '卵被蚂蚁搬走',
      text: '一只蚂蚁把你的卵当成了食物，拖进了它的巢穴。' },
    { id: 'dry', escape: false, w: 3, stages: ['larva','proto','deuto','adult','old'], short: '土壤干透脱水',
      text: '连续几周没有下雨，落叶碎成了粉。你的体重一周比一周轻，最后停了下来。' },
    { id: 'starved', escape: false, w: 3, stages: ['adult','old'], short: '饿死',
      text: '落叶上的真菌被别的动物吃光了。你身体里的储备用完了，你不再动了。' },
    { id: 'flood', escape: false, w: 1, stages: ['larva','proto','deuto','adult','old'], short: '落叶层被水淹没',
      text: '一场暴雨把落叶层灌满了水。你的气门被水封住，你在水下慢慢停止了呼吸。' },
    { id: 'old', escape: false, w: 0, short: '衰老',
      text: '你的足节越来越硬。最后一次爬动之后，你停在了那片落叶上。' },
  ],

  events: [
    { stages: ['egg'], w: 3, text: '卵壳很薄，里面的细胞分裂得很慢。你在等一个湿度合适的季节。' },
    { stages: ['egg'], w: 1, text: '一根真菌菌丝从卵旁边穿过。你的卵壳没有被碰坏。' },
    { stages: ['larva'], w: 4, text: '你爬到一小片霉菌上，用口器刮取菌丝。你只有六条腿，移动得很慢。', eff: { food: [4, 8] } },
    { stages: ['larva'], w: 2, text: '你的表皮还很软。一粒沙子压在你身上，你停了一会儿才动。', eff: { safety: -5 } },
    { stages: ['larva'], w: 1, once: true, text: '你第一次蜕皮。旧的外骨骼留在落叶之间，你长出了第四对足。', eff: { health: +5 } },
    { stages: ['proto'], w: 3, text: '你在一片枯叶的背面找到了细菌和真菌，吃了很久。', eff: { food: [6, 12] },
      fact: '甲螨是森林落叶层和土壤中数量最多的节肢动物类群之一（Krantz & Walter 2009）' },
    { stages: ['proto','deuto'], w: 2, text: '雨后，落叶层里的水膜变厚。你在水膜里慢慢地爬了一段。', eff: { food: +5, safety: +5 } },
    { stages: ['proto','deuto'], w: 2, text: '一场霜冻让地表的温度降到零下。你缩进落叶深处，等它过去。', eff: { health: -5 } },
    { stages: ['deuto'], w: 2, text: '落叶分解出的糖分被真菌拿走了一部分，你只能吃剩下的。', eff: { food: -5 } },
    { stages: ['deuto'], w: 1, text: '一只革螨从你身边经过，它的步足很长。它停了一下，又走开了。', eff: { safety: -10 } },
    { stages: ['adult'], w: 3, text: '你啃食一片腐烂的落叶。叶子的纤维正在被真菌分解，你吃的是分解之后的部分。', eff: { food: [8, 14] } },
    { stages: ['adult'], w: 2, text: '一层苔藓盖住了你所在的土。你在潮湿的根须之间慢慢走。', eff: { health: +3, safety: +5 } },
    { stages: ['adult'], w: 1, once: true, text: '你第一次产卵。你把卵产在落叶底下，一共 {n} 枚。', eff: { offspring: [4, 10] },
      fact: '许多甲螨种类是孤雌生殖的，雌螨不经交配也能产下可以发育的卵（Krantz & Walter 2009）' },
    { stages: ['adult'], w: 3, text: '你又产下了一批卵，只有几枚。你的身体轻了一些。', eff: { offspring: [3, 8], food: -5 } },
    { stages: ['adult'], w: 1, text: '一只步甲在土面上奔跑，震动传到了你的腿上。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 1, text: '一团白色的菌丝从枯叶下面长了出来。你靠过去，咬下一小口。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 1, text: '一场长时间的干旱之后，你的外壳变得更硬。你减少了活动。', eff: { health: -3 } },
    { stages: ['old'], w: 3, text: '你的足节变得僵硬，爬行的距离越来越短。', eff: { health: -5 } },
    { stages: ['old'], w: 1, text: '你停在一个老落叶堆上很久，周围已经没有新的菌丝。', eff: { food: -8 } },
    { stages: ['larva','proto','deuto'], w: 1, text: '你把足收到腹面下，雨水从表层流过。你安静地等着。' },
    { act: 'forage', stages: ['larva','proto','deuto'], w: 3, text: '你找到一片被霉菌覆盖的碎叶，用口器一点一点地刮下表面。', eff: { food: [5, 10] } },
    { act: 'forage', stages: ['adult','old'], w: 2, text: '你在一块湿润的苔藓根上吃了很久。雨水把细菌和真菌冲到你面前。', eff: { food: [10, 16], health: [1, 3] } },
    { act: 'hide', stages: ['larva','proto','deuto','adult','old'], w: 2, text: '你缩进落叶的深层，身体贴着湿润的碎屑。外面的脚步声传过来，又过去了。', eff: { safety: [8, 12], food: -3 } },
    { act: 'hide', stages: ['adult','old'], w: 1, text: '你挤进一道细缝，把足收到腹面下。时间过得很慢，但这里很安全。', eff: { safety: [6, 9], health: [1, 3] } },
    { act: 'rest', stages: ['proto','deuto','adult','old'], w: 2, text: '你停在一片干燥的叶片上，代谢慢下来，体重也轻了一点。', eff: { health: [3, 6], food: -3 } },
    { act: 'rest', stages: ['adult','old'], w: 1, text: '你在落叶的阴影里停了很久，身体冷下来，又慢慢暖了回去。', eff: { health: [2, 4] } },
    { act: 'explore', stages: ['deuto','adult','old'], w: 2, text: '你爬过一段裸露的土面，又钻回了另一堆落叶。路很长，身体的水分一点点少下去。', eff: { food: [6, 12], safety: -8 } },
    { act: 'explore', stages: ['adult','old'], w: 1, text: '你爬上一截倒下的木头，上面长着一大片地衣。你吃了一口，又赶紧爬了下来。', eff: { food: [10, 14], safety: -5 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你把卵产在落叶底下的潮湿处，产下了 {n} 枚。', eff: { offspring: [4, 10] } },
    { act: 'mate', stages: ['adult'], w: 1, text: '你在一块苔藓的根须之间产卵。卵很小，几乎看不见。', eff: { offspring: [3, 8] } },
    { need: 'rotwood', stages: ['larva', 'proto'], w: 3, text: '你在腐木的缝隙里啃食。真菌把木头分解成细细的粉末，你每天都吃得很饱。', eff: { food: +8 } },
    { need: 'rotwood', stages: ['adult', 'old'], w: 2, text: '木头的一边塌了，你被落下的碎屑压住了一会儿。爬出来的时候，腿上沾满了木粉。', eff: { health: -5 } },
    { need: 'needles', stages: ['proto', 'deuto'], w: 3, text: '松针又硬又窄。你只能慢慢地钻，吃到的东西很少，但也几乎没有同伴来抢。', eff: { food: -6, safety: +5 } },
    { need: 'needles', stages: ['adult', 'old'], w: 2, text: '松脂的味道很重，你身上沾了一层。连着几天，你都在用爪子梳理身体。', eff: { health: -3, safety: +4 } },
    { need: 'moss', stages: ['larva', 'proto'], w: 2, text: '苔藓下面又湿又暗。你几乎不动，就能吃到从苔藓上掉下来的菌丝。', eff: { health: +5, food: +3 } },
    { need: 'moss', stages: ['deuto', 'adult'], w: 2, text: '一只跳虫从苔藓上踩过，留下一串湿脚印。你躲进了更深的一层。', eff: { safety: +6 } },
    { need: 'lawn', stages: ['larva', 'proto', 'deuto'], w: 2, text: '有人的脚步落在上面，整片落叶都震了一下。你被压在碎叶下面，爬了很久才出来。', eff: { safety: -10, health: -4 } },
    { need: 'lawn', stages: ['adult', 'old'], w: 1, text: '草坪浇过一次水，你所在的落叶层被冲得很湿，但也散开了。', eff: { food: -5 } },
    { need: 'bold', stages: ['adult', 'old'], w: 2, act: 'explore', text: '你爬上一截湿漉漉的根，走进一层从没去过的落叶。那里很冷，也没有别的螨。', eff: { food: +12, safety: -6 } },
    { need: 'cautious', stages: ['larva', 'proto', 'deuto'], w: 2, text: '你在一片干枯的叶子下停住，等外面的蚂蚁走过去。它们没有发现你。', eff: { safety: +6 } },
    { need: 'runt', stages: ['proto', 'deuto'], w: 2, text: '你比同龄的若螨小一圈。它们先抢到了新的真菌菌落，你只能从缝隙里挤过去，拿到一点碎屑。', eff: { food: -6 } },
  ],

  opening: {
    title: '母亲在落叶层里选产卵的地方',
    body: '你还是一枚卵，外壳很薄。母亲正在落叶层里找地方。表层的落叶最肥，也最先干透；苔藓根下面又湿又暗，但几乎没有食物。',
    options: [
      { t: '产在苔藓根下面的湿处', hint: '湿度稳 · 食物少', eff: { food: -5, safety: +5 }, risk: 0.8, riskDays: 21,
        result: '你被产在苔藓的根须之间。这里一直潮湿，孵化后你要慢慢地去找吃的。' },
      { t: '产在最肥的表层落叶', hint: '食物↑ 干燥风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 21,
        result: '你被产在一层正在分解的叶子上。食物很多，但之后的晴天，它很快就干透了。' },
    ],
  },
  actions: {
    forage:  { name: '啃食落叶上的真菌', desc: '用口器刮下落叶表面的菌丝和细菌，一口一口地吃。', text: ['你在一片枯叶的背面慢慢爬着，口器不停地刮。', '霉斑的边缘有一层细细的糖分，你吃得很慢。', '落叶分解之后留下的养分，你只能吃剩下的那一部分。'] },
    hide:    { name: '缩进落叶深处', desc: '钻进落叶层下面潮湿的碎屑之间，等外面的动静过去。', text: ['你缩进落叶的深处，身体贴着湿润的碎屑。', '外面的脚步声一阵阵传过，你没有动。', '这里的湿度稳定，天气变化传不进来。'] },
    rest:    { name: '停在原地', desc: '停下来，把代谢降到最低，等雨水和食物。', text: ['你停在一片干燥的叶片上，几乎不动。', '代谢慢下来，体重也轻了一点。', '你在落叶的阴影里待着，什么也没有做。'] },
    explore: { name: '爬向新的落叶堆', desc: '离开熟悉的落叶，去找新的菌丝和更湿的地方。', stages: ['deuto','adult','old'], text: ['你沿着枯叶的边缘爬了很远，经过一段裸露的土面。', '你爬过一截倒下的木头，上面的地衣很干。', '你找到另一堆落叶，那里的湿气让你慢了下来。'] },
    mate:    { name: '产卵', desc: '许多甲螨不经交配也能产出能发育的卵，你把卵藏进落叶底下。', stages: ['adult'], done: '你把卵藏在落叶底下，产下了 {n} 枚。' },
  },
  brood: [3, 8],
  decisions: [
    {
      id: 'drought', at: 120,
      title: '土面开始干裂',
      body: '连续三周没有下雨。落叶变得脆硬，表层的水膜断成一截一截。你下面有一层湿润的苔藓根，再往下还有湿的腐殖质。',
      options: [
        { t: '钻进苔藓下的湿根区', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -10 }, risk: 0.6, riskDays: 21,
          result: '你慢慢挤进湿润的根须之间，周围的空气不再那么干燥。你在那里待了三周。' },
        { t: '留在枯叶下，继续吃', hint: '食物↑ 脱水风险↑',
          eff: { food: +10, health: -5 }, risk: 1.5, riskDays: 14,
          result: '枯叶底下的真菌还在，你继续啃。外面的空气一天比一天干。' },
      ],
    },
    {
      id: 'fungus_patch', at: 180,
      title: '一片新长出的菌丝',
      body: '落叶下面，一层白色的菌丝刚刚铺开。菌丝很嫩，带着一层糖分。旁边的落叶上，已经有几只同类在那里聚集。',
      options: [
        { t: '大口吃下去', hint: '食物↑↑ 感染风险↑',
          eff: { food: +30 }, risk: 1.8, riskDays: 14,
          result: '你吃饱了，身体微微胀起来。之后两周，你的动作一直很迟缓。' },
        { t: '只啃边缘', hint: '安全',
          eff: { food: +12 }, result: '你只碰了菌丝的边缘，然后退回枯叶的缝隙里。' },
      ],
    },
    {
      id: 'egg_batch', at: 210, when: { food: '>30' },
      title: '第二批卵',
      body: '你的身体里还有成熟的卵。产下它们要花掉你的体力；留着，你可能会活得更久一些。',
      options: [
        { t: '产下第二批卵', hint: '后代↑ 体力↓',
          eff: { offspring: [4, 10], food: -15, health: -10 }, risk: 1.3, riskDays: 30,
          result: '你把卵产在落叶底下。产完之后，你的动作明显慢了下来。' },
        { t: '保留体力', hint: '寿命↑ 后代↓',
          eff: { health: +8 }, risk: 0.8, riskDays: 60,
          result: '你没有产卵。能量留在体内，你继续慢慢地爬。' },
      ],
    },
    {
      id: 'beetle', at: 260,
      title: '步甲来了',
      body: '一只步甲在落叶上奔跑，触角在前面探来探去。你可以不动，也可以爬向落叶的边缘。',
      options: [
        { t: '缩进外壳，不动', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -5 }, risk: 0.7, riskDays: 7,
          result: '步甲在你旁边停了一下，又走开了。' },
        { t: '爬向落叶边缘', hint: '离开落叶 · 风险↑↑',
          kill: 0.25, cause: 'beetle', eff: { food: +5 },
          result: '你爬出了落叶。前面是一小块空地，你没有地方躲。' },
      ],
    },
    {
      id: 'frost', at: 340,
      title: '第一场霜冻',
      body: '夜里地表结了一层薄冰。土壤温度降到零下，你体内的液体开始变得粘稠。',
      options: [
        { t: '下到更深的腐殖质里', hint: '温度稳定 · 食物少',
          eff: { health: +5, food: -10 }, risk: 0.8, riskDays: 60,
          result: '你向下爬。那里比地表暖一点，也更暗。' },
        { t: '留在地表，抓紧吃', hint: '食物↑ 风险↑',
          eff: { food: +15, health: -10 }, risk: 1.6, riskDays: 30,
          result: '你趁霜冻前吃了一顿，之后身体开始僵硬。' },
      ],
    },
    {
      id: 'proto_mold', at: 70,
      title: '一片嫩白的菌丝',
      body: '落叶的背面刚长出一层嫩白的菌丝，带着一点糖分。旁边的落叶上，已经有几只同类在那里聚集。',
      options: [
        { t: '大口吃下去', hint: '食物↑↑ 感染风险↑',
          eff: { food: +25 }, kill: 0.05, cause: 'fungus', risk: 1.6, riskDays: 10,
          result: '你吃饱了，身体微微胀起来。之后几周，你的动作一直很迟缓。' },
        { t: '只啃边缘', hint: '稳妥',
          eff: { food: +10 },
          result: '你只碰了菌丝的边缘，然后退回枯叶的缝隙里。' },
      ],
    },
    {
      id: 'storm_flood', at: 390,
      title: '一场暴雨',
      body: '夜里下了一场大雨。落叶层里的水越积越高，你的身体已经感到湿气的压力。你可以爬上一小撮苔藓，也可以留在原来的枯叶下面。',
      options: [
        { t: '爬上苔藓的顶端', hint: '安全↑ 食物↓',
          eff: { safety: +12, food: -5 }, risk: 0.8, riskDays: 5,
          result: '你爬到苔藓的顶端，水从你身下流过。雨停之后，你才慢慢下来。' },
        { t: '留在枯叶下面吃', hint: '饱食↑ 被淹风险↑',
          eff: { food: +15 }, kill: 0.3, cause: 'flood',
          result: '你还在吃。水涨到气门的时候，你才发现已经来不及了。' },
      ],
    },
    {
      id: 'hard_shell', at: 520,
      title: '足节越来越硬',
      body: '你的足节已经硬得不听使唤，爬一段就要停下来歇很久。落叶堆还在，但菌丝已经很少了。',
      options: [
        { t: '少动，保存体力', hint: '寿命↑ 食物↓',
          eff: { health: +5, food: -8 }, risk: 0.8, riskDays: 40,
          result: '你停在一片老叶的阴影里，动作越来越慢。' },
        { t: '继续爬去找最后的菌丝', hint: '食物↑ 风险↑',
          eff: { food: +15, health: -5 }, risk: 1.5, riskDays: 20,
          result: '你爬了很远，找到一小块菌丝。回来的时候，你的足几乎抬不起来。' },
      ],
    },
    {
      id: 'rotwood_edge', at: 55, need: 'rotwood',
      title: '木头正在散架',
      body: '你所在的那块腐木已经松了，中间的空隙越来越大。里面的菌丝还很多，但外面的落叶层也在慢慢变湿。',
      options: [
        { t: '钻进木芯，吃掉剩下的菌丝', hint: '饱食↑↑ 被夹住的风险↑', eff: { food: +15 }, risk: 1.3, riskDays: 10,
          result: '你在腐木内部穿行，吃到的东西很多，但木头的空隙也越来越大，你随时可能被压住。' },
        { t: '离开木头，去别处', hint: '安全↑ 食物↓', eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你爬出木头，沿着一层落叶慢慢走向另一边。' },
      ],
    },
    {
      id: 'lawn_path', at: 40, need: 'lawn',
      title: '草坪上的脚印',
      body: '草坪上留下了一排脚印，地面的震动一阵一阵传下来。你所在的落叶层很薄，离边缘很近。',
      options: [
        { t: '躲到更深的落叶下', hint: '安全↑ 食物↓', eff: { safety: +8, food: -4 }, risk: 0.8, riskDays: 6,
          result: '你钻进了厚一些的叶层，外面的脚步声慢慢远了。' },
        { t: '趁夜里爬到边缘吃', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.5, riskDays: 3,
          result: '你在夜里爬到边缘吃了一顿。第二天，草坪被人重新踩了一遍。' },
      ],
    },
    {
      id: 'curious_hypha', at: 88, need: 'curious',
      title: '缠绕的菌丝',
      body: '一截菌丝缠在一根断枝上，颜色很亮，你能感觉到它在慢慢地生长。它靠近的地方，有一小团你没吃过的东西。',
      options: [
        { t: '沿着菌丝去看', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.2, riskDays: 3,
          result: '你沿着菌丝爬过去，吃到了一团新的孢子。' },
        { t: '沿着另一条路走', hint: '稳妥', eff: { safety: +3 },
          result: '你绕开了那截菌丝。' },
      ],
    },
  ],

  idle: [
    '落叶的缝隙里很暗，你待在原来的地方，没有动。',
    '空气很潮，霉菌的气味慢慢飘过来。',
    '一根细根从旁边的土里穿过，什么也没有碰到你。',
    '落叶底下很暗，只有温度和湿度的变化告诉你外面发生了什么。',
    '远处的土壤里，一条蚯蚓正在翻动。',
    '雨水慢慢渗下来，落叶之间的水膜变厚又变薄。',
    '外面的落叶一片接一片地枯黄，碎成细粉。',
    '这一小块地方很安静，只有分解者在慢慢工作。',
  ],

  epitaph: '你的外壳会留在落叶之间，慢慢变成土壤的一部分。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'springtail',
  name: '跳虫',
  en: 'Springtail',
  sci: '弹尾目（Collembola），以 Folsomia candida 为例',
  emoji: '🦗',
  scene: 'soil',
  kind: 'wild',
  tagline: '地表落叶层里，它们常常是数量最多的六足动物之一',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['林地落叶层下的腐殖质', 4, { food: +10 }],
        ['一块湿润的苔藓底下', 3, { health: +5 }],
        ['农田的表层土', 2, { food: +5, risk: 1.1 }],
        ['沙质的干燥表土', 1, { health: -10, risk: 1.3 }],
      ]},
      { label: '出生的季节', options: [
        ['春天融雪后，土壤还潮', 3, { food: +5, set: 'spring_born' }],
        ['夏末的一场大雨之后', 2, { food: +10, set: 'wet_born' }],
        ['秋天落叶最多的时候', 3, { food: +5, risk: 1.1, set: 'autumn_born' }],
        ['冬天一个冻不透的午后', 1, { health: -10, risk: 1.2, set: 'winter_born' }],
      ]},
      { label: '落叶层的状况', options: [
        ['一层厚厚的、正在腐烂的落叶', 3, { food: +10, set: 'litter_thick' }],
        ['一片刚被雨水冲刷过的草根', 2, { health: -5, set: 'root_wash' }],
        ['一截被蚯蚓翻过的黑土', 2, { food: +5, set: 'worm_soil' }],
      ]},
    ],
    siblings: 20,
    siblingsLabel: '同一窝产下的卵',
    intro: '你在{出生地}，是一枚乳白色的卵，还没有孵化。你是{sex}。和你来自同一窝的卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',   name: '卵',     from: 0,   unit: 'day' },
    { id: 'juv',   name: '幼体',   from: 8,   unit: 'day' },
    { id: 'sub',   name: '亚成体', from: 35,  unit: 'day' },
    { id: 'adult', name: '成虫',   from: 70,  unit: 'day' },
    { id: 'old',   name: '老年',   from: 180, unit: 'week' },
  ],
  maturity: 60,
  maxAge: 420,

  survival: [[0,1],[1,0.7],[8,0.45],[20,0.25],[35,0.14],[70,0.06],[120,0.03],[180,0.012],[240,0.004],[300,0.001],[420,0]],
  survivalNote: '实验室里标准条件下的 Folsomia candida 可活百余天；野外存活率低得多，此曲线按土壤捕食与干旱压力粗估',

  init: { health: 70, food: 60, safety: 50 },
  foodDrain: 2,

  causes: [
    { id: 'egg_predator', escape: false, w: 5, stages: ['egg'], short: '卵被捕食性螨吃掉',
      text: '一只捕食性螨从卵壳的缝隙里钻了进去。你还没有孵化，就这样没了。' },
    { id: 'mite', escape: true, w: 4, stages: ['juv','sub','adult','old'], short: '被捕食螨刺穿',
      text: '一只捕食性螨抓住了你的足。它的螯肢刺进体壁，体液一点点被抽走。' },
    { id: 'ant', escape: true, w: 3, stages: ['sub','adult','old'], short: '被蚂蚁搬走',
      text: '一只蚂蚁用上颚夹住了你，把你拖回了它的巢穴，你的身体再也没有出来。' },
    { id: 'beetle', escape: true, w: 2, stages: ['juv','sub','adult'], short: '被步甲追上吃掉',
      text: '一只步甲从土面上冲下来，一口就咬断了你。你的弹尾还来不及展开。' },
    { id: 'spider_centipede', escape: true, w: 2, stages: ['sub','adult','old'], short: '被蜘蛛或蜈蚣捕获',
      text: '一条蜈蚣的步足从落叶上方压下来，你还没有跳起，就被它的颚肢抓住了。' },
    { id: 'fungus', escape: false, w: 1, stages: ['sub','adult','old'], short: '虫生真菌感染',
      text: '一种真菌的孢子黏在你的体表上，在湿润的几天里萌发，菌丝慢慢从体内长了出来。' },
    { id: 'dry', escape: false, w: 3, stages: ['juv','sub','adult','old'], short: '土壤干透脱水',
      text: '连续几天没有下雨，表层土干透了。你的体表水分不断渗出，你没能爬到湿润的孔隙里。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的蜕皮越来越慢，最后一次蜕皮之后，你不再动了。土壤慢慢地把你分解了。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵壳里的胚胎慢慢长大。卵面从土壤里吸收水分，一天天变得饱满。' },
    { stages: ['juv'], w: 1, once: true, text: '你刚从卵里出来。身体还很白，腹部末端的弹尾折在腹面，还没有展开。' },
    { stages: ['juv'], w: 3, text: '你吃到一小片菌丝，用口器一点点地刮下来。', eff: { food: [8, 15] } },
    { stages: ['juv'], w: 2, text: '你蜕了一次皮。旧的表皮留在身后，像一件空衣服。', eff: { health: +5 },
      fact: '跳虫一生都会蜕皮，成虫之后仍然蜕皮（Hopkin 1997，Biology of the Springtails）' },
    { stages: ['juv'], w: 2, text: '你的弹尾还没有长好，跳起来只能弹出一小段，落在地上蜷成一团。', eff: { safety: -5 } },
    { stages: ['juv'], w: 2, text: '你在一片干燥的沙粒之间迷了路。表皮的水分一点点被吸走，你爬到一块湿石头底下才停下。', eff: { health: -8 } },
    { stages: ['juv','sub','adult','old'], w: 2, text: '一只蚂蚁从土缝边经过，触角扫过你的背。它没有停下。', eff: { safety: -5 } },
    { stages: ['sub','adult'], w: 3, text: '你在腐殖质里找到一层细细的霉斑，吃得慢而满足。', eff: { food: [10, 18] } },
    { stages: ['sub','adult'], w: 2, text: '一片潮湿的死叶底下长满了细菌和真菌，气味很重。你在那里待了几天。', eff: { food: [12, 20] } },
    { stages: ['sub'], w: 2, text: '你蜷在土缝里，弹尾叠在身下，几乎不动。外面的震动一阵阵传过来。', eff: { safety: +3 } },
    { stages: ['adult'], w: 1, once: true, text: '你开始产卵。卵被你放在潮湿的土粒之间，每次几枚到几十枚。', eff: { offspring: [10, 30] },
      fact: 'Folsomia candida 是土壤生态学和毒理学中常用的标准实验跳虫（ISO 11267；OECD 232）' },
    { stages: ['adult'], w: 3, text: '你又产下一窝卵，共 {n} 枚。', eff: { offspring: [8, 20], food: -5 } },
    { stages: ['adult'], w: 2, text: '地表变干，你钻进一片落叶底下的湿空气里，待到傍晚才出来。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, text: '一场连续几天的晴天，表层土几乎干透。你的体表失水，动作变得迟缓。', eff: { health: -8, food: -5 } },
    { stages: ['adult','old'], w: 2, text: '一只捕食性螨在土缝里绕着你走了一圈。它没有出手。', eff: { safety: -5 } },
    { stages: ['adult','old'], w: 2, text: '一场大雨把土缝灌满了水。你和几只同伴挤在一小块湿土块上，一起等水退去。', eff: { health: +5, safety: +5 } },
    { stages: ['adult','old'], w: 1, once: true, text: '你的腹部出现一道不规则的裂口。你慢慢把身体从旧皮里抽了出来，这次蜕皮比平常慢得多。', eff: { health: -5 } },
    { stages: ['adult','old'], w: 1, text: '一小群同伴围着同一块霉斑聚在一起。你们没有争抢，只是一起吃。', eff: { food: [5, 10] } },
    { stages: ['old'], w: 3, text: '你的动作慢了下来。每次蜕皮之后，你要花更长时间才能恢复。', eff: { health: -5 } },
    { stages: ['old'], w: 2, text: '你的体色暗淡了，身上多了几道皱纹，弹尾收起的速度也慢了。', eff: { health: -4 } },
    { act: 'forage', stages: ['juv','sub'], w: 3, text: '你在一块湿霉斑上来回刮着，口器里全是细小的菌丝。', eff: { food: [8, 14] } },
    { act: 'forage', stages: ['adult','old'], w: 2, text: '你啃到一片烂叶的背面。细菌已经把叶子里的糖分分解得差不多了，你只能吃剩下的。', eff: { food: [10, 16] } },
    { act: 'hide', stages: ['juv','sub','adult','old'], w: 2, text: '你挤进两粒土之间的缝隙，弹尾叠在身下。外面的震动一阵阵传过来，你什么也没做。', eff: { safety: [6, 10], food: -3 } },
    { act: 'hide', stages: ['adult','old'], w: 1, text: '你钻进一片落叶底下，那里的湿度很高，你在那里待了几天。', eff: { safety: [4, 7], health: [2, 4] } },
    { act: 'rest', stages: ['sub','adult','old'], w: 2, text: '你把弹尾收在腹面，躺在一层湿土上，身体的水分慢慢回到体壁。', eff: { health: [3, 6] } },
    { act: 'rest', stages: ['juv','sub'], w: 1, text: '你蜷在土粒之间，动作慢得几乎看不见。', eff: { health: [2, 3], food: -2 } },
    { act: 'explore', stages: ['sub','adult','old'], w: 2, text: '你离开熟悉的土缝，爬过一片粗糙的沙地，又找到了另一块湿土。', eff: { food: [6, 12], safety: -8 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '你爬上一截枯草的茎。视野一下子开阔了，你看见远处有一只蚂蚁在巡逻。', eff: { safety: -10 } },
    { act: 'mate', stages: ['adult'], need: 'female', w: 2, text: '你把一窝卵埋进潮湿的土粒之间，共 {n} 枚。', eff: { offspring: [8, 20] } },
    { act: 'mate', stages: ['adult'], need: 'female', w: 1, text: '你挑了一块有雨水的土，把卵放进水膜里。', eff: { offspring: [5, 12] } },
    { need: 'spring_born', stages: ['juv'], w: 3, text: '融雪的水渗进土里，你在湿润的土粒之间很快长大。', eff: { health: +5 } },
    { need: 'spring_born', stages: ['sub', 'adult'], w: 2, text: '春天的雨一场接一场。你在土缝里找到干净的菌丝，比同龄的个体更早吃饱。', eff: { food: +8 } },
    { need: 'wet_born', stages: ['juv'], w: 3, text: '暴雨把地表的落叶冲散了。你从一堆湿透的碎叶里被冲到另一个角落。', eff: { safety: -5, food: +5 } },
    { need: 'wet_born', stages: ['sub', 'adult'], w: 2, text: '雨后的土里满是真菌孢子。你吃得很快，身体很快就重了起来。', eff: { food: +10 } },
    { need: 'autumn_born', stages: ['juv', 'sub'], w: 3, text: '落叶一片片压在头上。你在它们下面打洞，一边吃，一边被压得直不起身。', eff: { food: +8, safety: -3 } },
    { need: 'autumn_born', stages: ['adult'], w: 2, text: '秋天的落叶层很厚，你在里面找到一个能过冬的空腔。', eff: { health: +5, safety: +5 } },
    { need: 'winter_born', stages: ['juv'], w: 3, text: '土冻住了，你几乎不能动。身体里的脂肪一点点地被消耗。', eff: { health: -10, food: -8 } },
    { need: 'winter_born', stages: ['sub', 'adult', 'old'], w: 2, text: '土层上的冰一直没有化。你活到了春天，却比同龄的个体小了一圈。', eff: { health: -5 } },
    { need: 'litter_thick', stages: ['juv', 'sub'], w: 3, text: '你在落叶层里爬，每一片叶子都在分解，周围全是细菌和真菌。', eff: { food: +8 } },
    { need: 'litter_thick', stages: ['adult', 'old'], w: 2, text: '你找到一片发霉的叶子。那里的霉菌比平时多，你吃了很久。', eff: { food: +6, health: -3 } },
    { need: 'root_wash', stages: ['juv'], w: 3, text: '雨把草根冲得露了出来。你沿着根的缝隙爬，身上沾满了泥。', eff: { health: -5, safety: -3 } },
    { need: 'root_wash', stages: ['sub', 'adult'], w: 2, text: '草根的汁液干了，你只能挤在一小团潮湿的地方。', eff: { food: -6 } },
    { need: 'worm_soil', stages: ['juv', 'sub'], w: 3, text: '一条蚯蚓从你旁边钻过，土被翻开，里面的真菌丝露了出来。', eff: { food: +8, safety: -5 } },
    { need: 'worm_soil', stages: ['adult', 'old'], w: 2, text: '蚯蚓的粪便是一团团松软的黑土。你在上面爬来爬去，觉得很安全。', eff: { safety: +5 } },
    { need: 'bold', stages: ['adult', 'old'], w: 2, act: 'explore', text: '你爬出湿土，沿着一根枯枝走到一片陌生的落叶上。那里没有你熟悉的气味。', eff: { food: +10, safety: -8 } },
    { need: 'cautious', stages: ['juv', 'sub'], w: 2, text: '地面传来震动。你缩成一团，直到震动消失。', eff: { safety: +5 } },
    { need: 'curious', stages: ['adult', 'old'], w: 2, text: '一片发亮的菌丝吸引你停下来看了很久。它没有危险，你却也没有吃它。', eff: { health: +3 } },
    { need: 'runt', stages: ['juv'], w: 3, text: '你比同批的跳虫小，常常被挤到土缝的最外层。你每次跳跃都只能跳一小段。', eff: { safety: -5, food: -5 } },
  ],

  opening: {
    title: '母亲在土缝里产卵',
    body: '你还是一枚乳白色的卵，埋在土粒之间。母亲要决定把你产在哪里。湿润的腐殖质深处不容易失水，但食物不多；靠近霉斑的地方食物多，真菌的孢子也多。',
    options: [
      { t: '埋在湿润的腐殖质深处', hint: '湿度稳 · 食物少', eff: { food: -5, health: +5 }, risk: 0.8, riskDays: 8,
        result: '你被埋在一层湿腐殖质里。土粒之间的水膜一直没有断，你慢慢鼓了起来。' },
      { t: '产在一块霉斑的旁边', hint: '饱食↑ 真菌风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 8,
        result: '你的卵挨着霉斑。孵化之后，你很快就能吃到东西，只是孢子也离你很近。' },
    ],
  },
  actions: {
    forage:  { name: '吃霉斑与腐殖质', desc: '在潮湿的霉斑和腐殖质上慢慢吃，口器一点一点刮下菌丝。', text: ['你在一块湿霉斑上来回刮着，口器里全是细小的菌丝。', '腐殖质的气味很重，你吃得很慢。', '一片烂叶的背面长着细菌，你在那里待了很久。'] },
    hide:    { name: '躲进土缝里', desc: '钻进两粒土之间的缝隙，弹尾收在身下，避开震动和捕食者。', text: ['你挤进两粒土之间，弹尾叠在身下。', '外面的震动一阵阵传下来，你没有动。', '这里的水膜还没有断，你的体表慢慢润了起来。'] },
    rest:    { name: '蜷着休息', desc: '收起弹尾，停下来，等身体的水分慢慢回到体壁。', text: ['你蜷在湿土上，弹尾收在腹面，一动不动。', '身体的水分慢慢回到体壁，表皮变得有光泽。', '土粒之间很暗，什么也没有发生。'] },
    explore: { name: '爬出土缝找霉斑', desc: '离开熟悉的土缝，去找新的霉斑和更湿的土。', stages: ['sub','adult','old'], text: ['你爬过一片粗糙的沙地，身上很快就干了。', '你闻到一小块霉斑的味道，朝它爬去。', '远处有一只蚂蚁在巡逻，你绕开了它。'] },
    mate:    { name: '产下一窝卵', desc: '雌性把卵埋在潮湿的土粒之间。雄性只留下精囊，由雌性自己拾起。', stages: ['adult'], need: 'female', done: '你产下了一窝卵，共 {n} 枚。' },
  },
  brood: [8, 20],
  decisions: [
    {
      id: 'jump_or_freeze', at: 35,
      title: '头顶的震动',
      body: '一只步甲从落叶上方冲过，震得土粒一起抖动。你可以立刻弹开，也可以一动不动地藏在原地。',
      fact: '跳虫的弹尾（furcula）是腹部的一对腹面附肢，弹开时可以把身体弹到身长几十倍的距离（Hopkin 1997）',
      options: [
        { t: '用弹尾弹开', hint: '安全↑ 可能落进危险',
          eff: { safety: +15, food: -5 }, kill: 0.12, cause: 'beetle',
          result: '你弹了出去，落在一片陌生的土面上。步甲的脚步声从身后远去了。' },
        { t: '装死不动', hint: '躲藏 · 饿一点',
          eff: { safety: +5, food: -8 }, risk: 0.8, riskDays: 5,
          result: '你收起弹尾，贴在土粒之间，一动不动。震动过去以后，你才慢慢爬出来。' },
      ],
    },
    {
      id: 'wet_or_dry', at: 30,
      title: '干燥的表层还是湿的深处',
      body: '表层的食物很多，但土面已经开始发白。往下走，有潮湿的孔隙，但那里的食物要少得多。',
      fact: '跳虫的体壁透水性强，容易失水，因此多数种类都依赖较湿润的微生境（Hopkin 1997）',
      options: [
        { t: '钻到湿润的深处', hint: '安全↑ 食物↓',
          eff: { food: -5, health: +5 }, risk: 0.8, riskDays: 20,
          result: '你沿着土粒之间的水膜往下爬。那里很凉，你的身体慢慢饱满了起来。' },
        { t: '留在表层觅食', hint: '饱食↑ 失水风险↑',
          eff: { food: +15, health: -5 }, risk: 1.5, riskDays: 5,
          result: '你在表层吃了很久。傍晚的风吹过，你的体表发紧，你只能继续吃。' },
      ],
    },
    {
      id: 'spermatophore', at: 75, need: 'female',
      title: '地上的一颗胶囊',
      body: '地面上有一颗小小的透明胶囊，是一只雄性刚留下的。它里面装着精子。你可以把它拾进体内，也可以绕过去。',
      fact: '跳虫的雄性不直接交配，而是把精囊（精荚）放在土面上，雌性自己把它拾起（Hopkin 1997）',
      options: [
        { t: '拾起来', hint: '后代↑ 风险稍↑',
          eff: { offspring: [15, 35] }, risk: 1.1, riskDays: 3,
          result: '你把它拾了起来。之后几天，你的卵一粒一粒地在身体里成形。' },
        { t: '绕过去', hint: '不冒险',
          eff: { safety: +3 },
          result: '你从胶囊旁边绕了过去。它留在土面上，慢慢干掉了。' },
      ],
    },
    {
      id: 'mold_patch', at: 100,
      title: '一块白色的霉斑',
      body: '落叶的背面长着一块厚厚的白色霉斑，你的口器能感觉到它的味道很浓。霉斑里有没有有害的真菌，你分辨不出来。',
      options: [
        { t: '吃下去', hint: '饱食↑↑ 真菌感染风险↑',
          eff: { food: +25 }, kill: 0.05, cause: 'fungus', risk: 1.8, riskDays: 10,
          result: '你吃得很多，肚子饱满。接下来的几天，你的体色暗了一些。' },
        { t: '绕开它', hint: '稳妥 · 饿一点',
          eff: { food: -3 },
          result: '你绕到落叶另一边，那里的细菌少，但你至少没有冒险。' },
      ],
    },
    {
      id: 'lay_or_save', at: 150, need: 'female',
      title: '产卵还是蓄力',
      body: '你的身体还能继续产卵，但食物已经不那么充足了。每一窝卵都要消耗很多东西。',
      fact: '在 OECD 232 标准土壤繁殖试验中，用跳虫后代的数量来评估土壤污染物的影响（OECD 232，2016）',
      options: [
        { t: '继续大量产卵', hint: '后代↑↑ 寿命↓',
          eff: { offspring: [20, 40], food: -15 }, risk: 1.5, riskDays: 30,
          result: '你又产下了很多卵。你的身体比以前更轻，蜕皮也变得慢了。' },
        { t: '少产一些，留着体力', hint: '稳妥',
          eff: { offspring: [5, 10], health: +5 },
          result: '你只放了几枚卵，然后把剩下的力气用在蜕皮和找食上。' },
      ],
    },
    {
      id: 'soil_crack', at: 52,
      title: '土缝里的水膜断了',
      body: '一阵风吹过，土粒之间的水膜断成了几截。前面有一小块湿润的土，但中间隔着一片干燥的沙子。',
      options: [
        { t: '穿过沙地去那块湿土', hint: '食物↑ 失水风险↑',
          eff: { food: +10 }, kill: 0.2, cause: 'dry',
          result: '你爬过了沙地，湿土的边缘凉凉的，你在那里停了很久。' },
        { t: '留在原来的土缝里等', hint: '安全 · 水膜越来越薄',
          eff: { health: -5, safety: +5 }, risk: 1.2, riskDays: 10,
          result: '你留在原地。水膜慢慢变薄，你的体表开始发干。' },
      ],
    },
    {
      id: 'old_molt', at: 220,
      title: '蜕皮越来越慢',
      body: '你的蜕皮间隔越来越长，每一次都要花很久。身体里的水分在慢慢变少，地表的霉斑也在收缩。',
      options: [
        { t: '钻进湿润的腐殖质里蜕皮', hint: '稳定 · 食物少',
          eff: { health: +5, food: -8 }, risk: 0.8, riskDays: 30,
          result: '你钻进腐殖质深处，在那里慢慢蜕下旧皮。' },
        { t: '爬到霉斑上吃', hint: '食物↑ 体力↓',
          eff: { food: +15, health: -5 }, risk: 1.5, riskDays: 20,
          result: '你在霉斑上吃了很久，蜕皮的事只能往后推。' },
      ],
    },
    {
      id: 'centipede', at: 300,
      title: '一只蜈蚣从落叶上方经过',
      body: '落叶的缝隙里传来沙沙的声音，一条蜈蚣的步足从上方压过来。你可以立刻弹开，也可以贴着土粒不动。',
      options: [
        { t: '用弹尾弹开', hint: '安全↑ 可能落进危险',
          eff: { safety: +12 }, kill: 0.15, cause: 'spider_centipede',
          result: '你弹到了几厘米外的空地上，蜈蚣的步足从你身后扫了过去。' },
        { t: '贴着土粒不动', hint: '躲藏 · 饿一点',
          eff: { safety: +5, food: -5 }, risk: 0.8, riskDays: 5,
          result: '你收起弹尾，一动不动。蜈蚣停了一下，又爬走了。' },
      ],
    },
    {
      id: 'winter_warm', at: 25, need: 'winter_born',
      title: '冻土上的一个暖点',
      body: '土层上冻，地面下有一小块暖湿的地方。你可以钻进冻土的缝隙里待着，也可以爬到浅层，去找一点还没冻住的食物。',
      options: [
        { t: '钻进冻土的缝隙', hint: '体力↑ 食物↓', eff: { health: +5, food: -5 }, risk: 0.8, riskDays: 20,
          result: '你缩在冻土的缝隙里一动不动，等土慢慢松开。' },
        { t: '爬到浅层找食物', hint: '饱食↑ 风险↑', eff: { food: +12 }, risk: 1.6, riskDays: 6,
          result: '你在浅层找到一小团真菌。外面太冷，你很快又回到了土缝里。' },
      ],
    },
    {
      id: 'worm_dig', at: 40, need: 'worm_soil',
      title: '一条蚯蚓留下的隧道',
      body: '蚯蚓在土里挖出了一条笔直的隧道。隧道里有湿气，也有一些翻松的菌丝，但它很窄，外面的震动会直接传进来。',
      options: [
        { t: '跟着隧道走', hint: '饱食↑ 安全↓', eff: { food: +10, safety: -5 }, risk: 1.2, riskDays: 4,
          result: '你沿着隧道一直爬，吃到了很多翻松的菌丝。外面的震动让你一直很紧张。' },
        { t: '留在原地不动', hint: '安全↑ 食物↓', eff: { safety: +5, food: -5 },
          result: '你没有进入隧道，守着自己那一小块黑土。' },
      ],
    },
  ],

  idle: [
    '土粒之间很暗，也很潮。',
    '落叶的缝隙里很安静，只有偶尔的震动从地表传下来。',
    '土壤里有许多细小的声音，大多是别的虫子在移动。',
    '你没有眼睛，只能靠气味和震动感知周围。',
    '表层的水分一点点蒸发，土面慢慢发白。',
    '远处传来雨水滴进落叶的声音。',
    '一股霉斑的气味慢慢飘过来，不太浓。',
    '这一小块土里，同伴们挤在一起，只隔着几粒土。',
  ],

  epitaph: '你一生蜕过很多次皮。最后一次之后，你的身体慢慢融进了土壤。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'aphid',
  name: '蚜虫（豌豆蚜）',
  en: 'Pea aphid',
  sci: 'Acyrthosiphon pisum（豌豆蚜）',
  emoji: '🌱',
  scene: 'grass',
  kind: 'wild',
  tagline: '大部分时间，蚜虫都是不经交配就能产仔的雌虫',

  birth: {
    sex: [['雌性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一株豌豆的嫩茎上', 4, { food: +10 }],
        ['一丛苜蓿的叶背', 3, {}],
        ['一片三叶草的花序附近', 2, { food: +5 }],
        ['一株有蚂蚁往来的菜豆的叶背', 2, { food: +5, safety: +5 }],
      ]},
      { label: '母体', options: [
        ['一只无翅的母蚜', 5, {}],
        ['一只从拥挤的老叶上飞来的有翅母蚜', 2, { safety: -5 }],
      ]},
      { label: '寄主植物', options: [
        ['一株长得很密的豌豆苗，叶子上挤满了同类', 3, { food: -5, safety: -5, set: 'crowded_plant' }],
        ['一株刚开花的豌豆，韧皮部的汁液很多', 3, { food: +15, set: 'flowering' }],
        ['一株有蚂蚁照看的植物', 2, { safety: +10, set: 'ant_plant' }],
        ['一株营养不足、叶子发黄的老植株', 1, { food: -10, health: -5, set: 'old_leaf' }],
      ]},
    ],
    siblings: 60,
    siblingsLabel: '同一位母亲产下的若蚜',
    intro: '你是一只刚产出的若蚜，身长约 1 毫米，淡绿色，还没有翅膀。产下你的是{母体}，你在{出生地}。你的身体里已经能看见下一代的胚胎，下一代的胚胎里又藏着再下一代。同一位母亲这一批产下的若蚜大约有 {siblings} 只。',
  },

  stages: [
    { id: 'nymph', name: '若蚜（一至三龄）', from: 0,  unit: 'day' },
    { id: 'late',  name: '四龄若蚜',        from: 4,  unit: 'day' },
    { id: 'adult', name: '成蚜',            from: 7,  unit: 'day' },
    { id: 'old',   name: '老年',            from: 21, unit: 'day' },
  ],
  maturity: 7,
  maxAge: 50,

  survival: [[0,1],[1,0.7],[4,0.55],[7,0.45],[14,0.2],[21,0.07],[28,0.02],[35,0.005],[42,0.001],[50,0]],
  survivalNote: '野外蚜虫的存活率随季节和天敌差异很大；此曲线按实验室豌豆蚜寿命（成虫约 2–4 周）和瓢虫、寄生蜂的压力粗估，属于典型的 III 型曲线',

  init: { health: 70, food: 55, safety: 45 },
  foodDrain: 3,

  causes: [
    { id: 'ladybug', escape: true, w: 5, stages: ['nymph','late','adult'], short: '被瓢虫幼虫吃掉',
      text: '一只瓢虫幼虫用它的大颚咬住了你。它没有松口，一口一口地把你吃掉。' },
    { id: 'lacewing', escape: true, w: 3, stages: ['nymph','late'], short: '被草蛉幼虫抓住',
      text: '草蛉幼虫镰刀一样的大颚合上，夹住了你。它把消化液注进你的身体，然后把你吸空。' },
    { id: 'wasp', escape: false, w: 3, stages: ['late','adult','old'], short: '体内被寄生，变成僵蚜',
      text: '寄生蜂的卵在你体内孵化。你的身体慢慢鼓胀、变硬，颜色变成发亮的铜褐色。最后蜂从你身上咬开一个圆孔，飞走了。' },
    { id: 'drought', escape: false, w: 2, short: '植株枯萎，汁液断了',
      text: '叶片干枯发黄，韧皮部里的汁液越来越少。口针插不到东西，你一直饿着，直到动不了。' },
    { id: 'cold', escape: false, w: 1, stages: ['adult','old'], short: '霜冻',
      text: '夜里的霜落在叶面上。你的身体冻住了，口针再也拔不出来。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的口针越来越慢，最后不再动了。蚜虫的一生，通常只有几周。' },
  ],

  events: [
    { stages: ['nymph','late'], w: 2, text: '你蜕了一次皮，淡绿色的身体长大了一点。', eff: { health: +5 } },
    { stages: ['nymph','late'], w: 4, text: '你把口针插进韧皮部的筛管，汁液被压进了身体。', eff: { food: [10, 18] } },
    { stages: ['nymph','late','adult'], w: 2, text: '你吸饱了，腹部排出一滴透明的蜜露。蜜露里有糖，它会粘在下面的叶片上。', eff: { food: [6, 12] } },
    { stages: ['adult'], w: 1, once: true, text: '你开始产仔。第一天，你产下了 {n} 只若蚜。', eff: { offspring: [3, 6] } },
    { stages: ['adult'], w: 3, need: '!winged', text: '你又产下 {n} 只若蚜。它们和你一样，都是雌性，都没有父亲。', eff: { offspring: [3, 5] } },
    { stages: ['adult'], w: 2, need: 'winged', text: '你的翅膀在阳光下透亮。你还在产仔，但今天只有 {n} 只。', eff: { offspring: [1, 2] } },
    { stages: ['late','adult'], w: 2, text: '一只瓢虫幼虫沿着叶脉爬过来。你停下吸食，身体贴着叶面，一动不动。', eff: { safety: -10 } },
    { stages: ['nymph','late','adult'], w: 2, text: '一只草蛉幼虫在靠近。它的大颚张开，你向叶背挪去，那对大颚在你原来的位置合上了。', eff: { safety: -12 } },
    { stages: ['nymph','late','adult'], w: 1, text: '一只食蚜蝇的幼虫在叶面上蠕动，它身体前端的口钩刺进了旁边的蚜虫。你离它远了一点。', eff: { safety: -8, health: -3 } },
    { stages: ['adult'], w: 1, text: '旁边的一只同伴被咬了，它释放出一股报警气味。你立刻松开口针，掉到了叶面下方。', eff: { safety: +10 },
      fact: '蚜虫的报警信息素 (E)-β-法尼烯由 Bowers 等人于 1972 年在 Science 上发现（Bowers et al. 1972）' },
    { stages: ['late','adult'], w: 2, need: 'ant', text: '一只蚂蚁沿着你的腿爬上来，用触角轻敲你的腹部。你的腹部排出一滴蜜露，它舔走了。', eff: { food: +10 },
      fact: '蚂蚁用触角敲击蚜虫的腹部，诱导它排出蜜露（Verheggen 等 2012）' },
    { stages: ['late','adult'], w: 2, text: '叶片开始变黄，韧皮部里的汁液越来越稀。', eff: { food: -10, health: -5 } },
    { stages: ['adult','old'], w: 1, text: '连续几天没有下雨，叶面干了一层，你吸不到足够的汁液。', eff: { food: -8, health: -5 } },
    { stages: ['adult','old'], w: 1, text: '远处一只蚂蚁从你身边的叶面走过，没有停下。' },
    { stages: ['adult','old'], w: 1, text: '叶背上挂着一只僵死的同伴，身体鼓胀，发亮，上面有一个圆孔。那是寄生蜂羽化后留下的。', eff: { safety: -5 } },
    { stages: ['late','adult','old'], w: 1, text: '一只寄生蜂停在你身边的叶面上，用触角探了探你的身体。', eff: { safety: -8 } },
    { stages: ['adult'], w: 1, once: true, text: '你的体内已经有了下一代的胚胎，再下一代的胚胎藏在它们身体里。', eff: {} },
    { stages: ['adult','old'], w: 1, need: 'sexual', once: true, text: '你产下的越冬卵藏在叶芽的裂缝里。它们要等到明年春天，才会孵出新的若蚜。' },
    { stages: ['old'], w: 3, text: '你的口针越来越慢，吸一口要停很久。', eff: { health: -6 } },
    { stages: ['old'], w: 2, text: '你还在产仔，但越来越少，每次只有一两只。', eff: { offspring: [1, 2] } },
    { act: 'forage', stages: ['nymph','late','adult','old'], w: 3, text: '你趴在嫩叶的背面，口针插进韧皮部吸得很用力，腹部一下子鼓了起来。', eff: { food: [12, 18] } },
    { act: 'forage', stages: ['adult','old'], w: 2, text: '你吸的那段韧皮部已经空了。口针拔出来，在叶面上挪了几步，又插进另一段叶脉。', eff: { food: [2, 6], health: -2 } },
    { act: 'hide', stages: ['nymph','late','adult','old'], w: 2, text: '你挪到叶脉的背面，身体贴着绒毛。上面的雨滴打在叶片上，没有打到你。', eff: { safety: [8, 12], food: -4 } },
    { act: 'hide', stages: ['late','adult'], w: 1, text: '你缩进叶背的皱褶里，周围是同伴的身体，一层一层地叠着。', eff: { safety: [5, 8] } },
    { act: 'rest', stages: ['nymph','late','adult','old'], w: 2, text: '你把口针拔出来，静静地待在叶背，身体慢慢吸收刚吸进去的汁液。', eff: { health: [3, 6], food: -3 } },
    { act: 'rest', stages: ['adult','old'], w: 1, text: '你在阴凉的叶背停了整个下午，什么也没吃。', eff: { health: [2, 4], food: -5 } },
    { act: 'explore', stages: ['late','adult','old'], w: 2, text: '你爬出原来的叶片，沿着叶柄往另一片叶子走。路上没有遮挡，阳光很亮。', eff: { safety: -8 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '你走到叶尖。那里的汁液还没被同伴吸空，你吸了一小会儿，又赶紧退回去。', eff: { food: [6, 10], safety: -3 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你又生下一只若蚜。它淡绿色，一落到叶面上就开始吸食。', eff: { offspring: [3, 6] } },
    { act: 'mate', stages: ['adult','old'], w: 1, text: '你体内已经有了下一代的胚胎，下一代的身体里又装着再下一代。你生下了 {n} 只若蚜。', eff: { offspring: [2, 4] } },
    { need: 'crowded_plant', stages: ['nymph', 'late'], w: 3, text: '老叶的口感很硬，你的口针很难插进去。你得挤到叶缘，才找到一条能吸的韧皮部。', eff: { food: -6 } },
    { need: 'crowded_plant', stages: ['adult'], w: 2, text: '叶子上到处都是同类。你的后代还没长大，就已经挤开彼此，爬向下一片叶子。', eff: { safety: -5 } },
    { need: 'flowering', stages: ['nymph', 'late'], w: 3, text: '豌豆开花了，韧皮部的汁液又浓又甜。你趴在花茎上吸，身体一点点鼓起来。', eff: { food: [10, 15] } },
    { need: 'flowering', stages: ['adult', 'old'], w: 2, text: '花落之后，豆荚开始长。你身边的植株慢慢变得干硬，你不得不去找新的汁液。', eff: { food: -8 } },
    { need: 'ant_plant', stages: ['nymph', 'late', 'adult'], w: 3, text: '一只蚂蚁在你身边停下，用触角摸了摸你的背，然后吐出一滴蜜露。', eff: { food: +6, safety: +6 } },
    { need: 'ant_plant', stages: ['adult'], w: 2, text: '蚂蚁把你们挡在叶子背面。一只瓢虫爬过来，蚂蚁挥着上颚把它赶走了。', eff: { safety: +8 } },
    { need: 'old_leaf', stages: ['nymph', 'late'], w: 3, text: '叶子发黄了，汁液又稀又淡。你每吸一口，都觉得身体轻下去一点。', eff: { food: -10, health: -3 } },
    { need: 'old_leaf', stages: ['adult', 'old'], w: 2, text: '叶子边缘开始枯萎。你挪到茎的另一侧，那里还有一些汁液。', eff: { food: +5, safety: -3 } },
    { need: 'bold', stages: ['adult'], w: 2, act: 'explore', text: '你离开了熟悉的豌豆，爬到一株陌生的野草上。那里的汁液很稀，但没有瓢虫。', eff: { food: -5, safety: +5 } },
    { need: 'cautious', stages: ['nymph', 'late', 'adult'], w: 2, act: 'hide', text: '一道影子从叶子上方掠过。你立刻松开口针，缩到叶背的叶脉下面，一动不动。', eff: { safety: +6, food: -3 } },
    { need: 'runt', stages: ['nymph'], w: 3, text: '你比同龄的若蚜小一圈。别的若蚜先占了嫩叶的中脉，你只能挤在叶缘。', eff: { food: -8 } },
    { need: 'robust', stages: ['adult', 'old'], w: 2, text: '你的口针很有力，轻轻一刺就找到了韧皮部。你身边的同伴还在到处找。', eff: { food: +8 } },
  ],

  opening: {
    title: '刚出生的第一步',
    body: '你刚从母体里产出，是一只淡绿色的若蚜，还不能飞。母亲所在的老叶上挤满了同伴，汁液越来越少。旁边的嫩茎上新抽了一个芽，汁液充足，但你要先爬过一段裸露的叶面。',
    options: [
      { t: '留在母亲身边的老叶上', hint: '稳妥 · 吃得少', eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 4,
        result: '你紧贴着母亲的身体，在她身边找到一条叶脉。周围的同伴很多，汁液不算多。' },
      { t: '爬向嫩茎上的新芽', hint: '汁液多 · 暴露在外', eff: { food: +15, safety: -10 }, risk: 1.4, riskDays: 4,
        result: '你沿着叶柄往上爬。途中有一段叶面没有遮挡，你在那里停了很久。到了嫩茎，汁液很甜。' },
    ],
  },
  actions: {
    forage:  { name: '吸食韧皮部汁液', desc: '把口针插进叶脉的韧皮部，吸取汁液。', text: ['你的口针插在叶脉里，汁液缓慢地流进身体。', '腹部一下一下地颤动，蜜露滴到下面的叶面上。', '你吸饱了，又挪到另一段叶脉上，继续吸。'] },
    hide:    { name: '躲到叶背的叶脉下', desc: '转到叶背，贴着绒毛和叶脉，躲开瓢虫和寄生蜂。', text: ['你挪到叶背，身体贴着叶脉和绒毛。', '上面有什么东西掠过，你没有动。', '叶背很暗，同伴的身体一层一层叠在旁边。'] },
    rest:    { name: '停在叶背不动', desc: '拔出口针，停下来消化，等汁液慢慢被身体吸收。', text: ['你把口针拔出来，静静地待在叶背。', '身体慢慢消化刚吸进去的汁液。', '叶子在风里轻轻晃，你跟着晃了晃。'] },
    explore: { name: '爬去别的叶子', desc: '沿着叶柄，爬到邻近的另一片叶子上去。', stages: ['late','adult','old'], text: ['你沿着叶柄往另一片叶子走。', '路上没有遮挡，阳光很亮。', '新叶的汁液还很稠，你停下来吸了一口。'] },
    mate:    { name: '胎生产仔', desc: '夏天的雌蚜不需要雄虫，也能直接产下和自己一样的雌性若蚜。', stages: ['adult','old'], done: '你又产下了 {n} 只若蚜。' },
  },
  brood: [3, 6],
  decisions: [
    {
      id: 'wing', at: 9, need: '!winged',
      title: '太挤了',
      body: '同一株植物上已经挤满了同类。老叶上的汁液变少了，你的身体开始长出翅芽。',
      options: [
        { t: '长出翅膀，飞去别处', hint: '扩散 · 风险↑ · 产仔↓',
          eff: { food: -10, safety: +5 }, risk: 1.5, riskDays: 3, set: 'winged',
          result: '你的翅膀展开了，一阵风把你带离了这株植物。' },
        { t: '留在原地', hint: '稳妥 · 继续拥挤',
          eff: { food: +5 }, result: '你继续在老叶上吸食，身边的同伴越来越多。' },
      ],
    },
    {
      id: 'ant', at: 4,
      title: '一只蚂蚁',
      body: '一只蚂蚁爬到你的身边，触角在你的背上来回摸动。它想要你的蜜露。',
      fact: '蚂蚁与产蜜露的同翅目昆虫（包括蚜虫）形成互惠关系：蚂蚁取食蜜露，并保护蚜虫免受部分天敌侵害（Way 1963，Annual Review of Entomology）',
      options: [
        { t: '让它照看你', hint: '天敌↓ · 蜜露被拿走',
          eff: { food: -10, safety: +20 }, risk: 0.6, riskDays: 15, set: 'ant',
          result: '它每天来摸你几次，把你的蜜露舔走。它在你身边巡逻，把靠近的瓢虫赶开了。' },
        { t: '甩掉它', hint: '自己留下蜜露 · 风险↑',
          eff: { food: +8 }, risk: 1.2, riskDays: 5,
          result: '你抖了几下，蚂蚁掉到了地上，爬回去找别的蚜虫了。' },
      ],
    },
    {
      id: 'plant', at: 14, when: { health: '<60' },
      title: '叶子在变黄',
      body: '你吸食的这株植物的叶子开始变黄，汁液稀了，你的腹部一直是空的。',
      options: [
        { t: '换一株植物', hint: '步行暴露 · 汁液更好',
          eff: { food: -5 }, risk: 1.3, riskDays: 2,
          result: '你爬上细茎，走向邻近的一株。沿途有一簇草蛉的卵，你从它们旁边绕了过去。' },
        { t: '留下继续吸', hint: '饱食↓ · 健康↓',
          eff: { food: +5, health: -10 }, risk: 1.4, riskDays: 7,
          result: '你把口针深深插进韧皮部。汁液又稀又淡，你吸了很久，还是吸不饱。' },
      ],
    },
    {
      id: 'wasp', at: 11,
      title: '一只寄生蜂',
      body: '一只黑色的小蜂停在你的背上，腹部弯起，正对着你的身体。它要把卵产进你的体内。',
      options: [
        { t: '猛烈摇晃，掉落', hint: '逃脱 · 有摔下去的风险',
          eff: { safety: +10 }, kill: 0.1, cause: 'wasp', risk: 0.8, riskDays: 2,
          result: '你摔到下面的叶片上，蜂没有跟下来。' },
        { t: '继续吸食', hint: '被产卵的风险↑',
          eff: { food: +10 }, kill: 0.35, cause: 'wasp',
          result: '你低下头继续吸食。那枚卵从你腹侧的缝隙里滑了进去。' },
      ],
    },
    {
      id: 'sexual', at: 25,
      title: '白天变短了',
      body: '白天越来越短，夜里越来越凉。你身体里的胚胎开始分化，有的会成为雄蚜，有的会成为能产卵的雌蚜。',
      options: [
        { t: '生下雄蚜和能产卵的雌蚜', hint: '越冬卵 · 有性繁殖',
          eff: { offspring: [5, 10] }, risk: 1.2, riskDays: 20, set: 'sexual',
          result: '你生下了雄蚜和能产卵的雌蚜。它们在叶上交配，雌蚜再把越冬卵藏进叶芽的裂缝里。' },
        { t: '继续生下和你一样的雌蚜', hint: '后代↑ · 能否越冬看天气',
          eff: { offspring: [25, 40] }, risk: 1.1, riskDays: 20,
          result: '你继续生下和你一样的雌蚜。天气越来越冷，它们能不能熬过冬天，要看这株植物还在不在。' },
      ],
    },
    {
      id: 'ladybug', at: 2,
      title: '一只瓢虫幼虫',
      body: '一只带着黑斑的瓢虫幼虫沿着叶脉慢慢爬过来，它的大颚一张一合。你可以松开口针掉到叶背，也可以继续吸。',
      options: [
        { t: '松开口针，掉到叶背', hint: '安全↑ 食物↓',
          eff: { safety: +12, food: -8 }, risk: 0.7, riskDays: 3,
          result: '你滚进叶背的绒毛里，瓢虫在上面停了一会儿，又走开了。' },
        { t: '继续吸', hint: '饱食↑ 被咬的风险↑',
          eff: { food: +12 }, kill: 0.25, cause: 'ladybug',
          result: '你又吸了一口汁液。它沿着叶脉爬走了。' },
      ],
    },
    {
      id: 'sweet_leaf', at: 18,
      title: '叶片的上端',
      body: '下面的叶子已经被同伴吸空，汁液稀薄。叶子的上端还嫩，但要穿过一段没有遮挡的叶面。',
      options: [
        { t: '爬到嫩叶的上端', hint: '汁液多 · 暴露在外',
          eff: { food: +15, safety: -8 }, risk: 1.4, riskDays: 3,
          result: '你穿过叶面，吸到了一口很甜的汁液，身边的光亮得刺眼。' },
        { t: '留在叶背，少吸一点', hint: '稳妥 · 饿着',
          eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你只在叶脉上吸了几口，然后停下来。' },
      ],
    },
    {
      id: 'frost_night', at: 35,
      title: '夜里的霜',
      body: '夜里，叶面结了一层薄霜。你的身体开始变硬，口针在冷汁液里很难拔出来。',
      options: [
        { t: '钻到叶片底下的落叶里', hint: '安全 · 食物少',
          eff: { safety: +10, food: -10 }, risk: 0.8, riskDays: 4,
          result: '你钻进落叶下面。那里的温度比叶面高一些，你慢慢缓了过来。' },
        { t: '留在叶面上吸', hint: '饱食↑ 冻死风险↑',
          eff: { food: +15, health: -5 }, kill: 0.3, cause: 'cold',
          result: '你吸了很久，身体才慢慢暖起来。太阳升起来，霜化了一半。' },
      ],
    },
    {
      id: 'crowded_leaf', at: 6, need: 'crowded_plant',
      title: '老叶子上没有空位',
      body: '叶子背面挤满了同类，口针很难插进去。叶子顶端有一片嫩芽，汁液看起来更多，但也离天敌更近。',
      options: [
        { t: '爬到植株顶端的嫩芽', hint: '饱食↑ 风险↑', eff: { food: +8, safety: -5 }, risk: 1.2, riskDays: 3,
          result: '嫩芽很软，你挤在最边上吸汁。周围的同伴很快也爬了过来。' },
        { t: '留在老叶上等', hint: '稳妥 · 食物少', eff: { food: -5 },
          result: '你等了一会儿，身边的同伴慢慢走了，叶子上空出了一小块。' },
      ],
    },
  ],

  idle: [
    '你的口针插在韧皮部的管道里，汁液缓慢地流进来。',
    '叶片背面很凉，你紧贴着叶脉。',
    '你的身体半透明，能看见吸进去的汁液在肠道里流动。',
    '你挪了一小步，又停下，身边的同伴也在做同样的事。',
    '你的腹部轻轻颤着，蜜露一滴一滴地落到下面的叶面上。',
    '一阵风吹过，整株植物晃了一下。',
    '远处有什么东西在叶子上爬。你只是摆了摆触角。',
    '你大部分时间都待在这株植物上，很少离开。',
  ],

  epitaph: '你从来没有见过父亲。你的身体里装着下一代，下一代的身体里又装着再下一代。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'mayfly',
  name: '蜉蝣',
  en: 'Mayfly',
  sci: 'Ephemeroptera（蜉蝣目，以 Ephemera 等温带常见种类为例）',
  emoji: '🪰',
  scene: 'river',
  kind: 'wild',
  tagline: '大多数时间生活在水底，成虫通常只活一天左右',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一条山溪的砾石底下', 3, { food: +5 }],
        ['湖边软泥里的一块沉积物上', 2, { food: +10 }],
        ['一片水草丛生的池塘底部', 3, {}],
        ['一段浑浊的河床浅滩上', 1, { health: -10, risk: 1.3 }],
      ]},
      { label: '河水的状况', options: [
        ['一条水很清、石头干净的山溪', 3, { food: +5, set: 'clear_water' }],
        ['一条接着农田排水的河，水里有一点肥', 3, { food: +10, risk: 1.1, set: 'fertile_river' }],
        ['水库下游，水温比别处稳定', 2, { health: +5, set: 'dam_water' }],
        ['一条刚被污染过的河，溶解氧很低', 1, { health: -10, risk: 1.4, set: 'polluted' }],
      ]},
      { label: '羽化的那一年', options: [
        ['暖湿的傍晚，成虫群很大', 3, { food: +5, set: 'big_swarm' }],
        ['羽化的季节推迟了，河上很冷', 2, { health: -5, set: 'cold_hatch' }],
        ['一个干旱年，河水退到很低的地方', 1, { food: -10, risk: 1.2, set: 'dry_river' }],
      ]},
    ],
    siblings: 500,
    siblingsLabel: '同一位母亲产下的卵',
    intro: '你是一枚卵，长约半毫米，裹在一团胶质里，粘在{出生地}。你是{sex}。和你同一次产下的卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',      name: '卵',            from: 0,   unit: 'day'  },
    { id: 'nymph',    name: '稚虫（水下）',   from: 21,  unit: 'week' },
    { id: 'subimago', name: '亚成虫（有翅）', from: 357, unit: 'hour' },
    { id: 'imago',    name: '成虫',          from: 357.5, unit: 'hour' },
  ],
  maturity: 357.5,
  maxAge: 359,

  survival: [[0,1],[3,0.7],[14,0.45],[21,0.35],[60,0.15],[120,0.06],[200,0.02],[280,0.008],[330,0.004],[350,0.002],[357,0.0015],[358,0.0008],[359,0]],
  survivalNote: '稚虫在水下的死亡率很高，此曲线按温带种类的一年周期和鱼类、水生昆虫的捕食压力粗估；成虫只有约一天',

  init: { health: 70, food: 50, safety: 40 },
  foodDrain: 1,

  causes: [
    { id: 'egg_eaten', escape: false, w: 6, stages: ['egg'], short: '还是卵的时候被吃掉',
      text: '一只小水虫从石头底下爬过来，连同周围的胶质一起吃了下去。' },
    { id: 'stonefly', escape: true, w: 5, stages: ['nymph'], short: '被石蝇稚虫吃掉',
      text: '一只石蝇稚虫用口器咬住了你的腹部。你的鳃在挣扎中断了几片。' },
    { id: 'trout', escape: true, w: 4, stages: ['nymph','subimago','imago'], short: '被鳟鱼吞掉',
      text: '一条鳟鱼从水下跃起，嘴一张，你和一团水一起进了它的喉咙。' },
    { id: 'swallow', escape: true, w: 4, stages: ['subimago','imago'], short: '被燕子捉住',
      text: '一只燕子在低空急转了一下，你没能躲开。' },
    { id: 'low_oxygen', escape: false, w: 3, stages: ['nymph'], short: '污水里缺氧窒息',
      text: '上游排出的污水耗尽了河水里的氧气。你的鳃张得很开，却什么也没有拿到。' },
    { id: 'dry', escape: false, w: 3, stages: ['nymph'], short: '河床干涸',
      text: '连续几周没有下雨，河水退成了一摊。你没能爬到还有水的地方。' },
    { id: 'spider', escape: true, w: 2, stages: ['subimago','imago'], short: '被蜘蛛网粘住',
      text: '你的翅膀撞上一根细丝，黏住了。蜘蛛从网的另一边慢慢爬了过来。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的翅膀慢慢不再拍动。你落在水面上，随水漂走了。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵壳里，胚胎的细胞一次次分裂。你裹在胶质中，粘在石头底下。' },
    { stages: ['egg'], w: 1, text: '水流从石头上方经过，带来一点溶解的氧气。' },
    { stages: ['egg'], w: 1, once: true, text: '一只水生小虫从旁边爬过，碰到了你的胶质层，没有停下。', eff: { safety: -5 } },
    { stages: ['nymph'], w: 4, text: '你在石头表面刮下一层薄薄的藻类和碎屑，用口器把它们送进嘴里。', eff: { food: [8, 15] } },
    { stages: ['nymph'], w: 3, text: '你腹部两侧排着薄片状的鳃，在水里轻轻摆动，把水不停地换过身体。',
      fact: '蜉蝣稚虫的鳃位于腹部，呈薄片状（Brittain 1982）' },
    { stages: ['nymph'], w: 2, text: '你蜕了一次皮。旧的外壳还留在石头上，半透明，鳃和足的形状都还在。', eff: { health: +3 } },
    { stages: ['nymph'], w: 2, text: '一条石蝇稚虫从石头后面探出来。你松开抓着的石面，往下沉了一截。', eff: { safety: -10 } },
    { stages: ['nymph'], w: 2, text: '水流变急，把你冲出了原来的落脚点。你又抓住了另一块石头。', eff: { food: -3, safety: +3 } },
    { stages: ['nymph'], w: 1, text: '河床边缘的一层薄泥被晒干了。你挪到了湿的一侧。', eff: { health: -5, safety: -5 } },
    { stages: ['nymph'], w: 1, text: '一条鳟鱼从上游慢慢游过，尾鳍一摆就过去了。你停在石头底下没动。', eff: { safety: -10 } },
    { stages: ['nymph'], w: 1, text: '冬天，水温降到很低。你的动作慢下来，几乎不再觅食。', eff: { food: -10, health: -3 } },
    { stages: ['nymph'], w: 1, text: '春天水温回升，藻类长得很快。你吃得比冬天多得多。', eff: { food: +15 } },
    { stages: ['nymph'], w: 1, once: true, text: '你的翅芽在体侧慢慢鼓起。每蜕一次皮，它们就大一点。' },
    { stages: ['nymph'], w: 1, text: '下游一家工厂排出一股带泡沫的水。河水里的氧气变少了，你的鳃一直在张合。', eff: { health: -10 } },
    { stages: ['subimago'], w: 2, once: true, text: '你爬出水面，附在一根芦苇上。背上的外壳裂开，一层薄薄的翅膀展开了。', eff: { safety: -5 } },
    { stages: ['subimago'], w: 1, text: '翅膀还湿着，你停在一片叶子上等它们变干。', eff: { health: +3 } },
    { stages: ['imago'], w: 2, text: '天快黑的时候，同伴们在岸边的水面上方集合，成千上万只一起上下飞舞。' },
    { stages: ['imago'], w: 2, text: '水面上起了一层薄雾，月光把它照得发白。你贴着水面飞了一段。' },
    { stages: ['imago'], w: 1, fact: '蜉蝣成虫没有功能性口器，不取食（Brittain 1982）', text: '你张了张嘴，什么也没有。你的消化管早就空了。', eff: { food: -5 } },
    { stages: ['imago'], w: 1, text: '一只燕子从群舞的边缘掠过。你们一起散开，又慢慢聚回来。', eff: { safety: -5 } },
    { stages: ['imago'], w: 1, text: '一张蜘蛛网挂在你要飞过的地方。你绕开了，又差点撞上另一张。', eff: { safety: -5 } },
    { stages: ['imago'], w: 1, need: 'female', once: true, text: '你的腹部鼓了起来，卵团在里面慢慢挤动。' },
    { stages: ['imago'], w: 1, text: '一只蝙蝠从群里划过，群舞突然散开，又慢慢聚拢。', eff: { safety: -8 } },
    { act: 'forage', stages: ['nymph'], w: 4, text: '你在石面上刮下一层薄薄的硅藻，颜色很深，嚼起来有一点土味。', eff: { food: [8, 15] } },
    { act: 'forage', stages: ['nymph'], w: 2, text: '你的下颚伸出来，把石面上一层绒毛状的有机碎屑刮进嘴里。', eff: { food: [6, 10] } },
    { act: 'hide', stages: ['nymph'], w: 2, text: '你钻进一道石缝，身体贴着冷冷的石壁。外面的水流声一下子变远了。', eff: { safety: [8, 12], food: -3 } },
    { act: 'hide', stages: ['subimago','imago'], w: 1, text: '你停在芦苇的背面，翅膀合在背上。风从水面吹过，你一动不动。', eff: { safety: [6, 9] } },
    { act: 'rest', stages: ['nymph'], w: 2, text: '你停在石面上，几乎不动，鳃慢慢地摆动。', eff: { health: [3, 5], food: -2 } },
    { act: 'rest', stages: ['subimago','imago'], w: 1, text: '你停在一片叶子上，等翅膀慢慢变干。', eff: { health: [2, 4] } },
    { act: 'explore', stages: ['nymph'], w: 2, text: '你顺着水流游过一段砾石，找到一块新的石头。它背面有一层很新的藻类。', eff: { food: [6, 10], safety: -5 } },
    { act: 'explore', stages: ['imago'], w: 2, text: '你离开群舞，沿着河面往下游飞了一段，身边只剩下少数几只同伴。', eff: { safety: -8 } },
    { act: 'mate', stages: ['imago'], need: 'female', w: 2, text: '一只雄虫抓住了你。你们在空中连在一起，然后一起落向水面。你的卵团在腹部一颗一颗地挤出。', eff: { offspring: [80, 150] } },
    { act: 'mate', stages: ['imago'], need: 'male', w: 1, text: '你抓住一只雌虫，你们在空中停了一会儿，又各自飞开。', eff: { safety: -3 } },
    { need: 'clear_water', stages: ['nymph'], w: 3, text: '水很凉，石头上的藻膜很薄。你用腮在水里慢慢地摆，吃到的都是细小的碎屑。', eff: { food: -4, health: +4 } },
    { need: 'clear_water', stages: ['nymph'], w: 2, text: '一股暖流从上游来，河水清得能看见底部的石子。你蜕了一次皮，旧的外壳还挂在石头上。', eff: { health: +4 } },
    { need: 'fertile_river', stages: ['nymph'], w: 3, text: '农田的排水带来了一股肥料的味道。石头上长满了绿色的藻，你每天都吃得很饱。', eff: { food: [8, 14] } },
    { need: 'fertile_river', stages: ['nymph'], w: 1, text: '河底的淤泥里有很多死去的动物。你吃着它们，但也闻到一股说不出的酸味。', eff: { health: -5 } },
    { need: 'dam_water', stages: ['nymph'], w: 3, text: '水库放水的时候，河水突然变浅。你在一块湿石头上待了很久，才等到水回来。', eff: { safety: -8 } },
    { need: 'dam_water', stages: ['subimago', 'imago'], w: 2, text: '这一段河的水温比别处都稳定。你羽化的时候，几乎没有受到寒冷的影响。', eff: { health: +5 } },
    { need: 'polluted', stages: ['nymph'], w: 3, text: '河水一天比一天发黑。你的腮摆动得越来越慢，最后只能靠着石头呼吸。', eff: { health: -10, food: -5 } },
    { need: 'polluted', stages: ['nymph', 'subimago'], w: 2, text: '河面上飘着一层油光，同伴成片地漂了出来。你躲在石头底下，没有出去。', eff: { safety: +5 } },
    { need: 'big_swarm', stages: ['imago'], w: 3, text: '傍晚，成千上万只成虫一起飞上来，把河面的光都挡住了。你在它们之间找到一个空隙。', eff: { safety: +5 } },
    { need: 'big_swarm', stages: ['subimago'], w: 2, text: '你刚从水里飞出来，身边全是正在起飞的同类。有几只撞到了你的翅膀。', eff: { health: -4 } },
    { need: 'cold_hatch', stages: ['subimago'], w: 3, text: '羽化那天的风很冷。你的翅膀刚展开，就被一阵风吹到了水面上。', eff: { health: -8, safety: -5 } },
    { need: 'cold_hatch', stages: ['imago'], w: 2, text: '成虫在低温里飞得很慢。你落在一根芦苇上，等着太阳出来。', eff: { health: +3 } },
    { need: 'dry_river', stages: ['nymph'], w: 3, text: '河水退了下去，你所在的那块石头几乎露出了水面。你在湿石头的边缘挪了很久。', eff: { food: -8 } },
    { need: 'dry_river', stages: ['subimago', 'imago'], w: 2, text: '河床干了一半。成虫飞起来的时候，河面上到处是沙子的味道。', eff: { health: -5 } },
    { need: 'bold', stages: ['nymph'], w: 2, act: 'explore', text: '你离开了平时待的石缝，游进一段陌生的急流。水流把你冲得翻了几个身，但你找到了一片没人吃过的藻。', eff: { food: +10, safety: -8 } },
    { need: 'cautious', stages: ['nymph'], w: 2, act: 'hide', text: '一道鳟鱼的影子掠过水面。你紧紧贴在石头下面，等影子完全离开。', eff: { safety: +6 } },
    { need: 'runt', stages: ['nymph'], w: 3, text: '你比同批的稚虫小。石头上的藻膜先被别人占了，你只能去啃石头背面又硬又薄的东西。', eff: { food: -6 } },
  ],

  opening: {
    title: '母亲把卵放进哪段水',
    body: '你还是一枚卵，裹在胶质里。母亲在水面上方来回飞，要选一块石头放下你。湍急的浅滩氧气充足，但一场大水就能把卵冲走；平缓的深潭很稳，底部的软泥里氧气却少。',
    options: [
      { t: '粘在湍急浅滩的石头上', hint: '氧气足 · 洪水风险↑', eff: { health: +5, food: +5 }, risk: 1.3, riskDays: 21,
        result: '你的胶质粘在石头的背面，水流不停地冲过。你的卵呼吸得很好，只是每一场大水都在考验它。' },
      { t: '放进平缓深潭的软泥里', hint: '水流稳 · 缺氧', eff: { safety: +10, health: -5 }, risk: 0.9, riskDays: 21,
        result: '你沉进软泥，水几乎不动。这里很安静，但泥里的氧气少，你的胶质一直闷着。' },
    ],
  },
  actions: {
    forage:  { name: '刮食石面上的藻类', desc: '用下颚刮下石头表面的硅藻和有机碎屑。成虫没有功能性口器，不取食，所以只在稚虫期可用。', stages: ['nymph'], text: ['你趴在石面上，下颚一下一下地刮着。', '藻类的颜色很深，嚼起来有一点土味。', '水流把碎屑冲过来，你伸手把它们拢进嘴里。'] },
    hide:    { name: '躲进石缝或芦苇下', desc: '稚虫钻进石缝，成虫停在芦苇的背面，避开鱼和鸟。', text: ['你钻进一道石缝，身体贴着冷冷的石壁。', '外面的水流声一下子变远了。', '上面有影子掠过，你一动不动。'] },
    rest:    { name: '停在石面或叶背', desc: '停下来，不动，等水流或风慢慢过去。', text: ['你停下来，什么也没有做。', '鳃慢慢地摆动，像在呼吸。', '水流从你身边流过，你随着它轻轻晃了晃。'] },
    explore: { name: '顺流去找新河段', desc: '稚虫沿着水流爬到另一块石头；成虫离开群舞，朝河的下游飞。', stages: ['nymph','imago'], text: ['你顺着水流游过一段砾石。', '你找到一块新的石头，背面有一层很新的藻类。', '你离开群舞，沿着河面往下游飞。'] },
    mate:    { name: '在群舞中找伴', desc: '成虫在水面上方的群舞里找异性。成虫只活一天左右，交配和产卵都在这段时间里完成。', stages: ['imago'], done: '你们在空中交配，之后产下了 {n} 枚卵。' },
  },
  brood: [100, 200],
  decisions: [
    {
      id: 'depth', at: 90,
      title: '水深与水温',
      body: '河床上，浅水区又暖又快，藻类长得多，但鱼也多。深处的水凉，动作慢，但更安全。',
      options: [
        { t: '留在深处的凉水里', hint: '长得慢 · 安全',
          eff: { food: -5, safety: +10 }, risk: 0.7, riskDays: 60,
          result: '你沿着河床往深处挪，水凉了下来，你的动作慢了。' },
        { t: '游到浅而暖的水草里', hint: '长得快 · 鱼多',
          eff: { food: +20, health: +5 }, risk: 1.6, riskDays: 60,
          result: '你爬到水草根部，藻类在身边生长。鳟鱼也知道这里有你。' },
      ],
    },
    {
      id: 'emerge', stage: 'subimago',
      title: '傍晚的水面',
      body: '天色暗下来。你刚爬出水面，翅膀还是湿的。岸边的芦苇下有一片阴影，同伴们正在水面上方集合。',
      options: [
        { t: '飞进傍晚的群舞', hint: '找伴 · 鸟和鱼多',
          eff: { safety: -15 }, kill: 0.2, cause: 'swallow',
          result: '你混进了一大团同伴里。燕子也在那里。' },
        { t: '躲在岸边的植物下面等天黑', hint: '安全 · 错过群舞',
          eff: { safety: +10 }, risk: 0.8, riskDays: 1,
          result: '你贴着叶子背面，等群舞散了，才慢慢飞起来。' },
      ],
    },
    {
      id: 'swarm_m', stage: 'imago', need: 'male',
      title: '一只雌虫飞进群里',
      body: '一只雌虫撞进了你的群舞。她的翅膀在夜色里发亮，离你只有几厘米。',
      options: [
        { t: '抓住她，交配', hint: '交配 · 落水风险↑',
          eff: { safety: -5 }, set: 'paired', risk: 1.4, riskDays: 1,
          result: '你们在空中连在一起，又一起慢慢往下落。水面就在下面。' },
        { t: '飞到岸边的草上', hint: '安全 · 没有交配',
          eff: { safety: +10 }, risk: 0.8, riskDays: 1,
          result: '你松开了她。她被气流带进了群里。你停在草上，直到天亮。' },
      ],
    },
    {
      id: 'swarm_f', stage: 'imago', need: 'female',
      title: '一群雄虫在你头顶',
      body: '雄虫在水面上方飞舞，声音细小，连成一片。一只雄虫朝你飞过来。',
      options: [
        { t: '飞进群里，让他抓住你', hint: '交配 · 落水风险↑',
          eff: { safety: -5 }, set: 'mated', risk: 1.4, riskDays: 1,
          result: '他抓住了你。你们在空中停了一会儿，然后一起落了下来。' },
        { t: '飞到岸边，等下一群雄虫', hint: '安全 · 错过机会',
          eff: { safety: +10 }, risk: 0.8, riskDays: 1,
          result: '你停在一根草梗上。夜里又有一群雄虫飞过，你没有动。' },
      ],
    },
    {
      id: 'egg_fall', at: 358, need: 'mated',
      title: '落进水面',
      body: '你的身体已经很轻了。卵团在腹部，你能感觉到它。下面是一片平静的水面，远处有一条鳟鱼在跳。',
      options: [
        { t: '落到水面，把卵产进去', hint: '后代↑↑ · 落水风险↑',
          eff: { offspring: [200, 500] }, kill: 0.3, cause: 'trout',
          result: '你贴着水面点了几次，卵散开，沉进了石缝。一条鳟鱼在你下方张开了嘴。' },
        { t: '飞回岸边的树枝，再找一片水', hint: '后代↓ · 安全',
          eff: { offspring: [50, 150], safety: +10 }, risk: 0.8, riskDays: 1,
          result: '你飞回岸边的一根树枝，把卵排在一片浅水的上方。' },
      ],
    },
    {
      id: 'pollution', at: 150,
      title: '河水变浑了',
      body: '上游有一段水变得浑浊，泡沫一层层飘下来，溶解的氧气变少了。你的鳃张开，却觉得水不够用。',
      options: [
        { t: '钻进砾石的缝隙里', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 30,
          result: '你沉进砾石的缝隙里，那里水流慢，氧气也多一点。' },
        { t: '留在表层啃藻类', hint: '饱食↑ 缺氧风险↑',
          eff: { food: +15 }, kill: 0.2, cause: 'low_oxygen',
          result: '你在石面上吃了几口藻类。泡沫还在一层层地往下飘。' },
      ],
    },
    {
      id: 'trout_riffle', at: 300,
      title: '鳟鱼停在水流里',
      body: '一条鳟鱼停在水流中，尾巴轻轻地摆动，等待被水冲下来的东西。它离你只有几块石头的距离。',
      options: [
        { t: '躲到石头的背后不动', hint: '安全↑ 食物↓',
          eff: { safety: +12, food: -5 }, risk: 0.7, riskDays: 10,
          result: '鳟鱼张了一会儿嘴，又游走了。' },
        { t: '继续在水流里觅食', hint: '饱食↑ 被吃掉的风险↑',
          eff: { food: +20 }, kill: 0.3, cause: 'trout',
          result: '你在水流里又刮了一会儿藻类，鳟鱼没有再回来。' },
      ],
    },
    {
      id: 'stone_ledge', at: 220,
      title: '石头后面的石蝇',
      body: '一只石蝇稚虫从石头后面探出来，正朝你这边爬。你可以松开石面沉到水底，也可以继续抓着石面吃。',
      options: [
        { t: '松开石面，沉到水底', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -8 }, risk: 0.8, riskDays: 5,
          result: '你沉到河床的砂层上，石蝇从上面的石头爬了过去。' },
        { t: '抓着石面继续吃', hint: '饱食↑ 被咬的风险↑',
          eff: { food: +12 }, kill: 0.25, cause: 'stonefly',
          result: '你吃了几口，石蝇已经爬到你旁边了。它没有咬你，只是停下来看了一会儿。' },
      ],
    },
    {
      id: 'fertile_mat', at: 120, need: 'fertile_river',
      title: '水边一堆腐烂的藻',
      body: '农田排水带来的藻在石头边上堆成了厚厚一层，最底下已经开始发臭。鱼也在那里游来游去。',
      options: [
        { t: '钻进藻堆里吃', hint: '饱食↑↑ 风险↑', eff: { food: +12 }, risk: 1.3, riskDays: 6,
          result: '你钻进藻堆里，吃得很饱。几天之后，你的身上沾了一层黏糊糊的泥。' },
        { t: '在石头下待着', hint: '安全↑ 食物↓', eff: { safety: +6, food: -4 },
          result: '你躲在石头底下，等那些鱼游远了，才慢慢爬出来。' },
      ],
    },
    {
      id: 'cold_wing', stage: 'subimago', need: 'cold_hatch',
      title: '风很冷，翅膀还是湿的',
      body: '你已经到了亚成虫阶段，身体能感觉到风。水面很冷，你的翅膀还没有完全干。',
      options: [
        { t: '立刻飞上去', hint: '风险↑', eff: { safety: -3 }, risk: 1.4, riskDays: 1,
          result: '你展开翅膀，风把你往岸边的草丛吹。' },
        { t: '在浮木上停一会儿，等风小', hint: '稳妥', eff: { health: +3 }, risk: 0.8, riskDays: 1,
          result: '你在浮木上等了一会儿，直到风变小。' },
      ],
    },
    {
      id: 'curious_light', at: 300, need: 'curious',
      title: '水面上的一道光',
      body: '水面上有一道亮光，一闪一闪的。你能感觉到它离你很近，却不知道那是什么。',
      options: [
        { t: '朝光游过去', hint: '风险↑', eff: { safety: -5 }, risk: 1.2, riskDays: 2,
          result: '你游到水面，才发现那只是一片倒影。' },
        { t: '继续留在石下', hint: '稳妥', eff: {},
          result: '你没有上去。那道光很快就不见了。' },
      ],
    },
  ],

  idle: [
    '光线从上面透下来，碎成一片一片的。',
    '河边的水草在风里轻轻摆动。',
    '一阵风从河面上吹过，带着一点水汽。',
    '远处传来流水的声音，一直没有停。',
    '一片落叶从水面上飘过，影子落在石头上移动。',
    '附近的石头上，挂着一个蜕下来的旧壳，半透明。',
    '这条河的水位，一年里有高有低。',
    '你的一生，大部分时间都在这条河边度过。',
  ],

  epitaph: '你在水底生活了将近一年，在空中只有一天左右。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'ant',
  name: '工蚁（草地铺道蚁）',
  en: 'Worker ant (Tetramorium caespitum)',
  sci: 'Tetramorium caespitum（草地铺道蚁），蚁科 Formicidae',
  emoji: '🐜',
  scene: 'soil',
  kind: 'wild',
  tagline: '一个蚁群里，大多数成员都是不生育的工蚁',

  birth: {
    sex: [['雌性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['草地表土下的一间育儿室', 4, {}],
        ['一块石头底下的浅层巢穴', 3, { food: +5 }],
        ['一条路边被踩实的土层', 2, { safety: -5, risk: 1.2 }],
      ]},
      { label: '巢的规模', options: [
        ['几百只蚂蚁组成的小群', 2, {}],
        ['上千只蚂蚁组成的大群', 3, { food: +5, safety: +5 }],
      ]},
      { label: '出生的季节', options: [
        ['春天的第一场暖雨之后，巢里的卵大量孵化', 3, { food: +5, safety: +5, set: 'spring_cohort' }],
        ['夏末，蚁后刚建起的新巢里，第一批工蚁', 2, { food: -5, safety: -5, set: 'founding_cohort' }],
        ['一个干旱的夏天，巢里的湿度很低', 2, { health: -5, set: 'drought_nest' }],
        ['冬天过后，第一个暖和的午后', 1, { health: +3, set: 'winter_cohort' }],
      ]},
    ],
    siblings: 180,
    siblingsLabel: '同一批羽化的工蚁',
    intro: '你是一只不育的工蚁（{sex}），现在是一枚卵，在{出生地}。你将经过幼虫和蛹期，在{巢的规模}里长大。和你同一批羽化的工蚁大约有 {siblings} 只。',
  },

  stages: [
    { id: 'egg',     name: '卵',       from: 0,   unit: 'week' },
    { id: 'larva',   name: '幼虫',     from: 10,  unit: 'week' },
    { id: 'pupa',    name: '蛹',       from: 31,  unit: 'week' },
    { id: 'nurse',   name: '内勤（育儿）', from: 50,  unit: 'week' },
    { id: 'forager', name: '外勤（觅食）', from: 95,  unit: 'week' },
    { id: 'old',     name: '老年',     from: 280, unit: 'week' },
  ],
  maturity: 50,
  maxAge: 360,

  survival: [[0,1],[10,0.55],[31,0.4],[50,0.33],[70,0.3],[95,0.28],[110,0.16],[130,0.09],[160,0.04],[200,0.015],[250,0.005],[300,0.0015],[330,0.0005],[360,0]],
  survivalNote: '工蚁的寿命数据主要来自实验室饲养（数月到一年）；外勤阶段的陡降按野外的捕食、高温与感染压力粗估',

  init: { health: 80, food: 60, safety: 55 },
  foodDrain: 4,

  causes: [
    { id: 'spider', escape: true, w: 5, stages: ['forager','old'], short: '被草蛛捉住',
      text: '一只草蛛从草叶上扑下来，螯肢从你背后扎进去。它的毒液很快让你停止了挣扎。' },
    { id: 'bird', escape: true, w: 3, stages: ['forager','old'], short: '被鸟啄走',
      text: '一只麻雀从草丛里跳出来，嘴一合，你就不见了。' },
    { id: 'colony_war', escape: true, w: 2, stages: ['nurse','forager'], short: '死于别的蚁群的袭击',
      text: '边界上的一场小规模冲突。对方咬住你的足，把你拖进了它们的隧道。' },
    { id: 'fungus', escape: false, w: 2, stages: ['nurse','forager','old'], short: '被白僵菌感染',
      text: '一种真菌的孢子粘在你的体壁上，钻进去之后在你体内长满了菌丝。' },
    { id: 'flood', escape: false, w: 2, stages: ['egg','larva','pupa','nurse','forager'], short: '巢被暴雨灌满',
      text: '地下的隧道被雨水灌满。育儿室里的卵和幼虫最先被冲散，你被水裹住，很快就没了动静。' },
    { id: 'heat', escape: false, w: 2, stages: ['forager','old'], short: '在地表热得脱水',
      text: '地表热得烫脚。你在阴影里停下时，身体里的水分已经所剩无几。' },
    { id: 'starve', escape: false, w: 1, stages: ['larva','nurse','forager','old'], short: '饿死',
      text: '巢里的食物没有及时送到你这里。你的身体一点一点地变轻，最后不动了。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的足慢慢停在地上。你不再爬，也不再回巢。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵躺在育儿室的一堆同伴中间，工蚁们用触角一颗一颗地推动它们。' },
    { stages: ['egg'], w: 1, once: true, text: '外面隧道里传来雨水渗入土层的声音，育儿室的湿度上升了一点。' },
    { stages: ['larva'], w: 3, text: '一只工蚁把食物从嘴里吐出来，递到你的口器前。你是被喂的那一个。', eff: { food: +10 } },
    { stages: ['larva'], w: 2, text: '你一动不动地待在育儿室里，身体在一天天变长。幼虫期只能靠别人喂养。', eff: { food: [5, 10] } },
    { stages: ['larva'], w: 1, text: '一只较大的工蚁把一片碎屑搬进育儿室，空气里有一股蚁酸的刺鼻味道。', eff: { safety: -3 } },
    { stages: ['pupa'], w: 2, text: '你静止不动，身体的各部分慢慢分开，长出足、触角和口器。' },
    { stages: ['pupa'], w: 1, once: true, text: '你羽化了。身体还很软，工蚁们用触角一遍一遍地碰你，确认你是同伴。', eff: { health: +5 } },
    { stages: ['nurse'], w: 3, text: '你清理一堆被遗弃的卵，把它们搬到温度更合适的地方。', eff: { food: -3 } },
    { stages: ['nurse'], w: 2, text: '你舔舐一只幼虫的体表，把上面残留的霉菌孢子清理干净。', eff: { health: +3 } },
    { stages: ['nurse'], w: 2, text: '隧道另一端传来一阵颤动，有什么东西在土层上挖。巢里的工蚁都停了下来。', eff: { safety: -8 } },
    { stages: ['nurse'], w: 1, text: '一只工蚁把嗉囊里的液体吐给你，那是群体里共享的食物。', eff: { food: +12 } },
    { stages: ['nurse'], w: 1, once: true, text: '你第一次跟着一条信息素痕迹走到巢口。你的触角还在学着分辨它。' },
    { stages: ['forager'], w: 3, text: '你走出巢口，地面的光亮得刺眼，你的复眼一时什么也看不清。你沿着同伴留下的痕迹一直向前。', eff: { safety: -5 } },
    { stages: ['forager'], w: 3, text: '你找到一只死掉的甲虫。你和几只同伴一起把它拖回了巢。', eff: { food: +25 } },
    { stages: ['forager'], w: 2, text: '一阵热风从草叶上吹下来，地面很快烫起来。你躲进一片阴影，等了很久。', eff: { food: -3, health: -5 } },
    { stages: ['forager'], w: 2, text: '一张草蛛的网在你头顶的草茎间晃动。你绕开了它，没有回头。', eff: { safety: -10 } },
    { stages: ['forager'], w: 2, text: '你在一群蚜虫旁边停下。它们分泌的蜜露很甜，你吸了一大口。', eff: { food: +15 } },
    { stages: ['forager'], w: 1, text: '一只别的蚁群的工蚁在边界上和你对峙，你们的触角碰在一起，又各自退开。', eff: { safety: -5 } },
    { stages: ['forager'], w: 1, text: '暴雨灌进了一条低矮的隧道。你和同伴抱成一团，往高处爬。', eff: { health: -10, safety: -10 } },
    { stages: ['forager'], w: 1, once: true, text: '全世界同时活着的蚂蚁大约有 2×10^16 只。你只是其中很小的一份。',
      fact: '全球同时存活的蚂蚁估计约 2×10^16 只（Schultheiss 等 2022，PNAS）' },
    { stages: ['old'], w: 3, text: '你的步行越来越慢，每次回巢都要多停一会儿。', eff: { health: -6 } },
    { stages: ['old'], w: 2, text: '你的足上沾满了干泥，有几节已经磨秃了。', eff: { health: -4 } },
    { stages: ['old'], w: 1, text: '你在草叶的阴影里找到一小块糖。你吃得很慢。', eff: { food: +10 } },
    { act: 'forage', stages: ['forager','old'], w: 3, text: '你在草叶的根部找到一小堆被遗落的种子，你把它们一粒一粒搬回巢。', eff: { food: [8, 14] } },
    { act: 'forage', stages: ['forager','old'], w: 2, text: '你用触角碰到一滴蜜露，舔走之后，又去找下一株有蚜虫的草。', eff: { food: [6, 10] } },
    { act: 'hide', stages: ['nurse','forager','old'], w: 2, text: '你退进巢穴深处，那里的湿度稳定。外面的热风传不进来，你安静地待着。', eff: { safety: [6, 9], food: -3 } },
    { act: 'hide', stages: ['forager','old'], w: 1, text: '你躲在一块石头的阴影里，不再往前走。外面的草叶被晒得发白。', eff: { safety: [5, 8], health: [1, 3] } },
    { act: 'rest', stages: ['nurse','forager','old'], w: 2, text: '你在育儿室的角落停了一会儿，同伴们挤在一起，你的触角慢慢放了下来。', eff: { health: [3, 6] } },
    { act: 'rest', stages: ['forager','old'], w: 1, text: '你在草茎的阴影下停了很久，身体冷下来，足也不再发麻。', eff: { health: [2, 4], food: -2 } },
    { act: 'explore', stages: ['forager','old'], w: 2, text: '你离开熟悉的痕迹，沿着一条新的草根路走了很远。气味陌生，你不敢停下。', eff: { food: [8, 12], safety: -8 } },
    { act: 'explore', stages: ['forager'], w: 1, text: '你爬过一段裸露的沙地，发现一块被鸟啄开的甲虫外壳。你把碎片带回了巢。', eff: { food: [10, 14], safety: -5 } },
    { need: 'spring_cohort', stages: ['larva', 'pupa'], w: 3, text: '巢的温度一周里慢慢升高，幼虫们吃得很快。你蜕皮之后，身体一下子胖了起来。', eff: { health: +5, food: +5 } },
    { need: 'spring_cohort', stages: ['nurse', 'forager'], w: 2, text: '春天第一批蚁群成员都出来了。你们一起搬运草籽，动作又快又整齐。', eff: { food: +8 } },
    { need: 'founding_cohort', stages: ['larva', 'pupa'], w: 3, text: '这个巢只有一只蚁后在照顾你们。她的食物很少，幼虫们也长得很小。', eff: { food: -8 } },
    { need: 'founding_cohort', stages: ['nurse', 'forager'], w: 2, text: '你是这个巢最早出来的工蚁之一。你的身材很小，却要替蚁后出去找吃的。', eff: { health: -4, safety: -3 } },
    { need: 'drought_nest', stages: ['larva'], w: 3, text: '巢里的湿度低，幼虫们挤成一团，互相用身体盖住。', eff: { health: -6 } },
    { need: 'drought_nest', stages: ['forager', 'old'], w: 2, text: '你们在草根下找到一条湿润的隧道。那里的草籽有些发霉，但至少是湿的。', eff: { food: +5, health: +3 } },
    { need: 'winter_cohort', stages: ['pupa', 'nurse'], w: 3, text: '天暖了一点，巢里的蚂蚁都醒了过来，把幼虫搬到温暖的地方。', eff: { health: +6 } },
    { need: 'winter_cohort', stages: ['forager'], w: 2, text: '你第一次出去觅食，外面的草叶上还挂着冻过的露水。', eff: { health: -3, food: +3 } },
    { need: 'bold', stages: ['forager', 'old'], w: 2, act: 'explore', text: '你离开熟悉的觅食路线，爬上一根草的顶端，去看那片陌生的草地。风很大，你差点被吹下来。', eff: { food: +8, safety: -8 } },
    { need: 'cautious', stages: ['forager', 'old'], w: 2, act: 'hide', text: '一只鸟停在草丛边。你们立刻缩回洞里，直到它飞走。', eff: { safety: +6, food: -4 } },
    { need: 'runt', stages: ['nurse'], w: 3, text: '你比同龄的工蚁瘦小。好的幼虫都先轮到了大个的工蚁手里，你只能去照看角落里的卵。', eff: { food: -4 } },
    { need: 'robust', stages: ['forager'], w: 2, text: '你的足很有力，能一下子拖回一只比身体大两倍的死甲虫。同伴们都让开了路。', eff: { food: +12 } },
  ],

  opening: {
    title: '蚁后把卵产在哪一层',
    body: '你还是一枚很小的白色卵。蚁后刚把你产下，巢穴里有两个方向可以放你。一条通向地下深处的育儿室，温湿度稳定，雨水渗不进来；另一条通向石头底下的浅层巢穴，温度高，工蚁来得快，但雨水和晒热的地表离得很近。',
    options: [
      { t: '留在地下深处的育儿室', hint: '稳定 · 工蚁来得慢', eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 10,
        result: '你被工蚁搬进深处的育儿室。这里的温度和湿度不会变，但食物要慢慢才能送到。' },
      { t: '放进石头下的浅层巢穴', hint: '温度高 · 暴雨和晒热风险↑', eff: { food: +10, safety: -5 }, risk: 1.3, riskDays: 10,
        result: '你被放在石头底下的一小块土里，很暖。一场暴雨过后，那条隧道差点被灌满。' },
    ],
  },
  actions: {
    forage:  { name: '外出觅食', desc: '沿着信息素痕迹走到地面，找虫尸、糖分和蚜虫的蜜露。', stages: ['forager','old'], text: ['你沿着同伴留下的痕迹，走向草叶的根部。', '地表的热风吹过，你的足一下一下地发烫。', '你用触角碰到一小滴蜜露，舔了一口，又继续往前找。'] },
    hide:    { name: '躲进巢穴深处', desc: '退进隧道深处，避开地表的热和入侵者。', stages: ['nurse','forager','old'], text: ['你退进隧道深处，那里的湿度稳定，外面的热风进不来。', '巢口的土层偶尔震动一下，你没有出去看。', '育儿室的方向传来幼虫的气味。'] },
    rest:    { name: '在育儿室里歇着', desc: '停下来，挤在同伴中间，让触角和足歇一歇。', stages: ['nurse','forager','old'], text: ['你停在育儿室的角落，同伴们挤在你身边。', '你的触角慢慢放了下来。', '一只工蚁从你身上跨过去，没有停留。'] },
    explore: { name: '走出巢口，去草丛边界', desc: '沿着还没有痕迹的路线，去远一点的草丛找食物。', stages: ['forager','old'], text: ['你走出巢口，地面的光亮得刺眼。', '草茎之间的气味一层一层地变化。', '你在边界上停了一会儿，触角碰了碰一只陌生的同类。'] },
    mate:    false,
  },
  decisions: [
    {
      id: 'intruder', at: 60,
      title: '入侵的蚁群',
      body: '一群别的蚁群的工蚁，正从巢的另一侧的隧道挤进来。它们咬着你同伴的足，想把育儿室的卵拖走。',
      options: [
        { t: '加入防御，咬住入侵者', hint: '守住巢 · 可能致命',
          kill: 0.12, cause: 'colony_war', eff: { safety: +10, food: -5 },
          result: '你咬住一只入侵者的触角，让它松了口。你的一只足被它咬断了。' },
        { t: '退进深处的隧道', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -10 }, risk: 0.9, riskDays: 5,
          result: '你退到更深的隧道里。入侵者在巢口停了一会儿，然后退了出去。' },
      ],
    },
    {
      id: 'nurse_to_forage', at: 95,
      title: '走出巢口',
      body: '你的身体已经硬了，触角上的气味也变得不一样。育儿室里的幼虫还在，但外面的草地上有食物，痕迹一直通到巢口。',
      options: [
        { t: '走出巢口，去找食物', hint: '食物↑ 外勤死亡率↑',
          eff: { food: +15 }, risk: 1.5, riskDays: 21,
          result: '你排在一队工蚁后面走出巢口。第一天，地面的热气就烫得你的足发麻。' },
        { t: '留在巢里，继续照顾幼虫', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 21,
          result: '你又留了一段时间，清理卵堆，喂养幼虫。外面的食物还在那里，你没有去。' },
      ],
    },
    {
      id: 'trail', at: 120,
      title: '一条很亮的痕迹',
      body: '你的触角碰到一条新的信息素痕迹，气味很浓，像是一处糖水或蚜虫的聚集点。另一条绕远的小路通向没有痕迹的草丛。',
      options: [
        { t: '沿着痕迹走', hint: '食物↑↑ 风险↑',
          kill: 0.06, cause: 'spider', eff: { food: +30 }, risk: 1.4, riskDays: 7,
          result: '你跟着气味一直走到一小堆被踩碎的果肉。草丛边上，有一张网在等你。' },
        { t: '绕远路，走没有痕迹的草丛', hint: '安全↑ 食物↓',
          eff: { food: +8, safety: +10 }, risk: 0.9, riskDays: 7,
          result: '你在草丛里找到几粒种子，天黑前回了巢。' },
      ],
    },
    {
      id: 'corpse', at: 200,
      title: '一具带着白丝的同伴',
      body: '你在地上看见一只同伴的尸体，身上长满了白色的细丝。它还能被拖回巢里，你的触角碰到它时闻到了一股甜腥味。',
      options: [
        { t: '把尸体拖回巢', hint: '食物↑ 感染风险↑',
          eff: { food: +10 }, risk: 1.5, riskDays: 14,
          result: '你们把它拖回了巢。几天后，育儿室的角落里长出了一圈白色的细丝。' },
        { t: '绕过去，继续觅食', hint: '稳妥 · 食物少',
          eff: { food: -3 }, risk: 0.9, riskDays: 14,
          result: '你绕过那具尸体。它的气味在你身后渐渐淡了。' },
      ],
    },
    {
      id: 'bird_perch', at: 150,
      title: '草丛里的麻雀',
      body: '一只麻雀在草丛里跳来跳去，啄食地面的种子。它离你只有一片草叶的距离。',
      options: [
        { t: '钻进草根的空隙', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -8 }, risk: 0.8, riskDays: 4,
          result: '你钻进草根的空隙，麻雀啄了几下，又飞走了。' },
        { t: '继续沿着种子的痕迹走', hint: '食物↑ 被啄的风险↑',
          eff: { food: +15 }, kill: 0.2, cause: 'bird',
          result: '你搬起一粒种子，继续往前走。麻雀的影子从你头顶掠过去了。' },
      ],
    },
    {
      id: 'sugar_grass', at: 240,
      title: '一片被踩碎的果肉',
      body: '草地上躺着一片被踩碎的果肉，汁水流到了地上，糖分很高。周围的草丛里，别的蚁群的工蚁也在往那边走。',
      options: [
        { t: '叫同伴一起搬回去', hint: '食物↑↑ 冲突风险↑',
          eff: { food: +25, safety: -5 }, kill: 0.1, cause: 'colony_war', risk: 1.4, riskDays: 6,
          result: '你们一起把果肉搬回了巢。路上有两次，别的蚁群的工蚁朝你们冲过来。' },
        { t: '只取一小口，马上离开', hint: '稳妥',
          eff: { food: +8, safety: +5 }, risk: 0.9, riskDays: 6,
          result: '你舔了几口糖水，然后绕开人群回了巢。' },
      ],
    },
    {
      id: 'old_forage', at: 310,
      title: '走得慢了',
      body: '你的足上沾满了干泥，几节已经磨秃了。草地的另一头还有食物，但路程越来越长。',
      options: [
        { t: '去远一点的草丛找最后的食物', hint: '食物↑ 体力↓',
          eff: { food: +15, health: -8 }, risk: 1.5, riskDays: 10,
          result: '你在草丛里找到一小块糖。你吃得很慢，回到巢口时天已经暗了。' },
        { t: '留在巢里，靠育儿室的食物', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 20,
          result: '你回到巢里，让同伴们喂了你几口。' },
      ],
    },
    {
      id: 'founding_split', at: 60, need: 'founding_cohort',
      title: '巢里只有一只蚁后',
      body: '这个巢刚建起来，蚁后只有你们这几只工蚁，食物却很少。幼虫还在等着喂食，你的肚子也是空的。',
      options: [
        { t: '把食物让给幼虫', hint: '体力↓ 幼虫↑', eff: { food: -8, health: +3 },
          result: '你把嘴里的草籽吐给了一只幼虫。巢里的同伴都在靠这一点点食物活下去。' },
        { t: '自己出去找食物', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.3, riskDays: 5,
          result: '你走出巢穴，穿过一片潮湿的草地，找到一小块蚜虫的排泄物。' },
      ],
    },
    {
      id: 'water_seek', at: 80, need: 'drought_nest',
      title: '土里的湿气',
      body: '巢里越来越干。你能感觉到地下有一层湿气，但要挖很久才能找到。',
      options: [
        { t: '往深处挖隧道，找湿土', hint: '安全↑ 食物↓', eff: { safety: +5, food: -5 }, risk: 0.8, riskDays: 10,
          result: '你们往下挖了很久，终于摸到一层潮湿的土。' },
        { t: '留在巢口，等露水', hint: '稳妥 · 食物少', eff: { food: -3 }, risk: 1.2, riskDays: 6,
          result: '你们守在巢口，等着早晨的露水。露水不多，但足够让你们不渴。' },
      ],
    },
  ],

  idle: [
    '育儿室里很暖，卵和幼虫挤在一起。',
    '地表的声音传不到很深的地方，巢里只有土层轻微的震动。',
    '隧道里很潮，墙上有一层薄薄的水汽。',
    '一颗小石子落在巢口的土上，工蚁们很快把它搬开了。',
    '远处的草根在土层里伸展，把土一点一点地撑开。',
    '巢里很安静，只有工蚁们在土层里来回走动的细微声音。',
    '一只工蚁在你身边停下，用触角碰了碰你，然后走开了。',
    '空气里有一股淡淡的蚁酸味道，很快就散了。',
  ],

  epitaph: '你是草地下一道隧道里的一只工蚁。你的一生在巢和草之间往返，而巢比你活得久。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'honeybee',
  name: '西方蜜蜂工蜂',
  en: 'Western honeybee (worker)',
  sci: 'Apis mellifera（西方蜜蜂）工蜂',
  emoji: '🐝',
  scene: 'hive',
  kind: 'farmed',
  tagline: '一生都在为一个蜂群工作，从没有见过一朵花开在自己的名下',

  birth: {
    sex: [['雌性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一张育虫区中央的巢脾', 4, {}],
        ['一张储满花蜜的巢脾边缘', 2, { food: +10 }],
        ['一张靠近蜂箱边缘的巢脾', 2, { food: -5 }],
        ['一个刚分蜂出去的新群', 1, { food: -10, risk: 1.2 }],
      ]},
      { label: '季节', options: [
        ['夏季，蜜源充足的时候', 9, {}],
        ['秋末，蜂群准备过冬的时候', 1, { set: 'winter', risk: 0.8 }],
      ]},
      { label: '品系', options: [
        ['意大利蜂（Apis mellifera ligustica），腹节上有明亮的黄色环带，性情温和', 4, { set: 'italian' }],
        ['卡尼鄂蜂（A. m. carnica），身体灰黑，冬天结团紧，春天繁殖很快', 3, { set: 'carnica', health: +3 }],
        ['巴克夫蜂（Buckfast），英国修道院育种的杂交品系，育种者想要的是温顺和抗病', 2, { set: 'buckfast', health: +5 }],
        ['非洲化杂交蜂，护巢性很强，守卫一有动静就全部扑上来', 1, { set: 'africanized', risk: 1.2 }],
      ]},
      { label: '养蜂方式', options: [
        ['传统木箱里的定居蜂群，养蜂人每年检查一次', 4, { set: 'hive', health: +3 }],
        ['规模化养蜂场的蜂群，每年被拖去转场授粉', 3, { set: 'migratory', food: -5, risk: 1.2 }],
        ['林子里树洞中的野生蜂群，没有人管', 1, { set: 'wild', food: +5, risk: 0.9 }],
      ]},
    ],
    siblings: 1500,
    siblingsLabel: '同一张巢脾上同批出房的工蜂',
    intro: '你是{sex}，但生殖器官发育不全，正常情况下不会产卵。你现在是一枚卵，在{出生地}，时间是{季节}。和你同批出房的工蜂大约有 {siblings} 只。',
  },

  stages: [
    { id: 'egg',     name: '卵',              from: 0,  unit: 'day' },
    { id: 'larva',   name: '幼虫',            from: 3,  unit: 'day' },
    { id: 'pupa',    name: '蛹',              from: 9,  unit: 'day' },
    { id: 'nurse',   name: '清洁与哺育',       from: 21, unit: 'day' },
    { id: 'builder', name: '蜡工与守卫',       from: 33, unit: 'day' },
    { id: 'forager', name: '采集',            from: 39, unit: 'day' },
  ],
  maturity: 21,
  maxAge: 63,

  survival: [[0,1],[3,0.92],[9,0.88],[21,0.84],[33,0.72],[39,0.55],[42,0.3],[50,0.1],[57,0.02],[63,0]],
  survivalNote: '从卵到羽化的存活率较高；夏季工蜂羽化后约活 3–6 周，采集期的死亡率最高。曲线按这些粗估，未经逐日实测。',

  init: { health: 80, food: 60, safety: 50 },
  foodDrain: 0,

  causes: [
    { id: 'sting', escape: false, w: 3, stages: ['builder','forager'], short: '蜇了入侵者后死去',
      text: '你的毒针扎进了它的皮肤，倒刺钩住了它。你想飞开，腹部却被扯断了，毒囊和针留在了它身上。' },
    { id: 'pesticide', escape: false, w: 3, stages: ['forager'], short: '农药中毒',
      text: '你在一片刚喷过药的田里采蜜。回巢的路上，你的神经开始抽搐，最后落在了巢门前的石板上。' },
    { id: 'exhaust', escape: false, w: 3, stages: ['forager'], short: '采集到筋疲力尽',
      text: '你的翅膀磨损得很厉害，飞了一整天。傍晚回巢，你爬到巢门口就再也没有起来。' },
    { id: 'varroa', escape: false, w: 2, stages: ['pupa','nurse','builder','forager'], short: '瓦螨与病毒',
      text: '瓦螨和它传播的病毒让你的身体变弱。你的翅膀变形，再也不能正常飞行。' },
    { id: 'drown', escape: false, w: 2, stages: ['forager'], short: '淹死在水源',
      text: '你在水槽边喝水，脚下的浮藻一滑，你落进了水里。翅膀被水浸透，你没能再飞起来。' },
    { id: 'predator', escape: true, w: 2, stages: ['builder','forager'], short: '被蜘蛛或鸟捕食',
      text: '一张蜘蛛网粘住了你的翅膀。蜘蛛慢慢地靠了过来，你挣扎的声音很快就停了。' },
    { id: 'cold', escape: false, w: 1, stages: ['nurse','builder','forager'], short: '温度太低',
      text: '巢里的温度降到了蜂团没法维持的地步。你和同伴们挤在一起，但你的肌肉还是慢慢地停了。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的翅膀越来越慢，最后停在了采集的路上。在一个夏天里，你已经飞了很多趟。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '你直立在一个六角形巢房的底部，像一粒小米。蜂王刚刚把你产在这里。' },
    { stages: ['egg'], w: 1, once: true, text: '三天之后，你的壳裂开，变成了一条白色的幼虫。' },
    { stages: ['larva'], w: 3, text: '工蜂们从头部的腺体里挤出乳白色的食物，一口一口喂给你。', eff: { food: +10 } },
    { stages: ['larva'], w: 2, text: '最开始的几天，你吃的是蜂王浆；之后是花粉和蜂蜜调成的食物。', eff: { health: +5 } },
    { stages: ['pupa'], w: 2, text: '巢房的蜡盖被封上了。你在里面吐丝结茧，身体慢慢变成了蛹。' },
    { stages: ['pupa'], w: 2, once: true, text: '一只瓦螨钻进了你所在的巢房，趴在你的身上吸食你的体液。',
      eff: { health: -10 },
      fact: '瓦螨原产亚洲蜜蜂，20 世纪上半叶转移到西方蜜蜂身上，之后随蜂群贸易扩散到全球（Rosenkranz 等 2010）' },
    { stages: ['pupa','nurse'], w: 1, text: '病毒随着瓦螨的叮咬进入你的身体。它会让翅膀畸形。',
      eff: { health: -8 },
      fact: '变形翅病毒（DWV）主要通过瓦螨传播，感染后翅膀会变形（de Miranda & Genersch 2010）' },
    { stages: ['nurse'], w: 3, text: '你羽化后的第一件事，是把空巢房清理干净，把碎屑和死蜂拖到巢外。', eff: { safety: +3 },
      fact: '工蜂的日龄分工按年龄依次换岗：先在巢内清理和哺育，之后才出去采集（Seeley 1982）' },
    { stages: ['nurse'], w: 3, text: '你趴在育虫区，用头部的腺体给幼虫喂食。你的头很热。', eff: { food: -5 } },
    { stages: ['nurse'], w: 2, text: '育虫区的温度要保持在三十多度。你用翅膀扇风，把热气扇到需要的巢房。', eff: { health: -3 } },
    { stages: ['nurse','builder'], w: 2, text: '蜂王从你身边爬过，一群工蜂围了上去，给它梳理、喂食。' },
    { stages: ['builder'], w: 3, text: '你的腹部下方长出了一片片蜡鳞。你把它们咬下来，嚼软，贴到巢房的边缘。', eff: { food: -5 } },
    { stages: ['builder'], w: 2, text: '一只蜡蛾的幼虫爬进了巢脾。你扑上去，把它推出了巢门。', eff: { safety: +5 } },
    { stages: ['builder'], w: 1, text: '巢门口的同伴们在振翅。一股刺鼻的香味飘了过来，所有守卫都竖起了腹部。', eff: { safety: -5 } },
    { stages: ['builder','forager'], w: 1, text: '一只蜘蛛在巢门口结了网。守卫们把它的丝扯断，把它赶走了。', eff: { safety: -5 } },
    { stages: ['forager'], w: 1, once: true, text: '你第一次出巢飞行。你在巢门前转了几圈，记住了它的位置，然后飞向了远处的花丛。' },
    { stages: ['forager'], w: 3, text: '你在油菜花里采蜜，蜜囊装满了，后腿上挂着两团花粉。', eff: { food: +15 } },
    { stages: ['forager'], w: 2, text: '一只燕子从头顶掠过，你贴着地面的叶子飞了好一段，才回到巢里。', eff: { safety: -10 } },
    { stages: ['forager'], w: 2, text: '花丛里有一只黄蜂在盘旋。你绕开了它，却飞错了方向，多花了不少时间。', eff: { food: -5 } },
    { stages: ['forager'], w: 1, text: '你的翅膀磨损了，飞行时有些吃力。', eff: { health: -5 } },
    { stages: ['forager'], w: 1, once: true, text: '养蜂人打开了蜂箱，点燃了烟熏器。冷烟让同伴们安静下来。他抽走了几张装满蜜的巢脾，留下了够过冬的蜂蜜。', eff: { food: -10 } },
    { stages: ['forager'], w: 1, text: '蜂群被装上卡车，运往远方的果园。那里的果树即将开花，你们要为它们授粉。', eff: { food: -5, safety: -5 } },
    { stages: ['forager'], w: 1, text: '你在一片刚割过的苜蓿田里，被一阵喷雾笼罩。你赶紧飞出了那片地，绒毛上还挂着雾滴。', eff: { safety: -10, health: -5 } },
    { stages: ['nurse'], w: 2, need: 'winter', text: '天气转凉。你和同伴们把蜂王围在中心，靠振翅产生的热量维持蜂团的温度。', eff: { safety: +10 } },
    { act: 'forage', stages: ['forager'], w: 3, text: '你把口器伸进一朵杜鹃的花冠，喝到一口甜汁，蜜囊慢慢鼓起来。', eff: { food: [10, 18] } },
    { act: 'forage', stages: ['forager'], w: 2, text: '你在一堆花粉里滚了一圈，后腿上很快挂满了花粉团。', eff: { food: [8, 14] } },
    { act: 'hide', stages: ['nurse','builder','forager'], w: 2, text: '你缩进两张巢脾之间的暗处，那里光线很弱，温度也稳。', eff: { safety: [6, 9] } },
    { act: 'hide', stages: ['builder','forager'], w: 1, text: '一只大黄蜂在巢门外飞过，你贴在巢壁上，直到它走远。', eff: { safety: [5, 8], food: -2 } },
    { act: 'rest', stages: ['nurse','builder','forager'], w: 2, text: '你趴在巢房的边缘，翅膀微微颤动。身体慢慢暖和下来。', eff: { health: [3, 6] } },
    { act: 'rest', stages: ['forager'], w: 1, text: '你在巢门口的石板上停了一会儿，腹部贴着凉凉的石头。', eff: { health: [2, 4], food: -3 } },
    { act: 'explore', stages: ['forager'], w: 2, text: '你离开熟悉的花丛，飞向一片没去过的果园。你在一片草地上空迷了路，绕了很久才回来。', eff: { food: [10, 14], safety: -5 } },
    { act: 'explore', stages: ['forager'], w: 1, text: '你飞过一条小河，水面反光很亮。你差一点撞上一根电线，急转了一下。', eff: { safety: -6 } },
    { stages: ['forager'], w: 2, need: 'italian', text: '你的腹节有明亮的黄色环带。巢门口的守卫看见你，只是让开了身子，没有拦你。', eff: { safety: +3 } },
    { stages: ['nurse'], w: 2, need: 'italian', text: '这一群的产卵很旺，育虫区的巢房里一排排挤满了幼虫。你的头腺很快就空了。', eff: { food: -8 } },
    { stages: ['forager'], w: 1, need: 'italian', text: '一片油菜花田里，你和同伴们一起飞，花粉很快就挂满了后腿。', eff: { food: +8 } },
    { stages: ['nurse','builder'], w: 2, need: 'carnica', text: '春天刚来，蜂群就开始扩张。育虫区比别的群早了一个星期，你是最早一批出房的工蜂。', eff: { food: +5 } },
    { stages: ['nurse','builder'], w: 2, need: 'carnica', text: '冷雨下了三天。蜂团收得很紧，你和同伴们贴着巢脾振翅保温，没有人离开。', eff: { health: +3, food: -5 } },
    { stages: ['forager'], w: 2, need: 'carnica', text: '你在一片刚开花的苜蓿田里采蜜，飞得很快。回巢后，蜜囊很快就空了。', eff: { food: +10 } },
    { stages: ['nurse'], w: 2, need: 'buckfast', text: '养蜂人掀开蜂箱盖，你没有蜇他。你只是爬到了巢脾的另一侧，继续清理巢房。', eff: { safety: +5 } },
    { stages: ['forager'], w: 2, need: 'buckfast', text: '一朵油菜花里挤满了同伴，你却不去争。你换到一处没人的花，慢慢地采。', eff: { food: +8, safety: +3 } },
    { stages: ['pupa','larva'], w: 1, need: 'buckfast', text: '一只瓦螨爬到了你所在的巢房边上。它没能钻进去，养蜂人检查时把它刷了出来。', eff: { health: +3 } },
    { stages: ['builder','forager'], w: 3, need: 'africanized', text: '一只浣熊扒开了蜂箱的盖子。守卫的数量比平时多得多，你们一起扑上去。它逃走了，巢门口还在嗡嗡地响。', eff: { safety: -5, health: -3 } },
    { stages: ['forager'], w: 2, need: 'africanized', text: '养蜂人经过时，你们一下子飞起来，追到了他的面罩上。烟熏器的烟没能压住这群蜂。', eff: { safety: -8 } },
    { stages: ['nurse','builder'], w: 1, need: 'africanized', text: '一只蜡蛾幼虫钻进了巢脾。守卫们很快把它围住，它没能钻出来。', eff: { safety: +3 } },
    { stages: ['nurse','forager'], w: 2, need: 'hive', text: '养蜂人在春天加了一层巢础，木框缝隙用蜂胶封好了。巢里的空间够大，你不用挤。', eff: { safety: +5 } },
    { stages: ['builder','forager'], w: 2, need: 'hive', text: '夏末，养蜂人把蜂箱搬到了山坡上。那里的蜜源比山下少，你要飞更远才能找到花。', eff: { food: -5 } },
    { stages: ['forager'], w: 1, once: true, need: 'hive', text: '养蜂人在蜂箱里放了一小碗糖浆。你们很快把它搬空，巢里一时都是甜香。', eff: { food: +10 } },
    { stages: ['forager'], w: 3, need: 'migratory', text: '你们被装上卡车，颠簸了一整夜。到达果园时，巢里的蜂蜜已经少了一截。', eff: { food: -10, health: -3 } },
    { stages: ['nurse','builder'], w: 2, need: 'migratory', text: '到了新的地方，守卫们还没熟悉方向。有几只工蜂飞回了老蜂箱的位置，找不到自己的巢。', eff: { safety: -5 } },
    { stages: ['forager'], w: 2, need: 'migratory', text: '果园里满树都是苹果花。你整天在花间飞，一朵一朵地授粉，翅膀磨损得很快。', eff: { food: +10, health: -4 } },
    { stages: ['nurse','builder'], w: 2, need: 'wild', text: '树洞里的巢是你们自己筑的，蜡层很厚，外面的风吹不进来。你在暗处安心地清理巢房。', eff: { safety: +8 } },
    { stages: ['forager'], w: 3, need: 'wild', text: '你在林缘找到一棵椴树，树上的花开得满满的。你每天来回地飞，蜜囊很快就装满了。', eff: { food: +15 } },
    { stages: ['builder','forager'], w: 2, need: 'wild', text: '啄木鸟在树干上叩了一整个早晨，震动一下一下传进巢里。守卫们守在门口，没有离开。', eff: { safety: -8 } },
    { stages: ['nurse','builder','forager'], w: 2, need: 'runt', text: '你的个子比同伴小一圈。挤进巢房时，你总是排在最后，育虫区的热量也轮不到你。', eff: { health: -3, food: -3 } },
    { stages: ['builder','forager'], w: 2, need: 'cautious', text: '你在巢门口停了很久，看了几遍才敢飞出去。同伴们早已飞远，你的蜜囊还是空的。', eff: { food: -5, safety: +5 } },
    { stages: ['forager'], w: 2, need: 'robust', text: '一阵侧风把你吹偏了。你的翅膀又厚又结实，顶着风一直飞到了花丛。', eff: { food: +5, health: +2 } },
    { stages: ['forager'], w: 2, need: 'curious', text: '你离开常去的花丛，绕到一个从没见过的水槽边。你在水面的花瓣上停了很久，才飞回去。', eff: { food: +5 } },
  ],

  opening: {
    title: '蜂王在选巢房',
    body: '你还是一枚卵，直立在一个六角形巢房的底部。蜂王正在巢脾上绕圈，决定下一个产卵的巢房。育虫区中央的温度最稳，幼虫能按时发育；巢脾边缘靠近蜂箱壁，温度低，也离门口更近，容易遇到冷风和入侵者。',
    options: [
      { t: '产在育虫区中央的巢房', hint: '温度稳 · 拥挤', eff: { food: +5, health: +5 }, risk: 0.8, riskDays: 9,
        result: '你被产在一圈暖和的巢房中间。周围的巢房里全是幼虫，工蜂很快就来喂你。' },
      { t: '产在巢脾边缘的巢房', hint: '温度低 · 离门口近', eff: { food: +10, health: -5 }, risk: 1.3, riskDays: 9,
        result: '你被产在靠外的一个巢房里。这里比中央凉，工蜂来得晚了一些，你的发育也慢了一点。' },
    ],
  },
  actions: {
    forage:  { name: '飞去采蜜', desc: '离开巢门，去找花蜜和花粉，装满蜜囊后飞回来。', stages: ['forager'], text: ['你在花丛之间来回飞，寻找下一朵花。', '花蜜的甜味越来越浓，蜜囊慢慢鼓起来。', '后腿上挂着两团花粉，你的飞行变得有些沉。'] },
    hide:    { name: '躲进巢脾的暗处', desc: '缩进巢房与巢房之间，避开热风和入侵者。', stages: ['nurse','builder','forager'], text: ['你缩进两张巢脾之间的暗处，那里的光线很弱。', '巢门外的振翅声一阵阵传进来。', '巢房里的温度很稳，你安静地靠着蜂蜡。'] },
    rest:    { name: '在巢房边上歇一歇', desc: '停下来，让翅膀和身体休息一下。', stages: ['nurse','builder','forager'], text: ['你趴在巢房的边缘，翅膀微微颤动。', '身体慢慢暖和下来，你的动作也慢了。', '周围的同伴忙着自己的事，没有人打扰你。'] },
    explore: { name: '飞到巢外的远处', desc: '离开常去的花丛，去一片没去过的地方找花。', stages: ['forager'], text: ['你离开常去的花丛，朝着风吹来的方向飞。', '下面的田野变成了一片陌生的颜色。', '你在一片草地上空转了几圈，才找到回巢的路。'] },
    mate:    false,
  },
  decisions: [
    {
      id: 'intruder', at: 37,
      title: '巢门前的入侵者',
      body: '一只大胡蜂落在巢门前，它的体型是你的两倍。它的下颚咬住了一只同伴的翅膀。',
      options: [
        { t: '蜇下去', hint: '保护巢门 · 你会死',
          kill: 1, cause: 'sting', eff: { safety: +10 },
          result: '你的毒针扎了进去。你想飞走，腹部却被扯断了。它的翅膀还在扑打，你的身体已经落在了巢门前。' },
        { t: '退回巢里', hint: '安全 · 巢门让出去',
          eff: { safety: -5 },
          result: '你和同伴们挤在巢门里，把入口让给了它。它在门口停了一会儿，然后飞走了。' },
      ],
    },
    {
      id: 'far_forage', at: 44,
      title: '风里有一股药味',
      body: '远处有一大片油菜花，花蜜很多。但风里有一股刺鼻的气味，有人在那片地附近喷洒农药。',
      fact: '亚致死剂量的新烟碱类农药会降低蜜蜂的觅食成功率和存活率（Henry 等 2012，Science）',
      options: [
        { t: '飞去那片大田', hint: '花蜜多 · 农药风险↑',
          kill: 0.15, cause: 'pesticide', eff: { food: +30 },
          result: '花蜜很多，你装满了蜜囊。回巢的路上，你的步伐开始乱了，你还是落在了巢门前的石板上。' },
        { t: '去林边的野花', hint: '稳妥 · 花蜜少',
          eff: { food: +10, safety: +5 },
          result: '野花不多，但很干净。你装了一半蜜囊，安全地回了巢。' },
      ],
    },
    {
      id: 'dance', at: 46,
      title: '一处花很多的地方',
      body: '你刚卸完花蜜，巢里的同伴围了过来。你在巢脾上找到了一块空地，你要决定：把花的方向告诉大家，还是自己悄悄去。',
      fact: '卡尔·冯·弗里施（von Frisch）发现蜜蜂用摇摆舞告诉同伴食物的方向和距离，他因动物行为研究获得 1973 年诺贝尔生理学或医学奖（von Frisch 1967；Nobel Prize 1973）',
      options: [
        { t: '跳摇摆舞', hint: '告诉大家方向和距离 · 体力↓',
          eff: { food: +15 }, risk: 1.1, riskDays: 1,
          result: '你的腹部左右摆动，直线段指向太阳偏一个角度。你跳了二十多圈，周围的同伴开始离开巢门。' },
        { t: '安静地自己去', hint: '不分享 · 你自己的花蜜',
          eff: { food: +5 },
          result: '你没有跳舞，径直飞回了那片花丛。' },
      ],
    },
    {
      id: 'water', at: 41,
      title: '水槽边的一小块浅水',
      body: '你口渴了。水槽边有一块露出水面的石头，石头下面的水很深，石头周围的浮藻却很滑。',
      options: [
        { t: '停在石头上喝水', hint: '很近 · 小心滑倒',
          kill: 0.05, cause: 'drown', eff: { food: +5 },
          result: '你伸出舌头，喝了一口水。浮藻动了一下，你还是飞了起来。' },
        { t: '飞去远处的水源', hint: '远 · 体力↓',
          risk: 1.3, riskDays: 1, eff: { food: +5 },
          result: '你飞了很久，找到了一处干净的水洼。回来的路上，你很累。' },
      ],
    },
    {
      id: 'winter', at: 30, need: 'winter',
      title: '天越来越冷',
      body: '秋末，巢里的温度开始往下掉。你的身体里没有多余的能量可以浪费。你要决定：留在蜂团里取暖，还是出去找最后的花。',
      fact: '越冬蜂在秋天羽化，可以活好几个月，而夏季工蜂只能活几周（Winston 1987）',
      options: [
        { t: '留在蜂团里取暖', hint: '寿命↑ 风险↓',
          risk: 0.6, riskDays: 60, eff: { food: -5, safety: +10 },
          result: '你挤进蜂团的中心，翅膀震颤，给蜂王和幼虫提供热量。' },
        { t: '出去找最后的花', hint: '食物↑ 风险↑',
          risk: 1.8, riskDays: 10, eff: { food: +15 },
          result: '你飞出去了。路边的花大多已经收拢，你仍然找到了一小片。' },
      ],
    },
    {
      id: 'brood_heat', at: 25,
      title: '育虫区太热了',
      body: '育虫区的温度超出了该有的范围，幼虫的巢房在发烫。你可以去巢脾边上扇风，也可以钻进储蜜的巢房，多吃一些蜜。',
      options: [
        { t: '去扇风降温', hint: '保护幼虫 · 体力↓',
          eff: { safety: +5, health: -5 }, risk: 0.9, riskDays: 4,
          result: '你趴到育虫区的巢脾边，翅膀快速振动，把热风扇向幼虫那一侧。' },
        { t: '去储蜜的巢房吃蜜', hint: '饱食↑ 离开育虫区',
          eff: { food: +15 }, risk: 1.2, riskDays: 4,
          result: '你钻进储蜜的巢房，把蜜囊灌满，然后回到育虫区。' },
      ],
    },
    {
      id: 'spider_web', at: 51,
      title: '花丛里的一张网',
      body: '一只蜘蛛在花丛边缘结了一张网，网上挂着几片花瓣。花蜜很多，但网就在花朵的正下方。',
      options: [
        { t: '落在花上吸蜜', hint: '食物↑↑ 被网粘住的风险↑',
          eff: { food: +20 }, kill: 0.2, cause: 'predator',
          result: '你吸饱了蜜，又飞回了巢。那张网在你身后轻轻地晃。' },
        { t: '去另一丛花', hint: '稳妥 · 花蜜少',
          eff: { food: +5, safety: +5 },
          result: '你绕开了那张网，在另一丛花上采了一小会儿。' },
      ],
    },
    {
      id: 'worn_wings', at: 57,
      title: '翅膀磨损了',
      body: '你的翅膀边缘已经磨出了缺口，飞行时有些摇晃。你可以继续出去采蜜，也可以回到巢里，在巢房之间歇一歇。',
      options: [
        { t: '继续出去采蜜', hint: '食物↑ 体力↓',
          eff: { food: +20, health: -5 }, risk: 1.5, riskDays: 5,
          result: '你又飞了两趟。最后一趟回巢的路上，你几乎是靠惯性落在了巢门口。' },
        { t: '回巢歇着，照顾幼虫', hint: '体力↑ 采集↓',
          eff: { health: +5, food: -5 }, risk: 0.8, riskDays: 5,
          result: '你回到巢里，在育虫区的边缘待了几天，帮着喂幼虫。' },
      ],
    },
    {
      id: 'africanized_guard', at: 34, need: 'africanized',
      title: '守卫的警报',
      body: '巢门前的嗡嗡声突然变了调。守卫们一个接一个地扑向每一个靠近的影子，连巢脾上的工蜂也冲了出来。你可以加入它们，也可以躲在巢房的深处。',
      options: [
        { t: '加入守卫，扑向靠近的影子', hint: '护巢 · 风险↑',
          eff: { safety: +5 }, risk: 1.3, riskDays: 3,
          result: '你和守卫们一起冲到巢门口，蜇了几个靠近的影子。你的身上沾满了别人的毒液味。' },
        { t: '躲在巢房深处', hint: '安全↑ 护巢↓',
          eff: { safety: +5, food: -3 }, risk: 0.9, riskDays: 3,
          result: '你缩进巢房的深处，听着外面的骚动慢慢平息下来。' },
      ],
    },
    {
      id: 'migratory_drift', at: 40, need: 'migratory',
      title: '一个陌生的蜂箱',
      body: '卡车把你们放在果园外的一排蜂箱之间。隔壁的一个蜂箱里，蜜的甜味扑面而来，门口有陌生蜜蜂来回进出。你要决定：钻进去，还是守住自己的门口。',
      options: [
        { t: '钻进隔壁的蜂箱', hint: '饱食↑ 带病风险↑',
          eff: { food: +5 }, risk: 1.3, riskDays: 6,
          result: '你从门缝钻进一个陌生的蜂箱。里面的蜂蜜很多，但你闻到了别的群的味道。' },
        { t: '守在自己的门口', hint: '稳妥 · 食物少',
          eff: { food: -5, safety: +5 },
          result: '你守在原来的门口。几天后，卡车又把蜂箱搬走了，你没有跟着别的蜂走。' },
      ],
    },
    {
      id: 'wild_swarm', at: 22, need: 'wild',
      title: '树洞里要分蜂了',
      body: '树洞里挤满了工蜂，巢房都装满了幼虫。一大群工蜂已经围在蜂王身边，准备带着她飞出去另找新巢。你可以跟着它们走，也可以留在旧巢里。',
      options: [
        { t: '跟着分蜂群飞出树洞', hint: '换新巢 · 风险↑',
          eff: { food: -5 }, risk: 1.4, riskDays: 5,
          result: '你和一大群同伴从树洞里涌出来，落在一根枝条上，结成一团暂时歇脚。' },
        { t: '留在旧巢里', hint: '稳妥 · 巢房挤',
          eff: { safety: +5, food: -3 },
          result: '你留在旧树洞里。新蜂王在另一处慢慢长大，老巢里空出了一大片巢房。' },
      ],
    },
    {
      id: 'bold_scout', at: 36, need: 'bold',
      title: '邻近蜂箱的甜味',
      body: '隔壁的蜂箱门口飘来一股甜味，守卫们都在门口来回巡视。你的花丛还在远处，那里的花蜜和平时差不多。',
      options: [
        { t: '去隔壁的蜂箱偷蜜', hint: '饱食↑↑ 风险↑',
          eff: { food: +25 }, risk: 1.5, riskDays: 3,
          result: '你钻进了一个陌生的巢门，把蜜囊装满。守卫发现你时，你已经飞了出来，身上留下了几道咬痕。' },
        { t: '去自己的花丛', hint: '稳妥',
          eff: { food: +5 },
          result: '你飞去熟悉的花丛，装了平常的蜜，然后安静地回了巢。' },
      ],
    },
  ],

  idle: [
    '巢里很暗，只有巢门透进一点光。空气里是蜂蜜和蜂蜡的味道。',
    '蜂箱里传来一阵低沉的嗡嗡声，所有同伴都在振翅。',
    '巢房里比外面暖和，温度很稳定。',
    '远处的花丛在风里摇动，花香时有时无。',
    '一只蜂王的信息素在空气里弥漫，同伴们都朝它聚拢。',
    '巢脾上的六角形巢房一排排地排开，有的封着盖，有的还空着。',
    '巢脾的另一头，一只工蜂正在清理巢房。',
    '外面的风吹过巢门，又很快停了。',
  ],

  epitaph: '你一生没有产过一枚卵，却帮几百朵花结了果。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'mosquito',
  name: '白纹伊蚊',
  en: 'Asian tiger mosquito',
  sci: 'Aedes albopictus（白纹伊蚊）',
  emoji: '🦟',
  scene: 'city',
  kind: 'wild',
  tagline: '从一圈积水开始，一生只有几周，白天活动的雌蚊会吸血',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一只废弃轮胎的内壁', 4, {}],
        ['一个花盆托盘的内壁', 3, { food: +5 }],
        ['屋顶雨水桶的内壁', 3, { food: +10 }],
        ['一段排水沟的边壁', 2, { food: -5, risk: 1.2 }],
      ]},
      { label: '出生季节', options: [
        ['盛夏的雨季，积水多，水温高，发育快', 4, { food: +5, set: 'summer_rain' }],
        ['秋末的一场冷雨，日照一天比一天短', 2, { food: -5, risk: 1.2, set: 'autumn_cold' }],
        ['连年干旱的那个夏天，积水一次次被晒干', 1, { food: -10, risk: 1.4, set: 'drought_yr' }],
      ]},
      { label: '血统', options: [
        ['本地已经繁衍多代的老家系', 4, {}],
        ['随一批旧轮胎从外地运来的家系', 1, { risk: 0.9, set: 'imported_eggs' }],
        ['对拟除虫菊酯类杀虫剂有抗性的家系', 2, { set: 'resistant_strain' }],
      ]},
    ],
    siblings: 50,
    siblingsLabel: '同一次产下的卵',
    intro: '你是一粒细长的黑色卵，粘在{出生地}上，紧贴着水线上方。你将来是{sex}。和你同一次产下的卵大约有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',   name: '卵',         from: 0,    unit: 'hour' },
    { id: 'larva', name: '幼虫（4 龄）', from: 2,    unit: 'day'  },
    { id: 'pupa',  name: '蛹',         from: 9,    unit: 'hour' },
    { id: 'adult', name: '成虫',       from: 10.5, unit: 'day'  },
    { id: 'old',   name: '老年',       from: 24,   unit: 'day'  },
  ],
  maturity: 12,
  maxAge: 36,

  survival: [[0,1],[0.5,0.85],[2,0.6],[5,0.35],[9,0.2],[10.5,0.12],[14,0.08],[20,0.04],[26,0.012],[32,0.003],[36,0]],
  survivalNote: '野外蚊子的存活数据很少；此曲线按实验室寿命（约 30–45 天）与幼虫期高死亡率粗估',

  init: { health: 65, food: 50, safety: 40 },
  foodDrain: 0.5,

  causes: [
    { id: 'swat', escape: true, w: 4, stages: ['adult','old'], short: '被手掌拍死',
      text: '你的口器刚刺进皮肤，一只手掌就落了下来。你的腹部被压扁，血还没吸完。' },
    { id: 'naiad', escape: true, w: 2, stages: ['larva'], short: '被蜻蜓稚虫捉住',
      text: '一只蜻蜓稚虫在水底伸出下颚，把你从落叶下面捞了出来。' },
    { id: 'mosquitofish', escape: true, w: 3, stages: ['larva'], short: '被食蚊鱼吞下',
      text: '一条食蚊鱼从水面下冲上来，你还没来得及下沉，就被它吸进了嘴里。' },
    { id: 'bti', escape: false, w: 2, stages: ['larva'], short: '被苏云金杆菌毒素毒死',
      text: '你吞下的一粒细菌晶体在中肠的碱性液体里溶解，释放出的毒素打穿了你的肠壁。' },
    { id: 'starve', escape: false, w: 1, stages: ['larva'], short: '水被晒干，没有食物',
      text: '最后一小摊水也干了。你挤在碎屑里，吃不到东西，身体慢慢变轻。' },
    { id: 'spider', escape: true, w: 2, stages: ['adult','old'], short: '被蜘蛛网粘住',
      text: '你撞进一张蜘蛛网。丝粘住了你的翅膀和腿，你挣了很久，直到蜘蛛爬了过来。' },
    { id: 'swallow', escape: true, w: 2, stages: ['adult','old'], short: '被燕子在空中捕走',
      text: '一只燕子张着嘴从你下方的空气里冲过。你还没转向，就消失在它的喙里。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的翅膀磨损了，腿也不听使唤。你停在墙角，慢慢不再动了。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '你的壳在干燥的空气里变硬，但里面的胚胎仍然在慢慢发育。' },
    { stages: ['egg'], w: 2, text: '夜里很凉。你和几十枚同类的卵一起，安静地等待下一次注水。' },
    { stages: ['egg'], w: 1, once: true, text: '一场雨落进了容器，水面慢慢涨上来，漫过了你所在的那一圈。' },
    { stages: ['larva'], w: 4, text: '你挂在水面下，身体倒吊着，尾端的呼吸管伸出水面，吸进一口空气。', eff: { health: +2 } },
    { stages: ['larva'], w: 3, text: '你用口器扫动水里的细菌和藻类，一口一口地过滤着。', eff: { food: [8, 15] } },
    { stages: ['larva'], w: 2, text: '你蜕了一次皮，从一龄长到了二龄。', eff: { health: +5 } },
    { stages: ['larva'], w: 2, text: '一片叶子落在水面上，你身边的光一下子暗了。你往水底沉了一下。', eff: { safety: -5 } },
    { stages: ['larva'], w: 1, text: '水在慢慢变少。你挤在最后一小摊水里，吃着沉下来的碎屑。', eff: { food: -10, health: -5 } },
    { stages: ['larva'], w: 1, once: true, text: '你蜕完最后一次皮，成了四龄幼虫。身体变粗了，颜色也深了一些。', eff: { health: +5 } },
    { stages: ['larva'], w: 1, text: '一只蜻蜓稚虫在水底缓慢地爬。它张开下颚时，你身边的几条幼虫都不见了。', eff: { safety: -10 } },
    { stages: ['pupa'], w: 3, text: '你不再进食。身体弯成一个逗号，靠着两根呼吸管浮在水面下。' },
    { stages: ['pupa'], w: 1, text: '水面的光线变了，你背上的壳慢慢裂开。' },
    { stages: ['adult'], w: 1, once: true, text: '你从蛹壳里爬出来，停在水边的一片叶子上，等翅膀变硬。' },
    { stages: ['adult'], w: 4, text: '你停在一丛花上，把口器伸进花蜜里。糖分让你的身体暖了起来。', eff: { food: [10, 18] } },
    { stages: ['adult'], w: 2, need: 'male', text: '傍晚，一群雄蚊在一根竹竿周围绕着圈飞。你加入其中，等雌蚊飞进来。' },
    { stages: ['adult'], w: 2, text: '一只燕子从头顶俯冲下来。你几乎是靠本能转向，翅膀划出一道急弯。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, text: '阳光很亮，你在一片树叶的阴影里停了一会儿。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你吸饱了血。腹部鼓起来，颜色变成深红，接下来几天你只想找一个安静的地方。', eff: { food: +20, health: +5 } },
    { stages: ['adult'], w: 2, need: 'female', text: '你在一个积了水的旧轮胎内壁上产卵，每一粒都紧贴着水线上方。你产下了 {n} 枚卵。', eff: { offspring: [30, 60] } },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你第一次产卵，产下了 {n} 枚卵。', eff: { offspring: [40, 70] } },
    { stages: ['adult','old'], w: 2, text: '一张蜘蛛网挂在你飞过的路上。你撞进去，腿上粘满了丝。', eff: { health: -8, safety: -8 } },
    { stages: ['adult','old'], w: 1, text: '下了一下午的雨。你躲在屋檐下的一条缝里，听着水滴一滴一滴落下。', eff: { safety: +5 } },
    { stages: ['old'], w: 2, text: '你的翅膀磨损了，每次起飞都比之前慢一些。', eff: { health: -6 } },
    { stages: ['old'], w: 1, need: 'female', text: '你的卵已经产完。你安静地停在墙角，等天色暗下来。', set: 'spent' },
    { act: 'forage', stages: ['adult','old'], need: 'female', w: 3, text: '你在一块皮肤上找到一小根细小的血管，口器刺进去，血一股一股地涌进来。', eff: { food: [12, 20] } },
    { act: 'forage', stages: ['adult','old'], need: 'female', w: 2, text: '你刚落下，皮肤就被人拍了一下。你抖了抖翅膀，又飞到另一条腿上，没有吸到血。', eff: { food: -3, safety: -5 } },
    { act: 'hide', stages: ['adult','old'], w: 2, text: '你躲进屋檐的阴影里，夜里的热气散不出去，你就一直待在那里。', eff: { safety: [6, 10], food: -2 } },
    { act: 'hide', stages: ['adult','old'], w: 1, text: '你停在窗纱背面的阴影里，屋子里的灯光透过来，一闪一闪的。', eff: { safety: [4, 8] } },
    { act: 'rest', stages: ['adult','old'], w: 2, text: '你停在墙角的阴影里，翅膀收拢在背上，一动不动。', eff: { health: [3, 6] } },
    { act: 'rest', stages: ['adult','old'], w: 1, text: '你在晾着的毛巾边停了很久，身体慢慢冷下来。', eff: { health: [2, 4] } },
    { act: 'explore', stages: ['adult','old'], w: 2, text: '你飞出了院子，穿过一条街。城市的气味一层一层地涌过来，你的触角不停地转动。', eff: { food: [5, 8], safety: -8 } },
    { act: 'explore', stages: ['adult','old'], w: 1, text: '你飞进一片绿化带，那里有很多开花的灌木，甜味隔着很远都能闻到。', eff: { food: [12, 18] } },
    { act: 'mate', stages: ['adult'], need: 'female', w: 2, text: '你在一个积着雨水的旧轮胎边上产下了 {n} 枚卵。', eff: { offspring: [30, 60] } },
    { act: 'mate', stages: ['adult'], need: 'female', w: 1, text: '你挑了一个花盆托盘，把卵贴在水线上方。卵很小，很快就看不清了。', eff: { offspring: [25, 45] } },
    { stages: ['egg','larva'], need: 'summer_rain', w: 3, text: '这一带连着下了好几场雨，容器里的水几乎没有断过。同批的卵一下子全孵了，水里很快挤满了幼虫。', eff: { food: -5 } },
    { stages: ['larva'], need: 'summer_rain', w: 3, text: '水温一天比一天高，你蜕皮的间隔比别处同龄的幼虫短了一截。', eff: { health: +3 } },
    { stages: ['larva'], need: 'summer_rain', w: 2, text: '一场暴雨把容器灌满了，溢出的水带着落叶和细菌一起冲下来。你在碎屑里吃得很饱。', eff: { food: [10, 15] } },
    { stages: ['egg'], need: 'autumn_cold', w: 3, text: '天黑得越来越早。你所在的那一圈水越来越凉，你的发育慢了下来，像是在等什么。' },
    { stages: ['larva'], need: 'autumn_cold', w: 3, text: '水越来越凉，你吃得越来越慢。旁边一条幼虫停止了摆动，慢慢沉到碎屑下面。', eff: { food: -8, health: -4 } },
    { stages: ['adult'], need: 'autumn_cold', w: 2, text: '秋天的夜里下了霜。你停在墙角的瓦缝里，翅膀上结了一层薄薄的水汽，动作慢得像还在水里。', eff: { health: -5, safety: +3 } },
    { stages: ['egg','larva'], need: 'drought_yr', w: 4, text: '几天没下雨，水面一天比一天低。你所在的那一圈水线往下退，身边的壁露出来，干得发白。', eff: { health: -5 } },
    { stages: ['larva'], need: 'drought_yr', w: 3, text: '水快没了，你在湿润的碎屑里挣扎。你停止了进食，身体变得又细又干。', eff: { food: -12 } },
    { stages: ['larva'], need: 'drought_yr', w: 2, once: true, text: '有人把这个容器倒空，第二天又灌满了水。你在新水里翻了个身，吸进了一口空气。', eff: { food: +15, health: +3 } },
    { stages: ['egg'], need: 'imported_eggs', w: 3, text: '你是随一堆旧轮胎从很远的地方来的。运输的那些日子里，你的卵在干燥的橡胶缝里躺了好几周。' },
    { stages: ['larva'], need: 'imported_eggs', w: 3, text: '这里的幼虫和你不是同一个家系。它们吃得慢，很少抢你的碎屑，你反而吃得比别处多些。', eff: { food: +5 } },
    { stages: ['adult'], need: 'imported_eggs', w: 2, text: '你飞进一个陌生的街区，那里的人没有在意你。你落在一条小腿上，吸到了第一口血。', eff: { food: +10 } },
    { stages: ['larva'], need: 'resistant_strain', w: 3, text: '隔壁的花园喷了药，药水顺着雨水流进了你的容器。水面浮起一层油膜，身边的幼虫一个接一个翻了身。你还在动。', eff: { health: -3 } },
    { stages: ['adult','old'], need: 'resistant_strain', w: 3, text: '屋里喷了杀虫剂，白雾在灯光下慢慢散开。你停在墙角没有动，雾落在你身上，你的腿还能收紧。', eff: { health: -2 } },
    { stages: ['adult'], need: 'resistant_strain', w: 2, text: '一只同伴在你旁边抽搐着掉下去。你从它身边飞过，翅膀一下都没有乱。', eff: { safety: +3 } },
    { stages: ['adult'], need: 'bold', w: 2, text: '你直接落在一个人的手背上，还没来得及刺下去，手就甩了过来。你飞回空中，又落了下去。', eff: { food: +5, safety: -5 } },
    { stages: ['adult'], need: 'cautious', w: 2, text: '你在一个人的呼吸边上停了很久，直到它翻了个身，你才慢慢飞开。', eff: { safety: +5 } },
    { stages: ['larva'], need: 'curious', w: 2, text: '水面上浮着一片彩色的油膜，你好奇地去碰它，身体粘在上面，挣了很久才出来。', eff: { health: -4 } },
    { stages: ['larva'], need: 'runt', w: 2, text: '你比身边的同伴都小一圈。碎屑被冲进水里时，你总是抢不到。', eff: { food: -5 } },
    { stages: ['larva'], need: 'robust', w: 2, text: '你比同伴粗壮，挤过来的幼虫被你顶开，你占住了一块最好的碎屑。', eff: { food: +6 } },
  ],

  opening: {
    title: '母亲在找产卵的水',
    body: '你还是一粒细长的黑色卵，还没有孵化。母亲停在花盆边缘，正在选一个能积水的地方。旧轮胎里的水深，又有遮挡，但不一定有食物；花盆托盘里的水浅，细菌多，却可能几天就晒干。',
    options: [
      { t: '产在旧轮胎内壁的水线上方', hint: '水深 · 食物少', eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 5,
        result: '你被产在一圈湿壁上，紧贴着水线上方。下一场雨落进来，你就会孵化。' },
      { t: '产在花盆托盘的浅水边', hint: '饱食↑ 水会先干', eff: { food: +15 }, risk: 1.3, riskDays: 5,
        result: '你被产在托盘的内壁。细菌很多，但托盘里的水浅，几天之后它可能就干了。' },
    ],
  },
  actions: {
    forage:  { name: '找人吸血', desc: '雌蚊顺着二氧化碳、体温和汗味飞过去，找到皮肤就刺进去。只有雌蚊吸血，雄蚊不在此行动中。', stages: ['adult','old'], need: 'female', text: ['你顺着二氧化碳的气味飞。空气很潮，热气一阵阵从屋子里飘出来。', '你在空中绕了几圈，靠近一个温热的地方。', '一只手掌在你附近挥了一下，你立刻侧飞开。'] },
    hide:    { name: '躲进阴影里', desc: '躲到屋檐、墙角或叶子背面的阴影里，等天色变化。', stages: ['adult','old'], text: ['你躲进一处屋檐的阴影里，外面的热气散不进来。', '远处有人开门，灯光一下子亮了，又暗了。', '你的翅膀收拢在背上，一动不动。'] },
    rest:    { name: '停在墙角不动', desc: '停下来，等身体恢复。', stages: ['adult','old'], text: ['你停在墙角的一块阴影里，翅膀收在背上。', '身体慢慢冷下来，你的动作变慢了。', '外面的城市声音传过来，又慢慢远去。'] },
    explore: { name: '飞去街区', desc: '离开这一片水，飞进城市里找花、找人。', stages: ['adult','old'], text: ['你飞出了院子，穿过一条街。', '城市的气味一层一层地涌过来。', '你飞过一排晾晒的衣服，又落回了路灯边。'] },
    mate:    { name: '产卵', desc: '雌蚊在积水的容器内壁上产卵，每粒卵都贴在水线上方。', stages: ['adult'], need: 'female', done: '你在积水的容器内壁上产下了 {n} 枚卵。' },
  },
  brood: [30, 60],
  decisions: [
    {
      id: 'fish', at: 4,
      title: '水里有一条鱼',
      body: '一条食蚊鱼在水面下来回游动，尾巴一摆一摆。水面很亮，水底的落叶很暗。',
      options: [
        { t: '潜到水底的落叶下', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -10 }, risk: 0.6, riskDays: 1,
          result: '你贴着落叶的背面，一动不动，直到鱼游开。' },
        { t: '留在水面吸气', hint: '饱食↑ 风险↑',
          eff: { food: +15 }, risk: 1.8, riskDays: 1, kill: 0.2, cause: 'mosquitofish',
          result: '你吸了几口气，又吃了一会儿细菌，鱼没有再回来。' },
      ],
    },
    {
      id: 'bite', at: 12, need: 'female',
      title: '一只手臂',
      body: '你闻到一股混合了乳酸和体温的气味。院子里有一个人坐着乘凉，一条手臂露在外面。旁边还有一条狗趴在阴影里。',
      fact: '只有雌蚊吸血，血液里的蛋白质用于发育卵；雄蚊只吸食植物的花蜜（Clements 1992）',
      options: [
        { t: '落在手臂上吸血', hint: '血量大 · 被拍死的风险↑',
          eff: { food: +30, health: +5 }, kill: 0.25, cause: 'swat',
          result: '你吸饱了血，趁对方还没反应过来，悄悄飞走了。' },
        { t: '转向那条狗', hint: '血量少 · 更安全',
          eff: { food: +15 }, risk: 0.7, riskDays: 1,
          result: '狗的毛很厚，你找到一小块皮肤，吸了一点血。' },
      ],
    },
    {
      id: 'nectar', at: 11,
      title: '一丛开花的灌木',
      body: '路边的灌木开满了小白花，花蜜的甜味很浓。你的身体还很轻，翅膀上的水汽刚刚干透。',
      options: [
        { t: '停下来吸花蜜', hint: '饱食↑ 停留久一点',
          eff: { food: +25 }, risk: 1.2, riskDays: 1,
          result: '你停在花丛里吸了很久，直到肚子鼓起来。' },
        { t: '直接飞走', hint: '保持节奏',
          eff: { food: -5 }, result: '你没有停留，朝着风吹来的方向飞去。' },
      ],
    },
    {
      id: 'lay', at: 15, need: 'female',
      title: '一个能积水的容器',
      body: '一个积了雨水的花盆托盘，水面清澈，内壁湿润。你的卵巢里还有一批卵等着产。',
      options: [
        { t: '在这里产卵', hint: '后代↑ 有被发现的风险',
          eff: { offspring: [40, 60] }, risk: 1.1, riskDays: 2,
          result: '你把一批卵贴在水线上方，然后飞走了。' },
        { t: '继续寻找更好的容器', hint: '等待 · 风险↑ 饥饿↑',
          eff: { food: -5 }, risk: 1.3, riskDays: 3,
          result: '你又飞了一段，找到一个更深的桶，可里面的水已经晒干了。' },
      ],
    },
    {
      id: 'noon', at: 17,
      title: '中午的阳光',
      body: '正午，外面的光很亮，热风吹得窗纱发烫。你看见一间没有开灯的屋子，角落又凉又暗。',
      options: [
        { t: '待在屋里不动', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -5 }, risk: 0.7, riskDays: 2,
          result: '你在墙角的阴影里待了一下午，直到太阳落下。' },
        { t: '飞到外面找目标', hint: '机会↑ 被捕食风险↑',
          eff: { food: +5 }, kill: 0.15, cause: 'swallow',
          result: '你在窗外绕了一圈，找到一个新的目标，一口咬了下去。' },
      ],
    },
    {
      id: 'evening_rain', at: 21,
      title: '还没停的雨',
      body: '傍晚的雨下了一阵又停了，湿气还没有散，空气里满是闷热。你可以留在屋檐下，也可以趁天黑出去找吃的。',
      options: [
        { t: '留在屋檐下等天亮', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -5 }, risk: 0.7, riskDays: 2,
          result: '你在屋檐下待了一整夜，雨滴从上面一滴一滴地落下。' },
        { t: '趁天黑出去找吃的', hint: '食物↑↑ 被拍的风险↑',
          eff: { food: +20 }, kill: 0.2, cause: 'swat',
          result: '你飞到窗边，闻到一股热气。你吸了一口，又赶紧飞走了。' },
      ],
    },
    {
      id: 'old_wings', at: 26,
      title: '翅膀磨损了',
      body: '你的翅膀边缘已经磨出缺口，每次起飞都要多花一点力气。墙角有一个安静的缝可以停下来，但那里也没有食物。',
      options: [
        { t: '最后一次去吸血', hint: '食物↑ 风险↑',
          eff: { food: +15 }, risk: 1.6, riskDays: 3, kill: 0.15, cause: 'swat',
          result: '你又吸到了一点血。飞回墙角的路上，你的腿几乎不听使唤。' },
        { t: '留在墙角休息', hint: '体力↑ 食物↓',
          eff: { health: +8, food: -5 }, risk: 0.9, riskDays: 5,
          result: '你安静地待在墙角，翅膀慢慢收拢。' },
      ],
    },
    {
      id: 'web', at: 31,
      title: '墙角的一张蛛网',
      body: '墙角挂着一张蛛网，网上滴着水珠。网的另一边有一朵开着的花，花蜜的味道一阵一阵地飘过来。',
      options: [
        { t: '绕开，从空档飞过', hint: '稳妥 · 食物少',
          eff: { food: -3 }, risk: 0.8, riskDays: 3,
          result: '你绕到网的另一侧，从空档里飞了过去。' },
        { t: '从网边穿过去，抢花蜜', hint: '食物↑ 被粘住的风险↑',
          eff: { food: +12 }, kill: 0.25, cause: 'spider',
          result: '你擦着网飞了进去，丝粘住了一条腿。你挣扎了一下，最后还是挣脱了。' },
      ],
    },
    {
      id: 'autumn_diapause', at: 3, need: 'autumn_cold',
      title: '水越来越凉',
      body: '水温已经降到你从没感受过的低度，你的蜕皮在变慢。你可以赶在水凉透之前长大，也可以停在碎屑底下，等水温回升。',
      options: [
        { t: '赶在水凉前蜕皮化蛹', hint: '发育↑ 风险↑',
          eff: { food: +5 }, risk: 1.3, riskDays: 4,
          result: '你不停地吃，一天里蜕了两次皮。身体变得有点发硬。' },
        { t: '停在碎屑底下等', hint: '发育停下 · 食物↓',
          skip: [20, 60], eff: { food: -5 },
          result: '你蜷在碎屑里，身体不再长大。水面上的光一天天变化，你一动不动。' },
      ],
    },
    {
      id: 'drought_last_water', at: 4, need: 'drought_yr',
      title: '最后一摊水',
      body: '水面只剩下一圈，水线已经看不见了。落叶底下还有一小洼积水，离你有一段距离，中间是干透的碎屑。',
      options: [
        { t: '爬到落叶下的小水洼', hint: '食物↑ 路上有风险',
          eff: { food: +8 }, risk: 1.4, riskDays: 2,
          result: '你挪过去，落叶下的水很凉，里面漂着不少碎屑。' },
        { t: '原地等下一场雨', hint: '不动 · 食物↓↓',
          eff: { food: -15, health: -5 }, risk: 1.2, riskDays: 6,
          result: '你贴着湿壁一动不动，等天上落下水来。' },
      ],
    },
    {
      id: 'imported_lure', at: 11, need: 'imported_eggs',
      title: '两个陌生的院子',
      body: '你不熟悉这一带的气味。左边的院子里有很多人，右边只有一只狗趴在阴影里。两边的二氧化碳都很浓。',
      options: [
        { t: '飞向有人的院子', hint: '食物↑↑ 被拍的风险↑',
          eff: { food: +20 }, risk: 1.3, riskDays: 2,
          result: '你落在第一个人的手臂上吸了血，在一巴掌落下来之前飞开了。' },
        { t: '飞向有狗的院子', hint: '食物↑ 更安全',
          eff: { food: +10 }, risk: 0.8, riskDays: 2,
          result: '狗的毛很厚，你在它耳朵后面找到一块薄皮，吸了一小口。' },
      ],
    },
    {
      id: 'resistant_spray', at: 13, need: 'resistant_strain',
      title: '一辆喷雾车',
      body: '街口有一辆喷雾车慢慢开过来，白雾从车尾涌出，罩住了路灯和树叶。你所在的花丛正好在它要经过的路边。',
      options: [
        { t: '躲到屋檐下', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 2,
          result: '你钻进屋檐的缝里，白雾从外面慢慢飘过去。' },
        { t: '趁雾吃一口', hint: '食物↑ 中毒风险↑',
          eff: { food: +15 }, risk: 1.6, riskDays: 2,
          result: '你在雾里找到一条手臂，吸了一口血。之后几个小时，你的腿一直在抖。' },
      ],
    },
  ],

  idle: [
    '水面上有一层薄薄的光，倒映着天花板的灯。',
    '城市的声音一阵一阵地传过来，离你很远。',
    '远处有人开门，一股热气飘了过来。',
    '白纹伊蚊多在白天活动。这个时间，外面的城市正热起来。',
    '容器壁上的水痕慢慢干了，又被下一场雨盖住。',
    '一只蚊子的翅膀在空气里发出很细的嗡嗡声。',
    '夜里很安静，只有水滴落进容器的声音。',
    '你所在的这一圈很潮，水线一天一天地变化。',
  ],

  epitaph: '你是城市里无数只白纹伊蚊中的一只。那几口血，换来了一批等待下雨的卵。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'broiler',
  name: '肉鸡',
  en: 'Broiler chicken',
  sci: 'Gallus gallus domesticus（现代快速生长品种，如 Ross 308、Cobb 500）',
  emoji: '🐤',
  scene: 'barn',
  kind: 'farmed',
  tagline: '每年约有七百亿只鸡被宰杀，你是其中一只',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '饲养方式', options: [
        ['一栋养着几万只鸡的大型室内密集鸡舍', 12, { set: 'intensive' }],
        ['中小型室内鸡舍，养的是生长速度中等的品种', 3, {}],
        ['有户外草地的放养鸡场，养的是慢速生长品种', 1, { set: 'slow' }],
      ]},
      { label: '所在的国家', options: [
        ['巴西南部的一家大型养殖场，鸡舍很长，饮水线从一头延伸到另一头', 3, { food: +5, set: 'brazil' }],
        ['美国中西部的一家养殖场，鸡舍大，通风系统是自动调节的', 3, { health: +3, set: 'usa' }],
        ['中国华北的一家养殖场，冬天的鸡舍需要供暖', 2, { risk: 1.1, set: 'china' }],
        ['欧盟某国的一家养殖场，每只鸡分到的空间稍大一些', 2, { health: +3, food: -3, set: 'eu' }],
      ]},
      { label: '品种的生长速度', options: [
        ['快速生长的商业品种，四十多天就能达到上市体重', 6, { food: +5, risk: 1.1, set: 'fast' }],
        ['生长速度中等的品种，约六十天上市', 3, { set: 'mid' }],
        ['地方的慢速黄羽品种，要养三个多月才能上市', 1, { health: +3, set: 'local' }],
      ]},
    ],
    siblings: 30000,
    siblingsLabel: '同一批出壳的雏鸡',
    intro: '你在一家孵化场的出雏机里破壳而出，身上还湿漉漉的，体重不到 45 克。你是{sex}。你接下来要生活的地方是{饲养方式}。同一批出壳的雏鸡大约有 {siblings} 只。',
  },

  stages: [
    { id: 'chick', name: '雏鸡',   from: 0,  unit: 'hour' },
    { id: 'brood', name: '育雏期', from: 3,  unit: 'day'  },
    { id: 'grow',  name: '生长期', from: 21, unit: 'day'  },
    { id: 'finish', name: '出栏前', from: 35, unit: 'day' },
  ],
  maturity: 180,   // 肉鸡从不会走到这一步，这里只是占位（自然性成熟约 5 个月）
  maxAge: 56,

  // 快速生长品种约 42 天屠宰，曲线在 41–42 天之间出现悬崖；早期和中期死亡率只有几个百分点
  survival: [[0,1],[0.5,0.99],[3,0.97],[14,0.96],[28,0.95],[40,0.94],[41,0.93],[42,0.04],[43,0.01],[49,0.003],[56,0]],
  survivalNote: '快速生长品种通常在 42 天左右屠宰（曲线上的悬崖）；养殖场平均死亡率大约几个百分点；慢速品种会活得更久，这里只做粗略近似',

  init: { health: 85, food: 70, safety: 50 },
  foodDrain: 0,

  causes: [
    { id: 'slaughter', escape: false, w: 30, stages: ['finish'], short: '屠宰',
      text: '卡车把你和同批的鸡一起拉到屠宰场。你被挂上传送带，几分钟之内，一切就结束了。' },
    { id: 'leg', escape: false, w: 3, stages: ['grow','finish'], short: '腿病，站不起来',
      text: '你的腿撑不住越来越重的身体。你走几步就要趴下，饲料盘离你只有一米，你爬不过去。' },
    { id: 'heart', escape: false, w: 2, stages: ['grow','finish'], short: '心脏衰竭（腹水）',
      text: '心脏和肺泵不动那么多血。腹腔里积了液体，你的呼吸越来越浅。' },
    { id: 'infect', escape: false, w: 2, stages: ['chick','brood','grow'], short: '大肠杆菌感染',
      text: '细菌感染了你的气囊。你开始咳嗽，然后不再吃东西。' },
    { id: 'crowd', escape: true, w: 1, stages: ['brood','grow'], short: '被挤压在角落',
      text: '鸡群受了惊，一起挤向同一个角落。你被压在了最下面。' },
    { id: 'heat', escape: false, w: 1, stages: ['brood','grow','finish'], short: '热应激',
      text: '天气闷热，通风出了问题，棚里的温度在一个下午升高了好几度。你张着嘴喘，直到喘不动。' },
    { id: 'transport', escape: false, w: 2, stages: ['finish'], short: '抓捕或运输途中死亡',
      text: '装笼时你的翅膀被挤伤了，途中没能撑到屠宰场。' },
  ],

  events: [
    { stages: ['chick'], w: 3, text: '你从出雏机里被拿出来，身上还带着蛋壳的碎屑。同批的雏鸡在纸箱里挤成一团。' },
    { stages: ['chick'], w: 2, once: true, text: '一根针扎进你的颈背。孵化场在出壳后一天内给你接种了马立克氏病疫苗。' },
    { stages: ['chick'], w: 2, once: true, text: '你和几十只雏鸡一起被装进箱子，用卡车运到鸡舍。路上颠簸得很厉害。', eff: { health: -5 } },
    { stages: ['chick','brood'], w: 3, text: '你在料盘里啄到几粒饲料，又喝了一口水。从现在起，你的全部能量都要靠它们。', eff: { food: [8, 15] } },
    { stages: ['brood'], w: 3, need: '!slow', text: '垫料潮湿，一股刺眼的氨味从地面升起来。你的眼睛开始发红，咳嗽的声音在鸡舍里此起彼伏。', eff: { health: -6 },
      fact: '欧盟食品安全局（EFSA，2023）关于肉鸡福利的科学意见指出：鸡舍垫料质量和氨气浓度是影响肉鸡眼睛和呼吸道健康的重要因素' },
    { stages: ['brood','grow'], w: 2, need: '!slow', text: '鸡舍里有几万只鸡。你每走一步都要绕过别的身体，几乎没有可以独处的地方。', eff: { safety: -5 },
      fact: '欧盟理事会指令 2007/43/EC 规定肉鸡养殖的常规密度上限为每平方米 33 公斤，符合条件时可以适当放宽（Council Directive 2007/43/EC）' },
    { stages: ['grow'], w: 3, text: '你的身体在一周里重了一大截。骨头和肌肉的增长跟不上体重，你走路时身体左右晃。', eff: { health: -4 },
      fact: '1957 年的品系 56 天时体重约 0.9 公斤，1978 年的品系约 1.8 公斤，2005 年的现代快速生长品种约 4.2 公斤（Zuidhof 等，2014，《Poultry Science》）' },
    { stages: ['grow','finish'], w: 3, text: '你的一条腿突然一软，坐了下去。之后几天，你只能趴在垫料上，饲料盘离你越来越远。', eff: { food: -15, health: -8 },
      fact: 'Kestin 等（1992，《Veterinary Record》）：快速生长的肉鸡品种，腿软的发生率明显更高' },
    { stages: ['grow'], w: 2, need: '!slow', text: '通风机轰鸣，鸡舍里又闷又热。你张着嘴喘气，翅膀微微抬离身体。', eff: { health: -6 } },
    { stages: ['brood','grow','finish'], w: 2, text: '一只邻居在啄你的背。它身上也秃了几块羽毛。你躲开了，躲到了更挤的地方。', eff: { safety: -5 } },
    { stages: ['grow','finish'], w: 2, text: '饲料盘一天被加满两次。你吃得很快，胃被撑得鼓鼓的。', eff: { food: +20 } },
    { stages: ['finish'], w: 2, text: '饲养员开始走动，用手电照着每一排的鸡。', eff: { safety: -10 } },
    { stages: ['finish'], w: 2, once: true, text: '抓鸡的工人来了。他们一手抓一只，倒提着装进运输笼里。', eff: { health: -10, safety: -15 } },
    { stages: ['grow','finish'], w: 1, text: '旁边的一只鸡倒了下去，一动也不动。没有人来看它。', eff: { safety: -5 } },
    { stages: ['brood'], w: 1, text: '暖灯下面很热，你挤在一群鸡中间，分不清哪只是哪只。', eff: { safety: +5 } },
    { stages: ['grow'], w: 1, need: '!slow', text: '夜里灯光调暗了。鸡舍安静了几个小时，你和同伴都在睡觉。', eff: { health: +5 } },
    { stages: ['grow'], w: 2, need: 'slow', text: '你走到草地上，啄着草根和虫子。太阳晒在背上，身上暖和了很久。', eff: { food: +10, health: +3 } },
    { stages: ['finish'], w: 2, once: true, text: '你被装进一个塑料运输笼，和十几只鸡挤在一起，在卡车上颠簸了一夜。', eff: { health: -8 } },
    { stages: ['finish'], w: 2, once: true, text: '你被挂在传送带上，送进了屠宰线。' },
    { act: 'forage', stages: ['brood','grow'], w: 3, text: '你挤到料槽前，啄到一粒饲料，接着又是一粒。前后的鸡也在啄，谁也没有停下来。', eff: { food: [4, 8] } },
    { act: 'forage', stages: ['grow','finish'], w: 2, text: '料槽边被踩得很乱。你刚低下头，就被另一只鸡的脚踩了背。', eff: { health: -3, food: [4, 8] } },
    { act: 'forage', stages: ['brood'], need: '!slow', w: 2, text: '料盘里的颗粒被别的鸡翻得满地都是。你在地上一粒一粒地捡。', eff: { food: [3, 6] } },
    { act: 'hide', stages: ['grow','finish'], w: 2, text: '你缩到墙角。那里有一股潮湿的味道，地面有一层黏黏的垫料。', eff: { health: -2, safety: 5 } },
    { act: 'hide', stages: ['brood','grow'], w: 2, text: '你躲进一堆鸡的身后。没有人注意到你，你也没有吃到料。', eff: { food: -5, safety: 8 } },
    { act: 'rest', stages: ['brood'], w: 2, text: '你在暖灯下趴着，身边的同伴一只只安静下来。', eff: { health: 3, safety: 3 } },
    { act: 'rest', stages: ['grow','finish'], w: 2, text: '你趴在垫料上，身体慢慢暖了。你闭上眼睛，呼吸一起一伏。', eff: { health: 4 } },
    { act: 'explore', stages: ['brood','grow','finish'], w: 2, text: '你沿着鸡舍的墙走。垫料又湿又硬，每一步都要抬高爪子。', eff: { health: -3 } },
    { act: 'explore', stages: ['grow'], need: '!slow', w: 2, text: '你走到鸡舍另一头，通风口正对着你吹风。你的羽毛被吹得乱七八糟，身上发凉。', eff: { health: -3 } },
    { act: 'explore', stages: ['grow'], need: 'slow', w: 3, text: '你穿过鸡舍的小门，走到草地上。草根的味道很新鲜，太阳晒在背上。', eff: { food: [8, 12], health: 4 } },
    { stages: ['brood','grow'], w: 3, need: 'brazil', text: '鸡舍很长，饮水线从一头延伸到另一头。你喝了很多水，身上的绒毛很快换成了羽毛。', eff: { health: +3 } },
    { stages: ['grow','finish'], w: 2, need: 'brazil', text: '鸡舍里的温度一天天升高，风扇一直响着。你张着嘴喘气，饲料吃得比前一天少了。', eff: { health: -4 } },
    { stages: ['grow'], w: 3, need: 'usa', text: '通风系统在夜里自动调节，鸡舍里的空气很干净。你睡得很稳。', eff: { health: +3 } },
    { stages: ['finish'], w: 2, need: 'usa', text: '工人用电子秤抽查了几只鸡的体重。你所在的一排刚好被称到，然后又被放回去。', eff: { safety: -3 } },
    { stages: ['brood'], w: 3, need: 'china', text: '冬天的鸡舍需要供暖。加热器的温度一高一低，你挤到角落里，夜里醒了好几次。', eff: { health: -4 } },
    { stages: ['grow','finish'], w: 2, need: 'china', text: '鸡舍外的风声很大，门缝里冒进冷风。你和身边的鸡挤在一起取暖。', eff: { health: -3, safety: +3 } },
    { stages: ['grow'], w: 3, need: 'eu', text: '鸡舍的空间稍大一些，你可以在地面上走几步，再回到饮水线旁边。', eff: { health: +3, food: -3 } },
    { stages: ['finish'], w: 2, need: 'eu', text: '鸡舍里有一些稻草和一个木板的台子。你跳上去，站了一会儿。' },
    { stages: ['grow','finish'], w: 3, need: 'fast', text: '你的体重一天天加速增长。胸脯变得很厚，你走路的时候身体往前倾。', eff: { food: +5, health: -2 } },
    { stages: ['finish'], w: 2, need: 'fast', text: '你几乎只在吃饲料和睡觉。饲料盘边上，同批的鸡都往上挤。', eff: { food: +8, safety: -3 } },
    { stages: ['grow'], w: 3, need: 'mid', text: '你的生长比同批的鸡慢一点，腿的力量比别的鸡好。', eff: { health: +3 } },
    { stages: ['finish'], w: 2, need: 'mid', text: '你还没有到上市的体重，工人暂时没有把你挑出来。', eff: { food: +3 } },
    { stages: ['chick','brood'], w: 3, need: 'local', text: '你的绒毛颜色偏黄，在育雏箱里跑得又快又乱。', eff: { health: +3 } },
    { stages: ['grow'], w: 2, need: 'local', text: '你能在鸡舍里跑出一段距离。你的羽毛也比其他品种的鸡更密。', eff: { health: +4 } },
    { stages: ['brood'], w: 2, need: 'runt', text: '你比同批的雏鸡小一圈。饮水器前面总是挤满了别的鸡，你很难喝到水。', eff: { food: -5, health: -3 } },
    { stages: ['grow'], w: 2, need: 'robust', text: '你比同批的鸡结实。你跳上了饲料盘旁边的一个台阶，别的鸡都没上去。', eff: { health: +3 } },
    { stages: ['grow'], w: 2, need: 'bold', text: '你第一个冲向饲料盘，身上被撞得歪歪斜斜，你还是吃到了第一口。', eff: { food: +8, health: -2 } },
    { stages: ['grow'], w: 2, need: 'cautious', text: '有人打开了门，你缩到了鸡群的最里面。门关上以后，你还在那里待了很久。', eff: { safety: +6, food: -3 } },
    { stages: ['grow','finish'], w: 2, need: 'curious', text: '你在鸡舍里来回地走，发现墙上有一个小洞，里面有一些掉下来的谷粒。', eff: { food: +6 } },
  ],

  opening: {
    title: '暖灯还是水线',
    body: '你刚从出雏机里被拿出来，身上还湿着，体重不到 45 克。育雏区中间有一盏暖灯，几步之外，一排饮水线在地面上闪着光。你还站不稳，但接下来的几天，这一步会决定你先顾哪一边。',
    options: [
      { t: '缩进暖灯下', hint: '体温↑ 挤压风险↑', eff: { health: +5, safety: +5 }, risk: 1.2, riskDays: 3,
        result: '你缩进暖灯下的一堆雏鸡里，身上很快干了。这个选择改变不了你的出栏日期，只改变了最初几天的体温。' },
      { t: '走向饮水线', hint: '喝到水 · 路上会冷', eff: { health: +3, food: +5 }, risk: 0.9, riskDays: 3,
        result: '你摇摇晃晃走到饮水线边，喝到了第一口水。地面凉得很，你走得很慢。' },
    ],
  },
  actions: {
    forage: { name: '挤到料槽前', desc: '挤在料槽边上，啄食颗粒饲料。料盘一天被加满两次，但抢的鸡也很多。', text: ['你挤到料槽边，低头啄着颗粒饲料。', '身边的鸡在推你，你没有松开。', '你吃得很快，喉咙一下一下地咽。'] },
    hide: { name: '缩到墙角', desc: '离开人多的地方，缩到墙角，或者挤在同伴身后。', text: ['你缩在墙角，身后是冷的墙板。', '一只鸡从旁边经过，你把头低下去。', '鸡舍里的声音小了一点。'] },
    rest: { name: '趴着不动', desc: '趴在垫料上，减少走动，让身体歇一歇。', text: ['你趴在垫料上，羽毛被压得有点乱。', '你的腿有点酸，你把它缩到身下。', '垫料有点潮，你换了个位置。'] },
    explore: { name: '在鸡舍里走动', desc: '沿着鸡舍走，去看看别的区域。走得越远，遇到的鸡和事情越多。', stages: ['brood','grow','finish'], text: ['你沿着鸡舍的墙走，爪子踩在湿的垫料上。', '你挤过一群鸡，又走到了另一头。', '头顶的灯一闪一闪的，你停下来看了一会儿。'] },
    mate: false,
  },
  decisions: [
    {
      id: 'huddle', at: 3,
      title: '暖灯下的位置',
      body: '暖灯下面是育雏区里最暖和的地方，也是最挤的地方。饲料盘在另一头，离你有十几步远。这些选择改变不了你的结局，但会改变你接下来几天的感受。',
      options: [
        { t: '挤进暖灯下', hint: '安全↑ 食物↓ 压伤风险↑',
          eff: { safety: +15, food: -10 }, risk: 1.2, riskDays: 5,
          result: '你挤进同伴堆里，温暖又安心。挤在最下面的几只鸡喘着气，你不知道它们是谁。' },
        { t: '去饲料盘边', hint: '食物↑ 略冷',
          eff: { food: +15, safety: -5 }, risk: 1.05, riskDays: 3,
          result: '你走过去，路上凉得很，但你吃到了几口饲料。' },
      ],
    },
    {
      id: 'lame', stage: 'grow',
      title: '一条不听使唤的腿',
      body: '你的腿越来越疼。站起来就能走到饲料盘，躺着就能休息，但吃得会少很多。',
      fact: 'Kestin 等（1992）：快速生长的肉鸡品种，腿病（腿软）的发生率很高',
      options: [
        { t: '站起来，去饲料盘', hint: '食物↑ 腿伤↑',
          eff: { food: +15 }, risk: 1.5, riskDays: 7,
          result: '你一瘸一拐地走到饲料盘边，吃了一顿饱饭。之后几天，你的腿更疼了。' },
        { t: '趴下休息', hint: '安全 食物↓',
          eff: { food: -20, health: +5 },
          result: '你趴在垫料上。饲料盘离你越来越远，你吃得很少，腿也没有好转。' },
      ],
    },
    {
      id: 'sick_neighbor', at: 28,
      title: '病了的邻居',
      body: '旁边的一只鸡眼睛半闭着，咳嗽，羽毛蓬乱。别的鸡不时过去啄它。你可以离开，也可以留在它旁边。',
      options: [
        { t: '远离它', hint: '安全↑ 感染风险↓',
          eff: { safety: +10 }, risk: 0.9, riskDays: 5,
          result: '你走到了另一头。病鸡的咳嗽声还是传了过来。' },
        { t: '留在它旁边', hint: '传染风险↑',
          eff: { safety: -5 }, risk: 1.4, riskDays: 4,
          result: '你靠着它躺下。几天之后，你的喉咙开始发干。' },
      ],
    },
    {
      id: 'door', stage: 'finish',
      title: '门开了',
      body: '门被推开，一个穿靴子的人走过来，灯光照在你身上。你可以躲进角落，也可以走向他，靠近饲料盘。这些选择改变不了屠宰的日期。',
      options: [
        { t: '躲进角落', hint: '安全↑ 食物↓',
          eff: { safety: +5, food: -5 },
          result: '你缩在角落里，没有人朝这边看。' },
        { t: '走向饲料盘', hint: '食物↑ 被踩↑',
          eff: { food: +10, safety: -5 }, risk: 1.2, riskDays: 2,
          result: '你凑近料盘，吃到了几粒饲料。走过的人踩了你的脚一下。' },
      ],
    },
    {
      id: 'litter', at: 9,
      title: '湿垫料',
      body: '靠近饮水线的一块垫料湿透了，踩上去发黏，氨味也更刺鼻。干燥的垫料在鸡舍中间，那里挤满了鸡。这些选择改变不了出栏的日期，只改变你几天里的舒适程度。',
      options: [
        { t: '站在湿的地方靠近水线', hint: '饮水↑ 氨气↑',
          eff: { food: +5, health: -4 }, risk: 1.15, riskDays: 4,
          result: '你喝到了水，眼睛很快开始发酸。' },
        { t: '挤进中间的干垫料', hint: '干爽↑ 拥挤↑',
          eff: { health: +3, safety: -3 },
          result: '你在干的地方窝下来，身边都是鸡的体温。' },
      ],
    },
    {
      id: 'crowd_gate', at: 24,
      title: '通道上的人群',
      body: '饲料盘和饮水线之间只有一条窄窄的通道，鸡在上面来回挤。你可以冲进人群，也可以等它散开。',
      options: [
        { t: '挤过通道去吃料', hint: '食物↑ 被踩↑',
          eff: { food: +15, safety: -5 }, risk: 1.25, riskDays: 3,
          result: '你挤过去，吃到了几口料。有一只鸡在你的腿上踩了一下。' },
        { t: '等人群散开', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +5 },
          result: '你等了好一会儿，通道才空出来。' },
      ],
    },
    {
      id: 'heat_day', at: 31,
      title: '闷热的下午',
      body: '通风机的声音变大了，棚里又闷又热。你们都张着嘴喘气。鸡舍的一头有一个风口，凉风从那里吹进来，但那里已经挤满了鸡。',
      options: [
        { t: '挤到风口边', hint: '凉快↑ 挤压↑',
          eff: { health: +5, safety: -5 }, risk: 1.1, riskDays: 3,
          result: '你站在风口边，凉风吹在羽毛上。挤在你旁边的鸡还想往这边挤。' },
        { t: '留在原地喘', hint: '热应激↑',
          eff: { health: -5 }, kill: 0.03, cause: 'heat',
          result: '你张着嘴喘了很久，直到棚里的风慢慢转凉。' },
      ],
    },
    {
      id: 'broiler_cold_night', at: 14, need: 'china',
      title: '供暖停了',
      body: '夜里的供暖停了二十分钟。鸡舍的温度在往下掉，雏鸡们挤成一团。',
      options: [
        { t: '挤进雏鸡堆的中间', hint: '保暖↑ 挤压风险↑', eff: { health: +3 }, risk: 1.2, riskDays: 1,
          result: '你钻进雏鸡堆中间，体温慢慢回来，但身上被压得很痛。' },
        { t: '待在靠近加热器的边上', hint: '暖一点 · 温度不稳', eff: { health: +1 }, risk: 1.4, riskDays: 2,
          result: '你趴在加热器边上，它的温度一会儿高一会儿低。加热器重新工作时，你才慢慢暖起来。' },
      ],
    },
    {
      id: 'broiler_local_run', at: 30, need: 'local',
      title: '小门开了一道缝',
      body: '鸡舍的小门被风吹开了一道缝，外面是一块带草的空地。你要决定走出去，还是留在里面。',
      options: [
        { t: '走出门，去草地上', hint: '运动↑ 风险↑', eff: { health: +4, food: +6 }, risk: 1.4, riskDays: 3,
          result: '你走到草地上，草根的味道很新鲜。天上有一只鸟的影子掠过。' },
        { t: '留在鸡舍里，靠近饮水', hint: '稳妥', eff: { food: +3 },
          result: '你留在鸡舍里，喝了一口水。门外的风声慢慢地停了。' },
      ],
    },

  ],

  idle: [
    '你在地上踩出一个小坑，又被别的鸡踩平。',
    '这一段时间，你分不清白天和夜晚。',
    '你低头啄地，啄到的多半是别的东西。',
    '你的身体比几天前沉了一些。',
    '身边的同伴发出咕咕的声音，很快又安静下来。',
    '你伸了伸腿，又把它们缩回身下。',
    '远处传来车子的声音，很快又安静下来。',
    '一阵风吹过，身上的羽毛轻轻动了一下。',
  ],

  epitaph: '你活了大约六个星期。你的体重增长了几十倍，却从来没有站在草地上。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'layer_hen',
  name: '蛋鸡',
  en: 'Laying hen',
  sci: 'Gallus gallus domesticus（商业蛋鸡品种，如 Lohmann、Hy-Line 系）',
  emoji: '🐔',
  scene: 'barn',
  kind: 'farmed',
  tagline: '你的祖先一年只产十几枚蛋，你要产三百枚',

  birth: {
    sex: [['雌性', 1]],
    rolls: [
      { label: '饲养方式', options: [
        ['一座大型笼养鸡舍，每只鸡的空间略小于一张 A4 纸', 6, { set: 'cage' }],
        ['一座平养谷仓，鸡舍里可以走动，有产蛋窝和栖木', 3, { set: 'barn' }],
        ['一座放养鸡场，白天可以走到户外的草地上', 1, { set: 'free' }],
      ]},
      { label: '品系', options: [
        ['白壳蛋的白来航系，身材轻，产蛋数多', 4, { set: 'white_strain' }],
        ['褐壳蛋的褐色系，身材比白鸡大，吃得也多', 3, { food: +5, set: 'brown_strain' }],
        ['一个本地土鸡杂交的品系，产蛋少，体力好', 1, { health: +5, set: 'local_strain' }],
      ]},
      { label: '出生那一年的年景', options: [
        ['一个平稳的年份，饲料便宜', 4, { set: 'cheap_feed' }],
        ['玉米歉收的一年，饲料很贵，养殖场压缩了开支', 2, { food: -5, set: 'dear_feed' }],
        ['邻省禽流感流行的一年，所有养殖场都严防外人进出', 1, { risk: 1.2, set: 'avian_flu_year' }],
      ]},
    ],
    siblings: 20000,
    siblingsLabel: '同批出壳的小鸡',
    intro: '你在一家孵化场里破壳，身上覆着黄色的绒毛。你是{sex}。你接下来要生活的地方是{饲养方式}。同批出壳的小鸡大约有 {siblings} 只。',
  },

  stages: [
    { id: 'chick',  name: '雏鸡',   from: 0,   unit: 'hour' },
    { id: 'pullet', name: '育成期', from: 3,   unit: 'week' },
    { id: 'layer',  name: '产蛋期', from: 126, unit: 'week' },
    { id: 'spent',  name: '淘汰前', from: 504, unit: 'week' },
  ],
  maturity: 130,   // 约 18–20 周开始产蛋
  maxAge: 560,     // 约 80 周

  // 大多数蛋鸡在 70–78 周龄被淘汰（曲线上 525–540 天附近的悬崖），少数会因为疾病或意外提前死去
  survival: [[0,1],[1,0.99],[7,0.97],[30,0.96],[120,0.93],[300,0.89],[450,0.82],[500,0.76],[520,0.72],[530,0.12],[540,0.02],[560,0]],
  survivalNote: '蛋鸡通常在 70–80 周龄被淘汰（产蛋量下降后）；早期死亡率和产蛋期的意外死亡率参考商业养殖的平均水平，这里是粗略近似',

  init: { health: 85, food: 70, safety: 45 },
  foodDrain: 0,

  causes: [
    { id: 'slaughter', escape: false, w: 30, stages: ['spent'], short: '淘汰，送去屠宰',
      text: '产蛋量降下来以后，养殖场把你装进运输笼，送去屠宰场。你最后的用途，是做成鸡肉产品。' },
    { id: 'keel', escape: false, w: 2, stages: ['layer','spent'], short: '龙骨骨折',
      text: '你的胸骨在一次跌落中裂开了。之后你再也站不稳，只能慢慢地饿着。' },
    { id: 'prolapse', escape: false, w: 1, stages: ['layer'], short: '泄殖腔脱出',
      text: '长期高强度产蛋，让你的一部分输卵管脱出了体外。养殖场的人没有来处理。' },
    { id: 'peck', escape: true, w: 1, stages: ['pullet','layer'], short: '被同伴啄死',
      text: '一群母鸡围住了你，啄你的头和背。你没能逃出那个角落。' },
    { id: 'infect', escape: false, w: 2, stages: ['pullet','layer','spent'], short: '呼吸道或肠道感染',
      text: '咳嗽，食欲下降，几天后你不再站起来。' },
    { id: 'cage_trap', escape: false, w: 1, stages: ['layer','spent'], need: 'cage', short: '脚卡在笼底的金属丝里',
      text: '你的脚趾卡进了笼底金属丝的缝隙里，挣扎了一整夜，最后没能抽出来。' },
    { id: 'hawk', escape: true, w: 1, stages: ['pullet','layer'], need: 'free', short: '被猛禽抓走',
      text: '放养场的草地上，一只鹰从天空俯冲下来。你没来得及躲进棚里。' },
  ],

  events: [
    { stages: ['chick'], w: 2, once: true, text: '同批的雄雏在出壳后被分拣出来，装进另一个箱子，很快就被处理了。你身边的小鸡还在叫。',
      fact: '德国自 2022 年起，法律禁止无合理理由地处死出壳后的雄性雏鸡（德国《动物保护法》）' },
    { stages: ['chick'], w: 3, text: '你被装进纸箱，和几十只小鸡一起颠簸着运到养殖场。', eff: { health: -5 } },
    { stages: ['pullet'], w: 3, text: '你在育成期里练习啄食、扑腾翅膀、在沙土里打滚。这些本能，在很多养殖场里都没有地方用。' },
    { stages: ['pullet'], w: 2, text: '饮水器边挤满了母鸡。一只比你大的鸡啄了你的头，你低头让开。', eff: { safety: -5 } },
    { stages: ['pullet','layer'], w: 2, text: '饲料槽是自动出料的。你吃得很快，喉咙里有一点噎住。', eff: { food: +15 } },
    { stages: ['layer'], w: 4, need: '!free', text: '你又产下一枚蛋。蛋滚下斜坡，落在传送带上，被很快地收走。' },
    { stages: ['layer'], w: 2, once: true, text: '你第一次产蛋。在此之前，身体里的钙已经被一点点调动起来。你的祖先在野外一年大约只产十几枚蛋，你要产三百枚。' },
    { stages: ['layer'], w: 2, need: 'cage', text: '笼底的金属丝很硬，你的脚趾在上面一次次打滑。', eff: { health: -4 } },
    { stages: ['layer'], w: 2, once: true, text: '养殖场停了几天的料，想让你停产换羽。换羽之后，产蛋会重新开始。', eff: { food: -20, health: -8 } },
    { stages: ['layer','spent'], w: 2, text: '你的胸骨在一次受惊之后隐隐作痛。你开始躲着别的鸡。', eff: { health: -6 },
      fact: 'EFSA（2023）关于蛋鸡福利的科学意见：龙骨（胸骨）骨折在各种饲养系统中都很常见' },
    { stages: ['layer'], w: 2, text: '角落里有一只鸡在啄自己的羽毛，细小的羽毛散在地上。', eff: { safety: -5 } },
    { stages: ['layer'], w: 2, text: '鸡舍里的灯一直亮着。你分不清白天和黑夜的分界。', eff: { health: -2 } },
    { stages: ['spent'], w: 2, text: '产蛋量明显少了。养殖场的人在鸡群之间走动，一只一只地数着。', eff: { safety: -10 } },
    { stages: ['spent'], w: 2, once: true, text: '你被抓出来，装进一个狭小的运输笼。', eff: { health: -10, safety: -10 } },
    { stages: ['layer'], w: 1, need: 'cage', text: '隔壁的笼子里，一只鸡的脚被卡住了。它叫了很久，没有人来。', eff: { safety: -5 } },
    { stages: ['layer'], w: 1, once: true, need: '!cage', text: '你第一次站上一根横杆。它比笼底的金属丝舒服。' },
    { stages: ['layer'], w: 2, need: 'free', text: '你走到户外的草地上，啄着草根和虫子。天气很好，草很绿。', eff: { food: +10, safety: +5 } },
    { stages: ['layer'], w: 1, need: 'cage', text: '笼子里很挤，你的翅膀几乎展不开。你每天只能站着、蹲着。', eff: { health: -3 } },
    { act: 'forage', stages: ['pullet','layer'], w: 2, text: '你低头啄着料槽里的颗粒。一只母鸡挤过来，你往旁边让了一步。', eff: { food: [4, 8] } },
    { act: 'forage', stages: ['layer'], need: 'cage', w: 2, text: '笼子前的料槽很窄，你伸长脖子，才够得到那几粒饲料。', eff: { food: [3, 6], health: -2 } },
    { act: 'forage', stages: ['layer'], need: 'free', w: 2, text: '你在草地上啄到一条虫子。它扭动了几下，很快被你吞了下去。', eff: { food: [8, 12] } },
    { act: 'hide', stages: ['pullet','layer'], w: 2, text: '你缩进棚子的角落，身后是墙。这里看不见门口的人。', eff: { safety: 6, food: -3 } },
    { act: 'hide', stages: ['layer'], need: 'cage', w: 2, text: '你挤进笼子的角落，把头埋进翅膀下面。笼底的金属丝硌着你的脚。', eff: { safety: 4, health: -2 } },
    { act: 'rest', stages: ['layer'], w: 2, text: '你蹲在笼底，身体慢慢放松。灯光一直亮着，你睡得很浅。', eff: { health: 3 } },
    { act: 'rest', stages: ['pullet'], w: 2, text: '你和几只母鸡挤在一起蹲着。翅膀下面暖暖的，还有别的鸡的呼吸声。', eff: { health: 3, safety: 2 } },
    { act: 'explore', stages: ['pullet','layer'], w: 2, text: '你沿着过道走到了鸡舍的另一头。那里的地面有点潮，几只鸡在啄地。', eff: { food: [4, 8], safety: -3 } },
    { act: 'explore', stages: ['layer'], need: 'cage', w: 2, text: '你在笼子里来回走了几步，很快就被挡住了。', eff: { health: -2 } },
    { act: 'explore', stages: ['layer'], need: 'free', w: 2, text: '你走到放养场的围栏边。树荫下有很多虫子，但头顶总有鸟叫，你不敢久待。', eff: { food: [6, 10], safety: -3 } },
    { stages: ['layer'], need: 'white_strain', w: 2, text: '你的蛋壳是白的，在传送带上一眼就能看见。你每天的产蛋数，被记在一块白板上。' },
    { stages: ['layer'], need: 'white_strain', w: 2, text: '你的身子轻，在鸡群里能很快走到料槽前。', eff: { food: +5 } },
    { stages: ['spent'], need: 'white_strain', w: 2, text: '白来航的产蛋期很集中。淘汰前的几周里，你几乎不再产蛋了。', eff: { safety: -5 } },
    { stages: ['layer'], need: 'brown_strain', w: 2, text: '你的蛋壳是褐色的。你的身子比白鸡沉，产蛋时要花更多力气。', eff: { health: -3 } },
    { stages: ['pullet','layer'], need: 'brown_strain', w: 2, text: '你比同批的白鸡吃得多。料槽边的工人会多放一点料，但你总觉得不够。', eff: { food: +10 } },
    { stages: ['layer','spent'], need: 'brown_strain', w: 1, text: '褐鸡的羽毛在育成期就长齐了。你一天天往上窜，同棚的鸡都在看着你。', eff: { safety: -2 } },
    { stages: ['pullet'], need: 'local_strain', w: 2, text: '你的身子结实，腿脚有劲。别的雏鸡都在打盹，你已经在沙土里找虫子了。', eff: { health: +5 } },
    { stages: ['layer'], need: 'local_strain', w: 2, text: '你产的蛋不多，蛋壳也偏厚。记录表上，你的名字旁边多了一个特殊的符号。' },
    { stages: ['layer'], need: 'local_strain', act: 'explore', w: 2, text: '你在棚外的一小块土地上刨了一会儿，找到几条蚯蚓。你的祖先就是这样活下来的。', eff: { food: [6, 10] } },
    { stages: ['pullet','layer'], need: 'cheap_feed', w: 2, text: '这一年的饲料便宜，料槽里几乎每天都是满的。', eff: { food: +10 } },
    { stages: ['layer'], need: 'cheap_feed', w: 2, text: '养殖场没有停过料。你不用饿着，但鸡舍里挤得更满了。', eff: { safety: -3 } },
    { stages: ['layer'], need: 'cheap_feed', w: 1, once: true, text: '鸡场买了一批新料。换料的那天，鸡们都低着头，在料槽里一粒一粒地嗅。' },
    { stages: ['pullet','layer'], need: 'dear_feed', w: 2, text: '饲料涨价了，养殖场压缩了开支。料槽里的料一天比一天少。', eff: { food: -10 } },
    { stages: ['layer'], need: 'dear_feed', w: 2, once: true, text: '养殖场为了省钱，把停料的时间拉长了。你的体重明显地掉了下来。', eff: { health: -6, food: -8 } },
    { stages: ['layer','spent'], need: 'dear_feed', w: 1, text: '旁边的鸡在啄地上的碎料。你也低下头，一点一点地捡。', eff: { food: +3 } },
    { stages: ['pullet','layer'], need: 'avian_flu_year', w: 2, text: '邻省传来禽流感的消息。鸡舍的门口多了一个消毒池，进出的人都要脚踩消毒液。', eff: { health: +2 } },
    { stages: ['layer'], need: 'avian_flu_year', w: 2, text: '鸡舍的门关得很严，一整个冬天都没有开过。空气很闷，你咳了几声。', eff: { health: -4 } },
    { stages: ['layer'], need: 'avian_flu_year', w: 1, text: '有几只鸡突然不动了。工人们戴着口罩进来，把它们装进了袋子里。', eff: { safety: -8 } },
    { stages: ['chick'], need: 'bold', w: 2, text: '你第一个从纸箱里跳了出去，在育雏室的地板上跌跌撞撞地跑了一圈。', eff: { health: +2 } },
    { stages: ['pullet'], need: 'cautious', w: 2, text: '你一看见人影，就缩到角落里。饲养员伸手抓鸡，你总是最后一个被抓到。', eff: { safety: +4 } },
    { stages: ['pullet','layer'], need: 'curious', w: 2, text: '你总在鸡舍里转来转去，把每一个角落都看了一遍。哪里有灰尘，哪里有铁丝，你都记住了。' },
    { stages: ['chick'], need: 'runt', w: 2, text: '你比同批的小鸡轻，挤在饲料盘边总被别的小鸡推开。', eff: { food: -8 } },
    { stages: ['pullet','layer'], need: 'robust', w: 2, text: '你的胸骨又厚又结实。饲养员把你抓起来称重的时候，秤上的数字比别的鸡高。', eff: { health: +3 } },
  ],

  opening: {
    title: '纸箱里的位置',
    body: '你刚出壳，身上覆着黄色的绒毛，正和几十只小鸡一起被装进纸箱，准备运到养殖场。箱子中间挤在一起，暖和；箱子边上凉一些，但没有谁压在你身上。',
    options: [
      { t: '挤进箱子中间', hint: '暖和↑ 被压风险↑', eff: { health: +5, safety: -5 }, risk: 1.2, riskDays: 3,
        result: '你挤进小鸡堆的中间，身上很快暖和起来。颠簸的路上，有几只小鸡从底下被压住了，你没有去看。' },
      { t: '待在箱子边上', hint: '稍凉 · 不被压', eff: { health: -5 }, risk: 0.85, riskDays: 3,
        result: '你靠着纸板，冷风从缝隙里钻进来。路上没有谁压在你身上，你一直在发抖。' },
    ],
  },
  actions: {
    forage: { name: '去料槽边吃', desc: '沿着料槽走过去，啄食饲料。在笼子里时，你只能把头伸出去够。', text: ['你低头啄着料槽里的颗粒。', '一只母鸡挤过来，你往旁边让了一步。', '料槽很浅，饲料很快又被吃光了。'] },
    hide: { name: '缩到角落', desc: '离开过道和人走动的地方，缩到棚子或笼子的角落里。', text: ['你缩进棚子的角落，身后是墙。', '外面的脚步声慢慢远了。', '你把头埋进翅膀下面，安静了一会儿。'] },
    rest: { name: '蹲下来不动', desc: '蹲在地上或笼底，减少活动，让身体休息。', text: ['你蹲下来，身体慢慢放松。', '灯光一直亮着，你睡得很浅。', '你的爪子有点麻，你换了一只脚站着。'] },
    explore: { name: '在鸡舍里走动', desc: '沿着过道走，去看看鸡舍的其他地方。在笼子里，这只是一段很短的路。', text: ['你沿着过道走，爪子踩在硬的地面上。', '你在笼子之间来回走了几步。', '远处有人在换料，地上撒了一层饲料。'] },
    mate: false,
  },
  decisions: [
    {
      id: 'pecking_order', at: 20,
      title: '饮水器边',
      body: '饮水器只有一个，你和几只母鸡同时走过去。一只比你大的鸡低下头，示意你让开。',
      fact: '“啄序”（pecking order）最早由 Schjelderup-Ebbe 于 1922 年在母鸡身上描述（《Zeitschrift für Psychologie》）',
      options: [
        { t: '让开', hint: '安全↑ 水少',
          eff: { safety: +5, food: -5 },
          result: '你退到一边，等了很久才喝到水。' },
        { t: '反击', hint: '食物↑ 受伤↑',
          eff: { food: +10, health: -8 }, risk: 1.4, riskDays: 4,
          result: '你啄了回去。那只鸡冲过来，你的头被啄出了一道伤口。' },
      ],
    },
    {
      id: 'nest', stage: 'layer', need: 'cage',
      title: '没有窝',
      body: '你想找一个隐蔽的角落产蛋，但笼子里没有窝，只有金属丝底。',
      options: [
        { t: '在笼底产蛋', hint: '蛋可能破损',
          eff: { health: -3 },
          result: '你蹲下来，蛋滚过金属丝，掉了下去。' },
        { t: '忍着，等一等', hint: '压力↑ 产蛋延后',
          eff: { safety: -5 }, risk: 1.1, riskDays: 10,
          result: '你没有产蛋。身体里的那一枚，在慢慢地积累。' },
      ],
    },
    {
      id: 'perch', stage: 'layer', need: '!cage',
      title: '一根横杆',
      body: '鸡舍里有一排高高的横杆。站上去能避开别的鸡，但从高处跳下来时容易摔伤。',
      fact: 'EFSA（2023）：栖木有利于蛋鸡的行为表达，但从栖木上跌落也可能造成龙骨骨折',
      options: [
        { t: '站上去', hint: '安全↑ 摔落风险',
          eff: { safety: +10 }, kill: 0.03, cause: 'keel',
          result: '你跳上横杆，站稳了。下来的时候，爪子打滑，胸口撞在了金属上。' },
        { t: '缩在角落', hint: '压力↑ 食物↓',
          eff: { safety: -5, food: -5 },
          result: '你缩在角落里，只能听见上面的鸡跳上跳下。' },
      ],
    },
    {
      id: 'outdoor', stage: 'layer', need: 'free',
      title: '门开着',
      body: '放养场的小门开着，外面有草，还有一片树荫。远处有一只红尾鹰在盘旋。',
      options: [
        { t: '走出去', hint: '食物↑ 被捕食风险↑',
          eff: { food: +20 }, risk: 1.6, riskDays: 3, kill: 0.05, cause: 'hawk',
          result: '你啄着草根，吃到了虫子。一阵风吹过，你才注意到头顶的影子。' },
        { t: '留在棚里', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 },
          result: '你留在棚里，和同伴挤在一起。门外的草一直绿着。' },
      ],
    },
    {
      id: 'feed_cut', at: 300, stage: 'layer',
      title: '料突然停了',
      body: '养殖场停了几天的料。料槽里只剩一层薄薄的碎屑，同棚的母鸡都在啄着槽边。这可能是为了让你们换羽，也可能只是送料的车晚了。这些选择改变不了淘汰的日子。',
      options: [
        { t: '省着吃，等料来', hint: '食物↓ 健康↓',
          eff: { food: -15, health: -3 },
          result: '你只啄了几口，然后蹲下来等。料车迟迟没有来。' },
        { t: '去抢别的鸡的料', hint: '食物↑ 冲突↑',
          eff: { food: +10, safety: -10 }, risk: 1.2, riskDays: 4,
          result: '你挤进了另一只鸡的料槽边，吃到了几粒饲料。那只鸡啄了你一下。' },
      ],
    },
    {
      id: 'feather_peck', at: 260, stage: 'layer',
      title: '一只鸡在啄自己的羽毛',
      body: '角落里，一只鸡一根根地啄着自己的羽毛。旁边的几只鸡也凑了过来，开始啄它的背。你可以靠近，也可以走开。',
      options: [
        { t: '靠近它', hint: '安全↓ 健康↓',
          eff: { safety: -5, health: -3 },
          result: '你啄了几下它背上的羽毛。它往后缩，你们之间的空隙更窄了。' },
        { t: '走开', hint: '安全↑ 食物↓',
          eff: { safety: +5, food: -3 },
          result: '你走到另一边，那边的鸡也在啄，但没有啄你。' },
      ],
    },
    {
      id: 'light_on', at: 380, stage: 'layer',
      title: '灯还亮着',
      body: '鸡舍的灯一直亮着，连夜里也是。角落里暗一些，但挤在那里的鸡也多。靠近料槽的地方更亮，也更吵。这些选择改变不了淘汰的日子。',
      options: [
        { t: '躲到角落里', hint: '安全↑ 食物↓',
          eff: { safety: +5, food: -5 },
          result: '你缩到角落里，闭上了眼睛。远处的料槽一直没有人过去。' },
        { t: '走到灯下的料槽边', hint: '食物↑ 健康↓',
          eff: { food: +10, health: -2 },
          result: '你在灯下吃了几口料。灯光刺得你的眼睛有点酸。' },
      ],
    },
    {
      id: 'slowdown', at: 480, stage: 'layer',
      title: '产蛋越来越少',
      body: '你最近的蛋少了。养殖场的人在鸡群之间走动，你能感觉到他们在看你们。你可以拼命多产几枚，也可以少产一点，保存力气。这些选择改变不了淘汰的日子。',
      options: [
        { t: '拼命多产', hint: '产蛋↑ 健康↓',
          eff: { food: -10, health: -10 }, risk: 1.3, riskDays: 20,
          result: '你又产下了几枚蛋，之后几天连站起来都觉得累。' },
        { t: '保存力气', hint: '健康↑ 产蛋少',
          eff: { health: +5, food: -5 },
          result: '你少产了几枚蛋，身体慢慢恢复了一点。' },
      ],
    },
    {
      id: 'brown_crowd', at: 100, need: 'brown_strain',
      title: '料槽前的位置',
      body: '你比同批的白鸡大，吃得也多。料槽前的位置有限，白鸡已经挤在两边。',
      options: [
        { t: '挤到料槽正中', hint: '食物↑ 被啄↑', eff: { food: +12, safety: -5 }, risk: 1.2, riskDays: 4,
          result: '你挤到料槽正中，吃饱了。周围的鸡都在啄你。' },
        { t: '让开，等料送到前面', hint: '食物↓ 安全↑', eff: { food: -5, safety: +3 },
          result: '你退到一边，等着新的料从传送带上送下来。' },
      ],
    },
    {
      id: 'avian_gate', at: 200, need: 'avian_flu_year',
      title: '门口的消毒池',
      body: '门口放了一盆消毒水。鸡舍的门关着，里面闷热；门一开，外面的冷风就灌进来。',
      options: [
        { t: '待在鸡舍里，不出门', hint: '安全↑ 食物↓', eff: { safety: +5, food: -3 },
          result: '你一整个冬天都没有去过门口。' },
        { t: '走到门边看外面的草', hint: '食物↑ 感染风险↑', eff: { food: +5 }, risk: 1.4, riskDays: 20, kill: 0.03, cause: 'infect',
          result: '你走到门边，吸进了一口外面的冷风。几天后，你开始咳嗽。' },
      ],
    },
    {
      id: 'feed_shortage', at: 330, stage: 'layer', need: 'dear_feed',
      title: '料又停了一次',
      body: '饲料涨价以后，养殖场又停了一次料，比上一次停得更久。料槽里只剩下一层碎屑。',
      options: [
        { t: '省着吃，等料来', hint: '食物↓ 健康↓', eff: { food: -10, health: -3 },
          result: '你只啄了几口，然后蹲下来等。料车迟迟没有来。' },
        { t: '挤到别的鸡的料槽前', hint: '食物↑ 冲突↑', eff: { food: +6, safety: -5 }, risk: 1.2, riskDays: 4,
          result: '你挤进别的料槽，吃到了几粒饲料。那只鸡啄了你一下。' },
      ],
    },
    {
      id: 'bold_wall', at: 150, need: 'bold',
      title: '墙角的破洞',
      body: '墙角有一个破洞，外面的光照进来。你可以钻过去看看，也可以留在棚里。',
      options: [
        { t: '钻过去看看', hint: '好奇 · 受凉', eff: { food: +5, health: -3 }, risk: 1.3, riskDays: 10,
          result: '你钻过破洞，外面的草又湿又凉。你在那儿站了很久，才回到棚子里。' },
        { t: '留在棚里', hint: '安全 · 无聊', eff: { safety: +3 },
          result: '你留在棚里，看着墙角的光慢慢移开。' },
      ],
    },
    {
      id: 'curious_nest', at: 140, need: 'curious',
      title: '一个陌生的蛋箱',
      body: '鸡舍的角落里有一个没用过的蛋箱，铺着干草，比你的笼子高。你要跳上去，才能看清里面。',
      options: [
        { t: '跳上去看看', hint: '好奇 · 胸口受伤↑', eff: { safety: +5 }, kill: 0.02, cause: 'keel',
          result: '你跳上去，爪子打滑，胸口撞在了箱沿上。' },
        { t: '留在地面上', hint: '安全', eff: {},
          result: '你在地上转了一圈，又回到了原处。' },
      ],
    },
    {
      id: 'runt_bottom', at: 80, stage: 'pullet', need: 'runt',
      title: '料槽的底下',
      body: '料槽的边缘被别的鸡占满了，你只能在底下捡掉落的碎料。',
      options: [
        { t: '继续在底下捡碎料', hint: '食物↓ 健康↓', eff: { food: +3, health: -2 },
          result: '你在底下捡了很久，碎料一粒一粒地进了嘴。' },
        { t: '挤到上面去', hint: '食物↑ 被啄↑', eff: { food: +8, safety: -6 }, risk: 1.2, riskDays: 4,
          result: '你挤到了上面，吃到了几口好料。旁边的鸡用嘴顶你的头。' },
      ],
    },
  ],

  idle: [
    '这里很暗，光只从上方照下来。',
    '你的爪子在地面上一步一步地走，有一点凉。',
    '一只鸡在角落里梳理羽毛，梳完又站起来。',
    '远处有人走过，脚步声慢慢远了。',
    '饲料的味道很淡。你低头吃了几口，又抬起头。',
    '你蹲下来，身体有一点麻。',
    '你不知道今天是第几天。',
    '棚顶的铁皮被风吹得轻轻响。',
  ],

  epitaph: '你活了大约一年半。你产下的蛋，比你野生的祖先一生产的要多得多。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'pig',
  name: '猪',
  en: 'Pig',
  sci: 'Sus scrofa domesticus（家猪）',
  emoji: '🐷',
  scene: 'barn',
  kind: 'farmed',
  tagline: '猪很聪明，它的一生却通常只有六个月左右',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '猪场类型', options: [
        ['一座大型工厂化猪场，母猪长期关在限位栏里', 12, { set: 'factory' }],
        ['一座中型猪场，母猪分群饲养，有活动空间', 5, { set: 'group' }],
        ['一户小农家的猪圈，母猪在院子里走动', 1, { set: 'free' }],
      ]},
      { label: '将来的去向', options: [
        ['育肥线上的一头猪', 19, {}],
        ['被留下来配种的一头母猪（极少数）', 1, { set: 'breeder', risk: 0.2 }],
      ]},
      { label: '品种', options: [
        ['大约克夏与长白杂交的商品猪，长得快', 5, { food: +5, set: 'large_white' }],
        ['杜洛克系的父本，肉色深，长得慢', 2, { food: -2, set: 'duroc' }],
        ['本地黑猪，皮厚，脂肪多，长得慢', 1, { health: +4, set: 'black_local' }],
      ]},
      { label: '出生那一年的年景', options: [
        ['天气不冷不热，饲料价格稳定的一年', 4, { set: 'normal_pig_year' }],
        ['冬天特别冷的一年，产房的保温灯不够用', 2, { health: -5, set: 'cold_winter' }],
        ['夏天特别热的一年，猪舍只靠风扇降温', 2, { safety: -3, risk: 1.2, set: 'hot_summer' }],
        ['非洲猪瘟流行的一年，邻近的猪场都在处理猪只', 1, { safety: -5, risk: 1.3, set: 'asf_year' }],
      ]},
    ],
    siblings: 12,
    siblingsLabel: '同窝的猪仔',
    intro: '你出生在{猪场类型}。你的体重约 1.3 公斤，是{sex}。你同窝一共有 {siblings} 头猪仔。你的去向：{将来的去向}。',
  },

  stages: [
    { id: 'newborn', name: '出生',   from: 0,   unit: 'hour'  },
    { id: 'suckle',  name: '哺乳期', from: 3,   unit: 'day'   },
    { id: 'nursery', name: '保育期', from: 28,  unit: 'week'  },
    { id: 'finish',  name: '育肥期', from: 70,  unit: 'week'  },
    { id: 'sow',     name: '种猪期', from: 185, unit: 'month' },
  ],
  maturity: 150,   // 公猪和母猪大约 5 个月开始有性成熟
  maxAge: 1000,

  // 育肥猪约 170–185 天出栏（曲线上的悬崖）；少数留作种猪的母猪活到 2–3 年
  survival: [[0,1],[1,0.97],[3,0.95],[14,0.92],[28,0.9],[60,0.88],[120,0.84],[170,0.8],[178,0.78],[182,0.1],[186,0.06],[365,0.05],[700,0.03],[900,0.01],[1000,0]],
  survivalNote: '育肥猪通常在 5–6 个月时出栏（110–120 公斤左右）；留作种猪的母猪通常可以生产 3–4 胎，约 2–3 年后淘汰；风险倍数用来区分不同去向',

  init: { health: 80, food: 65, safety: 50 },
  foodDrain: 0,

  causes: [
    { id: 'slaughter', escape: false, w: 40, stages: ['finish','sow'], short: '屠宰',
      text: '你被赶上卡车，送进屠宰场。车厢里挤满了猪，几个小时之后，这一切就结束了。' },
    { id: 'crush', escape: true, w: 3, stages: ['suckle'], short: '被母猪压死',
      text: '母猪翻身侧躺，压住了你。你没能从她身下钻出来。' },
    { id: 'scour', escape: false, w: 3, stages: ['suckle','nursery'], short: '腹泻，脱水',
      text: '肠道里的细菌把你身体里的水分拉光了。你越来越轻，最后不再动。' },
    { id: 'resp', escape: false, w: 2, stages: ['nursery','finish'], short: '呼吸道疾病',
      text: '你咳得越来越厉害，喘息声像拉风箱。几天后你没能再吃东西。' },
    { id: 'bite', escape: false, w: 2, stages: ['nursery'], short: '被同栏的猪咬伤感染',
      text: '同栏的猪咬你的尾巴，伤口感染了。你的身体慢慢发热，然后不再站起来。' },
    { id: 'heat', escape: false, w: 1, stages: ['finish'], short: '热应激',
      text: '夏天猪舍没有降温，你张着嘴喘气，一个下午就倒下了。' },
    { id: 'old', escape: false, w: 1, stages: ['sow'], short: '衰老',
      text: '你的身体一天比一天虚弱，最后在一个夜里没有醒来。' },
  ],

  events: [
    { stages: ['newborn'], w: 2, text: '你在产房里睁开眼睛，身上还带着羊水的味道。母猪在一旁发出低低的哼声。' },
    { stages: ['newborn'], w: 3, once: true, text: '工人用钳子剪短了你的犬齿，免得你在吃奶时咬伤母猪的乳头。', eff: { health: -3 } },
    { stages: ['newborn'], w: 2, once: true, need: 'male', text: '一个工人给你做了去势，你尖叫了一声。' },
    { stages: ['newborn'], w: 2, once: true, text: '工人给你打了一针铁剂。小猪在封闭的环境里很难从其他途径获得足够的铁。', eff: { health: +5 } },
    { stages: ['suckle'], w: 3, text: '你挤到母猪身边吃奶。兄弟姐妹在你身旁推来推去，有的被挤到了后面。', eff: { food: +15 } },
    { stages: ['suckle'], w: 2, text: '母猪躺下的时候，你被夹在她的身体和栏边之间。你的鼻子压在木栏上。', eff: { safety: -10 } },
    { stages: ['suckle'], w: 2, text: '产房里很冷，你挤进同窝猪仔中间，一起发抖。', eff: { health: -3 } },
    { stages: ['suckle'], w: 2, once: true, text: '你第一次尝到固体饲料。它又干又甜，你用鼻子把它拱得到处都是。', eff: { food: +10 } },
    { stages: ['nursery'], w: 2, text: '你被转到一个新的圈栏。周围都是陌生的猪，它们互相推着，打了起来。', eff: { safety: -10 } },
    { stages: ['nursery'], w: 2, text: '你的尾巴被同栏的猪咬了一下，留下一道伤口。', eff: { health: -6 } },
    { stages: ['nursery'], w: 2, need: '!free', text: '猪圈的地板是缝隙板，粪尿从缝隙漏下去。你的蹄子踩在缝隙上，一步一顿。', eff: { health: -3 } },
    { stages: ['nursery','finish'], w: 2, text: '栏子另一头有一头猪在咳。过了一会儿，你也开始咳了。', eff: { health: -5 } },
    { stages: ['finish'], w: 3, text: '你每天吃饲料，长得很快。两周之后，你比之前重了好几公斤。', eff: { food: +15 } },
    { stages: ['finish'], w: 2, text: '猪圈里很热，地板湿漉漉的。你躺在水槽旁边，那里凉一点。', eff: { safety: +5 } },
    { stages: ['finish'], w: 2, text: '一个穿工作服的人打开门，手里拿着一根赶猪的棒子，在过道里走来走去。', eff: { safety: -10 } },
    { stages: ['finish'], w: 1, text: '一头大猪在饲料槽前撞来撞去。你被挤到了角落。', eff: { safety: -5 } },
    { stages: ['finish'], w: 1, once: true, text: '你第一次被赶上卡车的斜坡。蹄子在铁板上打滑，后面的猪在推你。', eff: { health: -8 } },
    { stages: ['sow'], w: 2, need: 'breeder', once: true, text: '你第一次产下一窝仔猪，共 {n} 头。', eff: { offspring: [8, 14] } },
    { stages: ['sow'], w: 2, need: 'factory', text: '你的圈栏只够站起来和躺下，没法转身。', eff: { safety: -5 } },
    { stages: ['sow'], w: 2, need: 'breeder', text: '你又产下一窝仔猪，比第一窝少了几头。', eff: { offspring: [6, 10] } },
    { stages: ['sow'], w: 1, need: 'breeder', text: '仔猪被抱走，断奶之后送去育肥。你在配种栏里又等来了下一次发情。' },
    { stages: ['sow'], w: 1, need: 'breeder', text: '饲养员在你耳朵上的标签旁边写下了一个数字，那是你的产仔数。' },
    { act: 'forage', stages: ['suckle'], w: 3, text: '你挤到母猪身边，把鼻子伸进一排乳头中间。', eff: { food: [6, 10] } },
    { act: 'forage', stages: ['nursery','finish'], w: 2, text: '饲料槽又窄又浅，你的前蹄踩进槽里，吃到一口干饲料。', eff: { food: [5, 9] } },
    { act: 'hide', stages: ['nursery','finish'], w: 2, text: '你缩到墙角，身后是冷的水泥。大猪的脚步声在栏子那头停了下来。', eff: { safety: 5 } },
    { act: 'hide', stages: ['suckle'], w: 2, text: '你钻到母猪身体的另一侧，躲开了推挤的兄弟姐妹。', eff: { safety: 5, food: -5 } },
    { act: 'rest', stages: ['suckle'], w: 2, text: '你吃饱了，趴在母猪身边睡着了。', eff: { health: 4 } },
    { act: 'rest', stages: ['finish','sow'], w: 2, text: '你侧躺在水泥地上，身体贴着地面，热气从身体里慢慢散出去。', eff: { health: 3 } },
    { act: 'explore', stages: ['nursery'], w: 2, text: '你在栏子边找到一根松动的木条，拱得咯吱咯吱地响。', eff: { safety: -3 } },
    { act: 'explore', stages: ['finish'], w: 2, text: '你拱到栏子最里面，那里有一堆旧垫草，闻起来有点潮。', eff: { health: -2 } },
    { act: 'mate', stages: ['sow'], need: 'breeder', w: 2, text: '你被赶进配种栏。隔壁的公猪叫了很久，然后才被牵过来。', eff: { safety: -5, health: -2 } },
    { act: 'explore', stages: ['sow'], need: 'factory', w: 2, text: '你的圈栏只够站起来和躺下，没法转身。你只能在原地挪几步。', eff: { safety: -3 } },
    { stages: ['suckle'], need: 'large_white', w: 2, text: '你吃奶吃得很快，身上很快长出了一层肉。兄弟姐妹都比你瘦。', eff: { food: +8 } },
    { stages: ['nursery'], need: 'large_white', w: 2, text: '饲料里加了高能量的料，你长得很快，走路时肚皮一晃一晃的。', eff: { food: +5, health: -2 } },
    { stages: ['finish'], need: 'large_white', w: 1, text: '你的体重一天天往上涨。饲养员在你的圈栏门上挂了一张记录纸，上面写着你的号码。', eff: { health: -2 } },
    { stages: ['suckle'], need: 'duroc', w: 2, text: '你的毛色比同窝的猪仔深一点，身子结实，吃奶的时候也很用力。', eff: { food: +4 } },
    { stages: ['nursery','finish'], need: 'duroc', w: 2, text: '你长得比别的猪慢，但肉质好。饲养员说你将来是要给别的猪当父亲的。', eff: { food: +2 } },
    { stages: ['sow'], need: 'duroc', w: 1, text: '你被留下来当种猪。配种的人在你的圈栏边停了很久。', eff: { safety: +2 } },
    { stages: ['suckle'], need: 'black_local', w: 2, text: '你的皮厚，毛色黑亮。兄弟姐妹挤来挤去时，你总能找到一个好位置。', eff: { health: +3 } },
    { stages: ['finish'], need: 'black_local', w: 2, text: '你长得慢，脂肪厚。饲养员说这种猪肉好吃，但要多等一个夏天。', eff: { food: +5 } },
    { stages: ['nursery'], need: 'black_local', w: 1, text: '你在圈栏边的湿土里拱出一个小坑，里面有蚯蚓。你吃得很认真。', eff: { food: +6 } },
    { stages: ['suckle','nursery'], need: 'normal_pig_year', w: 2, text: '这一年的天气不冷不热，产房的温度很稳定。你们挤在一起，睡得很沉。' },
    { stages: ['nursery','finish'], need: 'normal_pig_year', w: 2, text: '饲料价格稳定，料槽每天都有料。你吃得饱饱的。', eff: { food: +5 } },
    { stages: ['finish'], need: 'normal_pig_year', w: 1, text: '猪场的消毒员每周来一次，在过道里喷洒消毒水。' },
    { stages: ['newborn','suckle'], need: 'cold_winter', w: 2, text: '产房冷得厉害，你刚出生就一直发抖。保温灯只亮着一边，另一边照不到。', eff: { health: -5 } },
    { stages: ['suckle'], need: 'cold_winter', w: 2, text: '你和同窝的猪仔挤成一团取暖。有一只猪仔怎么也暖不过来，它的叫声越来越弱。', eff: { safety: -3 } },
    { stages: ['nursery'], need: 'cold_winter', w: 1, text: '冬天的猪舍很潮，地板上结了一层薄冰。你的蹄子一踩上去就打滑。', eff: { health: -3 } },
    { stages: ['finish'], need: 'hot_summer', w: 2, text: '夏天的猪舍里，风扇转得很响，但吹来的全是热风。你张着嘴，喘得厉害。', eff: { health: -4 } },
    { stages: ['nursery','finish'], need: 'hot_summer', w: 2, text: '饲养员在猪舍顶上洒了水，水流在地上留下一道道的印子。', eff: { health: +3 } },
    { stages: ['sow'], need: 'hot_summer', w: 1, text: '夏天的时候，你的食欲一天比一天差。饲养员把料拌成了湿的。', eff: { food: -5 } },
    { stages: ['nursery','finish'], need: 'asf_year', w: 2, text: '邻村的猪场出了疫情，所有的猪都被处理了。消毒的车进进出出，你的栏子被封了起来。', eff: { safety: -8 } },
    { stages: ['finish'], need: 'asf_year', w: 2, text: '饲养员只能进来一次，他穿着白色的防护服，喂完料就走了。', eff: { food: -5 } },
    { stages: ['finish','sow'], need: 'asf_year', w: 1, text: '场子里的猪一头头被抽血检测。等结果出来的那天，你的栏子里少了一头猪。', eff: { safety: -5 } },
    { stages: ['suckle'], need: 'bold', w: 2, text: '你第一个挤到母猪的前面，咬住了一个乳头。别的猪仔在后面叫，你没有松口。', eff: { food: +5, safety: -3 } },
    { stages: ['nursery'], need: 'cautious', w: 2, text: '你在栏子角落里缩了很久，直到饲料都快凉了，才敢去吃。', eff: { food: -5, safety: +4 } },
    { stages: ['finish'], need: 'curious', w: 2, text: '你总是凑近栏杆，闻来闻去，看看过道上有什么新东西。推车经过的时候，你的鼻子跟着它转。' },
    { stages: ['suckle'], need: 'runt', w: 2, text: '你比同窝的猪仔小，挤不进前排的乳头。等你挤上去的时候，奶已经少了。', eff: { food: -8 } },
    { stages: ['nursery','finish'], need: 'robust', w: 2, text: '你长得粗壮，走路时总把别的猪挤到一边。饲养员说你是栏里最结实的一头。', eff: { health: +4 } },
  ],

  opening: {
    title: '第一口奶',
    body: '你刚出生，身上还湿着。母猪侧躺着，低低地哼了几声。乳头有好几排，靠前的一排出奶最多，同窝的猪仔都在往前挤。你要不要抢在最前面？刚出生的几天里，挤在母猪身边最容易被压到，也最容易吃到初乳。',
    options: [
      { t: '抢前排的乳头', hint: '初乳↑ 压伤风险↑', eff: { food: +15, health: +3 }, risk: 1.3, riskDays: 3,
        result: '你推开旁边的猪仔，咬住了一个乳头。初乳又稠又黄，你吃了很久。' },
      { t: '去后排的乳头', hint: '初乳少 · 更安全', eff: { food: -5 }, risk: 0.85, riskDays: 3,
        result: '你在后排的乳头上吮了几口，奶少得很。身边的猪仔没有压过来。' },
    ],
  },
  actions: {
    forage: { name: '挤到饲料槽前', desc: '沿着气味或声音，挤到饲料槽或奶头前面。', text: ['你挤到前面，把鼻子伸进料槽。', '身边的猪在推你，你没有松开。', '饲料的味道很甜，你吃得很急。'] },
    hide: { name: '缩到墙角', desc: '离开人和同伴密集的地方，缩在墙角或栏边。', text: ['你缩在墙角，身上蹭着潮湿的墙。', '远处的猪在叫，你把头埋低了一点。', '过道那头有脚步声，你没有抬头。'] },
    rest: { name: '侧躺在水泥地上', desc: '侧躺下来，身体贴着地面，少动一些。', text: ['你侧躺着，呼吸慢慢平稳。', '水泥地凉凉的，你挪了挪身体。', '身边的猪一头接一头地躺下了。'] },
    explore: { name: '在圈栏里拱地', desc: '用鼻子拱着地面和栏杆，去看看圈栏的每个角落。', stages: ['suckle','nursery','finish','sow'], text: ['你用鼻子拱着地面，拱出一点湿土。', '你绕着栏杆走了一圈，又回到原地。', '栏杆上有一道缝，你的鼻子在上面磨了很久。'] },
    mate: { need: 'breeder', name: '配种', desc: '被赶进配种栏，和公猪完成交配。', done: '你又怀上了一窝仔猪，共 {n} 头。' },
  },
  brood: [8, 14],
  decisions: [
    {
      id: 'teat', at: 1.5,
      title: '奶水的位置',
      body: '母猪的乳头有好几排，靠前的一排出奶最多。同窝的猪仔都在抢。你要不要挤到前面去？',
      options: [
        { t: '挤到前排', hint: '食物↑ 压伤风险↑',
          eff: { food: +20 }, risk: 1.3, riskDays: 3,
          result: '你推开了两只猪仔，咬住一个乳头，奶很快就流了出来。' },
        { t: '待在后面', hint: '食物↓',
          eff: { food: -10 },
          result: '你在后面等了很久，有时候只能吃上一点。' },
      ],
    },
    {
      id: 'lie', at: 14, need: 'factory',
      title: '母猪侧躺',
      body: '母猪侧躺下来，你们挤在她身边。她的身体一沉，就会压到身边的猪仔。钻到她肚子下面暖和，但也很危险。',
      options: [
        { t: '钻到她的肚子下面', hint: '温暖↑ 被压风险↑',
          eff: { safety: +10 }, kill: 0.08, cause: 'crush',
          result: '你钻到了她的肚子下面，暖和了一会儿。' },
        { t: '待在圈栏边上', hint: '寒冷',
          eff: { health: -5, safety: -5 },
          result: '你在栏边缩成一团，冷得发抖。' },
      ],
    },
    {
      id: 'mirror', stage: 'nursery',
      title: '墙上的镜子',
      body: '栏子的墙上挂着一面镜子。镜子里有一头猪正看着你。你可以走过去，也可以绕开它。',
      fact: 'Broom、Sena 与 Moynihan（2009）：猪能理解镜子中的影像，并用它找到被藏起来的食物',
      options: [
        { t: '凑近看', hint: '食物↑ 探索',
          eff: { food: +5, safety: +5 },
          result: '镜子里的猪一动，你也动。你绕着镜子转了一圈，不知道那是谁。' },
        { t: '绕开它', hint: '平静',
          eff: {},
          result: '你从镜子旁边走过，镜子里的猪也走开了。' },
      ],
    },
    {
      id: 'door', stage: 'finish',
      title: '门开了',
      body: '门开了，一个人站在门口，手里拿着棒子。你可以躲进墙角，也可以挤到前面去吃那一槽料。这些选择改变不了出栏的日期。',
      options: [
        { t: '躲进墙角', hint: '安全↑ 食物↓',
          eff: { safety: +8, food: -5 },
          result: '你缩在墙角，没有人朝那里看。' },
        { t: '去吃料', hint: '食物↑ 被撞↑',
          eff: { food: +10, safety: -5 }, risk: 1.2, riskDays: 2,
          result: '你挤进饲料槽，吃了几口。一头大猪撞了你一下。' },
      ],
    },
    {
      id: 'warm_spot', at: 6,
      title: '暖和的地方',
      body: '产房里有一块被母猪身体挡住的暖地方，同窝的猪仔都挤在那里。栏子边上凉得多。这些选择改变不了你出栏的日子，只改变你的体温。',
      options: [
        { t: '挤进同窝猪仔中间', hint: '体温↑ 被挤↑',
          eff: { health: +5, safety: -3 }, risk: 1.1, riskDays: 3,
          result: '你挤进一团猪仔里，身上很快暖了。旁边有一只猪仔被挤得叫了几声。' },
        { t: '待在栏边凉一点', hint: '体温↓',
          eff: { health: -5 },
          result: '你在栏边缩成一团。冷风从缝隙里吹进来。' },
      ],
    },
    {
      id: 'tail_bite', at: 40,
      title: '咬尾巴的猪',
      body: '同栏的一头猪开始咬你的尾巴，它的牙齿很利。你可以躲到栏子的角落，也可以咬回去。',
      options: [
        { t: '躲到栏子角落', hint: '安全↑ 伤口↓',
          eff: { safety: 5, health: -2 },
          result: '你缩到了角落里。那头猪在外面绕了几圈，又走开了。' },
        { t: '咬回去', hint: '受伤↑ 感染风险↑',
          eff: { health: -5 }, risk: 1.2, riskDays: 5, kill: 0.02, cause: 'bite',
          result: '你咬住了它的耳朵。伤口开始发热。' },
      ],
    },
    {
      id: 'summer_heat', at: 100,
      title: '闷热的午后',
      body: '猪舍没有降温，水槽边有一点凉，但挤满了猪。你张着嘴喘气，身体烫得厉害。这些选择改变不了出栏的日子，只改变你现在有多难受。',
      options: [
        { t: '挤到水槽边', hint: '凉快↑ 被挤↑',
          eff: { health: +3, safety: -3 },
          result: '你挤进水槽边，凉水溅在身上。身边的猪推着你，你没有躲开。' },
        { t: '原地张嘴喘', hint: '热应激↑',
          eff: { health: -6 }, kill: 0.03, cause: 'heat',
          result: '你一直喘，喘到下午，身体越来越沉。' },
      ],
    },
    {
      id: 'sow_weaning', at: 400, need: 'breeder',
      title: '断奶之后的栏子',
      body: '仔猪刚被抱走，你的乳房还胀着。饲养员打开门，把你赶去另一个栏子。那里能转身，但隔壁是陌生的母猪。',
      options: [
        { t: '走进另一栏', hint: '空间↑ 陌生↑',
          eff: { food: +5, safety: -5 },
          result: '你走进新栏子，隔壁的母猪隔着栏杆看了你一眼。' },
        { t: '留在原栏', hint: '安全↑ 健康↓',
          eff: { safety: +5, health: -3 },
          result: '你在原来的栏子里趴着，奶水慢慢收了回去。' },
      ],
    },
    {
      id: 'duroc_pen', at: 120, need: 'duroc',
      title: '饲养员的挑选',
      body: '饲养员在圈栏之间走来走去，他在挑将来留作种猪的那一头。你可以挤到他脚边，也可以躲到后面。',
      options: [
        { t: '挤到他的脚边', hint: '被选中↑ 被挤↑', eff: { safety: -3, food: +3 }, risk: 1.1, riskDays: 10,
          result: '他伸手摸了摸你的背，又去看别的猪了。' },
        { t: '躲到后面', hint: '安全↑', eff: { safety: +3 },
          result: '你躲在后面，一直没有人伸手摸你。' },
      ],
    },
    {
      id: 'cold_corner', at: 20, need: 'cold_winter',
      title: '保温灯下',
      body: '保温灯只亮着一边，亮的那边挤满了猪仔。另一边冷一些，但那边的水槽更近。',
      options: [
        { t: '挤到亮的那边', hint: '体温↑ 被挤↑', eff: { health: +5, safety: -3 }, risk: 1.1, riskDays: 3,
          result: '你挤进灯下，身子很快暖了起来。' },
        { t: '去另一边的水槽', hint: '喝水↑ 体温↓', eff: { health: -3, food: +3 }, risk: 1.1, riskDays: 5,
          result: '你喝了几口水，身子却更冷了。' },
      ],
    },
    {
      id: 'asf_pen', at: 150, need: 'asf_year',
      title: '封场的那一天',
      body: '场子里有一头猪的检测结果是阳性，场子被封了起来。运猪的车停在门口。你可以挤到门边，也可以留在栏子里。',
      options: [
        { t: '挤到门边', hint: '食物↑ 被关进运输车↑', eff: { food: +3, safety: -5 }, risk: 1.3, riskDays: 10,
          result: '你挤到门边，门开了一条缝。外面有人在大声喊着号码。' },
        { t: '留在栏子里', hint: '安全↑ 食物↓', eff: { safety: +3, food: -3 },
          result: '你留在栏子里，直到车离开。外面的消毒水味很刺鼻。' },
      ],
    },
    {
      id: 'bold_gate', at: 180, need: 'bold',
      title: '没关好的门',
      body: '饲养员没把门关好，门缝里漏进来一道光。你可以走到门口看看，也可以留在栏里。',
      options: [
        { t: '走到门口看看', hint: '食物↑ 安全↓', eff: { food: +3, safety: -5 }, risk: 1.2, riskDays: 4,
          result: '你挤到门口，外面的走道上有人走过。你退了回来。' },
        { t: '留在栏里', hint: '安全↑', eff: { safety: +3 },
          result: '门缝里的光一直亮着，直到饲养员回来，把它关上。' },
      ],
    },
  ],

  idle: [
    '猪圈的地面有些湿，有些干。',
    '你用鼻子拱着地面，什么也拱不出来，于是又拱了一次。',
    '身边的猪在睡觉，呼吸声一起一伏。',
    '一只苍蝇落在你的耳朵上，你甩了甩头。',
    '饲料车的声音从走廊那头传过来。',
    '隔壁的猪在叫，声音一阵高一阵低。',
    '你挪了挪身体，换了个地方躺。',
    '阳光只从高处的小窗照进来，一会儿就移走了。',
  ],

  epitaph: '你活了大约六个月。你的一生，几乎都在一块水泥地上度过。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'cattle',
  name: '牛',
  en: 'Cattle',
  sci: 'Bos taurus / Bos indicus（黄牛与瘤牛）',
  emoji: '🐄',
  scene: 'farm',
  kind: 'farmed',
  tagline: '全世界大约有十五亿头牛，你是其中一头，出生在一个由人决定的地方',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '牛的类型', options: [
        ['一座奶牛场，母牛是荷斯坦一类的奶牛', 3, { set: 'dairy' }],
        ['美国中西部的牧场，母牛带着牛犊，之后你会被送进育肥场', 4, { set: 'feedlot' }],
        ['巴西的大片草场，牛群在草地上放养', 3, { set: 'beef' }],
        ['印度乡村的一户人家，本地牛在村子和田野之间走动', 2, { set: 'india', risk: 0.4 }],
        ['非洲草原上的游牧牛群，跟着季节和水源迁移', 1, { set: 'pastoral', risk: 0.7 }],
      ]},
      { label: '出生那一年的草场', options: [
        ['雨水正常的一年，草长得很好', 5, { set: 'good_pasture' }],
        ['连续干旱的一年，草场枯黄，牧场买来了干草', 2, { food: -10, health: -3, risk: 1.2, set: 'drought_year' }],
        ['县里暴发口蹄疫的一年，附近所有的牛都要被检疫', 1, { safety: -5, risk: 1.1, set: 'fmd_year' }],
      ]},
      { label: '出生的方式', options: [
        ['出生后就在母牛身边，喝到了足够的初乳', 4, { health: +3, set: 'nursed' }],
        ['出生后很快被牵走，由人用奶桶喂', 2, { health: -3, set: 'bottle' }],
        ['出生时难产，牧场的人用绳子把你拉了出来', 1, { health: -10, risk: 1.3, set: 'hard_birth' }],
      ]},
    ],
    siblings: 30,
    siblingsLabel: '同一年出生的牛犊',
    intro: '你出生在{牛的类型}。体重约 30 到 40 公斤，是{sex}。和你同一年出生的牛犊大约有 {siblings} 头。',
  },

  stages: [
    { id: 'calf',   name: '牛犊',   from: 0,    unit: 'hour'  },
    { id: 'young',  name: '幼牛',   from: 3,    unit: 'week'  },
    { id: 'growth', name: '育肥或成长期', from: 180, unit: 'month' },
    { id: 'adult',  name: '成年',   from: 540,  unit: 'month' },
    { id: 'old',    name: '老年',   from: 1460, unit: 'month' },
  ],
  maturity: 450,   // 母牛约 15 个月左右开始能配种
  maxAge: 3650,

  // 肉牛约 600 天（20 个月）左右出栏，曲线上的悬崖在 600–660 天；奶牛常在 4–6 年后淘汰
  survival: [[0,1],[1,0.96],[30,0.95],[90,0.94],[180,0.93],[365,0.91],[480,0.88],[540,0.84],[600,0.8],[630,0.22],[660,0.06],[1000,0.05],[1400,0.04],[1600,0.015],[2000,0.004],[2300,0.001],[3650,0]],
  survivalNote: '这是加权平均的粗略曲线：肉牛多在 18–24 个月屠宰（曲线上 600–660 天附近的悬崖）；奶牛常在 4–6 年后淘汰；印度与游牧牛群寿命更长，靠“风险倍数”体现',

  init: { health: 80, food: 70, safety: 55 },
  foodDrain: 0,

  causes: [
    { id: 'slaughter', escape: false, w: 30, stages: ['growth','adult','old'], short: '屠宰',
      text: '卡车把你拉到屠宰场。传送带、棚屋、几个人的手，几分钟之内就结束了。' },
    { id: 'bloat', escape: false, w: 3, stages: ['growth','adult'], short: '胀气',
      text: '你吃进去的饲料产生了太多的气体，瘤胃里的气体排不出来。左腹越来越鼓，呼吸也越来越困难。' },
    { id: 'acidosis', escape: false, w: 2, stages: ['growth'], need: 'feedlot', short: '瘤胃酸中毒',
      text: '精料让瘤胃变酸，你开始腹泻，走路摇摇晃晃。' },
    { id: 'brd', escape: false, w: 3, stages: ['young','growth'], short: '牛呼吸道疾病',
      text: '牛群里的牛互相传染。你咳了几个星期，最后不再站起来。' },
    { id: 'mastitis', escape: false, w: 1, stages: ['adult','old'], need: 'dairy', short: '乳腺炎扩散',
      text: '乳房里的感染拖了两周，你的体温一直很高。养殖场没有救你。' },
    { id: 'drought', escape: false, w: 2, stages: ['young','growth','adult','old'], short: '干旱，缺水缺草',
      text: '草场连续干了几个月。你跟着牛群走了很远，还是找不到水。' },
    { id: 'calf_disease', escape: false, w: 2, stages: ['calf'], short: '犊牛腹泻脱水',
      text: '犊牛腹泻很快让你脱水。你的眼睛陷了进去，没能撑过第一周。' },
    { id: 'old', escape: false, w: 2, stages: ['old'], short: '老年',
      text: '你的牙齿磨平了，吃草越来越慢。你躺在草地上，没有再站起来。' },
  ],

  events: [
    { stages: ['calf'], w: 3, text: '你刚出生就想站起来，四条腿抖个不停。母牛在身边舔你，把你身上的湿毛舔干。', eff: { health: +3 } },
    { stages: ['calf'], w: 2, once: true, text: '你第一次吃到初乳。它又稠又黄，营养很多，你吃得很急。', eff: { health: +5 } },
    { stages: ['calf'], w: 2, need: 'dairy', once: true, text: '几个小时之后，一个人把你从母亲身边牵走，放进一个单独的小栏。母亲在后面叫了很久。', eff: { safety: -15 } },
    { stages: ['calf'], w: 2, need: '!dairy', text: '你和母亲待在一起。随时可以回到母亲身边吃奶。', eff: { food: +15 } },
    { stages: ['calf'], w: 1, once: true, text: '牧场的人在你耳朵上挂了一个耳标，记下了你的编号。', eff: { safety: -5 } },
    { stages: ['calf'], w: 1, once: true, text: '工人在你头上烧掉了角芽。那一下很疼，你叫了很久。', eff: { health: -5 } },
    { stages: ['young'], w: 3, text: '草地很大，你和同伴一起奔跑，尾巴翘着。', eff: { food: +10 } },
    { stages: ['young'], w: 2, text: '苍蝇在你的眼睛周围盘旋。你甩头，甩尾，却赶不走它们。', eff: { health: -3 } },
    { stages: ['young','growth'], w: 2, text: '一只蜱虫吸在你的颈上。它在那里待了好几天。', eff: { health: -5 } },
    { stages: ['young','growth','adult'], w: 2, text: '你跟着牛群走过一段路，去另一片草场。脚下的泥很深。', eff: { food: -5 } },
    { stages: ['growth'], w: 3, need: 'feedlot', text: '饲养场的料槽里装满了玉米、豆粕和颗粒饲料。你吃得很快，身体一天天胖起来。', eff: { food: +20 } },
    { stages: ['growth'], w: 2, need: 'feedlot', text: '饲养场的地是泥和粪便混在一起的。每走一步，蹄子都陷下去。', eff: { health: -4 } },
    { stages: ['growth'], w: 2, text: '一头牛咳嗽了一整夜。第二天，旁边的几头也开始咳。', eff: { health: -4 } },
    { stages: ['growth','adult'], w: 2, text: '你被赶进一条狭窄的通道，两边是铁栅栏。前面的牛在挤，后面的牛也在挤。', eff: { safety: -10 } },
    { stages: ['growth'], w: 1, text: '你的身体一个月比一个月结实。' },
    { stages: ['adult'], w: 2, need: 'dairy', once: true, text: '你第一次被牵到挤奶厅。金属挤奶机套在你的乳头上，每天两次。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, need: 'dairy', text: '你又怀孕了。配种的人在你身后站了一会儿，然后走开。', eff: { health: -3 } },
    { stages: ['adult'], w: 2, need: 'dairy', text: '你刚产下的小牛被牵走了。你在栏子里叫了好几天。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 1, need: 'india', text: '一位老妇人把一把草放到你面前。在这个村子里，母牛通常不会被送去屠宰。', eff: { food: +10, safety: +10 },
      fact: '印度多数邦以法律限制或禁止屠宰母牛，各邦规定不一（Business Standard 2015 年报道，引印度议会答复）' },
    { stages: ['adult'], w: 1, need: 'pastoral', text: '夜里，牛群不安地站着。远处有狮子的叫声，牧人举着火把走来走去。', eff: { safety: -5 } },
    { stages: ['old'], w: 1, need: 'pastoral', text: '干旱年，你和牛群走了几百公里去找水。', eff: { health: -10 } },
    { act: 'forage', stages: ['young','growth'], w: 3, text: '你低头吃着草，草尖上的露水沾湿了鼻子。', eff: { food: [6, 10] } },
    { act: 'forage', stages: ['growth'], need: 'feedlot', w: 3, text: '料槽里是玉米、豆粕和颗粒饲料。你吃得很快，瘤胃一天比一天鼓。', eff: { food: [10, 15], health: -2 } },
    { act: 'hide', stages: ['adult','old'], w: 2, text: '你走到树荫下，躺在干草上。苍蝇少了一些。', eff: { health: 3 } },
    { act: 'hide', stages: ['growth'], w: 2, text: '你挤到栏边的角落，离开了水槽。那里有一股泥和粪便混在一起的味道。', eff: { safety: 5, food: -5 } },
    { act: 'rest', stages: ['adult','old'], w: 2, text: '你躺在草地上慢慢反刍。身体暖了，你闭上眼睛。', eff: { health: 4 } },
    { act: 'rest', stages: ['growth'], w: 1, text: '你躺在泥里，身上的泥慢慢干成一层硬壳。', eff: { health: -2 } },
    { act: 'explore', stages: ['young','adult'], w: 2, text: '你跟着牛群往远处的草场走。路过一条小河，水很凉。', eff: { food: [6, 10], safety: -3 } },
    { act: 'explore', stages: ['adult'], w: 2, text: '你走出牛棚，在草场上绕了一圈，又回到了栏门口。', eff: { safety: 3 } },
    { act: 'mate', stages: ['adult'], need: 'dairy', w: 2, text: '配种的人把你牵进一个窄栏。你站着不动，之后几天身体开始发生变化。', eff: { health: -2 } },
    { act: 'explore', stages: ['old'], need: 'pastoral', w: 2, text: '你跟着老牛群走过干旱的山坡。在山脚下找到一汪水。', eff: { health: 3, food: 5 } },
    { stages: ['calf','young'], need: 'drought_year', w: 2, text: '草场里的草又干又硬。你的母亲低着头，想嚼出一点汁水来。', eff: { food: -5 } },
    { stages: ['young','growth'], need: 'drought_year', w: 2, text: '水塘的水位一天比一天低，泥底裂开了。你们排成一排，去很远的地方喝水。', eff: { health: -3 } },
    { stages: ['growth'], need: 'drought_year', w: 1, text: '牧场买来一车干草，按头分发。你吃到的那一份，比别的牛少了一把。', eff: { food: -4, safety: -3 } },
    { stages: ['young'], need: 'good_pasture', w: 2, text: '草场上的草长得齐整，一脚踩下去是软的。你吃得饱饱的。', eff: { food: +8 } },
    { stages: ['growth','adult'], need: 'good_pasture', w: 2, text: '今年雨水多，草场上的草一茬接一茬地长。牛群在草地上慢慢地走。', eff: { food: +5 } },
    { stages: ['adult'], need: 'good_pasture', w: 1, once: true, text: '这一年的草长得特别高。你站在草丛里，几乎看不见自己的腿。' },
    { stages: ['calf','young'], need: 'fmd_year', w: 2, text: '县里发现了口蹄疫，所有的牛都要被关在棚子里。你在棚子里待了好几个星期。', eff: { safety: -5 } },
    { stages: ['young','growth'], need: 'fmd_year', w: 2, text: '检疫的人来了，一头一头地看你的口腔，给你打针。他们在本子上记下每一个数字。', eff: { health: -4 } },
    { stages: ['growth','adult'], need: 'fmd_year', w: 1, text: '运牛的车停了一个月。饲料一天比一天少，你们只能靠牧场边上的一点草过活。', eff: { food: -8 } },
    { stages: ['calf'], need: 'nursed', w: 2, text: '母亲身上有你熟悉的味道。你用舌头去舔她的乳头，直到奶流出来。', eff: { food: +10 } },
    { stages: ['calf'], need: 'nursed', w: 2, once: true, text: '你第一次吃到初乳，又稠又黄。你吃得很急，肚子很快就鼓了起来。', eff: { health: +5 } },
    { stages: ['young'], need: 'nursed', w: 1, text: '你跟着母亲在草场上走。每隔一段时间，她就停下来，让你吃一口奶。', eff: { food: +5 } },
    { stages: ['calf'], need: 'bottle', w: 2, text: '饲养员用奶桶喂你。奶是温的，但你要使劲地吸，不然奶桶就会被你推开。', eff: { food: +8 } },
    { stages: ['calf'], need: 'bottle', w: 2, text: '你的栏子很小，只能站着或趴着。隔壁的犊牛在叫，但没有人回应你。', eff: { safety: -5 } },
    { stages: ['young'], need: 'bottle', w: 2, text: '你比同批的牛更怕人。别人抓你的时候，你很久都不肯放松。', eff: { safety: -3 } },
    { stages: ['calf'], need: 'hard_birth', w: 2, text: '你的腿软得很，站一会儿就跪了下去。工人把你身上擦干，让你躺在干草上。', eff: { health: -5 } },
    { stages: ['calf'], need: 'hard_birth', w: 2, text: '你的呼吸很慢，鼻子里有一点黏液。过了一夜，你才慢慢喘匀了气。', eff: { health: -6 } },
    { stages: ['young'], need: 'hard_birth', w: 1, text: '你跑得比同批的牛慢。别的牛跑远了，你还在后面一点一点地挪。', eff: { food: -4 } },
    { stages: ['young'], need: 'bold', w: 2, text: '你第一个跑过牧场的栅栏，在草场的另一边停下来，回头看同伴们还在磨蹭。', eff: { food: +5, safety: -3 } },
    { stages: ['growth'], need: 'cautious', w: 2, text: '你总是站在牛群的外圈，看着人的动作。有人靠近时，你先往后退了两步。', eff: { safety: +4 } },
    { stages: ['young','growth'], need: 'curious', w: 2, text: '你把鼻子伸进铁丝网的缝隙，嗅来嗅去。网那边是一片你没去过的草地。' },
    { stages: ['calf'], need: 'runt', w: 2, text: '你比同批的牛犊轻，站起来的时候总是晃。母亲舔你的时候，你几乎被推倒在地。', eff: { health: -5 } },
    { stages: ['adult'], need: 'robust', w: 2, text: '你的肩膀宽，走起来很稳。牛群里的老牛让开了路，你走到了水槽的最前面。', eff: { food: +5 } },
  ],

  opening: {
    title: '站起来，找乳房',
    body: '你刚落在湿草上，腿还软得打颤。母亲低头看着你，身上有她的气味。站起来、找到乳房、吃到初乳，要花不少力气；躺着歇一会儿省力，但吃初乳就晚了。',
    options: [
      { t: '马上站起来找乳房', hint: '初乳↑ 体力↓', eff: { health: +5, food: +10 }, risk: 0.8, riskDays: 3,
        result: '你摇摇晃晃站起来，循着母亲的气味找到了乳房。你吃到了初乳，身上慢慢有了热气。' },
      { t: '先躺着歇一会儿', hint: '省力 · 初乳晚', eff: { health: -5 }, risk: 1.2, riskDays: 3,
        result: '你躺在湿草上歇了很久，身上一直冷。等你再站起来，母亲已经走到别处去吃草了。' },
    ],
  },
  actions: {
    forage: { name: '吃草或吃料', desc: '在草场上吃草，在饲养场和挤奶场里吃饲料。', text: ['你低头吃着草，草尖上的露水沾湿了鼻子。', '你一口接一口，反刍的声音从胃里传上来。', '身边的牛也在吃，偶尔抬头看看远处。'] },
    hide: { name: '走到树荫或棚边', desc: '离开牛群，到树下、棚子边或栏角去。', text: ['你在树荫下站着，苍蝇少了一些。', '你走到棚边，背靠着木头。', '远处的牛群还在走动，你没有跟过去。'] },
    rest: { name: '躺下反刍', desc: '躺下来，慢慢地反刍，身体放松。', text: ['你躺在地上，慢慢反刍。', '身体暖了一些，你闭上了眼睛。', '腿有点酸，你换了一边躺。'] },
    explore: { name: '往别的草场走', desc: '离开当前的地方，走到更远的草场或水边。', stages: ['young','adult','old'], text: ['你跟着牛群往远处的草场走，脚下的泥很深。', '你路过一条小河，水很凉。', '你在草场边缘走了一圈，又回到了牛群里。'] },
    mate: { need: 'female&!feedlot', name: '配种', desc: '被牵进配种栏，等待配种的人完成配种。', done: '你怀上了一头牛犊。' },
  },
  brood: [1, 1],
  decisions: [
    {
      id: 'calf_call', at: 0.5, need: 'dairy',
      title: '母亲的叫声',
      body: '你被带到一个单独的栏里，离母亲只隔着一堵墙。它在那边叫，你也叫。你可以继续叫，也可以安静下来，把身体靠在墙上。',
      options: [
        { t: '继续叫', hint: '压力↑ 体力↓',
          eff: { health: -5, safety: -5 }, risk: 1.1, riskDays: 5,
          result: '你一直叫到嗓子哑了。过了几天，母牛的叫声也慢慢停了。' },
        { t: '安静地靠墙', hint: '安静',
          eff: { safety: +5 },
          result: '你靠着墙，慢慢睡着了。' },
      ],
    },
    {
      id: 'water', stage: 'growth',
      title: '水槽边的位置',
      body: '水槽又窄又挤，牛一头挨着一头。你可以挤到水槽边去等，也可以在边缘站着，等别的牛喝完。',
      options: [
        { t: '挤到水槽边', hint: '水↑ 挤压↑',
          eff: { health: +5, safety: -10 }, risk: 1.3, riskDays: 4,
          result: '你挤进去，喝到了水。旁边的牛用角顶了你的肩。' },
        { t: '在边缘等', hint: '水少 安全',
          eff: { health: -5, safety: +5 },
          result: '你等了很久，水槽边的牛终于走开，你才喝到了一口。' },
      ],
    },
    {
      id: 'drought_move', stage: 'adult', need: 'pastoral',
      title: '草快吃完了',
      body: '草场上的草被吃光了，远处的山坡上有一片绿色。牛群已经开始向那里移动。你可以跟着走，也可以留在原地。',
      options: [
        { t: '跟着牛群走', hint: '食物↑↑ 路上风险↑',
          eff: { food: +25 }, risk: 1.4, riskDays: 20,
          result: '你走了两个星期，脚底磨出了血。到了山坡，草比想象中还少。' },
        { t: '留在原地', hint: '食物↓',
          eff: { food: -20, health: -5 },
          result: '你在干草堆里慢慢地嚼，身上一天比一天轻。' },
      ],
    },
    {
      id: 'sick_neighbor', stage: 'growth',
      title: '隔壁的牛',
      body: '隔壁的一头牛咳得厉害，鼻子在流绿色的鼻涕。它躺在你旁边的时候，你能闻到它呼吸的味道。',
      options: [
        { t: '挪到远处', hint: '安全↑ 感染风险↓',
          eff: { safety: +5 }, risk: 0.9, riskDays: 10,
          result: '你挪到了另一头。咳嗽声还是传了过来。' },
        { t: '继续躺在它旁边', hint: '感染风险↑',
          eff: { health: -3 }, risk: 1.4, riskDays: 10,
          result: '你们挤在一起睡了一夜。第二天，你也开始咳。' },
      ],
    },
    {
      id: 'feed_rush', at: 300, need: 'feedlot',
      title: '料槽边挤满了牛',
      body: '料槽边挤满了牛，每一头都在往前拱。你可以挤到料槽前面，也可以等人群散开。这些选择改变不了出栏的日子。',
      options: [
        { t: '挤到料槽前', hint: '食物↑↑ 挤压↑',
          eff: { food: +15, safety: -10 }, risk: 1.25, riskDays: 3,
          result: '你挤到了料槽前，吃了满满一嘴玉米。旁边的牛用头顶你的肩。' },
        { t: '等人群散开', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +5 },
          result: '你等了很久，才轮到你吃。料已经有点凉了。' },
      ],
    },
    {
      id: 'lush_pasture', at: 700,
      title: '一片嫩苜蓿',
      body: '前面是一片嫩苜蓿，绿得发亮。你想一口吃进去，但这种嫩草吃多了，瘤胃里会积起很多气体。你可以埋头吃满嘴，也可以慢慢吃，停下来反刍。',
      options: [
        { t: '埋头吃满嘴', hint: '食物↑↑ 胀气风险↑',
          eff: { food: +20 }, kill: 0.04, cause: 'bloat',
          result: '你吃得很撑。过了一会儿，左腹开始发胀。' },
        { t: '慢慢吃，停下来反刍', hint: '食物↑ 稳妥',
          eff: { food: +5, health: +3 },
          result: '你慢慢吃，吃一会儿就停下来，躺下反刍。' },
      ],
    },
    {
      id: 'milking_kick', at: 900, need: 'dairy',
      title: '挤奶机',
      body: '挤奶的人把机器套在你的乳头上，每天两次，机器的声音很响。你可以站着让他们挤，也可以踢开机器。这些选择改变不了你的淘汰日期。',
      options: [
        { t: '站着让挤', hint: '稳定 · 健康↓',
          eff: { food: +5, health: -2 },
          result: '机器一开一关，你站着，眼睛看着前面的墙。' },
        { t: '踢开机器', hint: '安全↓ 健康↓',
          eff: { safety: -5, health: -5 }, risk: 1.2, riskDays: 3,
          result: '你踢开了挤奶机，机器翻倒在地上。挤奶的人推着你，把你拽回了栏里。' },
      ],
    },
    {
      id: 'old_shade', at: 1600,
      title: '树荫还是水边',
      body: '天很热。树荫下有一块干地，水边长着嫩草，但离这里有一段路。你的腿已经不如从前有力。',
      options: [
        { t: '在树荫下躺着', hint: '健康↑ 食物↓',
          eff: { health: +3, food: -5 },
          result: '你躺在树荫下，慢慢地反刍。' },
        { t: '走去远处的水边', hint: '食物↑ 路上消耗↑',
          eff: { food: +10, health: -5 }, risk: 1.2, riskDays: 30,
          result: '你走了一段路，喝到了水，也吃到了一些嫩草。回来的路上，你走得很慢。' },
      ],
    },
    {
      id: 'hard_birth_stand', at: 1, need: 'hard_birth',
      title: '站不起来',
      body: '你躺在干草上，腿还软着。母亲在旁边低低地哞了一声。你可以努力撑着站起来去找奶，也可以先躺着歇一会儿。',
      options: [
        { t: '撑着站起来找奶', hint: '初乳↑ 体力↓', eff: { health: -3, food: +5 }, risk: 1.1, riskDays: 3,
          result: '你摇晃着站起来，循着母亲的气味找到了乳房。' },
        { t: '先躺着歇一会儿', hint: '体力↑ 初乳晚', eff: { health: -5 }, kill: 0.03, cause: 'calf_disease',
          result: '你躺在干草上，身上越来越冷。等你再想站起来时，已经来不及了。' },
      ],
    },
    {
      id: 'hay_ration', at: 400, need: 'drought_year',
      title: '干草的分配',
      body: '牧场按头分发干草。你站在靠后的位置，前面的牛已经把草堆吃出了一个坑。',
      options: [
        { t: '挤到前面抢', hint: '食物↑ 挤压↑', eff: { food: +10, safety: -8 }, risk: 1.2, riskDays: 20,
          result: '你挤进去，抢到了一把干草。有头牛用角顶了一下你的肩。' },
        { t: '等在后面，吃剩下的', hint: '食物↓', eff: { food: -8 }, risk: 1.1, riskDays: 20,
          result: '你吃到的，只有草堆底下的碎渣。' },
      ],
    },
    {
      id: 'fmd_pen', at: 250, need: 'fmd_year',
      title: '检疫的围栏',
      body: '检疫的人要把你们赶进一个窄围栏。围栏里很挤，你身上沾满了别的牛的口水。',
      options: [
        { t: '挤在中间，等待检疫', hint: '健康↓ 安全↓', eff: { health: -3, safety: -3 }, risk: 1.1, riskDays: 14,
          result: '你挤在中间，等了一下午。轮到你时，针扎得很深。' },
        { t: '挤到围栏边上', hint: '安全↑ 食物↓', eff: { safety: +3, food: -3 },
          result: '你挤到围栏边，人群在中间走动，你没有被叫到。' },
      ],
    },
    {
      id: 'bottle_teat', at: 60, need: 'bottle',
      title: '奶桶旁的犊牛',
      body: '饲养员把奶桶放在地上。隔壁栏子的犊牛把头伸过来，想抢你的奶。',
      options: [
        { t: '把头伸过去抢', hint: '食物↑ 挤压↑', eff: { food: +8, safety: -5 }, risk: 1.2, riskDays: 5,
          result: '你抢到了几口，隔壁的犊牛用头顶你。' },
        { t: '等它吃完', hint: '食物↓', eff: { food: -5 },
          result: '你等了很久，奶桶已经空了。' },
      ],
    },
    {
      id: 'bold_fence', at: 560, need: 'bold',
      title: '草场外的铁丝网',
      body: '铁丝网的另一边是一大片草。牧场的人没有锁门，只挂了一根电线在上面。',
      options: [
        { t: '钻过去', hint: '食物↑↑ 受伤风险↑', eff: { food: +15, safety: -5 }, risk: 1.3, riskDays: 10,
          result: '你钻过铁丝网，在那片草地上吃了很久。回来时，身上多了一道划伤。' },
        { t: '留在栏里', hint: '安全↑', eff: { safety: +3 },
          result: '你站在栏里，看着那片草，直到天黑。' },
      ],
    },
  ],

  idle: [
    '草地上的风吹过来，带着泥土和青草的味道。',
    '你甩着尾巴，赶着苍蝇。',
    '身边的一头牛在反刍，嘴巴慢慢地动着。',
    '你低头吃东西，过一会儿又抬头看看远处。',
    '夜里很安静，只有牛群互相挤着的声音。',
    '一只鸟落在你背上，很快又飞走了。',
    '远处有人在吆喝，然后声音慢慢消失。',
    '你在原地站了很久，腿有点酸。',
  ],

  epitaph: '你活了大约两年，或者六年。你的一生，由别人替你决定了好几次。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'sheep',
  name: '羊',
  en: 'Sheep',
  sci: 'Ovis aries（绵羊）',
  emoji: '🐑',
  scene: 'mountain',
  kind: 'farmed',
  tagline: '人类最早驯化的家畜之一。羊能记住几十张不同的脸',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '产地', options: [
        ['澳大利亚干旱草原上的美利奴羊牧场', 3, { set: 'merino', risk: 0.9 }],
        ['英国山地的牧羊场，羊群在石楠丛和山坡间放养', 2, { set: 'hill' }],
        ['内蒙古草原上的一个蒙古羊群', 3, { set: 'grass' }],
        ['新西兰绿色草坡上的牧场', 2, { set: 'meat' }],
      ]},
      { label: '将来的用途', options: [
        ['肉用羔羊，约 8 到 9 个月后出栏', 6, { set: 'lamb' }],
        ['留作母羊，用于繁殖和产毛', 4, { set: 'ewe', risk: 0.4 }],
      ]},
      { label: '出生的季节', options: [
        ['春天的羔，草刚发青，夜里还很冷', 3, { set: 'spring_lamb' }],
        ['夏天的羔，草场上的草正茂盛', 2, { food: +5, set: 'summer_lamb' }],
        ['冬天的羔，在棚里产下，外面的雪还没化', 2, { health: -3, set: 'winter_lamb' }],
      ]},
      { label: '照看你们的人', options: [
        ['牧人每天早上都来数羊，发现问题会单独照顾', 3, { health: +3, set: 'attentive_herder' }],
        ['牧人几天才来一次，羊群基本靠自己找草找水', 2, { safety: -3, set: 'absent_herder' }],
        ['放羊的是一个十二岁的孩子，他要同时照看几百只羊', 1, { risk: 1.1, set: 'child_herder' }],
      ]},
    ],
    siblings: 200,
    siblingsLabel: '同一群里同年出生的羔羊',
    intro: '你出生在{产地}。你身上还裹着湿毛，是{sex}。同一群里和你同年出生的羔羊大约有 {siblings} 只。你的将来：{将来的用途}。',
  },

  stages: [
    { id: 'newborn', name: '新生',     from: 0,   unit: 'hour' },
    { id: 'lamb',    name: '羔羊',     from: 3,   unit: 'week' },
    { id: 'young',   name: '青年（育肥）', from: 120, unit: 'week' },
    { id: 'ewe',     name: '母羊',     from: 300, unit: 'year' },
  ],
  maturity: 210,   // 羔羊大约 6–8 个月开始有性成熟
  maxAge: 3650,

  // 肉用羔羊约 240–270 天屠宰（曲线上的悬崖）；留下的母羊可以活 5–10 年，通常 4–6 年后淘汰
  survival: [[0,1],[1,0.95],[7,0.93],[30,0.9],[90,0.88],[150,0.85],[210,0.82],[240,0.8],[255,0.2],[270,0.08],[400,0.07],[700,0.06],[1200,0.05],[1800,0.03],[2555,0.01],[3650,0]],
  survivalNote: '肉用羔羊在 6–9 个月时出栏（曲线上 240–270 天附近的悬崖）；留作母羊的羊可以活 5–10 年；风险倍数用来区分用途和产地的差异，这里是粗略近似',

  init: { health: 80, food: 65, safety: 55 },
  foodDrain: 0,

  causes: [
    { id: 'slaughter', escape: false, w: 40, stages: ['young','ewe'], short: '屠宰',
      text: '你被赶上卡车，送到屠宰场。之后的事情很快，你几乎没有时间去想任何事。' },
    { id: 'predator', escape: true, w: 3, stages: ['lamb','young','ewe'], need: '!meat', short: '被狐狸或野狗咬死',
      text: '夜里，一只狐狸或野狗从栏边的缝隙钻进来。羊群炸开，你没能跑远。' },
    { id: 'eagle', escape: true, w: 1, stages: ['lamb'], need: '!meat', short: '被猛禽抓走',
      text: '一只猛禽从山坡上俯冲下来，抓走了一只落在后面的羔羊。那只羔羊就是你。' },
    { id: 'lamb_cold', escape: false, w: 3, stages: ['newborn','lamb'], short: '冻死或饿死',
      text: '春天的一场雨夹雪，你和母亲没能找到避风的地方。' },
    { id: 'pneu', escape: false, w: 2, stages: ['lamb','young'], short: '肺炎',
      text: '你咳嗽，鼻子里流出黏液，呼吸越来越慢。' },
    { id: 'footrot', escape: false, w: 1, stages: ['young','ewe'], short: '蹄腐烂',
      text: '雨季的泥地让你的蹄子开始腐烂。你走不动，躺在了泥里。' },
    { id: 'drought', escape: false, w: 2, stages: ['young','ewe'], short: '干旱，草不够吃',
      text: '草场枯了，羊群把附近能吃的草都吃光了。你瘦得只剩下骨架。' },
    { id: 'old', escape: false, w: 2, stages: ['ewe'], short: '老年',
      text: '你的牙齿磨平了，吃草越来越慢。你躺在草地上，没有再站起来。' },
  ],

  events: [
    { stages: ['newborn'], w: 3, text: '你刚落地就被母亲舔干。你第一次抬起头，听见她在叫你。', eff: { health: +3 } },
    { stages: ['newborn'], w: 2, once: true, text: '你第一次吃到初乳。它又稠又黄，你吃得很急。', eff: { health: +5 } },
    { stages: ['lamb'], w: 2, need: 'merino', once: true, text: '牧工在你后臀的皮肤上做了一个小手术（mulesing），想让那里少沾上粪便，也防止羊蝇蛆。', eff: { health: -10 } },
    { stages: ['lamb'], w: 3, text: '你和羊群一起跟在母亲后面，每一只羊走的路都差不多。',
      fact: 'Kendrick 等（2001，《Nature》）：绵羊能辨认大约 50 张不同的羊脸，并且能记住至少两年' },
    { stages: ['lamb'], w: 2, text: '一场雨之后，地上冒出了新草。你们低头吃着，嘴里吃进了不少泥。', eff: { food: +15 } },
    { stages: ['lamb'], w: 2, need: '!meat', text: '一只狐狸在山坡上走过。羊群一齐抬起头，然后都站住不动。', eff: { safety: -5 } },
    { stages: ['lamb'], w: 1, once: true, text: '牧羊人在你的耳朵上打了一个耳标，记下了你的编号。' },
    { stages: ['lamb','young'], w: 2, text: '夜里的羊栏很挤，羊的体温一起升上来。你的毛被汗打湿，又慢慢干透。', eff: { health: -2 } },
    { stages: ['young'], w: 2, text: '草场上的草长得很高，你吃饱了，躺在阳光底下反刍。', eff: { food: +15, health: +3 } },
    { stages: ['young'], w: 2, once: true, need: '!meat', text: '你被赶进围栏，剪去了一层羊毛。剪毛的人动作很快，羊毛一块一块落在地上。', eff: { health: -3 } },
    { stages: ['young'], w: 2, text: '羊群在山坡上走着。一只羊突然跳起来，所有的羊都跟着跑了几步。', eff: { safety: -5 } },
    { stages: ['young'], w: 1, text: '山的另一边传来狗的叫声。羊群向一起挤。', eff: { safety: -3 } },
    { stages: ['young'], w: 2, text: '你被赶到一个围栏里，周围的羊都在叫。卡车已经停在门口。', eff: { safety: -15 } },
    { stages: ['young'], w: 1, need: 'grass', text: '草原上起了大风，沙子扑在脸上。羊群背着风站着。', eff: { health: -3 } },
    { stages: ['ewe'], w: 2, once: true, text: '你第一次产羔。小羊一落地就站起来，你舔它的脸。', eff: { offspring: [1, 2] } },
    { stages: ['ewe'], w: 3, text: '一年又一年。你每年产下一到两只羊羔，身体一年比一年瘦。', eff: { offspring: [1, 2], health: -3 } },
    { stages: ['ewe'], w: 2, text: '你的一颗牙松了。吃草的时候，你只能用另一边咀嚼。', eff: { food: -10 } },
    { stages: ['ewe'], w: 2, text: '雨季到了，蹄子又开始疼。你每天都要跛着走到水边。', eff: { health: -4 } },
    { stages: ['ewe'], w: 1, text: '牧羊人数着羊群，数到你的时候停了一下，又接着数下去。' },
    { act: 'forage', stages: ['lamb','young'], w: 3, text: '你啃着草根，嘴里吃进了不少泥。', eff: { food: [6, 10] } },
    { act: 'forage', stages: ['young'], w: 2, text: '草场边上长出一片新草，羊群挤在一起抢。', eff: { food: [6, 10], safety: -3 } },
    { act: 'hide', stages: ['lamb'], w: 2, text: '你挤到母羊的身后，羊群的身体挡住了风。', eff: { safety: 5, health: 2 } },
    { act: 'hide', stages: ['young','ewe'], w: 2, text: '你缩在羊群中间，外圈的羊在咩叫，你只听见它们的声音。', eff: { safety: 3, food: -3 } },
    { act: 'rest', stages: ['lamb'], w: 2, text: '你卧在母羊旁边，耳朵动了动，很快睡着了。', eff: { health: 3 } },
    { act: 'rest', stages: ['ewe'], w: 2, text: '你卧在草地上反刍，身体慢慢暖了起来。', eff: { health: 2 } },
    { act: 'explore', stages: ['lamb'], need: '!meat', w: 2, text: '你离开羊群，往山坡上走了几步。远处有狐狸的影子。', eff: { safety: -5 } },
    { act: 'explore', stages: ['young','ewe'], w: 2, text: '你沿着石墙走，找到一处没有人踩过的草皮，吃得很香。', eff: { food: [6, 10] } },
    { act: 'mate', stages: ['ewe'], need: 'ewe', w: 2, text: '公羊被赶进羊群，追着你绕过石墙。你躲了几次，最后还是没有躲开。', eff: { safety: -2 } },
    { stages: ['newborn'], need: 'spring_lamb', w: 2, text: '春天的风还很冷，你刚落地，身上的湿毛很快就凉透了。母羊用力舔你，直到你发出一声咩叫。', eff: { health: -2 } },
    { stages: ['lamb'], need: 'spring_lamb', w: 2, text: '草刚刚发青。你吃的第一口草又嫩又甜，嘴里有一股水的味道。', eff: { food: +8 } },
    { stages: ['lamb'], need: 'spring_lamb', w: 1, text: '春天的雨下了好几天，羊圈里全是泥。你的蹄子在泥里陷了一下。', eff: { health: -2 } },
    { stages: ['newborn'], need: 'summer_lamb', w: 2, text: '夏天的草场很大。你刚出生，就闻到青草和热风混在一起的味道。', eff: { health: +2 } },
    { stages: ['lamb'], need: 'summer_lamb', w: 2, text: '草又高又密。你在草丛里一蹦一跳，身上很快沾满了草籽。', eff: { food: +10 } },
    { stages: ['lamb','young'], need: 'summer_lamb', w: 1, text: '夏天的苍蝇很多，落在你的耳朵和眼角上。你甩个不停。', eff: { health: -3 } },
    { stages: ['newborn'], need: 'winter_lamb', w: 2, text: '棚里还带着雪的凉气。你刚落地，就靠进母羊的身子底下，身上的湿毛一点点暖干了。', eff: { health: -3 } },
    { stages: ['lamb'], need: 'winter_lamb', w: 2, text: '雪还没化，草都埋在下面。你们只能啃棚里的干草，又硬又涩。', eff: { food: -8 } },
    { stages: ['lamb'], need: 'winter_lamb', w: 1, once: true, text: '牧人在棚子里点了灯，给你们这些刚出生的羔羊挂上耳标。', eff: { safety: +3 } },
    { stages: ['lamb'], need: 'attentive_herder', w: 2, text: '牧人每天早上都来数羊。谁看着不对劲，他就把谁挑出来，单独喂一点料。', eff: { health: +4 } },
    { stages: ['young'], need: 'attentive_herder', w: 2, text: '牧人把草场分成几块，轮流放羊。你们吃完一块，就换到下一块，草总是有的。', eff: { food: +8 } },
    { stages: ['ewe'], need: 'attentive_herder', w: 1, text: '牧人给你的蹄子上药，动作很轻。你在他手里站了很久，没有躲开。', eff: { health: +3 } },
    { stages: ['lamb'], need: 'absent_herder', w: 2, text: '牧人几天才来一次。羊群自己找草、找水，你学会了跟着老羊走。', eff: { safety: -3 } },
    { stages: ['young'], need: 'absent_herder', w: 2, text: '草场边上的水槽漏了，好几天没人修。你和羊群只能去很远的泥坑喝水。', eff: { health: -4 } },
    { stages: ['young','ewe'], need: 'absent_herder', w: 1, text: '一只羊的腿被夹在石缝里。没有人来，它叫了很久，最后自己挣扎了出来。', eff: { health: -4 } },
    { stages: ['lamb'], need: 'child_herder', w: 2, text: '放羊的是个十二岁的孩子。他把羊群往山上赶，有时候自己也跟着羊跑了一段。', eff: { safety: -3 } },
    { stages: ['young'], need: 'child_herder', w: 2, text: '孩子拿着一根长棍，走在羊群后面。他吹了一声口哨，羊群立刻往一个方向涌了过去。' },
    { stages: ['young','ewe'], need: 'child_herder', w: 1, text: '孩子在草坡上睡着了，羊群散开了一大片。他醒来后，一只一只地把羊赶了回来。', eff: { safety: -5 } },
    { stages: ['lamb'], need: 'bold', w: 2, text: '你第一个从母羊身边跑开，跳过一道小水沟，跑到羊群前面去了。', eff: { food: +3, safety: -3 } },
    { stages: ['lamb','young'], need: 'cautious', w: 2, text: '你总是贴着母羊走，任何一点声响都能让你停下来。羊群走得很慢，你也跟着慢。', eff: { safety: +4, food: -2 } },
    { stages: ['young'], need: 'curious', w: 2, text: '你走到石墙的缺口，把头伸出去看对面的草场。那边有一只陌生的羊也在看你。' },
    { stages: ['newborn'], need: 'runt', w: 2, text: '你比同胎的羔羊都小，母羊先舔的是它们。你站起来时，已经慢了一拍。', eff: { health: -5 } },
    { stages: ['ewe'], need: 'robust', w: 2, text: '你的骨架大，毛厚。冬天的时候，你总站在羊群最外圈，替别的羊挡着风。', eff: { safety: +3 } },
  ],

  opening: {
    title: '跟着母羊，还是留在棚角',
    body: '你刚落地，身上还裹着湿毛。母羊站起来，要带着羊群往草场走。你可以立刻站起来跟上去，也可以留在避风的棚角里等。',
    options: [
      { t: '紧紧跟着母羊', hint: '吃奶↑ 受冷风险↑', eff: { food: +10, health: +3 }, risk: 1.2, riskDays: 5,
        result: '你跌跌撞撞地跟在母羊后面，几次差点被落下。你每次都赶上了，也吃到了奶。' },
      { t: '留在棚角', hint: '避风 · 吃奶少', eff: { health: +3, food: -5 }, risk: 0.8, riskDays: 5,
        result: '棚子挡住了风。母羊走远了，你在角落里等她回来，等了很久。' },
    ],
  },
  actions: {
    forage: { name: '低头吃草', desc: '沿着草场一路啃过去，遇到嫩草就多吃一口。', text: ['你啃着草根，嘴里进了一口泥。', '你吃饱了，慢慢地嚼。', '身边的羊也在吃，咬草的声音此起彼伏。'] },
    hide: { name: '挤进羊群中间', desc: '离开外圈，挤到羊群的中间，被别的羊挡住。', text: ['你挤进羊群中间，身边都是羊的体温。', '一只羊的蹄子踩到了你的耳朵，你甩了甩头。', '外面的风吹不进来了。'] },
    rest: { name: '卧下反刍', desc: '卧在草地上，慢慢地反刍，身体放松。', text: ['你卧在草地上，慢慢地反刍。', '你的耳朵动了动，又很快垂下去。', '太阳晒在背上，身上暖暖的。'] },
    explore: { name: '离开羊群去远处', desc: '离开羊群，沿着山坡或石墙走到远处。', stages: ['lamb','young','ewe'], text: ['你离开羊群，往山坡上走了几步。', '你沿着石墙走，找到一处没人踩过的草皮。', '远处有一只羊在叫，你回头看了看。'] },
    mate: { need: 'ewe', name: '配种', desc: '公羊被赶进羊群，在其中追逐母羊。', done: '你怀了一胎，之后产下了 {n} 只羔羊。' },
  },
  brood: [1, 2],
  decisions: [
    {
      id: 'eagle_flee', at: 40, stage: 'lamb', need: '!meat',
      title: '山坡上的影子',
      body: '一只猛禽的影子从你身上掠过。羊群乱成一团。你可以挤进羊群中间，也可以留在外圈吃草。',
      options: [
        { t: '挤进羊群中间', hint: '安全↑↑',
          eff: { safety: +15 },
          result: '你挤进了羊群中间。影子从头顶掠过，又飞走了。' },
        { t: '留在外圈', hint: '食物↑ 风险↑',
          eff: { food: +10, safety: -10 }, risk: 1.5, riskDays: 3,
          result: '你低头吃草，没有去看天空。' },
      ],
    },
    {
      id: 'lost_mother', stage: 'lamb',
      title: '走散了',
      body: '羊群移到了另一片草场。你和母亲之间隔着一道篱笆，她在那边叫你。你可以从篱笆下面钻过去，也可以在原地等。',
      options: [
        { t: '从篱笆下钻过去', hint: '食物↑ 受伤风险↑',
          eff: { food: +10, safety: +5 }, risk: 1.3, riskDays: 3,
          result: '你挤过篱笆，身上蹭掉了一撮毛，终于找到了母亲。' },
        { t: '在原地等', hint: '安全↓ 食物↓',
          eff: { safety: -10, food: -10 },
          result: '你在篱笆这边站了很久。母亲没有回来，你又叫了几次。' },
      ],
    },
    {
      id: 'drought_move', stage: 'young', need: 'grass',
      title: '草场吃光了',
      body: '草场上的草已经被吃光了。远处的河谷还有一片绿，牧人正赶着羊群往那里走。你可以跟着走，也可以留在原地。',
      options: [
        { t: '跟着羊群走', hint: '食物↑↑ 路上风险↑',
          eff: { food: +25 }, risk: 1.4, riskDays: 15,
          result: '你走了好几天，夜里冷得发抖。到了河谷，草比想象中少，但总算能吃饱。' },
        { t: '留在原地', hint: '食物↓',
          eff: { food: -20, health: -5 },
          result: '你在干草上啃了几口，身体一天天瘦下去。' },
      ],
    },
    {
      id: 'shearing', stage: 'young', need: 'merino',
      title: '剪毛的日子',
      body: '牧人要给羊群剪毛。你可以挤在一起等着，也可以躲到栏子的角落。不论你选什么，剪毛都会发生。',
      options: [
        { t: '挤在一起等', hint: '安全↑',
          eff: { safety: +5 },
          result: '你和羊群挤在一起，一只一只地轮到了你。' },
        { t: '躲到角落', hint: '安全↓ 压力↑',
          eff: { safety: -5, health: -3 },
          result: '你缩在角落里，被牧人从后面拖了出来。' },
      ],
    },
    {
      id: 'lambing_ground', at: 500, need: 'ewe',
      title: '产羔的地方',
      body: '产羔的日子快到了。棚里干燥、避风，但挤满了母羊。山坡上有一处背风的地方，安静，却离狐狸的洞不远。',
      options: [
        { t: '到棚里产羔', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 },
          result: '你走进棚里，在干草上产下了羔羊。羊群在外面叫了一夜。' },
        { t: '到山坡背风处产羔', hint: '安静 · 被捕食风险↑',
          eff: { food: +5, safety: -5 }, risk: 1.3, riskDays: 3, kill: 0.04, cause: 'predator',
          result: '你在山坡的背风处产下了羔羊。夜里有几声狗叫，你紧紧护着它。' },
      ],
    },
    {
      id: 'ewe_rain', at: 1200,
      title: '又下雨了',
      body: '雨季又来了，地上泥水很深。棚里的干草很干，但要在泥里泡很久，才能吃到草。',
      options: [
        { t: '站在棚里的干草上', hint: '健康↑ 食物↓',
          eff: { health: +3, food: -3 },
          result: '你站在干草上，蹄子很快干了。' },
        { t: '到泥地里吃草', hint: '食物↑ 蹄病风险↑',
          eff: { food: +10, health: -4 }, risk: 1.2, riskDays: 10,
          result: '你在泥里走了一天，吃到了几口嫩草。之后几天，你的蹄子开始发疼。' },
      ],
    },
    {
      id: 'old_ewe', at: 2400, need: 'ewe',
      title: '牙齿越来越松',
      body: '你的牙齿越来越松，咬草的时候，嘴里总有草渣掉出来。草场边的棚子里有人送来的料，草场上的草却更多。',
      options: [
        { t: '去草场吃草', hint: '食物↑ 体力↓',
          eff: { food: +10, health: -3 },
          result: '你低头啃了一整天，嘴里掉出来的草渣比吃进去的还多。' },
        { t: '去棚边等送料', hint: '食物↓ 安全↑',
          eff: { food: +5, safety: +5 },
          result: '你在棚边等着，料送来的时候，你吃得很慢。' },
      ],
    },
    {
      id: 'snow_night', at: 40, need: 'winter_lamb', stage: 'lamb',
      title: '夜里下了大雪',
      body: '夜里下起了大雪，棚门被风吹开了一条缝。你可以挤进棚中间，也可以到门边的干草堆上。',
      options: [
        { t: '挤进棚中间', hint: '暖和↑ 安全↑', eff: { safety: +5, health: +3 },
          result: '你挤进羊群中间，身上很快暖和起来。门外的风一阵一阵地吹。' },
        { t: '待在门边的干草堆上', hint: '吃得多 · 受冷风险↑', eff: { food: +8, health: -5 }, risk: 1.2, riskDays: 10,
          result: '你在门边吃了很多干草，但冷风一直吹在背上。' },
      ],
    },
    {
      id: 'herder_gate', at: 120, need: 'absent_herder',
      title: '漏水的水槽',
      body: '草场边的水槽漏了好几天，牧人还没来修。远处有一个泥坑，但要走很长一段路。',
      options: [
        { t: '走到远处的泥坑喝水', hint: '喝水↑ 路上消耗↑', eff: { health: -3, food: +3 }, risk: 1.2, riskDays: 5,
          result: '你走了很远，泥水里有一股腥味。你还是喝了几口。' },
        { t: '在水槽边等牧人', hint: '安全↑ 缺水', eff: { health: -5 },
          result: '你在水槽边等了三天，牧人才来。' },
      ],
    },
    {
      id: 'bold_wall', at: 150, need: 'bold',
      title: '石墙的缺口',
      body: '石墙上有一个缺口，外面是另一片草场。羊群还在等牧人的口哨。',
      options: [
        { t: '跳过缺口', hint: '食物↑ 被捕食风险↑', eff: { food: +10, safety: -5 }, risk: 1.3, riskDays: 4, kill: 0.02, cause: 'predator',
          result: '你跳过缺口，在外面吃了一大口草。远处的狗叫了两声。' },
        { t: '留在羊群里', hint: '安全↑', eff: { safety: +3 },
          result: '你跟着羊群慢慢地走，没有去看墙外。' },
      ],
    },
    {
      id: 'cautious_lamb', at: 60, need: 'cautious',
      title: '牧人的脚步声',
      body: '牧人从坡上走下来，手里拿着一根棍子。羊群都抬起了头。你可以躲到母羊身后，也可以走到前面去看他。',
      options: [
        { t: '躲到母羊身后', hint: '安全↑', eff: { safety: +5 },
          result: '你躲在母羊身后，只露出一只耳朵。' },
        { t: '走到前面去看', hint: '食物↑ 安全↓', eff: { food: +3, safety: -5 },
          result: '你走到前面，牧人拍了拍你的头，又去数别的羊了。' },
      ],
    },
  ],

  idle: [
    '风吹过草场，草尖一起倒向一边。',
    '你咩了一声，没有得到回应，又咩了一声。',
    '羊群里，每只羊的脸都不太一样。',
    '你低头啃着地上的草根。',
    '草场边的一棵树下，羊群正在打盹。',
    '远处有狗叫，很快就停了。',
    '一只羊在你旁边卧下，反刍着，慢慢闭上了眼睛。',
    '雨停了，地上有一股泥土的味道。',
  ],

  epitaph: '你活了大约八个月，或者五年。羊群里没有人记得你的名字，但它们认得你的脸。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'rat',
  name: '褐家鼠',
  en: 'Brown rat',
  sci: 'Rattus norvegicus（褐家鼠，代表城市里的野生鼠类）',
  emoji: '🐀',
  scene: 'city',
  kind: 'wild',
  tagline: '你住在城市的地下，人们大多只在夜里才能看见你的影子',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['下水道边的一个土洞里', 4, { food: +5, risk: 1.1 }],
        ['一堆建筑垃圾下面', 3, {}],
        ['餐馆后厨的墙缝里', 3, { food: +15, risk: 1.2 }],
        ['港口仓库里的一个木箱底下', 2, { food: +10 }],
      ]},
      { label: '出生那一年的年景', options: [
        ['一个寻常的年份，夏天有雨，冬天不太冷', 5, { set: 'normal_year' }],
        ['一个暖冬，整个冬天城里几乎没有下雪', 2, { food: +8, set: 'warm_year' }],
        ['一个大旱年，下水道的水位一直在往下落', 2, { health: -5, food: -5, risk: 1.15, set: 'drought_year' }],
        ['一个连续多周大雨的雨季，下水道常年漫水', 1, { health: -4, risk: 1.2, set: 'wet_year' }],
      ]},
      { label: '母亲的经历', options: [
        ['母亲熟悉人的作息，她常在后厨的夜里出门觅食', 3, { food: +5, set: 'urban_wise' }],
        ['母亲还很年轻，这是她第一次带窝', 2, { health: -3, set: 'young_mother' }],
        ['母亲在一次捕鼠行动里伤了一条后腿，走路一拐一拐', 1, { safety: -5, risk: 1.1, set: 'lame_mother' }],
      ]},
    ],
    siblings: 9,
    siblingsLabel: '同一窝的幼鼠',
    intro: '你出生在{出生地}。你是{sex}，身上几乎没有毛，眼睛紧紧闭着，体重不到 6 克。同一窝的兄弟姐妹大约有 {siblings} 只。',
  },

  stages: [
    { id: 'pup',   name: '幼鼠（未睁眼）', from: 0,  unit: 'day'  },
    { id: 'juv',   name: '少年鼠',       from: 21, unit: 'week' },
    { id: 'adult', name: '成鼠',         from: 60, unit: 'week' },
    { id: 'old',   name: '老鼠',         from: 240, unit: 'week' },
  ],
  maturity: 60,    // 雌鼠约 2–3 个月性成熟
  maxAge: 400,     // 野外褐家鼠通常不到一年

  // 幼鼠死亡率很高；成年鼠在城市里的寿命大多在一年以内
  survival: [[0,1],[0.5,0.9],[1,0.8],[7,0.72],[21,0.6],[45,0.48],[60,0.42],[120,0.3],[180,0.18],[240,0.08],[300,0.03],[365,0.005],[400,0]],
  survivalNote: '野外褐家鼠幼鼠死亡率很高；成年鼠多数在一年之内死去。此曲线按城市里的捕食、毒饵、疾病和人为捕杀粗估',

  init: { health: 80, food: 55, safety: 55 },
  foodDrain: 6,

  causes: [
    { id: 'pup_dead', escape: false, w: 3, stages: ['pup'], short: '幼鼠时期的意外死亡',
      text: '窝被踩坏了一角。你没能从土里钻出来，一直在叫，声音越来越弱。' },
    { id: 'cold', escape: false, w: 1, stages: ['pup'], short: '冻死或饿死',
      text: '母亲没有回到窝里。你和几只兄弟姐妹在冷的窝里慢慢变凉。' },
    { id: 'cat', escape: true, w: 3, stages: ['juv','adult','old'], short: '被猫抓住',
      text: '一只猫从墙头跳下来，把你按在地上。你只跑了几步。' },
    { id: 'owl', escape: true, w: 1, stages: ['juv','adult'], short: '被仓鸮抓走',
      text: '一只仓鸮无声地落在屋顶的电线上。你在草丛里，没有听见它飞来。' },
    { id: 'poison', escape: false, w: 4, stages: ['juv','adult','old'], short: '吃下了毒饵',
      text: '你吃下了一颗灭鼠药。之后几天，你的身体慢慢衰竭，最后死在下水道边。' },
    { id: 'trap', escape: true, w: 2, stages: ['juv','adult','old'], short: '被夹子夹住',
      text: '一个木夹子弹了起来，夹住了你的脖子。' },
    { id: 'leptospira', escape: false, w: 1, stages: ['adult','old'], short: '钩端螺旋体病',
      text: '你喝过的水被别的老鼠的尿液污染了。你发烧，肝和肾先后衰竭。' },
    { id: 'old', escape: false, w: 1, stages: ['old'], short: '老死',
      text: '你的牙齿磨平了，后腿越来越没力气。你在一个安静的角落里停下来，没有再动。' },
  ],

  events: [
    { stages: ['pup'], w: 3, text: '你和兄弟姐妹挤成一团。洞里很暖，上面的地板上不时传来脚步声。', eff: { health: +2 } },
    { stages: ['pup'], w: 2, text: '母亲出去觅食了。你们在窝里尖声叫，等她回来。', eff: { food: -5 } },
    { stages: ['pup'], w: 2, once: true, text: '你的眼睛睁开了。世界一片模糊，只有光和轮廓。' },
    { stages: ['pup'], w: 1, text: '你的牙齿开始长出来，咬在兄弟的耳朵上，他叫了一声。', eff: { safety: -3 } },
    { stages: ['pup'], w: 2, once: true, text: '母亲把你们一只一只叼在嘴里，搬到了另一个洞里。你在她的嘴里晃来晃去。', eff: { safety: +5 } },
    { stages: ['juv'], w: 3, text: '你跟着兄弟姐妹去翻垃圾桶。塑料袋被撕开，油和碎肉的味道扑了出来。', eff: { food: +20 } },
    { stages: ['juv'], w: 2, text: '一只大老鼠把你从食物旁边推开。你退到墙角，咬了几口地上的面包屑。', eff: { food: +5, safety: -5 } },
    { stages: ['juv','adult'], w: 2, text: '你在下水道里走着，脚下的水黑而慢。远处的水流声一下一下地响。', eff: { health: -2 } },
    { stages: ['juv'], w: 1, text: '你第一次被一只猫的影子吓到，整个身体跳起来，逃进了管子里。', eff: { safety: -5 } },
    { stages: ['adult'], w: 3, text: '你和同伴在下水道里找到一堆烂菜叶。你咬下一口，它很软，有点发酸。', eff: { food: +15 } },
    { stages: ['adult'], w: 2, text: '一只雄鼠在你的洞口留下了气味。它在你的地盘边缘巡视了好几次。', eff: { safety: -5 } },
    { stages: ['adult'], w: 2, once: true, text: '你第一次产下一窝幼鼠。一窝通常有六到十只，一年可以有好几窝。', eff: { offspring: [6, 10] } },
    { stages: ['adult'], w: 2, text: '天气很冷，你的毛被冻得发硬。你钻进一堆纸箱中间。', eff: { health: -4 } },
    { stages: ['adult','old'], w: 2, text: '在一片新铺的食物旁边，你找到了一颗颗谷粒。它们是陌生的味道，你先闻了很久才吃。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 2, text: '你在下水道的边缘歇息，水在你脚边慢慢流过。', eff: { health: +2 } },
    { stages: ['adult'], w: 2, text: '同伴在你身上打滚，互相挠痒。你们发出一阵很高、人耳听不见的叫声。',
      fact: 'Panksepp 与 Burgdorf（2003，《Physiology & Behavior》）：被挠痒的大鼠会发出约 50 kHz 的超声“笑声”，人耳听不到' },
    { stages: ['old'], w: 2, text: '你的动作慢了下来，跑步时后腿有点不听使唤。', eff: { health: -5 } },
    { stages: ['old'], w: 1, text: '一只猫又在附近走过。你没有跑，只是缩在墙角，等它过去。', eff: { safety: -3 } },
    { act: 'forage', stages: ['juv','adult'], w: 3, text: '你翻开一个塑料袋，里面是半块面包。你咬了一口，它有点潮。', eff: { food: [10, 15] } },
    { act: 'forage', stages: ['adult','old'], w: 2, text: '你在菜市场后面的烂菜叶堆里找到一根骨头，啃了很久。', eff: { food: [8, 12], health: -2 } },
    { act: 'hide', stages: ['juv','adult'], w: 2, text: '你钻进下水道的管口，水没过了爪子。头顶有人走过，灯光在墙上晃了几下。', eff: { safety: 8, health: -2 } },
    { act: 'hide', stages: ['old'], w: 1, text: '你躲进砖缝。外面有人打着手电照过来，光在墙上晃了几下。', eff: { safety: 5 } },
    { act: 'rest', stages: ['adult','old'], w: 2, text: '你在洞里团成一团，外面的声音慢慢远了。', eff: { health: 4 } },
    { act: 'rest', stages: ['juv'], w: 1, text: '你和兄弟姐妹挤在窝里睡，身上一起一伏。', eff: { health: 2 } },
    { act: 'explore', stages: ['juv','adult'], w: 2, text: '你沿着下水道往远处走，一路上都是油的味道。', eff: { food: [6, 10], safety: -5 } },
    { act: 'explore', stages: ['adult','old'], w: 2, text: '你爬上一截管子，走到一个没去过的街区。一只猫在路的那头蹲着。', eff: { safety: -8 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '一只雌鼠在洞口停下来，闻了闻你，然后又走开了。' },
    { act: 'mate', stages: ['adult'], w: 1, text: '你们在窝里靠在一起。之后的几天，雌鼠的肚子慢慢鼓了起来。' },
    { stages: ['pup'], need: 'normal_year', w: 2, text: '窝里的温度不高也不低。母亲出门的时候，你会一直听着洞口的声音，直到她回来。', eff: { health: +2 } },
    { stages: ['juv','adult'], need: 'normal_year', w: 2, text: '这一年的雨水正常，下水道的水位也正常。你在管道里走了很远，没有遇到什么特别的事。' },
    { stages: ['adult'], need: 'normal_year', w: 1, text: '夏天的垃圾堆散发着和去年一样的味道。你已经习惯了它。' },
    { stages: ['pup'], need: 'warm_year', w: 2, text: '今年冬天没有下雪，洞口一直没有结冰。你和兄弟姐妹在暖和的土里长大。', eff: { health: +3 } },
    { stages: ['juv','adult'], need: 'warm_year', w: 2, text: '冬天的垃圾堆没有冻住，烂菜和油渣一直都有，你不用跑很远去找。', eff: { food: +10 } },
    { stages: ['adult'], need: 'warm_year', w: 1, once: true, text: '这个冬天很暖和，你们的窝比往年多养活了好几只。', eff: { safety: +3 } },
    { stages: ['pup'], need: 'drought_year', w: 2, text: '下水道的水位一天比一天低，管壁上露出一圈圈的泥印。母亲要走很远，才能找到一滩没干的水。', eff: { health: -4 } },
    { stages: ['juv','adult'], need: 'drought_year', w: 2, act: 'forage', text: '城里限了水，饭店后门的泔水桶也空了。你在菜市场的角落里翻了半夜，只找到一把发霉的菜叶。', eff: { food: [4, 8] } },
    { stages: ['adult','old'], need: 'drought_year', w: 2, text: '天旱之后，鼠群也少了一些。你偶尔会遇到一只没见过的同伴，它瘦得只剩下一层皮。', eff: { safety: -3 } },
    { stages: ['juv','adult'], need: 'wet_year', w: 2, text: '连着几周大雨，下水道的水涨到了墙根。你整夜泡在水里，身上一直湿冷。', eff: { health: -4 } },
    { stages: ['juv','adult'], need: 'wet_year', w: 2, text: '雨水把垃圾堆冲散了，食物被冲进了沟里。你只能在水边一口一口地捞。', eff: { food: -6 } },
    { stages: ['adult','old'], need: 'wet_year', w: 1, text: '潮湿让墙根长出了一层霉。你爬过的每一个洞口都有一股腥味。', eff: { health: -2 } },
    { stages: ['juv'], need: 'urban_wise', w: 2, text: '母亲带你们走街串巷，哪个时间人少，哪个垃圾桶最值得去，她一样一样地教给你。', eff: { food: +5, safety: +3 } },
    { stages: ['juv','adult'], need: 'urban_wise', act: 'forage', w: 2, text: '你记得母亲教过的那条路。一个垃圾桶的盖子坏了，你钻进去吃到了半根火腿肠。', eff: { food: [10, 15] } },
    { stages: ['adult'], need: 'urban_wise', w: 1, text: '墙根下有人放了一只夹子。你闻出了它的味道，绕了过去。', eff: { safety: +5 } },
    { stages: ['pup'], need: 'young_mother', w: 2, text: '母亲还在学怎么带窝。她把一只幼鼠留在了外面，你们听着它的叫声慢慢远去。', eff: { safety: -8 } },
    { stages: ['juv'], need: 'young_mother', w: 2, text: '母亲的奶不够。你和兄弟姐妹抢来抢去，有一只越来越瘦，最后不再动了。', eff: { food: -10 } },
    { stages: ['adult'], need: 'young_mother', w: 1, text: '你渐渐学会了母亲没有教过你的事。你知道把窝藏在哪里，哪条路上有猫。', eff: { safety: +3 } },
    { stages: ['pup'], need: 'lame_mother', w: 2, text: '母亲的一条后腿不利索。她回窝时总要停下来歇一歇，你们在窝里等很久。', eff: { food: -5 } },
    { stages: ['juv'], need: 'lame_mother', w: 2, text: '母亲跑不快。有一次，一只猫追到洞口，她把你们一只只推进砖缝里，自己引开了猫。', eff: { safety: +8 } },
    { stages: ['juv','adult'], need: 'lame_mother', w: 2, act: 'explore', text: '你学母亲的样子，有点拐着走路。你的步子轻，也慢，但墙根的动静你总能听见。', eff: { safety: +3, food: -3 } },
    { stages: ['adult'], need: 'bold', w: 2, text: '你敢在傍晚从墙缝里探出头，看着路过的行人。有人吹了一声口哨，你没有躲。', eff: { safety: -3, food: +5 } },
    { stages: ['juv','adult'], need: 'cautious', w: 2, text: '你总是在洞口停很久，听外面的脚步声。今天你等的时间比平时还长，最后什么也没出去。', eff: { safety: +4, food: -3 } },
    { stages: ['juv'], need: 'curious', w: 2, text: '你钻进一根没去过的管道，在里面嗅了一圈。水声从远处传来，出口在另一条街下面。' },
    { stages: ['pup'], need: 'runt', w: 2, text: '你比兄弟姐妹都小一圈，抢奶时总抢不过。你的叫声又细又弱，母亲有时会先叼别的幼鼠。', eff: { food: -8 } },
    { stages: ['adult','old'], need: 'robust', w: 2, text: '你的肩膀宽，咬人的力气也大。一只陌生的雄鼠闯进你的墙洞，你咬住它的耳朵，把它赶了出去。', eff: { safety: +5 } },
  ],

  opening: {
    title: '母亲选窝',
    body: '你还没有睁眼，只能分辨气味和温度。母亲衔着你们，在两个地方之间犹豫：墙缝里又暗又暖，远离人的脚步；下水道边的土洞离垃圾堆很近，食物的味道飘过来，但人和猫也常从这里经过。',
    options: [
      { t: '选墙缝里的窝', hint: '安全↑ 食物↓', eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 7,
        result: '母亲把你们一只一只叼进墙缝。那里很安静，但她出去找食物要走很远。' },
      { t: '选垃圾堆边的土洞', hint: '食物↑ 被发现↑', eff: { food: +15, safety: -5 }, risk: 1.3, riskDays: 7,
        result: '母亲把你们叼进土洞。洞口的味道很香，也很吵，脚步声一天到晚。' },
    ],
  },
  actions: {
    forage: { name: '翻垃圾', desc: '沿着气味找到垃圾桶、烂菜叶和食物残渣。', stages: ['juv','adult','old'], text: ['你翻开一个塑料袋，里面是半块发霉的面包。', '你闻着油和碎肉的味道，一点一点地找。', '一只大老鼠把你从食物旁边推开。'] },
    hide: { name: '钻进墙缝或下水道', desc: '离开街面，钻进墙缝或下水道的管口。', text: ['你钻进墙缝，外面的灯光照不进来。', '水没过你的爪子，你把身子缩进管子里。', '头顶有脚步声走过，又慢慢远了。'] },
    rest: { name: '在洞里睡觉', desc: '在洞里团成一团睡觉。', text: ['你在洞里团成一团，外面的声音慢慢远了。', '你和同伴挤在一起，身上一起一伏。', '你醒了，闻了闻空气，又睡着了。'] },
    explore: { name: '沿着下水道走', desc: '沿着下水道或街边的沟走，去一个没去过的地方。', text: ['你沿着下水道往远处走，一路上都是油的味道。', '水声在管子里回响，一下一下。', '你爬上一截管子，走到一个没去过的街区。'] },
    mate: { name: '交配', desc: '成年的雌鼠和雄鼠在窝里交配，之后雌鼠会产下一窝幼鼠。', done: '你的窝里又添了 {n} 只幼鼠。' },
  },
  brood: [6, 10],
  decisions: [
    {
      id: 'mother_leave', at: 25, stage: 'juv',
      title: '洞里的食物快吃完了',
      body: '你和兄弟姐妹已经断了奶，洞里剩下的食物快吃完了。母亲很久没有回来。外面的垃圾堆闻起来很香，但你知道外面有猫。',
      options: [
        { t: '留在洞里等', hint: '安全↑ 食物↓',
          eff: { food: -10, safety: +5 },
          result: '你在洞里等了两天。有几只兄弟姐妹，再也没有回来。' },
        { t: '出去找食', hint: '食物↑ 被猫抓风险↑',
          eff: { food: +20 }, kill: 0.05, cause: 'cat',
          result: '你找到一块面包，啃了几口。一个影子从墙头掠过。' },
      ],
    },
    {
      id: 'grate', stage: 'adult',
      title: '井盖缝',
      body: '一个下水道井盖开着一条缝，雨水从缝里流下去。地面上有一只鸟在啄食，远处有猫的影子。',
      options: [
        { t: '钻下去', hint: '安全↑ 食物↓ 疾病风险↑',
          eff: { safety: +10, food: -5 }, risk: 1.2, riskDays: 20,
          result: '你钻进了下水道。水很黑，脚下很滑，但没有猫。' },
        { t: '留在地面找食', hint: '食物↑ 被捕食风险↑',
          eff: { food: +15, safety: -10 }, kill: 0.05, cause: 'cat',
          result: '你在地面上吃到了一块面包。你的耳朵一直竖着。' },
      ],
    },
    {
      id: 'bait', at: 100, stage: 'adult',
      title: '一颗新的饵料',
      body: '墙角放着一小堆颗粒，闻起来很香。同伴们一个个绕着它走，几乎没有谁去碰。你可以先凑过去尝一口，也可以在一旁观察。',
      options: [
        { t: '直接吃', hint: '饱食↑↑ 毒饵风险↑',
          eff: { food: +30 }, kill: 0.35, cause: 'poison',
          result: '你吃了几颗，味道微甜。' },
        { t: '在一旁观察', hint: '安全 食物↓',
          eff: { food: -5, safety: +5 },
          result: '你在远处看了很久。有一只同伴吃了几口，之后就再也没有出现。你饿着，继续找别的东西。' },
      ],
    },
    {
      id: 'fight', at: 150, stage: 'adult',
      title: '陌生的雄鼠',
      body: '一只陌生的雄鼠闯进了你的地盘，它的牙齿露在外面。',
      options: [
        { t: '冲上去打', hint: '保住地盘 受伤↑',
          eff: { safety: +10, health: -12 }, risk: 1.3, riskDays: 7,
          result: '你咬住它的耳朵，直到它逃走。你的一条腿在流血。' },
        { t: '退到一边', hint: '地盘↓ 受伤↓',
          eff: { safety: -5, food: -5 },
          result: '你让出了那一角。它在那里闻了又闻，然后走了。' },
      ],
    },
    {
      id: 'winter_nest', at: 130,
      title: '天冷了',
      body: '天冷了，雨水从墙缝渗进来，你的毛被冻得发硬。旁边有一堆纸箱，里面又暖又干。洞外的垃圾堆在夜里也能翻到东西，但猫也在夜里出来。',
      options: [
        { t: '钻进纸箱堆', hint: '暖和↑ 食物↓',
          eff: { health: +5, food: -10 },
          result: '你钻进纸箱中间。纸板很干，身上很快暖了起来。' },
        { t: '出去找食', hint: '食物↑ 被猫抓风险↑',
          eff: { food: +15 }, kill: 0.04, cause: 'cat',
          result: '你找到一块面包，啃了几口。一个影子从墙头掠过。' },
      ],
    },
    {
      id: 'puddle', at: 180,
      title: '一滩积水',
      body: '地上有一滩积水，水面上漂着油花。墙根有几串老鼠的脚印，显然有同伴在这里喝过水。远处有一个干净的水龙头，但要走很远。',
      options: [
        { t: '喝这滩积水', hint: '饮水↑ 感染风险↑',
          eff: { food: +5 }, kill: 0.02, cause: 'leptospira',
          result: '你喝了几口。水是温的，有一股说不清的味道。' },
        { t: '去远处找干净的水', hint: '安全↑ 路远',
          eff: { food: -5, health: -3 },
          result: '你沿着墙根走了很远，才找到一滴水。' },
      ],
    },
    {
      id: 'old_roof', stage: 'old',
      title: '夜里出去找吃的',
      body: '你的后腿不如从前有力，洞里的东西也快吃完了。夜里出去找吃的，就要碰上猫的风险。你可以在洞里等，也可以出去试一试。',
      options: [
        { t: '夜里出去找吃的', hint: '食物↑ 被猫抓风险↑',
          eff: { food: +12 }, kill: 0.04, cause: 'cat',
          result: '你翻到一块小饼干，啃了几口。你的耳朵一直竖着。' },
        { t: '留在洞里', hint: '食物↓ 健康↑',
          eff: { food: -10, health: +3 },
          result: '你留在洞里，慢慢嚼着仅剩的一点东西。' },
      ],
    },
    {
      id: 'wet_flood', at: 70, need: 'wet_year',
      title: '涨水了',
      body: '下水道的水涨到了墙根，管道里的水又急又黑。你可以爬到管壁上的高处，也可以趁水退之前去找食。',
      options: [
        { t: '爬到管壁的高处', hint: '安全↑ 食物↓', eff: { safety: +5, food: -5 }, risk: 1.1, riskDays: 5,
          result: '你抓着管壁上的一截铁锈，一直待到水退下去。' },
        { t: '趁水退之前去找食', hint: '食物↑ 病菌风险↑', eff: { food: +15 }, kill: 0.04, cause: 'leptospira',
          result: '你在泥水里翻出了一块肉，又喝了几口脏水。' },
      ],
    },
    {
      id: 'drought_water', at: 30, need: 'drought_year',
      title: '洞里的水快干了',
      body: '洞里的湿气一天比一天少。管道的深处还有一滩积水，但要穿过一段开阔的水泥地。',
      options: [
        { t: '穿过水泥地去深处找水', hint: '喝水↑ 被发现风险↑', eff: { health: +6 }, risk: 1.3, riskDays: 10,
          result: '你贴着墙根走过去，那段水泥地很亮。你喝到了水。' },
        { t: '留在洞里等雨', hint: '安全↑ 体力↓', eff: { health: -6, safety: +4 },
          result: '你缩在洞里，一天一天地等。雨一直没有来。' },
      ],
    },
    {
      id: 'urban_route', stage: 'adult', need: 'urban_wise',
      title: '夜里的两条路',
      body: '你记得母亲教过的一条路，那里垃圾桶很多，但要穿过一个有灯的路口。另一条路绕远，但没有灯。',
      options: [
        { t: '走母亲教的老路', hint: '食物↑ 被看见↑', eff: { food: +15 }, risk: 1.15, riskDays: 7,
          result: '你穿过路口，灯光照在你的背上。你没有停，一直走到了垃圾桶边。' },
        { t: '绕远路走', hint: '安全↑ 食物↓', eff: { safety: +5, food: -5 },
          result: '你绕了一大圈，身上沾满了下水道的泥。那里什么也没有。' },
      ],
    },
    {
      id: 'lame_hide', at: 50, need: 'lame_mother',
      title: '母亲还没回来',
      body: '母亲很久没有回到洞里。外面有猫的叫声。你可以出去找她，也可以留在洞里。',
      options: [
        { t: '出去找她', hint: '安全↓ 找到母亲', eff: { safety: -5, food: +5 }, kill: 0.05, cause: 'cat',
          result: '你在墙角找到了她。她身上有一道刚被划开的伤口。' },
        { t: '留在洞里', hint: '安全↑ 食物↓', eff: { safety: +5, food: -8 },
          result: '你在洞里等了一夜。之后，再也没有听见她的脚步声。' },
      ],
    },
    {
      id: 'bold_road', stage: 'adult', need: 'bold',
      title: '白天的街道',
      body: '一个垃圾桶就在马路对面，白天行人很多。你可以等到夜里，也可以现在就过去。',
      options: [
        { t: '现在过马路', hint: '食物↑↑ 被猫发现↑', eff: { food: +15 }, kill: 0.05, cause: 'cat',
          result: '你贴着路边冲了过去，车轮从你身边擦过。你叼着一块饼干钻回了墙缝。' },
        { t: '等到夜里再去', hint: '安全↑ 食物↓', eff: { food: -5, safety: +5 },
          result: '你在墙缝里看着人来人往，直到街上只剩路灯。' },
      ],
    },
    {
      id: 'runt_edge', stage: 'juv', need: 'runt',
      title: '挤不进去的位置',
      body: '窝里的位置有限。你比兄弟姐妹小，挤不进母亲身边的那一圈。',
      options: [
        { t: '在外圈等着', hint: '食物↓', eff: { food: -8 },
          result: '你在外圈等了很久，才轮到一点奶。' },
        { t: '从墙缝自己找吃的', hint: '食物↑ 风险↑', eff: { food: +8 }, risk: 1.2, riskDays: 10,
          result: '你从墙缝里钻出去，找到一小块发霉的面包。' },
      ],
    },
  ],

  idle: [
    '你用鼻子在墙根嗅来嗅去。',
    '这一带的回声很长，每一声都被拉得很远。',
    '你舔了舔身上，把沾上的灰尘弄干净。',
    '远处的地铁经过，地面微微震动。',
    '你在墙角啃了一会儿东西，嘴里有一股灰尘的味道。',
    '垃圾车的声音从街上远远地传来。',
    '你的胡须在黑暗里一颤一颤的。',
    '你在墙缝里挤了挤，停下来，闻了闻空气。',
  ],

  epitaph: '你活了不到一年。城市的地下，有许许多多和你一样的影子，很少有人数得清。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'sparrow',
  name: '家麻雀',
  en: 'House sparrow',
  sci: 'Passer domesticus',
  emoji: '🐦',
  scene: 'city',
  kind: 'wild',
  tagline: '城市建成以后，它就一直跟在人身边，住在屋檐下和路边的灌木里',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '巢的位置', options: [
        ['在老楼屋檐下的一个砖缝里', 4, { safety: +5 }],
        ['在一棵行道树的树洞里', 2, { safety: +10 }],
        ['在空调外机和墙壁之间的缝隙里', 3, { food: +5 }],
        ['在广告牌背后的铁皮缝里', 1, { risk: 1.1 }],
      ]},
      { label: '窝里的食物', options: [
        ['菜市场边上撒落的谷物', 3, { food: +10 }],
        ['绿化带里的虫子和草籽', 4, { food: +5 }],
        ['餐馆后门的饭渣', 2, { food: +15, risk: 1.1 }],
      ]},
      { label: '这一带的环境', options: [
        ['老城区的街道，楼多，人也多', 4, { food: +5, risk: 1.05, set: 'downtown' }],
        ['城郊接壤的农田，麦子和稻草堆很多', 2, { food: +10, risk: 1.1, set: 'farm' }],
        ['大公园的边缘，灌木和草地连成一片', 2, { safety: +8, food: -3, set: 'park' }],
        ['工业区的仓库边，空气不好，但门口常有谷物散落', 1, { health: -5, food: +5, set: 'industrial' }],
      ]},
    ],
    siblings: 4,
    siblingsLabel: '同一窝的蛋',
    intro: '你是一枚蛋，{巢的位置}。母鸟每天产下一枚，这一窝一共 {siblings} 枚。你是{sex}，但现在还看不出来。',
  },

  stages: [
    { id: 'egg',    name: '卵',           from: 0,   unit: 'day' },
    { id: 'nest',   name: '雏鸟（在巢中）', from: 12,  unit: 'day' },
    { id: 'fledge', name: '幼鸟（离巢后）', from: 26,  unit: 'week' },
    { id: 'adult',  name: '成鸟',         from: 180, unit: 'month' },
    { id: 'old',    name: '老年',         from: 730, unit: 'month' },
  ],
  maturity: 200,
  maxAge: 1825,

  survival: [[0,1],[6,0.85],[12,0.78],[14,0.62],[26,0.45],[60,0.36],[120,0.32],[180,0.28],[270,0.25],[365,0.2],[540,0.12],[730,0.07],[912,0.04],[1095,0.02],[1460,0.005],[1700,0.002],[1825,0]],
  survivalNote: '城市麻雀的寿命多来自环志和观察研究（可参考 Anderson 2006 的综述）；大多数死于第一年，第一个冬天最危险。此曲线为粗估，纪录的寿命远超这个范围',

  init: { health: 70, food: 60, safety: 50 },
  foodDrain: 5,

  causes: [
    { id: 'cat', escape: true, w: 5, stages: ['fledge','adult','old'], short: '被猫扑住',
      text: '一只灰猫从冬青丛后面窜出来。你只来得及扑腾了一下翅膀。' },
    { id: 'hawk', escape: true, w: 3, stages: ['fledge','adult'], short: '被雀鹰抓走',
      text: '一只雀鹰贴着屋顶俯冲下来。你听见风声，然后什么也听不见了。' },
    { id: 'cold', escape: false, w: 5, stages: ['fledge','adult'], short: '冬天饿死',
      text: '寒流连着下了四天。树上的虫子消失了，地上的谷粒结成了冰。你的脂肪在第三个夜里用完了。' },
    { id: 'nest_raid', escape: false, w: 4, stages: ['egg','nest'], short: '巢被喜鹊掏了',
      text: '一只喜鹊把嘴伸进巢洞。父母刚飞出去找吃的，它就把整个窝叼走了。' },
    { id: 'abandon', escape: false, w: 3, stages: ['egg'], short: '亲鸟没有回来，蛋凉了',
      text: '母鸟飞出去觅食，一个下午没有回来。那枚蛋的温度慢慢降下去，你没有醒过来。' },
    { id: 'collide', escape: false, w: 2, stages: ['fledge','adult'], short: '撞上玻璃',
      text: '你没看见那面玻璃，它映出了一排树。你撞上去的时候，眼前是一片白。' },
    { id: 'parasite', escape: false, w: 2, stages: ['nest','fledge','adult'], short: '寄生虫耗尽了身体',
      text: '巢里的跳蚤和螨虫越来越多。你一天比一天瘦，最后再也飞不起来。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的羽毛越来越乱，翅膀也抬不太高。一个安静的早晨，你没有再醒来。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '母鸟趴在巢里，身体热得一起一伏。隔一阵子，它会起来翻一翻你们。' },
    { stages: ['egg'], w: 1, text: '你的外壳里，细胞在一点点分裂。外面的世界还很远。' },
    { stages: ['nest'], w: 1, once: true, text: '你破壳而出，身上没有羽毛，嘴张得很大。',
      fact: '家麻雀的孵化期众数约为 12 天（Anderson 1994，密歇根研究）' },
    { stages: ['nest'], w: 4, text: '父母衔着一条毛毛虫飞回来，你张嘴吞下去。雏鸟需要大量蛋白，昆虫是它们最主要的食物。',
      eff: { food: [10, 18] }, fact: '麻雀雏鸟主要靠昆虫喂养，成鸟多吃谷物和草籽（Brzęk 等 2009，Journal of Experimental Biology）' },
    { stages: ['nest'], w: 2, text: '父母一起飞走了，留你们挤成一团。隔壁窝里传来很响的叫声。', eff: { safety: -5 } },
    { stages: ['nest'], w: 1, text: '一场暴雨打进了巢洞，你们都湿透了。母鸟把身体压在你们上面，直到雨停。', eff: { health: -8 } },
    { stages: ['nest'], w: 2, text: '黑色的羽管从皮肤底下顶出来，身上开始有点痒。', eff: { health: +5 } },
    { stages: ['fledge'], w: 1, once: true, text: '你第一次离巢，滑翔了几米，落在屋檐下的排水管上。' },
    { stages: ['fledge'], w: 3, text: '你跟着父母在草地上找吃的。它们示范，你模仿。', eff: { food: +5 } },
    { stages: ['fledge'], w: 2, text: '你在灰尘里打了个滚，羽毛里的油脂和虫子被抖落了。' },
    { stages: ['fledge','adult'], w: 2, text: '天黑前，你和同伴挤进一丛冬青，像一团灰色的球一样过夜。', eff: { safety: +5 },
      fact: '麻雀在冬季常在灌木和常春藤里集群夜宿，以降低被捕食的风险（BTO 家麻雀物种页）' },
    { stages: ['fledge','adult','old'], w: 2, text: '一只黑猫卧在墙头晒太阳，尾巴慢慢地甩着。你们全都僵住了。', eff: { safety: -10 } },
    { stages: ['fledge','adult'], w: 2, text: '一场寒流突然来了，地面冻得硬邦邦的。你在屋檐底下躲了一整天。', eff: { food: -10, health: -5 } },
    { stages: ['fledge','adult'], w: 2, text: '一位老太太在公园里撒了一把小米。你们一起扑下去，抢得很凶。', eff: { food: +15 } },
    { stages: ['fledge','adult'], w: 2, text: '你在一个小水洼里洗了个澡，把羽毛抖得乱糟糟的，然后用嘴一根根理顺。', eff: { health: +5 } },
    { stages: ['adult'], w: 1, once: true, need: 'male', text: '你胸前长出了黑斑。这块“徽章”的大小，会影响同伴对你的态度。',
      fact: '雄麻雀胸前黑斑的大小与它在群体中的地位有关（Møller 1987）' },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '春天到了，你在屋檐下找到一个洞，开始衔草和线头筑巢。这是你的第一窝。',
      eff: { offspring: [3, 5] }, fact: '密歇根的家麻雀一年通常能繁殖 2–3 窝（Anderson 1994）' },
    { stages: ['adult','old'], w: 3, need: 'female', text: '你又产下一窝蛋，一共 {n} 枚。', eff: { offspring: [3, 5] } },
    { stages: ['adult'], w: 2, text: '一只雄鸟在窗台上和你挨着晒太阳，它的翅膀轻轻碰着你的。' },
    { stages: ['adult','old'], w: 1, text: '一只雀鹰从城市上空掠过，整片树林里的麻雀瞬间噤声。你躲进了灌木深处。', eff: { safety: +5, food: -3 } },
    { stages: ['adult','old'], w: 2, text: '一场大雨下了一整夜，垃圾桶边的食物都泡了水。', eff: { food: -10 } },
    { stages: ['adult','old'], w: 2, text: '垃圾桶边有人刚扔下一个面包，你和同伴一起扑上去，啄下一块硬皮。', eff: { food: +12 } },
    { stages: ['old'], w: 3, text: '你飞起来的时候翅膀开始发抖，飞得比以前低了。', eff: { health: -6 } },
    { stages: ['old'], w: 1, text: '你的孩子们在另一棵树上叫。你听见它们的声音，没有飞过去。' },
    { stages: ['fledge','adult','old'], w: 3, act: 'forage', text: '你在菜市场边一片撒落的菜叶旁啄食，旁边的摊主正在收摊。', eff: { food: +12 } },
    { stages: ['fledge','adult'], w: 2, act: 'forage', text: '一条毛毛虫从草叶上掉下来，你抢在同伴前面叼住了它。', eff: { food: +8 } },
    { stages: ['adult','old'], w: 2, act: 'forage', text: '你在一只被打翻的垃圾袋旁边啄出一块发霉的面包，硬皮上长着绿毛。', eff: { food: +10, health: -3 } },
    { stages: ['fledge','adult','old'], w: 2, act: 'hide', text: '外面的脚步声一阵阵过去，你在冬青丛深处待到天黑，肚子咕咕叫。', eff: { safety: +5, food: -5 } },
    { stages: ['adult','old'], w: 1, act: 'hide', text: '一阵雷雨下了一个下午，你在灌木里缩着，羽毛全湿透了。', eff: { health: -4 } },
    { stages: ['nest','fledge','adult','old'], w: 2, act: 'rest', text: '你把头埋进翅膀，在屋檐下暖和的地方睡着了。', eff: { health: +5 } },
    { stages: ['fledge','adult'], w: 2, act: 'explore', text: '你飞过一条河，对岸一棵老树上结满了红色的浆果，树下已经有几只鸟在啄。', eff: { food: +12 } },
    { stages: ['fledge','adult'], w: 2, act: 'explore', text: '你飞进郊外的一片麦田，地上的草籽又多又干净。', eff: { food: +10 } },
    { stages: ['fledge','adult'], w: 1, act: 'explore', text: '你飞进一个陌生的院子，门里冲出来一只狗。你扑着翅膀，好不容易才飞上墙头。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '你在屋檐的缝隙里找到一根被丢掉的旧电线皮，把它衔回了窝里。', eff: { food: -3 } },
    { stages: ['adult','old'], w: 1, act: 'mate', need: 'female', text: '你在窝口挑了很久，最后选了一根最软的草。', eff: { food: -2 } },
    { stages: ['fledge','adult'], w: 3, need: 'downtown', text: '街上的汽车一辆接一辆地开过。你在路边啄到了一小块饼干屑。', eff: { food: +6, safety: -3 } },
    { stages: ['adult'], w: 2, need: 'downtown', text: '夜里的路灯很亮，你在灯下的屋檐里睡觉，听着远处的车声。', eff: { health: +2 } },
    { stages: ['fledge','adult'], w: 3, need: 'farm', text: '收割后的麦田里散着麦粒。你和一群麻雀一起在田埂上啄食。', eff: { food: [10, 15] } },
    { stages: ['adult','old'], w: 2, need: 'farm', text: '一台拖拉机突然从田里开过来，满天的麻雀一起炸开。你没有被卷进去。', eff: { safety: -6 } },
    { stages: ['fledge','adult'], w: 3, need: 'park', text: '灌木丛里藏着许多虫子。你钻进去翻了一阵，身上沾满了草籽。', eff: { food: [6, 10], safety: +4 } },
    { stages: ['adult'], w: 2, need: 'park', text: '公园里晨练的人走过，你没有飞。他们的脚步声从你身边过去。', eff: { safety: +3 } },
    { stages: ['fledge','adult'], w: 3, need: 'industrial', text: '仓库的门一开，一股粉尘味扑出来。你的喉咙有点疼，但门口散着几粒谷子。', eff: { health: -4, food: +6 } },
    { stages: ['adult','old'], w: 2, need: 'industrial', text: '工厂的烟囱里冒着白烟，你的羽毛上沾了一层灰。', eff: { health: -5 } },
    { stages: ['egg','nest'], w: 2, need: 'runt', text: '你在窝里比兄弟姐妹小一圈，父母喂食的时候，你总是被挤到最后。', eff: { food: -6 } },
    { stages: ['fledge'], w: 2, need: 'robust', text: '你比别的雏鸟结实，第一次试着扑翅膀，就从窝口飞到了屋檐下。', eff: { health: +4 } },
    { stages: ['fledge','adult'], w: 2, need: 'bold', text: '你第一个跳到路边，去抢一个小孩掉下来的饼干。', eff: { food: +8, safety: -4 } },
    { stages: ['adult'], w: 2, need: 'cautious', text: '你看见一只猫在墙根下伏着，绕了很远的路才落到地上。', eff: { safety: +6, food: -3 } },
    { stages: ['adult'], w: 2, need: 'curious', text: '你在一个推车旁边跳来跳去，发现它的缝里掉了一粒米。', eff: { food: +8 } },
  ],

  opening: {
    title: '父母的分工',
    body: '你还是一枚蛋，巢已经筑好了。蛋需要有亲鸟伏在上面才能保持温度；可一只亲鸟守得越久，外面的虫子和草籽就越没人去找。',
    options: [
      { t: '母鸟守在巢上，少出去觅食', hint: '蛋更暖 · 饿得快', eff: { food: -10, safety: +10 }, risk: 0.8, riskDays: 26,
        result: '母鸟大半天都伏在巢上，只在傍晚时飞出去一小会儿。你在她的身下，暖暖的，很安静。' },
      { t: '母鸟常出去找吃的', hint: '饱食↑ · 蛋容易凉', eff: { food: +15 }, risk: 1.3, riskDays: 26,
        result: '母鸟每隔一阵就飞走，巢里时不时凉下来。等你醒来，窝里常常是空的。' },
    ],
  },

  actions: {
    forage:  { name: '啄食', desc: '低着头在路边、草地和菜市场的地上啄找，谷粒、草籽和虫子都吃。', stages: ['fledge','adult','old'], text: ['你低着头，在地上啄起一粒谷子。', '一只虫子从草根里钻出来，你一口叼住了它。', '你和同伴挤在一片撒了菜叶的地面上，互相抢着啄。'] },
    hide:    { name: '钻进灌木丛', desc: '躲进冬青或爬山虎的深处，不出声，也不乱动。吃不到什么，但不容易被发现。', stages: ['fledge','adult','old'], text: ['你缩在冬青丛最里面，外面的脚步声一阵阵经过。', '你和同伴挤成一团，谁也不叫。', '雨水顺着叶子往下滴，你把羽毛抖了抖。'] },
    rest:    { name: '缩着打盹', desc: '把头埋进翅膀里，蓬松羽毛保暖，等体力慢慢回来。', text: ['你把头埋进翅膀，在墙缝里打了个盹。', '太阳晒在背上，你的羽毛一鼓一鼓的。', '你睡得很浅，听见一点动静就睁开一只眼。'] },
    explore: { name: '飞去远处', desc: '离开熟悉的街区，去更远的公园、河边或郊外。见到的东西多，危险也多。', stages: ['fledge','adult'], text: ['你飞过两条街，落在一片从没见过的草坪上。', '河边的芦苇丛里，一群麻雀叽叽喳喳地吵个不停。', '你在电线之间来回穿梭，每一根电线都晃了一下。'] },
    mate:    { name: '筑巢产卵', desc: '在屋檐下找一个洞，衔草和线头铺成窝。只有雌鸟产卵，一年能有几窝。', stages: ['adult','old'], need: 'female', done: '你又产下一窝蛋，一共 {n} 枚。', text: ['你衔着一根干草，飞进屋檐下的一个洞里。', '雄鸟在你身边跳来跳去，把翅膀张开给你看。', '你在洞里铺好细草，蹲下来，等着第一枚蛋。'] },
  },

  decisions: [
    {
      id: 'leave_nest', at: 22,
      title: '离巢的那一刻',
      body: '窝里已经挤不下了。父母在巢口外面叫，声音一会儿比一会儿急。你的翅膀已经够长，但还没有真正试过。',
      fact: '家麻雀雏鸟大约在两周多后离巢，离巢后仍由父母喂养一段时间（Audubon 家麻雀页）',
      options: [
        { t: '现在就跳出去', hint: '早学飞 · 风险↑', eff: { food: +5 }, risk: 1.4, riskDays: 5,
          result: '你跳了出去，落在草丛里。两只翅膀扑腾了很久，才终于飞起来。' },
        { t: '再待两天', hint: '稳妥 · 饿一点', eff: { food: -10, safety: +5 },
          result: '你又等了两天。父母带来的虫子少了，但巢里还暖和。' },
      ],
    },
    {
      id: 'winter_roost', at: 150,
      title: '入秋了',
      body: '树叶开始变黄，虫子越来越少。城里有两个去处：餐馆后门人多，有饭渣，但猫也多；河边的芦苇丛安静，食物很少。',
      fact: '城市麻雀更多依赖人类丢弃或投喂的食物，郊外的个体多靠草籽和昆虫（Audubon 家麻雀页）',
      options: [
        { t: '去餐馆后门', hint: '饱食↑ 被猫发现的风险↑', eff: { food: +25 }, risk: 1.5, riskDays: 60,
          result: '你每天都能吃到饭渣，但也每天都要盯着头顶的电线。' },
        { t: '去河边的芦苇丛', hint: '安全 · 食物少', eff: { food: +5, safety: +15 },
          result: '你跟着一群麻雀落进芦苇丛。夜里，它们挤在一起，发出很小的声音。' },
      ],
    },
    {
      id: 'cat_window', at: 300,
      title: '窗台上的猫',
      body: '一只猫蹲在二楼的窗台上，一动不动。窗台下面，有一小撮谷粒。',
      options: [
        { t: '躲进冬青丛', hint: '安全 · 饿', eff: { food: -5, safety: +10 }, risk: 0.5, riskDays: 3,
          result: '你在冬青丛里待了一整个下午。猫走了，谷粒也被风吹散了。' },
        { t: '照常觅食', hint: '饱食↑ 风险↑↑', eff: { food: +10 }, risk: 2.0, riskDays: 3,
          result: '你低头啄了几粒谷子，然后听见了一阵很轻的爪子声。' },
      ],
    },
    {
      id: 'cold_food', at: 420, when: { food: '<45' },
      title: '雪下了两天',
      body: '地上的食物都埋在雪里。屋檐下的排气口一直冒着热气，周围有几只麻雀挤在那里。远处的谷仓里可能还有粮食，但要飞很远。',
      options: [
        { t: '挤进排气口的热风里', hint: '安全 · 食物少', eff: { food: +5, safety: +10 }, risk: 0.8, riskDays: 10,
          result: '你挤在一群同伴中间，热风一阵阵吹过来。你的羽毛终于不再发抖。' },
        { t: '飞去远处的谷仓', hint: '饱食↑↑ 风险↑', eff: { food: +25 }, risk: 1.8, riskDays: 5,
          result: '你飞过了三条街，在谷仓的门缝里找到了一把碎粮。回来的路上，你的翅膀冻得发僵。' },
      ],
    },
    {
      id: 'nest_site', at: 365, need: 'female',
      title: '选一个窝址',
      body: '一只雄鸟在电线杆的变压器箱旁边叫。那里很暖，缝隙也小，但它的位置离猫很近。你还想回到去年的屋檐下。',
      options: [
        { t: '跟它去变压器箱', hint: '安全 · 后代少', eff: { offspring: [2, 4], safety: +5 },
          result: '你在铁箱的缝隙里筑了巢。每次飞进去，你都要先看看四周。' },
        { t: '回去年的屋檐洞', hint: '后代↑ 风险↑', eff: { offspring: [3, 5] }, risk: 1.3, riskDays: 30,
          result: '你回到那个洞里，发现它比去年小了一些，但还能用。' },
      ],
    },
    {
      id: 'first_fall', at: 80,
      title: '第一次落在路上',
      body: '你飞得太低，一下子落到了马路中间。巷口拐出一辆自行车，铃声很脆。父母在屋檐上一声接一声地叫。',
      options: [
        { t: '扑着翅膀冲回路边', hint: '快 · 风险↑', eff: { safety: -5 }, risk: 1.2, riskDays: 2,
          result: '你扑腾着翅膀，贴着车轮前面窜进了路边的草丛。心口还在快速地跳。' },
        { t: '蹲在原地，等父母下来', hint: '慢 · 饿一点', eff: { food: -5 }, risk: 1.6, riskDays: 2,
          result: '你蹲在路中间，直到父母落到你身边，用嘴把你叼了起来。' },
      ],
    },
    {
      id: 'old_perch', at: 900,
      title: '老洞口变窄了',
      body: '你的翅膀越来越慢，去年住过的屋檐洞口好像窄了一点。一对年轻的麻雀刚搬到隔壁，正盯着那个洞。',
      options: [
        { t: '和年轻麻雀抢那个洞', hint: '窝址好 · 受伤风险↑', eff: { offspring: [2, 3] }, risk: 1.5, riskDays: 30,
          result: '你们在洞口互相啄了很久，最后你还是钻了进去。洞里很暖，却有一股陌生的味道。' },
        { t: '去墙根的旧木箱里过夜', hint: '安全 · 体力差', eff: { safety: +8, health: -3 },
          result: '你在一只废弃的木箱里过了夜。箱子漏风，但没有谁来抢。' },
      ],
    },
    {
      id: 'old_feeder', at: 1350,
      title: '老人的小米',
      body: '公园里有位老人每天撒一把小米。你们一大群挤在她的脚边，常常被人踩到。你的腿不如从前有力，抢不过那些年轻的麻雀。',
      options: [
        { t: '挤到前面去抢', hint: '饱食↑↑ 受伤风险↑', eff: { food: +15, health: -3 }, risk: 1.3, riskDays: 30,
          result: '你挤在最前面啄了好几粒。一只年轻的麻雀撞在你的翅膀上，你差点摔倒。' },
        { t: '退到树枝上等', hint: '安全 · 饿', eff: { food: -5, safety: +5 },
          result: '你在树枝上等着。人走了，地上只剩几粒被踩碎的小米。' },
      ],
    },
    {
      id: 'sparrow_straw_night', at: 200, need: 'farm',
      title: '麦秸垛的夜晚',
      body: '收割季过去了，田边的麦秸垛里很暖和。村边的屋檐下也有几只麻雀在过夜。',
      options: [
        { t: '钻进麦秸垛过夜', hint: '暖和 · 风险↑', eff: { health: +4 }, risk: 1.2, riskDays: 3,
          result: '麦秸很暖。夜里有猫的脚步声，你一直醒着。' },
        { t: '回到屋檐下，靠近人住的地方', hint: '安全↑ 饿一点', eff: { food: -3, safety: +4 },
          result: '你在屋檐下过了一夜，天亮时身上冷得发僵。' },
      ],
    },

  ],

  idle: [
    '天色暗下来，周围的声音也慢慢少了。',
    '远处传来一阵鸟叫，很快又停了。',
    '一辆自行车从巷子里慢慢骑过去，铃声很脆。',
    '隔壁的老房子在拆，墙灰飘了过来。',
    '远处的鸽子咕咕叫着，声音很近，又很远。',
    '晚上的路灯亮了，四周慢慢安静下来。',
    '雨后的空气很凉，地面上有湿漉漉的味道。',
    '阳光从缝隙里照进来，在墙上留下一道细长的亮痕。',
  ],

  epitaph: '你是城市里最常见的一种鸟。这一年，它又少了一只。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'swallow',
  name: '家燕',
  en: 'Barn swallow',
  sci: 'Hirundo rustica',
  emoji: '🪶',
  scene: 'sky',
  kind: 'wild',
  tagline: '它在一个季节里飞过半个地球，然后又回到同一片屋檐下',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '巢的位置', options: [
        ['在老农舍的屋檐下，一只泥碗形状的巢里', 4, { safety: +5 }],
        ['在谷仓门楣上方的泥巢里', 3, { food: +5 }],
        ['在桥洞下面横梁上的泥巢里', 2, { risk: 1.1 }],
      ]},
      { label: '父母的状况', options: [
        ['父母是一对经验丰富的老燕子', 3, { safety: +5 }],
        ['父母是两只第一次筑巢的年轻燕子', 2, { risk: 1.2 }],
      ]},
      { label: '迁徙的路线', options: [
        ['西线：先向西飞到西欧，再穿过地中海，越过撒哈拉的边缘', 3, { food: -3, set: 'west' }],
        ['东线：沿着巴尔干和中东的山谷南下，经过一片沙漠的边缘', 2, { risk: 1.1, set: 'east' }],
        ['东亚线：沿着江河往南，经过中国东部和东南亚', 2, { food: +5, set: 'asia' }],
      ]},
    ],
    siblings: 4,
    siblingsLabel: '同一窝的卵',
    intro: '你是一枚卵，{巢的位置}。外壳薄，透着一点粉白。这一窝一共 {siblings} 枚，{父母的状况}。你是{sex}，但现在还看不出来。',
  },

  stages: [
    { id: 'egg',    name: '卵',           from: 0,    unit: 'day' },
    { id: 'nest',   name: '雏燕（在巢中）', from: 14,   unit: 'day' },
    { id: 'fledge', name: '幼燕（离巢后）', from: 36,   unit: 'week' },
    { id: 'adult',  name: '成燕',         from: 180,  unit: 'month' },
    { id: 'old',    name: '老年',         from: 1000, unit: 'month' },
  ],
  maturity: 300,
  maxAge: 3285,

  survival: [[0,1],[14,0.7],[20,0.55],[36,0.4],[60,0.3],[120,0.22],[180,0.2],[365,0.13],[730,0.07],[1095,0.04],[1460,0.02],[1825,0.01],[2190,0.004],[2555,0.0015],[2920,0.0003],[3285,0]],
  survivalNote: '按欧洲家燕环志研究的大致量级粗估，不代表单一种群。幼燕第一年的死亡率最高，迁徙途中是另一个高峰',

  init: { health: 75, food: 60, safety: 55 },
  foodDrain: 5,

  causes: [
    { id: 'hawk', escape: true, w: 3, stages: ['fledge','adult'], short: '被燕隼抓住',
      text: '一只燕隼从高空俯冲下来。你只看见它的影子压下来，然后一切都结束了。' },
    { id: 'cat', escape: true, w: 3, stages: ['nest','fledge'], short: '被猫扑住',
      text: '一只猫蹲在谷仓门口。你刚飞到它头顶，它就站了起来。' },
    { id: 'snake', escape: false, w: 2, stages: ['nest'], short: '蛇爬进了巢',
      text: '一条蛇顺着屋檐爬上来，把头探进巢里。父母在外面叫个不停，你们没有地方躲。' },
    { id: 'starve', escape: false, w: 5, stages: ['fledge','adult','old'], short: '冷雨里饿死',
      text: '冷雨下了三天，虫子都躲了起来。你的肚子空了很久，最后一次起飞时，翅膀没有力气。' },
    { id: 'storm', escape: false, w: 2, stages: ['fledge','adult'], short: '被风暴击落',
      text: '一股暴风从北边扑下来，天地都是灰的。你的翅膀被风撕扯，最后被甩进了一片看不见的黑暗。' },
    { id: 'exhaust', escape: false, w: 3, stages: ['fledge','adult'], short: '迁徙途中耗尽了体力',
      text: '你飞过海峡，中间没有一块能落脚的陆地。你的脂肪用完了，最后一段路，你只能靠惯性往前滑。' },
    { id: 'nest_collapse', escape: false, w: 2, stages: ['egg','nest'], short: '泥巢在暴雨里塌了',
      text: '连续几天的暴雨泡软了泥巢。一个下午，它整个塌了下来，连同里面的一切。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的尾羽变短了，飞行时有点晃。一个温暖的夏夜，你没能再飞回屋檐下。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '父母从路边衔来湿泥，一粒一粒地贴在屋檐下。泥干了，就变成了一只碗。' },
    { stages: ['egg'], w: 1, text: '母燕趴在巢里，把你们裹在腹下。外面的风很大，巢里却很暖。' },
    { stages: ['nest'], w: 4, text: '父母衔着一只蜻蜓飞回来，你的嘴张得像一个红色的洞。', eff: { food: [12, 18] } },
    { stages: ['nest'], w: 2, text: '一条蛇从屋檐的缝隙里爬上来，巢里一片慌乱。你只能缩成一团。', eff: { safety: -15 } },
    { stages: ['nest'], w: 1, once: true, text: '你睁开了眼睛，看见了一小块蓝色的天。' },
    { stages: ['nest'], w: 1, text: '阴雨下了几天，屋檐滴着水，巢外的泥被泡软了。父母一直在补墙。', eff: { safety: -5 } },
    { stages: ['fledge'], w: 1, once: true, text: '你第一次飞出巢外，在谷仓门口落下来，翅膀像是借来的。',
      fact: '家燕雏鸟大约在三周龄时离巢（BTO 家燕物种页）' },
    { stages: ['fledge'], w: 3, text: '你的父母教你在空中捉虫子。你第一口咬进了一团蚊子，又呛着吐了出来。', eff: { food: +5 } },
    { stages: ['fledge'], w: 3, text: '天气转凉，田野上的草开始枯黄。很多燕子在电线上排成一排，等着什么。' },
    { stages: ['fledge'], w: 2, text: '一阵冷雨压了下来，田野上的虫子都不飞了。你在电线上坐了一整天，肚子咕咕地叫。', eff: { food: -20, health: -5 } },
    { stages: ['fledge','adult'], w: 2, text: '你在河面上空追到一只蜻蜓，一口咬住，连吞带咽。', eff: { food: +12 } },
    { stages: ['fledge','adult'], w: 2, text: '一场大风吹过草原，虫子都被吹得不见了。你只能在风的边缘寻找。', eff: { food: -10 } },
    { stages: ['fledge','adult'], w: 1, text: '田里起了雾。你的翅膀沾了一层薄水，飞得很低。', eff: { health: -3 } },
    { stages: ['adult'], w: 1, once: true, need: 'male', text: '你的尾羽又长又对称。一只雌燕在你身边停下，歪着头看了你很久。',
      fact: 'Møller 1992 发现，雌燕偏好尾羽左右对称的雄燕（Nature）' },
    { stages: ['adult'], w: 3, need: 'female', text: '你又产下一窝蛋，一共 {n} 枚。', eff: { offspring: [3, 5] } },
    { stages: ['adult'], w: 1, once: true, text: '你回到去年那个泥巢。它还在屋檐下，只是左边的墙角裂开了一道缝。' },
    { stages: ['adult','old'], w: 2, text: '你在一片稻田上空盘旋，发现一群蚊子正在低处聚集。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 2, text: '一只猫在谷仓门口晒太阳。你在它的头顶飞过，它抬头看着你。', eff: { safety: -8 } },
    { stages: ['adult','old'], w: 2, text: '你停在电线上，左边一只、右边一只，同伴排成了一排。', eff: { safety: +3 } },
    { stages: ['old'], w: 2, text: '你的尾羽又短了一截，飞行时的弧线不再像以前那么漂亮。', eff: { health: -4 } },
    { stages: ['old'], w: 1, text: '你又在老屋檐下度过了一个夏天。今年的虫子比去年多，你觉得自己还能飞。', eff: { food: +5 } },
    { stages: ['fledge','adult','old'], w: 3, act: 'forage', text: '你在麦田上方贴着草尖飞，一下子吞下三只蚜虫。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 2, act: 'forage', text: '暴雨快来了，虫子都压得很低。你俯冲着扫过河边的苇草，一次吞下很多。', eff: { food: +12 } },
    { stages: ['fledge','adult'], w: 1, act: 'forage', text: '你贴着河面追一只蜻蜓，它突然拐弯，你差一点撞进水里。', eff: { food: +5, safety: -5 } },
    { stages: ['adult','old'], w: 2, act: 'hide', text: '你整个白天都待在泥巢里，只在傍晚飞出去一小会儿。肚子咕咕地叫。', eff: { food: -10, safety: +6 } },
    { stages: ['fledge','adult'], w: 1, act: 'hide', text: '一只燕隼的影子从屋顶掠过，你缩进谷仓的横梁底下，直到它飞远。', eff: { safety: +8 } },
    { stages: ['fledge','adult','old'], w: 2, act: 'rest', text: '你在电线上停了一个下午，翅膀收得紧紧的，一动不动。', eff: { health: +4 } },
    { stages: ['fledge','adult'], w: 2, act: 'explore', text: '你飞进一个从没去过的山谷，谷底有一条清澈的河，河边的虫子多得数不清。', eff: { food: +15, safety: -5 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你飞过一座很大的城。楼群之间没有能落脚的电线，你绕了很久，累得不行。', eff: { health: -5, food: -5 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '你在谷仓门楣上找到一块被雨水泡软的旧泥，一口一口地衔回来，贴回墙上。', eff: { food: -5 } },
    { stages: ['adult'], w: 1, act: 'mate', need: 'female', once: true, text: '你刚产下的卵被一阵冷雨打湿了。你把它们压在身下，用体温把它们暖干。', eff: { health: -3 } },
    { stages: ['adult'], w: 3, need: 'west', text: '你在地中海的上空飞了整整一天，下面的海水一直是蓝色的，看不见陆地。', eff: { health: -3 } },
    { stages: ['adult'], w: 2, need: 'west', text: '你在西班牙的一片湿地上停下来，吃了一顿飞虫。', eff: { food: +10 } },
    { stages: ['adult'], w: 3, need: 'east', text: '你穿过山口，风很大。你在一个牧场边上休息了一天。', eff: { health: +3 } },
    { stages: ['adult'], w: 2, need: 'east', text: '你经过一片沙漠的边缘，空气又热又干，你的羽毛里全是沙子。', eff: { health: -5 } },
    { stages: ['adult'], w: 3, need: 'asia', text: '你沿着江河往南飞。江边的稻田里有很多飞虫，你吃了很久。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'asia', text: '南方的雨季很长，你在湿润的林间飞了很久，羽毛一直是湿的。', eff: { health: -4 } },
    { stages: ['nest','fledge'], w: 2, need: 'runt', text: '你在窝里比兄弟姐妹小一圈。父母喂食时，你总是被挤到窝的最边上。', eff: { food: -6 } },
    { stages: ['fledge'], w: 2, need: 'robust', text: '你第一次出窝，飞得比别的雏燕远，落在了屋檐的另一头。', eff: { health: +4 } },
    { stages: ['adult'], w: 2, need: 'bold', text: '你第一个飞进一群蚊子里，身边的燕子都在看你，你也没有停。', eff: { food: +8 } },
    { stages: ['adult'], w: 2, need: 'cautious', text: '你在电线上坐了很久，等同伴都飞走，你才慢慢地跟在后面。', eff: { safety: +5, food: -3 } },
    { stages: ['fledge','adult'], w: 2, need: 'curious', text: '你飞过一片稻田，看见水里有一只青蛙跳起来。你在它身边绕了一圈，吃到了一只飞虫。', eff: { food: +6 } },
  ],

  opening: {
    title: '父母的分工',
    body: '你还是一枚蛋。泥巢已经糊好，母燕要趴在上面孵，外面的虫子却不会等人。她离开得越久，蛋就越凉；她留得越久，家里的食物就越少。',
    options: [
      { t: '母燕整天趴在巢上孵', hint: '蛋更暖 · 伴侣要多跑', eff: { food: -10, safety: +5 }, risk: 0.8, riskDays: 36,
        result: '她一动不动地趴着，只在傍晚飞出去一小会儿。你被她的体温包着，一直很安稳。' },
      { t: '让母燕多去捕虫', hint: '饱食↑ · 巢会凉', eff: { food: +15 }, risk: 1.3, riskDays: 36,
        result: '她每隔一阵就飞出去，回来时嘴里带着虫子。巢里的温度时高时低。' },
    ],
  },

  actions: {
    forage:  { name: '空中捕虫', desc: '贴着水面和田野低飞，张着嘴捉蚊子、蜻蜓和飞虫。吃得饱，也更容易暴露。', stages: ['fledge','adult','old'], text: ['你在河面上空来回盘旋，一口一口地吞着蚊子。', '一群摇蚊在低处聚集，你俯冲下去，又飞了起来。', '田野上的风很暖，虫子一团一团地往上飘。'] },
    hide:    { name: '躲进泥巢', desc: '停在屋檐下的泥巢里，不出来。吃得少，但很安全。', stages: ['fledge','adult','old'], text: ['你缩在泥巢里，外面的风一阵阵地过去。', '巢里很暗，你和同伴挤在一起，谁也不动。', '一只猫在墙外走过，你屏住了呼吸。'] },
    rest:    { name: '停在电线上歇息', desc: '停在电线或屋檐上，什么也不做，让体力慢慢回来。', text: ['你停在电线上，闭着眼睛，身子随风轻轻摇晃。', '屋檐下的雨水一滴一滴地落下来，你没有躲。', '同伴们一排排地停在电线上，谁也不说话。'] },
    explore: { name: '飞过田野和河流', desc: '离开村落，去更远的田野和河面。风景多，虫子也可能更多，但路上的危险也更多。', stages: ['fledge','adult'], text: ['你越过一片刚割完草的田，地上全是蝗虫和飞虫。', '河对岸有一排新电线，你和几只燕子停在上面晒太阳。', '你飞过一座桥，桥洞底下有一窝燕子正在忙碌。'] },
    mate:    { name: '衔泥筑巢', desc: '在屋檐下衔泥，一粒一粒地贴。泥干了，就是一只碗。雌燕产卵，雄燕守着巢口。', stages: ['adult'], need: 'female', done: '你们又产下一窝卵，共 {n} 枚。', text: ['你衔着湿泥，一口一口地贴在墙角。', '雄燕在屋檐下来回飞，把你要的泥送过来。', '泥碗慢慢变干，你在里面趴下，把肚子贴紧了边缘。'] },
  },

  decisions: [
    {
      id: 'migrate_start', at: 150,
      title: '秋天要走了',
      body: '夜里开始变凉。田野里的虫子越来越少，你的身体里已经有了一种说不清的躁动。同伴们在电线上越聚越多。',
      fact: '家燕在秋季会集群，等待合适的风向和天气再出发（Sussex Wildlife Trust 燕子迁徙文章）',
      options: [
        { t: '趁天气还好，马上出发', hint: '赶上好天气 · 体重不够', eff: { food: -5 }, risk: 1.2, riskDays: 20,
          result: '你跟着一群燕子离开了屋檐。天空很高，地面渐渐变成了一块块颜色。' },
        { t: '再吃一周，把体重养足', hint: '体力足 · 天气可能变坏', eff: { food: +15 }, risk: 1.4, riskDays: 7,
          result: '你又吃了一周的虫子，身体重了一些。第七天的早晨，天气开始变坏。' },
      ],
    },
    {
      id: 'route', at: 170,
      title: '两条路线',
      body: '往南有两条路。一条是横穿地中海上空，中间没有可以落脚的地方，但路程短。另一条是沿着陆地慢慢走，每一段都要停下来找吃的，还要躲开地面上的人。',
      fact: '家燕迁徙路线的选择，关系到途中的能量消耗与死亡风险（Movement Ecology 2022，中欧家燕迁徙研究）',
      options: [
        { t: '横穿海上', hint: '路程短 · 途中没有落脚', eff: { food: -10 }, risk: 1.3, riskDays: 3, kill: 0.06, cause: 'exhaust',
          result: '你飞了一整天，海面上只有风和浪。你的脂肪在快到岸边时用完了。' },
        { t: '沿陆地慢慢走', hint: '路程长 · 停靠多', eff: { food: +5 }, risk: 1.1, riskDays: 30,
          result: '你每到一处有草地和湖泊的地方就停下，吃饱了再飞。路上有人举着枪，你从他们头顶掠过。' },
      ],
    },
    {
      id: 'storm', at: 240,
      title: '暴风从北边来',
      body: '地平线上一片黄灰色的云压下来，风把沙子卷成了柱子。你的同伴在低处盘旋，不知该往哪里去。',
      options: [
        { t: '落进树林躲一夜', hint: '安全 · 体力消耗', eff: { food: -5 }, risk: 0.8, riskDays: 2,
          result: '你在一片树林里躲了一夜。第二天的风小了很多，但你的羽毛里全是沙子。' },
        { t: '趁风还没到，继续赶路', hint: '距离前进 · 风险↑↑', eff: { food: -5 }, risk: 1.5, riskDays: 1, kill: 0.08, cause: 'storm',
          result: '你拼命往前飞。风在你背后像一堵墙压下来，你什么也看不见了。' },
      ],
    },
    {
      id: 'nest_return', at: 380,
      title: '回到哪里去',
      body: '第二个春天，你从南方飞回了北方。去年的泥巢还在，但左边的墙角已经裂开。谷仓的横梁上有一个新的位置，离路很近。',
      fact: '家燕成鸟大多会回到去年繁殖的巢址，幼鸟只有约 5–10% 会回到出生的群落（Saino 等 2013）',
      options: [
        { t: '回到去年的泥巢', hint: '熟悉 · 墙角有裂缝', eff: { safety: +10 }, risk: 1.0, riskDays: 1,
          result: '你修补了裂缝，把新的泥加在旧巢的边上。它比你记忆中的小了一点。' },
        { t: '到谷仓里找新的横梁', hint: '后代↑ 风险↑', eff: { offspring: [2, 4] }, risk: 1.3, riskDays: 60,
          result: '你在横梁上筑了新巢。每次飞进去，你都要绕开一个伸过来的猫爪。' },
      ],
    },
    {
      id: 'old_nest', at: 1200,
      title: '老屋檐下的新燕子',
      body: '你回到了老屋檐下。一对年轻的燕子已经占了你的泥巢，从里面探出头来看你。你的翅膀比去年短了一截，衔泥也慢了。',
      options: [
        { t: '把它们赶走，占回旧巢', hint: '窝址稳 · 受伤风险↑', eff: { safety: +5 }, risk: 1.4, riskDays: 60,
          result: '你们在屋檐下争了很久，最后它们飞走了。泥巢里的味道又变成了你的。' },
        { t: '去河边的桥洞下筑巢', hint: '后代↓ 安全', eff: { offspring: [1, 2] }, risk: 0.9, riskDays: 60,
          result: '桥洞里很暗，过往的车声震得泥块往下掉。你一块一块地重新衔，慢慢筑出一只碗。' },
      ],
    },
    {
      id: 'cold_spring', at: 1900,
      title: '一个冷春天',
      body: '四月的雨下了整整十天，虫子都躲了起来。你的肚子一直空着，窝里的卵已经凉过两回。',
      options: [
        { t: '去温室的通风口碰碰运气', hint: '饱食↑ 风险↑', eff: { food: +15 }, risk: 1.3, riskDays: 20,
          result: '温室的通风口里飘着几只飞虫。你钻进去吃了一顿，又飞了出来。' },
        { t: '等雨停，留在泥巢里', hint: '安全 · 饿', eff: { food: -15, safety: +5 },
          result: '你在泥巢里等了三天。雨停的时候，你已经瘦了一圈。' },
      ],
    },
    {
      id: 'old_migrate', at: 2600,
      title: '又到了南飞的季节',
      body: '天转凉的那个夜里，你在屋檐下听见远处同伴的叫声。你已经飞过很多个秋天，身上的脂肪却一年比一年少。',
      options: [
        { t: '跟着群飞走', hint: '赶上迁徙 · 途中风险↑', eff: { food: -10 }, risk: 1.4, riskDays: 20, kill: 0.07, cause: 'exhaust',
          result: '你又飞过了那片海。这一次，你的翅膀比去年更酸。' },
        { t: '留下来过冬', hint: '不迁徙 · 冬天饿', eff: { food: -5 }, risk: 1.6, riskDays: 60, kill: 0.04, cause: 'starve',
          result: '你留在屋檐下，等着第一阵暖风。它来得很慢。' },
      ],
    },
    {
      id: 'swallow_east_desert', at: 200, need: 'east',
      title: '沙漠边缘的热风',
      body: '前面的天空是一片发黄的雾，热风从沙漠那边吹过来。你可以顶着风飞，也可以在路边的树林里歇一歇。',
      options: [
        { t: '顶着风飞过去', hint: '赶路 · 体力↓', eff: { food: -5 }, risk: 1.3, riskDays: 3,
          result: '你顶着风，一直飞到天黑。在沙漠的边缘，你找到了一条有水的河。' },
        { t: '在树林里歇一天', hint: '稳妥 · 节省体力', eff: { health: +4, food: -3 }, risk: 0.9, riskDays: 3,
          result: '你在树林里待了一天，喝了点水，又慢慢地飞起来。' },
      ],
    },

  ],

  idle: [
    '风从田野那边吹过来，带着一点青草的味道。',
    '屋檐下的泥碗有点潮，风从缝隙里钻进来。',
    '一只蜻蜓从近处掠过，很快消失在远处的光里。',
    '雨后的空气很凉，草地上的虫子又出来了。',
    '谷仓里有很多灰尘，光从门缝里斜斜地照进来。',
    '远处的天边有一道很低的云，不知道它会不会过来。',
    '一群燕子在很高的地方盘旋，叫声一阵一阵的。',
    '天快黑了，屋檐下的声音慢慢少了下来。',
  ],

  epitaph: '每年春天，有些燕子还会回到出生的屋檐下。你是其中一只，或者不是。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'dog',
  name: '狗',
  en: 'Dog',
  sci: 'Canis lupus familiaris',
  emoji: '🐶',
  scene: 'city',
  kind: 'pet',
  tagline: '全世界的狗，多数没有主人，也没有名字',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出身', options: [
        ['你出生在村落边缘的草堆里，这一窝狗崽没有人管', 40, { set: 'stray', food: -10, safety: -5 }],
        ['你出生在城市街头，一个垃圾桶后面的窝里', 35, { set: 'stray', food: -5, risk: 1.2 }],
        ['你出生在一户人家的客厅里，主人已经给你取了名字', 25, { set: 'pet', food: +20, safety: +10 }],
      ]},
      { label: '品种与体型', options: [
        ['你是村落里的土狗，中等身材，短毛，毛色杂，一只耳朵立着，一只耷拉着', 4, { health: +5, risk: 0.95, set: 'village' }],
        ['你是小型玩具犬的后代，长大后体重不到三公斤', 2, { health: -5, risk: 1.2, set: 'toy' }],
        ['你是大型工作犬的后代，长大后体重可能超过三十公斤', 2, { food: +5, set: 'large' }],
        ['你是短鼻犬的后代，鼻子扁平，睡觉时打着呼噜', 1, { health: -10, risk: 1.3, set: 'brachy' }],
      ]},
      { label: '城市', options: [
        ['印度北方的一座老城，街上到处是狗群，夏天很热', 3, { food: -3, risk: 1.15, set: 'india' }],
        ['中国北方一个中等城市的老居民区，冬天很冷', 3, { health: -3, set: 'cn_north' }],
        ['美国中西部的郊区，院子里有铁丝网和一个狗窝', 2, { safety: +8, food: +5, set: 'us_yard' }],
        ['东京的一套小公寓，阳台上晾着主人的衣服', 1, { safety: +5, set: 'tokyo' }],
      ]},
    ],
    siblings: 6,
    siblingsLabel: '同一窝的狗崽',
    intro: '你刚出生，眼睛还闭着。{出身}。你是{sex}，这一窝一共 {siblings} 只。',
  },

  stages: [
    { id: 'newborn', name: '新生犬（闭眼期）', from: 0,    unit: 'week' },
    { id: 'puppy',   name: '幼犬',           from: 21,   unit: 'week' },
    { id: 'young',   name: '青年',           from: 180,  unit: 'month' },
    { id: 'adult',   name: '成年',           from: 365,  unit: 'month' },
    { id: 'old',     name: '老年',           from: 3650, unit: 'month' },
  ],
  maturity: 180,
  maxAge: 5840,

  survival: [[0,1],[7,0.8],[14,0.7],[21,0.6],[60,0.5],[180,0.46],[365,0.42],[730,0.34],[1460,0.22],[2190,0.13],[2920,0.07],[3650,0.035],[4380,0.012],[5110,0.003],[5550,0.001],[5840,0]],
  survivalNote: '这是混合人群的平均曲线。街头犬的幼犬死亡率明显高于家养犬，寿命也通常更短；家养犬寿命多在十年上下',

  init: { health: 75, food: 55, safety: 50 },
  foodDrain: 3,

  causes: [
    { id: 'car', escape: true, w: 5, stages: ['puppy','young','adult'], short: '被车撞了',
      text: '一辆车从路口拐出来。刹车声和你的叫声一起，被路边的墙吞掉了。' },
    { id: 'parvo', escape: false, w: 4, stages: ['newborn','puppy'], need: 'stray', short: '细小病毒',
      text: '你连着吐了两天，水分被一起带走。没有疫苗，也没有人及时把你送去医院。' },
    { id: 'rabies', escape: false, w: 2, stages: ['puppy','young','adult','old'], need: 'stray', short: '狂犬病',
      text: '你被一只带病毒的动物咬伤。几周后，你开始流口水，对着空气狂叫，认不出任何人。' },
    { id: 'poison', escape: false, w: 2, stages: ['puppy','young','adult'], need: 'stray', short: '误食毒饵',
      text: '你在路边舔到了一块老鼠药。它让你的身体内部慢慢出血，你没有找到能救你的人。' },
    { id: 'cold', escape: false, w: 2, stages: ['young','adult','old'], need: 'stray', short: '冬天没找到吃的',
      text: '连着几天下大雪，垃圾桶都被冻住了。你蜷在墙角，直到不再发抖。' },
    { id: 'fight', escape: true, w: 2, stages: ['puppy','young','adult','old'], short: '和别的狗打斗',
      text: '一只陌生的狗冲过来，咬住了你的脖子。伤口很深，三天后开始化脓。' },
    { id: 'end', escape: false, w: 2, stages: ['old'], need: 'pet', short: '老年病，安乐死',
      text: '你的肾脏不再工作。医生说，可以让你安静地走。一针下去，你闭上了眼睛。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你的后腿越来越慢。最后一次坐下的时候，你没能再站起来。' },
  ],

  events: [
    { stages: ['newborn'], w: 3, text: '你在一堆温热的身体中间吃奶。你的兄弟姐妹每天都在长。', eff: { health: +3 } },
    { stages: ['newborn'], w: 1, once: true, text: '你睁开了眼。世界是模糊的一团，只有气味是清楚的。' },
    { stages: ['newborn'], w: 1, text: '母狗把你叼到另一个角落，又叼回来。你不明白为什么。' },
    { stages: ['puppy'], w: 3, need: 'stray', text: '你和兄弟姐妹在垃圾堆里翻找。一只成年狗冲过来，你们四散逃开。', eff: { food: +5, safety: -5 } },
    { stages: ['puppy'], w: 2, need: 'stray', text: '一个人把一根香肠扔在路边。你们挤作一团，抢到的只有一半。', eff: { food: +10 } },
    { stages: ['puppy'], w: 2, need: 'stray', text: '一辆摩托车贴着你的鼻子开过。你第一次学会了躲车。', eff: { safety: -10 } },
    { stages: ['puppy'], w: 2, need: 'pet', text: '主人带你去打了第一针疫苗。针很细，你只叫了一声。',
      eff: { health: +10 }, fact: '疫苗可以预防犬细小病毒、犬瘟热等传染病（WSAVA 犬猫疫苗指南，Day 等 2016）' },
    { stages: ['puppy'], w: 2, need: 'pet', text: '你第一次在草坪上撒欢，衔着一只球跑来跑去。主人笑了。', eff: { safety: +5, health: +3 } },
    { stages: ['puppy'], w: 1, once: true, need: 'stray', text: '你第一次饿得肚子发疼。你学会了蹲在人的手边等。', eff: { food: -10 } },
    { stages: ['young'], w: 2, need: 'pet', text: '你开始在散步时拽绳子。主人用力拉住你，你觉得这很没道理。' },
    { stages: ['young'], w: 2, need: 'stray', text: '你和一只老公狗抢一块死鸡，被咬了脖子。', eff: { health: -10, safety: -5 } },
    { stages: ['young'], w: 1, once: true, need: 'stray', text: '一辆收容车开进了街区。你被一个捕网套住，关进了笼子。笼子里的狗一只接一只被带走。',
      eff: { safety: -15, food: -5 }, fact: 'WHO《Guidelines for dog population management》（1990）建议用捕捉、收容、绝育和领养相结合的方式管理犬只数量' },
    { stages: ['adult'], w: 1, once: true, need: 'pet', text: '你做了绝育手术，身上有一道新缝的口子。主人说，以后你会安静一些。', eff: { health: -5 } },
    { stages: ['adult'], w: 3, need: 'stray', text: '你在垃圾桶边找到一块骨头，别的狗都看着你。', eff: { food: +12 } },
    { stages: ['adult'], w: 2, need: 'stray', text: '一个女人给你一碗饭，你吃的时候她一直在旁边和你说话。', eff: { food: +10, safety: +5 } },
    { stages: ['adult'], w: 2, need: 'pet', text: '你跟主人去公园。公园里有很多人和狗，你慢慢学会了和陌生的狗打招呼。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, text: '天很热，你躺在水泥地上，身上烫得厉害。', eff: { health: -5 } },
    { stages: ['adult'], w: 1, once: true, text: '你第一次看到一场雪。雪花落在你的鼻子上，很快就化了。' },
    { stages: ['adult','old'], w: 2, text: '一只猫从墙头走过，你追了两步，然后看着它消失在另一边。' },
    { stages: ['old'], w: 2, need: 'pet', text: '你的膝盖越来越不好，主人每天晚上给你按摩。', eff: { health: -3 } },
    { stages: ['old'], w: 2, need: 'stray', text: '一到冬天，你的关节就开始疼。你没有地方可以躺，只能找一块有风的地方。', eff: { health: -5, safety: -5 } },
    { stages: ['old'], w: 1, need: 'pet', text: '兽医说你的肾指标在往下掉。主人在旁边摸着你的头，没有说话。', eff: { health: -5 },
      fact: '体型越大的犬种，寿命通常越短（Michell 1999，英国犬种寿命调查）' },
    { stages: ['puppy','young','adult'], w: 3, act: 'forage', need: 'stray', text: '你在一个被打翻的垃圾桶里找到一块没啃完的排骨。', eff: { food: +15 } },
    { stages: ['young','adult','old'], w: 2, act: 'forage', need: 'stray', text: '一个人在路边把剩菜倒进纸箱。你们一群狗挤在一起，抢得很快。', eff: { food: +12, safety: -3 } },
    { stages: ['adult','old'], w: 2, act: 'forage', need: 'stray', text: '餐馆后门的水沟边，有人刚倒掉一锅骨头汤。你闻着那股味道，什么也顾不上了。', eff: { food: +10 } },
    { stages: ['puppy','young','adult','old'], w: 2, act: 'hide', text: '一辆摩托车从巷口开过，你在墙角缩到不能再缩，等它远去。', eff: { safety: +5, food: -5 } },
    { stages: ['adult','old'], w: 1, act: 'hide', need: 'stray', text: '收容车的声音从街口传过来。你贴着墙根，一步都没动。', eff: { safety: +8, food: -8 } },
    { stages: ['young','adult','old'], w: 2, act: 'rest', need: 'pet', text: '阳光从窗户照进来，你在地板上躺成一条长长的影子。', eff: { health: +5 } },
    { stages: ['young','adult','old'], w: 2, act: 'rest', need: 'stray', text: '你躺在废轮胎的阴影里，闭着眼睛，耳朵还竖着听动静。', eff: { health: +3 } },
    { stages: ['puppy','young','adult'], w: 2, act: 'explore', text: '你第一次跑进了一片从没去过的菜市场，满地都是陌生的气味。', eff: { food: +10, safety: -3 } },
    { stages: ['young','adult'], w: 2, act: 'explore', text: '你在河边跑了很远，回来的时候爪子上全是泥。', eff: { health: -3 } },
    { stages: ['adult'], w: 1, once: true, act: 'mate', text: '你和一只狗交配了。几周后，你身边有了一窝小狗，一共 {n} 只。', eff: { offspring: [3, 6] } },
    { stages: ['puppy'], w: 2, need: 'village', text: '你和同窝的狗崽在村口的晒场上摔跤。村里的孩子过来逗你们，你躲到了草垛后面。', eff: { safety: -3 } },
    { stages: ['young','adult'], w: 2, need: 'village', text: '村里的人家都认得你。傍晚有人把吃剩的玉米饼子放在门口，你吃完就走。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'village', act: 'hide', text: '你在草垛底下待了一整个下午，耳朵竖着，听着村里的鸡叫和远处拖拉机的声音。', eff: { safety: +5 } },
    { stages: ['newborn','puppy'], w: 2, need: 'toy', text: '你比同窝的狗崽都小。兄弟姐妹挤在奶边，你总是被挤到最外面。', eff: { health: -5, food: -5 } },
    { stages: ['young','adult'], w: 2, need: 'toy', text: '你的牙齿越来越松，主人每隔几个月就带你去洗牙。', eff: { health: -3 },
      fact: '小型犬的牙周病发生率高，是成年小型犬最常见的慢性病之一（美国动物医院协会 AAHA 口腔护理指南，2019）' },
    { stages: ['adult','old'], w: 2, need: 'toy', text: '你的膝盖有时会突然打滑，后腿缩起来，走几步才能恢复正常。主人抱你上楼。', eff: { health: -4 } },
    { stages: ['puppy','young'], w: 2, need: 'large', text: '你长得很快，腿比同窝的狗都长。在院子里跑的时候，你常常撞翻椅子。', eff: { safety: -3 } },
    { stages: ['young','adult'], w: 2, need: 'large', text: '长大以后，你的关节在下雨天会隐隐作痛。主人给你买了一张厚厚的垫子。', eff: { health: -3 } },
    { stages: ['newborn','puppy'], w: 2, need: 'brachy', text: '你的鼻孔很窄，喝奶的时候总要停下来喘气。母犬把你推到一边，过一会儿又叼回来。', eff: { health: -6 } },
    { stages: ['puppy','young','adult'], w: 2, need: 'brachy', text: '天一热你就张着嘴喘，舌头几乎耷拉到地上。你不能跑远，跑一段就喘得厉害。', eff: { health: -4, food: -3 } },
    { stages: ['adult','old'], w: 1, need: 'brachy', text: '夜里你的呼噜声很大，自己也会醒过来几次。主人说你的呼吸道比别的狗窄。', eff: { health: -3 } },
    { stages: ['puppy'], w: 2, need: 'india', text: '一辆三轮车从你身边驶过，车上的人朝你扔了一块石头。你和兄弟姐妹四散跑开。', eff: { safety: -5 } },
    { stages: ['young','adult'], w: 2, need: 'india', act: 'forage', text: '路边的小摊收摊时倒掉了一锅汤，一群狗冲上去。你抢到的只剩骨头上的一点汤汁。', eff: { food: +10 } },
    { stages: ['adult','old'], w: 2, need: 'india', text: '夏天的午后，路面烫得能烙熟鸡蛋。你找到一个阴凉的水沟，把身子埋进去，一动不动。', eff: { health: -3, safety: +3 } },
    { stages: ['young','adult'], w: 2, need: 'cn_north', text: '冬天早上，楼道门口结着一层冰。你在暖气片旁边找了个角落，蜷着睡到天亮。', eff: { health: +3 } },
    { stages: ['puppy'], w: 2, need: 'cn_north', text: '你第一次听见鞭炮声，吓得钻进了路边的纸箱里。', eff: { safety: -3 } },
    { stages: ['adult'], w: 1, need: 'cn_north', text: '小区里有人在跳广场舞，音乐放了很久。你跟着节奏叫了几声，被主人笑着拉走了。' },
    { stages: ['puppy','young'], w: 2, need: 'us_yard', text: '铁丝网外面，一只松鼠在树上跳来跳去。你扑在网上叫，叫到嗓子哑了。', eff: { safety: +2 } },
    { stages: ['young','adult'], w: 2, need: 'us_yard', act: 'rest', text: '周末，主人在院子里烤肉。你趴在草坪上，等着掉下来的骨头。', eff: { food: +8, health: +3 } },
    { stages: ['adult'], w: 1, need: 'us_yard', text: '邻居家的孩子从铁丝网外面扔来飞盘。你跑过去接住，再跑回来。', eff: { health: +3 } },
    { stages: ['puppy','young'], w: 2, need: 'tokyo', text: '你住在小公寓里，每天只能在阳台上待一会儿。远处的地铁经过时，你会抬起头来看。', eff: { health: -2 } },
    { stages: ['adult'], w: 2, need: 'tokyo', act: 'rest', text: '下雨的时候，你蜷在窗边的垫子上，听雨点落在阳台的栏杆上。', eff: { health: +3 } },
    { stages: ['old'], w: 1, need: 'tokyo', text: '电梯里的人和你打招呼，你摇着尾巴回应。主人说你是这栋楼里最有名的狗。' },
    { stages: ['puppy','young'], w: 2, need: 'bold', text: '你第一次钻进一片陌生的草丛，一只野兔从你鼻子前面蹦了出去。你追了很远，没有回头。', eff: { safety: -5 } },
    { stages: ['puppy','young','adult'], w: 2, need: 'cautious', text: '每次路过新的门口，你都先停下来闻一闻，确认没有人在等你，才慢慢走过去。', eff: { safety: +5 } },
    { stages: ['puppy'], w: 2, need: 'curious', text: '你把一根木棍拖到墙角，又拖回来，反复地咬它。耳朵一直竖着，听别的声音。' },
    { stages: ['newborn','puppy'], w: 2, need: 'runt', text: '你个子最小，每次吃奶都要等很久。兄弟姐妹吃饱走开了，你还在原地拱着。', eff: { food: -5, health: -3 } },
    { stages: ['young','adult'], w: 2, need: 'robust', text: '你是这一窝里最壮的。有一只老公狗来抢骨头，你直接把它顶到了一边。', eff: { safety: +5, health: +3 } },
  ],

  opening: {
    title: '第一次爬向母亲',
    body: '你刚出生，眼睛和耳朵都还闭着。窝里的兄弟姐妹挤成一团，中间最暖和，窝边的几只会先吃到奶。母犬侧躺着，还没有空来管你。',
    options: [
      { t: '往窝中间最暖和的地方挤', hint: '保暖 · 吃奶慢', eff: { health: +5 }, risk: 1.15, riskDays: 21,
        result: '你挤进兄弟姐妹的身体中间。身上很热，但胃里一直空着。' },
      { t: '先爬向母犬的乳头', hint: '吃到初乳 · 窝边挤不动', eff: { health: +10, food: +10 }, risk: 0.85, riskDays: 21,
        result: '你摸到一只温热的乳头，闭着眼睛吮了起来。初乳又稠又黄，你吃得很急。' },
    ],
  },

  actions: {
    forage:  { name: '翻垃圾找吃的', desc: '沿着垃圾桶和餐馆后门的气味一路找过去。吃得饱，但要和别的狗抢，也容易被人赶。', stages: ['puppy','young','adult','old'], need: 'stray', text: ['你把鼻子伸进垃圾袋的缝里，拖出一根带肉的骨头。', '一只老鼠从菜筐底下窜出来，你扑过去，没抓到。', '垃圾车还没来，巷口的垃圾堆散着菜叶和鱼头。'] },
    hide:    { name: '躲进角落', desc: '缩进墙角、床底或纸箱里，不叫，也不乱跑。吃得少，但不容易被发现。', text: ['你蜷在墙角，把头压在前爪上。', '外面的人声慢慢远了，你还是没有动。', '你在床底下待了一下午，尾巴藏在身子下面。'] },
    rest:    { name: '趴着睡觉', desc: '找一块暖和的地方趴下，把身体放松，睡到自己醒来为止。', text: ['你侧躺在晒热的水泥地上，呼吸慢慢变长。', '你做了一个梦，腿在空中蹬了几下。', '你翻了个身，肚皮朝天，一只耳朵还在听外面的动静。'] },
    explore: { name: '到外面转转', desc: '离开熟悉的地盘，去更远的街区或公园。见到的东西多，危险也多。', stages: ['puppy','young','adult'], text: ['你沿着一条陌生的巷子一路嗅过去，每个墙角都要停一下。', '公园的草坪上有人在放风筝，你跟着风筝跑了一段。', '河边的石头上有鱼腥味，你在那里待了很久。'] },
    mate:    { name: '找伴', desc: '跟着气味去找发情的同类。绝育的狗做不到。', stages: ['young','adult'], need: '!neutered', done: '一窝小狗出生了，一共 {n} 只。', text: ['你闻到一股陌生的气味，跟着它走了很久。', '一只母狗在远处叫，你停下来，竖起耳朵。', '你们嗅着彼此的尾巴，绕了好几圈。'] },
  },

  decisions: [
    {
      id: 'scrap', at: 60, need: 'stray',
      title: '墙边的一块肉',
      body: '一块带骨头的肉掉在路边。另一只流浪狗正盯着它，你离肉只有一步远。',
      fact: '全球大多数狗是自由活动的街头或村落犬（Hughes & Macdonald 2013，Biological Conservation）',
      options: [
        { t: '冲过去抢', hint: '饱食↑↑ 打斗风险↑', eff: { food: +20 }, kill: 0.1, cause: 'fight',
          result: '你叼着骨头跑开，身后有一阵撕咬声。你没有回头。' },
        { t: '绕到垃圾桶后面', hint: '饱食↑ 安全', eff: { food: +8, safety: +5 },
          result: '你绕到垃圾桶后面，找到一块被人啃过的鱼骨头。' },
      ],
    },
    {
      id: 'road', at: 200, need: 'stray',
      title: '一条马路',
      body: '另一边的草地上有一堆食物，但要穿过一条车很多的马路。路口的红灯刚刚变成绿色。',
      options: [
        { t: '等车都过去再走', hint: '安全 · 慢', eff: { safety: +5 },
          result: '你在路边等了很久。车一辆接一辆地开过，你终于找到了一个空隙。' },
        { t: '趁车还远，冲过去', hint: '食物↑ 被车撞的风险↑', eff: { food: +10 }, kill: 0.08, cause: 'car',
          result: '你冲到了草地上。一辆车的喇叭声从你身后响起，又很快远去。' },
      ],
    },
    {
      id: 'door', at: 365, need: 'pet',
      title: '门开着',
      body: '门没关，外面的风吹进来。院子里有一只猫在晒太阳，它的尾巴一甩一甩的。',
      options: [
        { t: '冲出去追', hint: '好玩 · 风险↑↑', eff: { safety: -5 }, risk: 1.6, riskDays: 3, kill: 0.05, cause: 'car',
          result: '你追着猫跑出了院子，跑过两条街，才被人找回来。' },
        { t: '在门口等主人', hint: '安全', eff: { safety: +5 },
          result: '你乖乖地蹲在门口。主人回来时，你摇着尾巴扑了上去。' },
      ],
    },
    {
      id: 'estrus', at: 240, need: 'female',
      title: '第一次发情',
      body: '你身后滴下了几滴血。一种陌生的气味飘在空气里，远处有一只雄狗在叫。',
      options: [
        { t: '跟着气味走', hint: '后代↑ 风险↑', eff: { food: -5 }, risk: 1.3, riskDays: 10,
          result: '你跟着那股味道跑了很远。之后的几天，你的身体不太一样了。' },
        { t: '留在原地', hint: '安全', eff: { safety: +5 },
          result: '你留在原地。那只雄狗的叫声慢慢远去了。' },
      ],
    },
    {
      id: 'senior_pet', at: 4380, need: 'pet', when: { health: '<40' },
      title: '还有一次治疗的机会',
      body: '你的身体越来越慢。兽医说，有两条路：做一次昂贵的治疗，或者让你安静地走。',
      options: [
        { t: '做治疗', hint: '健康↑ 花费大', eff: { health: +15 }, risk: 0.6, riskDays: 365,
          result: '治疗之后，你又能在院子里走几圈了。主人一直陪着你。' },
        { t: '安乐', hint: '结束', eff: {}, kill: 1, cause: 'end',
          result: '医生在你身边轻声说了几句话。一针下去，你安静地睡着了。' },
      ],
    },
    {
      id: 'senior_stray', at: 4380, need: 'stray', when: { health: '<40' },
      title: '一个冬夜',
      body: '风从门缝里钻进来。附近的通风口冒着热气，但有人在那里睡觉，而且会赶你走。',
      options: [
        { t: '去找那个通风口', hint: '暖和 · 可能被赶', eff: { health: +5 }, risk: 0.9, riskDays: 30,
          result: '你蜷在通风口旁边，热气一阵阵地吹过来。天亮时，有人踢了你一脚。' },
        { t: '留在原地', hint: '冷 · 食物少', eff: { food: -10 }, risk: 1.5, riskDays: 30,
          result: '你在原地缩成一团。风一直没停，你醒来时，身上结了一层霜。' },
      ],
    },
    {
      id: 'neuter', at: 300, need: 'pet',
      title: '主人想给你做绝育',
      body: '兽医说，绝育以后你会少往外跑，也会少打架。但手术之后，你的身体会有一段时间不太一样。',
      options: [
        { t: '同意手术', hint: '不再发情 · 手术有风险', eff: { health: -5 }, risk: 0.8, riskDays: 30, set: 'neutered',
          result: '手术之后你昏睡了一整天。脖子上多了一个圆圆的项圈，伤口痒的时候，你总想去舔。' },
        { t: '不同意', hint: '保留繁殖 · 外出的机会↑', eff: {}, risk: 1.2, riskDays: 365,
          result: '你还是那个样子，一听见门响，就想往外跑。' },
      ],
    },
    {
      id: 'shelter', at: 1500, need: 'stray',
      title: '收容车又来了',
      body: '街口停下一辆白色的车，车上的人拿着网兜和长杆。同伴们已经开始往各个方向跑。你还能选一个去处。',
      options: [
        { t: '钻进下水道口', hint: '安全↑ · 脏', eff: { safety: +10, health: -5 }, risk: 1.1, riskDays: 30,
          result: '你钻进一个窄窄的下水道口，外面的喊声在水泥管道里变得很闷。' },
        { t: '钻进一户人家的院子', hint: '食物↑ · 容易被发现', eff: { food: +10 }, risk: 1.3, riskDays: 30,
          result: '院子门没关。你挤进去，院里的狗叫了一声，就不再理你。你在台阶下找到一碗剩饭。' },
      ],
    },
    {
      id: 'park_dog', at: 2400, need: 'pet',
      title: '公园里的那只狗',
      body: '公园的草坪上，一只陌生的大狗朝你跑过来，尾巴摇着。它的主人在很远的地方喊了一声。',
      options: [
        { t: '冲上去打招呼', hint: '结识朋友 · 有冲突风险', eff: { safety: +5 }, kill: 0.03, cause: 'fight',
          result: '你们互相闻了闻，然后一起跑了一圈。主人过来的时候，你们都还在喘气。' },
        { t: '贴着主人的腿绕开', hint: '安全 · 错过', eff: { safety: +3 },
          result: '主人牵着你绕到另一条小路上。那只狗还在后面叫，声音越来越远。' },
      ],
    },
    {
      id: 'old_walk', at: 4000, need: 'pet',
      title: '老了，还要不要散步',
      body: '你的后腿越来越慢。主人拿着牵引绳站在门口，你看着它，不知道今天会走到哪一步停下来。',
      options: [
        { t: '照常出去散步', hint: '健康↑ · 路上可能摔倒', eff: { health: +4 }, risk: 1.2, riskDays: 60,
          result: '你慢慢走完了平时那条路。回来时，你趴在门口喘了很久。' },
        { t: '只在院子里晒太阳', hint: '安全 · 肌肉慢慢萎缩', eff: { health: -2 }, risk: 0.8, riskDays: 60,
          result: '你在院子里趴了一下午，太阳晒着你的背，慢慢地暖了起来。' },
      ],
    },
    {
      id: 'brachy_heat', at: 500, need: 'brachy',
      title: '夏天的午后',
      body: '外面的温度超过了三十度，院子里没有一点阴凉。主人站在门口，手里拿着水盆。',
      options: [
        { t: '留在屋里吹空调', hint: '健康↑ 运动少', eff: { health: +5, safety: +3 }, risk: 0.8, riskDays: 30,
          result: '你趴在凉瓷砖上，喘气慢慢平稳下来。' },
        { t: '跟着主人去外面散步', hint: '快乐↑ 中暑风险↑', eff: { health: -5 }, risk: 1.5, riskDays: 10,
          result: '你走不到半条街，就停在路边大口地喘，舌头垂到了地上。' },
      ],
    },
    {
      id: 'large_bloat', at: 700, need: 'large',
      title: '一顿饭之后',
      body: '刚吃完饭，你的肚子就鼓了起来。你想吐，却吐不出来。主人已经拿起了车钥匙。',
      options: [
        { t: '立刻去医院', hint: '安全↑ 花费大', eff: { health: +8 }, risk: 0.5, riskDays: 3,
          result: '医生说你的胃扭转了。手术之后，你躺了两天才能站起来。' },
        { t: '等它自己好', hint: '风险↑↑', eff: { health: -10 }, risk: 2.2, riskDays: 3,
          result: '你趴在地板上，肚子硬得像鼓。到了半夜，你的呼吸越来越浅。' },
      ],
    },
    {
      id: 'india_pack', at: 400, need: 'india',
      title: '一群狗',
      body: '街角的狗群朝你走过来。领头的一只狗露出了牙齿，它身后的几只也停下了脚步。',
      options: [
        { t: '退到墙边', hint: '安全↑', eff: { safety: +5 }, risk: 0.9, riskDays: 3,
          result: '你背靠着墙，一动不动。领头的狗停了一下，又走开了。' },
        { t: '迎上去叫几声', hint: '地位↑ 打斗风险↑', eff: { safety: -3 }, kill: 0.05, cause: 'fight',
          result: '你叫了两声，冲了上去。一阵撕咬之后，你们各自退回了原地。' },
      ],
    },
    {
      id: 'us_fence', at: 300, need: 'us_yard',
      title: '铁丝网的门开着',
      body: '院子的门没关，外面的马路上有车经过。风把门吹得一下一下地晃。',
      options: [
        { t: '留在院子里', hint: '安全', eff: { safety: +3 },
          result: '你在草坪上趴了一下午，看着车一辆一辆地开过去。' },
        { t: '跑出去追车', hint: '风险↑↑', eff: { safety: -5 }, risk: 1.6, riskDays: 3, kill: 0.1, cause: 'car',
          result: '你追着车跑了两条街，才被路人拦了下来。' },
      ],
    },

  ],

  idle: [
    '远处有人在喊一个名字，不是你的。',
    '一只鸽子落在不远的地方，你看了它一眼，没有动。',
    '天色暗下来，巷子里的灯一盏一盏亮了。',
    '远处的车声一阵一阵地传过来。',
    '有什么东西的气味飘了过来，又慢慢散开了。',
    '垃圾车的声音从巷子口传过来，很重。',
    '夜里有人家的灯亮着，窗户里传来说话声。',
    '一阵风吹过，周围的东西轻轻动了一下。',
  ],

  epitaph: '地球上的狗里，大多数没有名字，也没有人为它们写过墓志铭。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'cat',
  name: '猫',
  en: 'Domestic cat',
  sci: 'Felis catus',
  emoji: '🐱',
  scene: 'house',
  kind: 'pet',
  tagline: '它在人类身边生活了上万年，有的住在沙发上，有的住在巷子里',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出身', options: [
        ['你出生在老社区的垃圾桶边，母猫是一只没人管的野猫', 35, { set: 'stray', food: -10 }],
        ['你出生在城中村的屋顶上，母猫和一群没有主人的猫住在一起', 25, { set: 'stray', food: -5, risk: 1.2 }],
        ['你出生在一户人家的阳台上，主人给你起了名字', 40, { set: 'pet', food: +15, safety: +10 }],
      ]},
      { label: '品种与体型', options: [
        ['你是中国田园猫的后代，短毛，花色杂，体型中等', 5, { health: +5, set: 'tianyuan' }],
        ['你是英国短毛猫的后代，身体圆，毛厚得像一件大衣', 2, { health: +3, set: 'british' }],
        ['你是波斯猫的后代，鼻子很短，眼睛大，眼泪多', 1, { health: -8, risk: 1.25, set: 'persian' }],
        ['你是缅因猫的后代，长大后体重可能超过七公斤', 2, { food: +5, set: 'maine' }],
      ]},
      { label: '生活的地方', options: [
        ['印度尼西亚一个海港的老街，很多猫是流浪猫，有人投喂', 3, { food: +3, risk: 1.15, set: 'port_street' }],
        ['北京一个老胡同的院子，墙头上常年有几只猫', 3, { safety: +3, set: 'hutong' }],
        ['澳大利亚的一座农场，谷仓里有老鼠，也有猛禽', 2, { food: +15, risk: 1.2, set: 'farm' }],
        ['一座北方城市的高层公寓，你只能待在阳台和窗户之间', 2, { safety: +8, health: -3, set: 'highrise' }],
      ]},
    ],
    siblings: 4,
    siblingsLabel: '同一窝的小猫',
    intro: '你是一只刚出生的小猫，眼睛还闭着，身上只有一点稀疏的毛。你是{sex}。{出身}，同一窝一共 {siblings} 只。',
  },

  stages: [
    { id: 'kitten', name: '幼猫',   from: 0,    unit: 'week' },
    { id: 'juv',    name: '少年猫', from: 112,  unit: 'month' },
    { id: 'adult',  name: '成年猫', from: 365,  unit: 'month' },
    { id: 'old',    name: '老年猫', from: 4380, unit: 'month' },
  ],
  maturity: 240,
  maxAge: 7300,

  survival: [[0,1],[7,0.85],[30,0.75],[60,0.7],[112,0.63],[180,0.56],[365,0.5],[730,0.44],[1460,0.35],[2555,0.25],[3650,0.17],[4380,0.12],[5475,0.06],[6205,0.02],[6935,0.004],[7300,0]],
  survivalNote: '室内猫的寿命多在十几年，外出的猫和流浪猫死亡率高得多。此曲线按混合人群粗估',

  init: { health: 75, food: 55, safety: 50 },
  foodDrain: 3,

  causes: [
    { id: 'car', escape: true, w: 4, stages: ['juv','adult','old'], short: '被车撞了',
      text: '一辆车从巷子口拐进来。你还没跑到路边，车灯就照在了你身上。' },
    { id: 'fight', escape: true, w: 3, stages: ['juv','adult'], short: '打架伤口感染',
      text: '墙头上的另一只猫叫了一声，然后扑了下来。你的前爪被咬穿，伤口很快化了脓。' },
    { id: 'fiv', escape: false, w: 2, stages: ['adult','old'], short: '免疫系统垮掉',
      text: '一次咬伤之后，你的身体慢慢失去了抵抗力。感染的小病一个接一个，你没能再扛过去。' },
    { id: 'panleuk', escape: false, w: 4, stages: ['kitten'], short: '猫瘟',
      text: '你连着几天不吃，拉出的东西像水一样。猫瘟病毒很快传遍了这一窝。' },
    { id: 'cold_starve', escape: false, w: 3, stages: ['kitten'], need: 'stray', short: '母猫没有回来，饿死',
      text: '母猫出去找吃的，一去三天没有回来。你饿得没有力气叫，只会一下一下地发抖。' },
    { id: 'poison', escape: false, w: 2, stages: ['juv','adult'], short: '误食毒物',
      text: '你舔了一口地上的老鼠药，或是嚼了一朵百合的花。之后你开始呕吐，肾脏慢慢停了。' },
    { id: 'euth', escape: false, w: 2, stages: ['old'], need: 'pet', short: '老年病，安乐死',
      text: '你的体重一直在降。医生说，你的肾已经不能工作了。你躺在不锈钢台子上，闭上了眼睛。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你睡得越来越多，醒着的时候也不太想动。一个安静的夜里，你没有再醒来。' },
  ],

  events: [
    { stages: ['kitten'], w: 3, text: '母猫把你舔干净，你的身体贴在它的肚子边上，慢慢热了起来。' },
    { stages: ['kitten'], w: 2, once: true, text: '你睁开了眼，世界是一团蓝色的雾。' },
    { stages: ['kitten'], w: 2, need: 'stray', text: '母猫叼着你换了一个地方。你在一个纸箱里待了两天，才被挪回原处。' },
    { stages: ['kitten'], w: 2, need: 'stray', text: '一只大狗从巷口冲过来。母猫把你叼进了一个下水道口。', eff: { safety: +10 } },
    { stages: ['kitten'], w: 3, need: 'pet', text: '主人用一根羽毛逗你。你扑了上去，把它咬得乱七八糟。', eff: { health: +2 } },
    { stages: ['kitten'], w: 2, need: 'pet', text: '你第一次吃到猫罐头。它比你想象的软。', eff: { food: +15 } },
    { stages: ['kitten'], w: 2, text: '你学着捉自己的尾巴，转了三圈，摔倒在地上。' },
    { stages: ['juv'], w: 2, text: '你追一只蝴蝶，在地上滚了一圈，然后假装什么都没发生。' },
    { stages: ['juv'], w: 3, need: 'stray', text: '你第一次抓到了一只麻雀。它很快挣脱了，只留下你嘴里几根羽毛。',
      eff: { food: +5 }, fact: '美国的自由活动猫每年杀死的鸟类估计为 14 亿至 37 亿只（Loss 等 2013，Nature Communications）' },
    { stages: ['juv'], w: 2, text: '你学会了趴在草丛里一动不动，等猎物靠近。' },
    { stages: ['juv'], w: 2, need: 'stray', text: '一只陌生的公猫闯进你的领地。你们对着叫了很久，谁也没有先走。', eff: { safety: -5 } },
    { stages: ['adult'], w: 2, need: 'stray', text: '这条巷子是你的地盘。墙角的气味，是你留下的。' },
    { stages: ['adult'], w: 1, once: true, need: 'male', text: '你的一颗牙被咬断了。那是在一场打斗之后留下的。', eff: { health: -10 } },
    { stages: ['adult'], w: 3, need: 'pet', text: '你趴在窗台上看外面的鸟，尾巴一甩一甩的。主人把窗户关上了。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, need: 'stray', text: '一场大雨下了一整夜，垃圾桶边的食物都泡了水。', eff: { food: -10 } },
    { stages: ['adult'], w: 3, need: 'stray', text: '一只老鼠从墙缝里探出头。你一动不动，等它再靠近一点。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你产下了第一窝小猫，一共 {n} 只。', eff: { offspring: [3, 5] } },
    { stages: ['adult'], w: 2, need: 'female', text: '你又生了一窝小猫，一共 {n} 只。', eff: { offspring: [2, 5] } },
    { stages: ['old'], w: 2, text: '你晚上睡得很多，白天有时忘了自己要去哪儿。', eff: { health: -3 } },
    { stages: ['old'], w: 2, need: 'pet', text: '你开始在厨房的角落里睡觉。兽医说你的体重又轻了一点。', eff: { health: -5 } },
    { stages: ['old'], w: 2, need: 'stray', text: '一个冬夜，你找到一只旧纸箱，缩在里面过夜。', eff: { health: -5, safety: +3 } },
    { stages: ['juv','adult'], w: 3, act: 'forage', need: 'stray', text: '你蹲在一堆旧木板后面，一只蟑螂慢慢爬过来，你一爪按住了它。', eff: { food: +8 } },
    { stages: ['juv','adult','old'], w: 2, act: 'forage', need: 'stray', text: '你在一家面馆的后门台阶下蹲着，直到有人把碗底的鱼头扔出来。', eff: { food: +12 } },
    { stages: ['adult','old'], w: 1, act: 'forage', need: 'stray', text: '河沟边的草丛里，你扑到一只青蛙，它蹦了几下，挣开了你。', eff: { food: +3 } },
    { stages: ['juv','adult','old'], w: 2, act: 'hide', text: '一辆车从巷口开过，你躲在车底下，耳朵贴平。等它开远，你才爬出来。', eff: { safety: +5, food: -4 } },
    { stages: ['adult','old'], w: 1, act: 'hide', text: '一只大狗叫着从巷子那头跑过来，你缩进纸箱里。它的叫声远去了，你还没敢动。', eff: { safety: +8 } },
    { stages: ['kitten','juv','adult','old'], w: 2, act: 'rest', text: '你在窗台的阳光里睡了整整一个下午。', eff: { health: +4 } },
    { stages: ['juv','adult','old'], w: 1, act: 'rest', need: 'pet', text: '主人把软毯子铺在沙发上，你整个身子陷进去，一动不动。', eff: { health: +4 } },
    { stages: ['juv','adult'], w: 2, act: 'explore', text: '你爬过一道矮墙，另一条巷子里有一只陌生的猫，正对你竖着尾巴。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, act: 'explore', text: '你沿着屋顶走了一圈，在一个空花盆里找到一只被人遗忘的罐头，尝到一点咸味。', eff: { food: +10 } },
    { stages: ['juv','adult'], w: 2, act: 'mate', text: '一只陌生的公猫在墙头叫，你跟着声音走过了两个院子。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, act: 'mate', need: 'female', text: '你在墙角的纸箱里待了三天，只在夜里出去找过一次吃的。', eff: { food: -5 } },
    { stages: ['kitten'], w: 2, need: 'tianyuan', text: '母猫把你叼到墙根下一个废纸箱里。纸箱上有雨水的痕迹，但你们挤成一团，很暖和。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'tianyuan', act: 'explore', text: '你爬上墙头，看着一条陌生的巷子。另一只花猫在远处叫了一声，你没有回应。', eff: { safety: -3 } },
    { stages: ['adult'], w: 1, need: 'tianyuan', text: '你在街角认出了一只老猫。它伸出鼻子闻你，然后让开了一条路。' },
    { stages: ['kitten','juv'], w: 2, need: 'british', text: '你的身体圆圆的，走路慢。摔倒的时候，主人笑着把你抱起来。', eff: { safety: +3 } },
    { stages: ['adult','old'], w: 2, need: 'british', text: '你的体重一年比一年重。主人每天定量喂你，你总觉得不够。', eff: { health: -3, food: -3 } },
    { stages: ['adult'], w: 1, need: 'british', act: 'rest', text: '你把身子摊在沙发上，一动不动，毛厚厚地压在坐垫上。', eff: { health: +3 } },
    { stages: ['kitten'], w: 2, need: 'persian', text: '你的眼睛下面总是湿的。主人每天用棉球帮你擦掉眼泪和眼屎。', eff: { health: -4 } },
    { stages: ['juv','adult'], w: 2, need: 'persian', text: '你的鼻子很短，喘气时嘶嘶作响。天热的时候，你不能跑太快。', eff: { health: -4, food: -3 } },
    { stages: ['adult','old'], w: 1, need: 'persian', text: '兽医说你的肾脏里长着很多小囊泡。这是你的品种里常见的遗传病。', eff: { health: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'maine', text: '你的身体比同窝的猫都大。爬上书柜的时候，柜子会晃一下。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, need: 'maine', act: 'forage', text: '你伸爪子就能勾到厨房台面上的鱼干。', eff: { food: +12 } },
    { stages: ['old'], w: 1, need: 'maine', text: '你的后腿开始不太灵活。跳上窗台之前，你要先试一下才敢跳。', eff: { health: -4 } },
    { stages: ['kitten','juv'], w: 2, need: 'port_street', text: '渔船靠岸的时候，码头边会有小鱼掉下来。你和一群猫挤在木箱后面等着。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'port_street', act: 'forage', text: '一家小饭馆的后门每天都会扔出一桶鱼头。你们一群猫抢得很快。', eff: { food: +12, safety: -3 } },
    { stages: ['adult','old'], w: 1, need: 'port_street', text: '天热的时候，街上的猫都挤在阴凉的地下室里。空气里是鱼腥味和潮湿的味道。', eff: { health: -3 } },
    { stages: ['kitten','juv'], w: 2, need: 'hutong', text: '院子里有人在晒被子，被子底下藏着一只老猫。你钻进去，睡了一个下午。', eff: { health: +3 } },
    { stages: ['adult'], w: 2, need: 'hutong', act: 'hide', text: '胡同里的人声在墙外来来去去。你趴在窗台上，把眼睛眯成一条缝。', eff: { safety: +5 } },
    { stages: ['adult','old'], w: 1, need: 'hutong', text: '冬天的早晨，屋檐上结着冰。你踩上去，爪子一滑，差点掉下墙。', eff: { health: -2 } },
    { stages: ['kitten'], w: 2, need: 'farm', text: '你的母亲在谷仓的草料堆里生下了你们。屋顶上落下一只猫头鹰，你们一动不动。', eff: { safety: -3 } },
    { stages: ['juv','adult'], w: 3, need: 'farm', act: 'forage', text: '你在谷仓的角落里逮到一只老鼠，一口咬断了它的脖子。', eff: { food: [15, 25] } },
    { stages: ['adult'], w: 2, need: 'farm', text: '拖拉机的声音从田埂那边传过来。你从草堆里跳出来，躲进了另一个谷仓。', eff: { safety: -5 } },
    { stages: ['kitten','juv'], w: 2, need: 'highrise', text: '你的世界是一个阳台和一扇窗。你隔着玻璃看楼下的鸽子，在电线上来回跳。' },
    { stages: ['adult'], w: 2, need: 'highrise', act: 'rest', text: '下午的阳光从窗户照进来，你躺在地板上，把整个身体都晒热了。', eff: { health: +4 } },
    { stages: ['adult','old'], w: 1, need: 'highrise', text: '楼下有人在装修，电钻声一直响，你的耳朵抖个不停。', eff: { safety: -4 } },
    { stages: ['juv'], w: 2, need: 'bold', text: '你第一个从门缝里溜了出去。外面的世界很大，你一口气跑过了三条街。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '你总是在门口蹲很久，看看有没有狗，才肯迈出一步。', eff: { safety: +5 } },
    { stages: ['kitten','juv'], w: 2, need: 'curious', text: '你把一个线团拖到床底下，一根线一根线地拉出来，玩了一个晚上。' },
    { stages: ['kitten'], w: 2, need: 'runt', text: '你比同窝的小猫都轻。母猫把奶头让给别的小猫，你只能抢着吃一口。', eff: { food: -5, health: -3 } },
    { stages: ['juv','adult'], w: 2, need: 'robust', text: '一只老公猫想抢你的地盘，你直接扑过去，把它按在墙上。', eff: { health: -3, safety: +3 } },
  ],

  opening: {
    title: '第一次爬行',
    body: '你刚出生，眼睛还封着，耳朵紧贴着头。窝里有几只小猫，中间最暖和，而乳头只有几个，先到的才能吃到奶。',
    options: [
      { t: '爬向窝中间最暖和的地方', hint: '保暖 · 乳头先被占', eff: { health: +5 }, risk: 1.15, riskDays: 30,
        result: '你缩进了最中间，四周都是别的小猫的身体。你没挤到奶，但很暖和。' },
      { t: '先去找母猫的乳头', hint: '吃到初乳 · 窝边冷', eff: { health: +10, food: +10 }, risk: 0.85, riskDays: 30,
        result: '你摸到一只乳头，用力吮了起来。初乳很稠，带着母猫身上的味道。' },
    ],
  },

  actions: {
    forage:  { name: '捕猎', desc: '在巷子和草丛里追捕老鼠、蜥蜴和飞虫，偶尔也翻翻垃圾。', stages: ['juv','adult','old'], need: 'stray', text: ['你蹲在菜筐后面，一动不动，等猎物靠近。', '墙角的老鼠洞里有细细的响动，你把耳朵贴在地上听。', '一只蜥蜴从砖缝里探出头，又缩了回去。'] },
    hide:    { name: '躲在墙角', desc: '缩在车底、纸箱或墙角，不出声。吃得少，但最不容易被发现。', text: ['你缩在车底下，爪子紧紧扒着地面。', '一只大狗从巷子那头跑过，你屏住呼吸，等它远去。', '纸箱里很暗，你把尾巴压在身下。'] },
    rest:    { name: '找个暖和的地方睡', desc: '在阳光或暖气旁边蜷起来睡。猫一天里有大半时间在睡觉。', text: ['阳光照在你身上，你伸了个懒腰，把肚皮翻了过来。', '你睡得很沉，耳朵偶尔抖一下。', '一只鸟在外面叫了一声，你的尾尖跟着抖了抖。'] },
    explore: { name: '到处走走', desc: '离开自己的地盘，去别的屋顶、巷子或院子。见到的东西多，也更容易和别的猫起冲突。', stages: ['juv','adult'], text: ['你爬过一道矮墙，沿着一条陌生的巷子走了很远。', '屋顶的瓦片在脚下发出轻轻的响声，远处的灯一盏一盏亮起来。', '一个院子的门开着，你在门口停了停，没有进去。'] },
    mate:    { name: '找伴', desc: '跟着发情的气味去找同类。绝育的猫做不到。', stages: ['juv','adult'], need: '!neutered', done: '一窝小猫出生了，一共 {n} 只。', text: ['你闻到墙那边有一股陌生的气味，跟着它走了很久。', '一只公猫在墙头叫，你们隔着一道墙对叫。', '你在一个陌生的屋顶上停下，尾巴竖得高高的。'] },
  },

  decisions: [
    {
      id: 'road', at: 300, need: 'stray',
      title: '一条马路',
      body: '马路对面有一只被丢掉的鸡腿。一辆车的灯光在远处亮起来，还没有到路口。',
      options: [
        { t: '等车过去再走', hint: '安全', eff: { safety: +5 },
          result: '你蹲在路边，直到车灯从你面前滑过，才慢慢穿过去。' },
        { t: '趁车灯还远，冲过去', hint: '食物↑ 被车撞的风险↑', eff: { food: +10 }, kill: 0.1, cause: 'car',
          result: '你叼到了鸡腿，身后传来一阵刹车声。你没有回头。' },
      ],
    },
    {
      id: 'bird', at: 400,
      title: '窗台上的鸟',
      body: '一只麻雀落在窗台上，离你只有一尺远。窗户是关着的，它没有察觉你。',
      options: [
        { t: '扑上去', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 2,
          result: '你扑过去，玻璃挡住了你。麻雀飞走了，你趴在窗台上好一会儿。' },
        { t: '继续看着', hint: '安全', eff: {},
          result: '你盯着它看了很久，直到它飞走，你的尾尖还在轻轻甩动。' },
      ],
    },
    {
      id: 'fight', at: 540, need: 'male',
      title: '领地',
      body: '一只陌生公猫在墙头上叫。这条巷子是你的地盘，但它的叫声比你的大。',
      options: [
        { t: '冲下去打', hint: '赢得地盘 · 受伤风险↑', eff: { safety: +10 }, kill: 0.15, cause: 'fight',
          result: '你们在墙根下滚成一团。最后它逃走了，你的耳朵被咬出了一个口子。' },
        { t: '退回墙角', hint: '安全 · 失去地盘', eff: { safety: -5 },
          result: '你退回墙角。那只公猫的叫声慢慢远了，这条巷子却不再是你的了。' },
      ],
    },
    {
      id: 'neuter', at: 180, need: 'pet',
      title: '主人的决定',
      body: '兽医建议给你做绝育，这样你就不会总想着往外跑，也会少打架。',
      options: [
        { t: '同意', hint: '安全↑ 手术有一点风险', eff: { health: -3 }, risk: 0.8, riskDays: 30, set: 'neutered',
          result: '手术很顺利。你的脖子上戴了一个圆圆的项圈，醒来后很长时间都不太舒服。' },
        { t: '不同意', hint: '自由 · 风险↑', eff: {}, risk: 1.3, riskDays: 365,
          result: '你还是那样，喜欢往外跑，也喜欢跟别的猫打架。' },
      ],
    },
    {
      id: 'senior', at: 4380, need: 'pet',
      title: '老年的检查',
      body: '你的体重降了两次。兽医说，可以做更多检查，也可以就在家里安静地过。',
      options: [
        { t: '做检查，开药', hint: '健康↑ 花费大', eff: { health: +10 }, risk: 0.6, riskDays: 365,
          result: '你每天吃一粒药，体重慢慢回来了一点。' },
        { t: '在家安静地过', hint: '舒服 · 风险↑', eff: {}, risk: 1.4, riskDays: 365,
          result: '你在阳台上晒太阳，主人每天都陪你坐一会儿。' },
      ],
    },
    {
      id: 'mother_cat', at: 1000,
      title: '墙根下的母猫',
      body: '墙根的纸箱里，一只母猫带着两只小猫。她看你的眼神很防备，耳朵已经压平了。',
      options: [
        { t: '慢慢靠近，闻闻那些小猫', hint: '好奇 · 可能被抓伤', eff: { safety: -5 }, kill: 0.04, cause: 'fight',
          result: '母猫猛地弓起背朝你扑过来，你的鼻尖被抓破了。你退了几步，小猫们还在叫。' },
        { t: '走开，去别处觅食', hint: '安全 · 少吃一顿', eff: { food: -5, safety: +3 },
          result: '你绕到了街的另一边。纸箱里的叫声慢慢远去了。' },
      ],
    },
    {
      id: 'sick', at: 1900, need: 'pet',
      title: '发烧的一个晚上',
      body: '你连着两天没胃口，身上很烫，鼻子干干的。主人想带你去看医生，但你讨厌那个笼子。',
      options: [
        { t: '去看医生', hint: '健康↑ · 花费大', eff: { health: +10 }, risk: 0.6, riskDays: 30,
          result: '医生给你扎了一针。之后的几天，你的肚子慢慢软了下来。' },
        { t: '自己扛过去', hint: '风险↑', eff: { health: -5 }, risk: 1.4, riskDays: 30,
          result: '你躲在床底下，不吃不动，一直到第三天早上，身上才没那么烫了。' },
      ],
    },
    {
      id: 'winter_garage', at: 2900, need: 'stray',
      title: '冬夜的地下车库',
      body: '巷子里的温度降到零下，垃圾桶边的食物都冻住了。小区的地下车库门没关，里面暖和，但有一股很重的机油味和老鼠药的味道。',
      options: [
        { t: '钻进车库，找暖和的角落', hint: '暖和 · 可能误食毒物', eff: { health: +5, food: +5 }, risk: 1.2, riskDays: 60, kill: 0.04, cause: 'poison',
          result: '你在一堆纸板后面缩成一团。半夜里你舔了一下爪子，嘴里有一股苦味。' },
        { t: '留在巷子里挨过去', hint: '冷 · 饿', eff: { health: -8, food: -5 }, risk: 1.5, riskDays: 60,
          result: '你在墙角缩了三个晚上，直到风停下来。' },
      ],
    },
    {
      id: 'old_territory', at: 5800, need: 'stray',
      title: '老了的地盘',
      body: '墙头上一只年轻的公猫在叫。你跳了一下，没能跳上去，爪子在墙面上刮出一道痕。这条巷子也许不再是你的了。',
      options: [
        { t: '去另一条巷子', hint: '食物↑ 风险↑', eff: { food: +5 }, risk: 1.3, riskDays: 60,
          result: '你沿着一排排晾衣竿，走到了另一条巷子。那里的垃圾桶边，有人留了一碗饭。' },
        { t: '守着原来的墙角', hint: '安全 · 食物少', eff: { safety: +5, food: -5 }, risk: 1.0, riskDays: 60,
          result: '你仍守着那道墙根。年轻的公猫叫了几声，没有再爬上来。' },
      ],
    },
    {
      id: 'persian_heat', at: 400, need: 'persian',
      title: '热天',
      body: '连着三天都是三十多度。你的鼻子喘得厉害，主人站在空调边上，手里拿着一条湿毛巾。',
      options: [
        { t: '一直待在凉的房间里', hint: '健康↑ 运动↓', eff: { health: +5 }, risk: 0.8, riskDays: 30,
          result: '你在地板上摊成一片，呼吸慢慢平稳下来。' },
        { t: '跳上阳台晒晒太阳', hint: '健康↓ 风险↑', eff: { health: -5 }, risk: 1.4, riskDays: 10,
          result: '你跳上阳台，没多久就张嘴喘起来。主人把你抱了回去。' },
      ],
    },
    {
      id: 'maine_fish', at: 300, need: 'maine',
      title: '厨房台面上的鱼干',
      body: '一袋鱼干放在台面上，主人刚离开厨房。你离鱼干只有一步远。',
      options: [
        { t: '跳上去抢', hint: '饱食↑↑ 摔下来的风险', eff: { food: +15 }, risk: 1.2, riskDays: 3,
          result: '你叼着鱼干跳下来，鱼干的味道让你忘了身后的动静。' },
        { t: '等主人回来', hint: '安全', eff: { safety: +5, food: -3 },
          result: '主人回来，看见你蹲在台面边上，把鱼干收了起来。' },
      ],
    },
    {
      id: 'farm_poison', at: 240, need: 'farm',
      title: '谷仓角落的老鼠药',
      body: '谷仓的角落里放着一包老鼠药，旁边躺着一只刚死的老鼠。',
      options: [
        { t: '绕开，不碰', hint: '安全', eff: { safety: +3 },
          result: '你绕到另一边，跳上了草料堆。' },
        { t: '舔一口', hint: '风险↑↑', eff: { health: -5 }, kill: 0.15, cause: 'poison',
          result: '你舔到了一点粉末，嘴里发苦。那天晚上，你的肚子疼得厉害。' },
      ],
    },
    {
      id: 'highrise_window', at: 300, need: 'highrise',
      title: '窗户没关紧',
      body: '窗户留着一条缝，外面的风从缝里吹进来。楼下的鸽子在电线上叫。',
      options: [
        { t: '从窗缝挤出去', hint: '外面的世界 · 风险↑↑', eff: { food: +5 }, risk: 1.8, riskDays: 3,
          result: '你从窗缝挤了出去，爪子踩上了空调外机的铁皮。风很大，你几乎抓不住。' },
        { t: '缩在屋里', hint: '安全', eff: { safety: +5 },
          result: '你蹲在窗边，看着鸽子慢慢飞走了。' },
      ],
    },

  ],

  idle: [
    '光慢慢从窗台移到地板上，周围安静下来。',
    '风从门缝里挤进来，耳朵动了动。',
    '远处有人在叫一只猫的名字，不是你的。',
    '一只鸟在外面叫了一声，尾尖跟着抖了一下。',
    '你在柔软的地方蹭了蹭，留下一点自己的气味。',
    '天色暗下来，屋里只剩一点点光。',
    '远处传来汽车的声音，很快又远去了。',
    '墙角有人家在做饭，香味慢慢飘过来。',
  ],

  epitaph: '猫在夜里醒着的时候，城市里还有很多只猫和你一样。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'elephant',
  name: '非洲草原象',
  en: 'African savanna elephant',
  sci: 'Loxodonta africana',
  emoji: '🐘',
  scene: 'savanna',
  kind: 'wild',
  tagline: '一头象一生要记住很多水源和路线，也要记住每一个死去的同伴',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生的季节', options: [
        ['雨季刚开始，草还没有长高', 3, { food: +15 }],
        ['雨季中间，水塘满满的', 3, { food: +10, safety: +5 }],
        ['旱季末，河床快要干裂的时候', 2, { food: -15, risk: 1.2 }],
      ]},
      { label: '家族群', options: [
        ['一个由母象、姨母和堂姐妹组成的家族群', 5, { safety: +10 }],
        ['一个刚刚重组的家族群，里面几乎都是陌生的母象', 1, { safety: -10 }],
      ]},
      { label: '种群', options: [
        ['肯尼亚南部的安博塞利，大象被研究了半个多世纪，每头都有名字', 2, { safety: +5, set: 'amboseli' }],
        ['博茨瓦纳的奥卡万戈三角洲，每年洪水季节，湿地一片汪洋', 2, { food: +10, set: 'okavango' }],
        ['南非的克鲁格国家公园，草原和灌木交错，游客的车很多', 2, { food: +5, risk: 1.1, set: 'kruger' }],
        ['萨赫勒边缘的一片稀疏草原，村庄和农田离得很近', 2, { food: -5, risk: 1.2, set: 'sahel' }],
      ]},
      { label: '那一年的雨水', options: [
        ['那一年雨季来得准时，草长得很高', 3, { food: +10, set: 'rain_normal' }],
        ['那一年雨季迟迟不来，旱季一直拖到了第二年', 2, { food: -10, health: -5, risk: 1.2, set: 'late_rain' }],
        ['那一年雨下得太多，河床被水冲过，很多草被泥沙埋住', 2, { safety: -5, food: -5, set: 'flood_year' }],
      ]},
    ],
    siblings: 1,
    siblingsLabel: '同一胎',
    intro: '你是一头刚出生的小象，体重约 100 公斤，站起来还没有母亲的肩高。你是{sex}。{出生的季节}，母亲带你走进了{家族群}。',
  },

  stages: [
    { id: 'calf',  name: '幼象（0–1 岁）', from: 0,     unit: 'month' },
    { id: 'young', name: '少年象（1–12 岁）', from: 365,   unit: 'year' },
    { id: 'adult', name: '成年象',       from: 4380,  unit: 'year' },
    { id: 'old',   name: '老年象',       from: 18250, unit: 'year' },
  ],
  maturity: 4380,
  maxAge: 25550,

  survival: [[0,1],[30,0.97],[90,0.93],[180,0.9],[365,0.87],[730,0.85],[1825,0.83],[3650,0.8],[5475,0.77],[7300,0.73],[10950,0.66],[14600,0.56],[18250,0.4],[21900,0.22],[23360,0.1],[24460,0.03],[25000,0.001],[25550,0]],
  survivalNote: '非洲象的年龄结构主要来自长期个体追踪研究（如 Amboseli 研究）。幼象死亡率较高，成年后死亡率很低，偷猎和干旱会改变整条曲线',

  init: { health: 80, food: 65, safety: 60 },
  foodDrain: 4,

  causes: [
    { id: 'lion', escape: true, w: 3, stages: ['calf','young'], short: '被狮子围住',
      text: '一群狮子在夜里围住了你们的队伍。母象把你挡在身后，但你还是被拖进了草丛。' },
    { id: 'crocodile', escape: true, w: 2, stages: ['calf','young'], short: '被鳄鱼拖进水里',
      text: '你去水边喝水，水下的一个影子忽然动了。它咬住你的鼻子，把你拖了下去。' },
    { id: 'drought', escape: false, w: 3, short: '旱季缺水',
      text: '连着两个旱季，水塘干了。你们走了三天，找到的只有一层裂开的泥。' },
    { id: 'poacher', escape: true, w: 2, stages: ['young','adult'], short: '被偷猎者杀死',
      text: '一声枪响从很远的地方传来。你还没来得及转身，就倒在草地上。偷猎者要的是你的象牙。' },
    { id: 'conflict', escape: false, w: 2, stages: ['young','adult'], short: '农田边的毒饵或电网',
      text: '你闻到玉米的味道，走进了农田。第二天，你就倒在了田边。' },
    { id: 'injury', escape: true, w: 1, stages: ['adult'], short: '打斗受伤后感染',
      text: '另一头雄象的獠牙刺进了你的侧腹。伤口里长出了脓，你在水边躺了好几天。' },
    { id: 'starve', escape: false, w: 4, stages: ['old'], short: '牙齿磨平，饿死',
      text: '你最后一副臼齿磨平了，嚼不动草。身体一天天瘦下去，最后连走路都很吃力。',
      fact: '大象一生只换六副臼齿，最后一副磨平后，往往会因为吃不下食物而死亡（Sukumar 2003）' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你慢慢地走到一片树荫下，躺了下来。家族群里的母象围在你身边，很久没有离开。' },
  ],

  events: [
    { stages: ['calf'], w: 3, text: '你第一次站起来，后腿还不会用力。母亲用鼻子把你推上来。' },
    { stages: ['calf'], w: 3, text: '你把鼻子伸进母亲的嘴边，学着吃草。', eff: { food: +10 } },
    { stages: ['calf'], w: 2, text: '一头年长的母象把你护在身边。你第一次感到另一头象的体温。' },
    { stages: ['calf'], w: 1, once: true, text: '你第一次看到水。你把鼻子伸进去，结果喷了自己一身。', eff: { health: +5 } },
    { stages: ['calf'], w: 2, text: '远处的草丛里，一只狮子趴着不动。家族群围成圈，把你护在中间。', eff: { safety: +10 } },
    { stages: ['calf'], w: 2, text: '你摔倒在泥里，爬起来时全身都是泥。', eff: { health: -3 } },
    { stages: ['young'], w: 3, text: '雨季来了，草长得很快。你跟着母亲吃了一整天，肚子圆了起来。',
      eff: { food: +15 }, fact: '成年非洲象每天大约需要 40–80 公斤干物质和 150–200 升水（San Diego Zoo 非洲象资料页）' },
    { stages: ['young'], w: 2, text: '家族群停在一个水塘边，你们一起泡在水里，很久都不愿意起来。', eff: { health: +5, safety: +3 } },
    { stages: ['young'], w: 1, once: true, text: '你第一次听见远处低沉的声音。那是另一群象，它们的声音低到你几乎只能用身体感觉到。' },
    { stages: ['young'], w: 2, text: '干旱的第二年，水塘干了。母亲带着你们往更远的地方走。', eff: { food: -15, safety: -5 } },
    { stages: ['young'], w: 2, need: 'male', text: '你开始和同龄的雄象推来推去。母亲在旁边看着，没有阻止。', eff: { safety: -3 } },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你第一次生下一头小象。它的体重约 100 公斤，站起来的时候摇摇晃晃。',
      eff: { offspring: [1, 1] }, fact: '非洲象的怀孕期约 22 个月，两胎之间通常间隔 3–5 年（San Diego Zoo 非洲象资料页）' },
    { stages: ['adult'], w: 2, text: '家族群里有一头母象倒下了。其他的象停下来，用鼻子轻轻碰它的身体，然后很久没有离开。',
      fact: '象群会在将死或已死的同伴身边停留，并用鼻子触碰它们（Douglas-Hamilton 等 2006）' },
    { stages: ['adult'], w: 2, need: 'male', text: '一头年长的雄象进入了发情期。它的颞腺渗出黑色的液体，你们都躲着它走。', eff: { safety: -5 } },
    { stages: ['adult'], w: 2, text: '一群偷猎者的足迹出现在水边。母象把你们带向更深的灌木林。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, text: '一个农民在田边敲打铁桶，把你们赶了开。', eff: { safety: -5 },
      fact: '在农田周围挂养蜂箱的围栏，被发现可以有效驱赶偷吃庄稼的大象（King 等 2011，African Journal of Ecology）' },
    { stages: ['adult'], w: 1, once: true, need: 'male', text: '你离开了家族群，独自走了三天，然后找到了另一群雄象。' },
    { stages: ['old'], w: 3, text: '你的最后一层牙齿磨到了边缘。你开始在草地上挑软的叶子吃。', eff: { food: -5 } },
    { stages: ['old'], w: 2, text: '雨后的水又漫了上来。你喝了很多，身体里的水分慢慢回来了。', eff: { health: +5 } },
    { stages: ['old'], w: 2, text: '你走路越来越慢，身后跟着的队伍也慢了下来。' },
    { stages: ['calf'], w: 2, act: 'hide', text: '你躲在母象的腿影里，外面有一只鸟飞过，你没有探头。', eff: { safety: +8 } },
    { stages: ['calf'], w: 2, act: 'rest', text: '你被母象用鼻子卷着，贴着她的身体睡着了。', eff: { health: +5 } },
    { stages: ['young','adult','old'], w: 2, act: 'forage', text: '你用象鼻从一棵金合欢树上扯下一根枝条，树皮的苦味让你打了个喷嚏。', eff: { food: +10 } },
    { stages: ['young','adult','old'], w: 2, act: 'forage', text: '你在一片被雨水泡软的草地上找到一堆嫩草，吃得很慢，很满足。', eff: { food: +12 } },
    { stages: ['young','adult'], w: 2, act: 'hide', text: '远处传来汽车的声音。你们停下来，站在灌木林里，一动不动，直到声音消失。', eff: { safety: +8, food: -6 } },
    { stages: ['young','adult','old'], w: 2, act: 'rest', text: '雨后的泥坑边，你和母象并排站着，谁也不急着走。', eff: { health: +4 } },
    { stages: ['young','adult'], w: 2, act: 'explore', text: '你离开家族群走了一天，在一处陌生的草地上遇见了另一群象。它们只看了你一眼，就继续往前走了。', eff: { safety: -3 } },
    { stages: ['young','adult'], w: 2, act: 'explore', text: '你走进一片农田边缘，闻到玉米的甜味。田外的铁丝网锈得厉害，你还是挤了进去。', eff: { food: +8, safety: -8 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '你怀孕的第十一个月，走路越来越慢。母象们开始在你身边停下来，等你一起走。', eff: { health: -3 } },
    { stages: ['calf'], w: 2, need: 'amboseli', text: '研究人员坐在远处的吉普车上，记录着每一头象的名字。他们每天都来，你已经习惯了那些车。', eff: { safety: +3 },
      fact: '安博塞利大象研究项目始于 1972 年，是世界上持续时间最长的野生大象个体研究之一（Cynthia Moss 等，Amboseli Elephant Research Project）' },
    { stages: ['young'], w: 2, need: 'amboseli', act: 'forage', text: '乞力马扎罗山的雪在远处的云里时隐时现。你在草地上低头吃草，一边看着山。', eff: { food: +8 } },
    { stages: ['adult'], w: 1, need: 'amboseli', text: '你的家族在山脚下生活了几十年。你记得每一条饮水的路。', eff: { safety: +3 } },
    { stages: ['calf'], w: 2, need: 'okavango', text: '洪水季节，你们走在齐胸的水里。小象紧贴着母象，被水推着往前走。', eff: { health: -3 } },
    { stages: ['young','adult'], w: 2, need: 'okavango', act: 'forage', text: '水退以后，湿地上长满了嫩草。你低下头，一口一口地吃。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'okavango', act: 'rest', text: '你在泥坑里滚了很久，身上的热量慢慢散掉。', eff: { health: +3 } },
    { stages: ['calf','young'], w: 2, need: 'kruger', text: '一辆越野车停在路边，车里的人举着相机。母象让你走到她的另一侧。', eff: { safety: -3 } },
    { stages: ['young','adult'], w: 2, need: 'kruger', text: '你第一次靠近一排高压电线，闻到一股陌生的金属味。', eff: { safety: -3 } },
    { stages: ['adult'], w: 1, need: 'kruger', act: 'explore', text: '你走过一条又一条被游客踩出来的小路。路旁的树下，立着一块牌子。', eff: { food: +5 } },
    { stages: ['calf'], w: 2, need: 'sahel', text: '村子的方向传来狗叫。你们的家族绕开了一片刚收割过的玉米地，走得很慢。', eff: { safety: -3 } },
    { stages: ['young','adult'], w: 2, need: 'sahel', text: '农田的边界上，有人用火把和鞭炮驱赶你们。你和同伴掉头，走向另一片草地。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, need: 'sahel', act: 'explore', text: '你走进一个小水塘，水很浑，但你渴得顾不上。', eff: { health: +2 } },
    { stages: ['calf'], w: 2, need: 'rain_normal', text: '雨季的雨水很充足。你一边走一边吃，肚子很快就圆了起来。', eff: { food: +10 } },
    { stages: ['young'], w: 2, need: 'rain_normal', act: 'forage', text: '草长得很高，你低下头，一口就能吃到一大把。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'rain_normal', text: '雨季的河床里有了水，你们一群象在水边玩了很久。', eff: { health: +3 } },
    { stages: ['calf'], w: 2, need: 'late_rain', text: '雨迟迟不来。你的母亲每天都在找水，你跟在后面，走得比以前远了很多。', eff: { health: -5 } },
    { stages: ['young','adult'], w: 2, need: 'late_rain', act: 'forage', text: '草被晒得枯黄，你咬下去，嚼起来像干草。', eff: { food: -8 } },
    { stages: ['adult','old'], w: 1, need: 'late_rain', text: '你们在一个快要干透的水坑边，每头象都在排队。', eff: { health: -3 } },
    { stages: ['calf'], w: 2, need: 'flood_year', text: '河水漫上了平原。你的母亲把你托在身边，蹚过一段齐肩深的水。', eff: { safety: -5 } },
    { stages: ['young'], w: 2, need: 'flood_year', act: 'forage', text: '泥沙把草埋住了。你扒开泥沙，一口一口地找那些还没烂掉的根。', eff: { food: -5 } },
    { stages: ['adult'], w: 1, need: 'flood_year', text: '洪水退去以后，河床上到处是新鲜的泥。你在泥里走了很久。' },
    { stages: ['young'], w: 2, need: 'bold', text: '你走在家族群的最前面，第一个把鼻子伸进一片陌生的灌木丛。', eff: { safety: -5, food: +3 } },
    { stages: ['calf','young'], w: 2, need: 'cautious', text: '每次过河之前，你都要先用鼻子试一试水深，确认没问题，才肯往前走。', eff: { safety: +5 } },
    { stages: ['young'], w: 2, need: 'curious', text: '你把一根树枝卷在鼻子上，甩来甩去，一直玩到天黑。' },
    { stages: ['calf'], w: 2, need: 'runt', text: '你比同龄的小象矮一截，跟在家族群的最后面。母亲常常回头，等你赶上来。', eff: { food: -5, health: -3 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '一头雄象来挑战你的位置，你用獠牙顶住了它，它后退了几步。', eff: { safety: +3, health: -3 } },
  ],

  opening: {
    title: '第一次站起来',
    body: '你刚出生，体重约一百公斤，腿软得像湿木头。母象在你身边低低地哼着，家族群的成员围成一圈。过不了多久，群就要继续往前走了。',
    options: [
      { t: '挣扎着站起来，跟上家族', hint: '跟得上群 · 体力消耗大', eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 90,
        result: '你摔了三次，第四次终于站稳。你跟在母象身后，腿抖得厉害，但没有掉队。' },
      { t: '躲在母象腿下，先吃奶', hint: '吃得饱 · 容易掉队', eff: { food: +10 }, risk: 1.15, riskDays: 90,
        result: '你在母象的腿影里吮着奶。等群走远了，你才慌忙站起来。' },
    ],
  },

  actions: {
    forage:  { name: '吃草', desc: '一天里大部分时间都在吃。草、树叶、树皮，什么都吃，要吃掉几十公斤。', stages: ['young','adult','old'], text: ['你卷起一大把草，塞进嘴里，嚼得咔咔地响。', '你用象鼻从树上扯下一根枝条，叶子落了一身。', '母象在前面走，你跟着，一路低头吃。'] },
    hide:    { name: '躲进灌木林', desc: '钻进深一点的灌木林或河谷，远离开阔的草地和水边。吃得少，但不容易被偷猎者发现。', text: ['你躲在母象的腿影里，外面的声音都变远了。', '灌木林里很暗，你们一动不动地站着。', '远处的公路上有车声，你们把身子往树丛里又挤了挤。'] },
    rest:    { name: '在树荫下歇着', desc: '在树荫或泥坑里待着不动，让身体凉下来。', text: ['你和母象并排站在树荫下，两个人的耳朵一起一落。', '你把鼻子卷在一起，慢慢地打了个盹。', '泥坑里的水凉凉的，你把身子埋进去，只露出背。'] },
    explore: { name: '去没去过的草原', desc: '离开家族群熟悉的路线，去新的草场和水源。可能找到更好的食物，也可能撞上别的象群或人。', stages: ['young','adult'], text: ['你走进一片从没到过的草原，草比家附近的高出一截。', '远处的山坡上，另一群象正慢慢往下走。', '你在一处泥坑边停下，闻到了一股陌生的水汽。'] },
    mate:    { name: '怀孕产仔', desc: '母象怀孕约 22 个月，产下一头小象。只有成年母象会走这条路。', stages: ['adult'], need: 'female', done: '你又产下了 {n} 头小象。', text: ['你怀孕的日子里，走路越来越慢，身后的队伍也跟着慢下来。', '母象们在你身边停下，等你一起走。', '夜里，你在草地上躺下，腹部一起一伏。'] },
  },

  decisions: [
    {
      id: 'water_trek', at: 1460,
      title: '干涸的水塘',
      body: '水塘只剩最后一小块泥。远处有另一个水源，但路上几乎没有草，要走很久。母亲站在泥里，还没有动身。你贴在它身边，等着看它往哪边走。',
      options: [
        { t: '紧紧贴着母亲，跟它走向远处的水源', hint: '饱食↑ 路上风险↑', eff: { food: +15 }, risk: 1.3, riskDays: 60,
          result: '你紧紧跟在母亲身后走了五天。路上有几头小象倒下，但最后你们找到了一片新的水。' },
        { t: '留在水塘边，和其他象一起等雨', hint: '安全 · 饥渴↑', eff: { food: -10 }, risk: 1.8, riskDays: 120,
          result: '你们在泥里挖了一个小坑，等了很久。雨终于来了，但你已经瘦了很多。' },
      ],
    },
    {
      id: 'leave_herd', at: 4745, need: 'male',
      title: '离开家族群',
      body: '你的身体长大了。母亲的群里，你的位置越来越不合适。远处有一群雄象，它们在不远的地方走动。',
      fact: '雄象通常在十多岁时离开出生的家族群（Lee 等 2022，Behavioral Ecology）',
      options: [
        { t: '离开，去找雄象群', hint: '独立 · 风险↑', eff: { safety: -10 }, risk: 1.4, riskDays: 365,
          result: '你跟着雄象群走了。从此，你不再需要每天等母亲的脚步。' },
        { t: '留下来', hint: '安全 · 位置越来越尴尬', eff: { safety: +10 }, risk: 0.9, riskDays: 365,
          result: '你留在了家族群里。母亲仍然会用鼻子碰碰你的背。' },
      ],
    },
    {
      id: 'farm', at: 9125,
      title: '玉米田的味道',
      body: '风里飘来玉米成熟的甜味。田边的围栏看起来很旧，但它还在那里。',
      options: [
        { t: '进去吃', hint: '饱食↑↑ 被人发现的风险↑', eff: { food: +30 }, kill: 0.15, cause: 'conflict',
          result: '你吃得很饱。有人从很远的地方吹起了哨子，然后有一个人冲了过来。' },
        { t: '绕过去', hint: '安全 · 饿一点', eff: { food: -5 },
          result: '你绕过了那片田。远处，农民还在敲打铁桶。' },
      ],
    },
    {
      id: 'bull_stand', at: 10950, need: 'male',
      title: '和另一头雄象对峙',
      body: '一头年长的雄象在前面挡住了路。它的耳朵张得很大，正盯着你。',
      options: [
        { t: '冲上去', hint: '赢得位置 · 受伤风险↑', eff: { safety: +10 }, kill: 0.1, cause: 'injury',
          result: '你们用额头和獠牙顶在一起。最后它退开了，你的侧腹却被刺开一道口子。' },
        { t: '让开', hint: '安全 · 失去位置', eff: { safety: -5 },
          result: '你向一边让开，等它走远了，才重新找回你的路线。' },
      ],
    },
    {
      id: 'poach_warn', at: 14600,
      title: '一声远处的枪响',
      body: '一声枪响从很远的山坡上传来。母象立刻把耳朵张开，朝声音的反方向看去。',
      options: [
        { t: '立刻带家族群离开', hint: '安全 · 饿一点', eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 30,
          result: '你们一起朝北边走，没有回头。几天后，你们在另一片草原上找到了水。' },
        { t: '回头确认声音的来源', hint: '好奇 · 风险↑↑', eff: {}, kill: 0.2, cause: 'poacher',
          result: '你转身朝着枪声的方向走。那里的草被踩倒了一片，你没有再回去。' },
      ],
    },
    {
      id: 'calf_mud', at: 6200,
      title: '一头小象陷进泥坑',
      body: '家族群里一头小象陷在泥坑中，四条腿拼命蹬，身子却越陷越深。母象们停下来，朝这边看了一眼。你离它最近。',
      options: [
        { t: '下去帮忙推', hint: '救下它 · 体力消耗大', eff: { health: -5, safety: -3 }, risk: 1.2, riskDays: 10,
          result: '你用额头顶着它的身子，泥很滑，你的膝盖陷进淤泥里。它终于站了起来，甩着鼻子跑回了群里。' },
        { t: '朝母象们发出低沉的声音', hint: '叫来帮手 · 安全', eff: { safety: +5 },
          result: '你发出低沉的声音，几头母象围过来，用鼻子和身子把小象一点点托了出来。' },
      ],
    },
    {
      id: 'mother_fall', at: 7300,
      title: '母象倒下了',
      body: '家族群里年长的母象在一片树荫下倒了下去。它的呼吸很慢，眼睛半闭着。其他的象停下来，用鼻子轻轻碰它的身体。',
      options: [
        { t: '留下来，守在它身边', hint: '陪伴 · 落在后面', eff: { food: -5, safety: -5 }, risk: 1.2, riskDays: 5,
          result: '你们在它身边站了一整夜。第二天早上，它已经不动了。群里的象一个接一个地走过它身边，用鼻子碰一碰。' },
        { t: '跟着群继续走', hint: '安全 · 留下遗憾', eff: { safety: +5 },
          result: '你跟着群往前走。回头时，那片树荫下只剩下一个灰白的轮廓。' },
      ],
    },
    {
      id: 'lead_herd', at: 16000,
      title: '领路的位置',
      body: '年长的母象已经很老了，她走得越来越慢。群里的其他母象都在看你，好像在等你接过路线。',
      options: [
        { t: '接过领路的位置', hint: '安全↑ · 要记住每一个水源', eff: { safety: +8, food: -5 }, risk: 1.2, riskDays: 365,
          result: '你走在最前面，记住了每一个水塘的位置，也记住了去年干旱时那条最远的路。' },
        { t: '继续跟在后面', hint: '省力 · 路线不由你定', eff: { food: +5 },
          result: '你跟在别的象身后。路线是别人定的，你只需要跟着走。' },
      ],
    },
    {
      id: 'molars', at: 19000,
      title: '最后一排牙齿',
      body: '你最后一排臼齿磨到了边缘。硬草嚼不动了，而软的叶子和带盐的泥都在远处。',
      options: [
        { t: '去找软草和带盐的泥', hint: '饱食↑ 路上风险↑', eff: { food: +15 }, risk: 1.2, riskDays: 365,
          result: '你走了很远，在一片有盐碱的泥地里吃到了软叶。你的肚子慢慢暖了起来。' },
        { t: '就着硬草慢慢嚼', hint: '饥饿↑↑ 生死一线', eff: { food: -15 }, risk: 1.5, riskDays: 365, kill: 0.05, cause: 'starve',
          result: '你一口一口地嚼着硬草，嘴里被磨出了血，但你还是没有停下。' },
      ],
    },
    {
      id: 'drought_old', at: 21500,
      title: '第三个旱季',
      body: '两个旱季之后，又是一个没有雨的雨季。水塘都裂开了，远处的河床里还有一小摊水，但要走过一片没有草的地方。',
      options: [
        { t: '跟着群去远处的河床', hint: '有水 · 路上很危险', eff: { food: +10 }, risk: 1.4, riskDays: 60, kill: 0.05, cause: 'drought',
          result: '你们走了五天。到达河床的时候，水只有你的膝盖深。你喝了很久，直到肚子胀了起来。' },
        { t: '留在原地，挖泥找水', hint: '安全 · 水少', eff: { food: -10, health: -5 }, risk: 1.2, riskDays: 60,
          result: '你在泥里挖了一个坑，等了三天，坑底才渗出一点点水。' },
      ],
    },
    {
      id: 'lone_walk', at: 23500,
      title: '群里不再等你',
      body: '你年纪大了，走得慢，群里的年轻母象已经不再等你。远处的一片水塘边，有几头老象正独自待着。',
      options: [
        { t: '留在群里', hint: '安全 · 跟不上', eff: { safety: +10 },
          result: '你还是慢慢地跟在群后面。有一天，群停下来的时候，你还在很远的地方。' },
        { t: '独自走向远处的水边', hint: '有水 · 离开保护', eff: { food: +10, safety: -10 }, risk: 1.3, riskDays: 120,
          result: '你走了很久，一直走到水边。那里有几头老象，它们只是朝你看了一眼。' },
      ],
    },
    {
      id: 'sahel_farm', at: 900, need: 'sahel',
      title: '农田的边界',
      body: '前面是一片刚种下玉米的农田。田里有一股甜甜的味道，远处的村子传来狗叫。',
      options: [
        { t: '走进去，吃几口玉米', hint: '饱食↑↑ 冲突风险↑', eff: { food: +15 }, kill: 0.1, cause: 'conflict',
          result: '你走进农田，吃了好几口玉米。远处的人喊了起来。' },
        { t: '绕开农田，去远处的草原', hint: '安全 · 慢', eff: { food: -5, safety: +3 }, risk: 0.9, riskDays: 10,
          result: '你绕过农田，穿过一片灌木林，走到了另一片草原。' },
      ],
    },
    {
      id: 'late_rain_water', at: 600, need: 'late_rain',
      title: '水塘快干了',
      body: '水塘只剩下中间的一个小坑，周围的泥已经裂开。家族群要决定：去远处的河谷，还是等雨。',
      options: [
        { t: '去远处的河谷找水', hint: '有水 · 路远', eff: { food: -3, health: +3 }, risk: 1.3, riskDays: 10,
          result: '你们走了三天，终于在河谷里找到了水。路上有几头小象走不动了。' },
        { t: '留在水塘边等雨', hint: '近 · 缺水', eff: { health: -5 }, risk: 1.5, riskDays: 10,
          result: '你们在水塘边等着，雨一直没有来。水越来越少。' },
      ],
    },
    {
      id: 'flood_crossing', at: 500, need: 'flood_year',
      title: '漫过的河床',
      body: '河水还没有退。草都在河对岸，你要过河才能吃到。',
      options: [
        { t: '顺着河岸绕远路', hint: '安全 · 慢', eff: { safety: +5, food: -3 }, risk: 0.9, riskDays: 5,
          result: '你们沿着河岸走了很远，才找到一处浅的地方过了河。' },
        { t: '直接蹚过去', hint: '快 · 风险↑↑', eff: { safety: -5 }, kill: 0.05, cause: 'crocodile',
          result: '你们蹚进河水，水流很急。一条鳄鱼从水下浮起来，你们绕开它，爬上了对岸。' },
      ],
    },

  ],

  idle: [
    '母象轻轻地把鼻子放在你的背上。',
    '地面在你的脚下很轻地震动，远处有另一群象在走。',
    '你把一片干草卷进鼻子，放进嘴里慢慢嚼。',
    '太阳晒得背上发烫，你把耳朵张开扇风。',
    '家族群走得很慢，没有人着急。',
    '夜里很安静，只有草在风里沙沙地响。',
    '你用鼻子探了探前面的泥，确认那里没有坑。',
    '一只鸟落在你的背上，很快又飞走了。',
  ],

  epitaph: '象群会记住水源、路线和死去的同伴。你走过的那些路，会有人一直记着。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'panda',
  name: '大熊猫',
  en: 'Giant panda',
  sci: 'Ailuropoda melanoleuca',
  emoji: '🐼',
  scene: 'mountain',
  kind: 'wild',
  tagline: '一种以竹子为主食的食肉目动物，每天要花十几个小时吃饭',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生的地方', options: [
        ['你出生在四川岷山的一片箭竹林里，母亲在一棵倒木下面产下了你', 7, { set: 'wild', food: +5 }],
        ['你出生在陕西秦岭的一条山沟里，竹林深处', 3, { set: 'wild', food: +5, risk: 1.1 }],
        ['你出生在成都大熊猫繁育研究基地的产房里', 3, { set: 'captive', food: +15, safety: +10 }],
        ['你出生在一座动物园的保温箱里', 1, { set: 'captive', food: +10 }],
      ]},
      { label: '排行', options: [
        ['单胎，母亲只有你一只。', 8, {}],
        ['双胞胎中的一只，另一只比你先出来', 2, { set: 'twin', food: -5 }],
      ]},
      { label: '山脉', options: [
        ['秦岭南坡的竹林，山谷深而潮湿，雾气常常不散', 2, { set: 'qinling' }],
        ['岷山的高山竹林，冬天的雪很深', 3, { food: +5, set: 'minshan' }],
        ['邛崃山的竹林，离成都的大熊猫基地不远', 2, { set: 'qionglai' }],
        ['凉山的竹林，山坡很陡，山下有一条公路', 1, { risk: 1.2, set: 'liangshan' }],
      ]},
      { label: '竹子的种类', options: [
        ['以箭竹为主的竹林，几十年才集体开一次花', 3, { set: 'arrow' }],
        ['以巴山木竹为主的竹林，春天的竹笋很嫩', 2, { food: +5, set: 'bashania' }],
        ['竹子种类混杂的林子，竹笋多，但老竹子的叶子很硬', 2, { food: -5, set: 'mixed' }],
      ]},
    ],
    siblings: 1,
    siblingsLabel: '同一胎',
    intro: '{出生的地方}。你刚出生时体重约 100 克，大约只有母亲的九百分之一。你是{sex}，{排行}。你还没有睁眼，身上只有一层稀疏的白毛。',
  },

  stages: [
    { id: 'cub',   name: '幼崽（0–1 岁）', from: 0,     unit: 'week' },
    { id: 'young', name: '少年',         from: 365,   unit: 'year' },
    { id: 'adult', name: '成年',         from: 1825,  unit: 'year' },
    { id: 'old',   name: '老年',         from: 7300,  unit: 'year' },
  ],
  maturity: 1460,
  maxAge: 14600,

  survival: [[0,1],[7,0.9],[30,0.8],[90,0.76],[180,0.72],[365,0.68],[730,0.62],[1825,0.55],[3650,0.48],[5475,0.42],[7300,0.34],[9125,0.25],[10950,0.14],[12775,0.06],[13870,0.012],[14235,0.003],[14600,0]],
  survivalNote: '野生大熊猫的寿命来自长期监测和圈养记录的粗估；圈养个体的平均寿命通常更长。此曲线为混合人群的估计',

  init: { health: 70, food: 60, safety: 55 },
  foodDrain: 3,

  causes: [
    { id: 'bamboo', escape: false, w: 3, stages: ['young','adult','old'], need: 'wild', short: '箭竹开花枯死，没有东西可吃',
      text: '这片竹林在一个春天开了花。开花之后，竹子一片一片地干枯了。你走遍了山谷，找不到一根还绿着的竹子。' },
    { id: 'cub_death', escape: false, w: 3, stages: ['cub'], short: '母亲没能养活',
      text: '你的叫声越来越弱，母亲的奶水不够。你在草窝里慢慢地停止了呼吸。' },
    { id: 'predator', escape: true, w: 1, stages: ['cub','young'], need: 'wild', short: '被豹子叼走',
      text: '一只豹子从岩石后面窜出来。你的母亲冲过去，但还是晚了一步。' },
    { id: 'disease', escape: false, w: 2, stages: ['cub','young','adult'], short: '肠道寄生虫或肺炎',
      text: '你的肚子鼓起来，粪便里有血。你躲在角落里，不想吃东西，也不想动。' },
    { id: 'habitat', escape: false, w: 1, stages: ['adult','old'], need: 'wild', short: '公路把栖息地切成两半',
      text: '你想回到那片竹林，但一条新修的公路把山谷切成了两段。你走了三天，也没找到能穿过去的地方。' },
    { id: 'poach', escape: true, w: 1, stages: ['adult'], need: 'wild', short: '偷猎者的铁夹',
      text: '一个铁夹子夹住了你的前腿。你挣扎了很久，最后再也走不动了。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你在一丛竹子下面躺了很久，呼吸越来越慢。竹叶落在你的身上，没有人来惊动你。' },
  ],

  events: [
    { stages: ['cub'], w: 3, text: '你被母亲用身体盖住。你只有贴在它肚子上的地方是暖的。',
      eff: { health: +3 }, fact: '新生大熊猫幼崽体重约 100 克，约为母亲体重的九百分之一（National Geographic 2020 大熊猫幼崽报道）' },
    { stages: ['cub'], w: 2, text: '你醒来时，母亲翻了个身，压住了你。你发出尖细的叫声，它又把你拉回怀里。' },
    { stages: ['cub'], w: 1, once: true, text: '你睁开了眼。黑白的花纹开始在身上显现出来。' },
    { stages: ['cub'], w: 3, text: '母亲吃完竹子，嘴边留下了几片叶子。你爬上去，把它们舔干净。', eff: { food: +5 } },
    { stages: ['cub'], w: 2, text: '你第一次走出洞穴，摔进了一丛竹子里。' },
    { stages: ['cub'], w: 2, text: '你第一次啃竹子，嚼了很久，最后又吐了出来。' },
    { stages: ['cub'], w: 2, need: 'wild', text: '母亲带你去了一片新的竹林。你们在里面待了三天。', eff: { food: +10 } },
    { stages: ['cub'], w: 2, need: 'twin', text: '另一只幼崽在你旁边哭。母亲只能照顾一只，它被推到了一边。', eff: { safety: -5 } },
    { stages: ['young'], w: 2, text: '你爬上一棵树，树枝断了，你摔下来，一声都没叫。', eff: { health: -3 } },
    { stages: ['young'], w: 3, text: '你每天要吃十几个小时的竹子。你一边吃一边慢慢挪动，几乎一步都不停。', eff: { food: +10 },
      fact: '大熊猫每天花 10–14 小时进食，一天要吃掉十几到几十公斤竹子（Schaller 等 1985）' },
    { stages: ['young'], w: 1, once: true, text: '你的前爪上有一根像拇指的骨头，它其实是一块增大的籽骨。',
      fact: 'Gould 1980 的《The Panda\'s Thumb》（书）指出，大熊猫的“拇指”是增大的桡侧籽骨形成的假拇指' },
    { stages: ['young'], w: 2, text: '你在一棵树下翻了个身，压弯了一丛竹子，弹起来的叶子打在你脸上。' },
    { stages: ['adult'], w: 2, text: '你在一棵树的树干上留下了自己的气味。那是给别的熊猫看的。' },
    { stages: ['adult'], w: 2, need: 'female', text: '春天到了，你的身体有了变化。发情的时间很短，只有几天。' },
    { stages: ['adult'], w: 2, need: 'male', text: '你在山脊上听见另一只雄熊猫的叫声。你们隔着两个山谷对峙，谁也没有先过去。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, once: true, need: 'captive', text: '你在繁育基地产下一只幼崽。饲养员用秤给它称重，然后把它放回你的怀里。' },
    { stages: ['adult'], w: 3, text: '竹子的枝叶在春天里冒出了新芽。你吃得很饱。', eff: { food: +15 } },
    { stages: ['adult'], w: 3, need: 'wild', text: '一场雪盖住了山谷。你在雪里找到一丛竹子的根，慢慢地嚼。', eff: { food: +5, health: -3 } },
    { stages: ['old'], w: 2, text: '你的牙齿磨平了一点，竹子的纤维变得难嚼。', eff: { health: -4 } },
    { stages: ['old'], w: 2, text: '你在一块被阳光晒热的岩石上躺了一下午。', eff: { health: +3 } },
    { stages: ['old'], w: 2, need: 'captive', text: '饲养员每天把竹子切成段，放在你面前。你慢慢地吃，慢慢地睡。', eff: { health: +2 } },
    { stages: ['young','adult','old'], w: 3, act: 'forage', text: '山坡上的箭竹刚长出新叶，你一口气啃掉了半丛。', eff: { food: +12 } },
    { stages: ['young','adult','old'], w: 2, act: 'forage', text: '你在一片竹林边缘啃着竹子，身上很快沾满了竹叶碎屑。', eff: { food: +8 } },
    { stages: ['adult'], w: 1, act: 'forage', need: 'wild', text: '春天的山坡上，你找到几根嫩竹笋，咬下去满口汁水。', eff: { food: +15 } },
    { stages: ['cub','young','adult','old'], w: 2, act: 'hide', text: '一阵脚步声从山脊上传下来。你缩进箭竹丛，一动不动，直到它消失在雾里。', eff: { safety: +8, food: -5 } },
    { stages: ['young','adult'], w: 1, act: 'hide', need: 'wild', text: '你在岩洞里待了一下午。外面的雷声一声接一声，你没有出去。', eff: { food: -5, safety: +5 } },
    { stages: ['cub','young','adult','old'], w: 2, act: 'rest', text: '一场细雨过后，你在岩石上趴了一下午，身上的毛慢慢晾干。', eff: { health: +4 } },
    { stages: ['young','adult'], w: 2, act: 'explore', text: '你翻过一道山脊，在另一个山谷里找到一大片从没开过花的竹林。', eff: { food: +12 } },
    { stages: ['young','adult'], w: 2, act: 'explore', need: 'wild', text: '你在山间小路上走了很远，前爪踩到一根生锈的铁丝，血渗了出来。', eff: { health: -5, safety: -5 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '春天到了，你闻到一股陌生雄性的气味。你在岩洞口站了很久，才决定跟着它走。', eff: { food: -5 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '你在一个隐蔽的岩洞里待了三天。之后的一个冬天，你的肚子里有了动静。', eff: { offspring: [1, 1] } },
    { stages: ['cub'], w: 2, need: 'qinling', text: '秦岭的山谷很潮，雾气一直没有散。母亲的毛里有一股湿润的泥土味，你偎在她的怀里。', eff: { health: +2 } },
    { stages: ['young'], w: 2, act: 'explore', need: 'qinling', text: '你沿着山沟往上走。溪水很清，石头上长着厚厚的青苔。', eff: { food: +3 } },
    { stages: ['adult'], w: 1, need: 'qinling', text: '山沟里有几户农家，夜里的狗叫声从山下传上来。你绕着它们走，没有靠近。', eff: { safety: -3 } },
    { stages: ['cub'], w: 2, need: 'minshan', text: '岷山的冬天很长，雪下了几个月。母亲在雪下面挖出一个洞，你们待在里面，很久不出来。', eff: { health: -2 } },
    { stages: ['young'], w: 2, act: 'rest', need: 'minshan', text: '雪停的时候，阳光照在雪地上很亮。你在岩石下面晒了一个下午，身上的毛又暖了起来。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, need: 'minshan', text: '山脊上的风很冷。你站在那里，看着远处的雪线，那是你从没去过的地方。' },
    { stages: ['young'], w: 2, need: 'qionglai', text: '你在邛崃山的一条小路上走，一队研究员从后面的山坡经过。他们没有走近，只在本子上记了一笔。' },
    { stages: ['adult'], w: 2, act: 'forage', need: 'qionglai', text: '竹林里有一大片新长出来的竹子，嫩得发亮。你吃了很久，直到饿意完全消失。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'qionglai', text: '一台红外相机挂在竹林的边上，每天夜里都会亮一下。你习惯了它，也记住了它的位置。' },
    { stages: ['young', 'adult'], w: 2, need: 'liangshan', text: '你在山坡的一段公路边停下来。卡车一辆接一辆地开过，卷起的灰尘落在你的毛上。', eff: { safety: -4 } },
    { stages: ['adult'], w: 2, act: 'explore', need: 'liangshan', text: '你沿着山坡往下找竹子，脚下一滑，滚下了一段路。你站起来，身上沾满了土。', eff: { health: -4 } },
    { stages: ['adult'], w: 1, need: 'liangshan', text: '你在山坡下找到一小片竹林，竹子又细又密。那里有别的熊猫留下的气味。', eff: { food: +5 } },
    { stages: ['young'], w: 2, need: 'arrow', text: '你在箭竹林里走了很久。竹子高，竹叶密，走起来很慢，但吃起来很方便。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'arrow', text: '箭竹的竹笋在春天很嫩。你一只爪子按住竹竿，一只嘴在竹叶间咬。', eff: { food: +12 } },
    { stages: ['adult', 'old'], w: 1, need: 'arrow', text: '你在一片箭竹林里看见一些竹子开了花，叶子是淡黄色的。你绕开了那片林子，去找别的竹子。', eff: { food: -5 } },
    { stages: ['young'], w: 2, need: 'bashania', text: '春天，竹笋从地里一根根冒出来。你挑最嫩的那一根，咬下去满口都是汁水。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'bashania', text: '你在一片竹林里待了整整一个下午，把能够得到的竹子都吃了一遍。', eff: { food: +10 } },
    { stages: ['adult'], w: 1, need: 'bashania', text: '竹林很密，你在里面迷了路。走出来的时候，身上沾满了竹叶的碎屑。' },
    { stages: ['young', 'adult'], w: 2, need: 'mixed', text: '竹林里夹杂着几棵大树。秋天的时候，你在落叶之间找到一些掉下来的果子。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'mixed', text: '夏天的竹林里竹笋很多，但老竹子的叶子很硬。你吃得慢，嘴边被割出了一道口子。', eff: { health: -3, food: +5 } },
    { stages: ['adult'], w: 1, need: 'mixed', text: '冬天的竹林里竹笋少得几乎找不到。你只能在树皮和枯草之间翻找。', eff: { food: -10 } },
    { stages: ['cub'], w: 2, need: 'bold', text: '你第一次走出洞口，就往一个陌生的树洞里钻。母亲在后面低低地叫。', eff: { safety: -2 } },
    { stages: ['cub', 'young'], w: 2, need: 'cautious', text: '你在洞口停了很久，等风把所有的声音都吹过去，才敢走出来。', eff: { safety: +5 } },
    { stages: ['young'], w: 1, act: 'explore', need: 'curious', text: '你碰到一块从没见过的石头，在上面闻了很久，直到一只鸟飞过才回过神。' },
    { stages: ['cub'], w: 1, need: 'runt', text: '你是这一胎里最轻的一只。母亲抱着你的时候，你总是被压在最下面，很难喝够奶。', eff: { health: -5 } },
    { stages: ['young', 'adult'], w: 1, need: 'robust', text: '你的爪子比同龄的熊猫粗。你在竹林里推开了一棵横倒的竹子，把它搬到了一边。', eff: { food: +5 } },
  ],

  opening: {
    title: '母亲怎么抱你',
    body: '你又小又轻，眼睛还闭着，身上只有稀稀的白毛，连翻身都做不到。母亲在窝里把你搂在胸前，她的身体是你唯一的热源。',
    options: [
      { t: '母亲一直抱着你，几乎不离开窝', hint: '保暖 · 母亲自己饿着', eff: { health: +5, food: -5 }, risk: 0.85, riskDays: 30,
        result: '母亲把你紧紧搂在怀里，很久都没有动。她的肚子在叫，但你很暖和。' },
      { t: '母亲出去吃竹子，把你留在窝里', hint: '母亲有奶 · 你会冷', eff: { food: +10, health: -5 }, risk: 1.25, riskDays: 30,
        result: '母亲每次出去都很久。窝里冷下来的时候，你只能用细细的叫声把她召回来。' },
    ],
  },

  actions: {
    forage:  { name: '吃竹子', desc: '一天花十几个小时待在竹丛里，一片一片地啃竹叶，偶尔也啃竹笋。', stages: ['young','adult','old'], text: ['你蹲坐着，抱起一丛箭竹，一片一片地撕下叶子。', '竹节被你啃得只剩下细细的竹茎，碎竹片落了一地。', '你吃得很慢，嘴边沾满了绿色的汁水。'] },
    hide:    { name: '躲进竹丛深处', desc: '钻进最密的箭竹丛或岩洞，不出声，也不走动。吃得少，但很难被找到。', text: ['你钻进一丛密密的箭竹里，外面的声音都变得很远。', '竹叶擦着你的身子，沙沙地响。', '你趴在岩洞口，只露出一双眼睛。'] },
    rest:    { name: '在阳光下打盹', desc: '在石头或树根旁躺下，晒太阳，或者翻个身睡一会儿。', text: ['你躺在一块晒热的石头上，肚皮朝天，睡得很沉。', '你翻了个身，压弯了一丛竹子，它弹起来打在你脸上。', '山谷里的风很凉，你把头埋进前爪里。'] },
    explore: { name: '翻山越岭', desc: '离开熟悉的山谷，去别的山脊和竹林。路远，遇到的事也多。', stages: ['young','adult'], text: ['你翻过一道山脊，脚下的石头滚了一路。', '山谷的另一边，一条溪水在雾里闪着光。', '你在一片陌生的竹林里停下，闻了闻，又走开了。'] },
    mate:    { name: '春天找配偶', desc: '春天的几天里，雌熊猫会发情。之后的几个月，她要一个人照顾幼崽。', stages: ['adult'], need: 'female', done: '春天过去，你怀上了 {n} 只幼崽。', text: ['春天的雾很浓，你在岩洞里待了一整夜。', '远处传来一声陌生的叫声，你停下来听了很久。', '你在一棵树下留下记号，让别的熊猫知道这里有你。'] },
  },

  decisions: [
    {
      id: 'bamboo_flower', at: 1460, need: 'wild',
      title: '竹子开花了',
      body: '山谷的竹子开了花。开过花的竹子会慢慢枯死，而开花前的竹叶会变得苦涩。你的身体需要另一片竹林。',
      options: [
        { t: '去另一片没开花的竹林', hint: '饱食↑ 路上风险↑', eff: { food: +5 }, risk: 1.5, riskDays: 60,
          result: '你走了三天，穿过了两道山脊。新的竹林里，竹叶还是绿的。' },
        { t: '留在原地，等新竹子', hint: '饥饿↑↑ 风险↑↑', eff: { food: -20 }, risk: 2.0, riskDays: 90,
          result: '你在原地等了很久。新竹子还没有长出来，你的身体一天比一天轻。' },
      ],
    },
    {
      id: 'captive_gate', at: 1095, need: 'captive',
      title: '一扇没有关的门',
      body: '饲养员把你带到一片半野生的林地。门没有关。外面的竹子很多，但也没有人看着你。',
      options: [
        { t: '走出去', hint: '自由 · 风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 365,
          result: '你第一次走进了没有围栏的竹林。风从四面吹来，每一片叶子都不一样。' },
        { t: '回到笼舍', hint: '安全 · 熟悉', eff: { food: +5, safety: +10 },
          result: '你走回了熟悉的笼舍。饲养员把竹子放在你面前，你低下头，开始吃。' },
      ],
    },
    {
      id: 'twin_nest', at: 30, need: 'twin',
      title: '两只幼崽',
      body: '母亲的怀里只能抱住一只。另一只在草地上发出尖细的叫声，身体越来越冷。',
      fact: '野外大熊猫双胞胎通常只能养活一只，母亲会照顾它认为更强的那一只（Schaller 等 1985）',
      options: [
        { t: '把身体挤进母亲怀里', hint: '安全 · 另一只可能会死', eff: { food: +10 }, risk: 1.2, riskDays: 30, kill: 0.2, cause: 'cub_death',
          result: '你挤进了母亲的怀里。另一只的叫声越来越弱，然后就没有了。' },
        { t: '安静地待在原地', hint: '风险↑↑', eff: { health: -5 }, risk: 1.8, riskDays: 30,
          result: '你安静地待着，身上一直很冷。母亲的呼吸慢慢地靠近了你。' },
      ],
    },
    {
      id: 'mate', at: 2555, need: 'male',
      title: '山下的叫声',
      body: '山下传来一个陌生的叫声，声音很高，带着颤抖。那是一只雌熊猫在找你。',
      options: [
        { t: '下山去找她', hint: '繁殖机会 · 路上风险↑', eff: { food: -5 }, kill: 0.1, cause: 'poach',
          result: '你翻过一道山脊，找到了她。那一季，你们一起待在一片竹林里。' },
        { t: '留在竹林里', hint: '安全 · 失去机会', eff: { food: +5 },
          result: '你留在竹林里，叫声慢慢消失在风里。' },
      ],
    },
    {
      id: 'old_winter', need: 'wild', at: 7300,
      title: '一场冬天的雪',
      body: '这场雪下了两个月。竹子被埋在下面，只有几根顶着雪露在外面。你的老窝在山脊的背风面，但食物越来越少。',
      options: [
        { t: '沿着旧路去山下的竹林', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.5, riskDays: 60,
          result: '你在雪里走了很久，终于找到一片没被压垮的竹林。' },
        { t: '留在老窝里', hint: '安全 · 饥饿↑', eff: { food: -15, health: -5 }, risk: 1.2, riskDays: 60,
          result: '你在窝里待了一整个冬天。雪停的时候，你已经很瘦了。' },
      ],
    },
    {
      id: 'cub_follow', at: 150, need: 'wild',
      title: '母亲往山脊上走了',
      body: '母亲走向山脊，身影在竹林里时隐时现。你的腿还不太稳，洞口外面的风很冷。',
      options: [
        { t: '跟着母亲爬上山脊', hint: '吃得饱 · 路上有豹子', eff: { food: +5 }, risk: 1.3, riskDays: 30, kill: 0.04, cause: 'predator',
          result: '你摔跌着追上了母亲。山脊的风吹得很冷，你们在一丛竹子下面挤在一起。' },
        { t: '留在洞口等母亲回来', hint: '安全 · 饿', eff: { food: -10, safety: +5 },
          result: '你在洞口等了一下午。母亲终于回来，嘴边沾着竹叶，身上一片草屑。' },
      ],
    },
    {
      id: 'territory', at: 4500, need: 'wild',
      title: '竹林的边界',
      body: '另一只雄熊猫正沿着山脊往你的竹林走。它的叫声低沉，在树干上留下一道道抓痕。',
      options: [
        { t: '守住这片竹林', hint: '饱食↑ · 受伤风险↑', eff: { food: +10, safety: -5 }, risk: 1.4, riskDays: 60,
          result: '你在边界上来回走了三天。另一只熊猫终于掉头走了，只在石头上留下一道抓痕。' },
        { t: '让出竹林，往山脊上去', hint: '安全 · 竹子远', eff: { safety: +5, food: -5 },
          result: '你向山脊上走去。那里的竹子很高，但离你熟悉的岩洞很远。' },
      ],
    },
    {
      id: 'old_habitat', at: 11000, need: 'wild',
      title: '老了，去山下的竹林',
      body: '牙齿磨钝了，你嚼竹子越来越费力。山坡下有一片新长出来的嫩竹林，但中间隔着一条新修的公路。',
      options: [
        { t: '穿过公路去山下', hint: '饱食↑ · 车辆风险', eff: { food: +10 }, risk: 1.5, riskDays: 60, kill: 0.08, cause: 'habitat',
          result: '你趁着没有车的时候穿过了路面。那一片竹子很嫩，你吃了很久。' },
        { t: '留在山上，吃嫩竹笋', hint: '安全 · 食物少', eff: { food: -5, health: -3 }, risk: 1.0, riskDays: 60,
          result: '你在山上找到一些竹笋，又硬又苦。你慢慢嚼着，天一天地暗下来。' },
      ],
    },
    {
      id: 'qinling_village', at: 3600, need: 'qinling',
      title: '山沟里的农家',
      body: '山沟里有一户人家，门口挂着晒干的玉米。夜里狗在院子里叫，你闻到了玉米的味道。你可以下山去吃，也可以留在竹林里。',
      options: [
        { t: '下山去玉米地边缘吃一顿', hint: '食物↑↑ · 被狗咬',
          eff: { food: +20, safety: -10 }, risk: 1.3, riskDays: 30,
          result: '你在玉米地边上吃了一顿。狗冲过来咬了你的后腿，你跑回竹林时，身上多了几道血印。' },
        { t: '留在竹林里，吃剩下的竹子', hint: '安全 · 食物少',
          eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 30,
          result: '你在竹林里找到的竹子又细又硬，吃完一片，又去找下一片。' },
      ],
    },
    {
      id: 'arrow_flower', at: 5000, need: 'arrow',
      title: '箭竹开花',
      body: '山谷里的一些箭竹开始开花，竹叶变黄，竹子一片一片地干枯。你的竹林还没有开花，但邻近的山谷已经开始枯了。',
      options: [
        { t: '去开花的竹林边缘找还没枯的竹子', hint: '食物↑ · 风险↑',
          eff: { food: +5, health: -3 }, risk: 1.2, riskDays: 60,
          result: '你在开花竹林的边缘找到了一些还绿着的竹子。它们又老又苦，你咬了很久。' },
        { t: '留在原来的竹林，等它慢慢变少', hint: '安全 · 饥饿↑',
          eff: { food: -10 }, risk: 0.95, riskDays: 60,
          result: '你每天吃得越来越少。竹子的叶子在风里一片片地落下来，你看着它们，一天又一天。' },
      ],
    },
  ],

  idle: [
    '竹子的清香飘进来，你闻了闻，又把头放下。',
    '风从远处吹过来，树叶沙沙地响。',
    '远处的溪水声一直没有停。',
    '你打了个哈欠，身子慢慢蜷了起来。',
    '一阵细雨落下来，叶子上的水珠滚来滚去。',
    '你翻了个身，身下发出轻轻的响声。',
    '远处有人走过的脚步声，很快又没了。',
    '天色暗了，山里的鸟叫声慢慢变轻。',
  ],

  epitaph: '你在竹林里活过了很多个春天。竹子会开花，也会重新长出来。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'human',
  name: '人类',
  en: 'Human',
  sci: 'Homo sapiens',
  emoji: '🧑',
  scene: 'city',
  kind: 'human',
  tagline: '地球上每天都有几十万人出生，你是其中一个，在一个你没法选择的地方',

  birth: {
    sex: [['女孩', 1, { set: 'female' }], ['男孩', 1, { set: 'male' }]],
    rolls: [
      { label: '出生的地区', options: [
        ['撒哈拉以南非洲的一个农村', 28, { food: -15, health: -10, risk: 2.0 }],
        ['南亚的一个县城', 26, { food: -5, health: -5, risk: 1.4 }],
        ['东亚与太平洋的一个城市', 22, { food: 0, risk: 1.0 }],
        ['拉丁美洲与加勒比的一个小镇', 9, { risk: 1.1 }],
        ['中东与北非的一个城郊', 8, { risk: 1.2 }],
        ['欧洲或中亚的一个城市', 6, { food: +15, risk: 0.7 }],
        ['北美的一个郊区', 1, { food: +20, risk: 0.6 }],
      ]},
      { label: '家庭经济', options: [
        ['家里很穷，每天的花费不到 2.15 美元', 10, { food: -15, risk: 1.4, set: 'poor' }],
        ['家里收入勉强够用，有一间带自来水的房子', 60, {}],
        ['家里条件不错，你有自己的房间', 30, { food: +15, health: +5, risk: 0.8, set: 'comfort' }],
      ]},
      { label: '在家里的排行', options: [
        ['你是家里的老大，弟妹要靠你照看', 3, { food: +3, set: 'eldest' }],
        ['你排在中间，上面有哥哥或姐姐，下面有弟妹', 4, { set: 'middle' }],
        ['你是家里最小的，哥哥姐姐都比你大', 2, { food: -5, set: 'youngest' }],
      ]},
      { label: '父母的学历', options: [
        ['父母都没有读完小学', 3, { food: -5, health: -3, risk: 1.2, set: 'low_edu' }],
        ['父母读过初中，懂一点卫生和营养', 4, { set: 'mid_edu' }],
        ['父母都读过大学，家里有几本书', 2, { food: +5, health: +4, risk: 0.85, set: 'high_edu' }],
      ]},
    ],
    siblings: 2,
    siblingsLabel: '家里的兄弟姐妹',
    intro: '你出生在{出生的地区}。{家庭经济}。你是{sex}，家里一共有 {siblings} 个兄弟姐妹。',
  },

  stages: [
    { id: 'infant', name: '婴儿（0–1 岁）', from: 0,     unit: 'month' },
    { id: 'child',  name: '幼儿',         from: 365,   unit: 'year' },
    { id: 'school', name: '学龄儿童',     from: 2190,  unit: 'year' },
    { id: 'youth',  name: '青年',         from: 5475,  unit: 'year' },
    { id: 'adult',  name: '成年',         from: 9125,  unit: 'year' },
    { id: 'old',    name: '老年',         from: 23725, unit: 'year' },
  ],
  maturity: 5840,
  maxAge: 44530,

  survival: [[0,1],[30,0.985],[365,0.972],[1825,0.963],[5475,0.955],[9125,0.945],[12775,0.93],[16425,0.9],[20075,0.85],[23725,0.76],[27375,0.62],[31025,0.42],[34675,0.2],[38325,0.06],[40150,0.012],[41975,0.002],[43000,0.0008],[44530,0]],
  survivalNote: '按联合国和世界卫生组织公布的全球平均数量级粗估（5 岁以下死亡率约 3.7%，UN IGME 2023 报告，2022 年数据）；各地差距极大，撒哈拉以南非洲的婴幼儿死亡率远高于这个水平',

  init: { health: 75, food: 60, safety: 55 },
  foodDrain: 2,

  causes: [
    { id: 'diarrhea', escape: false, w: 3, stages: ['infant','child','school'], short: '腹泻引起的脱水',
      text: '你连着拉了三天。家里没有口服补液盐，也没有钱去诊所，母亲只能一勺一勺地给你喂水。' },
    { id: 'pneumonia', escape: false, w: 3, stages: ['infant','child','school','old'], short: '肺炎',
      text: '你发高烧，呼吸越来越急。最近的医院要走一整天的路。' },
    { id: 'malaria', escape: false, w: 2, stages: ['child','school','youth'], short: '疟疾',
      text: '一只按蚊叮了你。三天后你开始发冷，接着是高烧，最后一句话也说不出来。' },
    { id: 'childbirth', escape: false, w: 1, need: 'female', stages: ['youth','adult'], short: '分娩并发症',
      text: '生产的时候大出血。接生的人没有赶到，医院离得太远。' },
    { id: 'accident', escape: true, w: 3, stages: ['child','school','youth','adult'], short: '交通事故',
      text: '一辆摩托车在路口拐了过来。你没来得及躲开。' },
    { id: 'heart', escape: false, w: 4, stages: ['adult','old'], short: '心血管疾病',
      text: '一天早上，你在厨房门口倒了下去。等人发现的时候，已经晚了。' },
    { id: 'cancer', escape: false, w: 3, stages: ['adult','old'], short: '癌症',
      text: '体检报告上有一个阴影。你还没来得及做完后面的检查。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你在床上睡着，然后再也没醒来。家里的人都在身边。' },
  ],

  events: [
    { stages: ['infant'], w: 1, once: true, text: '你第一次把头抬了起来，看见了天花板上晃动的影子。' },
    { stages: ['infant'], w: 3, text: '邻居送来一条旧毯子。母亲把你裹好，抱到窗边晒太阳。', eff: { food: +5 } },
    { stages: ['infant'], w: 2, text: '你接种了第一针疫苗。麻疹疫苗通常在一岁左右打。', eff: { health: +5 },
      fact: '麻疹疫苗估计使 2000–2022 年间约 5700 万人免于死亡（Minta 等 2023，MMWR）' },
    { stages: ['infant'], w: 3, need: 'poor', text: '你拉肚子，身体里的水分一天天往外跑。家里只能给你喂糖水。', eff: { health: -10, food: -5 } },
    { stages: ['infant'], w: 2, text: '你开始把身边的东西抓起来，一个个塞进嘴里。', eff: { safety: -3 } },
    { stages: ['school'], w: 3, text: '你开始去学校。课桌是几块木板拼的，老师要同时教几十个孩子。',
      fact: 'UNESCO 估计，全球约有 2.72 亿儿童和青少年没有上学（UNESCO GEM 2025）' },
    { stages: ['school'], w: 2, need: 'poor', text: '你和其他孩子一起去田里捡柴。你没有时间去学校。', eff: { food: -5 } },
    { stages: ['child','school'], w: 2, text: '夏天，村里的井干了。你和家人一起去很远的地方挑水。',
      fact: 'WHO 与 UNICEF 的联合监测估计，2024 年全球约 21 亿人缺少安全管理的饮用水（JMP 2025）' },
    { stages: ['school'], w: 1, once: true, need: 'poor', text: '你十二岁，被送去一家小作坊做工，每天要干十个小时。',
      fact: 'ILO 与 UNICEF 估计，2020 年全球约有 1.6 亿儿童处于童工状态（ILO & UNICEF 2021）' },
    { stages: ['child','school'], w: 2, text: '你和朋友去水塘边玩，回家的时候，胳膊上被蚊子咬了一片包。' },
    { stages: ['youth'], w: 3, text: '你开始找工作。收入每个月只有几十美元，很多人也是这样。',
      fact: 'ILO 估计，2024 年全球约 58% 的就业者在非正规部门工作（ILO 2025）' },
    { stages: ['youth'], w: 2, text: '你的手机第一次连上了网络。屏幕上出现了远方的图片。',
      fact: 'ITU 估计，2023 年全球约 65% 的人口已经上网（ITU 2024）' },
    { stages: ['youth'], w: 1, once: true, text: '你第一次离开家乡，去城里找工作。' },
    { stages: ['adult'], w: 1, once: true, text: '你结了婚。婚礼花光了家里一年的积蓄，大家都说很热闹。' },
    { stages: ['adult'], w: 3, text: '你的孩子夜里发高烧。你抱着他去了诊所，在门口排了一个上午的队。' },
    { stages: ['adult'], w: 2, text: '路口发生了一起车祸。你躲过了，但你的朋友没有。', eff: { safety: -10 } },
    { stages: ['adult'], w: 1, once: true, text: '你第一次做了体检，血压比你想象中高。', eff: { health: -5 } },
    { stages: ['adult'], w: 2, text: '年底的时候，你和家人一起吃了一顿丰盛的饭。', eff: { food: +15 } },
    { stages: ['adult'], w: 2, text: '体检单上写着血糖偏高。医生说，这在全世界都很常见。',
      fact: 'IDF 估计，2024 年全球约有 5.9 亿成年人患有糖尿病（IDF Diabetes Atlas 2025）' },
    { stages: ['old'], w: 3, text: '你的记性开始变差。你会忘记钥匙放在哪里。',
      fact: 'WHO 估计，2021 年全球约有 5700 万人患有痴呆症（WHO 痴呆症概况）' },
    { stages: ['old'], w: 2, text: '你的孙子第一次叫你的名字。你愣了很久。' },
    { stages: ['old'], w: 2, text: '天气一天比一天热。你在屋里躺了一下午，没有出门。', eff: { health: -3 } },
    { stages: ['youth','adult'], w: 3, act: 'forage', text: '你的工资发下来了，数字比上个月多了一点点。', eff: { food: +15 } },
    { stages: ['school','youth'], w: 2, act: 'forage', text: '你去村里的小店打了半天零工，老板给了你一把硬币。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, act: 'forage', text: '一次加班，你错过了孩子的家长会。第二天，你觉得自己欠他一句道歉。', eff: { health: -4, safety: -3 } },
    { stages: ['child','school','youth','adult','old'], w: 2, act: 'hide', text: '你把旧衣服翻出来改了改，又穿了一个冬天。', eff: { food: -5, safety: +3 } },
    { stages: ['adult','old'], w: 1, act: 'hide', text: '你把存款分成三份：一份放在枕头下面，一份存进银行，一份留着应急。', eff: { safety: +5 } },
    { stages: ['adult','old'], w: 2, act: 'rest', text: '午后，你在沙发上睡了一会儿，梦里有人在喊你的名字。', eff: { health: +4 } },
    { stages: ['youth','adult'], w: 2, act: 'explore', text: '你搭上一辆远行的大巴，车窗外的田野一片接一片，你谁也不认识。', eff: { food: +8, safety: -3 } },
    { stages: ['youth','adult'], w: 2, act: 'explore', text: '你在一家大医院门口遇上了同乡。他说城里的工资比家乡高一倍。', eff: { food: +10 } },
    { stages: ['youth','adult'], w: 2, act: 'mate', text: '你们为了婚礼的钱吵了一架，最后谁也没有退让。', eff: { food: -8, safety: -3 } },
    { stages: ['adult'], w: 1, once: true, act: 'mate', text: '你们的孩子出生了。你抱着他，看了很久，一句话也说不出来。', eff: { offspring: [1, 1] } },
    { stages: ['child','school'], need: 'eldest', w: 2, text: '你在家里是大的那个。母亲出门干活时，你要背着弟妹去河边洗衣服。', eff: { safety: -2 } },
    { stages: ['school'], need: 'eldest', w: 2, text: '你的书本是崭新的，是家里第一次为一个孩子买的。' },
    { stages: ['youth'], need: 'eldest', w: 2, text: '家里的钱要你来管。你每个月把工资分成几份：一份给父母，一份给弟妹的学费，剩下的留给自己。', eff: { food: -5, safety: +3 } },
    { stages: ['child'], need: 'middle', w: 2, text: '你总是夹在大的和小的中间。大的可以出去玩，小的要人抱，你常常被落在中间。', eff: { safety: -3 } },
    { stages: ['school'], need: 'middle', w: 2, text: '你的衣服常是哥哥姐姐穿剩的，颜色已经发白。你不在意，但这是你记得的第一件事。' },
    { stages: ['youth'], need: 'middle', w: 1, once: true, text: '你第一次跟着哥哥去城里打工。你们在一间屋子里挤着睡，他说这就是他们那一代人的日子。' },
    { stages: ['infant'], need: 'youngest', w: 2, text: '你是家里的小儿子，哥哥姐姐都抢着抱你。奶粉常常不够，母亲把自己那一份也省给了你。', eff: { food: +5 } },
    { stages: ['child'], need: 'youngest', w: 2, text: '哥哥姐姐都上学去了，家里只剩你和母亲。你每天一个人在院子里玩，等他们回来。', eff: { safety: -3 } },
    { stages: ['school'], need: 'youngest', w: 2, text: '你的课本是别人用过的旧书。上面写着哥哥的名字，你擦了好几次，还是擦不掉。' },
    { stages: ['infant'], need: 'low_edu', w: 2, text: '母亲不知道该怎么给你喂奶，也不知道要把水烧开。你的肚子常常胀着，哭了很久。', eff: { health: -5 } },
    { stages: ['child','school'], need: 'low_edu', w: 2, text: '家里没有人能帮你看作业。你写不出来，就一直坐在桌前，直到天黑。', eff: { safety: -3 } },
    { stages: ['adult'], need: 'low_edu', w: 2, text: '你的工资单上，每一项都要别人念给你听。你不敢签字，怕签错了。' },
    { stages: ['infant'], need: 'mid_edu', w: 2, text: '母亲记得在医院里学过的话：每次喂奶后要拍拍后背。她一直照着做，你很少呛到。', eff: { health: +3 } },
    { stages: ['school'], need: 'mid_edu', w: 2, text: '父亲会帮你查字典，也会在晚饭后给你讲他读过的书。', eff: { safety: +3 } },
    { stages: ['youth'], need: 'mid_edu', w: 1, text: '你在网上找到一个免费的课程，花了几个月的晚上学完了它。' },
    { stages: ['infant'], need: 'high_edu', w: 2, text: '母亲按照书上的时间表给你添辅食。她每天记下你的体重，一本本子很快就写满了。', eff: { health: +4 } },
    { stages: ['school'], need: 'high_edu', w: 2, text: '家里有一个书架。你最早认识的字，就是从父母的书上来的。', eff: { food: +3 } },
    { stages: ['youth','adult'], need: 'high_edu', w: 2, act: 'explore', text: '你去了城里读书。父母的老同学在那里，他们帮你找到一间便宜的房子。', eff: { food: +8, safety: +3 } },
    { stages: ['school'], need: 'bold', w: 2, text: '你敢在放学后跑去河边，和大孩子一起跳水。水很凉，你却笑得很大声。', eff: { safety: -5 } },
    { stages: ['child','school'], need: 'cautious', w: 2, text: '路口有车经过时，你总是先看一眼两边再过去。大人们笑你胆小，你不在意。', eff: { safety: +4 } },
    { stages: ['school','youth'], need: 'curious', w: 2, text: '你拆开了家里的收音机，找到里面那根细细的线。你想知道它为什么能发出声音。' },
    { stages: ['infant'], need: 'runt', w: 2, text: '你比同龄的孩子轻，哭声也细。医生说你要多吃，母亲就一直在喂你。', eff: { health: -5, food: -3 } },
    { stages: ['child','school','youth','adult'], need: 'robust', w: 2, text: '你的身体一直很结实，很少生病。同学们都说你的力气大。', eff: { health: +3 } },
  ],

  opening: {
    title: '家里的第一个决定',
    body: '你还没有出生。家里要决定在哪里把你生下来：去最近的医疗点，还是留在家里，请一位熟悉的接生者来帮忙。',
    options: [
      { t: '去最近的医疗点分娩', hint: '风险↓ · 路上要花时间', eff: { health: +3 }, risk: 0.8, riskDays: 30,
        result: '你出生在医疗点里。接生的人很熟练，剪断脐带后，用干净的布把你包了起来。' },
      { t: '留在家里分娩', hint: '不用赶路 · 风险↑', eff: { health: -3 }, risk: 1.25, riskDays: 30,
        result: '接生的人是邻居家的老妇人。屋里很暗，她的手很稳，但没有器械，也没有药。' },
    ],
  },

  brood: [1, 1],
  actions: {
    forage:  { name: '工作', desc: '上学或上班，去挣钱、学本事。累，但一家人靠它吃饭。', stages: ['school','youth','adult'], text: ['你在工地上搬了一整天的砖，手上磨出了水泡。', '工厂的铃声响了，你跟着人流走进车间。', '你在收银台前站了十个小时，脚已经不像自己的了。', '夜班结束，你骑着车回家，街上只剩路灯。'] },
    hide:    { name: '谨慎过日子', desc: '少花钱，少出门，躲开可能的风险。吃得少，日子却平稳。', stages: ['child','school','youth','adult','old'], text: ['你把每一笔花销都记在一个小本子上。', '你没有去参加朋友的聚会，又存下了一笔钱。', '你把窗帘拉上，屋里很暗，也很安静。'] },
    rest:    { name: '陪家人', desc: '待在家里，陪孩子、陪父母，做饭吃饭，不去想钱的事。', text: ['你陪孩子写作业，灯光照着两个人的头。', '晚饭的香味从厨房飘出来，饭桌很小，但坐得满满的。', '你给父母捶背，父亲说你的手劲越来越大了。'] },
    explore: { name: '出去闯一闯', desc: '离开家乡或熟悉的工作，去新的城市、新的行当。机会多，风险也多。', stages: ['youth','adult'], text: ['你第一次坐上长途汽车，去了一个陌生的城市。', '你在一家陌生的店里问路，对方的口音你听不太懂。', '夜里，你在新的小屋里铺好床，想着明天要去哪里。'] },
    mate:    { name: '组建家庭', desc: '找一个伴，成家生孩子。孩子出生以后，要花很多钱，也要花很多时间。', stages: ['youth','adult'], done: '你有了一个孩子，家里多了 {n} 口人。', text: ['你们一起去领证，照片上两个人都在笑。', '你在厨房里学着做饭，第一锅有点咸。', '婚礼的鞭炮声远远传来，你的手被亲人握着。'] },
  },

  decisions: [
    {
      id: 'school', at: 4745,
      title: '去上学，还是留在家里',
      body: '家里的大人商量了很久。村里的学校离家不远，但一天要走两个小时的路。家里也需要人照看弟弟。',
      fact: '全球仍有大量学龄儿童因为贫困和交通成本等原因不能上学（UNESCO GEM 2025）',
      options: [
        { t: '每天去学校', hint: '知识↑ 家里的人手↓', eff: { food: -5 }, risk: 0.9, riskDays: 365,
          result: '你每天走很远的路去上学。傍晚回来的时候，弟弟已经睡着了。' },
        { t: '留在家里干活', hint: '家里好过一点 · 知识↓', eff: { food: +5 }, risk: 1.1, riskDays: 365,
          result: '你留在了家里，帮忙照看弟弟，也学会了所有的农活。' },
      ],
    },
    {
      id: 'work', at: 5840,
      title: '去城里打工，还是留在家乡',
      body: '城里的工厂在招人，工资比家乡高，但一去就要和家人分开。家乡的田地也不一定能养活一家人。',
      fact: '非正规就业的劳动者大多没有稳定的收入和社会保障（ILO 2018）',
      options: [
        { t: '去城里打工', hint: '收入↑ 风险↑', eff: { food: +20 }, risk: 1.2, riskDays: 365, kill: 0.02, cause: 'accident',
          result: '你进了一家工厂。一个月下来，你攒下的钱比在家里一年还多。' },
        { t: '留在家乡种地', hint: '稳定 · 收入少', eff: { food: +5 },
          result: '你在田里待了一整年。收成不算好，但一家人还能吃饱。' },
      ],
    },
    {
      id: 'partner', at: 9125,
      title: '一段关系',
      body: '有人想和你一起过日子。你既想有一个家，又担心生活会变得更加拮据。',
      options: [
        { t: '结婚，生孩子', hint: '家庭 · 花费↑', eff: { food: -10, health: -3 }, risk: 1.0, riskDays: 365,
          result: '你们一起搬进了一间小房子。孩子出生那一年，家里的钱像水一样流出去。' },
        { t: '一个人过', hint: '自由 · 孤单', eff: { food: +5, safety: +5 },
          result: '你还是一个人过。每天下班后，你会在街角买一碗面，慢慢吃完。' },
      ],
    },
    {
      id: 'checkup', at: 18250, when: { health: '<60' },
      title: '一次体检',
      body: '血压和血糖都偏高。医生说，药要天天吃，饮食也要改。',
      options: [
        { t: '按时吃药，改饮食', hint: '健康↑ 花费↑', eff: { health: +5, food: -5 }, risk: 0.7, riskDays: 3650,
          result: '你每天早上吃一粒药，少吃了很多咸的东西。身体慢慢好了一些。' },
        { t: '不去管它', hint: '省事 · 风险↑', eff: {}, risk: 1.4, riskDays: 3650,
          result: '你照常吃饭、工作，没有把医生的话放在心上。' },
      ],
    },
    {
      id: 'father_ill', at: 12000,
      title: '老家的电话',
      body: '电话那头，父亲在老家的医院里住了一周。医生说需要有人在床边照顾。你的工作正在最忙的时候，老板不太愿意让你请假。',
      options: [
        { t: '请假回去照顾他', hint: '家人安心 · 收入↓', eff: { food: -10, safety: +5 }, risk: 0.9, riskDays: 60,
          result: '你回到老家，在病房里守了三个星期。父亲能下床的那天，你才回了城里。' },
        { t: '留在城里赚钱', hint: '收入↑ · 心里不安', eff: { food: +10, safety: -5 }, risk: 1.2, riskDays: 60,
          result: '你每天往家里汇钱，也每天给护士打电话。父亲的病慢慢稳定了下来。' },
      ],
    },
    {
      id: 'loan', at: 15500,
      title: '一笔借来的钱',
      body: '城郊挂出了一套小房子。首付要向亲戚借一大笔钱，每个月的还款会压得你喘不过气。',
      options: [
        { t: '借钱买下来', hint: '安全↑ · 花费↑↑', eff: { food: -10, safety: +10 }, risk: 1.1, riskDays: 1825,
          result: '你们搬了进去，墙是新刷的。每个月还款的那一天，你都要先看一眼账户。' },
        { t: '继续租房', hint: '花费↓ · 不稳定', eff: { food: +5, safety: -5 },
          result: '你又搬了一次家。在街角的旧楼里，你找到了另一间小屋。' },
      ],
    },
    {
      id: 'heart_pain', at: 21000,
      title: '夜里的胸口',
      body: '你半夜醒来，胸口一阵发紧，左臂也有点麻。你不确定这是不是累的缘故。',
      options: [
        { t: '第二天就去医院做检查', hint: '健康↑ · 要花一天时间', eff: { health: +5 }, risk: 0.7, riskDays: 365,
          result: '医生给你做了心电图，又让你抽了血。结果出来之前，你一直在走廊里坐着。' },
        { t: '扛过去，不去管它', hint: '省事 · 风险↑↑', eff: { health: -5 }, risk: 1.5, riskDays: 365, kill: 0.05, cause: 'heart',
          result: '你躺下来，等它过去。第二天早上，你照常去上班，觉得还能撑。' },
      ],
    },
    {
      id: 'old_house', at: 26000,
      title: '老房子还要不要住',
      body: '你的腿越来越不利索，楼梯已经爬得很慢。孩子们希望你搬去他们那里，但你更习惯这间老房子的光线和邻居。',
      options: [
        { t: '搬去孩子家', hint: '有人照顾 · 离开熟悉的街', eff: { safety: +10, food: -5 },
          result: '你搬进了孩子家的小房间。每天早上，你都能听见楼下的人说话。' },
        { t: '留在老房子，自己做饭', hint: '熟悉 · 独居', eff: { food: +5, health: -3 }, risk: 1.2, riskDays: 365,
          result: '你每天自己买菜，自己做饭。楼梯很陡，你总要扶着墙慢慢地下。' },
      ],
    },
    {
      id: 'treatment', at: 31000,
      title: '体检单上的阴影',
      body: '复查的结果出来了。医生说需要尽快做进一步检查，之后可能要做手术，或者长期治疗。',
      options: [
        { t: '接受治疗', hint: '健康↑ · 花费↑', eff: { health: +10, food: -5 }, risk: 0.8, riskDays: 730,
          result: '治疗的日子很长。你每周去一次医院，回家后总要躺很久。' },
        { t: '不做治疗，回家过', hint: '保留日常 · 风险↑↑', eff: { health: -5 }, risk: 1.3, riskDays: 730, kill: 0.03, cause: 'cancer',
          result: '你回到家里，照常做饭、晒太阳。你不想让最后的日子都泡在消毒水的味道里。' },
      ],
    },
    {
      id: 'winter_hospital', at: 38000,
      title: '冬天的一场咳嗽',
      body: '入冬以后，你的咳嗽一直停不下来，痰里有些血丝。医生说可以住院，也可以在家吃药。',
      options: [
        { t: '住院', hint: '健康↑ · 离开家', eff: { health: +8 }, risk: 0.8, riskDays: 60,
          result: '你在病房里住了两周。窗外的梧桐落光了叶子，你每天数着枝头的鸟。' },
        { t: '在家吃药', hint: '舒服 · 风险↑', eff: { safety: +5 }, risk: 1.3, riskDays: 60, kill: 0.05, cause: 'pneumonia',
          result: '你躺在床上，身边放着一杯温水。咳嗽慢慢轻了，你以为自己好了。' },
      ],
    },
    {
      id: 'eldest_work', at: 4200, need: 'eldest',
      title: '家里缺一个干活的人',
      body: '父亲的腰受伤了，家里的地要人去种。学校要你每天去，地也要有人去种。',
      options: [
        { t: '请假回家干活', hint: '家里的地种上了 · 功课落下', eff: { food: +10, safety: -3 }, risk: 1.05, riskDays: 365,
          result: '你请了一个学期的假，把家里的地种了下来。开学的时候，你落下了很多课。' },
        { t: '继续去上学', hint: '知识↑ 累', eff: { food: -8 },
          result: '你每天天不亮就起床，干完农活再去学校。上课的时候，你常常靠着桌子打瞌睡。' },
      ],
    },
    {
      id: 'low_edu_fever', at: 1200, need: 'low_edu',
      title: '半夜发高烧',
      body: '你半夜烧了起来，额头烫得吓人。母亲不知道该怎么办，村里的诊所已经关了门。',
      options: [
        { t: '等到天亮再去', hint: '省事 · 风险↑↑', eff: { health: -5 }, risk: 1.5, riskDays: 3, kill: 0.04, cause: 'pneumonia',
          result: '你烧了一整夜。天亮的时候，你不再哭了。' },
        { t: '连夜抱去县城的医院', hint: '健康↑ · 路上很远', eff: { food: -10, safety: +3 }, risk: 1.1, riskDays: 5,
          result: '母亲借来一辆三轮车，走了两个小时的夜路。医生给你打了针，你慢慢退了烧。' },
      ],
    },
    {
      id: 'bold_ice', at: 3000, need: 'bold',
      title: '冬天的河面',
      body: '河面结着冰，对岸有一群孩子在滑冰。冰看上去很薄。你可以试一试，也可以绕远路回家。',
      options: [
        { t: '走上冰面', hint: '近 · 掉进冰窟窿的风险', eff: { safety: -5, food: +3 }, kill: 0.05, cause: 'accident',
          result: '冰面咔嚓响了一声。你趴着爬到了岸边，身上全湿透了。' },
        { t: '绕远路回家', hint: '安全↑ 路远', eff: { food: -3, safety: +3 },
          result: '你绕了很远的路，到家时天已经黑了。' },
      ],
    },
    {
      id: 'cautious_loan', at: 9500, need: 'cautious',
      title: '朋友借钱',
      body: '你攒下了一笔钱。一个朋友说手上有个机会，可以翻几倍，但也可能全部赔光。',
      options: [
        { t: '把钱存进银行', hint: '安全↑ 收益很少', eff: { safety: +5 },
          result: '你每个月都去存一次，数字慢慢地变大了一点。' },
        { t: '借给朋友', hint: '人情↑ · 风险↑', eff: { food: +10, safety: -8 }, risk: 1.1, riskDays: 365,
          result: '钱借出去了。第二年，朋友说那笔钱亏光了，他的脸一直红着。' },
      ],
    },
    {
      id: 'curious_book', at: 6000, need: 'curious',
      title: '一本没有封面的书',
      body: '你在旧货市场里翻到一本没有封面的书。书里讲的事，你从没在村里听过。',
      options: [
        { t: '买下它，带回家慢慢读', hint: '知识↑ 花费↓', eff: { food: -3 },
          result: '你一页一页地读完了它，之后很久都在想书里那个世界。' },
        { t: '把钱换成一碗热汤面', hint: '饱腹', eff: { food: +5 },
          result: '你吃了一碗热汤面，很香。过了几天，你就忘了那本书。' },
      ],
    },
    {
      id: 'robust_work', at: 7000, need: 'robust',
      title: '一份要力气的活',
      body: '工地在招装卸工，每天要扛很重的水泥袋。工钱比别的活高出一半。',
      options: [
        { t: '去扛包', hint: '收入↑↑ 身体↓', eff: { food: +15, health: -5 }, risk: 1.1, riskDays: 365,
          result: '你每天扛着几十袋水泥，肩膀磨出了血。一个月后，你攒下了一笔钱。' },
        { t: '找一份轻松的活', hint: '收入↑ 身体↑', eff: { food: +3 },
          result: '你在一家小店里帮人收钱。工钱少，但手不用那么累。' },
      ],
    },
    {
      id: 'runt_pe', at: 2500, stage: 'school', need: 'runt',
      title: '体育课的比赛',
      body: '老师要选人去跑步比赛。你个子小，跑起来总是落在最后。',
      options: [
        { t: '报名参加', hint: '体力消耗↑', eff: { safety: -3, health: -3 },
          result: '你跑完了全程，腿抖了一整天，但没有人笑你。' },
        { t: '留在教室里看书', hint: '安静', eff: { food: -2 },
          result: '你在教室里把一本书读完了。' },
      ],
    },
  ],

  idle: [
    '窗外的街道很吵，声音一阵一阵地传进来。',
    '厨房里传来油锅的声音，有人在做晚饭。',
    '屋子里很暖，有人轻轻哼着歌。',
    '邻居的孩子在院子里跑，笑声一直没停。',
    '夜里的水管响了一声，然后安静下来。',
    '一场小雨下过之后，街面亮亮的，人们都慢下来了。',
    '远处有人在放鞭炮，声音闷闷的，过了一会儿停了。',
    '傍晚的路灯一盏盏亮起来，窗外的人影慢慢变少。',
  ],

  epitaph: '每天都有很多人出生，也有很多人离开。你的一生在数字之间走过，安静，也是真实的。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'greenland_shark',
  name: '格陵兰睡鲨',
  en: 'Greenland shark',
  sci: 'Somniosus microcephalus',
  emoji: '🦈',
  scene: 'polar',
  kind: 'wild',
  tagline: '已知寿命最长的脊椎动物，大约要 150 岁才成年',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生海域', options: [
        ['格陵兰东岸的峡湾深处', 3, {}],
        ['巴芬湾的冷水层', 3, {}],
        ['挪威斯瓦尔巴群岛外的陆坡', 2, {}],
        ['冰岛北部的深海', 2, { risk: 1.1 }],
      ]},
      { label: '深度', options: [
        ['海面下几十米的冷水层，冬天冰盖的下面', 2, { food: +5, risk: 1.1, set: 'shallow' }],
        ['几百米深的陆坡，水温常年接近 0°C', 3, { set: 'slope' }],
        ['一千多米深的海底，几乎没有光', 2, { food: -10, set: 'abyss' }],
      ]},
      { label: '渔业压力', options: [
        ['几乎没有渔船的海域，海豹和鱼都还很多', 2, { food: +10, set: 'quiet' }],
        ['底拖网渔船常年经过的海域', 2, { risk: 1.3, set: 'trawled' }],
        ['一片延绳钓的渔场，成排的钩子挂着鱼饵沉在水里', 2, { food: +5, risk: 1.15, set: 'longline' }],
      ]},
    ],
    siblings: 10,
    siblingsLabel: '同一胎出生的幼鲨',
    intro: '你在{出生海域}出生，身长约 40 厘米，水温接近 0°C。母亲一次生下大约 {siblings} 条幼鲨，然后游走了。你是{sex}。按照你们的速度，你要到大约 150 岁才能成年。',
  },

  stages: [
    { id: 'pup',   name: '幼鲨',   from: 0,          unit: 'month' },
    { id: 'juv',   name: '少年',   from: 365,        unit: 'year' },
    { id: 'subad', name: '亚成年',  from: 365 * 60,   unit: 'year' },
    { id: 'adult', name: '成年',   from: 365 * 150,  unit: 'year' },
    { id: 'old',   name: '老年',   from: 365 * 330,  unit: 'year' },
  ],
  maturity: 365 * 150,
  maxAge: 365 * 512,

  survival: [[0,1],[365,0.6],[365*5,0.42],[365*30,0.32],[365*150,0.2],[365*300,0.08],[365*400,0.02],[365*480,0.002],[365*512,0]],
  survivalNote: '格陵兰睡鲨的野外死亡率没有数据；寿命上限取自 Nielsen 等 2016 的估计（392 ± 120 年），曲线为粗估',

  init: { health: 80, food: 60, safety: 60 },
  foodDrain: 3,

  causes: [
    { id: 'eaten', escape: true, w: 4, stages: ['pup','juv'], short: '被更大的鲨鱼或海豹吃掉',
      text: '你还小的时候，一条更大的同类在黑暗里撞上了你。' },
    { id: 'bycatch', escape: true, w: 5, stages: ['juv','subad','adult','old'], short: '被渔具误捕',
      text: '你咬住了延绳钓上的一块鱼饵。渔民把你拖上甲板，割断鱼线，把你扔回了海里。你沉下去的时候已经不动了。' },
    { id: 'trawl', escape: true, w: 2, stages: ['juv','subad','adult'], short: '缠进底拖网',
      text: '一张捕格陵兰大比目鱼的底拖网从海底扫过，把你也兜了进去。' },
    { id: 'starve', escape: false, w: 1, short: '长期饥饿', text: '那几年海豹和鱼都很少。你的肝脏一点点萎缩，最后停止了游动。' },
    { id: 'disease', escape: false, w: 2, stages: ['subad','adult','old'], short: '感染', text: '一处很多年前的伤口一直没有长好。' },
    { id: 'old', escape: false, w: 0, short: '衰老', text: '你在冰冷的海底慢慢停了下来。从你出生到现在，地面上的人类已经换了十几代。' },
  ],

  events: [
    { stages: ['pup'], w: 2, text: '你在海底附近缓慢地游，吃到一条小鱼。', eff: { food: [8, 15] } },
    { stages: ['pup'], w: 1, text: '一头冠海豹从你上方游过，比你大得多。你沉向更深的地方。', eff: { safety: -10 } },
    { stages: ['juv','subad','adult','old'], w: 3, text: '你以每秒三十多厘米的速度游着，比人散步还慢。', eff: { food: -2 },
      fact: '格陵兰睡鲨的平均巡游速度约 0.34 米/秒，是同体型鱼类里最慢的（Watanabe 等 2012）' },
    { stages: ['juv','subad','adult','old'], w: 3, text: '你在海底找到一具鲸的残骸，吃了很多天。', eff: { food: [25, 40] } },
    { stages: ['subad','adult','old'], w: 2, text: '你悄悄靠近一头睡着的环斑海豹，一口咬住了它。', eff: { food: [30, 45] },
      fact: '格陵兰睡鲨的胃里常发现海豹，研究者推测它们会捕食在水中睡觉的海豹（Leclerc 等 2012；Watanabe 等 2012）' },
    { stages: ['juv','subad','adult','old'], w: 1, once: true, text: '一只寄生桡足类咬住了你的眼角膜，再也没有松开。你看东西越来越模糊，不过在这么深的地方，本来也没多少光。', eff: { health: -5 },
      fact: '不少格陵兰睡鲨眼睛上附着寄生桡足类 Ommatokoita elongata（Borucinska 等 1998）' },
    { stages: ['subad','adult','old'], w: 1, once: true, text: '你吃到一头掉进海里淹死的驯鹿。没有人知道它是怎么到这里的。', eff: { food: +40 } },
    { stages: ['juv','subad','adult'], w: 2, text: '这一年你长了不到一厘米。', eff: { health: +2 },
      fact: '格陵兰睡鲨每年只长大约 1 厘米或更少（Nielsen 等 2016）' },
    { stages: ['juv','subad','adult','old'], w: 1, text: '公元 {year} 年。夏天的海冰比你小时候少了很多。', eff: { safety: -3 } },
    { stages: ['juv','subad','adult','old'], w: 1, text: '海面上传来船的螺旋桨声，持续了好几天。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, need: 'female', text: '你生下了 {n} 条幼鲨，然后游开了。', eff: { offspring: [6, 12] },
      fact: '格陵兰睡鲨是卵胎生，已知一胎约 10 条（Koefoed 1957）' },
    { stages: ['adult'], w: 1, need: 'male', text: '你在深水里遇到一条雌鲨，你们交配了。', eff: { offspring: [3, 10] } },
    { stages: ['juv','subad','adult','old'], w: 1, once: true, text: '你被一条延绳钓钩住了嘴，挣扎了很久，钩子最后从你嘴角撕脱。', eff: { health: -20 } },
    { stages: ['adult','old'], w: 1, text: '你的身体里，有些蛋白质从你出生那年起就没有更换过。',
      fact: '研究人员用眼睛晶状体核心的碳-14 测年，那部分组织在出生前就已形成（Nielsen 等 2016）' },
    { stages: ['old'], w: 2, text: '你游得更慢了。你已经活过了大约 {years} 个冬天。', eff: { health: -4 } },
    { stages: ['juv','subad','adult','old'], w: 1, text: '一群北极鳕从你面前经过，你吃了几条。', eff: { food: [10, 20] } },
    { act: 'forage', stages: ['juv','subad','adult','old'], w: 2, text: '你顺着腐肉的味道游过去，吃到了一具鲸的残骸。', eff: { food: [8, 14] } },
    { act: 'forage', stages: ['subad','adult','old'], w: 2, text: '你嗅到一群北极鳕，张嘴吞下了其中两条。', eff: { food: [8, 12] } },
    { act: 'hide', stages: ['pup','juv'], w: 2, text: '你沉到软泥里，只露出一双眼睛。头顶的影子慢慢游过去了。', eff: { safety: 10 } },
    { act: 'hide', stages: ['subad','adult','old'], w: 2, text: '软泥里很冷，细小的沉积物从鳃上滑过，你一动不动。', eff: { food: -3, health: 2 } },
    { act: 'rest', stages: ['juv','subad','adult','old'], w: 2, text: '你停在水里不动，身体随水流慢慢漂着。你一口东西也没有吃。', eff: { food: -5, health: 3 } },
    { act: 'rest', stages: ['subad','adult','old'], w: 1, text: '你在海底歇着，身上的旧伤痒了一阵，之后又慢慢安静下来。', eff: { health: 2 } },
    { act: 'explore', stages: ['juv','subad'], w: 2, text: '你游向一片从没去过的水层，水温降了一点。', eff: { food: [4, 8], safety: -5 } },
    { act: 'explore', stages: ['adult','old'], w: 2, text: '你沿着陆坡往下游，身后一道灯光从上面照下来，很快又熄灭。', eff: { safety: -5 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你在深水里遇到另一条同类。它的身体很冷，游得很慢，你们靠近又分开。', eff: { safety: -2 } },
    { act: 'mate', stages: ['adult'], w: 1, text: '你在黑暗里找到了一条雌鲨。你们在一起待了一会儿，然后各自游开。', eff: { health: -2 } },
    { stages: ['pup', 'juv'], w: 2, need: 'shallow', text: '冬天，头顶的冰盖慢慢合拢。你在冰下的冷水里游，偶尔有一个海豹的影子从上面掠过。', eff: { safety: -3 } },
    { stages: ['juv', 'subad'], w: 2, need: 'shallow', text: '夏天，冰裂开了缝。你在缝隙下面吃到了一群鳕鱼，它们挤在一起，你一口一口地吃。', eff: { food: +12 } },
    { stages: ['adult', 'old'], w: 1, need: 'shallow', text: '你游得很靠近冰面。冰上传来人的脚步声，还有雪橇狗的叫声。你没有上去看。' },
    { stages: ['juv'], w: 2, need: 'slope', text: '陆坡的边缘有很多死去的鱼，它们沿着坡慢慢往下沉，一块一块地落到你身边。', eff: { food: +10 } },
    { stages: ['subad', 'adult'], w: 2, act: 'explore', need: 'slope', text: '你沿着陆坡游了很久。水温比你记忆里的低一点，但还够舒服。', eff: { health: +2 } },
    { stages: ['adult'], w: 1, need: 'slope', text: '一艘科学考察船在上方放下了一根很长的缆绳。你游过去看了看，又游开了。' },
    { stages: ['juv', 'subad'], w: 2, need: 'abyss', text: '这里没有光。你只能靠水压和震动感知周围，很慢地游，几天吃不到一口东西。', eff: { food: -8 } },
    { stages: ['adult', 'old'], w: 2, act: 'rest', need: 'abyss', text: '你停在海底的淤泥边上，身上落满了海雪。你很久都没有动。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, act: 'forage', need: 'abyss', text: '一具沉下来的鲸的残骸落在海底。你闻到了它的味道，游了很久，才吃到一口。', eff: { food: +20 } },
    { stages: ['juv'], w: 2, need: 'quiet', text: '这片海域很久没有船来过。你跟在一只受伤的海豹后面，吃到了它掉下来的肉。', eff: { food: +10 } },
    { stages: ['subad', 'adult'], w: 2, need: 'quiet', text: '海水里很安静，只有水流的声音。你在这里生活了很多年，没有遇见过一次渔网。', eff: { safety: +3 } },
    { stages: ['adult'], w: 1, need: 'quiet', text: '远处偶尔有一艘船从海面上驶过，螺旋桨的震动在水里慢慢散开。', eff: { safety: +2 } },
    { stages: ['juv', 'subad'], w: 3, need: 'trawled', text: '一张底拖网从你的上方拖过去，网口带起的泥沙把整个水层染成了浑浊的黄色。你紧贴着海底躲开了它。', eff: { safety: -5 } },
    { stages: ['subad', 'adult'], w: 2, act: 'hide', need: 'trawled', text: '拖网的声音在海底来回地响。你钻进泥里，等了几天才敢出来。', eff: { food: -5, safety: +5 } },
    { stages: ['adult'], w: 1, need: 'trawled', text: '一条拖网的网线断在海底，一头缠着一条死鱼。你闻到了鱼的味道，游过去，又被网线挂住了一下。', eff: { health: -5 } },
    { stages: ['juv', 'subad'], w: 2, need: 'longline', text: '一根延绳钓的线从上面垂下来，上面挂着一排鱼饵。你咬住了一个钩子，线被拉紧，你扭着身子挣脱了。', eff: { health: -5, food: +5 } },
    { stages: ['subad', 'adult', 'old'], w: 2, act: 'forage', need: 'longline', text: '钩子上挂着一条半死的鲑鱼。你一口咬下去，嘴里多了一根钢丝。', eff: { food: +15, health: -3 } },
    { stages: ['adult'], w: 1, need: 'longline', text: '延绳钓的浮标在水面上一排排地排开。你绕着它们游，没有靠近。', eff: { safety: +2 } },
    { stages: ['pup'], w: 2, need: 'bold', text: '你第一个离开幼鲨群，朝着一团微弱的亮光游了过去，撞上了一块漂浮的冰。', eff: { health: -3 } },
    { stages: ['pup', 'juv'], w: 2, need: 'cautious', text: '你贴着海底停了很久。直到一个大鲨鱼的影子从上面滑过去，你才动了一下。', eff: { safety: +5 } },
    { stages: ['juv', 'subad'], w: 1, act: 'explore', need: 'curious', text: '你游进了一个从没去过的深坑。坑底有一块冰冷的石头，上面爬满了白色的海绵。', eff: { food: +3 } },
    { stages: ['pup'], w: 1, need: 'runt', text: '你是这一胎里最小的一条。别的幼鲨先吃到了鱼，你只能在它们吃剩的骨头旁边等。', eff: { food: -8 } },
    { stages: ['subad', 'adult'], w: 1, need: 'robust', text: '你的身体比同龄的鲨鱼厚实。一次和别的鲨鱼争夺鲸的残骸时，你用身体把对方挤开了。', eff: { food: +10 } },
  ],

  opening: {
    title: '沉到哪一层',
    body: '母亲生下你们之后就游走了，没有留下任何东西。你刚刚离开母体，身边的水又黑又冷。头顶的浅水里，有小鱼，也有更大的影子。',
    options: [
      { t: '沉到海底，贴着软泥待着', hint: '安全↑ 食物少', eff: { food: -5, safety: 12 }, risk: 0.7, riskDays: 365,
        result: '你贴着海底的软泥，身体几乎不动。头顶的光越来越远，只剩下一片冷水。' },
      { t: '朝峡湾的浅处游，找小鱼', hint: '饱食↑ 大型捕食者↑', eff: { food: 15, safety: -5 }, risk: 1.5, riskDays: 365,
        result: '你朝着浅水游去，沿途吃到了几条小鱼。那里也有更大的影子，在你身边一闪而过。' },
    ],
  },

  actions: {
    forage: { name: '沿着海底巡游', desc: '沿着海底慢慢地游，嗅到腐肉或鱼的味道，就顺着找过去。', stages: ['pup','juv','subad','adult','old'], text: ['你贴着海底慢慢地游，鼻子嗅着水流。', '一股腐肉的味道从前面飘过来，你顺着它找过去。', '你张嘴吞下一条小鱼，又在软泥里找到了第二条。'] },
    hide: { name: '沉进海底软泥', desc: '沉到海底，把身体埋进软泥里，只露出眼睛。', text: ['你沉到海底，身体埋进软泥里。', '头顶的影子慢慢游过去了。', '软泥里很冷，细小的沉积物从鳃上滑过。'] },
    rest: { name: '停在水里不动', desc: '停在水里不动，让身体随水流慢慢漂着，几乎不耗力。', text: ['你停在水里，身体随着水流慢慢漂着。', '你的心跳很慢，慢到几乎感觉不到。', '不知道过了多久，你动了一下。'] },
    explore: { name: '游向新的水层', desc: '离开熟悉的水层，游向更远或更浅的地方。', stages: ['juv','subad','adult','old'], text: ['你游向一片从没去过的水层。水温降了一点。', '你碰到一块大浮冰的底面，冰下有一点光。', '你沿着陆坡往下游，身后的光很快就灭了。'] },
    mate: { name: '在深水里找同类', desc: '在深水里遇到同类，靠近，然后产下幼鲨。', done: '你产下了 {n} 条幼鲨，然后游开了。' },
  },
  brood: [6, 12],
  decisions: [
    {
      id: 'fjord', at: 200,
      title: '浅还是深',
      body: '峡湾浅处食物多，但有更大的鲨鱼和海豹出没。陆坡深处又冷又黑，几乎什么都没有。',
      options: [
        { t: '留在浅处觅食', hint: '饱食↑ 风险↑', eff: { food: +20 }, risk: 1.5, riskDays: 365, result: '你在峡湾里待了下来。' },
        { t: '沉到深处', hint: '更安全 · 更饿', eff: { food: -10, safety: +15 }, risk: 0.7, riskDays: 365, result: '你一直沉到了一千多米深的地方。' },
      ],
    },
    {
      id: 'longline', at: 365 * 40,
      title: '一块不动的肉',
      body: '海底有一串挂在绳子上的鱼饵，味道很浓。是渔民在钓格陵兰大比目鱼。',
      fact: '格陵兰睡鲨是北大西洋延绳钓和底拖网中常见的误捕物种（NAFO 2020）',
      options: [
        { t: '去吃', hint: '饱食↑ · 可能被钩住', kill: 0.3, cause: 'bycatch', eff: { food: +25 }, result: '你绕开鱼钩，咬下了半块鱼饵。' },
        { t: '不理它', hint: '继续慢慢找', eff: { food: -5 }, result: '你游开了。' },
      ],
    },
    {
      id: 'migrate', at: 365 * 100,
      title: '海水在变暖',
      body: '你常去的水层变暖了，那些鱼也不再来。往北边更冷的海去，要游上好几年。',
      options: [
        { t: '往北迁移', hint: '路远 · 食物可能更多', eff: { food: -15, safety: +5 }, risk: 1.2, riskDays: 365 * 5, set: 'north', result: '你花了几年，游到了更冷的水里。' },
        { t: '留下', hint: '熟悉的地方 · 食物少', eff: { food: -10 }, risk: 1.1, riskDays: 365 * 20, result: '你留了下来，吃得比以前少。' },
      ],
    },
    {
      id: 'carcass', at: 365 * 200,
      title: '一具巨大的尸体',
      body: '一头弓头鲸的尸体沉到了海底。周围已经聚了好几条同类，有的比你还大。',
      options: [
        { t: '挤进去吃', hint: '饱食↑↑ 受伤风险', eff: { food: +45, health: -10 }, risk: 1.3, riskDays: 365, result: '你被咬了一口，但吃得很饱，够你撑很久。' },
        { t: '等它们吃完', hint: '安全 · 剩下的不多', eff: { food: +15 }, result: '你等了几天，吃了剩下的部分。' },
      ],
    },
    {
      id: 'ice_edge', at: 365 * 20,
      title: '冰底下的光',
      body: '海冰的底面长着一层薄薄的藻类，光从冰缝里漏下来。那里有一些小鱼，但冰下的水更冷，也更暗。',
      options: [
        { t: '沿着冰缘游', hint: '食物↑ 风险↑',
          eff: { food: +10, safety: -3 }, risk: 1.2, riskDays: 365 * 2,
          result: '你沿着冰缘游了几年，吃了不少小鱼。' },
        { t: '沉到深水', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 365 * 5,
          result: '你沉到深水，光越来越远，只剩一片黑。' },
      ],
    },
    {
      id: 'trawl_track', at: 365 * 120,
      title: '海底的拖痕',
      body: '海底有一道长长的沟，是拖网犁过留下的痕迹。沟里有散落的鱼和碎肉。你可以沿着它找吃的，也可以绕开。',
      options: [
        { t: '沿着拖痕找吃的', hint: '食物↑↑ 被网兜住风险↑',
          eff: { food: +20 }, kill: 0.1, cause: 'trawl',
          result: '你吃到了几条被拖散的鱼。远处的拖网从上方经过，没有碰到你。' },
        { t: '绕开拖痕', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +5 },
          result: '你绕过那道沟，往另一边游去。' },
      ],
    },
    {
      id: 'dim_eye', at: 365 * 250,
      title: '看不清的眼睛',
      body: '你的眼睛看东西越来越模糊，寄生虫还附在上面。你可以靠气味找腐肉，也可以沉到更深的地方，少动一些。',
      options: [
        { t: '靠嗅觉找腐肉', hint: '食物↑ 健康↓',
          eff: { food: +20, health: -3 },
          result: '你顺着味道找到一具腐烂的鱼，吃得很慢。' },
        { t: '沉到更深的地方', hint: '安全↑ 食物↓',
          eff: { food: -10, safety: +10 },
          result: '你沉到了更深的水里。那里没有光，也没有腐肉。' },
      ],
    },
    {
      id: 'wound', at: 365 * 300,
      title: '一道旧伤',
      body: '很多年前的一道伤口一直没有愈合，边缘发白。你可以贴着冷水层慢慢养伤，也可以继续追着鲸的残骸去吃。',
      options: [
        { t: '贴着冷水层养伤', hint: '健康↑ 食物↓',
          eff: { health: +10, food: -10 },
          result: '你在冷水里待了很久，伤口慢慢结了一层薄膜。' },
        { t: '去吃鲸的残骸', hint: '食物↑↑ 感染风险↑',
          eff: { food: +20 }, kill: 0.05, cause: 'disease',
          result: '你咬下一大块肉，伤口却隐隐发热。' },
      ],
    },
    {
      id: 'old_hunt', at: 365 * 400,
      title: '冰下的鳕鱼群',
      body: '一群北极鳕从冰下游过，数量很多。你已经很慢了。你可以追上去，也可以躺在海底，等它们游近。',
      options: [
        { t: '追上去', hint: '食物↑ 体力↓',
          eff: { food: +15, health: -5 }, risk: 1.1, riskDays: 365 * 2,
          result: '你追上了几条，吃了个饱。之后很久，你都游得很慢。' },
        { t: '躺在海底等', hint: '食物↓ 体力↑',
          eff: { food: -10, health: +3 },
          result: '你躺在海底等着。大部分鳕鱼已经游远了。' },
      ],
    },
    {
      id: 'old_shallow', at: 365 * 470,
      title: '浅水的光',
      body: '你很老了。浅水里有很多鱼，也有很多渔船的声音。你可以沿着陆坡游到浅水，也可以留在海底安静地待着。',
      options: [
        { t: '游向浅水', hint: '食物↑ 被误捕风险↑',
          eff: { food: +15, safety: -10 }, kill: 0.06, cause: 'bycatch',
          result: '你游到了浅水，吃了几条鱼。远处有一根延绳钓的绳子在水里摇。' },
        { t: '留在海底', hint: '安全↑ 食物↓',
          eff: { food: -10, health: +5 },
          result: '你留在海底，慢慢地不动。' },
      ],
    },
    {
      id: 'abyss_carcass', at: 365 * 80, need: 'abyss',
      title: '海底的鲸骨',
      body: '你在海底的淤泥里找到一具沉下来的鲸的残骸。油脂还没有完全腐烂，但周围有好几条大鲨鱼也在往这边游。',
      options: [
        { t: '和它们一起抢', hint: '食物↑↑ · 被咬死的风险',
          kill: 0.04, cause: 'eaten', eff: { food: +25 },
          result: '你咬住一大块油脂，身边的鲨鱼也咬了上来。你们在黑暗里互相撞了好几次。' },
        { t: '等它们吃完，再去吃剩下的', hint: '安全 · 食物少',
          eff: { food: +8, safety: +3 }, risk: 0.9, riskDays: 30,
          result: '你等了几天，等它们都游走了，才去啃剩下的骨头和碎肉。' },
      ],
    },
    {
      id: 'trawl_nets', at: 365 * 90, need: 'trawled',
      title: '拖网的声音',
      body: '拖网船的引擎声一天比一天近。你在海底的泥里看到一片被犁开的痕迹，上面还挂着一条断掉的网线。',
      options: [
        { t: '离开拖网船的航线，往深水走', hint: '安全↑ 食物↓',
          eff: { food: -8, safety: +8 }, risk: 0.9, riskDays: 365,
          result: '你往深处游去，拖网的声音在你的头顶慢慢远了。' },
        { t: '跟在拖网后面，吃掉漏下来的鱼', hint: '食物↑↑ · 被网缠住的风险',
          kill: 0.1, cause: 'trawl', eff: { food: +20 },
          result: '你吃了一口网后面掉下来的鱼。网线滑过你的背，你挣脱了，身上多了一道血痕。' },
      ],
    },
  ],

  idle: [
    '你在黑暗里慢慢地游。',
    '水温 1°C。一年就这样过去了。',
    '海雪从上方缓缓落下。',
    '你很久没见过同类了。',
    '头顶的冰盖在冬天合拢，又在夏天裂开。',
    '一年里有好几个月，你一口东西都没吃。',
    '你的心跳很慢。',
    '远处有鲸在唱歌，声音在冷水里传得很远。',
  ],

  epitaph: '你出生那年活在地面上的人，没有一个看到你死去。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'termite',
  name: '白蚁',
  en: 'Formosan subterranean termite (worker)',
  sci: '台湾乳白蚁 Coptotermes formosanus（工蚁）',
  emoji: '🪳',
  scene: 'house',
  kind: 'wild',
  tagline: '一座老房子的木头里，可能住着几百万个不育的工作者',

  birth: {
    rolls: [
      { label: '出生巢', options: [
        ['一截被白蚁啃空的老松木里', 4, { food: +10 }],
        ['一座老房子的承重梁后面', 3, { food: +5, risk: 1.1 }],
        ['一棵老榕树根系周围的巢', 2, { food: +15 }],
      ]},
      { label: '蚁巢的年纪', options: [
        ['一座已经活了二十多年的老巢，蚁后还在产卵', 3, { food: +5, set: 'old_queen' }],
        ['一座刚分群出来不久的年轻巢', 2, { safety: -5, set: 'young_colony' }],
        ['一座蚁后刚死、正在补充新蚁后的巢', 1, { health: -5, set: 'queen_loss' }],
      ]},
      { label: '木料', options: [
        ['一根埋在地下、被水泡过的老枕木', 2, { food: +10, set: 'buried_sleeper' }],
        ['一根湿透的老松木', 3, { food: +10, set: 'wet_pine' }],
        ['一扇门框，木头干透了', 2, { health: -5, set: 'dry_frame' }],
        ['一块压在混凝土底下的旧木板', 1, { safety: +5, set: 'concrete_board' }],
      ]},
    ],
    siblings: 300,
    siblingsLabel: '同一批卵',
    intro: '你是一只工蚁，从{出生巢}的一枚卵里孵出，体长约四毫米，白色，没有眼睛。你一生都不会繁殖。同一批卵共有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',   name: '卵',         from: 0,   unit: 'day'  },
    { id: 'juv',   name: '若工（幼工）', from: 30,  unit: 'week' },
    { id: 'adult', name: '成年工蚁',    from: 120, unit: 'week' },
    { id: 'old',   name: '老年工蚁',    from: 540, unit: 'week' },
  ],
  maturity: 120,
  maxAge: 720,

  survival: [[0,1],[30,0.7],[60,0.5],[120,0.35],[240,0.2],[400,0.08],[540,0.02],[720,0]],
  survivalNote: '野外工白蚁的寿命数据很少；实验室里工蚁通常能活数月到一两年，此曲线按巢内寿命与天敌压力粗估',

  init: { health: 75, food: 55, safety: 55 },
  foodDrain: 3,

  actions: {
    forage:  { name: '外出觅食', desc: '沿着泥管爬到埋在地下的木料旁，咬下纤维素带回巢里。', text: ['你沿着泥管往外爬。', '你咬下一小块木屑，咬得很慢。', '木头的纤维被你切碎，带回了巢里。'] },
    hide:    { name: '退进深处', desc: '躲到巢最里面的育儿室，等外面安静下来。', text: ['你退进了巢的深处。', '外面的声音被泥墙挡住了。'] },
    rest:    { name: '静静待着', desc: '在潮湿的蛀道里原地不动，减少消耗。', text: ['你趴在湿的泥墙上，一动不动。'] },
    explore: { name: '探索旧蛀道', desc: '沿着没有泥管保护的旧路往外摸索，寻找新的木料。', stages: ['adult'], text: ['你从一条旧蛀道的缝隙里钻了出去。'] },
    mate:    false,
  },

  causes: [
    { id: 'ant', escape: true, w: 5, stages: ['juv','adult','old'], short: '被蚂蚁拖出巢外',
      text: '一队蚂蚁沿着蛀道冲了进来。你还没转身，腿已经被咬住，被拖向洞口。' },
    { id: 'fungus', escape: false, w: 3, stages: ['juv','adult','old'], short: '被绿僵菌感染',
      text: '一根菌丝从你的关节缝里钻了进去。几天后，你的体内长满了白色的孢子柄。' },
    { id: 'bait', escape: false, w: 4, stages: ['juv','adult','old'], short: '吃下诱饵里的药剂',
      text: '那块木头闻起来像食物。你咬下一口，把它带回巢里，分给了同伴。几次蜕皮之后，你的新表皮再也长不硬了。' },
    { id: 'air', escape: false, w: 3, short: '蛀道被打开，干燥空气涌了进来',
      text: '有人在墙里挖开了一条蛀道。外面的空气很干，你们在几分钟内失去了大部分水分。' },
    { id: 'egg_mould', escape: false, w: 6, stages: ['egg'], short: '卵被霉菌包住',
      text: '潮湿的巢里长出了一小团白霉。它先包住了身边的几粒卵，然后是你。' },
    { id: 'old', w: 0, short: '衰老',
      text: '你肠道里的共生鞭毛虫越来越少，消化纤维素越来越慢。最后一天，你停在一块木屑上，没有再动。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵在育儿室里。工蚁每隔一阵就会舔一舔它们，把表面的霉菌清掉。' },
    { stages: ['egg'], w: 1, once: true, text: '你从卵壳里挣了出来。身边的同伴正在用触角一下一下地碰你。' },
    { stages: ['juv'], w: 3, text: '工蚁把咬碎的木屑和消化液混在一起，喂给你。这是巢内的“反刍食物”。', eff: { food: +10 } },
    { stages: ['juv'], w: 2, text: '你蜕了第一次皮。新表皮还是软的，颜色比别人浅。', eff: { health: +3 } },
    { stages: ['juv'], w: 1, once: true, text: '你被分到了搬运木屑的工作。你的工作，是把巢里的废料搬去墓地。' },
    { stages: ['juv','adult'], w: 1, text: '一只蟑螂从蛀道旁边爬过，震动把巢壁抖下一小块泥。', eff: { safety: -5 } },
    { act: 'forage', stages: ['adult'], w: 4, text: '你从巢里出发，沿着泥管爬向一根埋在地下的木桩。泥管外面很暗，很干。', eff: { food: +15, safety: -5 } },
    { act: 'forage', stages: ['adult'], w: 2, text: '你咬下一块松软的木头，把纤维素带回了巢里。', eff: { food: +20 } },
    { act: 'explore', stages: ['adult'], w: 2, text: '你在一条新蛀道的尽头碰到了一截潮湿的木头。木头里有一股奇怪的甜味。', eff: { food: +25, safety: -5 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '一根塑料管挡住了去路。你和同伴只能掉头，沿着原路把新的泥管补上。', eff: { safety: +3 } },
    { act: 'hide', stages: ['adult','old'], w: 2, text: '你退进巢的深处。外面的蚂蚁还在咬，巢里湿度很高，安静得只剩下同伴身上的摩擦声。', eff: { safety: +15, food: -10 } },
    { act: 'rest', stages: ['adult','old'], w: 1, text: '你趴在育儿室的墙上，和同伴一起用头部轻轻地碰触。', eff: { health: +5 } },
    { stages: ['adult','old'], w: 2, text: '一队蚂蚁沿着蛀道的边缘侦察。它们的触角在泥壁上一下一下地敲。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 1, text: '下了一场大雨。地下的水位升了上来，巢里的湿度达到了最高。', eff: { health: +5, safety: +3 } },
    { stages: ['adult','old'], w: 1, text: '一个干燥的星期。巢壁开始变硬，你们把泥管加厚了一层。', eff: { food: -5, health: -5 } },
    { stages: ['adult'], w: 1, once: true, text: '一群长着翅膀的繁殖蚁从旁边的巢里飞了出去。它们不会回到这里，你也不会再见到它们。' },
    { stages: ['adult'], w: 1, text: '一只兵蚁用大颚堵住了一个被咬开的口子。它的头很大，前额上冒着一层白色的分泌物。', eff: { safety: +10 } },
    { stages: ['adult','old'], w: 1, text: '你肠道里的鞭毛虫和细菌把木头里的纤维素分解成糖，你才能吸收它。', eff: { food: +5 },
      fact: '白蚁能消化木材纤维素，依靠的是肠道里的共生原生动物和细菌（Cleveland 1926）' },
    { stages: ['adult'], w: 1, text: '一只蚂蚁入侵了巢的入口。你们用泥土把入口堵了起来，堵的时候你的腿上沾满了湿泥。', eff: { safety: +8, food: -5 } },
    { stages: ['old'], w: 2, text: '你的动作慢了一拍。你不再外出，只待在巢里的一角，负责照顾年幼的同伴。', eff: { food: -5 } },
    { stages: ['old'], w: 1, text: '一个老同伴死在了巢里。工蚁把它的尸体一点点搬走，埋进了墓地的泥里。' },
    { act: 'forage', stages: ['adult'], w: 2, text: '一条被雨水泡软的木缝里露出一小段细嫩的根皮。你们一层一层地把它啃开。', eff: { food: +15 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '你钻进一条通往隔壁木桩的旧蛀道。那里没有泥管，光线从裂缝里透了进来。', eff: { food: +10, safety: -10 } },
    { act: 'hide', stages: ['juv'], w: 1, text: '你躲进一堆木屑下面。外面的震动越来越近，然后慢慢远去。', eff: { safety: +10 } },
    { act: 'rest', stages: ['adult'], w: 1, text: '吃饱之后，你停在一条很窄的蛀道里，静静地等。', eff: { health: +4 } },
    { need: 'old_queen', stages: ['juv'], w: 3, text: '你靠近巢心。那里有一只蚁后，她的腹部大得几乎不能动。工蚁们每天都在给她喂食。', eff: { food: +3, safety: +5 } },
    { need: 'old_queen', stages: ['adult'], w: 2, text: '巢的隧道一直在扩张。你的工作很繁重，每天都要修补一条新的蛀道。', eff: { health: -5, food: +5 } },
    { need: 'young_colony', stages: ['juv', 'adult'], w: 3, text: '巢还很小，工蚁的数量不多。你们没有足够的力气把木头里的每一个空隙都堵上。', eff: { safety: -8 } },
    { need: 'young_colony', stages: ['adult'], w: 2, text: '这座巢刚建起来不久，木屑还很新鲜。你们吃得很快，木头的香味也更浓。', eff: { food: +8 } },
    { need: 'queen_loss', stages: ['juv'], w: 3, text: '巢里的气味变了。工蚁们走来走去，没人照料幼虫。你在混乱里被推到了另一条隧道。', eff: { health: -8 } },
    { need: 'queen_loss', stages: ['adult', 'old'], w: 2, text: '巢里有一只新的补充蚁后正在被照看。你们都在等她长大。', eff: { safety: +5 } },
    { need: 'wet_pine', stages: ['juv'], w: 3, text: '你在湿木里挖隧道，每一口都带着水的凉气。木屑很软，很快就被搬走了。', eff: { food: +8, health: -3 } },
    { need: 'wet_pine', stages: ['adult'], w: 2, text: '木头发霉了，霉味很重。肠道里共生的原生动物在分解纤维，你觉得身体很沉。', eff: { health: -5, food: +6 } },
    { need: 'buried_sleeper', stages: ['adult', 'old'], w: 3, text: '这根枕木埋在地下，周围的土又湿又凉。你们从地面一直挖进木头，隧道里全是泥。', eff: { food: +10, safety: -3 } },
    { need: 'buried_sleeper', stages: ['juv'], w: 2, text: '木头里的泥水漫进了隧道。你们被迫堵住一条通道，转向另一边。', eff: { health: -5 } },
    { need: 'dry_frame', stages: ['juv', 'adult'], w: 3, text: '木头干透了，只能慢慢地挖。每天吃到的东西都很少。', eff: { food: -8 } },
    { need: 'dry_frame', stages: ['adult', 'old'], w: 2, text: '门框上的油漆有一股刺鼻的味道。你们绕开油漆，从旁边的木缝钻了进去。', eff: { safety: +5, food: -4 } },
    { need: 'concrete_board', stages: ['juv', 'adult'], w: 3, text: '你们在混凝土下面挖了一条隧道。木板压在上面，光照不进来，周围安静得过分。', eff: { safety: +10 } },
    { need: 'concrete_board', stages: ['adult', 'old'], w: 2, text: '一根水管从上面渗水，隧道里出现了一层湿泥。你们一起把它堵住了。', eff: { health: +3, safety: -3 } },
    { need: 'bold', stages: ['adult'], w: 2, act: 'explore', text: '你离开熟悉的隧道，朝一段没有被蛀过的木头走去。路上的木屑很硬，上颚磨得发酸。', eff: { food: +10, health: -3 } },
    { need: 'cautious', stages: ['juv', 'adult', 'old'], w: 2, act: 'hide', text: '一只蚂蚁从隧道口探进来。你们立刻堵住了口子，直到它退走。', eff: { safety: +6 } },
    { need: 'runt', stages: ['juv'], w: 3, text: '你比同龄的若工小，只能在隧道边缘干活。大个的工蚁把木屑都搬走了，你捡到的很少。', eff: { food: -6 } },
  ],

  opening: {
    title: '母后在巢心产下一批卵',
    body: '你还没有孵化。母后在一座成熟的白蚁巢中央产下了卵，工蚁会把它们一颗一颗搬进不同的育儿室。巢心温暖湿润，靠近木料的外层则有食物，却也离蚂蚁和干燥的空气更近。',
    options: [
      { t: '留在巢心的育儿室', hint: '安全↑ 食物少',
        eff: { food: -5, safety: +15 }, risk: 0.8, riskDays: 30,
        result: '你在一间湿润的育儿室里孵出来，身边是数百枚同样大小的卵。' },
      { t: '被搬去靠近木料的外层蛀道', hint: '饱食↑ 风险↑',
        eff: { food: +15 }, risk: 1.4, riskDays: 30,
        result: '你在靠近木料的一条蛀道里孵出来。这里的木屑很多，但离入口也很近。' },
    ],
  },

  decisions: [
    {
      id: 'mud_tube', at: 45,
      title: '泥管被踩坏了',
      body: '巢外的一段泥管被人踩裂了，外面的空气正在慢慢往里渗。你和同伴必须决定怎么办。',
      options: [
        { t: '立即修补泥管', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 5,
          result: '你们用唾液和泥土一起涂抹，把裂缝慢慢封上。' },
        { t: '绕到另一条管道', hint: '风险↑',
          eff: { food: +5 }, risk: 1.2, riskDays: 2,
          result: '你沿着另一条绕远的泥管爬了过去。路上很长，外面很暗。' },
      ],
    },
    {
      id: 'wet_wood', at: 150, when: { food: '<60' },
      title: '一根湿木头',
      body: '巢的外围有一根埋在地下的湿木头，里面的纤维素很多。去那里要穿过一段没有泥管保护的地面。',
      options: [
        { t: '出去觅食', hint: '饱食↑↑ 风险↑',
          eff: { food: +30 }, risk: 1.5, riskDays: 5,
          result: '你在木头上啃了一整天。回来的路上，你闻到了蚂蚁的气味。' },
        { t: '守在巢里', hint: '安全 · 饿',
          eff: { food: +5, safety: +5 }, risk: 0.8, riskDays: 5,
          result: '你留在巢里，把别人带回来的木屑咬碎，慢慢吃。' },
      ],
    },
    {
      id: 'ant_line', at: 240,
      title: '蚂蚁在入口集结',
      body: '一排蚂蚁正在巢的入口附近集结。它们的大颚很长，你们的前额上只有一层薄薄的分泌物。',
      options: [
        { t: '把入口用泥土封死', hint: '安全↑↑ 食物↓',
          eff: { safety: +10, food: -10 }, risk: 0.6, riskDays: 10,
          result: '你们一层一层地把泥堆上去。入口堵住之后，外面的声音突然小了很多。' },
        { t: '派工蚁出去挡住', hint: '危险↑↑',
          kill: 0.5, cause: 'ant', eff: { safety: -10 },
          result: '你冲了出去。蚂蚁先咬住了你的足，接着是触角。' },
      ],
    },
    {
      id: 'bait_station', at: 300, need: '!sick',
      title: '一块被涂了甜味的木板',
      body: '一块木板放在墙角，上面涂着一层甜味的东西。工蚁已经有几只路过它，它们咬下的木屑正在被带回巢里。',
      options: [
        { t: '咬下一口，带回巢里', hint: '饱食↑↑ 致死风险↑',
          eff: { food: +40 }, kill: 0.25, cause: 'bait', set: 'sick',
          result: '你把它带回了巢里，分给了同伴。你感觉味道很好，但没过几天，你的表皮就开始发软。' },
        { t: '绕开它', hint: '饿一点',
          eff: { food: -5, safety: +5 }, result: '你绕开了那块木板。但有几只同伴吃下去了，它们很快就不再动了。' },
      ],
    },
    {
      id: 'crack', at: 420, when: { health: '<60' },
      title: '泥壳裂开了',
      body: '外层泥壳被晒出了一条长长的裂缝。冷空气从缝里灌了进来，巢里的湿度开始下降。',
      options: [
        { t: '沿着潮湿的地下通道撤到深处', hint: '安全↑ 食物↓',
          eff: { safety: +15, food: -15 }, risk: 0.7, riskDays: 10,
          result: '你沿着深处的通道往下爬，裂缝被甩在身后。' },
        { t: '留在裂缝旁修补', hint: '风险↑ 饱食↑',
          eff: { food: +5 }, risk: 1.3, riskDays: 5,
          result: '你们用唾液和泥土把缝隙补上，干燥的空气被挡在了外面。' },
      ],
    },
    {
      id: 'roof_fall', at: 560, stage: 'old',
      title: '老巢的外墙塌了一角',
      body: '雨水把老巢外墙的一角冲垮了。外面露出了一片没有泥管保护的木头。',
      options: [
        { t: '去修补外墙', hint: '食物↑ 风险↑',
          eff: { food: +5 }, risk: 1.4, riskDays: 6,
          result: '你爬到外墙上，用泥把缺口一点一点地填平。风从身边吹过。' },
        { t: '退到最里面的房间', hint: '安全↑',
          eff: { safety: +10, food: -10 }, risk: 0.7, riskDays: 20,
          result: '你退进最里面的房间，外面的声音一点一点消失了。' },
      ],
    },
    {
      id: 'colony_split', at: 200, need: 'young_colony',
      title: '一群有翅的繁殖蚁',
      body: '雨季快到了，巢里的有翅繁殖蚁已经聚在一起，等着飞出去。工蚁要决定是陪它们穿过木屑，还是留下来加固隧道。',
      options: [
        { t: '护送繁殖蚁出巢', hint: '安全↓ 食物↓', eff: { safety: -5, food: -5 }, risk: 1.2, riskDays: 5,
          result: '你和同伴们护送着一群有翅的繁殖蚁，穿过木屑到达地面。许多在起飞前就被鸟吃掉了。' },
        { t: '留在巢里加固隧道', hint: '安全↑ 食物↓', eff: { safety: +8, food: -5 }, risk: 0.8, riskDays: 10,
          result: '你留在巢里，和同伴一起把隧道的裂缝一一堵上。' },
      ],
    },
    {
      id: 'buried_choice', at: 180, need: 'buried_sleeper',
      title: '地下的水线',
      body: '枕木的湿木在往下吸水，隧道下方已经能摸到一层凉湿的泥。你可以继续往湿木里挖，也可以往上回到干燥的木芯。',
      options: [
        { t: '继续往湿木里挖', hint: '饱食↑ 风险↑', eff: { food: +12 }, risk: 1.3, riskDays: 8,
          result: '你们挖进湿木深处，木头很软，吃得很快，但隧道随时可能塌。' },
        { t: '往上回到干燥的木芯', hint: '安全↑ 食物↓', eff: { safety: +5, food: -6 }, risk: 0.8, riskDays: 8,
          result: '你们往上挖了一截，回到干燥的木芯里。那里吃的东西比较少。' },
      ],
    },
    {
      id: 'termite_curious', at: 260, need: 'curious',
      title: '一缕从裂缝漏进来的光',
      body: '一缕细细的光从木头的裂缝里漏进来。它很亮，外面的空气也跟着涌进隧道。',
      options: [
        { t: '顺着光的方向挖', hint: '风险↑', eff: { food: -3 }, risk: 1.4, riskDays: 4,
          result: '你的隧道一下子碰到了那道裂缝。外面的干燥空气冲了进来。' },
        { t: '把隧道转向别处', hint: '稳妥', eff: {},
          result: '你把隧道转向了别处，那一缕光很快就消失在木头后面。' },
      ],
    },
  ],

  idle: [
    '你在黑暗的蛀道里，凭着触角上的气味找路。',
    '巢里很湿，墙壁上有一层薄薄的水汽。',
    '你没有眼睛，光对你来说是危险的。',
    '同伴的触角在你身上一下一下地摸过。',
    '远处的地板有轻微的震动，你们都停了下来，等待，然后继续工作。',
    '木屑被一口一口地咬碎，咬碎的声音很轻。',
    '你们的消化液和木屑混在一起，变成了可以喂给别人的食物。',
    '外面的光照进了一条细缝，你们很快就把它堵上了。',
  ],

  epitaph: '你是一只不育的工蚁，一生都在为巢里的繁殖者服务。你的身体，最后也成了巢的一部分。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'earthworm',
  name: '蚯蚓',
  en: 'Earthworm (Lumbricus terrestris)',
  sci: '陆正蚓 Lumbricus terrestris',
  emoji: '🪱',
  scene: 'soil',
  kind: 'wild',
  tagline: '达尔文一生都在研究它们，并为此写了一本书',

  birth: {
    sex: [['雌雄同体', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一片腐叶层下面的卵茧', 4, { food: +10 }],
        ['一块菜地耕作层里的卵茧', 3, { risk: 1.2 }],
        ['林下湿润的腐殖质层里的卵茧', 2, { food: +15 }],
      ]},
      { label: '年景', options: [
        ['暖湿的一年，春夏雨水足', 4, { food: +10, set: 'wetyear' }],
        ['干旱的一年，夏天几乎没有雨', 3, { health: -5, risk: 1.3, set: 'drought' }],
        ['冻土年，冬天地面冻了很久', 2, { food: -5, risk: 1.2, set: 'frozen' }],
      ]},
      { label: '种类', options: [
        ['陆正蚓的卵茧，埋在草地下的老洞里', 5, { safety: +5, set: 'deep' }],
        ['赤子爱胜蚓的卵茧，产在堆肥堆里', 2, { food: +20, risk: 1.2, set: 'compost' }],
        ['牛粪堆边缘的卵茧', 2, { food: +15, risk: 1.1, set: 'dung' }],
      ]},
    ],
    siblings: 2,
    siblingsLabel: '同一个卵茧',
    intro: '你从{出生地}的一枚卵茧里孵出，身长不到一厘米，透明，没有眼睛。你是{sex}。同一个卵茧里一共有 {siblings} 条。',
  },

  stages: [
    { id: 'egg',   name: '卵茧',   from: 0,    unit: 'week'  },
    { id: 'juv',   name: '幼蚓',   from: 60,   unit: 'month' },
    { id: 'adult', name: '成蚓',   from: 540,  unit: 'week'  },
    { id: 'old',   name: '老蚓',   from: 1200, unit: 'month' },
  ],
  maturity: 540,
  maxAge: 1460,

  survival: [[0,1],[60,0.6],[120,0.5],[200,0.4],[365,0.25],[540,0.15],[730,0.08],[1000,0.03],[1200,0.01],[1460,0]],
  survivalNote: '野外蚯蚓的寿命数据很少；实验室里成蚓可以活数年。此曲线按鸟类、鼹鼠、干旱和积水压力粗估',

  init: { health: 70, food: 55, safety: 55 },
  foodDrain: 3,

  causes: [
    { id: 'bird', escape: true, w: 5, stages: ['juv','adult','old'], short: '被乌鸫叼出洞口',
      text: '雨后的草地上，一只乌鸫跳到了你身边。它用喙一拉，你就被从土里拔了出来。你还在往回缩，但已经太晚了。' },
    { id: 'mole', escape: false, w: 3, stages: ['juv','adult','old'], short: '被鼹鼠从地下咬住',
      text: '土层突然震动起来。一只鼹鼠的前爪抓住了你，把你拖进它的隧道里。' },
    { id: 'drown', escape: false, w: 3, short: '洞穴被雨水灌满',
      text: '一场暴雨之后，洞穴被灌满了水。你的呼吸没有了空气，你在黑暗里慢慢不再动了。' },
    { id: 'dry', escape: false, w: 4, short: '土壤干透，身体脱水',
      text: '连续二十多天没有下雨，洞壁变硬了。你挤在洞底，水分一点点从身体里蒸发出去。' },
    { id: 'plough', escape: false, w: 2, stages: ['juv','adult','old'], short: '被犁刀切断',
      text: '拖拉机经过，犁刀把整片土翻了过来。你被切成两段，前半截还在扭动。' },
    { id: 'pesticide', escape: false, w: 2, stages: ['adult','old'], short: '农药渗进土里',
      text: '农田里喷了药，药随着雨水渗进了土层。你在洞里不停地分泌黏液，最后停了下来。' },
    { id: 'egg_fail', escape: false, w: 4, stages: ['egg'], short: '卵茧在土里裂开',
      text: '卵茧在土里放了太久，外壳变脆，裂开了一道缝。你还没来得及长大，里面的水分就流光了。' },
    { id: 'old', w: 0, short: '衰老',
      text: '你的环节一节一节地变硬，身体越来越轻。最后一天，你静静地卧在洞底，没有再动。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵茧在土里慢慢变硬。里面的你，身体一节一节地分了出来。' },
    { stages: ['egg'], w: 1, once: true, text: '你从卵茧的一端挣了出来。外面的土比你想象的湿。' },
    { stages: ['juv'], w: 3, text: '你在腐叶层里吃到一片半烂的叶子。土粒混在里面，你把它们一起吞了下去。', eff: { food: +10 } },
    { stages: ['juv','adult'], w: 2, text: '你把土从前端吃进去，从后端排出来。排出来的一小团，就是蚓粪。' },
    { act: 'forage', stages: ['juv'], w: 2, text: '你把一片烂叶卷进洞里，慢慢地在里面消化。', eff: { food: +10 } },
    { act: 'forage', stages: ['juv','adult'], w: 4, text: '你把一片落叶拖进洞口，用尾端顶着，一点一点地拖到洞底。然后你慢慢吃。', eff: { food: +20 } },
    { act: 'forage', stages: ['adult'], w: 2, text: '你在落叶堆下面摸到一条烂根，吃了很久。', eff: { food: +15 } },
    { act: 'explore', stages: ['adult'], w: 2, text: '夜里下了雨。你爬出洞口，在湿漉漉的草地上慢慢前行，寻找新的食物。', eff: { food: +8, safety: -10 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '你爬过一片石子路。干燥的表面让你的身体失去了不少水分。', eff: { health: -5 } },
    { act: 'hide', stages: ['adult'], w: 2, text: '你缩回洞底，用身体的环节堵住洞口。外面的脚步声一下一下地踩过地面。', eff: { safety: +15, food: -5 } },
    { act: 'hide', stages: ['juv'], w: 1, text: '你钻进更深的土层。那里的温度比地表稳定得多。', eff: { safety: +8 } },
    { act: 'rest', stages: ['adult'], w: 1, text: '你蜷在一条暖和的洞里，几乎不动。', eff: { health: +5 } },
    { act: 'rest', stages: ['old'], w: 1, text: '你躺在洞底，动作很慢。外面的热量传不到这么深的地方。', eff: { health: +3 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你和一条同伴头对头地贴在一起，互相把精子送进对方的储精囊。' },
    { stages: ['adult','old'], w: 1, text: '雨后，一只乌鸫在草地上跳来跳去，眼睛一直盯着地面。', eff: { safety: -10 } },
    { stages: ['juv','adult'], w: 1, text: '连续几天太阳很大，洞壁开始干了，你挤在洞底，一动不动。', eff: { health: -5 } },
    { stages: ['juv','adult','old'], w: 1, text: '土层里有一阵细微的震动。一只鼹鼠正从你的隧道旁边穿过。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 1, text: '远处传来拖拉机的声音，地面一直在震动。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, once: true, text: '达尔文在书里写道，蚯蚓能把大量土壤搬到地表，把石头和旧砖也埋进土里。',
      fact: '达尔文（Darwin 1881）《腐殖土的形成与蚯蚓的作用》' },
    { stages: ['old'], w: 2, text: '你的环节越来越硬，你很久没有再排出蚓粪了。', eff: { food: -5 } },
    { stages: ['old'], w: 1, once: true, text: '你的洞穴已经住了很多年。前任们的通道在你身下交错，有的已经塌了。' },
    { need: 'wetyear', stages: ['juv','adult'], w: 3, text: '春夏的雨一直没有停。地表的落叶又湿又软，你在洞口附近吃了很多烂叶。', eff: { food: +10 } },
    { need: 'wetyear', stages: ['adult'], w: 2, text: '雨水把洞口灌满了。你沿着侧壁一点点往上爬，才没有被闷在水里。', eff: { safety: -5 } },
    { need: 'drought', stages: ['juv','adult'], w: 3, text: '整个夏天几乎没有下雨。洞壁一天比一天硬，你挤在洞底，身体慢慢变干。', eff: { health: -8 } },
    { need: 'drought', stages: ['adult','old'], w: 2, text: '地表的草都枯黄了。你在干硬的落叶下面找到一点潮湿的东西，吃了很久。', eff: { food: +8 } },
    { need: 'frozen', stages: ['juv','adult','old'], w: 3, text: '冬天的地面冻了很久。洞口外面结了一层硬壳，你只能在冻土线以上缓慢地挪动。', eff: { health: -5 } },
    { need: 'frozen', stages: ['adult'], w: 1, once: true, text: '春天第一场雨融化了地表的冻土。你从冻住的洞里爬出来，身体还有些僵硬。', eff: { health: +5 } },
    { need: 'deep', stages: ['juv','adult'], w: 2, text: '你沿着一条垂直的老洞往下挖。洞壁很结实，是前面几代蚯蚓留下的。', eff: { safety: +5 } },
    { need: 'deep', stages: ['adult','old'], w: 2, act: 'forage', text: '夜里你伸出洞口，用尾端抓住一片落叶，再把它拖进洞底。', eff: { food: +10 } },
    { need: 'compost', stages: ['juv'], w: 3, text: '料堆里很热，烂菜叶和牛粪的味道很浓。你吃得很快，身体长得也快。', eff: { food: +15 } },
    { need: 'compost', stages: ['adult'], w: 1, text: '料堆被翻了一次，你被铲子带着抛到半空，又落回了湿的料里。', eff: { health: -8 } },
    { need: 'dung', stages: ['juv','adult'], w: 2, text: '牛粪的表面结了一层硬壳，你只能从边缘钻进去。里面又暖又湿。', eff: { food: +10 } },
    { need: 'dung', stages: ['adult','old'], w: 1, text: '一场大雨冲坏了牛粪堆，你被水冲到草地上。你扭动着钻回了土里。', eff: { safety: -10 } },
    { need: 'bold', stages: ['juv','adult'], w: 2, text: '你比同窝的其他蚓更早地探出洞口。地面传来的震动让你停了一下，然后又继续往前。', eff: { food: +5, safety: -3 } },
    { need: 'cautious', stages: ['adult'], w: 2, text: '你每次都在洞口停一会儿，把身体缩回去，再伸出来。几次之后，附近的脚步声就过去了。', eff: { safety: +8 } },
    { need: 'curious', stages: ['juv','adult'], w: 1, text: '你钻进了一条新的侧洞，那里的土有一股甜味。你一直往前，直到碰到一根白色的细根。', eff: { food: +8 } },
    { need: 'runt', stages: ['juv','adult'], w: 2, text: '你比同窝的几条都小。挤在洞口的时候，你总是被挤到最后，只能吃到别人剩下的落叶碎片。', eff: { food: -5 } },
    { need: 'robust', stages: ['adult','old'], w: 2, text: '你的环节又粗又壮。一次被鼹鼠拖向隧道深处时，你用身体把洞壁顶住，它没能把你拉出去。', eff: { safety: +8 } },
  ],

  opening: {
    title: '母蚓在埋卵茧',
    body: '你还没有出生。母蚓在一块湿润的腐叶层里产下了卵茧，外壳很硬，里面有一两条幼蚓。卵茧埋在哪里，由母蚓来决定。',
    options: [
      { t: '埋在地表的腐叶下面', hint: '食物多 · 鸟会翻找', eff: { food: +10 }, risk: 1.3, riskDays: 30,
        result: '卵茧埋在腐叶下面。雨水很快就把它泡湿了。' },
      { t: '埋到十几厘米深的湿土里', hint: '更安全 · 食物少', eff: { food: -10, safety: +15 }, risk: 0.75, riskDays: 30,
        result: '卵茧被埋在湿土深处。周围很暗，也很安静。' },
    ],
  },

  actions: {
    forage:  { name: '拖叶进洞', desc: '把落叶拖进洞口，在洞里慢慢吃。', text: ['你把一片落叶拖进了洞口。', '你用身体的环节把它压住。', '土和叶子在你身体里混在了一起。'] },
    hide:    { name: '缩进洞底', desc: '退到洞穴最深处，用身体堵住洞口。', text: ['你缩回了洞底。', '外面的声音被土层挡住了。'] },
    rest:    { name: '蜷着不动', desc: '待在洞里，减少水分流失。', text: ['你蜷在洞里，一动不动。'] },
    explore: { name: '爬上地表', desc: '夜里爬出洞口，沿着草地移动，寻找食物和同伴。', text: ['你从洞口爬了出来。', '草叶上的水滴让你的身体变得湿滑。'] },
    mate:    { name: '交配', done: '你和同伴交换了精子。几天后，你的环带开始分泌卵茧的外壳。' },
  },

  decisions: [
    {
      id: 'rain_out', at: 200, stage: 'juv',
      title: '雨后的夜晚',
      body: '雨停了，地面上到处都是同类在爬。远处有乌鸫在叫，空气里的湿度正在变化。',
      options: [
        { t: '爬出地面', hint: '食物↑ 风险↑↑',
          eff: { food: +8 }, risk: 1.7, riskDays: 1,
          result: '你爬出洞口，在湿草间走了很久。回来的时候，身上多了一道新鲜的伤痕。' },
        { t: '待在洞里', hint: '安全',
          eff: { safety: +8 }, risk: 0.8, riskDays: 1,
          result: '你在洞底听着雨声，直到天亮。' },
      ],
    },
    {
      id: 'dry_spell', at: 400, when: { health: '<60' },
      title: '连续几周没有下雨',
      body: '地表干得裂开了缝，落叶也失去了水分。你可以往深处钻，也可以留在表层找一点吃的。',
      options: [
        { t: '往深处钻', hint: '安全↑ 食物↓',
          eff: { food: -10, safety: +10 }, risk: 0.7, riskDays: 20,
          result: '你一直向下，直到土变得潮湿。周围一片黑暗。' },
        { t: '留在表层吃落叶', hint: '饱食↑ 风险↑',
          eff: { food: +10 }, risk: 1.4, riskDays: 10,
          result: '你在干硬的落叶堆下找到了一些还没有烂透的东西。' },
      ],
    },
    {
      id: 'mate_offer', at: 600, stage: 'adult',
      title: '隔壁洞口的同伴',
      body: '一条同伴从隔壁的洞口滑了过来。你能感觉到它身上的黏液。',
      options: [
        { t: '交换精子', hint: '后代↑ 风险↑',
          eff: { offspring: [30, 80] }, risk: 1.1, riskDays: 5,
          result: '你们头对头地贴在一起，直到身体分开。之后几天，你的环带开始分泌卵茧。' },
        { t: '让它离开', hint: '保持现状',
          eff: {}, result: '它沿着土缝滑走了。你回到洞底，继续吃你的落叶。' },
      ],
    },
    {
      id: 'tillage', at: 800, stage: 'adult',
      title: '拖拉机来了',
      body: '农田要翻耕了，地面在震动。犁刀会切断浅层的洞穴。你可以钻到更深的地方，也可以留在洞口，等着。',
      options: [
        { t: '钻到更深的一层', hint: '安全↑ 食物↓',
          eff: { food: -5 }, risk: 0.6, riskDays: 10,
          result: '你沿着垂直的洞穴往下爬，震动在你身上慢慢变弱了。' },
        { t: '留在浅层', hint: '饱食↑ 风险↑↑',
          eff: { food: +10 }, risk: 1.6, riskDays: 3,
          result: '犁刀从你的头顶经过。土被翻了个面，你被半埋在潮湿的泥里。' },
      ],
    },
    {
      id: 'surface_food', at: 850, when: { food: '<50' },
      title: '夜里的草地',
      body: '你饿了。草地上的落叶很多，但乌鸫也在草地上跳来跳去。',
      options: [
        { t: '爬出去吃', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +20 }, risk: 1.6, riskDays: 2,
          result: '你吃了很久。远处有什么东西在草叶间动了一下。' },
        { t: '守着洞口的落叶', hint: '稳妥 · 食物少',
          eff: { food: +5 }, risk: 0.9, riskDays: 2,
          result: '你把洞口的落叶一点点拖进来，慢慢吃。' },
      ],
    },
    {
      id: 'frost', at: 1100, stage: 'old',
      title: '冬天来了',
      body: '土层的表面开始结冰。冻土线正在一天天往下移。',
      options: [
        { t: '钻到冻土线以下', hint: '安全↑↑ 食物↓',
          eff: { food: -15, safety: +10 }, risk: 0.7, riskDays: 60,
          result: '你钻到了冻土线以下。地面上的冷风传不到这里。' },
        { t: '留在近地表', hint: '饱食↑ 风险↑',
          eff: { food: +5 }, risk: 1.3, riskDays: 30,
          result: '你在洞口附近蜷着，等着地表的温度回升。' },
      ],
    },
    {
      id: 'drought_summer', at: 300, need: 'drought',
      title: '夏天没有雨',
      body: '地表的落叶干成了一层脆壳，洞壁变硬了。你可以沿着老根往深处挖，也可以等夜里的露水。',
      options: [
        { t: '沿着老根往深处挖', hint: '安全↑ 食物↓',
          eff: { food: -5, safety: +5 }, risk: 0.8, riskDays: 15,
          result: '你沿着一根死去的草根往下挖。土里的湿气一点点回来了。' },
        { t: '夜里爬出去找露水', hint: '饱食↑ 风险↑',
          eff: { food: +10, health: +5 }, risk: 1.5, riskDays: 3,
          result: '你在草根下找到了几滴露水。回洞的路上，身上多了几道干裂的伤口。' },
      ],
    },
    {
      id: 'frozen_ground', at: 320, need: 'frozen',
      title: '冻土还没有化开',
      body: '地面硬得像一块石头，冻土线压在你的洞口上方。你可以往冻土线以下挖，也可以守着边缘那一层半冻的落叶。',
      options: [
        { t: '往冻土线以下挖', hint: '安全↑ 食物↓',
          eff: { food: -10, safety: +5 }, risk: 0.7, riskDays: 30,
          result: '你一直往下挖，身下的土还是温的。上面的冷风传不下来。' },
        { t: '守着半冻的落叶', hint: '饱食↑ 风险↑',
          eff: { food: +10 }, risk: 1.4, riskDays: 10,
          result: '落叶半冻半软。你扯下了几口，就没有力气再吃了。' },
      ],
    },
    {
      id: 'compost_heat', at: 240, need: 'compost',
      title: '料堆在发热',
      body: '你住的料堆被发酵的热量烘得很暖，烂菜叶堆得很厚。可是料堆中心的空气越来越少，湿度也在变。',
      options: [
        { t: '留在热的料堆里', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, risk: 1.5, riskDays: 10,
          result: '你在热料里吃了很久，身体慢慢变得沉甸甸的。' },
        { t: '爬到料堆边缘', hint: '稳妥 · 食物少',
          eff: { food: +3 }, risk: 0.8, riskDays: 10,
          result: '边缘的料凉一些，也干一些。你慢慢地吃，不敢走远。' },
      ],
    },
    {
      id: 'bold_night', at: 650, need: 'bold',
      title: '露水很重的夜',
      body: '草叶上挂满了露水，草地亮晶晶的。你的身体里有一种东西，不肯一直待在洞里。',
      options: [
        { t: '爬出去看一看', hint: '食物↑ 风险↑↑',
          eff: { food: +10 }, risk: 1.5, riskDays: 2,
          result: '你爬过了好几片草叶。回洞的时候，一道鸟的影子从你头顶掠过。' },
        { t: '忍住，留在洞里', hint: '安全',
          eff: { safety: +5 }, risk: 0.9, riskDays: 2,
          result: '你贴着洞壁，直到露水干了，才慢慢往下缩。' },
      ],
    },
  ],

  idle: [
    '你在湿润的土粒之间慢慢地向前挤。',
    '土很暗，也很安静。你没有眼睛，只能感觉到光线的变化。',
    '你身体的每一节都在蠕动，把土往前推。',
    '一粒小石子被你从洞壁上挤了出来，掉进了洞底。',
    '远处的草根在土里慢慢地伸展。',
    '雨水渗进了土层，空气变少了，你往上挪了一点。',
    '你吃下去的土，在身体里慢慢变成了蚓粪。',
    '地面上的脚步声一下一下地过去了。',
  ],

  epitaph: '你是一条蚯蚓。很多年以后，你身体里的土，会被下一代蚯蚓再吃一遍。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'spider',
  name: '蜘蛛',
  en: 'Orb-weaver spider (Araneus ventricosus)',
  sci: '大腹园蛛 Araneus ventricosus',
  emoji: '🕸️',
  scene: 'grass',
  kind: 'wild',
  tagline: '田埂边的草丛间，常有一张大大的圆网，网中央坐着一只肚子鼓鼓的雌蛛',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一丛芒草叶尖下面的卵囊', 3, { food: +5 }],
        ['果园里一棵梨树的枝间', 3, { food: +10 }],
        ['田埂边一截竹竿上的卵囊', 2, { risk: 1.1 }],
      ]},
      { label: '这一年的年景', options: [
        ['湿润多雨的一年，夏天蚊虫很多', 3, { food: +10, set: 'wetyear' }],
        ['干旱的一年，草丛提前发黄', 2, { food: -10, health: -5, risk: 1.2, set: 'drought' }],
        ['暖冬，卵囊几乎没有受冻', 2, { risk: 0.85, set: 'warmwinter' }],
      ]},
      { label: '母蛛的体况', options: [
        ['吃饱了的母蛛，卵囊又大又饱满', 3, { food: +5, set: 'wellfed' }],
        ['饿了很久的母蛛，卵囊小而瘪', 2, { food: -5, health: -5, risk: 1.15, set: 'hungrymom' }],
        ['母蛛在死前结好了卵囊，它的体内曾有寄生蜂的幼虫', 1, { health: -5, risk: 1.3, set: 'parasitized' }],
      ]},
    ],
    siblings: 300,
    siblingsLabel: '同一个卵囊',
    intro: '你在{出生地}的卵囊里度过了一个冬天。你是{sex}。同一个卵囊里有 {siblings} 粒卵。',
  },

  stages: [
    { id: 'egg',   name: '卵囊',   from: 0,   unit: 'week' },
    { id: 'juv',   name: '幼蛛',   from: 180, unit: 'day'  },
    { id: 'adult', name: '成蛛',   from: 240, unit: 'day'  },
    { id: 'old',   name: '老蛛',   from: 330, unit: 'day'  },
  ],
  maturity: 240,
  maxAge: 365,

  survival: [[0,1],[180,0.85],[200,0.5],[220,0.2],[240,0.12],[270,0.07],[300,0.03],[330,0.01],[365,0]],
  survivalNote: '野外园蛛的存活数据很少；卵囊越冬期间的死亡率、幼蛛扩散时的死亡率和成蛛期的捕食压力都很高，此曲线粗估',

  init: { health: 70, food: 55, safety: 50 },
  foodDrain: 3,

  actions: {
    forage:  { name: '守网等食', desc: '待在网的中央，等飞虫撞进来。', text: ['你守在网的中央。', '网上的丝一根一根地绷着。'] },
    hide:    { name: '躲到叶背', desc: '离开网，躲到叶子背面，把自己压扁。', text: ['你躲到了叶子的背面。', '风从叶子上面吹过去。'] },
    rest:    { name: '静止不动', desc: '待在网上不动，只让丝线随着风轻轻晃动。', text: ['你在网上一动不动。'] },
    explore: { name: '放丝飘走', desc: '抬起腹部放出一根细丝，乘风离开草丛。', stages: ['juv'], text: ['你抬起腹部，放出一根细丝。', '风把你带离了草丛。'] },
    mate:    { name: '求偶', done: '你们交配了。精子被存进了雌蛛的储精器官里，之后的卵会用它来受精。' },
  },

  causes: [
    { id: 'wasp', escape: true, w: 3, stages: ['juv','adult','old'], short: '被狩猎蜂麻醉后拖走',
      text: '一只黑色的狩猎蜂从网下面冲了上来。它的毒针刺进了你的神经节，你的腿慢慢失去了力气。它把你拖进了一个土洞，留给它的幼虫做食物。' },
    { id: 'bird', escape: true, w: 4, stages: ['juv','adult','old'], short: '被鸟啄走',
      text: '一只白头鹎停在网边。它的喙一下子啄断了你身边的丝。你还没松开，就已经被叼走了。' },
    { id: 'cannibal', escape: true, w: 3, stages: ['adult'], short: '交配之后被对方吃掉',
      text: '交配刚刚结束，雌蛛的螯肢就咬了上来。你想躲开，但你的腿还缠在对方的丝上。' },
    { id: 'starve', escape: false, w: 3, short: '饿死',
      text: '连续好几周没有飞虫落进网里。你的腹部一点一点地瘪了下去。' },
    { id: 'cold', escape: false, w: 3, stages: ['egg','juv'], short: '卵囊在寒流里冻死',
      text: '卵囊挂在外面，冬天的一场寒流把卵囊里的水冻住了。你没能撑到春天。' },
    { id: 'fungus', escape: false, w: 1, stages: ['adult','old'], short: '被白僵菌感染',
      text: '你的关节上长出了白色的菌丝。几天后，它们已经钻进了你的内脏。' },
    { id: 'old', w: 0, short: '衰老',
      text: '你的网越织越小，你每天晚上织的网都在变稀。最后一个秋天，你停在网中央，不再动了。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵囊里，卵一粒一粒地分裂。外面的冬天很冷，卵囊的丝却很暖和。' },
    { stages: ['egg'], w: 1, text: '卵囊挂在树枝上，风一阵一阵地吹过来，把它轻轻地摇晃。', eff: { safety: -5 } },
    { stages: ['juv'], w: 1, once: true, text: '春天，你从卵囊里爬了出来。你的腹部只有米粒大小，身上缠着一层细丝。' },
    { act: 'explore', stages: ['juv'], w: 3, text: '你爬到草尖上，抬起腹部放出一根细丝。风一吹，你就离开了地面。', eff: { safety: -5 } },
    { act: 'explore', stages: ['juv'], w: 2, text: '一阵风把你吹进了一片陌生的草地。你挂在丝上，在空中转了好几圈。', eff: { food: +5, safety: -5 } },
    { stages: ['juv'], w: 2, text: '你在草茎之间爬行，靠腹部的丝一点一点地向上攀。' },
    { act: 'forage', stages: ['juv'], w: 2, text: '一只小蚜虫落进了你的网。你把它缠住，吃掉了。', eff: { food: +8 } },
    { act: 'forage', stages: ['adult'], w: 4, text: '你守在网的中央。一只蚊子撞了进来，网猛地一抖，你立刻冲了过去。', eff: { food: +20 } },
    { act: 'forage', stages: ['adult'], w: 2, text: '一只小飞虫被你的丝粘住。你用螯肢把它固定，然后注入消化液。', eff: { food: +15 } },
    { act: 'hide', stages: ['adult'], w: 2, text: '你躲到一片叶子的背面，用身体把自己压平。', eff: { safety: +15, food: -5 } },
    { act: 'hide', stages: ['juv'], w: 1, text: '你躲进一片卷起来的叶子里。外面的风声变小了。', eff: { safety: +10 } },
    { act: 'rest', stages: ['adult'], w: 1, text: '你在网中央不动，只让丝线随着风轻轻地晃。', eff: { health: +5 } },
    { act: 'rest', stages: ['old'], w: 1, text: '你停在网的边缘，整个白天都不动。', eff: { health: +3 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '你小心地靠近对方，用前腿在网上敲出一种有节奏的振动。' },
    { stages: ['adult'], w: 1, text: '一只白头鹎从树上飞过，影子在你的网上闪了一下。', eff: { safety: -10 } },
    { stages: ['adult'], w: 1, text: '一只狩猎蜂在草丛间嗡嗡地飞。它在你的网外绕了好几圈。', eff: { safety: -10 } },
    { stages: ['juv','adult'], w: 1, text: '下雨了。雨滴把网上的丝压得发白。你收起了一部分网，等雨停。', eff: { food: -5, health: -3 } },
    { stages: ['adult'], w: 1, text: '天气转凉。网上结了露水，丝线变得更黏了。', eff: { food: +5 } },
    { stages: ['adult'], w: 1, once: true, text: '你开始结卵囊。一团黄色的丝，把卵一层一层裹在里面。里面有 {n} 粒卵。', eff: { offspring: [150, 300] } },
    { stages: ['adult'], w: 1, once: true, text: '这张网的螺旋丝是黏的，直线的牵引丝不黏。你可以在不黏的丝上走来走去，而不会被自己的网粘住。',
      fact: '圆网蛛的螺旋捕食丝带有黏性，放射状的框架丝不黏（Foelix 2011，《Biology of Spiders》）' },
    { stages: ['old'], w: 2, text: '你的网越来越小。你每天能抓到的猎物也少了很多。', eff: { food: -5 } },
    { stages: ['old'], w: 1, text: '晚上，你没有织新网。你在旧网的边缘停了很久。' },
    { stages: ['adult','old'], w: 1, once: true, text: '一只雌蛛在你附近吃掉了一只雄蛛。这在园蛛里并不少见。',
      fact: '许多蛛类的雌性在交配时或交配后会吃掉雄性，即“性同类相食”（Elgar & Crespi 1992，《Cannibalism: Ecology and Evolution among Diverse Taxa》）' },
    { stages: ['adult'], w: 1, need: 'wetyear', text: '雨水把草丛泡得发软。地面上蚂蚁和小蜘蛛多了很多，你的网边缘常有爬过的小虫。', eff: { food: +5, safety: -3 } },
    { act: 'forage', stages: ['adult'], w: 3, need: 'wetyear', text: '那年夏天雨下个不停，网上一天能撞进十几只蚊子。你的腹部很快就鼓了起来。', eff: { food: [10, 18] } },
    { stages: ['juv'], w: 2, need: 'wetyear', text: '潮湿的春天，草茎上到处是蚜虫和小飞虫。你刚从卵囊里爬出来，就能在草尖上找到吃的。', eff: { food: +8 } },
    { stages: ['juv','adult'], w: 2, need: 'drought', text: '整个夏天没有下过像样的雨。草叶发黄卷起，你的网上很少有飞虫经过。', eff: { food: -10, health: -3 } },
    { act: 'rest', stages: ['adult','old'], w: 2, need: 'drought', text: '空气干燥，你停在网中央不动，身体里的水分一点一点地少下去。', eff: { health: -4 } },
    { stages: ['adult'], w: 1, need: 'drought', text: '一场久违的雨落下来。你从叶背里爬出来，在雨后的草茎间重新织了一张小网。', eff: { health: +8, food: +5 } },
    { stages: ['egg'], w: 2, need: 'warmwinter', text: '这个冬天很暖和，卵囊里的卵没有被冻住。卵一粒一粒地分裂，比往年快了一些。', eff: { health: +3 } },
    { stages: ['juv'], w: 2, need: 'warmwinter', text: '春天来得早。你从卵囊里爬出来的时候，草叶上已经有了很多小虫。', eff: { food: +8 } },
    { stages: ['adult'], w: 1, need: 'warmwinter', text: '这一年的秋天来得很晚，你的网一直挂到了天冷才收。', eff: { food: +5 } },
    { stages: ['egg'], w: 2, need: 'wellfed', text: '卵囊又厚又饱满。卵在里面挤在一起，每一粒都有足够的卵黄。', eff: { health: +5 } },
    { stages: ['juv'], w: 2, need: 'wellfed', text: '你从卵囊里爬出来时比同批的幼蛛重一些。你在草茎间攀爬，风很难把你吹下来。', eff: { health: +5, safety: +3 } },
    { act: 'forage', stages: ['juv','adult'], w: 1, need: 'wellfed', text: '你的网比别人的密一些。第一只飞虫撞上来的时候，丝没有断。', eff: { food: +8 } },
    { stages: ['egg'], w: 2, need: 'hungrymom', text: '卵囊又小又瘪。卵在里面分裂得慢，你比同批的卵晚了几天才开始发育。', eff: { health: -5 } },
    { stages: ['juv'], w: 2, need: 'hungrymom', text: '你比别的幼蛛瘦小，在草茎间爬了很久，才找到一根能放丝的地方。', eff: { food: -8 } },
    { act: 'forage', stages: ['adult'], w: 1, need: 'hungrymom', text: '你第一次结的网很稀，一天只抓到一只小飞虫。', eff: { food: +5 } },
    { stages: ['egg'], w: 2, need: 'parasitized', text: '母蛛的网还挂在草茎上，已经干了。卵囊的丝上有一股很淡的、说不清的气味。', eff: { safety: -5 } },
    { stages: ['juv'], w: 2, need: 'parasitized', text: '你爬出卵囊的那天，一只寄生蜂的幼虫在草茎下面扭动。它没有碰你，但在附近待了很久。', eff: { safety: -10 } },
    { act: 'hide', stages: ['juv','adult'], w: 1, need: 'parasitized', text: '你躲进一片卷起的叶子里，把自己压平。那只寄生蜂飞走了。', eff: { safety: +8 } },
    { act: 'explore', stages: ['juv'], w: 2, need: 'bold', text: '你第一个放丝飞出草丛。别的幼蛛还在草尖上犹豫，你已经飘到了田埂的另一边。', eff: { food: +5, safety: -5 } },
    { act: 'hide', stages: ['juv','adult'], w: 2, need: 'cautious', text: '你在叶背躲了整整一天，直到确定上面没有鸟的影子，才爬出来。', eff: { safety: +5, food: -3 } },
    { stages: ['juv','adult'], w: 2, need: 'curious', text: '你沿着草茎爬到网外，摸索一片陌生的叶子。叶边挂着一串露水，你在上面待了很久。', eff: { food: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'runt', text: '你比别的蛛小一圈。别的蛛能拉出一张宽网，你只能把网挂在一小片草茎之间。', eff: { food: -5 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '你的腿比同龄的蛛长，网可以拉得很宽。一只蚊子撞进来，你只用一条腿就把它固定住了。', eff: { food: +8 } },
  ],

  opening: {
    title: '母蛛在秋天结了一个卵囊',
    body: '你还没有出生。母蛛在一根草茎或树枝上结了一个卵囊，里面的卵要在里面越冬，直到春天才会孵化。卵囊挂在哪里，由母蛛决定。',
    options: [
      { t: '挂在靠近草堆的树枝下', hint: '隐蔽↑ 食物少',
        eff: { food: -5, safety: +15 }, risk: 0.8, riskDays: 30,
        result: '卵囊挂在草堆旁边的枝条下。冬天的风被挡住了一些。' },
      { t: '挂在暴露的叶尖上', hint: '食物↑ 风险↑',
        eff: { food: +5 }, risk: 1.3, riskDays: 30,
        result: '卵囊挂在叶尖上。风一吹，它就在枝头摇摇晃晃。' },
    ],
  },

  decisions: [
    {
      id: 'balloon', at: 190, stage: 'juv',
      title: '一根细丝',
      body: '你爬上了草尖，腹部后方的丝已经拉成了一根。风从东边吹来，草丛在它面前倒伏下去。',
      fact: '许多蜘蛛的幼体会靠放出的丝飘浮在空中迁移，这叫做“飞行”或“气球扩散”（Bell 等 2005）',
      options: [
        { t: '放丝，乘风离开', hint: '扩散↑ 风险↑',
          eff: { safety: +5 }, risk: 1.4, riskDays: 3,
          result: '你飘了几十米，落在一片荒草上。草叶很高，你的网还没有位置。' },
        { t: '留在原地，等更好的风', hint: '稳妥',
          eff: { food: +3 }, risk: 0.8, riskDays: 3,
          result: '你收回了丝，爬回草茎中间。风一直在吹，但你没有走。' },
      ],
    },
    {
      id: 'wasp_near', at: 230,
      title: '狩猎蜂在附近',
      body: '一只狩猎蜂在附近的草丛里飞来飞去。它的翅膀发出嗡嗡的声音。',
      options: [
        { t: '爬到叶背躲藏', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 }, risk: 0.7, riskDays: 3,
          result: '你在叶子背面待了很久。狩猎蜂在网外绕了几圈，又飞走了。' },
        { t: '继续在网上等猎物', hint: '饱食↑ 风险↑',
          eff: { food: +10 }, risk: 1.6, riskDays: 3,
          result: '你仍然在网上等着。一只飞虫撞了进来，但你的网也因此剧烈地晃动。' },
      ],
    },
    {
      id: 'web_site', at: 250, stage: 'adult',
      title: '新的网位',
      body: '你需要找一个新的网位。两根草之间有一道很好的空隙，但它靠近小路，经常有人走过。',
      options: [
        { t: '在路边织网', hint: '食物↑↑ 风险↑',
          eff: { food: +20 }, risk: 1.4, riskDays: 5,
          result: '你在路边织了一张网。每天都有飞虫从眼前经过，也有脚步声从网下踩过。' },
        { t: '在草丛深处织网', hint: '安全 · 食物少',
          eff: { food: +5 }, risk: 0.8, riskDays: 5,
          result: '你在草丛深处织了一张小网。飞虫很少，但很安静。' },
      ],
    },
    {
      id: 'male_approach', at: 265, need: 'male',
      title: '一张雌蛛的网',
      body: '你爬到了一张大网旁边。网的中央，一只雌蛛正在等待。它的螯肢比你大很多。',
      options: [
        { t: '轻轻敲动网，靠近交配', hint: '后代↑ 致死风险↑↑',
          kill: 0.25, cause: 'cannibal', risk: 1.8, riskDays: 2,
          result: '你们交配了。交配之后，对方的螯肢在你离开之前就咬了下来。' },
        { t: '离开，去找别的网', hint: '安全',
          eff: {}, result: '你爬下网，去了另一株草。' },
      ],
    },
    {
      id: 'female_choice', at: 265, need: 'female',
      title: '一只雄蛛靠近了',
      body: '一只雄蛛在网边轻敲了好几次。它的身体比你小很多，它的脚在网上留下了一串细小的振动。',
      options: [
        { t: '接受它，让它交配', hint: '后代↑ 风险↑',
          eff: { offspring: [60, 120] }, risk: 1.3, riskDays: 3,
          result: '它在你身上留下了精子。几天之后，你开始结卵囊。' },
        { t: '把它赶走', hint: '安全',
          eff: { food: +5 }, risk: 0.9, riskDays: 3,
          result: '你把它的腿缠住，又放了出去。它爬走了。' },
      ],
    },
    {
      id: 'last_web', at: 320,
      title: '最后一张网',
      body: '天气越来越冷，网上的丝开始变硬。你要么在网上再等一次猎物，要么躲到叶子下面，等冬天过去。',
      options: [
        { t: '织最后一张网，等猎物', hint: '饱食↑↑ 风险↑',
          eff: { food: +25 }, risk: 1.4, riskDays: 10,
          result: '你织了最后一张网。夜里，你的丝上结了一层霜，但猎物还是来了。' },
        { t: '躲到叶子下，等冬天过去', hint: '安全↑ 饿',
          eff: { food: -10, safety: +10 }, risk: 0.8, riskDays: 30,
          result: '你躲到叶子下面，把身体缩成一团。外面的风从叶子上吹过去。' },
      ],
    },
    {
      id: 'drought_web', at: 255, need: 'drought',
      title: '发黄的草丛',
      body: '草丛已经发黄，网上很久没有飞虫经过。你可以拆掉这张网，去草丛低处找露水多的地方；也可以守在原来的位置，省着体力。',
      options: [
        { t: '去低处的洼地找露水', hint: '饱食↑ 风险↑',
          eff: { food: +10, health: +5 }, risk: 1.2, riskDays: 5,
          result: '洼地里有露水，草也比别处绿。你在一株矮草上重新织了网。' },
        { t: '守在原来的网上', hint: '省体力 · 饿',
          eff: { health: +3, food: -5 }, risk: 0.9, riskDays: 5,
          result: '你一动不动地守着，网上偶尔有小虫撞进来。' },
      ],
    },
    {
      id: 'parasite_mom', at: 215, need: 'parasitized',
      title: '草茎下面的寄生蜂',
      body: '一只寄生蜂的幼虫正顺着草茎往上爬。它爬得很慢，每一步都停一下。',
      options: [
        { t: '爬到更高的叶尖上', hint: '饱食↑ 风险↑',
          eff: { food: +5 }, risk: 1.2, riskDays: 3,
          result: '你爬到了叶尖。那只幼虫停在草茎底下，没有再往上。' },
        { t: '贴着叶背，躲开它', hint: '安全↑ 饿',
          eff: { safety: +10, food: -3 }, risk: 0.8, riskDays: 3,
          result: '你在叶背压平身体，直到它的影子从叶子上离开。' },
      ],
    },
    {
      id: 'bold_hunt', at: 240, need: 'bold',
      title: '狩猎蜂的影子',
      body: '一只狩猎蜂从你的网上方飞过，影子在丝线上晃了一下。它没有看你，但它的飞行路线正对着你。',
      options: [
        { t: '冲下去，抓住它的翅膀', hint: '饱食↑↑ 致死风险↑',
          kill: 0.15, cause: 'wasp', eff: { food: +20 },
          result: '你抓住了它的翅膀。它的毒针在你的腿上刺了一下，你没能松开。' },
        { t: '不动，等它飞走', hint: '安全',
          eff: {}, risk: 0.9, riskDays: 3,
          result: '它绕了一圈，飞进了草丛深处。' },
      ],
    },
    {
      id: 'cautious_web', at: 290, need: 'cautious',
      title: '还没有织大网',
      body: '别的蛛已经开始织大网了，你的网还只有一小圈。天气转凉，飞虫越来越少。',
      options: [
        { t: '现在织一张大网', hint: '饱食↑ 风险↑',
          eff: { food: +15 }, risk: 1.3, riskDays: 10,
          result: '你织了一张很大的网。夜里，露水落下来，压弯了几根丝。' },
        { t: '就用这张小网，省下丝', hint: '稳妥 · 食物少',
          eff: { food: +3, health: +3 }, risk: 0.85, riskDays: 10,
          result: '你没有扩网，而是把旧网补了补，继续等。' },
      ],
    },
  ],

  idle: [
    '你坐在网的中央，一根一根地感觉着丝线上的振动。',
    '天气很好。草叶之间，阳光落在网上，闪闪发亮。',
    '网上粘着一片落叶，你把它拆开，又重新织了一小块。',
    '远处有人从田埂上走过，网轻轻晃了一下。',
    '你有八只眼睛，大多只能分辨明暗。网上的振动才是你最在意的信息。',
    '夜里的温度降了下来，露水落在丝线上。',
    '你的腹部一鼓一瘪，里面是丝腺和消化液。',
    '风从草丛间吹过，整张网都跟着摇晃。',
  ],

  epitaph: '你是草丛里的一张网，也是一只蛛。你织的每一根丝，都在风里慢慢消失。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'housefly',
  name: '家蝇',
  en: 'House fly',
  sci: 'Musca domestica（家蝇）',
  emoji: '🪰',
  scene: 'house',
  kind: 'wild',
  tagline: '夏天的厨房里，一只家蝇从卵到死，大约只用两到三周',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一只没盖盖子的厨房垃圾桶里', 3, { food: +20, risk: 1.2 }],
        ['一堆正在发酵的牛粪上', 3, { food: +15 }],
        ['一块被忘在桌上的剩饭边缘', 2, { food: +10 }],
      ]},
      { label: '出生的季节', options: [
        ['盛夏的一周，粪堆里的温度足以让你很快长大', 3, { food: +5, set: 'summer' }],
        ['春末的温和天气，粪堆慢慢发酵', 2, { food: +8, set: 'spring' }],
        ['初秋，夜里已经凉了，你的发育慢了下来', 2, { health: -5, risk: 1.1, set: 'autumn' }],
      ]},
      { label: '这间屋子的虫害处理', options: [
        ['一家常年喷拟除虫菊酯的农场，你的种群已经有了抗性', 2, { risk: 0.9, set: 'resistant' }],
        ['一间牛棚，几十年没有人喷过杀虫剂', 3, { food: +5, set: 'susceptible' }],
        ['城市厨房里刚投过灭蝇毒饵的角落', 2, { food: +5, risk: 1.2, set: 'baited' }],
      ]},
      { label: '同一块粪堆上的卵数', options: [
        ['同一块粪堆上挤着几百枚卵', 2, { food: -10, risk: 1.1, set: 'crowded' }],
        ['几十枚卵散在粪堆的边缘', 2, { food: +5, set: 'sparse' }],
        ['一小块剩饭上，只有你和另外几枚卵', 1, { food: +12, set: 'alone' }],
      ]},
    ],
    siblings: 120,
    siblingsLabel: '同一批卵',
    intro: '你是一枚卵，产在{出生地}里，细长，白色，不到一毫米。你是{sex}。同一批产下的卵共有 {siblings} 枚。',
  },

  stages: [
    { id: 'egg',   name: '卵',     from: 0,   unit: 'hour' },
    { id: 'larva', name: '幼虫（蛆）', from: 0.5, unit: 'hour' },
    { id: 'pupa',  name: '蛹',     from: 4.5, unit: 'day'  },
    { id: 'adult', name: '成蝇',   from: 9,   unit: 'day'  },
    { id: 'old',   name: '老蝇',   from: 22,  unit: 'day'  },
  ],
  maturity: 11,
  maxAge: 30,

  survival: [[0,1],[0.5,0.9],[4.5,0.7],[9,0.5],[14,0.2],[20,0.06],[25,0.02],[30,0]],
  survivalNote: '野外家蝇的寿命数据很少；实验室里成蝇可活数周。此曲线按夏季温度、拍打和捕食压力粗估',

  init: { health: 70, food: 60, safety: 45 },
  foodDrain: 4,

  actions: {
    forage:  { name: '舔食糖水', desc: '在糖水、剩饭和腐烂的东西上吐出唾液，把它溶开再吸进去。', text: ['你落在一块糖上。', '你吐出唾液，把它溶开。', '你把溶开的食物吸进了口器。'] },
    hide:    { name: '躲到天花板下', desc: '躲到墙角或天花板下面，远离人的活动。', text: ['你躲到了墙角的阴影里。', '下面的人走来走去。'] },
    rest:    { name: '停在墙上', desc: '停在一个平的表面上，一动不动地休息。', text: ['你停在墙上，一动不动。'] },
    explore: { name: '飞来飞去', desc: '在屋子里绕来绕去，寻找新的气味。', stages: ['adult'], text: ['你飞过窗台，又绕回了厨房。', '你闻到了一股熟悉的腐臭味。'] },
    mate:    { name: '交配', done: '雄蝇用前足抓住了你。交配之后，你会把精子存进体内，之后的卵会用它来受精。' },
  },

  causes: [
    { id: 'swat', escape: true, w: 4, stages: ['adult','old'], short: '被苍蝇拍拍死',
      text: '手掌带着风落了下来。你还没来得及起飞，就被拍进了一摊油渍里。' },
    { id: 'spider', escape: true, w: 3, stages: ['adult','old'], short: '撞进蜘蛛网',
      text: '你撞进了窗角的一张网。丝粘在翅膀上，你越挣扎，缠得越紧。一只蜘蛛从暗处慢慢爬了过来。' },
    { id: 'zapper', escape: false, w: 3, stages: ['adult','old'], short: '被灭蝇灯电死',
      text: '蓝色的灯管闪了一下，空气里响起一声短促的噼啪。你的身体停了下来。' },
    { id: 'insecticide', escape: false, w: 3, stages: ['larva','adult','old'], short: '吃下杀虫剂',
      text: '你停在糖水的边缘。那里有一层薄薄的油。几分钟后，你的足不再抓得住东西。' },
    { id: 'nasonia', escape: false, w: 4, stages: ['pupa'], short: '被蛹寄生蜂产卵寄生',
      text: '一只很小的黑色寄生蜂钻进了你的蛹壳。它把卵产在你身上，幼虫会从你的体内慢慢吃起。' },
    { id: 'dry', escape: false, w: 4, stages: ['larva'], short: '粪堆晒干，幼虫脱水',
      text: '粪堆在烈日下干了。你们挤在一起，身体一点一点地失去了水分。' },
    { id: 'old', w: 0, short: '衰老',
      text: '你的翅膀磨出了缺口，飞得越来越低。一天傍晚，你从窗台上掉了下来，没有再爬起来。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '卵一排排地挤在粪堆表面，白色，细长，像一小撮米粒。' },
    { stages: ['egg'], w: 1, once: true, text: '你从卵壳里钻了出来，扭动着身体，钻进了温暖的粪堆。' },
    { stages: ['larva'], w: 3, text: '你在发酵的粪堆里吃着。你的口器只能吸食液体，所以你先吐出唾液，把食物溶开。' },
    { stages: ['larva'], w: 2, text: '粪堆里的温度越来越高。你和同伴一起往深处钻。', eff: { health: -3 } },
    { stages: ['larva'], w: 1, text: '一只金龟子幼虫在旁边的粪堆里挖洞，把粪堆翻得很乱。', eff: { food: -5 } },
    { stages: ['larva'], w: 2, once: true, text: '你停止了进食，身体变得更短、更硬，颜色也开始变深。' },
    { stages: ['pupa'], w: 1, text: '你变成了蛹，外面是一层硬壳。你不再动，只能等。' },
    { stages: ['pupa'], w: 1, text: '在蛹壳里，你的身体一点一点地变成了成蝇的样子。' },
    { act: 'forage', stages: ['adult'], w: 4, text: '你落在厨房的水槽边缘，吐出一点唾液，把一滴糖水溶开后吸进去。', eff: { food: +20 } },
    { act: 'forage', stages: ['adult'], w: 2, text: '一块剩饭的表面有一层薄薄的油。你先走了一圈，然后把它溶开。', eff: { food: +15 } },
    { act: 'forage', stages: ['old'], w: 1, text: '你在一个碟子边缘找到一点残存的糖，吃得很慢。', eff: { food: +8 } },
    { act: 'explore', stages: ['adult'], w: 2, text: '你飞出窗户，在院子里绕了一圈，找到了一堆新的粪。', eff: { food: +10, safety: -10 } },
    { act: 'explore', stages: ['adult'], w: 1, text: '你飞进厨房，被门口的灯光吸引，又撞在玻璃上，只好掉头。', eff: { safety: -5 } },
    { act: 'hide', stages: ['adult'], w: 2, text: '你躲到天花板的角落里，用足紧紧抓着。下面的人走来走去。', eff: { safety: +15, food: -5 } },
    { act: 'hide', stages: ['adult','old'], w: 1, text: '你躲进墙缝里，外面的光照不进来。', eff: { safety: +10 } },
    { act: 'rest', stages: ['adult'], w: 1, text: '你停在窗玻璃上，一动不动。', eff: { health: +4 } },
    { act: 'rest', stages: ['old'], w: 1, text: '你停在一面暖和的墙上，腹部慢慢地晒热了。', eff: { health: +3 } },
    { act: 'mate', stages: ['adult'], w: 2, text: '一只雄蝇追了上来，用前足抓住你的背部。' },
    { stages: ['adult'], w: 2, text: '一只蜘蛛在厨房的墙角织了一张网。你闻到了它的丝的味道。', eff: { safety: -5 } },
    { stages: ['adult'], w: 2, text: '门开了又关，气流把你卷了一圈，又放回原来的位置。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, text: '屋里有人在挥动苍蝇拍。空气被挤得嗡嗡地响。', eff: { safety: -10 } },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你找到一块湿抹布，把腹部伸进去，产下了 {n} 枚卵。', eff: { offspring: [100, 150] } },
    { stages: ['adult'], w: 2, need: 'female', text: '你又找了一个地方产卵，这次只有 {n} 枚。', eff: { offspring: [40, 80] } },
    { stages: ['old'], w: 2, text: '你的翅膀越来越破，飞得越来越低。', eff: { food: -5 } },
    { stages: ['old'], w: 1, text: '晚上，你停在天花板下，不再去找食物。', eff: { health: -3 } },
    { stages: ['adult','old'], w: 1, once: true, text: '这一生只有几周，你却从卵长到了成蝇。',
      fact: '家蝇在温暖的夏季，从卵到成蝇最快约 7–10 天，温度低时需要数周（UF/IFAS IN205）' },
    { stages: ['larva'], w: 2, need: 'summer', text: '粪堆的表面冒着白气。你们在热气里一起吃着，速度快得惊人。', eff: { food: +8 } },
    { stages: ['pupa'], w: 1, need: 'summer', text: '蛹壳里很热。你的变化比别的蛹快了几天。' },
    { stages: ['adult'], w: 1, once: true, need: 'summer', text: '你羽化的那天，窗外的太阳正好照进厨房。', eff: { health: +3 } },
    { stages: ['larva'], w: 2, need: 'spring', text: '粪堆的温度慢慢上来，发酵得很均匀。你吃得稳，身体长得匀。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, need: 'spring', text: '春天的风从窗缝里吹进来，你第一次觉得翅膀上有了力气。', eff: { health: +4 } },
    { stages: ['adult'], w: 1, need: 'spring', text: '天还凉，窗外的其他苍蝇比你晚出来。', eff: { safety: +3 } },
    { stages: ['larva'], w: 2, need: 'autumn', text: '夜里粪堆变凉了，你停下来不动，等温度回升。', eff: { health: -2 } },
    { stages: ['pupa'], w: 2, need: 'autumn', text: '化蛹的时间比夏天长了许多。你在蛹壳里等了很久，才感觉到身体开始变化。', eff: { health: -2 } },
    { stages: ['adult'], w: 1, need: 'autumn', text: '你羽化的时候，外面的风已经凉了。你的翅膀展开得比别人慢。', eff: { health: -3 } },
    { stages: ['adult'], w: 2, need: 'resistant', text: '一阵雾从农场的喷雾器里飘出来。你身边的同伴一只只翻倒在地上，你还在走。', eff: { health: -4 } },
    { stages: ['adult'], w: 2, need: 'resistant', act: 'forage', text: '你在牛粪堆上找到一块糖。雾还没散，你已经把它吃完了。', eff: { food: +15 } },
    { stages: ['adult','old'], w: 1, need: 'resistant', text: '农场的工人换了一种药，你的同类纷纷倒下。你还活着，待在墙角的阴影里。', eff: { safety: +5 } },
    { stages: ['larva'], w: 2, need: 'susceptible', text: '牛棚里的粪堆很大，从来没有人喷过药。你们一起吃得很饱。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'susceptible', act: 'rest', text: '你停在牛棚的横梁上。这里很安静，没有人拿喷雾。', eff: { health: +4 } },
    { stages: ['adult'], w: 1, need: 'susceptible', text: '一次例行喷药时，雾气慢慢逼近。你飞得很快，还是被一层雾裹住了一瞬间。', eff: { health: -6 } },
    { stages: ['larva'], w: 2, need: 'baited', text: '厨房的垃圾桶里，一盒毒饵的甜味飘了过来。你的同伴挤过去，有一些没有再动。', eff: { health: -5 } },
    { stages: ['adult'], w: 3, need: 'baited', act: 'forage', text: '你落在一块发甜的饵上，它的表面有一层细小的颗粒。你吸了一口，又吐了出来。', eff: { food: +10, health: -3 } },
    { stages: ['adult'], w: 1, need: 'baited', text: '有人在厨房里收拾，把一盒毒饵放进了墙角。', eff: { safety: -5 } },
    { stages: ['larva'], w: 3, need: 'crowded', text: '你和同伴挤在一起，身体互相碰撞。食物还没吃到，就被别人占去了。', eff: { food: -5 } },
    { stages: ['larva'], w: 2, need: 'crowded', text: '粪堆表面的水分被你们吸得很快，你的身体越来越干。', eff: { health: -4 } },
    { stages: ['larva'], w: 1, once: true, need: 'crowded', text: '你比同批的幼虫都慢。别的幼虫已经化蛹，你还在爬。', eff: { food: -5 } },
    { stages: ['larva'], w: 3, need: 'sparse', text: '你独占了一小块粪堆，吃得很慢，也很安静。', eff: { food: +8 } },
    { stages: ['larva'], w: 2, need: 'sparse', text: '你周围的食物很多，你的身体慢慢长大。', eff: { health: +4 } },
    { stages: ['pupa'], w: 1, need: 'sparse', text: '你在蛹壳里不被打扰，发育很平稳。' },
    { stages: ['larva'], w: 3, need: 'alone', text: '这块剩饭的汤汁里全是糖，你吃得很快，身体鼓胀起来。', eff: { food: +12 } },
    { stages: ['larva'], w: 2, need: 'alone', text: '剩饭很快发干，汤汁一点一点地消失。你把最后一口也吸干了。', eff: { health: -3 } },
    { stages: ['larva'], w: 1, need: 'alone', text: '你离人比别的幼虫更近，一个人的脚步声一直在头顶响。', eff: { safety: -5 } },
    { stages: ['larva'], w: 2, need: 'runt', text: '你比同批的幼虫都小，挤在粪堆的边缘。别的幼虫先吃掉了你前面的食物。', eff: { food: -8, health: -3 } },
    { stages: ['larva'], w: 2, need: 'robust', text: '你比周围的幼虫粗壮，你把它们推开，在粪堆里挖出一条通道。', eff: { food: +6 } },
    { stages: ['adult'], w: 2, need: 'cautious', text: '你在窗台上停了很久，先用足试探每一个落点，然后才吸了一口糖水。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, need: 'curious', act: 'explore', text: '你绕着一个陌生的盒子飞了三圈，又探进一条缝里，闻到了一股新的味道。', eff: { food: +8 } },
  ],

  opening: {
    title: '母蝇在找产卵的地方',
    body: '你还没有孵化。母蝇落在厨房的垃圾桶边缘，它的腹部一直在颤抖。垃圾桶里的食物很多，但隔一两天就会有人来清理；远处的牛粪堆不会被清理，但离人也更远。',
    options: [
      { t: '产在厨房的垃圾桶里', hint: '饱食↑↑ 被清理的风险↑',
        eff: { food: +20 }, risk: 1.3, riskDays: 3,
        result: '你在一堆烂菜叶下面孵化。这里的食物很多，但没过几天，有人提着袋子把它扔了出去。' },
      { t: '产在远处的牛粪堆上', hint: '安全↑ 食物少',
        eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 3,
        result: '你在牛粪的表面孵化。食物很多，人不常来，只是粪堆里有点热。' },
    ],
  },

  decisions: [
    {
      id: 'wander', at: 4, stage: 'larva',
      title: '粪堆越来越热',
      body: '粪堆在阳光下发酵，温度一天比一天高。你的身体开始想要离开它。',      options: [
        { t: '离开粪堆，去干燥的土里化蛹', hint: '安全↑ 食物↓',
          eff: { food: -10, safety: +10 }, risk: 0.7, riskDays: 5,
          result: '你爬出粪堆，钻进了一块干燥的土里。外面的热气很快就散去了。' },
        { t: '留在粪堆里继续吃', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, risk: 1.5, riskDays: 2,
          result: '你又吃了一顿。粪堆的表面开始发干，你们越来越难动。' },
      ],
    },
    {
      id: 'first_flight', at: 9.5, stage: 'adult',
      title: '第一次飞出',
      body: '你从蛹壳里爬出来，翅膀刚刚展开。窗户外面是光，厨房里面是食物。',
      options: [
        { t: '飞向窗外的光', hint: '安全↑ 食物↓',
          eff: { safety: +5 }, risk: 1.2, riskDays: 2,
          result: '你撞了几次玻璃，才找到一扇半开的窗户，飞进了阳光里。' },
        { t: '留在厨房的垃圾桶边', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, risk: 1.5, riskDays: 3,
          result: '你在垃圾桶边停了下来。食物的气味很浓，很快你的翅膀上就沾满了油。' },
      ],
    },
    {
      id: 'swatter', at: 12, stage: 'adult',
      title: '一只手掌',
      body: '屋里有人举着苍蝇拍朝你这边走过来。拍子的影子先落在了墙上。',
      options: [
        { t: '立刻起飞', hint: '安全↑',
          eff: { food: -5 }, risk: 0.8, riskDays: 2,
          result: '你起飞了，拍子落在了你刚才停的地方。' },
        { t: '停在原地，等他放下', hint: '风险↑↑',
          eff: { food: +5 }, kill: 0.35, cause: 'swat',
          result: '你没有动。拍子落了下来，声音很响。' },
      ],
    },
    {
      id: 'sugar_trap', at: 14, stage: 'adult',
      title: '水槽边的一滴糖水',
      body: '水槽边上有一滴糖水。门口挂着一只灭蝇灯，蓝色的光一闪一闪地亮着。',
      options: [
        { t: '去吃糖水', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +25 }, kill: 0.2, cause: 'zapper',
          result: '你吃了很久。直到你飞向门口，才发现那盏灯的光是那么亮。' },
        { t: '去找别的食物', hint: '稳妥 · 食物少',
          eff: { food: +5 }, result: '你离开水槽，去了一堆烂水果。' },
      ],
    },
    {
      id: 'female_mate', at: 16, need: 'female',
      title: '一只雄蝇靠近了',
      body: '一只雄蝇在你身边绕了几圈，它的前足已经搭在了你的背上。',
      options: [
        { t: '接受它，让它交配', hint: '后代↑ 风险↑',
          eff: { offspring: [30, 60] }, risk: 1.1, riskDays: 2,
          result: '交配之后，你把它的精子存了起来。之后的几天，你的卵越来越多。' },
        { t: '飞走', hint: '安全',
          eff: {}, result: '你从它的前足下挣脱出来，飞进了厨房的灯光里。' },
      ],
    },
    {
      id: 'male_mate', at: 16, need: 'male',
      title: '一只雌蝇落在你身边',
      body: '一只雌蝇停在你旁边的一块油渍上。它的腹部已经鼓了起来。',
      options: [
        { t: '追上去，抓住它交配', hint: '后代↑ 风险↑',
          eff: { offspring: [30, 60] }, risk: 1.2, riskDays: 2,
          result: '你抓住了它的背。交配之后，你又飞了几分钟，才找到下一个停脚的地方。' },
        { t: '继续吃', hint: '饱食↑ 后代↓',
          eff: { food: +10 }, result: '你继续在油渍上吸食。那只雌蝇飞走了。' },
      ],
    },
    {
      id: 'dry_summer', at: 22, stage: 'old',
      title: '干燥的夏天',
      body: '窗台上的水已经干了。你的身体需要水，也需要糖。',
      options: [
        { t: '找个湿的地方喝水', hint: '健康↑ 风险↑',
          eff: { health: +10 }, risk: 1.1, riskDays: 3,
          result: '你在一块湿布上喝到了水，但那里也是人经常擦拭的地方。' },
        { t: '继续在油污上找糖', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +15 }, risk: 1.4, riskDays: 3,
          result: '你在一块旧油污上吸到了很多糖。你的脚已经不太听使唤了。' },
      ],
    },
    {
      id: 'resistant_spray', at: 12, stage: 'adult', need: 'resistant',
      title: '农场的喷雾器又来了',
      body: '牛棚的门开着，有人端着喷雾器走了进来。雾气里有拟除虫菊酯的味道。你身边的同类一只只掉下来，你却还能飞。',
      options: [
        { t: '留在墙角，靠抗性扛过去', hint: '风险↓',
          eff: { safety: +5 }, risk: 0.9, riskDays: 3,
          result: '你停在墙角。雾落在你身上，你的足微微发颤，但没有停下来。' },
        { t: '飞进粪堆深处，躲开喷雾', hint: '饱食↑ 风险↑',
          eff: { food: +15 }, risk: 1.2, riskDays: 2,
          result: '你钻进了粪堆的深处。那里很闷，但雾气进不去。' },
      ],
    },
    {
      id: 'bait_station', at: 14, stage: 'adult', need: 'baited',
      title: '墙角的毒饵盒',
      body: '墙角的一个黑色塑料盒里，有一块发甜的饵。盒盖没有封严，糖味飘了出来。',
      options: [
        { t: '凑过去吃一口', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +25 }, kill: 0.2, cause: 'insecticide',
          result: '你把口器伸进了缝隙。甜味很浓。几分钟后，你的足开始发僵。' },
        { t: '绕开，去找别的食物', hint: '稳妥 · 食物少',
          eff: { food: +5 }, result: '你绕开了那个盒子，去了一堆烂水果。' },
      ],
    },
    {
      id: 'crowded_pile', at: 2, stage: 'larva', need: 'crowded',
      title: '挤满了幼虫的粪堆',
      body: '粪堆上的幼虫越来越多，食物一下子不够分了。你的身体被挤得发软，前面的同伴不停地往后退。',
      options: [
        { t: '爬到最上层，抢还没翻过的表面', hint: '饱食↑ 风险↑',
          eff: { food: +10 }, risk: 1.3, riskDays: 2,
          result: '你爬到最上面，那里的食物还没被翻过。但粪堆表面已经开始干了。' },
        { t: '钻到底部，躲开拥挤', hint: '安全↑ 饱食↓',
          eff: { food: -10, safety: +5 }, risk: 0.8, riskDays: 3,
          result: '你向下钻。底部更黑，也更潮湿，但食物已经被吃光了。' },
      ],
    },
    {
      id: 'autumn_pupa', at: 5, stage: 'pupa', need: 'autumn',
      title: '天冷了，蛹壳里',
      body: '这个季节的夜里已经很凉。你的蛹壳里很安静，外面的温度还在往下掉。',
      options: [
        { t: '在蛹壳里多等几天，等天暖', hint: '安全↑ 时间↑',
          eff: { safety: +10 }, risk: 0.8, riskDays: 5,
          result: '你在壳里继续等，外面的风一阵一阵地吹过窗缝。' },
        { t: '尽快羽化，趁现在还有光', hint: '饱食↑ 风险↑',
          eff: { food: +5 }, risk: 1.2, riskDays: 3,
          result: '你用力撑开了蛹壳。外面很冷，你的翅膀湿湿的，展开得很慢。' },
      ],
    },
    {
      id: 'bold_plate', at: 10, stage: 'adult', need: 'bold',
      title: '餐桌上的一块肉',
      body: '饭桌上的人刚起身去接电话，一块带着油脂的肉还留在盘子边上。你的同类已经落了上去。',
      options: [
        { t: '直接落下去吃', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +25 }, risk: 1.3, riskDays: 2, kill: 0.1, cause: 'swat',
          result: '你落下去，一口一口地吸着油脂。脚步声从门外回来了，你没来得及飞开。' },
        { t: '在桌边的空中转一圈，等人走开', hint: '稳妥',
          eff: { food: +5 }, result: '你在空中绕了几圈，等到脚步声远了，才落到盘子边缘。' },
      ],
    },
  ],

  idle: [
    '你在厨房的墙上，用足感觉着墙面的温度。',
    '你的复眼把整个房间切成了无数个小格子。',
    '你吐出一滴唾液，把面前的一小块食物溶开。',
    '窗外的光一闪一闪，你的翅膀在空气里发出细微的嗡嗡声。',
    '人在厨房里忙活，锅碗的声音一阵一阵地传过来。',
    '你的足上有很多细毛，它们会沾上所有你停过的地方的味道。',
    '你一边飞，一边在脑子里记着哪些地方有糖，哪些地方有人。',
    '天花板角落的灰尘，在阳光里慢慢地飘。',
  ],

  epitaph: '你只活了几周，却留下了几百枚卵。在夏天的厨房里，你和你的后代都没有被记住。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'squid',
  name: '太平洋褶柔鱼',
  en: 'Japanese flying squid',
  sci: 'Todarodes pacificus（太平洋褶柔鱼）',
  emoji: '🦑',
  scene: 'ocean',
  kind: 'wild',
  tagline: '一年一生。你产完卵，就该死了。',
  taxon: '软体动物门 › 头足纲 › 枪形目 › 柔鱼科',
  size: '胴长（不含腕）约 20–35 厘米',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['黑潮边缘、漂在海面下的一团胶质卵膜里', 3, { food: +5 }],
        ['一团缠在漂浮海藻上的卵膜里', 2, { food: +10 }],
        ['冷水团边缘的浅层卵群里', 2, { food: -5, risk: 1.1 }],
      ]},
      { label: '这一年的海况', options: [
        ['暖流偏强、浮游生物充足的一年', 3, { food: +10, set: 'warm' }],
        ['海水偏暖、冷水营养上不来的一年', 2, { food: -10, risk: 1.1, set: 'nino' }],
        ['冷水上升流强劲的一年，浮游生物很多，但风浪也大', 2, { food: +5, risk: 1.15, set: 'upwell' }],
      ]},
      { label: '渔船的分布', options: [
        ['几乎没有渔船的海域，夜里的灯光很稀疏', 2, { safety: +5, set: 'quiet' }],
        ['近岸的渔船密集，夜里的灯光连成一片', 3, { food: +5, risk: 1.3, set: 'busy' }],
        ['夏季禁渔期内的海域，渔船被禁止进入', 1, { safety: +8, food: -3, set: 'reserve' }],
      ]},
    ],
    siblings: 2000,
    siblingsLabel: '同一团卵膜里',
    intro: '你在{出生地}里孵化，身体只有米粒大小，还不会游。你是{sex}。同一团卵膜里有 {siblings} 颗卵。',
  },

  stages: [
    { id: 'egg',       name: '卵',          from: 0,   unit: 'day' },
    { id: 'paralarva', name: '稚仔（浮游）', from: 20,  unit: 'day' },
    { id: 'juv',       name: '幼体',        from: 60,  unit: 'day' },
    { id: 'adult',     name: '成体',        from: 150, unit: 'day' },
    { id: 'old',       name: '产卵期',      from: 270, unit: 'day' },
  ],
  maturity: 180,
  maxAge: 330,

  survival: [[0,1],[10,0.3],[20,0.12],[60,0.02],[150,0.008],[270,0.003],[300,0.0015],[330,0]],
  survivalNote: '由渔获年龄组成和耳石年龄鉴定粗估；浮游期死亡率极高，寿命约一年（Boyle & Rodhouse 2005）',

  init: { health: 70, food: 55, safety: 50 },
  foodDrain: 4,

  causes: [
    { id: 'jig', escape: true, w: 3, stages: ['juv','adult'], short: '被灯光船上的假饵钩住',
      text: '船灯把海面照得发白。你游过去抓那串亮闪闪的假饵，一根钩子刺进了你的腕。' },
    { id: 'dolphin', escape: true, w: 3, stages: ['paralarva','juv','adult'], short: '被海豚追上',
      text: '一群海豚从下方冲上来。你猛地喷水逃开，但最慢的那一只没能躲过。' },
    { id: 'tuna', escape: true, w: 2, stages: ['juv','adult'], short: '被金枪鱼吞下',
      text: '一条金枪鱼在你身后突然加速，它的口很大，你还没来得及喷出墨汁。' },
    { id: 'cannibal', escape: true, w: 2, stages: ['juv','adult'], short: '被同类吃掉',
      text: '一条比你大的同类从背后靠近，它的腕卷住了你，然后你的身体开始被吞下。' },
    { id: 'starve', escape: false, w: 2, stages: ['paralarva','juv','adult','old'], short: '饿死（浮游生物不够）',
      text: '这片海里的桡足类和小鱼比去年少了很多。你的身体一点点变轻，最后不再游动。' },
    { id: 'egg_eaten', escape: false, w: 5, stages: ['egg'], short: '卵膜被虾和小鱼吃掉',
      text: '一只小虾钻进卵膜的缝隙，把你连同周围的几颗卵一起吃了。' },
    { id: 'old', w: 0, short: '产卵后衰竭死亡', text: '你最后一批卵已经放进海里。你的身体不再需要它了，你慢慢沉向海底。' },
  ],

  events: [
    { stages: ['egg'], w: 3, text: '卵膜里，胚胎在缓慢地转动。海水的温度每天都在变，你的心跳跟着变。' },
    { stages: ['egg'], w: 2, once: true, text: '一条小鱼在卵膜外游过，它的嘴碰到了卵膜，你没有被咬到。' },
    { stages: ['paralarva'], w: 3, act: 'forage', text: '你张开触腕，抓住一只桡足类。它比你的身体还大一点。', eff: { food: [10, 20] } },
    { stages: ['paralarva'], w: 2, text: '一阵涌流把你卷进温水层，你随波漂了很久，离开了原来的海域。', eff: { food: -5 } },
    { stages: ['juv','adult'], w: 3, act: 'forage', text: '你在夜里追上一群灯下的小鱼，它们像一片银色的雾一样散开。', eff: { food: [12, 25] } },
    { stages: ['juv','adult'], w: 2, act: 'rest', text: '你悬停在黑暗的水里，只用鳍轻轻调整方向，把体温压在最低。', eff: { health: +5 } },
    { stages: ['juv','adult'], w: 2, act: 'explore', text: '你游出了大陆架，海水变成深蓝色，食物少了，但几乎没有什么追你。', eff: { food: +10, safety: -10 } },
    { stages: ['juv','adult'], w: 2, act: 'hide', text: '白天你沉到深水层。那里很冷，很暗，你的颜色随之变深。', eff: { safety: +10, food: -5 } },
    { stages: ['juv'], w: 2, act: 'hide', text: '一条鲨鱼的影子从上方掠过，你贴着海底的泥沙，一动不动，直到它走远。', eff: { safety: +12 } },
    { stages: ['juv','adult'], w: 2, text: '水温变暖，洋流推着你向北游。你的身体比之前轻快。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 2, text: '远处有一排灯光的船停在夜里。你看见一些同类被拉上甲板，灯光照着它们。', eff: { safety: -15 } },
    { stages: ['adult'], w: 2, act: 'forage', text: '你靠近灯光，几只同类正在你身边打转。你伸出腕，把最近的一只抓了过来。', eff: { food: [15, 25] } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你游进一片从没去过的温暖海域，那里的浮游生物很密。', eff: { food: [10, 18] } },
    { stages: ['juv','adult'], w: 1, text: '一只体型大得多的同类游过来。你吃掉了它掉下来的一段腕，然后迅速离开。', eff: { food: +15, safety: -5 } },
    { stages: ['adult'], w: 1, once: true, act: 'mate', text: '你在暖流边缘找到了合适的水层。你产下了第一批卵，卵膜在水里慢慢膨胀。', eff: { offspring: [100, 250] },
      fact: '太平洋褶柔鱼一生只繁殖一次，产卵后个体死亡（Boyle & Rodhouse 2005）' },
    { stages: ['adult'], w: 1, once: true, text: '你的消化腺开始萎缩，身体里的能量被调去产卵。你吃得越来越少。', eff: { food: -10 } },
    { stages: ['old'], w: 3, text: '你的外套膜变薄，腕上的吸盘失去了光泽。', eff: { health: -6 } },
    { stages: ['old'], w: 2, once: true, text: '你把最后一批卵放进了海水。它们将随洋流漂散，你的身体开始变得很轻。', eff: { offspring: [60, 160] } },
    { stages: ['paralarva','juv'], w: 2, text: '一只鹈鹕的影子掠过海面。你向下沉了几米，身体被阳光照得发白。', eff: { safety: +3 } },
    { stages: ['adult','old'], w: 1, text: '海面上的光透下来，你的皮肤一阵一阵地变色，从红到灰，又回到白。', eff: { health: -2 } },
    { stages: ['paralarva','juv'], w: 3, need: 'warm', text: '暖流把浮游生物带过来，你的身体长得很快。', eff: { food: +10 } },
    { stages: ['juv','adult'], w: 2, need: 'warm', text: '海水变暖，你比往年更早地开始游向北方。', eff: { health: +3 } },
    { stages: ['paralarva'], w: 3, need: 'nino', text: '海水的营养盐不够，桡足类比往年少。你在浮游层里找了很久，才抓到一只。', eff: { food: -8 } },
    { stages: ['juv','adult'], w: 2, need: 'nino', text: '同一片海域里，小鱼也比去年少。你的身体一天比一天轻。', eff: { health: -4 } },
    { stages: ['juv','adult'], w: 3, need: 'upwell', text: '冷水从海底涌上来，带着大量的浮游生物。你吃得很饱，但风浪也大，身体被推来推去。', eff: { food: +12, health: -2 } },
    { stages: ['paralarva'], w: 2, need: 'upwell', text: '上升流把你卷进了一片浑浊的海水，你被带着转了好几圈。', eff: { safety: -4 } },
    { stages: ['juv','adult'], w: 3, need: 'busy', text: '远处的渔船灯光连成了一片，你在水里看到的都是亮光。', eff: { safety: -8 } },
    { stages: ['adult'], w: 2, need: 'busy', text: '渔船的声音从水面传下来，同伴们一批批地往深水里沉。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 3, need: 'quiet', text: '这片海域的渔船很少。你在夜里慢慢地游，几乎没有遇见灯光。', eff: { safety: +5, food: +5 } },
    { stages: ['adult'], w: 2, need: 'quiet', text: '海面上很安静，只有你和几条小鱼。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'reserve', text: '这里是禁渔期的海域，远处的渔船都调头走了。', eff: { safety: +6 } },
    { stages: ['adult','old'], w: 2, need: 'reserve', text: '这一带的浮游生物比别处密，但你不敢在浅处久待。', eff: { food: +8 } },
    { stages: ['juv','adult'], w: 2, need: 'bold', text: '你没有等同伴，独自追着一条小鱼游进了灯光里。', eff: { food: +10, safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '你在深水的边缘停了很久。别的同类已经游向了浅处，你还在等。', eff: { food: -4, safety: +6 } },
    { stages: ['paralarva','juv'], w: 2, need: 'curious', text: '你追着一片发光的浮游生物游了很远，忘了回头看。', eff: { food: +6, safety: -3 } },
    { stages: ['paralarva'], w: 2, need: 'runt', text: '你比同批的稚仔小一圈，在浮游层里被别的同类挤到了边缘。', eff: { food: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'robust', text: '一条同类咬住了你的腕。你扭开身子把它甩掉，腕上只留下一道白印。', eff: { health: -3 } },
  ],

  opening: {
    title: '母亲在找产卵的地方',
    body: '你还没有出生。母亲在黑潮的边缘游动，她要决定把卵群放在哪里。暖流里的水温适合孵化，但那里的浮游生物也容易吸引捕食者。',
    options: [
      { t: '放在暖流内侧的温水层', hint: '饱食↑ 风险↑', eff: { food: +15 }, risk: 1.2, riskDays: 5,
        result: '卵群被暖流带走。你在温水里孵了出来，周围的浮游生物很多。' },
      { t: '放在冷水边缘', hint: '更安全 · 食物少', eff: { food: -5 }, risk: 0.85, riskDays: 5,
        result: '卵群沉在冷水的边缘。你孵出来时，四周只有稀薄的浮游生物。' },
    ],
  },

  actions: {
    forage:  { name: '追食', desc: '沿着灯光和浮游生物的气味去找吃的。', text: ['你张开触腕，抓住一团磷虾。', '你在夜色里追着一群小鱼。'] },
    hide:    { name: '沉入深水', desc: '躲到更深、更暗的水层，减少被看见的机会。', text: ['你贴着海底的沉积物，颜色变得和它一样暗。', '白天的光从上方透下来，你一动不动。'] },
    rest:    { name: '悬停', desc: '不游动，用鳍维持位置，让身体少消耗能量。', text: ['你悬在水里，随洋流慢慢漂。'] },
    explore: { name: '游向外海', desc: '离开熟悉的水域，去找新的食物和温度。', text: ['你游出了大陆架，海水越来越蓝。'] },
    mate:    { name: '产卵', name_en: 'spawn', desc: '在暖流边缘放出卵群。产完之后，你的身体将不再需要它自己。', done: '你产下了 {n} 枚卵。', stages: ['adult','old'] },
  },
  brood: [100, 250],

  decisions: [
    {
      id: 'drift', at: 18,
      title: '顺流还是留下',
      body: '你还是一颗小小的稚仔，身体透明。洋流一直往北推，可是北边的水温变化很大，南边的浮游生物却很稳定。',
      fact: '太平洋褶柔鱼的幼体随黑潮和北上的暖流漂流，分布范围受水温影响很大（Boyle & Rodhouse 2005）',
      options: [
        { t: '顺着暖流漂向北', hint: '食物↑ 风险↑',
          eff: { food: +5 }, risk: 1.2, riskDays: 10,
          result: '你随洋流北上。海水的颜色一天天变化，你的身体也跟着长大。' },
        { t: '留在冷水边缘', hint: '稳妥 · 食物少',
          eff: { food: -5, safety: +5 }, risk: 0.85, riskDays: 10,
          result: '你停在冷水边缘，浮游生物比预想的少，但周围安静。' },
      ],
    },
    {
      id: 'lightfish', at: 75, when: { food: '<50' },
      title: '猎物越来越少',
      body: '白天的深水里找不到什么吃的，夜里表层的灯光下倒有一些小鱼。你要决定在哪个时间找食。',
      options: [
        { t: '夜里浮到表层，追灯光', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +20 }, risk: 1.6, riskDays: 5,
          result: '你浮到灯下，吃饱了。但灯光也让你很显眼。' },
        { t: '白天沉到深层', hint: '安全 · 饿',
          eff: { food: -10, safety: +10 }, risk: 0.8, riskDays: 5,
          result: '你沉进深水，那里很冷，你的身体慢慢变慢。' },
      ],
    },
    {
      id: 'cannibal', at: 110,
      title: '一条大个体靠近',
      body: '一条比你大得多的同类在你旁边慢慢游动。它的腕在水里摆动，像是在试探你。',
      fact: '头足类存在同类相食的行为，尤其在食物少或个体大小差异大时更常见（Boyle & Rodhouse 2005）',
      options: [
        { t: '咬住它的腕，抢食', hint: '饱食↑ 死亡↑',
          eff: { food: +20 }, kill: 0.3, cause: 'cannibal', result: '你抢到了一段腕，但它的反击很快。' },
        { t: '游开', hint: '安全',
          eff: { safety: +5 }, result: '你转身游开，身后的同类没有追。' },
      ],
    },
    {
      id: 'spawn', at: 165, need: 'female', when: { health: '>40' },
      title: '产卵场到了',
      body: '暖流边缘的水温已经合适。你的生殖腺成熟了，周围有很多雄性在游动，它们的腕互相缠着。',
      options: [
        { t: '立刻游向产卵场', hint: '后代↑↑ 风险↑',
          eff: { offspring: [200, 400] }, risk: 1.4, riskDays: 10,
          result: '你游向产卵场。那里的水很暖，你放下了第一批卵群。' },
        { t: '再多吃几天', hint: '饱食↑ 后代↓',
          eff: { food: +15, offspring: [30, 80] }, risk: 1.0, riskDays: 5,
          result: '你多吃了几天。等你准备好的时候，附近的产卵场已经挤满了同类。' },
      ],
    },
    {
      id: 'jig', at: 200, when: { food: '>40' },
      title: '船上的灯',
      body: '夜里远处有一排亮光。你能看到水里漂着的小鱼都朝那边游去，那里也有你的同类。',
      options: [
        { t: '靠近灯光，吃掉小鱼', hint: '饱食↑↑ 风险↑↑',
          eff: { food: [15, 25] }, kill: 0.4, cause: 'jig', risk: 1.5, riskDays: 3,
          result: '你吃到了一大口小鱼，然后看见下面的水里有一串亮闪闪的钩子。' },
        { t: '沉到深水，绕开灯光', hint: '安全 · 食物少',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 5,
          result: '你绕开了灯光。海水很暗，你的身体慢慢沉下去。' },
      ],
    },
    {
      id: 'late', at: 280, when: { health: '<50' },
      title: '最后一批卵',
      body: '你的体力在下降，腕上的吸盘变得迟钝。你还有一批卵没有放出去。',
      options: [
        { t: '浅水里多产一会儿', hint: '后代↑ 风险↑',
          eff: { offspring: [30, 60] }, risk: 1.3, riskDays: 10,
          result: '你在浅水里放出最后的卵群，卵在水里慢慢散开。' },
        { t: '沉到深层，多休息', hint: '安全 · 后代↓',
          eff: { health: +5, safety: +5 }, risk: 0.9, riskDays: 10,
          result: '你沉进深水，身体慢慢不动了。' },
      ],
    },
    {
      id: 'sq_nino_food', at: 25, need: 'nino',
      title: '表层的食物少了',
      body: '表层的浮游生物比往年少。你的身体需要更多的食物，你要决定去哪里找。',
      options: [
        { t: '往深层的冷水里找', hint: '饱食↑ 稳妥', eff: { food: +5 }, risk: 0.9, riskDays: 5,
          result: '深层的冷水里食物比表层稀，但追捕你的东西也少。' },
        { t: '沿着暖流北上，去更肥的水域', hint: '饱食↑↑ 风险↑', eff: { food: +10 }, risk: 1.3, riskDays: 8,
          result: '你跟着暖流往北游，路很长，也很辛苦。' },
      ],
    },
    {
      id: 'sq_busy_lights', at: 120, need: 'busy',
      title: '一排渔船的灯',
      body: '夜里，一排渔船的灯亮在海面上。你周围的同类正往灯光那边游。',
      options: [
        { t: '靠近灯光，抢小鱼', hint: '饱食↑↑ 风险↑↑', eff: { food: +15 }, kill: 0.25, cause: 'jig', risk: 1.4, riskDays: 3,
          result: '你吃到了一大口小鱼，然后看见钩子从水里晃过。' },
        { t: '绕到船尾的暗处', hint: '安全↑ 饿一点', eff: { food: -3, safety: +8 }, risk: 0.9, riskDays: 4,
          result: '你绕到船尾，灯光照不到的地方，海水暗了下来。' },
      ],
    },

  ],

  idle: [
    '你在水里慢慢游动，腕轻轻地摆。',
    '海水的温度在一天里变了几次。',
    '远处有鲸的声音，低沉而缓慢。',
    '你的身体透明，颜色随着光线变化。',
    '一条小鱼从你身边穿过，它没有看你。',
    '洋流把你推向北方，你顺着它游。',
    '你闻到的是盐，还有远处浮游生物的味道。',
    '夜里的灯光在水面上闪，你离它远一点。',
  ],

  epitaph: '你一年就走完了一生。你的卵会在暖流里漂散，有一天，会有新的鱿鱼从它们中间游出来。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'octopus',
  name: '普通章鱼',
  en: 'Common octopus',
  sci: 'Octopus vulgaris（普通章鱼）',
  emoji: '🐙',
  scene: 'reef',
  kind: 'wild',
  tagline: '三颗心，蓝色的血，两年的寿命。',
  taxon: '软体动物门 › 头足纲 › 八腕目 › 章鱼科',
  size: '成体体重多在 1–3 公斤，腕展可达 1 米左右',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['浅海岩石缝里，母亲用腕守着的一串卵', 3, { food: +5 }],
        ['海草床边缘的一堆空贝壳里', 2, { food: +10 }],
        ['防波堤下的碎石缝里', 2, { food: -5, risk: 1.1 }],
      ]},
      { label: '海域', options: [
        ['地中海西岸的岩礁海湾，夏天水温高，你长得快', 3, { food: +5, set: 'med' }],
        ['北大西洋的冷水海湾，水温低，你长得慢', 2, { food: -5, set: 'cold_sea' }],
        ['一处有渔港的海湾，码头下堆着旧网和陶罐', 2, { food: +10, risk: 1.3, set: 'port' }],
        ['热带珊瑚礁的边缘，食物多，海鳝也多', 2, { food: +10, risk: 1.15, set: 'reef' }],
      ]},
      { label: '那一年的海况', options: [
        ['那年冬天风暴很多，海底被翻起来，洞口常年浑浊', 2, { safety: -5, risk: 1.2, set: 'storm' }],
        ['那年的海面很平，水清得能看见洞底', 3, { health: +5, set: 'calm' }],
        ['那年的海水异常温暖，浮游生物多，氧气却在变少', 2, { health: -5, food: +5, set: 'warm_year' }],
      ]},
    ],
    siblings: 40000,
    siblingsLabel: '同一位母亲产下的卵',
    intro: '你在{出生地}里孵化。你是{sex}，身体只有芝麻粒大小。和你来自同一位母亲的卵有大约 {siblings} 枚，它们挂在洞顶，像一串串白色的葡萄。',
  },

  stages: [
    { id: 'egg',       name: '卵',          from: 0,   unit: 'day' },
    { id: 'paralarva', name: '浮游幼体',     from: 40,  unit: 'week' },
    { id: 'juv',       name: '底栖幼章鱼',   from: 100, unit: 'week' },
    { id: 'adult',     name: '成年章鱼',     from: 250, unit: 'week' },
    { id: 'old',       name: '衰老',        from: 450, unit: 'week' },
  ],
  maturity: 240,
  maxAge: 600,

  survival: [[0,1],[1,0.6],[40,0.1],[100,0.03],[200,0.012],[300,0.006],[450,0.002],[550,0.0008],[600,0]],
  survivalNote: '野外数据稀少；浮游期死亡率很高；寿命约 1–2 年，按渔获年龄与实验室观察粗估（Boyle & Rodhouse 2005）',

  init: { health: 70, food: 55, safety: 50 },
  foodDrain: 4,

  causes: [
    { id: 'eel', escape: true, w: 4, stages: ['juv','adult'], short: '被海鳝咬住',
      text: '一条海鳝从洞口探出头，它的牙咬住了你的腕。你用力把腕缠在石头上，但它没有松开。' },
    { id: 'grouper', escape: true, w: 3, stages: ['juv','adult'], short: '被石斑鱼吞掉',
      text: '一条石斑鱼从礁石后面冲出来。你喷出墨汁，但它的口太快了。' },
    { id: 'trap', escape: true, w: 2, stages: ['juv','adult'], short: '被章鱼笼捕获',
      text: '你伸腕钻进一个陶罐，它被拉了上去。罐口很窄，你的腕从里面被挤住。' },
    { id: 'den_raid', escape: false, w: 3, stages: ['egg'], short: '卵串被蟹偷吃',
      text: '母亲不在，一只蟹从洞口钻进来，把你所在的那串卵拖出了洞。' },
    { id: 'planktonic', escape: false, w: 3, stages: ['paralarva'], short: '浮游期被吃掉',
      text: '你随海流漂出洞穴，身体小得像一粒灰尘。一只水母的触手把你卷了进去。' },
    { id: 'mating_death', escape: false, w: 0, stages: ['adult'], short: '交配后死亡',
      text: '交配之后，你的身体开始衰退。雄性章鱼在这一步通常会死去。' },
    { id: 'disease', escape: false, w: 1, stages: ['adult','old'], short: '感染',
      text: '你的皮肤上长出了白色的斑点，腕的动作越来越慢，然后你停了下来。' },
    { id: 'old', w: 0, short: '产卵后衰竭死亡', text: '你守着卵，很久没有吃东西。卵孵出以后，你的身体也停止了。' },
  ],

  events: [
    { stages: ['egg'], w: 3, text: '母亲在洞口搧动海水，给每一颗卵送去氧气。你能感到水流一阵一阵地过来。' },
    { stages: ['egg'], w: 2, once: true, text: '母亲不吃不喝，只是守着卵串。她身上的颜色越来越浅。',
      fact: '摘除孵卵期雌性章鱼的视腺，会让它弃卵、重新进食并延长寿命，这提示视腺分泌的激素与繁殖和衰老有关（Wodinsky 1977，Science）' },
    { stages: ['paralarva'], w: 3, text: '你随海流漂出洞穴，身体透明，几乎看不见。你的身上没有颜色，只有眼睛在闪。' },
    { stages: ['paralarva'], w: 2, text: '你在浮游生物中间游着，偶尔被一股水流推向海面。' },
    { stages: ['juv'], w: 3, act: 'forage', text: '你在礁石缝里找到一只蟹，用腕把它按住，慢慢把它拖进洞里。', eff: { food: [15, 25] } },
    { stages: ['juv'], w: 2, act: 'hide', text: '一条石斑鱼游过来，你把身体的颜色调成礁石的颜色，它没有停下。', eff: { safety: +15 } },
    { stages: ['juv'], w: 2, act: 'explore', text: '你爬过一片沙地，腕在沙上留下一道弯弯的痕迹。远处有一片新的岩石。', eff: { food: +10, safety: -5 } },
    { stages: ['adult'], w: 3, act: 'forage', text: '你用腕伸进一个贝壳里，把里面的蛤肉一点点掏了出来。', eff: { food: [20, 30] } },
    { stages: ['adult'], w: 2, act: 'hide', text: '一个危险的影子从上方经过。你喷出一团墨，躲进了洞深处。', eff: { safety: +20, food: -5 },
      fact: '普通章鱼会喷墨并同时改变体色来逃避捕食者，这是一种多感官的防御行为（Hanlon & Messenger 2018）' },
    { stages: ['adult'], w: 2, act: 'rest', text: '你在洞里静静地待着，颜色随着光线变浅又变深。', eff: { health: +4 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你离开熟悉的洞穴，去了一片新的岩石区。那里的贝类很多，但没有遮挡。', eff: { food: +10, safety: -10 } },
    { stages: ['adult'], w: 1, once: true, act: 'mate', text: '一条雄性章鱼靠近你的洞口。它的一条腕从你身边伸进来，你们的腕互相缠住。', eff: { offspring: [50, 100] } },
    { stages: ['adult'], w: 2, text: '一条海鳝从洞口探出头。你的腕卷紧了洞口的石头，等它走开。', eff: { safety: -10 } },
    { stages: ['adult','old'], w: 2, text: '你的皮肤颜色变慢了，图案开始模糊，像是在水里渐渐融化。', eff: { health: -3 } },
    { stages: ['old'], w: 3, text: '你停止进食。消化腺已经开始衰退，你的腕不再主动去抓东西。', eff: { food: -15, health: -5 } },
    { stages: ['old'], w: 1, once: true, need: 'female', text: '你的卵从体内涌出来，你把它们一串串挂在洞顶，一颗一颗排好。', eff: { offspring: [800, 2000] } },
    { stages: ['old'], w: 1, need: 'female', text: '你守着卵，不再离开洞穴一步。海水里的温度每天都在变。', eff: { safety: -3 } },
    { stages: ['juv','adult'], w: 1, text: '夜里你爬出洞穴，身体的颜色随着礁石变换。你在月光下慢慢爬行。', eff: { food: +5 } },
    { stages: ['juv'], w: 2, act: 'rest', text: '你在洞口的阴影里待着，只把腕伸出来感受水流的方向。', eff: { health: +4 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '你守在洞口，腕在石缝里缓缓摆动，颜色慢慢和礁石融为一体。', eff: { health: +3, food: -3 } },
    { stages: ['juv','adult'], w: 1, text: '海底的石头被风暴翻起来，你的洞被泥沙堵住了一半。', eff: { safety: -15 } },
    { stages: ['juv'], w: 2, need: 'med', act: 'forage', text: '地中海的岩礁上，小螃蟹和贝类都多。你在一块石头下面抓到一只螃蟹，腕上的吸盘一下子缠了上去。', eff: { food: [10, 18] } },
    { stages: ['adult'], w: 2, need: 'med', text: '夏天水温升得很高，你的动作比同龄的章鱼都快，身体长得很饱满。', eff: { health: +3, food: -5 } },
    { stages: ['adult','old'], w: 1, need: 'med', text: '一个夏天的热浪持续了很久，海底的水变得浑浊。你在洞里躲了半个月。', eff: { safety: -5, food: -8 } },
    { stages: ['juv','adult'], w: 2, need: 'cold_sea', text: '冷水让你的动作变慢。你要花更长的时间，才能把一只蟹拖回洞里。', eff: { food: -5 } },
    { stages: ['adult'], w: 2, need: 'cold_sea', text: '冬天的海水很冷，你在洞里待了好几个星期，只偶尔伸出一只腕试探水温。', eff: { health: +3, food: -8 } },
    { stages: ['old'], w: 1, need: 'cold_sea', text: '你的身体慢慢变凉，皮肤上的颜色褪得比别的章鱼慢。你还能在洞里待一阵子。', eff: { health: +2 } },
    { stages: ['juv','adult'], w: 3, need: 'port', act: 'forage', text: '渔船卸货之后，码头下的水里漂着小鱼和碎虾。你钻进一个旧渔网的缝隙，吃了整整一顿。', eff: { food: [15, 25] } },
    { stages: ['juv','adult'], w: 2, need: 'port', text: '你伸腕钻进一个陶罐，里面有一只螃蟹。罐口很窄，你费了很大力气才把腕抽出来。', eff: { health: -5, food: +10 } },
    { stages: ['adult'], w: 2, need: 'port', text: '一条渔船的螺旋桨从上方经过，海水被搅成一团白沫。你缩进洞里，耳朵里全是嗡嗡的响声。', eff: { safety: -10 } },
    { stages: ['juv','adult'], w: 2, need: 'reef', act: 'forage', text: '珊瑚礁的缝隙里，小鱼成群地游过。你用腕一扫，就抓住了两条。', eff: { food: [15, 22] } },
    { stages: ['adult'], w: 2, need: 'reef', text: '一条海鳝住在你洞口隔壁的礁石缝里。你们每天都在彼此的范围里小心地移动。', eff: { safety: -8 } },
    { stages: ['juv'], w: 1, need: 'reef', text: '你的皮肤变成了珊瑚的颜色，身上的花纹随着光线一点一点地跳动。', eff: { safety: +4 } },
    { stages: ['juv'], w: 2, need: 'storm', text: '风暴连续三天翻动海底的沙子。你的洞口被埋住了一半，你用腕一点一点地把沙子挖开。', eff: { safety: -10, food: -5 } },
    { stages: ['adult'], w: 2, need: 'storm', act: 'hide', text: '你躲在洞深处，外面的浪把石头推来推去，发出闷闷的响声。', eff: { safety: +5, food: -5 } },
    { stages: ['paralarva'], w: 2, need: 'storm', text: '风暴把你卷进了浅水区的涡流里。你随着海水一起翻滚，被冲向远处。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'calm', act: 'rest', text: '整整一个月海面都很平静。阳光穿过水面，在洞口的石头上画着细碎的光斑。', eff: { health: +4 } },
    { stages: ['adult'], w: 2, need: 'calm', act: 'explore', text: '平静的海面下，你走得很远，一直爬到一片你没去过的沙滩边缘。', eff: { food: +12, safety: -3 } },
    { stages: ['paralarva'], w: 1, need: 'calm', text: '海面很平，浮游幼体在水里漂得很慢。水流把你带到了更远的地方。' },
    { stages: ['egg'], w: 2, need: 'warm_year', text: '海水比往年暖得多，卵串在温水里发育得更快。守卵的母亲也衰弱得更快。' },
    { stages: ['paralarva'], w: 2, need: 'warm_year', text: '温水里的浮游生物多得惊人。你吃饱了，身体却也消耗得更快。', eff: { food: +10, health: -3 } },
    { stages: ['adult','old'], w: 2, need: 'warm_year', text: '这一年你长得特别快，但水里的氧气越来越少，你不得不一次次把腕伸出洞口，换一换水。', eff: { health: -5 } },
    { stages: ['juv'], w: 2, need: 'bold', act: 'explore', text: '你不肯待在洞里。你把整片礁石都摸了一遍，沙子被你弄得四处飞。', eff: { food: +8, safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', act: 'hide', text: '你每次出洞前都先把腕伸出去，确认没有鱼在等你，才慢慢爬出来。', eff: { safety: +5 } },
    { stages: ['juv'], w: 2, need: 'runt', text: '你比同伴都小。蟹在礁石上跑得太快，你追不上，只能去捡它们掉下来的碎壳。', eff: { food: -5 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '一条海鳝咬住了你的腕。你用力一甩，把它甩进了沙地，它松开了口。', eff: { health: -5, safety: +5 } },
    { stages: ['adult'], w: 1, need: 'curious', text: '你把一个空贝壳搬到洞口，用腕把它一下一下拨到不同的位置，直到你觉得它该在的地方。' },
  ],

  opening: {
    title: '母亲在找产卵的洞',
    body: '你还没有出生。母亲在浅海的礁石缝里转了很久，她要决定把卵挂在哪一个洞的哪一面。洞口朝着海流会有更多氧气，但也更容易被蟹和鱼发现。',
    options: [
      { t: '挂在洞口，朝着海流', hint: '氧气↑ 风险↑', eff: { food: +10 }, risk: 1.2, riskDays: 60,
        result: '卵挂在洞口。水流一直在卵上吹过，但也有很多眼睛看着这里。' },
      { t: '挂在洞深处的角落', hint: '更安全 · 氧气少', eff: { food: -5, safety: +10 }, risk: 0.85, riskDays: 60,
        result: '卵挂在洞深处。这里很暗，只有很少的水流能进来。' },
    ],
  },

  actions: {
    forage:  { name: '捕食', desc: '在礁石和沙地里找蟹、贝类和小鱼，用腕把它们拖回洞里。', text: ['你用腕按住一只蟹，慢慢拖回洞里。', '你伸进一个贝壳，把里面的肉掏了出来。'] },
    hide:    { name: '伪装躲藏', desc: '改变身体颜色和质地，贴着礁石不动，必要时喷墨。', text: ['你的皮肤变得和礁石一样粗糙。', '你贴着石头，一动不动。'] },
    rest:    { name: '守在洞里', desc: '待在洞里不动，减少消耗。', text: ['你在洞里静静地待着。'] },
    explore: { name: '离开洞穴', desc: '离开熟悉的洞，去找新的礁石和食物。', text: ['你离开洞穴，爬过一片沙地。'] },
    mate:    { name: '交配', done: '你们的腕缠在一起。之后你产下了 {n} 枚卵。' },
  },
  brood: [50, 120],

  decisions: [
    {
      id: 'first_out', at: 105,
      title: '第一次出洞',
      body: '你刚刚长成底栖的小章鱼。洞外的礁石上有蟹在爬，夜里的海水也更暗。你需要决定什么时候出去找吃的。',
      fact: '普通章鱼的幼体经过浮游期后，会在海底的洞穴和礁石缝里安家（Boyle & Rodhouse 2005）',
      options: [
        { t: '夜里出洞觅食', hint: '饱食↑ 风险↑',
          eff: { food: +20 }, risk: 1.5, riskDays: 4,
          result: '你借着夜色爬出洞，吃到了一只蟹。你回来的路上，有一条鱼在远处游过。' },
        { t: '白天躲在洞里', hint: '安全 · 饿',
          eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 4,
          result: '你整天待在洞里，颜色和石头一样。肚子一直空着。' },
      ],
    },
    {
      id: 'food_low', at: 180, when: { food: '<50' },
      title: '螃蟹越来越少',
      body: '洞口附近的蟹已经被你吃得差不多了。外面的沙地上有一片贝类，但没有遮挡，周围的鱼也多。',
      options: [
        { t: '去外面的沙地', hint: '饱食↑↑ 风险↑',
          eff: { food: +25 }, risk: 1.6, riskDays: 5,
          result: '你爬过沙地，吃到了很多贝类。路上你看到了一条海鳝的影子。' },
        { t: '守在洞里等', hint: '安全 · 饿',
          eff: { food: -10, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你继续在洞里等。食物慢慢消耗，你的身体也慢慢变轻。' },
      ],
    },
    {
      id: 'mate_male', at: 240, need: 'male',
      title: '一只雌章鱼靠近',
      body: '一只雌性章鱼在你的洞口附近游动。它的腕在礁石上摸索，像是在告诉你它准备好了。',
      fact: '雄性普通章鱼交配后不久便会死去，它的生殖腕会在交配时被放入雌性的外套腔（Hanlon & Messenger 2018）',
      options: [
        { t: '靠近，交配', hint: '后代↑↑ 寿命↓↓',
          eff: { offspring: [50, 100] }, kill: 0.9, cause: 'mating_death', risk: 1.2, riskDays: 3,
          result: '你伸出生殖腕，交配完成。之后的几天，你的身体慢慢衰退。' },
        { t: '不靠近，继续在洞里待着', hint: '寿命↑ 后代↓',
          eff: { safety: +5 }, result: '你留在洞里，那只雌章鱼慢慢游远了。' },
      ],
    },
    {
      id: 'lay_eggs', at: 230, need: '!male',
      title: '卵要挂在哪里',
      body: '你的卵巢已经成熟。你需要找一个安全的洞，把卵串挂上去。洞越安静，卵就越有机会孵化；但洞越深，你就越难出来觅食。',
      options: [
        { t: '立刻产卵，守着它们', hint: '后代↑↑ 饿',
          eff: { offspring: [300, 800], food: -10 }, risk: 1.0, riskDays: 5,
          result: '你把卵串一串串挂在洞顶，开始守卵。之后你几乎不吃东西。' },
        { t: '再捕食一段时间', hint: '饱食↑ 后代↓',
          eff: { food: +15, offspring: [100, 300] }, risk: 1.2, riskDays: 5,
          result: '你又吃了几天，才把卵挂上去。' },
      ],
    },
    {
      id: 'eel', at: 300, when: { safety: '<40' },
      title: '海鳝在洞口',
      body: '一条海鳝把头伸进了你的洞。它的眼睛在水里很亮，你的腕已经缠住了洞口的石头。',
      options: [
        { t: '躲进洞深处，不动', hint: '安全↑↑',
          eff: { safety: +15 }, risk: 0.6, riskDays: 3,
          result: '你缩进洞深处。海鳝在洞口停了很久，然后慢慢离开了。' },
        { t: '喷墨，再伪装', hint: '安全↑ 饱食↓',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 2,
          result: '墨汁散开，你的颜色变成礁石的颜色。海鳝扑空，你趁机爬到洞的另一侧。' },
      ],
    },
    {
      id: 'old_female', at: 470, need: 'female',
      title: '要不要离开洞穴觅食',
      body: '卵还在洞顶，你的身体已经很轻。洞外的沙地上还有一些贝类，但离开洞，卵就没有人守了。',
      options: [
        { t: '离开洞，去觅食', hint: '饱食↑ 风险↑',
          eff: { food: +30 }, risk: 1.8, riskDays: 10,
          result: '你离开洞穴，找到了一些贝类。回来时，卵串上多了一层灰色的沙。' },
        { t: '留在洞里守卵', hint: '后代保住 · 饿',
          eff: { food: -20, safety: +10 }, risk: 1.0, riskDays: 10,
          result: '你继续守着卵。卵在你的身体旁边一颗一颗变得透明。' },
      ],
    },
    {
      id: 'port_trap', at: 150, need: 'port',
      title: '码头下的陶罐',
      body: '一只螃蟹在一个陶罐里，罐口朝上，卡在木桩的缝隙里。你闻到它的味道，它的腿在罐壁上一下一下地敲。',
      options: [
        { t: '伸腕钻进罐里抢', hint: '饱食↑↑ 被捕风险↑', eff: { food: +25 }, kill: 0.12, cause: 'trap',
          result: '你伸进罐口，抓住了螃蟹。罐口很窄，你的腕被卡住了，罐子跟着你一起被拉了上来。' },
        { t: '绕开，去礁石缝里找', hint: '安全 · 饿', eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你放弃了那只螃蟹，沿着木桩慢慢爬向另一块礁石。' },
      ],
    },
    {
      id: 'reef_eel', at: 260, need: 'reef',
      title: '隔壁的海鳝',
      body: '一条海鳝住在你洞口隔壁的礁石缝里。它每天傍晚都会探出头来，眼睛在水里很亮。',
      options: [
        { t: '搬到礁石的另一侧', hint: '安全↑ 食物少', eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 10,
          result: '你用腕把自己一点一点挪过去，每挪一步都停下来看一看。' },
        { t: '守着自己的洞，等它走开', hint: '饱食↑ 风险↑', eff: { food: +5 }, risk: 1.3, riskDays: 10,
          result: '海鳝在你的洞口停了几个晚上。你几乎没有出去。' },
      ],
    },
    {
      id: 'storm_hole', at: 200, need: 'storm',
      title: '风暴过后的洞口',
      body: '风暴把洞口的泥沙堆成了一堵墙。洞里的空气很闷，水流从石缝间慢慢渗进来。',
      options: [
        { t: '用腕把泥沙一点点挖开', hint: '安全↓ 饱食↓', eff: { safety: -5, food: -5 }, risk: 1.1, riskDays: 4,
          result: '你挖了整整一个白天，泥沙才露出一条缝。' },
        { t: '搬去另一个洞', hint: '安全↑ 饿', eff: { safety: +5, food: -10 }, risk: 1.3, riskDays: 4,
          result: '你在石缝里摸索，找到一个比较干净的洞。路上，你碰到了一只陌生的蟹。' },
      ],
    },
    {
      id: 'warm_water', at: 300, need: 'warm_year',
      title: '水越来越暖',
      body: '浅水区的温度已经超过了往年。浅水里食物多，但氧气越来越少。深水凉一些，离食物也远一些。',
      options: [
        { t: '守在浅水的洞里', hint: '饱食↑ 氧气↓', eff: { food: +10, health: -5 }, risk: 1.2, riskDays: 20,
          result: '浅水里的食物多。你每隔一会儿就要把腕伸出洞口，换一换水。' },
        { t: '下潜到深水', hint: '氧气↑ 饱食↓', eff: { food: -10, health: +5 }, risk: 0.9, riskDays: 20,
          result: '深水凉一些。你慢慢沉下去，身体的颜色也跟着变暗了。' },
      ],
    },

  ],

  idle: [
    '你在洞里待着，腕轻轻地摆动。',
    '水流从洞口穿过，带来一点氧气和沙子。',
    '你的皮肤颜色随着光线慢慢变化。',
    '远处有蟹在礁石上爬，它们的声音很小。',
    '你用吸盘尝着水里的味道，判断哪里有贝类。',
    '白天的光很亮，你把身体缩进洞的深处。',
    '一条小鱼从洞口游过，你没有动。',
    '夜里的礁石上，你慢慢地爬行，颜色不断变换。',
  ],

  epitaph: '你有三颗心，蓝色的血，只活了两年。你守着的卵，有一颗会在某个礁石缝里孵出来。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'frog',
  name: '黑斑侧褶蛙',
  en: 'Black-spotted pond frog',
  sci: 'Pelophylax nigromaculatus（黑斑侧褶蛙）',
  emoji: '🐸',
  scene: 'pond',
  kind: 'wild',
  tagline: '春天的水田里，每一只雄蛙都在叫。',
  taxon: '脊索动物门 › 两栖纲 › 无尾目 › 蛙科',
  size: '成蛙体长约 5–9 厘米',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['稻田边一个积着雨水的浅坑', 3, { food: +5 }],
        ['池塘边缘的水草丛', 3, { food: +10 }],
        ['水库岸边的一条浅沟', 2, { food: -5, risk: 1.1 }],
      ]},
      { label: '这一年的雨水', options: [
        ['雨水充沛的一年，池塘的水很深，春天来得早', 3, { food: +5, set: 'wet' }],
        ['正常的一年', 4, { set: 'normal' }],
        ['干旱的一年，春天的雨很少，池塘浅了一大截', 2, { food: -5, risk: 1.2, set: 'dry' }],
        ['暖冬之后春天很早，蝌蚪提前孵化，但倒春寒把水温压了下去', 1, { risk: 1.2, set: 'coldsp' }],
      ]},
      { label: '这一片水域里的蛙', options: [
        ['只有黑斑侧褶蛙的一片水域', 3, { set: 'pure' }],
        ['和另一种水蛙混居的水域，雄蛙的叫声会混在一起', 2, { risk: 1.05, set: 'mixed' }],
        ['一片刚放了鱼苗的池塘', 1, { food: -5, risk: 1.15, set: 'stocked' }],
      ]},
    ],
    siblings: 2000,
    siblingsLabel: '同一团卵块',
    intro: '你是一颗卵，在{出生地}里，裹在一团透明的胶质中。你是{sex}。和你同一团卵块的有 {siblings} 颗。',
  },

  stages: [
    { id: 'egg',     name: '卵',          from: 0,    unit: 'day' },
    { id: 'tadpole', name: '蝌蚪',        from: 10,   unit: 'week' },
    { id: 'froglet', name: '幼蛙',        from: 80,   unit: 'month' },
    { id: 'adult',   name: '成蛙',        from: 365,  unit: 'month' },
    { id: 'old',     name: '老年',        from: 1600, unit: 'month' },
  ],
  maturity: 730,
  maxAge: 2400,

  survival: [[0,1],[10,0.2],[30,0.1],[80,0.02],[200,0.008],[365,0.004],[730,0.0015],[1200,0.0006],[1800,0.0002],[2400,0]],
  survivalNote: '野外蛙类寿命数据稀少；此曲线按卵与蝌蚪的高死亡率、成蛙每年约 40–60% 的死亡率粗估，属于未经核实的粗略估计',

  init: { health: 70, food: 50, safety: 45 },
  foodDrain: 3,

  causes: [
    { id: 'heron', escape: true, w: 4, stages: ['froglet','adult','old'], short: '被鹭鸟叼走',
      text: '一只池鹭的长喙从水面上方刺下来。你跳进水里，但它的喙比你的跳还快。' },
    { id: 'snake', escape: true, w: 3, stages: ['froglet','adult','old'], short: '被蛇吞下',
      text: '一条菜花蛇从草丛里伸出头。它先咬住你的后腿，然后慢慢把你往嘴里送。' },
    { id: 'fish', escape: false, w: 3, stages: ['tadpole'], short: '被鲤鱼吃掉',
      text: '一条鲤鱼从池底游上来，它的嘴吸住了你，你没来得及躲开。' },
    { id: 'egg_eaten', escape: false, w: 5, stages: ['egg'], short: '卵块被水生昆虫幼虫吃掉',
      text: '一只水生甲虫的幼虫从卵块边缘咬了一口，胶质里的卵一颗颗被吞下。' },
    { id: 'chytrid', escape: false, w: 2, stages: ['tadpole','froglet','adult','old'], short: '皮肤被蛙壶菌感染',
      text: '你的皮肤上长出了灰白色的斑块。皮肤失去了调节水分和离子的能力，心脏慢慢停下了。' },
    { id: 'drought', escape: false, w: 2, stages: ['tadpole'], short: '池塘干涸',
      text: '连着几周没有下雨，池塘的水一天比一天浅。你还没变成蛙，就被晒干在泥里。' },
    { id: 'cold', escape: false, w: 1, stages: ['froglet','adult'], short: '冬眠时冻死',
      text: '你钻进淤泥里冬眠，但那年冬天特别冷，淤泥表层结了冰，你没能醒过来。' },
    { id: 'old', w: 0, short: '衰老', text: '你的动作越来越慢，叫声越来越轻，直到池边的草丛里再也没有你的声音。' },
  ],

  events: [
    { stages: ['egg'], w: 3, text: '卵块漂在水面下，胶质包着一颗颗黑色的卵。阳光透进来，你的颜色在一天天加深。' },
    { stages: ['egg'], w: 2, once: true, text: '一阵春雨落在池塘上，水温一下子升高了。你们的胚胎发育得快了一些。' },
    { stages: ['tadpole'], w: 3, text: '你的尾巴在水里一摆一摆，第一次尝到了藻类，嘴里满是绿色的味道。', eff: { food: +10 } },
    { stages: ['tadpole'], w: 3, act: 'forage', text: '你在水草上刮下一层绿色的藻膜，肠子里一下子充实起来。', eff: { food: [15, 25] } },
    { stages: ['tadpole'], w: 2, act: 'hide', text: '你躲进淤泥里，只露出两只眼睛。水很浑，外面的东西看不清你。', eff: { safety: +10, food: -5 } },
    { stages: ['tadpole'], w: 2, act: 'rest', text: '你停在水底，几乎不动，只有尾巴偶尔轻轻颤一下。', eff: { health: +5 } },
    { stages: ['tadpole'], w: 2, act: 'explore', text: '你游出了浅水区，去了池塘中央。那里的水更深，藻类也更多。', eff: { food: +10, safety: -10 },
    },
    { stages: ['tadpole'], w: 2, text: '一条鲤鱼从池底经过，它搅起的泥沙把你的视线遮住了。', eff: { safety: -10 } },
    { stages: ['froglet'], w: 2, once: true, text: '你长出了后腿，尾巴开始被身体吸收。你第一次感觉到自己能跳得很远。', eff: { health: +5 } },
    { stages: ['froglet'], w: 3, act: 'forage', text: '你伸出舌头，一只蚊子就这样被你卷进嘴里。', eff: { food: [10, 20] } },
    { stages: ['froglet'], w: 2, act: 'hide', text: '一个影子从上方掠过。你扑进水里，躲到水草下面。', eff: { safety: +10, food: -5 } },
    { stages: ['adult'], w: 3, act: 'forage', text: '晚上，你在水边的草丛里等。一只飞蛾停在你面前，你的舌头弹了出去。', eff: { food: [15, 25] } },
    { stages: ['adult'], w: 2, act: 'rest', text: '你在水边晒太阳，身体慢慢暖起来。', eff: { health: +5 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你离开原来的池塘，跳过一条田埂，去了另一个水塘。', eff: { food: +10, safety: -15 } },
    { stages: ['adult'], w: 1, once: true, act: 'mate', text: '一只雄蛙在水边鸣叫，声音在夜里传得很远。你跳进水里，抱住一只雌蛙。', eff: { offspring: [600, 1500] },
      fact: '许多蛙类的雄性通过鸣叫吸引雌性，鸣叫的频率和强度会影响雌性的选择（Gerhardt & Huber 2002）' },
    { stages: ['adult'], w: 2, text: '白鹭在岸边踱步，你停住不动，连眼睛都不眨。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, text: '一条菜花蛇从草丛里伸出头。你的后腿一蹬，跳进了水里。', eff: { safety: -15 } },
    { stages: ['adult','old'], w: 1, text: '池塘的水变浑了，表面浮着一层薄膜。岸边有一只同伴死了，它的皮肤是灰白色的。', eff: { health: -8 },
      fact: '蛙壶菌（Batrachochytrium dendrobatidis）病害导致澳大利亚和中美洲雨林中的蛙类大量死亡（Berger 等 1998，PNAS）' },
    { stages: ['old'], w: 1, once: true, text: '你的皮肤变得很干，颜色也暗了一些。你很少再跳了。', eff: { health: -10 } },
    { stages: ['old'], w: 2, text: '夜里的鸣叫越来越轻。你几乎不再叫了，只是待在水边。', eff: { food: -5 } },
    { stages: ['tadpole'], w: 3, need: 'wet', text: '池塘的水很深，藻类长得密。你的身体比同池的蝌蚪长得快。', eff: { food: +8 } },
    { stages: ['tadpole','froglet'], w: 2, need: 'wet', text: '春天的雨下个不停，池塘的水一直是满的。你在水里待了很久。', eff: { health: +3 } },
    { stages: ['tadpole'], w: 2, need: 'normal', text: '池塘里的水不深不浅，藻类和小虫子都够吃，你长得不快也不慢。', eff: { food: +4 } },
    { stages: ['froglet','adult'], w: 2, need: 'normal', text: '天气正常，你在草丛里捕虫，身体一年比一年结实。', eff: { health: +2 } },
    { stages: ['tadpole'], w: 3, need: 'dry', text: '池塘的水一天比一天浅，露出了边上的淤泥。你挤在水最深的地方。', eff: { safety: -5, food: -5 } },
    { stages: ['tadpole'], w: 2, need: 'dry', once: true, text: '夏天的一场大风吹过，池子里的水又少了一截。', eff: { health: -6 } },
    { stages: ['egg'], w: 2, need: 'coldsp', text: '暖冬之后，卵块提前在水里鼓了起来。一场倒春寒把水温降了下去，卵停住了。', eff: { health: -4 } },
    { stages: ['tadpole'], w: 2, need: 'coldsp', text: '你提前孵化了，水温却没有跟上来。你在水底慢慢动，吃得很少。', eff: { food: -5 } },
    { stages: ['tadpole'], w: 2, need: 'pure', text: '池塘里的蝌蚪只有一种，互相之间不抢地方，你游得很自在。', eff: { safety: +3 } },
    { stages: ['adult'], w: 2, need: 'pure', text: '夜里，池边只有你们这一种蛙在叫，声音清楚地传过水面。' },
    { stages: ['tadpole','froglet'], w: 2, need: 'mixed', text: '池子里的蛙类混居，叫声一阵乱。你在水边找不到自己的位置。', eff: { health: -2 } },
    { stages: ['adult'], w: 2, need: 'mixed', text: '你在水边鸣叫，另一种蛙的声音也跟着响起来。你不确定有没有雌蛙听到。', eff: { food: -3 } },
    { stages: ['tadpole'], w: 3, need: 'stocked', text: '池子里放了许多鲢鱼和鲤鱼苗。它们在水底搅起泥沙，把你的视线遮住了。', eff: { safety: -10 } },
    { stages: ['froglet','adult'], w: 2, need: 'stocked', text: '池里的鱼多，钓鱼的人晚上提着灯来。灯光照在水面上，你藏进了草根下。', eff: { safety: +4, food: -3 } },
    { stages: ['tadpole'], w: 2, need: 'runt', text: '你比同批的蝌蚪小，游在最后面，水草都被别的蝌蚪吃完了。', eff: { food: -6 } },
    { stages: ['froglet','adult'], w: 2, need: 'robust', text: '你的后腿比别的幼蛙结实，一跳就越过了一丛草。', eff: { safety: +4 } },
    { stages: ['adult'], w: 2, need: 'bold', text: '一只蜻蜓落在你面前，你直接扑了上去，结果落进了水里，呛了一口。', eff: { food: +6, health: -3 } },
    { stages: ['adult'], w: 2, need: 'cautious', text: '你在水边坐了很久，只露出两只眼睛。白鹭走过去之后，你才开始吃东西。', eff: { safety: +6, food: -4 } },
    { stages: ['tadpole'], w: 2, need: 'curious', text: '你总在水草之间钻来钻去，发现一小块没有蝌蚪的浅水区，藻类很干净。', eff: { food: +8 } },
  ],

  opening: {
    title: '母亲在找产卵的水域',
    body: '你还没有出生。母亲是一只雌蛙，初春的雨后，她抱住一只雄蛙，要决定把卵产在哪里。水草丛里水深、安静，但也有很多鱼和水生昆虫；浅水的泥地边水温高，卵会孵得快，但水很容易干。',
    options: [
      { t: '产在水草丛边的深水区', hint: '饱食↑ 风险↑', eff: { food: +10 }, risk: 1.1, riskDays: 14,
        result: '卵块挂在水草上。你在胶质里慢慢长大，四周有很多吃的，也有很多眼睛。' },
      { t: '产在浅水的泥地边', hint: '更安全 · 食物少', eff: { food: -5 }, risk: 0.85, riskDays: 14,
        result: '卵块贴在泥地边。水温一天比一天高，但你们的池子也开始变浅。' },
    ],
  },

  actions: {
    forage:  { name: '吃藻或捕虫', desc: '蝌蚪刮食藻膜，成蛙用舌头捕捉昆虫。', text: ['你在水草上刮下一层绿色的藻膜。', '你的舌头弹出去，一只飞虫被你卷进嘴里。'] },
    hide:    { name: '躲进淤泥或水草', desc: '钻进淤泥、躲进水草下面，只露出眼睛。', text: ['你躲进淤泥，只露出两只眼睛。', '水草在你身上晃动，你一动不动。'] },
    rest:    { name: '停在水边晒太阳', desc: '不动，晒太阳或停在水底，减少消耗。', text: ['你在水边晒太阳，身体慢慢暖起来。'] },
    explore: { name: '去别的水塘', desc: '离开熟悉的水域，去找新的食物和水。', text: ['你跳过一条田埂，去了另一个水塘。'] },
    mate:    { name: '鸣叫求偶', done: '你抱住的那只雌蛙把卵产在水里，你让它们受精。之后水草上结出了 {n} 颗卵。' },
  },

  decisions: [
    {
      id: 'weed', at: 12,
      title: '水草区还是浅水',
      body: '你已经变成了蝌蚪。水草区有很多藻类，但也有鱼；浅水里比较安全，可吃的东西很少。',
      options: [
        { t: '去水草区吃藻', hint: '饱食↑ 风险↑',
          eff: { food: +15 }, risk: 1.3, riskDays: 3,
          result: '你在水草间吃得很饱。一条鲤鱼从你身边经过，你没有停。' },
        { t: '留在岸边的浅水', hint: '安全 · 食物少',
          eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 3,
          result: '你在岸边的浅水里慢慢地游，吃的东西不多，但安静。' },
      ],
    },
    {
      id: 'drought', at: 35, when: { food: '<40' },
      title: '水在变浅',
      body: '池塘的水一天比一天少。池子中央还有一片深水，但你要游过一大片浅滩。',
      fact: '池塘干涸是蝌蚪死亡的主要原因之一，许多蝌蚪在变态前就被晒干（Wells 2007，The Ecology and Behavior of Amphibians）',
      options: [
        { t: '游向中央的深水', hint: '风险↑ 饱食↑',
          eff: { food: +10 }, risk: 1.2, riskDays: 5,
          result: '你穿过浅滩，水很烫，但你到达了中央的深水区。' },
        { t: '留在原地等雨', hint: '风险↑↑',
          eff: { food: -5 }, risk: 2.0, riskDays: 10, kill: 0.15, cause: 'drought',
          result: '你留在原地。水一点点退下去，你身下的泥越来越硬。' },
      ],
    },
    {
      id: 'shore', at: 90, need: '!male',
      title: '上岸',
      body: '你的后腿已经长好，尾巴快要被吸收了。岸边的草地里有很多虫子，但陆地上也没有水的保护。',
      options: [
        { t: '上岸，去草地里捕虫', hint: '饱食↑ 风险↑',
          eff: { food: +10 }, risk: 1.3, riskDays: 10,
          result: '你第一次爬上岸。草地里的虫子很多，但头顶上有鹭的影子。' },
        { t: '留在水里', hint: '安全 · 食物少',
          eff: { safety: +5 }, risk: 0.9, riskDays: 10,
          result: '你留在水里，等身体变得更结实。' },
      ],
    },
    {
      id: 'winter', at: 200,
      title: '冬天要来了',
      body: '天气越来越冷，水面开始起雾。你的身体需要热量，但外面的虫子已经很少了。',      options: [
        { t: '钻进淤泥冬眠', hint: '安全↑ 寿命不增',
          skip: [120, 160], kill: 0.2, cause: 'cold', eff: { safety: +20, food: -5 },
          result: '你钻进池底的淤泥，身体慢慢变凉。你闭上眼睛，什么都听不见了。' },
        { t: '在水里继续活动', hint: '饿 风险↑↑',
          eff: { food: -10 }, risk: 1.8, riskDays: 30,
          result: '你继续在水里游。虫子越来越少，你的身体一天比一天轻。' },
      ],
    },
    {
      id: 'heron', at: 500,
      title: '池边的影子',
      body: '夜里，池边有一只鹭在走动。草丛那边也有一条蛇的影子。你要决定离开水边，还是留在草丛里找吃的。',
      options: [
        { t: '躲进水草下', hint: '安全↑ 饱食↓',
          eff: { safety: +15, food: -5 }, risk: 0.7, riskDays: 5,
          result: '你躲进水草下面，等那只鹭走远。' },
        { t: '跳到岸边捕食', hint: '饱食↑↑ 风险↑↑',
          eff: { food: +20 }, kill: 0.2, cause: 'heron', risk: 1.6, riskDays: 3,
          result: '你跳上岸，吃到了一大堆飞虫。那只鹭突然转过头。' },
      ],
    },
    {
      id: 'chorus', at: 700, need: 'male',
      title: '合唱',
      body: '春天的夜里，池塘边的雄蛙一只接一只地叫。你的声囊鼓起来，你要决定要不要加入。',
      fact: '雄蛙的鸣叫会吸引同种雌性，也会引来捕食者，所以合唱本身就是一种风险（Gerhardt & Huber 2002）',
      options: [
        { t: '加入合唱', hint: '后代↑↑ 风险↑',
          eff: { offspring: [400, 900] }, risk: 1.5, riskDays: 5,
          result: '你一直叫到天亮。一只雌蛙向你游了过来。' },
        { t: '安静地待在水底', hint: '安全 · 后代↓',
          eff: { health: +5, safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你安静地待在水底，听着别的雄蛙叫。' },
      ],
    },
    {
      id: 'spawn_site', at: 900, need: 'female',
      title: '产卵的地方',
      body: '卵已经在身体里成熟。你要决定把卵产在池塘中央的水草上，还是岸边的浅水里。',
      options: [
        { t: '池塘中央的水草上', hint: '后代↑ 风险↑',
          eff: { offspring: [500, 1200] }, risk: 1.2, riskDays: 3,
          result: '你把卵产在水草上。卵块在水里慢慢鼓起来，颜色是黑的。' },
        { t: '岸边的浅水', hint: '后代↓ 更安全',
          eff: { offspring: [300, 800] }, risk: 0.9, riskDays: 3,
          result: '你把卵产在岸边。这里水温高，卵孵得快，但池子会先变浅。' },
      ],
    },
    {
      id: 'frog_dry_year', at: 25, need: 'dry',
      title: '浅水里的一片泥',
      body: '池子南边的水已经干了，露出一片泥。北边还有一小洼水，中间的深水也还在，你要决定往哪里游。',
      options: [
        { t: '游向北边的小洼', hint: '饱食↓ 风险↑', eff: { food: -3 }, risk: 1.2, riskDays: 4,
          result: '你穿过一段泥地，到达了那一小洼水。水很温。' },
        { t: '留在中间的深水里', hint: '安全↑', eff: { safety: +5 }, risk: 1.1, riskDays: 3,
          result: '你留在中间的深水里。水不多，但还够你待。' },
      ],
    },
    {
      id: 'frog_stocked_lamp', at: 120, need: 'stocked',
      title: '钓鱼人的灯',
      body: '池边的钓鱼人把灯挂在树上。灯光照在水面上，你身边的鱼都往暗处沉。',
      options: [
        { t: '躲到水草下，等灯灭', hint: '安全↑', eff: { safety: +6 }, risk: 0.8, riskDays: 3,
          result: '你躲在水草下面，灯在上面亮了很久。' },
        { t: '跳上岸，去灯下吃飞虫', hint: '饱食↑↑ 风险↑↑', eff: { food: +12 }, kill: 0.15, cause: 'heron', risk: 1.5, riskDays: 2,
          result: '飞虫围着灯转，你吃了很多。一只白鹭从树上落下来。' },
      ],
    },

  ],

  idle: [
    '你在水边待着，偶尔鼓一下喉囊。',
    '池塘的水是绿色的，表面有一层薄薄的膜。',
    '远处有青蛙在叫，声音一阵一阵地传过来。',
    '你的眼睛在水面下，只能看见天上的云。',
    '水温随着白天的光变化，你的动作也跟着慢下来。',
    '岸边的草在风里摆，什么东西在草根下爬。',
    '一只蜻蜓落在水草上，它的翅膀闪着光。',
    '你的皮肤很湿，它会吸进水里的空气和离子。',
  ],

  epitaph: '你没有留下名字，只留下了一池的蝌蚪。下一年春天，它们会在同一个水边叫起来。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'salmon',
  name: '大麻哈鱼',
  en: 'Chum salmon',
  sci: 'Oncorhynchus keta（大麻哈鱼，又称狗鲑）',
  emoji: '🐠',
  sprite: [
    '................',
    '.......OOOO.....',
    '....OOOOOOOO....',
    '..OOOOOOOOOOO...',
    'OOOOOOOOOOOOOOO.',
    'OOOWKOOOOOOOOOOO',
    'OOOOOOOOOOOOOOOO',
    '..OOOOOOOOOOOO..',
    '....OOOOOOOO....',
    '.......OOO......',
    '........O.......',
    '................',
  ],
  pal: { O: '#d9663a', W: '#fff7ee', K: '#111111' },
  scene: 'river',
  kind: 'wild',
  tagline: '你出生的河，会是你回去死的地方。',
  taxon: '脊索动物门 › 辐鳍鱼纲 › 鲑形目 › 鲑科',
  size: '成鱼体长约 60–80 厘米，体重约 3–8 公斤',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['北太平洋沿岸一条小河的砾石河床里', 3, {}],
        ['一段有地下泉水渗出的河床', 2, { food: +5 }],
        ['一段被泥沙淤积的河床', 2, { food: -5, risk: 1.2 }],
      ]},
      { label: '孵化方式', options: [
        ['野生的河床，砾石是河水自己冲出来的', 4, { food: +5, set: 'wild_egg' }],
        ['孵化场的水槽，你在里面长到可以放归大河', 2, { risk: 1.3, set: 'hatch' }],
        ['一段被人修整过的河道，两岸是混凝土，河底是平的', 2, { risk: 1.15, set: 'channel' }],
      ]},
      { label: '那一年的河况', options: [
        ['那年冬天雪很大，春天融雪的水来得很猛，河床被冲刷过', 2, { risk: 1.2, set: 'flood' }],
        ['那年是干旱年，河水很浅，水温偏高', 2, { health: -8, risk: 1.3, set: 'drought' }],
        ['那年雨水正常，河水清凉，溪流里有很多水生昆虫', 3, { food: +10, set: 'normal_year' }],
      ]},
    ],
    siblings: 3000,
    siblingsLabel: '同一个产卵窝',
    intro: '你还是一颗卵，埋在{出生地}的砾石之间，靠水流带来的氧气呼吸。你是{sex}。和你同一个产卵窝的卵有 {siblings} 颗。',
  },

  stages: [
    { id: 'egg',          name: '卵（河床里）',    from: 0,    unit: 'week' },
    { id: 'fry',          name: '鱼苗（河里）',    from: 120,  unit: 'day' },
    { id: 'ocean_juv',    name: '海里的幼鱼',      from: 160,  unit: 'month' },
    { id: 'ocean_adult',  name: '海里的成鱼',      from: 540,  unit: 'month' },
    { id: 'spawner',      name: '返河产卵',        from: 1100, unit: 'week' },
  ],
  maturity: 1100,
  maxAge: 1600,

  survival: [[0,1],[120,0.15],[160,0.1],[200,0.06],[365,0.03],[540,0.012],[800,0.006],[1100,0.003],[1300,0.0015],[1450,0.0006],[1600,0]],
  survivalNote: '由回游鱼的年龄鉴定与渔获数据粗估；卵期和鱼苗期死亡率很高，入海后仍然有大量个体被捕食或被渔获',

  init: { health: 75, food: 50, safety: 50 },
  foodDrain: 3,

  causes: [
    { id: 'egg_loss', escape: false, w: 5, stages: ['egg'], short: '卵被泥沙埋住或被冲走',
      text: '河水突然涨了，泥沙压进砾石缝隙。缺了氧的卵一颗颗变白，有的被水流冲出了河床。' },
    { id: 'kingfisher', escape: true, w: 3, stages: ['fry'], short: '被翠鸟叼走',
      text: '一只翠鸟掠过水面，它的喙从水里叼起了你。你刚离开石缝，就被带出了水面。' },
    { id: 'seal', escape: true, w: 2, stages: ['ocean_juv','ocean_adult'], short: '被海豹咬住',
      text: '一只海豹从下方冲上来，它的牙咬住了你的身体，你用力挣扎，但它没有松开。' },
    { id: 'orca', escape: true, w: 1, stages: ['ocean_adult'], short: '被虎鲸追上',
      text: '海底传来虎鲸的声音。同伴们立刻转向，但你游得最慢的那一瞬间，它已经靠近了。' },
    { id: 'net', escape: true, w: 2, stages: ['ocean_adult'], short: '被流网缠住',
      text: '一张看不见的网挂在你的鳃上。你越挣扎，网缠得越紧。' },
    { id: 'bear', escape: true, w: 2, stages: ['spawner'], short: '被棕熊捕获',
      text: '一只棕熊蹲在瀑布下，爪子一掏，把你从水里甩到了岸上。' },
    { id: 'exhaust', escape: false, w: 3, stages: ['spawner'], short: '逆流耗尽，产卵后死亡',
      text: '你在急流中逆流而上，身体的能量早已耗尽。产卵之后，你的身体慢慢停下来，顺水漂向下游。' },
    { id: 'old', w: 0, short: '产卵后死亡', text: '你把卵埋进河床，身体也慢慢停下。你的遗体会成为河里的养分。' },
  ],

  events: [
    { stages: ['egg'], w: 3, text: '卵在砾石之间，水流从石缝里慢慢穿过，带来氧气。你的胚胎在缓慢地分化。' },
    { stages: ['egg'], w: 2, text: '一只小虫从石缝外爬过，它的身体碰到了卵膜，卵膜微微颤了一下。' },
    { stages: ['fry'], w: 2, once: true, text: '你破膜后，卵黄囊还挂在腹下。你躲在河床的石缝里，靠它吸收营养。',
      fact: '太平洋鲑属的鱼苗以卵黄为营养，离开河床后才开始主动觅食（Groot & Margolis 1991）' },
    { stages: ['fry'], w: 3, act: 'hide', text: '你躲在河床的石缝里，一动不动。水流从身上滑过。', eff: { safety: +10 } },
    { stages: ['fry'], w: 3, act: 'forage', text: '你追上一只水生昆虫的幼虫，一口吞了下去。', eff: { food: [15, 25] } },
    { stages: ['fry'], w: 2, act: 'explore', text: '你随水流被冲到了河口。咸水让你的身体一阵发紧，你只能慢慢适应。', eff: { food: +5, safety: -5 } },
    { stages: ['fry'], w: 2, text: '一只翠鸟掠过水面，你向石下缩去。', eff: { safety: -10 } },
    { stages: ['ocean_juv'], w: 3, act: 'forage', text: '你在海里追上一群小虾，它们在水里急速散开。', eff: { food: [15, 25] } },
    { stages: ['ocean_juv'], w: 2, act: 'hide', text: '你游进深一点的水层，那里比表层安全。', eff: { safety: +10, food: -5 } },
    { stages: ['ocean_juv'], w: 2, act: 'explore', text: '你随洋流游向大陆架以外，水温变得很稳定。', eff: { food: +10, safety: -5 } },
    { stages: ['ocean_juv'], w: 2, text: '海面上的鸟在俯冲，你又往下沉了几米。', eff: { safety: -10 } },
    { stages: ['ocean_adult'], w: 3, act: 'forage', text: '你在一片磷虾群里大口吃着。身体一天比一天结实，颜色变成了银白。', eff: { food: [20, 30], health: +5 } },
    { stages: ['ocean_adult'], w: 2, act: 'explore', text: '你游到了很远的北方，海水又冷又深。这里的食物比南方多。', eff: { food: [10, 20], safety: -10 } },
    { stages: ['ocean_adult'], w: 2, act: 'rest', text: '你和一群同类悬在水层里，随着洋流慢慢漂。', eff: { health: +5 } },
    { stages: ['ocean_adult'], w: 1, text: '海底传来虎鲸的声音，低沉而急促。所有同伴都转向躲避。', eff: { safety: -15 } },
    { stages: ['ocean_adult'], w: 1, once: true, text: '你感到地磁和气味在指引你。该回家了。', set: 'homeward',
      fact: '太平洋鲑在入海后，会利用地磁和河流的气味找到出生的河（Groot & Margolis 1991）' },
    { stages: ['spawner'], w: 1, once: true, text: '你回到了出生的河。河水淡了，河床的气味变了，你认出了它。' },
    { stages: ['spawner'], w: 3, act: 'mate', text: '你在河床上挖出一个坑，把卵放了进去。雄鱼在你身边排出精子。', eff: { offspring: [2000, 4000] } },
    { stages: ['spawner'], w: 2, text: '你的身体颜色变暗，体侧出现红色和黑色的纹路。你的鳍被磨破了。', eff: { health: -10 } },
    { stages: ['spawner'], w: 2, text: '你顶着水流往上游。河床上到处是和你一样的鱼，它们也在挖坑。', eff: { food: -5 } },
    { stages: ['spawner'], w: 1, text: '一只棕熊蹲在瀑布下面，它的爪子一下一下地掏着水里的鱼。', eff: { safety: -15 },
      fact: '鲑鱼死后，尸体中来自海洋的氮被带入河岸森林，能促进云杉等树木的生长（Helfield & Naiman 2001，Ecology）' },
    { stages: ['spawner'], w: 1, once: true, text: '你的皮肤开始脱落，鳍不再能保持平衡。你随水漂到了岸边的石头上。', eff: { health: -15 } },
    { stages: ['egg'], w: 2, need: 'wild_egg', text: '河水在砾石之间慢慢流过，带来氧气。你身边的卵一颗颗变白，你还在透明的壳里。' },
    { stages: ['fry'], w: 2, need: 'wild_egg', text: '你第一次游出石缝，河床上铺满了石头和落叶。你熟悉这里的每一块石头。', eff: { food: +5 } },
    { stages: ['ocean_juv'], w: 1, need: 'wild_egg', text: '你在河口的浅水里停了很久，嗅着河水的味道，才慢慢游进海里。',
      fact: '鲑鱼在幼年时会记住故乡河水的气味，回来时靠它寻找河道（Hasler & Scholz，1983，《Olfactory Imprinting and Homing in Salmon》）' },
    { stages: ['egg'], w: 2, need: 'hatch', text: '你所在的水槽里，水从一根管子慢慢流进来。工作人员每天过来看一看，记下你们的数量。', eff: { health: +3 } },
    { stages: ['fry'], w: 2, need: 'hatch', text: '你第一次被放进河里。河水的流速比水槽快得多，你一直被往下游冲，停不下来。', eff: { safety: -5 } },
    { stages: ['ocean_juv'], w: 2, need: 'hatch', text: '你在海里游了几个月，但你的脂鳍被剪掉过。海里的鱼不再把你当作同类。', eff: { safety: -5 } },
    { stages: ['egg'], w: 2, need: 'channel', text: '河道两岸是混凝土，河底被整平过，卵只能落在碎石之间。', eff: { food: -5 } },
    { stages: ['fry'], w: 2, need: 'channel', text: '你在笔直的河道里游，没有石缝可躲。一只鸟在上面盘旋，你贴着河底一动不动。', eff: { safety: -5 } },
    { stages: ['ocean_juv'], w: 1, need: 'channel', text: '下游有一座闸门，水位突然降了下去，你被挡在一个浅坑里，过了很久才游出来。' },
    { stages: ['egg'], w: 2, need: 'flood', text: '春天的融雪水猛地涨上来，泥沙压进砾石缝隙。你身边的卵有一半被冲走了。', eff: { food: -5 } },
    { stages: ['fry'], w: 2, need: 'flood', text: '河水又急又浑，你被冲进一个陌生的弯道里，找不到原来的石缝。', eff: { safety: -8 } },
    { stages: ['ocean_adult'], w: 1, need: 'flood', text: '海里的食物很丰富，你长得又快又壮。', eff: { food: +8 } },
    { stages: ['egg'], w: 2, need: 'drought', text: '河水越来越浅，卵的表面开始接触空气。你身边有几颗已经变干了。', eff: { health: -5 } },
    { stages: ['fry'], w: 2, need: 'drought', text: '河水只剩下一条细流。你和同伴挤在一个深坑里，身边的水越来越热。', eff: { health: -6 } },
    { stages: ['ocean_juv'], w: 2, need: 'drought', text: '河口的水比往年咸，也比往年热。你在海里比平时更饿。', eff: { food: -8 } },
    { stages: ['fry'], w: 3, need: 'normal_year', text: '溪流里水生昆虫很多，你一口一口地吃，身体长得很快。', eff: { food: [10, 18] } },
    { stages: ['egg'], w: 1, need: 'normal_year', text: '河水清凉，石缝之间有很多细小的氧气泡。你在卵壳里慢慢长大。', eff: { health: +3 } },
    { stages: ['ocean_juv'], w: 2, need: 'normal_year', text: '河口的海水一天天变咸。你跟着一群鱼苗，慢慢游进了更深的水里。' },
    { stages: ['fry'], w: 2, need: 'bold', text: '你第一个离开石缝，游进河中间的急流。身后的同伴还在躲，你已经游远了。', eff: { safety: -5, food: +5 } },
    { stages: ['fry','ocean_juv'], w: 2, need: 'cautious', text: '你总是停在石缝里很久，等水里的动静过去，才慢慢往前游。', eff: { safety: +5, food: -3 } },
    { stages: ['ocean_juv'], w: 2, need: 'curious', text: '你在海底的礁石之间游来游去，看每一种鱼是怎么吃东西的。' },
    { stages: ['egg','fry'], w: 2, need: 'runt', text: '你个子比同伴小，挤不进石缝，只能在外面等水流把食物冲过来。', eff: { food: -5 } },
    { stages: ['ocean_juv','ocean_adult'], w: 2, need: 'robust', text: '你在海里长得很快。一头海豹咬到了你的背，只留下一道浅浅的伤口。', eff: { health: -3, safety: +3 } },
  ],

  opening: {
    title: '产卵的河床',
    body: '你还没有出生。母亲在河床上挖了一个坑，正在决定把卵埋在哪一段。上游的砾石很干净，水流急，氧气足，但水流也可能把卵冲走；下游水流慢，泥沙多，卵容易闷死。',
    options: [
      { t: '埋在上游水流湍急的砾石下', hint: '氧气↑ 冲走风险↑', eff: { food: -5 }, risk: 0.85, riskDays: 60,
        result: '卵埋进砾石深处。水流穿过石缝，带来氧气，也有很多东西在水里漂。' },
      { t: '埋在下游缓流的沙床里', hint: '泥沙↑ 氧气↓', eff: { food: +5 }, risk: 1.3, riskDays: 60,
        result: '卵埋在下游的沙床。水很慢，泥沙一层层压下来。' },
    ],
  },

  actions: {
    forage:  { name: '觅食', desc: '在河里吃水生昆虫，在海里追小虾和磷虾。', text: ['你追上一群小虾，它们在水里急速散开。', '你在磷虾群里大口吃着。'] },
    hide:    { name: '躲进深水或石缝', desc: '躲进石缝或深水层，减少被看见的机会。', text: ['你躲进石缝，一动不动。', '你游进深一点的水层，那里比表层安全。'] },
    rest:    { name: '随洋流漂', desc: '不主动游动，随洋流慢慢漂，减少消耗。', text: ['你随洋流慢慢漂。'] },
    explore: { name: '游向远方', desc: '离开熟悉的水域，去更远的海或河口。', text: ['你随洋流游向远方，水越来越冷。'] },
    mate:    { name: '产卵', done: '你在河床上产下了 {n} 颗卵，它们被你挖的坑盖住了。' },
  },

  decisions: [
    {
      id: 'downstream', at: 130, when: { food: '>0' },
      title: '入海的时机',
      body: '你已经从卵里孵出，身体还很小，躲在石缝里。春汛带来了更大的水流，河口的咸水已经能感觉到。你要决定什么时候顺流而下。',
      fact: '太平洋鲑的鱼苗在河里停留数周到数月，然后顺流入海（Groot & Margolis 1991）',
      options: [
        { t: '趁春汛顺流而下，入海', hint: '饱食↑ 风险↑',
          eff: { food: +5 }, risk: 1.4, riskDays: 10,
          result: '你随着春汛冲进河口。咸水让你很不舒服，但海已经在前面了。' },
        { t: '留在河口的浅水等几周', hint: '饱食↑ 风险↑↑',
          eff: { food: +10 }, risk: 1.6, riskDays: 20,
          result: '你在河口的浅水里等了几周，吃到了不少昆虫。河口也是很多鸟的捕食场所。' },
      ],
    },
    {
      id: 'school', at: 240,
      title: '跟着鱼群，还是独自游',
      body: '海里的一群同类正在朝北游。跟着它们，你不那么显眼；独自游，你可以找到更多吃的。',
      options: [
        { t: '跟着鱼群北上', hint: '安全↑ 食物↓',
          eff: { safety: +10, food: -5 }, risk: 0.9, riskDays: 20,
          result: '你跟着鱼群北上。成群的鱼在水里互相挡住了捕食者的视线。' },
        { t: '离开鱼群，自己找食', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, risk: 1.4, riskDays: 10,
          result: '你离开了鱼群，在一片新的磷虾区吃了很久。之后你才发现身边没有同伴了。' },
      ],
    },
    {
      id: 'shark', at: 450, need: '!homeward',
      title: '海面下的阴影',
      body: '一条大鱼的影子从下面升上来。它的身形比你大很多，你的鳍已经开始绷紧。',
      options: [
        { t: '潜入深水', hint: '安全↑ 饱食↓',
          eff: { safety: +10, food: -5 }, risk: 0.8, riskDays: 10,
          result: '你潜入深水。那个影子停了一会儿，然后慢慢消失了。' },
        { t: '继续沿表层追食', hint: '饱食↑↑ 风险↑',
          eff: { food: +15 }, kill: 0.1, cause: 'seal', risk: 1.5, riskDays: 5,
          result: '你继续在表层追食，身后的水突然翻了起来。' },
      ],
    },
    {
      id: 'homeward', at: 700, need: '!homeward',
      title: '该回家了',
      body: '海里的食物还够你吃。但你的身体开始感到一种说不清的牵引，地磁和河流的气味像在呼唤。',
      fact: '太平洋鲑在入海后经历数年，并通过地磁和嗅觉回到出生的河（Groot & Margolis 1991）',
      options: [
        { t: '按着地磁的方向，向西南回去', hint: '后代↑ 风险↑',
          eff: {}, risk: 1.2, riskDays: 30, set: 'homeward',
          result: '你转向西南。你的身体开始为回家做准备，皮肤颜色也慢慢地改变。' },
        { t: '在海里多吃一段时间', hint: '饱食↑↑ 后代↓',
          eff: { food: +25, health: +5 }, risk: 1.0, riskDays: 60,
          result: '你又吃了很久，身体变得很重。回家的时间被一次次推迟。' },
      ],
    },
    {
      id: 'waterfall', at: 1200, when: { health: '>30' },
      title: '瀑布前面',
      body: '你到了河里最窄的一段。前面有一段瀑布，水很急。你的身体已经很累了。',
      fact: '鲑鱼尸体把海洋来的氮带回河岸森林，能促进周边树木生长（Helfield & Naiman 2001，Ecology）',
      options: [
        { t: '跳过瀑布', hint: '风险↑↑',
          eff: {}, kill: 0.25, cause: 'bear', risk: 1.8, riskDays: 5,
          result: '你跃起，冲进瀑布的水帘。一只爪子从岸边伸过来。' },
        { t: '在下游找有泉水的产卵点', hint: '安全 · 绕远',
          eff: { health: -5 }, risk: 1.1, riskDays: 10,
          result: '你绕到下游，找到一段有地下泉水渗出的河床。水很凉，你停了下来。' },
      ],
    },
    {
      id: 'rival', at: 1250, need: 'male',
      title: '另一条雄鱼',
      body: '一条体型更大的雄鱼挡在你和一条雌鱼中间。它的颌已经张开，像是在警告你。',
      options: [
        { t: '咬住它的侧面，争夺', hint: '后代↑ 风险↑↑',
          eff: { offspring: [500, 1200] }, kill: 0.1, cause: 'exhaust', risk: 1.5, riskDays: 2,
          result: '你们在河床上互相撞击。你赢了一次，但身上多了几道伤口。' },
        { t: '绕到侧边，去找别的雌鱼', hint: '后代↑ 安全',
          eff: { offspring: [1000, 2500] }, risk: 1.1, riskDays: 5,
          result: '你绕到了侧边。那条雌鱼没有拒绝你，你们在一个新挖的坑里产下了卵。' },
      ],
    },
    {
      id: 'hatch_release', at: 130, need: 'hatch',
      title: '放归的那一天',
      body: '工作人员打开水槽的闸门，你们被放进了河里。河水很快，水面上有翠鸟在盘旋。',
      fact: '人工繁殖的鲑鱼在野外的繁殖成功率通常低于野生鱼，人工繁殖几代之后下降更明显（Araki、Cooper 与 Blouin，2007，Science）',
      options: [
        { t: '顺流而下，一直往海里游', hint: '快 · 风险↑', eff: { food: -3 }, risk: 1.4, riskDays: 20,
          result: '你随着水流一路向下游，没有停。翠鸟从你头顶掠过，你没有回头。' },
        { t: '躲到岸边的石缝里待几天', hint: '安全↑ 饿', eff: { safety: +5, food: -5 }, risk: 0.9, riskDays: 5,
          result: '你钻进岸边的石缝，等水流里的动静慢慢平息下来。' },
      ],
    },
    {
      id: 'estuary', at: 200, need: 'wild_egg',
      title: '河口的选择',
      body: '你游到了河口。水的味道变了，一边是熟悉的河水，一边是咸咸的海水。',
      options: [
        { t: '继续向海里游', hint: '食物↑ 风险↑', eff: { food: +5 }, risk: 1.2, riskDays: 20,
          result: '你进入了海水。身后的河水味道慢慢淡了。' },
        { t: '在河口的浅滩里停一停，闻一闻河水的味道', hint: '安全↑ 饿', eff: { safety: +3, food: -3 }, risk: 0.9, riskDays: 10,
          result: '你在浅滩里停了很久，记住了那股味道，然后才转身游向海里。' },
      ],
    },
    {
      id: 'flood_bend', at: 150, need: 'flood',
      title: '一个陌生的弯道',
      body: '河水把你冲进一个弯道。弯道里有一圈漩涡，另一边是一片宽阔的水草区。',
      options: [
        { t: '游进漩涡边缘的石缝', hint: '安全↑', eff: { safety: +5 }, risk: 0.9, riskDays: 5,
          result: '你贴着石缝游进去，漩涡在外面转了几圈，慢慢停了下来。' },
        { t: '贴着水流游向水草', hint: '食物↑ 风险↑', eff: { food: +10 }, risk: 1.4, riskDays: 5,
          result: '你穿过水流，钻进了水草里。水草很密，你在里面吃到了一些虫子。' },
      ],
    },
    {
      id: 'drought_pool', at: 140, need: 'drought',
      title: '只剩一个深坑',
      body: '河水只剩下一条细流，能待的深坑越来越少。下游有一片水草，但要穿过一片浅滩。',
      options: [
        { t: '穿过浅滩去水草那边', hint: '饱食↑↑ 被叼走的风险↑', eff: { food: +15 }, kill: 0.08, cause: 'kingfisher',
          result: '你贴着水面冲过浅滩。水草就在前面，你的背露在了外面，翠鸟的影子掠了过去。' },
        { t: '留在深坑里，等水回来', hint: '安全 · 饿', eff: { food: -10, health: -3 }, risk: 1.2, riskDays: 10,
          result: '你在深坑里等着。水很慢才回来，你一直饿着。' },
      ],
    },

  ],

  idle: [
    '你在水里慢慢游动，鳃盖一开一合。',
    '河水的温度随着季节慢慢变化。',
    '远处有鸟飞过，它的影子落在水面上。',
    '你的身体在海里渐渐发亮，颜色随着深浅变化。',
    '洋流把你推向北方，你顺着它游。',
    '你闻到的是盐，还有河水里的泥土和落叶的味道。',
    '河床上的砾石之间，有一些卵在静静地等待。',
    '一只水鸟停在岸边，它的眼睛在阳光下闪了一下。',
  ],

  epitaph: '你在海里长了几年，又回到了出生的河。你的身体成了河岸树木的养分，你的卵在砾石下面等着下一年的春天。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'duck',
  name: '养殖鸭',
  en: 'Meat duck (Pekin type)',
  sci: 'Anas platyrhynchos domesticus（北京鸭类，由绿头鸭驯化）',
  emoji: '🦆',
  scene: 'farm',
  kind: 'farmed',
  tagline: '一批肉鸭大约七周后出栏。很多鸭子从出壳到屠宰，都没有机会下一次水。',

  birth: {
    sex: [['雄性', 1], ['雌性', 1]],
    rolls: [
      { label: '饲养方式', options: [
        ['平养棚舍，只有几个水盆', 6, { health: -3 }],
        ['带一个浅水池的棚舍', 2, { set: 'water', health: +3 }],
        ['半散养的场地，有一小块泥地和水沟', 1, { set: 'water', risk: 1.1 }],
      ]},
      { label: '孵化季节', options: [
        ['冬天的一批，育雏室要加温', 2, { health: -4 }],
        ['春天的一批，温度比较稳', 3, {}],
      ]},
      { label: '孵化的地方', options: [
        ['一个大型孵化厂的商品鸭苗，一批几十万只', 4, { set: 'big_hatch' }],
        ['县里的小孵化户，一次只孵几千只', 2, { health: +3, set: 'small_hatch' }],
        ['一户农家自己留种孵出来的鸭子', 1, { health: +2, food: -3, set: 'home_hatch' }],
      ]},
      { label: '运到养殖场的路上', options: [
        ['鸭苗在纸箱里颠簸了一整天才到', 3, { health: -6, risk: 1.2, set: 'long_ride' }],
        ['鸭苗在路上只走了两个小时', 4, { set: 'short_ride' }],
        ['车在半路停了很久，箱子里闷热', 2, { health: -4, risk: 1.1, set: 'stuck_ride' }],
      ]},
    ],
    siblings: 12000,
    siblingsLabel: '同一批出雏的小鸭',
    intro: '你是一枚种蛋，是{孵化季节}。你将在{饲养方式}里长大。你是{sex}。同一批出雏的小鸭大约 {siblings} 只。',
  },

  stages: [
    { id: 'egg',     name: '种蛋（孵化机里）', from: 0,  unit: 'day' },
    { id: 'chick',   name: '雏鸭（育雏期）',   from: 28, unit: 'day' },
    { id: 'grower',  name: '中鸭（生长期）',   from: 42, unit: 'day' },
    { id: 'finisher', name: '育肥期',          from: 56, unit: 'day' },
  ],
  maturity: 180,
  maxAge: 77,

  survival: [[0,1],[1,0.99],[7,0.985],[21,0.97],[28,0.96],[35,0.94],[49,0.92],[56,0.9],[70,0.88],[76,0.86],[77,0.001]],
  survivalNote: '集约饲养的死亡率（含出雏后的早期死亡）粗估约 5–10%。最后一天的断崖是出栏屠宰，不是自然死亡，记在曲线末端。',

  init: { health: 80, food: 60, safety: 50 },
  foodDrain: 0,

  causes: [
    { id: 'old', escape: false, w: 0, short: '出栏屠宰',
      text: '到了七周，饲养员把你和同伴赶进笼车，运往屠宰场。整个过程按流程进行，你没有机会选择。' },
    { id: 'crush', escape: false, w: 4, stages: ['chick'], short: '在育雏灯下被同伴压死',
      text: '夜里育雏灯的一侧挤满了小鸭。下面的几只被压在最底下，没能爬出来。' },
    { id: 'coccidia', escape: false, w: 3, stages: ['chick','grower','finisher'], short: '球虫病',
      text: '肠道里的球虫在粪便里繁殖。几天之内你拉出带血丝的粪便，再也站不起来。' },
    { id: 'heat', escape: false, w: 3, stages: ['grower','finisher'], short: '热应激中暑',
      text: '棚里的温度超过三十度，风扇坏了一台。你张着嘴喘气，喘到最后不动了。' },
    { id: 'peck', escape: false, w: 2, stages: ['grower','finisher'], short: '被同伴啄伤后感染',
      text: '一只同伴啄破了你背上的皮，伤口在潮湿的垫料里感染了。' },
    { id: 'leg', escape: false, w: 2, stages: ['finisher'], short: '腿部病变，站不起来',
      text: '你的腿跟不上身体的重量。最后你趴在料槽边，没能再站起来。' },
    { id: 'predator', escape: true, w: 1, stages: ['grower','finisher'], short: '被黄鼠狼咬死',
      text: '一只黄鼠狼从棚门底下的破洞钻进来，咬住了你的脖子。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '孵化机里的温度稳定在 37.5 度左右。照蛋灯每天照你一次，你身体里的血管一根根长出来。' },
    { stages: ['egg'], w: 1, once: true, text: '照蛋的工人把你从蛋架上拿起来，看了一眼，又放回去，在记录表上画了一笔。' },
    { stages: ['egg'], w: 1, text: '一批蛋里有几枚已经不再发育了。它们被挑出来，扔进了废料桶。' },
    { stages: ['chick'], w: 1, once: true, text: '你破壳而出，身上湿漉漉的。第一眼看到的是一盏红色的育雏灯。', eff: { health: +5 } },
    { stages: ['chick'], act: 'forage', w: 4, text: '你啄到一粒料，咽下去，又低头找下一粒。料盘边上撒着细粉，嘴一碰就沾满了。', eff: { food: [10, 16] } },
    { stages: ['chick'], act: 'rest', w: 3, text: '你挤进灯下的那堆同伴里，身子暖了，眼皮很快就沉下去。', eff: { health: +4, safety: +4 } },
    { stages: ['chick'], w: 2, text: '角落里有一只同伴被压住了，叫声很快停了。饲养员把它拎出来，扔进了一个桶。', eff: { safety: -6 } },
    { stages: ['chick','grower'], act: 'hide', w: 2, text: '一只老鼠从料盘底下窜过。你缩进草垫下面，好一会儿才敢出来。', eff: { safety: +6, food: -4 } },
    { stages: ['grower'], act: 'explore', w: 3, text: '你走到棚舍的门边，门外是一小块水泥地，很亮。你站了一会儿，又走了回来。', eff: { safety: -4 } },
    { stages: ['grower'], need: 'water', act: 'explore', w: 3, text: '你走进浅水池，水没过胸口。你把头埋进去，又甩掉，羽毛立刻蓬松起来。', eff: { health: +6, safety: +3 } },
    { stages: ['grower'], need: '!water', w: 2, text: '你只能在水盆里沾湿嘴。没有水池，羽毛上的油脂下不去，身上越来越脏。', eff: { health: -4 } },
    { stages: ['grower','finisher'], act: 'forage', w: 3, text: '料槽边挤满了同伴，你只能用嘴推开它们，才能挤到一个位置。', eff: { food: [8, 12] } },
    { stages: ['grower'], act: 'rest', w: 2, text: '你趴在干燥的垫料上，身下热乎乎的，腿缩在身体底下。', eff: { health: +3 } },
    { stages: ['grower','finisher'], w: 2, text: '一只同伴背上的羽毛被啄掉一大片，它缩在墙角，别的鸭子都不靠近它。', eff: { safety: -5 } },
    { stages: ['grower'], w: 1, once: true, text: '饲养员第一次拿着秤进来，把你们一只只抓起来称重。' },
    { stages: ['finisher'], act: 'forage', w: 2, text: '饲料换成了高能量的。你长得很快，走路开始有点摇摆。', eff: { health: -3 } },
    { stages: ['finisher'], act: 'explore', w: 2, text: '你往棚子另一头的水池挪了几步，发现水已经很脏，漂着粪便。你退了回来。', eff: { health: -3 } },
    { stages: ['finisher'], w: 2, text: '夏天的夜里，风扇转个不停，噪音盖过了所有声音。你张着嘴，一呼一吸都很费劲。', eff: { health: -5 } },
    { stages: ['finisher'], w: 2, text: '球虫病又在棚里流行。地上有带血丝的粪便，身边的同伴一只一只倒下了。', eff: { health: -8 } },
    { stages: ['finisher'], w: 1, text: '一只黄鼠狼从棚门底下的破洞进来了。它把旁边的一只鸭子拖了出去。', eff: { safety: -15 } },
    { stages: ['finisher'], act: 'hide', w: 2, text: '你缩到墙角，把头埋进翅膀底下。周围的呼吸声很重，但你不想抬头。', eff: { safety: +6, food: -3 } },
    { stages: ['finisher'], w: 1, once: true, text: '秤响了一下，指针停在 3.1 公斤。饲养员在纸上写了个数字。' },
    { stages: ['finisher'], w: 1, text: '运输车的声音从远处的路上传来，所有鸭子都抬起了头。', eff: { safety: -5 } },
    { stages: ['chick','grower','finisher'], w: 1, text: '饲养员用手电照了一圈，关上门走了。棚里只剩下暖气和你们的呼吸。' },
    { stages: ['grower'], w: 1, text: '中午的棚里很闷。饲养员打开排风扇，一股凉风吹过你的羽毛。', eff: { health: +4 } },
    { stages: ['chick'], need: 'big_hatch', w: 2, text: '你和几十万只鸭子一起在孵化厂里出壳。育雏室的门一直开着，每天都有新的车进进出出。', eff: { health: -2 } },
    { stages: ['grower'], need: 'big_hatch', w: 2, text: '饲养员一天只来一次，他看的是表，不是你们。料槽和水盆都是按数量摆的。' },
    { stages: ['finisher'], need: 'big_hatch', w: 1, once: true, text: '墙上的一张表写着你们这一批的出栏日期。表上没有你，只有一个数字。' },
    { stages: ['chick'], need: 'small_hatch', w: 2, text: '孵化户的主人每天都来看你们，他用手摸摸你的背，确认你暖不暖和。', eff: { health: +4 } },
    { stages: ['grower'], need: 'small_hatch', w: 2, text: '院子边有一条小水沟，主人说泡一泡，羽毛会干净。你们就在那里泡了一下午。', eff: { health: +3 } },
    { stages: ['finisher'], need: 'small_hatch', w: 1, text: '主人家的狗在院子里走来走去。它没有咬你，但偶尔会对你们叫两声。', eff: { safety: -3 } },
    { stages: ['chick'], need: 'home_hatch', w: 2, text: '你是母鸡孵出来的。它蹲在你们身上，直到最后一只也出了壳。', eff: { health: +5 } },
    { stages: ['grower','finisher'], need: 'home_hatch', w: 2, act: 'explore', text: '你跟着母鸡到院子里找虫子。草叶上的露水打湿了你的脚。', eff: { food: +8 } },
    { stages: ['finisher'], need: 'home_hatch', w: 1, text: '一只黄鼠狼从院墙的缺口钻了进来。母鸡的叫声很响，你们都躲进了草堆。', eff: { safety: -4 } },
    { stages: ['chick'], need: 'long_ride', w: 2, text: '纸箱在卡车上颠簸了一整天。你们挤成一团，有的小鸭被压在了下面。', eff: { health: -6, safety: -3 } },
    { stages: ['chick'], need: 'long_ride', w: 2, once: true, text: '你到了育雏室，身上的绒毛乱成一团。饲养员把你们一只只放进水盆里泡了一下。', eff: { health: +2 } },
    { stages: ['grower'], need: 'long_ride', w: 1, text: '路上受过的惊吓，你还记得。每次有大车开过，你都会缩到角落里。', eff: { safety: -3 } },
    { stages: ['chick'], need: 'short_ride', w: 2, text: '你到了育雏室，还没站稳，就被推到了灯下那堆同伴旁边。', eff: { health: +3 } },
    { stages: ['chick'], need: 'short_ride', w: 2, text: '饲养员打开箱子，你看见的第一样东西是一盏红灯，天花板上挂着蜘蛛网。' },
    { stages: ['grower'], need: 'short_ride', w: 1, text: '你没在路上受过苦，羽毛比同批的鸭子光亮一些。', eff: { health: +2 } },
    { stages: ['chick'], need: 'stuck_ride', w: 2, text: '车在路边停了好几个小时，箱子里闷热。身边一只小鸭的喘息越来越慢。', eff: { health: -8 } },
    { stages: ['chick'], need: 'stuck_ride', w: 2, text: '到达的时候，你的脚一时站不稳。身边有几只小鸭再也没有起来。', eff: { safety: -5, health: -3 } },
    { stages: ['grower'], need: 'stuck_ride', w: 1, text: '你总是比别的鸭子晚一步吃料。别的鸭子已经吃上了，你还在一边喘。', eff: { food: -6 } },
    { stages: ['chick'], need: 'bold', w: 2, text: '你第一个从灯下那堆同伴里爬出来，走到水盆边，把头伸了进去。', eff: { food: +3 } },
    { stages: ['grower'], need: 'cautious', w: 2, text: '你总待在棚子最边上，看见人影就缩回墙角。料盘很近，你却要等别的鸭子吃完才过去。', eff: { safety: +4, food: -3 } },
    { stages: ['grower'], need: 'curious', w: 2, text: '你沿着棚子走了一圈，找到一个小洞，外面是一小块草地。你把头伸出去看了一会儿。' },
    { stages: ['chick'], need: 'runt', w: 2, text: '你比同批的小鸭都轻，抢料时总是抢不过。饲养员有时会把你单独拎到一边，让你多吃一会儿。', eff: { food: +4 } },
    { stages: ['finisher'], need: 'robust', w: 2, text: '你的胸脯宽，长得快。同伴挤过来的时候，你能顶住，不会被推开。', eff: { safety: +4 } },
  ],

  opening: {
    title: '孵化厂的蛋架',
    body: '你还是一枚种蛋，在孵化厂的冷库里等着。工人正在决定这一批蛋放在蛋车的哪一层。上层靠近风扇，风大，温度变化快；下层靠墙，温度稳，但要晚一点进机。',
    options: [
      { t: '放在上层', hint: '风大 · 温度忽高忽低', eff: { health: +3 }, risk: 1.2, riskDays: 7,
        result: '你被放在靠近风扇的那一层。孵化机里的温度在一段时间里忽高忽低。' },
      { t: '放在下层', hint: '稳 · 进机晚', eff: { health: -2 }, risk: 0.9, riskDays: 7,
        result: '你被放在靠墙的一层。温度很稳，你的发育慢了半天。' },
    ],
  },

  decisions: [
    {
      id: 'brooder', at: 30,
      title: '育雏灯下的那堆',
      body: '你刚学会站稳。红灯底下最暖，挤满了同伴。灯边稍远一点的地方空些，料盘也在那边。',
      options: [
        { t: '挤进灯下', hint: '暖 · 容易被压', eff: { health: +6 }, risk: 1.4, riskDays: 4,
          result: '你挤进那堆同伴里，身上一下子暖了。半夜，有什么东西压在了你的背上。' },
        { t: '去灯边吃料', hint: '吃得多 · 容易着凉', eff: { food: +12, health: -3 }, risk: 1.1, riskDays: 4,
          result: '你在料盘边吃了很久。等回过神，身子已经凉了。' },
      ],
    },
    {
      id: 'pool', at: 40, need: 'water',
      title: '水池边',
      body: '棚里有一个浅水池，水很脏。池子一头水深，一头水浅。在水深的那头，同伴们在互相推搡。',
      options: [
        { t: '下水洗澡', hint: '干净 · 体力消耗大', eff: { health: +8 }, risk: 1.2, riskDays: 3,
          result: '你在水里泡了很久，羽毛沾满了泥。但你觉得轻松了。' },
        { t: '在干料区吃料', hint: '吃得多 · 羽毛发黏', eff: { food: +10, health: -2 },
          result: '你吃饱了，但羽毛开始发黏。' },
      ],
    },
    {
      id: 'dry', at: 40, need: '!water',
      title: '料盘和水盆之间',
      body: '棚里没有水池，只有几个水盆。水盆边挤满了同伴，料盘在另一头。你的羽毛在垫料里一天比一天脏。',
      options: [
        { t: '挤到水盆边', hint: '喝水 · 被挤', eff: { health: +4, safety: -5 }, risk: 1.2, riskDays: 3,
          result: '你挤到水盆边，喝了几口。有同伴踩在你身上。' },
        { t: '守在料盘边', hint: '吃得多 · 越来越脏', eff: { food: +10, health: -3 },
          result: '你吃饱了，但身上的脏东西越来越多。' },
      ],
    },
    {
      id: 'peck', at: 50,
      title: '一只被啄伤的同伴',
      body: '棚里一只鸭子的背上被啄破了，血滴在垫料上。其他鸭子都在啄它身上的伤口。你离它最近。',
      options: [
        { t: '躲到棚的另一边', hint: '安全 · 吃得少', eff: { safety: +8, food: -5 },
          result: '你绕到棚子另一头。那边的料少，但没有人啄你。' },
        { t: '留在料槽边', hint: '吃得多 · 有风险', eff: { food: +10 }, risk: 1.4, riskDays: 5,
          result: '你继续低头吃料。过了一会儿，你的背上也被啄了一下。' },
      ],
    },
    {
      id: 'heat', at: 62,
      title: '闷热的夏夜',
      body: '棚里的温度快到三十五度，风扇只剩下一台还在转。你的嘴张着，呼吸已经很急促。门口有风，但也有蚊子。',
      options: [
        { t: '靠近门口的风扇', hint: '凉 · 门口容易受惊', eff: { health: +6, safety: -4 }, risk: 1.1, riskDays: 3,
          result: '你靠近门口，风吹过羽毛。门外的声音吓了你一下。' },
        { t: '挤到水盆边', hint: '喝水 · 挤', eff: { health: +4 }, risk: 1.3, riskDays: 3,
          result: '水盆边挤满了同伴。你喝到了水，也被挤了一下。' },
      ],
    },
    {
      id: 'feed', at: 66,
      title: '高能量的料',
      body: '育肥料里加了更多能量，你吃得越多，长得越快。但你的腿已经开始发酸，走路时身子左右晃。',
      options: [
        { t: '吃到最后一口', hint: '体重↑ · 腿↓', eff: { food: +20, health: -4 }, risk: 1.2, riskDays: 5,
          result: '你把料槽里的每一粒都吃完了。身子又重了一些。' },
        { t: '少吃，多躺着', hint: '体力↑ · 体重少', eff: { health: +4, food: -8 },
          result: '你趴在垫料上，好几个小时没怎么动。' },
      ],
    },
    {
      id: 'loading', at: 74,
      title: '运输车已经到了',
      body: '棚门开了，光线照进来。饲养员的手套在料槽那边晃动，同伴们一只只被抓起来，塞进笼子。你在角落里，可以挤到门口，也可以留在原地。',
      options: [
        { t: '挤到门口', hint: '最先被抓', eff: { safety: -6 },
          result: '你被最先抓住。笼子很挤，你的翅膀被压在笼门上。' },
        { t: '留在角落', hint: '最后被抓', eff: { safety: +4 },
          result: '你留在角落，直到最后才被抓住。' },
      ],
    },
    {
      id: 'hatch_check', at: 35, need: 'big_hatch',
      title: '饲养员的秤',
      body: '饲养员提着秤进来，要把你们一批一批地抓出去称重。你可以挤在一起被抓，也可以躲到角落里。',
      options: [
        { t: '挤在一起等', hint: '被抓↑', eff: { safety: -3 },
          result: '你们被一只一只抓出来，称了重，又放了回来。' },
        { t: '躲到角落里', hint: '安全↑ 食物↓', eff: { safety: +4, food: -3 },
          result: '你躲在角落里，直到人走了才出来。' },
      ],
    },
    {
      id: 'stuck_water', at: 30, need: 'stuck_ride',
      title: '一盆水',
      body: '你的身子还虚，水盆就在不远处。别的小鸭都挤过去喝水，你要挤进去，还是等一等？',
      options: [
        { t: '挤进去喝水', hint: '喝水↑ 被挤↑', eff: { health: +5, safety: -5 }, risk: 1.2, riskDays: 4,
          result: '你挤进人群喝了几口水，被踩了一脚。' },
        { t: '等人少了再去', hint: '安全↑ 缺水', eff: { health: -3 }, risk: 1.1, riskDays: 4,
          result: '你等了很久，水盆边终于空了。你趴下来，慢慢地喝。' },
      ],
    },
    {
      id: 'curious_hole', at: 50, need: 'curious',
      title: '棚子边上的小洞',
      body: '小洞通到外面一小块草地。外面很亮，还有风。你可以钻出去，也可以留在棚里。',
      options: [
        { t: '钻出去', hint: '食物↑ 被黄鼠狼盯上↑', eff: { food: +6, safety: -5 }, kill: 0.02, cause: 'predator',
          result: '你钻出去，啄了几口草。风从外面吹过来，你又慢慢地钻了回来。' },
        { t: '留在棚里', hint: '安全↑', eff: {},
          result: '你留在棚里，看着小洞发了很久的呆。' },
      ],
    },
  ],

  actions: {
    forage:  { name: '啄料', desc: '低头在料槽里一粒一粒地啄。', text: ['你埋头吃料，嘴里全是碎粒。', '料盘边上撒着细粉，嘴一碰就沾满了。', '……'] },
    hide:    { name: '缩到角落', desc: '躲进墙角或草垫底下，把头收起来。', text: ['你缩着，尽量不让别人注意到你。', '……'] },
    rest:    { name: '趴下', desc: '趴在垫料上，腿缩进身体底下。', text: ['你趴下来，身下是温的。', '……'] },
    explore: { name: '往外走', desc: '往水池、门口或另一头的水盆方向走几步。', text: ['你慢慢地挪过去，每一步都踩在垫料上。', '……'] },
    mate:    false,
  },

  idle: [
    '棚里很暗，灯一亮，你们就一起抬头。',
    '料槽的声音在棚里一下一下地响。',
    '垫料很暖，有些地方已经结块了。',
    '你把嘴伸进水盆，喝了几口，又抬起头。',
    '门外有鸡叫了一声，很远。',
    '同伴在你身边翻了个身，压得你动不了。',
    '你的羽毛里有细粉，抖一抖就飞起来。',
    '风扇的嗡嗡声一直没有停。',
  ],

  epitaph: '你的一生大约七十多天，大部分在一间没有太阳的棚子里。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'goat',
  name: '山羊',
  en: 'Goat',
  sci: 'Capra hircus（家山羊）',
  emoji: '🐐',
  scene: 'farm',
  kind: 'farmed',
  tagline: '全世界十亿只以上的山羊，大多在小农户的羊群里。它们吃的草和灌木，别的家畜常常不吃。',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['中国西北山区一户农家的羊圈', 3, {}],
        ['东非草原边缘一个牧民的羊群', 3, { food: -5, risk: 1.2 }],
        ['印度干旱地区一个村子的院子里', 2, { food: -5, risk: 1.1 }],
        ['欧洲山地一个奶山羊场的产羔棚', 1, { food: +10, risk: 0.8 }],
      ]},
      { label: '用途', options: [
        ['将来挤奶的母羊', 2, { set: 'dairy' }],
        ['养来宰的，一年左右就会被宰', 3, { set: 'meat' }],
        ['将来配种的公羊', 1, { set: 'buck' }],
      ]},
      { label: '品种', options: [
        ['本地的土山羊，个子小，什么粗料都吃', 4, { food: +3, set: 'landrace' }],
        ['奶山羊萨能系，产奶多，要吃加了豆粕的料', 2, { food: -3, set: 'saanen' }],
        ['肉用的波尔山羊，长得快，身子很圆', 1, { set: 'boer' }],
      ]},
      { label: '出生那一年的年景', options: [
        ['风调雨顺的一年，草长得很高', 4, { set: 'good_year' }],
        ['春天下大雪，大片草场被雪压住', 2, { food: -8, risk: 1.2, set: 'snow_year' }],
        ['山里狼多的一年，村里每晚都派人守羊圈', 1, { safety: +5, risk: 1.1, set: 'wolf_year' }],
      ]},
    ],
    siblings: 2,
    siblingsLabel: '同一胎的小羊',
    intro: '你在{出生地}里出生。{sex}，{用途}。同一胎一共 {siblings} 只（含你）。',
  },

  stages: [
    { id: 'kid',    name: '羔羊（吃奶）',   from: 0,    unit: 'week' },
    { id: 'juv',    name: '断奶后的小羊',   from: 90,   unit: 'week' },
    { id: 'young',  name: '青年',           from: 240,  unit: 'week' },
    { id: 'adult',  name: '成年',           from: 540,  unit: 'month' },
    { id: 'old',    name: '老年',           from: 2555, unit: 'month' },
  ],
  maturity: 300,
  maxAge: 4000,

  survival: [[0,1],[7,0.92],[30,0.87],[90,0.8],[180,0.72],[240,0.68],[365,0.6],[540,0.52],[730,0.45],[1460,0.3],[2190,0.18],[2920,0.08],[3650,0.03],[4000,0.001]],
  survivalNote: '小农户羊群的死亡率：幼羔期高（肺炎、腹泻、狼和野狗），成年后主要死于干旱、寄生虫和节日前的屠宰。曲线按人工调查粗估，各地差别很大。',

  init: { health: 75, food: 55, safety: 45 },
  foodDrain: 2,

  causes: [
    { id: 'kid_pneumonia', escape: false, w: 4, stages: ['kid','juv'], short: '羔羊肺炎',
      text: '冬天的羊圈里潮。你咳了三天，鼻子里流出黄绿色的东西。半夜没有人起来给你打针。' },
    { id: 'drought', escape: false, w: 4, short: '干旱饿死',
      text: '这一季的雨没来。山坡上的草干了，灌木的叶子也被前面的羊吃光了。你走了很远，最后躺在路边。' },
    { id: 'wolf', escape: true, w: 2, stages: ['juv','young','adult','old'], short: '被狼或野狗咬死',
      text: '天刚黑，一只狼从坡下窜了上来。羊群炸开，你跑了几步就被咬住了后腿。' },
    { id: 'parasite', escape: false, w: 3, stages: ['young','adult','old'], short: '捻转血矛线虫病（贫血）',
      text: '胃里的线虫吸你的血。你的眼睑慢慢变白，走路越来越慢，最后一头倒在草地上。' },
    { id: 'bloat', escape: false, w: 2, stages: ['adult','old'], short: '瘤胃臌胀',
      text: '你贪吃了一大把嫩苜蓿，胃里的气发不出来。肚子鼓得像皮球，呼吸停了。' },
    { id: 'fall', escape: false, w: 1, stages: ['juv','young','adult'], short: '在山崖上摔死',
      text: '你追着一小撮草往山坡上爬，脚下的石头松了。' },
    { id: 'butcher', escape: false, w: 3, stages: ['young','adult','old'], short: '节日前被屠宰',
      text: '村里要办宴席，屠宰的人挑中了你。刀很快，你没有叫。' },
    { id: 'old', escape: false, w: 0, short: '衰老',
      text: '你的牙越磨越短，最后嚼不动干草了。这年冬天你躺在羊圈的角落里，没有再站起来。' },
  ],

  events: [
    { stages: ['kid'], w: 3, text: '母羊舔干了你身上的羊水。你第一次站起来，腿一软又跌回草里。', eff: { health: +4 } },
    { stages: ['kid'], w: 3, once: true, text: '你第一次找到母亲的乳头，吸了很久。胃里暖起来。', eff: { food: +20 } },
    { stages: ['kid'], w: 2, text: '羊圈的墙角有一股湿味，地上的粪便没有清理。你咳了两声。', eff: { health: -4 } },
    { stages: ['kid','juv'], w: 2, act: 'rest', text: '你趴在母亲的肚子边，听见别的羊在反刍，咕噜咕噜的，很有节奏。', eff: { safety: +5 } },
    { stages: ['juv'], w: 4, act: 'forage', text: '你啃到一丛刺槐的嫩叶，叶子上还带着露水。山羊能爬上石头去够它。', eff: { food: [10, 18] } },
    { stages: ['juv','young'], w: 3, act: 'forage', text: '你用前蹄扒住一棵小树，把最上面的嫩枝拽了下来。', eff: { food: [8, 14] } },
    { stages: ['juv','young'], w: 2, act: 'explore', text: '你跟着羊群走上一道山梁，视野一下子开阔了。远处有一片没人吃过的草地。', eff: { food: +12, safety: -4 } },
    { stages: ['young','adult'], w: 2, act: 'hide', text: '一条狗在山脚下叫个不停。你躲进一道石缝，身体挤得很紧。', eff: { safety: +6, food: -4 } },
    { stages: ['young','adult'], w: 2, text: '村里的人在屋顶上磨刀。羊群里有一只被选中了，被牵进了院子。', eff: { safety: -6 } },
    { stages: ['adult'], w: 3, act: 'forage', text: '干旱的季节里，你在灌木丛里刨出了几片干叶子。', eff: { food: +6, health: -3 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '你卧在一棵老核桃树的阴影里，反刍了整整一个下午。', eff: { health: +5 } },
    { stages: ['adult'], w: 2, text: '旁边的母羊生下了羔羊。你闻到羊水和血的味道，胃里跟着一紧。' },
    { stages: ['adult'], w: 1, text: '雨季的草长得太快，你吃得太多，肚子鼓了起来。你走了很久，才把气打出来。', eff: { health: -4 } },
    { stages: ['young','adult','old'], w: 2, text: '羊圈里的蚊子很多，你的耳朵被咬肿了。', eff: { health: -3 } },
    { stages: ['adult','old'], w: 2, text: '你的一颗臼齿断了。你只能用另一侧嚼草。', eff: { food: -6 } },
    { stages: ['old'], w: 3, text: '你的动作慢下来，走到山坡一半就要停下来喘一会儿。', eff: { health: -5 } },
    { stages: ['young','adult'], w: 2, text: '你的肚子下面有一小块皮肤发红，腿上有蜱虫。你靠在树上蹭了很久。', eff: { health: -3 } },
    { stages: ['adult'], act: 'mate', w: 1, once: true, text: '春天到了。你产下了 {n} 只羔羊，舔干了它们身上的羊水。', eff: { offspring: [1, 2] } },
    { stages: ['adult'], need: 'male', w: 1, text: '羊群里的一只公羊追着一只母羊，角顶在一起，发出闷响。', eff: { health: -2 } },
    { stages: ['old'], w: 1, text: '你的一只耳朵耷拉下来，不再竖起。羊群里的小羊开始绕着你走。', eff: { safety: -3 } },
    { stages: ['juv','young'], w: 1, text: '下了一场冰雹。你和羊群挤在岩壁下，身上的毛被打湿了。', eff: { health: -5 } },
    { stages: ['juv','young','adult'], w: 2, text: '夜里有一头狼在远处叫。羊群全都竖起耳朵，没有一只动。' },
    { stages: ['adult'], w: 1, text: '一位牧羊人走过来，数了数羊，记在一个本子上。' },
    { stages: ['kid'], w: 1, text: '母羊又生了一只。你们被挤在羊圈的一角，互相舔着。', eff: { safety: +3 } },
    { stages: ['juv'], need: 'landrace', w: 2, text: '你能爬上很陡的石头，啃到别的羊够不着的嫩叶子。', eff: { food: +6 } },
    { stages: ['kid'], need: 'landrace', w: 2, text: '土山羊的羔羊又瘦又结实。你第一次跟着母亲走上山坡，腿有点抖，却没有摔倒。', eff: { health: +3 } },
    { stages: ['young'], need: 'landrace', w: 1, text: '村里人说你们这种山羊吃得粗，什么都能吃。你啃过一截带刺的灌木，嘴也没有出血。' },
    { stages: ['kid'], need: 'saanen', w: 2, text: '你的母亲奶多，你吃得很饱。但你的肚子有时候会发胀，要多走几步才舒服。', eff: { food: +12, health: -2 } },
    { stages: ['juv','young'], need: 'saanen', w: 2, text: '奶山羊要吃精料。饲料槽里是加了豆粕的料，你吃得很快，却不太喜欢爬山。', eff: { food: +6 } },
    { stages: ['adult'], need: 'saanen', w: 1, text: '你每天要被牵去挤奶。挤奶的人手劲很大，你有一次踢了他一脚。', eff: { safety: -3 } },
    { stages: ['kid'], need: 'boer', w: 2, text: '你比同胎的羔羊长得快，身子很快就圆了起来。', eff: { food: +8 } },
    { stages: ['juv','young'], need: 'boer', w: 2, text: '人们喂你的料很足，你又快又胖。你的腿有时候撑不住身体。', eff: { health: -3 } },
    { stages: ['young'], need: 'boer', w: 1, text: '村里的人说你的肉会很多。他们在你的脖子上系了一块红布。', eff: { safety: -5 } },
    { stages: ['kid','juv'], need: 'good_year', w: 2, text: '这一年雨水很好，草长得高，你和母亲吃得饱饱的。', eff: { food: +8 } },
    { stages: ['juv','young'], need: 'good_year', w: 2, act: 'forage', text: '山坡上到处是新草。你啃完一丛，又去啃下一丛。', eff: { food: [6, 10] } },
    { stages: ['adult'], need: 'good_year', w: 1, once: true, text: '这一年，村里的羊都长得圆滚滚的。' },
    { stages: ['kid','juv'], need: 'snow_year', w: 2, text: '春天的雪下了好几天，草被埋在了雪底下。你们只能啃树皮。', eff: { food: -10, health: -3 } },
    { stages: ['juv','young'], need: 'snow_year', w: 2, text: '雪化的时候，地上一片泥泞。你的蹄子沾满了泥，每走一步都陷下去。', eff: { health: -4 } },
    { stages: ['young','adult'], need: 'snow_year', w: 1, text: '村里的人把干草一捆一捆搬到羊圈里。你挤在草堆边，吃到的还算多。', eff: { food: +5 } },
    { stages: ['juv','young'], need: 'wolf_year', w: 2, text: '夜里，羊圈门口有人守着，手里拿着一根火棍。远处传来狼叫，所有的羊都挤到了墙角。', eff: { safety: +4 } },
    { stages: ['young','adult'], need: 'wolf_year', w: 2, text: '村里的狗整夜叫着。坡下的雪地上留下了狼的脚印，第二天被人发现了。', eff: { safety: +3 } },
    { stages: ['adult'], need: 'wolf_year', w: 1, text: '守夜的人轮流换班，有时候你能听见他们低声说话。', eff: { safety: +2 } },
    { stages: ['juv'], need: 'bold', w: 2, text: '你第一个跳上了那块大石头。山谷的风吹得你的胡子直飘。', eff: { food: +4, safety: -3 } },
    { stages: ['juv','young'], need: 'cautious', w: 2, text: '你总是站在羊群最后面，先看看前面有没有动静，才肯往前走。', eff: { safety: +4, food: -3 } },
    { stages: ['young'], need: 'curious', w: 2, text: '你爬到一棵老树的分杈上，从高处看见了远处的村子和一条河。', eff: { food: +5 } },
    { stages: ['kid'], need: 'runt', w: 2, text: '你比同胎的小羊都小，母亲的乳头被它们抢走了，你只能在后面等。', eff: { food: -8 } },
    { stages: ['adult'], need: 'robust', w: 2, text: '你的角又粗又长。冬天的时候，你把别的母羊顶开，自己占了一块干燥的地方。', eff: { safety: +4 } },
  ],

  opening: {
    title: '母羊挑产羔的地方',
    body: '你还在母羊的肚子里，听见雪打在外面的屋顶上。母羊要在这个夜里产下你。它可以去羊圈里，也可以到山坡上一块岩石的背风面去。',
    fact: '山羊大约在一万年前的扎格罗斯山地被驯化（Zeder & Hesse, Science, 2000）',
    options: [
      { t: '在羊圈里产', hint: '避风 · 病容易传', eff: { health: +3 }, risk: 1.2, riskDays: 5,
        result: '你在羊圈的干草堆里出生，旁边就是别的母羊。' },
      { t: '到岩石背后产', hint: '清净 · 冷，离狼近', eff: { food: +5 }, risk: 1.3, riskDays: 5,
        result: '你在岩石背后出生。风从石头那边绕过来，很冷。' },
    ],
  },

  decisions: [
    {
      id: 'gate', at: 14,
      title: '羊圈的门开了',
      body: '早上门开了，母羊们陆续出去吃草。你还小，走路摇摇晃晃。',
      options: [
        { t: '跟着出去', hint: '吃草 · 容易掉队', eff: { food: +5, safety: -4 }, risk: 1.3, riskDays: 4,
          result: '你跟在母亲身后走出去，在一个土坡上差点滚下去。' },
        { t: '留在棚里吃奶', hint: '暖 · 吃得少', eff: { food: +10 },
          result: '你留在棚里，靠着母亲的肚子，一直待到天黑。' },
      ],
    },
    {
      id: 'weaning', at: 90,
      title: '奶少了',
      body: '母羊的奶越来越少，你的肚子常常是空的。草场上的灌木已经能咬到了，但离羊圈有一段路。',
      options: [
        { t: '去灌木丛找吃的', hint: '吃得多 · 风险↑', eff: { food: +12 }, risk: 1.2, riskDays: 6,
          result: '你在灌木丛里啃了很久，回来时腿上多了几道刮伤。' },
        { t: '挤到别的母羊身边吃奶', hint: '安稳 · 挨顶', eff: { food: +8, safety: -3 }, risk: 1.1, riskDays: 6,
          result: '你挤进另一只母羊的肚子下面。它顶了你两下，还是让你吃了。' },
      ],
    },
    {
      id: 'drought', at: 200, when: { food: '<60' },
      title: '草场干了',
      body: '这一季的雨没下来。村边的草已经被吃光，山里还有一些绿色，但要走很远。',
      options: [
        { t: '往山里走远一点', hint: '吃得多 · 狼和摔伤', eff: { food: +15 }, risk: 1.4, riskDays: 20,
          result: '你跟着头羊翻过两道山梁。山里有一片没人去的草，但你的腿累得发抖。' },
        { t: '留在村边吃干草', hint: '近 · 草少', eff: { food: +3 }, risk: 0.9, riskDays: 20,
          result: '你留在村边，吃着主人撒下的干草，每天都觉得饿。' },
      ],
    },
    {
      id: 'feast', at: 260, need: 'meat',
      title: '村里要办宴席',
      body: '屠夫在院子里磨刀。你所在的这一群，是最近的一群。',
      options: [
        { t: '低头吃草，不往人堆里去', hint: '平静 · 不能选', eff: { safety: -2 }, risk: 1.0, riskDays: 5,
          result: '你低着头，一口一口地吃。挑选的人走过来，把你牵了出去。' },
        { t: '躲进玉米地', hint: '躲一躲 · 能被找到', eff: { safety: +6, food: +6 }, risk: 1.3, riskDays: 5,
          result: '你钻进玉米地，玉米叶擦得你的脸生疼。过了很久，有人拨开叶子找到了你。' },
      ],
    },
    {
      id: 'breeding', at: 540, need: 'female',
      title: '发情的季节',
      body: '你已经能配种了。羊群里一只公羊在不远处叫，它的声音很响。',
      options: [
        { t: '靠近公羊', hint: '后代↑', eff: { offspring: [1, 2] }, risk: 1.2, riskDays: 10,
          result: '你靠了过去。几个月后，你开始挺着肚子在羊圈里走。' },
        { t: '躲到山坡另一侧', hint: '安静 · 没有后代', eff: { food: +5 },
          result: '你走到山坡另一侧，吃着没人碰过的草。' },
      ],
    },
    {
      id: 'winter', at: 1200, when: { health: '<50' },
      title: '冬天的草料被雪埋了',
      body: '草料被雪埋了一层。你的体重掉了很多，肋骨一根根能摸到。',
      options: [
        { t: '用蹄子刨雪找草', hint: '吃得多 · 冻', eff: { food: +8 }, risk: 1.2, riskDays: 30,
          result: '你刨了一下午，手指似的蹄子冻得发疼。你找到了几把干草。' },
        { t: '挤进羊圈等人送草', hint: '暖 · 等得久', eff: { food: +2, health: +2 }, risk: 1.0, riskDays: 30,
          result: '你挤在羊群中间，等人送来草。来得很慢。' },
      ],
    },
    {
      id: 'culling', at: 2800,
      title: '老了，不再产羔',
      body: '你已经很多年没有产羔了。主人在本子上写下你的名字，旁边画了一个问号。',
      options: [
        { t: '在草地上多待一会儿', hint: '平静', eff: { health: +3 }, risk: 1.0, riskDays: 60,
          result: '你在草地上多待了一个下午。第二天，你还是被牵回了羊圈。' },
        { t: '走到羊群前面', hint: '显眼 · 更快被注意', eff: { safety: -3 }, risk: 1.1, riskDays: 60,
          result: '你走到了羊群前面。有人看见了你，在本子上又划了一笔。' },
      ],
    },
    {
      id: 'saanen_milk', at: 300, need: 'saanen',
      title: '挤奶的时间',
      body: '挤奶的人每天早上都来，把你的乳房抓在手里。你可以站着让他挤，也可以跑开，等他来追。',
      options: [
        { t: '站着让挤', hint: '食物↑ 健康↓', eff: { food: +5, health: -2 },
          result: '你站着，让他把奶挤满了一桶。' },
        { t: '跑到山坡上躲起来', hint: '安全↑ 食物↓', eff: { food: -5, safety: +3 }, risk: 1.1, riskDays: 5,
          result: '你跑到山坡上，挤奶的人在坡下喊了很久。' },
      ],
    },
    {
      id: 'snow_grass', at: 150, need: 'snow_year',
      title: '雪下面的草',
      body: '雪压在草上，草叶的边缘露出一点绿色。你可以用蹄子去刨，也可以去旁边的树皮堆里找。',
      options: [
        { t: '用蹄子刨雪挖草', hint: '食物↑ 冻伤↑', eff: { food: +8, health: -3 }, risk: 1.2, riskDays: 10,
          result: '你刨了一下午，蹄子冻得发疼，挖出来的草不多。' },
        { t: '去啃树皮', hint: '食物↑ 健康↓', eff: { food: +3, health: -2 },
          result: '树皮又苦又硬，你啃了很久，只咽下一点点。' },
      ],
    },
    {
      id: 'wolf_watch', at: 250, need: 'wolf_year',
      title: '夜里的守夜人',
      body: '守夜的人生起了火，一直看着羊圈。你可以留在羊群中间，也可以溜到草坡上找吃的。',
      options: [
        { t: '留在羊群中间', hint: '安全↑ 食物↓', eff: { safety: +5, food: -5 },
          result: '你挤在羊群中间，整夜都没有吃饱。' },
        { t: '溜到草坡上找吃的', hint: '食物↑ 被狼咬风险↑', eff: { food: +10, safety: -5 }, kill: 0.02, cause: 'wolf',
          result: '你溜到草坡上，啃了很久。远处有一声狼嚎，你没有听清它在哪里。' },
      ],
    },
    {
      id: 'bold_rock', at: 120, need: 'bold',
      title: '一块很陡的大石头',
      body: '大石头的另一面有一丛嫩叶，但石头很滑。你可以爬上去，也可以绕路走。',
      options: [
        { t: '爬上去', hint: '食物↑↑ 摔落风险↑', eff: { food: +10, safety: -5 }, kill: 0.03, cause: 'fall',
          result: '你爬上去，啃到了嫩叶。下来的时候，脚下一滑。' },
        { t: '绕路走', hint: '安全↑ 食物↓', eff: { food: +3 },
          result: '你绕了很远的路，到了另一丛灌木旁。' },
      ],
    },
  ],

  actions: {
    forage:  { name: '啃灌木', desc: '站起来，用蹄子扒住枝条，啃嫩叶和嫩枝。', text: ['你用前蹄扒住一棵小树，嚼着它的叶子。', '露水打湿了你的嘴。', '……'] },
    hide:    { name: '躲进岩缝', desc: '躲进石头缝或树丛后面，离开羊群的视线。', text: ['你挤进一道石缝，外面的风进不来。', '……'] },
    rest:    { name: '卧在树下', desc: '卧在阴凉处，把腿折在身下反刍。', text: ['你卧在树下，慢慢地反刍。', '……'] },
    explore: { name: '爬上山坡', desc: '离开羊群，往山坡或山梁上走，找新的草场。', text: ['你沿着石头往上爬，蹄子一滑一滑地。', '……'] },
    mate:    { name: '配种', done: '你产下了 {n} 只羔羊。' },
  },
  brood: [1, 2],

  idle: [
    '你在反刍，嘴角一下一下地动。',
    '山坡上的风从你的毛里穿过去。',
    '母羊在远处咩了一声，你立刻抬头。',
    '你用蹄子刨了一下土，闻了闻，又走开了。',
    '羊群在石头边上挤成一团，互相蹭着耳朵。',
    '一只鸟落在你的背上，又飞走了。',
    '你的胃里咕噜咕噜地响，草还在消化。',
    '远处传来牧羊人的口哨，羊群慢慢往回走。',
  ],

  epitaph: '你的奶、肉、毛和皮都被用过。山羊是最早被人驯化的动物之一，你的一生也属于这条很长的链。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'pigeon',
  name: '城市鸽',
  en: 'Feral pigeon',
  sci: 'Columba livia（原鸽，城市野化种群）',
  emoji: '🕊️',
  scene: 'city',
  kind: 'wild',
  tagline: '从被驯化的原鸽变成的城市野鸽。广场、车站和窗台上，几乎处处都有它们。',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['广场边一栋老楼的檐下', 3, { food: +10, risk: 1.1 }],
        ['火车站的钢梁上', 3, { food: +5, risk: 1.2 }],
        ['桥下一排窗台', 2, {}],
        ['老城区一座教堂的钟楼', 1, { safety: +10 }],
      ]},
      { label: '父母的食物', options: [
        ['面包店门口的碎屑里', 3, { food: +10 }],
        ['菜市场的烂菜叶堆里', 2, { health: -3 }],
        ['公园里游客喂的面包上', 4, { food: +8 }],
      ]},
      { label: '城市', options: [
        ['北京胡同里一户养鸽人家的鸽舍，你的腿上有一个小环', 3, { food: +5, set: 'beijing_loft' }],
        ['纽约曼哈顿的一栋高层大楼，窗台上落满了灰', 3, { risk: 1.15, set: 'nyc' }],
        ['孟买的一座老市场，每天早上都有人在附近撒米', 2, { food: +10, set: 'mumbai' }],
        ['一个小镇的粮仓，只有几对鸽子，猫也少', 2, { safety: +5, food: -3, set: 'granary' }],
      ]},
      { label: '那一年的天气', options: [
        ['那年夏天很热，窗台上的水很快就干了', 3, { health: -5, set: 'hot_year' }],
        ['那年冬天很冷，城市里的暖气口很少', 2, { health: -8, risk: 1.2, set: 'cold_year' }],
        ['那年春天雨水很多，街上的虫子也多', 3, { food: +8, set: 'wet_year' }],
      ]},
    ],
    siblings: 2,
    siblingsLabel: '同一窝的蛋',
    intro: '你从{出生地}的一枚蛋里孵出，{sex}。父母去{父母的食物}找吃的。同一窝共 {siblings} 枚蛋（含你）。',
  },

  stages: [
    { id: 'egg',   name: '蛋（孵化中）', from: 0,    unit: 'day' },
    { id: 'squab', name: '雏鸽（吃鸽乳）', from: 18, unit: 'day' },
    { id: 'juv',   name: '幼鸽（离巢）', from: 35,   unit: 'week' },
    { id: 'adult', name: '成鸽',         from: 180,  unit: 'month' },
    { id: 'old',   name: '老鸽',         from: 1200, unit: 'month' },
  ],
  maturity: 150,
  maxAge: 2920,

  survival: [[0,1],[7,0.8],[18,0.7],[30,0.6],[35,0.5],[90,0.42],[180,0.36],[365,0.28],[730,0.18],[1095,0.11],[1460,0.06],[2190,0.02],[2920,0.001]],
  survivalNote: '城市鸽的寿命来自标记个体和城市调查，多数活不过第一年。此曲线按标记回收数据粗估，不是精确普查。',

  init: { health: 70, food: 55, safety: 45 },
  foodDrain: 3,

  causes: [
    { id: 'hawk', escape: true, w: 4, stages: ['juv','adult','old'], short: '被游隼抓住',
      text: '一只游隼从楼顶俯冲下来，爪子从你背后扣住。你甚至没听见它靠近的声音。' },
    { id: 'car', escape: true, w: 3, stages: ['juv','adult','old'], short: '被汽车撞死',
      text: '你低头去啄路上的面包屑，一辆出租车在你身边突然加速。' },
    { id: 'spike', escape: false, w: 2, stages: ['juv','adult','old'], short: '脚被防鸽刺缠住，饿死',
      text: '你停在窗台的防鸽刺上，脚爪被细钢丝缠住。你挣扎了三天，没能飞起来。' },
    { id: 'cold', escape: false, w: 3, stages: ['juv','adult','old'], short: '冬天冻死',
      text: '连着几个零下的夜晚，你躲在空调外机旁边，但风还是吹进了羽毛里。' },
    { id: 'trich', escape: false, w: 3, stages: ['squab','juv','adult','old'], short: '鸽毛滴虫病',
      text: '你的喉咙里长出黄白色的斑块，吞咽越来越困难。一个多星期后，你不再吃东西了。' },
    { id: 'rat', escape: false, w: 2, stages: ['egg','squab'], short: '巢里被老鼠咬死',
      text: '夜里一只老鼠爬进了巢。它先咬了旁边的蛋，然后轮到你。' },
    { id: 'cold_nest', escape: false, w: 3, stages: ['egg','squab'], short: '蛋受凉，或雏鸽饿死',
      text: '父母出去找吃的，回来得太晚了。你在巢里饿得没有力气叫。' },
    { id: 'old', escape: false, w: 0, short: '衰老',
      text: '你的飞行越来越慢，最后一次没能飞上屋顶。你落在人行道的边上，再也没有起来。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '你在蛋壳里能听见外面父母的咕咕声。两只鸽子轮流坐在你身上，身子是暖的。' },
    { stages: ['egg'], w: 1, once: true, text: '父母把你身下的蛋翻了个面。这一次，它们的动作很熟练。' },
    { stages: ['squab'], w: 4, once: true, text: '你第一次张嘴，父亲的喉咙里涌出一团白色的鸽乳。你咽下去，觉得很稠。', eff: { food: +20 } },
    { stages: ['squab'], w: 2, text: '巢边的枝条上落下一只鸽子，它身上有股潮湿的烟味。你的父母低头护着你。' },
    { stages: ['squab'], w: 2, text: '你的翅膀长出了羽毛。巢很窄，你只能不停地挪来挪去。', eff: { health: +4 } },
    { stages: ['squab'], w: 1, text: '一只老鼠在巢边的椽子上叫了两声。父母把你藏在翅膀底下。', eff: { safety: -5 } },
    { stages: ['juv'], act: 'forage', w: 4, text: '你跟着母鸽飞到广场上，低头啄到一粒玉米。一个小孩拿着一包爆米花，从你身边跑过去。', eff: { food: [10, 16] } },
    { stages: ['juv'], act: 'explore', w: 2, text: '你第一次跟着鸽群飞过一条街。下面的车在闪光，你差点撞上一根电线。', eff: { safety: -4 } },
    { stages: ['juv','adult'], act: 'forage', w: 3, text: '面包店门口撒了一把碎屑。鸽群落下去，几十个脑袋同时往下啄。', eff: { food: [8, 15] } },
    { stages: ['juv','adult'], act: 'hide', w: 2, text: '一只猫趴在花坛边，眼睛盯着你。你缩进了檐下的凹陷里，直到它走开。', eff: { safety: +6, food: -3 } },
    { stages: ['adult','old'], act: 'rest', w: 2, text: '你停在屋顶的电视天线上，把一只脚收进羽毛里，半睡半醒。', eff: { health: +4 } },
    { stages: ['adult'], w: 3, text: '一只游隼在城市上空盘旋。鸽群立刻炸开，几百只鸽子往不同方向散去。', eff: { safety: -10 } },
    { stages: ['adult'], w: 2, text: '一个人在广场上撒了一把饲料。你吃得很快，身边的同伴吃得更快。', eff: { food: +10, safety: -3 } },
    { stages: ['adult'], act: 'mate', w: 2, text: '你的配偶在窗台上转着脖子，咕咕叫着。你们又开始筑巢。' },
    { stages: ['adult'], w: 1, once: true, text: '春天，你们在窗台上产下了一窝蛋，共 {n} 枚。', eff: { offspring: [1, 2] } },
    { stages: ['adult','old'], w: 2, text: '广场窗台上装了防鸽刺。有几只同伴的脚被缠在刺里，你绕开了那一排。', eff: { safety: +3 } },
    { stages: ['adult','old'], act: 'explore', w: 2, text: '你飞过一座桥，去另一个火车站。那里的面包屑比这里多，但也更挤。', eff: { food: +12, safety: -5 } },
    { stages: ['adult'], w: 2, text: '天一下子冷了，连着三天零下。你蹲在空调外机旁边，羽毛里的水汽慢慢冻住了。', eff: { health: -6 } },
    { stages: ['adult','old'], w: 1, text: '一个人挥着扫帚，把窗台上的鸽粪扫下去。你飞到另一座屋顶上。', eff: { safety: -2 } },
    { stages: ['juv','adult','old'], w: 1, text: '街角的垃圾桶边扔着一块发霉的面包。你吃了一口，胃里有点不舒服。', eff: { health: -4 } },
    { stages: ['juv','adult'], w: 1, text: '你的喉咙里长出白色的斑块，吞咽越来越费劲。', eff: { health: -6 } },
    { stages: ['old'], w: 3, text: '你飞起来的高度低了，要绕很久才能停到屋顶上。', eff: { health: -4 } },
    { stages: ['adult','old'], act: 'rest', w: 1, text: '夜里城市的灯一直亮着。你在电线上睡着，偶尔醒一下，看见下面有人在走。', eff: { health: +2 } },
    { stages: ['old'], w: 1, once: true, text: '你的一只眼睛开始发白，看东西有点模糊。' },
    { stages: ['squab'], w: 2, need: 'beijing_loft', text: '你还没长出羽毛，就被养鸽人抱在手里看了一眼。他的手很暖，给你的腿上套了一个小环。', eff: { health: +3 } },
    { stages: ['juv'], w: 2, need: 'beijing_loft', text: '黄昏的时候，养鸽人打开鸽舍的门，把你们放飞。你绕着胡同飞了三圈，又飞回了屋顶上的鸽舍。', eff: { safety: +3 } },
    { stages: ['adult'], w: 1, need: 'beijing_loft', act: 'explore', text: '你被带到很远的地方放飞。你记得回家的方向，最后还是飞回了鸽舍。', eff: { food: -3 } },
    { stages: ['squab','juv'], w: 2, need: 'nyc', text: '高楼的窗台上满是灰尘。风一吹，细小的羽毛就飘进了你的巢。', eff: { health: -3 } },
    { stages: ['juv','adult'], w: 3, need: 'nyc', act: 'forage', text: '地铁站口有一个卖热狗的摊子。你和一群鸽子一起，在地上啄到了一块面包。', eff: { food: [10, 18] } },
    { stages: ['adult'], w: 2, need: 'nyc', text: '一辆救护车呼啸着从街上开过，鸽子群一下子全飞了起来，又在街角落下。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 3, need: 'mumbai', act: 'forage', text: '一个人每天早上在老市场撒米。你和很多鸽子一起，挤在米堆边上吃。', eff: { food: [12, 20] } },
    { stages: ['adult'], w: 2, need: 'mumbai', text: '热天的下午，屋顶上的水泥很烫。你张着嘴，用喉咙里的水给身体降温。', eff: { health: -4 } },
    { stages: ['adult','old'], w: 1, need: 'mumbai', act: 'rest', text: '你在屋顶的遮阳棚下休息，听着市场里讨价还价的声音。', eff: { health: +3 } },
    { stages: ['egg','squab'], w: 2, need: 'granary', text: '粮仓里很暗，只有门口的一束光落在巢上。你们一窝都很安静。', eff: { safety: +3 } },
    { stages: ['juv'], w: 2, need: 'granary', act: 'forage', text: '你在粮仓门口的谷堆里找到几粒麦子。粮食很少，每一颗你都吃得很慢。', eff: { food: [6, 10] } },
    { stages: ['adult','old'], w: 2, need: 'granary', act: 'hide', text: '一只猫蹲在谷堆后面。你贴着仓顶的横梁，等它走开。', eff: { safety: +5 } },
    { stages: ['squab'], w: 2, need: 'hot_year', text: '那年夏天的窝里很闷。你的父母一直守在窝边，张着嘴给你扇凉风。', eff: { health: -3 } },
    { stages: ['juv','adult'], w: 2, need: 'hot_year', text: '窗台上的水很快就干了。你们在屋顶的水池边排着队，等着喝水。', eff: { health: -3 } },
    { stages: ['adult'], w: 1, need: 'hot_year', act: 'rest', text: '一整个下午，你缩在一棵树的阴影里，一动不动。', eff: { health: +2 } },
    { stages: ['egg','squab'], w: 2, need: 'cold_year', text: '天一冷，巢里的蛋也跟着变凉。你的父母轮流把你们捂在腹下。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'cold_year', text: '城市里的暖气口很少。你每天傍晚都要找一个能挡风的地方，把脚收进羽毛里。', eff: { health: -4 } },
    { stages: ['old'], w: 1, need: 'cold_year', text: '你的胸口发冷，起飞的时候，翅膀要花更大的力气。', eff: { health: -4 } },
    { stages: ['juv'], w: 2, need: 'wet_year', act: 'forage', text: '连着几天下雨，街上的虫子都爬了出来。你在人行道上一口一口地吃。', eff: { food: [8, 14] } },
    { stages: ['adult'], w: 2, need: 'wet_year', act: 'rest', text: '雨停的时候，屋檐在滴水。你站在檐下，把湿透的羽毛一根一根理顺。', eff: { health: +3 } },
    { stages: ['squab'], w: 1, need: 'wet_year', text: '巢被雨浸湿了。父母用嘴衔来干草，一根一根地换进来。' },
    { stages: ['juv'], w: 2, need: 'bold', text: '你第一个飞上屋顶，落在一根电线上，看着整条街的人。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '每次落地之前，你都要先在空中绕一圈，确认附近没有猫和小孩。', eff: { safety: +5 } },
    { stages: ['juv'], w: 2, need: 'curious', text: '你盯着一个塑料袋看了很久，用喙把它拨开，里面有一块被压扁的面包。', eff: { food: +5 } },
    { stages: ['squab'], w: 2, need: 'runt', text: '你比兄弟姐妹小。父母喂食的时候，你总是被挤到最后。', eff: { food: -8, health: -3 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '一群鸽子在广场上抢一块面包，你用翅膀把一只挤过来的鸽子推开了。', eff: { food: +5 } },
  ],

  opening: {
    title: '母鸽选的巢位',
    body: '你还是一枚蛋，在一个窗台的旧巢里。父母刚选好了这里：一边是人流很多的广场，有很多碎屑，也有猫和游隼；另一边是一座安静的老楼，食物少，离危险远一些。',
    fact: '鸽子是最早被驯化的鸟类之一，野化后的城市鸽仍保留着岩壁上的繁殖习性（Johnston & Janiga, Feral Pigeons, Oxford University Press, 1995）',
    options: [
      { t: '在广场边的窗台', hint: '食物多 · 威胁多', eff: { food: +10 }, risk: 1.3, riskDays: 18,
        result: '你在广场边的窗台上破壳。整个白天都能听见人群和车的声音。' },
      { t: '在安静的老楼', hint: '安静 · 食物少', eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 18,
        result: '你在老楼的窗台上出生。外面没什么动静，父母要飞很远才能找到吃的。' },
    ],
  },

  decisions: [
    {
      id: 'nest_leave', at: 22,
      title: '父母出去找吃的',
      body: '父母已经出去了好一阵。巢的边缘有一根细枝，你能爬到它上面，看见外面的街。',
      options: [
        { t: '留在巢里等', hint: '安全 · 饿', eff: { food: -5, safety: +3 },
          result: '你缩在巢底，等着父母回来。肚子叫了很久。' },
        { t: '挪到巢边张望', hint: '看得远 · 可能掉下去', eff: { food: +5 }, risk: 1.4, riskDays: 3,
          result: '你挪到巢边，一阵风吹过，你差点从窗台上掉下去。父母在这时飞了回来。' },
      ],
    },
    {
      id: 'square_or_station', at: 40,
      title: '去哪里吃饭',
      body: '你已经能自己飞一段路。广场上有很多碎屑，但人很多；车站的屋顶安静，吃的却少。',
      options: [
        { t: '去广场吃饭', hint: '食物多 · 人多', eff: { food: +12, safety: -4 }, risk: 1.2, riskDays: 5,
          result: '广场上撒满了碎屑。你啄了很多，也被一只鸽子撞过肩膀。' },
        { t: '去车站的屋顶', hint: '人少 · 食物少', eff: { food: -3, safety: +6 },
          result: '车站屋顶很安静，但那里的碎屑只够吃一顿。' },
      ],
    },
    {
      id: 'second_nest', at: 200,
      title: '春天又到了',
      body: '窗台上的雨水晒干了。你的配偶又在衔细草。这个季节再养一窝，就会更累。',
      options: [
        { t: '再筑一窝', hint: '后代↑ · 体力↓', eff: { offspring: [2, 4], health: -4 }, risk: 1.2, riskDays: 20,
          result: '你们又筑了一个小巢。之后几周，你的羽毛一根一根地掉。' },
        { t: '只顾自己吃', hint: '体力↑', eff: { food: +10, health: +5 },
          result: '你没有再筑巢。你在广场上吃了很久，羽毛变得亮了些。' },
      ],
    },
    {
      id: 'hawk_shadow', at: 400, when: { safety: '<40' },
      title: '楼顶落下一个黑影',
      body: '楼顶上有一个影子在动，鸽群全都安静下来。一块碎屑还在你的嘴边。',
      options: [
        { t: '躲进屋檐下', hint: '安全', eff: { safety: +12 }, risk: 0.7, riskDays: 3,
          result: '你钻进屋檐下面。影子掠过去，又飞走了。' },
        { t: '继续啄碎屑', hint: '吃得多 · 很危险', eff: { food: +10 }, kill: 0.25, cause: 'hawk',
          result: '你又啄了两口。几秒钟后，你才发现那个影子已经在你头顶上了。' },
      ],
    },
    {
      id: 'cold_night', at: 600, when: { health: '<55' },
      title: '冬天的一个晚上',
      body: '气温降到零下。广场上的街灯亮着，地上有一些人扔掉的面包。烟囱那边有一丝热气。',
      options: [
        { t: '靠着烟囱的热气过夜', hint: '暖 · 没有食物', eff: { health: +8 }, risk: 0.9, riskDays: 5,
          result: '你靠在烟囱边上睡了一夜。第二天早上，你的脚还是冷的。' },
        { t: '在街灯下找吃的', hint: '食物↑ · 冷', eff: { food: +12 }, risk: 1.3, riskDays: 3,
          result: '你在街灯下啄到了几块面包。走回屋顶时，你已经冻得发抖。' },
      ],
    },
    {
      id: 'old_perch', at: 1300,
      title: '眼睛不太好使了',
      body: '你的视力越来越差。广场上的人来来回回，你分不清哪一个是喂你的人。',
      options: [
        { t: '继续在广场上找碎屑', hint: '食物↑ · 危险↑', eff: { food: +8 }, risk: 1.4, riskDays: 30,
          result: '你还是每天去广场。有人给你撒了碎屑，也有人挥手赶你。' },
        { t: '只待在熟悉的屋顶', hint: '安全 · 食物↓', eff: { safety: +8, food: -5 }, risk: 0.9, riskDays: 30,
          result: '你只待在那一座屋顶上。那里没什么吃的，但你知道每一块瓦的位置。' },
      ],
    },
    {
      id: 'loft_recall', at: 300, need: 'beijing_loft',
      title: '被放得很远',
      body: '养鸽人把你们装进笼子，车开了很远。笼子打开的时候，你们脚下是一片陌生的街道。',
      options: [
        { t: '朝记忆里的方向飞', hint: '回家 · 体力↓', eff: { food: -5, health: -3 }, risk: 1.1, riskDays: 3,
          result: '你朝着记忆里的方向飞，飞了整整一个下午，才看见熟悉的屋顶。' },
        { t: '先落在附近的屋檐下休息', hint: '安全 · 迷路风险↑', eff: { health: +3 }, risk: 1.3, riskDays: 10,
          result: '你在檐下休息了一夜。第二天风向变了，你找了很久才认出鸽舍的方向。' },
      ],
    },
    {
      id: 'mumbai_roof', at: 420, need: 'mumbai',
      title: '屋顶的水池',
      body: '屋顶的水池在太阳下冒着热气。几只鸽子挤在池边，你挤不进去。',
      options: [
        { t: '挤进去喝水', hint: '饮水↑ 被啄的风险↑', eff: { health: +4 }, risk: 1.2, riskDays: 3,
          result: '你挤进去，喝了几口水。旁边的鸽子用喙啄了你的翅膀。' },
        { t: '去远处的水沟里喝水', hint: '安全', eff: { health: +2 }, risk: 0.9, riskDays: 3,
          result: '你飞到一条排水沟边，喝了一口水，水是凉的。' },
      ],
    },
    {
      id: 'cold_vent', at: 150, need: 'cold_year',
      title: '夜里的排风口',
      body: '这个冬天特别冷。楼的背面有一个排风口，暖气从里面一阵一阵地吹出来。',
      options: [
        { t: '挤到排风口旁边', hint: '保暖↑ 人群多', eff: { health: +5 }, risk: 0.8, riskDays: 20,
          result: '你缩在排风口边上，热气吹在羽毛上。天亮时，一个清洁工把你赶走了。' },
        { t: '留在露天的屋檐下', hint: '寒冷 · 风险↑', eff: { health: -5 }, risk: 1.4, riskDays: 20,
          result: '你蜷在檐下，风从四面吹进来。天亮时，你的脚已经冻得发僵。' },
      ],
    },

  ],

  actions: {
    forage:  { name: '啄面包屑', desc: '在广场和人行道上找面包屑、爆米花和玉米。', text: ['你低着头，一粒一粒地啄。', '一个小孩把一包爆米花扔在地上，你们一起冲了过去。', '……'] },
    hide:    { name: '躲进屋檐下', desc: '缩在檐下或窗沿的凹陷里，躲开人和猫。', text: ['你缩在檐下，外面的脚步声一阵一阵地过去。', '……'] },
    rest:    { name: '停在屋顶', desc: '停在屋顶或电线上打盹，把一只脚收进羽毛里。', text: ['你在屋顶上打盹，耳朵里是远处的车声。', '……'] },
    explore: { name: '飞去另一个广场', desc: '跟着鸽群飞到更远的街区，找新的食物点。', text: ['你跟着鸽群飞过一条街，下面的车在闪光。', '……'] },
    mate:    { name: '筑巢育雏', done: '你和配偶在窗台上又产下了 {n} 枚蛋。' },
  },
  brood: [2, 2],

  idle: [
    '你在屋顶上咕咕地叫了两声，没有人回应。',
    '街上的脚步声一阵一阵地过去。',
    '你把嘴伸进羽毛里，抖了抖身子。',
    '广场上的喷泉喷起来，水雾落在你的背上。',
    '一只鸽子落在你旁边的瓦片上，又飞走了。',
    '楼里的人打开窗户，把一盆水倒在窗台外。',
    '你在电线上站了很久，脚爪有点冷。',
    '远处有人在吹口哨，鸽群飞起来又落下。',
  ],

  epitaph: '你是被驯化的原鸽的后代，从一个檐下飞到另一个檐下。城市给了你食物，也给了你很多危险。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'penguin',
  name: '帝企鹅',
  en: 'Emperor penguin',
  sci: 'Aptenodytes forsteri',
  emoji: '🐧',
  scene: 'polar',
  kind: 'wild',
  tagline: '在南极的冬天里，父亲把你的蛋放在脚上，站了两个月。',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '冰面位置', options: [
        ['近海的海冰边缘，食物近，风大', 2, { risk: 1.2 }],
        ['靠近冰架内侧，风小，离海远', 3, { risk: 0.9 }],
        ['一片平整的海冰，风中等', 2, {}],
      ]},
      { label: '父亲的体况', options: [
        ['父亲冬天前吃得饱', 2, { health: +5 }],
        ['父亲换羽晚，体况差', 1, { health: -8, risk: 1.3 }],
      ]},
      { label: '繁殖地', options: [
        ['南极半岛的一个大型繁殖地，上万只企鹅挤在同一片冰上', 3, { risk: 1.1, set: 'big_colony' }],
        ['一个小岛上的繁殖地，只有几百对企鹅', 2, { food: +5, set: 'small_colony' }],
        ['一座靠近科考站的岛屿，岸上常有人走动', 1, { safety: +5, risk: 1.1, set: 'station' }],
      ]},
      { label: '那一年的海冰', options: [
        ['那年的海冰很厚，一直延伸到很远的海上，企鹅们要走很远才能下水', 2, { food: -8, set: 'thick_ice' }],
        ['那年海冰化得很早，近岸的冰薄，海里的鱼很多', 2, { food: +8, risk: 1.15, set: 'early_melt' }],
        ['那年海冰的形状很平稳，没有大风，适合育雏', 3, { health: +5, set: 'calm_ice' }],
      ]},
    ],
    siblings: 1500,
    siblingsLabel: '同一个繁殖地的蛋',
    intro: '你是一枚蛋，产在{冰面位置}。{sex}。你的父亲会用脚和育儿囊把你盖住，{父亲的体况}。同一个繁殖地附近约 {siblings} 枚蛋（含你）。',
  },

  stages: [
    { id: 'egg',   name: '蛋（在父亲脚上）', from: 0,    unit: 'day' },
    { id: 'chick', name: '雏鸟（幼鸟群）',   from: 62,   unit: 'week' },
    { id: 'juv',   name: '幼鸟（下海）',     from: 365,  unit: 'month' },
    { id: 'adult', name: '成鸟',             from: 1460, unit: 'month' },
    { id: 'old',   name: '老年',             from: 3650, unit: 'year' },
  ],
  maturity: 1460,
  maxAge: 7300,

  survival: [[0,1],[1,0.9],[62,0.8],[120,0.72],[365,0.5],[730,0.42],[1460,0.36],[2920,0.26],[4380,0.14],[5840,0.05],[6570,0.012],[7300,0.001]],
  survivalNote: '幼鸟第一年的死亡率很高，成年后年存活率约 85–95%。此曲线按标记研究和普查粗估，不是精确数据。',

  init: { health: 80, food: 50, safety: 40 },
  foodDrain: 1,

  causes: [
    { id: 'leopard', escape: true, w: 3, stages: ['juv','adult','old'], short: '被豹海豹咬住',
      text: '豹海豹从冰下的水里蹿上来。它扣住你的背，把你拖进水里。你只看到冰上的影子缩了下去。' },
    { id: 'orca', escape: true, w: 2, stages: ['juv','adult','old'], short: '被虎鲸追上',
      text: '几只虎鲸在冰缝边上浮起来。你游得很快，但有一只追到了你身后。' },
    { id: 'cold', escape: false, w: 4, stages: ['egg','chick'], short: '暴风雪中冻死',
      text: '暴风雪刮了三天。父亲站在你身边，身上的雪越积越厚，它的体温挡不住风。' },
    { id: 'starve', escape: false, w: 4, stages: ['chick'], short: '父母没有回来，饿死',
      text: '父母出海觅食的时间比往常长。你在幼鸟群里等，等不到回来的那一只。' },
    { id: 'breakaway', escape: true, w: 2, stages: ['juv','adult','old'], short: '冰面断开，漂入大海',
      text: '你站着的那块冰裂开了，缝隙在你脚下一下子变宽。你跳了一下，没能跳到另一块冰上。' },
    { id: 'crush', escape: false, w: 2, stages: ['chick','juv'], short: '在群体里被挤死',
      text: '风暴来了，所有企鹅都挤在一起。你被挤在下面，没能喘过气。' },
    { id: 'old', escape: false, w: 0, short: '衰老',
      text: '你的羽毛越来越稀，身体也越来越沉。有一天你在冰上趴下，没有再起来。' },
  ],

  events: [
    { stages: ['egg'], w: 2, text: '你在蛋壳里，身边是父亲腹部的羽毛和育儿囊的温度。外面的风声很大，但这里很暖。' },
    { stages: ['egg'], w: 2, text: '父亲两个月没有吃东西。它站着不动，只偶尔挪动一下脚，把蛋再盖好一点。' },
    { stages: ['egg'], w: 1, once: true, text: '你的父亲和其他雄鸟挤在一起。它们轮流站到最里面，谁也没有一直待在最外圈。' },
    { stages: ['egg'], w: 1, text: '一阵风把雪吹进了你所在的那片小窝。父亲把你盖得更紧了。', eff: { health: -3 } },
    { stages: ['chick'], w: 3, once: true, text: '你破壳了，身上湿漉漉的。母亲从海里回来，找到了你，喂你吃了第一顿。', eff: { food: +25 } },
    { stages: ['chick'], w: 3, text: '你和其他小鸟挤在一个幼鸟群里。父母回来时，每一只都要认出自己的孩子。', eff: { safety: +6 } },
    { stages: ['chick'], w: 2, text: '父母还没有回来。你饿了，身边的小鸟也在叫，但没有人来。', eff: { food: -12, health: -4 } },
    { stages: ['chick','juv'], act: 'rest', w: 2, text: '暴风雪压下来。你和一群幼鸟挤在一起，身子贴着身子，热气一层层地堆起来。', eff: { health: +4 } },
    { stages: ['chick','juv'], w: 2, text: '一只贼鸥在冰上转了几圈，盯着落单的幼鸟。', eff: { safety: -5 } },
    { stages: ['juv'], act: 'forage', w: 2, text: '你第一次走下冰缘，跳进海里。水很冷，但身体立刻知道该怎么游。', eff: { food: [10, 18] } },
    { stages: ['juv'], act: 'explore', w: 2, text: '你沿着冰缘游了很远，经过一片陌生的冰。冰上有一只豹海豹，你从它的影子旁边绕了过去。', eff: { safety: -8, food: +8 } },
    { stages: ['juv','adult'], act: 'forage', w: 3, text: '你潜进海里，下到一百多米深。周围很黑，只能靠身体去感觉鱼群的动向。', eff: { food: [12, 20] } },
    { stages: ['juv','adult'], act: 'hide', w: 2, text: '海豹的头从冰窟窿里冒出来。你收起身子，混进一群同伴里，让它找不到目标。', eff: { safety: +6, food: -3 } },
    { stages: ['adult'], act: 'rest', w: 2, text: '你和同伴挤在冰面上，外圈的几只一直在轮换到里面来。你站在中间，很暖。', eff: { health: +5, safety: +4 } },
    { stages: ['adult'], act: 'forage', w: 2, text: '一群鱼在水下形成一道银色的墙。你跟着追，身体几乎要用光了。', eff: { food: [10, 16], health: -3 } },
    { stages: ['adult'], act: 'explore', w: 1, text: '你跑到冰缘很远的地方。这里的冰很薄，你脚下一软，又站稳了。', eff: { safety: -6 } },
    { stages: ['adult'], w: 1, once: true, text: '冬天，你找到了配偶。你们在冰上站到一起，互相低鸣。' },
    { stages: ['adult'], act: 'mate', w: 1, once: true, text: '你们产下了一枚蛋。你用脚接住它，把它盖在育儿囊下面。', eff: { offspring: [1, 1] } },
    { stages: ['adult'], w: 1, text: '海面上吹起了强风。你和其他企鹅一起等着，等风停。', eff: { health: -3 } },
    { stages: ['adult','old'], w: 2, text: '一只海鸟从头顶飞过。你抬头看了一眼，又低下了头。' },
    { stages: ['adult','old'], w: 2, text: '你的羽毛在换羽季脱落了一大片。你只能待在冰面上不下水，直到新的羽毛长出来。', eff: { health: -8, food: -8 } },
    { stages: ['old'], w: 3, text: '你的动作慢了。下海的次数比以前少，每次回来都要休息很久。', eff: { health: -5 } },
    { stages: ['old'], w: 1, text: '你和一群老企鹅挤在一起。它们不太动，只偶尔挪一挪身子。', eff: { safety: +3 } },
    { stages: ['juv','adult'], w: 1, text: '海豹从冰面上滑下来。你没有看见它，只看见同伴们一起跳进了海里。', eff: { safety: -6 } },
    { stages: ['adult'], w: 1, text: '科研人员在冰面上放了一台仪器，在你身边放了一个标签。' },
    { stages: ['egg'], w: 2, need: 'big_colony', text: '几万只企鹅挤在一起，你的父亲站在人群中间，脚上托着你。四周都是陌生的脚，来回踩着冰面。', eff: { safety: -3 } },
    { stages: ['chick'], w: 2, need: 'big_colony', text: '雏鸟聚在一起，成了一大片幼鸟群。大人们从一片混乱里找到自己的孩子。', eff: { health: +3 } },
    { stages: ['juv','adult'], w: 1, need: 'big_colony', act: 'hide', text: '你挤进群体中间，那里暖和，风吹不到。外圈的企鹅一只一只轮换着站在风口。', eff: { safety: +5 } },
    { stages: ['egg'], w: 2, need: 'small_colony', text: '这个岛上只有几百对企鹅。你的父亲很容易找到你的母亲，两个人在冰上来回踱步。', eff: { health: +3 } },
    { stages: ['chick'], w: 2, need: 'small_colony', act: 'forage', text: '父母很快就从海里回来，把食物送进你的嘴里。你没有等太久。', eff: { food: +10 } },
    { stages: ['juv'], w: 1, need: 'small_colony', text: '岛上的食物很快被你们吃光了。你第一次游出很远，才找到另一片海。', eff: { food: -5 } },
    { stages: ['egg','chick'], w: 2, need: 'station', text: '远处的科考站传来发电机的声音。你们的窝旁边插着一根木桩，上面挂着一块牌子。', eff: { safety: +3 } },
    { stages: ['juv','adult'], w: 2, need: 'station', text: '科考队的人走到冰边上拍照。你们挤在一起，没有人靠近你们。', eff: { safety: +3 } },
    { stages: ['adult'], w: 1, need: 'station', act: 'explore', text: '你游过科考站的船只经过的水域。船上的人探出身子，朝你们挥手。' },
    { stages: ['chick'], w: 2, need: 'thick_ice', text: '厚冰一直延伸到海边，父母要走很久才能到水里。你的脚步在冰上留下了很长的痕迹。', eff: { food: -5 } },
    { stages: ['juv'], w: 2, need: 'thick_ice', act: 'forage', text: '你第一次下海，要先走过很远的厚冰才到开阔的水域。路上你停下来休息了好几次。', eff: { health: -3 } },
    { stages: ['adult'], w: 2, need: 'thick_ice', text: '那一年，海冰把你们的栖息地和海隔开了很远。你每次去海里，都要耗掉很多力气。', eff: { food: -8 } },
    { stages: ['egg','chick'], w: 2, need: 'early_melt', text: '冰面开始变软。你的父亲站在冰的边缘，身体随着水波晃动。', eff: { safety: -5 } },
    { stages: ['juv'], w: 2, need: 'early_melt', act: 'forage', text: '海水里的鱼很多。你游进一群银色的小鱼中间，吃得很快。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'early_melt', text: '冰缝越来越多。你在冰缝之间跳来跳去，偶尔有一只海豹从下面冒出来看你。', eff: { safety: -5 } },
    { stages: ['chick'], w: 2, need: 'calm_ice', text: '这一年没有大风。你在冰上晒着太阳，身上的绒毛一天天变长。', eff: { health: +5 } },
    { stages: ['juv'], w: 2, need: 'calm_ice', text: '平静的海面让你第一次下水时没那么害怕。你学会了在水里滑行。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, need: 'calm_ice', act: 'rest', text: '海面平静，你在冰上站了很久，没有什么打扰你。', eff: { health: +3 } },
    { stages: ['juv'], w: 2, need: 'bold', text: '你第一个跳进海里，身后的同伴还站在冰边上犹豫。你游得很快，很快离开了视线。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 2, need: 'cautious', text: '你在冰边站了很久，看着水里有没有影子，才慢慢跳进去。', eff: { safety: +5 } },
    { stages: ['juv'], w: 2, need: 'curious', text: '你跟着一只海鸟走了很远，看它怎样一头扎进水里，抓住一条鱼。' },
    { stages: ['chick'], w: 2, need: 'runt', text: '你比同窝的雏鸟小。父母送来的食物你总是抢不过别人，只能等到最后。', eff: { food: -8, health: -3 } },
    { stages: ['adult'], w: 2, need: 'robust', text: '一只豹海豹从冰下咬住你的脚，你用力甩开，它松了口。', eff: { health: -5, safety: +3 } },
  ],

  opening: {
    title: '母亲选的产蛋冰面',
    body: '你还是一枚蛋，还没有产出来。母亲在冬天的海冰上挑地方：靠海的冰缘，食物近，但风大，冰也薄；靠冰架内侧，风小，离海远。她要在几分钟内把你交给父亲的脚。',
    fact: '2009 年的卫星普查估计约 23.8 万对繁殖对，分布在 46 个繁殖地（Fretwell 等, PLoS ONE, 2012）',
    options: [
      { t: '在靠海的冰缘', hint: '食物近 · 风大冰薄', eff: { food: +5 }, risk: 1.3, riskDays: 30,
        result: '你在靠海的冰缘被产下。父亲很快把你接到脚上，但风从海上吹来，很冷。' },
      { t: '在冰架内侧', hint: '风小 · 离海远', eff: { food: -5, health: +3 }, risk: 0.85, riskDays: 30,
        result: '你在冰架内侧被产下。风很小，但同伴们要走很远才能到海边。' },
    ],
  },

  decisions: [
    {
      id: 'creche', at: 70,
      title: '父母还没回来',
      body: '幼鸟群的边缘很冷。里面挤着暖和的小鸟，外面只有风。你饿了，父母已经很久没有出现。',
      options: [
        { t: '挤到幼鸟群的中间', hint: '暖 · 吃得少', eff: { safety: +8, food: -5 },
          result: '你挤进幼鸟群的中间，身子很快暖起来。肚子还是空的。' },
        { t: '走到冰缘去找父母', hint: '可能找到 · 豹海豹', eff: { food: +10 }, risk: 1.4, riskDays: 5,
          result: '你走到冰缘，看见远处的海面上有一排黑点，但分不清哪一个是父母。' },
      ],
    },
    {
      id: 'first_swim', at: 365,
      title: '第一次下海',
      body: '幼鸟们站在冰缘上，一只一只地往水里看。水很冷，海面下有食物，也有海豹。',
      options: [
        { t: '跟着同伴跳进海里', hint: '吃得多 · 风险↑', eff: { food: +10 }, risk: 1.2, riskDays: 10,
          result: '你跳下去，冷得差点停住呼吸。不过你很快找到了一群鱼。' },
        { t: '留在冰上等几天', hint: '安全 · 饿', eff: { food: -5 }, risk: 0.9, riskDays: 10,
          result: '你在冰上等着。同伴们回来时身上都带着鱼的味道。' },
      ],
    },
    {
      id: 'hunger', at: 700, when: { food: '<40' },
      title: '食物不够了',
      body: '附近的鱼群越来越少。你的身体比去年轻了很多，胸口的羽毛也开始稀疏。',
      options: [
        { t: '走远一些，去新的觅食区', hint: '食物↑ · 风险↑', eff: { food: +15 }, risk: 1.5, riskDays: 20,
          result: '你沿着冰缘走了很远，终于遇到一片新的鱼群。' },
        { t: '留在冰区附近，靠同伴', hint: '近 · 食物少', eff: { food: +3, safety: +5 }, risk: 0.9, riskDays: 20,
          result: '你留在冰区附近。同伴们回来时，你能分到一点鱼。' },
      ],
    },
    {
      id: 'pair', at: 1500,
      title: '冬天要不要配对',
      body: '你已经成年了。冬天的冰面上，已经有雄鸟和雌鸟站到一起。你的身体还有一点没有用完的脂肪。',
      options: [
        { t: '在冬天配对', hint: '后代↑ · 体力↓', eff: { offspring: [1, 1], health: -4 }, risk: 1.1, riskDays: 60,
          result: '你和配偶站在一起，产下了一枚蛋。之后的两个月，你几乎什么也没吃。' },
        { t: '这一年先养好身体', hint: '体力↑ · 不产蛋', eff: { health: +10, food: -5 },
          result: '你在冰上多待了一段时间，把身体养回来。别的企鹅开始孵蛋了，你没有参与。' },
      ],
    },
    {
      id: 'leopard', at: 2500,
      title: '豹海豹在冰缘',
      body: '一只豹海豹趴在冰缘上，眼睛半闭着，但它的头正对着你。你站的那块冰离水只有一步远。',
      options: [
        { t: '原地不动', hint: '非常危险', kill: 0.25, cause: 'leopard', eff: {},
          result: '你站着没动。那只海豹慢慢靠过来，没有着急。' },
        { t: '从冰缘滑进水里', hint: '安全', eff: { safety: +10 }, risk: 0.8, riskDays: 5,
          result: '你滑进水里，朝另一边游。海豹没有追。' },
      ],
    },
    {
      id: 'moult', at: 3800,
      title: '换羽的时候',
      body: '换羽季快到了。换羽时不能下水，要在冰上待一个多月。这段时间里，身体一点一点地变轻。',
      options: [
        { t: '留在冰上不下水', hint: '安全 · 食物↓', eff: { health: +5, food: -10 },
          result: '你在冰上待了一个多月，羽毛一点一点地长回来。你的身子轻了很多。' },
        { t: '下水去找最后的鱼', hint: '食物↑ · 羽毛湿', eff: { food: +15 }, risk: 1.3, riskDays: 15,
          result: '你下了水，找到了几条鱼。但湿透的羽毛让你觉得冷得厉害。' },
      ],
    },
    {
      id: 'last_winter', at: 5000, when: { health: '<40' },
      title: '这个冬天很冷',
      body: '暴风雪连续吹了好几天。你的体力已经不够了，身边的老企鹅一只一只不再动。',
      options: [
        { t: '挤进群体中心', hint: '暖 · 挤', eff: { safety: +10, health: +4 },
          result: '你挤进群体的中心。身上很快热起来，但你不断被推来推去。' },
        { t: '一个人走到外圈', hint: '冷 · 能看见海', eff: { health: -5 }, risk: 1.5, riskDays: 10,
          result: '你走到外圈，风很快把你身上的热气吹走。你看见了海，但没有力气过去。' },
      ],
    },
    {
      id: 'colony_crowd', at: 80, need: 'big_colony',
      title: '挤得太满了',
      body: '雏鸟越来越多，你被挤到了群体的外圈。风从外面一阵一阵地吹进来。',
      options: [
        { t: '挤进中间，让别的雏鸟在外面挨风', hint: '保暖↑ 挤压风险↑', eff: { health: +3, safety: +3 }, risk: 0.9, riskDays: 20,
          result: '你挤进了中间，身上暖了起来。外圈的雏鸟一只接一只地缩进了你的身边。' },
        { t: '留在外圈，等空隙出现', hint: '饿 · 风险↑', eff: { food: -3, health: -3 }, risk: 1.3, riskDays: 20,
          result: '你在风口站了很久，直到一个空隙出现，你才挪进去。' },
      ],
    },
    {
      id: 'thick_ice_walk', at: 400, need: 'thick_ice',
      title: '一片厚冰',
      body: '你要走过一大片厚冰才能下海。冰面上有裂缝，远处的海水是深蓝色的。',
      options: [
        { t: '直接走最短的路', hint: '饱食↑ 冰裂风险↑', eff: { food: +5 }, kill: 0.04, cause: 'breakaway',
          result: '你走了最短的路。冰裂开的声音在身下响起，你跳过了一道缝。' },
        { t: '绕远路，沿着冰缘走', hint: '安全 · 饿', eff: { food: -5 }, risk: 0.9, riskDays: 5,
          result: '你沿着冰缘绕了很远，才走到开阔的水域。' },
      ],
    },
    {
      id: 'early_break', at: 600, need: 'early_melt',
      title: '碎冰的边缘',
      body: '海水把冰面切成了一块块碎冰。碎冰之间的水里有一群鱼，但碎冰随时会翻动。',
      options: [
        { t: '跳上碎冰，去够那群鱼', hint: '饱食↑↑ 翻冰风险↑', eff: { food: +15 }, risk: 1.5, riskDays: 4,
          result: '你跳上一块碎冰，跟着鱼群游了一段。碎冰翻了一下，你差点被甩进水里。' },
        { t: '在岸边等，等碎冰靠稳', hint: '安全 · 饿', eff: { food: -8, safety: +3 }, risk: 0.9, riskDays: 4,
          result: '你站在岸边等了很久。碎冰慢慢靠在一起，鱼群也走远了。' },
      ],
    },

  ],

  actions: {
    forage:  { name: '下海觅食', desc: '离开冰区，潜入海里捕鱼和磷虾。', text: ['你潜进水里，冷得身体发紧。', '鱼群的味道在水里很淡，你顺着它游过去。', '……'] },
    hide:    { name: '挤进群体中间', desc: '躲在群体中心，避开风和海豹。', text: ['你挤进同伴中间，风一下子停了。', '……'] },
    rest:    { name: '抱团取暖', desc: '和同伴挤成一团，外圈的几只会轮换到里面来。', text: ['你和同伴的肩膀挨着，谁也不动。', '……'] },
    explore: { name: '长途远行', desc: '沿着冰缘走很远，去找新的食物场。', stages: ['adult','old'], text: ['你沿着冰缘走，脚下的雪很深。', '……'] },
    mate:    { name: '配对产蛋', done: '你产下了 {n} 枚蛋，放在冰上，马上用脚接住。' },
  },

  idle: [
    '风从冰面上刮过，发出很细的呜呜声。',
    '你和同伴的肩膀挨着，谁也不动。',
    '海水在远处冰缘撞击，一下一下地响。',
    '你低着头，把嘴伸进羽毛里抖了抖。',
    '天一直是白的，你分不清几点。',
    '身边的同伴在低鸣，声音很低。',
    '雪落在你背上，很快化成水，又结成了冰。',
    '你闻到海水里有鱼的味道，很淡。',
  ],

  epitaph: '你在冰上站过很多个冬天。这个世界的冬天很长，而你是其中一只。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'bat',
  name: '蝙蝠',
  en: 'Insectivorous bat',
  sci: '翼手目（以东亚伏翼 Pipistrellus abramus 为例）',
  emoji: '🦇',
  taxon: '脊索动物门 › 哺乳纲 › 翼手目',
  size: '体长约 4 厘米，体重约 5 克',
  scene: 'city',
  kind: 'wild',
  tagline: '哺乳动物里大约每五种就有一种是蝙蝠',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['一栋老房子的阁楼', 3, { food: +5, risk: 1.1 }],
        ['一座桥下的缝隙', 2, {}],
        ['一棵老树的树洞', 2, { safety: +5 }],
        ['山里废弃的矿洞', 1, { food: -5 }],
      ]},
      { label: '母亲的状况', options: [
        ['一只经验丰富的母蝠', 3, { health: +5 }],
        ['第一次产仔的年轻母蝠', 2, { health: -5, risk: 1.1 }],
      ]},
      { label: '冬天的住处', options: [
        ['一座石洞里，冬天温度稳定，偶尔有水滴从洞顶落下', 3, { health: +3, set: 'cave' }],
        ['一栋楼房的夹层，冬天有暖气的热量传过来', 2, { food: +5, set: 'attic' }],
        ['一座老桥的桥洞，冬天风从两头灌进来', 2, { risk: 1.15, set: 'bridge' }],
        ['一棵老树的树皮缝，冬天没有遮挡', 1, { food: -5, risk: 1.2, set: 'bark' }],
      ]},
    ],
    siblings: 1,
    siblingsLabel: '同一年的幼崽',
    intro: '你出生在{出生地}里，是母亲这一年唯一的一只幼崽。{母亲的状况}把你生了下来，你是{sex}。你现在还不会飞，眼睛也没有睁开。',
  },

  stages: [
    { id: 'pup',   name: '幼崽（不会飞）', from: 0,    unit: 'day'  },
    { id: 'juv',   name: '幼蝠（学飞）',   from: 30,   unit: 'week' },
    { id: 'adult', name: '成蝠',           from: 365,  unit: 'year' },
    { id: 'old',   name: '老蝠',           from: 3650, unit: 'year' },
  ],
  maturity: 365,
  maxAge: 13140,

  survival: [[0,1],[30,0.85],[90,0.6],[180,0.45],[365,0.35],[730,0.2],[1460,0.08],[2920,0.02],[4380,0.005],[5475,0.001],[13140,0]],
  survivalNote: '幼蝠第一年存活率通常只有四到五成，成年后每年存活约六到八成。寿命上限参考 Podlutsky 等（2005）对野外鼠耳蝠的 41 年记录；东亚伏翼的实际寿命通常短得多，此曲线为粗估。',

  init: { health: 70, food: 55, safety: 50 },
  foodDrain: 3,

  causes: [
    { id: 'owl', escape: true, w: 4, stages: ['juv','adult','old'], short: '被猫头鹰抓走',
      text: '一只灰林鸮从树冠里滑下来，爪子在你的翅膀上合拢。你只来得及尖叫了一声，它的声音就盖过了你的回声。' },
    { id: 'cat', escape: true, w: 3, stages: ['pup','juv'], short: '被猫抓住',
      text: '猫的爪子从瓦缝里伸下来。你扑了一下，翅膀膜却被勾住了。' },
    { id: 'turbine', escape: false, w: 2, stages: ['adult','old'], short: '风力发电机的气压伤',
      text: '叶片经过时，你周围的气压骤然下降。你没有被撞到，但肺里的毛细血管爆了，你在半空里失去了方向。',
      fact: '风电场里很多蝙蝠死于气压伤，许多并没有被叶片直接击中（Baerwald 等，Current Biology，2008）' },
    { id: 'wns', escape: false, w: 2, stages: ['adult','old'], short: '白鼻综合征（真菌感染）',
      text: '真菌在你冬眠时长满了鼻子和翅膀膜。醒来时，翅膀上已经有了溃烂的洞，你的脂肪也在往外漏。',
      fact: '白鼻综合征由一种嗜冷真菌引起，2006 年在美国纽约州的洞穴里首次被记录（Blehert 等，Science，2009）' },
    { id: 'starve', escape: false, w: 3, short: '饿死（天冷虫少）',
      text: '连续几个冷夜，你一只虫子也没有捉到。你身上的脂肪用完了，心跳越来越慢，没有醒过来。' },
    { id: 'torpor', escape: false, w: 1, short: '冬眠中被冻死',
      text: '冬眠的洞里温度突然降到冰点以下。你的体温没能回升，身体就这样僵在了洞壁上。' },
    { id: 'roost_closed', escape: false, w: 1, stages: ['adult','old'], short: '栖所被封死',
      text: '施工队把洞口封住了。你在里面叫了一整夜，没有人听见。' },
    { id: 'old', w: 0, short: '衰老', text: '你的翅膀越来越慢，最后停在了产房的梁木上。' },
  ],

  events: [
    { stages: ['pup'], w: 3, text: '母亲出去捕虫了。产房里挤着几百只幼蝠，你靠气味和叫声在墙面上找到了她的位置。' },
    { stages: ['pup'], w: 2, text: '母亲回来了。你凑过去吃奶，她的身上有夜里飞行的热气。', eff: { food: +10 } },
    { stages: ['pup'], w: 2, text: '隔壁的一只幼蝠掉到了地上，叫声越来越弱。你没有办法。', eff: { safety: -5 } },
    { stages: ['pup'], w: 1, once: true, text: '你的翅膀膜上开始有了细细的血管纹路，手指也慢慢变长了。' },
    { stages: ['pup'], w: 1, text: '一只猫在瓦片外面走过，爪子刮过木板。整个产房的幼蝠都在叫。', eff: { safety: -10 } },
    { stages: ['juv'], w: 3, act: 'forage', text: '你第一次在外面捉到一只飞蛾。它在你嘴里扑打翅膀，你把它咽了下去。', eff: { food: +15 } },
    { stages: ['juv'], w: 2, text: '你发出一连串超声波，回声从前方的电线上弹了回来。你躲开了它。',
      fact: '蝙蝠用回声定位，这一现象由 Griffin 与 Galambos 在 1941 年首次证实（Griffin & Galambos，1941）' },
    { stages: ['juv'], w: 2, act: 'explore', text: '你第一次飞出熟悉的街区，越过了河。河对岸的路灯下全是飞虫。', eff: { food: +12 } },
    { stages: ['juv'], w: 1, text: '一只灰林鸮从树林里冲出来，你俯冲，躲进了屋檐下面。', eff: { safety: +5 } },
    { stages: ['juv','adult'], w: 2, act: 'hide', text: '你钻进屋檐的缝隙，倒挂着，安静地等天亮。外面的脚步声经过了三次。', eff: { food: -5, safety: +10 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '白天你倒挂在梁木上。体温随环境慢慢降下来，心跳也慢了。', eff: { health: +5 } },
    { stages: ['adult'], w: 2, act: 'forage', text: '夏夜的湖面上蚊子成群。你贴着水面飞，一连捉了很多只。', eff: { food: +20 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你沿着河谷一直往南飞，比平时远了十几公里，回来时天已经快亮了。', eff: { food: +8, safety: -5 } },
    { stages: ['adult'], w: 1, act: 'forage', text: '一只大型甲虫的硬壳咬不动，你只吃了它的软肚子，把翅鞘吐了出来。', eff: { food: +5 } },
    { stages: ['adult'], w: 1, text: '夜里的一阵大风把你吹离了航线。等你重新找到方向，半个晚上已经过去了。', eff: { food: -5 } },
    { stages: ['adult'], w: 1, text: '你的一只翅膀膜被铁丝网刮破了。几天后才愈合，留下了一道薄薄的疤。', eff: { health: -10 } },
    { stages: ['adult'], w: 1, need: 'female', act: 'mate', text: '秋天的夜里，一只雄蝠在你身边扑打翅膀，发出一串不同于捕食时的叫声。' },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '六月，你产下了一只幼崽。它很轻，一只手就能托住。',
      eff: { offspring: [1, 1] },
      fact: '多数温带小型蝙蝠每年只产一只幼崽（Kunz & Fenton，Bat Ecology，2003）' },
    { stages: ['adult','old'], w: 1, text: '风力发电机转个不停，叶片扫过时带起一阵风。你绕开了它。',
      fact: '美国与加拿大的风电场每年有大量蝙蝠死亡（Arnett 等，2008）' },
    { stages: ['adult','old'], w: 1, text: '冬眠洞里有人打着手电来数蝙蝠。你的鼻子上长着一小块白色的霉。', eff: { health: -5 } },
    { stages: ['old'], w: 2, text: '你的牙齿磨平了，有几只甲虫的外壳咬不动了。', eff: { food: -10 } },
    { stages: ['old'], w: 2, text: '远处的光在你的视野里越来越模糊，但回声还是很清楚。', eff: { safety: -3 } },
    { stages: ['old'], w: 1, act: 'rest', text: '你在旧产房的缝隙里休息。那里还留着几十年前的味道。' },
    { stages: ['adult','old'], w: 1, once: true, text: '一只同属的鼠耳蝠在野外被标记后，活到了四十一年，是目前已知的蝙蝠寿命纪录。',
      fact: 'Myotis brandtii 的野外寿命纪录为 41 年（Podlutsky 等，Journal of Gerontology，2005）' },
    { stages: ['juv','adult'], w: 3, need: 'cave', text: '冬天的石洞里很安静，温度一直保持在凉爽的程度。你的心跳慢下来，很少醒。', eff: { health: +4 } },
    { stages: ['adult','old'], w: 2, need: 'cave', text: '夜里你从洞口飞出去，黑暗里有很多同类的叫声。回来的时候，洞里的温度又低了一点。', eff: { food: -3 } },
    { stages: ['juv','adult'], w: 3, need: 'attic', text: '冬天，楼房的夹层里有暖气的热量传过来。你醒得比别的蝙蝠早，偶尔爬出来换个位置。', eff: { food: +5 } },
    { stages: ['adult','old'], w: 2, need: 'attic', text: '有人在夹层里装了灯，灯光照进来，你在角落里待了几天才敢出去。', eff: { safety: -5 } },
    { stages: ['juv','adult'], w: 3, need: 'bridge', text: '桥洞的风很大，你紧紧抓着石缝，身体几乎不能动。', eff: { health: -5 } },
    { stages: ['adult','old'], w: 2, need: 'bridge', text: '桥上的车灯从洞口扫过，你被惊醒，爬到更深的缝隙里。', eff: { safety: -4, health: -2 } },
    { stages: ['juv','adult'], w: 3, need: 'bark', text: '你挂在树皮的缝隙里，冬天的风从两边吹过。你醒了好几次，每次都觉得冷。', eff: { health: -6 } },
    { stages: ['adult','old'], w: 2, need: 'bark', text: '一只灰林鸮在树冠里叫，声音穿过林子。你贴紧树皮，没有动。', eff: { safety: +3 } },
    { stages: ['juv'], w: 2, need: 'runt', text: '你比别的幼蝠小一圈，学飞的时候总是落在最后面。', eff: { food: -6 } },
    { stages: ['juv','adult'], w: 2, need: 'robust', text: '你的翅膀比别的幼蝠结实，练飞的那几个晚上，你比别人飞得远。', eff: { food: +4 } },
    { stages: ['adult'], w: 2, need: 'bold', text: '你总是第一个飞出洞口，在路灯下追着一群飞蛾转。', eff: { food: +10, safety: -5 } },
    { stages: ['adult'], w: 2, need: 'cautious', text: '你在洞口停了很久，等外面的风声变小了才飞出去。', eff: { safety: +5, food: -3 } },
    { stages: ['juv'], w: 2, need: 'curious', text: '你在屋檐下探头探脑，看见一只飞蛾停在墙上，它的翅膀在灯光下闪着光。', eff: { food: +6 } },
  ],

  opening: {
    title: '母亲在找产房',
    body: '你还没出生。母亲在秋天交配，要到第二年春天才会产下你。现在她要在两处地方之间选：阁楼的顶棚温暖，但有猫和人；老树的树洞凉一些，安静一些，虫子也少。',
    options: [
      { t: '阁楼的顶棚', hint: '暖和 · 有猫和人', eff: { health: +5, safety: -5 }, risk: 1.2, riskDays: 30,
        result: '你在屋顶的热气里出生。猫在瓦片上走过时，母亲一直把你抱在身下。' },
      { t: '老树的树洞', hint: '凉 · 安静 · 虫子少', eff: { food: -5, safety: +10 }, risk: 0.8, riskDays: 30,
        result: '你在树洞的木屑里出生。洞口的风很冷，母亲的身体贴着你。' },
    ],
  },

  actions: {
    instinct: { name: '随本能', desc: '顺着回声和气味，做一只蝙蝠惯常做的事。' },
    forage:   { name: '夜间捕虫', desc: '沿着水面和路灯找飞虫，靠回声判断它们的位置。', text: [
      '你贴着水面飞，耳朵里全是飞虫振翅的回声。',
      '一只蛾子在你嘴里扑打，你把它吞了下去。',
      '……',
    ]},
    hide:     { name: '躲进缝隙', desc: '钻进屋檐或树洞的缝里，倒挂着，等天亮。', text: [
      '你把身体压进木板的缝里，外面有脚步声经过。',
      '一只猫在屋檐下停了一会儿，又走了。',
      '……',
    ]},
    rest:     { name: '倒挂休息', desc: '白天倒挂在梁木上，把体温降下来，省一点力气。', text: [
      '你的翅膀把身体裹起来，只露出一点鼻尖。',
      '……',
    ]},
    explore:  { name: '长距离夜飞', desc: '沿着河谷和林缘飞到更远的地方，找新的虫群。', stages: ['juv','adult','old'], text: [
      '你离开熟悉的街区，朝着河的方向飞。',
      '你在陌生的树冠上停了一会儿，又继续往前飞。',
    ]},
    mate:     { name: '繁殖', need: 'female', done: '你在一个温暖的夜里产下了 {n} 只幼崽。它吸住你的乳头，不肯松口。' },
  },
  brood: [1, 1],

  decisions: [
    {
      id: 'first_flight', at: 28,
      title: '第一次出飞',
      body: '你的翅膀已经能撑开了。今晚母亲和同伴都要出去，她在洞口叫你。洞外的夜很宽，你从没飞过。',
      options: [
        { t: '跟着母亲出去', hint: '学会捕食 · 猫头鹰多',
          eff: { food: +10 }, risk: 1.3, riskDays: 7,
          result: '你在夜色里扑向第一只飞蛾。身后是母亲的叫声，前面是一整片灯光。' },
        { t: '留在产房里等', hint: '安全 · 饿',
          eff: { food: -10, safety: +10 }, risk: 0.8, riskDays: 7,
          result: '你又等了一个晚上。洞口外的飞虫越来越少，你开始饿了。' },
      ],
    },
    {
      id: 'hibernate', at: 150, when: { food: '<50' },
      title: '秋天的虫子快没了',
      body: '夜里已经很冷，飞虫几乎不见了。你的脂肪不多，身体在问你：是去冬眠，还是继续找虫。',
      fact: '温带蝙蝠冬天会进入深度冬眠，体温随环境下降，心跳可以降到清醒时的很小一部分（Kunz & Fenton，2003）',
      options: [
        { t: '进入冬眠', hint: '代谢降到很低 · 冬眠中有风险',
          skip: [120, 160], kill: 0.25, cause: 'torpor',
          eff: { food: +10, health: +5 },
          result: '你的体温降到和洞壁一样。心跳慢到几乎数不出来，你把自己留给了冬天。' },
        { t: '继续捕食到冬天', hint: '饿得更快',
          eff: { food: +10 }, risk: 1.6, riskDays: 60,
          result: '你又捉了几只虫子，身上的脂肪却越来越薄。' },
      ],
    },
    {
      id: 'turbine', at: 400,
      title: '一排风力发电机',
      body: '迁徙路线上出现了一排高大的风机，叶片缓慢地转着。绕远，要多飞几个小时；直穿过去，省力，但风场里的气压变化很大。',
      options: [
        { t: '贴着树梢低飞', hint: '绕远 · 更安全',
          eff: { food: -5 }, risk: 0.8, riskDays: 3,
          result: '你绕着林缘飞了很久，最后在第二天清晨才到达新的栖所。' },
        { t: '直线穿过风场', hint: '省力 · 有气压伤的风险',
          kill: 0.2, cause: 'turbine', eff: { food: +5 },
          result: '你在叶片之间穿过。等你回头看时，风机已经在身后转了很远。' },
      ],
    },
    {
      id: 'roost_closed', at: 1200,
      title: '阁楼要装修了',
      body: '工人在屋顶上敲打，木板被拆了下来，你的产房已经有了一道新的光缝。你要不要搬走？',
      options: [
        { t: '搬到附近的老树洞', hint: '要花时间找 · 有风险',
          risk: 1.3, riskDays: 14, eff: { safety: -5 },
          result: '你花了三个晚上才找到一个树洞。它很冷，但没有人会来敲它。' },
        { t: '留在原地', hint: '熟悉 · 洞口可能被封死',
          kill: 0.2, cause: 'roost_closed', eff: {},
          result: '你在旧的缝隙里待着，直到工人把它也堵死了。' },
      ],
    },
    {
      id: 'wns', at: 1900,
      title: '冬眠洞里的白霉',
      body: '去冬眠洞的路上，你看到洞壁上长满了白色的绒毛。几只同伴的翅膀上有了溃烂的洞，它们没有飞出来。',
      fact: '白鼻综合征使北美东部的小棕蝠（一种常见的小型蝙蝠）数量在几年内大幅下降（Frick 等，Science，2010）',
      options: [
        { t: '换一个洞冬眠', hint: '路上有风险',
          risk: 1.3, riskDays: 60, eff: { food: -5 },
          result: '你飞了三个夜晚，找到了另一个温度更低、没有白霉的洞。' },
        { t: '留在原地冬眠', hint: '真菌在冬天繁殖',
          kill: 0.2, cause: 'wns', skip: [100, 150], eff: { health: -10 },
          result: '你把身体挂在熟悉的洞壁上。白色的绒毛离你的鼻子只有一指远。' },
      ],
    },
    {
      id: 'mate_choice', at: 800, need: 'female',
      title: '一只雄蝠的叫声',
      body: '秋天的桥下，一只雄蝠在你的附近反复叫着。它的声音很有力，但你不认识它。',
      options: [
        { t: '回应它', hint: '有后代的机会 · 风险略高',
          eff: { offspring: [1, 1] }, risk: 1.1, riskDays: 10,
          result: '你在秋天的夜里与它交配。精子会留在你的体内，到春天才会受精。' },
        { t: '飞进另一座桥下', hint: '保留体力',
          eff: { food: +5 },
          result: '你躲进了另一座桥的缝隙。那只雄蝠还在叫，但你没有回应。' },
      ],
    },
    {
      id: 'old_roost', at: 4500,
      title: '飞不快了',
      body: '你的翅膀膜老化了，夜里追不上蛾子。你可以留在熟悉的产房附近，也可以去远处的河谷，那里有新的虫群，路却很长。',
      options: [
        { t: '留在产房附近', hint: '安全 · 食物少',
          eff: { food: -10, safety: +10 }, risk: 0.8, riskDays: 365,
          result: '你不再飞远了。每个晚上，你都在熟悉的梁木之间绕圈。' },
        { t: '飞去河谷的新栖所', hint: '食物多 · 长途飞行',
          eff: { food: +15 }, risk: 1.5, riskDays: 60,
          result: '你花了两个晚上飞过山脊。新的栖所里，虫子多得你一时吃不过来。' },
      ],
    },
    {
      id: 'bat_bark_winter', at: 150, need: 'bark',
      title: '树皮下的冷风',
      body: '第一个冬天的夜里，树皮缝里的温度降到了冰点附近。你可以飞到另一棵更高的树的背风面，但路很远。',
      options: [
        { t: '飞到另一棵树的背风面', hint: '体力↓ 风险↑', eff: { health: +2 }, risk: 1.3, riskDays: 3,
          result: '你飞了很久，才找到一棵背风的树。路上你好几次差点撞上电线。' },
        { t: '留在原来的树皮里，省点力气', hint: '节能 · 冻死风险↑', eff: { health: -3 }, kill: 0.1, cause: 'torpor',
          result: '你留在原地，身体慢慢变凉，直到天亮也没有再暖过来。' },
      ],
    },

  ],

  idle: [
    '你倒挂着，翅膀把身体裹起来。',
    '洞外很吵，你只听得见自己发出的回声。',
    '一片叶子在风里翻了个面，你的耳朵立刻转向它。',
    '远处的路灯在你的眼睛里是一团模糊的光。',
    '你在梁木上蹭了蹭身子，慢慢地理了理翅膀。',
    '夜还很长，你的胃里还有几只蚊子的空间。',
    '一只飞蛾在你头顶盘旋，你没有动。',
    '产房里只有拥挤的呼吸声，和一股淡淡的气味。',
  ],

  epitaph: '你在夜里飞了很多年。很少有人知道你来过，但你的回声一直在。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'wolf',
  name: '灰狼',
  en: 'Grey wolf',
  sci: 'Canis lupus（灰狼）',
  emoji: '🐺',
  taxon: '脊索动物门 › 哺乳纲 › 食肉目 › 犬科',
  size: '体长约 1.3–1.8 米，体重 25–55 公斤',
  scene: 'forest',
  kind: 'wild',
  tagline: '你的祖先和狗的祖先是同一群动物，它们在一万多年前走上了不同的路',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['北方针叶林里的一个岩石洞穴', 3, { safety: +5 }],
        ['山谷里的一片雪松林', 2, {}],
        ['牧场边缘的灌木丛', 2, { food: +5, risk: 1.2 }],
        ['靠近公路的山坡', 1, { risk: 1.3 }],
        ['北极苔原上的一个沙土洞穴', 1, {}],
        ['蒙古草原上的一处岩丘', 2, {}],
      ]},
      { label: '狼群的状况', options: [
        ['一个稳定的狼群，主导的雌雄狼都还活着', 3, { food: +10 }],
        ['父亲死后，母亲带着一群幼狼', 2, { food: -5, risk: 1.1 }],
      ]},
      { label: '狼的种群', options: [
        ['黄石国家公园的狼，它们是 1995 年从加拿大引入的狼的后代', 3, { food: +5, set: 'yellowstone' }],
        ['欧洲一片农场和林地交错的地方，狼群的领地压在牧场边上', 2, { risk: 1.2, set: 'europe_farm' }],
        ['北极苔原上的狼，夏天吃旅鼠，冬天跟着驯鹿群走', 1, { food: -10, risk: 1.1, set: 'arctic' }],
        ['蒙古草原上的狼，追着黄羊和马鹿跑', 2, { food: +5, set: 'steppe' }],
      ]},
      { label: '狼群规模', options: [
        ['一个十几只的大狼群，有好几对在繁殖的狼', 2, { food: +10, safety: +5, set: 'bigpack' }],
        ['一个五六只的小狼群，只有一对配偶', 3, { set: 'smallpack' }],
        ['一对刚建立领地的成年狼，还没有自己的狼群', 1, { food: -10, risk: 1.2, set: 'pair' }],
      ]},
    ],
    siblings: 5,
    siblingsLabel: '同一窝的幼狼',
    intro: '你出生在{出生地}里，眼睛还闭着，身上是灰色的软毛。{狼群的状况}。你是{sex}，同一窝里大约有 {siblings} 只幼狼。',
  },

  stages: [
    { id: 'pup',   name: '幼狼（在巢穴里）', from: 0,    unit: 'week'  },
    { id: 'juv',   name: '幼狼（跟随狼群）', from: 60,   unit: 'week' },
    { id: 'young', name: '未成年（准备离开）', from: 365,  unit: 'week' },
    { id: 'adult', name: '成年狼',           from: 730,  unit: 'year'  },
    { id: 'old',   name: '老狼',             from: 3650, unit: 'year'  },
  ],
  maturity: 730,
  maxAge: 5840,

  survival: [[0,1],[60,0.6],[180,0.5],[365,0.42],[730,0.33],[1460,0.22],[2920,0.1],[4380,0.03],[5475,0.005],[5840,0]],
  survivalNote: '野外灰狼的存活数据主要来自北美与欧洲的追踪研究；幼狼第一年死亡率很高，成年后寿命通常在四到六年，此曲线为粗估。',

  init: { health: 75, food: 50, safety: 50 },
  foodDrain: 4,

  causes: [
    { id: 'gun', escape: true, w: 4, stages: ['juv','young','adult','old'], short: '被人类枪杀',
      text: '一个人隔着雪地举起了枪。你听见枪声的时候，子弹已经在路上了。' },
    { id: 'road', escape: true, w: 2, stages: ['young','adult'], short: '被车撞死',
      text: '一辆卡车在夜里的公路上没有减速。车灯闪了一下，然后是一声闷响。' },
    { id: 'pack_fight', escape: true, w: 2, stages: ['young','adult','old'], short: '被另一群狼咬死',
      text: '另一群狼的成年狼把你堵在了山谷口。你想跑，但它们追得太近，牙齿已经咬住了你的后颈。' },
    { id: 'moose_kick', escape: false, w: 2, stages: ['adult','old'], short: '被猎物的后蹄踢伤后感染',
      text: '一头驼鹿在你咬住它的腿时用后蹄踢了你。伤口在几天后感染，你再也站不起来。' },
    { id: 'starve', escape: false, w: 3, short: '饿死',
      text: '连续几周没有追到猎物。你的肋骨越来越明显，最后在一个雪夜里倒下，没有再起来。' },
    { id: 'disease', escape: false, w: 2, stages: ['pup','juv','young'], short: '犬瘟热',
      text: '犬瘟热病毒在狼群里传开。你发烧，流口水，走路越来越晃，最后在洞穴里咳到没有力气。' },
    { id: 'poison', escape: false, w: 2, stages: ['young','adult'], short: '吃下毒饵',
      text: '牧场边缘有一只被丢下的羊。你吃下去之后很快觉得口渴，肌肉开始抽搐。' },
    { id: 'old', w: 0, short: '衰老', text: '你的牙齿磨平了，关节也僵了。狼群给你留出了一个靠近洞口的位置，你就在那里睡着了。' },
  ],

  events: [
    { stages: ['pup'], w: 3, text: '母亲出去捕猎了。洞穴里只剩你们几只幼狼，互相咬着彼此的耳朵。' },
    { stages: ['pup'], w: 2, text: '母亲回来了，嘴里带着反刍的肉。你们争着抢，她没有躲。', eff: { food: +15 } },
    { stages: ['pup'], w: 2, text: '你第一次走出洞口。雪地反射着光，你眯起眼睛，被一只乌鸦吓得跑了回去。' },
    { stages: ['pup'], w: 1, text: '一只狐狸在洞口的雪地上嗅来嗅去。一只成年狼从狼群那边冲过来，把它赶走了。', eff: { safety: +5 } },
    { stages: ['juv'], w: 3, act: 'forage', text: '狼群出动追一群驯鹿。你跟在后面，学着跑，也学着撕咬。', eff: { food: +15 } },
    { stages: ['juv'], w: 2, act: 'explore', text: '你跟着狼群走了很远，到了一片从没去过的山谷。那里的雪更深。', eff: { food: +5 } },
    { stages: ['juv'], w: 2, text: '远处传来一阵狼嚎。狼群的成员在回应，你也跟着叫了起来。',
      fact: '狼嚎可以传到很远的地方，狼群借此向其他狼群宣示领地（Harrington & Mech，1983）' },
    { stages: ['juv'], w: 1, text: '一头驼鹿站在河边的灌木丛里，你们互相看了很久，谁都没有动。' },
    { stages: ['juv'], w: 1, act: 'hide', text: '你趴在雪松下面，等狼群绕过驯鹿群的侧翼。雪落在你的背上，你没有抖。', eff: { safety: +8, food: -3 } },
    { stages: ['young'], w: 3, act: 'forage', text: '你第一次独自追上一只野兔。它在雪地上留下一串很乱的脚印，你吃掉了它。', eff: { food: +12 } },
    { stages: ['young'], w: 2, act: 'rest', text: '中午的阳光很暖。你和同伴挤在岩石背风的一侧睡觉，谁的耳朵动了一下，就醒了。', eff: { health: +5 } },
    { stages: ['young'], w: 2, text: '狼群里的两只成年狼为一块鹿肉咬了起来。你躲到一边，不敢靠近。', eff: { safety: -5 } },
    { stages: ['young'], w: 1, act: 'explore', text: '一条公路横在山谷之间。你等到车灯过去，才跑了过去。', eff: { safety: -3 } },
    { stages: ['adult'], w: 2, act: 'forage', text: '在一个冬夜，你们追上了一头驼鹿。它的后蹄踢中了你的肩膀，伤口裂开了一道口子。', eff: { health: -10, food: +25 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '在冬天的洞穴里，你和狼群挤在一起。外面的风吹不进来。', eff: { health: +5 } },
    { stages: ['adult'], w: 1, act: 'mate', need: 'male', text: '二月，你闻到了一只母狼的气味。她在山谷的另一侧长长地嚎了一声。' },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '春天，你在洞穴里产下了第一窝幼狼。它们很小，闭着眼睛，互相挤在一起。',
      eff: { offspring: [4, 6] },
      fact: '灰狼每窝通常产 4 到 6 只幼崽，而狼群里通常只有主导的那一对配偶繁殖（Mech，The Wolf，1970）' },
    { stages: ['adult'], w: 1, text: '远处传来一声枪响，狼群在雪地上散开了。你们花了很久才重新聚起来。', eff: { safety: -8 } },
    { stages: ['adult'], w: 1, act: 'hide', text: '猎人在公路边设了陷阱。你绕开了那一片被踩乱的雪。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, text: '犬瘟热在附近的狼群里传开。有几只狼在路边咳嗽，走得摇摇晃晃。', eff: { health: -5 } },
    { stages: ['old'], w: 3, text: '你的牙齿磨平了，咬合力下降，已经抓不住大一点的猎物了。', eff: { food: -10 } },
    { stages: ['old'], w: 2, act: 'rest', text: '你的关节开始僵硬。在洞穴里，你的位置被挪到了边缘，离洞口最近。', eff: { health: -5 } },
    { stages: ['old'], w: 1, once: true, text: '你是狼群里年纪最大的一只。年轻的狼不再给你让路，但也不再咬你。' },
    { stages: ['adult','old'], w: 1, text: '一只乌鸦在雪地上跟着你，等你吃剩下的肉。', eff: { food: +3 } },
    { stages: ['juv'], w: 2, need: 'yellowstone', text: '路边停着一排车，游客举着长焦镜头，远远地看着你们在雪原上追一群麋鹿。你们没有理他们。' },
    { stages: ['adult'], w: 2, act: 'forage', need: 'yellowstone', text: '河谷里的麋鹿比去年多。你们在雪地上跑了一个下午，最后吃到了一头年轻的公鹿。', eff: { food: +15 } },
    { stages: ['adult'], w: 1, need: 'yellowstone', text: '一只戴着无线电项圈的狼从你身边走过。公路那头的研究员在记录本上写下了它的编号。',
      fact: '黄石的狼自 1995 年起被重新放归，此后长期用无线电项圈追踪（美国国家公园管理局，黄石狼项目）' },
    { stages: ['young'], w: 3, need: 'europe_farm', text: '夜里，你闻到了牧场那边羊圈的味道。护羊狗在远处狂吠，你绕着它的声音走了一大圈。', eff: { safety: -3 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'europe_farm', text: '你在牧场边缘咬死了一只落单的羊。第二天，农场主在铁丝网上挂起了一块牌子。', eff: { food: +20, safety: -8 } },
    { stages: ['adult'], w: 1, need: 'europe_farm', text: '护羊狗在夜里追着你跑了很远。你回到林子里时，后腿上多了一道牙印。', eff: { health: -5, safety: -3 } },
    { stages: ['juv'], w: 2, act: 'forage', need: 'arctic', text: '你在苔原上追着一群驯鹿。雪下面没有草，驯鹿要靠刨开积雪去找地衣。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'arctic', text: '苔原上夏天只有几周，蚊子成群。你和狼群躺在湿地边上，身上都是蚊子。', eff: { health: -3 } },
    { stages: ['young', 'adult'], w: 2, need: 'arctic', text: '一个冬天过去，你连续三周没有遇见驯鹿。夜里你沿着河床走，耳朵一直朝着风来的方向。', eff: { food: -10 } },
    { stages: ['juv'], w: 2, act: 'forage', need: 'steppe', text: '草原上风很大。你们追着一群黄羊跑了两公里，它们跑得比你快得多。', eff: { food: +8 } },
    { stages: ['adult'], w: 2, need: 'steppe', text: '夜里，牧民的马群停在远处。一匹小马在哭，你听见了，但你没有靠近。', eff: { safety: +3 } },
    { stages: ['adult'], w: 1, act: 'hide', need: 'steppe', text: '草原上几乎没有树。你趴在一道土沟里，等了整个下午，直到风把你的气味吹散。', eff: { food: -3, safety: +5 } },
    { stages: ['juv'], w: 3, need: 'bigpack', text: '狼群里的成年狼轮流在前面开路，雪地上踩出一条宽宽的路。你跟着它们，一步也不用慢。', eff: { safety: +5 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'bigpack', text: '十几只狼一起围住一头驼鹿。分肉的时候，你排在中间，还是吃到了一块带骨髓的腿骨。', eff: { food: +15 } },
    { stages: ['adult'], w: 1, need: 'bigpack', text: '狼群里两对配偶为了洞口的位置争了起来。你退到一边，看着它们咬了很久。', eff: { safety: -5 } },
    { stages: ['juv'], w: 2, act: 'forage', need: 'smallpack', text: '你们只有六只狼，追一头驼鹿就得靠耐心。你们轮流跑，跑不动的就停下来等。', eff: { food: +5 } },
    { stages: ['adult'], w: 2, need: 'smallpack', text: '狼群小，每只狼分到的肉多一些。但遇到大狼群的时候，你们只能远远地躲开。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, act: 'rest', need: 'smallpack', text: '冬天的洞里只有你们几只。你贴着母狼的身子睡，她的心跳很慢。', eff: { health: +5 } },
    { stages: ['young'], w: 2, act: 'explore', need: 'pair', text: '你们俩在山谷里找地方建领地。没有别的狼的气味，也没有谁替你们分担追猎。', eff: { food: -5 } },
    { stages: ['adult'], w: 2, act: 'hide', need: 'pair', text: '只有两只狼的时候，一只受伤，另一只就得一个人追猎。你躲在雪松后面，等它的脚好起来。', eff: { safety: +3, food: -5 } },
    { stages: ['adult'], w: 1, need: 'pair', text: '第一个冬天，你们俩挤在一个小岩洞里。风进不来，但食物一直不够。', eff: { food: -8, health: -3 } },
    { stages: ['juv'], w: 2, need: 'bold', text: '你第一个冲向那群驯鹿，跑在狼群前面，一脚踩进了一块薄冰。你爬起来，继续跑。', eff: { health: -3, food: +5 } },
    { stages: ['juv', 'young'], w: 2, need: 'cautious', text: '你在洞口停了很久，直到确认风里没有陌生的气味，才慢慢地走出去。', eff: { safety: +5 } },
    { stages: ['young'], w: 1, act: 'explore', need: 'curious', text: '你闻到了一个从没见过的气味，顺着它走到一个人的垃圾堆旁边。听见远处的人声，你才转身走了。', eff: { safety: -4, food: +5 } },
    { stages: ['pup', 'juv'], w: 1, need: 'runt', text: '你是窝里最小的一只。母亲先把食物给了别的幼狼，你只能靠在她身边等。', eff: { food: -8 } },
    { stages: ['young', 'adult'], w: 1, need: 'robust', text: '你的肩膀比同伴宽。夜里追驯鹿的时候，你一头撞倒了一只小鹿。', eff: { food: +10 } },
  ],

  opening: {
    title: '母亲选择洞穴',
    body: '你还没出生。母亲在春天的雪地上挖洞。洞口朝南，能晒到太阳，但离公路和牧场近；朝北，冷一些，但离人远。',
    options: [
      { t: '朝南挖在山坡上', hint: '暖和 · 离人近', eff: { health: +5 }, risk: 1.2, riskDays: 30,
        result: '你在山坡的洞里出生。洞口的阳光很暖，有一天，你听见了远处的汽车声。' },
      { t: '朝北挖在山谷里', hint: '安静 · 冷 · 猎物少', eff: { food: -5 }, risk: 0.8, riskDays: 30,
        result: '你在山谷的洞里出生。风很冷，母亲用身体挡着你，直到你睁开眼睛。' },
    ],
  },

  actions: {
    instinct: { name: '随本能', desc: '跟着狼群的节奏，做一只灰狼该做的事。' },
    forage: { name: '追猎', desc: '跟着狼群去追猎物，或者独自找腐肉和小猎物。', text: [
      '你跟在狼群后面，四肢在雪地上打着滑。',
      '鹿群炸开了，你盯住了一只落在后面的。',
      '……',
    ]},
    hide: { name: '潜伏', desc: '趴在灌木和雪松下面，等猎物靠近，或者避开人。', text: [
      '你趴在雪里，呼出的热气很快结成了一层霜。',
      '远处的枪声停了，你又等了一个小时。',
    ]},
    rest: { name: '休息', desc: '在洞里或背风的岩石下面睡觉，把体力留给下一次追猎。', text: [
      '你挤在同伴中间，闭着眼睛，耳朵还在动。',
      '……',
    ]},
    explore: { name: '远行', desc: '越过山脊，去看看别的山谷有没有空着的领地。', stages: ['young','adult','old'], text: [
      '你走了很久，身后的狼嚎越来越远。',
      '一条河横在前面，你沿着它的源头绕过去。',
    ]},
    mate: { name: '配对繁殖', need: 'female', done: '这个春天，你在洞穴里产下了 {n} 只幼狼。' },
  },
  brood: [4, 6],

  decisions: [
    {
      id: 'dispersal', at: 400,
      title: '离开狼群',
      body: '你已经一岁多了。主导的雄狼开始对你低吼，把你赶到食物的最后面。你可以留在狼群里等待机会，也可以现在离开，去找一个还没有狼的山谷。',
      options: [
        { t: '离开狼群，独自上路', hint: '可能找到配偶和领地 · 途中死亡率高',
          risk: 1.6, riskDays: 60, eff: { food: -5 },
          result: '你在凌晨走出了狼群的领地。身后的嚎叫很快就听不见了。' },
        { t: '留下来，等位置空出来', hint: '食物有保障 · 争斗多',
          eff: { food: +10, safety: -5 },
          result: '你继续跟着狼群。那只主导的雄狼又对你咆哮了一次，然后走开了。' },
      ],
    },
    {
      id: 'big_prey', at: 1000,
      title: '一头受伤的驼鹿',
      body: '一头成年驼鹿的后腿在冰上滑坏了，它正慢慢地往林子深处走。狼群已经绕到了它的侧面。',
      options: [
        { t: '加入围攻，咬住它的后腿', hint: '食物↑↑ · 被踢伤的风险',
          kill: 0.1, cause: 'moose_kick', eff: { food: +25 },
          result: '你咬住它的腿，直到它倒在雪地上。狼群从四面涌了过来。' },
        { t: '等它自己倒下，去捡剩下的', hint: '安全 · 食物少',
          eff: { food: +5, safety: +5 }, risk: 0.9, riskDays: 3,
          result: '你跟在狼群后面，只分到了一点肉和骨头。' },
      ],
    },
    {
      id: 'territory', at: 1600,
      title: '边界上的嚎叫',
      body: '山脊那边传来一群陌生狼的嚎叫。它们的气味已经压到了你们的领地边缘。',
      fact: '狼嚎有助于维持领地，狼群通过嚎叫让陌生狼群知道这里已经有主人（Harrington & Mech，1983）',
      options: [
        { t: '回应嚎叫，守住领地', hint: '领地稳定 · 可能会打起来',
          kill: 0.25, cause: 'pack_fight', eff: { safety: +10 },
          result: '你们一起嚎叫，声音越来越大。对面的狼群沉默了很久，然后慢慢退了回去。' },
        { t: '避开，去另一座山谷', hint: '不冒险 · 食物少',
          risk: 1.2, riskDays: 30, eff: { food: -5 },
          result: '你们绕过了边界。新的山谷很陌生，猎物也比以前少。' },
      ],
    },
    {
      id: 'den', at: 1800, need: 'female',
      title: '洞穴要选在哪里',
      body: '你的肚子开始变大。你要在今年的春天生产，洞穴要选在一个能躲开人和其他狼群的地方。',
      options: [
        { t: '在老洞里生产', hint: '熟悉 · 离公路近',
          eff: { offspring: [4, 6] }, risk: 1.2, riskDays: 60,
          result: '你在旧洞里产下了幼狼。洞口的雪地上，留着人的脚印。' },
        { t: '换一个离公路远的地方', hint: '安全 · 要花时间找',
          eff: { offspring: [3, 5], food: -5 }, risk: 0.9, riskDays: 60,
          result: '你在山腰的一块岩石下挖了新洞。幼狼出生的时候，你闻到了周围的松脂味。' },
      ],
    },
    {
      id: 'disease', at: 2500,
      title: '狼群里的咳嗽',
      body: '狼群里有几只狼开始咳嗽、流鼻涕，眼睛也变得红肿。一只年轻的狼倒在雪地上，已经不动了。',
      options: [
        { t: '离开病群，独自觅食', hint: '保住自己 · 食物少',
          eff: { food: -10 }, risk: 0.7, riskDays: 60,
          result: '你离开了狼群，在远处的山脊上找到了一只冻死的旅鼠。' },
        { t: '留在群里，互相舔舐', hint: '有陪伴 · 病毒传播快',
          kill: 0.2, cause: 'disease', eff: { safety: +10 },
          result: '你和狼群挤在一起，互相舔着对方的脸。几天后，你的喉咙开始发痒。' },
      ],
    },
    {
      id: 'poison', at: 3300,
      title: '牧场边的死羊',
      body: '牧场边的草地上躺着一只死羊。它的身体很完整，但你闻到了一股刺鼻的气味。',
      options: [
        { t: '吃掉它', hint: '食物↑↑ · 可能有毒',
          kill: 0.3, cause: 'poison', eff: { food: +20 },
          result: '你一口吃掉了半只羊。那股气味在你胃里翻滚。' },
        { t: '绕开它', hint: '安全 · 饿',
          eff: { food: -10 }, risk: 0.9, riskDays: 10,
          result: '你绕开了羊，去了远处的山坡。那里只有一群旅鼠。' },
      ],
    },
    {
      id: 'old_pack', at: 4000,
      title: '太老了',
      body: '你的牙齿磨平了，夜里追不上野兔。狼群还留着你的位置，但你知道这样下去，最后一场雪一定会来。',
      options: [
        { t: '留在狼群的边缘', hint: '有保障 · 食物少',
          eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 365,
          result: '你每天只能吃到别人剩下的骨头，但你还是醒着，还是在狼群里。' },
        { t: '独自去森林边缘', hint: '食物多一点 · 独自一狼',
          eff: { food: +10 }, risk: 1.5, riskDays: 60,
          result: '你走进了森林的边缘，那里有一些小型猎物，却没有同伴。' },
      ],
    },
    {
      id: 'farm_sheep', at: 900, need: 'europe_farm',
      title: '农场的夜里',
      body: '农场主在你们的领地边上拉了一圈新的铁丝网，还在夜里放了一只带铃的狗。一只羊在草地上叫，离你的洞不远。',
      options: [
        { t: '夜里叼走那只羊', hint: '食物↑↑ · 被枪杀的风险',
          kill: 0.12, cause: 'gun', eff: { food: +25 },
          result: '你从铁丝网的缺口钻了进去，叼着羊跑回林子。枪声在你身后响了一下。' },
        { t: '绕到林子另一侧，只吃野兔', hint: '安全 · 食物少',
          eff: { food: -5, safety: +5 }, risk: 0.85, riskDays: 90,
          result: '你绕开了牧场，在林子里追野兔。野兔很瘦，你吃得不多。' },
      ],
    },
    {
      id: 'yellow_road', at: 1300, need: 'yellowstone',
      title: '公路边的游客车',
      body: '一条车道穿过你们的猎场。游客的车停在路肩，车窗里伸出一支长焦镜头。一头麋鹿正从车道的另一侧慢慢走过来。',
      options: [
        { t: '在车道上扑向麋鹿', hint: '食物↑↑ · 车辆风险',
          kill: 0.08, cause: 'road', eff: { food: +20 },
          result: '你从路边的雪堆里冲了出去。麋鹿倒下的时候，一辆车的刹车声在你身后响起。' },
        { t: '从林子里绕过去', hint: '安全 · 食物少',
          eff: { food: -5, safety: +3 }, risk: 0.9, riskDays: 30,
          result: '你绕过了车道，在林子边上等麋鹿走远。它没有回头。' },
      ],
    },
    {
      id: 'pack_split', at: 1100, need: 'bigpack',
      title: '狼群分开',
      body: '狼群里的两对配偶越来越不和。一部分狼准备离开，带走一半的成年狼去找新的山谷。你要决定跟哪一边。',
      options: [
        { t: '跟着离开的一半，去新的山谷', hint: '新领地 · 路途危险',
          eff: { food: -5 }, risk: 1.3, riskDays: 60, set: 'split',
          result: '你们走了三天，翻过一道山脊。身后的老狼群还在叫，但你们已经听不见了。' },
        { t: '留在老狼群', hint: '食物有保障 · 争斗多',
          eff: { food: +5, safety: -5 },
          result: '你留了下来。之后的每一次追猎，你都要和两对配偶争一块肉。' },
      ],
    },
    {
      id: 'pair_winter', at: 800, need: 'pair',
      title: '没有狼群的第一个冬天',
      body: '你们俩没有狼群的帮助，冬天的猎物只够一只狼吃。洞里的母狼低低地叫了一声，像是在问你该怎么办。',
      options: [
        { t: '一起去山脊上追驼鹿', hint: '食物↑ · 两个都可能受伤',
          kill: 0.06, cause: 'moose_kick', eff: { food: +15, health: -5 },
          result: '你们一起咬住一头驼鹿的后腿。它踢中了她的肩膀，但你们还是把它拖倒了。' },
        { t: '留在洞里，轮流出去找吃的', hint: '稳妥 · 食物少',
          eff: { food: -10 }, risk: 0.9, riskDays: 60,
          result: '你们轮流出去，每次只找到一只野兔，有时一无所获。' },
      ],
    },
  ],

  idle: [
    '你在雪地上留下一串深深的脚印。',
    '狼群之间没有明确的边界，只有气味和嚎叫。',
    '风从北边来，你把鼻子埋进尾巴里。',
    '你在岩石后面闻到了驼鹿的气味。',
    '同伴的尾巴轻轻扫过你的背，你们互相挨着。',
    '天很快就要黑了，狼群开始集合。',
    '远处有狼嚎，你没有应。',
    '一只乌鸦跟在你身后，等你吃剩下的肉。',
  ],

  epitaph: '你在雪地上留下过很多脚印。春天一到，它们就被融化了。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'chimpanzee',
  name: '黑猩猩',
  en: 'Chimpanzee',
  sci: 'Pan troglodytes（黑猩猩）',
  emoji: '🐒',
  taxon: '脊索动物门 › 哺乳纲 › 灵长目 › 人科',
  size: '体长约 0.7–0.9 米（直立时），体重雄性约 40–60 公斤，雌性约 30–45 公斤',
  scene: 'forest',
  kind: 'wild',
  tagline: '人类和黑猩猩的基因组在可直接比对的序列上约 98.8% 相同',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['刚果河北岸的雨林', 3, { food: +5 }],
        ['科特迪瓦塔伊国家公园的密林', 2, { safety: +5 }],
        ['坦桑尼亚冈贝河岸的森林', 2, {}],
        ['一片农田边缘的次生林', 2, { food: +10, risk: 1.2 }],
      ]},
      { label: '母亲的状况', options: [
        ['一位经验丰富的母亲，身边有几位姐妹', 3, { health: +5 }],
        ['第一次当妈妈的年轻母亲', 2, { health: -5, risk: 1.1 }],
      ]},
      { label: '群体的规模', options: [
        ['一个近百只的大群体，几个分队在林子里分开吃东西', 2, { food: +5, set: 'bigcommunity' }],
        ['一个五十只上下的群体，分成几个小队', 3, { set: 'midcommunity' }],
        ['一个十几只的小群体，边缘的几只雄性常常被挤开', 2, { food: -5, risk: 1.1, set: 'smallcommunity' }],
      ]},
      { label: '周围的人类活动', options: [
        ['一片受保护的国家公园，巡护员每个月都会沿着林子走一圈', 3, { safety: +5, set: 'park' }],
        ['一个伐木特许经营区，新修的公路把林子切成了好几块', 2, { food: -5, risk: 1.2, set: 'logging' }],
        ['一座救护中心的围栏里，工作人员每天会放下水果', 1, { food: +10, safety: +5, set: 'sanctuary' }],
      ]},
    ],
    siblings: 1,
    siblingsLabel: '同一位母亲的孩子',
    intro: '你出生在{出生地}里。{母亲的状况}把你生了下来，你是{sex}。黑猩猩一胎通常只生一只，所以你没有兄弟姐妹，但你的母亲会花很多年只照顾你一个。',
  },

  stages: [
    { id: 'infant', name: '幼崽（贴在母亲身上）', from: 0,    unit: 'month' },
    { id: 'juv',    name: '少年（跟着同伴）',     from: 1460, unit: 'year'  },
    { id: 'adult',  name: '成年',                 from: 5110, unit: 'year'  },
    { id: 'old',    name: '老年',                 from: 9125, unit: 'year'  },
  ],
  maturity: 5110,
  maxAge: 16425,

  survival: [[0,1],[365,0.75],[1460,0.6],[3650,0.5],[5110,0.45],[7300,0.35],[10950,0.2],[13140,0.1],[14600,0.04],[16425,0]],
  survivalNote: '数据来自坦桑尼亚冈贝和科特迪瓦塔伊等长期研究地的个体追踪；幼崽第一年死亡率很高，成年后每年死亡率较低，寿命上限约四十到五十岁，此曲线为粗估。',

  init: { health: 75, food: 55, safety: 55 },
  foodDrain: 3,

  causes: [
    { id: 'leopard', escape: true, w: 2, stages: ['infant','juv'], short: '被豹子抓走',
      text: '一只豹子从树上扑下来。母亲把你紧紧搂在胸前，但豹子的爪子还是钩住了你的腿。' },
    { id: 'gunshot', escape: true, w: 3, stages: ['juv','adult','old'], short: '被偷猎者的猎枪打中',
      text: '林子边缘传来一声枪响。你还没来得及转身，左肩就像被一根烧红的铁棍穿过。' },
    { id: 'snare', escape: false, w: 2, stages: ['juv','adult','old'], short: '被钢丝套夹住，伤口感染',
      text: '一根钢丝缠住了你的手腕。你咬开了它，但伤口在几天里肿成一个硬块，最后没有能治它的药。' },
    { id: 'war', escape: true, w: 2, stages: ['adult','old'], short: '被邻近群体的雄性围攻',
      text: '一群来自邻近群体的雄性从树林深处冲出来，把你堵在一棵大树下。它们的牙齿和拳头落在你身上。' },
    { id: 'infanticide', escape: false, w: 2, stages: ['infant'], short: '被闯入的雄性咬死',
      text: '一只陌生的雄性在母亲去找果子的时候闯进了巢。它咬住了你，母亲回来时已经太晚了。' },
    { id: 'respiratory', escape: false, w: 3, short: '呼吸道传染病',
      text: '一场流感在群体里传开。你咳得越来越厉害，肺里像灌满了水，几天后就再也没有醒过来。' },
    { id: 'ebola', escape: false, w: 1, short: '埃博拉出血热',
      text: '你开始发烧，然后是出血。同伴们也都在躲你，但它们也已经在路上了。' },
    { id: 'old', w: 0, short: '衰老', text: '你的牙齿松了，咬不动硬的果子。你在巢里躺了一整个下午，再也没有起来。' },
  ],

  events: [
    { stages: ['infant'], w: 3, text: '你贴在母亲的腹部。她的毛很密，闻起来有森林里泥土和树叶的味道。' },
    { stages: ['infant'], w: 2, text: '母亲在树上摘下一个无花果，嚼碎了喂到你嘴里。', eff: { food: +10 } },
    { stages: ['infant'], w: 2, text: '你从树枝上滑下去，母亲一把接住了你。你的膝盖擦破了皮，流出一点血。', eff: { health: -5 } },
    { stages: ['infant'], w: 1, text: '一只大型的雄性从树下走过，母亲把你的头压进她的胸口，直到它走远。', eff: { safety: -5 } },
    { stages: ['infant'], w: 1, once: true, text: '你第一次在母亲的背上看到另一只黑猩猩的脸。它正在给一只幼崽梳毛，动作很轻。' },
    { stages: ['juv'], w: 3, act: 'forage', text: '你跟着同伴学着用草秆去钓白蚁。你的第一根草秆断了，白蚁没有上钩。',
      fact: '黑猩猩用草秆钓白蚁的行为，由 Jane Goodall 在坦桑尼亚冈贝首次记录（Goodall，Nature，1964）' },
    { stages: ['juv'], w: 2, act: 'explore', text: '你跟着群体走到了森林的边界，看见了一片刚被砍掉的树林。空气里有焦土的味道。', eff: { safety: -3 } },
    { stages: ['juv'], w: 2, act: 'forage', text: '你们在一棵大无花果树下吃得满嘴都是。树下有两个年轻雄性在打架，你躲远了一点。', eff: { food: +15 } },
    { stages: ['juv'], w: 1, text: '一只同龄的雌性和你交上了朋友。你们互相梳毛，很久都没有分开。', eff: { health: +5 } },
    { stages: ['juv'], w: 1, act: 'hide', text: '群体里传来一阵雄性的咆哮，你爬进树冠深处，屏住呼吸。', eff: { safety: +8 } },
    { stages: ['juv'], w: 1, text: '一只小豹子的爪印印在河岸的泥里，离你们的巢很近。', eff: { safety: -10 } },
    { stages: ['adult'], w: 3, act: 'forage', text: '你们在一棵果树下找到了很多果子。今年的果子特别甜，你吃了很久。', eff: { food: +20 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '你在巢里躺了一个下午。树叶透出来的光落在你的手背上，一动不动。', eff: { health: +5 } },
    { stages: ['adult'], w: 2, act: 'explore', text: '你沿着边界走了一圈，在一个陌生的足迹旁停了下来。那是别的群体留下的。', eff: { safety: -5 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '你发情了。一只雄性跟在你后面，发出低沉的呼噜声。' },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你产下了一只幼崽。它的脸是粉色的，抓住你的毛不肯松手。',
      eff: { offspring: [1, 1] } },
    { stages: ['adult'], w: 2, act: 'hide', text: '一只豹子在远处的树下嗅来嗅去。你一动不动，直到它走开。', eff: { safety: +5 } },
    { stages: ['adult'], w: 1, text: '一位邻近群体的雄性越过了边界。群体里的雄性一起冲了过去，把它赶了回去。', eff: { safety: -5 } },
    { stages: ['adult'], w: 1, text: '你的脚底被一根生锈的钢丝缠住了。你咬开了它，但伤口在几天后肿了起来。', eff: { health: -8 } },
    { stages: ['adult'], w: 1, text: '空气里有烟的味道。有人在林子边缘烤肉。', eff: { safety: -3 } },
    { stages: ['adult','old'], w: 1, once: true, text: '一场流感在群体里传开。几只幼崽咳嗽得厉害，母亲们把它们抱得更紧。', eff: { health: -5 } },
    { stages: ['adult','old'], w: 1, once: true, text: '人类和黑猩猩的基因组在可直接比对的序列上约有 98.8% 相同。这一估计来自 2005 年的黑猩猩基因组测序。',
      fact: '黑猩猩基因组测序显示，在可直接比对的序列上，它与人类约 98.8% 相同（Chimpanzee Sequencing and Analysis Consortium，Nature，2005）' },
    { stages: ['old'], w: 3, act: 'rest', text: '你的动作慢了下来。你在巢里待得越来越久，只在中午出来晒一会儿太阳。', eff: { health: -5 } },
    { stages: ['old'], w: 2, text: '你的牙齿磨平了，树上的硬果子已经咬不动了。', eff: { food: -10 } },
    { stages: ['old'], w: 1, once: true, text: '你是群体里年纪最大的一只。年轻的黑猩猩会过来看看你，有时还会帮你梳毛。' },
    { stages: ['juv'], w: 2, need: 'bigcommunity', text: '群体里有一百多只黑猩猩。清晨的时候，整片林子都是呼噜声和叫声，你跟着一群少年去了边界。', eff: { safety: +3 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'bigcommunity', text: '你所在的分队去了一片果树林。别的分队在远处的林子里大声叫着，你们互相听得见。', eff: { food: +10 } },
    { stages: ['adult'], w: 1, need: 'bigcommunity', text: '群体里的两只雄性在争夺首领的位置。几个分队的雌性都停下了吃东西，看着它们在树下对峙。', eff: { safety: -3 } },
    { stages: ['juv'], w: 2, need: 'midcommunity', text: '你们这一小队有五六只少年。你们在树枝间追着打，摔下来也不哭，爬起来继续打。', eff: { health: +3 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'midcommunity', text: '你们的分队找到了一棵结满果子的树。大家一起吃，谁也没有抢。', eff: { food: +12 } },
    { stages: ['adult'], w: 1, need: 'midcommunity', text: '群体里的一只雌性带着孩子搬去了别的林子。你留在原地，和几只雄性一起守着剩下的果树。', eff: { safety: +2 } },
    { stages: ['juv'], w: 2, need: 'smallcommunity', text: '群体里只有十几只，少年很少。你每天都能看见同样几张脸，也很容易找到同伴。', eff: { safety: +3 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'smallcommunity', text: '群体小，分果子的人也少。你去得晚了，只捡到一些落在地上的果子。', eff: { food: -8 } },
    { stages: ['adult'], w: 1, need: 'smallcommunity', text: '两只邻近群体的雄性在林子边上徘徊了好几天。你们群体里的雄性不多，没法把它们赶远。', eff: { safety: -6 } },
    { stages: ['juv', 'adult'], w: 2, need: 'park', text: '巡护员每个月都会在林子里走一圈。他们留下的脚印和营地的烟味，你慢慢习惯了。', eff: { safety: +3 } },
    { stages: ['adult'], w: 2, act: 'forage', need: 'park', text: '研究员在林子里放了几个木箱，里面有香蕉。你学会了一只手去拿，另一只手抓着树枝望风。', eff: { food: +10 } },
    { stages: ['adult'], w: 1, need: 'park', text: '一台摄像机挂在树干上，红灯一闪一闪的。你用手去拍它，它没有反应，你就走开了。' },
    { stages: ['juv', 'adult'], w: 2, act: 'explore', need: 'logging', text: '你穿过一条刚被砍出来的路。路上只剩下树桩，树桩之间的雨水积成了小坑。你走了很远，才找到一棵没被砍倒的树。', eff: { health: -3 } },
    { stages: ['juv'], w: 2, need: 'logging', text: '一台大卡车沿着新修的路开过，车轮把树根压碎了。第二天，你们的果树林里少了三棵大树。', eff: { food: -8 } },
    { stages: ['adult'], w: 1, need: 'logging', text: '伐木工人的说话声从很远的地方传过来。群体往林子深处退，你们走了一整天。', eff: { safety: -4 } },
    { stages: ['infant', 'juv'], w: 2, need: 'sanctuary', text: '救护中心的饲养员每天早上把水果放在木架上。你和同伴排队去拿，有时候需要抢一下。', eff: { food: +10 } },
    { stages: ['adult'], w: 2, need: 'sanctuary', text: '围栏里悬着一根绳子，有人在绳子上挂了一个旧轮胎。你拉着它荡了很久。', eff: { health: +3 } },
    { stages: ['adult'], w: 1, need: 'sanctuary', text: '围栏的另一边，一只黑猩猩大声叫着。它是从偷猎者的笼子里被救出来的。你听了很久。', eff: { safety: -2 } },
    { stages: ['juv'], w: 2, need: 'bold', text: '你第一个爬上一棵很高的树，在树梢上摇晃着，直到大人冲你叫了一声，你才慢慢爬下来。', eff: { safety: -3, food: +3 } },
    { stages: ['juv', 'adult'], w: 2, need: 'cautious', text: '你在溪边等了很久，看着同伴们一个个蹚过去。你最后才过去，水已经没到了你的肚子。', eff: { safety: +3 } },
    { stages: ['juv'], w: 1, act: 'explore', need: 'curious', text: '你翻开一堆枯叶，发现了一只甲虫。你用树枝戳了它很久，直到它钻进了土里。', eff: { food: +3 } },
    { stages: ['infant', 'juv'], w: 1, need: 'runt', text: '你是群体里最瘦的一只。少年们抢果子的时候，你总是最后一个拿到。', eff: { food: -8 } },
    { stages: ['adult'], w: 1, need: 'robust', text: '你的手臂比同龄的雄性粗。一次争抢中，你把一只雌性推到了树干上，它叫了一声就走开了。', eff: { safety: +5 } },
  ],

  opening: {
    title: '母亲在选择夜巢',
    body: '你还没出生。母亲在怀你的最后几个月，每天傍晚都要搭一个新的巢。前面有两个地方：一棵大树的高处，视野好，但要爬很高；或者灌木丛的树根下，隐蔽，但离地面近，蛇和豹都可能经过。',
    options: [
      { t: '高处的大树', hint: '视野好 · 要爬高', eff: { safety: +5, health: -5 }, risk: 1.1, riskDays: 30,
        result: '你在树上出生。风一直吹着，母亲抱着你，一直没有松开过。' },
      { t: '灌木丛的树根下', hint: '隐蔽 · 离地面近', eff: { safety: -5, food: +5 }, risk: 0.9, riskDays: 30,
        result: '你在树根下出生。草叶的气味很重，母亲的声音一直在你的耳边。' },
    ],
  },

  actions: {
    instinct: { name: '随本能', desc: '跟着群体的节奏，做一只黑猩猩惯常做的事。' },
    forage: { name: '觅食（果子与白蚁）', desc: '在林子里找果子和树叶，或者用树枝钓白蚁。', text: [
      '你在树下找到一个成熟的无花果，咬了一口，汁水流到手腕上。',
      '你用树枝伸进白蚁丘的洞里，慢慢地抽出来。',
      '……',
    ]},
    hide: { name: '安静地躲', desc: '不出声，待在树冠里或灌木丛里，等危险过去。', text: [
      '你屏住呼吸，把身体压在一根粗树枝后面。',
      '远处的脚步声经过，你又等了很久。',
    ]},
    rest: { name: '在巢里休息', desc: '回到夜巢里躺着，或者在树枝上晒太阳。', text: [
      '你躺在自己搭的巢里，闭着眼睛，耳朵还在听外面的声音。',
      '……',
    ]},
    explore: { name: '巡视领地', desc: '沿着群体的边界走一圈，看看有没有陌生的群体、陷阱或者新的果树。', stages: ['juv','adult','old'], text: [
      '你沿着边界走，每走一段就停下来，用叫声去试探远处的回应。',
      '你在一棵被砍过的树桩旁停了很久。',
    ]},
    mate: { name: '交配', need: 'female', done: '你产下了 {n} 只幼崽。它很小，闭着眼睛抓着你的毛。' },
  },
  brood: [1, 1],

  decisions: [
    {
      id: 'weaning', at: 1400,
      title: '母亲又怀孕了',
      body: '母亲的肚子慢慢变大，你挂在她身上的时间比以前少了。她开始把你放下来，有时候还会推开你。',
      options: [
        { t: '主动去找同龄的玩伴', hint: '学会社交 · 独自一个',
          eff: { safety: -5, food: -5 }, risk: 1.1, riskDays: 14,
          result: '你跟着一群少年在树枝间打闹。它们咬你，你也咬回去。' },
        { t: '继续挂在母亲身上', hint: '吃得饱 · 新的弟妹会抢奶',
          eff: { food: +5, health: +5 },
          result: '你用力抓住她的毛。新出生的幼崽在她的怀里哭着，你的鼻子埋在她的腋下。' },
      ],
    },
    {
      id: 'termite', at: 1800,
      title: '白蚁丘',
      body: '一个白蚁丘就在你的脚边，白蚁从洞口爬出来。你身边的同伴已经拿出了树枝，正在往洞里伸。',
      fact: '黑猩猩用草秆钓白蚁的行为，由 Jane Goodall 在坦桑尼亚冈贝首次记录（Goodall，Nature，1964）',
      options: [
        { t: '用树枝去钓白蚁', hint: '吃得饱 · 需要练习',
          eff: { food: +20 }, risk: 1.1, riskDays: 3,
          result: '你的第一根树枝断了两次。第三次，你钓到了一只白蚁，嚼得很慢。' },
        { t: '去找树上的果子', hint: '安全 · 白蚁不多',
          eff: { food: +8 }, risk: 0.9, riskDays: 3,
          result: '你爬上树，找到了几颗熟透的果子。白蚁丘的味道被风吹远了。' },
      ],
    },
    {
      id: 'transfer', at: 4700, need: 'female',
      title: '离开出生的群体',
      body: '你的群体里没有你的兄弟姐妹。邻近群体里有一只年轻的雄性一直在看你，它的群体也有很多雌性。留在这里，你可能一辈子都没有机会生下一个新的群体。',
      options: [
        { t: '离开，去邻近的群体', hint: '可能找到配偶 · 途中有风险',
          risk: 1.5, riskDays: 90, eff: { safety: -5 },
          result: '你在清晨穿过了边界。那个新的群体的雄性们盯着你，但没有赶你走。' },
        { t: '留在原群里', hint: '熟悉 · 配偶少',
          eff: { safety: +5, food: -5 },
          result: '你继续跟着母亲。你的视线常常越过边界，落在那片陌生的林子里。' },
      ],
    },
    {
      id: 'patrol', at: 5300, need: 'male',
      title: '边界上的叫声',
      body: '群体的雄性们开始在边界上来回走动，叫声越来越大。那边有陌生的雄性在回应，声音里带着敌意。',
      fact: '1974 至 1978 年间，冈贝的卡哈玛（Kahama）群体在与邻近的卡萨凯拉（Kasakela）群体的冲突中被逐步消灭（Goodall，1986；Wilson & Wrangham，2003）',
      options: [
        { t: '加入巡逻，一起冲过去', hint: '守住领地 · 可能被打死',
          kill: 0.2, cause: 'war', eff: { safety: +10 },
          result: '你和其他雄性一起冲向边界。对面的雄性退了回去，但你的胳膊被咬出了一道口子。' },
        { t: '躲在后面，等他们回来', hint: '保留体力 · 地位低',
          eff: { safety: -5, food: -5 },
          result: '你躲在树后，看着同伴们把对方赶走。它们回来的时候，你已经吃过了最后的果子。' },
      ],
    },
    {
      id: 'respiratory', at: 6500,
      title: '群体里的咳嗽',
      body: '群体里几只黑猩猩开始咳嗽，鼻子里流出黏液。它们前几天刚从人类营地附近回来。',
      options: [
        { t: '离开病群，去远处的林子', hint: '保护自己 · 食物少',
          risk: 0.8, riskDays: 30, eff: { food: -10 },
          result: '你走得很远。你在一片没有人的林子里找到了几棵果树，每天都在数日子。' },
        { t: '留下，互相梳毛', hint: '有陪伴 · 病原体传得快',
          kill: 0.15, cause: 'respiratory', eff: { safety: +10 },
          result: '你和同伴挤在一起，互相梳理毛发。几天后，你的喉咙开始发痒。' },
      ],
    },
    {
      id: 'snare', at: 7300,
      title: '一根钢丝',
      body: '林子边缘有一根绷紧的钢丝，另一头拴在一棵小树上。钢丝下面，有一只被套住的猴子还在挣扎。玉米地就在不远的地方。',
      options: [
        { t: '绕开这条路', hint: '安全 · 果子少',
          eff: { food: -10, safety: +5 }, risk: 0.9, riskDays: 60,
          result: '你绕了一大圈，在一片陡坡上找到了几棵零星的果树。' },
        { t: '去玉米地边缘吃一顿', hint: '食物↑↑ · 偷猎者可能在附近',
          kill: 0.15, cause: 'gunshot', eff: { food: +25 },
          result: '你吃得满嘴都是玉米的甜味。远处的林子里，有什么东西动了一下。' },
      ],
    },
    {
      id: 'old_nest', at: 11000,
      title: '年纪大了',
      body: '你的牙齿开始松动，夜里的咳嗽越来越多。你的女儿们在附近搭了新的巢，每天傍晚都会过来看你。',
      options: [
        { t: '留在女儿的巢附近', hint: '有照顾 · 食物分不到多少',
          eff: { health: +5, safety: +5 }, risk: 0.9, riskDays: 365,
          result: '你每天都能听见她们的声音。你躺在她们的树下，安静地看着林子里的光。' },
        { t: '独自去山脊上的老巢', hint: '安静 · 食物少 · 独行',
          eff: { food: +5 }, risk: 1.4, riskDays: 60,
          result: '你爬上了山脊。那个老巢已经破了，但还能挡住风。' },
      ],
    },
    {
      id: 'small_group', at: 5200, need: 'smallcommunity',
      title: '群体太小了',
      body: '群体只剩十几只，几只成年雄性之间的关系越来越紧。邻近群体的雄性每周都会在边界上转。你可以跟着它们去另一边，也可以留在群里。',
      options: [
        { t: '跟着邻近群体的雄性去边界另一边', hint: '新群体 · 可能被围攻',
          kill: 0.1, cause: 'war', eff: { food: +5 },
          result: '你跟着它们穿过了边界。对面的雄性围住了你，你咬了一口，它们才退了回去。' },
        { t: '留在群里，守着果树林', hint: '稳妥 · 食物少',
          eff: { food: -8, safety: +3 }, risk: 0.9, riskDays: 365,
          result: '你留了下来，和几只雄性一起守着果树林。你们分到的果子越来越少。' },
      ],
    },
    {
      id: 'logging_road', at: 6000, need: 'logging',
      title: '新修的路',
      body: '伐木公司修的新路穿过了你们的林子。路边停着一台推土机，司机靠在车门上抽烟。路那边的林子里果树很多，但要穿过路面。',
      options: [
        { t: '穿过路面，去对面的林子', hint: '食物↑↑ · 路上的风险',
          kill: 0.07, cause: 'gunshot', eff: { food: +15 },
          result: '你穿过路面，对面的果树结得很密，你吃得满嘴都是果子。远处传来一声枪响，你没有回头。' },
        { t: '留在老林子，吃得少', hint: '安全 · 食物少',
          eff: { food: -10 }, risk: 0.85, riskDays: 60,
          result: '你们在老林子里找果子，每天要走更远的路，树上的果子越来越少。' },
      ],
    },
  ],

  idle: [
    '你在树枝间慢慢地挪动，手臂比腿更有力。',
    '林子里很湿，树叶上的水滴落在你的肩膀上。',
    '远处有别的群体在叫，你的同伴们都回应了一声。',
    '你用手指挠了挠腋下，然后又去找吃的。',
    '树冠之间的光斑在你的身上移动。',
    '你听见白蚁在树干里咬东西的声音。',
    '同伴的手搭在你的背上，你们一起安静地坐着。',
    '一只鸟从头顶飞过，你抬头看了它很久。',
  ],

  epitaph: '你在林子里生活了几十年。你的名字从没有被写下来，但你的群体记得你。',
});

;
window.SPECIES = window.SPECIES || [];
window.SPECIES.push({
  id: 'lion',
  name: '非洲狮',
  en: 'African lion',
  sci: 'Panthera leo（狮）',
  emoji: '🦁',
  taxon: '脊索动物门 › 哺乳纲 › 食肉目 › 猫科',
  size: '体长（不含尾）雄狮约 1.7–2.5 米，体重 150–200 公斤；雌狮约 120–150 公斤',
  scene: 'savanna',
  kind: 'wild',
  tagline: '狮子是唯一一种成群生活的猫科动物',

  birth: {
    sex: [['雌性', 1], ['雄性', 1]],
    rolls: [
      { label: '出生地', options: [
        ['塞伦盖蒂草原的高草丛', 3, { food: +5 }],
        ['马赛马拉河边的一片灌木林', 2, { safety: +5 }],
        ['博茨瓦纳奥卡万戈三角洲的沼泽边缘', 2, { food: +10 }],
        ['国家公园外、靠近牧场的草地', 1, { food: +5, risk: 1.3 }],
        ['南非克鲁格国家公园的灌木林', 2, {}],
        ['印度吉尔森林的干燥林地', 1, {}],
        ['一座围栏保护区里的草地', 1, {}],
      ]},
      { label: '狮群的状况', options: [
        ['一个稳定的狮群，雄狮还在守着领地', 3, { food: +10 }],
        ['新雄狮刚刚赶走了老雄狮，局势还不稳', 2, { food: -5, risk: 1.2 }],
      ]},
      { label: '种群', options: [
        ['塞伦盖蒂的草原，成群的角马和斑马每年迁徙经过', 3, { food: +10, set: 'serengeti' }],
        ['克鲁格国家公园，狮群在灌木林和河谷之间游荡', 2, { set: 'kruger' }],
        ['印度古吉拉特邦的吉尔森林，亚洲狮仅存的野生种群', 1, { food: -5, risk: 1.1, set: 'gir' }],
        ['一座围栏里的保护区，狮群的食物由人补充', 1, { food: +15, safety: +10, set: 'fenced' }],
      ]},
      { label: '狮群的大小', options: [
        ['一个十几头的大狮群，有好几头母狮和几只雄狮', 2, { food: +10, safety: +5, set: 'bigpride' }],
        ['一个五六头的小狮群，两三头母狮', 3, { set: 'midpride' }],
        ['母亲刚被外来的雄狮赶出原来的狮群，只剩一头母狮带着你们', 1, { food: -10, risk: 1.2, set: 'lonemother' }],
      ]},
    ],
    siblings: 3,
    siblingsLabel: '同一窝的幼狮',
    intro: '你出生在{出生地}里，眼睛还没有睁开。{狮群的状况}。你是{sex}，同一窝里大约有 {siblings} 只幼狮。',
  },

  stages: [
    { id: 'cub',   name: '幼狮（躲在草丛里）', from: 0,    unit: 'month' },
    { id: 'young', name: '幼狮（跟随狮群）',   from: 365,  unit: 'month' },
    { id: 'sub',   name: '亚成年（准备离开）', from: 1095, unit: 'month' },
    { id: 'adult', name: '成年',               from: 1825, unit: 'year'  },
    { id: 'old',   name: '老年',               from: 4745, unit: 'year'  },
  ],
  maturity: 1460,
  maxAge: 5840,

  survival: [[0,1],[30,0.8],[90,0.55],[365,0.42],[730,0.35],[1095,0.32],[1825,0.26],[3650,0.15],[4745,0.07],[5475,0.02],[5840,0]],
  survivalNote: '幼狮的死亡率很高，多数研究认为近一半的幼狮活不过第一年；雄狮常常在三到四岁后被赶出狮群，成年后寿命约十到十四年，此曲线为粗估。',

  init: { health: 80, food: 50, safety: 50 },
  foodDrain: 4,

  causes: [
    { id: 'infanticide', escape: false, w: 4, stages: ['cub','young'], short: '被闯入的新雄狮咬死',
      text: '一头陌生的雄狮冲进了狮群。它咬了你两下，把你丢进草丛里。母亲的声音很远，你没能爬回去。' },
    { id: 'hyena', escape: true, w: 3, stages: ['cub','young','sub'], short: '被斑鬣狗围住',
      text: '一群斑鬣狗在草丛边缘围了过来。你跑出去，就被它们拖进了高草里，叫声很快被笑声盖住。' },
    { id: 'buffalo', escape: false, w: 2, stages: ['sub','adult','old'], short: '被水牛的角刺穿',
      text: '一头非洲水牛在围攻中转过身，角刺进了你的侧腹。你的伤口在几天后感染，没能再站起来。' },
    { id: 'coalition', escape: true, w: 2, stages: ['sub','adult','old'], short: '被争夺领地的雄狮咬死',
      text: '一个雄狮联盟把你逼到了河边的悬崖边。你想跑，但它们咬住了你的后腿。' },
    { id: 'herder', escape: false, w: 2, stages: ['sub','adult','old'], short: '牧民的报复（毒饵）',
      text: '牧民的牛群受了损失。他们在牛棚边放了一头被下了毒的死牛。你吃下去以后，很快就觉得身体发冷。' },
    { id: 'poacher', escape: true, w: 2, stages: ['sub','adult','old'], short: '被偷猎者的猎枪打中',
      text: '夜里，远处传来一声枪响。你还没来得及跑，身边的母狮已经倒下了，你的肩膀也被打中。' },
    { id: 'starve', escape: false, w: 3, short: '饿死（干旱，猎物少）',
      text: '连续几个月的干旱，草原上的猎物都走了。你的肋骨越来越明显，最后没能熬过一个雨季。' },
    { id: 'old', w: 0, short: '衰老', text: '你的牙齿掉了一颗，咬东西的力气越来越小。你躺在一棵树下，再也没有起来。' },
  ],

  events: [
    { stages: ['cub'], w: 3, text: '你躲在草丛深处。母亲每隔几个小时才回来喂你一次，然后又走了。' },
    { stages: ['cub'], w: 2, text: '母亲把你叼回了狮群。你的眼睛刚睁开，光很刺眼。' },
    { stages: ['cub'], w: 2, text: '你吃到母亲的奶，热乎乎的。其他的幼狮在你身边挤来挤去。', eff: { food: +10 } },
    { stages: ['cub'], w: 1, text: '一只狮子的脚步声从草丛那边过来，母亲把你压进了土里。', eff: { safety: +5 } },
    { stages: ['cub'], w: 1, text: '远处有斑鬣狗在叫，声音像人的笑声。你把自己缩得更小。', eff: { safety: -5 } },
    { stages: ['young'], w: 3, act: 'forage', text: '狮群在晨光里包围了一头斑马。你跟在母亲后面，学会了压低身子，慢慢靠近。', eff: { food: +10 } },
    { stages: ['young'], w: 2, act: 'rest', text: '白天太热了，你们躺在树荫下睡觉。狮子一天能睡十五到二十个小时。', eff: { health: +5 },
      fact: '狮子在野外每天大部分时间都在休息，一天可以睡十五到二十个小时（Schaller，The Serengeti Lion，1972）' },
    { stages: ['young'], w: 2, act: 'hide', text: '一头母狮把你们压在草丛里，不许动，等水牛群走过去。', eff: { safety: +8, food: -3 } },
    { stages: ['young'], w: 1, text: '一头斑鬣狗闻到了猎物的味道，跟在狮群后面。你们被它的笑声惊得乱跑。', eff: { safety: -5 } },
    { stages: ['young'], w: 1, act: 'explore', text: '你跟着狮群越过一条干涸的河床。河床的泥里全是大象的脚印。' },
    { stages: ['young'], w: 1, text: '一头幼狮的腿被蹄子踢中，它在地上叫了一夜。第二天，它不再叫了。', eff: { safety: -3 } },
    { stages: ['sub'], w: 3, act: 'forage', text: '你第一次独自捉到一只瞪羚。它的挣扎很快就停了，你咬得很慢，像在学习。', eff: { food: +15 } },
    { stages: ['sub'], w: 2, act: 'explore', text: '你离开狮群走了两天，才发现自己闯进了另一个雄狮的领地。', eff: { safety: -8 } },
    { stages: ['sub'], w: 2, text: '你和兄弟在草原上互相咬着对方的脖子，练习争斗。', eff: { health: +3 } },
    { stages: ['sub'], w: 1, text: '一头水牛从河边冲过来，它的角划破了你的前腿。', eff: { health: -10 } },
    { stages: ['sub'], w: 1, act: 'rest', text: '雨季的草长得很高。你躺在草里，身上的苍蝇怎么赶都赶不走。', eff: { health: -3 } },
    { stages: ['adult'], w: 3, act: 'forage', text: '狮群在夜里伏击了一头水牛。它的角撞向你的肩膀，你咬住了它的鼻子不放。', eff: { food: +20, health: -5 } },
    { stages: ['adult'], w: 2, act: 'rest', text: '中午的河边很热。你躺在母狮身边，尾巴偶尔扫一下苍蝇。', eff: { health: +5 } },
    { stages: ['adult'], w: 2, act: 'mate', need: 'female', text: '一只雄狮在草丛里跟着你，每隔几分钟就低吼一声。' },
    { stages: ['adult'], w: 1, once: true, need: 'female', text: '你产下了三只幼狮。它们的眼睛还闭着，躲在灌木丛深处，你每天只敢回去一次。', eff: { offspring: [2, 4] } },
    { stages: ['adult'], w: 2, act: 'explore', text: '狮群沿着雨季的边界走了一圈。在远处，你们看见了一大群牛。', eff: { food: +5, safety: -5 } },
    { stages: ['adult'], w: 1, text: '一支牧民的队伍在夜里举着火把经过。狮子们在草丛里屏住呼吸。', eff: { safety: -5 } },
    { stages: ['adult','old'], w: 1, once: true, text: '一份研究说，非洲狮的数量在二十年里减少了不少。你的狮群里，已经很久没有见过新的雄狮了。',
      fact: '2023 年 IUCN 将非洲狮列为易危，依据是约 21 年（三代）内分布范围下降约 36%（CMS，2023）' },
    { stages: ['old'], w: 3, act: 'rest', text: '你的牙齿掉了一颗，咬东西的力气越来越小。你只能吃狮群剩下的肉。', eff: { food: -10 } },
    { stages: ['old'], w: 2, text: '一头年轻的雄狮打量着你的位置，它在等你离开。', eff: { safety: -5 } },
    { stages: ['old'], w: 1, once: true, text: '你看着狮群里新出生的幼狮。它们的眼睛还是蓝色的。' },
    { stages: ['young'], w: 2, need: 'serengeti', text: '角马群从草原的另一边涌过来，像一条很宽的河。你跟着狮群趴在路边，等它们走近。', eff: { food: +5 } },
    { stages: ['sub'], w: 2, act: 'forage', need: 'serengeti', text: '草原上的角马数以万计。你们挑了一头落单的，在河边的草丛里咬住了它。', eff: { food: +20 } },
    { stages: ['adult'], w: 1, need: 'serengeti', text: '远处的草原被火烧过，黑色的草茬一直铺到地平线。你们沿着烧过的边缘走，等角马群回来。', eff: { food: -3 } },
    { stages: ['young'], w: 2, need: 'kruger', text: '河谷边的灌木林很密，你们在里面躲了一下午。远处有一头大象在树间走过，你们没有出去。', eff: { safety: +3 } },
    { stages: ['sub', 'adult'], w: 2, act: 'hide', need: 'kruger', text: '灌木林里有很多水牛。你趴在一棵树后面，等它们慢慢走进你的范围。', eff: { food: +8 } },
    { stages: ['adult'], w: 1, need: 'kruger', text: '一辆吉普车停在路边，车里的游客举着相机。你们没有理它，继续在草丛里睡觉。' },
    { stages: ['young'], w: 2, need: 'gir', text: '夜里，村子里的狗叫个不停。你们沿着森林的边缘慢慢地走，没有进村。', eff: { safety: -3 } },
    { stages: ['sub', 'adult'], w: 2, act: 'forage', need: 'gir', text: '你们在森林边上追到了一头鹿。吉尔森林的鹿比草原上少，你们每次都要等很久才有机会。', eff: { food: +10 } },
    { stages: ['adult'], w: 1, need: 'gir', text: '一位护林员骑着摩托车在远处的小路上经过，他每天都来数你们。',
      fact: '吉尔森林是亚洲狮唯一的野生栖息地，2020 年的普查记录约 674 头（古吉拉特邦森林部，2020）' },
    { stages: ['cub', 'young'], w: 2, need: 'fenced', text: '保护区的围栏很高，外面的鬣狗进不来。你在围栏里长大，很少听见野外的叫声。', eff: { safety: +8 } },
    { stages: ['adult'], w: 2, need: 'fenced', text: '工作人员每天傍晚把一头死牛放在木台上，狮群聚在台下。你吃得饱，但已经很久没有自己追猎了。', eff: { food: +15, health: -3 } },
    { stages: ['adult'], w: 1, act: 'explore', need: 'fenced', text: '你沿着围栏慢慢地走，找不到出口。围栏外面的草原看起来很远。', eff: { safety: +2 } },
    { stages: ['young'], w: 2, need: 'bigpride', text: '狮群里有好几头母狮一起照顾幼狮。你躺在一堆幼狮中间，有一头母狮在你身边舔毛。', eff: { safety: +5 } },
    { stages: ['sub'], w: 2, act: 'forage', need: 'bigpride', text: '狮群一起追上了一头水牛。你咬住它的后腿，其它狮子从四面围过去，你分到了一块肉。', eff: { food: +18 } },
    { stages: ['adult'], w: 1, need: 'bigpride', text: '狮群里的母狮在午后合力赶走了一只鬣狗。它们咬得很狠，你躲在一边，没有上去。', eff: { safety: +3 } },
    { stages: ['young'], w: 2, need: 'midpride', text: '五六头狮子轮流看着幼狮。一头母狮出去追猎，你们在树荫下睡了一整天。', eff: { health: +3 } },
    { stages: ['sub'], w: 2, act: 'forage', need: 'midpride', text: '你们追猎的时候人手不够，那只斑马在草丛里跑远了。你们只能啃一些别人剩下的骨头。', eff: { food: -8 } },
    { stages: ['adult'], w: 1, need: 'midpride', text: '远处一头雄狮低吼了一声。狮群里的母狮抬起头，看了一眼，又趴下继续睡。', eff: { safety: +2 } },
    { stages: ['cub'], w: 3, need: 'lonemother', text: '母亲一个人出去捕猎，你们躲在草丛里等。她回来的时候，嘴边没有肉，只有草叶。', eff: { food: -10 } },
    { stages: ['young'], w: 2, need: 'lonemother', text: '一头新雄狮走过来，把你和母亲撵到了草丛深处。它在远处咆哮，你们没有出来。', eff: { safety: -6 } },
    { stages: ['young', 'sub'], w: 2, act: 'hide', need: 'lonemother', text: '你们躲在干枯的河床下面。外面的草原一天比一天亮，你们一天比一天饿。', eff: { food: -5, safety: +5 } },
    { stages: ['young'], w: 2, need: 'bold', text: '你第一个从草丛里跑出来，扑向一只蜥蜴。它跑得很快，你在地上滚了两圈。', eff: { health: -2 } },
    { stages: ['cub', 'young'], w: 2, need: 'cautious', text: '你在洞里趴了很久，直到风从另一边吹来，你才确认外面没有鬣狗的气味。', eff: { safety: +5 } },
    { stages: ['sub'], w: 1, act: 'explore', need: 'curious', text: '你走到一片从没去过的草地上。一只蚂蚁爬上了你的爪子，你低头看了它很久。', eff: { food: +3 } },
    { stages: ['cub'], w: 1, need: 'runt', text: '你是这一窝最小的一只。母亲先喂饱了你的兄弟姐妹，你只能等它们吃完才靠近。', eff: { food: -8 } },
    { stages: ['sub', 'adult'], w: 1, need: 'robust', text: '你的肩膀宽，颈上的鬃毛也厚。一次和同伴争食时，你把它推进了草丛里。', eff: { food: +10 } },
  ],

  opening: {
    title: '母亲选择产仔的地方',
    body: '你还没出生。母亲在怀你的时候，要找一个能藏住幼崽的地方。草原上的高草丛离水源近，但雄狮常常经过；灌木林隐蔽，但离河边远，猎物也少。',
    options: [
      { t: '高草丛里', hint: '离水源近 · 雄狮常来', eff: { food: +5, safety: -5 }, risk: 1.2, riskDays: 30,
        result: '你在高草丛里出生。母亲的身子压着你，远处有一头雄狮在低吼。' },
      { t: '灌木林的边缘', hint: '隐蔽 · 离猎物远', eff: { food: -5, safety: +10 }, risk: 0.85, riskDays: 30,
        result: '你在灌木林里出生。草叶和树枝把你们挡得很严，外面的声音一下子远了。' },
    ],
  },

  actions: {
    instinct: { name: '随本能', desc: '跟着狮群的节奏，做一头狮子惯常做的事。' },
    forage: { name: '猎食', desc: '和狮群一起伏击猎物，或者独自捉小型猎物。', text: [
      '你压低身子，贴着草地一点点靠近。',
      '猎物的尾巴晃了一下，狮群同时站了起来。',
      '……',
    ]},
    hide: { name: '伏在草丛里', desc: '趴在高草丛里不动，等猎物靠近，或者躲开危险。', text: [
      '你把身子压进草里，只露出一双眼睛。',
      '远处的脚步声经过，你又等了一个小时。',
    ]},
    rest: { name: '在树荫下睡觉', desc: '白天找一棵树的阴影，把体力留给夜里的狩猎。', text: [
      '你躺在树荫下，尾巴偶尔扫一下苍蝇。',
      '……',
    ]},
    explore: { name: '巡游领地', desc: '沿着领地的边界走一圈，看看有没有别的狮群或者牛群。', stages: ['young','sub','adult','old'], text: [
      '你们沿着边界慢慢地走，每隔一段就停下来，闻一闻地上的气味。',
      '远处有一只鬣狗在叫，你们都停下来看了一眼。',
    ]},
    mate: { name: '交配', need: 'female', done: '你产下了 {n} 只幼狮。它们躲在灌木丛深处，要等很久才能跟着狮群走。' },
  },
  brood: [2, 4],

  decisions: [
    {
      id: 'leave_pride', at: 1100, need: 'male',
      title: '离开父亲的狮群',
      body: '你已经快三岁了。狮群里的雄狮开始对你低吼，不再让你靠近母狮。你的胡子长了出来，声音也变粗了。你可以留下来，也可以现在就走。',
      options: [
        { t: '离开狮群，去找新的狮群', hint: '可能找到配偶 · 途中有风险',
          risk: 1.5, riskDays: 60, eff: { food: -5 },
          result: '你和兄弟们一起走出了草原。身后的吼声慢慢远了，前面是一片陌生的草地。' },
        { t: '留下，和兄弟们组成联盟', hint: '守得住 · 要分享猎物',
          eff: { safety: +10, food: -3 },
          result: '你们几只雄狮躺在一起，互相舔着对方的脖子。它们是你以后最可靠的同伴。' },
      ],
    },
    {
      id: 'new_males', at: 1400, need: 'female',
      title: '新雄狮来了',
      body: '一个雄狮联盟在远处的草原上叫着，它们正在朝狮群的方向走来。老雄狮已经被赶走了。如果新的雄狮接管狮群，它们可能会杀掉幼狮。',
      fact: '新雄狮接管狮群后，常常杀死前任雄狮的幼崽；雌狮会通过藏匿幼崽和与新雄狮交配来抵抗（Packer & Pusey，American Naturalist，1983）',
      options: [
        { t: '把幼狮藏在草丛深处', hint: '幼狮更安全 · 你的食物少',
          eff: { safety: +5, food: -5 }, risk: 0.8, riskDays: 14,
          result: '你带着幼狮钻进了一片很深的草丛。它们的哭声被你的身子盖住了。' },
        { t: '留在狮群中，装作顺从', hint: '与新雄狮接触 · 有被咬死的风险',
          kill: 0.2, cause: 'coalition', eff: { food: +10 },
          result: '你靠近了那些雄狮。它们闻了你的身体，然后走向了幼狮。' },
      ],
    },
    {
      id: 'buffalo', at: 2000,
      title: '一群水牛',
      body: '草原的另一头，一群非洲水牛正慢慢走向河边。队伍最后有一头落了单的老水牛，它的角很大，一看就很危险。',
      options: [
        { t: '伏击掉队的水牛', hint: '食物↑↑ · 被角刺伤的风险',
          kill: 0.25, cause: 'buffalo', eff: { food: +25 },
          result: '你们一起扑上去，把它按倒在河边的泥里。它的角划过了你的侧腹。' },
        { t: '等母狮去围攻，你去捡剩下的', hint: '安全 · 食物少',
          eff: { food: +5, safety: +5 }, risk: 0.9, riskDays: 3,
          result: '母狮们把水牛赶进了一个泥坑。你只分到了一条后腿。' },
      ],
    },
    {
      id: 'drought', at: 2600,
      title: '干旱',
      body: '雨季没有来。河水越来越浅，草原上的猎物一天比一天少。狮群要决定：跟着水源走，还是守着现在的领地。',
      options: [
        { t: '跟着狮群往河边走', hint: '有水 · 路很远',
          eff: { food: +10 }, risk: 1.3, riskDays: 60,
          result: '你们走了五天。河边的草已经被踩平了，但还有几头水牛在那里喝水。' },
        { t: '守着现在的领地', hint: '熟悉 · 食物一天比一天少',
          eff: { food: -15, health: -5 }, risk: 0.8, riskDays: 90,
          result: '你们守着干了的河床。每天都在等，每天都没有等到雨。' },
      ],
    },
    {
      id: 'herders', at: 3300,
      title: '牧民的牛群',
      body: '草原边缘的牛棚里有很多牛，它们晚上被关在木栅栏里。牧民在旁边生着火，狗叫个不停。',
      options: [
        { t: '夜里冲进牛棚抓牛', hint: '食物↑↑ · 被牧民毒杀的风险',
          kill: 0.3, cause: 'herder', eff: { food: +30 },
          result: '你咬断了栅栏的一根木桩，叼出一头小牛。牧民的火把在你身后亮了起来。' },
        { t: '守着野生猎物', hint: '安全 · 食物少',
          eff: { food: -10 }, risk: 0.85, riskDays: 30,
          result: '你们离开牛棚，回到草原深处。那里的猎物比以前少了很多。' },
      ],
    },
    {
      id: 'coalition', at: 3800, need: 'male',
      title: '老雄狮的位置',
      body: '你已经能和一个雄狮联盟并肩了。但另一个雄狮联盟正在靠近你们的领地，你们必须决定要不要守下去。',
      options: [
        { t: '保卫领地，与它们争夺', hint: '守住母狮 · 可能被咬死',
          kill: 0.3, cause: 'coalition', eff: { safety: +10 },
          result: '你们在草原上互相咬着，直到对方退了回去。你的耳朵上留下了一道血口子。' },
        { t: '去领地边缘做独居的雄狮', hint: '不争 · 没有狮群',
          risk: 1.4, riskDays: 60, eff: { food: -5 },
          result: '你离开了狮群，在远处的灌木丛里独自睡了几天。' },
      ],
    },
    {
      id: 'old_pride', at: 4900,
      title: '老了，还在狮群里吗',
      body: '你的牙齿已经掉了几颗，追猎的时候跑不动了。狮群里的年轻雄狮在看你，它们在等你的位置空出来。',
      options: [
        { t: '留在狮群边缘', hint: '有保障 · 吃的少',
          eff: { food: -5, safety: +5 }, risk: 0.9, riskDays: 365,
          result: '你每天只能吃到别人剩下的肉。你还是醒着，还在狮群里。' },
        { t: '独自走进草原深处', hint: '食物更少 · 不被赶走',
          eff: { food: -10 }, risk: 1.5, riskDays: 60,
          result: '你走进了一片没有狮子的草地。那里很安静，但没有什么可以吃的了。' },
      ],
    },
    {
      id: 'fence_gate', at: 1500, need: 'fenced',
      title: '围栏的门',
      body: '一位工作人员在围栏边上检修，门没有锁好。门外是一片草原，没有人给你送饭，但有很多角马和斑马。',
      options: [
        { t: '从门缝里挤出去，去草原上找猎物', hint: '食物↑ · 被偷猎者的枪打中',
          kill: 0.1, cause: 'poacher', eff: { food: +10 },
          result: '你从门缝里挤了出去，草原的风一下子灌进了鼻子。远处有一声枪响，你趴下来等了很久。' },
        { t: '留在围栏里，等人送饭', hint: '安全 · 饱食',
          eff: { food: +10, safety: +5 },
          result: '你回到了围栏中间，躺下来。傍晚，工作人员把一头死牛放在了木台上。' },
      ],
    },
    {
      id: 'lone_mother_pride', at: 1200, need: 'lonemother',
      title: '一头新的雄狮',
      body: '你们的狮群已经被一头外来的雄狮占了。它在草丛那边咆哮，母亲低着头，把你挡在身后。你可以跟着母亲离开，也可以留下来看着它。',
      options: [
        { t: '跟着母亲离开，去另一片草原', hint: '安全↑ · 食物↓',
          eff: { food: -10, safety: +5 }, risk: 1.1, riskDays: 60, set: 'wander',
          result: '你们走了好几天，草原上只有几只秃鹫在空中盘旋。' },
        { t: '留下，等雄狮走开', hint: '食物有保障 · 可能被咬伤',
          kill: 0.1, cause: 'infanticide', eff: { food: +5 },
          result: '你躲在草丛里，听着雄狮在远处低吼。它终于走开的时候，你的身上多了几道抓痕。' },
      ],
    },
  ],

  idle: [
    '你在草丛里慢慢地翻身，耳朵一直朝着风来的方向。',
    '一只苍蝇落在你的鼻子上，你甩了甩头。',
    '远处的草原一直延伸到地平线，没有一棵树。',
    '母狮们在你身边躺着，偶尔伸出爪子拍一下你。',
    '夜里的草原很吵，你听见了鬣狗、羚羊和远处的火声。',
    '你打了个哈欠，露出两排长长的犬齿。',
    '一群椋鸟从你身边飞过，落在水牛的背上。',
    '河水在阳光下很亮，你眯着眼睛看了很久。',
  ],

  epitaph: '你在草原上睡过无数个下午。草会长回来，狮群会换一批新的狮子。',
});

;
// UI strings for every language. Species text lives in i18n/<lang>/<id>.json (bundled into i18n/<lang>.js).
window.UI = {
 "zh": {
  "title": "轮回",
  "langName": "中文",
  "heroSub": "",
  "navBook": "轮回簿",
  "navHome": "首页",
  "heroEyebrow": "按此刻地球上活着的个体数量，投一次胎",
  "bignum": "你是其中的 <b>1</b> / {digits}",
  "lede": "此刻地球上大约有 <b class=\"mono\">{total}</b> 只动物活着。下一世，你会随机成为其中一只，从出生活到死亡。投成人类的机会微乎其微。",
  "ifNow": "如果你此刻投胎",
  "other": "其他",
  "oddsNote": "其余 {n} 个物种合计只占 {rest}。投成人类的概率是 {human}。",
  "pickLabel": "指定物种",
  "go": "投胎",
  "allSpecies": "全部物种",
  "legend": "按此刻活着的个体数排序。<span class=\"conf low\">粗估</span> 表示只有数量级估计，可能差十倍以上；<span class=\"conf\">估计</span> 表示有同行评审研究；<span class=\"conf\">统计</span> 表示有普查或官方统计。",
  "conf": {
   "high": "统计",
   "mid": "估计",
   "low": "粗估"
  },
  "logScale": "条形长度按对数刻度（每格相差十倍）。把鼠标停在一行上可以看数据来源。",
  "modes": [
   [
    "real",
    "按数量抽取",
    "按此刻活着的数量抽取。绝大多数时候，你会是桡足类或线虫。"
   ],
   [
    "vert",
    "只限脊椎动物",
    "在鱼、鸟、两栖、爬行和哺乳动物之间按数量抽取。"
   ],
   [
    "mammal",
    "只限哺乳动物",
    "只在哺乳动物之间按数量抽取，人类也在里面。"
   ],
   [
    "even",
    "每个物种机会均等",
    "不看数量，每个物种机会相同。"
   ],
   [
    "pick",
    "指定物种",
    "直接选一个物种。"
   ]
  ],
  "odds": "概率 {p}",
  "kind": {
   "wild": "野生",
   "farmed": "养殖",
   "pet": "家养",
   "human": "人类"
  },
  "unit": {
   "hour": "小时",
   "day": "天",
   "week": "周",
   "month": "个月",
   "year": "年"
  },
  "birthHead": "出生",
  "fSex": "性别",
  "fKind": "类别",
  "fAlive": "此刻活着的同类",
  "fOdds": "投成它的概率",
  "fMature": "活到能繁殖的概率（估算）",
  "fMax": "最长寿命",
  "fSize": "体型",
  "fTick": "一格时间",
  "human": "人类",
  "cmpAlive": "此刻活着的数量",
  "sources": "数量来源：{src}。",
  "begin": "开始这一世",
  "reroll": "换一个",
  "openingEyebrow": "出生前的选择",
  "decision": "抉择",
  "crisis": "生死关头",
  "enterStage": "你进入了「{s}」阶段。",
  "starve": {
   "short": "饿死",
   "text": "你很久没有吃到东西了。身体一点点停了下来。"
  },
  "oldAge": {
   "short": "衰老",
   "text": "你活到了这个物种能活到的尽头。"
  },
  "death": {
   "short": "死亡",
   "text": "你死了。"
  },
  "quiet": [
   "之后的 {d} 里，没有什么特别的事。",
   "{d} 过去了。",
   "又过了 {d}，日子和之前差不多。",
   "接下来的 {d}，一切如常。",
   "这 {d} 里，你只是活着。",
   "很长一段时间，{d}，没有值得记下的事。",
   "{d} 过去，你还在。",
   "又是平静的 {d}。"
  ],
  "actions": {
   "instinct": [
    "随本能",
    "不刻意做什么，像这个物种通常那样活着。"
   ],
   "forage": [
    "觅食",
    "多花时间找吃的。吃得饱，但更容易暴露。"
   ],
   "hide": [
    "躲藏",
    "待在最安全的地方。不容易被发现，但几乎吃不到东西。"
   ],
   "rest": [
    "休息",
    "少动，恢复体力。"
   ],
   "explore": [
    "探索",
    "去没去过的地方。可能找到更好的食物，也可能遇到更多危险。"
   ],
   "mate": [
    "繁殖",
    "把力气用在留下后代上。消耗大，也更危险。"
   ]
  },
  "mateMale": "你成功交配了。之后大约有 {n} 个后代是你的。",
  "mateFemale": "你繁殖了，留下了 {n} 个后代。",
  "nthBrood": "第 {k} 次繁殖：{line}",
  "crisisTitle": [
   "危险：{c}",
   "又一次：{c}",
   "差一点：{c}",
   "再次面对：{c}"
  ],
  "crisisNth": "（第 {n} 次）",
  "crisisBody": [
   "你只有一瞬间做出反应。",
   "没有时间多想。",
   "身体比念头更快。",
   "这一次，也只有一瞬间。"
  ],
  "flee": [
   "逃",
   "转身就逃",
   "全力冲出去",
   "往反方向逃"
  ],
  "fleeHint": "体力越好越有希望 · 约 {p}% 能活",
  "fleeOk": [
   "你逃开了，过了很久才平静下来。",
   "你逃了出去，没有什么追上来。",
   "你冲了出去，很远才停下。",
   "你又逃掉了，比上次更累。"
  ],
  "freeze": [
   "一动不动",
   "僵在原地",
   "贴紧不动",
   "屏住不动"
  ],
  "freezeHint": "看运气 · 约 {p}% 能活",
  "freezeOk": [
   "你一动不动，危险从旁边过去了。",
   "它没有发现你。",
   "你等了很久，四周才重新安静。",
   "这次它也没有看见你。"
  ],
  "autoChose": "{d}：（自动）{o}",
  "youChose": "{d}：你选择了「{o}」",
  "dormant": "你在休眠中度过了 {d}。这段时间里，你的身体几乎没有变老。",
  "stat": {
   "health": "健康",
   "food": "饱食",
   "safety": "安全",
   "offspring": "后代"
  },
  "riskNote": "接下来 {d} 死亡风险{dir}",
  "riskDown": "降低",
  "riskUp": "升高",
  "youChoseHead": "你选择了",
  "continue": "继续这一世",
  "pause": "❚❚ 暂停",
  "resume": "▶ 继续",
  "ff": "下一个抉择 »",
  "stepMode": "逐格",
  "stepModeTip": "每走一格都由你点",
  "auto": "自动抉择",
  "quit": "离开这一世",
  "hint": {
   "foodUp": "饱食↑",
   "foodDown": "饱食↓",
   "riskUp": "风险↑",
   "riskDown": "风险↓",
   "stamina": "体力↑",
   "events": "遭遇↑"
  },
  "cantAct": "你现在是{s}，还什么都做不了。时间会快一点过去。",
  "stepBtn": "走一格（1 {u}）▸",
  "toInstinct": [
   "你不再刻意做什么，随本能活着。",
   "你放下打算，像往常一样活着。",
   "你回到了本能的节奏。"
  ],
  "toAction": [
   "你开始{a}。",
   "你把时间花在{a}上。",
   "接下来，你{a}。",
   "你换了一种活法：{a}。"
  ],
  "bioAge": " · 生理年龄 {d}",
  "sub": "{sp} · {st} · 每格 1 {u} · 公元 {y} 年{bio}",
  "fStage": "阶段",
  "fKids": "后代",
  "sibsLeft": "{label}，还活着",
  "sibsDefault": "同批出生的个体",
  "sibsOnly": "按这条生存曲线估算，同批的其他个体大概都已经死了。",
  "sibsPct": "按生存曲线估算：同批个体此刻约有 {p} 还活着。",
  "onlyChild": "你是独生的。",
  "deadTag": " · 已死亡",
  "ended": "这一世结束了",
  "lived": "你活了 {d}",
  "toRecord": "看看这一生",
  "curveAria": "同一物种的生存曲线",
  "you": "你",
  "dormantCell": "休眠",
  "deathCell": "死亡",
  "spent": "这一生的时间花在哪里",
  "byTicks": "按时间格计算",
  "share": "这一世，我是一{mw}{sp}，活了 {d}。死因：{c}。\n{strip}\n{data}\n你会是什么？{url}",
  "humanSame": "同一时刻出生的人类婴儿，活过 {d} 的概率约 <b class=\"mono\">{p}</b>。",
  "deathHead": "一生记录",
  "deathLine": "公元 {y0} – {y1} · 活了 {d}{bio} · 死于「{st}」阶段",
  "deathBio": "（生理年龄 {d}）",
  "fCause": "死因",
  "fChoices": "做过的抉择",
  "fEscapes": "死里逃生",
  "times": "{n} 次",
  "sibsLonger": "{label}共 <span class=\"mono\">{n}</span> 个。按生存曲线，其中约 <b class=\"mono\">{p}</b> 活得比你久。",
  "kindLonger": "按生存曲线，同类中约 <b class=\"mono\">{p}</b> 活得比你久。",
  "matureLine": "这个物种能活到繁殖年龄的约有 <span class=\"mono\">{p}</span>。你{r}。",
  "madeIt": "做到了",
  "didnt": "没有活到那一天",
  "thisLife": "一生的健康状况",
  "mapLegend": "一格 = 一个时间单位 · 颜色 = 健康",
  "curveTitle": "生存曲线",
  "curveLegend": "出生的个体中仍活着的比例",
  "yourChoices": "你做过的抉择",
  "sameSecond": "同一时刻出生的其他动物",
  "byRealOdds": "按数量抽取",
  "companion": "一{mw}{sp}：活了 <span class=\"mono\">{d}</span>，{c}。",
  "shareTitle": "分享这一世",
  "copy": "复制文字",
  "copied": "已复制",
  "selected": "已选中，按 ⌘C / Ctrl+C 复制",
  "nextLife": "下一世",
  "invertNote": "按数量算，约 {p} 的投胎会落在无脊椎动物身上。想看看别的生命，可以换个范围。",
  "again": "再投一次胎",
  "home": "回到首页",
  "bookIntro": "你已经活过 <span class=\"mono\">{n}</span> 世，见过 <span class=\"mono\">{got} / {all}</span> 个物种。记录只保存在这个浏览器里。",
  "livedN": "活过 {n} 次",
  "notYet": "尚未投胎",
  "pastLives": "过往的生命",
  "livedFor": "活了 {d}",
  "kidsN": "后代 {n}",
  "noLives": "还没有。回到首页投一次胎吧。",
  "fCon": "体质",
  "fTem": "性格",
  "trait": {
   "runt": "瘦小（健康↓ 风险↑）",
   "average": "普通",
   "robust": "强壮（健康↑ 风险↓）",
   "bold": "大胆（觅食更多，也更冒险）",
   "cautious": "谨慎（躲得更好，吃得更少）",
   "curious": "好奇（探索时遇到更多事）",
   "steady": "平稳"
  },
  "status": "状态",
  "record": "生命记录",
  "newest": "最新在上",
  "doingNow": "你现在做什么",
  "anyTime": "随时可换 · 按数字键",
  "whatTitle": "什么是{sp}？",
  "protectNote": "为了让每一世都有得选，前 5 个抉择之内不会死（这是游戏设定）。",
  "revealLines": [
   "正在决定你的物种"
  ],
  "whatIs": "什么是{sp}",
  "hurtInstead": "你没有躲开，受了重伤，但活了下来。",
  "saved": [
   "你身边的一个同伴死了。差一点就是你。",
   "危险从你旁边擦过，带走了另一个。",
   "你险些死去，又缓了过来。",
   "离你最近的那个不见了。"
  ],
  "firstMove": "你能动了",
  "firstMoveBody": "现在你打算怎么活？之后随时可以换。",
  "firstMoveDone": "你照着这个想法活了下去。",
  "encounter": "遇到一件事",
  "savesLine": "按这条生存曲线，活得比你短的同类约占 {p}。前 5 个抉择的保护替你挡下了 {n} 次死亡。",
  "shareCardMade": "这一世的分享图",
  "saveImg": "存图片",
  "copyLink": "复制链接",
  "linkCopied": "链接已复制",
  "sysShare": "分享给朋友",
  "toX": "发推特",
  "toWeibo": "发微博",
  "imgSaved": "已保存",
  "imgHold": "长按或右键图片即可保存",
  "friendHead": "一位朋友分享的一世",
  "cardLead": "这一世，我是",
  "friendGo": "我也投一次胎",
  "friendHome": "首页",
  "myLife": "你的某一世",
  "vsTitle": "你们的两世",
  "vsYou": "你",
  "vsThem": "朋友",
  "vsLived": "活了",
  "vsKids": "后代",
  "vsRare": "投成的概率",
  "bookShare": "分享",
  "enc": [
   [
    "陌生的气味",
    "前面飘来一股没闻过的气味，可能是食物。",
    [
     "靠近看看",
     "饱食↑ 风险↑",
     {
      "food": 18
     },
     1.25,
     "是能吃的东西。"
    ],
    [
     "绕开",
     "安全↑ 饱食↓",
     {
      "safety": 10,
      "food": -4
     },
     0.85,
     "你绕开了。"
    ]
   ],
   [
    "同类挡在前面",
    "一个同类占着路，没有让开的意思。",
    [
     "挤过去",
     "饱食↑ 体力↓",
     {
      "food": 12,
      "health": -6
     },
     1.1,
     "你挤了过去。"
    ],
    [
     "让它先走",
     "安全↑",
     {
      "safety": 8
     },
     0.9,
     "它走了，你再往前。"
    ]
   ],
   [
    "最后一点食物",
    "这里只剩下一点能吃的了。",
    [
     "马上吃掉",
     "饱食↑",
     {
      "food": 14
     },
     1,
     "你吃完了它。"
    ],
    [
     "慢慢吃",
     "体力↑ 饱食↑",
     {
      "health": 5,
      "food": 4
     },
     0.95,
     "你吃得很慢，也歇了一会儿。"
    ]
   ],
   [
    "两个方向",
    "往哪边走都说得过去。",
    [
     "去开阔的一边",
     "饱食↑ 风险↑",
     {
      "food": 8
     },
     1.05,
     "那边食物多一些。"
    ],
    [
     "去隐蔽的一边",
     "安全↑",
     {
      "safety": 6
     },
     1,
     "那边更安静。"
    ]
   ],
   [
    "忽然安静",
    "周围一下子没有了动静。",
    [
     "马上离开",
     "安全↑ 体力↓",
     {
      "health": -4,
      "safety": 14
     },
     0.8,
     "你离开后，那里有东西经过。"
    ],
    [
     "继续待着",
     "饱食↑ 风险↑",
     {
      "food": 10
     },
     1.25,
     "什么也没发生，你接着吃。"
    ]
   ],
   [
    "被碰了一下",
    "有什么轻轻碰到你。",
    [
     "查看",
     "饱食↑ 风险↑",
     {
      "safety": -6,
      "food": 12
     },
     1.2,
     "是一小块能吃的碎屑。"
    ],
    [
     "立刻离开",
     "安全↑",
     {
      "safety": 10
     },
     0.85,
     "你没有停留。"
    ]
   ],
   [
    "环境在变",
    "周围的温度和气息和刚才不同。",
    [
     "提前躲好",
     "安全↑ 饱食↓",
     {
      "safety": 14,
      "food": -8
     },
     0.75,
     "你躲到情况稳定下来。"
    ],
    [
     "再待一会儿",
     "饱食↑ 风险↑",
     {
      "food": 16
     },
     1.25,
     "你多吃了一阵，才离开。"
    ]
   ],
   [
    "一处好位置",
    "这里安全，但已经被占了。",
    [
     "留下来争",
     "安全↑ 体力↓",
     {
      "safety": 12,
      "health": -6
     },
     1.05,
     "僵持之后，你留在了边上。"
    ],
    [
     "离开",
     "体力↑",
     {
      "health": 5
     },
     0.95,
     "你省下了力气。"
    ]
   ],
   [
    "身体不适",
    "你感到没有力气。",
    [
     "休息",
     "体力↑ 饱食↓",
     {
      "health": 12,
      "food": -6
     },
     0.85,
     "休息之后好了一些。"
    ],
    [
     "照常活动",
     "饱食↑ 体力↓",
     {
      "food": 10,
      "health": -8
     },
     1.2,
     "你撑了过去，但更累了。"
    ]
   ],
   [
    "附近有动静",
    "像是有什么在靠近。",
    [
     "停下观察",
     "安全↑ 风险↑",
     {
      "safety": 8
     },
     1.2,
     "它没有过来。"
    ],
    [
     "悄悄走开",
     "安全↑",
     {
      "safety": 6
     },
     0.9,
     "你走远了。"
    ]
   ],
   [
    "已经吃饱",
    "食物还剩一些。",
    [
     "继续吃",
     "饱食↑ 风险↑",
     {
      "food": 20,
      "health": -4
     },
     1.15,
     "你吃到很沉才停。"
    ],
    [
     "停下",
     "体力↑",
     {
      "health": 6
     },
     0.9,
     "你离开了食物。"
    ]
   ],
   [
    "平静的一段",
    "没有需要马上做的事。",
    [
     "歇着",
     "体力↑",
     {
      "health": 8
     },
     0.9,
     "你安静地待了一阵。"
    ],
    [
     "四处走走",
     "饱食↑ 风险↑",
     {
      "food": 10
     },
     1.15,
     "你找到了一点吃的。"
    ]
   ]
  ],
  "outlived": "比 {p} 的同类活得久",
  "outlivedNote": "按游戏采用的生存曲线估算",
  "evData": "依据",
  "basis": {
   "measured": "实测",
   "official": "官方统计",
   "related": "近缘或实验室",
   "est": "估计",
   "rule": "游戏设定"
  },
  "why": {
   "title": "为什么会这样",
   "when": "为什么是这个时候",
   "base": "在「{s}」阶段，这一{u}的基础死亡率是 {p}。",
   "noCurve": "没有找到这个年龄段的可靠实测数据，用的是估计曲线。",
   "factors": "再乘上你当时的处境：",
   "noFactors": "当时没有其他因素影响。",
   "final": "合起来，这一{u}的死亡概率是 {p}。",
   "crisis": "生死关头你选了「{t}」，有 {p} 的机会活下来，没有成功。",
   "choice": "你在「{t}」这一步有 {p} 的死亡概率。",
   "limit": "你活到了游戏设定的寿命上限（{d}）。",
   "health": "你的健康降到了零。",
   "cause": "为什么死因是“{c}”",
   "share": "在「{s}」阶段，游戏里约 {p} 的死亡归于这个原因。",
   "noShareButReal": "这个死因确实存在，但没有找到它占多少比例的数据，比例是估计的。",
   "noShare": "没有找到这个死因占比的可靠数据，比例是估计的。",
   "related": "和你这一生有关的研究",
   "legend": "绿色来自对本物种的实测或官方统计；蓝色是为了能玩而设的规则，不是科学结论。",
   "allSources": "查看全部来源",
   "lowHealth": "健康偏低（{n}）",
   "highHealth": "健康良好（{n}）",
   "lowFood": "饥饿（饱食 {n}）",
   "lowSafety": "处境危险（安全 {n}）",
   "ruleRisk": "死亡率 ×{x}",
   "ruleKill": "这一步有 {p} 的死亡概率"
  },
  "src": {
   "nav": "数据来源",
   "title": "数据与来源",
   "intro": "这里列出 {refs} 条来源，覆盖 {n} / {all} 个物种。每条都由程序打开原文或摘要，确认引用的句子确实在里面。没有列出的数字都是估计或游戏设定。",
   "how": "怎么看这些标签",
   "measured": "在这个物种身上直接测得。",
   "official": "政府或国际组织公布的统计。",
   "related": "来自近缘物种、实验室或另一类环境，只能参考。",
   "est": "没有找到可靠数据，由制作者估计。",
   "rule": "为了能玩而设定的规则。例如死亡率倍数：觅食 ×{forage}、躲藏 ×{hide}、休息 ×{rest}、探索 ×{explore}、繁殖 ×{mate}；前 5 个抉择内不会死；出生境遇、体质和性格的影响；遇险时由你按停指针，绿色宽度等于逃生概率，反应快的人会比统计活得久。",
   "line": "存活率有数据 {surv} 段 · 死因有依据 {causes}/{all} · 来源 {refs} 条",
   "surv": "存活率",
   "noSurv": "没有找到可靠的存活率，整条曲线是估计。",
   "facts": "事实",
   "curveKey": "绿色实线：有研究数据的年龄段，类型见下方标签。虚线：估计。"
  },
  "langSwitch": "切换英文",
  "soundOn": "声音开",
  "soundOff": "声音关",
  "no": "编号 {n}",
  "wheelNote": "轮盘只是动画，抽到谁由活着的数量决定。",
  "over": "此生终了",
  "moreLife": "这一生的完整记录",
  "goalTitle": "这一世的目标",
  "goalDone": "目标达成：{g}",
  "goal": {
   "half": "活过一半的同类",
   "adult": "长到成年",
   "kids": "留下后代",
   "stage": "活到「{s}」"
  },
  "timing": {
   "title": "看准时机",
   "body": "让指针停在绿色里就能活下来。绿色占 {p}，正好是逃生的概率。",
   "btn": "停"
  }
 },
 "en": {
  "title": "Next Life",
  "langName": "English",
  "heroSub": "Next Life",
  "navBook": "Book of lives",
  "navHome": "Home",
  "heroEyebrow": "Be reborn, at the odds of who is alive right now",
  "bignum": "You are <b>1</b> of {digits}",
  "lede": "About <b class=\"mono\">{total}</b> animals are alive on Earth right now. In your next life you become one of them at random and live it from birth to death. The chance of being human is vanishingly small.",
  "ifNow": "If you were reborn right now",
  "other": "Other",
  "oddsNote": "The other {n} species together make up {rest}. Your chance of being born human is {human}.",
  "pickLabel": "Species",
  "go": "Be reborn",
  "allSpecies": "All species",
  "legend": "Sorted by how many are alive now. <span class=\"conf low\">rough</span> means only an order-of-magnitude guess, possibly off by 10× or more; <span class=\"conf\">estimate</span> means a peer-reviewed study; <span class=\"conf\">census</span> means a census or official statistics.",
  "conf": {
   "high": "census",
   "mid": "estimate",
   "low": "rough"
  },
  "logScale": "Bars use a log scale (each step is 10×). Hover a row to see its source.",
  "modes": [
   [
    "real",
    "By living numbers",
    "Drawn by how many are alive now. Most of the time you will be a copepod or a nematode."
   ],
   [
    "vert",
    "Vertebrates only",
    "Drawn by number among fish, birds, amphibians, reptiles and mammals."
   ],
   [
    "mammal",
    "Mammals only",
    "Drawn by number among mammals, humans included."
   ],
   [
    "even",
    "Every species equal",
    "Ignores numbers; every species is equally likely."
   ],
   [
    "pick",
    "Choose a species",
    "Pick the species yourself."
   ]
  ],
  "odds": "Odds {p}",
  "kind": {
   "wild": "Wild",
   "farmed": "Farmed",
   "pet": "Domestic",
   "human": "Human"
  },
  "unit": {
   "hour": "hour",
   "day": "day",
   "week": "week",
   "month": "month",
   "year": "year"
  },
  "birthHead": "Birth",
  "fSex": "Sex",
  "fKind": "Kind",
  "fAlive": "Alive right now",
  "fOdds": "Odds of this rebirth",
  "fMature": "Chance of reaching breeding age (estimated)",
  "fMax": "Maximum lifespan",
  "fSize": "Size",
  "fTick": "One step of time",
  "human": "Human",
  "cmpAlive": "Alive right now",
  "sources": "Population source: {src}.",
  "begin": "Begin this life",
  "reroll": "Draw again",
  "openingEyebrow": "A choice before birth",
  "decision": "Decision",
  "crisis": "Life or death",
  "enterStage": "You enter a new stage: {s}.",
  "starve": {
   "short": "Starvation",
   "text": "You had gone without food for a long time. Your body slowly stopped."
  },
  "oldAge": {
   "short": "Old age",
   "text": "You lived to the very end of what your kind can live."
  },
  "death": {
   "short": "Death",
   "text": "You died."
  },
  "quiet": [
   "Nothing worth noting happened over the next {d}.",
   "{d} passed.",
   "Another {d} went by, much like the last.",
   "For the next {d}, everything stayed the same.",
   "For {d}, you simply lived.",
   "A long stretch, {d}, with nothing to record.",
   "{d} passed, and you were still here.",
   "Another quiet {d}."
  ],
  "actions": {
   "instinct": [
    "Follow instinct",
    "Do nothing in particular; live the way your kind usually lives."
   ],
   "forage": [
    "Forage",
    "Spend more time finding food. You eat well, but you are more exposed."
   ],
   "hide": [
    "Hide",
    "Stay somewhere safe. Hard to find, but you barely eat."
   ],
   "rest": [
    "Rest",
    "Move little and recover your strength."
   ],
   "explore": [
    "Explore",
    "Go somewhere new. You may find better food, or more danger."
   ],
   "mate": [
    "Breed",
    "Put your energy into leaving offspring. Costly, and riskier."
   ]
  },
  "mateMale": "You mated. Around {n} of the young that follow are yours.",
  "mateFemale": "You bred and left {n} offspring.",
  "nthBrood": "Brood {k}: {line}",
  "crisisTitle": [
   "Danger: {c}",
   "Again: {c}",
   "A close call: {c}",
   "Facing it again: {c}"
  ],
  "crisisNth": " (time {n})",
  "crisisBody": [
   "You have a split second to react.",
   "There is no time to think.",
   "The body moves before the mind.",
   "Again, only a split second."
  ],
  "flee": [
   "Flee",
   "Turn and run",
   "Burst away",
   "Flee the other way"
  ],
  "fleeHint": "Better odds when healthy · about {p}% survive",
  "fleeOk": [
   "You got away. It took a long time to calm down.",
   "You escaped. Nothing followed.",
   "You bolted, and stopped only much later.",
   "You escaped again, more tired than before."
  ],
  "freeze": [
   "Freeze",
   "Go still",
   "Press flat",
   "Hold still"
  ],
  "freezeHint": "Down to luck · about {p}% survive",
  "freezeOk": [
   "You stayed still. The danger passed by.",
   "It never noticed you.",
   "You waited until it was quiet again.",
   "It did not see you this time either."
  ],
  "autoChose": "{d}: (auto) {o}",
  "youChose": "{d}: you chose \"{o}\"",
  "dormant": "You spent {d} dormant. In that time your body barely aged.",
  "stat": {
   "health": "Health",
   "food": "Food",
   "safety": "Safety",
   "offspring": "Offspring"
  },
  "riskNote": "Risk of death {dir} for the next {d}",
  "riskDown": "lower",
  "riskUp": "higher",
  "youChoseHead": "You chose",
  "continue": "Continue this life",
  "pause": "❚❚ Pause",
  "resume": "▶ Resume",
  "ff": "Next decision »",
  "stepMode": "Step by step",
  "stepModeTip": "Advance one step at a time yourself",
  "auto": "Auto-decide",
  "quit": "Leave this life",
  "hint": {
   "foodUp": "Food↑",
   "foodDown": "Food↓",
   "riskUp": "Risk↑",
   "riskDown": "Risk↓",
   "stamina": "Stamina↑",
   "events": "Encounters↑"
  },
  "cantAct": "You are still at this stage: {s}. There is nothing you can do yet. Time passes a little faster.",
  "stepBtn": "Take one step (1 {u}) ▸",
  "toInstinct": [
   "You stop trying anything in particular and follow instinct.",
   "You drop your plan and live as usual.",
   "You fall back into instinct."
  ],
  "toAction": [
   "You turn to this: {a}.",
   "You spend your time on this: {a}.",
   "Next: {a}.",
   "You change how you live: {a}."
  ],
  "bioAge": " · biological age {d}",
  "sub": "{sp} · {st} · 1 step = 1 {u} · year {y}{bio}",
  "fStage": "Stage",
  "fKids": "Offspring",
  "sibsLeft": "{label}, still alive",
  "sibsDefault": "Born in the same batch",
  "sibsOnly": "By this survival curve, the rest of your batch is probably dead.",
  "sibsPct": "By the survival curve, about {p} of your batch is still alive.",
  "onlyChild": "You were born alone.",
  "deadTag": " · dead",
  "ended": "This life is over",
  "lived": "You lived {d}",
  "toRecord": "Look back on this life",
  "curveAria": "Survival curve for this species",
  "you": "you",
  "dormantCell": "dormant",
  "deathCell": "death",
  "spent": "How you spent this life",
  "byTicks": "by steps of time",
  "share": "In this life I was {art} {sp}. I lived {d}. Cause of death: {c}.\n{strip}\n{data}\nWhat will you be? {url}",
  "humanSame": "A human baby born at the same moment has about a <b class=\"mono\">{p}</b> chance of living past {d}.",
  "deathHead": "Record of a life",
  "deathLine": "{y0} – {y1} · lived {d}{bio} · died as: {st}",
  "deathBio": " (biological age {d})",
  "fCause": "Cause of death",
  "fChoices": "Decisions made",
  "fEscapes": "Narrow escapes",
  "times": "{n}",
  "sibsLonger": "{label}: <span class=\"mono\">{n}</span> in all. By the survival curve, about <b class=\"mono\">{p}</b> of them outlived you.",
  "kindLonger": "By the survival curve, about <b class=\"mono\">{p}</b> of your kind outlive you.",
  "matureLine": "About <span class=\"mono\">{p}</span> of this species reach breeding age. You {r}.",
  "madeIt": "made it",
  "didnt": "did not live to see it",
  "thisLife": "Health over this life",
  "mapLegend": "1 square = 1 step of time · colour = health",
  "curveTitle": "Survival curve",
  "curveLegend": "Share of those born who are still alive",
  "yourChoices": "Your decisions",
  "sameSecond": "Others born at the same moment",
  "byRealOdds": "drawn by living numbers",
  "companion": "{Art} {sp}: lived <span class=\"mono\">{d}</span>. {c}.",
  "shareTitle": "Share this life",
  "copy": "Copy text",
  "copied": "Copied",
  "selected": "Selected — press ⌘C / Ctrl+C to copy",
  "nextLife": "Next life",
  "invertNote": "By the numbers, about {p} of rebirths land on an invertebrate. To meet other kinds of life, change the range.",
  "again": "Be reborn again",
  "home": "Back to home",
  "bookIntro": "You have lived <span class=\"mono\">{n}</span> lives and met <span class=\"mono\">{got} / {all}</span> species. Records are kept only in this browser.",
  "livedN": "Lived {n}×",
  "notYet": "Not yet",
  "pastLives": "Past lives",
  "livedFor": "lived {d}",
  "kidsN": "{n} offspring",
  "noLives": "None yet. Go home and be reborn.",
  "fCon": "Constitution",
  "fTem": "Temperament",
  "trait": {
   "runt": "Runt (health↓ risk↑)",
   "average": "Average",
   "robust": "Robust (health↑ risk↓)",
   "bold": "Bold (forages more, takes more risks)",
   "cautious": "Cautious (hides better, eats less)",
   "curious": "Curious (runs into more while exploring)",
   "steady": "Steady"
  },
  "status": "Status",
  "record": "Life record",
  "newest": "newest first",
  "doingNow": "What are you doing now?",
  "anyTime": "Change any time · number keys",
  "whatTitle": "What is {art} {sp}?",
  "protectNote": "So that every life has choices in it, you cannot die before your fifth choice (a game rule).",
  "revealLines": [
   "Choosing your species"
  ],
  "whatIs": "What is {art} {sp}?",
  "hurtInstead": "You did not get clear. You are badly hurt, but alive.",
  "saved": [
   "One beside you died. It was almost you.",
   "The danger brushed past and took another.",
   "You came close to dying, then recovered.",
   "The one nearest to you is gone."
  ],
  "firstMove": "You can move",
  "firstMoveBody": "How will you live now? You can change this at any time.",
  "firstMoveDone": "You live on that way.",
  "encounter": "Something happens",
  "savesLine": "By this survival curve, about {p} of your kind live shorter than you did. The five-choice protection stopped {n} deaths.",
  "shareCardMade": "Image of this life",
  "saveImg": "Save image",
  "copyLink": "Copy link",
  "linkCopied": "Link copied",
  "sysShare": "Share",
  "toX": "Post to X",
  "toWeibo": "Post to Weibo",
  "imgSaved": "Saved",
  "imgHold": "Long-press or right-click the image to save it",
  "friendHead": "A life a friend shared with you",
  "cardLead": "In this life I was",
  "friendGo": "Be reborn too",
  "friendHome": "Home",
  "myLife": "One of your lives",
  "vsTitle": "Your two lives",
  "vsYou": "You",
  "vsThem": "Friend",
  "vsLived": "Lived",
  "vsKids": "Offspring",
  "vsRare": "Odds of this birth",
  "bookShare": "Share",
  "enc": [
   [
    "An unfamiliar smell",
    "A smell you do not know. It may be food.",
    [
     "Go closer",
     "Food↑ Risk↑",
     {
      "food": 18
     },
     1.25,
     "It is something to eat."
    ],
    [
     "Go around",
     "Safety↑ Food↓",
     {
      "safety": 10,
      "food": -4
     },
     0.85,
     "You keep away."
    ]
   ],
   [
    "One of your kind ahead",
    "It holds the way and does not move.",
    [
     "Push past",
     "Food↑ Health↓",
     {
      "food": 12,
      "health": -6
     },
     1.1,
     "You push past."
    ],
    [
     "Let it go first",
     "Safety↑",
     {
      "safety": 8
     },
     0.9,
     "It leaves, and you move on."
    ]
   ],
   [
    "The last of the food",
    "Only a little is left here.",
    [
     "Eat it now",
     "Food↑",
     {
      "food": 14
     },
     1,
     "You finish it."
    ],
    [
     "Eat slowly",
     "Health↑ Food↑",
     {
      "health": 5,
      "food": 4
     },
     0.95,
     "You eat slowly and rest a while."
    ]
   ],
   [
    "Two directions",
    "Either way is possible.",
    [
     "The open side",
     "Food↑ Risk↑",
     {
      "food": 8
     },
     1.05,
     "There is a little more food there."
    ],
    [
     "The sheltered side",
     "Safety↑",
     {
      "safety": 6
     },
     1,
     "It is quieter there."
    ]
   ],
   [
    "Sudden quiet",
    "Everything around you goes still.",
    [
     "Leave at once",
     "Safety↑ Health↓",
     {
      "health": -4,
      "safety": 14
     },
     0.8,
     "Something passes where you had been."
    ],
    [
     "Stay",
     "Food↑ Risk↑",
     {
      "food": 10
     },
     1.25,
     "Nothing happens. You go on feeding."
    ]
   ],
   [
    "A light touch",
    "Something brushes against you.",
    [
     "Investigate",
     "Food↑ Risk↑",
     {
      "safety": -6,
      "food": 12
     },
     1.2,
     "A small scrap you can eat."
    ],
    [
     "Move away",
     "Safety↑",
     {
      "safety": 10
     },
     0.85,
     "You do not stay to find out."
    ]
   ],
   [
    "Conditions are changing",
    "It feels different from before.",
    [
     "Take shelter early",
     "Safety↑ Food↓",
     {
      "safety": 14,
      "food": -8
     },
     0.75,
     "You shelter until it settles."
    ],
    [
     "Stay a little longer",
     "Food↑ Risk↑",
     {
      "food": 16
     },
     1.25,
     "You feed a while longer, then leave."
    ]
   ],
   [
    "A good place, taken",
    "It is safe here, but occupied.",
    [
     "Contest it",
     "Safety↑ Health↓",
     {
      "safety": 12,
      "health": -6
     },
     1.05,
     "After a standoff you stay at the edge."
    ],
    [
     "Leave",
     "Health↑",
     {
      "health": 5
     },
     0.95,
     "You save your strength."
    ]
   ],
   [
    "Feeling weak",
    "You have little strength.",
    [
     "Rest",
     "Health↑ Food↓",
     {
      "health": 12,
      "food": -6
     },
     0.85,
     "Rest helps."
    ],
    [
     "Carry on",
     "Food↑ Health↓",
     {
      "food": 10,
      "health": -8
     },
     1.2,
     "You get through it, more tired."
    ]
   ],
   [
    "Movement nearby",
    "Something may be approaching.",
    [
     "Stop and watch",
     "Safety↑ Risk↑",
     {
      "safety": 8
     },
     1.2,
     "It does not come closer."
    ],
    [
     "Slip away",
     "Safety↑",
     {
      "safety": 6
     },
     0.9,
     "You move off."
    ]
   ],
   [
    "Already full",
    "Some food is left.",
    [
     "Keep eating",
     "Food↑ Risk↑",
     {
      "food": 20,
      "health": -4
     },
     1.15,
     "You stop only when heavy."
    ],
    [
     "Stop",
     "Health↑",
     {
      "health": 6
     },
     0.9,
     "You leave the food."
    ]
   ],
   [
    "A quiet spell",
    "Nothing needs doing.",
    [
     "Rest",
     "Health↑",
     {
      "health": 8
     },
     0.9,
     "You stay still for a while."
    ],
    [
     "Move around",
     "Food↑ Risk↑",
     {
      "food": 10
     },
     1.15,
     "You find a little to eat."
    ]
   ]
  ],
  "outlived": "Outlived {p} of my kind",
  "outlivedNote": "Estimated from the survival curve the game uses",
  "evData": "Evidence",
  "basis": {
   "measured": "Measured",
   "official": "Official statistics",
   "related": "Related species or lab",
   "est": "Estimate",
   "rule": "Game rule"
  },
  "why": {
   "title": "Why did this happen?",
   "when": "Why now",
   "base": "In this stage ({s}), the base chance of dying in one {u} is {p}.",
   "noCurve": "No reliable measurement was found for this age, so an estimated curve is used.",
   "factors": "Multiplied by your situation at the time:",
   "noFactors": "Nothing else was affecting it.",
   "final": "Together, the chance of dying in that {u} was {p}.",
   "crisis": "In the moment of danger you chose \"{t}\", with a {p} chance of surviving. It failed.",
   "choice": "The step \"{t}\" carried a {p} chance of death.",
   "limit": "You reached the maximum lifespan set in the game ({d}).",
   "health": "Your health reached zero.",
   "cause": "Why this cause: {c}",
   "share": "In this stage ({s}), about {p} of deaths in the game are from this cause.",
   "noShareButReal": "This cause is real, but no figure was found for how common it is; the share is an estimate.",
   "noShare": "No reliable figure was found for how common this cause is; the share is an estimate.",
   "related": "Research related to this life",
   "legend": "Green comes from measurements of this species or official statistics. Blue is a rule made so the game can be played, not a scientific finding.",
   "allSources": "See all sources",
   "lowHealth": "Low health ({n})",
   "highHealth": "Good health ({n})",
   "lowFood": "Hunger (food {n})",
   "lowSafety": "Exposed (safety {n})",
   "ruleRisk": "death rate ×{x}",
   "ruleKill": "this step carries a {p} chance of death"
  },
  "src": {
   "nav": "Data",
   "title": "Data and sources",
   "intro": "{refs} sources are listed here, covering {n} of {all} species. For each, a program opened the text or abstract and confirmed the quoted sentence is in it. Numbers not listed are estimates or game rules.",
   "how": "What the labels mean",
   "measured": "Measured directly in this species.",
   "official": "Statistics published by a government or international body.",
   "related": "From a related species, a laboratory or a different setting; a guide only.",
   "est": "No reliable data found; estimated by the makers.",
   "rule": "A rule made so the game can be played. For example, death-rate multipliers: forage ×{forage}, hide ×{hide}, rest ×{rest}, explore ×{explore}, breed ×{mate}; no death before the fifth choice; the effects of birth circumstances, constitution and temperament. In a crisis you stop a marker; the green part is as wide as the odds, so a quick player can outlive the statistics.",
   "line": "{surv} survival intervals with data · {causes}/{all} causes with evidence · {refs} sources",
   "surv": "Survival",
   "noSurv": "No reliable survival data found; the whole curve is an estimate.",
   "facts": "Facts",
   "curveKey": "Solid green: ages backed by published data (see the label below). Dashed: estimate."
  },
  "langSwitch": "Switch to Chinese",
  "soundOn": "Sound on",
  "soundOff": "Sound off",
  "no": "No. {n}",
  "wheelNote": "The wheel is only for show. Who you become depends on living numbers.",
  "over": "Life over",
  "moreLife": "The full record of this life",
  "goalTitle": "Goals for this life",
  "goalDone": "Goal reached: {g}",
  "goal": {
   "half": "Outlive half your kind",
   "adult": "Reach adulthood",
   "kids": "Leave offspring",
   "stage": "Reach the stage: {s}"
  },
  "timing": {
   "title": "Time it",
   "body": "Stop the marker in the green to survive. Green covers {p}, exactly your odds of escape.",
   "btn": "Stop"
  }
 }
};
window.ODDS_SRC_EN = {
 "copepod": "Widely repeated order-of-magnitude estimate (Geoff Boxshall gives ~1.3×10²¹); no peer-reviewed census",
 "nematode": "van den Hoogen et al. 2019, Nature (soil nematodes)",
 "mite": "Rosenberg et al. 2023, Science Advances: ~10¹⁹ soil arthropods, mostly mites and springtails; the split between them is a rough guess",
 "springtail": "Rosenberg et al. 2023, Science Advances; split is a rough guess",
 "aphid": "Rough ~10¹⁸ \"other insects\", represented by aphids",
 "mayfly": "No reliable global count; an illustrative share for aquatic insects",
 "ant": "Schultheiss et al. 2022, PNAS (~20 quadrillion)",
 "lanternfish": "Irigoien et al. 2014, Nature Communications: median mesopelagic fish biomass ~11–15 billion tonnes, converted by body mass (rough)",
 "krill": "Atkinson et al. 2009, Deep-Sea Research I: ~8×10¹⁴ krill (≈379 million tonnes, 1926–2004 average)",
 "mosquito": "Popular estimate (~110 trillion); no systematic census",
 "sardine": "Rough order of magnitude for wild fish other than mesopelagics, represented by sardines",
 "honeybee": "FAO: ~90 million managed colonies × 20–30 thousand bees each",
 "farmed_shrimp": "Waldhorn & Autric (Rethink Priorities): ~230 billion on farms at any moment (90% range 150–370 billion)",
 "farmed_carp": "Fishcount: 73–180 billion farmed fish alive at any time (2015 data), represented by carp",
 "sparrow": "Callaghan et al. 2021, PNAS: ~50 billion wild birds; resident species represented by the house sparrow",
 "swallow": "Callaghan et al. 2021, PNAS; migratory species represented by the barn swallow",
 "broiler": "FAO (2021): ~25.9 billion chickens; broilers are the majority, the broiler/layer split is estimated",
 "rat": "Rough order of magnitude for wild rodents, represented by the brown rat",
 "human": "UN World Population Prospects 2024",
 "layer_hen": "Compassion in World Farming 2023 review: ~7.9 billion laying hens in 2020",
 "cattle": "FAO (2021): ~1.5 billion",
 "sheep": "FAO (2021): ~1.3 billion",
 "pig": "FAO (2021): ~1 billion",
 "dog": "Gompper (2014): close to 1 billion dogs; reviews estimate ~3/4 are free-ranging; 900 million used here",
 "cat": "Common estimate of ~600 million (pets + strays)",
 "sea_turtle": "Green turtle: no reliable global total (Seminoff 2004 counts nesting-female indices only); rough estimate including juveniles",
 "elephant": "IUCN African Elephant Specialist Group 2016: ~415,000",
 "greenland_shark": "No reliable count; 100,000 assumed here",
 "blue_whale": "IUCN Red List (Cooke 2018): 5,000–15,000 mature individuals, 10–25 thousand in total",
 "panda": "4th national giant panda survey (2015): 1,864 wild (~1,900 per 2024 official figures); 728 in captivity at end of 2023",
 "termite": "Rosenberg et al. 2023: termites are ~40% of soil arthropod biomass (~200 million t dry); at ~1 mg per worker, ~10¹⁷ (rough)",
 "earthworm": "Phillips et al. 2019, Science: typical density 5–150 per m²; ~50 × ~100 million km² of land ≈ 5×10¹⁵ (rough)",
 "spider": "Nyffeler & Birkhofer 2017: ~25 million tonnes of spiders; at ~5 mg each ≈ 5×10¹⁵ (rough)",
 "housefly": "No global estimate exists; 10¹³ assumed as an order of magnitude",
 "squid": "No global squid count; Southern Ocean squid alone were once estimated at up to 100 million tonnes (1994), ≈10¹¹ at a few hundred grams each (rough)",
 "octopus": "No count; order of magnitude inferred from ~380,000 t annual common-octopus catch at 1–2 kg each (rough)",
 "frog": "No global count of amphibians (~8,700 described species); 10¹¹ assumed as an order of magnitude",
 "salmon": "Ruggerone et al. 2010: ~500 million wild pink, chum and sockeye adults per year, 1990–2005 (juveniles not included)",
 "duck": "FAO (secondary): ~1.1 billion ducks, ~670 million of them in China (2021)",
 "goat": "FAOSTAT (2020): ~1.13 billion",
 "pigeon": "BirdLife (citing Rich et al. 2004): ~260 million rock pigeons, wild and feral",
 "penguin": "Fretwell et al. 2012, PLoS ONE: ~238,000 breeding pairs by satellite; ~500–600 thousand including young",
 "bat": "Greenspoon et al. 2023, PNAS: bats are ~2/3 of all wild land mammals by count; ~50 billion as commonly cited",
 "wolf": "IUCN 2018 (cited): ~200–250 thousand grey wolves",
 "chimpanzee": "WWF: ~150–250 thousand wild chimpanzees",
 "lion": "CMS (citing the African Lion Database 2023): ~23,000 adult and subadult lions in Africa"
};

;
// Plain-language "what is it", per species: [zh, en]
window.ABOUT = {
 "copepod": [
  "芝麻大小的甲壳动物，几乎每片海洋和池塘里都有。它们吃浮游植物，小鱼吃它们，是海洋食物网的底层。读作 ráo zú lèi，“桡”是船桨，指它划水的腿。动画《海绵宝宝》里的痞老板就是一只桡足类。",
  "A sesame-sized crustacean found in nearly every sea and pond. It eats plankton and small fish eat it, which puts it near the base of the ocean food web. Pronounced COH-puh-pod, “oar-foot”. Plankton in SpongeBob is a copepod."
 ],
 "nematode": [
  "细得肉眼看不见的小虫，不是蚯蚓。你脚下随便一把土里就有成千上万条。",
  "A worm too thin to see, and not an earthworm. Any handful of soil holds thousands."
 ],
 "mite": [
  "针尖大的八条腿小东西，蜘蛛的远亲，住在落叶堆里吃烂叶子和真菌。不是床上那种尘螨。",
  "A pinpoint-sized, eight-legged relative of spiders that eats dead leaves and fungus. Not the kind in your mattress."
 ],
 "springtail": [
  "土里的六条腿小家伙，肚子下面折着一根弹簧，遇险一弹就没影。花盆浇水时蹦出来的小点，常常就是它。",
  "A tiny six-legged soil dweller with a spring folded under its belly. Those specks that jump when you water a plant are often springtails."
 ],
 "aphid": [
  "菜叶背面一堆堆的小绿虫，靠吸植物汁液过活，夏天不用交配就能直接生女儿。",
  "Those little green bugs clustered under leaves. They drink plant sap, and all summer they give birth to daughters without mating."
 ],
 "mayfly": [
  "先在河底当一年左右的稚虫，变成会飞的成虫以后，通常只活几个小时到一两天，而且没有能用的嘴。",
  "Spends about a year on the riverbed, then grows wings and lasts a few hours to a day or two, with no working mouth."
 ],
 "termite": [
  "不是白色的蚂蚁，是蟑螂的近亲。一大窝住在一起，靠肠道里的微生物消化木头。",
  "Not a white ant; it’s a close relative of cockroaches. Lives in huge colonies and digests wood with help from gut microbes."
 ],
 "ant": [
  "蚁群里干活的雌蚁，不生育。年轻时在窝里带孩子，年纪大了才派出去找吃的。",
  "A sterile female who does the colony’s work: nursery duty when young, sent outside to find food when old."
 ],
 "honeybee": [
  "蜂巢里的工蜂，全是姐妹。夏天的一辈子大约三到六周：扫地、带娃、盖房、站岗，最后出门采蜜。",
  "A worker bee; they’re all sisters. A summer life is three to six weeks of cleaning, nursing, building, guarding, and finally foraging."
 ],
 "mosquito": [
  "腿上一圈圈白花纹的“花蚊子”。只有雌蚊吸血，为了产卵；雄蚊只喝花蜜。",
  "The stripy-legged Asian tiger mosquito. Only females drink blood, to make eggs; males live on nectar."
 ],
 "krill": [
  "约六厘米长的透明甲壳动物，像虾但不是虾，大群生活。南极的鲸、企鹅和海豹大多以它为食。",
  "A see-through crustacean about 6 cm long, shrimp-like but not a shrimp. Lives in huge swarms that feed Antarctic whales, penguins and seals."
 ],
 "lanternfish": [
  "手指长的小鱼，肚皮上自带灯。白天躲在几百米深的黑暗里，晚上游上来吃饭，天亮再回去。",
  "A finger-long fish with lights on its belly. Hides hundreds of metres down by day, swims up to eat at night, goes back at dawn."
 ],
 "sardine": [
  "爱扎堆的小海鱼，海里的大家伙几乎都吃它，人也吃，还装成罐头。",
  "A small fish that lives in crowds. Nearly everything bigger in the sea eats it. So do we, from tins."
 ],
 "squid": [
  "这里说的是太平洋褶柔鱼，就是常见的那种鱿鱼。长得飞快，只活一年左右，繁殖一次就死。",
  "The Japanese flying squid, a common eating squid. Grows fast, lives about a year, breeds once, dies."
 ],
 "octopus": [
  "无脊椎动物，会变色、喷墨、挤过很窄的缝。独居，寿命一到两年。",
  "An invertebrate that changes colour, squirts ink and squeezes through narrow gaps. Solitary; lives one to two years."
 ],
 "farmed_shrimp": [
  "餐桌上最常见的养殖虾，也叫南美白对虾。在池塘里挤着长大，三四个月就收。",
  "The most common farmed shrimp on the table. Raised crowded in ponds, harvested after three or four months."
 ],
 "farmed_carp": [
  "中国池塘里最常见的家鱼之一，吃草长大。",
  "Grass carp, one of China’s most common pond fish. It really does eat grass."
 ],
 "frog": [
  "水田和池塘边常见的青蛙。先当蝌蚪，再长腿丢尾巴，冬天钻进泥里睡一觉。",
  "A common pond frog. Starts as a tadpole, grows legs, loses the tail, sleeps the winter in mud."
 ],
 "salmon": [
  "在河里出生，去海里长大，几年后一路游回老家的河里产卵，然后死去。",
  "Born in a river, grows up at sea, swims all the way home years later to spawn, then dies."
 ],
 "sea_turtle": [
  "从沙坑里爬出来，得先跑过螃蟹和海鸟才能下水。长大要二三十年，成年后主要吃海草。",
  "Hatches in sand and has to outrun crabs and birds to reach the sea. Takes decades to grow up, then mostly eats seagrass."
 ],
 "greenland_shark": [
  "北极深海里的大鲨鱼，已知最长寿的脊椎动物，可能活到近四百岁，一百五十岁左右才成年。游得比人散步还慢。",
  "A huge shark of cold deep water and the longest-lived vertebrate known: perhaps nearly 400 years, adult at about 150. Slower than a strolling human."
 ],
 "blue_whale": [
  "已知地球上有过的最大的动物，以几厘米长的磷虾为食。",
  "The largest animal known to have lived, feeding on krill a few centimetres long."
 ],
 "sparrow": [
  "街上最常见的小麻雀，住屋檐，吃谷子和小虫。",
  "The little brown bird on every street. Nests under roofs, eats seeds and bugs."
 ],
 "swallow": [
  "尾巴像剪刀的小鸟，春天在屋檐下用泥筑巢，秋天飞去几千公里外过冬。",
  "The bird with the scissor tail. Builds a mud nest under your roof in spring, flies thousands of kilometres in autumn."
 ],
 "pigeon": [
  "广场上那种灰鸽子。祖先被人驯养过，后来又跑回了街上。",
  "The grey bird in every square. Its ancestors were domesticated, then went back to the streets."
 ],
 "penguin": [
  "体型最大的企鹅，在南极的冬天繁殖。雄企鹅把蛋放在脚上孵约两个月，期间不进食。",
  "The largest penguin, breeding in the Antarctic winter. Males incubate the egg on their feet for about two months without eating."
 ],
 "duck": [
  "养来吃肉的鸭子，出壳六七周就出栏，很多一辈子没游过泳。",
  "A duck raised for meat, slaughtered at six or seven weeks. Many never swim."
 ],
 "broiler": [
  "专门养来吃肉的鸡，生长极快，通常约六周龄屠宰。",
  "A chicken bred for meat. It grows very fast and is usually slaughtered at about six weeks."
 ],
 "layer_hen": [
  "专门下蛋的母鸡，一年能下三百来个。",
  "A hen bred for eggs: around 300 a year."
 ],
 "pig": [
  "聪明、记性好、爱拱东西，多数只活半年左右。",
  "Smart, good memory, loves to root around. Most live about six months."
 ],
 "cattle": [
  "胃分四个隔间，吃下去的草还要返回嘴里再嚼一遍。",
  "Has a four-chambered stomach and brings its lunch back up to chew again."
 ],
 "sheep": [
  "人类最早驯化的家畜之一，胆小爱扎堆，能记住几十张同伴的脸。",
  "One of the first animals people domesticated. Nervous, sociable, remembers dozens of faces."
 ],
 "goat": [
  "善于攀爬的家畜，能吃别的牲畜不吃的灌木。",
  "An agile climber that eats shrubs other livestock refuse."
 ],
 "rat": [
  "城市里最常见的大型鼠类，聪明谨慎，会长时间回避没见过的食物。",
  "The common city rat. Clever and cautious; it avoids unfamiliar food for a long time."
 ],
 "dog": [
  "人类最老的动物朋友。不过全世界的狗大多没有固定主人，在街上和村里自己过。",
  "Our oldest animal friend, though most of the world’s dogs have no fixed owner and get by on streets and in villages."
 ],
 "cat": [
  "约一万年前开始在人类村落附近生活的小型猎手，后来被驯化。今天有家养的，也有大量流浪的。",
  "A small hunter that began living around human villages about ten thousand years ago and was later domesticated. Some are pets; very many are strays."
 ],
 "bat": [
  "唯一真正会飞的哺乳动物。这里说的是屋檐缝里的小蝙蝠，用耳朵“看”路，专吃虫子。",
  "The only mammal that truly flies. This one is a small roof-dwelling bat that “sees” by ear and eats insects."
 ],
 "wolf": [
  "狗的近亲，家犬由古代的狼驯化而来。狼群通常是一对父母和它们的孩子。",
  "The closest relative of the dog, which was domesticated from ancient wolves. A pack is usually two parents and their young."
 ],
 "chimpanzee": [
  "和人类血缘最近的动物之一，会用树枝钓白蚁，生活在有复杂关系的群体里。",
  "One of our closest living relatives. Fishes for termites with sticks and lives in communities with complex relationships."
 ],
 "lion": [
  "唯一成群生活的大猫，一天大部分时间都在睡觉。",
  "The only cat that lives in groups. Asleep for most of the day."
 ],
 "elephant": [
  "陆地上最大的动物，跟着最年长的母象走，记得很远的水源。",
  "The biggest land animal. Follows the oldest female, remembers distant waterholes."
 ],
 "panda": [
  "分类上属于食肉目，却几乎只吃竹子，每天要吃十几个小时。",
  "Classified among the carnivores, yet lives almost entirely on bamboo and eats for over ten hours a day."
 ],
 "human": [
  "直立行走的灵长类，目前约 82 亿。",
  "An upright-walking primate, now numbering about 8.2 billion."
 ],
 "earthworm": [
  "下雨天路上的那种。吃土、翻土，雌雄同体，每条都既能当爸又能当妈。",
  "The kind on the pavement after rain. Eats soil, turns soil, and every one can be both mum and dad."
 ],
 "spider": [
  "会织大圆网的园蛛。八条腿，不是昆虫。",
  "An orb-weaver, the kind that spins big round webs. Eight legs, not an insect."
 ],
 "housefly": [
  "家里嗡嗡叫的那种苍蝇，天热时从卵到成虫只要一两周。",
  "The one buzzing in your house. Egg to adult in a week or two when it’s hot."
 ]
};
// Chinese measure words (default 只)
window.ABOUT_MW = {"human":"个","nematode":"条","earthworm":"条","sardine":"条","lanternfish":"条","salmon":"条","farmed_carp":"条","squid":"条","greenland_shark":"条","dog":"条","blue_whale":"头","elephant":"头","cattle":"头","pig":"头","lion":"头","wolf":"匹"};

;
// Built by data/build.js — do not edit.
window.EVIDENCE = {"ant":{"refs":{"schultheiss2022":{"a":"Schultheiss et al.","y":2022,"t":"The abundance, biomass, and distribution of ants on Earth","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.2201550119"},"riskas2026a":{"a":"Riskas et al.","y":2026,"t":"Body size predicts ant worker longevity: a hierarchical analysis of field and laboratory survival across phylogenetic lineages","s":"Proceedings of the Royal Society B Biological Sciences","u":"https://doi.org/10.1098/rspb.2025.1907"},"riskas2026b":{"a":"Riskas et al.","y":2026,"t":"Body size predicts ant worker longevity: a hierarchical analysis of field and laboratory survival across phylogenetic lineages","s":"Proceedings of the Royal Society B Biological Sciences","u":"https://doi.org/10.1098/rspb.2025.1907"},"bujan2020":{"a":"Bujan et al.","y":2020,"t":"Seasonal plasticity of thermal tolerance in ants","s":"Ecology","u":"https://doi.org/10.1002/ecy.3051"}},"survival":[],"causes":[],"causeNotes":{"heat":{"zh":"工蚁的耐热能力随季节变化：夏末的觅食蚁比春季和冬季的更耐高温。","en":"Foraging ants tolerate higher heat at the end of summer than in spring or winter.","ref":"bujan2020","basis":"related"}},"facts":[{"zh":"地球上的蚂蚁估计约 2×10^16 只（约 2 亿亿只）。","en":"About 2 × 10^16 ants are estimated to live on Earth.","ref":"schultheiss2022","basis":"related","stages":["forager"]},{"zh":"在 18 个蚁种的研究里，个头大的工蚁普遍活得更久，无论在野外还是在实验室。","en":"Across studied ant species, larger worker ants lived longer, both in the field and in captivity.","ref":"riskas2026b","basis":"related","stages":["nurse","forager","old"],"decisions":["nurse_to_forage"]},{"zh":"同一批研究中，工蚁的寿命从 23 天到 394 天不等。","en":"In that study, worker lifespans ranged from 23 to 394 days.","ref":"riskas2026a","basis":"related","stages":["forager","old"]}],"existing":{"events.19":"schultheiss2022"}},"aphid":{"refs":{"enkegaard2013":{"a":"Enkegaard et al.","y":2013,"t":"Shallot Aphids, Myzus ascalonicus, in Strawberry: Biocontrol Potential of Three Predators and Three Parasitoids","s":"Journal of Insect Science","u":"https://doi.org/10.1673/031.013.8301"},"enkegaard2013b":{"a":"Enkegaard et al.","y":2013,"t":"Shallot Aphids, Myzus ascalonicus, in Strawberry: Biocontrol Potential of Three Predators and Three Parasitoids","s":"Journal of Insect Science","u":"https://doi.org/10.1673/031.013.8301"},"michaud2018":{"a":"Michaud et al.","y":2018,"t":"Mortality of Sugarcane Aphid, Melanaphis sacchari (Zehntner, Hemiptera: Aphididae), at Low Temperatures","s":"Journal of Economic Entomology","u":"https://doi.org/10.1093/jee/toy195"}},"survival":[],"causes":[],"causeNotes":{"wasp":{"zh":"在培养皿里，寄生蜂 Aphidius ervi 刺过的蚜虫，有 79% 死亡。","en":"In petri dish tests, the parasitic wasp Aphidius ervi killed 79% of the aphids it stung.","ref":"enkegaard2013","basis":"related"},"ladybug":{"zh":"在培养皿里，二星瓢虫幼虫每天能吃掉约 25 只蚜虫。","en":"In petri dish tests, two-spotted ladybird larvae ate about 25 shallot aphids a day.","ref":"enkegaard2013b","basis":"related"},"lacewing":{"zh":"在培养皿里，草蛉三龄幼虫每天能吃掉约 35 只蚜虫。","en":"In petri dish tests, third-instar green lacewings ate about 35 shallot aphids a day.","ref":"enkegaard2013b","basis":"related"},"cold":{"zh":"在 30°C 下培养过的甘蔗蚜，在 4°C 时约半数死亡，在 0°C 时全部死亡。","en":"Sugarcane aphids conditioned at 30 °C had about 50% mortality at 4 °C and all died at 0 °C.","ref":"michaud2018","basis":"related"}},"facts":[{"zh":"在培养皿里，三种捕食者中草蛉的捕食量最大，其次是二星瓢虫。","en":"Among three predators tested in petri dishes, the green lacewing ate the most shallot aphids a day, ahead of the two-spotted ladybird.","ref":"enkegaard2013b","basis":"related","stages":["nymph","late","adult"],"causes":["lacewing","ladybug"]}],"existing":{"events.9":"remove","events.10":"remove","decisions.1":"remove"}},"bat":{"refs":{"baerwald2008_90":{"a":"Baerwald et al.","y":2008,"t":"Barotrauma is a Significant Cause of Bat Fatalities at Wind Turbines","s":"Current Biology (ScienceDaily release on the paper)","u":"https://sciencedaily.com/releases/2008/08/080825132107.htm"},"baerwald2008_half":{"a":"Baerwald et al.","y":2008,"t":"Barotrauma is a Significant Cause of Bat Fatalities at Wind Turbines","s":"Current Biology (ScienceDaily release on the paper)","u":"https://sciencedaily.com/releases/2008/08/080825132107.htm"},"frick2010_decline":{"a":"Frick et al.","y":2010,"t":"An Emerging Disease Causes Regional Population Collapse of a Common North American Bat Species","s":"Science (ScienceDaily release on the paper)","u":"https://www.sciencedaily.com/releases/2010/08/100805142945.htm"},"frick2010_extirpate":{"a":"Frick et al.","y":2010,"t":"An Emerging Disease Causes Regional Population Collapse of a Common North American Bat Species","s":"Science (ScienceDaily release on the paper)","u":"https://www.sciencedaily.com/releases/2010/08/100805142945.htm"},"frick2010_2006":{"a":"Frick et al.","y":2010,"t":"An Emerging Disease Causes Regional Population Collapse of a Common North American Bat Species","s":"Science (ScienceDaily release on the paper)","u":"https://www.sciencedaily.com/releases/2010/08/100805142945.htm"}},"survival":[],"causes":[],"causeNotes":{"turbine":{"ref":"baerwald2008_90","basis":"related","zh":"在加拿大阿尔伯塔的风电场，被检查的死蝠大多有气压伤造成的内出血。","en":"At a wind farm in Alberta, most dead bats examined had internal bleeding from pressure changes."},"wns":{"ref":"frick2010_2006","basis":"related","zh":"白鼻综合征感染冬眠的蝙蝠，2006 年在美国纽约州首次被发现。","en":"White-nose syndrome, which affects hibernating bats, was first discovered near Albany, New York in 2006."}},"facts":[{"zh":"北美东部小棕蝠的数量因白鼻综合征下降了 30% 到 99%。","en":"Little brown bat counts in the northeast US fell 30% to 99% after white-nose syndrome arrived.","ref":"frick2010_decline","basis":"related","stages":["adult","old"],"causes":["wns"]},{"zh":"估计北美东部的小棕蝠有可能在 20 年内区域性灭绝。","en":"Over 99% of northeastern little brown bats may be lost regionally within 20 years.","ref":"frick2010_extirpate","basis":"related","stages":["adult","old"],"causes":["wns"]},{"zh":"在风电场死去的蝙蝠，大多数内脏有气压伤造成的出血。","en":"Ninety percent of wind-farm bats examined had internal bleeding from pressure changes.","ref":"baerwald2008_90","basis":"related","stages":["adult","old"],"causes":["turbine"]},{"zh":"只有大约一半死于风电场的蝙蝠身上有叶片直接撞击的痕迹。","en":"Only about half of the wind-farm bats showed direct contact with the blades.","ref":"baerwald2008_half","basis":"related","stages":["adult","old"],"causes":["turbine"]},{"zh":"白鼻综合征 2006 年才在美国被首次发现。","en":"White-nose syndrome was first discovered near Albany, New York in 2006.","ref":"frick2010_2006","basis":"related","stages":["adult"],"causes":["wns"]}],"existing":{"events.6":"remove","events.17":"remove","events.18":"remove","events.23":"remove","decisions.1":"remove","decisions.4":"frick2010_decline","causes.2":"baerwald2008_90","causes.3":"remove"}},"blue_whale":{"refs":{"noaa_bw":{"a":"NOAA Fisheries","y":2024,"t":"Blue Whale","s":"NOAA Fisheries species page","u":"https://www.fisheries.noaa.gov/species/blue-whale"},"noaa_bw_diet":{"a":"NOAA Fisheries","y":2024,"t":"Blue Whale","s":"NOAA Fisheries species page","u":"https://www.fisheries.noaa.gov/species/blue-whale"},"noaa_bw_size":{"a":"NOAA Fisheries","y":2024,"t":"Blue Whale","s":"NOAA Fisheries species page","u":"https://www.fisheries.noaa.gov/species/blue-whale"},"noaa_bw_life":{"a":"NOAA Fisheries","y":2024,"t":"Blue Whale","s":"NOAA Fisheries species page","u":"https://www.fisheries.noaa.gov/species/blue-whale"},"monnahan2015":{"a":"Monnahan et al.","y":2015,"t":"Do ship strikes threaten the recovery of endangered eastern North Pacific blue whales?","s":"Marine Mammal Science","u":"https://doi.org/10.1111/mms.12157"},"atkinson2004":{"a":"Atkinson et al.","y":2004,"t":"Long-term decline in krill stock and increase in salps within the Southern Ocean","s":"Nature","u":"https://doi.org/10.1038/nature02996"},"monnahan2015_pop":{"a":"Monnahan et al.","y":2015,"t":"Do ship strikes threaten the recovery of endangered eastern North Pacific blue whales?","s":"Marine Mammal Science","u":"https://doi.org/10.1111/mms.12157"}},"survival":[],"causes":[],"causeNotes":{"ship":{"zh":"东北太平洋的蓝鲸被大船撞上的情况很多，现在的撞船数量超过了美国规定的上限。","en":"Ship strikes on eastern North Pacific blue whales are likely above legal limits set by the US.","ref":"monnahan2015","basis":"measured"},"net":{"zh":"美国渔业局列出的蓝鲸主要威胁，就是被大船撞和被渔网缠住。","en":"NOAA lists vessel strikes and entanglement in fishing gear as the primary threats blue whales face.","ref":"noaa_bw","basis":"official"},"krill":{"zh":"南大洋的磷虾密度自 1970 年代起下降，蓝鲸的主要食物也随之减少。","en":"Krill density in the southwest Atlantic, the main krill sector, has declined since the 1970s.","ref":"atkinson2004","basis":"related"}},"facts":[{"zh":"最大的蓝鲸一天可以吃掉约 6 吨磷虾。","en":"The biggest blue whales may eat up to 6 tons of krill a day.","ref":"noaa_bw_diet","basis":"official","stages":["adult"],"acts":["forage"]},{"zh":"蓝鲸的寿命估计在 80 到 90 年左右。","en":"Blue whales are estimated to live around 80 to 90 years.","ref":"noaa_bw_life","basis":"official","stages":["old"]},{"zh":"南极的蓝鲸可以长到约 110 英尺，体重超过 33 万磅。","en":"Antarctic blue whales can reach about 110 feet and weigh over 330,000 pounds.","ref":"noaa_bw_size","basis":"official","stages":["adult"],"flags":["antarctic"]},{"zh":"东北太平洋蓝鲸的种群模型估计，种群大约处在环境承载量的 97%。","en":"A population model puts eastern North Pacific blue whales at about 97% of carrying capacity.","ref":"monnahan2015_pop","basis":"measured","flags":["eastpac"]}],"existing":{"events.2":"remove","decisions.1":"remove","decisions.6":"atkinson2004"}},"broiler":{"refs":{"fvets2022":{"a":"Junghans et al.","y":2022,"t":"Data evaluation of broiler chicken rearing and slaughter-An exploratory study","s":"Frontiers in Veterinary Science","u":"https://doi.org/10.3389/fvets.2022.957786"},"psj2026death":{"a":"AL- Saeedi et al.","y":2026,"t":"Effects of broiler strain and stocking density on causes of death in broilers in Denmark","s":"Poultry Science","u":"https://doi.org/10.1016/j.psj.2026.107718"},"tvjl2026fwm":{"a":"AL-Saeedi et al.","y":2026,"t":"Causes of First-week Mortality in Slower- and Fast-Growing Danish Broilers","s":"The Veterinary Journal","u":"https://doi.org/10.1016/j.tvjl.2026.106979"},"avpath2020":{"a":"Grafl et al.","y":2020,"t":"Risks and disease aetiologies of compromised performance in commercial broilers kept at lower stocking density and limited antimicrobial use","s":"Avian Pathology","u":"https://doi.org/10.1080/03079457.2020.1805411"},"ps2015dof":{"a":"Kittelsen et al.","y":2015,"t":"A comparison of post-mortem findings in broilers dead-on-farm and broilers dead-on-arrival at the abattoir","s":"Poultry Science","u":"https://doi.org/10.3382/ps/pev294"},"ani2025legs":{"a":"Kang","y":2025,"t":"Effectual Environmental Enrichments for Commercial Broiler Chickens","s":"Animals","u":"https://doi.org/10.3390/ani15192829"},"jast2026transport":{"a":"Lee et al.","y":2026,"t":"Optimizing broiler transport under hot-climate conditions: interventions across pre-transport, in-transit, and post-transport stages","s":"Journal of Animal Science and Technology","u":"https://doi.org/10.5187/jast.2600011"},"ps2014growth":{"a":"Zuidhof et al.","y":2014,"t":"Growth, efficiency, and yield of commercial broilers from 1957, 1978, and 2005","s":"Poultry Science","u":"https://doi.org/10.3382/ps.2014-04291"},"ps2015transport":{"a":"Kittelsen et al.","y":2015,"t":"A comparison of post-mortem findings in broilers dead-on-farm and broilers dead-on-arrival at the abattoir","s":"Poultry Science","u":"https://doi.org/10.3382/ps/pev294"},"fvets2022age":{"a":"Junghans et al.","y":2022,"t":"Data evaluation of broiler chicken rearing and slaughter-An exploratory study","s":"Frontiers in Veterinary Science","u":"https://doi.org/10.3389/fvets.2022.957786"}},"survival":[{"from":0,"to":7,"surv":0.9934,"ref":"fvets2022","basis":"measured","zh":"这批德国肉鸡头一周的死亡率只有 0.66%，约 99% 活了下来。","en":"About 99% of these German broilers survived the first week."},{"from":7,"to":37,"surv":0.979,"ref":"fvets2022","basis":"measured","zh":"这批德国肉鸡从第 7 天到屠宰前，存活率约 98%。","en":"After the first week, about 98% of these broilers survived to slaughter."}],"causes":[{"stages":["grow"],"shares":{"heart":0.81},"ref":"psj2026death","basis":"measured","zh":"在丹麦，屠宰前死在农场里的肉鸡，81% 是心血管衰竭。","en":"Among Danish broilers that died on the farm, 81% showed cardiovascular collapse."}],"causeNotes":{"infect":{"zh":"大肠杆菌病是影响肉鸡健康和生产的最重要的感染性疾病之一。","en":"In commercial flocks, colibacillosis had the largest negative impact on health and productivity at all ages.","ref":"avpath2020","basis":"measured"},"leg":{"zh":"腿部健康问题是商品肉鸡淘汰和后期死亡的主要原因之一。","en":"Leg problems are a leading cause of culling and late mortality in commercial broilers.","ref":"ani2025legs","basis":"related"},"heat":{"zh":"炎热气候下运输肉鸡，热应激和死亡率都会升高。","en":"Hot-climate transport raises heat stress and mortality in broilers.","ref":"jast2026transport","basis":"related"},"transport":{"zh":"运输途中到达屠宰场前就死亡的肉鸡，会带来动物福利和经济损失。","en":"Birds dying in transit to the abattoir raise welfare concerns and cause economic losses.","ref":"ps2015transport","basis":"measured"},"heart":{"zh":"在丹麦，屠宰前死在农场里的肉鸡，81% 是心血管衰竭。","en":"Among Danish broilers that died on the farm, 81% showed cardiovascular collapse.","ref":"psj2026death","basis":"measured"}},"facts":[{"zh":"这批德国 Ross 308 肉鸡平均在 37 日龄屠宰。","en":"In this German study, the average slaughter age was 37 days.","ref":"fvets2022age","basis":"measured","stages":["finish"]},{"zh":"丹麦农场里死亡的肉鸡中，81% 是心血管衰竭。","en":"On Danish farms, 81% of dead broilers showed cardiovascular collapse.","ref":"psj2026death","basis":"measured","stages":["grow","finish"],"causes":["heart"]},{"zh":"在农场死亡的肉鸡中，24.0% 有腹水。","en":"Among broilers dead on farm, 24.0% had ascites.","ref":"ps2015dof","basis":"measured","stages":["finish"],"causes":["heart"]},{"zh":"从 1957 年到 2005 年，肉鸡的生长速度提高了 400% 以上。","en":"From 1957 to 2005, broiler growth increased by over 400%.","ref":"ps2014growth","basis":"measured","stages":["grow","finish"]},{"zh":"丹麦的头一周死亡鸡雏中，大肠杆菌是分离出的最常见细菌，占 62.4%。","en":"The most common bacterium isolated from Danish broiler chicks was E. coli, at 62.4%.","ref":"tvjl2026fwm","basis":"measured","stages":["chick","brood"],"causes":["infect"]}],"existing":{"events.4":"remove","events.5":"remove","events.6":"remove","events.7":"remove","decisions.1":"remove"}},"cat":{"refs":{"loss2013":{"a":"Loss et al.","y":2013,"t":"The impact of free-ranging domestic cats on wildlife of the United States","s":"Nature Communications","u":"https://doi.org/10.1038/ncomms2380"},"teng2024_le":{"a":"Teng et al.","y":2024,"t":"Life tables of annual life expectancy and risk factors for mortality in cats in the UK","s":"Journal of Feline Medicine and Surgery","u":"https://doi.org/10.1177/1098612x241234556"},"teng2024_sex":{"a":"Teng et al.","y":2024,"t":"Life tables of annual life expectancy and risk factors for mortality in cats in the UK","s":"Journal of Feline Medicine and Surgery","u":"https://doi.org/10.1177/1098612x241234556"},"teng2024_entire":{"a":"Teng et al.","y":2024,"t":"Life tables of annual life expectancy and risk factors for mortality in cats in the UK","s":"Journal of Feline Medicine and Surgery","u":"https://doi.org/10.1177/1098612x241234556"},"teng2024_sphynx":{"a":"Teng et al.","y":2024,"t":"Life tables of annual life expectancy and risk factors for mortality in cats in the UK","s":"Journal of Feline Medicine and Surgery","u":"https://doi.org/10.1177/1098612x241234556"},"gunther2011":{"a":"Gunther et al.","y":2011,"t":"Demographic differences between urban feeding groups of neutered and sexually intact free-roaming cats following a trap-neuter-return procedure","s":"Journal of the American Veterinary Medical Association","u":"https://doi.org/10.2460/javma.238.9.1134"},"pacini2023":{"a":"Pacini et al.","y":2023,"t":"Feline Parvovirus Lethal Outbreak in a Group of Adult Cohabiting Domestic Cats","s":"Pathogens","u":"https://doi.org/10.3390/pathogens12060822"},"sullivan2026":{"a":"Sullivan et al.","y":2026,"t":"Trauma, particularly vehicular strikes, causes substantial years of life lost in dogs and cats","s":"Journal of the American Veterinary Medical Association","u":"https://doi.org/10.2460/javma.26.05.0398"}},"survival":[],"causes":[],"causeNotes":{"panleuk":{"zh":"猫瘟主要伤害小猫和没打过疫苗的猫，常常是致命的。","en":"Feline panleukopenia mainly affects kittens and unvaccinated cats.","ref":"pacini2023","basis":"related"},"car":{"zh":"车祸是猫的重要死因之一，会让猫损失很多年的寿命。","en":"Vehicle strikes cause substantial years of life lost in dogs and cats.","ref":"sullivan2026","basis":"measured"}},"facts":[{"zh":"英国的宠物猫出生时的平均预期寿命约为 11.74 年。","en":"Life expectancy at birth for UK companion cats was 11.74 years.","ref":"teng2024_le","basis":"measured","stages":["kitten","adult"]},{"zh":"在英国，雌猫的平均寿命比雄猫多约 1.33 年。","en":"Female UK pet cats lived 1.33 years longer on average than males.","ref":"teng2024_sex","basis":"measured","stages":["adult","old"]},{"zh":"在英国的宠物猫中，没有绝育的猫寿命更短。","en":"In UK pet cats, being entire, meaning not neutered, was linked to a shorter lifespan.","ref":"teng2024_entire","basis":"measured","stages":["adult","old"],"decisions":["neuter"]},{"zh":"在英国分析的品种中，斯芬克斯猫的预期寿命最短，约 6.68 年。","en":"Sphynx cats had the shortest life expectancy of the breeds analysed: 6.68 years.","ref":"teng2024_sphynx","basis":"measured","stages":["adult"]},{"zh":"在以色列的一项研究中，绝育的野猫群体里小猫的存活率更高。","en":"In an Israeli study, kitten survival was higher in neutered free-roaming cat groups.","ref":"gunther2011","basis":"measured","stages":["kitten"],"decisions":["neuter"]},{"zh":"美国的自由活动猫每年估计杀死 14 亿到 37 亿只鸟。","en":"Free-ranging domestic cats kill an estimated 1.4 to 3.7 billion birds a year in the US.","ref":"loss2013","basis":"measured","stages":["adult"],"decisions":["bird"]}],"existing":{"events.8":"loss2013"}},"cattle":{"refs":{"ontario_calf":{"a":"Umaña Sedó et al.","y":2024,"t":"Herd-level risk factors associated with preweaning mortality on Ontario dairy farms","s":"Journal of Dairy Science","u":"https://doi.org/10.3168/jds.2024-25265"},"brd_feedlot":{"a":"Jobman et al.","y":2025,"t":"Aggregate Sampling to Detect Pathogens and Antimicrobial Resistance Genes Associated with Bovine Respiratory Disease in US Feedlots: A Pilot Study","s":"Veterinary Sciences","u":"https://doi.org/10.3390/vetsci12030244"},"brd_calves":{"a":"Mori et al.","y":2022,"t":"Field trial of antibody response to inactivated bacterial vaccine in young Holstein calves: influence of animal health status","s":"Journal of Veterinary Research","u":"https://doi.org/10.2478/jvetres-2022-0003"},"swiss_dairy_life":{"a":"Schlebusch et al.","y":2025,"t":"Are Dairy Cow Replacement Decisions Economically Justified? Evidence from Swiss Farms","s":"Animals","u":"https://doi.org/10.3390/ani15162442"},"swiss_dairy_replace":{"a":"Schlebusch et al.","y":2025,"t":"Are Dairy Cow Replacement Decisions Economically Justified? Evidence from Swiss Farms","s":"Animals","u":"https://doi.org/10.3390/ani15162442"},"bloat_australia":{"a":"Allworth et al.","y":2022,"t":"A survey on bloat in southern Australian beef production systems","s":"Australian Veterinary Journal","u":"https://doi.org/10.1111/avj.13226"},"feedlot_liver":{"a":"Huebner et al.","y":2019,"t":"Effects of a Saccharomyces cerevisiae fermentation product on liver abscesses, fecal microbiome, and resistome in feedlot cattle raised without antibiotics","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-019-39181-7"},"calf_diarrhea":{"a":"Wilson et al","y":2025,"t":"Emergence of mortality due to centrilobular to massive hepatic necrosis in western Canadian beef calves","s":"The Canadian Veterinary Journal","u":"https://www.ebi.ac.uk/europepmc/webservices/rest/article/MED/41142973?resultType=core&format=xml"}},"survival":[{"from":2,"to":60,"surv":0.972,"ref":"ontario_calf","basis":"measured","zh":"在安大略的奶牛场，犊牛断奶前的平均死亡率约为 2.8%。","en":"Dairy calves on sampled Ontario farms died before weaning at an average rate of 2.8 percent."}],"causes":[],"causeNotes":{"brd":{"zh":"牛呼吸道疾病是饲养场里牛生病和死亡的主要原因之一。","en":"Bovine respiratory disease is the leading cause of illness and death in feedlots.","ref":"brd_feedlot","basis":"measured"},"bloat":{"zh":"吃进大量嫩豆科牧草后，瘤胃胀气，牛有时会突然死亡。","en":"Frothy bloat from legume pastures frequently causes sudden death in cattle.","ref":"bloat_australia","basis":"measured"},"acidosis":{"zh":"精料多，瘤胃变酸，是饲养场里牛长肝脓肿的前因。","en":"High-grain feed causes rumen acidosis, which leads to liver abscesses in feedlot cattle.","ref":"feedlot_liver","basis":"measured"},"calf_disease":{"zh":"新生的肉牛犊常死于腹泻和肺炎。","en":"Newborn beef calves often die of diarrhea or pneumonia.","ref":"calf_diarrhea","basis":"measured"}},"facts":[{"zh":"奶牛的平均产奶寿命，全世界大约只有三到四胎。","en":"A dairy cow's average productive life is three to four parities worldwide.","ref":"swiss_dairy_life","basis":"measured","stages":["adult","old"],"flags":["dairy"]},{"zh":"每年有 20% 到 40% 的奶牛会被替换掉。","en":"Between 20% and 40% of dairy cows are replaced every year.","ref":"swiss_dairy_replace","basis":"measured","stages":["adult"],"flags":["dairy"]},{"zh":"呼吸道疾病是年幼犊牛的主要死因之一。","en":"Bovine respiratory disease is one of the primary causes of death in young calves.","ref":"brd_calves","basis":"related","stages":["young"],"causes":["brd"]},{"zh":"吃了大量嫩苜蓿之类的豆科草，牛可能突然胀气死亡。","en":"Frothy bloat from legume pastures frequently results in sudden death of cattle.","ref":"bloat_australia","basis":"measured","stages":["growth","adult"],"causes":["bloat"],"decisions":["lush_pasture"]},{"zh":"精料让瘤胃变酸，是饲养场牛长肝脓肿的前因。","en":"Rumen acidosis from high-concentrate feed is a precursor of liver abscesses in feedlot cattle.","ref":"feedlot_liver","basis":"measured","stages":["growth"],"causes":["acidosis"],"flags":["feedlot"]}],"existing":{"events.18":"remove"}},"chimpanzee":{"refs":{"wilson2014":{"a":"Wilson et al.","y":2014,"t":"Lethal aggression in Pan is better explained by adaptive strategies than human impacts","s":"Nature","u":"https://doi.org/10.1038/nature13727"},"ngogo2017":{"a":"Wood et al.","y":2017,"t":"Favorable ecological circumstances promote life expectancy in chimpanzees similar to that of human hunter-gatherers","s":"Journal of Human Evolution","u":"https://doi.org/10.1016/j.jhevol.2017.01.003"},"zoo2022":{"a":"Ross et al.","y":2022,"t":"A 25-Year Retrospective Review of Mortality in Chimpanzees (Pan troglodytes) in Accredited U.S. Zoos from a Management and Welfare Perspective","s":"Animals","u":"https://doi.org/10.3390/ani12151878"},"zoo2022_trauma":{"a":"Ross et al.","y":2022,"t":"A 25-Year Retrospective Review of Mortality in Chimpanzees (Pan troglodytes) in Accredited U.S. Zoos from a Management and Welfare Perspective","s":"Animals","u":"https://doi.org/10.3390/ani12151878"},"anderson2018":{"a":"Anderson","y":2018,"t":"Chimpanzees and death","s":"Philosophical Transactions of the Royal Society B: Biological Sciences","u":"https://doi.org/10.1098/rstb.2017.0257"}},"survival":[],"causes":[],"causeNotes":{"war":{"zh":"在野外的黑猩猩杀戮中，多数是群落之间的攻击。","en":"In wild chimpanzees, most lethal killings were attacks between communities.","ref":"wilson2014","basis":"measured"},"leopard":{"zh":"一篇黑猩猩死亡原因的综述，把被捕食列为其中一类。","en":"A review of why chimpanzees die covers predation as one of its categories.","ref":"anderson2018","basis":"measured"}},"facts":[{"zh":"乌干达 Ngogo 群的黑猩猩，出生时的平均预期寿命为 32.8 年。","en":"Chimpanzees in Uganda's Ngogo community had a life expectancy at birth of 32.8 years.","ref":"ngogo2017","basis":"measured","stages":["infant"]},{"zh":"在所观察的黑猩猩群中，多数致命杀戮是群落之间的攻击。","en":"Across the chimpanzee communities studied, most lethal killings were attacks between communities.","ref":"wilson2014","basis":"measured","stages":["adult"],"causes":["war"]},{"zh":"美国动物园里，满月后死去的黑猩猩中，15.3% 与外伤有关。","en":"In US zoos, 15.3% of chimpanzee deaths after the first month were related to trauma.","ref":"zoo2022_trauma","basis":"related","stages":["juv","adult"]}],"existing":{"events.5":"remove","events.21":"remove","decisions.1":"remove","decisions.3":"remove"}},"copepod":{"refs":{"hirst2007":{"a":"Hirst et al.","y":2007,"t":"Seasonal dynamics and mortality rates of Calanus helgolandicus over two years at a station in the English Channel","s":"Marine Ecology Progress Series","u":"https://doi.org/10.3354/meps340189"},"hirst2007b":{"a":"Hirst et al.","y":2007,"t":"Seasonal dynamics and mortality rates of Calanus helgolandicus over two years at a station in the English Channel","s":"Marine Ecology Progress Series","u":"https://doi.org/10.3354/meps340189"},"kaartvedt2021":{"a":"Kaartvedt et al.","y":2021,"t":"Sleep walking copepods? Calanus diapausing in hypoxic waters adjust their vertical position during winter","s":"Journal of Plankton Research","u":"https://doi.org/10.1093/plankt/fbab004"},"phen2024":{"a":"Anderson et al.","y":2024,"t":"Optimal phenology of life history events in Calanus finmarchicus: exit from diapause in relation to interannual variation in spring bloom timing and predation","s":"Journal of Plankton Research","u":"https://doi.org/10.1093/plankt/fbae028"},"ecy2020":{"a":"Kvile et al.","y":2020,"t":"Predation risk alters life history strategies in an oceanic copepod","s":"Ecology","u":"https://doi.org/10.1002/ecy.3214"},"cole2015":{"a":"Cole et al.","y":2015,"t":"The impact of polystyrene microplastics on feeding, function and fecundity in the marine copepod Calanus helgolandicus","s":"Environmental Science & Technology","u":"https://doi.org/10.1021/es504525u"},"cole2013":{"a":"Cole et al.","y":2013,"t":"Microplastic ingestion by zooplankton","s":"Environmental Science & Technology","u":"https://doi.org/10.1021/es400663f"}},"survival":[{"from":0,"to":1.5,"surv":0.1,"ref":"hirst2007b","basis":"related","zh":"C. helgolandicus 的卵到第一个无节幼体阶段，常常不到一成能活下来。","en":"Often under 10% of Calanus eggs survive to the first nauplius stage."}],"causes":[],"causeNotes":{"egg_eaten":{"zh":"模型显示，早春捕食压力低时，卵和早期发育阶段存活更多。","en":"A model finds eggs and early stages survive better when predation is low early in the year.","ref":"phen2024","basis":"related"},"diapause":{"zh":"在缺氧的深水里越冬时，冬初死亡率低；越冬位置上移后死亡率上升。","en":"Overwintering copepods in hypoxic deep water had low mortality early in winter, which rose as they moved shallower.","ref":"kaartvedt2021","basis":"related"}},"facts":[{"zh":"C. helgolandicus 卵的瞬时死亡率平均每天约 6.1，是各阶段里最高的。","en":"The instantaneous death rate of Calanus helgolandicus eggs averaged 6.1 per day, the highest of the stages measured.","ref":"hirst2007","basis":"related","stages":["egg","nauplius"]},{"zh":"给桡足类加入鱼类捕食者的气味，它们会更早成熟但体型更小、脂肪更少。","en":"Chemical cues from a fish predator made lab-reared Calanus finmarchicus smaller and leaner, and they matured earlier.","ref":"ecy2020","basis":"measured","stages":["copepodite"],"acts":["hide"]},{"zh":"在实验里，微塑料让 C. helgolandicus 吃进的藻类减少了约 11%。","en":"In a 24-hour lab test, microplastic beads made Calanus helgolandicus eat 11% fewer algal cells.","ref":"cole2015","basis":"related","stages":["adult","old"],"acts":["forage"]},{"zh":"越冬的桡足类在缺氧的深水里，几乎没有捕食者，冬初死亡率也低。","en":"In a hypoxic overwintering site, predators were largely absent and mortality was low in early winter.","ref":"kaartvedt2021","basis":"related","stages":["copepodite"],"decisions":["winter"],"causes":["diapause"]}],"existing":{"events.0":"remove","events.1":"remove","events.16":"cole2013","decisions.0":"remove","decisions.1":"remove","decisions.2":"remove","decisions.3":"remove","decisions.4":"remove","decisions.5":"remove"}},"dog":{"refs":{"paul2016":{"a":"Paul et al.","y":2016,"t":"High early life mortality in free-ranging dogs is largely influenced by humans","s":"Scientific Reports","u":"https://doi.org/10.1038/srep19641"},"paul2016_human":{"a":"Paul et al.","y":2016,"t":"High early life mortality in free-ranging dogs is largely influenced by humans","s":"Scientific Reports","u":"https://doi.org/10.1038/srep19641"},"czup2016":{"a":"Czupryna et al.","y":2016,"t":"Ecology and Demography of Free-Roaming Domestic Dogs in Rural Villages near Serengeti National Park in Tanzania","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0167092"},"michell_8pct":{"a":"Michell","y":1999,"t":"Longevity of British breeds of dog and its relationships with sex, size, cardiovascular variables and disease","s":"Veterinary Record","u":"https://doi.org/10.1136/vr.145.22.625"},"michell_neuter":{"a":"Michell","y":1999,"t":"Longevity of British breeds of dog and its relationships with sex, size, cardiovascular variables and disease","s":"Veterinary Record","u":"https://doi.org/10.1136/vr.145.22.625"},"michell_size":{"a":"Michell","y":1999,"t":"Longevity of British breeds of dog and its relationships with sex, size, cardiovascular variables and disease","s":"Veterinary Record","u":"https://doi.org/10.1136/vr.145.22.625"},"michell_car":{"a":"Michell","y":1999,"t":"Longevity of British breeds of dog and its relationships with sex, size, cardiovascular variables and disease","s":"Veterinary Record","u":"https://doi.org/10.1136/vr.145.22.625"},"oneill2021":{"a":"O'Neill et al.","y":2021,"t":"Epidemiology of periodontal disease in dogs in the UK primary-care veterinary setting","s":"Journal of Small Animal Practice","u":"https://doi.org/10.1111/jsap.13405"},"hughes2013":{"a":"Hughes & Macdonald","y":2013,"t":"A review of the interactions between free-roaming domestic dogs and wildlife","s":"Biological Conservation","u":"https://doi.org/10.1016/j.biocon.2012.07.005"}},"survival":[],"causes":[],"causeNotes":{"car":{"zh":"在英国的一项调查中，不同品种的狗死于车祸的情况也不同。","en":"A British owner survey of dog deaths reports breed differences in road accidents.","ref":"michell_car","basis":"measured"}},"facts":[{"zh":"在印度西孟加拉邦，流浪狗的幼崽只有约 19% 能活到繁殖年龄。","en":"Only about 19% of free-ranging dog pups in West Bengal survived to breeding age.","ref":"paul2016","basis":"measured","stages":["newborn","puppy"]},{"zh":"在同一项研究中，大部分的幼犬死亡都和人有关。","en":"In that study, 63% of deaths were influenced by humans.","ref":"paul2016_human","basis":"measured","stages":["newborn","puppy"]},{"zh":"在坦桑尼亚的农村，生病和被鬣狗捕食是流浪狗的两大死因。","en":"In rural Tanzania, sickness and hyena predation were the two main causes of free-roaming dog deaths.","ref":"czup2016","basis":"measured","stages":["young","adult","old"]},{"zh":"在英国一项调查中，只有 8% 的狗活过了 15 岁。","en":"In a British owner survey, only 8 per cent of dogs lived beyond 15.","ref":"michell_8pct","basis":"measured","stages":["old"]},{"zh":"在英国的调查中，绝育的母狗比公狗和未绝育的母狗活得更长。","en":"In a British survey, neutered female dogs lived longer than males or intact females.","ref":"michell_neuter","basis":"measured","stages":["adult","old"],"decisions":["neuter"]},{"zh":"英国的一项兽医记录调查显示，一年之内约有 12.52% 的狗被诊断出牙周病。","en":"In a UK vet-records sample, 12.52% of dogs were diagnosed with periodontal disease in one year.","ref":"oneill2021","basis":"measured","stages":["adult","old"]},{"zh":"全世界的家养狗估计超过七亿只。","en":"Estimates put the global domestic dog population at over 700 million.","ref":"hughes2013","basis":"related","stages":["adult"]}],"existing":{"events.6":"remove","events.11":"remove","events.21":"michell_size","events.36":"remove","decisions.0":"remove"}},"duck":{"refs":{"plosone2023herpes":{"a":"Damir et al.","y":2023,"t":"Investigation of a herpesvirus outbreak in mixed breeds of adult domestic ducks using next generation sequencing","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0280923"},"tbed2026dadv3":{"a":"Zhu et al.","y":2026,"t":"Pathogenicity and Genomic Features of a DAdV-3 Strain Causing Severe Hepatitis in Muscovy Ducklings","s":"Transboundary and Emerging Diseases","u":"https://doi.org/10.1155/tbed/7156678"},"psj2026heat":{"a":"Liang et al.","y":2026,"t":"Heat stress promotes ferroptosis in Jiaji duck myocardium by disrupting iron homeostasis and inducing lipid peroxidation","s":"Poultry Science","u":"https://doi.org/10.1016/j.psj.2026.107241"}},"survival":[],"causes":[],"causeNotes":{"heat":{"zh":"炎热天气会让家禽发生热应激，有时导致急性死亡。","en":"Heat stress is a common cause of acute death in poultry, including ducks.","ref":"psj2026heat","basis":"related"}},"facts":[{"zh":"在一个成年鸭群的疱疹病毒暴发中，死亡率达到 35%。","en":"A herpesvirus outbreak on one adult duck farm caused 35% mortality.","ref":"plosone2023herpes","basis":"measured"},{"zh":"在中国的番鸭中，一种鸭腺病毒感染的死亡率有时高达 43%。","en":"In Muscovy ducks in China, a duck adenovirus infection has reached mortality rates as high as 43%.","ref":"tbed2026dadv3","basis":"related","stages":["chick"]}],"existing":{}},"earthworm":{"refs":{"schally2024":{"a":"Schally et al.","y":2024,"t":"The effect of soil parameters and earthworm abundance on the fine-scale nocturnal habitat use of the Eurasian woodcock","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.70136"},"schally2024engineers":{"a":"Schally et al.","y":2024,"t":"The effect of soil parameters and earthworm abundance on the fine-scale nocturnal habitat use of the Eurasian woodcock","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.70136"},"fellowes2020":{"a":"Fellowes et al.","y":2020,"t":"Map-A-Mole: Greenspace Area Influences the Presence and Abundance of the European Mole Talpa europaea in Urban Habitats","s":"Animals","u":"https://doi.org/10.3390/ani10061097"}},"survival":[],"causes":[],"causeNotes":{"bird":{"zh":"欧亚丘鹬的主要食物是蚯蚓，它们偏爱蚯蚓多的草地。","en":"The Eurasian woodcock prefers habitats with more earthworms, its main prey.","ref":"schally2024","basis":"related"},"mole":{"zh":"蚯蚓是鼹鼠最重要的食物之一，蚯蚓少的土壤会限制鼹鼠的分布。","en":"Moles depend on earthworms as their most important prey, and low earthworm density limits them.","ref":"fellowes2020","basis":"related"}},"facts":[{"zh":"蚯蚓是温带生态系统里分布最广的土壤生态工程师。","en":"Earthworms are the most widespread soil ecosystem engineers in temperate ecosystems.","ref":"schally2024engineers","basis":"related","stages":["adult","old"]}],"existing":{"events.18":"remove"}},"elephant":{"refs":{"wittemyer2014":{"a":"Wittemyer et al.","y":2014,"t":"Illegal killing for ivory drives global decline in African elephants","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.1403984111"},"wittemyer_samburu":{"a":"Wittemyer et al.","y":2014,"t":"Illegal killing for ivory drives global decline in African elephants","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.1403984111"},"forest2018":{"a":"Turkalo et al.","y":2018,"t":"Demography of a forest elephant population","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0192777"},"forest2018_sex":{"a":"Turkalo et al.","y":2018,"t":"Demography of a forest elephant population","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0192777"}},"survival":[{"from":0,"to":730,"surv":0.97,"ref":"forest2018","basis":"related","zh":"森林象的幼象在出生后两年内存活率约为 97%（森林象，非草原象）。","en":"About 97% of forest elephant calves survived their first two years."}],"causes":[],"causeNotes":{"poacher":{"zh":"在萨布鲁，盗猎随象牙黑市价格上涨而明显增加，成为大象的重要死因。","en":"In Samburu, Kenya, illegal killing rose sharply after 2008 and tracked the black-market ivory price.","ref":"wittemyer_samburu","basis":"measured"}},"facts":[{"zh":"2011 年，非洲大陆的盗猎率高峰约为 8%，远超可持续水平。","en":"In 2011, illegal killing peaked at about 8% of African elephants, which was unsustainable.","ref":"wittemyer2014","basis":"measured","causes":["poacher"],"stages":["adult"]},{"zh":"森林象的雄象比雌象存活率低，研究者怀疑这与人类为象牙而猎杀有关。","en":"Male forest elephants survived less well than females, which researchers suspect is driven by hunting for ivory.","ref":"forest2018_sex","basis":"related","causes":["poacher"],"stages":["young","adult"]}],"existing":{"events.6":"remove","events.11":"remove","events.12":"remove","events.15":"remove","events.29":"remove","decisions.1":"remove","causes.6":"remove"}},"farmed_carp":{"refs":{"fsi2026gcrv":{"a":"Li et al.","y":2026,"t":"A Z-DNA/PKZ-based immunoenhancer confers protective immunity against GCRV infection in grass carp","s":"Fish & Shellfish Immunology","u":"https://doi.org/10.1016/j.fsi.2026.111719"},"pathogens2025ich":{"a":"Peng et al.","y":2025,"t":"Effects of a Synthetic Isoquinoline Derivative Against Ichthyophthirius multifiliis In Vivo and In Vitro in Grass Carp (Ctenopharyngodon idella)","s":"Pathogens","u":"https://doi.org/10.3390/pathogens14101069"},"animals2025hypoxia":{"a":"Wang et al.","y":2025,"t":"Integrative Genomics and Multi-Tissue Transcriptomics Identify Key Loci and Pathways for Hypoxia Tolerance in Grass Carp","s":"Animals","u":"https://doi.org/10.3390/ani15243518"},"helminth2024cormorant":{"a":"Gyöngy et al.","y":2024,"t":"Digenean trematodes (Trematoda: Digenea) parasitizing the digestive system of the great cormorant (Phalacrocorax carbo) in Hungary","s":"Helminthologia","u":"https://doi.org/10.2478/helm-2024-0033"},"ijm2025saprolegnia":{"a":"Rathod et al.","y":2025,"t":"Abiotic stressors influence saprolegniasis infection, causing mass mortality in Pangasianodon hypophthalmus and Labeo rohita under cage culture in Eastern India","s":"International Microbiology","u":"https://doi.org/10.1007/s10123-025-00721-z"}},"survival":[],"causes":[],"causeNotes":{"gcrv":{"zh":"草鱼出血病（草鱼呼肠孤病毒）是草鱼鱼种阶段死亡的重要原因。","en":"Grass carp reovirus disease causes hemorrhagic illness and high losses in fingerling grass carp.","ref":"fsi2026gcrv","basis":"related"},"ichthyo":{"zh":"白点病（小瓜虫）在高密度养殖中会造成大量死亡。","en":"White spot disease from Ichthyophthirius can cause heavy mortality in intensive farming.","ref":"pathogens2025ich","basis":"related"},"oxygen":{"zh":"低氧是养殖鱼类存活和生长的重要压力。","en":"Low oxygen is a major stressor that affects survival and growth of farmed fish.","ref":"animals2025hypoxia","basis":"related"},"predator":{"zh":"鸬鹚等鱼食性水鸟会对鱼类造成很大的经济损失。","en":"Piscivorous cormorants are known to cause large economic losses to fish stocks.","ref":"helminth2024cormorant","basis":"related"},"fungus":{"zh":"水霉病（丝水霉）在寒冷季节会造成鱼类大量死亡。","en":"Saprolegnia infection causes heavy fish mortality in aquaculture during winter.","ref":"ijm2025saprolegnia","basis":"related"}},"facts":[{"zh":"草鱼出血病可使草鱼鱼种死亡率高达 80%。","en":"Grass carp reovirus can cause mortality of up to 80% in fingerlings.","ref":"fsi2026gcrv","basis":"related","stages":["fingerling"],"causes":["gcrv"]},{"zh":"小瓜虫引起的白点病，在密集养殖里死亡率可超过 80%。","en":"White spot disease from Ichthyophthirius can cause mortality above 80% in intensive systems.","ref":"pathogens2025ich","basis":"related","stages":["fry","fingerling"],"causes":["ichthyo"]}],"existing":{}},"farmed_shrimp":{"refs":{"tbed2017":{"a":"Muniesa et al.","y":2017,"t":"Spatial Epidemiology and Risk Factor Analysis of White Spot Disease in the Shrimp Farming Industry of Sinaloa, Mexico, from 2005 to 2011","s":"Transboundary and Emerging Diseases","u":"https://doi.org/10.1111/tbed.12542"},"viruses2023":{"a":"Cox et al.","y":2023,"t":"The Way of Water: Unravelling White Spot Syndrome Virus (WSSV) Transmission Dynamics in Litopenaeus vannamei Shrimp","s":"Viruses","u":"https://doi.org/10.3390/v15091824"},"jaah2014":{"a":"Otta et al.","y":2014,"t":"Association of dual viral infection with mortality of Pacific white shrimp (Litopenaeus vannamei) in culture ponds in India","s":"VirusDisease","u":"https://doi.org/10.1007/s13337-013-0180-x"},"albalat2022":{"a":"Albalat et al.","y":2022,"t":"Welfare in Farmed Decapod Crustaceans, With Particular Reference to Penaeus vannamei","s":"Frontiers in Marine Science","u":"https://doi.org/10.3389/fmars.2022.886024"}},"survival":[],"causes":[],"causeNotes":{"wssv":{"zh":"白斑病毒引起的白斑病是养殖对虾死亡和经济损失的主要原因之一。","en":"White spot disease is one of the primary causes of mortality on shrimp farms.","ref":"tbed2017","basis":"measured"}},"facts":[{"zh":"全球每年约有 167 亿只养殖凡纳滨对虾被收获。","en":"About 167 billion farmed whiteleg shrimp are harvested each year.","ref":"albalat2022","basis":"related","stages":["old"]},{"zh":"印度一些养殖池里，对虾养到 50–72 天就因病提前收获。","en":"On some Indian pond farms, whiteleg shrimp were harvested early at 50 to 72 days because of disease.","ref":"jaah2014","basis":"measured","stages":["grow"],"causes":["wssv"]},{"zh":"在实验室感染试验中，感染白斑病毒的对虾约 78 小时内死亡。","en":"In a lab challenge, shrimp infected with white spot virus died within 78 hours.","ref":"viruses2023","basis":"related","stages":["grow"],"causes":["wssv"]}],"existing":{"events.5":"remove","events.11":"remove","decisions.0":"remove"}},"frog":{"refs":{"mantella_surv":{"a":"Edmonds et al.","y":2024,"t":"Small population size and possible extirpation of the threatened Malagasy poison frog Mantella cowanii","s":"PeerJ","u":"https://doi.org/10.7717/peerj.17947"},"mantella_decline":{"a":"Edmonds et al.","y":2024,"t":"Small population size and possible extirpation of the threatened Malagasy poison frog Mantella cowanii","s":"PeerJ","u":"https://doi.org/10.7717/peerj.17947"},"berger_fungus":{"a":"Berger et al.","y":1998,"t":"Chytridiomycosis causes amphibian mortality associated with population declines in the rain forests of Australia and Central America","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.95.15.9031"}},"survival":[{"from":365,"to":730,"surv":0.574,"ref":"mantella_surv","basis":"related","zh":"在一种马达加斯加的毒蛙身上，成蛙每年大约有 53% 到 62% 能活下来。","en":"In a Madagascan poison frog, about 53% to 62% of adults survived each year."}],"causes":[],"causeNotes":{"chytrid":{"zh":"在澳大利亚和巴拿马的雨林里，感染蛙壶菌的成蛙和死蛙出现在大量死亡事件中。","en":"A chytrid fungus was found in sick and dead adult frogs during mass die-offs in rainforests of Australia and Panama.","ref":"berger_fungus","basis":"related"}},"facts":[{"zh":"一种马达加斯加的毒蛙，成蛙每年的存活率大约在 53% 到 62% 之间。","en":"Annual adult survival in a Madagascan poison frog was about 53% to 62%.","ref":"mantella_surv","basis":"related","stages":["adult"]},{"zh":"在这种毒蛙调查最密集的地点，种群在 2015 到 2023 年间减少了 80% 以上。","en":"At the best-surveyed site, the population fell by more than 80% from 2015 to 2023.","ref":"mantella_decline","basis":"related","stages":["adult"]},{"zh":"在澳大利亚和巴拿马的雨林里，蛙壶菌感染的成蛙在大规模死亡事件中被发现。","en":"Chytrid fungus was found on sick and dead adult frogs during mass die-offs in rainforests of Australia and Panama.","ref":"berger_fungus","basis":"related","stages":["adult"],"causes":["chytrid"]}],"existing":{"events.14":"remove","events.17":"berger_fungus","decisions.1":"remove","decisions.5":"remove"}},"goat":{"refs":{"zamuner_kids":{"a":"Zamuner et al.","y":2023,"t":"Evaluation of plasma immunoglobulin G and BW thresholds for predicting preweaning mortality in commercially raised dairy goat kids","s":"animal","u":"https://doi.org/10.1016/j.animal.2023.100989"},"mandonnet_creole":{"a":"Mandonnet et al.","y":2003,"t":"Mortality of Creole kids during infection with gastrointestinal strongyles: a survival analysis","s":"Journal of Animal Science","u":"https://doi.org/10.2527/2003.81102401x"},"mandonnet_parasite":{"a":"Mandonnet et al.","y":2003,"t":"Mortality of Creole kids during infection with gastrointestinal strongyles: a survival analysis","s":"Journal of Animal Science","u":"https://doi.org/10.2527/2003.81102401x"},"khan_wolf":{"a":"Khan et al.","y":2019,"t":"Status and Magnitude of Grey Wolf Conflict with Pastoral Communities in the Foothills of the Hindu Kush Region of Pakistan","s":"Animals","u":"https://doi.org/10.3390/ani9100787"},"namgail_predators":{"a":"Namgail et al.","y":2007,"t":"Carnivore-caused livestock mortality in Trans-Himalaya","s":"Environmental Management","u":"https://doi.org/10.1007/s00267-005-0178-2"},"fan_diarrhea":{"a":"Fan et al.","y":2025,"t":"Bacillus pumilus 315 improves intestinal microbiota and barrier function to alleviate diarrhea of neonatal goats","s":"Animal Nutrition","u":"https://doi.org/10.1016/j.aninu.2024.10.008"},"zeder2000":{"a":"Zeder & Hesse","y":2000,"t":"The initial domestication of goats (Capra hircus) in the Zagros mountains 10,000 years ago","s":"Science","u":"https://doi.org/10.1126/science.287.5461.2254"}},"survival":[{"from":0,"to":42,"surv":0.79,"ref":"zamuner_kids","basis":"measured","zh":"在商业化养殖的奶山羊羔中，约 79% 能活到 42 天大。","en":"In commercially raised dairy goat kids, about 79% survived to 42 days old."}],"causes":[],"causeNotes":{"parasite":{"zh":"在草场上养的羊羔，胃肠道线虫感染会导致它们死亡。","en":"Strongyle worm infection causes deaths in goat kids reared at pasture.","ref":"mandonnet_parasite","basis":"measured"},"wolf":{"zh":"狼会咬死山羊，在一项巴基斯坦的调查里，被狼攻击的牲畜多数是山羊和绵羊。","en":"In a Pakistani study, goats and sheep made up 79.2% of reported wolf attacks.","ref":"khan_wolf","basis":"related"}},"facts":[{"zh":"在商业化养殖的奶山羊羔中，约 21% 在 42 天内死亡。","en":"In commercial dairy goat kids, 21% of kids died by 42 days old.","ref":"zamuner_kids","basis":"measured","stages":["kid","juv"]},{"zh":"在同一项研究中，出生两周内约有 12% 的奶山羊羔死亡。","en":"In the same study, 12% of dairy goat kids died within 14 days of birth.","ref":"zamuner_kids","basis":"measured","stages":["kid"]},{"zh":"在放养的羊群里，公羊羔因肠道线虫感染而死的风险远高于母羊羔。","en":"Male goat kids were more than three times as likely to die from worm infection as females.","ref":"mandonnet_creole","basis":"measured","stages":["kid","juv"],"causes":["parasite"]},{"zh":"在喜马拉雅的三个村子里，家山羊是被食肉动物杀死最多的牲畜之一。","en":"Domestic goats were 32% of the livestock killed by carnivores in three Ladakh villages.","ref":"namgail_predators","basis":"related","stages":["juv","young","adult"],"causes":["wolf"]},{"zh":"腹泻是出生后山羊羔的首要死因。","en":"Diarrhea is the leading cause of death in goat kids after birth, according to one study.","ref":"fan_diarrhea","basis":"related","stages":["kid"]},{"zh":"山羊大约一万年前在伊朗西部的扎格罗斯山地开始被驯化。","en":"Goats were first domesticated about 10,000 years ago in the highlands of western Iran.","ref":"zeder2000","basis":"measured","stages":["kid"]}],"existing":{"opening":"zeder2000"}},"greenland_shark":{"refs":{"nielsen_mat":{"a":"Nielsen et al.","y":2016,"t":"Eye lens radiocarbon reveals centuries of longevity in the Greenland shark (Somniosus microcephalus)","s":"Science","u":"https://doi.org/10.1126/science.aaf1703"},"nielsen_max":{"a":"Nielsen et al.","y":2016,"t":"Eye lens radiocarbon reveals centuries of longevity in the Greenland shark (Somniosus microcephalus)","s":"Science","u":"https://doi.org/10.1126/science.aaf1703"},"nielsen_28":{"a":"Nielsen et al.","y":2016,"t":"Eye lens radiocarbon reveals centuries of longevity in the Greenland shark (Somniosus microcephalus)","s":"Science","u":"https://doi.org/10.1126/science.aaf1703"},"peerj_common":{"a":"Grant et al.","y":2018,"t":"Greenland shark (Somniosus microcephalus) feeding behavior on static fishing gear, effect of SMART (Selective Magnetic and Repellent-Treated) hook deterrent technology, and factors influencing entanglement in bottom longlines","s":"PeerJ","u":"https://doi.org/10.7717/peerj.4751"},"peerj_rate":{"a":"Grant et al.","y":2018,"t":"Greenland shark (Somniosus microcephalus) feeding behavior on static fishing gear, effect of SMART (Selective Magnetic and Repellent-Treated) hook deterrent technology, and factors influencing entanglement in bottom longlines","s":"PeerJ","u":"https://doi.org/10.7717/peerj.4751"},"peerj_mort":{"a":"Grant et al.","y":2018,"t":"Greenland shark (Somniosus microcephalus) feeding behavior on static fishing gear, effect of SMART (Selective Magnetic and Repellent-Treated) hook deterrent technology, and factors influencing entanglement in bottom longlines","s":"PeerJ","u":"https://doi.org/10.7717/peerj.4751"}},"survival":[],"causes":[],"causeNotes":{"bycatch":{"zh":"格陵兰睡鲨被延绳钓误捕后，报道的死亡比例约为一半，部分是渔民杀掉了严重缠住的鲨鱼。","en":"Reported mortality of Greenland sharks in a halibut longline fishery was about 50%, partly because fishers killed entangled sharks.","ref":"peerj_mort","basis":"measured"}},"facts":[{"zh":"格陵兰睡鲨大约要到 156 岁前后才性成熟，误差约 ±22 年。","en":"Greenland sharks reach sexual maturity at an estimated 156 ± 22 years of age.","ref":"nielsen_mat","basis":"measured","stages":["subad","adult"]},{"zh":"研究中最大的一条（502 厘米）估计已有 392 ± 120 岁。","en":"The largest sampled shark, 502 cm long, was estimated to be 392 ± 120 years old.","ref":"nielsen_max","basis":"measured","stages":["old"]},{"zh":"用眼球晶状体的放射性碳测年，28 条雌鲨显示寿命至少有 272 年。","en":"Eye-lens radiocarbon dating of 28 female sharks showed a life span of at least 272 years.","ref":"nielsen_28","basis":"measured"},{"zh":"在一次试验性的格陵兰大比目鱼夏季渔业中，平均每 1000 个钩子就误捕 6.3 条睡鲨。","en":"During an experimental summer halibut fishery, bycatch averaged 6.3 Greenland sharks per 1000 hooks set.","ref":"peerj_rate","basis":"measured","stages":["juv","subad","adult","old"],"causes":["bycatch"],"decisions":["longline"]},{"zh":"在加拿大坎伯兰湾，格陵兰睡鲨是格陵兰大比目鱼底延绳钓渔业中最常见的误捕物种。","en":"In Cumberland Sound, Canada, Greenland shark is the most common bycatch in the halibut longline fishery.","ref":"peerj_common","basis":"measured","stages":["juv","subad","adult","old"],"causes":["bycatch"],"decisions":["longline"]}],"existing":{"events.2":"remove","events.4":"remove","events.5":"remove","events.7":"remove","events.10":"remove","events.13":"remove","decisions.1":"remove"}},"honeybee":{"refs":{"prado2020":{"a":"Prado et al.","y":2020,"t":"Honeybee lifespan: the critical role of pre-foraging stage","s":"Royal Society Open Science","u":"https://doi.org/10.1098/rsos.200998"},"prado2020b":{"a":"Prado et al.","y":2020,"t":"Honeybee lifespan: the critical role of pre-foraging stage","s":"Royal Society Open Science","u":"https://doi.org/10.1098/rsos.200998"},"sarmad2025":{"a":"Sarmad & Ryšánek","y":2025,"t":"Impact of different constant temperatures on the survival of honey bee, Apis mellifera (Hymenoptera: Apidae)","s":"Apidologie","u":"https://doi.org/10.1007/s13592-025-01191-y"},"varroa2024":{"a":"Boonmee et al.","y":2024,"t":"Properties of essential oils absorbed on the surface of cardboard pieces after using atmospheric-pressure plasma treatments to develop long-lasting Varroa miticides in honeybees (Apis mellifera)","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0297980"}},"survival":[],"causes":[],"causeNotes":{"varroa":{"zh":"瓦螨被认为是养殖西方蜜蜂中分布最广、危害最严重的害虫之一。","en":"Varroa mites are considered the most serious widespread pest of managed honey bees.","ref":"varroa2024","basis":"related"}},"facts":[{"zh":"大约四成工蜂在开始出去采集之前就死了。","en":"Roughly 40% of worker honey bees die before they start foraging.","ref":"prado2020","basis":"measured","stages":["nurse","builder"]},{"zh":"开始采集之后，工蜂每个采集日大约有 36% 的概率死去。","en":"Once foraging, a worker bee has about a 36% chance of dying on each foraging day.","ref":"prado2020b","basis":"measured","stages":["forager"]},{"zh":"实验室里，31°C 下半数工蜂约在两周左右死亡。","en":"In a lab test at 31 °C, half of the worker bees had died by about 14 days.","ref":"sarmad2025","basis":"related","stages":["forager"]}],"existing":{"events.5":"remove","events.6":"remove","events.7":"remove","decisions.1":"remove","decisions.2":"remove","decisions.4":"remove"}},"housefly":{"refs":{"shahzad2025":{"a":"Shahzad et al.","y":2025,"t":"Effects of Indoxacarb on life history traits and population performance of the house fly, Musca domestica","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-025-06279-0"},"shahzad2025b":{"a":"Shahzad et al.","y":2025,"t":"Effects of Indoxacarb on life history traits and population performance of the house fly, Musca domestica","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-025-06279-0"},"hafez2026":{"a":"Hafez & Abbas","y":2026,"t":"Realized Heritability and Fitness Costs of Diflubenzuron Resistance in Musca domestica L","s":"Insects","u":"https://doi.org/10.3390/insects17050480"},"amir2026":{"a":"Amir et al.","y":2026,"t":"Fitness costs of sublethal cyantraniliprole exposure: life-history trade-offs in the non-target insect Musca domestica","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-026-42884-3"}},"survival":[],"causes":[],"causeNotes":{"insecticide":{"zh":"在实验室里，接触高剂量茚虫威的家蝇，成虫寿命只有约 23 到 25 天。","en":"In lab tests, house flies given the highest indoxacarb dose lived only about 23 to 25 days as adults.","ref":"shahzad2025","basis":"related"}},"facts":[{"zh":"在实验室里，茚虫威高剂量组的幼虫期到成虫期发育最长约 14 天。","en":"In a lab test, pre-adult development took up to about 14 days in the highest indoxacarb dose group.","ref":"shahzad2025b","basis":"related","stages":["larva","pupa"],"causes":["insecticide"]},{"zh":"用于抗性选育的家蝇，相对适合度只有未选育群体的 0.39。","en":"House flies selected for diflubenzuron resistance had a relative fitness of 0.39 compared with unselected flies.","ref":"hafez2026","basis":"related","causes":["insecticide"],"stages":["adult"]},{"zh":"在实验室里，用 50 ppm 溴氰虫酰胺 处理的雄蝇，成虫寿命约 41 天，短于未处理组。","en":"In a lab test, male house flies given 50 ppm cyantraniliprole lived about 41 days as adults, shorter than untreated males.","ref":"amir2026","basis":"related","stages":["adult"],"causes":["insecticide"]}],"existing":{"events.25":"remove"}},"human":{"refs":{"who_u5":{"a":"WHO","y":2026,"t":"Child mortality (under 5 years)","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality"},"who_u5_deaths":{"a":"WHO","y":2026,"t":"Child mortality (under 5 years)","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality"},"who_neonatal":{"a":"WHO","y":2026,"t":"Child mortality (under 5 years)","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality"},"who_pneumonia":{"a":"WHO","y":2022,"t":"Pneumonia in children","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/pneumonia"},"who_diarrhoea":{"a":"WHO","y":2024,"t":"Diarrhoeal disease","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease"},"who_malaria":{"a":"WHO","y":2025,"t":"Malaria","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/malaria"},"who_malaria_u5":{"a":"WHO","y":2025,"t":"Malaria","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/malaria"},"who_mmr":{"a":"WHO","y":2025,"t":"Maternal mortality","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/maternal-mortality"},"who_road":{"a":"WHO","y":2026,"t":"Road traffic injuries","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"},"who_road_deaths":{"a":"WHO","y":2026,"t":"Road traffic injuries","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"},"who_cvd":{"a":"WHO","y":2025,"t":"Cardiovascular diseases (CVDs)","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)"},"who_cvd_deaths":{"a":"WHO","y":2025,"t":"Cardiovascular diseases (CVDs)","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)"},"who_cancer":{"a":"WHO","y":2026,"t":"Cancer","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/cancer"},"who_dementia":{"a":"WHO","y":2026,"t":"Dementia","s":"WHO fact sheet","u":"https://www.who.int/news-room/fact-sheets/detail/dementia"},"jmp2025":{"a":"WHO, UNICEF","y":2025,"t":"1 in 4 people globally still lack access to safe drinking water","s":"WHO/UNICEF JMP news release","u":"https://www.who.int/news/item/26-08-2025-1-in-4-people-globally-still-lack-access-to-safe-drinking-water---who--unicef"},"unesco2025":{"a":"UN News","y":2025,"t":"Global perspective Human stories","s":"UN News","u":"https://news.un.org/en/story/2025/12/1166556"},"ilocl2021":{"a":"ILO, UNICEF","y":2021,"t":"Child labour rises to 160 million – first increase in two decades","s":"ILO News","u":"https://www.ilo.org/resource/news/child-labour-rises-160-million-first-increase-two-decades"},"ilo2025":{"a":"ILO","y":2025,"t":"The State of Social Justice 2025","s":"ILO flagship report","u":"https://www.ilo.org/state-social-justice-2025"},"itu2024":{"a":"ITU","y":2024,"t":"Internet use continues to grow, but universality remains elusive","s":"ITU Facts and Figures 2024","u":"https://www.itu.int/itu-d/reports/statistics/2024/11/10/ff24-internet-us"},"measles2023":{"a":"Minta et al.","y":2023,"t":"Progress Toward Measles Elimination - Worldwide, 2000-2022","s":"MMWR. Morbidity and Mortality Weekly Report","u":"https://doi.org/10.15585/mmwr.mm7246a3"},"wb_f65":{"a":"World Bank","y":2024,"t":"Survival to age 65, female (% of cohort)","s":"World Development Indicators (UN WPP, UN IGME)","u":"https://data.worldbank.org/indicator/SP.DYN.TO65.FE.ZS?locations=1W"},"wb_m65":{"a":"World Bank","y":2024,"t":"Survival to age 65, male (% of cohort)","s":"World Development Indicators (UN WPP, UN IGME)","u":"https://data.worldbank.org/indicator/SP.DYN.TO65.MA.ZS?locations=1W"},"wb_imr":{"a":"World Bank","y":2024,"t":"Mortality rate, infant (per 1,000 live births)","s":"World Development Indicators (UN WPP, UN IGME)","u":"https://data.worldbank.org/indicator/SP.DYN.IMRT.IN?locations=1W"}},"survival":[{"from":0,"to":365,"surv":0.9723,"ref":"wb_imr","basis":"official","zh":"2024 年全球每 1000 个新生儿约有 28 个活不到一岁。","en":"In 2024 about 28 of every 1,000 newborns worldwide died before age one."},{"from":365,"to":1825,"surv":0.99,"ref":"who_u5","basis":"official","zh":"2024 年全球每 1000 个孩子约有 37 个在五岁前死亡。","en":"In 2024 about 37 of every 1,000 children worldwide died before age five."},{"from":1825,"to":23725,"surv":0.8129,"ref":"wb_f65","basis":"official","zh":"按 2024 年全球死亡率，约 83% 的女性能活到 65 岁。","en":"At 2024 world death rates, about 83% of women live to 65."}],"causes":[{"stages":["infant","child"],"shares":{"pneumonia":0.14},"ref":"who_pneumonia","basis":"official","zh":"五岁以下儿童的死亡中，约 14% 是肺炎造成的。","en":"Pneumonia accounts for about 14% of deaths of children under 5."}],"causeNotes":{"diarrhea":{"ref":"who_diarrhoea","basis":"official","zh":"腹泻是五岁以下儿童的第三大死因。","en":"Diarrhoea is the third leading cause of death in children under 5."},"malaria":{"ref":"who_malaria_u5","basis":"official","zh":"在非洲区域，疟疾死亡中约 75% 是五岁以下儿童。","en":"In Africa, about 75% of malaria deaths are in children under 5."},"childbirth":{"ref":"who_mmr","basis":"official","zh":"2023 年全球孕产妇死亡率为每 10 万活产 197 人。","en":"In 2023 the global maternal death rate was 197 per 100 thousand live births."},"accident":{"ref":"who_road","basis":"official","zh":"道路交通伤害是 5 到 29 岁儿童和青年的头号死因。","en":"Road crashes are the leading cause of death for children and young adults aged 5 to 29."},"heart":{"ref":"who_cvd","basis":"official","zh":"心血管疾病是全球头号死因。","en":"Heart and blood-vessel disease is the leading cause of death worldwide."},"cancer":{"ref":"who_cancer","basis":"official","zh":"癌症是全球主要死因，2024 年近 1000 万人死于癌症。","en":"Cancer is a leading cause of death worldwide, with nearly 10 million deaths in 2024."}},"facts":[{"zh":"2024 年全球约 490 万名五岁以下儿童死亡。","en":"In 2024 about 4.9 million children under 5 died worldwide.","ref":"who_u5_deaths","basis":"official","stages":["infant","child"]},{"zh":"五岁以下儿童死亡里，约 47% 发生在出生后的头 28 天。","en":"47% of under-5 deaths happen in the first 28 days of life.","ref":"who_neonatal","basis":"official","stages":["infant"]},{"zh":"腹泻是五岁以下儿童的第三大死因。","en":"Diarrhoea is the third leading cause of death in children under 5.","ref":"who_diarrhoea","basis":"official","stages":["infant","child"],"causes":["diarrhea"]},{"zh":"肺炎约占五岁以下儿童死亡的 14%。","en":"Pneumonia causes about 14% of deaths of children under 5.","ref":"who_pneumonia","basis":"official","stages":["infant","child"],"causes":["pneumonia"]},{"zh":"2024 年全球约有 2.82 亿疟疾病例。","en":"In 2024 there were about 282 million malaria cases worldwide.","ref":"who_malaria","basis":"official","stages":["child","school","youth"],"causes":["malaria"]},{"zh":"全球每年约 116 万人死于道路交通事故。","en":"About 1.16 million people die each year in road crashes.","ref":"who_road_deaths","basis":"official","stages":["child","school","youth","adult"],"causes":["accident"]},{"zh":"2022 年约 1980 万人死于心血管疾病，占全部死亡的约 32%。","en":"About 19.8 million people died of heart and blood-vessel disease in 2022, about 32% of all deaths.","ref":"who_cvd_deaths","basis":"official","stages":["adult","old"],"causes":["heart"]},{"zh":"2023 年全球孕产妇死亡率为每 10 万活产 197 人。","en":"In 2023 the global maternal death rate was 197 per 100 thousand live births.","ref":"who_mmr","basis":"official","stages":["youth","adult"],"causes":["childbirth"]},{"zh":"按 2024 年全球死亡率，约 74% 的男性能活到 65 岁。","en":"At 2024 world death rates, about 74% of men live to 65.","ref":"wb_m65","basis":"official","stages":["adult","old"]}],"existing":{"events.2":"measles2023","events.5":"unesco2025","events.7":"jmp2025","events.8":"ilocl2021","events.10":"ilo2025","events.11":"itu2024","events.19":"who_dementia","decisions.1":"remove","decisions.0":"remove","events.18":"remove"}},"krill":{"refs":{"atkinson2004":{"a":"Atkinson et al.","y":2004,"t":"Long-term decline in krill stock and increase in salps within the Southern Ocean","s":"Nature","u":"https://doi.org/10.1038/nature02996"},"atkinson2004b":{"a":"Atkinson et al.","y":2004,"t":"Long-term decline in krill stock and increase in salps within the Southern Ocean","s":"Nature","u":"https://doi.org/10.1038/nature02996"},"savoca2024":{"a":"Savoca et al.","y":2024,"t":"Whale recovery and the emerging human-wildlife conflict over Antarctic krill","s":"Nature Communications","u":"https://doi.org/10.1038/s41467-024-51954-x"},"biuw2024":{"a":"Biuw et al.","y":2024,"t":"Estimated summer abundance and krill consumption of fin whales throughout the Scotia Sea during the 2018/2019 summer season","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-024-57378-3"},"biuw2024b":{"a":"Biuw et al.","y":2024,"t":"Estimated summer abundance and krill consumption of fin whales throughout the Scotia Sea during the 2018/2019 summer season","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-024-57378-3"},"dong2025":{"a":"Dong et al.","y":2025,"t":"Temporal variability in mortality and recruitment jointly influence the periodic fluctuations in Antarctic krill populations","s":"Marine Environmental Research","u":"https://doi.org/10.1016/j.marenvres.2024.106923"},"guerrero2021":{"a":"Guerrero et al.","y":2021,"t":"Complementary use of stable isotopes and fatty acids for quantitative diet estimation of sympatric predators, the Antarctic pack-ice seals","s":"Oecologia","u":"https://doi.org/10.1007/s00442-021-05045-z"},"flores2012":{"a":"Flores et al.","y":2012,"t":"The association of Antarctic krill Euphausia superba with the under-ice habitat","s":"PLoS ONE","u":"https://doi.org/10.1371/journal.pone.0031775"}},"survival":[],"causes":[],"causeNotes":{"whale":{"zh":"仅南极半岛和斯科蒂亚海的长须鲸，夏季每年就估计要吃掉约 797 万吨磷虾。","en":"Fin whales alone are estimated to eat about 7.97 million tonnes of krill per summer in the Antarctic Peninsula and Scotia Sea.","ref":"biuw2024","basis":"measured"},"seal":{"zh":"南极浮冰区的食蟹海豹，食谱几乎全是磷虾。","en":"Crabeater seals in the pack ice eat krill as almost their only food.","ref":"guerrero2021","basis":"related"},"trawl":{"zh":"南极磷虾渔获自 1993 年以来增加到约四倍。","en":"Krill catch has increased fourfold since 1993.","ref":"savoca2024","basis":"measured"},"starve":{"zh":"在冬季海冰下发现了较多的磷虾后幼体，海冰生物可能对它们越冬存活很重要。","en":"Postlarval krill found under winter sea ice suggest that ice-associated biota matter for winter survival.","ref":"flores2012","basis":"measured"}},"facts":[{"zh":"南极磷虾在西南大西洋的密度自 1970 年代起明显下降。","en":"Krill density in the productive southwest Atlantic has declined since the 1970s.","ref":"atkinson2004","basis":"measured","stages":["adult"]},{"zh":"西南大西洋占南大洋磷虾资源的一半以上。","en":"The southwest Atlantic sector holds over 50% of Southern Ocean krill stocks.","ref":"atkinson2004b","basis":"measured","stages":["adult"]},{"zh":"仅南极半岛和斯科蒂亚海的长须鲸，夏季每年就要吃掉约 797 万吨磷虾。","en":"Fin whales in the Scotia Sea and Antarctic Peninsula eat about 7.97 million tonnes of krill per summer.","ref":"biuw2024","basis":"measured","stages":["adult","old"],"causes":["whale"]},{"zh":"长须鲸夏季吃掉的磷虾量约为同季商业捕捞量的 20 倍。","en":"Fin whale krill consumption in one summer was around 20 times the commercial krill catch in Area 48.","ref":"biuw2024b","basis":"measured","stages":["adult"],"causes":["whale"]},{"zh":"南极半岛一带的磷虾数量大约每 5 到 6 年起伏一次，主要受新生个体数量影响。","en":"Antarctic Peninsula krill abundance cycles every 5–6 years, driven mainly by recruitment.","ref":"dong2025","basis":"measured","stages":["juv"]},{"zh":"南极磷虾的渔获量自 1993 年以来增加到约四倍。","en":"Krill catch has increased fourfold since 1993.","ref":"savoca2024","basis":"measured","stages":["adult","old"],"causes":["trawl"]},{"zh":"在冬季海冰下找到的磷虾后幼体，说明冰下生物对它们越冬很重要。","en":"Postlarval krill under winter sea ice suggest ice-associated biota are important for their winter survival.","ref":"flores2012","basis":"measured","stages":["juv"],"decisions":["ice_edge"],"causes":["starve"]},{"zh":"南极浮冰区的食蟹海豹，食谱几乎全是磷虾。","en":"Crabeater seals in the pack ice eat krill as almost their only food.","ref":"guerrero2021","basis":"related","stages":["juv","adult"],"causes":["seal"]}],"existing":{"events.1":"remove","events.5":"remove","events.34":"atkinson2004","decisions.3":"remove","decisions.4":"remove","decisions.5":"flores2012"}},"lanternfish":{"refs":{"yang2026":{"a":"Yang et al.","y":2026,"t":"Dynamics of daily vertical migration in mesopelagic fish communities across the Southern Ocean","s":"Proceedings of the Royal Society B: Biological Sciences","u":"https://doi.org/10.1098/rspb.2025.2264"},"matthews2024":{"a":"Matthews et al.","y":2024,"t":"Biological Characteristics of the Glacier Lantern Fish Benthosema glaciale (Myctophidae) in Icelandic Waters and the Irminger Sea During Summer","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.70386"},"valls2021":{"a":"Valls et al.","y":2021,"t":"Diet and feeding behaviour of albacore Thunnus alalunga in the western Mediterranean Sea during the spawning period","s":"Journal of Fish Biology","u":"https://doi.org/10.1111/jfb.14935"},"cherel2018":{"a":"Cherel et al.","y":2018,"t":"Stable isotopes document the winter foraging ecology of king penguins and highlight connectivity between subantarctic and Antarctic ecosystems","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.3883"},"yano2022":{"a":"Yano et al.","y":2022,"t":"14-3-3 proteins are luciferases candidate proteins from lanternfish Diaphus watasei","s":"Photochemical & Photobiological Sciences","u":"https://doi.org/10.1007/s43630-022-00311-2"}},"survival":[],"causes":[],"causeNotes":{"tuna":{"zh":"金枪鱼（长鳍金枪鱼）在产卵季会专门捕食成群垂直迁移的灯笼鱼。","en":"Albacore tuna in the western Mediterranean specialise on aggregations of migrating myctophids during spawning.","ref":"valls2021","basis":"related"},"seabird":{"zh":"王企鹅冬天在亚南极和南极的海域都吃灯笼鱼。","en":"In winter, king penguins preyed on myctophids in both subantarctic and Antarctic waters.","ref":"cherel2018","basis":"related"}},"facts":[{"zh":"南大洋的灯笼鱼约有 14.2 百万吨每天往返上下迁移，占总生物量的近三成。","en":"Of 48.3 million tonnes of Southern Ocean lanternfish, 14.2 million tonnes migrate vertically each day.","ref":"yang2026","basis":"measured","stages":["juv","adult"],"decisions":["dusk"]},{"zh":"冰岛水域采到的冰川灯笼鱼（Benthosema glaciale）年龄为 2 到 6 岁。","en":"Glacier lanternfish sampled in Icelandic waters were 2 to 6 years old.","ref":"matthews2024","basis":"related","stages":["old"]},{"zh":"地中海的长鳍金枪鱼在产卵期专门捕食成群垂直迁移的灯笼鱼。","en":"Albacore in the western Mediterranean fed on migrating myctophids during spawning.","ref":"valls2021","basis":"related","stages":["adult"],"causes":["tuna"]},{"zh":"灯笼鱼用腹侧发光器让身体的影子消失，这叫做反照明。","en":"Lanternfish use ventral light organs to hide their silhouette from below, a strategy called counterillumination.","ref":"yano2022","basis":"related","stages":["juv","adult"],"decisions":["lure_dim"]},{"zh":"冬天的王企鹅在两个海区都捕食灯笼鱼。","en":"In winter, king penguins preyed on myctophids in both subantarctic and Antarctic zones.","ref":"cherel2018","basis":"related","stages":["adult"],"causes":["seabird"]}],"existing":{"events.8":"yano2022","decisions.5":"yano2022"}},"layer_hen":{"refs":{"plosone2016mort":{"a":"Weeks et al.","y":2016,"t":"Implications for Welfare, Productivity and Sustainability of the Variation in Reported Levels of Mortality for Laying Hen Flocks Kept in Different Housing Systems: A Meta-Analysis of Ten Studies","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0146394"},"avd2016lesions":{"a":"Kajlich et al.","y":2016,"t":"Incidence, Severity, and Welfare Implications of Lesions Observed Postmortem in Laying Hens from Commercial Noncage Farms in California and Iowa","s":"Avian Diseases","u":"https://doi.org/10.1637/11247-080415-Reg.1"},"avd2016vent":{"a":"Kajlich et al.","y":2016,"t":"Incidence, Severity, and Welfare Implications of Lesions Observed Postmortem in Laying Hens from Commercial Noncage Farms in California and Iowa","s":"Avian Diseases","u":"https://doi.org/10.1637/11247-080415-Reg.1"},"poultsci2015keel":{"a":"Petrik et al.","y":2015,"t":"On-farm comparison of keel fracture prevalence and other welfare indicators in conventional cage and floor-housed laying hens in Ontario, Canada","s":"Poultry Science","u":"https://doi.org/10.3382/ps/pev039"},"frontvet2016keel":{"a":"Casey-Trott & Widowski","y":2016,"t":"Behavioral Differences of Laying Hens with Fractured Keel Bones within Furnished Cages","s":"Frontiers in Veterinary Science","u":"https://doi.org/10.3389/fvets.2016.00042"},"ps2026nc":{"a":"Butler-Lund et al.","y":2026,"t":"A multiple correspondence analysis of necropsy findings in non-caged laying hens that died during the production period","s":"Poultry Science","u":"https://doi.org/10.1016/j.psj.2026.106734"},"sweden2009cann":{"a":"Fossum et al.","y":2009,"t":"Causes of mortality in laying hens in different housing systems in 2001 to 2004","s":"Acta Veterinaria Scandinavica","u":"https://doi.org/10.1186/1751-0147-51-3"},"plosone2015perch":{"a":"Stratmann et al.","y":2015,"t":"Soft perches in an aviary system reduce incidence of keel bone damage in laying hens","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0122568"},"tsg2006":{"a":"German federal law, consolidated text","y":2006,"t":"Tierschutzgesetz (TierSchG)","s":"Bundesgesetzblatt, Germany","u":"https://www.gesetze-im-internet.de/tierschg/BJNR012770972.html"},"avd2019structure":{"a":"Fulton","y":2019,"t":"Health of Commercial Egg Laying Chickens in Different Housing Systems","s":"Avian Diseases","u":"https://doi.org/10.1637/11942-080618-Reg.1"}},"survival":[{"from":126,"to":490,"surv":0.9,"ref":"plosone2016mort","basis":"measured","zh":"自由放养的蛋鸡群到 60–80 周龄时，平均累计死亡率约 10%。","en":"In free-range laying flocks, about 10% of hens had died by 60 to 80 weeks of age on average."}],"causes":[],"causeNotes":{"keel":{"zh":"龙骨骨折在各种饲养系统中都很常见。","en":"Keel bone fractures are highly prevalent in laying hens in all housing systems.","ref":"frontvet2016keel","basis":"measured"},"peck":{"zh":"啄食同类导致的死亡在蛋鸡中是已知的死因之一。","en":"Cannibalism, meaning pecking that leads to death, is a recognised cause of hen mortality.","ref":"sweden2009cann","basis":"measured"},"infect":{"zh":"输卵管炎和腹膜炎是非笼养蛋鸡最常见的死因之一。","en":"Salpingitis-peritonitis is among the most common diagnosed causes of death in non-caged hens.","ref":"ps2026nc","basis":"measured"},"prolapse":{"zh":"泄殖腔脱出在出现死亡或淘汰的蛋鸡中是常见的病变。","en":"Cloacal prolapse is a common lesion in hens examined after death or culling.","ref":"avd2016lesions","basis":"measured"},"cage_trap":{"zh":"在棚舍结构中被卡住而死亡的鸡，在某些鸡舍里比较常见。","en":"Some hens die after being caught in the housing structure, most often in aviary systems.","ref":"avd2019structure","basis":"measured"}},"facts":[{"zh":"在安大略省的农场里，平养鸡群的龙骨骨折率比笼养鸡群高。","en":"On Ontario farms, keel fractures were 48.3% in floor-housed flocks versus 24.8% in cage flocks.","ref":"poultsci2015keel","basis":"measured","stages":["layer"],"causes":["keel"],"decisions":["perch"]},{"zh":"自由放养蛋鸡群到 60–80 周龄时，平均累计死亡率约 10%，但各群差异很大。","en":"Free-range flocks averaged about 10% cumulative mortality at 60 to 80 weeks of age.","ref":"plosone2016mort","basis":"measured","stages":["layer","spent"]},{"zh":"在死亡或被淘汰的非笼养母鸡中，泄殖腔脱出占 30.5%。","en":"In noncage hens examined after death or culling, 30.5% had cloacal prolapse.","ref":"avd2016lesions","basis":"measured","stages":["layer"],"causes":["prolapse"]},{"zh":"非笼养蛋鸡中，啄肛和龙骨变形等病变在至少 40% 的母鸡上可见。","en":"In noncage hens, vent cannibalism and keel deformation were seen in at least 40% of hens.","ref":"avd2016vent","basis":"measured","stages":["layer"],"causes":["peck","keel"]},{"zh":"德国法律禁止无合理理由地处死蛋鸡品种的雏鸡（公雏）。","en":"German law prohibits killing chicks of domestic hens, with limited exceptions.","ref":"tsg2006","basis":"official","stages":["chick"]}],"existing":{"events.0":"remove","events.9":"frontvet2016keel","decisions.0":"remove","decisions.2":"plosone2015perch"}},"lion":{"refs":{"luangwa2018":{"a":"Mweetwa et al.","y":2018,"t":"Quantifying lion (Panthera leo) demographic response following a three-year moratorium on trophy hunting","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0197030"},"hwange2024":{"a":"Dejeante et al.","y":2024,"t":"Counter-strategies to infanticide: The importance of cubs in determining lion habitat selection and social interactions","s":"Journal of Animal Ecology","u":"https://doi.org/10.1111/1365-2656.14045"},"ngorongoro2004":{"a":"Kissui & Packer","y":2004,"t":"Top-down population regulation of a top predator: lions in the Ngorongoro Crater","s":"Proceedings of the Royal Society of London. Series B: Biological Sciences","u":"https://doi.org/10.1098/rspb.2004.2797"},"cms_lion":{"a":"CMS (Convention on Migratory Species)","y":2023,"t":"Conservation Status of the African Lion","s":"CMS","u":"https://www.cms.int/en/node/653"},"bs_gir":{"a":"Business Standard (citing Gujarat Forest Department)","y":2020,"t":"Guj's lion count rises to 674 from 523, PM hopes positive trend continues","s":"Business Standard","u":"https://business-standard.com/article/current-affairs/guj-s-lion-count-rises-to-674-from-523-pm-hopes-positive-trend-continues-120061100126_1.html"}},"survival":[],"causes":[],"causeNotes":{"infanticide":{"zh":"狮子是会杀婴的物种，雄狮可以留在幼崽身边，也可以巡逻领地来防止别的雄狮入侵。","en":"Lions are an infanticidal species; males can stay near cubs or patrol their territory against rival males.","ref":"hwange2024","basis":"measured"}},"facts":[{"zh":"赞比亚南卢安瓜的研究发现，暂停三年狩猎后，亚成年雄狮的存活率升高了 17.1 个百分点，成年雄狮升高了 14.0 个百分点。","en":"In South Luangwa, Zambia, a three-year hunting pause raised survival by 17.1 points for subadult males and 14.0 points for adult males.","ref":"luangwa2018","basis":"measured","stages":["sub","adult"]},{"zh":"恩戈罗戈罗火山口的狮群在 1994 至 2001 年间遭遇三次疾病暴发，种群一直没能恢复到环境容量。","en":"In Ngorongoro Crater, three disease outbreaks between 1994 and 2001 stopped the lion population from recovering.","ref":"ngorongoro2004","basis":"measured"},{"zh":"2020 年，古吉拉特邦森林部数出了 674 头亚洲狮。","en":"In 2020, Gujarat's forest department counted 674 Asiatic lions.","ref":"bs_gir","basis":"official","flags":["gir"]},{"zh":"狮子是会杀婴的物种，雄狮有两种办法保护幼崽：留在幼崽身边，或是更勤地巡逻领地。","en":"Lions are an infanticidal species; males can guard cubs by staying close to them or by patrolling their territory.","ref":"hwange2024","basis":"measured","stages":["cub"],"causes":["infanticide"]}],"existing":{"events.6":"remove","events.22":"cms_lion","events.34":"bs_gir","decisions.1":"remove"}},"mayfly":{"refs":{"gcb2016":{"a":"Verberk et al.","y":2016,"t":"Field and laboratory studies reveal interacting effects of stream oxygenation and warming on aquatic ectotherms","s":"Global Change Biology","u":"https://doi.org/10.1111/gcb.13240"},"mayflies2019":{"a":"Jacobus et al.","y":2019,"t":"Mayflies (Ephemeroptera) and Their Contributions to Ecosystem Services","s":"Insects","u":"https://doi.org/10.3390/insects10060170"},"mayflies2019b":{"a":"Jacobus et al.","y":2019,"t":"Mayflies (Ephemeroptera) and Their Contributions to Ecosystem Services","s":"Insects","u":"https://doi.org/10.3390/insects10060170"},"mayflies2019c":{"a":"Jacobus et al.","y":2019,"t":"Mayflies (Ephemeroptera) and Their Contributions to Ecosystem Services","s":"Insects","u":"https://doi.org/10.3390/insects10060170"}},"survival":[],"causes":[],"causeNotes":{"low_oxygen":{"zh":"在缺氧的水里，两种欧洲蜉蝣稚虫的致死温度分别降低了 5.5 和 8.2°C。","en":"In low-oxygen water, the lethal temperature for two European mayfly nymph species dropped by 5.5 and 8.2 °C.","ref":"gcb2016","basis":"related"}},"facts":[{"zh":"蜉蝣的有翅成虫没有功能性的口器和消化系统，不吃东西。","en":"Winged adult mayflies have no working mouthparts or digestive system, so they do not feed.","ref":"mayflies2019","basis":"measured","stages":["imago"]},{"zh":"蜉蝣独有亚成虫这一阶段，在现存昆虫中是唯一的。","en":"Mayflies are the only living insects with a subimago stage.","ref":"mayflies2019b","basis":"measured","stages":["subimago"]},{"zh":"蜉蝣稚虫的取食方式多样，有的是收集者，有的是滤食者，还有的是主动捕食者。","en":"Mayfly nymphs feed in several ways, including as collectors, filterers, scrapers and active predators.","ref":"mayflies2019c","basis":"measured","stages":["nymph"]}],"existing":{"events.4":"remove","events.18":"mayflies2019"}},"mite":{"refs":{"krause2019":{"a":"Krause et al.","y":2019,"t":"Shift in trophic niches of soil microarthropods with conversion of tropical rainforest into plantation systems as indicated by stable isotopes (15N, 13C)","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0224520"},"vonsaltzwedel2014":{"a":"von Saltzwedel et al.","y":2014,"t":"Evidence for Frozen-Niche Variation in a Cosmopolitan Parthenogenetic Soil Mite Species (Acari, Oribatida)","s":"PLoS ONE","u":"https://doi.org/10.1371/journal.pone.0113268"}},"survival":[],"causes":[],"causeNotes":{},"facts":[{"zh":"甲螨是土壤里数量最多的小动物之一，参与落叶分解和养分循环。","en":"Oribatid mites are among the most abundant soil animals and take part in decomposition and nutrient cycling.","ref":"krause2019","basis":"related","stages":["proto","deuto","adult","old"]},{"zh":"一种分布很广的甲螨是孤雌生殖的，不经雄螨也能繁殖。","en":"A widespread oribatid soil mite species reproduces parthenogenetically, without males.","ref":"vonsaltzwedel2014","basis":"related","stages":["adult"]}],"existing":{"events.5":"krause2019","events.12":"vonsaltzwedel2014"}},"mosquito":{"refs":{"balestrino2022":{"a":"Balestrino et al.","y":2022,"t":"Field Performance Assessment of Irradiated Aedes albopictus Males Through Mark–Release–Recapture Trials With Multiple Release Points","s":"Frontiers in Bioengineering and Biotechnology","u":"https://doi.org/10.3389/fbioe.2022.876677"},"helgen1989":{"a":"Helgen","y":1989,"t":"Larval Mosquitoes as Vulnerable Prey: Chaoborus Predation","s":"Canadian Journal of Fisheries and Aquatic Sciences","u":"https://doi.org/10.1139/f89-209"}},"survival":[],"causes":[],"causeNotes":{},"facts":[{"zh":"野外释放的白纹伊蚊雄蚊，每天的存活率与空气相对湿度呈正相关。","en":"Released adult male Asian tiger mosquitoes survived each day more often when the air was more humid.","ref":"balestrino2022","basis":"related","stages":["adult"]},{"zh":"在水里，伊蚊幼虫比同处一地的小型水蚤更容易被幽蚊幼虫捕食。","en":"Aedes mosquito larvae are much more vulnerable to Chaoborus predator larvae than the small water fleas (Daphnia) they coexist with.","ref":"helgen1989","basis":"related","stages":["larva"]}],"existing":{"decisions.1":"remove"}},"nematode":{"refs":{"tan1999":{"a":"Tan et al.","y":1999,"t":"Killing of Caenorhabditis elegans by Pseudomonas aeruginosa used to model mammalian bacterial pathogenesis","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.96.2.715"},"tan1999slow":{"a":"Tan et al.","y":1999,"t":"Killing of Caenorhabditis elegans by Pseudomonas aeruginosa used to model mammalian bacterial pathogenesis","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.96.2.715"},"lee2011":{"a":"Lee et al.","y":2011,"t":"Nictation, a dispersal behavior of the nematode Caenorhabditis elegans, is regulated by IL2 neurons","s":"Nature Neuroscience","u":"https://doi.org/10.1038/nn.2975"},"hsueh2017":{"a":"Hsueh et al.","y":2017,"t":"Nematophagous fungus Arthrobotrys oligospora mimics olfactory cues of sex and food to lure its nematode prey","s":"eLife","u":"https://doi.org/10.7554/elife.20023"},"shi2014":{"a":"Shi & Murphy","y":2014,"t":"Mating Induces Shrinking and Death in Caenorhabditis Mothers","s":"Science","u":"https://doi.org/10.1126/science.1242958"},"duan2025":{"a":"Duan et al.","y":2025,"t":"Nutrient State-Dependent Ascarosides and Nematode Immune Response Limit the Predation of Arthrobotrys oligospora","s":"Microorganisms","u":"https://doi.org/10.3390/microorganisms13122816"},"felix2011":{"a":"Félix et al.","y":2011,"t":"Natural and experimental infection of Caenorhabditis nematodes by novel viruses related to nodaviruses","s":"PLoS Biology","u":"https://doi.org/10.1371/journal.pbio.1000586"},"mcgill2015":{"a":"McGill et al.","y":2015,"t":"Anhydrobiosis and freezing-tolerance: adaptations that facilitate the establishment of Panagrolaimus nematodes in polar habitats","s":"PLOS ONE","u":"https://doi.org/10.1371/journal.pone.0116084"},"eren2026":{"a":"Eren et al.","y":2026,"t":"Predatory aggression evolved through adaptations to noradrenergic circuits","s":"Nature","u":"https://doi.org/10.1038/s41586-025-10009-x"}},"survival":[],"causes":[],"causeNotes":{"pathogen":{"zh":"铜绿假单胞菌这样的细菌能在几天内把线虫杀死，线虫吃进去的细菌会在体内致病。","en":"The bacterium Pseudomonas aeruginosa kills C. elegans, with slow killing taking several days on minimal medium.","ref":"tan1999","basis":"related"},"fungus":{"zh":"食线虫真菌会形成陷阱，像捕食者一样捉住线虫。","en":"Nematode-trapping fungi are soil predators that catch nematodes, a typical predator-prey relationship.","ref":"duan2025","basis":"related"},"pristionchus":{"zh":"Pristionchus pacificus 是一种会捕食其他线虫的肉食性线虫。","en":"Pristionchus pacificus is a predatory nematode that hunts other nematodes.","ref":"eren2026","basis":"related"},"dry":{"zh":"一些土壤线虫能失去几乎全部水分仍能存活。","en":"Some soil nematodes can survive losing both free and bound water.","ref":"mcgill2015","basis":"related"}},"facts":[{"zh":"用基础培养基培养的铜绿假单胞菌，要花几天时间才能把线虫杀死。","en":"PA14 grown on minimal medium kills C. elegans slowly, over several days.","ref":"tan1999slow","basis":"related","stages":["larva","adult","old"],"causes":["pathogen"],"decisions":["pseudomonas"]},{"zh":"食线虫真菌会释放气味，把线虫引过来。","en":"The trapping fungus Arthrobotrys oligospora releases odours that attract C. elegans and other nematodes.","ref":"hsueh2017","basis":"related","stages":["larva","adult","old"],"causes":["fungus"],"decisions":["fungus_trap"]},{"zh":"许多线虫会站起来、摆动头部，这种行为能把它们送到新的地方。","en":"Many nematodes stand on their tails and wave their heads, a behaviour that disperses them.","ref":"lee2011","basis":"related","decisions":["nictation"]},{"zh":"与雄虫交配后，雌雄同体会缩小，并在停止产卵后不久死去。","en":"After mating, a hermaphrodite mother shrinks and dies soon after she stops producing offspring.","ref":"shi2014","basis":"related","stages":["adult","old"],"decisions":["male"]},{"zh":"食线虫真菌捕食线虫，是土壤里典型的捕食与被捕食关系。","en":"Nematode-trapping fungi prey on nematodes in soil, a typical predator-prey relationship.","ref":"duan2025","basis":"related","stages":["larva","adult","old"],"causes":["fungus"]},{"zh":"2011 年在野生线虫中发现了两种新的 RNA 病毒。","en":"In 2011, two new RNA viruses were found in wild C. elegans and C. briggsae isolates.","ref":"felix2011","basis":"related","stages":["adult","old"]}],"existing":{"events.0":"remove","events.4":"remove","events.9":"remove","events.11":"remove","events.14":"felix2011","events.29":"remove","decisions.0":"remove","decisions.1":"remove","decisions.2":"lee2011","decisions.3":"hsueh2017","decisions.4":"shi2014"}},"panda":{"refs":{"cpv2025":{"a":"Zhou et al.","y":2025,"t":"First Identification of CPV-2c Infection in a Wild Cub Giant Panda (Ailuropoda melanoleuca) Suggesting an Emerging Transmission From Wildlife and Domestic Dogs","s":"Transboundary and Emerging Diseases","u":"https://doi.org/10.1155/tbed/6716483"},"fmr2021":{"a":"Bi et al.","y":2021,"t":"Field metabolic rates of giant pandas reveal energetic adaptations","s":"Scientific Reports","u":"https://doi.org/10.1038/s41598-021-01872-5"},"captive2025":{"a":"Luo et al.","y":2025,"t":"Exploring Captive Giant Panda Reproduction: Maternal and Offspring Factor Correlations from 324 Breeding Events","s":"Animals","u":"https://doi.org/10.3390/ani15081182"}},"survival":[],"causes":[],"causeNotes":{"disease":{"zh":"2020 年在卧龙自然保护区发现的一只年幼野生大熊猫，经检查确诊为犬细小病毒感染。","en":"A young wild giant panda found dead in Wolong in 2020 was diagnosed with canine parvovirus, a disease that threatens wild cubs.","ref":"cpv2025","basis":"measured"}},"facts":[{"zh":"大熊猫常常坐在一片竹子里，一吃就是好几个小时。","en":"Giant pandas often sit in one patch of bamboo and eat for hours at a time.","ref":"fmr2021","basis":"measured","stages":["young","adult"]},{"zh":"圈养繁殖记录中，单胎幼崽出生时比双胞胎重。","en":"In captive breeding records, single cubs were heavier at birth than twins.","ref":"captive2025","basis":"related","stages":["cub"],"decisions":["twin_nest"]},{"zh":"2020 年，卧龙自然保护区发现的一只年幼野生大熊猫因犬细小病毒死亡。","en":"A young wild panda found dead in Wolong in 2020 was infected with canine parvovirus.","ref":"cpv2025","basis":"measured","stages":["cub","young"],"causes":["disease"]}],"existing":{"events.0":"remove","events.9":"remove","events.10":"remove","decisions.2":"remove"}},"penguin":{"refs":{"lescornec2025":{"a":"Le Scornec et al.","y":2025,"t":"Intrinsic and extrinsic drivers of juvenile survival in emperor penguins","s":"Journal record (AGRIS abstract; journal listed as Polar Biology in a 2024 thesis)","u":"https://agris.fao.org/search/en/records/682f33fad0cf3796e621592b"},"lescornec2025_mass":{"a":"Le Scornec et al.","y":2025,"t":"Intrinsic and extrinsic drivers of juvenile survival in emperor penguins","s":"Journal record (AGRIS abstract)","u":"https://agris.fao.org/search/en/records/682f33fad0cf3796e621592b"}},"survival":[],"causes":[],"causeNotes":{},"facts":[{"zh":"帝企鹅幼鸟的年存活率在不同年份差别很大，从 0.08 到 0.48。","en":"Emperor penguin juvenile survival varied between 0.08 and 0.48 from year to year.","ref":"lescornec2025","basis":"measured","stages":["juv"]},{"zh":"幼鸟的存活和它离开父母时的体重有关，体重又受雏鸟期海冰多少影响。","en":"Juvenile survival depends on body mass, which tracks sea ice during the chick-rearing period.","ref":"lescornec2025_mass","basis":"measured","stages":["chick","juv"]}],"existing":{"opening":"remove"}},"pig":{"refs":{"rvsc2018crush":{"a":"Rangstrup-Christensen et al.","y":2018,"t":"Causes of preweaning mortality in organic outdoor sow herds","s":"Research in Veterinary Science","u":"https://doi.org/10.1016/j.rvsc.2018.02.010"},"pvm2012farmers":{"a":"KilBride et al.","y":2012,"t":"A cohort study of preweaning piglet mortality and farrowing accommodation on 112 commercial pig farms in England","s":"Preventive Veterinary Medicine","u":"https://doi.org/10.1016/j.prevetmed.2011.11.011"},"pvm2012rate":{"a":"KilBride et al.","y":2012,"t":"A cohort study of preweaning piglet mortality and farrowing accommodation on 112 commercial pig farms in England","s":"Preventive Veterinary Medicine","u":"https://doi.org/10.1016/j.prevetmed.2011.11.011"},"animals2025diarrhea":{"a":"Ambrós et al.","y":2025,"t":"Efficacy of a New Commercial Vaccine Against Clostridioides difficile and Clostridium perfringens Type A for Recurrent Swine Neonatal Diarrhea Under Field Conditions","s":"Animals","u":"https://doi.org/10.3390/ani15091200"},"pathogens2026resp":{"a":"Barna et al.","y":2026,"t":"Epidemiological Analysis of Environmental Factors Affecting Porcine Pleuropneumonia in a Herd Endemic for Actinobacillus pleuropneumoniae","s":"Pathogens","u":"https://doi.org/10.3390/pathogens15050513"},"pathogens2026heat":{"a":"Barna et al.","y":2026,"t":"Epidemiological Analysis of Environmental Factors Affecting Porcine Pleuropneumonia in a Herd Endemic for Actinobacillus pleuropneumoniae","s":"Pathogens","u":"https://doi.org/10.3390/pathogens15050513"},"tas2020postweaning":{"a":"Gebhardt et al.","y":2020,"t":"Postweaning mortality in commercial swine production. I: review of non-infectious contributing factors","s":"Translational Animal Science","u":"https://doi.org/10.1093/tas/txaa068"},"dtw2002hungary":{"a":"Hungarian farrow-to-finish unit","y":2002,"t":"Emergency-culling and mortality in growing/fattening pigs in a large Hungarian \"farrow-to-finish\" production unit","s":"Deutsche Tierärztliche Wochenschrift","u":"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=11838293&retmode=xml"},"phm2026b5":{"a":"Loscertales et al.","y":2026,"t":"A pantothenic acid deficiency outbreak causing mortality and neuromuscular disorders in newborn and nursery piglets","s":"Porcine Health Management","u":"https://doi.org/10.1186/s40813-026-00527-z"}},"survival":[],"causes":[{"stages":["suckle"],"shares":{"crush":0.83},"ref":"rvsc2018crush","basis":"related","zh":"在有机户外养殖的母猪群里，出生后四天内死亡的仔猪中，83% 是被母猪压死。","en":"In organic outdoor herds, crushing caused 83% of piglet deaths up to day four after birth."}],"causeNotes":{"scour":{"zh":"新生仔猪腹泻会增加仔猪死亡率。","en":"Neonatal diarrhoea increases piglet mortality and slows weight gain.","ref":"animals2025diarrhea","basis":"related"},"resp":{"zh":"呼吸道疾病导致的死亡在温度和湿度升高的时期更多。","en":"Deaths from respiratory disease rose during periods of higher temperature or humidity.","ref":"pathogens2026resp","basis":"measured"},"heat":{"zh":"气候因素，尤其是温度和湿度，会影响育肥猪的死亡率。","en":"Climate, especially temperature and humidity, affects mortality in finishing pigs.","ref":"pathogens2026heat","basis":"measured"}},"facts":[{"zh":"在英国的农场中，农场主报告称，压死健康的仔猪是最常见的死因，占活产仔猪哺乳期死亡的 55%。","en":"Farmers reported that crushing caused 55% of live-born preweaning piglet deaths.","ref":"pvm2012farmers","basis":"measured","stages":["suckle"],"causes":["crush"]},{"zh":"在英国的 112 个农场中，活产仔猪的哺乳期死亡率为 12%。","en":"Live-born piglets had 12% preweaning mortality in the English farms studied.","ref":"pvm2012rate","basis":"measured","stages":["suckle"]},{"zh":"工业平均的断奶后死亡率在保育、育肥或断奶到出栏阶段，约为 4% 到 8%。","en":"Industry averages for postweaning mortality are 4 to 8% in nursery and finishing stages.","ref":"tas2020postweaning","basis":"related","stages":["nursery","finish"]},{"zh":"匈牙利一个大型繁育育肥场的生长育肥猪，年均紧急淘汰和死亡率为 8.62%。","en":"In one large Hungarian farrow-to-finish unit, growing pigs had an average annual culling and mortality rate of 8.62%.","ref":"dtw2002hungary","basis":"measured","stages":["finish"]},{"zh":"西班牙一个猪场的一次泛酸缺乏疫情中，仔猪死亡率曾高达 65%。","en":"In one Spanish farm outbreak, piglet mortality reached up to 65% during a pantothenic acid deficiency.","ref":"phm2026b5","basis":"related","stages":["suckle"]}],"existing":{"decisions.2":"remove"}},"pigeon":{"refs":{"bto_rockdove_juv":{"a":"BTO","y":2024,"t":"Rock Dove (BirdFacts)","s":"British Trust for Ornithology species account (wild ancestor of feral pigeons)","u":"https://bto.org/understanding-birds/birdfacts/rock-dove"},"bto_rockdove_adult":{"a":"BTO","y":2024,"t":"Rock Dove (BirdFacts)","s":"British Trust for Ornithology species account (wild ancestor of feral pigeons)","u":"https://bto.org/understanding-birds/birdfacts/rock-dove"},"bto_rockdove_clutch":{"a":"BTO","y":2024,"t":"Rock Dove (BirdFacts)","s":"British Trust for Ornithology species account (wild ancestor of feral pigeons)","u":"https://bto.org/understanding-birds/birdfacts/rock-dove"},"bto_rockdove_inc":{"a":"BTO","y":2024,"t":"Rock Dove (BirdFacts)","s":"British Trust for Ornithology species account (wild ancestor of feral pigeons)","u":"https://bto.org/understanding-birds/birdfacts/rock-dove"},"bto_rockdove_fledge":{"a":"BTO","y":2024,"t":"Rock Dove (BirdFacts)","s":"British Trust for Ornithology species account (wild ancestor of feral pigeons)","u":"https://bto.org/understanding-birds/birdfacts/rock-dove"}},"survival":[{"from":35,"to":400,"surv":0.57,"ref":"bto_rockdove_juv","basis":"related","zh":"野生岩鸽的幼鸽在第一年约有 57% 能活下来，城市鸽数据不足。","en":"About 57% of young wild rock doves survive their first year."},{"from":400,"to":1130,"surv":0.442,"ref":"bto_rockdove_adult","basis":"related","zh":"野生岩鸽的成鸽每年约有三分之二活到下一年。","en":"About two-thirds of adult wild rock doves survive each year."}],"causes":[],"causeNotes":{},"facts":[{"zh":"岩鸽一窝通常只产 2 枚蛋。","en":"Wild rock doves typically lay 2 eggs per clutch.","ref":"bto_rockdove_clutch","basis":"related","stages":["egg"]},{"zh":"岩鸽孵蛋大约 16 到 19 天。","en":"Rock doves incubate their eggs for about 16 to 19 days.","ref":"bto_rockdove_inc","basis":"related","stages":["egg"]},{"zh":"岩鸽幼鸽大约 35 到 37 天后离巢。","en":"Young rock doves leave the nest after about 35 to 37 days.","ref":"bto_rockdove_fledge","basis":"related","stages":["squab"]},{"zh":"野生岩鸽的幼鸽第一年存活率约为 57%。","en":"About 57% of young rock doves survive their first year.","ref":"bto_rockdove_juv","basis":"related","stages":["juv"]},{"zh":"野生岩鸽的成鸽每年存活率约为 66.5%。","en":"Adult rock doves survive each year at about 66.5%.","ref":"bto_rockdove_adult","basis":"related","stages":["adult"]}],"existing":{"opening":"remove"}},"rat":{"refs":{"panksepp2003":{"a":"Panksepp & Burgdorf","y":2003,"t":"\"Laughing\" rats and the evolutionary antecedents of human joy?","s":"Physiology & Behavior","u":"https://doi.org/10.1016/s0031-9384(03)00159-8"},"lambert2008":{"a":"Lambert et al.","y":2008,"t":"The effect of habitat management on home-range size and survival of rural Norway rat populations","s":"Journal of Applied Ecology","u":"https://doi.org/10.1111/j.1365-2664.2008.01543.x"},"ruiz2024":{"a":"Ruiz-López et al.","y":2024,"t":"No evidence of mutations associated with anticoagulant resistance in gene Vkorc1 in brown and black rats from Barcelona","s":"Science of The Total Environment","u":"https://doi.org/10.1016/j.scitotenv.2024.176321"}},"survival":[],"causes":[],"causeNotes":{"poison":{"zh":"城市里的褐家鼠常被抗凝血类毒饵毒死。","en":"City brown rats are often controlled with anticoagulant poison.","ref":"ruiz2024","basis":"measured"}},"facts":[{"zh":"被挠痒的大鼠会发出约 50 千赫兹的超声“笑声”。","en":"Tickled rats emit ultrasonic chirps of about 50 kHz.","ref":"panksepp2003","basis":"measured","stages":["juv","adult"]},{"zh":"在农场建筑附近清理掉遮蔽物，会让那里的鼠群数量和存活率下降。","en":"Changing habitat near farm buildings reduced the survival rate of Norway rat populations.","ref":"lambert2008","basis":"measured","stages":["adult"]},{"zh":"城市里的褐家鼠常被抗凝血类毒饵控制。","en":"City brown rats are often controlled with anticoagulant poison.","ref":"ruiz2024","basis":"measured","stages":["juv","adult","old"],"causes":["poison"],"decisions":["bait"]}],"existing":{"events.15":"panksepp2003"}},"salmon":{"refs":{"welch_late":{"a":"Welch et al.","y":2011,"t":"In situ measurement of coastal ocean movements and survival of juvenile Pacific salmon","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.1014044108"},"welch_decline":{"a":"Welch et al.","y":2011,"t":"In situ measurement of coastal ocean movements and survival of juvenile Pacific salmon","s":"Proceedings of the National Academy of Sciences","u":"https://doi.org/10.1073/pnas.1014044108"},"araki_rapid":{"a":"Araki et al.","y":2008,"t":"Fitness of hatchery-reared salmonids in the wild","s":"Evolutionary Applications","u":"https://doi.org/10.1111/j.1752-4571.2008.00026.x"},"araki_nonlocal":{"a":"Araki et al.","y":2008,"t":"Fitness of hatchery-reared salmonids in the wild","s":"Evolutionary Applications","u":"https://doi.org/10.1111/j.1752-4571.2008.00026.x"}},"survival":[],"causes":[],"causeNotes":{},"facts":[{"zh":"一些太平洋鲑种群的大量死亡，发生在洄游的后期，离出生的河也更远。","en":"In some salmon populations, much juvenile mortality happened late in the migration and far from the home river.","ref":"welch_late","basis":"measured","stages":["ocean_juv"]},{"zh":"许多太平洋和大西洋的鲑鱼种群，在过去二十年里回归的数量急剧减少，海里的死亡率很高。","en":"Many Pacific and Atlantic salmon populations have had sharply falling returns and high ocean mortality over the past two decades.","ref":"welch_decline","basis":"measured","stages":["ocean_juv","ocean_adult"]},{"zh":"人工繁殖的鲑鱼只经过一两代圈养，在野外的适应力就可能很快下降。","en":"Hatchery-reared salmonids can lose fitness in the wild very quickly, after one or two generations of captive rearing.","ref":"araki_rapid","basis":"related","decisions":["hatch_release"]},{"zh":"外地来的人工繁殖鱼群，在野外的繁殖表现普遍很差。","en":"Nonlocal hatchery stocks consistently reproduce very poorly in the wild.","ref":"araki_nonlocal","basis":"related","decisions":["hatch_release"]}],"existing":{"events.2":"remove","events.15":"remove","events.20":"remove","events.24":"remove","decisions.0":"remove","decisions.3":"remove","decisions.4":"remove","decisions.6":"araki_rapid"}},"sardine":{"refs":{"srep2015":{"a":"Garrido et al.","y":2015,"t":"Born small, die young: Intrinsic, size-selective mortality in marine larval fish","s":"Scientific Reports","u":"https://doi.org/10.1038/srep17065"},"srep2015b":{"a":"Garrido et al.","y":2015,"t":"Born small, die young: Intrinsic, size-selective mortality in marine larval fish","s":"Scientific Reports","u":"https://doi.org/10.1038/srep17065"},"yatsu2019":{"a":"Yatsu","y":2019,"t":"Review of population dynamics and management of small pelagic fishes around the Japanese Archipelago","s":"Fisheries Science","u":"https://doi.org/10.1007/s12562-019-01305-3"},"yatsu2019b":{"a":"Yatsu","y":2019,"t":"Review of population dynamics and management of small pelagic fishes around the Japanese Archipelago","s":"Fisheries Science","u":"https://doi.org/10.1007/s12562-019-01305-3"},"bordes2025":{"a":"Bordes et al.","y":2025,"t":"Disentangling the influence of density dependence, size dependence and environmental effects on fish population dynamics","s":"Journal of Animal Ecology","u":"https://doi.org/10.1111/1365-2656.70177"},"caputo2022":{"a":"Caputo et al.","y":2022,"t":"Inter- and intra-specific trophic interactions of coastal delphinids off the eastern coast of South Africa inferred from stable isotope analysis","s":"Marine Environmental Research","u":"https://doi.org/10.1016/j.marenvres.2022.105784"},"bartashevich2024":{"a":"Bartashevich et al.","y":2024,"t":"Collective anti-predator escape manoeuvres through optimal attack and avoidance strategies","s":"Communications Biology","u":"https://doi.org/10.1038/s42003-024-07267-2"}},"survival":[],"causes":[],"causeNotes":{"purse":{"zh":"大型围网船队在 1980 年代大量投入，海洋生产力下降时，过度捕捞随之出现。","en":"Large purse-seine fleets built up in the 1980s, when ocean productivity was falling, and overfishing followed.","ref":"yatsu2019b","basis":"related"},"dolphin":{"zh":"南非东岸的海豚被认为会跟随成群沙丁鱼的聚集而移动。","en":"Dolphins off South Africa are thought to follow pulses of shoaling sardines.","ref":"caputo2022","basis":"related"},"tuna":{"zh":"红肉旗鱼会攻击成群的沙丁鱼，鱼群的逃避方式也会改变攻击的成败。","en":"Striped marlin attack schooling sardines, and the school's escape pattern shapes each attack.","ref":"bartashevich2024","basis":"related"},"starve":{"zh":"很多早期死亡发生在没有捕食者的卵黄期和混合摄食期，原因是幼体自身的缺陷。","en":"Much early larval mortality happens in the absence of predators, during the yolk and early feeding period.","ref":"srep2015","basis":"related"}},"facts":[{"zh":"沙丁鱼仔鱼的很大一部分死亡发生在没有捕食者的卵黄期和混合摄食期。","en":"A large part of larval fish mortality happens during the yolk and early feeding period, without predators.","ref":"srep2015","basis":"related","stages":["egg","larva"],"causes":["starve"]},{"zh":"像沙丁鱼这样产卵多的小型鱼类，大部分仔鱼体型小，几乎没有存活机会。","en":"Small pelagic fish spawn many eggs, so most larvae are small and have almost no chance to survive.","ref":"srep2015b","basis":"related","stages":["egg","larva"],"decisions":["spawn"]},{"zh":"日本小型中上层鱼类的种群波动，主要取决于早期存活率的变化。","en":"Variation in early survival is a key driver of population swings in Japanese small pelagic fish.","ref":"yatsu2019","basis":"related","stages":["larva","juv"]},{"zh":"日本沙丁鱼的过度捕捞，与 1980 年代投入过多的大型围网船队有关。","en":"Overfishing was driven by large purse-seine fleets built in the 1980s when ocean productivity was poor.","ref":"yatsu2019b","basis":"related","stages":["juv","adult"],"decisions":["purse"],"causes":["purse"]},{"zh":"大西洋东北部比斯开湾的沙丁鱼，自然死亡率在 1 岁和 3 岁时受种群密度影响。","en":"In Bay of Biscay sardines, natural mortality at age 1 and age 3 depends on population density.","ref":"bordes2025","basis":"measured","stages":["juv","adult"]},{"zh":"南非东岸的海豚被认为跟随沙丁鱼的聚集而移动，因此会一起捕食。","en":"Dolphins off South Africa are thought to follow the pulses of shoaling sardines.","ref":"caputo2022","basis":"related","stages":["juv","adult"],"causes":["dolphin"]},{"zh":"红肉旗鱼攻击成群沙丁鱼时，鱼群的逃避方式决定了攻击的成败。","en":"Striped marlin attack schooling sardines, and the school's escape pattern shapes how well those attacks work.","ref":"bartashevich2024","basis":"related","stages":["juv","adult"],"causes":["tuna"]}],"existing":{"decisions.0":"srep2015b","decisions.2":"remove"}},"sea_turtle":{"refs":{"tort_incub":{"a":"Fowler","y":1979,"t":"Hatching Success and Nest Predation in the Green Sea Turtle, Chelonia Mydas, at Tortuguero, Costa Rica","s":"Ecology","u":"https://doi.org/10.2307/1936863"},"tort_nonhatch":{"a":"Fowler","y":1979,"t":"Hatching Success and Nest Predation in the Green Sea Turtle, Chelonia Mydas, at Tortuguero, Costa Rica","s":"Ecology","u":"https://doi.org/10.2307/1936863"},"tort_pred":{"a":"Fowler","y":1979,"t":"Hatching Success and Nest Predation in the Green Sea Turtle, Chelonia Mydas, at Tortuguero, Costa Rica","s":"Ecology","u":"https://doi.org/10.2307/1936863"},"tort_emerge":{"a":"Fowler","y":1979,"t":"Hatching Success and Nest Predation in the Green Sea Turtle, Chelonia Mydas, at Tortuguero, Costa Rica","s":"Ecology","u":"https://doi.org/10.2307/1936863"}},"survival":[{"from":0,"to":60,"surv":0.515,"ref":"tort_emerge","basis":"measured","zh":"在托图格罗，算上被毁的巢，大约一半的卵能变成爬出沙面的幼龟。","en":"At Tortuguero, counting destroyed nests, about half of the eggs became hatchlings that left the sand."}],"causes":[],"causeNotes":{},"facts":[{"zh":"在哥斯达黎加的托图格罗，一窝卵平均约 104 枚，沙里孵化平均约 62 天。","en":"A green turtle nest at Tortuguero held about 104 eggs and took about 62 days to incubate.","ref":"tort_incub","basis":"measured","stages":["egg"]},{"zh":"托图格罗的海龟卵中，大约 13% 没有孵化出来。","en":"About 13% of all eggs deposited at Tortuguero did not hatch.","ref":"tort_nonhatch","basis":"measured","stages":["egg"]},{"zh":"在托图格罗的研究区，狗、长鼻浣熊和秃鹫毁掉了 38% 的巢。","en":"At Tortuguero, dogs, coatis and vultures destroyed 38% of study-area nests.","ref":"tort_pred","basis":"measured","stages":["egg"]},{"zh":"成功的巢里，平均有 83% 的卵孵出并爬出沙面。","en":"In successful study-area nests, the mean emergence percentage was 83%.","ref":"tort_emerge","basis":"measured","stages":["hatch"]}],"existing":{"events.1":"remove","events.3":"remove","events.50":"remove","decisions.3":"remove"}},"sheep":{"refs":{"awassi_lamb":{"a":"Ceyhan & Kozaklı","y":2023,"t":"The survival analysis of some environmental factors associated with lamb mortality in Awassi sheep","s":"Tropical Animal Health and Production","u":"https://doi.org/10.1007/s11250-023-03821-y"},"algeria_lamb":{"a":"Benmebarek et al.","y":2025,"t":"Epidemiological, pathological and microbiological investigation of neonatal lamb mortality in the region of Constantine, Algeria","s":"Veterinary Record Open","u":"https://doi.org/10.1002/vro2.70021"},"algeria_causes":{"a":"Benmebarek et al.","y":2025,"t":"Epidemiological, pathological and microbiological investigation of neonatal lamb mortality in the region of Constantine, Algeria","s":"Veterinary Record Open","u":"https://doi.org/10.1002/vro2.70021"},"kopp_nsw":{"a":"Kopp et al.","y":2020,"t":"A Survey of New South Wales Sheep Producer Practices and Perceptions on Lamb Mortality and Ewe Supplementation","s":"Animals","u":"https://doi.org/10.3390/ani10091586"},"kopp_mortality":{"a":"Kopp et al.","y":2020,"t":"A Survey of New South Wales Sheep Producer Practices and Perceptions on Lamb Mortality and Ewe Supplementation","s":"Animals","u":"https://doi.org/10.3390/ani10091586"},"bighorn_lamb":{"a":"Cain et al.","y":2018,"t":"Survival and cause-specific mortality of desert bighorn sheep lambs","s":"The Journal of Wildlife Management","u":"https://doi.org/10.1002/jwmg.21597"},"kendrick2001":{"a":"Kendrick et al.","y":2001,"t":"Sheep don't forget a face","s":"Nature","u":"https://doi.org/10.1038/35102669"}},"survival":[{"from":0,"to":90,"surv":0.757,"ref":"awassi_lamb","basis":"measured","zh":"在一项 Awassi 羊的研究中，羔羊从出生到断奶前约 75.7% 能活下来。","en":"About 75.7% of lambs in this Awassi sheep study survived to weaning."}],"causes":[],"causeNotes":{"lamb_cold":{"zh":"在阿尔及利亚的一项研究中，饥饿和低体温综合征是新生羔羊的死因之一。","en":"Starvation-hypothermia was among the causes of death in neonatal lambs in an Algerian study.","ref":"algeria_causes","basis":"measured"},"pneu":{"zh":"羔羊的呼吸道疾病也是常见的死因之一。","en":"Respiratory disorders were among the causes of death in surveyed neonatal lambs.","ref":"algeria_causes","basis":"measured"},"predator":{"zh":"澳洲的研究者认为，多数情况下捕食对羔羊死亡的影响有限。","en":"An Australian producer survey concludes predation has limited impact on lamb deaths in most cases.","ref":"kopp_nsw","basis":"measured"}},"facts":[{"zh":"在阿尔及利亚的一项调查中，羔羊出生后早期的死亡率为 5.74%。","en":"In an Algerian farm survey, 5.74% of lambs died in the neonatal period.","ref":"algeria_lamb","basis":"measured","stages":["newborn"],"causes":["lamb_cold"]},{"zh":"澳洲的生产者估计，出生到做标记之间的羔羊死亡率通常在 20% 到 25% 之间。","en":"Published Australian estimates put lamb mortality between birth and marking at 20-25%.","ref":"kopp_mortality","basis":"measured","stages":["newborn","lamb"]}],"existing":{"events.3":"kendrick2001"}},"sparrow":{"refs":{"bto_sparrow":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_juv":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_inc":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_fledge":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_broods":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_clutch":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"},"bto_sparrow_decline":{"a":"BTO","y":2024,"t":"House Sparrow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://bto.org/learn/about-birds/birdfacts/house-sparrow?page=1"}},"survival":[{"from":26,"to":391,"surv":0.489,"ref":"bto_sparrow_juv","basis":"measured","zh":"在英国，离巢的幼雀大约一半能活过第一年。","en":"About half of juvenile sparrows in Britain survive their first year."},{"from":391,"to":1121,"surv":0.326,"ref":"bto_sparrow","basis":"measured","zh":"在英国，成年麻雀每年约有 57% 活到下一年。","en":"About 57% of adult sparrows in Britain survive each year."}],"causes":[],"causeNotes":{},"facts":[{"zh":"英国麻雀一窝通常产 4 到 5 枚蛋。","en":"British sparrows usually lay 4 to 5 eggs per clutch.","ref":"bto_sparrow_clutch","basis":"measured","stages":["egg"]},{"zh":"雌麻雀孵蛋大约 12 到 15 天。","en":"The female sparrow incubates the eggs for about 12 to 15 days.","ref":"bto_sparrow_inc","basis":"measured","stages":["egg"]},{"zh":"雏雀在巢中大约 14 到 17 天后离巢。","en":"Nestlings leave the nest after about 14.5 to 17 days.","ref":"bto_sparrow_fledge","basis":"measured","stages":["nest"]},{"zh":"英国的麻雀一年通常养 2 到 3 窝。","en":"British sparrows typically raise 2 to 3 broods a year.","ref":"bto_sparrow_broods","basis":"measured","stages":["adult"]},{"zh":"英国的麻雀数量 1995 到 2024 年间下降了 18%。","en":"The British sparrow population fell 18% between 1995 and 2024.","ref":"bto_sparrow_decline","basis":"measured","stages":["adult"]}],"existing":{"events.2":"remove","events.3":"remove","events.10":"remove","events.15":"remove","events.16":"bto_sparrow_broods","decisions.0":"bto_sparrow_fledge","decisions.1":"remove"}},"spider":{"refs":{"bell2005":{"a":"Bell et al.","y":2005,"t":"Ballooning dispersal using silk: world fauna, phylogenies, genetics and models","s":"Bulletin of Entomological Research","u":"https://doi.org/10.1079/ber2004350"},"elgar1992":{"a":"Elgar","y":1992,"t":"Sexual cannibalism in spiders and other invertebrates","s":"Cannibalism","u":"https://doi.org/10.1093/oso/9780198546504.003.0007"}},"survival":[],"causes":[],"causeNotes":{"cannibal":{"zh":"有些蜘蛛的雌性会试图吃掉雄性配偶。","en":"Certain spiders are known to attempt to eat their mates.","ref":"elgar1992","basis":"related"}},"facts":[{"zh":"许多蜘蛛的幼体会靠放出的丝飘浮在空中迁移，这叫做“气球扩散”。","en":"Spiders, spider mites and moth larvae disperse by aerial silk ballooning.","ref":"bell2005","basis":"related","stages":["juv"],"acts":["explore"]}],"existing":{"events.19":"remove","events.22":"elgar1992","decisions.0":"bell2005"}},"springtail":{"refs":{"thakur2018":{"a":"Thakur et al.","y":2018,"t":"Temperature effects on prey and basal resources exceed that of predators in an experimental community","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.4695"},"thakur2018diet":{"a":"Thakur et al.","y":2018,"t":"Temperature effects on prey and basal resources exceed that of predators in an experimental community","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.4695"}},"survival":[],"causes":[],"causeNotes":{"mite":{"zh":"捕食螨是跳虫的凶猛天敌。","en":"Predatory mites are voracious predators of Collembola species.","ref":"thakur2018","basis":"related"}},"facts":[{"zh":"跳虫大多是真菌的啃食者，也会吃落叶里的碎屑。","en":"Springtails are generally fungal grazers, but also eat litter debris.","ref":"thakur2018diet","basis":"related","stages":["sub","adult"],"acts":["forage"]}],"existing":{"events.3":"remove","events.10":"remove","decisions.0":"remove","decisions.1":"remove","decisions.2":"remove","decisions.4":"remove"}},"squid":{"refs":{"gutierrez2023":{"a":"Gutiérrez et al.","y":2023,"t":"Parasite assemblages in volatile host stocks: inter- and intra-cohort variability restrict their value as biological tags for squid stock assessment","s":"Parasitology","u":"https://doi.org/10.1017/s0031182023001051"},"jiang2026":{"a":"Jiang et al.","y":2026,"t":"Ignoring death after spawning misrepresents the population dynamics of marine semelparous species","s":"Journal of Applied Ecology","u":"https://doi.org/10.1111/1365-2664.70572"},"goto2019":{"a":"Goto & Takanashi","y":2019,"t":"Changes in the strategy of a small-scale jigging fishery for Japanese flying squid Todarodes pacificus off northeastern Japan","s":"Fisheries Science","u":"https://doi.org/10.1007/s12562-019-01360-w"},"lee2025":{"a":"Lee et al.","y":2025,"t":"Long-term variability analysis of the habitat suitability index for Todarodes pacificus (Japanese common squid) using MODIS-Aqua dataset in the East/Japan Sea, South Korea","s":"Marine Environmental Research","u":"https://doi.org/10.1016/j.marenvres.2025.107537"}},"survival":[],"causes":[],"causeNotes":{"jig":{"zh":"鱿鱼钓船在岩手县外海的渔场，渔获下降后会不断换渔场找鱼。","en":"Jigging fleets off Iwate kept moving to new grounds to find more squid as catches fell.","ref":"goto2019","basis":"related"},"old":{"zh":"这种鱿鱼一生只繁殖一次，产卵之后的成体在种群模型里会被移除。","en":"Squid are semelparous: adults are removed from the population after they spawn.","ref":"jiang2026","basis":"related"}},"facts":[{"zh":"近亲阿根廷短鳍鱿鱼一生约只有一年，生长很快。","en":"A close relative, Illex argentinus, grows rapidly over a one-year lifespan.","ref":"gutierrez2023","basis":"related","stages":["adult","old"]},{"zh":"这种鱿鱼一生只繁殖一次，产卵后的死亡要算进种群模型。","en":"Post-spawning death must be included in models of semelparous squid populations.","ref":"jiang2026","basis":"related","stages":["old"]},{"zh":"岩手县外海的鱿鱼钓渔船，渔获下降后会转换渔场。","en":"Jigging fleets off Iwate shifted grounds to exploit more abundant squid when catches fell.","ref":"goto2019","basis":"related","stages":["juv","adult"],"causes":["jig"]},{"zh":"在日本海（韩国称东海），这种鱿鱼的栖息适宜度下降，同时年渔获量也下降。","en":"Habitat suitability for this squid declined in the East/Japan Sea, matching a drop in its annual catch.","ref":"lee2025","basis":"measured","stages":["adult"],"causes":["jig"]}],"existing":{"events.14":"jiang2026","decisions.0":"remove","decisions.2":"remove"}},"swallow":{"refs":{"ece3_swallow":{"a":"Grüebler et al.","y":2014,"t":"Equal nonbreeding period survival in adults and juveniles of a long-distant migrant bird","s":"Ecology and Evolution","u":"https://doi.org/10.1002/ece3.984"},"bto_swallow_adult":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_juv":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_fledge":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_inc":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_clutch":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_broods":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"},"bto_swallow_decline":{"a":"BTO","y":2024,"t":"Swallow (BirdFacts)","s":"British Trust for Ornithology species account","u":"https://www.bto.org/learn/about-birds/birdfacts/swallow"}},"survival":[{"from":36,"to":57,"surv":0.32,"ref":"ece3_swallow","basis":"measured","zh":"幼燕离巢后头三周，只有约三成能活下来。","en":"About a third of young swallows survive the first three weeks after leaving the nest."},{"from":401,"to":1131,"surv":0.14,"ref":"bto_swallow_adult","basis":"measured","zh":"在英国，成年家燕每年约有 37% 活到下一年。","en":"About 37% of adult swallows in Britain survive each year."}],"causes":[],"causeNotes":{},"facts":[{"zh":"家燕孵蛋大约 16 到 18 天。","en":"Female swallows incubate their eggs for about 16 to 18 days.","ref":"bto_swallow_inc","basis":"measured","stages":["egg"]},{"zh":"英国的家燕一窝通常产 4 到 5 枚蛋。","en":"British swallows usually lay 4 to 5 eggs per clutch.","ref":"bto_swallow_clutch","basis":"measured","stages":["egg"]},{"zh":"英国的家燕一年通常繁殖 2 窝。","en":"British swallows typically raise 2 broods a year.","ref":"bto_swallow_broods","basis":"measured","stages":["adult"]},{"zh":"幼燕在第一年里约有 40% 能活下来。","en":"About 39.5% of juvenile swallows survive their first year.","ref":"bto_swallow_juv","basis":"measured","stages":["fledge"]},{"zh":"英国的家燕数量 1995 到 2024 年间下降了 23%。","en":"The UK breeding swallow population fell 23% between 1995 and 2024.","ref":"bto_swallow_decline","basis":"measured","stages":["adult"]}],"existing":{"events.6":"bto_swallow_fledge","events.13":"remove","decisions.0":"remove","decisions.1":"remove","decisions.3":"remove"}},"termite":{"refs":{"quarcoo2019":{"a":"Quarcoo et al.","y":2019,"t":"Temperature-Mediated Variations in Behavior and Mortality Caused by Non-Repellent Insecticides in Subterranean Termites (Blattodea: Rhinotermitidae)","s":"Insects","u":"https://doi.org/10.3390/insects10020037"},"quarcoo2019bait":{"a":"Quarcoo et al.","y":2019,"t":"Temperature-Mediated Variations in Behavior and Mortality Caused by Non-Repellent Insecticides in Subterranean Termites (Blattodea: Rhinotermitidae)","s":"Insects","u":"https://doi.org/10.3390/insects10020037"},"wen2026":{"a":"Wen et al.","y":2026,"t":"Differential Responses of the Ant Odontoponera transversa to Termite Chemical Signals: Evidence for Prey Preference","s":"Insects","u":"https://doi.org/10.3390/insects17050501"},"chen2022":{"a":"Chen et al.","y":2022,"t":"The effect of ergosterol on the allogrooming behavior of termites in response to the entomopathogenic fungus Metarhizium anisopliae","s":"Insect Science","u":"https://doi.org/10.1111/1744-7917.13055"}},"survival":[],"causes":[],"causeNotes":{"ant":{"zh":"蚂蚁是白蚁的主要天敌，会捕食白蚁。","en":"Ants are considered the major predators of termites.","ref":"wen2026","basis":"related"},"fungus":{"zh":"白蚁接触绿僵菌孢子后，舔毛清洁的次数明显增加，这是它们对真菌的行为反应。","en":"Coptotermes workers exposed to Metarhizium spores groom themselves much more often, a behavioural response to the fungus.","ref":"chen2022","basis":"measured"},"bait":{"zh":"杀虫剂会让台湾乳白蚁等白蚁中毒死亡，温度会影响死亡情况。","en":"Insecticides such as fipronil and indoxacarb cause termite mortality, and temperature also affects it.","ref":"quarcoo2019bait","basis":"measured"}},"facts":[{"zh":"在 15–30°C 的实验里，台湾乳白蚁工蚁的存活率约为 88%–94%。","en":"In lab tests between 15 and 30 °C, Formosan termite workers survived at 88–94%.","ref":"quarcoo2019","basis":"measured","stages":["adult"]}],"existing":{"events.17":"remove"}},"wolf":{"refs":{"cubaynes2014":{"a":"Cubaynes et al.","y":2014,"t":"Density-dependent intraspecific aggression regulates survival in northern Yellowstone wolves (Canis lupus)","s":"Journal of Animal Ecology","u":"https://doi.org/10.1111/1365-2656.12238"},"cubaynes_age":{"a":"Cubaynes et al.","y":2014,"t":"Density-dependent intraspecific aggression regulates survival in northern Yellowstone wolves (Canis lupus)","s":"Journal of Animal Ecology","u":"https://doi.org/10.1111/1365-2656.12238"},"liberg2012":{"a":"Liberg et al.","y":2012,"t":"Shoot, shovel and shut up: cryptic poaching slows restoration of a large carnivore in Europe","s":"Proceedings of the Royal Society B: Biological Sciences","u":"https://doi.org/10.1098/rspb.2011.1275"},"suutarinen2017":{"a":"Suutarinen & Kojola","y":2017,"t":"Poaching regulates the legally hunted wolf population in Finland","s":"Biological Conservation","u":"https://doi.org/10.1016/j.biocon.2017.08.031"},"suutarinen_surv":{"a":"Suutarinen & Kojola","y":2017,"t":"Poaching regulates the legally hunted wolf population in Finland","s":"Biological Conservation","u":"https://doi.org/10.1016/j.biocon.2017.08.031"},"creel2010":{"a":"Creel & Rotella","y":2010,"t":"Meta-analysis of relationships between human offtake, total mortality and population dynamics of gray wolves (Canis lupus)","s":"PLoS ONE","u":"https://doi.org/10.1371/journal.pone.0012918"},"nps":{"a":"Cassidy, K. (National Park Service)","y":2025,"t":"Research Report: Using Radio Collars to Study Yellowstone Wolves","s":"National Park Service","u":"https://www.nps.gov/articles/using-radio-collars-to-study-yellowstone-wolves.htm"},"ethwolf2024":{"a":"Marino et al.","y":2024,"t":"Concurrent Rabies and Canine Distemper Outbreaks and Infection in Endangered Ethiopian Wolves","s":"Emerging Infectious Diseases","u":"https://doi.org/10.3201/eid3012.240432"}},"survival":[],"causes":[{"stages":["juv","young","adult","old"],"shares":{"gun":0.5},"ref":"liberg2012","basis":"measured","zh":"在斯堪的纳维亚，偷猎约占狼死亡的一半（所有年龄合计）。","en":"In Scandinavia, poaching caused about half of wolf deaths across all ages.","flags":["europe_farm"]}],"causeNotes":{"gun":{"zh":"在芬兰，偷猎是狼的首要死因，其次是合法猎杀。","en":"In Finland, poaching was the main cause of wolf death, ahead of legal hunting.","ref":"suutarinen2017","basis":"measured"},"pack_fight":{"zh":"在黄石北部，狼的密度越高，狼之间的争斗越多，成年狼存活率越低。","en":"In northern Yellowstone, higher wolf density meant more fighting between wolves and lower adult survival.","ref":"cubaynes2014","basis":"measured"},"disease":{"zh":"埃塞俄比亚狼是狼的近亲，它们在 2019 年同时爆发狂犬病和犬瘟热。","en":"Ethiopian wolves, close relatives of grey wolves, had concurrent rabies and canine distemper outbreaks in 2019.","ref":"ethwolf2024","basis":"related"}},"facts":[{"zh":"在斯堪的纳维亚，偷猎约占狼死亡的一半。","en":"In Scandinavia, poaching caused about half of wolf deaths.","ref":"liberg2012","basis":"measured","causes":["gun"],"flags":["europe_farm"]},{"zh":"在芬兰，偷猎是狼的首要死因，其次是合法猎杀。","en":"In Finland, poaching was the main cause of wolf death, ahead of legal hunting.","ref":"suutarinen2017","basis":"measured","causes":["gun"],"flags":["europe_farm"]},{"zh":"芬兰模型显示，偷猎严重时狼每年存活率约 0.11–0.24，没有偷猎时约 0.43–0.60。","en":"Finnish models put yearly wolf survival at 0.11–0.24 with heavy poaching and 0.43–0.60 with none.","ref":"suutarinen_surv","basis":"measured","causes":["gun"],"flags":["europe_farm"]},{"zh":"黄石的狼中，一岁狼和成年狼的存活率相近，六岁以上的成年狼存活率更低。","en":"In Yellowstone, yearlings and adults survived at similar rates, but adults older than six survived less well.","ref":"cubaynes_age","basis":"measured","stages":["adult","old"],"flags":["yellowstone"]},{"zh":"黄石北部，狼的密度升高时狼之间的争斗增多，成年狼的存活率随之下降。","en":"In northern Yellowstone, higher wolf density increased fights between wolves and lowered adult survival.","ref":"cubaynes2014","basis":"measured","stages":["adult"],"causes":["pack_fight"],"flags":["yellowstone"]},{"zh":"北美蒙大拿和爱达荷的狼，在取消保护的那一年有 37.1% 被人类捕杀。","en":"In Montana and Idaho, 37.1% of wolves were killed by people in the year they lost federal protection.","ref":"creel2010","basis":"measured","causes":["gun"],"flags":["yellowstone"]},{"zh":"1995 和 1996 年放归狼后，黄石一直用无线电项圈监测和研究狼。","en":"Since the 1995 and 1996 reintroductions, radio collars have been the main tool for studying Yellowstone wolves.","ref":"nps","basis":"official","flags":["yellowstone"]}],"existing":{"events.6":"remove","events.16":"remove","events.26":"nps","decisions.2":"remove"}}};

;
// Sharing, with no backend: a whole life is packed into the link's #fragment, and drawn as an image card.
// Before launch on your own domain, set LUNHUI_URL to the public address (adds the QR code to image cards).
window.LUNHUI_URL = "https://nextlife.top/";
(() => {
  'use strict';
  const FRAMED = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
  const CLAUDE_URL = '';
  const base = () => (window.LUNHUI_URL ? window.LUNHUI_URL + (document.documentElement.lang === 'en' ? 'en/' : '') : '') || (location.origin + location.pathname);
  const isPublic = () => !!window.LUNHUI_URL || (!FRAMED && !/^(localhost|127\.|\[::1\])/.test(location.hostname));

  // ---------- link codec: only lowercase letters, digits and hyphens ----------
  // life-<species>-<minutes>-<cause>-<offspring>-<escapes>-<traits>-<strip>-<rolls>-<awards>-<choices>
  const b36 = (n) => Math.max(0, Math.round(n)).toString(36);
  const num = (s, max) => { const n = parseInt(s, 36); return Number.isFinite(n) ? Math.min(n, max) : 0; };
  function encode(d) {
    return ['life', d.id.replace(/_/g, ''), b36(d.cal * 1440), d.cause, b36(d.off), b36(d.esc), `${d.con}${d.tem}`, d.strip || 'x', d.rolls.length ? d.rolls.map(b36).join('') : 'x', d.awards.length ? `s${d.awards[0]}` : 'x', b36(d.ch)].join('-');
  }
  function decode(hash, ids) {
    const p = String(hash || '').split('-');
    if (p.length !== 11 || p[0] !== 'life' || p.some((x) => !/^[a-z0-9]+$/.test(x))) return null;
    const id = ids.find((x) => x.replace(/_/g, '') === p[1]);
    if (!id) return null;
    return {
      id, cal: num(p[2], 1e10) / 1440, cause: p[3].slice(0, 2), off: num(p[4], 1e12), esc: num(p[5], 999),
      con: Math.min(+p[6][0] || 0, 2), tem: Math.min(+p[6][1] || 0, 3), strip: p[7] === 'x' ? '' : p[7].replace(/[^gyrz]/g, '').slice(0, 12),
      rolls: p[8] === 'x' ? [] : [...p[8]].slice(0, 6).map((c) => num(c, 35)), awards: /^s[0-3]$/.test(p[9]) ? [+p[9][1]] : [], ch: num(p[10], 9999),
    };
  }

  // ---------- QR code (byte mode, error correction M, versions 1–10) ----------
  function qr(text) {
    const ECC = [0, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26], BLK = [0, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5];
    const data = new TextEncoder().encode(text);
    const raw = (v) => { let r = (16 * v + 128) * v + 64; if (v >= 2) { const a = Math.floor(v / 7) + 2; r -= (25 * a - 10) * a - 55; if (v >= 7) r -= 36; } return Math.floor(r / 8); };
    const cap = (v) => raw(v) - ECC[v] * BLK[v];
    let v = 1; while (v <= 10 && 4 + (v < 10 ? 8 : 16) + data.length * 8 > cap(v) * 8) v++;
    if (v > 10) return null;
    const bits = []; const put = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4); put(data.length, v < 10 ? 8 : 16); data.forEach((b) => put(b, 8));
    const total = cap(v) * 8; put(0, Math.min(4, total - bits.length)); while (bits.length % 8) bits.push(0);
    for (let p = 0xEC; bits.length < total; p ^= 0xEC ^ 0x11) put(p, 8);
    const cw = []; for (let i = 0; i < bits.length; i += 8) cw.push(parseInt(bits.slice(i, i + 8).join(''), 2));
    const mul = (x, y) => { let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; } return z; };
    const deg = ECC[v], div = new Array(deg).fill(0); div[deg - 1] = 1;
    for (let i = 0, root = 1; i < deg; i++, root = mul(root, 2)) for (let j = 0; j < deg; j++) { div[j] = mul(div[j], root); if (j + 1 < deg) div[j] ^= div[j + 1]; }
    const rem = (d) => { const r = new Array(deg).fill(0); d.forEach((b) => { const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => { r[i] ^= mul(c, f); }); }); return r; };
    const nb = BLK[v], rawN = raw(v), nShort = nb - (rawN % nb), shortLen = Math.floor(rawN / nb), blocks = [];
    for (let i = 0, k = 0; i < nb; i++) { const d = cw.slice(k, k + shortLen - deg + (i < nShort ? 0 : 1)); k += d.length; const e = rem(d); if (i < nShort) d.push(-1); blocks.push(d.concat(e)); }
    const out = []; for (let i = 0; i < blocks[0].length; i++) blocks.forEach((b) => { if (b[i] !== -1) out.push(b[i]); });
    const n = v * 4 + 17, M = Array.from({ length: n }, () => new Array(n).fill(false)), F = Array.from({ length: n }, () => new Array(n).fill(false));
    const set = (x, y, d) => { M[y][x] = d; F[y][x] = true; };
    for (let i = 0; i < n; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    [[3, 3], [n - 4, 3], [3, n - 4]].forEach(([cx, cy]) => { for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) { const x = cx + dx, y = cy + dy, r = Math.max(Math.abs(dx), Math.abs(dy)); if (x >= 0 && x < n && y >= 0 && y < n) set(x, y, r !== 2 && r !== 4); } });
    const al = []; if (v > 1) { const na = Math.floor(v / 7) + 2, st = Math.ceil((v * 4 + 4) / (na * 2 - 2)) * 2; al.push(6); for (let i = 0, p = n - 7; i < na - 1; i++, p -= st) al.splice(1, 0, p); }
    al.forEach((ax, i) => al.forEach((ay, j) => { if ((i === 0 && j === 0) || (i === 0 && j === al.length - 1) || (i === al.length - 1 && j === 0)) return; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1); }));
    const format = (mask) => {
      const d = (0 << 3) | mask; let r = d; for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537);
      const b = ((d << 10) | r) ^ 0x5412, g = (i) => ((b >>> i) & 1) === 1;
      for (let i = 0; i <= 5; i++) set(8, i, g(i)); set(8, 7, g(6)); set(8, 8, g(7)); set(7, 8, g(8)); for (let i = 9; i < 15; i++) set(14 - i, 8, g(i));
      for (let i = 0; i < 8; i++) set(n - 1 - i, 8, g(i)); for (let i = 8; i < 15; i++) set(8, n - 15 + i, g(i)); set(8, n - 8, true);
    };
    format(0);
    if (v >= 7) { let r = v; for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1F25); const b = (v << 12) | r; for (let i = 0; i < 18; i++) { const d = ((b >>> i) & 1) === 1, a = n - 11 + (i % 3), c = Math.floor(i / 3); set(a, c, d); set(c, a, d); } }
    let k = 0;
    for (let right = n - 1; right >= 1; right -= 2) { if (right === 6) right = 5; for (let vert = 0; vert < n; vert++) for (let j = 0; j < 2; j++) { const x = right - j, up = ((right + 1) & 2) === 0, y = up ? n - 1 - vert : vert; if (!F[y][x] && k < out.length * 8) { M[y][x] = ((out[k >>> 3] >>> (7 - (k & 7))) & 1) === 1; k++; } } }
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!F[y][x] && (x + y) % 2 === 0) M[y][x] = !M[y][x];
    return M;
  }

  // ---------- image card ----------
  const BODY = '"Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif';
  function wrap(g, text, max) {
    const toks = String(text).match(/[⺀-鿿　-ヿ＀-￯‘-”…]|\s+|[^\s⺀-鿿　-ヿ＀-￯‘-”…]+/g) || [];
    const lines = []; let cur = '';
    toks.forEach((t) => {
      if (g.measureText(cur + t).width > max && cur) {
        // closing punctuation never starts a line
        if (/^[，。！？；：、”’」』）…]$/.test(t)) { cur += t; lines.push(cur); cur = ''; return; }
        lines.push(cur); cur = t.trim() ? t : '';
      } else cur += t;
    });
    if (cur.trim()) lines.push(cur);
    return lines;
  }
  function fit(g, text, font, size, max, min = 34) { let s = size; do { g.font = font.replace('%', s); if (g.measureText(text).width <= max) break; s -= 3; } while (s > min); return s; }
  async function card(d) {
    const W = 1080, P = 84, PX = d.en ? '"Jersey 15",monospace' : '"Fusion Pixel","PingFang SC","Microsoft YaHei",sans-serif';
    const C = { bg: '#14122b', panel: '#2c2760', ink: '#fff6e0', mute: '#aaa3d6', line: '#433c86', acc: '#ffcf4a', cyan: '#4fd1c0', bad: '#ff6b5e', good: '#7ddc6a', warn: '#ffb347', frame: '#f3e6c4' };
    const text = [d.name, d.about, d.evidence, d.stat, d.cause, d.lived, d.foot, d.head, d.lead].join('');
    if (document.fonts && document.fonts.load) await Promise.race([Promise.allSettled([`400 60px ${d.en ? '"Jersey 15"' : '"Fusion Pixel"'}`, '400 34px "Noto Sans SC"', '500 34px "Noto Sans SC"'].map((f) => document.fonts.load(f, text))), new Promise((r) => setTimeout(r, 4000))]);
    const c = document.createElement('canvas'); c.width = W; c.height = 1900; const g = c.getContext('2d'); g.imageSmoothingEnabled = false;
    g.fillStyle = C.bg; g.fillRect(0, 0, W, 1900);
    g.fillStyle = '#2a2558'; for (let yy = 20; yy < 1900; yy += 40) for (let xx = 20; xx < W; xx += 40) g.fillRect(xx, yy, 4, 4);
    const frame = (x, y, w, h, fill, edge = C.frame, t = 8) => { g.fillStyle = edge; g.fillRect(x, y - t, w, h + t * 2); g.fillRect(x - t, y, w + t * 2, h); g.fillStyle = fill; g.fillRect(x, y, w, h); };
    const sc = document.createElement('canvas'); sc.width = 192; sc.height = 72;
    window.drawScene(sc, { scene: d.scene, t: 10, night: false, emoji: d.emoji, sprite: d.sprite, sibs: 5, seed: d.seed || 7, act: 'instinct', dead: false });
    frame(44, 44, W - 88, 372, '#000'); g.drawImage(sc, 44, 44, W - 88, 372);
    g.fillStyle = C.acc; g.fillRect(44, 416, W - 88, 56); g.fillStyle = '#2a1b00'; g.textBaseline = 'middle'; g.textAlign = 'left'; fit(g, d.odds, `400 %px ${PX}`, 30, 560, 20); g.fillText(d.odds, P, 446);
    if (d.stars !== null && d.stars !== undefined) { g.fillStyle = '#14122b'; g.fillRect(W - P - 162, 416, 166, 56); const im = await Promise.all(['star', 'starOff'].map((k) => new Promise((r) => { const x = new Image(); x.onload = () => r(x); x.onerror = () => r(null); x.src = window.GAME.iconUrl(k); }))); for (let k = 0; k < 3; k++) { const x = k < d.stars ? im[0] : im[1]; if (x) g.drawImage(x, W - P - 150 + k * 52, 424, 42, 42 * x.height / x.width); } }
    g.textBaseline = 'alphabetic';
    let y = 548;
    g.fillStyle = C.mute; g.font = `400 34px ${PX}`; g.fillText(d.lead, P, y);
    y += 104; fit(g, d.name, `400 %px ${PX}`, 96, W - P * 2); g.fillStyle = '#7a4413'; g.fillText(d.name, P, y + 8); g.fillStyle = C.acc; g.fillText(d.name, P, y);
    g.font = `400 28px ${BODY}`; g.fillStyle = C.mute; y += 56; wrap(g, d.about, W - P * 2).slice(0, 2).forEach((l) => { g.fillText(l, P, y); y += 40; }); y -= 18;
    y += 86; fit(g, d.lived, `400 %px ${PX}`, 60, W - P * 2); g.fillStyle = C.ink; g.fillText(d.lived, P, y);
    y += 56; g.font = `400 36px ${PX}`; g.fillStyle = C.bad; wrap(g, d.cause, W - P * 2).slice(0, 2).forEach((l) => { g.fillText(l, P, y); y += 46; });
    y += 6; const cells = d.strip.split(''), cw = Math.min(64, (W - P * 2) / (cells.length + 1) - 8);
    cells.concat('x').forEach((k, i) => { g.fillStyle = { g: C.good, y: C.warn, r: C.bad, z: C.line, x: C.ink }[k]; g.fillRect(P + i * (cw + 8), y, cw, 28); });
    y += 76;
    frame(P - 8, y, W - P * 2 + 16, 124, C.panel, C.line, 6); fit(g, d.stat, `400 %px ${PX}`, 44, W - P * 2 - 60); g.fillStyle = C.cyan; g.fillText(d.stat, P + 24, y + 60);
    g.fillStyle = C.mute; g.font = `400 24px ${BODY}`; g.fillText(d.statNote, P + 24, y + 100); y += 152;
    if (d.evidence) {
      g.font = `400 30px ${BODY}`; const ev = wrap(g, d.evidence, W - P * 2 - 60).slice(0, 4), h = 112 + ev.length * 44; frame(P - 8, y, W - P * 2 + 16, h, C.panel, C.line, 6);
      g.fillStyle = C.good; g.font = `400 28px ${PX}`; g.fillText(d.evidenceLabel, P + 24, y + 46);
      g.fillStyle = C.ink; g.font = `400 30px ${BODY}`; ev.forEach((l, i) => g.fillText(l, P + 24, y + 94 + i * 44));
      fit(g, d.evidenceSrc, `400 %px ${BODY}`, 24, W - P * 2 - 60, 16); g.fillStyle = C.mute; g.fillText(d.evidenceSrc, P + 24, y + h - 20); y += h;
    }
    const H = Math.max(1440, Math.ceil(y + 230)), fy = H - 84; fit(g, d.foot, `400 %px ${PX}`, 84, 560); g.fillStyle = '#7a4413'; g.fillText(d.foot, P, fy + 7); g.fillStyle = C.acc; g.fillText(d.foot, P, fy);
    const m = isPublic() ? qr(d.url) : null;
    if (m) { const q = 160, x0 = W - P - q, y0 = H - q - 52, u = q / (m.length + 4); frame(x0, y0, q, q, '#fff', C.frame, 6); g.fillStyle = '#000'; m.forEach((r, yy) => r.forEach((on, xx) => { if (on) g.fillRect(x0 + (xx + 2) * u, y0 + (yy + 2) * u, u + 0.4, u + 0.4); })); }
    const out = document.createElement('canvas'); out.width = W; out.height = H; const o = out.getContext('2d'); o.drawImage(c, 0, 0);
    return out;
  }

  // ---------- actions ----------
  async function saveImage(canvas, filename) {
    const blob = await new Promise((r) => canvas.toBlob(r, 'image/png'));
    if (window.claude && window.claude.use) {
      const dl = await window.claude.use('downloads').catch(() => null);
      if (dl) { try { await dl.save({ filename, data: blob }); return 'saved'; } catch (e) { return e && e.code === 'declined' ? 'declined' : 'hold'; } }
    }
    if (FRAMED) return 'hold';
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    return 'saved';
  }
  async function sysShare(canvas, text, url) {
    const blob = await new Promise((r) => canvas.toBlob(r, 'image/png'));
    const file = new File([blob], 'life.png', { type: 'image/png' });
    const withFile = navigator.canShare && navigator.canShare({ files: [file] });
    await navigator.share(withFile ? { files: [file], text } : { text, url });
  }
  window.SOCIAL = {
    encode, decode, qr, card, saveImage, sysShare,
    url: (code) => `${base()}#${code}`,
    canSysShare: () => !FRAMED && !!navigator.share,
    x: (t) => `https://x.com/intent/post?text=${encodeURIComponent(t)}`,
    weibo: (t) => `https://service.weibo.com/share/share.php?title=${encodeURIComponent(t)}`,
  };
})();

;
// Birth circumstances that only make sense together.
// [roll, option, earlierRoll, [allowed options of earlierRoll]] — the option is offered only when the earlier roll landed on one of those.
// A roll with no offered option is skipped.
window.ROLL_RULES = {
  panda: [[2, 0, 0, [1]], [2, 1, 0, [0]], [2, 2, 0, []], [2, 3, 0, []], [3, 0, 0, [0, 1]], [3, 1, 0, [1]], [3, 2, 0, [0, 1]]],
  lion: [[2, 0, 0, [0]], [2, 1, 0, [4]], [2, 2, 0, [5]], [2, 3, 0, [6]], [3, 2, 1, [1]]],
  wolf: [[2, 0, 0, [0, 1]], [2, 1, 0, [2, 3]], [2, 2, 0, [4]], [2, 3, 0, [5]], [3, 2, 1, [0]]],
  chimpanzee: [[3, 0, 0, [1, 2]], [3, 1, 0, [0]], [3, 2, 0, []]],
  cat: [[1, 1, 0, [2]], [1, 2, 0, [2]], [1, 3, 0, [2]], [2, 0, 0, [0, 1]], [2, 1, 0, [0, 2]], [2, 2, 0, []], [2, 3, 0, [2]]],
  dog: [[1, 1, 0, [2]], [1, 2, 0, [2]], [1, 3, 0, [2]], [2, 0, 0, [1]], [2, 1, 0, [1, 2]], [2, 2, 0, [2]], [2, 3, 0, [2]]],
  broiler: [[2, 0, 0, [0]], [2, 1, 0, []], [2, 2, 0, []]],
  bat: [[2, 0, 0, [2, 3]], [2, 1, 0, [0]], [2, 2, 0, [1]], [2, 3, 0, [2]]],
  nematode: [[1, 0, 0, []], [1, 1, 0, [0, 1, 3]]],
  blue_whale: [[1, 0, 0, [0, 2]], [1, 1, 0, [0, 1]], [1, 2, 0, [0, 1]]],
  honeybee: [[3, 2, 0, [0, 1, 3]]],
  housefly: [[1, 0, 0, [1]], [1, 1, 0, [1]], [2, 0, 0, [1]], [2, 1, 0, [1]], [2, 2, 0, [0, 2]], [3, 0, 0, [1]], [3, 1, 0, [1]], [3, 2, 0, [2]]],
  earthworm: [[2, 0, 0, []], [2, 1, 0, []], [2, 2, 0, []]],
  aphid: [[2, 0, 0, [0]], [2, 1, 0, [0]], [2, 2, 0, [3]]],
  mayfly: [[1, 0, 0, [0]], [1, 1, 0, [3]], [1, 2, 0, [3]], [1, 3, 0, [3]], [2, 2, 0, [0, 3]]],
  mite: [[2, 0, 0, [0, 2]], [2, 1, 0, [0]], [2, 2, 0, [1]], [2, 3, 0, [3]]],
  springtail: [[2, 0, 0, [0]], [2, 1, 0, [1, 2, 3]], [2, 2, 0, [2]]],
  octopus: [[1, 0, 0, [0, 1]], [1, 1, 0, [0, 1]], [1, 2, 0, [2]], [1, 3, 0, [0]]],
  pigeon: [[2, 0, 0, []], [2, 1, 0, [2]], [2, 2, 0, [0]], [2, 3, 0, []]],
  salmon: [[1, 0, 0, [0, 1]], [1, 1, 0, []], [1, 2, 0, [2]]],
  sheep: [[2, 2, 0, [1, 2]], [3, 2, 0, [2]]],
  sparrow: [[2, 1, 0, []], [2, 2, 0, [1]], [2, 3, 0, [3]]],
  termite: [[2, 0, 0, []], [2, 1, 0, [0]], [2, 2, 0, [1]], [2, 3, 0, [1]]],
  goat: [[2, 0, 0, [0, 1, 2]], [2, 1, 0, [3]], [2, 2, 0, [0, 1]], [3, 1, 0, [0, 3]], [3, 2, 0, [0, 2]]],
  cattle: [[2, 1, 0, [0]]],
  farmed_carp: [[2, 0, 1, [0, 1]], [2, 1, 1, [0, 1]], [2, 2, 1, [0, 1]]],
  frog: [[2, 2, 0, [1]]],
  greenland_shark: [[1, 2, 0, [2, 3]]],
  ant: [[2, 1, 1, [0]]],
};

;
// Game feel: pixel icons, pixelated creatures, the wheel of rebirth, sound, the timing bar and floating numbers.
// Nothing here decides who you become or how you die, except the timing bar, whose green part equals the stated odds.
(() => {
  'use strict';
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- pixel icons ----------
  const PAL = { r: '#ff6b5e', R: '#b83a44', w: '#fff6e0', y: '#ffcf4a', Y: '#c98a1e', g: '#7ddc6a', G: '#3c8f4d', b: '#6fb7ff', B: '#3566b8', t: '#4fd1c0', k: '#14122b', p: '#c79bff', P: '#7a55c7', m: '#8f88c2', o: '#e8935a', O: '#9a5730' };
  const ICONS = {
    heart: ['.rr...rr..', 'rwrr.rrrr.', 'rwrrrrrrR.', 'rrrrrrrrR.', '.rrrrrrR..', '..rrrrR...', '...rrR....', '....R.....'],
    food: ['......ww..', '.....oow..', '...ooooo..', '..oooooO..', '.oowoooO..', '.owoooO...', '.ooooO....', '..OOO.....'],
    shield: ['bbbbbbbb..', 'bwwbbbBb..', 'bwbbbbBb..', 'bbbbbbBb..', 'bbbbbbBb..', '.bbbbBb...', '..bbBb....', '...BB.....'],
    star: ['....y.....', '....y.....', '...ywy....', 'yyyywyyyy.', '.yywyyyY..', '..yyyyY...', '..yyyyY...', '.yyY.yyY..', '.Y.....Y..'],
    starOff: ['....m.....', '....m.....', '...m.m....', 'mmmm.mmmm.', '.m.....m..', '..m...m...', '..m.m.m...', '.mm...mm..', '.m.....m..'],
    instinct: ['.oo..oo...', '.oo..oo...', 'o......o..', 'oo.oo.oo..', '..oooo....', '.oooooo...', '.oooooo...', '..oo.oo...'],
    forage: ['....G.....', '...GG.....', '..rrrr....', '.rwrrrr...', '.rrrrrR...', '.rrrrrR...', '.rrrrRR...', '..RRRR....'],
    hide: ['....g.....', '..ggggg...', '.ggGgggg..', 'gggggGggg.', 'gGggggggG.', '.ggkggkg..', '..ggggG...', '....O.....'],
    rest: ['...yyy....', '..yy......', '.yy....w..', '.yy..w....', '.yy.......', '.yyy...y..', '..yyyyy...', '...yyy....'],
    explore: ['..wwwww...', '.w..r..w..', 'w..rr...w.', 'w.rrr...w.', 'w...bbb.w.', 'w...bb..w.', '.w..b..w..', '..wwwww...'],
    mate: ['rr.rr.....', 'rrrrr.....', '.rrr.pp.pp', '..r..ppppp', '......ppp.', '.......p..'],
    sound: ['...w......', '..ww..w...', 'wwww...w..', 'wwww.w.w..', 'wwww.w.w..', 'wwww...w..', '..ww..w...', '...w......'],
    mute: ['...m......', '..mm......', 'mmmm.r..r.', 'mmmm..rr..', 'mmmm..rr..', 'mmmm.r..r.', '..mm......', '...m......'],
    globe: ['..bbbb....', '.bggbbb...', 'bgggbbgb..', 'bbggbggb..', 'bbbbbggb..', 'bgbbbbgb..', '.bbgbbb...', '..bbbb....'],
    book: ['PPPPPPPP..', 'PwwPPwwp..', 'PwwPPwwp..', 'PwwPPwwp..', 'PwwPPwwp..', 'PwwPPwwp..', 'PPPPPPPP..'],
    home: ['....r.....', '...rrr....', '..rrrrr...', '.rrrrrrr..', '..wwwww...', '..wwOww...', '..wwOww...'],
    data: ['......t...', '......t...', '...b..t...', '...b..t...', 'y..b..t...', 'y..b..t...', 'wwwwwwww..'],
    skull: ['..wwww....', '.wwwwww...', '.wkwwkw...', '.wkwwkw...', '.wwwwww...', '..wkkw....', '..w..w....'],
  };
  const cache = {};
  function iconUrl(name) {
    if (cache[name]) return cache[name];
    const rows = ICONS[name], w = Math.max(...rows.map((r) => r.replace(/\.+$/, '').length)), c = document.createElement('canvas');
    c.width = w; c.height = rows.length; const g = c.getContext('2d');
    rows.forEach((row, y) => [...row].forEach((ch, x) => { if (PAL[ch]) { g.fillStyle = PAL[ch]; g.fillRect(x, y, 1, 1); } }));
    return (cache[name] = c.toDataURL());
  }
  const icon = (name, px = 20) => `<img class="spr" src="${iconUrl(name)}" alt="" style="height:${px}px;width:auto">`;

  // ---------- pixelated creature from an emoji ----------
  const pixCache = {};
  function pix(emoji, n = 20) {
    if (pixCache[emoji]) return pixCache[emoji];
    const c = document.createElement('canvas'); c.width = c.height = n;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.font = `${n - 4}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(emoji, n / 2, n / 2 + 1);
    const im = g.getImageData(0, 0, n, n), d = im.data;
    for (let i = 0; i < d.length; i += 4) { if (d[i + 3] < 120) { d[i + 3] = 0; continue; } d[i + 3] = 255; for (let k = 0; k < 3; k++) d[i + k] = Math.round(d[i + k] / 32) * 32; }
    g.putImageData(im, 0, 0);
    return (pixCache[emoji] = { canvas: c, url: c.toDataURL() });
  }

  // ---------- sound: short square-wave notes, nothing downloaded ----------
  let ac = null, quiet = false, muted = false;
  try { muted = JSON.parse(localStorage.getItem('lunhui.muted') || 'false'); } catch (e) { /* storage unavailable */ }
  const SFX = {
    blip: [[660, 0, 0.03, 0.02]], move: [[440, 0, 0.04, 0.04]], pick: [[523, 0, 0.06, 0.06], [784, 0.06, 0.09, 0.06]], tick: [[980, 0, 0.025, 0.03]],
    hurt: [[190, 0, 0.1, 0.08], [120, 0.08, 0.16, 0.08]], heal: [[523, 0, 0.06, 0.05], [659, 0.06, 0.06, 0.05], [784, 0.12, 0.1, 0.05]],
    alarm: [[880, 0, 0.09, 0.06], [622, 0.11, 0.09, 0.06], [880, 0.22, 0.09, 0.06], [622, 0.33, 0.12, 0.06]],
    star: [[784, 0, 0.08, 0.06], [988, 0.08, 0.08, 0.06], [1175, 0.16, 0.08, 0.06], [1568, 0.24, 0.22, 0.06]],
    born: [[392, 0, 0.1, 0.06], [523, 0.1, 0.1, 0.06], [659, 0.2, 0.1, 0.06], [1047, 0.3, 0.28, 0.06]],
    dead: [[440, 0, 0.16, 0.07], [392, 0.17, 0.16, 0.07], [330, 0.34, 0.16, 0.07], [220, 0.51, 0.5, 0.07]],
    safe: [[659, 0, 0.07, 0.06], [880, 0.07, 0.07, 0.06], [1319, 0.14, 0.16, 0.06]],
  };
  function sfx(name) {
    if (quiet || muted) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      (SFX[name] || []).forEach(([f, at, len, vol]) => {
        const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + at;
        o.type = 'square'; o.frequency.value = f; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0005, t + len);
        o.connect(g).connect(ac.destination); o.start(t); o.stop(t + len + 0.02);
      });
    } catch (e) { /* no audio here */ }
  }
  function toggleMute() { muted = !muted; try { localStorage.setItem('lunhui.muted', JSON.stringify(muted)); } catch (e) { /* storage unavailable */ } if (!muted) sfx('pick'); return muted; }

  // ---------- the wheel of rebirth ----------
  const WN = 208, SLOTS = 12, STEP = Math.PI * 2 / SLOTS;
  let geo = null;
  function geometry() {
    if (geo) return geo;
    const ang = new Float32Array(WN * WN), rad = new Float32Array(WN * WN);
    for (let y = 0; y < WN; y++) for (let x = 0; x < WN; x++) { const dx = x - WN / 2 + 0.5, dy = y - WN / 2 + 0.5; ang[y * WN + x] = Math.atan2(dy, dx) + Math.PI / 2; rad[y * WN + x] = Math.hypot(dx, dy); }
    return (geo = { ang, rad });
  }
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const WC = { a: hex('#2f2a66'), b: hex('#3d3682'), hit: hex('#5b4fc0'), rim: hex('#ffcf4a'), rim2: hex('#c98a1e'), dark: hex('#14122b'), line: hex('#211d4b') };
  // items: array of { canvas }; rot: radians. Slot 0 sits under the pointer at rot = 0.
  function drawWheel(cv, items, rot) {
    if (cv.width !== WN) { cv.width = cv.height = WN; }
    const g = cv.getContext('2d'), { ang, rad } = geometry(), im = g.createImageData(WN, WN), d = im.data, TAU = Math.PI * 2;
    const at = ((Math.round(-rot / STEP) % SLOTS) + SLOTS) % SLOTS;
    for (let i = 0; i < ang.length; i++) {
      const r = rad[i]; let c = null;
      if (r > 101) continue;
      if (r > 97) c = WC.rim2; else if (r > 93) c = WC.rim;
      else if (r > 91) c = WC.dark;
      else if (r > 51) { let a = (ang[i] - rot + STEP / 2) % TAU; if (a < 0) a += TAU; const s = Math.floor(a / STEP), f = (a / STEP - s) * STEP * r; c = f < 1.6 ? WC.line : s === at ? WC.hit : s % 2 ? WC.a : WC.b; }
      else if (r > 49) c = WC.dark; else if (r > 46) c = WC.rim2;
      else continue;
      const k = i * 4; d[k] = c[0]; d[k + 1] = c[1]; d[k + 2] = c[2]; d[k + 3] = 255;
    }
    g.putImageData(im, 0, 0); g.imageSmoothingEnabled = false;
    for (let s = 0; s < SLOTS; s++) {
      const a = s * STEP + rot - Math.PI / 2, x = WN / 2 + Math.cos(a) * 71, y = WN / 2 + Math.sin(a) * 71, it = items[s] && items[s].canvas; if (!it) continue;
      const k = Math.min(26 / it.width, 26 / it.height), w = Math.round(it.width * k), h = Math.round(it.height * k);
      g.drawImage(it, Math.round(x - w / 2), Math.round(y - h / 2), w, h);
    }
    // studs on the rim and the pointer
    for (let s = 0; s < SLOTS; s++) { const a = (s + 0.5) * STEP + rot - Math.PI / 2; g.fillStyle = '#fff6e0'; g.fillRect(Math.round(WN / 2 + Math.cos(a) * 95) - 1, Math.round(WN / 2 + Math.sin(a) * 95) - 1, 3, 3); }
    g.fillStyle = '#14122b'; [[-8, 0, 17, 5], [-7, 5, 15, 3], [-6, 8, 13, 3], [-4, 11, 9, 3], [-2, 14, 5, 4]].forEach(([x, y, w, h]) => g.fillRect(WN / 2 + x, y, w, h));
    g.fillStyle = '#ff6b5e'; [[-6, 1, 13, 4], [-5, 5, 11, 3], [-4, 8, 9, 3], [-2, 11, 5, 3], [0, 14, 1, 2]].forEach(([x, y, w, h]) => g.fillRect(WN / 2 + x, y, w, h));
  }
  // slow idle spin; returns a stop function
  function idleWheel(cv, items) {
    let raf = 0, rot = 0, last = 0;
    const loop = (ts) => { if (!cv.isConnected || cv.closest('[hidden]')) { raf = 0; return; } if (ts - last > 60) { last = ts; rot += 0.006; drawWheel(cv, items, rot); } raf = requestAnimationFrame(loop); };
    drawWheel(cv, items, 0); if (!reduced()) raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }
  // spins so that items[slot] ends under the pointer
  function spinWheel(cv, items, slot, onSlot, done) {
    const end = -slot * STEP + Math.PI * 2 * 5, from = 0, ms = reduced() ? 1 : 3400, t0 = performance.now(); let lastSlot = -1, raf = 0, over = false;
    const frame = (ts) => {
      const k = Math.min(1, (ts - t0) / ms), e = 1 - Math.pow(1 - k, 3.2), rot = from + (end - from) * e;
      drawWheel(cv, items, rot);
      const s = ((Math.round(-rot / STEP) % SLOTS) + SLOTS) % SLOTS;
      if (s !== lastSlot) { lastSlot = s; onSlot(s); sfx('tick'); }
      if (k < 1) raf = requestAnimationFrame(frame); else if (!over) { over = true; done(); }
    };
    raf = requestAnimationFrame(frame);
    // a background tab pauses animation frames; finish on time anyway
    const tm = setTimeout(() => { if (!over) { over = true; cancelAnimationFrame(raf); drawWheel(cv, items, end); onSlot(slot); done(); } }, ms + 900);
    return () => { over = true; cancelAnimationFrame(raf); clearTimeout(tm); };
  }

  // ---------- timing bar: the safe part of the bar is exactly as wide as the stated odds ----------
  function timing(host, p, text, done) {
    const start = Math.random() * (1 - p), period = 1300, t0 = performance.now() - Math.random() * period;
    host.innerHTML = `<div class="tbar" aria-hidden="true"><i class="ok" style="left:${start * 100}%;width:${p * 100}%"></i><i class="mk"></i></div><button type="button" class="btn-primary tstop">${text}</button>`;
    const mk = host.querySelector('.mk'), btn = host.querySelector('.tstop'); let raf = 0, over = false, x = 0;
    const pos = (ts) => { const k = ((ts - t0) % period) / period; return k < 0.5 ? k * 2 : 2 - k * 2; };
    const loop = (ts) => { x = pos(ts); mk.style.left = `${x * 100}%`; raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    const stop = () => {
      if (over) return; over = true; cancelAnimationFrame(raf); clearTimeout(tm); x = pos(performance.now()); mk.style.left = `${x * 100}%`;
      const ok = x >= start && x <= start + p; host.classList.add(ok ? 'hit' : 'miss'); btn.disabled = true; sfx(ok ? 'safe' : 'hurt');
      setTimeout(() => done(ok), reduced() ? 150 : 700);
    };
    btn.onclick = stop; btn.focus();
    const tm = setTimeout(stop, 7000 + Math.random() * period);   // waiting too long stops it wherever it is
    return stop;
  }

  window.GAME = { icon, iconUrl, pix, sfx, toggleMute, isMuted: () => muted, quiet: (v) => { quiet = v; }, drawWheel, idleWheel, spinWheel, timing, reduced, SLOTS };
})();

;
// Pixel habitat scenes. Drawn at 192×72 and scaled up with image-rendering: pixelated,
// so emoji drawn at small sizes become chunky sprites too.
(() => {
  const W = 192, H = 72;

  function seeded(seed) {
    let s = seed >>> 0 || 1;
    return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 10000) / 10000; };
  }
  const R = (c, x, y, w, h, col) => { c.fillStyle = col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
  function bands(c, y0, y1, cols) {
    const n = cols.length, h = (y1 - y0) / n;
    cols.forEach((col, i) => R(c, 0, y0 + i * h, W, Math.ceil(h) + 1, col));
  }
  function sky(c, y1, night) {
    bands(c, 0, y1, night ? ['#0b1026', '#111a3a', '#1a2550'] : ['#7fb6e6', '#9cc8ee', '#bfdcf3']);
  }
  function stars(c, y1, rnd, t) {
    for (let i = 0; i < 26; i++) {
      const x = rnd() * W, y = rnd() * y1;
      if ((i + Math.floor(t / 6)) % 5) R(c, x, y, 1, 1, '#e8ecff');
    }
  }
  function sun(c, night, x = 160, y = 8) {
    if (night) { R(c, x, y, 5, 5, '#e9e6c8'); R(c, x + 1, y - 1, 3, 1, '#e9e6c8'); R(c, x + 1, y + 5, 3, 1, '#e9e6c8'); }
    else { R(c, x - 1, y - 1, 7, 7, '#ffe9a3'); R(c, x, y, 5, 5, '#fff4c9'); }
  }
  function clouds(c, t, y, rnd, n = 3) {
    for (let i = 0; i < n; i++) {
      const x = ((rnd() * W + t * (0.15 + i * 0.05)) % (W + 40)) - 30, yy = y + rnd() * 10;
      R(c, x, yy, 22, 4, '#f4f8fb'); R(c, x + 4, yy - 3, 12, 3, '#f4f8fb');
    }
  }
  function bubbles(c, t, rnd, x0, x1, y0, y1, col) {
    for (let i = 0; i < 10; i++) {
      const x = x0 + rnd() * (x1 - x0);
      const sp = 0.3 + rnd() * 0.5;
      const y = y1 - ((t * sp + rnd() * 200) % (y1 - y0));
      R(c, x + Math.sin((t + i * 7) / 6), y, 1, 1, col);
    }
  }
  function grassBlades(c, y, rnd, cols, t, tall = 10) {
    for (let x = 0; x < W; x += 2) {
      const h = 2 + Math.floor(rnd() * tall);
      const sway = Math.round(Math.sin((t + x) / 9) * (h > 7 ? 1 : 0));
      R(c, x + sway, y - h, 1, h, cols[Math.floor(rnd() * cols.length)]);
    }
  }

  const SCENES = {
    soil(c, o, rnd) {
      sky(c, 10, o.night); if (o.night) stars(c, 10, rnd, o.t);
      grassBlades(c, 13, rnd, ['#4f8a3a', '#62a046', '#3f7531'], o.t, 4);
      R(c, 0, 12, W, 2, '#3f6b2c');
      bands(c, 14, H, ['#5a3f2a', '#4d3523', '#432d1e', '#3a2619', '#311f14']);
      for (let i = 0; i < 70; i++) R(c, rnd() * W, 15 + rnd() * (H - 15), 1 + (rnd() > 0.7), 1, rnd() > 0.5 ? '#6e5640' : '#2a1b11');
      for (let i = 0; i < 9; i++) R(c, rnd() * W, 18 + rnd() * 50, 3 + rnd() * 3, 2, '#8a8478');
      for (let r = 0; r < 5; r++) { let x = 10 + rnd() * 170; for (let y = 14; y < 14 + rnd() * 40; y++) { x += Math.round(rnd() * 2 - 1); R(c, x, y, 1, 1, '#a88b62'); } }
      for (let i = 0; i < 18; i++) R(c, rnd() * W, 20 + rnd() * 48, 1, 1, '#d9cfa0');
    },
    ocean(c, o, rnd) {
      sky(c, 6, o.night);
      bands(c, 6, H, o.night ? ['#10304d', '#0d2840', '#0a2034', '#081a2a', '#061421']
                             : ['#3b8ec4', '#2f7cb2', '#266a9c', '#1e5886', '#174770', '#11375a']);
      R(c, 0, 6, W, 1, o.night ? '#2a5a80' : '#bfe4fa');
      if (!o.night) for (let i = 0; i < 5; i++) { const x = (i * 44 + o.t * 0.2) % W; for (let y = 7; y < H; y += 2) R(c, x + (y - 7) * 0.35, y, 2, 1, 'rgba(200,235,255,0.10)'); }
      bubbles(c, o.t, rnd, 0, W, 8, H, 'rgba(210,240,255,0.7)');
      for (let i = 0; i < 30; i++) R(c, rnd() * W, 8 + rnd() * 60, 1, 1, 'rgba(180,220,200,0.45)');
    },
    deep(c, o, rnd) {
      bands(c, 0, H, ['#06101f', '#050d1a', '#040a15', '#030811', '#02060c']);
      for (let i = 0; i < 40; i++) { const y = (rnd() * H + o.t * (0.1 + rnd() * 0.2)) % H; R(c, rnd() * W, y, 1, 1, 'rgba(200,210,230,0.35)'); }
      for (let i = 0; i < 16; i++) { if ((i + Math.floor(o.t / 4)) % 4 === 0) R(c, rnd() * W, rnd() * H, 1, 1, '#6ff0e0'); }
    },
    polar(c, o, rnd) {
      sky(c, 8, o.night); if (o.night) stars(c, 8, rnd, o.t);
      R(c, 0, 8, W, 6, '#e8f3f8'); R(c, 0, 14, W, 2, '#bcd8e6');
      for (let x = 0; x < W; x += 6) R(c, x, 16, 3 + rnd() * 3, 1 + rnd() * 4, '#9cc2d6');
      bands(c, 18, H, ['#1d4a63', '#173d54', '#123246', '#0d2738', '#0a1f2d']);
      for (let i = 0; i < 26; i++) R(c, rnd() * W, 22 + rnd() * 48, 1, 1, 'rgba(160,230,190,0.6)');
      bubbles(c, o.t, rnd, 0, W, 20, H, 'rgba(210,240,255,0.5)');
    },
    reef(c, o, rnd) {
      sky(c, 6, o.night);
      bands(c, 6, 58, ['#3fb3c9', '#36a2ba', '#2e90a9', '#287e97']);
      R(c, 0, 6, W, 1, '#d9f6fb');
      bands(c, 58, H, ['#d8c48e', '#c8b27c', '#b8a06b']);
      for (let x = 4; x < W; x += 7) { const h = 6 + rnd() * 10; for (let y = 0; y < h; y++) R(c, x + Math.round(Math.sin((o.t + y * 3 + x) / 10)), 58 - y, 1, 1, '#4f9a55'); }
      bubbles(c, o.t, rnd, 0, W, 8, 56, 'rgba(230,250,255,0.7)');
    },
    river(c, o, rnd) {
      sky(c, 14, o.night); if (o.night) stars(c, 14, rnd, o.t); else clouds(c, o.t, 2, rnd, 2);
      for (let x = 0; x < W; x += 3) { const h = 4 + rnd() * 9; R(c, x, 16 - h, 1, h, '#5f8f45'); }
      R(c, 0, 16, W, 1, o.night ? '#3a5a70' : '#cfe8f0');
      bands(c, 17, 62, o.night ? ['#1c3340', '#182c38', '#142530'] : ['#5f9fb0', '#548fa0', '#4a7f90']);
      for (let i = 0; i < 24; i++) R(c, (rnd() * W + o.t * 0.6) % W, 18 + rnd() * 40, 3, 1, 'rgba(230,250,255,0.25)');
      bands(c, 62, H, ['#7d6d58', '#6a5c49']);
      for (let i = 0; i < 26; i++) R(c, rnd() * W, 61 + rnd() * 8, 3, 2, ['#9b9184', '#857a6c', '#b0a796'][i % 3]);
    },
    pond(c, o, rnd) {
      sky(c, 12, o.night); if (!o.night) clouds(c, o.t, 2, rnd, 2);
      R(c, 0, 12, W, 2, '#8a8a6e');
      bands(c, 14, H, ['#5d7a4e', '#506c44', '#455e3b', '#3a5032', '#30432a']);
      R(c, 0, 14, W, 1, '#a9bf8e');
      for (let i = 0; i < 50; i++) R(c, rnd() * W, 16 + rnd() * 54, 1, 1, 'rgba(200,220,150,0.35)');
      bubbles(c, o.t, rnd, 150, 170, 16, H, 'rgba(230,250,230,0.8)');
      R(c, 158, 12, 6, 3, '#d0d0c0');
    },
    sky(c, o, rnd) {
      bands(c, 0, 56, o.night ? ['#0b1026', '#0f1733', '#141f42', '#1a2850'] : ['#5aa2e0', '#72b2e8', '#8cc2ee', '#a8d2f2', '#c4e1f5']);
      if (o.night) stars(c, 50, rnd, o.t); else { sun(c, false); clouds(c, o.t, 8, rnd, 4); }
      for (let x = 0; x < W; x += 16) R(c, x, 56, 16, 16, ['#6f9a4a', '#88a85a', '#a7b56a', '#7c9e52'][Math.floor(rnd() * 4)]);
      for (let x = 0; x < W; x += 24) R(c, x + 6, 50, 10, 6, '#9a8a78');
      R(c, 0, 55, W, 1, '#55803a');
    },
    grass(c, o, rnd) {
      sky(c, 30, o.night); if (o.night) stars(c, 30, rnd, o.t); else { sun(c, false); clouds(c, o.t, 4, rnd, 2); }
      R(c, 0, 30, W, H - 30, '#4c7d34');
      for (let i = 0; i < 14; i++) { const x = rnd() * W, h = 20 + rnd() * 30; R(c, x, H - h, 2, h, '#6aa34a'); R(c, x - 3, H - h + 6, 4, 2, '#7cb85a'); }
      grassBlades(c, H, rnd, ['#5c9a3e', '#78b456', '#3f7a2e', '#8cc066'], o.t, 22);
      for (let i = 0; i < 6; i++) { const x = rnd() * W, y = 34 + rnd() * 20; R(c, x, y, 3, 3, ['#f2d24b', '#e86a6a', '#f4f4f4'][i % 3]); }
    },
    forest(c, o, rnd) { SCENES.grass(c, o, rnd); for (let i = 0; i < 6; i++) { const x = rnd() * W; R(c, x, 0, 6, 50, '#5b4330'); R(c, x - 8, 0, 22, 14, '#2f5d2a'); } },
    farm(c, o, rnd) {
      sky(c, 34, o.night); if (o.night) stars(c, 34, rnd, o.t); else { sun(c, false, 30, 8); clouds(c, o.t, 6, rnd, 3); }
      R(c, 0, 30, W, 4, '#7da35a');
      R(c, 0, 34, W, H - 34, '#8db864');
      for (let i = 0; i < 40; i++) R(c, rnd() * W, 36 + rnd() * 34, 1, 2, '#6f9c4a');
      R(c, 140, 14, 34, 20, '#9c3b2e'); R(c, 137, 12, 40, 3, '#5e2a22'); R(c, 153, 24, 8, 10, '#3a1c16');
      for (let x = 0; x < W; x += 10) R(c, x, 40, 2, 10, '#c9b48a');
      R(c, 0, 42, W, 1, '#c9b48a'); R(c, 0, 47, W, 1, '#c9b48a');
    },
    barn(c, o, rnd) {
      bands(c, 0, 44, ['#5a5048', '#615649', '#695d4e']);
      for (let x = 0; x < W; x += 12) R(c, x, 0, 1, 44, '#4a4139');
      for (let x = 20; x < W; x += 48) { R(c, x, 3, 14, 2, '#f5ecc0'); R(c, x + 2, 5, 10, 1, 'rgba(255,240,190,0.4)'); }
      R(c, 0, 44, W, H - 44, '#b8a27a');
      for (let i = 0; i < 160; i++) R(c, rnd() * W, 45 + rnd() * 27, 2, 1, rnd() > 0.5 ? '#a68f66' : '#cbb68d');
      R(c, 0, 40, W, 4, '#8a7a62');
      for (let x = 30; x < W; x += 60) { R(c, x, 38, 2, 8, '#9a9a9a'); R(c, x - 4, 46, 10, 3, '#c94a3a'); }
    },
    city(c, o, rnd) {
      sky(c, 50, o.night); if (o.night) stars(c, 30, rnd, o.t); else clouds(c, o.t, 4, rnd, 2);
      let x = 0;
      while (x < W) {
        const w = 14 + rnd() * 18, h = 20 + rnd() * 32, col = o.night ? '#1c2233' : ['#8a8f99', '#9aa0a8', '#7d838e'][Math.floor(rnd() * 3)];
        R(c, x, 56 - h, w, h, col);
        for (let wy = 56 - h + 3; wy < 52; wy += 5) for (let wx = x + 2; wx < x + w - 3; wx += 4) if (rnd() > 0.45) R(c, wx, wy, 2, 2, o.night ? '#f2d27a' : '#c9dbe6');
        x += w + 1;
      }
      R(c, 0, 56, W, H - 56, '#4a4a4f'); R(c, 0, 56, W, 1, '#6a6a70');
      for (let xx = 4; xx < W; xx += 18) R(c, xx, 63, 8, 1, '#d8d27a');
    },
    house(c, o, rnd) {
      R(c, 0, 0, W, 50, '#d9cdb8');
      for (let x = 0; x < W; x += 8) R(c, x, 0, 1, 50, '#d1c4ad');
      R(c, 120, 8, 40, 26, o.night ? '#1a2550' : '#9cc8ee'); R(c, 139, 8, 2, 26, '#f4efe4'); R(c, 120, 20, 40, 2, '#f4efe4');
      R(c, 118, 6, 44, 2, '#f4efe4'); R(c, 118, 34, 44, 2, '#f4efe4');
      R(c, 0, 50, W, H - 50, '#9b7650');
      for (let x = 0; x < W; x += 24) R(c, x, 50, 1, H - 50, '#86643f');
      R(c, 16, 34, 60, 16, '#5b7a8c'); R(c, 16, 30, 60, 6, '#6c8ca0'); R(c, 14, 34, 4, 16, '#4d6a7a'); R(c, 74, 34, 4, 16, '#4d6a7a');
    },
    hive(c, o, rnd) {
      R(c, 0, 0, W, H, '#7a4b12');
      for (let y = 0, row = 0; y < H; y += 6, row++) {
        for (let x = (row % 2) * 5; x < W; x += 10) {
          const fill = rnd();
          R(c, x + 1, y + 1, 8, 4, fill > 0.6 ? '#e8a22a' : fill > 0.3 ? '#f2c25a' : '#c98a1e');
          R(c, x + 2, y, 6, 1, '#a8680f'); R(c, x + 2, y + 5, 6, 1, '#a8680f');
          if (fill > 0.85) R(c, x + 4, y + 2, 2, 2, '#f7f1d8');
        }
      }
    },
    savanna(c, o, rnd) {
      bands(c, 0, 38, o.night ? ['#0b1026', '#141f42', '#1f2b55'] : ['#f3c67a', '#f6d595', '#f8e2b2']);
      if (o.night) stars(c, 36, rnd, o.t); else sun(c, false, 40, 12);
      R(c, 0, 38, W, H - 38, '#c9a24f');
      for (let i = 0; i < 90; i++) R(c, rnd() * W, 39 + rnd() * 32, 1, 2 + rnd() * 3, rnd() > 0.5 ? '#b38b3a' : '#dcb866');
      R(c, 140, 22, 3, 18, '#4a3322'); R(c, 124, 18, 36, 4, '#5a6e2c'); R(c, 130, 15, 24, 3, '#5a6e2c');
    },
    mountain(c, o, rnd) {
      sky(c, 40, o.night); if (o.night) stars(c, 30, rnd, o.t); else clouds(c, o.t, 6, rnd, 2);
      for (let x = 0; x < W; x++) { const h = 18 + Math.abs(Math.sin(x / 23)) * 18 + Math.sin(x / 7) * 2; R(c, x, 52 - h, 1, h, '#5c7a6a'); }
      for (let x = 0; x < W; x++) { const h = 10 + Math.abs(Math.sin(x / 15 + 1)) * 10; R(c, x, 56 - h, 1, h, '#3f6a4a'); }
      R(c, 0, 54, W, H - 54, '#4a7a3a');
      for (let i = 0; i < 12; i++) { const x = rnd() * W, h = 30 + rnd() * 40; R(c, x, H - h, 2, h, '#8fb84a'); for (let y = H - h; y < H; y += 7) R(c, x, y, 2, 1, '#5f8a2a'); R(c, x + 2, H - h + 4, 4, 1, '#7aa83a'); }
    },
  };

  function drawSprite(c, emoji, x, y, size, alpha = 1, spr = null, flip = false, squash = 1) {
    c.globalAlpha = alpha;
    const pic = spr || (window.GAME && window.GAME.pix(emoji).canvas);
    const k = size / Math.max(pic.width, pic.height) * 1.1, w = Math.max(1, Math.round(pic.width * k)), h = Math.max(1, Math.round(pic.height * k * squash));
    c.save(); c.translate(Math.round(x), Math.round(y)); if (flip) c.scale(-1, 1); c.drawImage(pic, -Math.round(w / 2), -Math.round(h / 2), w, h); c.restore();
    c.globalAlpha = 1;
  }

  // o: { scene, t, night, emoji, sibs, seed, dead }
  window.drawScene = function (canvas, o) {
    const c = canvas.getContext('2d');
    c.imageSmoothingEnabled = false;
    const fn = SCENES[o.scene] || SCENES.grass;
    fn(c, o, seeded(o.seed || 7));
    const rnd = seeded((o.seed || 7) * 31 + 5);
    const n = Math.min(o.sibs || 0, 14);
    for (let i = 0; i < n; i++) {
      const x = 14 + rnd() * (W - 28), y = 30 + rnd() * 34;
      drawSprite(c, o.emoji, x + Math.sin((o.t + i * 13) / 8) * 2, y, 8, 0.75, o.sprite);
    }
    // the creature: it paces when foraging, roams when exploring, hides, sleeps, courts
    const t = o.t, act = o.quiet ? 'egg' : o.act, big = Math.round(15 + 10 * (o.grow ?? 1));
    let x = W / 2, y = 44, flip = false, a = 1;
    if (act === 'forage') { x += Math.sin(t / 9) * 24; flip = Math.cos(t / 9) < 0; y += Math.abs(Math.sin(t / 2)) * -2; }
    else if (act === 'explore') { x += Math.sin(t / 14) * 66; flip = Math.cos(t / 14) < 0; y += Math.abs(Math.sin(t / 2)) * -3; }
    else if (act === 'hide') { y += 4; a = 0.55; }
    else if (act === 'rest') y += 4;
    else if (act !== 'egg') { x += Math.sin(t / 20) * 10; y += Math.round(Math.sin(t / 5) * 1.5); }
    if (o.threat) { x += (Math.floor(t) % 2 ? 1 : -1); flip = false; }
    if (!o.dead) {
      c.fillStyle = 'rgba(0,0,0,0.28)'; c.fillRect(Math.round(x - 9), Math.round(y + 12), 18, 2);
      if (act === 'egg') { const s = Math.floor(t / 6) % 8 === 0 ? 1 : 0; [[-4, -8, 8], [-6, -6, 12], [-7, -3, 14], [-8, 0, 16], [-8, 3, 16], [-7, 6, 14], [-5, 9, 10]].forEach(([dx, dy, w]) => R(c, x + dx + s, y + dy, w, 3, '#efe3c8')); R(c, x - 4 + s, y - 4, 3, 5, '#fffaf0'); R(c, x + 2 + s, y + 4, 4, 3, '#cdbd98'); }
      else if (act === 'rest') drawSprite(c, o.emoji, x, y, big, a, o.sprite, flip, 0.8); else drawSprite(c, o.emoji, x, y, big, a, o.sprite, flip);
      if (act === 'hide') for (let i = 0; i < 12; i++) R(c, x - 16 + i * 3, y + 4 - (i * 7 % 9), 2, 10 + (i * 5 % 6), ['#3c8f4d', '#4fa85c', '#2f6f3c'][i % 3]);
      if (act === 'rest') { const k = Math.floor(t / 5) % 3; for (let i = 0; i <= k; i++) { const zx = x + 12 + i * 6, zy = y - 8 - i * 6; R(c, zx, zy, 4, 1, '#fff6e0'); R(c, zx + 2, zy + 1, 1, 1, '#fff6e0'); R(c, zx + 1, zy + 2, 1, 1, '#fff6e0'); R(c, zx, zy + 3, 4, 1, '#fff6e0'); } }
      if (act === 'mate') for (let i = 0; i < 3; i++) { const hy = y - 12 - ((t + i * 12) % 30) / 2, hx = x + Math.sin((t + i * 9) / 5) * 10; R(c, hx - 2, hy, 2, 2, '#ff6b9e'); R(c, hx + 1, hy, 2, 2, '#ff6b9e'); R(c, hx - 2, hy + 1, 5, 2, '#ff6b9e'); R(c, hx - 1, hy + 3, 3, 1, '#ff6b9e'); R(c, hx, hy + 4, 1, 1, '#ff6b9e'); }
      const py = Math.round(y - 19 + (Math.floor(t / 4) % 2)); R(c, x - 2, py, 5, 1, '#ffcf4a'); R(c, x - 1, py + 1, 3, 1, '#ffcf4a'); R(c, x, py + 2, 1, 1, '#ffcf4a');
    }
    if (o.threat) {   // something dark closes in
      const d = 46 + Math.sin(t / 6) * 8; [-1, 1].forEach((k) => { const ex = x + k * d; R(c, ex - 12, 24, 24, 40, 'rgba(10,6,24,0.62)'); R(c, ex - 9, 20, 18, 4, 'rgba(10,6,24,0.62)'); R(c, ex - 6, 32, 4, 3, '#ff4a4a'); R(c, ex + 3, 32, 4, 3, '#ff4a4a'); });
      if (Math.floor(t / 3) % 2) { R(c, x - 1, y - 32, 3, 8, '#ff4a4a'); R(c, x - 1, y - 22, 3, 3, '#ff4a4a'); }
    }
    if (o.dead) { c.fillStyle = 'rgba(10,8,28,0.6)'; c.fillRect(0, 0, W, H); drawSprite(c, o.emoji, W / 2, 40 - Math.min(26, (o.deadT || 0)), big, 0.55, o.sprite); }
    if (o.night) { c.fillStyle = 'rgba(5,10,30,0.25)'; c.fillRect(0, 0, W, H); }
  };
})();

;
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

  const UNIT = { hour: 1 / 24, day: 1, week: 7, month: 30.4, year: 365 };
  const FINER = { year: 'month', month: 'week', week: 'day', day: 'hour' };
  const BASE_MS = 1000;
  const BIRTH_YEAR = new Date().getFullYear();

  // ---------- language ----------
  const lsGet = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  let LANG = lsGet('lunhui.lang') || window.PAGE_LANG || ((navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en');
  if (!window.UI || !window.UI[LANG]) LANG = 'zh';
  // Chinese fonts draw curly quotes full-width, so other languages use straight ones
  const straight = (x) => (typeof x === 'string' ? x.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"') : Array.isArray(x) ? x.map(straight) : x && typeof x === 'object' ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, straight(v)])) : x);
  const D = LANG === 'zh' ? window.UI.zh : straight(window.UI[LANG]);
  const dig = (o, k) => k.split('.').reduce((x, p) => (x == null ? x : x[p]), o);
  const fmt = (str, v = {}) => String(str).replace(/\{(\w+)\}/g, (m, x) => (x in v ? v[x] : m));
  const T = (k, v) => { const x = dig(D, k) ?? dig(window.UI.zh, k); return typeof x === 'string' ? fmt(x, v) : x; };
  const Tn = (k, n, v) => { const arr = T(k); return fmt(arr[(n - 1) % arr.length], v); };
  const UNITNAME = T('unit');
  const KIND = T('kind');
  const EN = LANG !== 'zh', G = window.GAME, SEP = EN ? ': ' : '：';
  function boot() {
    document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : LANG;
    if (EN && !(window.I18N_SP && window.I18N_SP[LANG])) {
      const sc = document.createElement('script');
      sc.src = `${window.ASSET || ''}i18n/${LANG}.js?v=619f1644`; sc.onload = run; sc.onerror = run;
      document.head.appendChild(sc);
    } else run();
  }
  function run() {

  // ---------- data ----------
  const SP = {};
  (window.SPECIES || []).forEach((s) => { if (s && s.id) SP[s.id] = s; });
  Object.entries(window.META || {}).forEach(([id, m]) => { if (SP[id]) Object.assign(SP[id], m); });
  // Game logic that reads the Chinese source text is computed here, before any translation is applied.
  const ESC_YES = /吃|捕|咬|抓|扑|叼|撞|拍|吞|啄|追|夹|袭|围攻|捉|刺穿|猎|网|钩|踩/;
  const ESC_NO = /病|感染|毒|饿|冻|寄生|衰老|老年|屠宰|淘汰|收获|缺氧|脱水|干涸|干透|^卵|卵被|巢被|夭折|意外/;
  // Evidence (data/evidence.js): every entry carries a source whose quote was machine-checked.
  // Measured survival over an age interval replaces the estimated hazard there; everything else stays an estimate.
  function prepEvidence(sp) {
    const ev = sp._ev = (window.EVIDENCE && window.EVIDENCE[sp.id]) || { refs: {}, survival: [], causes: [], causeNotes: {}, facts: [], existing: {} };
    const pts = sp.survival.map((p) => p.slice()), n = pts.length;
    if (pts[n - 1][1] <= 0) pts[n - 1][1] = pts[n - 2][1] * 0.002;
    sp.survival = pts;
    if (!(ev.survival || []).length) return;
    const logS = (t) => { for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return Math.log(y0) + (Math.log(y1) - Math.log(y0)) * (t - x0) / (x1 - x0); } return Math.log(pts[pts.length - 1][1]); };
    const xs = [...new Set(pts.map((p) => p[0]).concat(...ev.survival.map((a) => [a.from, a.to])))].sort((a, b) => a - b);
    const dH = xs.slice(1).map((x, i) => Math.max(1e-9, logS(xs[i]) - logS(x)));
    ev.survival.forEach((a) => {
      const idx = dH.map((_, i) => i).filter((i) => xs[i] >= a.from - 1e-9 && xs[i + 1] <= a.to + 1e-9);
      const cur = idx.reduce((t, i) => t + dH[i], 0), want = Math.max(1e-6, -Math.log(a.surv));
      idx.forEach((i) => { dH[i] = cur > 1e-6 ? dH[i] * want / cur : want * (xs[i + 1] - xs[i]) / (a.to - a.from); });
    });
    let H = 0; sp.survival = [[0, 1]]; dH.forEach((h, i) => { H += h; sp.survival.push([xs[i + 1], Math.exp(-H)]); });
  }
  Object.values(SP).forEach((sp) => {
    sp.stages.forEach((st) => { st._quiet = /egg|pupa|^卵|蛹|胚/.test(st.id + '|' + st.name) || /卵|蛹|胚胎/.test(st.name); });
    (sp.causes || []).forEach((c) => { if (typeof c.escape !== 'boolean') c.escape = c.id !== 'old' && c.id !== 'slaughter' && ESC_YES.test(c.short) && !ESC_NO.test(c.short); });
    const sc = (sp.causes || []).find((x) => /starv|hunger|饿/.test(x.id + x.short)); sp._starve = sc && sc.id;
    (sp.causes || []).forEach((c) => { c._cull = /屠宰|收获|淘汰|出塘|上市|宰杀/.test(c.short); c._eaten = /吃|吞|叼|捕|咬/.test(c.short) && !/饿|毒|网/.test(c.short); });
    ((sp.birth && sp.birth.sex) || []).forEach((o) => { o._flag = o[0] === '雄性' ? 'male' : o[0] === '雌性' ? 'female' : null; });
    prepEvidence(sp);
    // apply the translation table: { "events.3.text": "...", ... }
    const dict = EN && window.I18N_SP && window.I18N_SP[LANG] && window.I18N_SP[LANG][sp.id];
    if (dict) for (const [p, v] of Object.entries(dict)) {
      const ks = p.split('.'); let o = sp;
      for (let i = 0; i < ks.length - 1 && o != null; i++) o = o[ks[i]];
      if (o != null && typeof o === 'object') o[ks[ks.length - 1]] = straight(v);
    }
    // scientific names mix Latin with Chinese glosses; in other languages keep only the Latin parts
    if (EN && sp.sci && /[\u4e00-\u9fff]/.test(sp.sci)) sp.sci = (sp.sci.match(/[A-Za-z][A-Za-z .&-]*[A-Za-z.]/g) || []).map((x) => x.trim()).filter((x, i, a) => a.indexOf(x) === i).join(' · ');
    if (EN && window.ODDS_SRC_EN) { const od = (window.ODDS || []).find((x) => x.id === sp.id); if (od && window.ODDS_SRC_EN[sp.id]) od.src = window.ODDS_SRC_EN[sp.id]; }
  });
  const about = (id) => { const a = window.ABOUT[id]; return a ? (EN ? straight(a[1]) : a[0]) : ''; };
  const mw = (id) => window.ABOUT_MW[id] || '只';
  const lc = (n) => (EN && !/^(Japanese|African|Antarctic|Asian|East|European|Atlantic|Pacific|Greenland|Western|Chinese)\b/.test(n) ? n.charAt(0).toLowerCase() + n.slice(1) : n);
  const art = (n) => (n === 'Cattle' ? 'one of the' : /^[aeiou]/i.test(n) ? 'an' : 'a');
  const MIN_CHOICES = 5;   // nobody dies before making this many choices
  Object.values(SP).forEach((sp) => {   // facts with no verified source are not shown as facts
    const ex = sp._ev.existing || {};
    const set = (o, k) => { if (!o || !o.fact) return; if (ex[k] && ex[k] !== 'remove') o.ref = ex[k]; else delete o.fact; };
    sp.events.forEach((e, i) => set(e, `events.${i}`)); sp.decisions.forEach((e, i) => set(e, `decisions.${i}`)); sp.causes.forEach((e, i) => set(e, `causes.${i}`)); set(sp.opening, 'opening');
  });
  const txt = (o) => (EN ? straight(o.en) : o.zh);
  const ORG = { WHO: '世界卫生组织', 'World Bank': '世界银行', BTO: '英国鸟类学信托', 'NOAA Fisheries': '美国国家海洋渔业局', 'UN News': '联合国新闻', ILO: '国际劳工组织', ITU: '国际电信联盟' };
  const cite = (r) => (EN ? `${r.a} ${r.y}${r.s ? ` · ${r.s}` : ''}` : `来源：${ORG[r.a] || String(r.a).replace(/ et al\.?/, ' 等').replace(' & ', '、')}，${r.y}`);
  function link(sp, key) { const r = sp._ev.refs[key]; return r ? `<a class="src" target="_blank" rel="noopener" href="${esc(r.u)}">${esc(cite(r))} ↗</a>` : ''; }
  const badge = (b) => `<span class="ev ev-${b}">${T(`basis.${b}`)}</span>`;
  const evLine = (sp, o) => `<p class="evline">${badge(o.basis)} ${esc(txt(o))} ${link(sp, o.ref)}</p>`;
  const sprCache = {};
  function sprite(sp) {
    if (!sp.sprite) return null;
    if (sprCache[sp.id]) return sprCache[sp.id];
    const h = sp.sprite.length, w = Math.max(...sp.sprite.map((r) => r.length));
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d');
    sp.sprite.forEach((row, y) => [...row].forEach((ch, i) => { if (ch !== '.' && sp.pal[ch]) { x.fillStyle = sp.pal[ch]; x.fillRect(i, y, 1, 1); } }));
    return (sprCache[sp.id] = { url: c.toDataURL(), canvas: c });
  }
  // HTML for a species' picture: its pixel sprite if it has one, otherwise its emoji.
  function icon(sp, px = 24) {
    const s = sprite(sp);
    return `<img class="spr" src="${(s || G.pix(sp.emoji)).url}" alt="" style="width:${Math.round(px * 1.2)}px">`;
  }
  const art0 = (sp) => (sprite(sp) || G.pix(sp.emoji)).canvas;
  const ALL_ODDS = window.ODDS || [];
  const TOTAL = ALL_ODDS.reduce((a, o) => a + o.pop, 0);
  const ODDS = ALL_ODDS.filter((o) => SP[o.id]).sort((a, b) => b.pop - a.pop);
  const oddsOf = (id) => ALL_ODDS.find((o) => o.id === id);

  // ---------- utils ----------
  const rand = Math.random;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const val = (v) => Array.isArray(v) ? Math.round(v[0] + rand() * (v[1] - v[0])) : v;
  function wpick(items, wf) {
    const ws = items.map(wf); const tot = ws.reduce((a, b) => a + b, 0);
    if (tot <= 0) return items[Math.floor(rand() * items.length)];
    let r = rand() * tot;
    for (let i = 0; i < items.length; i++) { r -= ws[i]; if (r <= 0) return items[i]; }
    return items[items.length - 1];
  }
  const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  function sci(n, d = 1) {
    if (n < 1e4) return Math.round(n).toLocaleString('en-US');
    const e = Math.floor(Math.log10(n)); const m = n / Math.pow(10, e);
    return `${m.toFixed(d)}×10${String(e).split('').map((c) => SUP[c]).join('')}`;
  }
  const short = (x) => (x >= 100 ? Math.round(x).toLocaleString('en-US') : String(+x.toFixed(1)));
  function cnNum(n) {
    if (n >= 1e16) return sci(n);
    if (EN) {
      if (n >= 1e12) return `${short(n / 1e12)} trillion`;
      if (n >= 1e9) return `${short(n / 1e9)} billion`;
      if (n >= 1e6) return `${short(n / 1e6)} million`;
      return Math.round(n).toLocaleString('en-US');
    }
    if (n >= 1e12) return `${short(n / 1e12)} 万亿`;
    if (n >= 1e8) return `${short(n / 1e8)} 亿`;
    if (n >= 1e4) return `${short(n / 1e4)} 万`;
    return Math.round(n).toLocaleString('en-US');
  }
  function pct(p) {
    if (p >= 0.995) return '>99%';
    if (p >= 0.1) return `${Math.round(p * 100)}%`;
    if (p >= 0.01) return `${(p * 100).toFixed(1)}%`;
    if (p >= 0.0001) return `${(p * 100).toFixed(2)}%`;
    return `${sci(p * 100, 1).replace('×10', '×10')}%`;
  }
  function oneIn(p) {
    if (p >= 0.01) return pct(p);
    return `1 / ${cnNum(1 / p)}`;
  }
  const pl = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  function dur(days) {
    if (EN) {
      if (days < 1 / 24) return pl(Math.max(1, Math.round(days * 1440)), 'minute');
      if (days < 2) return pl(Math.round(days * 24), 'hour');
      if (days < 60) { const d = Math.floor(days), h = Math.round((days - d) * 24); return h && d < 10 ? `${pl(d, 'day')} ${pl(h, 'hour')}` : pl(d, 'day'); }
      if (days < 730) { const m = Math.floor(days / 30.4); return m < 3 ? pl(Math.floor(days / 7), 'week') : pl(m, 'month'); }
      const y = Math.floor(days / 365), m = Math.floor((days - y * 365) / 30.4);
      return m && y < 10 ? `${pl(y, 'year')} ${pl(m, 'month')}` : pl(y, 'year');
    }
    if (days < 1 / 24) return `${Math.max(1, Math.round(days * 1440))} 分钟`;
    if (days < 2) return `${Math.round(days * 24)} 小时`;
    if (days < 60) { const d = Math.floor(days), h = Math.round((days - d) * 24); return h && d < 10 ? `${d} 天 ${h} 小时` : `${d} 天`; }
    if (days < 730) { const m = Math.floor(days / 30.4); return m < 3 ? `${Math.floor(days / 7)} 周` : `${m} 个月`; }
    const y = Math.floor(days / 365), m = Math.floor((days - y * 365) / 30.4);
    return m && y < 10 ? `${y} 年 ${m} 个月` : `${y} 年`;
  }
  function stamp(cal, unit) {
    const d = Math.floor(cal);
    if (EN) {
      if (unit === 'hour') return `Day ${d + 1}, ${String(Math.floor((cal - d) * 24)).padStart(2, '0')}:00`;
      if (unit === 'day') return `Day ${d + 1}`;
      if (unit === 'week') return `Week ${Math.floor(cal / 7) + 1}`;
      if (unit === 'month') { const m = Math.floor(cal / 30.4); return m < 24 ? `Month ${m + 1}` : `Age ${Math.floor(m / 12)}y ${m % 12}m`; }
      return `Age ${Math.floor(cal / 365)}`;
    }
    if (unit === 'hour') return `第 ${d + 1} 天 ${String(Math.floor((cal - d) * 24)).padStart(2, '0')}时`;
    if (unit === 'day') return `第 ${d + 1} 天`;
    if (unit === 'week') return `第 ${Math.floor(cal / 7) + 1} 周`;
    if (unit === 'month') { const m = Math.floor(cal / 30.4); return m < 24 ? `第 ${m + 1} 个月` : `${Math.floor(m / 12)} 岁 ${m % 12} 月`; }
    return `${Math.floor(cal / 365)} 岁`;
  }
  function bigAge(cal, unit) {
    if (EN) {
      const r = (n, w) => [n, ` ${w}${n === 1 ? '' : 's'}`];
      if (unit === 'hour' && cal < 2) return r(Math.floor(cal * 24), 'hour');
      if (cal < 60 && (unit === 'hour' || unit === 'day')) return r(Math.floor(cal), 'day');
      if (cal < 365 * 2 && (unit === 'week' || unit === 'day' || unit === 'hour')) return r(Math.floor(cal / 7), 'week');
      if (cal < 365 * 2) return r(Math.floor(cal / 30.4), 'month');
      return r(Math.floor(cal / 365), 'year');
    }
    if (unit === 'hour' && cal < 2) return [Math.floor(cal * 24), '小时'];
    if (cal < 60 && (unit === 'hour' || unit === 'day')) return [Math.floor(cal), '天'];
    if (cal < 365 * 2 && (unit === 'week' || unit === 'day' || unit === 'hour')) return [Math.floor(cal / 7), '周'];
    if (cal < 365 * 2) return [Math.floor(cal / 30.4), '个月'];
    return [Math.floor(cal / 365), '岁'];
  }
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };

  // ---------- survival ----------
  function S(sp, t) {
    const pts = sp.survival;
    if (t <= 0) return 1;
    for (let i = 1; i < pts.length; i++) {
      const [x1, y1] = pts[i];
      if (t <= x1) {
        const [x0, y0] = pts[i - 1];
        const f = (t - x0) / Math.max(1e-9, x1 - x0);
        const a = Math.log(Math.max(y0, 1e-30)), b = Math.log(Math.max(y1, 1e-30));
        const v = Math.exp(a + (b - a) * f);
        return y1 <= 0 && f >= 1 ? 0 : v;
      }
    }
    return pts[pts.length - 1][1];
  }
  function invS(sp, u) {
    let lo = 0, hi = sp.maxAge;
    for (let i = 0; i < 50; i++) { const mid = (lo + hi) / 2; if (S(sp, mid) > u) lo = mid; else hi = mid; }
    return (lo + hi) / 2;
  }
  const stageAt = (sp, age) => { let s = sp.stages[0]; for (const st of sp.stages) if (age >= st.from) s = st; return s; };
  const inStage = (item, st) => !item.stages || item.stages.includes(st.id);
  // need: 'flag', '!flag', or several joined with '&' (all must hold)
  function needOk(need, flags) {
    if (!need) return true;
    return need.split('&').every((n) => (n.startsWith('!') ? !flags.has(n.slice(1)) : flags.has(n)));
  }
  function whenOk(when, stats) {
    if (!when) return true;
    return Object.entries(when).every(([k, cond]) => {
      const v = stats[k]; const n = parseFloat(cond.slice(1));
      return cond[0] === '<' ? v < n : cond[0] === '>' ? v > n : true;
    });
  }

  // ---------- views ----------
  const VIEWS = ['home', 'reveal', 'birth', 'life', 'death', 'book', 'friend', 'src'];
  function show(v) {
    VIEWS.forEach((k) => { $('#v-' + k).hidden = k !== v; });
    document.body.classList.toggle('at-home', v === 'home'); document.body.classList.toggle('in-life', v === 'life');
    window.scrollTo(0, 0);
  }

  // ---------- modes ----------
  const MODES = T('modes');
  let mode = store.get('lunhui.mode', 'real');
  if (!MODES.some((m) => m[0] === mode)) mode = 'real';
  function pool(m) {
    if (m === 'vert') return ODDS.filter((o) => o.group !== 'invert');
    if (m === 'mammal') return ODDS.filter((o) => o.group === 'mammal');
    if (m === 'pick') return ODDS.filter((o) => o.id === $('#pick').value);
    return ODDS;
  }
  const weightOf = (m, o) => (m === 'even' ? 1 : o.pop);
  function draw(m) { const p = pool(m); return wpick(p, (o) => weightOf(m, o)); }
  function shareIn(m, id) { const p = pool(m); const t = p.reduce((a, o) => a + weightOf(m, o), 0); const o = p.find((x) => x.id === id); return o ? weightOf(m, o) / t : 0; }

  // ---------- home ----------
  let stopIdle = null;
  // twelve creatures on the wheel; the given ids come first
  function wheelItems(ids) {
    const rest = ODDS.map((o) => o.id).filter((x) => !ids.includes(x)).sort(() => rand() - 0.5);
    return ids.concat(rest).slice(0, G.SLOTS).map((id) => ({ id, canvas: art0(SP[id]) }));
  }
  function renderHome() {
    const digits = (BigInt(Math.round(TOTAL / 1e15)) * 1000000000000000n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $('#bignum').innerHTML = T('bignum', { digits: digits.replace(/,/g, ',<wbr>') });
    $('#lede').innerHTML = T('lede', { total: sci(TOTAL, 2) });

    const top = ALL_ODDS.slice().sort((a, b) => b.pop - a.pop);
    const s0 = top[0].pop / TOTAL, s1 = top[1].pop / TOTAL, rest = 1 - s0 - s1;
    const nm = (o) => (SP[o.id] ? SP[o.id].name : o.id);
    $('#oddsbar').innerHTML =
      `<div class="s0" style="width:${s0 * 100}%">${esc(nm(top[0]))} ${pct(s0)}</div>` +
      `<div class="s1" style="width:${s1 * 100}%">${esc(nm(top[1]))} ${pct(s1)}</div>` +
      `<div class="s2" style="width:${Math.max(rest * 100, 4)}%">${T('other')}</div>`;
    const hum = oddsOf('human');
    $('#oddsnote').textContent = T('oddsNote', { n: top.length - 2, rest: pct(rest), human: oneIn(hum.pop / TOTAL) });

    $('#whats').innerHTML = top.slice(0, 2).map((o) => { const sp = SP[o.id]; return `<div class="what"><span class="em">${icon(sp, 56)}</span><div><h3>${esc(T('whatTitle', { art: art(sp.name), sp: lc(sp.name) }))}</h3><p>${esc(about(o.id))}</p></div></div>`; }).join('');
    $('#modes').innerHTML = MODES.map(([k, label]) => `<button class="btn" type="button" data-mode="${k}" aria-pressed="${k === mode}">${label}</button>`).join('');
    $('#pick').innerHTML = ODDS.map((o) => `<option value="${o.id}">${esc(SP[o.id].name)}</option>`).join('');
    const lastPick = store.get('lunhui.pick', null); if (lastPick && SP[lastPick]) $('#pick').value = lastPick;
    updateMode();

    if (stopIdle) stopIdle(); stopIdle = G.idleWheel($('#wheel0'), wheelItems(top.slice(0, 1).map((o) => o.id)));
    const maxL = Math.log10(top[0].pop), minL = 3;
    $('#oddslist').innerHTML = top.map((o) => {
      const s = SP[o.id];
      const confLabel = T('conf')[o.conf];
      const w = clamp((Math.log10(o.pop) - minL) / (maxL - minL), 0.01, 1) * 100;
      return `<div class="oddsrow" title="${esc(o.src)}">
        <span class="em">${s ? icon(s, 24) : '·'}</span>
        <span class="nm">${esc(s ? s.name : o.id)} <span class="conf ${o.conf}">${confLabel}</span><small class="mono">${cnNum(o.pop)}</small>${s ? `<span class="wh">${esc(about(o.id))}</span>` : ''}</span>
        <span class="bar"><i style="width:${w}%"></i></span>
        <span class="od">${oneIn(o.pop / TOTAL)}</span>
      </div>`;
    }).join('') + `<p class="small muted" style="padding-top:8px">${T('logScale')}</p>`;
  }
  function updateMode() {
    document.querySelectorAll('#modes [data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    $('#pickrow').hidden = mode !== 'pick';
    $('#modenote').textContent = MODES.find((m) => m[0] === mode)[2];
    store.set('lunhui.mode', mode);
  }
  $('#modes').addEventListener('click', (e) => { const b = e.target.closest('[data-mode]'); if (b) { mode = b.dataset.mode; updateMode(); } });
  $('#pick').addEventListener('change', () => store.set('lunhui.pick', $('#pick').value));

  // ---------- reveal ----------
  let revealTimer = null, stopSpin = null;
  function reveal() {
    clearTimeout(revealTimer); if (stopSpin) stopSpin();
    const final = draw(mode), only = pool(mode).length === 1;
    const ids = [...new Set(Array.from({ length: 5 }, () => wpick(pool(mode), (o) => weightOf(mode, o)).id))].filter((x) => x !== final.id);
    const items = wheelItems(only ? [] : ids).filter((x) => x.id !== final.id).sort(() => rand() - 0.5);
    const slot = Math.floor(rand() * Math.min(items.length + 1, G.SLOTS));
    items.splice(slot, 0, { id: final.id, canvas: art0(SP[final.id]) }); items.length = Math.min(items.length, G.SLOTS);
    show('reveal'); $('#rv').classList.remove('won');
    const ls = T('revealLines'); $('#rv-line').textContent = ls[Math.floor(rand() * ls.length)];
    $('#rv-nm').textContent = ''; $('#rv-od').textContent = ''; $('#rv-em').innerHTML = '';
    G.sfx('move');
    stopSpin = G.spinWheel($('#wheel1'), items, slot, (k) => { if (items[k]) $('#rv-em').innerHTML = icon(SP[items[k].id], 76); }, () => {
      const s = SP[final.id];
      $('#rv-em').innerHTML = icon(s, 96); $('#rv').classList.add('won'); $('#rv-nm').textContent = s.name; $('#rv-od').textContent = T('odds', { p: oneIn(shareIn(mode, final.id)) });
      G.sfx('born');
      revealTimer = setTimeout(() => { if (!$('#v-reveal').hidden) birth(final.id); }, G.reduced() ? 500 : 1500);
    });
  }

  // ---------- life state ----------
  let L = null;
  function birth(id) {
    const sp = SP[id];
    const b = sp.birth || {};
    const flags = new Set();
    const stats = { health: 70, food: 60, safety: 50, offspring: 0, ...(sp.init || {}) };
    let risk = 1;
    const sex = b.sex ? wpick(b.sex, (x) => x[1]) : null;
    if (sex) { if (sex._flag) flags.add(sex._flag); if (sex[2]) applyEff(sex[2], stats, flags); }
    const rolls = {}, rollVals = [], rollIdx = [], riskParts = [];
    (b.rolls || []).forEach((r, ri) => {
      const offered = r.options.filter((_, oi) => ((window.ROLL_RULES || {})[id] || []).every(([x, y, a, ok]) => x !== ri || y !== oi || ok.includes(rollIdx[a])));
      if (!offered.length) { rollIdx.push(-1); return; }
      const opt = wpick(offered, (x) => x[1]); rollIdx.push(r.options.indexOf(opt));
      // relative risk within what was actually possible, so variants do not shift the species' average
      const mean = offered.reduce((t, x) => t + x[1] * ((x[2] && x[2].risk) || 1), 0) / offered.reduce((t, x) => t + x[1], 0), rr = ((opt[2] && opt[2].risk) || 1) / mean;
      rolls[r.label] = opt[0]; rollVals.push(opt[0]); if (Math.abs(rr - 1) > 0.005) riskParts.push([`${r.label}${EN ? ': ' : '：'}${opt[0]}`, rr]);
      risk *= rr;
      if (opt[2]) applyEff(opt[2], stats, flags);
    });
    // individual variation every animal gets: constitution and temperament (also set flags species content can use)
    const con = wpick(TRAITS.con, (x) => x.w), tem = wpick(TRAITS.tem, (x) => x.w);
    [con, tem].forEach((t) => { flags.add(t.id); if (t.health) stats.health = clamp(stats.health + t.health, 0, 100); if (t.risk) { risk *= t.risk; riskParts.push([traitName(t), t.risk]); } });
    const no = `${'ABCDEFGH'[Math.floor(rand() * 8)]}${String(Math.floor(rand() * 1e4)).padStart(4, '0')}`;
    L = {
      sp, id, no, mode, traits: { con, tem }, sex: sex ? sex[0] : null, sexFlag: sex ? sex._flag : null, rolls, rollVals, rollIdx, riskParts, why: null, lastData: 0, usedData: new Set(), flags, stats, risk,
      age: 0, cal: 0, ticks: 0, mods: [], log: [], map: [], fired: new Set(), once: new Set(), firstStage: {},
      choices: [], dead: false, cause: null, paused: false, speed: store.get('lunhui.speed', 1), auto: false, ff: false,
      sibsN: b.siblings || 1, stageId: null, escapes: 0, lastCrisis: -99, seen: {}, lastSeen: {}, usedText: new Set(), idleBag: [], idleRefills: 0, quietFrom: null, act: 'instinct', actTicks: {}, stepMode: store.get('lunhui.step', false), mateCd: 0, saves: 0, saveLogs: 0, lastChoice: 0, moved: false, encUsed: new Set(), quips: new Set(), lastQuip: -9, streak: 0, diedQuiet: false, t: 0, seed: Math.floor(rand() * 1e6) + 1,
    };
    L.goals = makeGoals(sp);
    renderBirth();
    show('birth');
  }
  // constitution changes health and baseline risk; temperament changes how each action plays out
  const TRAITS = {
    con: [
      { id: 'runt', w: 2, health: -12, risk: 1.12 },
      { id: 'average', w: 6 },
      { id: 'robust', w: 2, health: 10, risk: 0.92 },
    ],
    tem: [
      { id: 'bold', w: 1, mods: { forage: { gain: 0.3, risk: 0.08 }, explore: { risk: 0.05, ev: 0.3 }, hide: { risk: 0.08 } } },
      { id: 'cautious', w: 1, mods: { hide: { risk: -0.1 }, forage: { gain: -0.2, risk: -0.1 }, explore: { risk: -0.1, ev: -0.3 } } },
      { id: 'curious', w: 1, mods: { explore: { ev: 0.6, gain: 0.2 }, rest: { ev: 0.3 } } },
      { id: 'steady', w: 1 },
    ],
  };
  const traitName = (t) => T(`trait.${t.id}`);
  function applyEff(eff, stats, flags) {
    let added = null;
    for (const [k, v] of Object.entries(eff || {})) {
      if (k === 'risk') continue;
      if (k === 'set') { (Array.isArray(v) ? v : [v]).forEach((f) => flags.add(f)); continue; }
      if (!(k in stats)) continue;
      const n = val(v);
      if (k === 'offspring') { stats.offspring += n; added = n; }
      else stats[k] = clamp(stats[k] + n, 0, 100);
    }
    return added;
  }
  function fill(text, extra = {}) {
    const vars = {
      sex: L.sex || '', siblings: L.sibsN.toLocaleString('en-US'),
      year: BIRTH_YEAR + Math.floor(L.cal / 365), years: Math.floor(L.age / 365), ...L.rolls, ...extra,
      ...Object.fromEntries((L.rollVals || []).map((v, i) => [`r${i}`, v])),
    };
    return String(text || '').replace(/\{([^}]+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  }

  // ---------- three goals per life ----------
  function makeGoals(sp) {
    const out = [{ k: 'half', ok: () => S(sp, L.age) <= 0.5 }], last = sp.stages[sp.stages.length - 1];
    if (sp.maturity && sp.maturity < sp.maxAge * 0.95) out.push({ k: 'adult', ok: () => L.age >= sp.maturity });
    else { const mid = sp.stages[Math.max(1, sp.stages.length - 2)] || last; out.push({ k: 'stage', v: { s: mid.name }, ok: () => L.age >= mid.from }); }
    out.push(canBreed(sp) ? { k: 'kids', ok: () => L.stats.offspring > 0 } : { k: 'stage', v: { s: last.name }, ok: () => L.age >= last.from });
    return out.map((g) => ({ ...g, t: T(`goal.${g.k}`, g.v), done: false }));
  }
  const goalsHTML = () => L.goals.map((g) => `<div class="goal${g.done ? ' on' : ''}">${G.icon(g.done ? 'star' : 'starOff', 22)}<span>${esc(g.t)}</span></div>`).join('');
  const starRow = (n, px = 22) => [0, 1, 2].map((i) => G.icon(i < n ? 'star' : 'starOff', px)).join('');
  const starCount = () => L.goals.filter((g) => g.done).length;
  function checkGoals() {
    L.goals.forEach((g) => { if (!g.done && g.ok()) { g.done = true; if (!L.auto) { G.sfx('star'); toast(`${G.icon('star', 22)}<span>${esc(T('goalDone', { g: g.t }))}</span>`); } } });
  }
  function toast(html) { const old = $('#toast'); if (old) old.remove(); const el = document.createElement('div'); el.id = 'toast'; el.innerHTML = html; $('#stage').append(el); setTimeout(() => el.remove(), 2900); }
  // numbers that float off the creature when its state jumps
  function feedback() {
    const s = L.stats, o = L.lastStats; L.lastStats = { ...s };
    if (!o || L.auto || L.dead || $('#v-life').hidden) return;
    const col = { health: 'var(--bad)', food: 'var(--warn)', safety: 'var(--cyan)', offspring: 'var(--accent)' }, ic = { health: 'heart', food: 'food', safety: 'shield', offspring: 'mate' };
    let k = 0;
    ['health', 'food', 'safety', 'offspring'].forEach((x) => {
      const d = Math.round(s[x] - o[x]); if (Math.abs(d) < (x === 'offspring' ? 1 : 5)) return;
      const el = document.createElement('span'); el.style.color = d > 0 ? col[x] : 'var(--bad)'; el.style.marginLeft = `${(k++ % 3) * 80 - 60}px`; el.innerHTML = `${G.icon(ic[x], 18)} ${d > 0 ? '+' : ''}${cnNum(Math.abs(d)) === String(Math.abs(d)) ? d : (d > 0 ? '' : '-') + cnNum(Math.abs(d))}`;
      $('#floats').append(el); setTimeout(() => el.remove(), 1400);
    });
    const dh = s.health - o.health;
    if (dh <= -8) { hurt(); G.sfx('hurt'); } else if (dh >= 8) G.sfx('heal');
    if (s.offspring > o.offspring) G.sfx('heal');
  }
  function hurt() { const c = $('#scene'), st = $('#stage'); c.classList.remove('shake'); st.classList.remove('hurt'); void c.offsetWidth; c.classList.add('shake'); st.classList.add('hurt'); setTimeout(() => { c.classList.remove('shake'); st.classList.remove('hurt'); }, 400); }
  // the latest line, typed into the dialogue box
  let sayRaf = 0;
  function say(text, extra = '') {
    const box = $('#lf-say'); cancelAnimationFrame(sayRaf);
    if (L.speed >= 4 || L.ff || G.reduced() || document.hidden) { box.innerHTML = `${esc(text)} ${extra}`; return; }
    const ms = Math.min(700, text.length * 22), t0 = performance.now(); let last = 0;
    const tick = (ts) => { const n = Math.min(text.length, Math.ceil(Math.max(0, ts - t0) / ms * text.length)); if (n !== last) { if (n - last > 0 && n % 3 === 0) G.sfx('blip'); last = n; box.textContent = text.slice(0, n); } if (n < text.length) sayRaf = requestAnimationFrame(tick); else box.innerHTML = `${esc(text)} ${extra}`; };
    sayRaf = requestAnimationFrame(tick);
  }

  // ---------- birth card ----------
  function renderBirth() {
    const sp = L.sp, o = oddsOf(sp.id);
    const hum = SP.human;
    const pReal = o.pop / TOTAL;
    const pMat = S(sp, sp.maturity || 0);
    const fields = [
      L.sex && [T('fSex'), L.sex],
      ...Object.entries(L.rolls),
      [T('fCon'), traitName(L.traits.con)],
      [T('fTem'), traitName(L.traits.tem)],
      [T('fKind'), KIND[sp.kind] || KIND.wild],
      [T('fAlive'), `<span class="mono">${cnNum(o.pop)}</span>`],
      [T('fOdds'), `<span class="mono">${oneIn(pReal)}</span>`],
      [T('fMature'), `<span class="mono">${pct(pMat)}</span>`],
      [T('fMax'), dur(sp.maxAge)],
      sp.size && [T('fSize'), sp.size],
      [T('fTick'), sp.stages.map((s) => UNITNAME[s.unit]).filter((v, i, a) => a.indexOf(v) === i).join(' → ')],
    ].filter(Boolean);
    const cmp = hum && hum !== sp ? `
      <table class="compare">
        <thead><tr><th></th><th class="mono">${esc(sp.name)}</th><th class="mono">${T('human')}</th></tr></thead>
        <tbody>
          <tr><td>${T('fMature')}</td><td class="mono">${pct(pMat)}</td><td class="mono">${pct(S(hum, hum.maturity))}</td></tr>
          <tr><td>${T('fMax')}</td><td class="mono">${dur(sp.maxAge)}</td><td class="mono">${dur(hum.maxAge)}</td></tr>
          <tr><td>${T('cmpAlive')}</td><td class="mono">${cnNum(o.pop)}</td><td class="mono">${cnNum(oddsOf('human').pop)}</td></tr>
        </tbody>
      </table>` : '';
    $('#v-birth').innerHTML = `
      <div class="card">
        <div class="card-head"><span>${T('birthHead')}</span><span>${T('no', { n: L.no })}</span></div>
        <div class="card-body">
          <div class="specname"><span class="em">${icon(sp, 60)}</span><div><h2>${esc(sp.name)}</h2>${EN ? `<div class="sci">${esc(sp.sci || '')}</div>` : ''}${sp.taxon ? `<div class="small muted">${esc(EN ? sp.taxon : sp.taxon.replace(/（[A-Za-z ]+）/g, ''))}</div>` : ''}</div></div>
          <p style="font-size:16.5px">${esc(fill(sp.birth.intro))}</p>
          <div class="whatis"><b>${esc(T('whatIs', { art: art(sp.name), sp: lc(sp.name) }))}</b><p>${esc(about(sp.id))}</p>${sp.note ? `<p class="small muted">${esc(sp.note)}</p>` : ''}</div>
          <div><h3 style="font-size:22px;color:var(--accent)">${T('goalTitle')}</h3><div class="goals">${goalsHTML()}</div></div>
          <div class="row"><button class="btn-primary" id="begin" type="button">${T('begin')}</button><button class="btn" id="reroll" type="button">${T('reroll')}</button></div>
          <div class="fields">${fields.map(([k, v]) => `<div class="field"><span class="eyebrow">${esc(k)}</span><div class="v">${String(v).startsWith('<') ? v : esc(v)}</div></div>`).join('')}</div>
          ${cmp}
          <p class="small muted">${esc(T('sources', { src: o.src, note: sp.survivalNote || '' }))} <button class="linkbtn" type="button" data-src="${sp.id}">${T('why.allSources')}</button></p>
          ${(sp._ev.survival || []).slice(0, 3).map((a) => evLine(sp, a)).join('')}
          <p class="small muted">${esc(T('protectNote'))}</p>
        </div>
      </div>`;
    $('#begin').onclick = startLife;
    $('#reroll').onclick = reveal;
    $('#begin').focus();
  }

  // ---------- life ----------
  let timer = null, raf = null;
  function startLife() {
    show('life');
    $('#lf-log').innerHTML = ''; $('#floats').innerHTML = ''; L.lastStats = { ...L.stats };
    G.sfx('born');
    addLog(fill(L.sp.birth.intro), 'stage');
    renderControls();
    renderLife();
    renderActs();
    animate();
    if (L.sp.opening) openDecision({ ...L.sp.opening, id: '__opening', eyebrow: T('openingEyebrow') });
    else schedule();
  }
  function schedule() {
    clearTimeout(timer);
    if (!L || L.dead || L.paused || !$('#overlay').hidden) return;
    if (L.stepMode && !L.ff && !stageAt(L.sp, L.age)._quiet) return renderActs();
    const ms = L.ff ? 25 : Math.min(BASE_MS / L.speed, stageAt(L.sp, L.age)._quiet ? 90 : 1e9);
    
    timer = setTimeout(step, ms);
  }
  // every multiplier on the base death rate, named, so a death can be explained
  function multParts() {
    const parts = L.riskParts.slice(), h = L.stats.health;
    if (availableActions().includes(L.act)) { const A = actionDef(L.act); if (Math.abs(A.risk - 1) > 0.005) parts.push([A.name, A.risk]); }
    L.mods = L.mods.filter((x) => x.until > L.cal);
    L.mods.forEach((x) => parts.push([x.label || T('decision'), x.mult]));
    if (h < 40) parts.push([T('why.lowHealth', { n: Math.round(h) }), 1 + (40 - h) / 40]); else if (h > 85) parts.push([T('why.highHealth', { n: Math.round(h) }), 0.9]);
    if (L.stats.food < 15) parts.push([T('why.lowFood', { n: Math.round(L.stats.food) }), 1.4]);
    if (L.stats.safety < 20) parts.push([T('why.lowSafety', { n: Math.round(L.stats.safety) }), 1.2]);
    return parts;
  }
  const activeMult = () => multParts().reduce((m, p) => m * p[1], 1);
  function findDecision(st) {
    for (const d of L.sp.decisions || []) {
      if (L.fired.has(d.id)) continue;
      if (!needOk(d.need, L.flags)) continue;
      const trig = (d.stage ? st.id === d.stage : d.at != null) && (d.at == null || L.age >= d.at);
      if (!trig) continue;
      if (d.at != null && !d.stage) {
        if (!(d.id in L.firstStage)) L.firstStage[d.id] = st.id;
        else if (L.firstStage[d.id] !== st.id) { L.fired.add(d.id); continue; }
      }
      if (!whenOk(d.when, L.stats)) continue;
      return d;
    }
    return null;
  }
  const isQuietStage = (st) => !!st._quiet;

  function step() {
    if (!L || L.dead || L.paused) return;
    const sp = L.sp;
    let st = stageAt(sp, L.age);
    if (st.id !== L.stageId) {
      if (L.stageId) addLog(T('enterStage', { s: st.name }), 'stage');
      L.stageId = st.id;
    }
    const d = findDecision(st);
    if (d) { openDecision(d); return; }
    const safe = L.choices.length < MIN_CHOICES;
    if (!st._quiet) {
      if (!L.moved && availableActions().length > 2) { L.moved = true; return openFirstMove(); }
      if (L.ticks - L.lastChoice >= (safe ? 3 : 18)) { const e = nextEncounter(); if (e) { openDecision(e); return; } }
    }

    // Adaptive clock: when one tick would be very likely to kill you, time slows to a finer unit.
    const hazard = (d) => { const a = S(sp, L.age), b = S(sp, L.age + d); return a > 0 ? clamp(1 - b / a, 0, 1) : 1; };
    let u = UNIT[st.unit] ? st.unit : 'day';
    while (u !== 'hour' && hazard(UNIT[u]) > 0.2) u = FINER[u];
    L.unit = u;
    let dt = UNIT[u];
    const next = sp.stages.find((s) => s.from > L.age + 1e-9);
    if (next && L.age + dt > next.from) dt = Math.max(next.from - L.age, UNIT[u] * 0.25);

    if (L.age + dt >= sp.maxAge) {
      if (safe) { const e = nextEncounter(); if (e) { openDecision(e); return; } }
      L.age = sp.maxAge; L.cal += dt; L.why = { kind: 'limit', age: L.age, stage: st }; return die('old');
    }
    const quiet = isQuietStage(st);
    const escShare = quiet ? 0 : escapableShare(st);
    const p0 = hazard(dt);
    let p = 1 - Math.pow(1 - p0, activeMult());
    // Crisis moments let you dodge some deaths, so the base rate is raised to keep the survival curve true on average.
    if (escShare > 0) { const o = escapeOdds(); p = Math.min(0.97, p / (1 - ((o.pf + o.ph) / 2) * escShare)); }
    if (rand() < p) {
      const mod = L.mods.find((x) => x.cause);
      const c = pickCause(mod && rand() < 0.6 ? mod.cause : null);
      L.why = { kind: 'rate', unit: u, p0, parts: multParts(), p: 1 - Math.pow(1 - p0, activeMult()), age: L.age, stage: st };
      const crisis = !quiet && isEscapable(c) && L.ticks - L.lastCrisis > 2;
      if (crisis || !safe) {
        const f = rand();
        L.age += dt * f; L.cal += dt * f;
        if (crisis) return openCrisis(c);
        L.diedQuiet = quiet;
        return die(c);
      }
      spare();
    }
    L.age += dt; L.cal += dt; L.ticks++;

    // metabolism
    // Routine foraging pulls food back toward normal; events and choices push it to extremes.
    const acts = availableActions();
    if (!acts.includes(L.act)) L.act = 'instinct';
    const A = acts.length ? actionDef(L.act) : ACTIONS.instinct;
    if (acts.length) L.actTicks[L.act] = (L.actTicks[L.act] || 0) + 1;
    if (!isQuietStage(st)) {
      const target = (sp.init && sp.init.food) || 55;
      const drain = sp.foodDrain ?? 3;
      L.stats.food = clamp(L.stats.food + (target - L.stats.food) * 0.15 * Math.min(A.gain, 1.5) - drain * rand() * 0.6 + drain * (A.gain - 1) * 0.8, 0, 100);
      if (A.health) L.stats.health = clamp(L.stats.health + A.health, 0, 100);
      if (A.safety) L.stats.safety = clamp(L.stats.safety + A.safety, 0, 100);
      if (L.stats.food < 20) L.stats.health = clamp(L.stats.health - 3, 0, 100);
      else if (L.stats.food > 45) L.stats.health = clamp(L.stats.health + 1.5, 0, 100);
    }
    L.stats.safety += (50 - L.stats.safety) * 0.08;
    if (L.stats.health <= 0) { if (!safe) { L.why = { kind: 'health', age: L.age, stage: st }; return die('starve'); } L.stats.health = 25; L.stats.food = Math.max(L.stats.food, 30); spare(); }

    // events
    st = stageAt(sp, L.age);
    // Anti-repetition: each event at most `max` times (default 2, once = 1), with a cooldown,
    // and less likely each time it has already happened. Idle lines come from a shuffled bag.
    const evs = (sp.events || []).map((e, i) => ({ e, i })).filter(({ e, i }) => {
      if (!inStage(e, st) || !needOk(e.need, L.flags)) return false;
      if (e.act && ![].concat(e.act).includes(L.act)) return false;
      if (L.usedText.has(e.text)) return false;
      const n = L.seen[i] || 0, max = e.max ?? 1;
      return n < max && L.ticks - (L.lastSeen[i] ?? -99) > EVENT_COOLDOWN;
    });
    let logged = false;
    if (L.act === 'mate' && acts.includes('mate') && L.ticks >= L.mateCd && rand() < 0.3) {
      const n = val(broodOf(sp));
      L.stats.offspring += n; L.mateCd = L.ticks + 6;
      const mt = (sp.actions && sp.actions.mate && sp.actions.mate.done) || (L.flags.has('male') ? T('mateMale') : T('mateFemale'));
      L.broods = (L.broods || 0) + 1;
      const line = fill(mt, { n: n.toLocaleString('en-US') });
      logged = logOnce(L.broods > 1 ? T('nthBrood', { k: L.broods, line }) : line, 'choice');
    } else if (evs.length && rand() < Math.min(0.9, 0.5 * A.ev)) {
      const { e, i } = wpick(evs, (x) => (x.e.w ?? 1) / (1 + 2 * (L.seen[x.i] || 0)));
      L.seen[i] = (L.seen[i] || 0) + 1; L.lastSeen[i] = L.ticks; L.usedText.add(e.text);
      if (e.once) L.once.add(i);
      const n = applyEff(e.eff, L.stats, L.flags);
      if (e.set) L.flags.add(e.set);
      logged = logOnce(fill(e.text, { n: n ?? '' }), e.eff && Object.values(e.eff).some((v) => (Array.isArray(v) ? v[1] : v) < -9) ? 'bad' : '', e.fact, e);
    } else if (A.text && A.text.some((t) => !L.usedText.has(t)) && rand() < 0.3) {
      const pool = A.text.filter((t) => !L.usedText.has(t));  // shared with events and idle lines
      const t = pool[Math.floor(rand() * pool.length)];
      L.usedText.add(t);
      logged = logOnce(fill(t), 'idle');
    } else if (sp.idle && sp.idle.length && rand() < 0.25) {
      // each ambient line at most once per life
      if (!L.idleBag.length && L.idleRefills < 1) { L.idleBag = sp.idle.map((_, k) => k).sort(() => rand() - 0.5); L.idleRefills++; }
      while (L.idleBag.length && L.usedText.has(sp.idle[L.idleBag[L.idleBag.length - 1]])) L.idleBag.pop();
      if (L.idleBag.length) { const t = sp.idle[L.idleBag.pop()]; L.usedText.add(t); logged = logOnce(fill(t), 'idle'); }
    }
    if (!logged && L.quietFrom == null) L.quietFrom = L.cal - dt;
    showData(st);
    L.map.push({ h: L.stats.health, f: L.stats.food });
    renderLife();
    renderActs();
    schedule();
  }

  // While living: a sourced fact about what is happening now, at most once each.
  function showData(st) {
    if (L.ticks - L.lastData < 6) return;
    const ok = (L.sp._ev.facts || []).filter((f, i) => !L.usedData.has(i) && (!(f.stages || []).length || f.stages.includes(st.id)) && (!(f.acts || []).length || f.acts.includes(L.act)) && (!(f.flags || []).length || f.flags.some((x) => L.flags.has(x))) && (!(f.causes || []).length || f.causes.some((id) => { const c = L.sp.causes.find((y) => y.id === id); return c && inStage(c, st) && needOk(c.need, L.flags); })));
    if (!ok.length) return;
    const f = ok[Math.floor(rand() * ok.length)]; L.usedData.add(L.sp._ev.facts.indexOf(f)); L.lastData = L.ticks;
    addLog(txt(f), 'data', null, f);
  }
  // Beginner's protection: a death that should have landed takes a neighbour instead.
  function spare() {
    L.saves++;
    if (L.saveLogs < T('saved').length) { addLog(Tn('saved', ++L.saveLogs), 'bad'); }
  }
  function openFirstMove() {
    openDecision({ id: '__first', eyebrow: T('decision'), title: T('firstMove'), body: T('firstMoveBody'),
      options: availableActions().map((k) => { const A = actionDef(k); return { t: A.name, hint: A.desc, act: k, result: T('firstMoveDone') }; }) });
  }
  // Small choices any animal can face; each at most once per life.
  function nextEncounter() {
    const all = T('enc').map((e, i) => i).filter((i) => !L.encUsed.has(i) && !(L.id === 'human' && (i === 5 || gentle())));
    if (!all.length) return null;
    const i = all[Math.floor(rand() * all.length)], e = T('enc')[i];
    L.encUsed.add(i);
    return { id: `__enc${i}`, eyebrow: T('encounter'), title: e[0], body: e[1],
      options: [e[2], e[3]].map(([t, hint, eff, risk, result]) => ({ t, hint, eff, risk, riskDays: UNIT[L.unit || stageAt(L.sp, L.age).unit] * 6, result })) };
  }
  const gentle = () => L.id === 'human' && L.age < 18 * 365;   // encounters are written for animals and adults

  // Chance of surviving a crisis by fleeing (depends on health) or freezing (depends on safety).
  function escapeOdds() {
    return { pf: clamp(0.15 + L.stats.health / 250, 0.15, 0.55), ph: clamp(0.2 + L.stats.safety / 300, 0.2, 0.5) };
  }
  const isEscapable = (c) => !!(c && c.escape);
  // Chance of each cause in a stage. Published shares are used where they exist; the rest splits what is left by estimated weights.
  function causeTable(sp, st, flags) {
    const ok = (sp.causes || []).filter((x) => inStage(x, st) && (!flags || needOk(x.need, flags)));
    const a = (sp._ev.causes || []).find((x) => x.stages.includes(st.id) && (!x.flags || (flags && x.flags.some((k) => needOk(k, flags)))));
    const sh = (c) => (a && c.id in a.shares ? a.shares[c.id] : null);
    const given = ok.reduce((t, c) => t + (sh(c) || 0), 0), rest = ok.filter((c) => sh(c) == null).reduce((t, c) => t + (c.w ?? 1), 0);
    const list = ok.map((c) => ({ c, w: sh(c) != null ? sh(c) : rest ? (c.w ?? 1) / rest * Math.max(0, 1 - given) : 0, given: sh(c) != null })).filter((x) => x.w > 0);
    const tot = list.reduce((t, x) => t + x.w, 0) || 1; list.forEach((x) => { x.w /= tot; });
    return { list, anchor: a };
  }
  function escapableShare(st) {
    // escapable dangers must strike more often than they kill, so that deaths still match the shares
    const o = escapeOdds(), e = (o.pf + o.ph) / 2, l = causeTable(L.sp, st, L.flags).list.map((x) => ({ x, a: isEscapable(x.c) ? x.w / (1 - e) : x.w }));
    const t = l.reduce((n, y) => n + y.a, 0); return t ? l.filter((y) => isEscapable(y.x.c)).reduce((n, y) => n + y.a, 0) / t : 0;
  }
  function openCrisis(c) {
    L.lastCrisis = L.ticks;
    const { pf, ph } = escapeOdds();
    const n = L.crises = (L.crises || 0) + 1;
    const cs = EN ? c.short.charAt(0).toLowerCase() + c.short.slice(1) : c.short;
    openDecision({
      id: `__crisis${L.ticks}`, eyebrow: T('crisis'), crisis: true,
      title: Tn('crisisTitle', n, { c: cs }) + (n > 4 ? T('crisisNth', { n }) : ''),
      body: Tn('crisisBody', n),
      options: [
        { t: Tn('flee', n), hint: T('fleeHint', { p: Math.round(pf * 100) }), kill: 1 - pf, causeObj: c, crisis: true, eff: { food: -10 }, escaped: true, result: Tn('fleeOk', n) },
        { t: Tn('freeze', n), hint: T('freezeHint', { p: Math.round(ph * 100) }), kill: 1 - ph, causeObj: c, crisis: true, eff: { safety: -15 }, escaped: true, result: Tn('freezeOk', n) },
      ],
    });
  }
  function pickCause(causeId) {
    const sp = L.sp, st = stageAt(sp, L.age);
    const causes = sp.causes || [];
    let c = null;
    if (causeId === 'starve') c = causes.find((x) => x.id === sp._starve) || { id: 'starve', ...T('starve') };
    else if (causeId === 'old') c = causes.find((x) => x.id === 'old') || { id: 'old', ...T('oldAge') };
    else if (causeId) c = causes.find((x) => x.id === causeId);
    if (!c) {
      const tb = causeTable(sp, st, L.flags), old = causes.find((x) => x.id === 'old');
      if (old && !(tb.anchor && 'old' in tb.anchor.shares) && (st.id === 'old' || L.age > sp.maxAge * 0.8) && rand() < 0.5) c = old;
      else if (tb.list.length) { const o = escapeOdds(), e = (o.pf + o.ph) / 2; c = wpick(tb.list, (x) => (isEscapable(x.c) && !st._quiet ? x.w / (1 - e) : x.w)).c; }
      else c = causes[0] || { ...T('death') };
    }
    return c;
  }
  const EVENT_COOLDOWN = 8;
  const QUIET = [null, ...T('quiet')];
  // What the animal spends each tick doing. gain: food relative to normal; risk: death-rate multiplier;
  // ev: how much happens. Species can rename them or switch them off via `actions`.
  const ACTIONS = {
    instinct: { gain: 1, risk: 1, ev: 1 },
    forage:   { gain: 2.2, risk: 1.3, ev: 1.1 },
    hide:     { gain: 0.3, risk: 0.65, ev: 0.6, safety: 6 },
    rest:     { gain: 0.5, risk: 0.85, ev: 0.6, health: 3 },
    explore:  { gain: 1.2, risk: 1.35, ev: 1.8 },
    mate:     { gain: 0.6, risk: 1.4, ev: 1 },
  };
  Object.entries(T('actions')).forEach(([k, [name, desc]]) => { ACTIONS[k].name = name; ACTIONS[k].desc = desc; });
  const ACT_KEYS = Object.keys(ACTIONS);
  function canBreed(sp) {
    if (sp.actions && sp.actions.mate === false) return false;
    return (sp.events || []).concat(sp.decisions || []).some((e) => (e.eff && 'offspring' in e.eff) || (e.options || []).some((o) => o.eff && 'offspring' in o.eff));
  }
  function broodOf(sp) {
    if (sp.brood) return sp.brood;
    let best = null;
    (sp.events || []).forEach((e) => { const v = e.eff && e.eff.offspring; if (v != null) { const hi = Array.isArray(v) ? v[1] : v; if (!best || hi > best[1]) best = Array.isArray(v) ? v : [v, v]; } });
    return best || [1, 1];
  }
  function actionDef(k) {
    const base = ACTIONS[k] || ACTIONS.instinct;
    const o = (L.sp.actions && L.sp.actions[k]) || {};
    const a = { ...base, ...(typeof o === 'object' ? o : {}) };
    const m = L.traits && L.traits.tem.mods && L.traits.tem.mods[k];
    if (m) Object.entries(m).forEach(([key, d]) => { a[key] = Math.max(0.05, (a[key] ?? (key === 'ev' ? 1 : 0)) + d); });
    return a;
  }
  function availableActions() {
    const st = stageAt(L.sp, L.age);
    if (isQuietStage(st)) return [];
    return ACT_KEYS.filter((k) => {
      const o = L.sp.actions && L.sp.actions[k];
      if (o === false) return false;
      if (o && o.stages && !o.stages.includes(st.id)) return false;
      if (o && o.need && !needOk(o.need, L.flags)) return false;
      if (k === 'mate') return canBreed(L.sp) && L.age >= (L.sp.maturity || 0);
      return true;
    });
  }
  // Logs a line unless the same text appeared recently; a long quiet stretch becomes one summary line first.
  function logOnce(text, cls, fact, ev) {
    if (L.log.slice(-12).some((l) => l.text === text)) return false;
    addLog(text, cls, fact, ev);
    return true;
  }
  function die(cause) {
    const c = cause && typeof cause === 'object' ? cause : pickCause(cause);
    L.dead = true; L.cause = c; clearTimeout(timer); L.life = packLife();
    addLog(fill(c.text), 'bad');
    renderLife();
    saveLife();
    openFinal();
  }

  // ---------- decisions ----------
  function openDecision(d) {
    L.fired.add(d.id);
    if (L.auto) {
      const opt = d.options[Math.floor(rand() * d.options.length)];
      addLog(T('autoChose', { d: d.title, o: opt.t }), 'choice');
      return choose(d, opt);
    }
    L.ff = false; renderControls(); window.scrollTo({ top: 0 });
    G.sfx(d.crisis ? 'alarm' : 'pick'); $('#stage').classList.toggle('danger', !!d.crisis); L.threat = !!d.crisis; $('#dlg').className = `dlg${d.crisis ? ' crisis' : ''}`;
    const [n, u] = bigAge(L.cal, L.unit || stageAt(L.sp, L.age).unit);
    $('#dlg').innerHTML = `
      <div class="head"><span class="eyebrow" style="color:${d.crisis ? 'var(--bad)' : 'var(--accent)'}">${esc(d.eyebrow || T('decision'))}</span><span class="eyebrow">${n} ${u} · ${esc(stageAt(L.sp, L.age).name)}</span></div>
      <h2 id="dlg-title">${esc(d.title)}</h2>
      <p>${esc(fill(d.body))}</p>
      ${decisionEvidence(d)}
      <div class="opts">${d.options.map((o, i) => `<button class="opt" type="button" data-i="${i}"><span class="k">${i + 1}</span><span class="tt">${esc(o.t)}</span>${o.hint ? `<span class="h">${esc(o.hint)}</span>` : ''}</button>`).join('')}</div>`;
    $('#overlay').hidden = false;
    $('#dlg').querySelector('.opt').focus();
    $('#dlg').onclick = (e) => {
      const b = e.target.closest('.opt[data-i]'); if (!b) return;
      const opt = d.options[+b.dataset.i];
      $('#dlg').onclick = null; G.sfx('pick');
      addLog(T('youChose', { d: d.title, o: opt.t }), 'choice');
      if (d.crisis && opt.kill) return runTiming(d, opt);
      choose(d, opt, true);
    };
  }
  // A crisis is settled by stopping the marker: the green part is as wide as the odds.
  function runTiming(d, opt) {
    const p = 1 - opt.kill;
    $('#dlg').innerHTML = `<div class="head"><span class="eyebrow" style="color:var(--bad)">${esc(opt.t)}</span></div><h2 id="dlg-title">${T('timing.title')}</h2><p>${T('timing.body', { p: pct(p) })}</p><div class="tzone" id="tzone"></div>`;
    L.stopTiming = G.timing($('#tzone'), p, T('timing.btn'), (ok) => { L.stopTiming = null; choose(d, opt, true, ok); });
  }
  function decisionEvidence(d) {
    if (d.fact) return `<div class="fact">${esc(d.fact)} ${link(L.sp, d.ref)}</div>`;
    const id = d.id === '__opening' ? 'opening' : d.id, f = (L.sp._ev.facts || []).find((x) => (x.decisions || []).includes(id));
    return f ? `<div class="fact">${badge(f.basis)} ${esc(txt(f))} ${link(L.sp, f.ref)}</div>` : '';
  }
  function choose(d, opt, interactive = false, fate = null) {
    if (opt.eff) opt = { ...opt, eff: Object.fromEntries(Object.entries(opt.eff).map(([k, v]) => [k, k === 'set' ? v : val(v)])) };
    $('#stage').classList.remove('danger'); L.threat = false;
    L.choices.push(`${d.title} → ${opt.t}`); L.lastChoice = L.ticks;
    if (opt.act) L.act = opt.act;
    applyEff(opt.eff, L.stats, L.flags);
    if (opt.set) (typeof opt.set === 'string' ? [opt.set] : Object.keys(opt.set)).forEach((f) => L.flags.add(f));
    if (opt.risk) L.mods.push({ mult: opt.risk, until: L.cal + (opt.riskDays || UNIT[stageAt(L.sp, L.age).unit]), cause: opt.cause, label: `${d.title}${EN ? ': ' : '：'}${opt.t}` });
    if (opt.skip) {
      const days = val(opt.skip);
      L.cal += days;
      L.map.push({ skip: true });
      addLog(T('dormant', { d: dur(days) }), 'idle');
    }
    if (opt.kill && (fate === null ? rand() < opt.kill : !fate)) {
      if (opt.crisis && L.why) L.why.crisis = { t: opt.t, p: 1 - opt.kill }; else L.why = { kind: 'choice', t: `${d.title}${EN ? ': ' : '：'}${opt.t}`, p: opt.kill, age: L.age, stage: stageAt(L.sp, L.age) };
      if (L.choices.length > MIN_CHOICES - 1) return die(opt.causeObj || opt.cause || null);
      // protected: hurt instead of dead
      L.saves++; opt = { ...opt, eff: { health: -20 }, risk: 0, escaped: false, result: T('hurtInstead'), fixed: true };
      applyEff(opt.eff, L.stats, L.flags); L.stats.health = Math.max(L.stats.health, 20);
    }
    if (opt.escaped) L.escapes++;
    if (opt.stage) { const s = L.sp.stages.find((x) => x.id === opt.stage); if (s) L.age = Math.max(L.age, s.from); }
    if (opt.result && !L.usedText.has(opt.result)) { L.usedText.add(opt.result); addLog(fill(opt.result), ''); }
    renderLife();
    if (interactive) return showResult(d, opt);
    $('#overlay').hidden = true;
    schedule();
  }
  function showResult(d, opt) {
    const effs = Object.entries(opt.eff || {}).filter(([k, v]) => ['health', 'food', 'safety', 'offspring'].includes(k) && val(v) !== 0);
    const NAMES = T('stat');
    const chips = effs.map(([k, v]) => { const n = val(v); return `<span class="chip ${n > 0 ? 'up' : 'down'}">${NAMES[k]} ${n > 0 ? '+' : ''}${n}</span>`; }).join('');
    const riskNote = opt.risk ? `<span class="chip ${opt.risk < 1 ? 'up' : 'down'}">${T('riskNote', { d: dur(opt.riskDays || 1), dir: opt.risk < 1 ? T('riskDown') : T('riskUp') })}</span>` : '';
    $('#dlg').innerHTML = `
      <div class="head"><span class="eyebrow" style="color:var(--accent)">${esc(d.eyebrow || T('decision'))}</span><span class="eyebrow">${T('youChoseHead')}</span></div>
      <h2 id="dlg-title">${esc(opt.t)}</h2>
      ${opt.result ? `<p>${esc(fill(opt.result))}</p>` : ''}
      ${chips || riskNote ? `<div class="row">${chips}${riskNote}</div>` : ''}
      ${opt.risk || (opt.kill && !opt.crisis) ? `<p class="small muted">${badge('rule')} ${[opt.risk ? T('why.ruleRisk', { x: opt.risk.toFixed(2) }) : '', opt.kill && !opt.crisis ? T('why.ruleKill', { p: pct(opt.kill) }) : ''].filter(Boolean).join(EN ? '; ' : '；')}</p>` : ''}
      <div class="opts"><button class="opt" type="button" id="dlg-go"><span class="k">▶</span><span class="tt">${T('continue')}</span></button></div>`;
    $('#dlg').className = 'dlg';
    $('#dlg-go').focus();
    $('#dlg-go').onclick = () => { G.sfx('move'); $('#overlay').hidden = true; schedule(); };
  }
  document.addEventListener('keydown', (e) => {
    if (!$('#overlay').hidden) {
      if (L && L.stopTiming) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) L.stopTiming(); } return; }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { const os = [...$('#dlg').querySelectorAll('.opt')], i = os.indexOf(document.activeElement); if (os.length) { os[(i + (e.key === 'ArrowDown' ? 1 : os.length - 1) + os.length) % os.length].focus(); G.sfx('move'); } e.preventDefault(); return; }
      const b = $('#dlg').querySelector(`.opt[data-i="${+e.key - 1}"]`);
      if (b) { b.click(); e.preventDefault(); }
      return;
    }
    if (!L || L.dead || $('#v-life').hidden || e.target.closest('input,select,textarea')) return;
    if (e.key === ' ' && !L.stepMode) { togglePause(); e.preventDefault(); return; }
    if ((e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') && L.stepMode) { step(); e.preventDefault(); return; }
    const k = availableActions()[+e.key - 1];
    if (k) { setAct(k); e.preventDefault(); }
  });

  // ---------- life rendering ----------
  function addLog(text, cls = '', fact = null, ev = null) {
    if (L.quietFrom != null) {
      const gap = L.cal - L.quietFrom;
      L.quietFrom = null;
      if (gap >= UNIT[L.unit || 'day'] * 3) {
        const v = QUIET[L.quietN = (L.quietN || 0) + 1];
        if (v) addLog(v.replace('{d}', dur(gap)), 'idle');
      }
    }
    const unit = L.unit || stageAt(L.sp, L.age).unit;
    L.log.push({ t: stamp(L.cal, unit), text, cls, fact });
    const el = document.createElement('div');
    el.className = `logline ${cls}`;
    el.innerHTML = `<span class="t">${esc(stamp(L.cal, unit))}</span><span class="tx">${esc(text)}${fact ? `<span class="fact">${esc(fact)} ${ev && ev.ref ? link(L.sp, ev.ref) : ''}</span>` : ''}${ev && ev.basis ? `<span class="fact plain">${badge(ev.basis)} ${link(L.sp, ev.ref)}</span>` : ''}</span>`;
    const log = $('#lf-log');
    log.prepend(el);
    if (!L.auto || !L.quietSim) say(text, ev && ev.ref ? link(L.sp, ev.ref) : '');
    while (log.children.length > 300) log.lastChild.remove();
  }
  function renderControls() {
    const sp = [1, 2, 4, 8, 16];
    $('#controls').innerHTML =
      `<button class="btn" type="button" data-c="pause">${L.paused ? T('resume') : T('pause')}</button>` +
      sp.map((s) => `<button class="btn" type="button" data-c="speed" data-v="${s}" aria-pressed="${L.speed === s && !L.ff}">${s}×</button>`).join('') +
      `<button class="btn" type="button" data-c="ff" aria-pressed="${L.ff}">${T('ff')}</button>` +
      `<button class="btn" type="button" data-c="stepmode" aria-pressed="${L.stepMode}" title="${T('stepModeTip')}">${T('stepMode')}</button>` +
      `<button class="btn" type="button" data-c="auto" aria-pressed="${L.auto}">${T('auto')}</button>` +
      `<button class="btn" type="button" data-c="quit">${T('quit')}</button>`;
  }
  function actHints(A) {
    const h = [];
    const H = T('hint');
    if (A.gain >= 1.5) h.push([H.foodUp, 'up']); else if (A.gain <= 0.6) h.push([H.foodDown, 'down']);
    if (A.risk >= 1.15) h.push([H.riskUp, 'down']); else if (A.risk <= 0.9) h.push([H.riskDown, 'up']);
    if (A.health) h.push([H.stamina, 'up']);
    if (A.ev >= 1.5) h.push([H.events, '']);
    return h.map(([t, c]) => `<span class="chip ${c}">${t}</span>`).join('');
  }
  function renderActs() {
    if (!L) return;
    const acts = availableActions();
    const st = stageAt(L.sp, L.age);
    if (!acts.includes(L.act)) L.act = 'instinct';
    $('#lf-acts').innerHTML = acts.length
      ? acts.map((k, i) => { const A = actionDef(k); return `<button class="act" type="button" data-act="${k}" aria-pressed="${L.act === k}"><span>${G.icon(k, 28)}</span><b>${esc(A.name)}</b><span class="k">${i + 1}</span><span class="hints">${actHints(A)}</span></button>`; }).join('')
      : `<p class="muted">${esc(T('cantAct', { s: st.name }))}</p>`;
    $('#lf-act-desc').textContent = acts.length ? actionDef(L.act).desc : '';
    const next = $('#lf-next');
    next.hidden = !L.stepMode || L.dead;
    next.textContent = T('stepBtn', { u: UNITNAME[L.unit || st.unit] });
  }
  $('#lf-acts').addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]'); if (!b || !L || L.dead) return;
    setAct(b.dataset.act);
  });
  $('#lf-next').addEventListener('click', () => { if (L && !L.dead && $('#overlay').hidden) step(); });
  function setAct(k) {
    if (L.act === k) return;
    L.act = k; G.sfx('pick');
    const nm = actionDef(k).name;
    L.actSwitch = (L.actSwitch || 0) + 1;
    addLog(k === 'instinct' ? Tn('toInstinct', L.actSwitch) : Tn('toAction', L.actSwitch, { a: EN ? nm.toLowerCase() : nm }), 'choice');
    renderActs();
  }
  function togglePause() { L.paused = !L.paused; renderControls(); schedule(); }
  $('#controls').addEventListener('click', (e) => {
    const b = e.target.closest('[data-c]'); if (!b || !L) return;
    const c = b.dataset.c;
    if (c === 'pause') return togglePause();
    if (c === 'speed') { L.speed = +b.dataset.v; L.ff = false; store.set('lunhui.speed', L.speed); }
    if (c === 'ff') { L.ff = !L.ff; L.paused = false; }
    if (c === 'auto') L.auto = !L.auto;
    if (c === 'stepmode') { L.stepMode = !L.stepMode; store.set('lunhui.step', L.stepMode); L.ff = false; L.paused = false; renderActs(); }
    if (c === 'quit') { clearTimeout(timer); L.paused = true; show('home'); renderHome(); return; }
    renderControls(); schedule();
  });

  function statRow(ic, label, v, col) {
    return `<div class="stat${v < 25 ? ' low' : ''}" title="${esc(label)}" role="img" aria-label="${esc(label)} ${Math.round(v)}">${G.icon(ic, 18)}<span class="track"><i style="width:${v}%;background-color:${col}"></i></span><span class="n">${Math.round(v)}</span></div>`;
  }
  function sibsAlive() {
    if (L.sibsN <= 1) return L.dead ? 0 : 1;
    const others = Math.round((L.sibsN - 1) * S(L.sp, L.age));
    return others + (L.dead ? 0 : 1);
  }
  function renderLife() {
    const sp = L.sp, st = stageAt(sp, L.age);
    const unit = L.unit || st.unit;
    const [n, u] = bigAge(L.cal, unit);
    $('#lf-age').innerHTML = `${n}<small>${u}</small>`;
    const bio = Math.abs(L.cal - L.age) > 0.5 ? T('bioAge', { d: dur(L.age) }) : '';
    $('#lf-sub').textContent = T('sub', { sp: sp.name, st: st.name, u: UNITNAME[unit], y: BIRTH_YEAR + Math.floor(L.cal / 365), bio });
    $('#lf-prog').style.width = `${clamp(L.age / sp.maxAge, 0, 1) * 100}%`;
    $('#lf-id').innerHTML = `
      <h3>${esc(sp.name)}</h3><div class="small muted">${T('no', { n: L.no })}</div>
      <dl class="kv">
        ${L.sex ? `<dt>${T('fSex')}</dt><dd>${esc(L.sex)}</dd>` : ''}
        ${Object.entries(L.rolls).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}
        <dt>${T('fCon')}</dt><dd>${esc(traitName(L.traits.con))}</dd>
        <dt>${T('fTem')}</dt><dd>${esc(traitName(L.traits.tem))}</dd>
        <dt>${T('fStage')}</dt><dd>${esc(st.name)}</dd>
        <dt>${T('fKids')}</dt><dd class="mono">${L.stats.offspring.toLocaleString('en-US')}</dd>
      </dl>`;
    const s = L.stats;
    checkGoals(); feedback();
    $('#lf-who').innerHTML = `${icon(sp, 34)}<div><b>${esc(sp.name)}</b><small>${esc(st.name)}</small></div>`;
    $('#lf-stars').innerHTML = starRow(starCount()); $('#lf-goals').innerHTML = goalsHTML();
    $('#lf-stats').innerHTML =
      statRow('heart', T('stat.health'), s.health, 'var(--bad)') +
      statRow('food', T('stat.food'), s.food, 'var(--warn)') +
      statRow('shield', T('stat.safety'), s.safety, 'var(--cyan)');
    $('#lf-sibl').textContent = T('sibsLeft', { label: sp.birth.siblingsLabel || T('sibsDefault') });
    const alive = sibsAlive();
    $('#lf-sibn').textContent = `${alive.toLocaleString('en-US')} / ${L.sibsN.toLocaleString('en-US')}`;
    $('#lf-sibp').textContent = L.sibsN > 1
      ? (alive <= 1 && !L.dead ? T('sibsOnly') : T('sibsPct', { p: pct(S(sp, L.age)) }))
      : T('onlyChild');
    const firstRoll = Object.values(L.rolls)[0];
    $('#lf-cap').textContent = `${firstRoll ? firstRoll + ' · ' : ''}${st.name}${L.dead ? T('deadTag') : ''}`;
  }
  function isNight() {
    const unit = L.unit || stageAt(L.sp, L.age).unit;
    if (unit !== 'hour' && unit !== 'day') return false;
    const h = ((L.cal * 24) + 6) % 24;
    return unit === 'hour' ? (h < 6 || h >= 19) : (L.ticks % 2 === 1 && rand() < 0.02);
  }
  function animate() {
    cancelAnimationFrame(raf);
    let last = 0;
    const loop = (ts) => {
      if ($('#v-life').hidden || !L) return;
      if (ts - last > 90) {
        last = ts; L.t++;
        window.drawScene($('#scene'), { scene: L.sp.scene, t: L.t, night: isNight(), emoji: L.sp.emoji, sprite: art0(L.sp), act: L.act, grow: clamp(L.age / (Math.min(L.sp.maturity || 0, L.sp.maxAge * 0.5) || 1), 0, 1), quiet: stageAt(L.sp, L.age)._quiet, threat: L.threat, hurt: $('#stage').classList.contains('hurt'), sibs: sibsAlive() - (L.dead ? 0 : 1), seed: L.seed, dead: L.dead });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }

  // ---------- final moment + death record ----------
  function openFinal() {
    if (!L.quietSim) G.sfx('dead'); $('#dlg').className = 'dlg crisis'; $('#stage').classList.remove('danger');
    $('#dlg').innerHTML = `
      <div class="head"><span class="eyebrow" style="color:var(--bad)">${T('ended')}</span><span class="eyebrow">${esc(stageAt(L.sp, L.age).name)}</span></div>
      <h2 id="dlg-title">${T('lived', { d: dur(L.cal) })}</h2>
      <p class="cause">${esc(L.cause.short)}</p>
      <p>${esc(fill(L.cause.text))}</p>
      <div class="opts"><button class="opt" type="button" id="to-death"><span class="k">▶</span><span class="tt">${T('toRecord')}</span></button></div>`;
    $('#overlay').hidden = false;
    $('#to-death').focus();
    $('#to-death').onclick = () => { $('#overlay').hidden = true; renderDeath(); show('death'); };
  }
  function sampleOther() {
    const o = wpick(ODDS, (x) => x.pop);
    const sp = SP[o.id];
    const age = invS(sp, rand());
    const st = stageAt(sp, age);
    const ok = (sp.causes || []).filter((x) => (x.w ?? 1) > 0 && inStage(x, st));
    const c = age >= sp.maxAge * 0.98 ? (sp.causes || []).find((x) => x.id === 'old') : (ok.length ? wpick(ok, (x) => x.w ?? 1) : null);
    return { sp, age, cause: c ? c.short : T('death.short') };
  }
  function curveSVG(sp, age) {
    const W = 600, H = 200, pl = 44, pr = 12, pt = 12, pb = 30;
    const xmax = sp.maxAge;
    const X = (t) => pl + (t / xmax) * (W - pl - pr);
    const Y = (s) => pt + (1 - s) * (H - pt - pb);
    let d = '';
    for (let i = 0; i <= 120; i++) { const t = (i / 120) * xmax; d += `${i ? 'L' : 'M'}${X(t).toFixed(1)},${Y(S(sp, t)).toFixed(1)}`; }
    const area = `${d}L${X(xmax)},${Y(0)}L${X(0)},${Y(0)}Z`;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * xmax);
    const you = clamp(age, 0, xmax);
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${T('curveAria')}">
      ${[0, 0.5, 1].map((s) => `<line x1="${pl}" x2="${W - pr}" y1="${Y(s)}" y2="${Y(s)}" stroke="var(--line)" stroke-width="1"/><text x="${pl - 6}" y="${Y(s) + 4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">${s * 100}%</text>`).join('')}
      <path d="${area}" fill="var(--cyan)" fill-opacity="0.15"/>
      <path d="${d}" fill="none" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="4 3"/>
      ${(sp._ev.survival || []).map((a) => { let q = ''; for (let i = 0; i <= 24; i++) { const t = a.from + (a.to - a.from) * i / 24; q += `${i ? 'L' : 'M'}${X(t).toFixed(1)},${Y(S(sp, t)).toFixed(1)}`; } return `<path d="${q}" fill="none" stroke="var(--good)" stroke-width="3.5"/>`; }).join('')}
      ${ticks.map((t, i) => `<text x="${X(t)}" y="${H - 10}" text-anchor="${i === 0 ? 'start' : i === 4 ? 'end' : 'middle'}" font-size="11" fill="var(--muted)" font-family="var(--font-mono)">${t === 0 ? '0' : dur(t)}</text>`).join('')}
      <line x1="${X(you)}" x2="${X(you)}" y1="${pt}" y2="${H - pb}" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="${X(you)}" cy="${Y(S(sp, you))}" r="5" fill="var(--accent)"/>
      <text x="${X(you) + (X(you) > W * 0.7 ? -8 : 8)}" y="${pt + 12}" text-anchor="${X(you) > W * 0.7 ? 'end' : 'start'}" font-size="12" fill="var(--accent)">${T('you')}</text>
    </svg>`;
  }
  function lifeMapHTML() {
    let cells = L.map;
    const max = 360;
    if (cells.length > max) { const k = Math.ceil(cells.length / max); cells = cells.filter((_, i) => i % k === 0); }
    return cells.map((c) => {
      if (c.skip) return `<i class="skip" title="${T('dormantCell')}"></i>`;
      const h = c.h;
      const col = h >= 66 ? 'var(--good)' : h >= 33 ? 'var(--warn)' : 'var(--bad)';
      return `<i style="background:${col};opacity:${0.45 + h / 180}"></i>`;
    }).join('') + `<i style="background:var(--ink)" title="${T('deathCell')}"></i>`;
  }
  function actBreakdown() {
    const tot = Object.values(L.actTicks).reduce((a, b) => a + b, 0);
    if (!tot) return '';
    const rows = Object.entries(L.actTicks).sort((a, b) => b[1] - a[1]).map(([k, n]) => {
      const A = actionDef(k);
      return `<div class="stat" style="grid-template-columns:64px minmax(0,1fr) 44px"><span>${esc(A.name)}</span><span class="track"><i style="width:${(n / tot) * 100}%;background:var(--cyan)"></i></span><span class="n">${Math.round((n / tot) * 100)}%</span></div>`;
    }).join('');
    return `<div class="panel"><div class="row" style="justify-content:space-between"><h3>${T('spent')}</h3><span class="eyebrow">${T('byTicks')}</span></div><div style="display:grid;gap:8px">${rows}</div></div>`;
  }
  // ---------- why did this happen ----------
  const measuredAt = (sp, age) => (sp._ev.survival || []).find((a) => age >= a.from - 1e-9 && age < a.to);
  function whyPanel() {
    const w = L.why, sp = L.sp, c = L.cause; if (!w) return '';
    const st = w.stage, m = measuredAt(sp, w.age), out = [];
    if (w.kind === 'rate') {
      out.push(`<h4>${T('why.when')}</h4><p>${esc(T('why.base', { s: st.name, u: UNITNAME[w.unit], p: pct(w.p0) }))}</p>${m ? evLine(sp, m) : `<p class="evline">${badge('est')} ${T('why.noCurve')}</p>`}`);
      out.push(`<p>${T(w.parts.length ? 'why.factors' : 'why.noFactors')} ${badge('rule')}</p>${w.parts.length ? `<ul class="parts">${w.parts.map(([l, x]) => `<li><span>${esc(l)}</span><b class="mono ${x > 1 ? 'up' : 'down'}">×${x.toFixed(2)}</b></li>`).join('')}</ul>` : ''}<p>${esc(T('why.final', { u: UNITNAME[w.unit], p: pct(w.p) }))}</p>`);
      if (w.crisis) out.push(`<p>${esc(T('why.crisis', { t: w.crisis.t, p: pct(w.crisis.p) }))} ${badge('rule')}</p>`);
    } else if (w.kind === 'choice') out.push(`<h4>${T('why.when')}</h4><p>${esc(T('why.choice', { t: w.t, p: pct(w.p) }))} ${badge('rule')}</p>`);
    else out.push(`<h4>${T('why.when')}</h4><p>${esc(T(w.kind === 'limit' ? 'why.limit' : 'why.health', { d: dur(sp.maxAge) }))} ${badge(w.kind === 'limit' ? 'est' : 'rule')}</p>`);
    const tb = causeTable(sp, st, L.flags), row = tb.list.find((x) => x.c.id === c.id);
    out.push(`<h4>${esc(T('why.cause', { c: c.short }))}</h4>`);
    if (row && w.kind !== 'choice') out.push(`<p>${esc(T('why.share', { s: st.name, p: pct(row.w) }))}</p>`);
    if (row && row.given) out.push(evLine(sp, tb.anchor));
    else { const n = sp._ev.causeNotes && sp._ev.causeNotes[c.id]; if (n) out.push(evLine(sp, n)); out.push(`<p class="evline">${badge('est')} ${T(n ? 'why.noShareButReal' : 'why.noShare')}</p>`); }
    const used = new Set([m, tb.anchor]);
    const rel = (sp._ev.facts || []).map((f) => ({ f, k: ((f.causes || []).includes(c.id) ? 4 : 0) + ((f.flags || []).some((x) => L.flags.has(x)) ? 2 : 0) + ((f.stages || []).includes(st.id) ? 1 : 0) })).filter((x) => x.k && !used.has(x.f) && (!(x.f.flags || []).length || x.f.flags.some((q) => L.flags.has(q)))).sort((a, b) => b.k - a.k).slice(0, 4);
    if (rel.length) out.push(`<h4>${T('why.related')}</h4>${rel.map((x) => evLine(sp, x.f)).join('')}`);
    return `<div class="panel why"><h3>${T('why.title')}</h3>${out.join('')}<p class="small muted">${T('why.legend')} <button class="linkbtn" type="button" data-src="${sp.id}">${T('why.allSources')}</button></p></div>`;
  }
  function coverage(sp) { const e = sp._ev, cs = new Set([...(e.causes || []).flatMap((x) => Object.keys(x.shares)), ...Object.keys(e.causeNotes || {}), ...(e.facts || []).flatMap((f) => f.causes || [])]); return { surv: (e.survival || []).length, shares: (e.causes || []).length, causes: cs.size, allCauses: sp.causes.length, facts: (e.facts || []).length, refs: Object.keys(e.refs).length }; }
  function renderSources(focus) {
    const cov = ODDS.map((o) => ({ sp: SP[o.id], c: coverage(SP[o.id]) })), sum = (k) => cov.reduce((t, x) => t + x.c[k], 0);
    const R = ACTIONS;
    $('#v-src').innerHTML = `<div style="display:grid;gap:8px"><h2 style="font-size:30px">${T('src.title')}</h2><p>${T('src.intro', { refs: sum('refs'), n: cov.filter((x) => x.c.refs).length, all: cov.length })}</p></div>
      <div class="panel"><h3>${T('src.how')}</h3><p>${badge('measured')} ${T('src.measured')}</p><p>${badge('official')} ${T('src.official')}</p><p>${badge('related')} ${T('src.related')}</p><p>${badge('est')} ${T('src.est')}</p><p>${badge('rule')} ${T('src.rule', { forage: R.forage.risk, hide: R.hide.risk, rest: R.rest.risk, explore: R.explore.risk, mate: R.mate.risk })}</p></div>
      ${cov.map(({ sp, c }) => `<details class="panel srcsp" id="src-${sp.id}" ${focus === sp.id ? 'open' : ''}><summary><span class="em">${icon(sp, 24)}</span> <b>${esc(sp.name)}</b> <span class="small muted">${T('src.line', { surv: c.surv, causes: c.causes, all: c.allCauses, refs: c.refs })}</span></summary>
        <p class="small muted">${T('fAlive')}${EN ? ': ' : '：'}${esc(oddsOf(sp.id).src)}</p>
        ${(sp._ev.survival || []).length ? `<h4>${T('src.surv')}</h4>${sp._ev.survival.map((a) => evLine(sp, a)).join('')}` : `<p class="evline">${badge('est')} ${T('src.noSurv')}</p>`}
        ${(sp._ev.causes || []).length || Object.keys(sp._ev.causeNotes || {}).length ? `<h4>${T('fCause')}</h4>${(sp._ev.causes || []).concat(Object.values(sp._ev.causeNotes || {})).map((a) => evLine(sp, a)).join('')}` : ''}
        ${(sp._ev.facts || []).length ? `<h4>${T('src.facts')}</h4>${sp._ev.facts.map((a) => evLine(sp, a)).join('')}` : ''}</details>`).join('')}`;
    show('src'); if (focus) $(`#src-${focus}`).scrollIntoView();
  }
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-src]'); if (!b) return; if (L && !L.dead) { L.paused = true; clearTimeout(timer); } renderSources(b.dataset.src || null); });

  // ---------- sharing: one life as plain data (d), the same whether it's yours or came in a link ----------
  function packLife() {
    const i = (L.sp.causes || []).findIndex((x) => x.id === L.cause.id), n = L.map.length, cells = Math.min(10, n), strip = [];
    for (let k = 0; k < cells; k++) { const c = L.map[Math.floor((k + 0.5) * n / cells)]; strip.push(c.skip ? 'z' : c.h >= 66 ? 'g' : c.h >= 33 ? 'y' : 'r'); }
    return { id: L.id, cal: L.cal, cause: i >= 0 ? i.toString(36) : { starve: 'zs', old: 'zo' }[L.cause.id] || 'zd', off: L.stats.offspring, esc: L.escapes,
      con: TRAITS.con.indexOf(L.traits.con), tem: TRAITS.tem.indexOf(L.traits.tem), strip: strip.join(''), rolls: L.rollIdx.slice(0, 6), awards: [starCount()], ch: L.choices.length };
  }
  function causeOf(d) {
    const g = { zs: 'starve', zo: 'oldAge', zd: 'death' }[d.cause];
    if (g) return T(`${g}.short`);
    const c = (SP[d.id].causes || [])[parseInt(d.cause, 36)];
    return c ? c.short : T('death.short');
  }
  const codeOf = (d) => window.SOCIAL.encode(d);
  // the honest one-line statistic for a shared life
  const ageOf = (d) => d.cal;
  const dataLine = (d) => `${T('outlived', { p: pct(1 - S(SP[d.id], Math.min(ageOf(d), SP[d.id].maxAge))) })}${EN ? ' (' : '（'}${T('outlivedNote')}${EN ? ')' : '）'}`;
  function causeEvidence(id, c) {   // the text that says what is known about this cause
    const ev = SP[id]._ev; if (!c) return null;
    const a = (ev.causes || []).find((x) => c.id in x.shares); if (a) return a;
    return (ev.facts || []).find((f) => (f.causes || []).includes(c.id) && /\d/.test(f.zh)) || (ev.causeNotes && ev.causeNotes[c.id]) || null;
  }
  const causeObj = (d) => (SP[d.id].causes || [])[parseInt(d.cause, 36)] && !/^z/.test(d.cause) ? SP[d.id].causes[parseInt(d.cause, 36)] : null;
  function cardData(d) {
    const sp = SP[d.id], o = oddsOf(d.id), e = causeEvidence(d.id, causeObj(d)), r = e && sp._ev.refs[e.ref];
    return { name: sp.name, about: about(d.id), lived: T('lived', { d: dur(d.cal) }).replace(/^你/, ''), cause: `${T('fCause')}${EN ? ': ' : '：'}${causeOf(d)}`,
      stat: T('outlived', { p: pct(1 - S(sp, Math.min(d.cal, sp.maxAge))) }).replace(/我的?/, ''), statNote: T('outlivedNote'), evidence: e ? txt(e) : '', evidenceSrc: r ? cite(r) : '', evidenceLabel: T('evData'),
      strip: d.strip, odds: T('odds', { p: oneIn(o.pop / TOTAL) }), head: T('deathHead'), lead: T('cardLead'),
      scene: sp.scene, emoji: sp.emoji, sprite: art0(sp), seed: 7 + sp.name.length, foot: T('title'), en: EN, stars: d.awards && d.awards.length ? d.awards[0] : null, url: window.SOCIAL.url(codeOf(d)) };
  }
  function shareText(d) {
    const sp = SP[d.id], strip = [...d.strip].map((c) => ({ g: '🟩', y: '🟨', r: '🟥', z: '💤' }[c])).join('') + '⬛';
    const e = causeEvidence(d.id, causeObj(d)), r = e && sp._ev.refs[e.ref];
    return T('share', { art: art(sp.name), mw: mw(d.id), sp: lc(sp.name), d: dur(d.cal), c: causeOf(d), strip, data: dataLine(d) + (e ? `\n${txt(e)}${EN ? ` (${cite(r)})` : `（${cite(r)}）`}` : ''), url: window.SOCIAL.url(codeOf(d)) });
  }
  function sharePanel(d, cardOnly = false) {
    const tx = shareText(d);
    return `<div class="panel sharepanel${cardOnly ? ' cardonly' : ''}">
      ${cardOnly ? '' : `<h3>${T('shareTitle')}</h3>`}
      <div class="sharegrid">
        <div class="cardimg" id="cardimg"></div>
        <div class="sharecol">
          <div class="row">
            ${window.SOCIAL.canSysShare() ? `<button class="btn-primary sm" type="button" data-s="sys">${T('sysShare')}</button>` : ''}
            <button class="${window.SOCIAL.canSysShare() ? 'btn' : 'btn-primary sm'}" type="button" data-s="img">${T('saveImg')}</button>
            <button class="btn" type="button" data-s="text">${T('copy')}</button>
            <button class="btn" type="button" data-s="link">${T('copyLink')}</button>
            <a class="btn" target="_blank" rel="noopener" href="${esc(window.SOCIAL.x(tx))}">${T('toX')}</a>
            <a class="btn" target="_blank" rel="noopener" href="${esc(window.SOCIAL.weibo(tx))}">${T('toWeibo')}</a>
          </div>
          <p class="small" id="sharemsg" aria-live="polite"></p>
          <div class="sharebox" id="sharetext">${esc(tx)}</div>
        </div>
      </div></div>`;
  }
  function wireShare(root, d) {
    let cv = null;
    const msg = (t) => { const m = root.querySelector('#sharemsg'); if (m) m.textContent = t; };
    const made = window.SOCIAL.card(cardData(d)).then((c) => { cv = c; const im = new Image(); im.alt = T('shareCardMade'); im.src = c.toDataURL('image/png'); root.querySelector('#cardimg').replaceChildren(im); return c; });
    const copy = (t, ok) => { const fb = () => { const r = document.createRange(); r.selectNodeContents(root.querySelector('#sharetext')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); msg(T('selected')); }; try { navigator.clipboard.writeText(t).then(() => msg(ok), fb); } catch (e) { fb(); } };
    root.querySelector('.sharepanel').addEventListener('click', async (e) => {
      const b = e.target.closest('[data-s]'); if (!b) return;
      const k = b.dataset.s;
      if (k === 'text') return copy(shareText(d), T('copied'));
      if (k === 'link') return copy(window.SOCIAL.url(codeOf(d)), T('linkCopied'));
      if (!cv) cv = await made;
      if (k === 'img') { const r = await window.SOCIAL.saveImage(cv, `${T('title')}-${SP[d.id].name}.png`).catch(() => 'hold'); msg(r === 'saved' ? T('imgSaved') : r === 'hold' ? T('imgHold') : ''); }
      if (k === 'sys') window.SOCIAL.sysShare(cv, shareText(d), window.SOCIAL.url(codeOf(d))).catch(() => {});
    });
  }
  // ---------- a life that arrived in a link ----------
  let challenge = null;
  function readHash() {
    const d = window.SOCIAL.decode(location.hash.slice(1), Object.keys(SP));
    if (!d) return false;
    const mine = store.get('lunhui.lives', []).some((l) => l.code === codeOf(d));
    if (!mine) challenge = d;
    openLife(d, mine);
    return true;
  }
  function openLife(d, mine) {
    $('#v-friend').innerHTML = `
      <div style="display:grid;gap:6px;text-align:center"><div class="eyebrow">${T(mine ? 'myLife' : 'friendHead')}</div><h2 style="font-size:30px">${esc(SP[d.id].name)}</h2><p class="muted">${esc(about(d.id))}</p></div>
      ${mine ? '' : `<div class="row" style="justify-content:center"><button class="btn-primary" type="button" id="f-go">${T('friendGo')}</button><button class="btn" type="button" id="f-home">${T('friendHome')}</button></div>`}
      ${sharePanel(d, !mine)}`;
    if (!mine) { $('#f-go').onclick = () => reveal(); $('#f-home').onclick = () => { renderHome(); show('home'); }; }
    wireShare($('#v-friend'), d); show('friend');
  }
  function versus(d) {
    if (!challenge) return '';
    const a = d, b = challenge, pop = (x) => oddsOf(x.id).pop;
    const row = (l, x, y) => `<tr><td>${l}</td><td class="mono">${x}</td><td class="mono">${y}</td></tr>`;
    return `<div class="panel"><h3>${T('vsTitle')}</h3><table class="compare"><thead><tr><th></th><th class="mono">${T('vsYou')} · ${esc(SP[a.id].name)}</th><th class="mono">${T('vsThem')} · ${esc(SP[b.id].name)}</th></tr></thead><tbody>
      ${row(T('vsLived'), dur(a.cal), dur(b.cal))}${row(T('vsKids'), a.off.toLocaleString('en-US'), b.off.toLocaleString('en-US'))}${row(T('vsRare'), oneIn(pop(a) / TOTAL), oneIn(pop(b) / TOTAL))}</tbody></table></div>`;
  }
  function renderDeath() {
    const sp = L.sp, o = oddsOf(sp.id), hum = SP.human;
    const longer = S(sp, L.age);
    const mat = sp.maturity || 0;
    const reached = L.age >= mat;
    const others = [0, 1, 2, 3].map(sampleOther);
    const humanLine = hum && hum !== sp ? `<p>${T('humanSame', { d: dur(L.cal), p: pct(S(hum, L.cal)) })}</p>` : '';
    const d = L.life;
    $('#v-death').innerHTML = `
      <div class="panel over"><h1>${T('over')}</h1><div class="em">${icon(sp, 84)}</div><div class="big">${esc(sp.name)}${SEP}${T('lived', { d: dur(L.cal) }).replace(/^你/, '')}</div><p class="cause">${esc(L.cause.short)}</p>
        <div class="stars">${starRow(starCount(), 44)}</div><div class="goals">${goalsHTML()}</div>
        <div class="row" style="justify-content:center"><button class="btn-primary" type="button" data-again="${L.mode}">${T('again')}</button><button class="btn" type="button" id="d-book">${T('navBook')}</button><button class="btn" type="button" id="d-home">${T('home')}</button></div></div>
      ${whyPanel()}
      ${sharePanel(d)}
      ${versus(d)}
      <details class="more"><summary>${T('moreLife')}</summary>
      <div class="card deathcard">
        <div class="card-head"><span>${T('deathHead')}</span><span>${T('no', { n: L.no })}</span></div>
        <div class="card-body">
          <div class="specname"><span class="em">${icon(sp, 60)}</span><div><h2>${esc(sp.name)}</h2>${EN ? `<div class="sci">${esc(sp.sci || '')}</div>` : ''}</div></div>
          <p class="mono small muted">${esc(T('deathLine', { y0: BIRTH_YEAR, y1: BIRTH_YEAR + Math.floor(L.cal / 365), d: dur(L.cal), bio: Math.abs(L.cal - L.age) > 0.5 ? T('deathBio', { d: dur(L.age) }) : '', st: stageAt(sp, L.age).name }))}</p>
          <div><span class="eyebrow">${T('fCause')}</span><p class="cause">${esc(L.cause.short)}</p><p>${esc(fill(L.cause.text))}</p></div>
          <div class="fields">
            ${L.sex ? `<div class="field"><span class="eyebrow">${T('fSex')}</span><div class="v">${esc(L.sex)}</div></div>` : ''}
            ${Object.entries(L.rolls).map(([k, v]) => `<div class="field"><span class="eyebrow">${esc(k)}</span><div class="v">${esc(v)}</div></div>`).join('')}
            <div class="field"><span class="eyebrow">${T('fCon')} · ${T('fTem')}</span><div class="v">${esc(traitName(L.traits.con))} · ${esc(traitName(L.traits.tem))}</div></div>
            <div class="field"><span class="eyebrow">${T('fKids')}</span><div class="v mono">${L.stats.offspring.toLocaleString('en-US')}</div></div>
            <div class="field"><span class="eyebrow">${T('fChoices')}</span><div class="v mono">${L.choices.length}</div></div>
            <div class="field"><span class="eyebrow">${T('fEscapes')}</span><div class="v mono">${T('times', { n: L.escapes })}</div></div>
            <div class="field"><span class="eyebrow">${T('fOdds')}</span><div class="v mono">${oneIn(o.pop / TOTAL)}</div></div>
          </div>
          <div style="display:grid;gap:6px">
            ${L.sibsN > 1 ? `<p>${T('sibsLonger', { label: esc(sp.birth.siblingsLabel || T('sibsDefault')), n: L.sibsN.toLocaleString('en-US'), p: pct(longer) })}</p>` : `<p>${T('kindLonger', { p: pct(longer) })}</p>`}
            <p>${T('matureLine', { p: pct(S(sp, mat)), r: reached ? T('madeIt') : T('didnt') })}</p>
            ${humanLine}
            ${L.saves ? `<p class="small muted">${esc(T('savesLine', { p: pct(1 - longer), n: L.saves }))}</p>` : ''}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="row" style="justify-content:space-between"><h3>${T('thisLife')}</h3><span class="eyebrow">${T('mapLegend')}</span></div>
        <div class="lifemap">${lifeMapHTML()}</div>
      </div>

      <div class="panel curve">
        <div class="row" style="justify-content:space-between"><h3>${T('curveTitle')}</h3><span class="eyebrow">${T('curveLegend')}</span></div>
        ${curveSVG(sp, L.age)}
        <p class="small muted">${T('src.curveKey')}</p>${(sp._ev.survival || []).map((a) => evLine(sp, a)).join('')}${(sp._ev.survival || []).length ? '' : `<p class="small muted">${esc(sp.survivalNote || '')}</p>`}
      </div>

      ${actBreakdown()}

      ${L.choices.length ? `<div class="panel"><h3>${T('yourChoices')}</h3><div class="companions">${L.choices.map((c) => `<div class="comp"><span class="em mono small">·</span><span>${esc(c)}</span></div>`).join('')}</div></div>` : ''}

      <div class="panel">
        <div class="row" style="justify-content:space-between"><h3>${T('sameSecond')}</h3><span class="eyebrow">${T('byRealOdds')}</span></div>
        <div class="companions">${others.map((x) => `<div class="comp"><span class="em">${icon(x.sp, 20)}</span><span>${T('companion', { art: art(x.sp.name), Art: art(x.sp.name) === 'an' ? 'An' : 'A', mw: mw(x.sp.id), sp: esc(lc(x.sp.name)), d: dur(x.age), c: esc(x.cause) })}</span></div>`).join('')}</div>
      </div>

      </details>

      ${sp.epitaph ? `<p style="font-family:var(--font-display);font-size:24px;text-align:center;padding-block:10px">${esc(sp.epitaph)}</p>` : ''}

      <div class="panel">
        <h3>${T('nextLife')}</h3>
        ${L.mode === 'real' ? `<p class="small muted">${T('invertNote', { p: pct(ODDS.filter((o) => o.group === 'invert').reduce((a, o) => a + o.pop, 0) / ODDS.reduce((a, o) => a + o.pop, 0)) })}</p>` : ''}
        <div class="modes">${MODES.filter(([k]) => k !== 'pick').map(([k, label]) => `<button class="btn" type="button" data-again="${k}" aria-pressed="${k === L.mode}">${label}</button>`).join('')}</div>
      </div>

`;
    $('#v-death').querySelectorAll('[data-again]').forEach((b) => { b.onclick = () => { mode = b.dataset.again; store.set('lunhui.mode', mode); reveal(); }; });
    $('#d-book').onclick = renderBook;
    $('#d-home').onclick = () => { renderHome(); show('home'); };
    wireShare($('#v-death'), d);
  }

  // ---------- book ----------
  function saveLife() {
    const lives = store.get('lunhui.lives', []);
    lives.unshift({ id: L.id, cal: L.cal, cause: L.cause.short, off: L.stats.offspring, at: Date.now(), roll: Object.values(L.rolls)[0] || '', code: codeOf(L.life), st: starCount() });
    store.set('lunhui.lives', lives.slice(0, 200));
  }
  function renderBook() {
    const lives = store.get('lunhui.lives', []);
    const count = {}; lives.forEach((l) => { count[l.id] = (count[l.id] || 0) + 1; });
    const got = ODDS.filter((o) => count[o.id]).length, best = {}; lives.forEach((l) => { best[l.id] = Math.max(best[l.id] || 0, l.st || 0); });
    $('#v-book').innerHTML = `
      <div style="display:grid;gap:6px">
        <h2 style="font-size:34px">${T('navBook')}</h2>
        <p class="muted">${T('bookIntro', { n: lives.length, got, all: ODDS.length })}</p>
        <div class="meter"><i style="width:${got / ODDS.length * 100}%"></i></div>
      </div>
      <div class="book">${ODDS.map((o) => { const s = SP[o.id]; const n = count[o.id] || 0; return `<div class="bk ${n ? 'got' : 'locked'}"><span class="em">${icon(s, 46)}</span><b>${n ? esc(s.name) : '???'}</b><span class="od">${oneIn(o.pop / TOTAL)}</span><span class="od">${n ? T('livedN', { n }) : T('notYet')}</span>${n ? `<span class="stars">${starRow(best[o.id], 16)}</span>` : ''}</div>`; }).join('')}</div>
      <div class="panel">
        <h3>${T('pastLives')}</h3>
        <div class="pastlives">${lives.length ? lives.slice(0, 60).map((l) => { const s = SP[l.id]; if (!s) return ''; return `<div class="pl"><span style="font-size:20px">${icon(s, 20)}</span><span>${esc(s.name)}${l.roll ? ` · <span class="muted">${esc(l.roll)}</span>` : ''}<br><span class="small muted">${T('livedFor', { d: dur(l.cal) })} · ${esc(l.cause)}${l.off ? ` · ${T('kidsN', { n: l.off.toLocaleString('en-US') })}` : ''}</span></span><span class="mono small muted">${l.code ? `<button class="btn" type="button" data-life="${esc(l.code)}">${T('bookShare')}</button> ` : ''}${new Date(l.at).toLocaleDateString(EN ? 'en-US' : 'zh-CN')}</span></div>`; }).join('') : `<p class="muted">${T('noLives')}</p>`}</div>
      </div>`;
    $('#v-book').onclick = (e) => { const b = e.target.closest('[data-life]'); if (!b) return; const d = window.SOCIAL.decode(b.dataset.life, Object.keys(SP)); if (d) openLife(d, true); };
    show('book');
  }

  // ---------- nav ----------
  $('#go').onclick = reveal;
  const sndBtn = $('#nav-sound'), drawSnd = () => { sndBtn.innerHTML = `${G.icon(G.isMuted() ? 'mute' : 'sound', 18)}<span>${T(G.isMuted() ? 'soundOff' : 'soundOn')}</span>`; sndBtn.setAttribute('aria-label', T(G.isMuted() ? 'soundOff' : 'soundOn')); };
  sndBtn.onclick = () => { G.toggleMute(); drawSnd(); }; drawSnd();
  $('#nav-home').onclick = () => { clearTimeout(revealTimer); if (stopSpin) stopSpin(); if (L && !L.dead) { L.paused = true; clearTimeout(timer); } renderHome(); show('home'); };
  $('#nav-book').onclick = () => { clearTimeout(revealTimer); if (stopSpin) stopSpin(); if (L && !L.dead) { L.paused = true; clearTimeout(timer); } renderBook(); };

  // test hook: lets an automated check play lives quickly
  window.__lunhui = {
    crisis: () => { const c = L.sp.causes.find((x) => x.escape && inStage(x, stageAt(L.sp, L.age))) || L.sp.causes.find((x) => x.escape); clearTimeout(timer); openCrisis(c); },
    SP, ODDS, S, invS, birth: (id) => birth(id), state: () => L, start: () => startLife(),
    // plays one full life synchronously with random choices; returns a summary
    sim(id, randomActs = false) {
      G.quiet(true); birth(id); L.auto = true; L.quietSim = true; L.stepMode = false; startLife();
      let i = 0;
      while (!L.dead && i++ < 20000) {
        clearTimeout(timer);
        if (randomActs && rand() < 0.1) { const a = availableActions(); if (a.length) L.act = a[Math.floor(rand() * a.length)]; }
        step();
      }
      clearTimeout(timer); $('#overlay').hidden = true; G.quiet(false);
      return { id, stars: starCount(), escapes: L.escapes, acts: { ...L.actTicks }, ticks: L.ticks, lived: dur(L.cal), cause: L.cause && L.cause.short, stage: stageAt(L.sp, L.age).name, kids: L.stats.offspring, choices: L.choices.length, logs: L.log.length };
    },
  };

  // static text in index.html
  document.title = T('title');
  document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = T(el.dataset.t); });
  document.querySelectorAll('[data-th]').forEach((el) => { el.innerHTML = T(el.dataset.th); });
  const langBtn = $('#nav-lang');
  const other = Object.keys(window.UI).find((k) => k !== LANG);
  langBtn.innerHTML = `${G.icon('globe', 18)}<span>${T('langSwitch')}</span>`; langBtn.setAttribute('aria-label', T('langSwitch'));
  langBtn.onclick = () => { try { localStorage.setItem('lunhui.lang', JSON.stringify(other)); } catch (e) { /* storage unavailable */ } if (window.LANG_PATH) location.href = window.LANG_PATH[other] + location.hash; else location.reload(); };
  document.querySelectorAll('[data-tl]').forEach((el) => { el.innerHTML = `${G.icon(el.dataset.ic, 18)}<span>${T(el.dataset.tl)}</span>`; el.setAttribute('aria-label', T(el.dataset.tl)); });
  $('#boot').remove(); $('#app').hidden = false;

  renderHome();
  show('home');
  readHash();
  window.addEventListener('hashchange', readHash);
  }
  boot();
})();
