import { usePrismicDocumentByUID } from "@prismicio/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { useEffect } from "react";

import styles from '../post.module.scss';

type Post = {
  slug: string;
  title: string;
  content: RichTextBlock[];
  updatedAt: string;
}

export default function PostPreview() {
  const { data } = useSession();
  const router = useRouter();

  const slug = router.query.slug as string;

  const [document] = usePrismicDocumentByUID('publication', slug);

  const post: Post = {
    slug,
    title: document?.data.title!,
    content: document?.data.content.splice(0, 3),
    updatedAt: new Date(document?.last_publication_date!).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  useEffect(() => {
    if(data?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [post, data]);

  if(!document) {
    return (
      <main className={styles.container}>
        <h1>Carregando...</h1>
      </main>
    )
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
          <div className={`${styles.postContent} ${styles.previewContent}`}>
            <RichText render={post?.content} />
          </div>

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now! 😊</a>
            </Link>  
          </div>
        </article>
      </main>
    </>
  );
};
