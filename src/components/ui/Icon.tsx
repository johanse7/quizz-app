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
  | "error";

type IconProps = {
  type: IconName;
} & SVGProps<SVGSVGElement>;

const iconMap = new Map<IconName, FunctionComponent<SVGProps<SVGSVGElement>>>([
  ["html", HtmlIcon],
  ["css", CssIcon],
  ["javascript", JavascriptIcon],
  ["accessibility", AccessibilityIcon],
  ["error", Error],
  ["correct", Correct],
]);

export const Icon = ({ type, ...rest }: IconProps) => {
  const IconComponent = iconMap.get(type);

  if (!IconComponent) return null;

  return <IconComponent {...rest} />;
};

Icon.displayName = "Icon";
