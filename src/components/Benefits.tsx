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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            KCC 창호의 특별한 장점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30년 이상의 기술력과 노하우로 만든 프리미엄 창호 시스템
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2 text-sm text-gray-700">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* KCC 기술 이미지 섹션 */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <img 
              src="/kcc-technology.jpg"
              alt="KCC 창호 기술 특징 - 아르곤가스, TPS단열간봉, 로이유리"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                KCC e-MAX 혁신 기술
              </h4>
              <p className="text-gray-600 text-sm">
                아르곤가스 + TPS단열간봉 + 로이유리 기본 적용
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <img 
              src="/kcc-specifications.jpg"
              alt="KCC 케이씨씨 창호 제품 사양 및 두께 정보"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                KCC 제품 사양표
              </h4>
              <p className="text-gray-600 text-sm">
                15년 품질보증 프리미엄 창호 시스템
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}