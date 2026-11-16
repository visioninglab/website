"use client";

// Everything a reader writes or chooses stays in this browser (localStorage), under one
// prefix, so it can all be forgotten with one button. Nothing is sent anywhere.
import { useCallback, useEffect, useState } from "react";

const PREFIX = "eightbillion:";
const EVENT = "eightbillion-change";

function read<T>(key: string, fallback: T): T {
  try {
    const v = window.localStorage.getItem(PREFIX + key);
    return v === null ? fallback : (JSON.parse(v) as T);
  } catch {
    return fallback;
  }
}

export function useStored<T>(key: string, initial: T): [T, (value: T) => void, boolean] {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Reading storage must wait until the page is in the browser.
    setValue(read(key, initial));
    setLoaded(true);
    const sync = () => setValue(read(key, initial));
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
    // initial is a fresh literal on every render; the key is what matters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const save = useCallback(
    (v: T) => {
      setValue(v);
      try {
        window.localStorage.setItem(PREFIX + key, JSON.stringify(v));
        window.dispatchEvent(new Event(EVENT));
      } catch {
        // storage can be unavailable (private windows); the page still works for this visit
      }
    },
    [key],
  );

  return [value, save, loaded];
}

export function forgetEverything() {
  try {
    const keys: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(PREFIX)) keys.push(k);
    }
    keys.forEach((k) => window.localStorage.removeItem(k));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    // nothing to forget
  }
}

// Shared keys
export const DONE = "done"; // activity keys marked as done
export const SEEN = "seen"; // poem ids turned over
export const QUIZ = "quiz"; // questionnaire answers (option index per question)
export const SONGS = "songs"; // agree/disagree choices per statement
export const MANIFESTO = "manifesto"; // { lines, name, sealed }
