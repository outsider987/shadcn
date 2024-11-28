"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import uploadIcon from "@/app/assets/svgs/upload.svg";

interface ImageUploaderProps {
  onImageChange?: (image: string | null) => void;
}

export function ImageUploader({ onImageChange }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    // Cleanup when the component unmounts
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
      objectUrlRef.current = imageUrl;
      setFile(selectedFile);
      console.log("uploaded imageUrl", imageUrl);
    }
  };



  const handleCancel = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setPreview(null);
    setFile(null);
    onImageChange?.(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full gap-4">
      {!preview ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer"
        >
          <img
            src={uploadIcon.src}
            alt="Upload"
            className="w-[100px] h-[100px]"
          />
        </div>
      ) : (
        <div className="flex  items-center gap-4">
          <div className="relative w-[100px] h-[100px]  border rounded-lg  flex justify-center items-center">
            <Image src={preview} alt="Uploaded preview" fill className="" />
          </div>
          <div className="flex gap-4">
            <Button variant="destructive" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      )}
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}
