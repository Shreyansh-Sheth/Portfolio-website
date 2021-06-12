import Link from "next/link";
import { iBlogList, iBlogPost } from "../../src/interfaces/blogList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function blog({ blogList }: { blogList: iBlogList }) {
  return (
    <>
      <Head>
        <meta name="description" content="Articles"></meta>
        <meta name="author" content="Sheth Shreyansh"></meta>
        <title>Shreyansh Sheth</title>
      </Head>
      <div className="bg-black">
        <nav className="flex justify-end m-10 text-lg">
          <Link href="/" prefetch={true}>
            <p className="underline cursor-pointer sm:text-2xl text-lg">
              Portfolio
            </p>
          </Link>
        </nav>
        <header className="text-3xl sm:text-4xl md:text-5xl italic mb-10 m-5 font-bold">
          Welcome To My Blog
        </header>
        <main>
          {/*Search Bar*/}
          <div></div>
          {/*BlogList*/}
          <div>
            {blogList.blogPosts
              .sort((a, b) => Date.parse(b.time) - Date.parse(a.time))
              .map((e, idx) => {
                return (
                  <Link href={`/blog/${e.pageId}`} key={idx}>
                    <div
                      onClick={(e) => {}}
                      key={idx}
                      className="p-5 cursor-pointer hover:border-gray-300 border-white border-2 bg-gray-700 hover:bg-gray-900 transition duration-500 ease-in-out  block  rounded-md my-5 md:mx-20 mx-2"
                    >
                      <div className="text-left capitalize sm:text-3xl font-bold text-2xl ">
                        {e.title}
                      </div>
                      <div className="text-left capitalize font-semibold mr-2 text-sm sm:text-2xl">
                        {e.subTitle}
                      </div>
                      <div className="text-left text-sm mt-2  break-all">
                        {e.tags.map((e, idx) => {
                          return (
                            <span
                              onClick={(c) => {
                                //add function when click on here it will automatically search for that tag in search box
                              }}
                              className="mr-2 bg-gray-600  rounded-md capitalize p-1 "
                              key={idx}
                            >
                              #{e}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const folderPath = path.join(process.cwd(), "/src/blogs");
  const blogList: iBlogList = { blogPosts: [] };
  fs.readdirSync(folderPath).forEach((file) => {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), "/src/blogs", `${file}`),
      "utf8"
    );
    const { data } = matter(fileContents);
    console.log(data.tags);
    blogList.blogPosts.push(data as iBlogPost);
  });

  return {
    props: {
      blogList,
    },
  };
};
