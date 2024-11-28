"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUploader } from "@/components/ui/image-uploader";
import { ShowMoreOptions } from "@/components/ShowMoreOptions";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("TestCoin");
  const [ticker, setTicker] = useState("TEST");
  const [image, setImage] = useState<string | null>(null);
  const [xLink, setXLink] = useState("https://x.com/SuiNetwork");
  const [discordLink, setDiscordLink] = useState("https://x.com/SuiNetwork");
  const [telegramLink, setTelegramLink] = useState("https://x.com/SuiNetwork");

  const Content = () => {
    return (
      <div className="mt-4 w-full flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="email">Name</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="ticker">Ticker</Label>
            <Input
              id="ticker"
              placeholder="Ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <div className="grid w-full  items-center gap-2 bg-[#0000000A] min-h-[100px] pt-4 px-5 rounded-2xl">
            <p className="font-semibold w-full h-full flex text-sm leading-[13.3px] tracking-[3%] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* image */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="image">Image</Label>
          <ImageUploader onImageChange={setImage} />
        </div>

        {/* line */}
        <div className="w-full h-[1px] bg-[#D9D9D9] "></div>

        {/* Show more options component */}
        <ShowMoreOptions
          xLink={xLink}
          discordLink={discordLink}
          telegramLink={telegramLink}
          onXLinkChange={setXLink}
          onDiscordLinkChange={setDiscordLink}
          onTelegramLinkChange={setTelegramLink}
        />

        {/* Launch button */}
        <button className="w-full bg-[#0066FF] text-white py-4 rounded-lg mt-4 font-medium min-h-[63px]">
          Launch!
        </button>

        {/* Bonding curve message */}
        <p className="text-gray-500 ">
          When your coin completes its bonding curve you receive 0.5 SUI
        </p>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button onClick={() => setShow(true)}>Pop up modal</Button>
      </main>
      <Modal show={show} onClose={() => setShow(false)} title="Launch coin">
        <Content />
      </Modal>
    </div>
  );
}
