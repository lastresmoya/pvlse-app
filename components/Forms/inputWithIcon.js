import styles from'../../styles/forms.module.scss'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, FormGroup } from 'reactstrap';

export default function InputWithIconPvlse({
    label,
    placeholder
}) {
    return (
        <div>
          <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder={placeholder} />
          </InputGroup>
          <Label for="exampleEmail">{label}</Label>
          </FormGroup>
        </div>
    )
}
