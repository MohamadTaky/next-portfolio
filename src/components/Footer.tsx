import ActiveLink from "./common/ActiveLink";

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-900 bg-slate-950 p-4">
      <div className="container mx-auto my-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-4">
        <nav className="flex flex-col gap-4">
          <ActiveLink href="/" activeClassName="text-blue-500">
            Home
          </ActiveLink>
          <ActiveLink href="/about" activeClassName="text-blue-500">
            About me
          </ActiveLink>
          <ActiveLink href="/projects" activeClassName="text-blue-500">
            My work
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName="text-blue-500">
            Contact
          </ActiveLink>
        </nav>
        <p className="text-center text-4xl font-bold">
          M<span className="relative top-2">T</span>
        </p>
        <nav className="flex flex-col gap-4">
          <a href="https://github.com/MohamadTaky">GitHub</a>
          <a href="https://linkedin.com/in/mohamad-taky">LinkedIn</a>
          <a href="mailto:mohamadtaky2002@gmail.com">mohamadtaky2002@gmail.com</a>
          <a href="https://wa.me/+963959953032">+963 959 953 032</a>
        </nav>
      </div>
      <p className="text-center">
        <span className="text-gray-500">&#169;2024</span> MohamadTaky
      </p>
    </footer>
  );
}
