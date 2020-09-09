import styles from'../../styles/navbar.module.scss'
import { Input, Button } from 'reactstrap'

export default function SearchNavBar({
    firstPlaceholder,
    secondPlaceholder,
    thirdPlaceholder
}) {
    return (
        <div className={`${styles.button_border} text-white d-flex py-1`}>
           <div className={`${styles.input_border} my-1`}>
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder={firstPlaceholder} />
            </div>
           <div className={`${styles.input_border} my-1`}>
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder={secondPlaceholder} />
           </div>
           <div className="my-1">
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder={thirdPlaceholder} />
           </div>
           <div className="my-1">
             <Button color="primary" size="sm" className="rounded-lg px-3 mr-3">Search</Button>
           </div>
        </div>
    )
}
