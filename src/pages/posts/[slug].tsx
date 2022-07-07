import { usePrismicDocumentByUID } from "@prismicio/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
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
          <div className={styles.postContent}>
            <RichText render={document?.data.content} />
          </div>
        </article>
      </main>
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);

  if(!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
