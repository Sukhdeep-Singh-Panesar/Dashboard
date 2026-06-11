const Navbar = () => {
    return (
        <nav className="h-16 border-b border-border bg-card px-6 flex items-center justify-between shrink-0">

            <div className="flex items-center gap-4">
                Menu
                </div>

            <div className="flex-1 max-w-md mx-4">
                Search
                </div>

            <div className="flex items-center gap-4">
                <div>Notify</div>
                <div>Language</div>
                <div>User</div>
            </div>
        </nav>

    )
}
export default Navbar
