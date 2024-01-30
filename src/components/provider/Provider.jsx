import { Toaster } from "react-hot-toast"

Toaster

export const Provider = ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <div><Toaster /></div>
        </>
    )
}
