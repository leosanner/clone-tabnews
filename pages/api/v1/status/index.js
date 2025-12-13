function status(request, response) {
  const resp = {
    chave: "são acima da média",
    headers: request.headers,
    ct: request.content,
  };
  response.status(200).json(resp);
}

export default status;
