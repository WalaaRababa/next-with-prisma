import prisma from "../../../lib/db";
// import { createClient } from 'redis';
// const client = createClient();
// client.connect()
export default async function PostPage({ params }) {
  const OnePost = await prisma.post.findUnique({
    where: {
      slug: (params.slug)
    }
  });
  // WE CAN USE Caching in NEXT.JS OR USE Prisma Accelerate caching to this issue
  /*const cacheKey = `post:${params.slug}`;
  const cachedPost = await client.get(cacheKey);
  if (cachedPost) {
    return JSON.parse(cachedPost)
  }
 const OnePost = await prisma.post.findUnique({
    where: {
      slug: (params.slug)
    }
  });

  if (OnePost) {
    await client.setEx(cacheKey, 60, JSON.stringify(OnePost));
  }
    */

  if (!OnePost) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <h1>{OnePost?.title}</h1>
      <p>{OnePost?.discription}</p>
    </div>
  );
}
