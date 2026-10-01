# Tarefas API

CRUD simples com Spring Boot 3, Java 17, JPA e banco H2 (em memória).

## Rodar
    mvn spring-boot:run

## Endpoints
| Método | URL | Descrição |
|--------|-----|-----------|
| GET | /tarefas | Lista todas |
| GET | /tarefas/{id} | Busca uma |
| POST | /tarefas | Cria |
| PUT | /tarefas/{id} | Atualiza |
| DELETE | /tarefas/{id} | Remove |

## Exemplo
    curl -X POST localhost:8080/tarefas \
      -H "Content-Type: application/json" \
      -d '{"titulo":"Estudar Spring","concluida":false}'
