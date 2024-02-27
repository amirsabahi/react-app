import { createColumnHelper } from "@tanstack/react-table"

// Way 3 using function

//Way 2
const columnHelper = createColumnHelper();
//Way 1
export const columnDef = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorFn: (row: { first_name: string; last_name: string; }) => `${row.first_name} ${row.last_name}`,
        header: 'Name',
    },
    columnHelper.accessor('role', {
        header: 'Role',
    })
]
