import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {CustomDatePicker} from '../Styled/Custom';

const DatePickerInput = () => {
  return (
    <LocalizationProvider   dateAdapter={AdapterDayjs}>
      
        <CustomDatePicker   />
     
    </LocalizationProvider>
  )
}

export default DatePickerInput