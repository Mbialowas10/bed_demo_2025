// import the express application and type defintion
import express, {Express} from "express"
// import Morgan
import morgan from "morgan"
// import setupSwagger endpoint
import setupSwagger from "../config/swagger"; 
import { timeStamp } from "console";
import itemRoutes from "./api/v1/routes/itemRoutes";

// initialize the express application
const app:  Express = express();

// setup swagger for api documentation
setupSwagger(app)

// integrate morgan into app
app.use(morgan("combined"));

// use json middleware
app.use(express.json())


// response to GET request at endpoint "/" with message
app.get("/", (req,res) => {
    res.send("Hello, Class!");
});

// example "tasks endpoint"
/** 
  * @openapi
  * /tasks:
  *  get:
  *      summary: Retrieve a list of tasks
  *      tags: [Tasks]
  *      responses:
  *          200:
  *              description: A list of tasks    
*/
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks")
});

// example "tasks endpoint"
/** 
  * @openapi
  * /api/v1/health:
  *  get:
  *      summary: Get health status of the application
  *      tags: [Health]
  *      responses:
  *          200:
  *              description: JSON response with status, server uptime, currenttimek, API version 
*/
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
  // end JSON response with status, server uptime, currenttimek, API version
});

// modular route for items
app.use("/api/v1/items", itemRoutes);

// export app and server for testing
export default app;
