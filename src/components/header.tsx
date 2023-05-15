import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b border-b-slate-100 bg-white supports-backdrop-blur-md:bg-white/75 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="block rounded p-2 outline-none ring-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 4h-4v16h4"></path>
            <path d="M17 4h4v16h-4"></path>
            <path d="M8 16h.01"></path>
            <path d="M12 16h.01"></path>
            <path d="M16 16h.01"></path>
          </svg>
        </Link>
        <button
          type="button"
          className="rounded p-2 outline-none ring-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-100 focus:bg-slate-100 focus:ring-2 focus:ring-offset-2"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
