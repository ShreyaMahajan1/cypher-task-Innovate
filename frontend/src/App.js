import './App.css';

import Userprofile from './Admin/Userprofile';
import Login from './Admin/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Master from './layout/Master';
import Home from './Admin/Home';
import UserLogin from './User/Userlogin';


import Div from './User/Div';
import UserMaster from './layout/UserMaster';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import Error from './Admin/Error';


import AddCategory from './Admin/AddCategory';

import ManageCategory from './Admin/ManageCategory';


import AddSubcategory from './Admin/AddSubcategory';
import ManageSubcategory from './Admin/ManageSubCategory';

import AddEmployee from './Admin/AddEmployee';
import ManageEmployee from './Admin/ManageEmployee';
import AddProject from './Admin/AddProject';
import ManageProject from './Admin/ManageProject';
import AddProjectTeam from './Admin/AddProjectTeam';
import ManageProjectTeam from './Admin/ManageProjectTeam';
import AddTask from './Admin/AddTask';
import ManageTask from './Admin/ManageTask';

import Faq from './User/Faq';
import Contact from './User/Contact';
import ProjectView from './Admin/ProjectView';

import SignOut from './Admin/Signout';

import TaskView from './Admin/TaskView';
import ViewProject from './User/Viewproject';
import ViewTask from './User/ViewTask';
import ViewProjectTeam from './User/TeamView';

import Profile from './User/Profile';
import TaskUpload from './User/UploadTask';
import DailyProgressPage from './User/UserCoinDisplay';

import CombinedComponent from './Admin/DailyProgress';
import UserCoinDisplay from './User/UserCoinDisplay';
import SubCategory from './Admin/SubcategoryAll';
import UpdateSubCategory from './Admin/UpdateSubcategory';
import UserHome from './User/UserHome';






function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Error />} />
          <Route path="/" element={<Master />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Userprofile" element={<Userprofile />} />
            <Route path="/AddCategory" element={<AddCategory />} />
            <Route path="/AddSubcategory" element={<AddSubcategory />} />
            <Route path="/ManageSubCategory" element={<ManageSubcategory />} />
            <Route path="/ManageCategory" element={<ManageCategory />} />
            <Route path="/AddEmployee" element={<AddEmployee />} />
            <Route path="/ManageEmployee" element={<ManageEmployee />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/ManageProject" element={<ManageProject />} />
            <Route path="/ViewProject" element={<ProjectView />} />
            <Route path="/AddProjectTeam" element={<AddProjectTeam />} />
            <Route path="/ManageProjectTeam" element={<ManageProjectTeam />} />
            <Route path="/AddTask" element={<AddTask />} />
            <Route path="/ManageTask" element={<ManageTask />} />
            <Route path="/TaskView" element={<TaskView />} />
            <Route path="/Subcategory" element={<SubCategory />} />
            <Route path="/UpdateSubcategory/:id" element={<UpdateSubCategory />} />
            <Route path="/DailyProgress" element={<CombinedComponent />} />
            <Route path="/Signout" element={<SignOut />} />

          </Route>
          <Route path="/User" element={<UserLogin />} /> (// type /user with localhost3000)
          <Route path="/User" element={<UserMaster />}>
            <Route path="/User/Div" element={<Div />} />
            <Route path="/User/Userprofile" element={<Profile />} />
            <Route path="/User/Dashboard" element={<UserHome />} />
            <Route path="/User/Faq" element={<Faq />} />
            <Route path="/User/Contact" element={<Contact />} />
            <Route path="/User/Viewproject" element={<ViewProject />} />
            <Route path="/User/ViewTask" element={<ViewTask />} />
            <Route path="/User/ViewProjectTeam" element={<ViewProjectTeam />} />
            <Route path="/User/DailyProgressPage" element={<DailyProgressPage />} />
            <Route path="/User/Signout" element={<SignOut />} />
            <Route path="/User/UploadTask" element={<TaskUpload />} />
            <Route path="/User/RewardSystem" element={<UserCoinDisplay />} />

          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={1998}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}

export default App;
