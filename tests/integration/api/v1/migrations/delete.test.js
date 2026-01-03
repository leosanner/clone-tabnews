test("DELETE for http://localhost/api/v1/migrations should return 405", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });

  expect(response1.status).toBe(405);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
  });

  expect(response2.status).toBe(200);
});
