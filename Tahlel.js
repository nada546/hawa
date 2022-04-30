import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./tahlel.css";

const Tahlel = () => {
  const [hiidenNatiga, sethiidenNatiga] = useState(false);
  const [tahlelResult, settahlelResult] = useState('خطأ في النتيجة');
  const [texture_mean, settexture_mean] = useState("");
  const [concavity_mean, setconcavity_mean] = useState("");
  const [area_se, setarea_se] = useState("");
  const [area_mean, setarea_mean] = useState("");
  const [texture_se, settexture_se] = useState("");
  const [concavity_se, setconcavity_se] = useState("");
  const [symmetry_se, setsymmetry_se] = useState("");
  const [smoothness_worst, setsmoothness_worst] = useState("");
  const [concavity_worst, setconcavity_worst] = useState("");
  const [fractal_dimension_worst, setfractal_dimension_worst] = useState("");
  const [symmetry_worst, setsymmetry_worst] = useState("");

  const tahlelValues = {
    "texture mean"            : texture_mean,
    "area_mean"               : area_mean,
    "concavity_mean"          : concavity_mean,
    "texture_se"              : texture_se,
    "area_se"                 : area_se,
    "concavity_se"            : concavity_se,
    "symmetry_se"             : symmetry_se,
    "smoothness_worst"        : smoothness_worst,
    "concavity_worst"         : concavity_worst,
    "symmetry_worst"          : symmetry_worst,
    "fractal_dimension_worst" : fractal_dimension_worst,

  
  };
  const showNatiga = () => {
    axios.post("https://predictionapidjango.herokuapp.com/api/",  tahlelValues , {
        header: {
         
          'Access-Control-Allow-Credentials': 'true',
            'Accept' : '*/*',
          'content-type': 'text/json',
          'crossorigin' :true,
         

         
          'Connection' : 'keep-alive',

        }})
      .then((res) => {
      
        settahlelResult(res)
      });

    sethiidenNatiga(!hiidenNatiga);
  };
  return (
    <>
      <div className="tahlel">
        <div className="tahlel bgBinky">
          <div className="container">
            <div className="row m-5">
              <div className="col-md-4">
                {texture_mean ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> texture_mean</span> : null}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="texture_mean"
                  value={texture_mean}
                  onChange={(e) => settexture_mean(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {concavity_mean ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> concavity_mean</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="concavity_mean"
                  value={concavity_mean}
                  onChange={(e) => setconcavity_mean(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {area_se ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> area_se</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="area_se"
                  value={area_se}
                  onChange={(e) => setarea_se(e.target.value)}
                />
              </div>
            </div>

            <div className="row m-5">
              <div className="col-md-4">
                {area_mean ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> area_mean</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="area_mean"
                  value={area_mean}
                  onChange={(e) => setarea_mean(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {texture_se ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> texture_se</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="texture_se"
                  value={texture_se}
                  onChange={(e) => settexture_se(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {concavity_se ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> concavity_se</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="concavity_se"
                  value={concavity_se}
                  onChange={(e) => setconcavity_se(e.target.value)}
                />
              </div>
            </div>
            <div className="row m-5">
              <div className="col-md-4">
                {symmetry_se ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> symmetry_se</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="symmetry_se"
                  value={symmetry_se}
                  onChange={(e) => setsymmetry_se(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {smoothness_worst ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> smoothness_worst</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="smoothness_worst"
                  value={smoothness_worst}
                  onChange={(e) => setsmoothness_worst(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                {concavity_worst ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> concavity_worst</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="concavity_worst"
                  value={concavity_worst}
                  onChange={(e) => setconcavity_worst(e.target.value)}
                />
              </div>
            </div>
            <div className="row m-5 ">
              <div className="col-md-6">
                {fractal_dimension_worst ? (
                  <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> fractal_dimension_worst</span>
                ) : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="fractal_dimension_worst"
                  value={fractal_dimension_worst}
                  onChange={(e) => setfractal_dimension_worst(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                {symmetry_worst ? <span> <FontAwesomeIcon className="icon_fa" icon={faCircleCheck} size={'2x'} /> symmetry_worst</span> : null}{" "}
                <input type="number" step='0.01'
                  className="btn btn-pink m-2"
                  placeholder="symmetry_worst"
                  value={symmetry_worst}
                  onChange={(e) => setsymmetry_worst(e.target.value)}
                />
              </div>
            </div>
            <div className="row m-5">
              <div className="col-md-12">
                <button onClick={showNatiga} className="btn btn-pink m-2">
                  
                  النتيجة
                </button>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-xs-12">
                {hiidenNatiga ? (
                  <>
                    <div className="natiga">
                      <h4 className="m-5">{tahlelResult.data}</h4>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 foot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tahlel;
