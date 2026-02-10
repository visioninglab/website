"use client";

import { Pencil, Check } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";

export default function EditModeToggle() {
  const { editMode, toggleEditMode } = useContent();

  // Only show in development
  if (process.env.NODE_ENV === "production") return null;

  return (
    <button
      onClick={toggleEditMode}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all ${
        editMode
          ? "bg-primary text-primary-foreground shadow-primary/30"
          : "border border-border bg-card text-foreground hover:border-primary/50"
      }`}
      title={editMode ? "Exit edit mode" : "Edit text"}
    >
      {editMode ? (
        <Check className="h-5 w-5" />
      ) : (
        <Pencil className="h-5 w-5" />
      )}
    </button>
  );
}
