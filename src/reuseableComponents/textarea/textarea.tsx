import React from 'react'
import './textarea.scss'

type TextareaProps = {
    fieldLabel: string,
    fieldName: string,
    required: boolean,
    formik: {
        touched: Object
        errors: Object
        handleChange: Object,
        handleBlur: Object,
        values: Object
    }
}

const Textarea = (props: TextareaProps) => {

    const { fieldName, fieldLabel, required=true, formik } = props; 

    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }

    return (
            <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
                <label>{fieldLabel}{ required && <span className='required-flag'>*</span>}</label>
                <textarea
                    id={fieldName}
                    name={fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values[fieldName]}
                ></textarea>  
                { isThereAnError 
                ? <div className='error-message'>{formik.errors[fieldName]}</div> 
                : null}    
            </div>
    )
}

export default Textarea;