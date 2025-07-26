import { Phone, Calendar, Ruler, Wrench, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: Phone,
    step: '01',
    title: '상담 신청',
    description: '전화 또는 온라인으로 무료 상담을 신청하세요.',
    details: ['전화 상담: 1522-7795', '온라인 문의 폼 작성', '카카오톡 상담 가능'],
    duration: '즉시',
    color: 'bg-blue-500'
  },
  {
    icon: Calendar,
    step: '02',
    title: '현장 방문',
    description: '전문가가 직접 방문하여 현장을 확인하고 견적을 제공합니다.',
    details: ['현장 측정 및 조사', '맞춤형 제품 추천', '정확한 견적 제공'],
    duration: '2-3일 내',
    color: 'bg-green-500'
  },
  {
    icon: Ruler,
    step: '03',
    title: '정밀 측정',
    description: '정확한 치수 측정과 제품 사양을 최종 확정합니다.',
    details: ['3D 측정 시스템 활용', '시공 도면 작성', '제품 사양 확정'],
    duration: '1주일',
    color: 'bg-yellow-500'
  },
  {
    icon: Wrench,
    step: '04',
    title: '전문 시공',
    description: '숙련된 전문 시공팀이 안전하고 정확하게 설치합니다.',
    details: ['기존 창호 철거', '신규 창호 설치', '마감 작업 및 청소'],
    duration: '1-2일',
    color: 'bg-orange-500'
  },
  {
    icon: CheckCircle,
    step: '05',
    title: '검수 완료',
    description: '시공 완료 후 철저한 검수와 사용법 안내를 제공합니다.',
    details: ['품질 검수', '동작 확인', '사용법 교육 및 A/S 안내'],
    duration: '당일',
    color: 'bg-purple-500'
  }
]

const serviceFeatures = [
  {
    title: '24시간 접수',
    description: '언제라도 편리하게 상담 신청이 가능합니다.',
    icon: '🕐'
  },
  {
    title: '무료 견적',
    description: '현장 방문 상담과 견적 제공은 완전 무료입니다.',
    icon: '💰'
  },
  {
    title: '빠른 시공',
    description: '계약 후 최대 2주 내 시공 완료가 가능합니다.',
    icon: '⚡'
  },
  {
    title: '품질 보증',
    description: '시공 완료 후 5년간 품질을 보증합니다.',
    icon: '🛡️'
  }
]

export default function Process() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Construction Process Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50"></div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-blue-600 text-sm font-semibold">진행 프로세스</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            신청 후 
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              진행과정
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            상담 신청부터 시공 완료까지 체계적이고 전문적인 프로세스로
            고객 만족을 최우선으로 진행합니다.
          </p>
        </div>

        {/* 프로세스 단계 */}
        <div className="relative">
          {/* 연결선 */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gray-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-orange-500 to-purple-500 opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  {/* 아이콘과 단계 */}
                  <div className="flex flex-col items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      index === 0 ? 'from-blue-500 to-cyan-500' :
                      index === 1 ? 'from-green-500 to-emerald-500' :
                      index === 2 ? 'from-yellow-500 to-orange-500' :
                      index === 3 ? 'from-orange-500 to-red-500' :
                      'from-purple-500 to-indigo-500'
                    } rounded-2xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-4 py-2 rounded-full text-sm font-bold border border-gray-200">
                      {step.step}
                    </div>
                  </div>

                  {/* 제목과 설명 */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* 세부사항 */}
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 mt-1.5 flex-shrink-0 group-hover:animate-pulse" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* 소요시간 */}
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200">
                      ⏱️ {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 서비스 특징 */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            KCC 창호 서비스 특징
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 주의사항 및 안내 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            시공 전 확인사항
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 text-sm">!</span>
                </div>
                시공 전 준비사항
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 기존 창호 주변 물품 정리</li>
                <li>• 시공 당일 집안 접근 통로 확보</li>
                <li>• 애완동물 및 어린이 안전 대책 마련</li>
                <li>• 주차 공간 미리 확보</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">i</span>
                </div>
                시공 후 관리방법
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 시공 후 24시간 내 환기 금지</li>
                <li>• 정기적인 청소 및 점검</li>
                <li>• 이상 발생 시 즉시 A/S 신청</li>
                <li>• 보증서 및 사용설명서 보관</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              <strong>문의사항이 있으시면 언제든지 연락주세요!</strong><br />
              고객센터: 1522-7795 (평일 9:00-18:00, 토요일 9:00-16:00)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}