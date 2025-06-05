import { CloudUpload } from 'lucide-react'
import React from 'react'

const ImageUpload = () => {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='p-10 border border-dashed rounded-md shadow-md bg-white flex flex-col items-center justify-center'>
        <CloudUpload className='h-10 w-10'/> 
        <h2 className='text-lg font-semibold mt-3'>Upload Image</h2>
        <p className='text-gray-500 dark:text-gray-400 mt-4'>Click to select a file.</p>
        <div className='w-full border rounded-lg bg-black hover:bg-slate-600 px-2 py-2 flex items-center justify-center'>
        <label htmlFor='image-upload' className=''>
          <h2 className='p-2 bg-primary text-white rounded-md px-5'>Select image</h2>
        </label>
        </div>
        <input type='file' accept='image/*' className='hidden' multiple={false} id='image-upload'/>
        </div>
        <div>
          USer Input Area
        </div>
      </div>
    </div>
  )
}

export default ImageUpload