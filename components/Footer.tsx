import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div
              className="logo-gradient h-5 w-[120px]"
              style={{ "--logo-url": `url(${basePath}/images/logo-wordmark.png)` } as React.CSSProperties}
              role="img"
              aria-label="Visioning Lab"
            />
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Co-developing research and innovation for complex systems.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/thinking"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Thinking
                </Link>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                Connect
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/collaborate"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Collaborate
                </Link>
                <a
                  href="mailto:hello@visioninglab.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Visioning Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
