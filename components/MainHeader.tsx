const MainHeader = () => {
    return (
        <header className="bg-primary sticky top-0 flex h-[64px] w-full border-b px-[24px]">
            <nav className="flex w-full items-center justify-between">
                <div className="flex items-center gap-[24px]">
                    <div className="text-2xl font-bold">
                        Hell Brel Meteor Tracker{" "}
                        <span className="lin leading-[.7rem text-[.5rem]">
                            by kabang
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
