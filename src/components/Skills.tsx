export function Skills() {
  const skills = [
    {
      title: 'AI 应用',
      items: ['深度使用AI工具', '50%工作交给AI', '提效增速']
    },
    {
      title: 'Web3 全链路',
      items: ['EVM 公链', '智能合约', '去中心化协议']
    },
    {
      title: '产品设计',
      items: ['交易所', 'DeFi', 'Meme', 'AI Agent', '预言机']
    },
    {
      title: '投资经验',
      items: ['7年加密投资', 'Meme赛道', '500+链上项目']
    },
    {
      title: '平台熟悉',
      items: ['Binance', 'OKX', 'CEX/DEX生态']
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl">
        <h2 className="text-4xl mb-12">核心能力</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="border-l-2 border-black pl-4">
              <h3 className="text-xl mb-3">{skill.title}</h3>
              <ul className="space-y-1 text-gray-700">
                {skill.items.map((item, idx) => (
                  <li key={idx}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}