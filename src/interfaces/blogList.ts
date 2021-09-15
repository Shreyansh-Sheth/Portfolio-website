import { Document } from "@contentful/rich-text-types";

export interface iBlogListItem {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  dateCreated: Date;
  content: string;
}

export interface iBlogPost {
  title: string;
  subTitle: string;
  tags: string[];
  dateCreated: Date;

  content: Document;
}
