const express = require('express');
const router = express.Router();
const {userRegistration,userLogin} = require('../controller/userController');
router.post('/register', userRegistration);
router.post('/userLogin', userLogin);

/**
* @swagger
* /api/v1/register:
*   post:
*     tags:
*       - userController
*     summary: Used to insert products
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               p_u_username:
*                 type: string
*               p_u_password:
*                 type: string
*               p_u_email:
*                 type: string
*     responses:
*       '200':
*         description: Data Inserted Successfully.
*       '400':
*         description: Bad request - Missing or invalid parameters
*/
 
/**
* @swagger
* /api/v1/userLogin:
*   post:
*     tags:
*       - userController
*     summary: User login endpoint
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               p_u_email:
*                 type: string
*               p_u_password:
*                 type: string
*     responses:
*       '200':
*         description: User logged in successfully
*       '400':
*         description: Bad request - Missing or invalid parameters
*/


module.exports = router;