import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import Delete from 'react-icons/lib/ti/delete';
import './modal.css';

export default class Modal extends PureComponent {


  UNSAFE_componentWillMount() {
    ReactModal.setAppElement('body'); //required for react-modal, helps hide content on the body from screen readers.
  }

  getMonth = (month) => {
    switch(month) {
      case '01':
        return 'Jan';
      case '02':
        return 'Febr';
      case '03':
        return 'Mar';
      case '04':
        return 'Apr';
      case '05':
        return 'May';
      case '06':
        return 'Jun';
      case '07':
        return 'Jul';
      case '08':
        return 'Aug';
      case '09':
        return 'Sep';
      case '10':
        return 'Oct';
      case '11':
        return 'Nov';
      case '12':
        return 'Dec';
    }
  };

  parseDate = (wholeDate) => {
    if(!wholeDate) return;
    const date = wholeDate.split(' ')[0];
    const month = this.getMonth(date.split('-')[1]);
    const day = date.split('-')[2];
    const year = date.split('-')[0];

    return `${month} ${day} ${year}`;
  };

  render() {
    const { open, handleModal, instructions, emoji, earned } = this.props;

    const parsedDate = this.parseDate(earned);

    return (
      <ReactModal
        isOpen={open}
        onRequestClose={handleModal}
        className="trophy-modal"
        overlayClassName="trophy-modal-overlay"
      >
        <button className="modal-button" onClick={handleModal}><Delete className="x-button"/></button>
        <section>
          <span>
            <p>{emoji}</p>
          </span>
          <h2>{instructions}</h2>
          {earned && <p>You earned this trophy on {parsedDate}</p>}
        </section>

      </ReactModal>
    );
  }
}
