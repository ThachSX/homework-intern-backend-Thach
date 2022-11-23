const firebase = require("../db")
const firestore = firebase.database.firestore()

const addStudentService = async (req) => {
    try{
        await firestore.collection("Students").doc().set(req)
        return true
    }
    catch(err){
        console.log(err)
        return false
    }
}

const getAllStudentService = async () => {
    try{
        const result = await firestore.collection("Students").get()
        const students = []

        result.forEach(doc =>{
            let data = {
                id: doc.id,
                class: doc.data().class,
                name: doc.data().name
            }
            students.push(data)
        })
        return{
            StudentsList: students,
            isSuccess: true
        } 
    }
    catch(err){
        console.log(err)
        return{
            StudentsList: undefined,
            isSuccess: false
        }
    }
}

const getStudentService = async (req) => {
    try {
        const doc = await firestore.collection("Students").doc(req).get()
        if (!doc.exists) {
            return {
                student: undefined,
                isSuccess: false
            }
        }
        const data = {
            id: doc.id,
            class: doc.data().class,
            name: doc.data().name
        }
        return {
            student: data,
            isSuccess: true
        }
    } catch (err) {
        console.log(err)
        return {
            student: undefined,
            isSuccess: false
        }
        
    }
}
const updateStudentService = async (id, req) => {
    try {
        await firestore.collection("Students").doc(id).update(req)
        return true 
    }
    catch(err){
        console.log(err)
        return false
    }    
}
const deleteStudent = async (id) => {
    try {
        await firestore.collection("Students").doc(id).delete()
        return true 
    }
    catch(err){
        console.log(err)
        return false
    }    
}
module.exports = {
    addStudentService,
    getAllStudentService,
    getStudentService,
    updateStudentService,
    deleteStudent
}