// import swagger ui middles, jsdoc-library
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import dotenv from  "dotenv";

import {Express} from "express"

// make sure environment variables are loaded
dotenv.config();

// get the server URL form environment variables or use a default
const serverURL = process.env.SWAGGER_SERVER_URL || "http://localhost:3000/api/v1";


// define swagger options 
const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task Management API Documentation",
            version: "1.0.0",
            description: 
            " This is the API documentatioin for the Task Managment Application."
        },

    },
    servers: [
        {
            url: serverURL,
            description:
                process.env.NODE_ENV === "production"
                ? "Production Server" : "Local server"
        },
    ],
    components: {
        securitySchemas: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        }
    ],
    // path to annotated files
    apis: [
        "./src/api/v1/routes/*.ts",
        "./src/api/v1/controllers/*.ts",
        "./src/api/v1/models/*.ts"
    ] // PATH to the API docs and schemas
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsDoc(swaggerOptions);
}


