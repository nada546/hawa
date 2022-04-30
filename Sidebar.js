import logoutimg from "./imgs/logoutimg.png";
import logoutimgLrg from "./imgs/logoutimgLrg.png";
import helpimgLrg from "./imgs/helpimgLrg.png";
import helpimg from "./imgs/helpimg.png";
const Sidebar = () => {
    return ( <>
    <div className="sideBar">
            <div className="d-flex justify-content-between allign-items-center side-item">
            <div className="help">
              المساعدة
            </div>
            <img className="itm-mg" src={helpimg} srcSet={`${helpimg} 1x , ${helpimgLrg} 2x`}/>
            </div>
            <div className="d-flex justify-content-between align-items-center side-item">
            <div className="logout">
                تسجيل الخروج
                </div>
                <img className="itm-mg" src={logoutimg} srcSet={`${logoutimg} 1x , ${logoutimgLrg} 2x`}/>
            </div>
            
        </div>
    
    </> );
}
 
export default Sidebar;