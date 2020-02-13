import React from "react"
class CustomForm extends React.Component {
  state = {
    email: "",
    invaidEmail: false,
    status: this.props.status,
    onValidated : '',
    message : ""

}
setEmail(evt) {
  if (evt === "") {
      this.setState({invaidEmail: true});
  } else {
      this.setState({invaidEmail: false});
  }
  this.setState({email: evt});

}
 submit = () => {
 
  let email = this.state.email;
  if (email === "") {
    this.setState({invaidEmail: true});
} else {
    this.setState({invaidEmail: false});
}
this.props.onValidated({
        EMAIL: this.state.email,
      });
}

  render() {    
    return (
      <div>
        {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && 'Enter Valid Email'}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )} */}
        <input
          value={this.state.email}  onChange={e => this.setEmail(e.currentTarget.value)}
          type="email"
          required
          placeholder="请输入您的邮箱地址"
        />
        
        <button onClick={this.submit}>
        注册
      </button>  
      </div>
    );
  }
};
export default CustomForm
