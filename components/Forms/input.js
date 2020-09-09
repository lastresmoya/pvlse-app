import styles from'../../styles/forms.module.scss'
import { FormGroup, Label, Input } from 'reactstrap';

export default function InputPvlse({
    label,
    placeholder
}) {
    return (
        <div>
           <FormGroup>
                <Input placeholder={placeholder} />
                <Label for="exampleEmail">{label}</Label>
            </FormGroup>
        </div>
    )
}
