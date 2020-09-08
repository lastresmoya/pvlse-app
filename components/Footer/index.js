import { Row, Col, Button, Container } from 'reactstrap'
import styles from'../../styles/footer.module.scss'
export default function Footer() {
    return (
        <footer className="bg-secondary pt-2 pb-3">
           <Row>
              <Col sm="12" md={{ size: 4, offset: 4 }} className="d-flex pt-3 justify-content-between">
                <Button color="link" className={`${styles.footer_link}`}>Privacy Policy</Button>
                <Button color="link" className={`${styles.footer_link}`}>Terms Of Service</Button>
                <Button color="link" className={`${styles.footer_link}`}>FAQ</Button>
              </Col>
            </Row>
            <img className="d-block m-auto py-3" src="./img/general/logo-white.svg"/>
            <div>
                <p className="text-white text-center mb-0" style={{fontSize:"12px"}}>© 2020 PVLSE Technologies Limited (No. SC655800) Atria One, 144 Morrison Street, Edinburgh EH3 8EX - All rights reserved</p>
            </div>
        </footer>
    )
}
