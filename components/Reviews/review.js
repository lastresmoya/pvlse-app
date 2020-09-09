import styles from'../../styles/profile.module.scss'
import { Row, Col } from 'reactstrap'

export default function Review({
    reviewerImg,
    reviewerName,
    reviewerActivity,
    reviewerReaction,
    reviewerComments,
}) {
    return (
        <div className={`${styles.card_profile} card px-3 py-3 my-3`}>
            <Row className="no-gutters">
                <Col sm="3">
                    <img src={reviewerImg} alt="..." className="d-block m-auto" />
                </Col>
                <Col sm="7">
                <h5>{reviewerName}</h5>
                <p>Attended <a className="text-primary">{reviewerActivity}</a></p>
                </Col>
                <Col sm="2">
                  <img src={reviewerReaction} alt="..." className="d-block m-auto" />
                </Col>
            </Row>
            <div>
            <p>{reviewerComments}</p>
            </div>
        </div>
    )
}
