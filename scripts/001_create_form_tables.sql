-- Create pre_registrations table for storing pre-registration form data
CREATE TABLE IF NOT EXISTS public.pre_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  pin_code TEXT NOT NULL,
  profile_type TEXT NOT NULL CHECK (profile_type IN ('individual', 'business')),
  household_size INTEGER,
  waste_estimate TEXT,
  device_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table for storing contact form data
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  inquiry_type TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for both tables
ALTER TABLE public.pre_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access for inserting data (since these are public forms)
-- But restrict reading to authenticated users only
CREATE POLICY "Allow public insert on pre_registrations" 
  ON public.pre_registrations FOR INSERT 
  TO public 
  WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_submissions" 
  ON public.contact_submissions FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Only allow reading for authenticated users (for admin purposes)
CREATE POLICY "Allow authenticated read on pre_registrations" 
  ON public.pre_registrations FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated read on contact_submissions" 
  ON public.contact_submissions FOR SELECT 
  TO authenticated 
  USING (true);
