const mysqlConnection = require("../config/dbConfig");

const createTask = async (
  p_t_title,
  p_t_description,
  p_t_status,
  p_t_created_by
) => {
  const sql = "call InsertTaskDetails(?,?,?,?)";
  const result = mysqlConnection.query(sql, [
    p_t_title,
    p_t_description,
    p_t_status,
    p_t_created_by
  ]);
  return result;
};

const updateTask = async (
  p_t_id,
  p_t_title,
  p_t_description,
  p_t_status,
  p_t_updated_by,
) => {
  const sql = "call UpdateTaskDetails(?, ?, ?, ?,?)";
  const result = mysqlConnection.query(sql, [
    p_t_id,
    p_t_title,
    p_t_description,
    p_t_status,
    p_t_updated_by,
  ]);
  return result;
};

const getTaskById = async (p_t_id) => {
  const sql = "call GetTaskDetailsById(?)";
  const result = mysqlConnection.query(sql, [p_t_id]);
  return result;
};

const deleteTaskDetails = async (p_t_id) => {
  const sql = "call DeleteTask(?)";
  const result = mysqlConnection.query(sql, [p_t_id]);
  return result;
};

const getTaskDetails = async (p_pageSize, p_pageNumber) => {
  const sql = "call GetAllTaskDetails(?,?)";
  const result = mysqlConnection.query(sql, [p_pageSize, p_pageNumber]);
  return result;
};

module.exports = {
  createTask,
  updateTask,
  getTaskById,
  getTaskDetails,
  deleteTaskDetails,
};
