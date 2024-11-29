import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUploader } from "@/components/ImageUploader";
import { ShowMoreOptions } from "@/components/ShowMoreOptions";
import { useForm } from "react-hook-form";
import { useMemo, useCallback } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface FormValues {
  name: string;
  ticker: string;
  description?: string;
  image: string | null;
  socialLinks: {
    xLink: string;
    discordLink: string;
    telegramLink: string;
  };
}

interface ContentProps {
  onSubmit: (data: FormValues) => void;
}

export const Content = ({ onSubmit }: ContentProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "TestCoin",
      ticker: "TEST",
      image: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      socialLinks: {
        xLink: "https://x.com/SuiNetwork",
        discordLink: "https://x.com/SuiNetwork",
        telegramLink: "https://x.com/SuiNetwork",
      },
    },
  });

  // Watch socialLinks with useEffect to ensure stable reference
  const socialLinks = watch("socialLinks");

  // Simplified social links change handler
  const handleSocialLinksChange = useCallback(
    (key: string, value: string) => {
      setValue("socialLinks", {
        ...socialLinks,
        [key]: value,
      });
    },
    [setValue, socialLinks]
  );

  const handleImageChange = useCallback(
    (image: string | null) => {
      setValue("image", image, { shouldDirty: true });
    },
    [setValue]
  );

  const formSubmitHandler = useCallback(handleSubmit(onSubmit), [
    handleSubmit,
    onSubmit,
  ]);

  // Memoize register calls
  const nameRegister = useMemo(
    () => register("name", { required: "Name is required" }),
    [register]
  );

  const tickerRegister = useMemo(
    () => register("ticker", { required: "Ticker is required" }),
    [register]
  );

  const descriptionRegister = useMemo(
    () => register("description"),
    [register]
  );

  return (
    <form
      onSubmit={formSubmitHandler}
      className="pt-4 w-full flex flex-col gap-4"
    >
      <div className="flex gap-2 sm:flex-col md:flex-col w-full">
        <div className="grid w-full  items-center gap-2 ">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Coin name" {...nameRegister} />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="grid w-full  items-center gap-2 ">
          <Label htmlFor="ticker">Ticker</Label>
          <Input id="ticker" placeholder="Ticker" {...tickerRegister} />
          {errors.ticker && (
            <span className="text-red-500 text-sm">
              {errors.ticker.message}
            </span>
          )}
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          {...descriptionRegister}
          className="min-h-[100px] text-[14px] leading-[13.3px] tracking-[0.02em]"
          placeholder="Enter description..."
        />
      </div>

      {/* image */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="image">Image</Label>
        <ImageUploader onImageChange={handleImageChange} />
      </div>

      {/* line */}
      <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

      {/* Show more options component */}
      <ShowMoreOptions
        socialLinks={socialLinks}
        onSocialLinksChange={handleSocialLinksChange}
      />

      {/* Launch button */}
      <Button type="submit" variant="secondary" className="w-full min-h-[63px]">
        Launch!
      </Button>

      {/* Bonding curve message */}
      <p className="text-[#808080] text-sm">
        When your coin completes its bonding curve you receive 0.5 SUI
      </p>
    </form>
  );
};
