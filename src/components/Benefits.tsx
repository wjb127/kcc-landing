import { Shield, Thermometer, Volume2, Award } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: '안전성',
    description: '강화된 보안 시스템과 내구성 있는 소재로 안전한 생활 공간을 제공합니다.',
    features: ['방범 기능 강화', '충격 저항성', '안전 잠금장치']
  },
  {
    icon: Thermometer,
    title: '단열성',
    description: '우수한 단열 성능으로 에너지 비용 절약과 쾌적한 실내 환경을 조성합니다.',
    features: ['열손실 최소화', '결로 방지', '에너지 효율 향상']
  },
  {
    icon: Volume2,
    title: '차음성',
    description: '뛰어난 방음 효과로 외부 소음을 차단하여 조용한 실내 환경을 만들어줍니다.',
    features: ['소음 차단', '진동 감소', '프라이버시 보호']
  },
  {
    icon: Award,
    title: '품질보증',
    description: 'KCC 브랜드의 검증된 품질과 전문 시공으로 오랜 기간 만족스러운 사용이 가능합니다.',
    features: ['품질 인증', 'A/S 보장', '전문 시공']
  }
]

export default function Benefits() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Building Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-600 text-sm font-semibold">KCC 창호만의 차별점</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            KCC 창호의 
            <span className="block text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
              특별한 장점
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            30년 이상의 기술력과 노하우로 만든 프리미엄 창호 시스템으로
            더욱 안전하고 쾌적한 주거환경을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-red-500 to-pink-500' :
                  index === 1 ? 'from-orange-500 to-yellow-500' :
                  index === 2 ? 'from-green-500 to-emerald-500' :
                  'from-purple-500 to-indigo-500'
                } rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {benefit.description}
              </p>
              
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3 group-hover:animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">혁신 기술</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                KCC만의 차별화된 
                <span className="block text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                  기술력
                </span>
              </h3>
              <div className="space-y-6">
                <div className="group flex items-start hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">고기밀 시스템</h4>
                    <p className="text-gray-600 leading-relaxed">독자적인 기밀 기술로 에너지 손실을 최소화합니다.</p>
                  </div>
                </div>
                
                <div className="group flex items-start hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">멀티 차음 구조</h4>
                    <p className="text-gray-600 leading-relaxed">3중 구조 설계로 최고 수준의 방음 성능을 제공합니다.</p>
                  </div>
                </div>
                
                <div className="group flex items-start hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">스마트 잠금 시스템</h4>
                    <p className="text-gray-600 leading-relaxed">첨단 보안 기술이 적용된 안전한 잠금 장치입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">품질 보증서</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span>제품 보증기간</span>
                    <span className="font-bold text-xl text-cyan-300">10년</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span>시공 보증기간</span>
                    <span className="font-bold text-xl text-cyan-300">5년</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span>A/S 무상기간</span>
                    <span className="font-bold text-xl text-cyan-300">2년</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-sm opacity-90 leading-relaxed">
                    KCC 공식 인증 대리점에서 시공하는 모든 제품에 대해 품질을 보증합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}