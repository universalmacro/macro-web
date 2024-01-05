import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: { links: any }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
