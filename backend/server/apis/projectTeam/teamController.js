const team = require('./teamModel')

const addTeam = async (req, res) => {
    let validation = ""
    if (!req.body.projectId) {
        validation += "projectId is required "
    }
    if (!req.body.employees) {
        validation += "employees name are required "
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error : " + validation
        })
    }
    else {
        let prevTeam = await team.findOne({ projectId: req.body.projectId, status: true })
        if (prevTeam == null) {
            let totalTeam = await team.countDocuments()
            let obj = new team()
            obj.autoId = totalTeam + 1
            obj.projectId = req.body.projectId
            obj.employees = req.body.employees
            if (typeof req.body.employees == 'string') {
                obj.employees = JSON.parse(req.body.employees);
            }
            else {
                obj.employees = req.body.employees;
            }
            obj.save()
                .then((result) => {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Team added ",
                        data: result
                    })
                })
                .catch((err) => {
                    res.send({
                        success: false,
                        status: 500,
                        message: err.message
                    })
                })
        } else {
            res.send({
                success: false,
                status: 400,
                message: "This Project Already has a team"
            })
        }
    }
}

//find all team
const allTeams = (req, res) => {
    req.body.status = true
    team.find(req.body).populate('projectId').populate('employees')
        .sort({ createdAt: -1 }).exec()
        .then((result) => {
            res.send({
                success: true,
                status: 200,
                message: "All project-teams are loaded",
                data: result
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}

//find single team
const singleTeam = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error: " + validation
        })
    }
    else {
        team.findOne({ _id: req.body._id }).populate('projectId').exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Team does not exist"
                    })
                }
                else {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Team loaded",
                        data: result
                    })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

//update team
const updateTeam = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error: " + validation
        })
    }
    else {
        team.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Team does not exist"
                    })
                }
                else {
                    if (!!req.body.projectId) {
                        result.projectId = req.body.projectId
                    }
                    if (!!req.body.employees) {
                        if (typeof req.body.employees == 'string') {
                            result.employees = JSON.parse(req.body.employees);
                        }
                        else {
                            result.employees = req.body.employees;
                        }
                    }
                    result.save()
                        .then((updatedTeam) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Team Updated",
                                data: updatedTeam
                            })
                        })
                        .catch((err) => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}

//delete team
const deleteTeam = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation += "project-team _id is required"
    }
    if (!!validation) {
        res.send({
            success: false,
            status: 400,
            message: "Validation Error: " + validation
        })
    }
    else {
        team.findOne({ _id: req.body._id }).exec()
            .then((result) => {
                if (result == null) {
                    res.send({
                        success: false,
                        status: 404,
                        message: "Team does not exist"
                    })
                }
                else {
                    result.status = false
                    result.save()
                        .then((deletedTeam) => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Team Deleted",
                                data: deletedTeam
                            })
                        })
                        .catch((err) => {
                            res.send({
                                success: false,
                                status: 500,
                                message: err.message
                            })
                        })
                }
            })
            .catch((err) => {
                res.send({
                    success: false,
                    status: 500,
                    message: err.message
                })
            })
    }
}



module.exports = { addTeam, allTeams, singleTeam, updateTeam, deleteTeam }