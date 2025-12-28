import { NavLink } from "react-router-dom";
function NavBar() {
  const linkClass = ({ isActive }) => `px-4 py-2 rounded-full text-sm transition
    ${isActive ? "bg-white text-black" : "text-white/70 hover:text-white"}`;
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full bg-black/60 backdrop-blur-md px-6 py-3">
          <span className="text-white font-semibold tracking-wide">
            GHS Carnival
          </span>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-2">
            <NavLink to="/" className={linkClass}>
              {" "}
              Home{" "}
            </NavLink>
            <NavLink to="/team" className={linkClass}>
              {" "}
              Team{" "}
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              {" "}
              About{" "}
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              {" "}
              Contact{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
