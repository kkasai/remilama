import React from 'react'
import ReactModal from 'react-modal'

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {modalIsOpen} = this.props
    this.state.modalIsOpen = modalIsOpen
    return(
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          overlayClassName="ui dimmer modals top aligned page transition visible active"
          className="ui standard modal transition visible active"
        >
          {this.props.children}
        </ReactModal>
      </div>
    )
  }
}

export default Modal