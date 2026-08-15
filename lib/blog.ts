import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  region?: string;
  content: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      const fullPath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(fullPath, 'utf8');

      // Simple frontmatter parser
      const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
      const match = fileContent.match(frontmatterRegex);
      const frontmatter: Record<string, string | string[]> = {};
      
      if (match) {
        const lines = match[1].split('\n');
        lines.forEach(line => {
          const [key, ...val] = line.split(':');
          if (key && val) {
            const cleanKey = key.trim();
            const cleanVal = val.join(':').trim().replace(/^"(.*)"$/, '$1');
            if (cleanKey === 'tags') {
              frontmatter[cleanKey] = cleanVal.split(',').map((tag) => tag.trim());
            } else {
              frontmatter[cleanKey] = cleanVal;
            }
          }
        });
      }

      const content = fileContent.replace(frontmatterRegex, '').trim();
      const wordCount = content.split(/\s+/g).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      return {
        slug,
        title: String(frontmatter.title || 'Untitled'),
        excerpt: String(frontmatter.excerpt || ''),
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        region: String(frontmatter.region || 'Global'),
        content,
        readingTime,
        image: String(frontmatter.image || `/api/blog-placeholder/${slug}`),
        imageAlt: String(frontmatter.imageAlt || frontmatter.title || 'Article cover'),
        author: String(frontmatter.author || 'Sephan'),
        publishedAt: String(frontmatter.publishedAt || ''),
        updatedAt: String(frontmatter.updatedAt || frontmatter.publishedAt || ''),
      };
    })
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.title.localeCompare(b.title));

  return posts;
}

export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => post.tags.includes(tag)).length * 2 +
        (candidate.region === post.region ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || b.candidate.updatedAt.localeCompare(a.candidate.updatedAt))
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
