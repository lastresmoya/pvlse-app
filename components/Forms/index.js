import styles from'../../styles/forms.module.scss'
import { Button, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import InputPlvse from './input'
import InputWithIcon from './inputWithIcon'
import SearchNavBar from '../SearchNavBar/index'
import SelectPlvse from './select'

export default function Forms() {
    return (
        <div>
            <Form>
                <Row form>
                  <Col md={6}>
                    <InputPlvse
                      label='Email'
                      placeholder='placeholder'
                    />
                  </Col>
                  <Col md={6}>
                    <InputWithIcon
                     label='Email'
                     placeholder='placeholder' />
                  </Col>
                </Row>
            </Form>
            <div>
              <Row form>
                <Col md={6}>
                    <SearchNavBar
                      firstPlaceholder="What are you looking?"
                      secondPlaceholder="Where?"
                      thirdPlaceholder="When?"
                    />
                </Col>
                <Col md={6}>
                    <SelectPlvse />
                </Col>
              </Row>
            </div>
        </div>
    )
}
