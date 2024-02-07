import React from "react";

const sizeClasses = {
  txtNunitoBold55: "font-bold font-nunito",
  txtNunitoSemiBold18: "font-nunito font-semibold",
  txtNunitoBold22: "font-bold font-nunito",
  txtNunitoSemiBold28: "font-nunito font-semibold",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtNunitoSemiBold25: "font-nunito font-semibold",
  txtTimesNewRomanPSMT20: "font-normal font-timesnewroman",
  txtNunitoSemiBold12: "font-nunito font-semibold",
  txtNunitoMedium25: "font-medium font-nunito",
  txtNunitoSemiBold22: "font-nunito font-semibold",
  txtNunitoRegular14: "font-normal font-nunito",
  txtNunitoRegular15: "font-normal font-nunito",
  txtNunitoBold18: "font-bold font-nunito",
  txtNunitoMedium18: "font-medium font-nunito",
  txtNunitoItalicRegular18: "font-normal font-nunito italic",
  txtNunitoLight16: "font-light font-nunito",
  txtNunitoRegular15WhiteA700: "font-normal font-nunito",
  txtNunitoRegular15Gray400: "font-normal font-nunito",
  txtNunitoRegular14Black900: "font-normal font-nunito",
  txtNunitoSemiBold28WhiteA700: "font-nunito font-semibold",
  txtTimesNewRomanPSMT20WhiteA700: "font-normal font-timesnewroman",
  txtNunitoSemiBold18Black900: "font-nunito font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
