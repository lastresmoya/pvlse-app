import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className={`${styles.container} 'text-aling-center'`}>
        <p>
          PVLSE Home page
        </p>
        <Link href="/components">Go to StyleGuide</Link>
      </div>
    </Layout>
  )
}
