import React from 'react'


export default function ShowPassword() {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
        <div>
            {showPassword ?  React.cloneElement(AiFillEyeInvisible, { onClick: () => setShowPassword(false)}) : React.cloneElement(BiSolidShow, { onClick: () => setShowPassword(true)})}
        </div>
    )
}
