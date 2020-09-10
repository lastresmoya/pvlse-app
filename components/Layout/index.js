import Head from 'next/head'
import { Container } from 'reactstrap';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>PVLSE APP | {props.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{backgroundColor: props.backgroundColor}}>
        <Container className="pt-5">
          {props.children}
        </Container>
      </div>
    </div>
  )
}
