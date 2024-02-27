import { Table, TableBody, TableRow, TableCell, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function DataTable() {
    const [investor, setInvestor] = useState<{ name: string, contribution: string | number }[]>([]);
    const [totalContribution, setTotalContribution] = useState<number>(0)
    const [error, setError] = useState<string | null>(null);
    const investorRef = useRef<HTMLInputElement>(null);
    const contributionRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null)
        const total = Number(contributionRef.current?.value) + totalContribution
        if( total >101) {
            setError("Contribution should be up to 100%")
            return;
        }
        if (investorRef.current && investorRef.current.value.trim() !== "") {
            setInvestor([...investor, { name: investorRef.current.value, contribution: contributionRef.current?.value || 0 }]);
        }
        (event.target as HTMLFormElement).reset();
    };

    useEffect(() => {
        setTotalContribution(investor.reduce((current, investor) => {
            return current + Number(investor.contribution)
        }, 0));
    }, [investor])
    return (
        <>
        { error && <div>{error}</div> }
            <form method="post" onSubmit={handleSubmit}>
                <Stack direction={"row"} sx={{marginTop:"20px"}}>
                    <input ref={investorRef} name="investor" />
                    <input ref={contributionRef} name="contribution" />
                </Stack>
                <button type="submit">Submit</button>
            </form>
            <Table sx={{color:"#fff", marginTop:"20px"}}>
                <TableBody>

                    {
                        investor.map((investor, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{investor.name}</TableCell>
                                    <TableCell>{investor.contribution}</TableCell>
                                </TableRow>)
                        })
                    }
                    <TableRow>
                    <TableCell colSpan={1}></TableCell>
                        <TableCell colSpan={1}>Contribution</TableCell>
                        <TableCell align="right">{totalContribution}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>);
}