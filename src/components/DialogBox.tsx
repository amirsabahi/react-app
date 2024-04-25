import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useDialog } from "../hooks/useDialog"
import { ContactForm } from "./from/ContactForm"

export const DialogBox = () => {
    const {open, openDialog, closeDialog, title} = useDialog()
    const handleClose = () => {
        closeDialog()
    }

    return (
        <>
        <div>
            <Button sx={{marginBottom:"2rem"}} onClick={()=>openDialog({title: 'Contact Form'})}>Open Contact From</Button>
        </div>
        <Dialog onClose={handleClose} open={open} fullScreen>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Box sx={{padding:"2rem"}}>
                    <ContactForm />
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
}