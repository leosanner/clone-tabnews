import database from "infra/database";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

beforeAll(cleanDatabase);

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody = await response1.json();
  console.log(responseBody);
  expect(response1.status).toBe(201);

  expect(Array.isArray(responseBody)).toBe(true);

  const firstMigrationObject = responseBody[0];

  expect(responseBody.length).toBeGreaterThan(0);
  expect(firstMigrationObject.path.startsWith("infra")).toBe(true);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();

  expect(Array.isArray(responseBody)).toBe(true);

  expect(response2Body.length).toBe(0);
});
