import { Copyright } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-[#fffaf2] dark:border-[#222222] dark:bg-black">
      <div className="flex w-full items-center justify-start gap-2 px-4 py-5 text-sm text-muted-foreground sm:px-12">
        <Copyright className="h-4 w-4" aria-hidden="true" />
        <span>FeastBud {new Date().getFullYear()}. All Rights Reserved</span>
      </div>
    </footer>
  );
}
