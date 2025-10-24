-- Migration script to add device_info column to existing pre_registrations table
-- This script is safe to run multiple times

-- Add device_info column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'pre_registrations' 
        AND column_name = 'device_info'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.pre_registrations 
        ADD COLUMN device_info JSONB;
        
        -- Add a comment to document the column
        COMMENT ON COLUMN public.pre_registrations.device_info IS 'Device information including platform (ios/android/desktop), browser, and mobile status';
    END IF;
END $$;
