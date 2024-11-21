import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yuwpowciajhaijzgwznx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1d3Bvd2NpYWpoYWlqemd3em54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTAxNzksImV4cCI6MjA0NzU4NjE3OX0.gZUPzZvgjLqeMGFWtBLoON0hVXUI7ttPUty0nUAe0UA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);