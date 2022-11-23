const express = require("express")
const studentController = require("../controllers/student-controller")

const router = express.Router()

router.post("/addstudent", studentController.addStudent)
router.get("/getallstudent", studentController.getAllStudent)
router.get("/getstudent/:id", studentController.getstudent)
router.put("/updatestudent/:id", studentController.updateStudent)
router.delete("/deletestudent/:id", studentController.deleteStudent)
module.exports = {
    router  
}