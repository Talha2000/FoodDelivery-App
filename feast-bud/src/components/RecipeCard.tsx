'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

export default function RecipeCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const postID = 1;
  return (
    <Link href={`/blog/${postID}`}>
      <div
        className="min-w-80 rounded-xl border border-black"
        ref={ref}
        style={{
          transform: isInView ? 'scale(1)' : 'scale(0.8)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
        }}
      >
        <div className="rounded-t-xl border-b-2">
          Image here
        </div>
        <div className="p-4">
          <p>Recipe Title</p>
          <p>Recipe Description</p>
          <p>Recipe Stars</p>
          <Button type="button" variant="viewBtn">View Recipe</Button>
        </div>
      </div>
    </Link>
  );
}
