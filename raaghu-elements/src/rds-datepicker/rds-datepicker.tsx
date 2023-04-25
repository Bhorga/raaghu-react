
import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RdsIcon from "../rds-icon";
import "./rds-datepicker.scss";

export interface RdsDatepickerProps {
  selectedDate?:any
  dateForEdit?:any
  DatePickerLabel?: string;
  onDatePicker: (start: any, end?: any) => void;
  type?: "default" | "advanced";
  customDate?:any;
}
const RdsDatepicker = (props: RdsDatepickerProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onRangeChange = (dates: [any, any]) => {
    props.customDate(dates)
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDropdownDisplayValue(
      start.toDateString().slice(4) +
        " - " +
        (end != null ? end.toDateString().slice(4) : "")
    );

  };
  
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <li
      className="example-custom-input dropdown-item d-flex justify-content-between bg-opacity-10 bg-primary"
      onClick={onClick}
      ref={ref}
    >
      <span>Custom</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="gray"
          className="bi bi-caret-right-fill mt-1"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </span>
    </li>
  ));
  const today = new Date();
  const [dropdownDisplayValue, setDropdownDisplayValue] = useState(
    today.toDateString().slice(4)
  );
  const yesterdayClickHandler = () => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    );
    setDropdownDisplayValue(newDate.toDateString().slice(4));
  };
  const todayClickHandler = () => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    onRangeChange([newDate, null]);
    setDropdownDisplayValue(newDate.toDateString().slice(4));
  };
  const lastSevenDaysClickHandler = () => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7 + 1
    );
    onRangeChange([newDate, today]);
    setDropdownDisplayValue(
      newDate.toDateString().slice(4) + " - " + today.toDateString().slice(4)
    );
  };
  const lastFourteenDaysClickHandler = () => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 14 + 1
    );
    onRangeChange([newDate, today]);
    setDropdownDisplayValue(
      newDate.toDateString().slice(4) + " - " + today.toDateString().slice(4)
    );
  };

  useEffect(()=>{
    if(props.dateForEdit){
    setStartDate(props.dateForEdit)
  }  
  },[props.dateForEdit])  

  return (
    <div>
      {props.type !== "advanced" && (
        <>
     {props.DatePickerLabel && <div>{props.DatePickerLabel}</div>}
          <div className="input-group input-group-datePicker mb-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (date != null) setStartDate(date);
                else setStartDate(new Date());
                props.selectedDate(date)
                props.onDatePicker(startDate)
              }}
              className="datepicker__input"
              wrapperClassName="datepicker__wrapper"
            />
            <div className="input-group-append datepicker__icon-box">
              <span className="input-group-text" id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </span>
            </div>
          </div>
        </>
      )}
      {props.type === "advanced" && (
        <>
         {props.DatePickerLabel && <div className="mb-2">{props.DatePickerLabel}</div>}
          <div className="dropdown border" style={{borderRadius:'5px'}}>
            <button
              className="btn dropdown-toggle border"
              type="button"
              id="abcd"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{width:'208px'}}
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg> */}
              <RdsIcon
                name="calendar"
                width="20px"
                height="20px"
                colorVariant="secondary"
                stroke={true}
              ></RdsIcon>
              {/* (StartDate:any,EndDate:any)=>props.DatePicker */}
              <span className="ps-3 pe-1 ">{dropdownDisplayValue}</span>
            </button>
            <ul className="dropdown-menu" style={{overflow:'visible'}}>
              <li className="daterange__dropdown-item dropdown-item px-2 pb-2 border-bottom">
                {" "}
                <strong>
                  <small>Custom Date</small>
                </strong>{" "}
                <small className="px-1 py-0 ">{dropdownDisplayValue}</small>
              </li>
              
              <li
                className="daterange__dropdown-item dropdown-item"
                onClick={todayClickHandler}
              >
                Today
              </li>
              <li
                className="daterange__dropdown-item dropdown-item"
                onClick={yesterdayClickHandler}
              >
                Yesterday
              </li>
              <li
                className="daterange__dropdown-item dropdown-item"
                onClick={lastSevenDaysClickHandler}
              >
                Last 7 days
              </li>
              <li
                className="daterange__dropdown-item dropdown-item"
                onClick={lastFourteenDaysClickHandler} 
              >
                Last 14 days
              </li>
              <DatePicker
      selected={startDate}
      onChange={onRangeChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      popperPlacement="right"
      customInput={<ExampleCustomInput />}
    />
            </ul>
          </div>
        </>
      )}
    </div>
  );
}; 
export default RdsDatepicker;


