import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const games = await prisma.game.findMany();
  res.json(games);
}
