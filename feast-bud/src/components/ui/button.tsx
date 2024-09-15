import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accentLight text-primary-foreground hover:bg-accentLight/70',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        userProfile: 'hover:bg-textNavLight/20',
        dropDown: 'bg-bgLight text-primary hover:bg-bgLight/75',
        addCart: 'bg-accentLight text-primary-foreground hover:bg-accentLight/70 mt-auto dark:bg-accentDark dark:hover:bg-white',
        themeToggle: 'text-white hover:bg-accentLight rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0',
        userMenu: 'text-white hover:bg-accentLight rounded-xl',
        signIn: 'bg-black text-white hover:bg-gray-100 hover:text-black dark:bg-white dark:text-black dark:hover:bg-gray-200',
        contact: 'hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black',
        viewBtn: 'bg-orange-800 text-white',
        // viewRecipe: 'bg-[#f7f0e2] text-black border',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        signIn: 'h-8 w-auto gap-x-1 p-3 rounded-xl border',
        contact: 'h-8 w-auto gap-x-1 p-3 rounded-xl border',
        themeBtn: 'h-8 w-auto px-2 rounded-xl',
        dropDown: 'w-40 px-3 py-1',
        addCart: 'h-9 px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, variant, size, asChild = false, ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
