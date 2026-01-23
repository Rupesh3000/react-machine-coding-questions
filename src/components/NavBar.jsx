export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left: Logo */}
          <div className="text-xl font-bold tracking-wide text-white">
            Maa
          </div>

          {/* Right: Search + VK logo */}
          <div className="flex items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="
                  w-56 rounded-md
                  bg-white/5
                  px-3 py-2
                  text-sm text-white
                  placeholder-white/40
                  outline-none
                  ring-1 ring-white/10
                  focus:ring-2 focus:ring-white/30
                "
              />
            </div>

            {/* VK Logo */}
            <div className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              bg-white text-black
              font-semibold
              cursor-pointer
              hover:bg-white/90
              transition
            ">
              VK
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
