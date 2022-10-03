
const Input = ( props ) => {


    const { fieldName, fieldLabel, fieldType, formik } = props; 
    
    console.log( fieldType );

    return (
            <div className="form-control-wrapper">
                <label>{fieldLabel}</label>
                <input
                    type={fieldType}
                    {...(fieldType == "file" && 'multiple' )}
                    multiple
                    id={fieldName}
                    name={fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.fieldName}
                ></input>  
                { formik.touched[fieldName] && formik.errors[fieldName] 
                ? <div className='error'>{formik.errors[fieldName]}</div> 
                : null}    
            </div>
    )
}
export default Input;