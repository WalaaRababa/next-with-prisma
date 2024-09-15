import prisma from "../../../lib/db";
export default async function PostPage({ params }) {
  // const OnePost = await prisma.post.findUnique({
  //   where: {
  //     id: parseInt(params.id)
  //   },
  // });
  const OnePost = await prisma.post.findUnique({
    where: {
      slug: (params.slug)
    },
  });
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
