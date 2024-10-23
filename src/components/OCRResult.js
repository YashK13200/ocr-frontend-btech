import React from 'react';
// import './styles.css';
import '../styles.css';

const OCRResult = ({ ocrData }) => {
    return (
        <div className="ocr-result">
            <h4>OCR Result</h4>
            {ocrData ? (
                <pre>{JSON.stringify(ocrData, null, 2)}</pre>
            ) : (
                <p>No data processed yet</p>
            )}
        </div>
    );
};

export default OCRResult;
