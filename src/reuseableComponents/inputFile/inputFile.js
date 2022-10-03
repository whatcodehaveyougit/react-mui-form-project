import './inputFile.scss'

const InputFile = ( props ) => {

    const { fieldName, fieldLabel, fieldType, formik } = props; 
        
    return (
            <div className="form-control-wrapper">
                <label>{fieldLabel}</label>
                <input
                    type={fieldType}
                    className="input-file"
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
export default InputFile;