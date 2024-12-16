export const credentialsValidation=(email,password)=>{
    
    if(!password && !email){
        return 'fields cannot be empty'
    }
    const testEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const testPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password);
    
    if(!testEmail){
        return 'Invalid email'
    }
     else if(!email){
        return 'Email is required'
     }   
    
    
    if( password && !testPassword){
        return 'Password must include at least one digit, one uppercase letter, one lowercase letter, one special character, and be between 8 and 16 characters long'
        }
        else if(!password){
            return 'Password is required'
        }
    }


    export const fullNameValidation=(fullName)=>{
        const testFullName= /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName);
        if( fullName && !testFullName){
         return 'Invalid full name'
         }
         else if(!fullName){
             return 'Full name is required'
         }
     
     }
     


