import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import styles from'../../styles/card.module.scss'

export default function CardPvlse({
  img,
  category,
  categoryColor,
  title,
  hostName,
  hostPic,
  place,
  modality,
  date,
  hour,
  price,
  like,
  love,
}) {
  return (
    <div>
      <Card className="rounded-sm">
        <div className="position-relative">
          <CardImg top width="100%" src={img} className="rounded-top" alt={'Pvlse about ' + category} />
          <div style={{background: `${categoryColor}`}} className={`${styles.category_tag_card} text-white position-absolute fixed-bottom `}>
            {category}
          </div>
        </div>
        <CardBody>
          <CardTitle className="h5 font-weight-bold d-flex">
            <p>{title}</p>
            <p className="h4 ml-auto">${price}</p>
          </CardTitle>
          <CardSubtitle className="d-flex">
            <img width="20" height="20" className="figure-img img-fluid rounded-circle" src={hostPic}/>
            <small className="text-muted mx-1">{hostName}</small>
            <div className="d-flex">
              <div className="d-flex mr-1">
                  <div>
                      <img src="./img/profile/love-reaction.svg" width="16" />
                  </div>
                  <div className="ml-1">
                  <small className="font-weight-bold text-primary">105</small>
                  </div>
              </div>
              <div className="d-flex">
                  <div>
                      <img src="./img/profile/like-reaction.svg" width="16" />
                  </div>
                  <div className="ml-1">
                  <small className="font-weight-bold text-primary">38</small>
                  </div>
              </div>    
            </div>     
          </CardSubtitle>
          <CardSubtitle className="d-flex justify-content-between mt-2">
            <div>
              <img src="./img/profile/place-icon.svg"/>
              <small className="text-muted ml-1">{modality}</small>
            </div>
            <div>
              <img src="./img/profile/date-icon.svg"/>
              <small className="text-muted ml-1">{date}</small>
            </div>
            <div>
              <img src="./img/profile/hour-icon.svg"/>
              <small className="text-muted ml-1">{hour}</small>
            </div>
          </CardSubtitle>
          <CardText>
            {place}
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
