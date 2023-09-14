import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-600 flex justify-between px-20 py-4 text-white">
      <Link to="/"><h1 className="font-bold">Bun Mysql</h1></Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="px-2 py-1">Home</Link>
        </li>
        <li>
          <Link to="/new">Add Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
