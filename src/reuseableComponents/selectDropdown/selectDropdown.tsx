import './selectDropdown.scss'
import React from 'react'
import { OptionItem } from '../../types/types'

type SelectProps = {
    fieldLabel: string,
    fieldName: string,
    fieldType: string,
    required: boolean,
    options: Array<OptionItem>
    formik: {
        touched: Object
        errors: Object
        handleChange: Object,
        handleBlur: Object,
        values: Object
    }
}

const SelectDropdown = ( props: SelectProps ) => {

    const { fieldName, fieldLabel, formik, required=true, options } = props; 
    
    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }
    
    return (
        <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
            <label>{fieldLabel}{ required && <span className='required-flag'>*</span>}</label>
            <select 
                id={fieldName}
                name={fieldName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[fieldName]}
                >
                { options.map((option: OptionItem) => (
                    <option key={option.value} value={option.value }>{option.text}</option>
                ))
                }
            </select>
            { isThereAnError
                ? <div className='error-message'>{formik.errors[fieldName]}</div> 
                : null}     
        </div>
    )
}
export default SelectDropdown;
