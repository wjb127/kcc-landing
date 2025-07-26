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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            신청 후 진행과정
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            상담 신청부터 시공 완료까지 체계적이고 전문적인 프로세스
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
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>
                  
                  <div className="text-xs text-blue-600 font-semibold">
                    소요시간: {step.duration}
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