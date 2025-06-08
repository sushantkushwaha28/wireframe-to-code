"use client";

import { CloudUpload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {X} from 'lucide-react';
import React, { ChangeEvent, useState } from 'react';

const ImageUpload = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log('Selected file:', files[0]);
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {!previewUrl && (
          <div className='px-12 py-10 border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
            <CloudUpload className='h-10 w-10' />
            <h2 className='text-lg font-semibold mt-4'>Upload Image</h2>
            <p className='text-gray-500 mt-2'>Click the button to upload</p>
            <div className='p-5 border border-dashed rounded-md mt-4 w-full flex items-center justify-center'>
              <label htmlFor='imageSelect' className='cursor-pointer'>
                <h2 className='p-2 bg-primary text-white rounded-md px-5'>Select Image</h2>
              </label>
            </div>
          </div>
        )}

        <input
          type='file'
          accept='image/*'
          className='hidden'
          id='imageSelect'
          onChange={onImageSelect}
          multiple={false}
        />

        {previewUrl && (
          <div className='relative px-10 py-10  w-[400px] h-[400px] border border-dashed shadow-md flex items-center justify-center'>
            <img
              src={previewUrl}
              alt='Uploaded preview'
              className='rounded-md shadow-md object-contain w-full h-full'
              
            />
            <X className='absolute left-2 top-2 flex justify-end items-end w-full cursor-pointer' onClick={()=>setPreviewUrl(null)}/>
          </div>
        )}
      </div>

      <div className='mt-10'>
        <h2 className='text-lg font-semibold mb-2'>User Input TextArea</h2>
      </div>
    </div>
  );
};

export default ImageUpload;
