import React from "react"
import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import CustomForm from "./emailForms"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import AOS from 'aos'
import 'aos/dist/aos.css'


const url = "https://foundation.us18.list-manage.com/subscribe/post?u=bb222487a3611557609e8cf8d&amp;id=8e37e03fe6";

class LatestUpdate extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            disable: 'mobile',
            once: true,
        })
    }

    state = {
        email: ''
    }
    setEmail(evt) {
        console.log('event', evt);
        this.setState({ email: evt });
    }

    handleSubmit = e => {
        e.preventDefault();
        addToMailchimp(this.state.email, '') // listFields are optional if you are only capturing the email address.
            .then(data => {
                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
            })
            .catch((error) => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
    }
    render() {
        return (
            <div className="update-section">
                <img src="/images/home/Bg_bottom.png" alt="" />
                <div className="container">
                    <Link to="/developer">
                        <div className="developer-potal">
                            <div className="card-img" data-aos="slide-left" data-aos-easing="ease-in-cubic" data-aos-offset="400" data-aos-duration="1000"> </div>
                            <h3>Developer Portal</h3>
                            <p>Open source. Scalable. Secure.</p>
                            <div className="intro-button">
                                Learn More
                        </div>

                        </div>
                    </Link>
                    <Link to="/foundation">
                        <div className="fantom-foundation">
                            <div className="card-img" data-aos="slide-up" data-aos-easing="ease-in-cubic" data-aos-offset="400" data-aos-duration="1000"> </div>
                            <h3>The Fantom Foundation</h3>
                            <p>The people, the culture.</p>
                            <div className="intro-button">
                                Learn More
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="container main-update">
                    <div className="section update-form">
                        <h2>Get the latest updates</h2>
                        {/* <form method="POST" onSubmit={e => this.handleSubmit(e)} >
                            <input type="email" placeholder="Email Address" value={this.state.email} onChange={e => this.setEmail(e.target.value)} className="email-input" />
                            <input type="submit" value="Sign Up" className="button" />
                        </form> */}
                        <MailchimpSubscribe
                            url={url}
                            render={({ subscribe, status, message }) => (
                                <div>
                                    <CustomForm onValidated={formData => subscribe(formData)} />
                                    {status === "sending" && <div className="message-section" style={{ color: "blue" }}>sending...</div>}
                                    {/* {status === "error" && <div  className="message-section" style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>} */}
                                    {status === "error" ? (
                                        message === "0 - Please enter a value" ? <div className='message-section' style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: 'Please enter email' }} />
                                            :
                                            ( message === "0 - An email address must contain a single @" ? <div className='message-section' style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: 'Please enter a valid email' }} />
                                             : <div className="message-section" style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
                                            )
                                          )

                                        : ""
                                    }
                                    {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                                </div>
                            )}
                        />
                    </div>
                </div>

            </div >

        )
    }
}


export default LatestUpdate