import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './AlertMessage.css';

export default function CustomAlert({ message, onClose, type }) {
  const alertClass = type === 'success' ? 'success' : 'error';
  const buttonClass = type === 'success' ? 'success-button' : 'error-button';

  return (
    <div className={`custom-alert ${alertClass}`}>
      <div className={`custom-alert-content ${alertClass}`}>
        <div className="icon">
          {type === 'error' ? (
            <FontAwesomeIcon icon={faTimesCircle} className="error-icon" />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
          )}
        </div>
        <p>{message}</p>
        <button className={`custom-alert-button ${buttonClass}`} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}
