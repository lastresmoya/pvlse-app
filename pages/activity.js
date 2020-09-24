import { Row, Col } from 'reactstrap';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/activity.module.scss';

export default function activity () {
    return (
        <>
            <NavBar />
            <Row>
                <Col className="p-5" md="5">
                        <Row>
                            <Col className="card-shadow" md="6">
                                <p> Hola</p>
                            </Col>
                            <Col className="bg-primary" md="6">
                                <p> Hola</p>
                            </Col>
                        </Row>
                </Col>        
                <Col className="bg-info" md="7">
                    <p>Hola</p>
                </Col>
            </Row>
            <Footer />
        </>
    )
}