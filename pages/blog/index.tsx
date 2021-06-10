import Link from "next/link";
import { iBlogList, iBlogPost } from "../../src/interfaces/blogList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function blog({ blogList }: { blogList: iBlogList }) {
  return (
    <div className="bg-black">
      <nav className="flex justify-end m-10 text-lg">
        <Link href="/" prefetch={true}>
          <p className="underline cursor-pointer sm:text-2xl text-lg">
            Portfolio
          </p>
        </Link>
      </nav>
      <header className="text-xl sm:text-3xl m-5 font-bold">
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
                    className="text-white m-auto my-5 p-3 cursor-pointer transition duration-500 ease-in-out rounded-md hover:bg-gray-900 bg-gray-800 w-9/12"
                  >
                    <div className="text-lg sm:text-2xl font-semibold">
                      {e.title}
                    </div>
                    <div className="text-left text-base sm:text-base">
                      {e.subTitle}
                    </div>
                    <div className="text-sm my-3">
                      {e.tags.map((e, idx) => {
                        return (
                          <span
                            onClick={(c) => {
                              //add function when click on here it will automatically search for that tag in search box
                            }}
                            className="pr-1  py-0.5 bg-white rounded-sm mr-2 text-black"
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

    blogList.blogPosts.push(data as iBlogPost);
  });

  return {
    props: {
      blogList,
    },
  };
};
