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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            KCC 창호의 특별한 장점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30년 이상의 기술력과 노하우로 만든 프리미엄 창호 시스템으로
            더욱 안전하고 쾌적한 주거환경을 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                KCC만의 차별화된 기술력
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">고기밀 시스템</h4>
                    <p className="text-gray-600">독자적인 기밀 기술로 에너지 손실을 최소화합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">멀티 차음 구조</h4>
                    <p className="text-gray-600">3중 구조 설계로 최고 수준의 방음 성능을 제공합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">스마트 잠금 시스템</h4>
                    <p className="text-gray-600">첨단 보안 기술이 적용된 안전한 잠금 장치입니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">품질 보증서</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>제품 보증기간</span>
                  <span className="font-semibold">10년</span>
                </div>
                <div className="flex justify-between">
                  <span>시공 보증기간</span>
                  <span className="font-semibold">5년</span>
                </div>
                <div className="flex justify-between">
                  <span>A/S 무상기간</span>
                  <span className="font-semibold">2년</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-400">
                <p className="text-sm opacity-90">
                  KCC 공식 인증 대리점에서 시공하는 모든 제품에 대해 품질을 보증합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}