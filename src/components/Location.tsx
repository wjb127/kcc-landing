import { MapPin, Phone, Clock, Car, Bus, Train } from 'lucide-react'

const locations = [
  {
    name: 'KCC 창호 본점',
    address: '서울특별시 강남구 테헤란로 123',
    phone: '1522-7795',
    hours: [
      { day: '평일', time: '09:00 - 18:00' },
      { day: '토요일', time: '09:00 - 16:00' },
      { day: '일요일/공휴일', time: '휴무' }
    ],
    features: ['무료 주차', '제품 전시관', '상담실', '어린이 놀이방'],
    transport: {
      subway: '강남역 2번 출구 도보 5분',
      bus: '146, 740, 341번 버스',
      parking: '무료 주차 30대 가능'
    },
    primary: true
  },
  {
    name: 'KCC 창호 분당점',
    address: '경기도 성남시 분당구 정자로 456',
    phone: '031-1234-5678',
    hours: [
      { day: '평일', time: '09:00 - 18:00' },
      { day: '토요일', time: '09:00 - 15:00' },
      { day: '일요일/공휴일', time: '휴무' }
    ],
    features: ['무료 주차', '제품 전시관', '상담실'],
    transport: {
      subway: '정자역 1번 출구 도보 3분',
      bus: '10-1, 55번 버스',
      parking: '무료 주차 20대 가능'
    },
    primary: false
  },
  {
    name: 'KCC 창호 일산점',
    address: '경기도 고양시 일산동구 중앙로 789',
    phone: '031-9876-5432',
    hours: [
      { day: '평일', time: '09:00 - 18:00' },
      { day: '토요일', time: '10:00 - 16:00' },
      { day: '일요일/공휴일', time: '휴무' }
    ],
    features: ['무료 주차', '제품 전시관', '키즈존'],
    transport: {
      subway: '정발산역 4번 출구 도보 7분',
      bus: '88, 200번 버스',
      parking: '무료 주차 25대 가능'
    },
    primary: false
  }
]

export default function Location() {
  return (
    <section id="location" className="relative py-20 overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="City Skyline Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-blue-600 text-sm font-semibold">전시장 안내</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            전시장 
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              위치 안내
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            직접 보고 만져보실 수 있는 KCC 창호 전시장을 방문해보세요.
            전문 상담사가 친절하게 안내해드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-lg p-6 ${
                location.primary
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
                  : 'bg-white border border-gray-200'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              {location.primary && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    본점
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  {location.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                
                <div className="flex items-center text-blue-600 font-semibold">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href={`tel:${location.phone}`} className="hover:underline">
                    {location.phone}
                  </a>
                </div>
              </div>

              {/* 운영시간 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  운영시간
                </h4>
                <div className="space-y-1">
                  {location.hours.map((hour, hourIndex) => (
                    <div key={hourIndex} className="flex justify-between text-sm">
                      <span className="text-gray-600">{hour.day}</span>
                      <span className={hour.day.includes('일요일') ? 'text-red-500' : 'text-gray-900'}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 시설 정보 */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">시설 안내</h4>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* 교통 정보 */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <Train className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500">지하철</span>
                    <p className="text-sm text-gray-700">{location.transport.subway}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Bus className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500">버스</span>
                    <p className="text-sm text-gray-700">{location.transport.bus}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Car className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-500">주차</span>
                    <p className="text-sm text-gray-700">{location.transport.parking}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                길찾기
              </button>
            </div>
          ))}
        </div>

        {/* 지도 섹션 */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            오시는 길
          </h3>
          
          {/* 임시 지도 영역 */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold mb-2">KCC 창호 전시장 위치</p>
              <p className="text-sm">실제 서비스에서는 Google Maps 또는 Naver Map이 표시됩니다</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">방문 예약 안내</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 전화 예약 시 대기시간 없이 상담 가능</li>
                <li>• 주말 방문 시 사전 예약 필수</li>
                <li>• 단체 방문 시 최소 3일 전 예약 요청</li>
                <li>• 전시장 투어는 약 30분 소요</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">방문 시 준비사항</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 현재 집 창호 사진 (휴대폰 촬영)</li>
                <li>• 대략적인 시공 희망 시기</li>
                <li>• 예산 범위 (상담 시 도움)</li>
                <li>• 질문사항 메모</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-12 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              지금 바로 전시장에서 만나보세요!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              실제 제품을 직접 보고 만져보실 수 있습니다.
              전문 상담사가 집의 특성에 맞는 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1522-7795"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                전화 예약하기
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                온라인 예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}