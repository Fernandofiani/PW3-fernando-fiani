# API Produtos REST

API RESTful simples para cadastro e gerenciamento de produtos.

## Tecnologias

- Node.js
- Express
- JavaScript
- REST / RESTful

## Como executar

```bash
npm install
npm run dev
```

A API ficará disponível em:

http://localhost:3000

## Endpoints

| Método | Endpoint | Função |
|---|---|---|
| GET | /product | Lista todos os produtos |
| GET | /product/:id | Busca um produto |
| POST | /product | Cria um produto |
| PUT | /product/:id | Atualiza o produto inteiro |
| PATCH | /product/:id | Atualiza parcialmente |
| DELETE | /product/:id | Exclui um produto |

## Exemplos

### POST /product

```json
{
  "name": "Teclado",
  "price": 150,
  "quantity": 20
}
```

### PATCH /product/1

```json
{
  "price": 3200
}
```

## Códigos HTTP utilizados

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 404 Not Found
- 409 Conflict
- 500 Internal Server Error
