import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logoLogin from "./logoLogin.png";

import "./login.css";
const Login = () => {
  const [showReset, setshowReset] = useState(false);
  const [showRegister, setshowRegister] = useState(false);
  const showResetBtn = () => {
    setshowReset(!showReset);
    setshowRegister(false);
  };
  const showRegisterBtn = () => {
    setshowReset(false);
    setshowRegister(!showRegister);
  };
  return (
    <>
      <article className="Login">
        <div className="sizingLogin head_Login"></div>
        <div className="logPG container-fluid mt-5">
          <div className="row">
            <div className="loginLogo col-md-6 mt-0">
              <img src={logoLogin} alt="" />
            </div>
            <div className="col-md-6 mt-5 loginForm">
              <div className="container marg">
                <div className="input-group mb-3">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="formInput form-control"
                    placeholder="البريد الألكتروني"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <div className="input-group-prepend"></div>
                  <input
                    type="password"
                    className="formInput form-control"
                    placeholder="الرقم السري"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <div className="input-group-prepend"></div>

                  <div className="formInput form-control col-md-12">
                    <a href="">
                      <div
                        classNAme="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                        href="#"
                      >
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                        المتابعة بأستخدام جوجل
                      </div>
                    </a>
                  </div>
                </div>
                <div class="btns loginBtn mt-3">
                  <a href="">
                    <h4>تسجيل الدخول</h4>
                  </a>
                </div>
                <div class="btns mt-5">
                  <a onClick={showResetBtn}>
                    <h4>هل نسيت كلمة السر؟</h4>
                  </a>
                </div>
                {showReset ? (
                  <div class="resetForm mt-3">
                    <div className="container mt-4">
                      <div className="row">
                        <div className="col-6">
                          <h4 className="reset-head">تغيير كلمة السر</h4>
                        </div>
                        <div className="row reset-text mt-2">
                          <h6 className="btns">
                            ادخل البريد الالكتروني المرتبط بحسابك و سنسل اليك
                            تعليمات لاعاده تعيين كلمه المرور عبر البريد
                            الالكتروني
                          </h6>
                          <div className="input-group mb-2 mt-3">
                            <div className="input-group-prepend"></div>
                            <input
                              type="text"
                              className="formInput reset-input form-control"
                              placeholder="البريد الألكتروني"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                          <div class="btns loginBtn mt-3">
                            <a href="">
                              <h4>ارسال التعليمات</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div class="btns mt-3">
                  <a onClick={showRegisterBtn}>
                    <h4>انشاء حساب</h4>
                  </a>
                </div>
                {showRegister ? <div class="resetForm mt-3">
                  <div className="container mt-4">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="reset-head">انشاءحساب</h4>
                      </div>
                      <div className="row reset-text mt-2">
                        <div className="naminfo input-group mb-2 mt-3">
                          <div className=""></div>
                          <input
                            type="text"
                            className="formInput reset-input form-control"
                            placeholder="الأسم"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="naminfo input-group mb-2 mt-3">
                          <div className="input-group-prepend"></div>
                          <input
                            type="text"
                            className="formInput reset-input form-control"
                            placeholder="اسم العائلة"
                            aria-label="family"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-2 mt-3">
                          <div className="input-group-prepend"></div>
                          <input
                            type="tel"
                            className="formInput reset-input form-control"
                            placeholder="رقم الموبايل"
                            aria-label="phone"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-2 mt-3">
                          <div className="input-group-prepend"></div>
                          <input
                            type="text"
                            className="formInput reset-input form-control"
                            placeholder="البريد الألكتروني"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-2 mt-3">
                          <div className="input-group-prepend"></div>
                          <input
                            type="password"
                            className="formInput reset-input form-control"
                            placeholder="الرقم السري"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div class="btns loginBtn mt-3">
                          <a href="">
                            <h4>انشاء</h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="sizingLogin Foot_Login"></div>
      </article>
    </>
  );
};

export default Login;
