import React, { useEffect, useState } from "react";
// import { RdsInput } from "../rds-elements";
// import { RdsButton } from "../rds-elements";
import RdsButton from "../../../raaghu-elements/src/rds-button/rds-button";
import RdsInput from "../../../raaghu-elements/src/rds-input/rds-input";
import RdsCheckbox from "../../../raaghu-elements/src/rds-checkbox/rds-checkbox";
import RdsModal from "../../../raaghu-elements/src/rds-modal/rds-modal";
// import { RdsCheckbox } from "../rds-elements";
import "./rds-comp-login.scss";
import { Navigate, NavigationType } from "react-router-dom";
export interface RdsCompLoginProps {
  onLogin: (email: string, password: string) => any;
  onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}

const RdsCompLogin: React.FC<RdsCompLoginProps> = (
  props: RdsCompLoginProps
) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  // const [password , setPassword] = useState('');
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);

  const isEmailValid = (email: any) => {
    if (!email || email.length === 0) {
      return false;
    }
    return true;
  };
  const isPasswordValid = (password: any) => {
    if (!password || password.length === 0) {
      return false;
    }
    return true;
  };
  const emailhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isEmailValid(event.target.value)) {
      setError1("Email is invalid");
    } else {
      setError1("");
    }
    setEmail(event.target.value);
  };
  const passwordhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isPasswordValid(event.target.value)) {
      setError2("Password is invalid");
    } else {
      setError2("");
    }
    setPassword(event.target.value);
  };

  const isFormValid = isPasswordValid(password) && isEmailValid(email);

  const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
    setIsForgotPasswordClicked(true);
    props.onForgotPassword(isForgotPasswordClicked);
    console.log(isForgotPasswordClicked);
  };
  // useEffect(() => {
  // 	props.onForgotPassword(isForgotPasswordClicked);
  // 	console.log(isForgotPasswordClicked);
  // }, [isForgotPasswordClicked])
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className="text-center">
        <h2>Login</h2>
        <div>
          <small className="pb-5 d-flex justify-content-center">
            Current Tenant : Not Selected{" "}
            <span className="ms-1">
              <RdsModal
                modalId="modal1"
                modalAnimation="modal fade"
                showModalFooter={true}
                showModalHeader={true}
                scrollable={false}
                verticallyCentered={false}
                modalbutton={<a className="link-primary"> (Change)</a>}
                modalTitle="Switch Tenant"
                saveChangesName={`${checked ?"SWITCH TO THE TENANT":"SWITCH TO THE HOST"}`}
                cancelButtonName="CANCEL"
              >
                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked ={checked}
					  onChange ={()=>setChecked(!checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Switch to tenant
                    </label>
                  </div>
                </div>
              </RdsModal>
            </span>
          </small>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group text-start mb-3">
              <RdsInput
                label="Email/Username"
                placeholder="Email/Username"
                inputType="email/text"
                onChange={emailhandleChange}
                value={email}
                name={"email"}
                redAsteriskPresent={true}
              ></RdsInput>
              {error1 && <span style={{ color: "red" }}>{error1}</span>}
            </div>

            <div className="form-group text-start mb-4">
              <RdsInput
                redAsteriskPresent={true}
                label="Password"
                placeholder="Password"
                inputType="password"
                onChange={passwordhandleChange}
                name={"password"}
                value={password}
              ></RdsInput>
              {error2 && <span style={{ color: "red" }}>{error2}</span>}
            </div>
            <div className="d-flex justify-content-between mt-4 mb-4">
              <div>
                <div className="form-group mb-3">
                  <RdsCheckbox label={"Remember me"} checked></RdsCheckbox>
                </div>
              </div>
              <div>
                <a
                  className="link-primary text-decoration-none float-end"
                  href="javascript:void(0)"
                  style={{ textDecoration: "none" }}
                  onClick={forgotPasswordHandler}
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            <RdsButton
              label="Login"
              colorVariant="primary"
              isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RdsCompLogin;
