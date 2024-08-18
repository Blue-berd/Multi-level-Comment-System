/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API endpoints for managing posts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *           example: "64bce5c57c60b7a5f7ef73ed"
 *         title:
 *           type: string
 *           description: The title of the post
 *           example: "My First Blog Post"
 *         content:
 *           type: string
 *           description: The content of the post
 *           example: "This is the content of my first blog post."
 *         authorId:
 *           type: string
 *           description: The ID of the post author
 *           example: "64bce5c57c60b7a5f7ef73ec"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the post
 *           example: "2024-08-17T14:15:22Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the post
 *           example: "2024-08-17T14:15:22Z"
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve a list of posts
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Retrieve a single post by ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to retrieve
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - authorId
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My New Blog Post"
 *               content:
 *                 type: string
 *                 example: "This is the content of my new blog post."
 *               authorId:
 *                 type: string
 *                 example: "64bce5c57c60b7a5f7ef73ec"
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update an existing post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Blog Post Title"
 *               content:
 *                 type: string
 *                 example: "This is the updated content of my blog post."
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 */
