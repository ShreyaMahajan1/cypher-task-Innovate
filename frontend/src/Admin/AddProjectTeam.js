import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from './ApiServices';
import { ClipLoader } from 'react-spinners';

const AddProjectTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [redirectToManageProjects, setRedirectToManageProjects] = useState(false);
  const [availableEmployees, setAvailableEmployees] = useState([]);
  const [project, setProject] = useState([]);
  const [selectedproject, setSelectedProject] = useState([]);
  const [load,setload]=useState(false);
  const [allEmployees,setAllEmployees]=useState([])
  let obj = {
    margin:"0 auto",
    display:"block"
  }

  useEffect(() => {
    var token = sessionStorage.getItem("token")
    ApiServices.getEmployee(null, { headers: { authorization: token } })
      .then(res => {
        console.log(res.data.data);
        setAvailableEmployees(res.data.data);
        setAllEmployees(res.data.data)
      })
      .catch(error => {
        console.error('Error fetching available employees:', error);
        toast.error('Error fetching available employees. Please try again.');
      });
    
  }, []);


  useEffect(() => {
    var token = sessionStorage.getItem("token")
    ApiServices.getAllprojects(null,{ headers: { authorization: token } })
    .then(res => {
      console.log("projects", res.data.data);
      setProject(res.data.data);
    })
    .catch(error => {
      console.error('Error fetching available projects:', error);
      toast.error('Please try again.');
    });
    
  }, []);

  const getMemberName = (id)=>{
    let member = allEmployees.filter((x)=>{return x._id == id})
    return member[0]?.name
  }
  const handleAddTeamMember = () => {
   
 
    // if(selectedMember._id == teamMembers._id){
      //   console.log();
    // }
    // Add the selected member to the team members list
    setTeamMembers([...teamMembers, selectedMember]);
    let array=availableEmployees.filter((el)=>{
      if(el._id!=selectedMember){
        return el
      }
    })
    setAvailableEmployees(array)
    // Clear the selected member
    console.log(teamMembers);

    setSelectedMember('');
  };

  const handleRemoveTeamMember = (index) => {
    const updatedMembers = [...teamMembers];
    let data=updatedMembers.splice(index, 1);
    // console.log(data[0]);
    // console.log(availableEmployees);
    let employeeData=allEmployees.filter((el,index)=>{
      if(el._id==data[0]){
        return el
      }
    })
    console.log(employeeData);
    setAvailableEmployees([...availableEmployees, ...employeeData])
    
    setTeamMembers(updatedMembers);
  };

  const handleAddProjectTeam = () => {
    if ( teamMembers.length === 0  ) {
      toast.error('Please provide a team name and at least one team member.');
    }
    else{
      let data ={
        projectId:selectedproject,
        employees:teamMembers
      }
      ApiServices.AddProjectTeam(data,{ headers: { authorization: sessionStorage.getItem("token") } })
      .then((res)=>{
            console.log("project team",res);
            if(res.data.success == true){
              toast.success(res.data.message);
              setload(true);
              setTimeout(() => {
                window.location.reload();
              },2000);
            }
            else{
              toast.error(res.data.message);
            }
      })
      .catch((err)=>{
        toast.error("Something went wrong");
      })
      setload(false);
      return;
   
    }
    // Set the flag to redirect to ManageProjects page
    // setRedirectToManageProjects(true);
  };

  if (redirectToManageProjects) {
    return (
      <Navigate
        to={{
          pathname: '/ManageProjectTeam',
          state: {
            team: {
              name: teamName,
              members: teamMembers,
            },
          },
        }}
      />
    );
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Add Project Team</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Project</a>
            </li>
            <li className="breadcrumb-item active">Add Project Team</li>
          </ol>
        </nav>
      </div>
      <ToastContainer/>
      <ClipLoader loading={load}  size={100} cssOverride={obj}/>
      <div className={load && "display-screen"}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="add-project-team-form bg-light rounded p-4 shadow">
              <h3 className="mb-4">Add Project Team</h3>
              <div className="mb-3">
                <select
                  className="form-select"
                  value={selectedproject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                >
                  <option value="" disabled selected>Select a Project</option>
                  {project.map((proj, index) => (
                    <option key={index} value={proj._id}>
                      {proj.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  value={selectedMember}
                  onChange={(e) => setSelectedMember(e.target.value)}
                >
                  <option value="" disabled selected>Select a member</option>
                  {availableEmployees.map((employee, index) => (
                    <option key={index} value={employee._id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn btn-primary mb-3 w-100" onClick={handleAddTeamMember}>
                Add Member
              </button>
              <div className="mb-3">
                <h5>Team Members</h5>
                <ul className="list-group">
                  {teamMembers.map((member, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {getMemberName(member)}
                      <button className="btn btn-primary btn-sm w-50" onClick={() => handleRemoveTeamMember(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary btn-block w-100" onClick={handleAddProjectTeam}>
                Add Project Team
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default AddProjectTeam;
