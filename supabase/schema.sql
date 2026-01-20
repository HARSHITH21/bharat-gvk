-- Supabase SQL Schema for Bharat GVK Technologies
-- Run this in your Supabase SQL Editor

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Optional: Create a view for recent submissions
CREATE OR REPLACE VIEW recent_submissions AS
SELECT * FROM contact_submissions
ORDER BY created_at DESC
LIMIT 100;
