const mysqlConnection = require('../config/dbConfig');
const {} = require('../controller/userController');

const registerUser = async (p_u_username,p_u_password,p_u_email) => {
        const sql = "call insertUserDetails(?,?,?)";
        const result = mysqlConnection.query(sql, [p_u_username,p_u_password,p_u_email]);
        //console.log(result,"result")
        return result;
    };



const userLogin = async (p_u_email,p_u_password) => {
    const sql = "call GetUserDetailsByEmailAndPassword(?,?)";
    const result = mysqlConnection.query(sql, [p_u_email,p_u_password]);
    //console.log(result,"result")
    return result;
};

module.exports = {
    registerUser,
    userLogin
}