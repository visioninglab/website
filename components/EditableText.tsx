"use client";

import {
  useRef,
  useCallback,
  type KeyboardEvent,
  type ElementType,
  type HTMLAttributes,
} from "react";
import { useEditableText } from "@/contexts/ContentContext";

interface EditableTextProps extends HTMLAttributes<HTMLElement> {
  contentKey: string;
  defaultValue: string;
  as?: ElementType;
  multiline?: boolean;
}

export default function EditableText({
  contentKey,
  defaultValue,
  as: Tag = "span",
  multiline = false,
  className = "",
  ...props
}: EditableTextProps) {
  const { value, update, editMode } = useEditableText(contentKey, defaultValue);
  const ref = useRef<HTMLElement>(null);

  const handleBlur = useCallback(() => {
    if (ref.current) {
      const text = ref.current.innerText.trim();
      if (text !== value) {
        update(text);
      }
    }
  }, [value, update]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!multiline && e.key === "Enter") {
        e.preventDefault();
        ref.current?.blur();
      }
    },
    [multiline]
  );

  if (!editMode) {
    return (
      <Tag className={className} {...props}>
        {value}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} cursor-text rounded px-0.5 outline-none transition-shadow hover:ring-1 hover:ring-primary/50 focus:ring-2 focus:ring-primary`}
      {...props}
    >
      {value}
    </Tag>
  );
}
