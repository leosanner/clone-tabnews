test("DELETE for http://localhost/api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  const responseBody = await response.json();
  expect(response.status).toBe(405);

  expect(responseBody).toEqual({
    name: "MethodNotAllowedError",
    message: "Método não permitido para este endpoint.",
    action: "Verifique se o método HTTP enviado é válido para este endpoint.",
    status_code: 405,
  });
});
