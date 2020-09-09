import { useRouter } from 'next/router'
import { Button, Row, Col, Container } from 'reactstrap';
import Layout from '../components/Layout'
import CardPvlse from '../components/Card'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Forms from '../components/Forms'
import MainCardProfile from '../components/MainCardProfile'
import UpcomingActivites from '../components/UpcomingActivites'
import AllActivities from '../components/AllActivities'
import AboutProfile from '../components/AboutProfile'
import Reviews from '../components/Reviews'

export default function components() {
  const router = useRouter()
  return (
    <div>
      <NavBar />
      <Layout pageTitle="Profile">
          <Row>
            <Col>
              <MainCardProfile />
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <UpcomingActivites />
              <AllActivities />
              <AboutProfile
              userImg="./img/profile/profile-img2.png"
              userName="Emma Fischer"
              userDescription="I discovered yoga while working at an advertising agency in New York City. Seven years into my job, I was burnt out, disillusioned by the corporate world, and looking for something more meaningful. There was a studio next to the office where I began taking classes. It started with two days a week, but within six months, I was a daily student. I started leaving work early to get to my favorite teacher’s classes, and very quickly, I realized my yoga was more important than my job."
              />
              <Reviews />
            </Col>
            <Col>
            </Col>
          </Row>
      </Layout>
      <section>
          <Footer />
        </section>
    </div>
  )
}
