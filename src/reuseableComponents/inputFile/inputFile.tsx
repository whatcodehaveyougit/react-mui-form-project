import React from 'react'
import './inputFile.scss'

type InputFileProps = {
    fieldLabel: string,
    fieldName: string,
    fieldType: string,
    required: boolean,
    formik: {
        touched: Object
        errors: Object
        handleChange: Object,
        handleBlur: Object,
        values: Object
    }
}

const InputFile = ( props: InputFileProps ) => {

    const { fieldName, fieldLabel, fieldType, required, formik } = props; 
    
    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }
    
    return (
        <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
            <label>{fieldLabel}{ required && <span className='required-flag'>*</span>}</label>
            <input
                type={fieldType}
                className="input-file"
                multiple
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
export default InputFile;