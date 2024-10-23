import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
// import './styles.css';
import '../styles.css';

const DragAndDrop = ({ onFileDrop }) => {
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            onFileDrop(acceptedFiles[0]);  // Handling only one file, you can change this as per your need.
        }
    }, [onFileDrop]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*,application/pdf'
    });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the file here...</p>
            ) : (
                <p>Drag & drop an image or PDF, or click to select files</p>
            )}
        </div>
    );
};

export default DragAndDrop;
