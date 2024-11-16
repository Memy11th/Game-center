'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

export default function Signup() {

    const handleSubmit = (formikValues)=>{
        console.log(formikValues)
    }

    const validationSchema = yup.object({
        firstName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        lastName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        MobileNum:yup.string().required().matches(/^[0-9]{11}$/, 'Mobile number must be 10 digits'),
        email:yup.string().email('You must enter a valid email'),
        password:yup.string().required('This field is required').min(8,'Password must be at least 8 characters long').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number'),
        rePassword:yup.string().required('This field is required').min(8,'Password must be at least 8 characters long').oneOf([yup.ref('password')],'Passwords must match'),
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
        <div className='grid grid-cols-12 justify-center w-2/3 mx-auto items-center  min-h-screen'>

            <form className='col-span-8  flex flex-col gap-4 duration-200 justify-center p-2   ' onSubmit={formik.handleSubmit}>
                <label className='rounded-xl dark:text-rose-500' htmlFor="firstName">First name</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="firstName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} placeholder="Enter your first name" />
                <label className='rounded-xl dark:text-rose-500' htmlFor="lastName">Last name</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="lastName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} placeholder="Enter your last name" />
                <label className='rounded-xl dark:text-rose-500' htmlFor="email">Email address</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email address" />


            </form>
        
        </div>
    )
}
