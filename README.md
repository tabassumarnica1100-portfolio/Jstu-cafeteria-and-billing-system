# JSTU Cafeteria and Billing System

A full-stack cafeteria management system for JSTU.

### System Architecture
```mermaid
graph TD
    A[Frontend: Next.js 14 App Router] --> B[API Layer]
    B --> C[Prisma ORM]
    C --> D[Neon PostgreSQL]
```

### Tech Stack
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Neon PostgreSQL + Prisma ORM
- **Deployment:** Vercel

### Real Wallet Logic
- User wallet check & deduct in atomic DB transaction
- Prevents negative balance