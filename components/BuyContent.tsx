import { Input } from "./ui/input";
import Image from "next/image";
import switchIcon from "@/app/assets/svgs/swtich.svg";
import waterIcon from "@/app/assets/svgs/water.svg";
import { useState } from "react";
import { Button } from "./ui/button";

export const BuyContent = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="pt-4 w-full flex flex-col gap-4">
      <p className=" text-[#808080] text-sm font-[380]">
        It’s optional but buying a small amount of coins helps protect your coin
        from snipers
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <div className="text-[#BFBFBF] text-sm font-medium flex items-center gap-6">
            <span className="">Switch to TEST</span>
            <Image
              src={switchIcon}
              alt="switch"
              width={12}
              height={12}
              className="invert-[0.5]"
            />
          </div>
        </div>

        <Input
          className="w-full"
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

      <Button variant="secondary" className="w-full min-h-[63px]">
        Launch it!
      </Button>
    </div>
  );
};
