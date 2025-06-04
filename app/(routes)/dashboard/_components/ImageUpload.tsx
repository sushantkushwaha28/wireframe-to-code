"use client"
import { Button } from '@/components/ui/button'
import { CloudUpload } from 'lucide-react'
import React, { ChangeEvent } from 'react'

const ImageUpload = () => {
  // Function to handle image selection
  const [preview,setPreview] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (preview) {
      const img = new Image();
      img.src = preview;
      img.onload = () => {
        console.log('Image loaded successfully');
      };
      img.onerror = () => {
        console.error('Error loading image');
      };
    }
  }, [preview]);
  const onImageSelect =(event:ChangeEvent <HTMLInputElement>)=>{
      const file = event.target.files?.[0];
      if (file) {
        console.log('Selected file:', file);
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
      }
  }
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {!preview <div className='p-15 pb-20 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'> 
          <CloudUpload className='w-10 h-10 text-gray-500 mt-4' />
          <h2 className='text-center text-lg font-semibold mt-4'>Upload Image</h2>
          <p className='text-gray-500 mt-3 w-100'>Click Button Select Wireframe Image</p>
          <label htmlFor='image-upload' className='mt-8'>
            {/* <Button variant='outline' className='w-full'>
              <CloudUpload className='mr-2' />
              Upload Image
            </Button> */}
            <h2 className='p-2 bg-primary text-white rounded-md hover:bg-slate-700'>Upload Image</h2>
          </label>
        </div>
        <input type='file' accept='image/*' className='hidden' id='image-upload' multiple={false} onChange={onImageSelect}/>
          </div>:}
          
        <div>
          <Image src={preview} alt='Preview' className='w-full h-auto rounded-md shadow-md' />
        </div>
      </div>
    </div>
    
  )
}

export default ImageUpload