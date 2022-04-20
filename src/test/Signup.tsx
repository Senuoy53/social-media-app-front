import {useState} from 'react'

const Signup = () => {

    const API = 'http://localhost:8000/api'

    const [values,setValues] = useState({
        id: '',
        name: '',
        email: '',
        error: '',
        success: false
    })

    const {id, success, error} = values

    const handleChange = (event:any) => {
        setValues({...values, id: event.target.value})
    }
    
    const checkId = (id:any) => {
        return fetch(`${API}/readUID/${id}`, {
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

    const clickSubmit = (event:any) => {
        event.preventDefault();
        setValues({ ...values, error: '' });
        checkId(id).then(data => {
            if(data.error) {
                setValues({ ...values, error: data.error, success: false });
                return ''
            }else {
                setValues({
                    ...values,
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    error: '',
                    success: true
                });
            }
        });
    };

    const CheckIdForm = () => (
        <div>
            <h1>CheckID</h1>
            <form>
                <label className='text-muted'>ID </label>
                <input type='text' className='form-control' onChange={handleChange} value={id}/>
                <button onClick={clickSubmit}>Check ID</button>
            </form>
        </div>
    )
    return (
        <div>
             {CheckIdForm()}
             {JSON.stringify(values)}
        </div>
    )
}

export default Signup