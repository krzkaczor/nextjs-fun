import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Adding new todo!")
  await prisma.todo.create({ data: { name: req.body.name, done: false } });

  res.status(200).json({ status: 'done!' });
};
