'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <div>
      <button type="button" onClick={handleSignOut}> Sign Out</button>
    </div>
  );
}
