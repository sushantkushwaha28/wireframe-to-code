import React from 'react'

const ImageUpload = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-96 w-96 border-2 border-dashed border-gray-300 rounded-lg'>
            <p className='text-gray-500 mb-5'>Drag and drop your image here</p>
            <input type="file" accept="image/*" className='hidden' id='image-upload' />
            <label htmlFor='image-upload' className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            Upload Image
            </label>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ImageUpload