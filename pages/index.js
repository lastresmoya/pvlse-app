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
    <div>
      <NavBar />
      <div>
        <Jumbotron
          className="text-center text-white pt-5 d-flex align-items-center flex-wrap justify-content-center"
          style={{
            background: `url('./img/home/bg-home.png') no-repeat`,
            backgroundSize: "cover",
            height: '100vh'
            }}>
          <div>
            <h1 className="display-3 pb-4 font-weight-bold">Discover your next activity</h1>
            <h2 className="pb-4">A world of extraordinary activities are waiting for you</h2>
            <div className="d-flex justify-content-center">
              <SearchNavBar
                firstPlaceholder="Activity"
                secondPlaceholder="Date"
                thirdPlaceholder="Location"
              />
            </div>
          </div>
        </Jumbotron>
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
