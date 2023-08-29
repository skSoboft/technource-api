Installation
To install this project, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the project dependencies.
Run npm start to start the development server.
Usage
To use this project, follow these steps:

Open your web browser and navigate to http://localhost:3000.
Use a tool like Postman or cURL to send HTTP requests to the server.
Use the following routes to interact with the application:
Authentication
POST /login: Logs in a user with the provided credentials.
Blog Posts
GET /blogPosts: Retrieves all blog posts.
POST /blogPosts: Creates a new blog post.
PUT /blogPosts/:id: Updates an existing blog post with the specified ID.
DELETE /blogPosts/:id: Deletes an existing blog post with the specified ID.
Comments
GET /blogPosts/:blogPostId/comments: Retrieves all comments for a specific blog post.
POST /blogPosts/:blogPostId/comments: Creates a new comment for a specific blog post.
DELETE /comments/:id: Deletes an existing comment with the specified ID.
Dependencies
This project uses the following dependencies:

Express
bcryptjs
jsonwebtoken
