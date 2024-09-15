import createPost from "@/actions/action";
import prisma from "@/lib/db";
import Link from "next/link";
export default async function PostPage() {
  // const posts = await prisma.post.findMany({
  //   orderBy: { created_at: "desc" },
  //   select: {
  //     id: true,
  //     title: true,
  //     slug:true,
  //   },
  // });
const user = await prisma.user.findUnique({
  where:{
    email:'ali@gmail.com'
  },
  include: {
    posts: true,
  },
})
  return (
    <div>
       <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
       <h1 className="text-2xl font-bold mb-6 text-center">All Post</h1>
      <ul>
        {user?.posts?.map((post) => (
          <li key={post.id} className="font-bold text-xl text-center">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>  
     

        <form action={createPost}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              id="title"
              type="text"
              name="title"
              placeholder="Enter the title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              id="description"
              rows={5}
              name="description"
              placeholder="Enter the description"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
