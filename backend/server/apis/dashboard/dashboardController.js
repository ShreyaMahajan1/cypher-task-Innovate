const users = require('../user/userModel')
const projects = require('../project/projectModel')
const projectteams = require('../projectTeam/teamModel')
const tasks = require('../task/taskModel')
const employees = require('../employee/employeeModel')

const adminDashboard = async (req,res)=>{
    let totalUsers = await users.find({userType:2, status: true})
    let totalprojects = await projects.countDocuments({status:true})
    let totaltasks = await tasks.countDocuments()
    res.send({
        success : true,
        status : 200,
        message : " Admin Dash-board",
        totalUsers : totalUsers.length,
        totalprojects : totalprojects,
        totaltasks : totaltasks
    })
}

const empDashboard = async (req,res)=>{
    if(!!req.body._id){
        let emp = await employees.findOne({_id:req.body._id})
        console.log(emp);
        let empId=emp._id
        let totalUsers = await users.find({userType:2, status: true})
        let totalprojects = await projects.countDocuments()
        let totalprojectteams = await projectteams.find({employees:empId})
        let totalpendingtasks = await tasks.find({employeeId:empId, progress:"Pending"})
        let totalworkingtasks = await tasks.find({employeeId:empId, progress:"Working"})
        let totalcompletetasks = await tasks.find({employeeId:empId, progress:"Complete"})
        res.send({
            success : true,
            status : 200,
            message : " Emp Dash-board",
            totalUsers : totalUsers.length,
            totalprojects : totalprojects,
            totalprojectteams : totalprojectteams.length,
            totalpendingtasks : totalpendingtasks.length,
            totalworkingtasks : totalworkingtasks.length,
            totalcompletetasks : totalcompletetasks.length,
            coins:emp.coins
        })
    }
    else{
        res.send({
            success:false,
            status:400,
            message:"_id is required"
        })
    }
        
}


module.exports = {adminDashboard, empDashboard}