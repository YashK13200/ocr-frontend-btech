import React from 'react';
// import './styles.css';
import '../styles.css';

const CardTypeSelector = ({ selectedType, onSelectType }) => {
    const cardTypes = ['Aadhaar Card', 'PAN Card', 'Identity Card'];

    return (
        <div className="card-type-selector">
            <h4>Select Card Type</h4>
            {cardTypes.map((type) => (
                <label key={type}>
                    <input
                        type="radio"
                        name="cardType"
                        value={type}
                        checked={selectedType === type}
                        onChange={(e) => onSelectType(e.target.value)}
                    />
                    {type}
                </label>
            ))}
        </div>
    );
};

export default CardTypeSelector;
