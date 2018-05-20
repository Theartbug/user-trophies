import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Delete from 'react-icons/lib/ti/delete';
import './modal.css';

export default class Modal extends PureComponent {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    instructions: PropTypes.string,
    emoji: PropTypes.string

  };

  UNSAFE_componentWillMount() {
    ReactModal.setAppElement('body'); //required for react-modal, helps hide content on the body from screen readers.
  }

  render() {
    const { open, handleModal, instructions, emoji } = this.props;

    return (
      <ReactModal
        isOpen={open}
        onRequestClose={handleModal}
        className="trophy-modal"
        overlayClassName="trophy-modal-overlay"
      >
        <button className="modal-button" onClick={handleModal}><Delete className="x-button"/></button>

        <span>
          <p>{emoji}</p>
        </span>
        <p>{instructions}</p>

      </ReactModal>
    );
  }
}
