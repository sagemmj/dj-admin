import React, { useState } from 'react';
import uploadcare from 'uploadcare-widget';

interface FormData {
  name: string;
  image: string;
}

const ImageUploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    image: ''
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      name: event.target.value
    });
  };

  const handleImageUpload = (info: uploadcare.Widget) => {
    const file = info.files()[0];
    file.promise().done(fileInfo => {
      setFormData({
        ...formData,
        image: fileInfo.cdnUrl
      });
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch('/backend/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleNameChange} 
      />

      <uploadcare-widget
        publicKey="demo"
        onChange={handleImageUpload}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploadForm;