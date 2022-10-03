import './selectDropdown.scss'

const SelectDropdown = ( props ) => {

    const { fieldName, fieldLabel, formik, options } = props; 
    
    return (
        <div className="form-control-wrapper">
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
            { formik.touched[fieldName] && formik.errors[fieldName] 
                ? <div className='error'>{formik.errors[fieldName]}</div> 
                : null}     
        </div>
    )
}
export default SelectDropdown;
