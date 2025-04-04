import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold", // Base styles
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#E4D00A] to-[#E4C80A]",
      citrusYellow: "from-[#E4C80A] to-[#E4C80A]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      neon: "from-[#FF5C00] to-[#612400]",
      purple: "from-[#6C3BAA] to-[#2F0A61]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "neon",
        "purple",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#E4D00A] to-[#E4C80A]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      flatGreen: "from-[#2E6F40] to-[#2E6F40]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      neon: "from-[#FF5C00] to-[#612400]",
      purple: "from-[#6C3BAA] to-[#2F0A61]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
    font: "roboto", // Default font variant
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "flatGreen",
        "pink",
        "neon",
        "purple",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
