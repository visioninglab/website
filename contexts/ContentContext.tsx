"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const STORAGE_KEY = "vl-editable-content";

interface ContentContextType {
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
  editMode: boolean;
  toggleEditMode: () => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx)
    throw new Error("useContent must be used within ContentProvider");
  return ctx;
};

export const useEditableText = (key: string, defaultValue: string) => {
  const { content, updateContent, editMode } = useContent();
  const value = content[key] ?? defaultValue;
  const update = useCallback(
    (v: string) => updateContent(key, v),
    [key, updateContent]
  );
  return { value, update, editMode };
};

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<Record<string, string>>({});
  const [editMode, setEditMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage after mount (SSR-safe)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setContent(JSON.parse(stored));
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch {
      // ignore
    }
  }, [content, mounted]);

  const updateContent = useCallback((key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  return (
    <ContentContext.Provider
      value={{ content, updateContent, editMode, toggleEditMode }}
    >
      {children}
    </ContentContext.Provider>
  );
};
