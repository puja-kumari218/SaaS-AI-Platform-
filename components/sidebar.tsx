'use client';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {LayoutDashboard,MessageSquare,ImageIcon, Music, VideoIcon,Code, Settings}
 from  'lucide-react';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/Conversation",
        color: "text-voilet-500",
    },

    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/Image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/Video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/Music",
        color: "text-emerald-500",
      },
      {
        label: "Code Generation",
        icon: Code,
        href: "/Code",
        color: "text-green-700",
      },
      {
        label: "Settings",
        icon: Settings,
        href: "/Settings",
        color: "text-green-700",
      },


];

const Sidebar = () => {
    return (

        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className='px-3 py-2 flex-1'>
                <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                    <div className={cn('flex text-2xl font-bold', montserrat?.className)}>
                        SaasAI
                    </div>
                </Link>

                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className='text-sm flex items-center space-x-2 px-4 mx-4 py-2 rounded-md hover:bg-white/10 hover:text-white transition duration-200'
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
