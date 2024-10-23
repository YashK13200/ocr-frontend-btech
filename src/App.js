import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import CardTypeSelector from './components/CardTypeSelector';
import OCRResult from './components/OCRResult';
import './styles.css';  // Global styles
// import '../src/styles.css';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCardType, setSelectedCardType] = useState('Aadhaar Card');
  const [ocrData, setOcrData] = useState(null);

  const handleFileUpload = (file) => {
    setSelectedFile(file);
    // Mocking OCR data
    const mockOcrData = {
      cardType: selectedCardType,
      name: 'Kishan Yadav',
      dob: '08/08/2000',
      gender: 'Male',
      idNumber: '8784 7675 4347'
    };
    setOcrData(mockOcrData);
  };

  return (
    <div className="app">
      {/* Main Heading */}
      <h1 className="heading">OCR CARD SCANNER </h1>

      {/* OCR Result Section at the top */}
      <OCRResult ocrData={ocrData} />

      {/* File Upload and Card Type Selection below the OCR Result */}
      <div className="upload-section">
        <FileUploader onFileUpload={handleFileUpload} />
        <CardTypeSelector
          selectedType={selectedCardType}
          onSelectType={setSelectedCardType}
        />
      </div>
    </div>
  );
}

export default App;
