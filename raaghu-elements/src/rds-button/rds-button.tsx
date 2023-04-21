import React, { Component, FC, useEffect, useState } from "react";
import "./rds-button.scss";
import { RdsButtonProps } from "./rds-button.types";
// import { colors, placements } from "../../libs/types";
import Tooltip from "../rds-tooltip/rds-tooltip";
import RdsIcon from "../rds-icon/rds-icon";

const RdsButton: FC<RdsButtonProps> = (props: RdsButtonProps) => {

  const outline = `${props.isOutline ? "  btn-outline-" + props.colorVariant : "  align-items-center btn-" + props.colorVariant}`;
  const mode = props.size ? ` btn-${props.size === "small" ? "sm " : props.size === "large" ? "lg " : "md "}` : "";
  const icon = props.isFabIcon ? " btn-icon p-1 rounded-pill " : "";
  const icon1 = props.isRounded ? " rounded-pill " : "";
  const blockWidth = props.block === true ? "w-100" : "";
  const spinner = props.showLoadingSpinner ? " spinner" : "";
  const [classes, setClasses] =useState(`${outline}${mode}${icon}${icon1} ${blockWidth}  ${props.class}`);
  const btnType = props.type === "submit" ? "submit" : "button";
  const[turnSpinnerOff, setTurnSpinnerOff] = useState<any>(0);
  const buttonClick = (evt: any) => {
    if (props.showLoadingSpinner){
      let tempClasses = classes;
      setClasses(`${tempClasses} ${spinner}`)
      setTurnSpinnerOff(1);
    }
    props.onClick !== undefined && props.onClick(evt);
  };
  console.log(classes)
  useEffect(()=>{
    if(turnSpinnerOff){
      setTimeout(()=> {
        let tempClasses = classes.replace('spinner', '');
        console.log(classes)
        setClasses(tempClasses);   
      }, 3000);
    }
  },[turnSpinnerOff, classes])

  
  const iconClasses =
    props.hasOwnProperty("icon") && props.hasOwnProperty("label")
      ? "me-2 d-inline-block"
      : "";
  const showLoadingSpinner = props.showLoadingSpinner || false;
  const id = props.id || 'rds_buttonId_';

  return (<>
    {props.tooltip ? (< Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
      <button
        type={btnType}
        className={`btn position-relative${classes}`}
        disabled={props.isDisabled}
        onClick={buttonClick}
        form={props.formName}
        key={turnSpinnerOff}
        style={props.style}
        aria-label={props.arialabel}
        data-bs-dismiss={props.databsdismiss}
        data-bs-target={props.databstarget}
        data-bs-toggle={props.databstoggle}
        aria-controls={props.ariacontrols}
        id={props.id}
      >
        {showLoadingSpinner === false && props.icon && (
          <span className={iconClasses}>
            <RdsIcon
              name={props.icon}
              width={props.iconWidth}
              height={props.iconHeight}
              fill={props.iconFill}
              stroke={props.iconStroke}
              // isAnimate={false}
            />
          </span>
        )
        }
        {props.label && (<span className="btn-text "  >
          {props.label}
        </span>
        )}
        {showLoadingSpinner === false && <>{props.children}</>}
      </button>
    </Tooltip>) : <button
      type={btnType}
      className={`btn position-relative ${classes}`}
      disabled={props.isDisabled}
      onClick={buttonClick}
      form={props.formName}
      style={props.style}
      aria-label={props.arialabel}
      data-bs-dismiss={props.databsdismiss}
      data-bs-target={props.databstarget}
      data-bs-toggle={props.databstoggle}
      aria-controls={props.ariacontrols}
      id={props.id}
    >
      {showLoadingSpinner === false && props.icon && (
        <span className={iconClasses}>
          <RdsIcon
            name={props.icon}
            width={props.iconWidth}
            height={props.iconHeight}
            fill={props.iconFill}
            stroke={props.iconStroke}
            // isAnimate={false}
          />
        </span>
      )
      }
      {props.label && (<span className="btn-text "  >
        {props.label}
      </span>
      )}
      {showLoadingSpinner === false && <>{props.children}</>}
    </button>}
  </>
  )
};

export default RdsButton;
