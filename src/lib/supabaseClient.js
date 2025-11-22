import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvvgtcrsvygkilhbawka.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dmd0Y3Jzdnlna2lsaGJhd2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1OTY3NjAsImV4cCI6MjA3OTE3Mjc2MH0.boGdAy1xCw25hUX9rYEi1KoKgVTEuY_NXpNd1z9zRQM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)