import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import DialogPortofolio from "@/pages/Portofolio/components/DialogPortofolio";

import type { Portfolio } from "@/types/resume";

interface CardPortofolioProps {
    data: Portfolio;
}

const CardPortofolio: React.FC<CardPortofolioProps> = ({ data }) => {
    return (
        <Card className="overflow-hidden p-0">
            <img
                src={data.thumbnail}
                alt={data.name}
                className="h-60 w-full object-cover"
                loading="lazy"
            />
            <CardContent className="pb-4">
                <DialogPortofolio data={data} />
                <p className="text-sm text-muted-foreground">{data.description}</p>
            </CardContent>
        </Card>
    )
}

export default CardPortofolio;