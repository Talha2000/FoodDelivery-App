import { Copyright } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-900 border-t-2">
      <div className="flex py-4 mx-12 gap-2 text-gray-500">
        <Copyright />
        FeastBud 2024. All Rights Reserved
      </div>
    </div>
  );
}
