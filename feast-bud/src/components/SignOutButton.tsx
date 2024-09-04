'use client';

import React from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut()
    if (!error) {
      router.push('/')
      router.refresh();
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}> Sign Out</button>
    </div>
  );
}
