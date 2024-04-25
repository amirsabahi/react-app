import { Autocomplete, Box, Button, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react"
import { Controller, useForm } from "react-hook-form";

export const ContactForm = () => {
const contactList = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        email: "doe@vfg.com"
    }, 
    {
        id: 2,
        name: "Emily",
        lastName: "Cohen",
        email: "coen@Coencorp.com"
    }
]

const fileList = [
    {
        id: 1,
        label:"Application From"
    }, 
    {
        id: 2,
        label:"XYZ Form"
    }
]

const {control, handleSubmit} = useForm();
return(
    <>
    <form onSubmit={handleSubmit((data)=>{
        console.log(data)
    })}>
    <Controller
        name="email"
        control={control}
        render={({field: { onChange, value }})=>(<>
            <Autocomplete
                onChange={(event, newValue) => {
                    onChange(newValue?.email);
                }}
                options = {contactList.map(contact => ( {label:`${contact.name} ${contact.lastName} <${contact.email}>`, email: contact.email}))}
                getOptionLabel = {(option)=> `${option.label}`}
                renderInput = {(params) => <TextField {...params} label="Emails" />}
            />
        </>)}
    />
    <Box sx={{marginTop:"1rem"}}>
            

    <Controller
        name="body"
        control={control}
        render={({field:{value, onChange}})=>(
            <TextField multiline={true} rows="4" value={value} onChange={onChange}  label="Body" sx={{width: "100%"}} />
        )}
    />
        </Box>
        <Box sx={{marginTop:"1rem"}}>
        <Controller
        name="file"
        control={control}
        render={({field: { onChange, value }})=>(<>
            <Autocomplete
                onChange={(event, newValue) => {
                    onChange(newValue?.id);
                }}
                options = {fileList}
                getOptionLabel = {(option)=> `${option.label}`}
                renderInput = {(params) => <TextField {...params} label="Files" />}
            />
        </>)}
    />
    </Box>
    <Box sx={{marginTop:"1rem"}}>
            <Button type="submit" >Submit</Button>
    </Box>
    </form>
    </>
)
}