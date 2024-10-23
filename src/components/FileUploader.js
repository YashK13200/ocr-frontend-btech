import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
// import './styles.css';
import '../styles.css';

const FileUploader = ({ onFileUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        onFileUpload(acceptedFiles[0]);
    }, [onFileUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*,application/pdf'
    });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag & drop an image or PDF, or click to select files</p>
        </div>
    );
};

export default FileUploader;
