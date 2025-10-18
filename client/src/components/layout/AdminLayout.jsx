export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md text-gray-900 p-4 flex justify-between items-center">
        {/* Logo / Dashboard title */}
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          Agency Dashboard
        </h1>

        {/* Right section: buttons / profile */}
        <div className="flex items-center gap-4">
          {/* Notifications icon (optional) */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Optional notification badge */}
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Logout button */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">
            Logout
          </button>

          {/* User profile placeholder */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">
            A
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
    </div>
  );
}
