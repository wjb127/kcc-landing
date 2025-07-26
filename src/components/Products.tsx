import { Building, Home, Warehouse, Palette } from 'lucide-react'

const products = [
  {
    icon: Home,
    title: '아파트 창호',
    description: '아파트에 최적화된 창호 시스템으로 단열, 차음, 안전성을 모두 갖춘 프리미엄 제품입니다.',
    features: ['3중 단열 유리', '방범 잠금장치', '소음 차단 40dB 이상', '에너지 효율 1등급'],
    image: '🏢',
    popular: true
  },
  {
    icon: Building,
    title: '오피스텔 창호',
    description: '도심 환경에 적합한 고성능 창호로 외부 소음을 효과적으로 차단하고 에너지 효율을 높입니다.',
    features: ['고기밀 구조', '방음 특화', '슬림 프레임', '다양한 컬러'],
    image: '🏨',
    popular: false
  },
  {
    icon: Warehouse,
    title: '상업시설 창호',
    description: '상업 공간의 특성을 고려한 대형 창호 시스템으로 뛰어난 내구성과 디자인을 제공합니다.',
    features: ['대형 개구부', '내구성 강화', '유지보수 용이', '맞춤형 설계'],
    image: '🏪',
    popular: false
  },
  {
    icon: Palette,
    title: '맞춤형 창호',
    description: '고객의 특별한 요구사항에 맞춘 맞춤형 창호 제작으로 개성 있는 공간을 연출합니다.',
    features: ['개별 설계', '다양한 마감재', '특수 기능', '디자인 상담'],
    image: '🎨',
    popular: false
  }
]

const windowTypes = [
  {
    name: '여닫이창',
    description: '전통적인 개폐 방식으로 뛰어난 기밀성과 단열성능',
    specs: '단열: 1.2W/㎡K, 차음: 35dB'
  },
  {
    name: '미서기창',
    description: '좌우로 밀어서 여는 방식으로 공간 효율성이 우수',
    specs: '단열: 1.4W/㎡K, 차음: 32dB'
  },
  {
    name: '상하 슬라이딩',
    description: '위아래로 움직이는 방식으로 전통적인 매력과 현대적 기능',
    specs: '단열: 1.3W/㎡K, 차음: 33dB'
  },
  {
    name: '픽스창',
    description: '고정형 창으로 최고의 단열성능과 대형 개구부 가능',
    specs: '단열: 1.0W/㎡K, 차음: 40dB'
  }
]

export default function Products() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Window Architecture Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 제품 소개 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-blue-600 text-sm font-semibold">제품 라인업</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            KCC 창호 
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              제품 라인업
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 건물 유형과 용도에 맞는 최적의 창호 솔루션을 제공합니다.
            각 제품은 KCC의 첨단 기술력으로 완성된 프리미엄 품질입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ 인기
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{product.image}</div>
                <div className={`w-16 h-16 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                  index === 1 ? 'bg-gradient-to-br from-purple-500 to-blue-500' :
                  index === 2 ? 'bg-gradient-to-br from-green-500 to-blue-500' :
                  'bg-gradient-to-br from-orange-500 to-red-500'
                } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 group-hover:animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                자세히 보기
              </button>
            </div>
          ))}
        </div>

        {/* 창호 형태별 설명 */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            창호 형태별 특징
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {windowTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {type.name}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {type.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-800 font-semibold">
                    성능 사양
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    {type.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              어떤 창호가 우리 집에 적합할까요?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              전문 상담사가 건물 구조, 사용 목적, 예산 등을 종합적으로 고려하여
              최적의 창호 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                무료 상담 받기
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                카탈로그 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}