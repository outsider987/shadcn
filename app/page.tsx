"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Content } from "@/components/Content";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      console.log('Form submitted:', data);
      // Here you would typically send the data to your backend
      // await submitToBackend(data);
      setShow(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button onClick={() => setShow(true)}>Pop up modal</Button>
      </main>
      <Modal show={show} onClose={() => setShow(false)} title="Launch coin">
        <Content onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}
