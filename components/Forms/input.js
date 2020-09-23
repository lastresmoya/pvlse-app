import styles from'../../styles/forms.module.scss'
import { FormGroup, Label, Input } from 'reactstrap';

export default function InputPvlse({
    label,
    placeholder,
    inputClasses,
}) {
    return (
        <div>
           <FormGroup className="mb-2">
                <Input className={`${inputClasses}`} placeholder={placeholder} />
                <Label for="exampleEmail">{label}</Label>
            </FormGroup>
        </div>
    )
}
