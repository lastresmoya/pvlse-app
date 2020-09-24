import {
    Card, CardImg,
} from 'reactstrap';
import styles from'../../styles/card.module.scss'

const PvlseForEveryoneCard = (props) => {
    return (
      <div>
        <Card className={`${styles.for_everyone_card} border-0 mb-4`}>
            <div className="position-relative" style={{height: '35vh'}}>
            <CardImg top width="100%" height="100%" src={props.img} className="rounded" />
            </div>
        </Card>
        <div className="text-center">
            <h4 className="text-primary font-weight-bold">{props.title}</h4>
            <p className="font-weight-bold">{props.subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default PvlseForEveryoneCard;