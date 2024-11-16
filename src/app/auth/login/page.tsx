'use client'
import { useFormik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { BiSolidShow } from 'react-icons/bi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import * as yup from 'yup'
export default function Login() {

    const [showPassword,setShowPassword] = useState(false)


    const handleSubmit = (formikValues)=>{
        console.log(formikValues)
    }

    const validationSchema = yup.object({
        email:yup.string().email('You must enter a valid email'),
        password:yup.string().required('This field is required').min(8,'Password must be at least 8 characters long').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must contain at least one letter and one number'),
    })

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema,
        onSubmit : handleSubmit,
    })
    return (
        <div className='grid grid-cols-12 justify-center w-2/3 mx-auto items-center  min-h-screen'>

            <form className='col-span-8  flex flex-col gap-2 duration-200 justify-center p-2   ' onSubmit={formik.handleSubmit}>
                <label className='rounded-xl dark:text-rose-500 font-bold' htmlFor="email">Email address</label>
                <input  className='rounded-xl p-2 outline-none  ' type="text" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email address" />
                {formik.errors.email && formik.touched.email && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.email}</span></div> }
                <label className='rounded-xl dark:text-rose-500 font-bold flex justify-between items-center' htmlFor="password">Enter your password 
                <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <BiSolidShow />} </button>
                </label>
                <input  className='rounded-xl p-2 outline-none  ' type={showPassword ? 'text' : 'password'} name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder="Enter your password" />
                {formik.errors.password && formik.touched.password && <div className='flex justify-start items-center'> { React.cloneElement(<IoIosInformationCircleOutline /> , {className:'text-lg text-rose-500 '} ) } <span>{formik.errors.password}</span></div> }
                <button type='submit' className='p-2 w-full bg-black/10 transition-all duration-200 dark:bg-rose-500 rounded-xl'>Login</button>
                <p className='text-center'><span>Don't have an account ?</span> <Link className='underline font-semibold text-base ' href={'/auth/signup'}>Register now!</Link></p>


            </form>
        
        </div>
    )
}
