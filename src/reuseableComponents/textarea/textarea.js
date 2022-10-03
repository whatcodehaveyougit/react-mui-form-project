
const Textarea = (props) => {

    const { fieldName, fieldLabel, formik } = props; 

    return (
            <div className="form-control-wrapper">
                <label>{fieldLabel}</label>
                <textarea
                    type="text"
                    id={fieldName}
                    name={fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.fieldName}
                ></textarea>  
                { formik.touched[fieldName] && formik.errors[fieldName] 
                ? <div className='error'>{formik.errors[fieldName]}</div> 
                : null}    
            </div>
    )
}

export default Textarea;