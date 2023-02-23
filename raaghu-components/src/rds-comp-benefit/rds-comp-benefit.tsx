import React from "react";
import { RdsBenefit } from "raaghu-react-elements";

export interface RdsCompBenefitProps {
  displayType:string,
  colsize:number;
  itemList:any;
}

const RdsCompBenefit = (props:RdsCompBenefitProps) => {
 let Colmun = "col-md-"+ props.colsize ;
    
    
  return (
    <>
     <div className="row">
      {props.itemList.map((items:any, index:number)=>(
         <div className={`${Colmun}`} key ={index}>
            <RdsBenefit displayType={props.displayType} item = {items}/>
         </div>
         ))}
 </div>
    </>
  );
};
export default RdsCompBenefit;
