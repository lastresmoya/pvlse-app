import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { PrismaClient } from '@prisma/client';

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const songs = await prisma.song.findMany({
    include: { artist: true }
  });

  return {
    props: {
      songs
    }
  };
}

export default function Home(songs) {
  console.log('data from db',songs)
  return (
    <Layout pageTitle="Home">
      <div className={`${styles.container} 'text-aling-center'`}>
        <p>
          PVLSE Home page
        </p>
        <Link href="/components">Go to StyleGuide</Link>
        <Link href="/profile">Go to Profile</Link>
      </div>
    </Layout>
  )
}
