import './selectDropdown.scss'

const SelectDropdown = ( props ) => {

    const { fieldName, fieldLabel, formik, options } = props; 
    
    let isThereAnError = false;
    if ( formik.touched[fieldName] && formik.errors[fieldName] ) {
        isThereAnError = true;
    }
    
    return (
        <div className={"form-control-wrapper " + (isThereAnError ? 'error' : '')}>
            <label>{fieldLabel}</label>
            <select 
                id={fieldName}
                name={fieldName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fieldName}
                >
                { options.map((option) => (
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
