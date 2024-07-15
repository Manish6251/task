const taskModel = require("../model/taskModel");

const createTask = async (req, res) => {
  const { p_t_title, p_t_description, p_t_status, p_t_created_by } = req.body;
  if ((!p_t_title, !p_t_description, !p_t_status, !p_t_created_by)) {
    return res.status(400).json({
      success: true,
      error: false,
      message: "All fields are required !!",
    });
  }

  if (
    typeof p_t_title !== "string" ||
    typeof p_t_description !== "string" ||
    typeof p_t_status !== "string" ||
    typeof p_t_created_by !== "string"
  ) {
    return res.status(401).json({
      success: true,
      error: false,
      message: "Invalid input parameters.",
    });
  }
  try {
    await taskModel.createTask(
      p_t_title,
      p_t_description,
      p_t_status,
      p_t_created_by
    );
    res.status(200).json({
      success: true,
      error: false,
      message: "Task created successfully",
    });
  } catch (err) {
    console.error("error executing query:" + err.stack);
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { p_t_id, p_t_title, p_t_description, p_t_status, p_t_updated_by } =
      req.body;
    if (
      typeof p_t_id !== "number" ||
      typeof p_t_title !== "string" ||
      typeof p_t_description !== "string" ||
      typeof p_t_status !== "string" ||
      typeof p_t_updated_by !== "string"
    ) {
      return res.status(401).json({
        success: true,
        error: false,
        message: "Invalid input parameters.",
      });
    }

    const results = await taskModel.updateTask(
      p_t_id,
      p_t_title,
      p_t_description,
      p_t_status,
      p_t_updated_by
    );
    if (results[0][0][0].message === "Not found or no changes were made.") {
      res.status(400).json({
        error: true,
        success: false,
        message: results[0][0][0].message,
      });
    } else {
      res.status(200).json({
        error: false,
        success: true,
        message: "Task details updated successfully.",
      });
    }
  } catch (error) {
    console.error("Error occurred while updating task details:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update task details.",
      error: error.message,
    });
  }
};

const getTaskDetailsById = async (req, res) => {
  const p_t_id = req.params.id;

  if (!p_t_id) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Task ID is required",
    });
  }

  try {
    const result = await taskModel.getTaskById(p_t_id);
    if (result[0][0][0].result === "Task details does not exist") {
      return res.status(401).json({
        success: false,
        error: true,
        message: result[0][0][0].result,
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      error: false,
      message: "Task details fetched successfully.",
      data: result[0][0],
    });
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong. Please try again.",
      data: null,
    });
  }
};

const getTaskDetails = async (req, res) => {
  const { p_pageSize, p_pageNumber } = req.body;

  if (!p_pageSize) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "All fields are required",
    });
  }

  try {
    const result = await taskModel.getTaskDetails(p_pageSize, p_pageNumber);
    if (result && result[0] && result[0][0]) {
      res.status(200).json({
        success: true,
        error: false,
        message: "Task detail fetched successfully.",
        data: result[0][0],
      });
    } else {
      res.status(404).json({
        success: false,
        error: true,
        message: "No task details found.",
        data: null,
      });
    }
  } catch (err) {
    console.error("Error executing query:", err.stack); 
    res.status(500).json({
      success: false,
      error: true,
      data: null,
      message: "Something went wrong. Please try again.",
    });
  }
};

const deleteTaskDetails = async (req, res) => {
  try {
    const { p_t_id } = req.body;

    if (!p_t_id) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Task details ID is required",
      });
    }

    const results = await taskModel.deleteTaskDetails(p_t_id);
    if (results && results[0] && results[0][0] && results[0][0][0]) {
      const deletionResult = results[0][0][0];
      if (deletionResult.message === " Not found or could not be deleted.") {
        res.status(404).json({
          success: false,
          error: true,
          message: deletionResult.message,
        });
      } else {
        res.status(200).json({
          success: true,
          error: false,
          message: "Task details deleted successfully",
        });
      }
    } else {
      throw new Error("Unexpected response format from deleteTaskDetails");
    }
  } catch (err) {
    console.error("Error deleting task details:", err);
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
    });
  }
};

module.exports = {
  createTask,
  updateTask,
  getTaskDetailsById,
  getTaskDetails,
  deleteTaskDetails,
};
