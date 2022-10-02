import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import './form.scss'
import Input from '../../reuseableComponents/input/input'
import Button from '../../reuseableComponents/button/button'
import Textarea from '../../reuseableComponents/textarea/textarea'
import SelectDropdown from '../../reuseableComponents/selectDropdown/selectDropdown'


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


const UserForm = () => {

    const navigate = useNavigate();

    const onSubmit = (values, submitProps) => {
        console.log( "Form Submitted" + JSON.stringify(values) )
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        localStorage.setItem('values', JSON.stringify( values ) );
        navigate('/form-submitted');    
    }

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

    const clientPrescenceOptions = [
        {
            value: "clientPresent",
            text: "Client signed"
        },
        {
            value: "clientNotPresent",
            text: "Nobody was there"
        },
    ]


    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <Input fieldName="clientName" fieldLabel="Name of Client: " formik={formik} />
                <Input fieldName="dateOfIntervention" fieldLabel="Date of Intervention: : " formik={formik} />
                <Input fieldName="timeOfIntervention" fieldLabel="Time of Intervention: " formik={formik} />
                <Input fieldName="nameOfIntervention" fieldLabel="Name of Intervention: " formik={formik} />
                <Input fieldName="clientEmail" fieldLabel="Email of Client: " formik={formik} />

                <div className="form-control-wrapper">
                    <label>What type of appointment was it? </label>
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
                <>
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
                    <SelectDropdown 
                        fieldName="clientPrescence" 
                        fieldLabel="Was client present? " 
                        formik={formik} 
                        options={clientPrescenceOptions} />
                </>
            )}
               <Textarea fieldName="reportPublic" fieldLabel="Report (visable by client):  " formik={formik} />
               <Textarea fieldName="reportPrivate" fieldLabel="Remarks for support (invisible to client):  " formik={formik} />

                
                <div className='form-control-wrapper'>
                    <Button
                        type="submit"
                        classes="btn primary-bg"
                        text="Submit Form"
                    ></Button>
                </div> 

            </form>
        </>
    )
}

export default UserForm;