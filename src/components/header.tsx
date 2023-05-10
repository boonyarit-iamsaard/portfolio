import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed z-10 flex h-16 w-full items-center border-b border-b-slate-100 bg-white supports-backdrop-blur-md:bg-white/60 supports-backdrop-blur-md:backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="block rounded p-2 outline-none ring-slate-200 transition-colors duration-300 ease-in-out hover:bg-slate-100 focus:ring-2"
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
            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
          </svg>
        </Link>
        <button
          type="button"
          className="rounded p-2 outline-none ring-slate-200 transition-colors duration-300 ease-in-out hover:bg-slate-100 focus:ring-2"
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
