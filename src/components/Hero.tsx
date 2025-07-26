'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, MapPin } from 'lucide-react'
import { createConsultationRequest } from '@/lib/supabase'

interface ConsultationForm {
  name: string
  phone: string
  email: string
  address: string
  message: string
}

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationForm>()

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true)
    
    try {
      // Supabase에 데이터 저장
      await createConsultationRequest(data)
      
      alert('상담신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      reset()
      setIsSubmitting(false)
    } catch (error) {
      console.error('상담신청 오류:', error)
      alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* 왼쪽: 메인 텍스트 */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            KCC 창호
            <span className="block text-blue-600">전문 시공</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            고품질 KCC 창호로 우리 집을 더욱 안전하고 쾌적하게 만들어보세요.
            전문 시공팀이 완벽한 설치를 보장합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a 
              href="tel:1522-7795" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              1522-7795
            </a>
            <a 
              href="#location" 
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <MapPin className="mr-2 h-5 w-5" />
              전시장 보기
            </a>
          </div>

          <div className="text-sm text-gray-500">
            KCC GREEN REMODELING PRODUCT
          </div>
        </div>

        {/* 오른쪽: 상담신청 폼 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            무료 상담 신청
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성함 *
              </label>
              <input
                {...register('name', { required: '성함을 입력해주세요' })}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="성함을 입력하세요"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 *
              </label>
              <input
                {...register('phone', { 
                  required: '연락처를 입력해주세요',
                  pattern: {
                    value: /^[0-9-]+$/,
                    message: '올바른 연락처를 입력해주세요'
                  }
                })}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="010-0000-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                {...register('email', {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: '올바른 이메일을 입력해주세요'
                  }
                })}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                시공 주소
              </label>
              <input
                {...register('address')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="시공할 주소를 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                문의사항
              </label>
              <textarea
                {...register('message')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="궁금한 사항이나 요청사항을 입력하세요"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            개인정보는 상담 목적으로만 사용되며, 별도 동의 없이 제3자에게 제공되지 않습니다.
          </p>
        </div>
      </div>
    </section>
  )
}