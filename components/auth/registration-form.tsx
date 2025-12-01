"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function RegistrationForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <div className="flex justify-center items-center gap-3">
                                <Field>
                                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                                    <Input
                                        id="firstName"
                                        type="text"
                                        placeholder="Sajib"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                                    <Input
                                        id="lastName"
                                        type="text"
                                        placeholder="Das"
                                        required
                                    />
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="0171********"
                                    required
                                />
                            </Field>

                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>

                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                                </div>
                                <Input id="confirmPassword" type="password" required />
                            </Field>

                            <Field>
                                <Button type="submit">Registration</Button>
                                <FieldDescription className="text-center">
                                    have an account? <Link href="/auth/login">Login</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}