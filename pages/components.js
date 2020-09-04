import { useRouter } from 'next/router'
import { Button, Row, Col } from 'reactstrap';
import Layout from '../components/Layout'

export default function components() {
  const router = useRouter()
  return (
    <div>
      <Layout pageTitle="Components">
        <p className="text-muted" onClick={() => router.push('/')}>Go back</p>
        <Row>
          <Col>
            <h3 className="text-primary">Button</h3>
            <Button color="primary" size="md" className="rounded-lg px-5">Primary</Button>
            <Button color="secondary" size="md" className="rounded-lg px-5">Secondary</Button>
            <Button outline color="primary" size="md" className="rounded-lg px-5">Outline</Button>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}
