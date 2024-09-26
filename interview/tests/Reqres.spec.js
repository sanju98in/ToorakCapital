import { test, expect } from '@playwright/test';

test("API get request", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users/2");
    console.log(response.data);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
});

test("API get response", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users/21");
    console.log(response.data);
    expect(response.status()).toBe(404);
});

test("API post request", async ({request}) => { 

    const response = await request.post("https://reqres.in/api/users", {
        name: "Sanjeev Kumar Sinha",
        job: "Automation QA"
    });
    console.log(response.data);
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe("Created");
});