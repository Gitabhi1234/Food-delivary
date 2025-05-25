# API Documentation

## POST /users/register

**Description:**  
This endpoint registers a new user. It validates the provided data, checks if the email already exists, hashes the user's password, creates the user record in the database, and returns a JWT token for authentication.

---

### HTTP Method:
**POST**

---

### Request Body

The expected request body is a JSON object containing the following fields:

- **fullname** (object)
  - **firstname** (string, required): Must be at least 3 characters long.
  - **lastname** (string, optional): If provided, should be at least 3 characters long.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 6 characters long.

---

### Example Response

#### Success (201 Created)

On successful registration the API responds with a JSON object including the registered user information (excluding sensitive fields) and a JWT token for authentication.

Example:  
- **user**:  
  - **\_id**: "60a7c0fbd2a5b718a8e5a123"  
  - **fullname**:  
    - **firstname**: "John"  
    - **lastname**: "Doe"  
  - **email**: "john@example.com"  
- **token**: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

---

