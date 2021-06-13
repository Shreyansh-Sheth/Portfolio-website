import { iBlogPost } from "../../src/interfaces/blogList";
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
import { IoIosArrowBack } from "react-icons/io";
export default function blogPostPage({
  meta,
  content,
}: {
  meta: iBlogPost;
  content: MdxRemote.Source;
}) {
  const router = useRouter();
  const article = hydrate(content);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
          integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
          crossOrigin="anonymous"
        />
        <meta name="description" content={meta.title}></meta>
        <meta name="author" content={meta.author}></meta>
        <meta name="keywords" content={meta.tags.toString()}></meta>
        <meta property="og:site_name" content="Sheth Shreyansh"></meta>
        <meta property="og:title" content={meta.title}></meta>
        <meta property="og:description" content={meta.subTitle}></meta>
        <meta property="og:type" content="article"></meta>
      </Head>

      <header className="rounded-xl md:ml-8 ml-1 pl-3 pt-2 flex justify-between">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          <IoIosArrowBack className="text-white  text-3xl mb-5"></IoIosArrowBack>
        </div>
        <div>
          <div className="md:mr-8 mr-1 pr-3 font-semibold">{meta.time}</div>
        </div>
      </header>
      <div className="md:mx-8 mx-1  rounded-xl px-3 pb-3 bg-gray-800 ">
        <div className="pb-4">
          <div className="md:text-5xl pt-2 text-center text-3xl font-black ">
            {meta.title}
          </div>
          <div className="md:text-3x italic text-lg text-center font-light mt-2">
            "{meta.subTitle}"
          </div>
        </div>
        <article className="bg-gray-700 px-5 py-3 md:mx-16 m-auto rounded-xl prose-blue porse prose-sm lg:prose-lg  text-white ">
          {article}
          <div className="font-semibold">Author : {meta.author}</div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const id = params.id;
  const filePath = path.join(process.cwd(), "/src/blogs", `${id}.mdx`);
  const file = fs.readFileSync(filePath);
  const { data, content } = matter(file);
  const contentData = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
        require("remark-emoji"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: { slug: id, meta: data, content: contentData },
  };
}
export function getStaticPaths() {
  const folderPath = path.join(process.cwd(), "/src/blogs");
  const paths: { params: { id: string } }[] = [];
  fs.readdirSync(folderPath).forEach((file) => {
    paths.push({ params: { id: file.replace(".mdx", "") } });
  });
  return {
    paths,
    fallback: false,
  };
}
