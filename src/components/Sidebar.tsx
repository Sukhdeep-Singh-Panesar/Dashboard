const Sidebar = () => {
    return (
        <nav className="w-64 h-screen border-r shrink-0 border-2 flex flex-col">
            <div className="p-1 text-center text-2xl">
                <div className="text-[#4880FF] font-bold">DashStack </div>
                </div>

            <div className="flex-1 overflow-y-auto py-6">
        <ul className="flex flex-col">
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Dashboard</li>
            <li className="indent-16  border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Products</li>
            <li className="indent-16  border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Favourite</li>
            <li className="indent-16  border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Inbox</li>
            <li className="indent-16  border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Order List</li>

            <div className="border-2 mt-2 mb-2 ml-2 "></div>
            <div className="px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Pages
            </div>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Pricing</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Calender</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">To-Do</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Contact</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Invoice</li>


            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">UI Elements</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Team</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Table</li>

            <div className="border-2 mt-2 mb-2 ml-2"></div>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Settings</li>
            <li className="indent-16 border-l-4 border-transparent hover:bg-[#4880FF]/10 hover:border-[#4880FF] flex rounded-xl gap-3 mx-2 px-3 py-3 cursor-pointer">Logout</li>

        </ul>
            </div>
        </nav>


    )
}
export default Sidebar
