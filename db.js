const admin = require("firebase-admin")
const config = require("./config")
const serviceAccount = require("./sanxay-backend-firebase-adminsdk-z0qcd-0b7fc04bd2.json")
const{ credential } = require("firebase-admin")
const firebaseConfig = config.firebaseConfig

const database = admin.initializeApp({
    firebaseConfig,
    credential: admin.credential.cert(serviceAccount)
})

module.exports = {
    database
}