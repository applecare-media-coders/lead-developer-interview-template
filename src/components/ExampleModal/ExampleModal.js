import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

// Recommended styling for modal
const modalStyles = {
  // Determines the styling for the overlay
  overlay: {
    zIndex: '1000',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  // Determines the styling for the modal window
  content: {
    backgroundColor: 'white',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    outline: 'none',
    border: 'none',
    borderRadius: '10px',
    width: '300px',
    height: '600px',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// An example modal component that utilizes react-modal
const ExampleModalComponent = () => {
  const [isOpen, updateModalState] = useState(true);

  return (
    <Modal isOpen={isOpen} onRequestClose={() => updateModalState(false)} style={modalStyles}>
      MODAL!
    </Modal>
  );
};

export default ExampleModalComponent;
