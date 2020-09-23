import React from 'react';
import {
  Card, CardImg,
} from 'reactstrap';
import styles from'../../styles/card.module.scss'

const CategoriesCard = (props) => {
  return (
    <div>
      <Card className={`${styles.categories_card} rounded-sm width-30vh-mobile border-0`}>
        <div className="position-relative">
          <CardImg top width="100%" src={props.img} className="rounded-top" alt={'Pvlse about ' + props.category} />
          <div style={{background: `${props.categoryColor}`}} className={`${styles.category_tag_card_} w-100 h1 text-white text-center position-absolute fixed-bottom `}>
            {props.category}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CategoriesCard;