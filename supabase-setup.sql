-- 상담 신청 테이블 생성
CREATE TABLE consultation_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name varchar(100) NOT NULL,
  phone varchar(20) NOT NULL,
  email varchar(255),
  address text,
  message text,
  status varchar(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) 활성화
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 정책 (필요한 경우)
CREATE POLICY "Enable read access for all users" ON consultation_requests
  FOR SELECT USING (true);

-- 공개 삽입 정책 (상담 신청을 위해)
CREATE POLICY "Enable insert for all users" ON consultation_requests
  FOR INSERT WITH CHECK (true);

-- 업데이트 시간 자동 갱신을 위한 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성 (업데이트 시간 자동 갱신)
CREATE TRIGGER update_consultation_requests_updated_at
    BEFORE UPDATE ON consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();