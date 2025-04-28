"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { Button } from "../ui/button";

import clsx from "clsx";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LanguageMenu = () => {
  const t = useTranslations("language");

  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();

  const handleChangeLanguage = (newLocale: string) => () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLocale }
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <GrLanguage className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={clsx("w-52", {
          ["transition-opacity [&:disabled]:opacity-30"]: isPending,
        })}
        align="start"
        sideOffset={10}
      >
        {routing.locales.map((routingLocale) => (
          <DropdownMenuCheckboxItem
            key={routingLocale}
            checked={locale === routingLocale}
            onClick={handleChangeLanguage(routingLocale)}
          >
            {t(routingLocale)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
