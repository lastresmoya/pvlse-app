import { useRouter } from 'next/router'
import { Row, Col } from 'reactstrap';
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import MainCardProfile from '../components/MainCardProfile'
import UpcomingActivites from '../components/UpcomingActivites'
import AllActivities from '../components/AllActivities'
import AboutProfile from '../components/AboutProfile'
import Reviews from '../components/Reviews'
import GalleryProfile from '../components/GalleryProfile'
import ReactionsProfile from '../components/ReactionsProfile'

export default function components() {
  const router = useRouter()
  return (
    <div>
      <NavBar navBarClasses="bg-secondary py-3" />
      <Layout pageTitle="Profile" backgroundColor="#4756EF;">
          <Row style={{marginBottom: "20%;"}}>
            <Col style={{marginBottom: "-25%;"}}>
              <MainCardProfile />
            </Col>
          </Row>
      </Layout>
      <Layout>
          <Row className="flex-column-reverse flex-md-row">
            <Col md="12" lg="7">
              <UpcomingActivites />
              <AllActivities />
              <AboutProfile
              userImg="./img/profile/profile-img2.png"
              userName="Emma Fischer"
              userDescription="I discovered yoga while working at an advertising agency in New York City. Seven years into my job, I was burnt out, disillusioned by the corporate world, and looking for something more meaningful. There was a studio next to the office where I began taking classes. It started with two days a week, but within six months, I was a daily student. I started leaving work early to get to my favorite teacher’s classes, and very quickly, I realized my yoga was more important than my job."
              userDescriptionShort="I discovered yoga while working at an advertising agency in New York City. Seven years into my job, I was burnt out, disillusioned by the corporate world, and..."
              />
            </Col>
            <Col lg="5">
              <ReactionsProfile
                userName="Emma"
                loveReactions="105"
                likeReactions="38"
                dislikeReactions="05"
                angryReactions="01"
                featureFan="Adriana Hale"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="10"> 
              <Reviews />
            </Col>
          </Row>
          <Row>
            <Col lg="11"> 
              <GalleryProfile />
            </Col>
          </Row>
      </Layout>
      <section>
          <Footer />
        </section>
    </div>
  )
}
