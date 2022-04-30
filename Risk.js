import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './risk.css';
const Risk = () => {
    const [hiidenNatiga2, sethiidenNatiga2] = useState(false);
    const [riskResult, setriskResult] = useState('خطأ في النتيجة');
    const [age, setAge] = useState("");
    const [menarch_age, setmenarch_age] = useState("");
    const [live_birth_age, setlive_birth_age] = useState("");
    const [ever_had_biopsy, setever_had_biopsy] = useState("");
    const [num_biopsy, setnum_biopsy] = useState("");
    const [first_deg_relatives, setfirst_deg_relatives] = useState("");
    const [ihyp, setihyp] = useState("");
    const [race, setrace] = useState("");
    
    const ageAndmenarch = ()=>{
        setAge(37)
        setmenarch_age(1)
    }
    const ageAndmenarch2 = ()=>{
        setAge(30)
        setmenarch_age(2)
    }


    

    const riskValues = {
        "age"                 : age,
        "menarch_age"         : menarch_age,
        "live_birth_age"      : live_birth_age,
        "ever_had_biopsy"     : ever_had_biopsy,
        "num_biopsy"          : num_biopsy,
        "first_deg_relatives" : first_deg_relatives,
        "ihyp"                : ihyp,
        "race"                : race

        // "age":30,
        // "menarch_age":2,
        // "live_birth_age":3,
        // "ever_had_biopsy":1,
        // "num_biopsy":2,
        // "first_deg_relatives":2,
        // "ihyp":1,
        // "race":1

    };
    
       const showResults = () => {
           axios.post("https://riskcalculator-app.herokuapp.com/api/v1.0/gail",  riskValues , {
               headers: {
              
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
             
               }})
             .then((res) => {
                 setriskResult(res);
                 sethiidenNatiga2(!hiidenNatiga2);
             });
       }

    return (
        <>
            <div className="tahlel">
                <div className=" container-fluid">
                    <div className="row m-5">
                        <div className="col-md-12 ">
                            <div className="card example-2 scrollbar-ripe-malinka">
                                <div className="risk card-body">
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>ما هو سن المرأة؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={ageAndmenarch2} className=" boleanQ btn btn-Questyy">اقل من 35</button>
                                            <button onClick={ageAndmenarch} className=" boleanQ btn btn-Questyy">اكبر من 35</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>كم كان عمر المرأة وقت ولادت الطفل الاول؟</strong></h4>
                                        <div className="btncontainer22 mt-2">
                                            <button onClick={()=>setlive_birth_age(6)} className=" boleanQ btn btn-Questyy">30 أو اكثر</button>
                                            <button onClick={()=>setlive_birth_age(5)} className=" boleanQ btn btn-Questyy">من 25 ال 29</button>
                                            <button onClick={()=>setlive_birth_age(4)} className=" boleanQ btn btn-Questyy">من 20 الي 24</button>
                                            <button onClick={()=>setlive_birth_age(3)} className=" boleanQ btn btn-Questyy">أقل من 20</button>
                                            <button onClick={()=>setlive_birth_age(2)} className=" boleanQ btn btn-Questyy">لم ألد </button>
                                            <button onClick={()=>setlive_birth_age(1)} className=" boleanQ btn btn-Questyy">لا أعلم</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>هل سبق للمرأة أن خضعت لأخذ عينة منالثدي؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={()=>setever_had_biopsy(3)} className=" boleanQ btn btn-Questyy">نعم</button>
                                            <button onClick={()=>setever_had_biopsy(2)} className=" boleanQ btn btn-Questyy">لا</button>
                                            <button onClick={()=>setever_had_biopsy(1)} className=" boleanQ btn btn-Questyy">لا أعلم</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>كم عدد عينات الثدي (الإيجابية أو السلبية)التي خضعت لها المرأة؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={()=>setnum_biopsy(4)} className=" boleanQ btn btn-Questyy">أكثر من 1</button>
                                            <button onClick={()=>setnum_biopsy(3)} className=" boleanQ btn btn-Questyy">1</button>
                                            <button onClick={()=>setnum_biopsy(2)} className=" boleanQ btn btn-Questyy">0</button>
                                            <button onClick={()=>setnum_biopsy(1)} className=" boleanQ btn btn-Questyy">لا أعلم</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>هل خضعت المرأة لخزعة ثدي واحدة على الأقل مصحوبة بتضخم
                                            غير نمطي؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={()=>setfirst_deg_relatives(3)} className=" boleanQ btn btn-Questyy">نعم</button>
                                            <button onClick={()=>setfirst_deg_relatives(2)} className=" boleanQ btn btn-Questyy">لا</button>
                                            <button onClick={()=>setfirst_deg_relatives(1)} className=" boleanQ btn btn-Questyy">لا أعلم</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>، -كم عدد أقارب المرأة من الدرجة الأولى - أم وأخوات ، وبنات
                                            مصابات بسرطان الثدي؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={()=>setihyp(4)} className=" boleanQ btn btn-Questyy">أكثر من 1</button>
                                            <button onClick={()=>setihyp(3)} className=" boleanQ btn btn-Questyy">1</button>
                                            <button onClick={()=>setihyp(2)} className=" boleanQ btn btn-Questyy">0</button>
                                            <button onClick={()=>setihyp(1)} className=" boleanQ btn btn-Questyy">لا أعلم</button>
                                        </div>
                                    </div>
                                    <div className="question-first-risk">
                                        <h4 className="question__head"><strong>ما هو جنس / عرق المرأة؟</strong></h4>
                                        <div className="btncontainer22 mt-2 ml-2">
                                            <button onClick={()=>setrace(5)} className=" boleanQ btn btn-Questyy">هندي</button>
                                            <button onClick={()=>setrace(4)} className=" boleanQ btn btn-Questyy">آسيوي</button>
                                            <button onClick={()=>setrace(3)} className=" boleanQ btn btn-Questyy">أصول أسبانية</button>
                                            <button onClick={()=>setrace(2)} className=" boleanQ btn btn-Questyy">أفريقي</button>
                                            <button onClick={()=>setrace(1)} className=" boleanQ btn btn-Questyy">أبيض</button>
                                        </div>
                                    </div>
                                    <button onClick={showResults} className=" boleanQ btn btn-taly">نسبة الأصابة</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {hiidenNatiga2 ? (
                  <>
                    <div className="natiga2 mb-5">
                      <h4 className="m-5"><span>النسبة المطلقة للخطر لمدة خمس سنوات :</span> {riskResult.data.results.five_year_abs}</h4>
                      <h4 className="m-5"><span>متوسط الخطر لمدة خمس سنوات :</span> {riskResult.data.results.five_year_ave}</h4>
                      <h4 className="m-5"><span>النسبة المطلقة للخطر مدي الحياه :</span> {riskResult.data.results.lifetime_abs}</h4>
                      <h4 className="m-5"><span>متوسط الخطر مدي الحياه :</span> {riskResult.data.results.lifetime_ave}</h4>
                    </div>
                  </>
                ) : null}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 foot">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Risk;







