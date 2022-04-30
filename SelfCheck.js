import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import check1 from "./check_1.png";
import check2 from "./check_2.png";
import question1 from "./question1.png";
import question2 from "./question2.png";
import question3 from "./question3.png";
import question4 from "./question4.png";
import question5 from "./question5.png";
import question6 from "./question6.png";
import question2_1 from "./question2_1.png";
import question2_2 from "./question2_2.png";
import question2_3 from "./question2_3.png";
import Popup from "reactjs-popup";

import rgoo3 from './rgoo3.png'
import rgoo3Max from './rgoo3Max.png'
import "./self_check.css";
const SelfCheck = () => {
  const [showFirst, setshowFirst] = useState(true);
  const [showSecond, setshowSecond] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setshowFirst(!showFirst);
  };
  const handleShow = () => setShow(true);
  const handleShowSecond = () => setshowSecond(true);
  const handleCloseSecond = () => setshowSecond(false);
  return (
    <> 
    <Modal  show={showSecond} fullscreen={true} onHide={() => setshowSecond(false)}>
        <Modal.Header closeButton>
        <Modal.Title ><a className="rgoo3Cl" onClick={handleCloseSecond}><img closeButton id="v02" src={rgoo3} srcset={`${rgoo3} 1x , ${rgoo3Max} 2x`}/> رجوع</a></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <h4 className="modalBody centering">اذا استمرت هذه الاعراض لمده اسبوعان يجب التوجه الي الطبيب المناسب.</h4></Modal.Body>
      </Modal>

    <Modal
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered className="bg-modal" show={show} onHide={handleClose}>
    
    <Modal.Header >
      <Modal.Title ><a className="rgoo3Cl" onClick={handleClose}><img closeButton id="v02" src={rgoo3} srcset={`${rgoo3} 1x , ${rgoo3Max} 2x`}/> رجوع</a></Modal.Title>
    </Modal.Header>
    <Modal.Body >
      
    <h4 className="modalBody pt-5 pb-5">يجب ان تذهبي الي الطبيب في الحال</h4>
</Modal.Body>

  </Modal>
      <div className="selfCheck">
       
        {showFirst ? (
          <div className="container-fluid">
            <div className="row m-5">
              <div className="col-md-6">
                <div>
                  <img src={check1} alt="" />
                </div>
                <Button
                  className="btn btn-taly"
                  variant="none"
                  onClick={handleShow}
                >
               التالي
                </Button>
              </div>
              <div className="col-md-6">
                <div className="col-md-12 mb-4 mt-4">
                  <div className="card example-1 scrollbar-ripe-malinka">
                    <div className="card-body">
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>هل يوجد اختلاف شكلي في حجم الثديين؟</strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question1}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>هل يوجد بروز في الجلد او دمامل ؟</strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question2}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>
                            هل في تغير في لون الحلمه الي "الأحمر" ؟
                          </strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question3}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>
                            هل يوجد اختلاف عن المعتاد في شكل الحلمه؟
                          </strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question4}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>
                            هل يوجد افرازات دم او مائله الي اللون الاحمر؟
                          </strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question5}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>
                            هل يوجد تقشر او تجعد حاد في جلد الثدي؟
                          </strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="slideInLeft container-fluid">
            <div className="row m-5">
              <div className="col-md-6">
                <div>
                  <img src={check2} alt="" />
                </div>
                <Button
                  className="btn btn-taly"
                  variant="none"
                  onClick={handleShowSecond}
                >
                  نتيجة الفحص
                </Button>
              </div>
              <div className="col-md-6">
                <div className="col-md-12 mb-4 mt-4">
                  <div className="card example-1 scrollbar-ripe-malinka">
                    <div className="card-body">
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>هل يوجد تكتل في منطقة الابطين؟</strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question2_1}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>هل يوجد تكتل في الثدي "حولان الحلمه"؟</strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question2_2}
                          />
                        </div>
                      </div>
                      <div className="question-first">
                        <h4 className="question__head">
                          <strong>
                            "اضغتي علي الحلمه ثم شاهدي" هل يوجد أي افرزات؟
                          </strong>
                        </h4>
                        <div className="btncontainer mt-5">
                          <button className=" boleanQ btn btn-Quest">
                            نعم
                          </button>
                          <button className=" boleanQ btn btn-Quest">لا</button>
                        </div>
                        <div className="d-flex rerer">
                          <img
                            className="img-Question col-md-12"
                            src={question2_3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 foot"></div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="myModallklklk"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfCheck;
