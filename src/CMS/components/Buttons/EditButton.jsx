import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import './Buttons.css';

const EditButton = ({ onClick }) => {
  return (
    <button className='btn-edit' onClick={onClick}>
      <i><MdModeEditOutline /></i>
    </button>
  );
};

export default EditButton;
