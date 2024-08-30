import logo from "../assets/icons/logo-header.svg";
export default function Navbar() {
  return (
    <div className="flex mx-auto justify-center items-center gap-10 py-6">
      <img src={logo} alt="" />
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Menu</li>
        <li>Pages</li>
        <li>User Dashboard</li>
      </ul>
      <input
        type="search"
        name="Search Food"
        id=""
        placeholder="Search food"
        className="focus:outline-none"
      />
      <button>Log In</button>
      <button>Sign Up</button>
    </div>
  );
}
