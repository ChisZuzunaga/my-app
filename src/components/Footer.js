import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <Footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Addres: <br/> 123 Towncity, USA</li>
                    <li>Phone: <br/> ++ 0123 456 789</li>
                    <li>Email: <br/> little@lemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                </ul>
            </div>
        </section>
    </Footer>
  )
}

export default Footer;