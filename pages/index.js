import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { Row, Col, Jumbotron } from 'reactstrap';
import CardPvlse from '../components/Card'
import { PrismaClient } from '@prisma/client';
import SearchNavBar from '../components/SearchNavBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import categories from '../components/CategoriesCard/data'
import CategoriesCard from '../components/CategoriesCard/index'

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

export default function Home(pvlses) {
const data = pvlses.pvlses;
const categoriesData = categories
console.log(data, categories)
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
      <Layout pageTitle="Home">
        <section className="pb-5">
            <h3 className="text-black font-weight-bold">Top Rated</h3>
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
            <h3 className="text-black font-weight-bold">Popular</h3>
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
            <h3 className="text-black font-weight-bold">Categories</h3>
            <Row>
              {categoriesData.map((category) => (
                <Col key= {category.id}>
                  <CategoriesCard
                    img={category.img}
                    category= {category.name}
                    categoryColor={category.color}
                  />
                </Col>
              ))}
            </Row>
          </section>
      </Layout>
      <section>
        <Footer />
      </section>
    </div>
  )
}
