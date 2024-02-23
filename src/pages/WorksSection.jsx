import React from "react";
import { List } from "../components/List";

export const WorksSection = () => {
  return (
    <div>
      <div className="SectionContainer">
        <div className="SectionTitle">
          <span className="text jcc fs-32">لیست</span>
        </div>
        <List />
      </div>
    </div>
  );
};
