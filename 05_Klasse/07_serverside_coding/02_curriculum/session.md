# Assignment: HTTP Architecture, Sessions, and Statelessness

## 1. Overview
This assignment explores the core mechanics of the web: how servers remember users (Sessions) and why RESTful services choose to "forget" them (Statelessness) to enable high performance through Caching.

---

## 2. Task 1: Session Management Diagram
HTTP is a stateless protocol. To maintain a user's logged-in state, we use Sessions and Cookies.

**Requirement:** Create a Sequence Diagram using **PlantUML** that shows:
1. A user logging in.
2. The server returning a `Set-Cookie` header with a Session ID.
3. The browser sending that cookie back in a second request.
4. The server recognizing the user.

### Sample Reference (PlantUML)
```plantuml
@startuml
actor User
participant "Web Browser" as Client
participant "Web Server" as Server
database "Session Store" as DB

User -> Client: Enters username/password
Client -> Server: POST /login
Server -> DB: Store Session(ID: 987xyz, User: John)
Server --> Client: 200 OK\nSet-Cookie: SID=987xyz

Note over Client, Server: Subsequent Request
Client -> Server: GET /profile\nCookie: SID=987xyz
Server -> DB: Validate 987xyz
DB --> Server: User is John
Server --> Client: 200 OK (Welcome, John!)
@enduml