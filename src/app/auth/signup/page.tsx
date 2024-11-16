'use client'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { BiSolidShow } from 'react-icons/bi'
import Link from 'next/link'
import { IoIosInformationCircleOutline } from 'react-icons/io'

export default function Signup() {
    const [showPassword,setShowPassword] = useState(false)

    const handleSubmit = (formikValues)=>{
        console.log(formikValues)
    }

    const validationSchema = yup.object({
        firstName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        lastName:yup.string().required('This field is required').min(2,'Name must be at least 2 characters long').max(20,'Name must be at most 20 characters long'),
        MobileNum:yup.string().required('This field is required').matches(/^[0-9]{11}$/, 'Mobile number must be 10 digits'),
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

            <form className='col-span-8  flex flex-col gap-2 duration-200 justify-center p-2   ' onSubmit={formik.handleSubmit}>
                <label className='rounded-xl dark:text-rose-500 font-bold ' htmlFor="firstName">First name</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="firstName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} placeholder="Enter your first name" />
                {formik.errors.firstName && formik.touched.firstName && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.firstName}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold' htmlFor="lastName">Last name</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="lastName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} placeholder="Enter your last name" />
                {formik.errors.lastName && formik.touched.lastName && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.lastName}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold' htmlFor="MobileNum">Phone number</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="MobileNum" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.MobileNum} placeholder="Enter your phone number" />
                {formik.errors.MobileNum && formik.touched.MobileNum && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.MobileNum}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold' htmlFor="email">Email address</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email address" />
                {formik.errors.email && formik.touched.email && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.email}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold flex justify-between items-center' htmlFor="password">Enter your password 
                <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <BiSolidShow />} </button>
                </label>
                <input  className='rounded-xl p-2 outline-none  ' type={showPassword ? 'text' : 'password'} name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder="Enter your password" />
                {formik.errors.password && formik.touched.password && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.password}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold flex justify-between items-center ' htmlFor="rePassword">Re-enter your password   {showPassword ? <AiFillEyeInvisible /> : <BiSolidShow />}</label>
                <input  className='rounded-xl p-2 outline-none  ' type={showPassword ? 'text' : 'password'} name="rePassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} placeholder="Re-enter your password" />
                {formik.errors.rePassword && formik.touched.rePassword && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.rePassword}</span></div> }
                <button type='submit' className='p-2 w-full bg-black/10 transition-all duration-200 dark:bg-rose-500 rounded-xl'>Sign up</button>
                <p className='text-center'><span>Already signed up ?</span> <Link className='underline font-semibold text-base ' href={'/auth/login'}>Log in now</Link></p>


            </form>
        
        </div>
    )
}
