import { Row, Col, Badge, Button } from 'reactstrap'
import ProfileImg from '../ProfileImg'
import styles from'../../styles/profile.module.scss'
import CardNextActivity from '../Card/CardNextActivity'

export default function MainCardProfile() {
    return (
        <div className={`${styles.card_profile} card px-4 py-3 my-5`}>
          <Row>
            <Col md="3">
              <ProfileImg />
              <div className="d-flex justify-content-center mt-5">
                <div className="mx-2">
                <Button color="link" className={`${styles.button_icon}`}><img src="./img/profile/mail-icon.svg"/></Button>
                </div>
                <div className="mx-2">
                <Button color="link" className={`${styles.button_icon}`}><img src="./img/profile/share-icon.svg"/></Button>
                </div>
              </div>
            </Col>
            <Col md="5">
            <div className="d-flex flex-wrap h-100">
              <div>
                <h3 className="font-weight-bold">Emma Fischer
                    <Badge className="ml-3 px-3" pill size="md" color="primary">
                    <img src="./img/profile/profile-img.svg" width="30" alt="..." className="img-fluid mr-2" />
                    Follow
                    </Badge>
                </h3>
              </div>
              <div>
                <p className="font-weight-bold">I’m a lover of animals and I teach animals origami</p>
              </div>
              <div>
                <p className="font-weight-bold"><span className="text-primary">62</span> Activities - <span className="text-primary">120</span> Followers - <span className="text-primary">52</span> Followings</p>
              </div>
              <div>
                <Badge className="mr-4 px-3 py-2" pill color="light">Vegetarian</Badge>
                <Badge className="mr-4 px-3 py-2" pill color="light">Nature</Badge>
                <Badge className="mr-4 px-3 py-2" pill color="light">Animals</Badge>
                <Badge className="px-3 py-2" pill color="light">25+</Badge>
              </div>
                <div className="d-flex">
                    <div>
                        <img src="./img/profile/friends.svg" alt="..." className="img-fluid mr-4" />
                    </div>
                    <div>
                        <p><span className="font-weight-bold">Tom White, Siya Morris, Saira Shea</span> and 117 friends follows Emma Fischer.</p>
                    </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <CardNextActivity
                modality="Online"
                activity="Yoga for beginners"
                timeLine="00:29:30 hs"
              />
            </Col>
           </Row>
        </div>
    )
}
