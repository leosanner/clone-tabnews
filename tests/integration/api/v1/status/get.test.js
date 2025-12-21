test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const status = response.status;
  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody);

  expect(responseBody.dependencies.database.openned_connections).toBe(1);
  expect(status).toBe(200);
});
