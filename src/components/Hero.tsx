import { Phone } from 'lucide-react'

export default function Hero() {

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        {/* 메인 제목 섹션 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-600 text-sm font-semibold">KCC GREEN REMODELING PRODUCT</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            KCC 창호
            <span className="block text-blue-600">전문 시공</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            고품질 KCC 창호로 우리 집을 더욱 안전하고 쾌적하게 만들어보세요.<br />
            <strong>국내 점유율 1위, 선호도 1위</strong>의 검증된 품질을 제공합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="tel:1522-7795" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              1522-7795 상담전화
            </a>
            <a 
              href="#consultation" 
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              무료 상담 신청하기
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">24시간</div>
              <div className="text-sm text-gray-600">상담 접수</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">무료</div>
              <div className="text-sm text-gray-600">현장 견적</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">15년</div>
              <div className="text-sm text-gray-600">품질 보증</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">전국</div>
              <div className="text-sm text-gray-600">시공 가능</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}