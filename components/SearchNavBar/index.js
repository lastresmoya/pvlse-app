import styles from'../../styles/navbar.module.scss'
import { Input, Button } from 'reactstrap'
import InputPlvse from '../Forms/input'

export default function SearchNavBar({
    firstPlaceholder,
    secondPlaceholder,
    thirdPlaceholder,
    backgroundColor,
    inputBgColor,
}) {
    return (
        <div style={{background: `${backgroundColor}`}} className={`${styles.button_border} text-white d-flex align-items-center px-2 py-2`}>
           <InputPlvse inputClasses={`${inputBgColor} border-0`} placeholder={firstPlaceholder}/>
           <InputPlvse inputClasses={`${inputBgColor} border-0`} placeholder={secondPlaceholder}/>
           <InputPlvse inputClasses={`${inputBgColor} border-0`} placeholder={thirdPlaceholder}/>
           <div className="my-1">
             <Button color="primary" size="sm" className="rounded-lg px-3 mr-3">Search</Button>
           </div>
        </div>
    )
}
