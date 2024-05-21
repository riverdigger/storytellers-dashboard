const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.game.create({
    data: {
      title: "D&D",
      leader: "Niall Miner",
      maxPlayerCount: 5,
      schedule: "Weekly",
      system: "D&D 5e",
      imageUrl: "https://example.com/dnd.jpg",
    },
  });

  const allGames = await prisma.game.findMany();
  console.log(allGames);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
