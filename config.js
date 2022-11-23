require("dotenv").config()

const{
    PORT,
    URL,
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,

} = process.env

module.exports = {
    port: PORT,
    url: URL,
    firebaseConfig : {
        apiKey: APIKEY,
        projectId: PROJECTID,
        authDomain: AUTHDOMAIN,
        storageBucket: STORAGEBUCKET,
        messagingSenderId: MESSAGINGSENDERID,
        appId: APPID,
    }
}