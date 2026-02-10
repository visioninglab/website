import { compileMDX } from "next-mdx-remote/rsc";

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}
