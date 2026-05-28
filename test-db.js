"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./lib/prisma");
async function main() {
    const result = await prisma_1.prisma.$queryRaw `SELECT 1+1 AS result`;
    console.log("✅ Conexión exitosa a PostgreSQL:", result);
}
main()
    .then(async () => {
    await prisma_1.prisma.$disconnect();
})
    .catch(async (e) => {
    console.error("❌ Error de conexión:", e);
    await prisma_1.prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=test-db.js.map