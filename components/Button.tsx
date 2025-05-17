import React from "react"

export const buttonVariant = {
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

export const Button = (
    {
        className,
        isLoading,
        asChild,
        ...props
    }: ButtonProps
) => {
    const Comp = asChild ? React.Fragment : "button"

    const isDisabled = isLoading

    return (
        <Comp
            className={className}
            disabled={isDisabled}
            {...props}
        />
    )
}
