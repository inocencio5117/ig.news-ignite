import Head from "next/head";
import styles from "./styles.module.scss"

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          Posts | Ignews
        </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de Março de 2021</time>
            <strong>Creating a new and beaultiful post</strong>
            <p>In this guide we will learn something great</p>
          </a>

          <a>
            <time>12 de Março de 2021</time>
            <strong>Creating a new and beaultiful post</strong>
            <p>In this guide we will learn something great</p>
          </a>

          <a>
            <time>12 de Março de 2021</time>
            <strong>Creating a new and beaultiful post</strong>
            <p>In this guide we will learn something great</p>
          </a>
        </div>
      </main>
    </>
  );
}
