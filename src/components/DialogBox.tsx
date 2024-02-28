import { Button, Dialog, DialogTitle } from "@mui/material"
import { useDialog } from "../hooks/useDialog"

export const DialogBox = () => {
    const {open, openDialog, closeDialog, title} = useDialog()
    const handleClose = () => {
        closeDialog()
    }

    return (
        <>
        <div>
            <Button sx={{marginBottom:"2rem"}} onClick={()=>openDialog({title: 'Hello!'})}>Open Dialoge</Button>
        </div>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
        </Dialog>
        </>
    )
}