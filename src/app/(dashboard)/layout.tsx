export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
      <div className="h-screen flex">
        {/* Left sidebar */}
        <div className="flex-[1] bg-gray-100 p-4">
          Sidebar content
        </div>
        {/* Right main content */}
        <div className="flex-[5] p-4">
        {children}
        </div>
      </div>
    );
}