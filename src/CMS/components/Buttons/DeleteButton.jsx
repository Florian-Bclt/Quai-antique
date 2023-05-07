import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Buttons.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className='btn-delete' onClick={onClick}>
      <i><MdDelete /></i>
    </button>
  );
};

export default DeleteButton;
