import React from "react";
import moment from "moment";

import { Mail, Phone, CalendarDays, MapPin } from "lucide-react";

import type { PersonalInfo } from "@/types/resume";

type SidePersonalInfoProps = { data: PersonalInfo };

const SidePersonalInfo: React.FC<SidePersonalInfoProps> = ({ data }) => {
    return (
        <div className="flex flex-col gap-5 xl:gap-7 text-sm xl:text-md">
            <hr className="border-t-1 border-orange-300" />
            <div className="flex flex-row items-center justify-center gap-7">
                <div className="hidden xl:flex items-center justify-end flex-1">
                    <Mail size={32} className="text-orange-300" />
                </div>
                <div className="flex flex-col flex-4">
                    <div className="flex items-center gap-2">
                        <Mail size={18} className="text-orange-300 xl:hidden" />
                        <label>Email</label>
                    </div>
                    <h6 className="font-bold break-all">{data.email}</h6>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-7">
                <div className="hidden xl:flex items-center justify-end flex-1">
                    <Phone size={32} className="text-orange-300" />
                </div>
                <div className="flex flex-col flex-4">
                    <div className="flex items-center gap-2">
                        <Phone size={18} className="text-orange-300 xl:hidden" />
                        <label>Phone</label>
                    </div>
                    <h6 className="font-bold break-all">{data.phone}</h6>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-7">
                <div className="hidden xl:flex items-center justify-end flex-1">
                    <CalendarDays size={32} className="text-orange-300" />
                </div>
                <div className="flex flex-col flex-4">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} className="text-orange-300 xl:hidden" />
                        <label>Date of birth</label>
                    </div>
                    <h6 className="font-bold break-all">{moment(data.birth_date).format("DD/MM/YYYY")}</h6>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-7">
                <div className="hidden xl:flex items-center justify-end flex-1">
                    <MapPin size={32} className="text-orange-300" />
                </div>
                <div className="flex flex-col flex-4">
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-orange-300 xl:hidden" />
                        <label>Address</label>
                    </div>
                    <h6 className="font-bold break-all">{data.address}</h6>
                </div>
            </div>
            <hr className="border-t-1 border-orange-300" />
        </div>
    )
}

export default SidePersonalInfo;