import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex ">
      {/* Left sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-100 p-4">
        <Link
          href="\"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="log" width={32} height={32} />
          <span className="hidden lg:block font-bold">LibianSchoool</span>
        </Link>
       <Menu /> 
      </div>
      {/* Right main content */}
      <div className="w-[86] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#7F8FA] overflow-scroll bg-gray-50">
        <Navbar />
        {children}
      </div>
    </div>  
  );
}
