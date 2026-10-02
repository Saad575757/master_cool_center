import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-white shadow-[0_10px_24px_-12px_rgba(224,27,45,0.85)] hover:bg-accent-600 hover:shadow-[0_14px_30px_-12px_rgba(196,20,36,0.9)]",
        brand:
          "bg-brand-600 text-white shadow-[0_10px_24px_-12px_rgba(19,80,196,0.85)] hover:bg-brand-700",
        ink: "bg-ink-900 text-white hover:bg-ink-800",
        outline:
          "border border-ink-200 bg-white text-ink-900 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800",
        outlineLight:
          "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:border-white/70 hover:bg-white/20",
        ghost: "text-ink-700 hover:bg-ink-50 hover:text-brand-700",
        whatsapp:
          "bg-[#25D366] text-[#05320f] shadow-[0_10px_24px_-12px_rgba(37,211,102,0.9)] hover:bg-[#1eb958]",
        link: "text-brand-700 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm [&_svg]:size-4",
        md: "h-11 px-5 text-sm sm:text-[0.9375rem] [&_svg]:size-[1.125rem]",
        lg: "h-12 px-6 text-base [&_svg]:size-5",
        xl: "h-14 px-7 text-base sm:text-lg [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
