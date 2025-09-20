import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormProps = {
    setStatus: (open: "idle" | "loading" | "success" | "error") => void
    sendTo: string
};
type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
    fullname: z.string()
        .nonempty({ message: "Full name is required." }),
    emailaddress: z.string()
        .nonempty({ message: "Email address is required." })
        .email({ message: "Invalid format email address" }),
    yourmessage: z.string()
        .nonempty({ message: "Message is required." })
        .min(10, { message: "Minimum message 10 characters" })
        .max(500, { message: "Maximum message 500 characters" }),
});

const FormCardMessage: React.FC<FormProps> = ({ setStatus, sendTo }) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    const form = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            emailaddress: "",
            yourmessage: "",
        },
        mode: "onChange",
    });

    const onSubmit = async (data: FormValues) => {
        setStatus("loading");

        const params = {
            fullname: data.fullname,
            emailaddress: data.emailaddress,
            sendto: sendTo,
            yourmessage: data.yourmessage,
        };

        setTimeout(() => {
            setStatus("success");
        }, 2000);
        return;

        try {
            const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);

            console.log(result.text);
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <Card className="mt-5">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="grid w-full gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="col-span-2 md:col-span-1">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Full name" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <FormField
                                control={form.control}
                                name="emailaddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Email address" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-2">
                            <FormField
                                control={form.control}
                                name="yourmessage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Your message"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-2">
                            <Button type="submit" className="w-full cursor-pointer">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default FormCardMessage;