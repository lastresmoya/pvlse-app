import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { Button, Row, Col } from 'reactstrap';
import CardPvlse from '../components/Card'
import { PrismaClient } from '@prisma/client';

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const pvlses = await prisma.activities.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      place: true,
      level: true,
      userJoin: true,
      languages: true,
      // startDate: true,
      user: {
        select:{
          id: true,
          name: true
        }
      },
      categories: {
        select: {
          name: true,
          color: true
        }
      }
    }
  });
  return {
    props: {
      pvlses
    }
  };
}

export default function Home(pvlses) {
const data = pvlses.pvlses;
console.log(data)
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
            {data.map((item) => (
              <Col key= {item.id}>
                <CardPvlse
                  img="http://via.placeholder.com/640x360"
                  title= {item.name}
                  category={item.categories.name}
                  categoryColor={item.categories.color}
                  price={item.price}
                  hostPic="https://via.placeholder.com/150"
                  hostName={item.user.name}
                  modality={item.place}
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
