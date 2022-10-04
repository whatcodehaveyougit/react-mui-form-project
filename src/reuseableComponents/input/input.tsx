import React from 'react'
import './input.scss'

type InputProps = {
    fieldLabel: string,
    fieldName: string,
    fieldType: string,
    formik: {
        touched: Object
        errors: Object
        handleChange: Object,
        handleBlur: Object,
        values: Object
    }
}

const Input = ( props: InputProps ) => {

    const { fieldName, fieldLabel, fieldType, formik } = props; 
    
    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }

    return (
        <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
                <label>{fieldLabel}</label>
                <input
                    type={fieldType}
                    id={fieldName}
                    name={fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values[fieldName]}
                ></input>  
                { isThereAnError
                ? <div className='error-message'>{formik.errors[fieldName]}</div> 
                : null}    
            </div>
    )
}
export default Input;