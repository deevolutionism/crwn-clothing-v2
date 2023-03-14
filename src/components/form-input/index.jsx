import {FormInputLabel, Input, Group } from './styles.jsx'

const FormInput = ({label, ...inputProps}) => {
  return (
    <Group>
      <Input
        className="form-input"  
        {...inputProps}
      />
      { 
        label && (
          <FormInputLabel
            shrink={inputProps.value.length} 
          >
            {label}
          </FormInputLabel>
        )
      }
    </Group>
)
}

export default FormInput