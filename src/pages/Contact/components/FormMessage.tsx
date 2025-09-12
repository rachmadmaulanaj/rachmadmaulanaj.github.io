import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FormMessage: React.FC = () => {
    return (
        <Card className="mt-5">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid w-full gap-5">
                    <div className="col-span-2 md:col-span-1">
                        <Label htmlFor="fullname" className="pb-2">Full name</Label>
                        <Input type="text" placeholder="Full name" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <Label htmlFor="emailaddress" className="pb-2">Email address</Label>
                        <Input type="email" placeholder="Email address" />
                    </div>
                    <div className="col-span-2">
                        <Label htmlFor="yourmessage" className="pb-2">Your message</Label>
                        <Textarea placeholder="Type your message here." />
                    </div>
                    <div className="col-span-2">
                        <Button type="submit" className="w-full">Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default FormMessage;