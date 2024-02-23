import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";

export const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& label.Mui-focused": {
    color: " rgba(255, 255, 255, 0.5)",
  },
  "& label": {
    color: " rgba(255, 255, 255, 0.5)",
  },
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    color: "white",
    borderRadius: 4,
    backgroundColor: " rgba(255, 255, 255, 0.15)",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
}));
export const CustomCommentField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& label.Mui-focused": {
    color: " rgba(255, 255, 255, 0.5)",
  },
  "& label": {
    color: " rgba(255, 255, 255, 0.5)",
  },
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    color: "white",
    borderRadius: 4,
    height: "193px",
    backgroundColor: " rgba(255, 255, 255, 0.15)",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
}));
export const CustomDatePicker = styled((props) => (
  <DatePicker InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .muirtl-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "100%",
    minidth: "none",
    direction: "rtl ",
    color: "white",
    border: "none",
    backgroundColor: " rgba(255, 255, 255, 0.15)",
  },
  "& .MuiInputBase-input-focused fieldset": {
    width: "100%",
    minidth: "none",
    direction: "rtl ",
    color: "white",
    border: "none",
    backgroundColor: " rgba(255, 255, 255, 0.15)",
  },
  "& .muirtl-i4bv87-MuiSvgIcon-root ": {
    color: "white",
  },
}));

export const CustomSelect = styled((props) => (
  <Select InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiSelect-select": {
    borderRadius: "4px",
    border: "none !important",
    color: "white",
  },
}));
