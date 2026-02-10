"use client";

import { ContentProvider } from "@/contexts/ContentContext";
import EditModeToggle from "@/components/EditModeToggle";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ContentProvider>
      {children}
      <EditModeToggle />
    </ContentProvider>
  );
}
