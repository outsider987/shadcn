import { Input } from "./ui/input";
import Image from "next/image";
import waterIcon from "@/app/assets/svgs/water.svg";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import SvgIcon from "./SvgIcon";

type FormValues = {
  amount: number;
};

export const BuyContent = ({
  handleFormSubmit,
}: {
  handleFormSubmit: (data: FormValues) => void;
}) => {
  const { register, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      amount: 0.05,
    },
  });

  const amount = watch("amount");

  return (
    <div className="pt-4 w-full flex flex-col gap-4">
      <p className="text-[#808080] text-sm font-[380]">
        It's optional but buying a small amount of coins helps protect your coin
        from snipers
      </p>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <div className="text-[#BFBFBF] text-sm font-medium flex items-center gap-6">
              <span className="">Switch to TEST</span>

              <SvgIcon className="text-[#BFBFBF]" name="switch" />
            </div>
          </div>

          <Input
            {...register("amount", {
              required: true,
              min: 0,
            })}
            className="w-full"
            type="number"
            step="0.01"
            suffix={
              <div className="flex items-center gap-[14px] ">
                <span>SUI</span>
                <Image src={waterIcon} alt="water" width={24} height={24} />
              </div>
            }
          />
        </div>
        <p className="text-[#808080] text-sm font-medium">
          {`You will receive: ${amount} TEST`}
        </p>

        <Button
          type="submit"
          variant="secondary"
          className="w-full min-h-[63px]"
        >
          Launch it!
        </Button>
      </form>
    </div>
  );
};
