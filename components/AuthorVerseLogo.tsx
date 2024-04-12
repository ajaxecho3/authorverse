import React from "react";
import { Quote } from "lucide-react";

export default function AuthorVerseLogo() {
  return (
    <div className="flex items-center gap-1 ">
      <Quote size={24} />
      <p className="text-2xl font-bold">Author Verse</p>
    </div>
  );
}
