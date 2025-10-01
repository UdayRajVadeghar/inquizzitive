import { useEffect, useState } from "react";

export default function Navbar({ onReset }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] md:w-full md:max-w-6xl md:px-4">
      <div className="relative backdrop-blur-2xl bg-white/10 dark:bg-white/5 rounded-2xl md:rounded-3xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl md:rounded-3xl pointer-events-none"></div>

        <div className="relative flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
          <div className="flex items-center gap-2 md:gap-4 group">
            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-2xl md:text-3xl">🧠</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] tracking-tight">
                Inquizzitive
              </span>
              <span className="text-[10px] md:text-xs text-white/60 font-medium hidden sm:block">
                AI-Powered Learning
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={onReset}
              className="group relative px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base text-white/90 hover:text-white transition-all duration-300 overflow-hidden"
              aria-label="Practice"
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              <span className="relative flex items-center gap-1 md:gap-2">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="hidden sm:inline">Practice</span>
              </span>
            </button>

            <button
              className="group relative px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base text-white/90 hover:text-white transition-all duration-300 overflow-hidden"
              aria-label="Dashboard"
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              <span className="relative flex items-center gap-1 md:gap-2">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="hidden lg:inline">Dashboard</span>
              </span>
            </button>

            <div className="w-px h-8 md:h-10 bg-white/20 mx-1 md:mx-2 hidden sm:block"></div>

            <button
              className="group relative px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Sign In"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl md:rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-white/30 rounded-xl md:rounded-2xl"></div>
              <span className="relative flex items-center gap-1 md:gap-2">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="hidden sm:inline">Sign In</span>
              </span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110 shadow-lg ml-1 md:ml-2"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 rounded-xl md:rounded-2xl transition-all duration-300"></div>
              {isDarkMode ? (
                <svg
                  className="relative w-5 h-5 md:w-6 md:h-6 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="relative w-5 h-5 md:w-6 md:h-6 text-slate-300 drop-shadow-[0_0_8px_rgba(148,163,184,0.5)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
