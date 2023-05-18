import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import type React from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';

interface ArticleFrontmatter {
  title: string;
  author: string;
  publishDate: string;
  // Add any additional properties here
}

interface Article {
  meta: ArticleFrontmatter & { slug: string };
  content: React.ReactElement;
}

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);

const articlesDir = path.resolve(process.cwd(), 'src', 'contents');

export async function getArticleBySlug(slug: string) {
  try {
    const fileName = slug.replace(/\.mdx$/, '');
    const filePath = path.resolve(
      process.cwd(),
      articlesDir,
      `${fileName}.mdx`
    );

    // TODO: Handle file not found
    const fileContent = await readFile(filePath, { encoding: 'utf8' });

    const { frontmatter, content } = await compileMDX<ArticleFrontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    const article: Article = {
      meta: { ...frontmatter, slug: fileName },
      content,
    };

    return article;
  } catch (error) {
    console.error('Error reading article:', error);

    // TODO: Handle error or file not found
    throw error;
  }
}

export async function getPageContent(slug: string) {
  const { meta, content } = await getArticleBySlug(slug);

  return { meta, content };
}

export async function getAllArticlesMeta() {
  try {
    const fileNames = await readDir(articlesDir);

    const articlesMetaPromises = fileNames.map(async fileName => {
      const { meta } = await getArticleBySlug(fileName);

      return meta;
    });

    const articlesMeta = await Promise.all(articlesMetaPromises);

    return articlesMeta;
  } catch (error) {
    console.error('Error retrieving article metadata:', error);

    // TODO: Handle error or file not found
    throw error;
  }
}
