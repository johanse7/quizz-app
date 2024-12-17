"use client";

import { useIsClient } from "@/hooks";
import { SystemThemeEnum } from "@/types";
import { useTheme } from "next-themes";
import { GoMoon } from "react-icons/go";
import { LuSunMedium } from "react-icons/lu";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

export const DarkMode = () => {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === SystemThemeEnum.dark;

  const { isClient } = useIsClient();

  const handleChangeTheme = () => {
    setTheme((themeValue) =>
      themeValue === SystemThemeEnum.dark
        ? SystemThemeEnum.light
        : SystemThemeEnum.dark
    );
  };

  if (!isClient) return null;

  return (
    <div className="flex gap-x-2 items-center">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setTheme(SystemThemeEnum.light)}
      >
        <LuSunMedium className="w-6 h-6" />
      </Button>
      <Switch
        checked={isDarkMode}
        onClick={handleChangeTheme}
        className="h-[20px]"
      />
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setTheme(SystemThemeEnum.dark)}
      >
        <GoMoon className="w-6 h-6" />
      </Button>
    </div>
  );
};
