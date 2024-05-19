import React from "react"
import { cn } from "@/utils/cn"

const buttonVariant = {
    variants: {
        variant: {
            default: "",
            destructive: "",
            outline: "",
            secondary: "",
            ghost: "",
            link: ""
        },
        size: {
            default: "",
            sm: "",
            lg: "",
        }
    }
}

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
    isLoading?: boolean
}

const Button = (
    {
        className,
        isLoading,
        asChild,
        ...props
    }: ButtonProps
) => {
    const Comp = asChild ? React.Fragment : "button"

    return (
        <Comp
            className={cn(className)}
            {...props}
        />
    )
}

export { Button, buttonVariant }
