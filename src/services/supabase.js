import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mycardbnkpzhzfjcuqyi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15Y2FyZGJua3B6aHpmamN1cXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2OTc5MzAsImV4cCI6MjA1NTI3MzkzMH0.siulsNt8AqiLn8fwQjqXdw7oFRGVLO-FUVNVCiMgB88";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
