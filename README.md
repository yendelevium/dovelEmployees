# Employee Management Dashboard

## Project Overview
Implemented as part of the Full Stack Development Task List.
This web-page provides a simple interface to view,add,update and delete employees from your company

### Tech Stack 
I have used the following tools/languages to create this project
```
- Node.js (Express.js)
- React
- MongoDB
- Chakra UI
```


## Installation and Setup

### Prerequisites
The following tools/technologies must be installed in your pc to ensure a smooth experience for installation and deployment of this project 

- npm
- Node.js
- MongoDB

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/yendelevium/dovelEmployees.git
```

2. cd into the `dovelEmployees` repository
```bash
cd dovelEmployees
``` 

3. Create a .env file at the root of the project, and add a PORT variable and set it, Eg
```bash
PORT=8080
```

4. Run the build command to install all the dependencies
```bash
npm run build
```

5. Run the project
```bash
npm run start
```
If all the steps were done correctly, your terminal will produce an ouput similar to
```bash
Listening on http://localhost:PORT
Connection Open
```
The project is now running on `http://localhost:PORT`
You can either type the URL in you preferred web-browser, or `Ctrl` + `Click` the URL in the terminal after running this instruction

## Usage

Navigate to `http://localhost:PORT`. You can perform the following actions using the UI and/or API.

- View all employees
- Add a new Employee
- Show detailed information about an employee
- Edit employee details
- Delete employee(s)

In the UI, upon loading the web-page, the employee details will be shown in a tabular view. You can add new employees by clicking the `Add Employee` button in the navbar or the homepage

To add an employee, simply fill out the form and click the `Add Employee` button ON THE FORM(not the navbar) to add the employee to the database

You will be redirected to the homepage where you will be notified if the operation was successful(via an alert) and you will see that the new employee was added to the end of the table

You can view more details about the employee by clicking the `More Details` button in the UI.

To edit/delete the employee, you can click the respective buttons either on the `Home` page or the `Details` page, both having the same functionality

To edit, change the details in the form and hit the `Update Employee` button, to update the details

Clicking the `Delete` button will instantly delete that employee from the database, no questions asked.

At any point of time, you can go back to `Home` via either clicking the `Home` button in the navbar, or the `Back to Home` button in the form/details page

## API Reference

#### Get all employees
```http
  GET /api/employee
```

#### Add an employee
```http
  POST /api/employee
```
Your body must be of Content-Type application/json, with the fields: name, position,salary

```json
{
  "name": "Ravi",
  "position": "SDE I",
  "salary": "12345678"
}
```


#### Get an employee
```http
  GET /api/employee/${empId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `empId`      | `string` | **Required**. Id of the employee to fetch |

#### Update an employee

```http
  PUT /api/employee/${empId}
```
Your body must be of Content-Type application/json, with the fields: name, position,salary

```json
{
  "name": "Ravi Prakash",
  "position": "SDE II",
  "salary": "87654321"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `empId`      | `string` | **Required**. Id of the employee to update |

#### Delete an employee

```http
  DELETE /api/employee/${empId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `empId`      | `string` | **Required**. Id of the employee to delete |



## Running Tests

Make sure to have the REST Client extension installed in VSCode to run the tests

To run tests, from the root (`dovelEmployees`) directory, navigate to `backend/tests/apiTest.rest`. Make sure that your application is running.

Replace all instances of `http://localhost:8080` with `http://localhost:PORT`, where PORT is the env variable you had set earlier.

Open the file in the editor, and click the `Send Request` button to send the request to the api

For `show`,`edit`,`delete` requests, replace the tailing end of the url by the _id of your employee, which you can get when sending the `post` request to add an employee

```http
{
  "success": true,
  "data": {
    "name": "Ravi",
    "position": "SDE I",
    "salary": 12345678,
    "_id": "678f288f98c5f1f9487e0dee", <= HERE
    "__v": 0
  }
}
```

