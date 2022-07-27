
import {useContext} from 'react'
import {UserContext} from './UserContext'
import {useState} from 'react'

function Login() {
 
  const { setUser} = useContext(UserContext)
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const database = [
    {
      username: "matt",
      password: "1234"
    },
    {
      username: "bob",
      password: "2345"
    }
  ];

  const errors = {
    uname: 'Username not found',
    pass: 'Invalid password'
  }

    
  
  function handleSubmit(e){
    e.preventDefault()
    const {uname, pass} = e.target 
    const userData = database.find((user) => user.username === uname.value);
    
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        let signedIn={username: uname.value, password: pass.value }
        setUser(signedIn)
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
const renderForm = (
  <div className='Login'>
      <form className='SignupForm' onSubmit={handleSubmit}>
        <label>
        Name:
        <input 
        type='text'
        name='uname' required/>
        {renderErrorMessage('uname')}
        </label>
        <label>
        Password:
        <input 
        type='password'
        name='pass' required/>
        {renderErrorMessage('uname')}
        </label>
       
        <button type='submit'>Submit</button>
      </form>
    </div>
)
  return (
    <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
  )
}

export default Login
