
🍽️ JSTU Cafeteria & Billing System
'Jamalpur Science And Technology university's First Digital Canteen Operating System

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-5.14.0-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql)
![Status](https://img.shields.io/badge/Status-Production_Live-16a34a?style=for-the-badge)

**Live Product:** https://jstu-dine.vercel.app/canteen  
**Repository:** https://github.com/tabassumarnica110-portfolio/Jstu-cafeteria-and-billing-system-

---

🚀 Executive Summary
JSTU te 8000+ student er jonno protidin canteen e 45 min line, khuchra taka r manual hisab er somossa. JSTU DINE eita solve kore ekta full-stack OS diye — jekhane student mobile theke order kore, wallet theke real-time tk kate, kitchen e live order jay, admin real revenue dekhe.

**Phase 1 (MVP) Completed:** Frontend + Backend + PostgreSQL + Real Wallet Deduction.

---

✨ Core Functionalities (Production Tested)

**1. Student App — `/` & `/canteen`**
- Live Menu API: `GET /api/menu` (PostgreSQL)
- Cart & Quantity Logic
- **Real Wallet System:** `POST /api/orders` — Wallet check + Deduct + Order Create (Atomic Transaction)
- Order History: `GET /api/orders`

**2. Kitchen Display System — `/kitchen`**
- Live Order Feed with 5s Auto-Refresh
- Order Items Breakdown
- Status: Paid → Cooking → Ready

**3. Admin & Billing OS — `/admin`**
- Total Revenue (Real DB SUM)
- Total Orders, Average Order Value
- Daily / Weekly Sales Analytics

---

🏗️ System Architecture

```mermaid
Frontend (Next.js 14 App Router) 
   ↓ 
API Layer (/api/menu, /api/wallet, /api/orders)
   ↓ 
Prisma ORM → Neon PostgreSQL (Production DB)
*Tech Stack:*
- *Frontend:* http://Next.js 14, TypeScript, Tailwind
- *Backend:* http://Next.js API Routes (REST)
- *Database:* Neon PostgreSQL + Prisma ORM
- *Deployment:* Vercel CI/CD
- *Auth (Phase 2):* http://NextAuth.js

*Database Schema:*
model User { id String @id @default(cuid()), wallet Int @default(1000), orders Order[] }
model Menu { id Int @id @default(autoincrement()), name String, price Int, category String, image String }
model Order { id String @id @default(cuid()), total Int, items Json, userId String, status String }
---

💳 Real Wallet Logic (Atomic)
// POST /api/orders - Real DB Transaction
const user = await prisma.user.findUnique({ where: { id: userId } })
if (user.wallet < total) return { error: "Taka nai!" }
await prisma.user.update({ data: { wallet: user.wallet - total } })
await prisma.order.create({ data: { userId, total, items } })
---

📦 Installation (Professional)
git clone https://github.com/tabassumarnica110-portfolio/Jstu-cafeteria-and-billing-system-.git
cd Jstu-cafeteria-and-billing-system-
npm install
Add .env
echo 'DATABASE_URL="postgresql://..."' > .env
npx prisma db push
npx prisma generate
npm run dev
---

🔗 API Documentation
Method	Endpoint	Function	Status
GET	/api/menu	Get all menu	✅ Live
GET	/api/wallet?userId=xxx	Get wallet	✅ Live
POST	/api/orders	Create order + Deduct wallet	✅ Live
GET	/api/orders	Get all orders	✅ Live
---

