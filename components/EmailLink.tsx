"use client";

import { useSyncExternalStore } from "react";

// The address is put together in the browser, so it never appears whole in the page HTML or in
// this public repository, where spam harvesters look. Until then the link goes to the contact form.
const PARTS = ["moc.", "bal", "gninoisiv", "@", "ol", "leh"];
const assemble = () => PARTS.join("").split("").reverse().join("");
const noop = () => () => {};

export default function EmailLink({
  className,
  label,
}: {
  className?: string;
  /** Text to show instead of the address itself */
  label?: string;
}) {
  // null while the page is built on the server; the real address once it is in a browser
  const address = useSyncExternalStore(noop, assemble, () => null);

  if (!address) {
    return (
      <a href="/collaborate/" className={className}>
        {label ?? "the contact form"}
      </a>
    );
  }
  return (
    <a href={`mailto:${address}`} className={className}>
      {label ?? address}
    </a>
  );
}
