# Lab-Log Server

A simple server to track laboratory equipments.

## Project Setup

### One by one:

Initialize node project:

```cmd
    npm init -y
```

Install dependencies:

```cmd
    npm i express cors dotenv
```

Generate a basic TS config file:

```cmd
    npx tsc --init
```

### Custom Auth Steps

1. Create/register user (with hashed password using Bcrypt)
2. Create login API:
   - Find user
   - Match pass using bcrypt.compare
   - Generate login token using JWT (which will be sent/handed over to frontend, which will make further requests with this token)
3. Make custom auth middleware:
   - The login/generated token is received in the auth middleware (eg from req.headers.authorization)
   - The token is decoded using jwt.verify
   - After decoded is verified this decoded object is stored in req.user, which can be then accessed from different controllers to verify for eg roles, etc.
