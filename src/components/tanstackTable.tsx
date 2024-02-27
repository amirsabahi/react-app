import { 
    useReactTable,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
 } from "@tanstack/react-table";
import { useMemo} from 'react';
import { columnDef } from "./column";

export const  TanstackTable = () => {
    const users =  [
        {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            role: "Client"
        }, 
        {
            id: 2,
            first_name: "Jane",
            last_name: "Doe",
            role: "Writer"
        },
        {
            id: 3,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },{
            id: 4,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 5,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 6,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 7,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 8,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 9,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 10,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        },
        {
            id: 11,
            first_name: "Shima",
            last_name: "Nejati",
            role: "Engineering manager"
        }
    ]
    const userData = useMemo(()=>users, [])
    const columnData = useMemo(()=>columnDef, [])
    /* tslint:disable */
    const table = useReactTable<unknown>({ columns: columnData, data: userData, getCoreRowModel: getCoreRowModel(), getPaginationRowModel:getPaginationRowModel()});
        return (
        // Your JSX/HTML code goes here
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerEl) => {
                        return (<tr key={headerEl.id}>
                                {
                                headerEl.headers.map((columnEl) => {
                                return (
                                <th key={columnEl.id}>
                                   { 
                                        flexRender(
                                        columnEl.column.columnDef.header,
                                        columnEl.getContext()
                                    )
                                        }
                                </th>)
                            })}
                        </tr>)
                    })
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map((rowEl)=>
                        {
                            return (
                            <tr key={rowEl.id}>
                                  {rowEl.getVisibleCells().map((cellEl)=> {
                                        return <td key={cellEl.id}>
                                            {flexRender(
                                                cellEl.column.columnDef.cell,
                                                cellEl.getContext()
                                    )}
                                        </td>
                                    }) 
                                  }  
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <div>
                <button onClick={() => table.setPageIndex(0)}>First</button>
                <button disabled={table.getCanNextPage()} onClick={() => table.previousPage()}>Previous</button>
                <button disabled={table.getCanPreviousPage()} onClick={() => table.nextPage()}>Next</button>
                <button onClick={() => table.setPageIndex(table.getPageCount()-1)}>Last</button>
            </div>
        </div>
    );
};
