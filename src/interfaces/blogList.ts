import { MdxRemote } from "next-mdx-remote/types";

export interface iBlogList {
  blogPosts: iBlogPost[];
}

export interface iBlogPost {
  pageId: string;
  author: string;
  title: string;
  subTitle: string;
  tags: string[];
  technologyUsed: string[];
  time: string;
  data: MdxRemote.Source;
}
