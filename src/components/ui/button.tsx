// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

import { JSX } from "react";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//     "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
//     {
//         variants: {
//             variant: {
//                 default:
//                     "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//                 destructive:
//                     "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//                 outline:
//                     "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//                 secondary:
//                     "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//                 ghost: "hover:bg-accent hover:text-accent-foreground",
//                 link: "text-primary underline-offset-4 hover:underline",
//             },
//             size: {
//                 default: "h-9 px-4 py-2",
//                 sm: "h-8 rounded-md px-3 text-xs",
//                 lg: "h-10 rounded-md px-8",
//                 icon: "h-9 w-9",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//             size: "default",
//         },
//     }
// );

// export interface ButtonProps
//     extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//         VariantProps<typeof buttonVariants> {
//     asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//     ({ className, variant, size, asChild = false, ...props }, ref) => {
//         const Comp = asChild ? Slot : "button";
//         return (
//             <Comp
//                 className={cn(buttonVariants({ variant, size, className }))}
//                 ref={ref}
//                 {...props}
//             />
//         );
//     }
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };

type BasePropsT<E extends React.ElementType> = {
    children: React.ReactNode;
    isDisabled?: boolean;
    iconOnlyAlt?: string;
    handleClick?: (event: React.MouseEvent) => void;
    as?: E extends "button" | "a" ? E : never;
};

type ButtonPropsT<E extends React.ElementType> = BasePropsT<E> &
    Omit<React.ComponentProps<E>, keyof BasePropsT<E>>;

/**
 * Button component.
 * Renders a 'button' or 'a' (anchor) element.
 * @param {ButtonPropsT} props - Component props.
 *    - isDisabled: Indicates whether the button is disabled. Default is false.
 *    - iconOnlyAlt: Alternative text for the button icon, used for accessibility when only an icon is displayed.
 *    - as: The element type to render. Can be either 'button' or 'a' (anchor). Defaults to 'button'.
 * @returns {JSX.Element} - Rendered button component.
 */
function Button<E extends React.ElementType = "button">({
    children,
    isDisabled,
    iconOnlyAlt,
    handleClick,
    as,
    ...nativeAttributes
}: ButtonPropsT<E>): JSX.Element {
    const Component = as || "button";

    return (
        <Component
            type={
                Component === "button"
                    ? nativeAttributes.type || "button"
                    : undefined
            }
            aria-label={iconOnlyAlt}
            aria-disabled={isDisabled}
            disabled={Component === "button" ? isDisabled : undefined}
            onClick={handleClick}
            {...nativeAttributes}
            className={`Button focus ${isDisabled && "disabled"} ${
                iconOnlyAlt && "icon-only"
            } ${nativeAttributes.className || ""}`}
        >
            {children}
        </Component>
    );
}

export default Button;

{
    /* <button class="button">
<div class="button__deco">
    <div class="button__deco-filler"></div>
</div>
<span class="button__text">
    <span class="button__text-inner">enter</span>
</span>
</button> */
}
