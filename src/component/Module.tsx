interface props {
    children: any,
    open: boolean
}

export const Module = ({ children, open }: props) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full justify-center items-center backdrop-blur-sm ${open ? 'flex' : 'hidden'}`}>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow w-full max-w-lg">
                {children}
            </div>
        </div>
    )
}
