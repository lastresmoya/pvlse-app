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
  date,
  hour,
  price,
  like,
  love
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
          <CardTitle className="h5 font-weight-normal d-flex">
            <p>{title}</p>
            <p className="h4 ml-auto">${price}</p>
          </CardTitle>
          <CardSubtitle className="d-flex">
            <img width="20" height="20" className="figure-img img-fluid rounded-circle" src={hostPic}/>
            <small className="text-muted ml-1">{hostName}</small>
          </CardSubtitle>
          <CardText>
            {place}
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
