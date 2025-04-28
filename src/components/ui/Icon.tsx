import AccessibilityIcon from "@/../public/icons/icon-accessibility.svg";
import Correct from "@/../public/icons/icon-correct.svg";
import CssIcon from "@/../public/icons/icon-css.svg";
import Error from "@/../public/icons/icon-error.svg";
import HtmlIcon from "@/../public/icons/icon-html.svg";
import JavascriptIcon from "@/../public/icons/icon-js.svg";

import { FunctionComponent, SVGProps } from "react";

export type IconName =
  | "html"
  | "css"
  | "javascript"
  | "accessibility"
  | "correct"
  | "error"
  | "old-testament"
  | "jesus"
  | "bible-verses";

type IconProps = {
  type: IconName;
} & SVGProps<SVGSVGElement>;

type IconContentType = string | FunctionComponent<SVGProps<SVGSVGElement>>;

const iconMap = new Map<IconName, IconContentType>([
  ["html", HtmlIcon],
  ["css", CssIcon],
  ["javascript", JavascriptIcon],
  ["accessibility", AccessibilityIcon],
  ["error", Error],
  ["correct", Correct],
  ["old-testament", "📜"],
  ["jesus", "✝️"],
  ["bible-verses", "📖"],
]);

export const Icon = ({ type, ...rest }: IconProps) => {
  const IconComponent = iconMap.get(type);

  if (!IconComponent) return null;

  if (typeof IconComponent === "string") return IconComponent;

  return <IconComponent {...rest} />;
};

Icon.displayName = "Icon";
