import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import './interventionForm.scss'
import Reuseable from '../../reuseableComponents/reusable.tsx'
import { clientPrescenceOptions, wasProblemResolvedOptions, appointmentTypeOptions, durationOfAppointmentOptions, wasClientBilledOptions } from './interventionFormVariables.tsx'
import { initialValuesType, SubmitPropsType } from '../../types/types.ts'

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
    
    
    // Optional part of form - RDV cancelled
    reasonsForCancellationCancelled: Yup.string().when('appointmentType', {
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

    const onSubmit = (values: initialValuesType, submitProps: SubmitPropsType ) => {        
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
            reasonsForCancellationCancelled: '',
            arrivalTimeAtClientCancelled: '',
            durationOfInterventionCancelled: ''
        },
        onSubmit,
        validationSchema
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>      
                <Reuseable.Input fieldName="clientName" fieldLabel="Name of Client: " formik={formik} />
                <Reuseable.Input fieldName="dateOfIntervention" fieldType="date" fieldLabel="Date of Intervention: " formik={formik} />
                <Reuseable.Input fieldName="timeOfIntervention"  fieldType="time" fieldLabel="Time of Intervention: " formik={formik} />
                <Reuseable.Input fieldName="nameOfIntervention" fieldLabel="Name of Intervention: " formik={formik} />
                <Reuseable.Input fieldName="clientAddress" fieldLabel="Client Address:  " formik={formik} />
                <Reuseable.InputFile fieldName="photosOfIntervention" fieldType="file" fieldLabel="Photos of intervention  " formik={formik} />
                <Reuseable.Input fieldName="clientEmail" fieldLabel="Email of Client: " required={false} formik={formik} />

                <Reuseable.SelectDropdown 
                    fieldName="appointmentType" 
                    fieldLabel="What type of appointment was it? " 
                    formik={formik} 
                    options={appointmentTypeOptions}
                />
                { formik.values.appointmentType == "quote" && (
                    <>
                        <Reuseable.Textarea fieldName="reportPublicQuote" fieldLabel="Report (visable by client):  " formik={formik} />
                        <Reuseable.Textarea fieldName="reportPrivateQuote" required={false} fieldLabel="Remarks for support (invisible to client):  " formik={formik} />
                        <Reuseable.Input fieldName="arrivalTimeAtClientQuote"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <Reuseable.SelectDropdown 
                            fieldName="durationOfAppointmentQuote" 
                            fieldLabel="Duration of Appointment? " 
                            formik={formik} 
                            options={durationOfAppointmentOptions} />
                    </>
                )}
                { formik.values.appointmentType == "sav" && (
                    <>
                        <Reuseable.SelectDropdown 
                            fieldName="wasProblemResolvedSav" 
                            fieldLabel="Was the problem resolved? " 
                            formik={formik} 
                            options={wasProblemResolvedOptions} />
                        <Reuseable.SelectDropdown 
                            fieldName="clientPrescenceSav" 
                            fieldLabel="Was client present? " 
                            formik={formik} 
                            options={clientPrescenceOptions} />
                    </>
                )}

                { formik.values.appointmentType == "intervention" && (
                <>
                     <Reuseable.SelectDropdown 
                        fieldName="wasClientBilledIntervention" 
                        fieldLabel="Was the client billed? " 
                        formik={formik} 
                        options={wasClientBilledOptions} />
                    <Reuseable.SelectDropdown 
                        fieldName="clientPrescenceIntervention" 
                        fieldLabel="Was client present? " 
                        formik={formik} 
                        options={clientPrescenceOptions} />
                </>
                )}
                { formik.values.appointmentType == "cancelled" && (
                    <>
                        <Reuseable.Textarea fieldName="reasonsForCancellationCancelled" fieldLabel="Reasons for cancellation:  " formik={formik} />
                        <Reuseable.Input fieldName="arrivalTimeAtClientCancelled"  fieldType="time" fieldLabel="Arrival time at client: " formik={formik} />
                        <Reuseable.SelectDropdown 
                            fieldName="durationOfInterventionCancelled" 
                            fieldLabel="Duration of Intervention? " 
                            formik={formik} 
                            options={durationOfAppointmentOptions} />
                    </>
                )}
                
                <div className='form-control-wrapper'>
                    <Reuseable.Button
                        type="submit"
                        classes="btn primary-bg"
                        text="Submit Form"
                        formik={formik}
                    ></Reuseable.Button>
                </div> 

            </form>
        </>
    )
}

export default UserForm;