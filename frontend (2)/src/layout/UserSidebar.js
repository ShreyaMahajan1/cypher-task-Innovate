import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {

  const token=sessionStorage.getItem("token")
  const Emptoken=sessionStorage.getItem("Emptoken")
  const nav=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    toast.success("Logout successfully")
    if(!!Emptoken){
    setTimeout(() => {
      nav("/user");
    }, 1000);
  }
  else if(!!token) {
    setTimeout(() => {
      nav("/");
    }, 1000);
  }
}
  return (
   

<>
 
 
 
 {/* ======= Sidebar ======= */}
 <aside id="sidebar" className="sidebar">
 <ul className="sidebar-nav" id="sidebar-nav">
   <li className="nav-item">
    
     <Link className="nav-link collapsed" to={"/User/Dashboard"}>
       <i className="bi bi-grid" />
       <span>Dashboard</span>
     </Link>
   </li>
   {/* End Dashboard Nav */}
   
      
   <li className="nav-item">
     <Link
       className="nav-link collapsed"
       data-bs-target="#project-nav"
       data-bs-toggle="collapse"
       to={"projects"}
     >
       <i className="bi bi-graph-up" />
       <span>Project</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="project-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       
       <li>
         <Link to="/User/ViewProject">
           <i className="bi bi-circle" />
           <span>View Project</span>
         </Link>
       </li>
     </ul>
   </li>
   {/* End employee Nav */}
   <li className="nav-item">
     <Link
       className="nav-link collapsed"
       data-bs-target="#projectteam-nav"
       data-bs-toggle="collapse"
       to={"projects"}
     >
       <i className="bi bi-person-lines-fill" />
       <span>Project Team</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="projectteam-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       
       <li>
         <Link to="/User/ViewProjectTeam">
           <i className="bi bi-circle" />
           <span>View Project Team</span>
         </Link>
       </li>
     </ul>
   </li>

   
   <li className="nav-item">
     <Link
       className="nav-link collapsed" to={"/Task"}
       data-bs-target="#task-nav"
       data-bs-toggle="collapse"
       
     >
       <i className="bi bi-card-checklist" />
       <span>Task</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="task-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       
       <li>
         <Link to={"/User/ViewTask"}>
           <i className="bi bi-circle" />
           <span>View Task</span>
         </Link>
       </li> 
       <li>
         {/* <Link to={"/User/UploadTask"}>
           <i className="bi bi-circle" />
           <span>Upload Task</span>
          
         </Link>  */}
         </li>
     </ul>
   </li>
   <li className="nav-item">
     <Link
       className="nav-link collapsed" to={"/Dailyprogresspage"}
       data-bs-target="#Progress-nav"
       data-bs-toggle="collapse"
       
     >
       <i className="bi bi-calendar-check" />
       <span>Daily Progress</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="Progress-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       <li>
         <Link to={"/User/RewardSystem"}>
           <i className="bi bi-circle" />
           <span>View Progress</span>
          
         </Link>
       </li>
       </ul>
       </li>
   
   
   <li className="nav-item">
     <Link className="nav-link " to={"/User/Userprofile"}>
       <i className="bi bi-person" />
       <span>Profile</span>
     </Link>
   </li>
   {/* End Profile Page Nav */}
   {/* <li className="nav-item">
     <Link className="nav-link collapsed" to="/User/Faq">
       <i className="bi bi-question-circle" />
       <span>F.A.Q</span>
     </Link>
   </li> */}
   {/* End F.A.Q Page Nav */}
   {/* <li className="nav-item">
     <Link className="nav-link collapsed" to="/User/Contact">
       <i className="bi bi-envelope" />
       <span>Contact</span>
     </Link>
   </li> */}
   {/* End Contact Page Nav */}
   <li className="nav-item @@contact__active">
              {!token && !Emptoken?
              <Link className="nav-link" to="/">
                Login
              </Link>  :
                <Link className="nav-link" onClick={logout}>
                Logout
              </Link>
            }
             
            </li>





   
   {/* End Login Page Nav */}
   
 </ul>
</aside>
{/* End Sidebar*/}
</>
  );
}