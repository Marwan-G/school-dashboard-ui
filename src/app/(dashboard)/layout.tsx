import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
      <div className="h-screen flex">
        {/* Left sidebar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-100 p-4">
          <Link href="\" className="flex items-center justify-center lg:justify-start gap-2"  > 
          <Image src="/logo.png"  alt="log" width={32} height={32}/>
          <span className="hidden lg:block">
            LibianSchoool
            </span>
         </Link>
         
        </div>
        {/* Right main content */}
        <div className="w-[86] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-blue-200 p-4">
        {children}
        </div>
      </div>
    );
}