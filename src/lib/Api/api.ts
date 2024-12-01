import { ID } from "appwrite";

import { account } from "../AppWrite/config";
import { INewUser } from "@/types";

/* To create new user */
const createAccount = async (user: INewUser) => {
  try {
    const newUser = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { createAccount };
