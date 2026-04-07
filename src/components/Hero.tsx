import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import avatarImage from 'figma:asset/44ecb3e2a6c2008f288d50a079b56e444aa38162.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <div className="space-y-8">
          {/* Avatar and Main Title */}
          <div className="flex items-start gap-8">
            <img 
              src={avatarImage} 
              alt="钟益桥" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-sm flex-shrink-0"
            />
            <div>
              <h1 className="text-6xl md:text-7xl mb-2">钟益桥</h1>
              <p className="text-xl text-gray-600 mb-6">superiorman.eth</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:18970782886" className="hover:underline">18970782886</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:zhongyiqiao1@gmail.com" className="hover:underline">zhongyiqiao1@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>北京</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>产品经理 · 9+年经验</span>
            </div>
          </div>

          {/* Bio */}
          <div className="border-l-2 border-black pl-4 space-y-4 max-w-2xl">
            <p className="text-lg">
              善于将 AI 技术与业务深度融合，持续探索 AI +WEB3产品创新。
            </p>
            <p className="text-lg">
              深耕 Web3，熟悉全链路基础知识，掌握 EVM 等主流公链及协议的技术原理。
            </p>
            <p className="text-lg">
              熟悉交易所、Meme、DeFi、AI Agent 等产品设计，具备实际操盘能力。
            </p>
            <p className="text-lg">
              拥有 7 年加密投资经验，专注 Meme 赛道超 1 年，参与链上项目 500+ 个。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}