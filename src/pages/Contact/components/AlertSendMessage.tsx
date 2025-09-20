import React, { useState, useEffect } from "react";

import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

type AlertProps = {
    status: "idle" | "loading" | "success" | "error"
    setStatus: (open: "idle" | "loading" | "success" | "error") => void
};

const AlertSendMessage: React.FC<AlertProps> = ({ status, setStatus }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
        setStatus("idle");
    }

    useEffect(() => {
        if (status !== "idle") setOpen(true)
    }, [status])

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="z-[999]">
                <AlertDialogHeader>
                    {status === "loading" && (
                        <>
                            <AlertDialogTitle>Processing</AlertDialogTitle>
                            <AlertDialogDescription asChild>
                                <div className="flex items-center gap-2">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Sending message...
                                </div>
                            </AlertDialogDescription>
                        </>
                    )}

                    {status === "success" && (
                        <>
                            <AlertDialogTitle>Success!</AlertDialogTitle>
                            <AlertDialogDescription asChild className="text-green-600">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5" />
                                    Message sent successfully.
                                </div>
                            </AlertDialogDescription>
                        </>
                    )}

                    {status === "error" && (
                        <>
                            <AlertDialogTitle>Error</AlertDialogTitle>
                            <AlertDialogDescription asChild className="text-red-600">
                                <div className="flex items-center gap-2">
                                    <XCircle className="h-5 w-5" />
                                    Something went wrong.
                                </div>
                            </AlertDialogDescription>
                        </>
                    )}
                </AlertDialogHeader>

                <AlertDialogFooter>
                    {status !== "loading" && (
                        <AlertDialogAction onClick={handleClose} className="cursor-pointer">
                            Close
                        </AlertDialogAction>
                    )}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertSendMessage;