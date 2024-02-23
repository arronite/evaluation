import React from "react";
import { SectionForm } from "./SectionForm";

export const Section = () => {
  return (
    <div>
      <div className="SectionContainer">
        <div className="SectionTitle">
          <span className="text jcc fs-32">افزودن</span>
        </div>
        <SectionForm />
      </div>
    </div>
  );
};
