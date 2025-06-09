"use client";
import supabase from '@/utils/supabaseClient'// Adjust the import path as necessary
import { CloudUpload, WandSparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {X} from 'lucide-react';
import React, { ChangeEvent, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { uploadBytes } from 'firebase/storage';
// import {storage} 
// import { storage } from '@/configs/firebaseConfig'; // Adjust the import path as necessary
// import { storage } from '@/lib/firebase'; // Adjust the import path as necessary

// import { Select } from '@/components/ui/select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const ImageUpload = () => {
  const AiModelList=[
    {name:"Gemini Google",
      icon:"/gemini-logo.webp",
    },{
      name:"GPT-4",
      icon:"/ChatGPT-Logo.png",
    },{
      name:"Deepseek",
      icon:"/list.jpg",
    }
  ]
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<any>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if(!file || selectedModel || !description){
      console.log('Please select a model and enter a description before uploading an image.');
      return;
    }
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log('Selected file:', files[0]);
      setFile(files[0]);
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewUrl(imageUrl);
    }
  };

  const OnConvertToCodeButtonClick=async()=>{
    // save image to database
    const fileName=Date.now() + '-' + Math.random().toString(36).substring(2, 15) + '.png';
    
  const { data, error } = await supabase.storage
    .from('user-files') // replace with your bucket name
    .upload(`images/${fileName}`, file);

  console.log('✅ Image uploaded successfully:', data);

  // To get the public URL:
  const { data: publicUrlData } = supabase.storage.from('user-files')
    .getPublicUrl(`images/${fileName}`);

  console.log('🌐 Public URL:', publicUrlData.publicUrl);
  }

  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-10'>
        {!previewUrl && (
          <div className='p-7 border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
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
        <div className='p-7 border shadow-md rounded-lg'>
          <h2>Select AI Model</h2>
          <Select onValueChange={(value) => setSelectedModel(value)} >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select AI" />
  </SelectTrigger>
  <SelectContent>
    {AiModelList.map((model, index) => (
      <SelectItem key={index} value={model.name}>
        <div className='flex items-center gap-2'>
          <img src={model.icon} alt={model.name} className='w-8 h-8 rounded-full' />
          <h2>{model.name}</h2>
        </div>
      </SelectItem>
    ))}
  </SelectContent>
</Select>
          <h2 className='font-bold text-lg mt-7'>Enter Description about the image</h2>
          <Textarea className='mt-3 h-[200px]' placeholder='Write about your web page' onChange={(event)=>setDescription(event?.target.value)}/>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-center w-full'>
        <Button onClick={OnConvertToCodeButtonClick} className='w-full'><WandSparkles/> 
          Convert to Code
        </Button>
      </div>
      </div>
  );
};

export default ImageUpload;
