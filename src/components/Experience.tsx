import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'LBank',
    position: '高级产品经理',
    period: '2025.9 - 至今',
    description: '法币交易部门，AI+交易创新',
    highlights: [
      'AI驱动的风控系统，欺诈识别准确率提升40%',
      '法币交易量月均增长25%'
    ],
    details: [
      '设计 AI 智能定价系统，实时分析市场深度和流动性，优化法币兑换汇率',
      '推出 AI 客服助手，结合 LLM 处理用户咨询，响应时间降低60%',
      '主导法币通道聚合系统，整合多支付渠道，提升用户入金成功率至95%+'
    ]
  },
  {
    company: 'Game.com',
    position: '高级产品经理',
    period: '2025.3 - 2025.9',
    description: '围绕Meme交易和发射一系列生态产品',
    highlights: [
      'Okay.fun发射台1周盈利超1000万+美元',
      '统筹6条产品线，高效推进从0到1落地'
    ],
    details: [
      '设计并落地 Meme 交易平台，包含分级基金、杠杆机制及 Meme ETF 模块',
      '主导 Okay.fun 发射平台，基于 XLayer 链的公平发射机制',
      '设计 OpposAI，结合 MCP 架构的 AI 辅助决策系统'
    ]
  },
  {
    company: '中科链源',
    position: '高级产品经理',
    period: '2023.11 - 2025.3',
    description: 'AI Agent + Web3 创新产品',
    highlights: [
      '项目入选币安MVB（8期）',
      'TG小程序累计用户数100万+'
    ],
    details: [
      'Alias：设计 AI 模型层、区块链层、应用层的平台级产品架构',
      '推动"塔罗牌"、"情报收集"、"对话式Meme平台"等 TG 小程序上线',
      'Odin：设计去中心化比特币预言机网络'
    ]
  },
  {
    company: '八分量',
    position: '产品经理',
    period: '2022.10 - 2023.11',
    description: 'Trias: 基于安全能力的项目发射平台',
    highlights: [
      '在职期间，代币增长6倍'
    ],
    details: [
      '构建基于安全测试的代币发射平台',
      '设计双代币经济模型，平衡应用代币与治理代币',
      '将 NFT 与代币叠加，实现用户激励和生态良性运转'
    ]
  },
  {
    company: '金色财经',
    position: '产品经理',
    period: '2020.8 - 2022.10',
    description: 'Web3 头部媒体（百万用户）',
    highlights: [
      '主导产品2.0大升级'
    ],
    details: [
      '设计个性化推荐系统，引入机器学习算法',
      '搭建用户体系，投稿过稿率提升20%，灌水评论下降35%',
      '重构内容分发系统，以标签为轴的分发体系'
    ]
  },
  {
    company: 'USDT.PRO',
    position: '产品经理',
    period: '2019.5 - 2020.6',
    description: 'TOB OTC 交易所',
    highlights: [
      '月流水超100M+'
    ],
    details: [
      '从0到1搭建区块链交易平台产品',
      '设计订单系统、撮合匹配系统、记账系统、钱包系统等',
      '统筹 APP、网页、H5 三端产品线'
    ]
  },
  {
    company: '猎豹移动 (CMCM)',
    position: '产品+运营',
    period: '2018.5 - 2019.5',
    description: '区块链创新部门',
    highlights: [
      '最早提出再质押业务和Walk2Earn方向'
    ],
    details: [
      'RatingToken：基于AI的区块链项目风险评估系统',
      'Walk-coin：全球最早的 Play2Earn 产品之一'
    ]
  },
  {
    company: '帝都学生圈',
    position: '运营合伙人',
    period: '2016.9 - 2018.5',
    description: '北京头部大学生自媒体',
    highlights: [
      '全网粉丝100万+',
      '月盈利10万+',
      '十万加文章1000+'
    ],
    details: [
      '用户拉新：单次活动获客最高30万+',
      '内容运营：文章平均阅读量5000+',
      '商业化：月稳定盈利10万+'
    ]
  }
];

function ExperienceItem({ exp }: { exp: typeof experiences[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-2 border-black pl-6 pb-12 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black rounded-full" />
      
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl">{exp.company}</h3>
            <p className="text-gray-600">{exp.position}</p>
          </div>
          <span className="text-gray-500 whitespace-nowrap">{exp.period}</span>
        </div>
        
        <p className="text-gray-700">{exp.description}</p>
        
        <div className="space-y-1">
          {exp.highlights.map((highlight, idx) => (
            <p key={idx} className="text-sm">→ {highlight}</p>
          ))}
        </div>

        {exp.details.length > 0 && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm hover:underline mt-2"
            >
              {isExpanded ? '收起详情' : '展开详情'}
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {isExpanded && (
              <ul className="space-y-1 text-sm text-gray-700 mt-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>• {detail}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl">
        <h2 className="text-4xl mb-12">工作经历</h2>
        
        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}