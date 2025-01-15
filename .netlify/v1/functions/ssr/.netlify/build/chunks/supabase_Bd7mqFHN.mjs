import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://wafbxiwyfazdanxrtgvn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZmJ4aXd5ZmF6ZGFueHJ0Z3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDY1NzIsImV4cCI6MjA0OTA4MjU3Mn0.vWecU_rBKvsrK0SVcwcBrQ5GkB40ymzJbvGA-oQSIfw"
);

export { supabase as s };
