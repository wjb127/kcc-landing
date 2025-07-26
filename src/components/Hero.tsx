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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Modern Architecture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
      </div>
      
      {/* 장식 요소 */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* 왼쪽: 메인 텍스트 */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-medium">KCC GREEN REMODELING PRODUCT</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            KCC 창호
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              전문 시공
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            고품질 KCC 창호로 우리 집을 더욱 안전하고 쾌적하게 만들어보세요.
            전문 시공팀이 완벽한 설치를 보장합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a 
              href="tel:1522-7795" 
              className="group inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              1522-7795
            </a>
            <a 
              href="#location" 
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              전시장 보기
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24시간 상담 가능</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>무료 견적</span>
          </div>
        </div>

        {/* 오른쪽: 상담신청 폼 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              무료 상담 신청
            </h2>
            <p className="text-gray-600 text-sm">
              전문가가 직접 상담해드립니다
            </p>
          </div>
          
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
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  전송 중...
                </div>
              ) : (
                '무료 상담 신청하기'
              )}
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