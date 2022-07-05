import { useAllPrismicDocumentsByType } from '@prismicio/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Posts = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Posts[] | undefined>([]);

  const [document] = useAllPrismicDocumentsByType('publication');

  useEffect(() => {
    const serializePosts = document?.map(document => {
      return {
        slug: document.uid!,
        title: document.data.title!,
        excerpt: document.data.content.find(content => !!content.type)?.text ?? '',
        updatedAt: new Date(document.last_publication_date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    setPosts(serializePosts);
  }, [document]);

  console.log(document);

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts?.map(post => {
            return (
              <a href="#" key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            )
          })}
        </div>
      </main>
    </>
  )
}
