import { usePrismicDocumentByUID } from "@prismicio/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RichText } from 'prismic-reactjs';

import styles from './post.module.scss';

type Post = {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

export default function Post() {
  const { data: session, status } = useSession();
  const { query } = useRouter();

  const slug = query.slug as string;

  const [document] = usePrismicDocumentByUID('publication', slug);

  const post: Post = {
    slug,
    title: document?.data.title!,
    content: document?.data.content,
    updatedAt: new Date(document?.last_publication_date!).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return(
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={styles.postContent}>
            <RichText render={document?.data.content} />
          </div>
        </article>
      </main>
    </>
  );
};

