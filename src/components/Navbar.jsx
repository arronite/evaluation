import React from "react";

export const Navbar = () => {
  return (
    <div className="Navbar jcs">
      <div className="NavContainer">
        <div className="items">
          <span className="fs-16">
            <a href="/Works">لیست کار ها</a>
          </span>
        </div>
        <div className="items">
          <span className="fs-16 selected">
            <a href="/">افزودن کار</a>
          </span>
        </div>
      </div>
    </div>
  );
};
