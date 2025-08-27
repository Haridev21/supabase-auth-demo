// Initializes and exports a Supabase client for use in static pages
// Usage:
// import { supabase } from './supabaseClient.js'

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://tieexndgomsadybxtdfw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZWV4bmRnb21zYWR5Ynh0ZGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNzM5MjcsImV4cCI6MjA3MTg0OTkyN30.vrFbgwR31KU4RVyo_yRKBtv1MYVOpniG1llS44d5gm0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


