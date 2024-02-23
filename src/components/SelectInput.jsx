import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { CustomSelect } from "../Styled/Custom";
import { useState } from "react";

export const SelectInput = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
        id="demo-simple-select-filled-label"
      >
        Age
      </InputLabel>
      <CustomSelect
        fullWidth
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomSelect>
    </FormControl>
  );
};
