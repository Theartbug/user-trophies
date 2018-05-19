import React, { PureComponent } from 'react';
import { getAuthToken } from '../../services/rideReportAPI';

export default class App extends PureComponent {

  state = {
    email: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    getAuthToken(email);
  };

  onChange = ({ target }) => this.setState({ email: target.value });


  render() {

    const { email } = this.state;
    const { onSubmit, onChange } = this;

    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="email">email:</label>
        <input name="email" type="email" value={email} onChange={onChange}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}