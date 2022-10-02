import { useState } from 'react'
import { useFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './form.scss'

const validationSchema = Yup.object().shape({
    clientName: Yup.string().min(3, "It's too short").required("Required"),
    // dateOfIntervention: Yup.string().required("Required"),
    // timeOfIntervention: Yup.string().required("Required"),
    // nameOfIntervention: Yup.string().required("Required"),
    // clientAddress: Yup.string().required("Required"),
    // appoinmentType: Yup.string().oneOf(["quote", "sav", "intervention", "cancelled"], "Required").required("Required"),
    // wasProblemResolved: Yup.string().oneOf(["yes", "noReason1", "noReason2", "noReason3"], "Required").required("Required"),
    // reportPublic: Yup.string().required("Required"),
    // clientPrescence: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required"),
    // clientEmail: Yup.string().email("Enter valid email")
})

const onSubmit = values => {
    console.log( "Form Submitted" + JSON.stringify(values) )
    localStorage.setItem('values', JSON.stringify( values ) );

    console.log('hello')
}

// const initialValues = {
//     clientName: '',
//     dateOfIntervention: '',
//     timeOfIntervention: '',
//     nameOfIntervention: '',
//     clientAddress: '',
//     photosOfIntervention: [],
//     appoinmentType: '',
//     clientEmail: '',
// }


const UserForm = () => {

    const formik = useFormik({
        initialValues: {
            clientName: '',
            dateOfIntervention: '',
            timeOfIntervention: '',
            nameOfIntervention: '',
            clientAddress: '',
            photosOfIntervention: [],
            appoinmentType: '',
            wasProblemResolved: '',
            reportPublic: '',
            reportPrivate: '',
            clientPrescence: '',
            clientEmail: '',
        },
        onSubmit,
        validationSchema
    })

    // console.log( formik.values )
   
    // console.log( formik.touched )

    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <div className="form-control-wrapper">
                    <label>Name of Client: </label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        values={formik.values.clientName}
                    ></input>  
                    { formik.touched.clientName && formik.errors.clientName ? <div className='error'>{formik.errors.clientName}</div> : null}    
                </div>
                <div className='form-control-wrapper'>
                    <label>Date of Intervention: </label>
                    <input
                        type="date"
                        id="dateOfIntervention"
                        name="dateOfIntervention"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    ></input>
                    { formik.touched.dateOfIntervention && formik.errors.dateOfIntervention ? <div className='error'>{formik.errors.dateOfIntervention}</div> : null}    
                </div>
                <div className='form-control-wrapper'>
                    <label>Time of Intervention: </label>
                    <input
                        type="time"
                        id="timeOfIntervention"
                        name="timeOfIntervention"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.timeOfIntervention}
                    ></input> 
                    {  formik.touched.timeOfIntervention && formik.errors.timeOfIntervention ? <div className='error'>{formik.errors.timeOfIntervention}</div> : null }    
                </div>
                <div className="form-control-wrapper">
                    <label>Name of Intervention: </label>
                    <input
                        type="text"
                        id="nameOfIntervention"
                        name="nameOfIntervention"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nameOfIntervention}
                    ></input>  
                    { formik.touched.nameOfIntervention && formik.errors.nameOfIntervention ? <div className='error'>{formik.errors.nameOfIntervention}</div> : null}    
                </div>
                <div className="form-control-wrapper">
                    <label>Photos of Intervention: </label>
                    <input
                        type="file"
                        multiple
                        id="photosOfIntervention"
                        name="photosOfIntervention"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.photosOfIntervention}
                    ></input>  
                    { formik.touched.photosOfIntervention && formik.errors.photosOfIntervention ? <div className='error'>{formik.errors.photosOfIntervention}</div> : null}    
                </div>
                <div className="form-control-wrapper">
                    <label>What type of app was it? </label>
                    <select 
                        id="appoinmentType"
                        name="appoinmentType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.appoinmentType}
                        >
                        <option value="quote">Quote</option>
                        <option value="sav">SAV</option>
                        <option value="intervention">Intervention</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    { formik.touched.appoinmentType && formik.errors.appoinmentType 
                        ? <div className='error'>{formik.errors.appoinmentType}</div> 
                        : null}    
                </div>
                { formik.values.appoinmentType == "sav" && (
                <div className="form-control-wrapper">
                    <label>Was the problem resolved? </label>
                    <select 
                        id="wasProblemResolved"
                        name="wasProblemResolved"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.appoinmentType}
                    >
                        <option value="yes">Yes</option>
                        <option value="noReason1">No, need to return</option>
                        <option value="noReason2">No, order material and return</option> 
                        <option value="noReason3">No, not sure why</option>
                    </select>
                </div>
            )}
                <div className="form-control-wrapper">
                    <label>Report (visable by client): </label>
                    <input
                        type="textarea"
                        id="reportPublic"
                        name="reportPublic"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reportPublic}
                    ></input>  
                    { formik.touched.reportPublic && formik.errors.reportPublic ? <div className='error'>{formik.errors.reportPublic}</div> : null}    
                </div>
                <div className="form-control-wrapper">
                    <label>Remarks for support (invisible to client): </label>
                    <input
                        type="textarea"
                        id="reportPrivate"
                        name="reportPrivate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reportPrivate}
                    ></input>  
                    { formik.touched.reportPrivate && formik.errors.reportPrivate ? <div className='error'>{formik.errors.reportPrivate}</div> : null}    
                </div>
                <div className="form-control-wrapper">
                    <label>What type of app was it? </label>
                    <select 
                        id="clientPrescence"
                        name="clientPrescence"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.clientPrescence}
                        >
                        <option value="clientPresent">Client signed</option>
                        <option value="clientNotPresent">Nobody was there</option>
                    </select>
                    { formik.touched.clientPrescence && formik.errors.clientPrescence 
                        ? <div className='error'>{formik.errors.clientPrescence}</div> 
                        : null}    
                </div>
                <div className="form-control-wrapper">
                    <label>Email of Client: </label>
                    <input
                        type="text"
                        id="clientEmail"
                        name="clientEmail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        values={formik.values.clientEmail}
                    ></input>  
                    { formik.touched.clientEmail && formik.errors.clientEmail ? <div className='error'>{formik.errors.clientEmail}</div> : null}    
                </div>
                <div className='form-control-wrapper'>
                    <button
                        type="submit"
                        className='btn primary-bg'
                        >Button
                    </button>
                </div> 

            </form>
        </>
    )
}

export default UserForm;