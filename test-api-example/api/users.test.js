const express = require("express");
const request = require("supertest");

const usersRouter = require("./users");

const app = express();

app.use("/users", usersRouter);

describe("Test Users endpoint", ()=>{
    beforeAll(()=> app.listen(5000));
    // beforeEach(() => console.log("Функция, которая срабатывает перед каждым тестом"))
    // afterEach(() => console.log("Функция, которая срабатывает после каждого теста"))
    it("GET /users - get users array", async()=>{
        const response = await request(app).get("/users");
        
        const {result} = response.body.data;

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("success");
        expect(response.body.code).toBe(200);
        expect(Array.isArray(result)).toBeTruthy();
        expect(result[0].name).toBeString();

    })

    afterAll(()=> app.close());
});