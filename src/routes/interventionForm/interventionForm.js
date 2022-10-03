import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import './interventionForm.scss'
import Input from '../../reuseableComponents/input/input'
import Button from '../../reuseableComponents/button/button'
import Textarea from '../../reuseableComponents/textarea/textarea'
import SelectDropdown from '../../reuseableComponents/selectDropdown/selectDropdown'


const validationSchema = Yup.object().shape({
    clientName: Yup.string().min(3, "It's too short").required("Required"),
    dateOfIntervention: Yup.string().required("Required"),
    timeOfIntervention: Yup.string().required("Required"),
    nameOfIntervention: Yup.string().required("Required"),
    clientAddress: Yup.string().required("Required"),
    clientEmail: Yup.string().email("Enter valid email"),
    appointmentType: Yup.string().oneOf(["quote", "sav", "intervention", "cancelled"], "Required").required("Required"),
    
    // Optional part of form - Quote 
    reportPublicQuote: Yup.string().when('appointmentType', {
        is: "quote",
        then: Yup.string().required('Required'),
    }),
    arrivalTimeAtClientQuote: Yup.string().when('appointmentType', {
        is: "quote",
        then: Yup.string().required('Required'),
    }),
    durationOfAppointmentQuote: Yup.string().when('appointmentType', {
        is: "quote",
        then: Yup.string().required('Required'),
    }),

    // Optional part of form - SAV 
    wasProblemResolvedSav: Yup.string().when('appointmentType', {
        is: "sav",
        then: Yup.string().oneOf(["yes", "noReason1", "noReason2", "noReason3"], "Required").required("Required")
        .required('Required'),
    }),
    clientPrescenceSav: Yup.string().when('appointmentType', {
        is: "sav",
        then: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required")
        .required('Required'),
    }),
    
    // Optional part of form - Intervention     
    wasClientBilledIntervention: Yup.string().when('appointmentType', {
        is: "intervention",
        then: Yup.string().oneOf(["option1", "option2", "option3", "option4"], "Required").required("Required")
        .required('Required'),
    }),
    clientPrescenceIntervention: Yup.string().when('appointmentType', {
        is: "intervention",
        then: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required")
        .required('Required'),
    }),
    clientPrescenceIntervention: Yup.string().when('appointmentType', {
        is: "intervention",
        then: Yup.string().oneOf(["clientPresent", "clientNotPresent"], "Required").required("Required")
        .required('Required'),
    }),
    
    
    // Optional part of form - RDV cancelled
    reasonsForCancellation: Yup.string().when('appointmentType', {
        is: "cancelled",
        then: Yup.string().required("Required")
        .required('Required'),
    }),
    arrivalTimeAtClientCancelled: Yup.string().when('appointmentType', {
        is: "cancelled",
        then: Yup.string().required('Required'),
    }),
    durationOfInterventionCancelled: Yup.string().when('appointmentType', {
        is: "cancelled",
        then: Yup.string().required('Required'),
    }),
})


const UserForm = () => {

    const navigate = useNavigate();

    const onSubmit = (values, submitProps) => {
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
            clientEmail: '',
            appointmentType: '',
            reportPublicQuote: '',
            reportPrivateQuote: '',
            arrivalTimeAtClientQuote: '',
            durationOfAppointmentQuote: '',
            wasProblemResolvedSav: '',
            clientPrescenceSav: '',
            clientPrescenceIntervention: '',
            wasClientBilledIntervention: '',
            reasonsForCancellation: '',
            arrivalTimeAtClientCancelled: '',
            durationOfInterventionCancelled: ''
        },
        onSubmit,
        validationSchema
    })

    const clientPrescenceOptions = [
        {
            value: "",
            text: ""  
         },
        {
            value: "clientPresent",
            text: "Client signed"
        },
        {
            value: "clientNotPresent",
            text: "Nobody was there"
        }
    ]


    const wasProblemResolvedOptions = [
        {
            value: "",
            text: ""  
         },
        {
           value: "yes",
           text: "Yes"  
        },
        {
           value: "noReason1",
           text: "No, need to return"  
        },
        {
            value: "noReason2",
            text: "No, order material and return"  
         },
         {
           value: "noReason3",
           text: "No, not sure why"  
        }
    ]

    const appointmentTypeOptions = [
        {
            value: "",
            text: ""  
         },
        {
           value: "quote",
           text: "Quote"  
        },
        {
           value: "sav",
           text: "SAV"  
        },
        {
            value: "intervention",
            text: "Intervention"  
         },
         {
           value: "cancelled",
           text: "Cancelled"  
        },
    ]

    const durationOfAppointmentOptions = [
        {
            value: "",
            text: ""  
        },
        {
           value: "0min",
           text: "0 min"  
        },
        {
           value: "10mins",
           text: "10 mins"  
        },
        {
            value: "20mins",
            text: "20 mins"  
         },
         {
           value: "30mins",
           text: "30 mins"  
        },
        {
            value: "1hour",
            text: "1 hour"  
         },
    ]

    const wasClientBilledOptions = [
        {
            value: "",
            text: ""  
        },
        {
           value: "option1",
           text: "1 - Intervention Finished"  
        },
        {
           value: "option2",
           text: "2 - Intervention finished and new estimate todo"  
        },
        {
            value: "option3",
            text: "3 - Return to finish"  
         },
         {
           value: "option4",
           text: "4 - Other"  
        },
    ]


    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <Input fieldName="clientName" fieldType="text" fieldLabel="Name of Client: " formik={formik} />
                <Input fieldName="dateOfIntervention" fieldType="date" fieldLabel="Date of Intervention: " formik={formik} />
                <Input fieldName="timeOfIntervention"  fieldType="time" fieldLabel="Time of Intervention: " formik={formik} />
                <Input fieldName="nameOfIntervention" fieldType="text" fieldLabel="Name of Intervention: " formik={formik} />
                <Input fieldName="clientAddress" fieldType="text" fieldLabel="Client Address:  " formik={formik} />
                <Input fieldName="photosOfIntervention" fieldType="file" fieldLabel="Photos of intervention  " formik={formik} />

                <Input fieldName="clientEmail" fieldType="text" fieldLabel="Email of Client: " formik={formik} />

                <SelectDropdown 
                    fieldName="appointmentType" 
                    fieldLabel="What type of appointment was it?" 
                    formik={formik} 
                    options={appointmentTypeOptions}
                />
                { formik.values.appointmentType == "quote" && (
                    <>
                        <Textarea fieldName="reportPublicQuote" fieldLabel="Report (visable by client):  " formik={formik} />
                        <Textarea fieldName="reportPrivateQuote" fieldLabel="Remarks for support (invisible to client):  " formik={formik} />
                        <Input fieldName="arrivalTimeAtClientQuote"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <SelectDropdown 
                            fieldName="durationOfAppointmentQuote" 
                            fieldLabel="Duration of Appointment? " 
                            formik={formik} 
                            options={durationOfAppointmentOptions} />
                    </>
                )}
                { formik.values.appointmentType == "sav" && (
                    <>
                        <SelectDropdown 
                            fieldName="wasProblemResolvedSav" 
                            fieldLabel="Was the problem resolved? " 
                            formik={formik} 
                            options={wasProblemResolvedOptions} />
                        <SelectDropdown 
                            fieldName="clientPrescenceSav" 
                            fieldLabel="Was client present? " 
                            formik={formik} 
                            options={clientPrescenceOptions} />
                    </>
                )}

                { formik.values.appointmentType == "intervention" && (
                <>
                     <SelectDropdown 
                        fieldName="wasClientBilledIntervention" 
                        fieldLabel="Was the client billed? " 
                        formik={formik} 
                        options={wasClientBilledOptions} />
                    <SelectDropdown 
                        fieldName="clientPrescenceIntervention" 
                        fieldLabel="Was client present? " 
                        formik={formik} 
                        options={clientPrescenceOptions} />
                </>
                )}
                { formik.values.appointmentType == "cancelled" && (
                    <>
                        <Textarea fieldName="reasonsForCancellation" fieldLabel="Reasons for cancellation:  " formik={formik} />
                        <Input fieldName="arrivalTimeAtClientCancelled"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <SelectDropdown 
                            fieldName="durationOfInterventionCancelled" 
                            fieldLabel="Duration of Intervention? " 
                            formik={formik} 
                            options={durationOfAppointmentOptions} />
                    </>
                )}
                
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