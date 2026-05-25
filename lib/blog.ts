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
      const frontmatter: Record<string, any> = {};
      
      if (match) {
        const lines = match[1].split('\n');
        lines.forEach(line => {
          const [key, ...val] = line.split(':');
          if (key && val) {
            const cleanKey = key.trim();
            const cleanVal = val.join(':').trim().replace(/^"(.*)"$/, '$1');
            if (cleanKey === 'tags') {
              frontmatter[cleanKey] = cleanVal.split(',').map(t => t.trim());
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
        title: frontmatter.title || 'Untitled',
        excerpt: frontmatter.excerpt || '',
        tags: frontmatter.tags || [],
        region: frontmatter.region || 'Global',
        content,
        readingTime,
        image: frontmatter.image || `/api/blog-placeholder/${slug}`,
      };
    });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
