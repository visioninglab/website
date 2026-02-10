import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold">Visioning Lab</p>
            <p className="mt-1 text-sm text-neutral-500">
              Research. Build. Question.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Navigate
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/thinking"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Thinking
                </Link>
                <Link
                  href="/projects"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  About
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Connect
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/collaborate"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Collaborate
                </Link>
                <a
                  href="mailto:hello@visioninglab.com"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Visioning Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
