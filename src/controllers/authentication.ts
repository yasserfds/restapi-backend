import { createUser, getUserByEmail } from "db/users";
import express from "express";
import { authentication, random } from "helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;
    const exsitingUser = await getUserByEmail(email);
    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    if (exsitingUser) {
      return res.sendStatus(400);
    }
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
  }
};
