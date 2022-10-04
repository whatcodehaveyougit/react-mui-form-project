import './textarea.scss'

const Textarea = (props) => {

    const { fieldName, fieldLabel, formik } = props; 

    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }

    return (
            <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
                <label>{fieldLabel}</label>
                <textarea
                    type="text"
                    id={fieldName}
                    name={fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.fieldName}
                ></textarea>  
                { isThereAnError 
                ? <div className='error-message'>{formik.errors[fieldName]}</div> 
                : null}    
            </div>
    )
}

export default Textarea;