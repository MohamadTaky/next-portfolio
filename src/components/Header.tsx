import ActiveLink from "@/components/common/ActiveLink";

export default function Header() {
  return (
    <header className="container fixed left-1/2 top-0 z-50 -translate-x-1/2">
      <nav className="flex items-center justify-between py-4">
        <div className="mr-auto text-xl font-bold">
          M<span className="relative left-0.5 top-1">T</span>
        </div>
        <ActiveLink className="px-4 transition font-bold" activeClassName="text-blue-500" href="/">
          Home
        </ActiveLink>
        <ActiveLink className="px-4 transition font-bold" activeClassName="text-blue-500" href="/contact">
          Contact
        </ActiveLink>
        <ActiveLink className="px-4 transition font-bold" activeClassName="text-blue-500" href="/projects">
          My work
        </ActiveLink>
        <ActiveLink className="px-4 transition font-bold" activeClassName="text-blue-500" href="/about">
          About me
        </ActiveLink>
      </nav>
    </header>
  );
}
