import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from 'reactstrap';
  
  export default function CardNextActivity({
    modality,
    activity,
    timeLine,
  }) {
    return (
        <Card className="rounded-sm my-4 py-3 border-0">
          <CardBody>
            <CardTitle className="text-center">
              <h6 className="font-weight-bold">Next Activity!</h6>
              <h4 className="font-weight-bold">{activity}</h4>
              <h2 className="font-weight-bold text-primary">{timeLine}</h2>
            </CardTitle>
            <CardSubtitle className="d-flex justify-content-center">
              <div>
                <img src="./img/profile/place-icon.svg"/>
                <small className="text-muted ml-1">{modality}</small>
              </div>
            </CardSubtitle>
            <CardSubtitle>
                <div className="d-flex justify-content-center my-2">
                    <div>
                        <img src="./img/profile/friends.svg" alt="..." className="img-fluid mr-2" />
                    </div>
                    <div>
                        <small><span className="font-weight-bold">Tom White</span> and 12 friends just reserved.</small>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div>
                      <Button color="primary" size="md" className="rounded-lg px-3 font-weight-bold">Reserve Now</Button>
                    </div>
                    <div className="d-flex align-items-center">
                      <a href="" className="font-weight-bold text-dark"><u>Invite Friends!</u></a>
                    </div>
                </div>
                </CardSubtitle>
          </CardBody>
        </Card>
    )
  }
  