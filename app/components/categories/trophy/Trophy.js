import React, { PureComponent } from 'react';
import Modal from '../modal/Modal';
import './trophy.css';

export default class Trophy extends PureComponent {

  state = {
    open: false
  };

  handleModal = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {

    const { emoji, instructions, description, earned } = this.props.trophy;
    const { open } = this.state;

    return (
      <li className="trophy" onClick={this.handleModal}>
        <span>
          <p>{emoji}</p>
        </span>
        <p>{description}</p>
        <Modal emoji={emoji} instructions={instructions} earned={earned} handleModal={this.handleModal} open={open}/>
      </li>
    );
  }
}