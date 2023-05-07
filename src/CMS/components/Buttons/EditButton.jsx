import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEditOutline } from 'react-icons/md';
import './Buttons.css';

const EditButton = ({ to }) => {
  return (
    <Link to={to} className='btn-edit'>
      <i><MdModeEditOutline /></i>
    </Link>
  );
};

export default EditButton;
