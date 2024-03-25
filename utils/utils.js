function validateUser(user){
    const errors ={}

    if(user.name.trim().length <=2){
        errors.name = "Enter a valid name"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(user.email))
    if(!emailRegex.test(user.email)){
        errors.email = "Enter a valid email"
    }
    
    const mobileRegex = /^[789]\d{9}$/;
    if(!mobileRegex.test(user.mobile)){
        errors.mobile = "Enter valid mobile number"
    }

    if(!user.dateOfBirth){
        errors.dateOfBirth = "Enter your date of birth"
    }

    if(!user.dateOfJoining){
        errors.dateOfJoining = "Enter your joining date"
    }

    if(user.role.trim().length){
        errors.role = "Enter your role"
    }

    if(user.department.trim().length){
        errors.department = "Enter your department"
    }

    return {
        valid:Object.keys(errors).length ===0,
        errors
    }
}

export default validateUser