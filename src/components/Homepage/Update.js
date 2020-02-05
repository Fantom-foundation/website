import React from "react"
import { Link } from "gatsby"
import CustomForm from "./emailForms"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const url =
  "https://foundation.us18.list-manage.com/subscribe/post?u=bb222487a3611557609e8cf8d&amp;id=8e37e03fe6"

class LatestUpdate extends React.Component {
  render() {
    return (
      <div className="update-section">
        <div className="update-section-bg">
          <div className="container">
            <Link to="/developer">
              <div className="developer-potal">
                <div
                  className="card-img wow fadeInUp"
                  data-wow-duration="1000"
                  data-wow-delay="0.6s"
                >
                  {" "}
                </div>
                <h3>
                  <FormattedMessage id="home.updates.developer.title" />
                </h3>
                <p>
                  <FormattedMessage id="home.updates.developer.description" />
                </p>
                <div className="intro-button">
                  <FormattedMessage id="learnMore" />
                </div>
              </div>
            </Link>
            <Link to="/foundation">
              <div className="fantom-foundation">
                <div
                  className="card-img wow fadeInUp"
                  data-wow-duration="1000"
                  data-wow-delay="0.6s"
                >
                  {" "}
                </div>
                <h3>
                  <FormattedMessage id="home.updates.foundation.title" />
                </h3>
                <p>
                  <FormattedMessage id="home.updates.foundation.description" />
                </p>
                <div className="intro-button">
                  <FormattedMessage id="learnMore" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="container main-update">
          <div className="section update-form">
            <h3>
              <FormattedMessage id={`home.subscribeform.title`} />
            </h3>
            {/* <form method="POST" onSubmit={e => this.handleSubmit(e)} >
                            <input type="email" placeholder="Email Address" value={this.state.email} onChange={e => this.setEmail(e.target.value)} className="email-input" />
                            <input type="submit" value="Sign Up" className="button" />
                        </form> */}
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <CustomForm onValidated={formData => subscribe(formData)} />
                  {status === "sending" && (
                    <div className="message-section" style={{ color: "blue" }}>
                      sending...
                    </div>
                  )}
                  {/* {status === "error" && <div  className="message-section" style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>} */}
                  {status === "error" ? (
                    message === "0 - Please enter a value" ? (
                      <div
                        className="message-section"
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{
                          __html: "Please enter email",
                        }}
                      />
                    ) : message ===
                      "0 - An email address must contain a single @" ? (
                      <div
                        className="message-section"
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{
                          __html: "Please enter a valid email",
                        }}
                      />
                    ) : (
                      <div
                        className="message-section"
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )
                  ) : (
                    ""
                  )}
                  {status === "success" && (
                    <div style={{ color: "green" }}>Subscribed !</div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LatestUpdate
