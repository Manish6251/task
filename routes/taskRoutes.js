const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

router.post("/createTask", taskController.createTask);
router.put("/updateTask", taskController.updateTask);
router.get("/getTaskDetailsById/:id", taskController.getTaskDetailsById);
router.post("/getTaskDetails", taskController.getTaskDetails);
router.delete("/deleteTaskDetails", taskController.deleteTaskDetails);

/**
 * @swagger
 * /api/v1/createTask:
 *   post:
 *     tags:
 *       - taskController
 *     summary: Used to insert products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               p_t_title:
 *                 type: string
 *               p_t_description:
 *                 type: string
 *               p_t_status:
 *                 type: string
 *               p_t_created_by:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Data Inserted Successfully
 *       '400':
 *         description: Bad request - Missing or invalid parameters
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/updateTask:
 *   put:
 *     tags:
 *       - taskController
 *     summary: Used to update task details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               p_t_id:
 *                 type: integer
 *                 description: The ID of the task to update
 *               p_t_title:
 *                 type: string
 *                 description: The updated title of the task
 *               p_t_description:
 *                 type: string
 *                 description: The updated description of the task
 *               p_t_status:
 *                 type: string
 *                 description: The updated status of the task
 *               p_t_updated_by:
 *                 type: string
 *                 description: The updated creator of the task
 *     responses:
 *       '200':
 *         description: Task updated successfully
 *       '400':
 *         description: Bad request - Missing or invalid parameters
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/getTaskDetailsById/{p_t_id}:
 *   get:
 *     tags:
 *       - taskController
 *     summary: Used to get one product by Id.
 *     parameters:
 *       - in: path
 *         name: p_t_id
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Task details fetched successfully
 *       '400':
 *         description: Bad request - Missing or invalid parameters
 *       '500':
 *         description: Internal server error.
 */


/**
 * @swagger
 * /api/v1/getTaskDetails:
 *   post:
 *     tags:
 *       - taskController
 *     summary: Used to get All details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               p_pageSize:
 *                 type: integer
 *                 description: page Size of the task to get details.
 *               p_pageNumber:
 *                 type: integer
 *                 description: page Number of the task to get details.
 *     responses:
 *       '200':
 *         description: Task details fetched successfully
 *       '400':
 *         description: Bad request - Missing or invalid parameters
 *       '500':
 *         description: Internal server error.
 */



/**
 * @swagger
 * /api/v1/deleteTaskDetails:
 *   delete:
 *     tags:
 *       - taskController
 *     summary: Delete a task by ID.
 *     description: Deletes a single task based on the provided ID in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               p_t_id:
 *                 type: integer
 *                 description: Numeric ID of the task to delete.
 *     responses:
 *       '200':
 *         description: Task Details deleted successfully.
 *       '400':
 *         description: Invalid request or Task details not found.
 *       '500':
 *         description: Internal server error.
 */


module.exports = router;
