import './App.css'
import card from '../assets/images/illustration-sign-up-desktop.svg';
import icon from '../assets/images/icon-list.svg';
import { emailValidator } from '../ultis/emailValidator';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailerr] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if(!emailValidator.test(email)) {
      setEmailerr(true);
      setError(true);
      setEmail("");
    } else {
      navigate('/success')
    }
  }

  return (
    <div className='box-white'>
      <div className="side-login">
        <div className='text'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className='list'>
            <p>
              <img src={icon} alt="icon-list" />
              Product discovery and building what matters
            </p>

            <p>
              <img src={icon} alt="icon-list" />
              Measuring to ensure updates are a success
            </p>

            <p>
              <img src={icon} alt="icon-list" />
              And much more!
            </p>
          </div>
        </div>

        <div className="email-login">
          <label htmlFor="email">Email address
           {emailErr && <p className='error-mensage'>Valid email required</p> }
          </label>

          <input 
            type="email" 
            name='email' 
            id='email' 
            placeholder='email@company.com' 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={error ? 'error' : ''}
          />

          <button type='submit' onClick={validate}>Subscribe to monthly newsletter</button>
        </div>
      </div>

      <div className="side-card">
      </div>

    </div>
  )
}

export default App;
