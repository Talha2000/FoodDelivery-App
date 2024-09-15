import React from 'react';

interface Params {
  params: {
    id: string
  }
}

export default function page({ params }: Params) {
  return (
    <div className="h-dvh">
      The Recipe id is:
      {params.id}
    </div>
  );
}
