import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'male',
    description: '',
    agreement: false
  }

  handleChange = (event) => {
    if (event.target.name === "agreement") {
      this.setState({
        "agreement": !this.state.agreement
      });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br/>
          <input 
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Your name"
          />
        </label>
        <br/>
        <label>
          Gender
          <br/>
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br/>
        <label>
          Description
          <br/>
          <textarea 
            name="description" 
            value={this.state.description} 
            placeholder="Description about yourself"
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          <input type="checkbox" name="agreement" onChange={this.handleChange}/>
          <span>I have read the terms of conduct</span>
        </label>
        <br/>
        <button 
          type="submit" 
          disabled={!this.state.name || !this.state.description || !this.state.agreement}
        >Submit</button>
      </form>
    );
  }
}

export default MyProfile;


