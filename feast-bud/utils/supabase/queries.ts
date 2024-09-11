import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';
// import { createClient } from './server';

// Retreive current user
export const getUser = cache(async (supabase: SupabaseClient) => {
  // const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return user;
});
