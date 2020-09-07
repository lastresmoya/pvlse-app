import styles from'../../styles/navbar.module.scss'
import { Input, ButtonToggle } from 'reactstrap'

export default function SearchNavBar() {
    return (
        <div className={`${styles.button_border} text-white d-flex py-1`}>
           <div className={`${styles.input_border} my-1`}>
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder="Activity" />
            </div>
           <div className={`${styles.input_border} my-1`}>
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder="Date" />
           </div>
           <div className="my-1">
                <Input size="sm" className="bg-secondary border-0 text-center" placeholder="Location" />
           </div>
           <div className="my-1">
           <ButtonToggle size="sm" className="mx-1" color="primary">primary</ButtonToggle>{' '}
           </div>
        </div>
    )
}
