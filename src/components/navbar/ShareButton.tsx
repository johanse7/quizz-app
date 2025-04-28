"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { LuShare2 } from "react-icons/lu";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Button } from "../ui/button";

const shareLink = process.env.NEXT_PUBLIC_WEBSITE_URL;

export const ShareButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={"Quiz"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={shareLink} title={"Quiz"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareLink} title={"Quiz"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </PopoverContent>
    </Popover>
  );
};
