import React from "react";

function ButtonsSocial({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-primary border-secondary border-2 p-3 rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      {icon}
    </a>
  );
}

export default ButtonsSocial;
