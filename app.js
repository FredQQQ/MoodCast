const questionBank = [
  { theme:'设备状态', text:'如果今天的你是一台家电，你更接近？', answers:[
    ['A / 自动打开窗帘的智能家居', {energy:2, brightness:2, action:1, curiosity:1}],
    ['B / 安静保温、没有任务的热水壶', {stability:2, kindness:2, energy:1}],
    ['C / 普通运行中的冰箱，没什么新闻', {stability:2}],
    ['D / 同时亮着七个灯的路由器', {energy:2, chaos:3, action:1}],
    ['E / 插着电但始终充不进去的手机', {energy:-3, action:-1, humidity:1}]
  ]},
  { theme:'窗户观测', text:'今天的你，更像哪一种窗户？', answers:[
    ['A / 刚擦过，想看看很远的地方', {brightness:2, curiosity:3, action:1}],
    ['B / 开了一条缝，风刚刚好', {stability:3, kindness:1, brightness:1}],
    ['C / 普通地关着，没有特别想法', {stability:1}],
    ['D / 贴满便利贴，不知道哪张最重要', {chaos:3, action:1, humidity:1}],
    ['E / 拉着窗帘，今日谢绝参观', {social:-3, energy:-2, kindness:1}]
  ]},
  { theme:'自由时间', text:'如果今天突然多出一小时，你会怎么使用？', answers:[
    ['A / 立刻出门，寻找一点计划外的东西', {curiosity:3, action:2, brightness:1, energy:1}],
    ['B / 找个舒服的地方，认真浪费掉它', {stability:2, kindness:3, brightness:1}],
    ['C / 做掉一件小事，获得虚假的人生掌控感', {action:3, brightness:1}],
    ['D / 同时打开五件事，最后拥有五个开头', {energy:2, action:1, chaos:3}],
    ['E / 躺着等待这一小时自行消失', {energy:-3, action:-2}]
  ]},
  { theme:'低成本电影', text:'如果今天是一部低成本电影，现在演到哪了？', answers:[
    ['A / 主角突然决定出发', {action:3, curiosity:2, brightness:2}],
    ['B / 大家坐在屋顶吃东西，什么都没发生', {social:2, stability:2, kindness:1}],
    ['C / 普通的过场镜头', {stability:1}],
    ['D / 多条剧情线正在互相撞车', {chaos:3, energy:1, humidity:1}],
    ['E / 主角暂停出演，镜头交给盆栽', {energy:-3, social:-1, action:-2}]
  ]},
  { theme:'猫语翻译', text:'路边有只猫看了你一眼，你认为它想说什么？', answers:[
    ['A / “你看起来很适合一起去冒险。”', {curiosity:3, brightness:2, social:1}],
    ['B / “坐吧，这块阳光分你一半。”', {stability:2, kindness:3, brightness:1}],
    ['C / “没什么，只是确认你还在。”', {humidity:1, kindness:1}],
    ['D / “你应该知道自己忘了什么。”', {chaos:2, friction:1, humidity:1}],
    ['E / “我们都别说话，就这样。”', {social:-2, energy:-1, stability:1}]
  ]},
  { theme:'灵魂容器', text:'今天你的灵魂，比较适合装在哪种容器里？', answers:[
    ['A / 一只正在冒泡的汽水瓶', {energy:3, brightness:2, chaos:1}],
    ['B / 晒过太阳的棉布袋', {brightness:2, stability:2, kindness:2}],
    ['C / 普通但可靠的保温杯', {stability:3, kindness:1}],
    ['D / 忘记盖盖子的工具箱', {chaos:3, action:1}],
    ['E / 写着“请轻拿轻放”的纸箱', {humidity:3, energy:-1, kindness:2}]
  ]},
  { theme:'临时邀约', text:'收到“今晚有空吗？”，你希望后半句是什么？', answers:[
    ['A / “我们去一个没去过的地方。”', {social:2, curiosity:3, energy:2}],
    ['B / “出来散散步，不用聊正事。”', {social:2, stability:2, kindness:2}],
    ['C / “一起随便吃点什么？”', {social:1, stability:1, brightness:1}],
    ['D / “我有一个可能很离谱的计划。”', {social:1, chaos:3, curiosity:2}],
    ['E / “没事，发错了，你继续休息。”', {social:-3, energy:-2, kindness:1}]
  ]},
  { theme:'意外来客', text:'一只鸽子突然来敲你的窗，你会？', answers:[
    ['A / 怀疑它带着支线任务，立刻开窗', {curiosity:3, action:2, brightness:2}],
    ['B / 分它一点吃的，互不打听过去', {kindness:3, stability:2}],
    ['C / 礼貌点头，然后各忙各的', {stability:2}],
    ['D / 开始查鸽子敲窗的十八种征兆', {chaos:2, curiosity:1, humidity:2}],
    ['E / 假装自己也是一件家具', {social:-2, energy:-2, action:-1}]
  ]},
  { theme:'背景音乐', text:'今天走进便利店，你希望响起什么背景音乐？', answers:[
    ['A / 一首让人想边走边晃的歌', {brightness:3, energy:2, action:1}],
    ['B / 很轻的爵士乐，最好没人说话', {stability:3, social:-1, kindness:1}],
    ['C / 店员自己的随机歌单，都行', {stability:1, curiosity:1}],
    ['D / 节奏快到让购物篮产生紧迫感', {energy:2, chaos:2, action:2}],
    ['E / 暂停营业时的安静', {energy:-3, social:-2}]
  ]},
  { theme:'云端文件', text:'如果脑子里有一个文件夹，它今天叫什么？', answers:[
    ['A / “马上就去看看”', {curiosity:3, action:2, brightness:1}],
    ['B / “一些值得留着的小事”', {humidity:2, kindness:2, stability:1}],
    ['C / “新建文件夹（今天）”', {stability:1}],
    ['D / “最终版_真的最终版_7”', {chaos:3, friction:1, action:1}],
    ['E / “稍后处理，请勿催促”', {energy:-2, action:-2, friction:1}]
  ]},
  { theme:'天气特权', text:'气象台允许你取消今天的一条规则，你选？', answers:[
    ['A / 去哪里都不必沿原路返回', {curiosity:3, brightness:2}],
    ['B / 喜欢的时刻可以自动延长十分钟', {kindness:3, humidity:1, brightness:1}],
    ['C / 所有决定都可以先说“看情况”', {stability:1, kindness:1}],
    ['D / 同时做三件事不算分心', {chaos:3, energy:2}],
    ['E / 不回复消息也不需要解释', {social:-3, energy:-1, friction:1}]
  ]},
  { theme:'今日超能力', text:'现在给你一种不太实用的超能力，你选？', answers:[
    ['A / 每次转弯都能发现一家新店', {curiosity:3, action:1, brightness:2}],
    ['B / 随时召唤一小块刚好的阳光', {stability:2, kindness:2, brightness:2}],
    ['C / 精准知道外卖还有几分钟到', {stability:1}],
    ['D / 把所有念头投影成弹幕', {chaos:3, energy:1, humidity:1}],
    ['E / 合理消失 48 小时', {social:-3, energy:-3, action:-1}]
  ]}
];

const climates = {
  aurora:{title:'不明原因极光',icon:'✦',mood:'bright',rare:true,sub:['今日高空出现无法解释的明亮活动。','心里有光路过，原因暂时不重要。'],visibility:['无限良好','可见新大陆'],temp:['刚刚好','闪闪发热'],probs:['临时冒险','感染快乐','遇见好事'],advice:['趁极光还在，去做一件平时不会做的小事。','不必追问快乐从哪里来，先让它待一会儿。'],caption:'一种少见天气：你正在真诚地期待今天。',friend:'你今天状态好得有点可疑，建议趁机乱逛。',nature:'这只人类发现了光，并决定暂时不追究来源。'},
  whirlwind:{title:'灵感龙卷风',icon:'↯',mood:'complex',rare:true,sub:['大量念头正在高速形成，请固定好随身物品。','行动和想法同时起飞，桌面暂不保证整洁。'],visibility:['高速变化','满眼都是入口'],temp:['持续升温','热得想开工'],probs:['突然开坑','五线并进','忘记吃饭'],advice:['先接住一个最喜欢的念头，其他的写下来。','龙卷风适合发电，不适合同时盖五栋房子。'],caption:'你不是没有方向，是方向暂时有点多。',friend:'你现在像开了二十个标签页，而且每个都挺有意思。',nature:'这只人类进入创作季，周围纸张开始不安地飞舞。'},
  updraft:{title:'晴朗上升气流',icon:'↑',mood:'bright',sub:['行动气流稳定上升，适合轻装出发。','今天容易开始，也容易把好心情带给别人。'],visibility:['万里清晰','看得到下一步'],temp:['26°C','体感轻盈'],probs:['顺利开工','主动出门','带动别人'],advice:['把好状态留一点给自己，不必全部兑换成效率。','去做那件你已经有点期待的事。'],caption:'今天的风在往上走，你也是。',friend:'你今天很适合出门，甚至可能真的把计划做完。',nature:'这只人类精神饱满，正主动离开熟悉的栖息地。'},
  monsoon:{title:'好奇心季风',icon:'➶',mood:'bright',sub:['来自未知方向的新鲜空气持续进入。','今天对计划外的东西有较高兴趣。'],visibility:['远方清晰','岔路可见'],temp:['24°C','微风舒适'],probs:['绕路看看','尝试新品','偶遇惊喜'],advice:['允许今天出现一点没有用途的新鲜事。','走一条不同的路，哪怕只多花五分钟。'],caption:'你不一定要找到答案，只是想去看看。',friend:'你今天看什么都像隐藏任务，去吧，别把自己走丢。',nature:'这只人类被陌生气味吸引，开始偏离常用路线。'},
  golden:{title:'金色傍晚',icon:'◉',mood:'bright',sub:['温度、光线与人际距离均处于舒适区间。','今日气候温暖稳定，适合共享一点时间。'],visibility:['柔和清晰','看得见彼此'],temp:['25°C','暖而不热'],probs:['舒服聊天','记住小事','慢慢散步'],advice:['去见一个不需要费力相处的人。','别急着结束一个正在变好的时刻。'],caption:'有些好天气不耀眼，只是让人愿意多待一会儿。',friend:'今天适合见喜欢的人，或者喜欢一下今天的自己。',nature:'两只人类在温暖光线中靠近，没有讨论任何重大议题。'},
  lazy:{title:'慵懒晴天',icon:'☀',mood:'calm',sub:['心情晴朗，行动风速接近零。','阳光充足，但身体没有出发计划。'],visibility:['清晰但躺着','窗外良好'],temp:['被窝舒适','23°C'],probs:['认真发呆','缓慢移动','享受无用'],advice:['心情不错不等于必须高效，晒一会儿就好。','允许自己普通地享受今天。'],caption:'心情很好，身体不想动；这两件事并不冲突。',friend:'你今天挺开心，唯一的问题是沙发不愿放人。',nature:'这只人类心情不错，但暂时没有离开柔软区域的打算。'},
  still:{title:'无风午后',icon:'—',mood:'calm',sub:['气压稳定，暂未观测到重大情绪事件。','今日没有戏剧性天气，适合普通生活。'],visibility:['平稳清晰','附近良好'],temp:['22°C','没有意见'],probs:['按部就班','随便吃点','提前收工'],advice:['没有特别的感觉，也是一种舒服的天气。','今天不必发生什么，照常经过就很好。'],caption:'气象台未发现异常，这很难得。',friend:'没大喜也没大悲，今天居然只是今天。',nature:'这只人类维持稳定活动，暂未出现迁徙或筑巢冲动。'},
  indoor:{title:'室内阳光',icon:'▧',mood:'calm',sub:['外出意愿较低，内部光照仍然充足。','小范围生活区域内天气舒适。'],visibility:['房间内良好','一臂范围清晰'],temp:['室温正好','暖光 24°C'],probs:['整理角落','独享时间','拒绝出门'],advice:['不出门也可以拥有完整的一天。','照顾好自己的小范围天气。'],caption:'你不太想去外面，但很喜欢此刻的小世界。',friend:'你不是宅，你只是把今日晴区划在了室内。',nature:'这只人类选择留在巢穴，并对巢穴表示满意。'},
  sunshower:{title:'太阳雨',icon:'☔',mood:'complex',sub:['阳光与水汽同时存在，请勿强行选择一种心情。','总体并不阴沉，只是偶有鼻酸降水。'],visibility:['雨中见光','明暗共存'],temp:['温暖带雨','21°C'],probs:['笑着感慨','突然鼻酸','想起旧事'],advice:['开心和难过可以在同一天出现。','不用因为还有雨，就否认正在出现的阳光。'],caption:'心情并不差，只是有些事情仍然会让你柔软。',friend:'你一边挺好的，一边想叹气——人类系统允许这样运行。',nature:'这只人类同时接收阳光和雨水，仍在平稳前进。'},
  rainbow:{title:'彩虹阵雨',icon:'⌒',mood:'complex',sub:['短时情绪降水伴随高亮度反射。','感动、好笑与轻微混乱同时经过。'],visibility:['色彩丰富','雨后清晰'],temp:['忽暖忽凉','彩色体感'],probs:['边笑边叹','分享欲望','突然感动'],advice:['复杂不等于糟糕，有些颜色只在雨里出现。','把今天最想记住的片段留一下。'],caption:'你正在经历一种不能只用“好”或“不好”概括的天气。',friend:'你今天情绪很多，但好在它们看起来关系还不错。',nature:'多种情绪在此人类体内和平共处，并形成罕见光学现象。'},
  recovery:{title:'缓慢升温',icon:'↗',mood:'calm',sub:['低温正在退去，恢复过程持续进行。','今天不会突然放晴，但会一点一点舒服起来。'],visibility:['逐渐改善','前方有光'],temp:['正在回暖','18→21°C'],probs:['恢复一点','对己宽容','重新尝试'],advice:['不用证明自己已经完全好了。','把恢复当作今天唯一需要做好的事。'],caption:'好转不一定有声音，但气象台看见了。',friend:'还没满血，不过你已经从地上捡回一点自己了。',nature:'这只人类结束冬眠的速度很慢，但方向明确。'},
  fog:{title:'社交大雾',icon:'☁',mood:'low',sub:['精神能见度不足 300 米。','内心局部地区出现拒收新消息现象。'],visibility:['不足 300 米','仅可看清自己'],temp:['-3°C','回复体感偏冷'],probs:['不想解释','已读缓冲','安静消失'],advice:['可将“晚点回”视作一种节能技术。','今天不需要解释得太完整。'],caption:'你不是讨厌大家，只是暂时不想成为“大家”的一部分。',friend:'今天先别勉强营业，你的社交信号确实不太好。',nature:'这只人类暂时远离族群，以减少不必要的能量消耗。'},
  humid:{title:'回南天',icon:'≋',mood:'low',sub:['情绪湿度偏高，心事不容易晾干。','空气里有一点没说出口的东西。'],visibility:['有些潮湿','云层较低'],temp:['体感偏闷','20°C'],probs:['旧事返潮','胡思乱想','想吃甜食'],advice:['不必急着把每一种感受都说清楚。','给今天留一点透气的缝。'],caption:'今日内心不必保持干燥。',friend:'你不是想太多，是今天脑内除湿机没开。',nature:'水汽在这只人类体内聚集，它需要一点通风。'},
  storm:{title:'局部雷暴',icon:'ϟ',mood:'low',sub:['耐心余额偏低，请远离无效沟通。','局部地区已有明显闪电活动。'],visibility:['请避开雷区','短时不稳定'],temp:['体感偏燥','32°C'],probs:['突然烦躁','撤回消息','拒绝配合'],advice:['先离开让你起火的地方五分钟。','今天的边界感，比好脾气重要。'],caption:'局部雷暴并不代表你是坏天气。',friend:'今天别来考验你的耐心，它没有报名参加。',nature:'该人类出现防御性放电，靠近前请先观察。'},
  delay:{title:'拖延阵雨',icon:'☂',mood:'low',sub:['云层已就位，行动尚未落地。','知道要做，和现在能做，是两种天气。'],visibility:['待办遮挡','可见但不想看'],temp:['适宜拖延','22°C'],probs:['再刷五分钟','突然收拾','临时努力'],advice:['只做最小的一步，剩下的交给以后。','把开始缩小到两分钟。'],caption:'不是懒，是行动云团尚未移动。',friend:'你和待办都看见彼此了，只是谁也没先动。',nature:'这只人类围绕任务缓慢盘旋，暂未准备降落。'},
  fakeSun:{title:'假晴天',icon:'◐',mood:'low',sub:['表面云层散开，电量仍在低位运行。','看起来一切正常，后台其实开了很多程序。'],visibility:['表面良好','云层很薄'],temp:['体感偏累','17°C'],probs:['礼貌微笑','突然断电','假装没事'],advice:['别因为看起来还行，就给自己加任务。','允许自己在没坏掉之前休息。'],caption:'你看起来没事，这本身已经很费电。',friend:'外表晴天，内置电池只剩一格，别再开省电模式硬撑了。',nature:'这只人类保持正常外观，但活动速度正在下降。'},
  mixed:{title:'双重天气系统',icon:'◒',mood:'complex',sub:['两股气团同时存在，请勿对单一情绪下结论。','一部分想热闹，一部分已经准备回家。'],visibility:['时好时坏','请随时观测'],temp:['忽冷忽热','体感不定'],probs:['临时改意','突然来劲','中途撤退'],advice:['今天可以随时调整，不算反复无常。','给计划留一个能转弯的出口。'],caption:'今天的你不需要保持一致。',friend:'你不是善变，是内部正在召开一场没有主持人的会议。',nature:'两套气候在此人类体内交汇，暂未决出主导权。'}
};

const weatherExtras={
  aurora:{animal:'追光水豚',desc:'不赶路，只负责把极光背回家。',dos:['走一条新路','记录灵感','分享快乐'],donts:['追问原因','塞满日程','怀疑好运']},
  whirlwind:{animal:'工具箱章鱼',desc:'八只手都很忙，其中两只忘了在忙什么。',dos:['记下点子','先做一个','允许凌乱'],donts:['同时开坑','忘记吃饭','强行收尾']},
  updraft:{animal:'起飞小狗',desc:'尾巴已经先于计划进入上升气流。',dos:['轻装出发','主动邀请','完成小事'],donts:['透支状态','答应全部','跳过休息']},
  monsoon:{animal:'探路耳廓狐',desc:'每一个转角，都可能藏着一条支线。',dos:['绕路看看','尝试新品','随手拍照'],donts:['只走原路','急着结论','忽略直觉']},
  golden:{animal:'散步橘猫',desc:'知道太阳会落下，所以慢慢享受现在。',dos:['见喜欢的人','慢慢吃饭','延长傍晚'],donts:['匆忙结束','讨论绩效','错过晚霞']},
  lazy:{animal:'晒饼海豹',desc:'心情在线，四肢暂时没有登录。',dos:['认真发呆','晒点太阳','吃点脆的'],donts:['证明勤奋','强行出门','责怪沙发']},
  still:{animal:'保温杯水豚',desc:'没有重大动向，体温与情绪都很稳定。',dos:['普通生活','按时吃饭','提前收工'],donts:['制造剧情','过度复盘','嫌弃平淡']},
  indoor:{animal:'筑巢仓鼠',desc:'把世界缩小一点，刚好够今天居住。',dos:['整理角落','打开暖灯','享受独处'],donts:['勉强社交','突然远行','解释宅家']},
  sunshower:{animal:'撑伞小鹿',desc:'一边淋雨，一边没有错过阳光。',dos:['允许复杂','听旧歌','温柔表达'],donts:['否认难过','强装快乐','急着想通']},
  rainbow:{animal:'彩色变色龙',desc:'今天不决定自己到底是哪一种颜色。',dos:['记录片段','分享感受','穿点颜色'],donts:['强行统一','压住情绪','追求简洁']},
  recovery:{animal:'回温小熊',desc:'结束冬眠的速度很慢，但方向明确。',dos:['喝点热水','做小事情','早点休息'],donts:['证明痊愈','比较进度','突然冲刺']},
  fog:{animal:'毛毯水豚',desc:'降低能见度，是为了减少无效耗电。',dos:['戴上耳机','晚点回复','保持距离'],donts:['连续群聊','临时聚会','完整解释']},
  humid:{animal:'除湿海豹',desc:'抱着除湿机，等待心事慢慢晾干。',dos:['开窗透气','写下感受','吃点甜的'],donts:['翻看旧账','逼问自己','深夜决定']},
  storm:{animal:'带电刺猬',desc:'不是针对谁，只是今天碰哪里都容易放电。',dos:['暂时离开','明确边界','独自散步'],donts:['无效争论','测试耐心','忍到爆炸']},
  delay:{animal:'盘旋信天翁',desc:'已经看见任务，只是还没准备降落。',dos:['先做两分钟','关一个页面','降低标准'],donts:['列新清单','等待完美','同时开工']},
  fakeSun:{animal:'省电树懒',desc:'保持正常外观，后台已进入低功耗运行。',dos:['减少安排','早点回家','承认疲惫'],donts:['礼貌硬撑','新增任务','假装满电']},
  mixed:{animal:'双面小浣熊',desc:'一半想出门，一半已经穿好睡衣。',dos:['保留弹性','准备备选','随时改意'],donts:['要求一致','排满全天','责怪反复']}
};

const gifts={
  sun:{label:'一小块阳光',message:'预计可临时提高一点内心亮度。'},umbrella:{label:'一把不问原因的伞',message:'下雨时无需解释，打开就好。'},reply:{label:'30 分钟免回复许可',message:'这段时间里，沉默也算一种合法回应。'},wind:{label:'一阵下班方向的风',message:'预计会把一点自由感吹到你附近。'},water:{label:'一杯精神热水',message:'没有疗效，只负责让今天暖一点。'},cancel:{label:'一个取消计划的理由',message:'气象条件不适宜勉强，批准改期。'}
};

const reverseForecasts={
  warming:{title:'缓慢升温',actions:['洗个热水澡，把房间里最冷的一盏灯关掉。','给自己准备一杯温热的东西，喝完前不处理新任务。','完成一件两分钟能做完的小事，让身体先收到“正在好转”的信号。']},
  still:{title:'无风午后',actions:['关闭一个通知来源，给今晚留出半小时没有新消息的区域。','把一件明天再做也没关系的事，从今晚移走。','找一个有靠背的位置坐十分钟，不输入任何新内容。']},
  curious:{title:'好奇心季风',actions:['回家时换一条没走过的小路，哪怕只绕五分钟。','点一道没吃过的小东西，让今晚发生一件计划外的小事。','打开一个收藏很久却没点开的内容，只看十分钟。']},
  indoor:{title:'室内阳光',actions:['整理一个手掌大小的角落，再把灯调暖一点。','换上最舒服的衣服，把今晚的晴区划在室内。','播放一段熟悉的声音，为自己的小范围天气升温。']},
  lazy:{title:'慵懒晴天',actions:['允许自己认真浪费二十分钟，不同时做任何“有用”的事。','找一点阳光或柔软的地方待着，不把好心情兑换成效率。','吃点喜欢的东西，并暂时不计算它有什么意义。']},
  near:{title:'靠近一点',actions:['只联系一个相处最不费力的人，发一个表情也算。','告诉一个人“今天有点想说话”，不必准备完整内容。','和舒服的人共享一首歌、一张照片，或一句没有结论的话。']}
};

let activeQuestions=[], current=0, chosen=[], currentClimate='mixed', currentTone='station', selectedMode='standard', questionTotal=5, invitedClimate=null, selectedGift='sun', receivedGift=null;
const $=id=>document.getElementById(id);
const random=list=>list[Math.floor(Math.random()*list.length)];
const shuffle=list=>[...list].sort(()=>Math.random()-.5);
function startRound(){questionTotal=selectedMode==='quick'?1:5;activeQuestions=shuffle(questionBank).slice(0,questionTotal);current=0;chosen=[];currentTone='station';document.querySelectorAll('.tone-button').forEach(b=>b.classList.toggle('active',b.dataset.tone==='station'));$('feedback-thanks').classList.add('hidden');$('accuracy-check').querySelector('div').classList.remove('hidden');$('reveal-cloud').classList.remove('open');$('weather-stage').classList.add('covered');}
function score(){const s={energy:0,brightness:0,social:0,action:0,humidity:0,stability:0,curiosity:0,kindness:0,chaos:0,friction:0};chosen.forEach((a,i)=>Object.entries(activeQuestions[i].answers[a][1]).forEach(([k,v])=>s[k]+=v));if(questionTotal===1)Object.keys(s).forEach(k=>s[k]*=5);return s;}
function selectClimate(s){
  if(s.brightness>=8&&s.curiosity>=7)return'aurora';
  if(s.energy>=6&&s.chaos>=6)return'whirlwind';
  if(s.brightness>=5&&s.action>=4)return'updraft';
  if(s.curiosity>=6&&s.brightness>=2)return'monsoon';
  if(s.brightness>=4&&s.social>=2&&s.stability>=3)return'golden';
  if(s.brightness>=3&&s.energy<=1&&s.stability>=2)return'lazy';
  if(s.brightness>=2&&s.social<=-2&&s.stability>=2)return'indoor';
  if(s.stability>=5&&Math.abs(s.brightness)<=3)return'still';
  if(s.brightness>=1&&s.humidity>=4)return'sunshower';
  if(s.brightness>=2&&(s.chaos>=4||s.humidity>=4))return'rainbow';
  if(s.kindness>=5&&s.energy<=0)return'recovery';
  if(s.social<=-4&&s.energy<=0)return'fog';
  if(s.friction>=3&&s.chaos>=2)return'storm';
  if(s.humidity>=5&&s.brightness<=1)return'humid';
  if(s.action<=-4)return'delay';
  if(s.energy<=-5)return'fakeSun';
  if(s.brightness>=3)return s.stability>=3?'golden':'updraft';
  if(s.stability>=4)return'still';
  if(s.kindness>=4&&s.brightness>=0)return'recovery';
  return'mixed';
}
function renderQuestion(){const q=activeQuestions[current];$('question-index').textContent=`观测 ${String(current+1).padStart(2,'0')} / ${String(questionTotal).padStart(2,'0')}`;$('question-theme').textContent=q.theme;$('progress-bar').style.width=`${(current/questionTotal)*100}%`;$('question-text').textContent=q.text;$('answers').innerHTML='';q.answers.forEach(([text],i)=>{const button=document.createElement('button');const[lead,...rest]=text.split(' / ');button.className='answer';button.innerHTML=`<b>${lead}</b>${rest.join(' / ')}`;button.onclick=()=>choose(i);$('answers').appendChild(button)});$('back-button').style.visibility=current?'visible':'hidden';}
function choose(answer){chosen[current]=answer;if(current<questionTotal-1){current++;renderQuestion()}else showResult();}
function probability(i){return 38+Math.floor(Math.random()*48)-i*2;}
function fillResult(){const c=climates[currentClimate],extra=weatherExtras[currentClimate];$('weather-card').dataset.mood=c.mood;$('weather-title').textContent=c.title;$('weather-symbol').textContent=c.icon;$('rare-badge').classList.toggle('hidden',!c.rare);$('weather-subtitle').textContent=currentTone==='station'?random(c.sub):(currentTone==='friend'?c.friend:c.nature);$('visibility').textContent=random(c.visibility);$('reply-temp').textContent=random(c.temp);let advice=currentTone==='station'?random(c.advice):(currentTone==='friend'?'建议：先照顾状态，再考虑表现。':'观测建议：为该个体保留足够的活动空间。');if(selectedMode==='night'&&currentTone==='station')advice=`夜间提示：${advice}`;$('advice-text').textContent=advice;$('result-caption').textContent=c.caption;$('probabilities').innerHTML=c.probs.map((p,i)=>`<div class="probability"><span>${p}</span><b>${probability(i)}%</b></div>`).join('');$('companion-name').textContent=extra.animal;$('companion-desc').textContent=extra.desc;$('today-do').textContent=random(extra.dos);$('today-dont').textContent=random(extra.donts);}
function readHistory(){try{return JSON.parse(localStorage.getItem('moodcast-history')||'[]')}catch{return[]}}
function readAtlas(){try{const saved=JSON.parse(localStorage.getItem('moodcast-atlas')||'[]'),fromHistory=readHistory().map(item=>item.climate);return[...new Set([...saved,...fromHistory])].filter(key=>climates[key])}catch{return[]}}
function unlockClimate(){try{const atlas=[...new Set([...readAtlas(),currentClimate])];localStorage.setItem('moodcast-atlas',JSON.stringify(atlas));renderAtlas()}catch{}}
function renderAtlas(){const atlas=readAtlas(),all=Object.entries(climates);$('atlas-progress').textContent=`已发现 ${atlas.length} / ${all.length}`;$('atlas-intro').textContent=atlas.length===all.length?'全部气候已经观测完成。气象台向你授予「完整天气持有者」称号。':`已发现 ${atlas.length} 种气候。每一种天气，都算你来过这里的证据。`;$('atlas-grid').innerHTML=all.map(([key,c])=>{const unlocked=atlas.includes(key);return`<div class="atlas-item ${unlocked?'':'locked'} ${c.rare?'rare':''}"><strong>${unlocked?c.icon:'?'}</strong><b>${unlocked?c.title:'未知气象'}</b><small>${c.rare?'稀有天气':unlocked?'已观测':'等待发现'}</small></div>`}).join('');}
function saveHistory(){try{const today=new Date().toISOString().slice(0,10);const history=readHistory().filter(item=>item.date!==today);history.unshift({date:today,climate:currentClimate});localStorage.setItem('moodcast-history',JSON.stringify(history.slice(0,7)));unlockClimate();renderHistory()}catch{}}
function renderHistory(){const history=readHistory().filter(item=>climates[item.climate]);$('history-panel').classList.toggle('hidden',!history.length);$('history-list').innerHTML=history.map(item=>`<div class="history-chip"><b>${climates[item.climate].icon} ${climates[item.climate].title}</b><small>${item.date.slice(5).replace('-',' / ')}</small></div>`).join('');}
function compatibility(){if(!invitedClimate||!climates[invitedClimate]){$('compatibility-card').classList.add('hidden');return}const theirs=climates[invitedClimate],mine=climates[currentClimate];const pair=[theirs.mood,mine.mood].sort().join('+');const lines={'bright+bright':'适合临时出发，但最好留一个人记得回家的路。','bright+calm':'一个负责提出计划，一个负责让计划不要太累。','bright+complex':'适合分享新鲜事，不适合一次安排完整的一天。','bright+low':'适合轻轻带动，不适合催对方立刻放晴。','calm+calm':'适合安静共处，今天没有必要制造节目效果。','calm+complex':'一个提供稳定气压，一个带来意外云层。','calm+low':'适合陪伴和散步，不必追问天气什么时候变好。','complex+complex':'气象变化丰富，约见时最好准备两个备选计划。','complex+low':'适合保持一点距离，也保留一句“我在”。','low+low':'适合互相免除解释义务，一起低功耗运行。'};$('compatibility-title').textContent=`${theirs.title} × ${mine.title}`;$('compatibility-text').textContent=lines[pair]||'两套天气暂时交汇，适合边走边观察。';$('compatibility-card').classList.remove('hidden');}
function localDateKey(){const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()),values=Object.fromEntries(parts.map(part=>[part.type,part.value]));return`${values.year}-${values.month}-${values.day}`;}
function clientId(){try{let id=localStorage.getItem('moodcast-client-id');if(!id){id=globalThis.crypto?.randomUUID?.()||`moodcast-${Date.now()}-${Math.random().toString(36).slice(2)}`;localStorage.setItem('moodcast-client-id',id)}return id}catch{return`moodcast-${Date.now()}-${Math.random().toString(36).slice(2)}`}}
async function submitObservation(){const date=localDateKey(),marker=`moodcast-observed-${date}`;try{if(localStorage.getItem(marker))return;const response=await fetch('/api/observation',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:clientId(),climate:currentClimate,mode:selectedMode})});if(response.ok){localStorage.setItem(marker,'1');setTimeout(loadPublicWeather,800)}}catch{}}
async function submitFeedback(feedback){try{await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId:clientId(),climate:currentClimate,mode:selectedMode,feedback})})}catch{}}
async function loadPublicWeather(){try{const response=await fetch('/api/weather-today',{headers:{Accept:'application/json'}});if(!response.ok)throw new Error('unavailable');const data=await response.json();$('public-weather-total').textContent=data.total?`今天已有 ${data.total} 人完成观测`:'今天还没有观测，你可能是第一个';if(data.top?.length){$('public-weather-bars').innerHTML=data.top.map(item=>`<div class="public-weather-row"><span>${climates[item.climate]?.icon||'◌'} ${climates[item.climate]?.title||item.climate}</span><i style="--weather-width:${Math.max(item.percentage,4)}%"></i><b>${item.percentage}%</b></div>`).join('');$('public-weather-bars').classList.remove('hidden')}else{$('public-weather-bars').classList.add('hidden')}$('public-weather-note').textContent='只统计匿名天气类型，不记录你的具体答案。'}catch{$('public-weather-total').textContent='公共气象台暂未连接';$('public-weather-note').textContent=location.protocol==='file:'?'部署到 Netlify 后，这里会显示真实的匿名天气统计。':'你的测试仍可正常进行，公共统计稍后再试。';}}
function showResult(){currentClimate=selectClimate(score());$('quiz').classList.add('hidden');$('result').classList.remove('hidden');$('card-date').textContent=new Intl.DateTimeFormat('zh-CN',{month:'2-digit',day:'2-digit'}).format(new Date()).replace('/',' / ');fillResult();compatibility();saveHistory();submitObservation();window.scrollTo({top:0,behavior:'smooth'});}
function restart(){startRound();$('result').classList.add('hidden');$('landing').classList.remove('hidden');renderHistory();window.scrollTo({top:0,behavior:'smooth'});}
$('landing-date').textContent=`MOODCAST · ${new Intl.DateTimeFormat('zh-CN',{month:'2-digit',day:'2-digit'}).format(new Date()).replace('/',' / ')}`;
const rawInviteParam=new URLSearchParams(location.search).get('from');
const inviteParam=rawInviteParam&&(climates[rawInviteParam]?rawInviteParam:Object.keys(climates).find(key=>rawInviteParam.startsWith(key)));
const rawGiftParam=new URLSearchParams(location.search).get('gift');
if(rawGiftParam&&gifts[rawGiftParam])receivedGift=rawGiftParam;
if(inviteParam){invitedClimate=inviteParam;const giftLine=receivedGift?`，还捎来${gifts[receivedGift].label}。${gifts[receivedGift].message}`:'。';$('invite-notice').textContent=`一位朋友从「${climates[inviteParam].title}」向你发来联合观测邀请${giftLine}`;$('invite-notice').classList.remove('hidden');}
document.querySelectorAll('.mode-button').forEach(button=>button.onclick=()=>{selectedMode=button.dataset.mode;document.querySelectorAll('.mode-button').forEach(b=>b.classList.toggle('active',b===button));$('start-button').innerHTML=selectedMode==='quick'?'一题出结果 <span>→</span>':selectedMode==='night'?'开始夜间观测 <span>→</span>':'开始观测 <span>→</span>';});
$('start-button').onclick=()=>{startRound();$('landing').classList.add('hidden');$('quiz').classList.remove('hidden');renderQuestion();};
$('back-button').onclick=()=>{if(current){current--;chosen.pop();renderQuestion();}};
$('restart-top').onclick=restart;$('refresh-top').onclick=fillResult;$('refresh-button').onclick=fillResult;
document.querySelectorAll('.tone-button').forEach(button=>button.onclick=()=>{currentTone=button.dataset.tone;document.querySelectorAll('.tone-button').forEach(b=>b.classList.toggle('active',b===button));fillResult();});
document.querySelectorAll('[data-feedback]').forEach(button=>button.onclick=()=>{$('accuracy-check').querySelector('div').classList.add('hidden');$('feedback-thanks').classList.remove('hidden');submitFeedback(button.dataset.feedback);});
$('reveal-cloud').onclick=()=>{$('reveal-cloud').classList.add('open');$('weather-stage').classList.remove('covered');};
document.querySelectorAll('.gift-button').forEach(button=>button.onclick=()=>{selectedGift=button.dataset.gift;document.querySelectorAll('.gift-button').forEach(b=>b.classList.toggle('active',b===button));});
function showReverseForecast(target,action,save=true){const forecast=reverseForecasts[target];if(!forecast)return;const chosenAction=action||random(forecast.actions);$('reverse-title').textContent=`转为「${forecast.title}」`;$('reverse-action').textContent=chosenAction;$('reverse-result').classList.remove('hidden');document.querySelectorAll('[data-target]').forEach(button=>button.classList.toggle('active',button.dataset.target===target));if(save){try{localStorage.setItem('moodcast-reverse',JSON.stringify({date:new Date().toISOString().slice(0,10),target,action:chosenAction}))}catch{}}}
document.querySelectorAll('[data-target]').forEach(button=>button.onclick=()=>showReverseForecast(button.dataset.target));
function restoreReverseForecast(){try{const saved=JSON.parse(localStorage.getItem('moodcast-reverse')||'null'),today=new Date().toISOString().slice(0,10);if(saved&&saved.date===today&&reverseForecasts[saved.target])showReverseForecast(saved.target,saved.action,false)}catch{}}
$('atlas-entry').onclick=()=>{$('atlas-modal').classList.remove('hidden');renderAtlas();};
$('atlas-close').onclick=()=>$('atlas-modal').classList.add('hidden');
$('atlas-modal').onclick=event=>{if(event.target===$('atlas-modal'))$('atlas-modal').classList.add('hidden');};
document.addEventListener('keydown',event=>{if(event.key==='Escape')$('atlas-modal').classList.add('hidden');});
$('share-button').onclick=async()=>{const url=new URL(location.href);url.search='';url.searchParams.set('from',currentClimate);url.searchParams.set('gift',selectedGift);url.hash='moodcast-invite';const text=`我的内心今天是「${climates[currentClimate].title}」，还给你捎了${gifts[selectedGift].label}。你那里是什么天气？\n——来自卡卡卡卡皮巴拉的精神气象台`;const copied=`${text}\n\n邀请链接：\n${url.toString()}`;const showCopied=()=>{$('share-status').textContent='气象物资和邀请链接已复制';$('share-status').classList.remove('hidden');setTimeout(()=>$('share-status').classList.add('hidden'),2200);};try{if(navigator.share){await navigator.share({title:'Moodcast · 卡卡卡卡皮巴拉',text,url:url.toString()});}else{await navigator.clipboard.writeText(copied);showCopied();}}catch{try{await navigator.clipboard.writeText(copied);showCopied();}catch{$('share-status').textContent='暂时无法调用分享，请在上线后的 HTTPS 页面重试';$('share-status').classList.remove('hidden');}}}
$('download-button').onclick=async()=>{const b=$('download-button');b.textContent='正在保存…';try{if(!window.html2canvas)throw new Error('library unavailable');const canvas=await html2canvas($('weather-card'),{scale:2,backgroundColor:null,useCORS:true});const link=document.createElement('a');link.download=`Moodcast-${climates[currentClimate].title}.png`;link.href=canvas.toDataURL('image/png');link.click();b.innerHTML='已保存 <span>✓</span>';}catch(e){b.textContent='保存失败，请截图';}setTimeout(()=>b.innerHTML='保存天气卡 <span>↓</span>',1800);};
renderHistory();renderAtlas();restoreReverseForecast();loadPublicWeather();
