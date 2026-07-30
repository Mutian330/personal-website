// 简历数据 — 贾木天

export const profile = {
  name: '贾木天',
  nameEn: 'JIA MUTIAN',
  role: '天津大学土木水利硕士',
  age: 24,
  gender: '男',
  location: '天津',
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

export const basicInfo = [
  { label: '姓　　名', value: '贾木天' },
  { label: '性　　别', value: '男' },
  { label: '年　　龄', value: '24岁' },
  { label: '所在地区', value: '天津' },
  { label: '毕业院校', value: '天津大学（硕士）/ 华北理工大学（本科）' },
  { label: '专业方向', value: '土木水利' },
  { label: '联系电话', value: '189-3164-8920' },
  { label: '电子邮箱', value: 'mutianjia_tju@163.com' }
]

export const researchDirections = [
  '寒冷地区 PHC 管桩基础裂缝产生机理及防治措施研究',
  '计算机视觉在工程安全监测中的应用',
  '预应力装配式混凝土结构力学性能与安全评估',
  '结构数值仿真与工程分析'
]

export const publications = [
  'SCI 论文 — 寒冷地区 PHC 管桩裂缝机理相关研究（第 1 作者）',
  'SCI 论文 — 负温与荷载耦合作用下管桩开裂机理研究（第 1 作者）',
  'SCI 论文 — 基于目标检测的爆炸品运输车测距与风险监测（合作作者）',
  '普刊论文 — PHC 管桩抗裂加固方案研究'
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
    outcome: '发表 SCI 论文 2 篇，普刊 1 篇'
  },
  {
    id: '02',
    title: '爆炸品运输车风险监控评价系统开发',
    role: '主要参与人',
    period: '2023.10 — 2025.07',
    type: '纵向项目',
    description: '聚焦爆炸品运输安全领域，基于计算机视觉技术，利用目标检测算法通过消费级摄像头实现对周围车辆的精准测距，对运输车行驶过程中的各类风险进行实时监测。结合博弈论与元胞自动机模型，模拟车辆驾驶行为与交通场景，分析异常交通流并验证系统预警效果。',
    highlights: ['计算机视觉', '目标检测算法', '博弈论建模', '元胞自动机'],
    outcome: '发表 SCI 论文 1 篇'
  },
  {
    id: '03',
    title: '超高型风机预应力装配式混凝土塔筒力学性能及安全评估研究',
    role: '主要参与人',
    period: '2024.01 — 2024.12',
    type: '横向项目',
    description: '研究超高型预应力装配式混凝土塔筒的整体力学性能及安全评估，解决工程中常见的裂缝缺陷、薄弱节点破坏和预应力损失等核心问题。通过数值建模与力学分析，为风机塔筒的结构优化与安全运行提供理论技术支撑。',
    highlights: ['力学性能分析', '安全评估', '预应力结构', '缺陷诊断'],
    outcome: '为工程实践提供技术支撑'
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

export const stats = [
  { value: '3+', label: '重大项目经验', sub: '含横向与纵向课题' },
  { value: '3', label: 'SCI 论文', sub: '另发表普刊 1 篇' },
  { value: '10+', label: '荣誉奖项', sub: '国家级与省级' },
  { value: '2', label: '知名高校', sub: '天津大学 / 华北理工大学' }
]

export const navLinks = [
  { label: '个人简介', href: '#profile' },
  { label: '科研方向', href: '#research' },
  { label: '教育经历', href: '#education' },
  { label: '科研项目', href: '#projects' },
  { label: '论文专著', href: '#publications' },
  { label: '奖励荣誉', href: '#honors' },
  { label: '联系方式', href: '#contact' }
]
