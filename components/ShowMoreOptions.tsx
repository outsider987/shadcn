import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ShowMoreOptionsProps {
  xLink: string;
  discordLink: string;
  telegramLink: string;
  onXLinkChange: (value: string) => void;
  onDiscordLinkChange: (value: string) => void;
  onTelegramLinkChange: (value: string) => void;
}

export function ShowMoreOptions({
  xLink,
  discordLink,
  telegramLink,
  onXLinkChange,
  onDiscordLinkChange,
  onTelegramLinkChange,
}: ShowMoreOptionsProps) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMoreOptions(!showMoreOptions)}
        className="flex items-center text-[#0066FF] justify-between font-medium"
      >
        Show more options
        <svg
          className={`ml-2 w-4 h-4 transform transition-transform ${
            showMoreOptions ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {showMoreOptions && (
        <div className="flex  gap-4">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="xLink">X link</Label>
            <Input
              id="xLink"
              placeholder="Enter X link"
              value={xLink}
              onChange={(e) => onXLinkChange(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="discord">Discord</Label>
            <Input
              id="discord"
              placeholder="Enter Discord link"
              value={discordLink}
              onChange={(e) => onDiscordLinkChange(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-2">
            <Label htmlFor="telegram">Telegram link</Label>
            <Input
              id="telegram"
              placeholder="Enter Telegram link"
              value={telegramLink}
              onChange={(e) => onTelegramLinkChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
} 