
# Desafio FCamara

Conforme descrito no anunciado, o princiapal
ponto do desafio é o CRUD. Como não existe uma API
foi criado um arquivo JSON simbolizando o backend e BD.

## Tecnologias
- ReactJS
- Typescript
- Styled-components
- Axios
- Yup

## Instalação

Instale o json-server para simular o backend
```bash
npm install -g json-server
```

instale as dependências do projeto
```bash
yarn install
```
Abra um terminal, navegue até a pasta do projeto e rode o comando
```bash
json-server --watch db.json --port 3004
```

Abra um outro terminal, ainda dentro da pasta do projeto e rode o comando
```bash
yarn start
```

## Observações
A Api é consumida pelo axios, onde o mesmo ja tem uma "Base URL"
predefinida, dentro da pasta src > servicos. Para utilizar uma Api 
válida, basta trocar o valor da URL.

Lembrando que, para o correto funcionamento, a API deve ter os seguinte formato:

```bash
{
  "users": [
    {
      "id": 1,
      "network": "Drogarias Conviva",
      "store": "Loja B",
      "name": "José da Silva",
      "cpf": "233.456.344-44",
      "email": "srjose@drogariasconviva.com.br",
      "profile": "Gestor",
      "status": true
    },
  ]
}
```


