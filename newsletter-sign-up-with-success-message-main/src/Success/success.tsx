import icon from '../assets/images/icon-success.svg';
import './success.css';


function Success() {

  return (
    <section>
      <img className='check' src={icon} alt="" />
      <h1>Thanks for subscribing!</h1>

      <p>A confirmation email has been sent. Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>      
    </section>
  )

}

export default Success;


