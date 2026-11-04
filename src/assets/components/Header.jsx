import Brand from "./Brand";

export const Navlink = () => (
  <>
    <li>
      <a href="#" className="primary-text">
        Home
      </a>
    </li>
    <li>
      <a href="#">Technologies</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </>
);

export default function Header() {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Navlink />
            </ul>
          </div>
          <Brand />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Navlink />
          </ul>
        </div>
        <div className="navbar-end gap-2 text-sm">
          <button className="cursor-pointer"> Sign In</button>
          <button className="btn-gradient"> Sign Up </button>
        </div>
      </nav>
    </div>
  );
}
