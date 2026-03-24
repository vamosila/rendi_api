# Endpoints

| Endpoint | Method | Auth | CRUD | Description |
| - | - | - | - | - |
| /visits | GET | nem | read | Reads visits |
| /visits/:id | GET | nem | read | Read a visit |
| /visits | POST | nem | create | Create a visit |
| /visits | PUT | nem | update | Update a visit |
| /visits | DELETE | nem | delete | Delete a visit |

## Create visit

* Method: POST
* Endpoint: /api/visits

```json
{
    "name": "Béla",
    "email": "bela@zold.lan",
    "eventId": 1
}
```