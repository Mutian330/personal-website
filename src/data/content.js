// 简历数据 — 贾木天

export const profile = {
  name: '贾木天',
  nameEn: 'JIA MUTIAN',
  role: '技术服务支持工程师',
  age: 24,
  gender: '男',
  location: '中国大陆 · 天津',
  phone: '189-3164-8920',
  email: 'mutianjia_tju@163.com',
  tagline: '以工程技术与数据分析驱动问题解决，为复杂工程场景提供精准的技术支持与创新方案。',
  intro: '天津大学土木水利硕士，具备扎实的工程技术基础与跨学科研究能力。在结构仿真、计算机视觉应用、风险监测系统开发等领域拥有丰富的项目经验，善于将理论研究转化为可落地的技术方案。',
  education: [
    {
      period: '2023.09 — 2026.06',
      school: '天津大学',
      major: '土木水利 · 硕士 保研',
      courses: '工程数学、工程弹塑性力学、工程结构数值建模与分析方法、高等钢筋混凝土结构、高层建筑结构设计理论'
    },
    {
      period: '2019.09 — 2023.06',
      school: '华北理工大学',
      major: '土木工程 · 本科',
      courses: '理论力学、材料力学、结构力学、流体力学、混凝土结构、钢结构基本原理、建筑电气、土木工程施工'
    }
  ]
}

export const stats = [
  { value: '3+', label: '重大项目经验', sub: '含横向与纵向课题' },
  { value: '3', label: 'SCI 论文', sub: '另发表普刊 1 篇' },
  { value: '10+', label: '荣誉奖项', sub: '国家级与省级' },
  { value: '2', label: '知名高校', sub: '天津大学 / 华北理工大学' }
]

export const projects = [
  {
    id: '01',
    title: '寒冷地区光伏 PHC 管桩基础裂缝产生机理及防治措施研究',
    role: '项目负责人',
    period: '2024.06 — 2025.12',
    type: '横向项目',
    description: '探究寒冷地区预应力高强混凝土（PHC）管桩裂缝的开裂机理，分析寒区服役环境对管桩开裂的影响，并提出针对性防护方案和治理措施。赴枣庄现场勘察调研，使用 Abaqus 仿真管桩开裂过程，研究负温与荷载耦合作用下的开裂机理；同步开展室内低温加载试验，探究积水相变冻胀力作用下的开裂规律。',
    highlights: ['Abaqus 数值仿真', '低温加载试验', '现场勘察调研', '抗裂加固方案'],
    outcome: '发表 SCI 论文 2 篇，普刊 1 篇',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 50%, #0D9488 100%)',
    icon: 'structural'
  },
  {
    id: '02',
    title: '爆炸品运输车风险监控评价系统开发',
    role: '主要参与人',
    period: '2023.10 — 2025.07',
    type: '纵向项目',
    description: '聚焦爆炸品运输安全领域，基于计算机视觉技术，利用目标检测算法通过消费级摄像头实现对周围车辆的精准测距，对运输车行驶过程中的各类风险进行实时监测。结合博弈论与元胞自动机模型，模拟车辆驾驶行为与交通场景，分析异常交通流并验证系统预警效果。',
    highlights: ['计算机视觉', '目标检测算法', '博弈论建模', '元胞自动机'],
    outcome: '发表 SCI 论文 1 篇',
    gradient: 'linear-gradient(135deg, #312E81 0%, #4F46E5 50%, #2563EB 100%)',
    icon: 'vision'
  },
  {
    id: '03',
    title: '超高型风机预应力装配式混凝土塔筒力学性能及安全评估研究',
    role: '主要参与人',
    period: '2024.01 — 2024.12',
    type: '横向项目',
    description: '研究超高型预应力装配式混凝土塔筒的整体力学性能及安全评估，解决工程中常见的裂缝缺陷、薄弱节点破坏和预应力损失等核心问题。通过数值建模与力学分析，为风机塔筒的结构优化与安全运行提供理论技术支撑。',
    highlights: ['力学性能分析', '安全评估', '预应力结构', '缺陷诊断'],
    outcome: '为工程实践提供技术支撑',
    gradient: 'linear-gradient(135deg, #134E4A 0%, #0D9488 50%, #2563EB 100%)',
    icon: 'tower'
  }
]

export const advantages = [
  {
    num: '01',
    title: '工程仿真与分析',
    desc: '熟练运用 Abaqus 进行结构数值仿真，掌握工程弹塑性力学与数值建模方法，能精准模拟复杂工况下的结构响应。',
    tags: ['Abaqus', '数值仿真', '力学建模']
  },
  {
    num: '02',
    title: '计算机视觉应用',
    desc: '具备目标检测算法开发经验，能利用消费级摄像头实现精准测距与风险监测，将 AI 技术落地于工程安全场景。',
    tags: ['目标检测', '计算机视觉', '测距算法']
  },
  {
    num: '03',
    title: '技术研究与创新',
    desc: '累计发表 SCI 论文 3 篇，具备扎实的学术研究能力，善于从机理层面深入分析问题并提出创新性解决方案。',
    tags: ['SCI 论文', '机理研究', '学术写作']
  },
  {
    num: '04',
    title: '项目管理与协作',
    desc: '担任横向项目负责人，统筹课题推进、团队协作与成果产出；多次在竞赛中担任队长并带领团队取得优异成绩。',
    tags: ['项目负责人', '团队领导', '竞赛队长']
  },
  {
    num: '05',
    title: '数据分析与建模',
    desc: '熟练使用 MATLAB 进行数据分析与算法开发，掌握工程数学方法，能将复杂数据转化为可决策的技术洞察。',
    tags: ['MATLAB', '数据分析', '数学建模']
  },
  {
    num: '06',
    title: '工程实践与勘察',
    desc: '拥有丰富的现场勘察与试验设计经验，赴多地开展实地调研，能将理论分析与工程实践有效结合。',
    tags: ['现场勘察', '试验设计', '工程实践']
  }
]

export const skills = [
  { name: 'Abaqus', category: '工程仿真' },
  { name: 'AutoCAD', category: '工程制图' },
  { name: 'MATLAB', category: '数据分析' },
  { name: '计算机视觉', category: 'AI 技术' },
  { name: '目标检测', category: 'AI 技术' },
  { name: '数值建模', category: '工程仿真' },
  { name: 'MS Office', category: '办公软件' },
  { name: 'CET-6 (552)', category: '英语能力' }
]

export const honors = [
  '天津大学研究生一等学业奖学金',
  '华北理工大学本科生国家奖学金',
  '国家励志奖学金',
  '一等优秀大学生奖学金',
  '2023 届河北省普通高等学校优秀毕业生',
  '全国大学生结构设计竞赛国赛三等奖',
  '全国大学生数学竞赛三等奖',
  '全国周培源大学生力学竞赛河北赛区三等奖',
  '河北省大学生力学竞赛二等奖'
]

export const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '博客', href: '#blog' },
  { label: '优势', href: '#advantages' },
  { label: '联系', href: '#contact' }
]

export const blogPosts = [
  {
    id: '01',
    title: '寒冷地区 PHC 管桩裂缝机理：从现场勘察到数值仿真',
    category: '工程研究',
    date: '2025.03',
    excerpt: '探究负温与荷载耦合作用下预应力高强混凝土管桩的开裂规律，结合 Abaqus 仿真与低温加载试验，揭示积水相变冻胀力对管桩开裂的影响机制。',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 50%, #0D9488 100%)',
    readTime: '8 min'
  },
  {
    id: '02',
    title: '计算机视觉在危险品运输安全中的应用实践',
    category: 'AI · 工程',
    date: '2024.11',
    excerpt: '基于目标检测算法，利用消费级摄像头实现车辆精准测距，结合博弈论与元胞自动机模型模拟交通场景，验证风险预警系统的有效性。',
    gradient: 'linear-gradient(135deg, #312E81 0%, #4F46E5 50%, #2563EB 100%)',
    readTime: '6 min'
  },
  {
    id: '03',
    title: '风机塔筒预应力装配式结构的安全评估方法',
    category: '结构工程',
    date: '2024.08',
    excerpt: '针对超高型预应力装配式混凝土塔筒的裂缝缺陷、薄弱节点破坏和预应力损失问题，通过数值建模与力学分析提出结构优化方案。',
    gradient: 'linear-gradient(135deg, #134E4A 0%, #0D9488 50%, #2563EB 100%)',
    readTime: '7 min'
  },
  {
    id: '04',
    title: '从土木工程到 AI：跨学科研究中的技术迁移',
    category: '研究随笔',
    date: '2024.05',
    excerpt: '分享从传统结构工程转向计算机视觉与智能监测领域的研究经历，探讨工程思维与 AI 技术的融合路径，以及如何将理论成果转化为工程实践。',
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #4F46E5 50%, #7C3AED 100%)',
    readTime: '5 min'
  }
]
