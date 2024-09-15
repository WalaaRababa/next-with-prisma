"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
export default async function createPost(formData: FormData) {
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
  revalidatePath("/post");
}
