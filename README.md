# StudentAssignment
Project Overview
This project is a web application built using MongoDB, Spring Boot, and ReactJS. It captures student information through a user-friendly interface and stores it in a MongoDB database. The application provides validation on both the frontend (ReactJS) and backend (Spring Boot) to ensure the input data is accurate. Upon successful validation, a unique admission number is generated for each student. The backend responds with all the student data, which is displayed in a sorted table on the right-hand side of the form.

Technologies Used:=

The project utilizes the following technologies:

MongoDB: A NoSQL database used for storing student information.

Spring Boot: A Java-based framework used for building the backend RESTful API.

ReactJS: A JavaScript library used for building the frontend user interface.

Node.js: A JavaScript runtime environment used for executing JavaScript code on the server-side.

npm: A package manager for Node.js used to manage and install project dependencies.

Eclipse IDE: An integrated development environment used for developing the backend code.

Visual Studio Code (VS Code): A source code editor used for developing the frontend code.

Prerequisites:-

1.Make sure you have MongoDB installed on your system. You can download it from the official MongoDB website (https://www.mongodb.com/).

2.Install Node.js and npm (Node Package Manager) by visiting the official Node.js website (https://nodejs.org/).

3.Ensure that you have Eclipse IDE installed for running the backend code. You can download Eclipse from the Eclipse Foundation website (https://www.eclipse.org/).

4.Install Visual Studio Code (VS Code) for working with the frontend code. You can download VS Code from the official Microsoft website (https://code.visualstudio.com/).

Backend Setup:-

1.Clone the GitHub repository to your local machine.

2.Open your preferred IDE (such as Eclipse, IntelliJ IDEA, or any other).

3.Import the backend project into your IDE.

4.Run the main class "StudentformApplication.java" which is inside the package "com.mozanta.studentform" inside source package "src/main/java"

5.Start the MongoDB service and ensure it is running.

6.By default, MongoDB listens on port 27017. Make sure your MongoDB instance is running on this port.

Frontend Setup:-

1.Open Visual Studio Code (or any preferred text editor).

2.Open the frontend project directory using VS Code's file explorer.

3.Open a terminal within VS Code.

4.Run the command "npm install" to install the required dependencies.

5.Execute the command "npm start" to start the React development server.

Accessing the Application:-

1.Open a web browser and visit http://localhost:3000 to access the React frontend.

2.You should see the student information capture form on the page.

3.Fill in the required fields with appropriate values.

4.Click the Submit button to validate the input and store the data in the MongoDB database.
The backend will respond with all the student data, which will be displayed in a table on the right-hand side of the form.

