// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fzdwpkwrvdwoliyjvrfc.supabase.co',  // replace this
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZHdwa3dydmR3b2xpeWp2cmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzAwMzIsImV4cCI6MjA2NTA0NjAzMn0.78fjSq3tdpZ_OXOD9qQlJ6BZLnD0Riiyn_3-fPvU0Vg'                  // replace this
);

export default supabase;
