# Assignment: REST API Design – Car Dealership Service

## 1. Overview
A car dealership wants to expose a **RESTful API** to manage its inventory. Your task is to **design the API** for managing car resources. 

> **Note:** You are not required to write any code. This assignment focuses solely on **API design and documentation**.

---

## 2. Learning Objectives
Students should demonstrate understanding of:
- **RESTful Principles:** Using nouns in URLs and resource-oriented architecture.
- **HTTP Methods:** Appropriate use of `GET`, `POST`, `PUT`, and `DELETE`.
- **JSON Structure:** Designing valid request and response bodies.
- **HTTP Headers & Status Codes:** Communicating metadata and result states correctly.

---

## 3. Resource Specification: Car
A "Car" resource contains the following attributes:

* `id` (Integer): Unique identifier.
* `brand` (String): Manufacturer (e.g., Toyota, BMW, Tesla).
* `model` (String): Model name (e.g., Corolla, X5, Model 3).
* `year` (Integer): Year of manufacture.
* `color` (String): Color of the car.


---

## 4. Technical Constraints

### Required Headers
All requests and responses must utilize the following headers:
- `Accept: application/json`
- `Content-Type: application/json`

### HTTP Status Codes
You must use the following codes where appropriate:
- **200 OK**: Successful GET or Update.
- **201 Created**: Successful creation via POST.
- **204 No Content**: Successful deletion.
- **400 Bad Request**: Input validation failure.
- **404 Not Found**: Specified ID does not exist.
- **500 Internal Server Error**: Unexpected server failure.

---

## 5. Tasks
Design API endpoints for the following six operations:
1. **Create** a new car.
2. **Get all** cars.
3. **Get a car by ID**.
4. **Update** an existing car.
5. **Delete** a car.
6. **Filter** to get only available cars.

---

## 6. Submission Template
Please provide your design using the following table format for each endpoint:

| HTTP Method | URL | Headers | Request Body | Response Body | Status Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/cars` | Content-Type: application/json | `{ "brand": "Toyota", "model": "Corolla", ... }` | `{ "id": 1, "brand": "Toyota", "model": "Corolla", ... }` | 201 Created |

---
*End of Assignment*
