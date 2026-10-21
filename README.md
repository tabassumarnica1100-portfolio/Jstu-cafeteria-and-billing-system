# JSTU Cafeteria and Billing System

A full-stack cafeteria management system for JSTU.

### System Architecture
```mermaid
graph TD
    A[Frontend: Next.js 14 App Router] --> B[API Layer: /api/menu, /api/wallet, /api/orders]
    B --> C[Prisma ORM]
    C --> D[Neon PostgreSQL - Production DB]
    C --> D[Neon PostgreSQL - Production DB]
    model User { id String @id @default(cuid()), wallet Int @default(1000), orders Order[] }
model Menu { id Int @id @default(autoincrement()), name String, price Int, category String, image String }
model Order { id String @id @default(cuid()), total Int, items Json, userId String, status String }
// POST /api/orders - Real DB Transaction
const user = await prisma.user.findUnique({ where: { id: userId } })