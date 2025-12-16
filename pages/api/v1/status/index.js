import database from "infra/database.js";

async function status(request, response) {
  const queryString = "SELECT 1 + 1";
  const result = await database.query(queryString);

  console.log(result);

  const resp = {
    chave: "são acima da média",
    headers: request.headers,
    ct: request.content,
  };
  response.status(200).json(resp);
}

export default status;
