import Link from 'next/link'
import Layout from '../components/Layout'
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import CardPvlse from '../components/Card'
import { PrismaClient } from '@prisma/client';
import SearchNavBar from '../components/SearchNavBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import categories from '../components/Card/data'
import CategoriesCard from '../components/Card/CategoriesCard'
import InputPlvse from '../components/Forms/input'
import PvlseForEveryoneCard from '../components/Card/PlvseForEveryoneCard'

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
  return (
    <div>
      <NavBar navBarClasses="py-3 position-absolute w-100" />
      <div>
        <Jumbotron
          className="text-center text-white pt-5 d-flex align-items-center rounded-0 flex-wrap justify-content-center"
          style={{
            background: `url('./img/home/bg-home.png') no-repeat`,
            backgroundSize: "cover",
            height: '100vh'
            }}>
          <div>
            <h1 className="display-3 pb-4 font-weight-bold">Discover your next activity</h1>
            <h2 className="pb-4 font-weight-bold">A world of extraordinary activities are waiting for you</h2>
            <div className="d-flex justify-content-center">
              <SearchNavBar
                firstPlaceholder="What are you looking?"
                secondPlaceholder="Where?"
                thirdPlaceholder="When?"
                backgroundColor="#F5F5F5"
              />
            </div>
          </div>
        </Jumbotron>
      </div>
      <Layout pageTitle="Home">
        <section className="pb-5">
            <h3 className="text-black text-center text-sm-left font-weight-bold mb-4">Top Rated</h3>
            <Row>
              {data.map((item) => (
                <Col xs="12" sm="4" className="mb-4" key= {item.id}>
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
            <h3 className="text-black text-center text-sm-left font-weight-bold mb-4">Popular</h3>
            <Row>
              {data.map((item) => (
                <Col xs="12" sm="4" className="mb-4" key= {item.id}>
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
            <h3 className="text-black text-center text-sm-left font-weight-bold mb-4">Categories</h3>
            <Row>
              {categoriesData.map((category) => (
                <Col className="mb-4" key= {category.id}>
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
        <div className="bg-secondary my-5 p-5">
          <Row>
            <Col xs="12" sm={{size: 5, offset: 1}}>
              <div className="text-white text-center text-sm-left h-100 d-flex align-items-center flex-wrap">
                  <h1 className="font-weight-bold">Get paid for your passion</h1>
                  <h5 className="font-weight-bold">Create a FREE account now and start earning money creating what you love</h5>
                  <form style={{width: '65%;'}}>
                    <InputPlvse inputClasses="bg-secondary" placeholder='Your Name'/>
                    <InputPlvse inputClasses="bg-secondary" placeholder='Type your E-mail'/>
                    <InputPlvse inputClasses="bg-secondary" placeholder='Create a password of 8 characters'/>
                    <Button color="light" size="md" className="rounded-lg px-5" block disabled>Sign Up</Button>
                  </form>
                </div>
            </Col>
            <Col sm={{size: 5}} className="d-none d-sm-block">
                <div className="position-absolute">
                  <img className="rounded mx-auto d-block" src="./img/home/girl-with-chile.png" />
                </div>
            </Col>
          </Row>
        </div>
      </section>
      <Layout>
        <section>
          <div className="mb-5">
            <h3 className="text-center mt-4 mb-5 font-weight-bold">PVLSE for <span className="text-primary">everyone</span></h3>
            <Row>
              <Col xs="12" md="4">
                <PvlseForEveryoneCard
                  img="./img/home/individuals.png"
                  title="Individuals"
                  subtitle="Learn new skills, discover activities and more."
                />
              </Col>
              <Col xs="12" md="4">
              <PvlseForEveryoneCard
                  img="./img/home/entrepreneurs.png"
                  title="Entrepreneurs"
                  subtitle="Start earning money doing what you like the most "
                />
              </Col>
              <Col xs="12" md="4">
              <PvlseForEveryoneCard
                  img="./img/home/business.png"
                  title="Business"
                  subtitle="Get tools to create content, measure results, receive payments and grow your business."
                />
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
      <section>
        <Footer />
      </section>
    </div>
  )
}
