"use server";

import { prisma } from "@/libs/prisma";

export const CompleteUserRegistration = async (authEmail: string) => {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        email: authEmail,
      },
    });

    if (userExists) {
      return { status: 200, user: userExists };
    }

    const newUser = await prisma.user.create({
      data: {
        email: authEmail,
      },
    });

    return { status: 201, user: newUser };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
};
