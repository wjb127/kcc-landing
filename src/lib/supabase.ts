import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ConsultationRequest {
  id?: string
  name: string
  phone: string
  email?: string
  address?: string
  message?: string
  created_at?: string
  status?: 'pending' | 'contacted' | 'completed'
}

export async function createConsultationRequest(data: Omit<ConsultationRequest, 'id' | 'created_at' | 'status'>) {
  const { data: result, error } = await supabase
    .from('kmong_3_consultation_requests')
    .insert([{
      ...data,
      status: 'pending'
    }])
    .select()
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return result
}

export async function getConsultationRequests() {
  const { data, error } = await supabase
    .from('kmong_3_consultation_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
}