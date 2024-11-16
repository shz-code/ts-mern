import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  const users = [{ name: "Alice" }];
  res.send(users);
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ error: "Name is required" });
  }
  res.send({ message: `User ${name} created successfully` });
};
