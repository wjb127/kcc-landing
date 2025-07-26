'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, CheckCircle, Clock, Award } from 'lucide-react'
import { createConsultationRequest } from '@/lib/supabase'

interface ConsultationForm {
  name: string
  phone: string
  email: string
  address: string
  message: string
}

export default function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationForm>()

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true)
    
    try {
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
    <section id="consultation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            무료 상담 신청
          </h2>
          <p className="text-xl text-gray-600">
            전문가가 직접 방문하여 정확한 견적을 제공해드립니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 왼쪽: 상담 안내 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                왜 KCC 창호를 선택해야 할까요?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">검증된 품질</h4>
                    <p className="text-gray-600">국내 점유율 1위, 선호도 1위의 검증된 브랜드입니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">빠른 시공</h4>
                    <p className="text-gray-600">상담 후 최대 2주 내 시공 완료가 가능합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">15년 품질보증</h4>
                    <p className="text-gray-600">시공 완료 후 15년간 품질을 보증합니다.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">📞 즉시 상담 원하시나요?</h4>
                <p className="text-blue-800 mb-4">전화로 바로 상담받으실 수 있습니다.</p>
                <a 
                  href="tel:1522-7795"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  1522-7795
                </a>
              </div>
            </div>

            {/* 오른쪽: 상담신청 폼 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  상담 신청하기
                </h3>
                <p className="text-gray-600 text-sm">
                  정보를 입력하시면 24시간 내 연락드립니다
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
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                개인정보는 상담 목적으로만 사용되며, 별도 동의 없이 제3자에게 제공되지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}