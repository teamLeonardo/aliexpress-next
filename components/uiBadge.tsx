"use client"

import { Badge, BadgeProps } from "@nextui-org/react"

export const UiBadge = ({ children, classBadge, ...resto }: BadgeProps & { classBadge: string }) => {
    return <Badge
        classNames={{ "badge": `${classBadge}` }}
        {...resto}
    >
        {children}
    </Badge>
}