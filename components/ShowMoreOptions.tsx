import { memo, useCallback, useState } from "react";
import { SocialLinkInput } from "./SocialLinkInput";

interface SocialLinks {
  xLink: string;
  discordLink: string;
  telegramLink: string;
}

interface ShowMoreOptionsProps {
  socialLinks: SocialLinks;
  onSocialLinksChange: (key: string, value: string) => void;
}

export const ShowMoreOptions = memo(function ShowMoreOptions({
  socialLinks,
  onSocialLinksChange,
}: ShowMoreOptionsProps) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleSocialLinkChange = useCallback(
    (key: keyof SocialLinks) => (value: string) => {
      onSocialLinksChange(key, value);
    },
    [onSocialLinksChange]
  );

  return (
    <>
      <button
        type="button"
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
        <div className="flex gap-4">
          <SocialLinkInput
            id="xLink"
            label="X link"
            value={socialLinks.xLink}
            onChange={handleSocialLinkChange("xLink")}
          />
          <SocialLinkInput
            id="discord"
            label="Discord"
            value={socialLinks.discordLink}
            onChange={handleSocialLinkChange("discordLink")}
          />
          <SocialLinkInput
            id="telegram"
            label="Telegram link"
            value={socialLinks.telegramLink}
            onChange={handleSocialLinkChange("telegramLink")}
          />
        </div>
      )}
    </>
  );
});
