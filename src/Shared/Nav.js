import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { _id: 1, item: "Purchase", link: "/purchase" },
    { _id: 2, item: "Blogs", link: "/blogs" },
    { _id: 3, item: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-base-100">
      <div class="container navbar mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item._id}>
                  <Link to={item.link}>{item.item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Makers
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {navItems.map((item) => (
              <li key={item._id}>
                <Link to={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="navbar-end">
          <p>User Login</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
