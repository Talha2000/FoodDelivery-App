import React from "react";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Params) {
  const { id } = await params;

  return (
    <div className="h-dvh">
      The Recipe id is:
      {id}
    </div>
  );
}
