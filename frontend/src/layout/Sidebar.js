import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {

  const token=sessionStorage.getItem("token")
  const nav=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    toast.success("Logout successfully")
    setTimeout(() => {
      nav("/");
    }, 1000);
  }
  return (
   

<>
 
 
 
 {/* ======= Sidebar ======= */}
 <aside id="sidebar" className="sidebar">
 <ul className="sidebar-nav" id="sidebar-nav">
   <li className="nav-item">
    
     <Link className="nav-link collapsed" to={"/Home"}>
       <i className="bi bi-grid" />
       <span>Dashboard</span>
     </Link>
   </li>
   {/* End Dashboard Nav */}
   
       <li className="nav-item">
     <Link
       className="nav-link collapsed" to={"/Category"}
       data-bs-target="#category-nav"
       data-bs-toggle="collapse"
       
     >
       <i className="bi bi-journal-text" />
       <span>Category</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="category-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       <li>
         <Link to={"/AddCategory"}>
           <i className="bi bi-circle" />
           <span>Add Category</span>
          
         </Link>
       </li>
       <li>
         <Link to={"/ManageCategory"}>
           <i className="bi bi-circle" />
           <span>Manage Category</span>
         </Link>
       </li>
       
       
     </ul>
   </li>
   {/* End Category Nav */}


   
   <li className="nav-item">
     <Link
       className="nav-link collapsed"
       data-bs-target="#forms-nav"
       data-bs-toggle="collapse"
       to={"/subcategory"}
     >
       <i className="bi bi-folder" />
       <span>SubCategory</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="forms-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       <li>
         <Link to={"/AddSubcategory"}>
           <i className="bi bi-circle" />
           <span>Add SubCategory</span>
         </Link>
       </li>
       <li>
         <Link to={"/ManageSubCategory"}>
           <i className="bi bi-circle" />
           <span>Manage SubCategory </span>
         </Link>
       </li>
       
       
     </ul>
   </li>
   {/* End subcategory Nav */}
   <li className="nav-item">
     <Link
       className="nav-link collapsed"
       data-bs-target="#tables-nav"
       data-bs-toggle="collapse"
       to={"employees"}
     >
       <i className="bi bi-person-badge" />
       <span>Employee</span>
       <i className="bi bi-chevron-down ms-auto" />
     </Link>
     <ul
       id="tables-nav"
       className="nav-content collapse "
       data-bs-parent="#sidebar-nav"
     >
       <li>
         <Link to="/AddEmployee">
           <i className="bi bi-circle" />
           <span>Add Employee</span>
         </Link>
       </li>
       <li>
         <Link to="/ManageEmployee">
           <i className="bi bi-circle" />
           <span>Manage Employee</span>
         </Link>
       </li>
     </ul>
   </li>
   {/* End employee Nav */}
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
         <Link to="/AddProject">
           <i className="bi bi-circle" />
           <span>Add Project</span>
         </Link>
       </li>
       <li>
         <Link to="/ManageProject">
           <i className="bi bi-circle" />
           <span>Manage Project</span>
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
         <Link to="/AddProjectTeam">
           <i className="bi bi-circle" />
           <span>Add Project Team</span>
         </Link>
       </li>
       <li>
         <Link to="/ManageProjectTeam">
           <i className="bi bi-circle" />
           <span>Manage Project Team</span>
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
         <Link to={"/AddTask"}>
           <i className="bi bi-circle" />
           <span>Add Task</span>
         </Link>
       </li> 
       <li>
         <Link to={"/ManageTask"}>
           <i className="bi bi-circle" />
           <span>Manage Task</span>
         </Link>
       </li>  
     </ul>
   </li>
   <li className="nav-item">
     <Link
       className="nav-link collapsed" to={"/progress"}
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
         <Link to={"/DailyProgress"}>
           <i className="bi bi-circle" />
           <span>View Progress</span>
          
         </Link>
       </li>
       </ul>
       </li>
   
   
   <li className="nav-item">
     <Link className="nav-link " to={"/Userprofile"}>
       <i className="bi bi-person" />
       <span>Profile</span>
     </Link>
   </li>
   
   {/* End Contact Page Nav */}
   <li className="nav-item @@contact__active">
              {!token?
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