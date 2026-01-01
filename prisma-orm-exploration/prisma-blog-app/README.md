# Prisma Blog Server

## 🍰 Resources

- [Prisma-postgres Quickstart](https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql)

- [Better-Auth Installation](https://www.better-auth.com/docs/installation)

### Generate all possible types for our tables:

```powershell
    npx prisma generate
```

### Generate user models & types using Better-Auth:

```powershell
    npx @better-auth/cli generate
```

### Migrate all prisma schemas to SQL database:

```powershell
    npx prisma migrate dev
```

### Run Prisma Studio:

```powershell
    npx prisma studio
```

## ✅ Getting Started

Follow these steps to set up and run the backend server on your local machine.

Clone the repository and navigate to the cloned repo.

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root of your project and add the necessary environment variables.

Example `.env`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/prisma-blog-app?schema=public"
PORT=5000
BETTER_AUTH_SECRET=better-auth-secret
BETTER_AUTH_URL=http://localhost:5000
```

### Run the Server

After configuring the environment variables, run this command to start the project.

```bash
npm run dev
```
