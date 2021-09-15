import * as contentful from "contentful";
import Link from "next/link";
import { iBlogListItem, iBlogPost } from "../../src/interfaces/blogList";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

export default function blog({ blogList }: { blogList: iBlogListItem[] }) {
  console.log(blogList);
  return (
    <>
      <Head>
        <meta name="description" content="Articles"></meta>
        <meta name="author" content="Sheth Shreyansh"></meta>
        <meta property="og:title" content="Shreyansh Sheth" />
        <meta property="og:description" content="Full-Stack Web Developer" />
        <meta property="og:type" content="Profile" />

        <title>Shreyansh Sheth</title>
      </Head>
      <div className="bg-gray-900 h-screen">
        <nav className="flex justify-end mx-10 mb-10 pt-10 text-lg">
          <Link href="/">
            <p className="underline cursor-pointer sm:text-2xl text-lg">
              Portfolio
            </p>
          </Link>
        </nav>
        <header className="sm:text-5xl  italic  p-5 my-5 md:mx-20 mx-2  text-4xl font-semibold capitalize">
          Welcome To My Blog
        </header>
        <main>
          {/*Search Bar*/}
          <div></div>
          {/*BlogList*/}
          <div>
            {blogList
              //@ts-ignore
              .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
              .map((e, idx) => {
                return (
                  <Link href={`/blog/${e.slug}`} key={idx}>
                    <div
                      onClick={(e) => {}}
                      key={idx}
                      className="p-5 cursor-pointer  border-gray-600 border-2 bg-blue-900 hover:shadow-lg hover:border-white transition duration-500 ease-in-out  block  rounded-md my-5 md:mx-20 mx-2"
                    >
                      <div className="text-left capitalize sm:text-3xl font-bold text-2xl ">
                        {e.title}
                      </div>
                      <div className="text-left capitalize font-semibold mr-2 text-sm sm:text-2xl">
                        {e.subtitle}
                      </div>
                      <div className="text-left text-sm mt-2  break-all">
                        {e.tags.map((e, idx) => {
                          return (
                            <span
                              onClick={(c) => {
                                //add function when click on here it will automatically search for that tag in search box
                              }}
                              className="mr-2 bg-blue-600  rounded-md capitalize p-1 "
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

export const getStaticProps = async () => {
  const client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });
  const blogListFromCms = (await client.getEntries()).items;
  const list: iBlogListItem[] = blogListFromCms.map((e) => {
    return {
      ...(e.fields as unknown as iBlogListItem),
      dateCreated: e.sys.createdAt,
    } as unknown as iBlogListItem;
  });
  return {
    props: {
      blogList: list,
    },
  };
};
