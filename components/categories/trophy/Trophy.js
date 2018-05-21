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

    const { classData, trophy } = this.props;
    const { emoji, instructions, description, earned } = trophy;
    const { open } = this.state;

    return (
      <li className={`trophy ${classData}`} onClick={this.handleModal}>
        <div className="image-container">
          <span>
            <p>{emoji}</p>
          </span>
        </div>
        <p>{description}</p>
        <Modal emoji={emoji} instructions={instructions} earned={earned} handleModal={this.handleModal} open={open}/>
      </li>
    );
  }
}