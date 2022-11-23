const firebase = require("../db")
const firestore = firebase.database.firestore()
const studentService = require("../services/student-service")

const addStudent = async (req, res) => {
    try{
        const data = req.body
        let result = await studentService.addStudentService(data)
        if(!result){
            return res.status(500).send("error lol GG")
        }
        return res.status(200).send("Data added to database")
    }
    catch(err){
        console.log(err)
        return res.status(500).send("GG")
    }
}
const getAllStudent = async(req, res) =>{
    try{
        const result = await studentService.getAllStudentService()
        if(!result.isSuccess){
            return res.send("not success")
        }
        return res.status(200).send(result.StudentsList)
    }
    catch(err){
        console.log(err)
        return res.status(500).send("controller err")
    }
}
const getstudent = async (req, res) => {
    try{
        const id = req.params.id
        const result = await studentService.getStudentService(id)
        if(!result.isSuccess){
            return res.status(500).send("service err")
        }
        res.status(200).send(result.student)
    }    
    catch(err){
    console.log(err)
    res.status(500).send("controller err")
    }
}

const updateStudent = async (req, res) => {
    try{
        const id = req.params.id
        const data = {
            name: req.body.name,
            class: req.body.class
        }
        const result = await studentService.updateStudentService(id, data)
        if(!result){
            return res.status(500).send("service err")
        } 
        return res.status(200).send({
            message: `${req.body.name} is updated`,
            result: data
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send("controller err")
    }
}

const deleteStudent = async (req, res) => {
    try{
        const id = req.params.id
        const result = await studentService.deleteStudent(id)
        if(!result){
            return res.status(500).send("service err")
        }
        return res.status(200).send({
            message: `${id}is delete`
        })
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getAllStudent,
    getstudent,
    updateStudent,
    deleteStudent
}