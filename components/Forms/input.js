import styles from'../../styles/forms.module.scss'
import { FormGroup, Label, Input } from 'reactstrap';

export default function InputPvlse({
    label,
    placeholder,
    bgColor,
    textColor
}) {
    return (
        <div>
           <FormGroup>
                <Input className={bgColor} placeholder={placeholder} />
                <Label for="exampleEmail">{label}</Label>
            </FormGroup>
        </div>
    )
}
