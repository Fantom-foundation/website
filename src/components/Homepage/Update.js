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
        this.aos.init()
    }
    
    // componentDidUpdate() {
    //     this.aos.refresh()
    // }
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
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
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
                    <div className="developer-potal" data-aos="slide-right">
                        <h3>Developer Portal</h3>
                        <p>Open source. Scalable. Secure.</p>
                        <div className="intro-button">
                            <Link to="/developer">Learn More</Link>
                        </div>
                    </div>
                    <div className="fantom-foundation" data-aos="slide-left">
                        <h3>The Fantom Foundation</h3>
                        <p>The people, the culture.</p>
                        <div className="intro-button">
                            <Link to="/foundation">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="container main-update">
                    <div className="section update-form">
                        <h2>Get the latest updates</h2>
                        {/* <form method="POST" onSubmit={e => this.handleSubmit(e)} >
                            <input type="email" placeholder="Email Address" value={this.state.email} onChange={e => this.setEmail(e.target.value)} className="email-input" />
                            <input type="submit" value="Sign Up" className="button" />
                        </form> */}
                        <MailchimpSubscribe url={url}/>
                        {/* <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        /> */}
                    </div>
                </div>
                
            </div>
            
        )
    }
}


export default LatestUpdate