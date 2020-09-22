import { useRouter } from 'next/router'
import { Button, Row, Col } from 'reactstrap';
import Layout from '../components/Layout'
import CardPvlse from '../components/Card'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Forms from '../components/Forms'
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

export default function components(pvlses) {
  const data = pvlses.pvlses;
  console.log(data)
  const router = useRouter()
  return (
    <div>
      <NavBar />
      <Layout pageTitle="Components">
        <p className="text-muted" onClick={() => router.push('/')}>Go back</p>
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
        <section className="pb-5">
          <h3 className="text-primary">Button</h3>
          <Row>
            <Col>
              <Button color="primary" size="md" className="rounded-lg px-5">Primary</Button>
              <Button color="secondary" size="md" className="rounded-lg px-5">Secondary</Button>
              <Button outline color="primary" size="md" className="rounded-lg px-5">Outline</Button>
            </Col>
          </Row>
        </section>
        <section className="pb-5">
          <h3 className="text-primary">Cards</h3>
          <Row>
            <Col>
              <CardPvlse
                img="http://via.placeholder.com/640x360"
                title="Yoga for beginners"
                category="Sports & Fitness"
                categoryColor="#63C378"
                price="25"
                hostPic="https://via.placeholder.com/150"
                hostName="Emma Fischer"
                modality="Online"
                date="22 July, 2020"
                hour="15:00 hr"
              />
            </Col>
            <Col>
              <CardPvlse
                img="http://via.placeholder.com/640x360"
                title="Yoga for beginners"
                category="Sports & Fitness"
                categoryColor="#63C378"
                price="25"
                hostPic="https://via.placeholder.com/150"
                hostName="Emma Fischer"
                modality="Online"
                date="22 July, 2020"
                hour="15:00 hr"
              />
            </Col>
            <Col>
              <CardPvlse
                img="http://via.placeholder.com/640x360"
                title="Yoga for beginners"
                category="Sports & Fitness"
                categoryColor="#63C378"
                price="25"
                hostPic="https://via.placeholder.com/150"
                hostName="Emma Fischer"
                modality="Online"
                date="22 July, 2020"
                hour="15:00 hr"
              />
            </Col>
          </Row>
        </section>
        <section>
          <Forms />
        </section>
      </Layout>
      <section>
          <Footer />
        </section>
    </div>
  )
}
