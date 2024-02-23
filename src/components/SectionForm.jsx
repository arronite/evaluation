import React from "react";
import TextField from "@mui/material/TextField";
import DatePickerInput from "./DatePickerInput";
import { SelectInput } from "./SelectInput";

import { Button } from "@mui/material";

import { CustomTextField, CustomCommentField } from "../Styled/Custom";

export const SectionForm = () => {
  const handelChange = (e) => {};

  const handelClick = (e) => {
    e.target.value == "تسک" ? (e.target.value = "") : console.log();
  };

  return (
    <div className="d-flex-col">
      <div className="d-flex jce">
        <span
          style={{
            margin: "0px 8px 27px",
            fontWeight: "600",
            fontSize: "20px",
            color: "#FFFFFF",
          }}
        >
          Personel
        </span>
      </div>
      <div className="d-flex jcc">
        <CustomTextField
          fullwidth
          className="fields"
          label="عنوان"
          defaultValue="تسک"
          variant="filled"
          onClick={handelClick}
          onChange={handelChange}
          style={{ margin: "8px", width: "100%" }}
        />
        <CustomTextField
          fullwidth
          className="fields"
          label="توضیح کوتاه"
          variant="filled"
          style={{ margin: "8px", width: "100%" }}
        />
      </div>
      <div className="d-flex jcc">
        <DatePickerInput />
        <SelectInput />
      </div>
      <div className="d-flex jcc">
        <CustomCommentField
          fullwidth
          className="fields"
          label="شرح"
          variant="filled"
          style={{ margin: "8px", width: "100%" }}
        />
      </div>
      <div className="d-flex jce">
        <Button
          sx={{ margin: "8px", backgroundColor: " #F1C400" }}
          variant="contained"
        >
          ذخیره
        </Button>
      </div>
    </div>
  );
};
