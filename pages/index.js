import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import { Button, Row, Col } from 'reactstrap';
import CardPvlse from '../components/Card';
import middleware from '../middleware/middleware';
import getPopular from '../lib/db';

export async function getServerSideProps(context) {
	await middleware.apply(context.req, context.res);
	const cursor = await getPopular(context.req);
	const pvlses = await cursor.toArray();
  return {
    props: {
       pvlses
    }
  };
}

export default function Home(props) {
  const pvlses = props.pvlses;
  return (
    <Layout pageTitle="Home">
      <div className={`${styles.container} 'text-aling-center'`}>
        <p>
          PVLSE Home page
        </p>
        <Link href="/components">Go to StyleGuide</Link>
        <Link href="/profile">Go to Profile</Link>
      </div>
      <section className="pb-5">
          <h3 className="text-primary">Cards with data from db</h3>
          <Row>
            {pvlses.map( p => (
              <Col key= {p._id}>
                <CardPvlse
                  img="http://via.placeholder.com/640x360"
                  title= {p.name}
                  category={p.interest}
                  categoryColor="#fffff"
                  price={p.price}
                  hostPic={p.hostProfilePicture}
                  hostName={p.hostName}
                  modality={p.location.fullAddress}
		    // TODO: Format dates (pvlse.dates)
                  date="22 July, 2020"
                  hour="15:00 hr"
                />
              </Col>
            ))}
          </Row>
        </section>
    </Layout>
  )
}
