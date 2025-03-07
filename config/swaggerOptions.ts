// import swagger ui middles, jsdoc-library
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import dotenv from "dotenv"

import {Express} from "express"

// Make sure environment variables are loaded
dotenv.config();

// Get the  server URL from environment variables or use a default
const serverURL = 
    process.env.SWAGGER_SERVER_URL || "http://localhost:3000/api/v1"


// define swagger options 
const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task Management API Documention",
            version: "1.0.0",
            description: 
                "This is the API documention for the Task Management application"
        },
        servers: [
            {
                url: serverURL,
                description:
                   process.env.NODE_ENV === "production" ? "Production Server" : "Local server",
            },
        ],
        components: {
            securitySchemes: {
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
            },
        ],

    },
    // path to annotated files
    apis: [
        "./src/app.ts",
        "./src/api/v1/routes/*.ts",
        "./src/api/v1/controllers/*.ts",
        "./src/api/v1/models/*.ts",
    ], // PATH TOTHE API DOCS AND SCHEMAS
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsDoc(swaggerOptions);
};

