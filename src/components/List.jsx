import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export const List = () => {
  const columns = [
    { field: "id", headerName: "عنوان", width: 200 },
    { field: "lastName", headerName: "توضیح کوتاه", width: 300 },
    { field: "firstName", headerName: "تاریخ", width: 300 },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
  ];
  const [selectedTab, setSelectedTab] = useState(true);
  return (
    <div className=" WorksContainer">
      <div className="d-flex" style={{ color: "white", marginBottom: "8px" }}>
        <div>
          <span
            onClick={() => setSelectedTab(true)}
            className={selectedTab ? "underLine" : ""}
            style={{ margin: "22px" }}
          >
            پیش فرض
          </span>
        </div>
        <div>
          <span
            onClick={() => setSelectedTab(false)}
            className={selectedTab ? "" : "underLine"}
            style={{ margin: "22px" }}
          >
            دسته بندی
          </span>
        </div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <FormControl sx={{ width: "50%" }} variant="outlined">
          <InputLabel
            style={{ color: "rgba(255, 255, 255, 0.5" }}
            htmlFor="outlined-adornment-password"
          >
            جست و جو
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {<SearchIcon style={{ color: "#FFFFFF" }} />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div style={{ margin: "8px" }} className="DataGrid ">
        <DataGrid
          rows={rows}
          style={{ color: "#FFFFFF" }}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
