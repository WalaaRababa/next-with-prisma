"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Prisma } from '@prisma/client'

export default async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        slug: (formData.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        discription: formData.get("description") as string,
        author: {
          connect: {
            email: "ali@gmail.com",
          },
        },
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
  }
}

  revalidatePath("/post");
}
