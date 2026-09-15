"use client";

import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import noImage from "../../public/noImage.png";

type RecipeCardProps = {
  postID: number;
  title: string;
  description: string;
  time: string;
  difficulty: string;
  imageUrl: string;
};

export default function RecipeCard({
  postID,
  title,
  description,
  time,
  difficulty,
  imageUrl,
}: RecipeCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [imageSource, setImageSource] = useState(imageUrl || noImage);
  return (
    <article
      ref={ref}
      style={{
        transform: isInView ? "scale(1)" : "scale(0.96)",
        opacity: 1,
        transition: "all 0.35s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
      className="group h-[490px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:-translate-y-1 hover:shadow-xl dark:border-[#3a3a3a] dark:bg-[#202020] sm:h-[470px] lg:h-[460px]"
    >
      <Link href={`/recipes/${postID}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-muted">
          <Image
            src={imageSource}
            alt={`${title} recipe`}
            fill
            sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageSource(noImage)}
          />
          <span className="absolute left-0 top-0 rounded-br-2xl border-b border-r border-orange-300/70 bg-orange-500 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-black shadow-sm dark:border-orange-300/30">
            {difficulty}
          </span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-5 px-6 pb-8 pt-6">
          <div>
            <p className="text-lg font-bold leading-7 text-card-foreground">
              {title}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-stone-200 pt-4 text-sm text-muted-foreground dark:border-[#45413d]">
            <span>{time}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-orange-600 transition-colors group-hover:text-orange-500 dark:text-orange-400">
              View recipe
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
