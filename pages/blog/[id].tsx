import * as contentful from "contentful";

import { iBlogListItem, iBlogPost } from "../../src/interfaces/blogList";
import fs from "fs";
import path from "path";
import { Params } from "next/dist/next-server/server/router";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
//@ts-ignore
import mdxPrism from "mdx-prism";
import hydrate from "next-mdx-remote/hydrate";
import { MdxRemote } from "next-mdx-remote/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { IoIosArrowBack } from "react-icons/io";
export default function blogPostPage({ content }: { content: iBlogPost }) {
  const router = useRouter();
  // const article = hydrate(content);
  return (
    <div className="bg-gray-900">
      <Head>
        <title>{content.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
          integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
          crossOrigin="anonymous"
        />
        <meta name="description" content={content.title}></meta>
        <meta name="author" content={"Shreyansh Sheth"}></meta>
        <meta
          name="keywords"
          content={content.tags as unknown as string}
        ></meta>
        <meta property="og:site_name" content="Sheth Shreyansh"></meta>
        <meta property="og:title" content={content.title}></meta>
        <meta property="og:description" content={content.subTitle}></meta>
        <meta property="og:type" content="article"></meta>
      </Head>

      <header className="rounded-xl md:ml-8 ml-1 pl-3 pt-2 flex justify-between ">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <IoIosArrowBack className="text-white  text-3xl mb-5"></IoIosArrowBack>
        </div>
        <div>
          <div className="md:mr-8 mr-1 pr-3 font-semibold">
            {new Date(content.dateCreated).toLocaleDateString()}
          </div>
        </div>
      </header>
      <div className="md:mx-8 mx-1  rounded-xl px-3 pb-3 bg-gray-800 ">
        <div className="pb-4">
          <div className="md:text-5xl pt-2 text-center text-3xl font-black ">
            {content.title}
          </div>
          <div className="md:text-3x italic text-lg text-center font-light mt-2">
            "{content.subTitle}"
          </div>
        </div>
        {/* TODO change this */}

        <article className=" mx-auto min-w-full p-5 rounded-sm prose prose-sm sm:prose lg:prose-lg xl:prose-2xl  prose-primary bg-gray-100">
          {documentToReactComponents(content.content)}
          <div className="font-semibold">Author : Shreyansh sheth</div>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: Params) {
  const id = params.id;
  const client = contentful.createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });
  const data = await client.getEntries({
    "fields.slug": id,
    content_type: "blog",
  });
  return {
    props: {
      slug: id,
      content: data.items[0].fields || {},
    },
  };
}
export async function getStaticPaths() {
  const client = contentful.createClient({
    space: "cjn71pot8pq4",
    accessToken: process.env.TOKEN,
  });
  const blogListFromCms = (await client.getEntries()).items;

  const paths: string[] = blogListFromCms.map((e) => {
    //@ts-ignore

    return `/blog/${e.fields?.slug!}`;
  });
  return {
    paths,
    fallback: false,
  };
}
