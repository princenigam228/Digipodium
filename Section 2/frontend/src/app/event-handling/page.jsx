'use client';
import React from 'react'

const EventHandling = () => {

const previewImage = (e) => {
    const file = e.target.files[0];
    const reader = newFileReader();
    reader.onload = () => {
        document.getElementById('Image').src = reader.result;
    }
    reader.readAsDataURL(file);
}

  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-center mt-5 text-3xl font-bold'>Event Handling</h1>

      <button className='bg-blue-500 p-2 text-white'
      onClick={() => {alert('button was clicked')}}>
      Click Me</button>


      <input className='p-3 mt-3 w-full border'
       type="text"
       onChange={(e) => {console.log(e.target.value)}} />

       <input type="color"
                onChange={(e) => {console.log(document.body.style.backgroundColor = e.target.value)}} />

        <input type="file"
        className='block mt-5'
        onChange={() => {} } 
        multiple/>

        <p className='mt-4 '> Select Image </p>
        <input type="file" onChange={previewImage} />
        <img src="" id = 'image' alt="something" />
    </div>
  )
}

export default EventHandling;
