'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

export default function Signup() {

    const handleSubmit = ()=>{
        console.log('Hello')
    }

    const validationSchema = yup.object({
        firstName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        lastName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        MobileNum:yup.string().required().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
        email:yup.string().email(),
        password:yup.string().required(),
        rePassword:yup.string().required(),
    })

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            MobileNum:'',
            email:'',
            password:'',
            rePassword:'',
        },
        onSubmit:handleSubmit,
        validationSchema,

    })

    return (
        <div>
        
        </div>
    )
}
