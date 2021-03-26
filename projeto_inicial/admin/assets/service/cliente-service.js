export const listaClientes = () => {
  return fetch("http://localhost:3000/profile").then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Nao foi possivel listar novos clientes");
  });
};

const criaCliente = (nome, email) => {
  return fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Nao foi possivel criar novos clientes");
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Nao foi possivel remover um clientes");
    }
  });
};
const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Nao foi possivel detalhar um clientes");
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Nao foi possivel atualizar um clientes");
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};

/* Nesse caso aqui estamos fazendo a requisicao manual usando o http request porem para facilitar existe a fetch api
    const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.open("GET", "http://localhost:3000/profile");
    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        resolve(JSON.parse(http.response));
      }
    };
    http.send();
  });
  return promise;*/
