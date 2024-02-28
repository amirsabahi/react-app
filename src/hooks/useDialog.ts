import { useCallback, useState } from "react"

export const useDialog = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [dialogParams, setDialogParams] = useState({title: ''})
    const openDialog= useCallback((dialogeParams:{title:string})=> {
        setOpen(true)
        setDialogParams({
            title: dialogeParams.title
        })
    }, [])
    const closeDialog= useCallback(()=> {
        setOpen(false)
    }, [])
return {open, openDialog, closeDialog, ...dialogParams}
}