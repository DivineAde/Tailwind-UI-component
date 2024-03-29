import React from "react";
import { twMerge } from "tailwind-merge";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonComponent = {
  (
    props: BaseButtonProps & { varient?: "primary"; colors?: PrimaryColor }
  ): JSX.Element;

  (
    props: BaseButtonProps & { varient: "secondary"; colors?: SecondaryColor }
  ): JSX.Element;

  (
    props: BaseButtonProps & { varient: "tertiary"; colors?: TertiaryColor }
  ): JSX.Element;
  (
    props: BaseButtonProps & {
      varient: "destructive";
      colors?: DestructiveColor;
    }
  ): JSX.Element;
};

type PrimaryColor = { bg?: string; hoverBg?: string; focusRing?: string };

type SecondaryColor = {
  text: string;
  border: string;
  hoverBorder?: string;
  hoverBg?: string;
  focusRing?: string;
};

type TertiaryColor = {
  text: string;
  hoverText?: string;
  hoverBg?: string;
  focusRing?: string;
};

type DestructiveColor = {
  text: string;
  bg?: string;
  hoverText?: string;
  hoverBg?: string;
  hoverBorder?: string;
  focusRing?: string;
};

export const Button: ButtonComponent = ({
  varient = "primary",
  colors = {},
  ...props
}) => {
  const baseClasses: string =
    "inline-flex items-center justify-center gap-2 rounded-md  px-4 font-medium text-sm transition-all  focus:ring-1  dark:focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50 capitalize";

  const generateClassesProps = (varient: string, colorProps: any) => {
    switch (varient) {
      case "primary":
        return `border border-transparent py-2 ${
          colorProps.bg || "bg-emerald-400"
        } ${colorProps.hoverBg || "hover:bg-emerald-600"} ${
          colorProps.focusRing || "focus:ring-emerald-700"
        }  text-white`;

      case "secondary":
        return `border ${
          colorProps.border || "border-emerald-500"
        } py-2 hover:text-white ${colorProps.text || "text-emerald-500"}  ${
          colorProps.hoverBorder || "hover:border-emerald"
        } ${colorProps.hoverBg || "hover:bg-emerald-500"} ${
          colorProps.focusRing || "focus:ring-emerald-500"
        }`;

      case "tertiary":
        return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline  ${
          colorProps.text || "text-emerald-500"
        } ${colorProps.hoverText || "hover:text-emerald-700"} ${
          colorProps.focusRing || "focus:ring-emerald-500"
        }`;

      case "destructive":
        return `border border-red-500 ${
          colorProps.hoverBorder || "border-red-600"
        } ${colorProps.hoverBg || "hover:bg-red-600"} ${
          colorProps.bg || "bg-red-500"
        } py-3 underline-offset-4 ring-offset-white  ${
          colorProps.text || "text-white"
        } ${colorProps.hoverText || "hover:text-white"} ${
          colorProps.focusRing || "focus:ring-red-500"
        }`;

      default:
        return "";
    }
  };

  const varientClasses = generateClassesProps(varient, colors);

  const mergeClasses = twMerge([baseClasses, varientClasses]);
  return <button className={mergeClasses} {...props} />;
};
