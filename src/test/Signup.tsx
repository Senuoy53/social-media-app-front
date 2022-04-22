import {useState} from 'react'

const Signup = () => {

    const API = 'http://localhost:8000/api'

    const [values,setValues] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        error: '',
        checkIdSuccess: false,
        signupSuccess: false,
        signinSuccess: false
    })

    const {id, name, surname, email, password, checkIdSuccess, signupSuccess, signinSuccess, error} = values

    const handleChange = (val:any) => (event:any) => {
        setValues({...values, error: '', [val]: event.target.value})
    }
    
    const checkId = (id:any) => {
        return fetch(`${API}/checkUID/${id}`, {
            method: 'GET',
        })
        .then( res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
            return err
        })
    }

    const signup = (user:any) => {
        return fetch(`${API}/signup`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                _id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email,
                password: user.password
            })
        })
        .then( res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
            return err
        })
    }

    const signin = (user:any) => {
        return fetch(`${API}/signin`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const clickCheckId = (event:any) => {
        event.preventDefault();
        setValues({ ...values, error: '' });
        checkId(id).then(data => {
            console.log(data)
            if(data.error) {
                setValues({ ...values, error: data.error, checkIdSuccess: false });
                return ''
            }else {
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email,
                    error: '',
                    checkIdSuccess: true
                });
            }
        });
    };
   
    const clickSignup = (event:any) => {
        event.preventDefault();
        setValues({ ...values, signupSuccess: false });
        signup({ id, name, surname, email, password }).then(data => {
            console.log(data)
            if (data.error) {
                setValues({ ...values, error: data.error, signupSuccess: false });
                return ''
            } else if (data.errors) {
                setValues({ ...values, error: data.errors, signupSuccess: false });
                return ''
            }else {
                setValues({
                    ...values,
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    error: '',
                    signupSuccess: true
                });
            }
        });
    };

    const clickSignin = (event:any) => {
        event.preventDefault();
        setValues({ ...values, error: ''});
        signin({ email, password }).then(data => {
            console.log(data)
            if(data.error) {
                setValues({ ...values, error: data.error, signinSuccess: false });
                return ''
            }else {
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email,
                    error: '',
                    signinSuccess: true
                });
            }
        });
    };


    const CheckIdForm = () => (
        <div>
            <h1>CheckID</h1>
            <form>
                <label className='text-muted'>ID </label>
                <input type='text' onChange={handleChange('id')} value={id}/>
                <button onClick={clickCheckId}>Check ID</button>
            </form>
        </div>
    )

    const signUpForm = () => (
        <div>
            <h1>CheckID</h1>
            <form>

                <label className='text-muted'>Name</label>
                <input type='text' value={name} onChange={handleChange('name')}/>
                <label className='text-muted'>Surname</label>
                <input type='text' value={surname} onChange={handleChange('surname')}/>
                <label className='text-muted'>Email</label>
                <input type='email' value={email} disabled/>
                <label className='text-muted'>Password</label>
                <input type='password' value={password} onChange={handleChange('password')}/>

                <button onClick={clickSignup}>SignUp</button>
            </form>
        </div>
    )

    const signInForm = () => (
        <div>
            <h1>SignIN</h1>
            <form>
                <label className='text-muted'>Email</label>
                <input type='email' value={email} onChange={handleChange('email')}/>
                <label className='text-muted'>Password</label>
                <input type='password' value={password} onChange={handleChange('password')}/>

                <button onClick={clickSignin}>SignIN</button>
            </form>
        </div>
    )

    //we ll use redirect to signin after and separate files 
    //  -add apiCall folder with files for each library request
    //  -add api to .env
    // separate checkid signup into components(no need for a new page they re linked)
    // use a redirect to signin page(independent from signup)


    return (
        <div>
             {!checkIdSuccess   ? CheckIdForm()
                                : (!signupSuccess   ?   signUpForm()
                                                    : signInForm()
                                  )
            }
             {JSON.stringify(values)}
        </div>
    )
}

export default Signup