import React from "react";

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "../../data/people";


export interface HomeInterface { }
// React.FunctionComponent (FC)
const Home: React.FC<HomeInterface> = () => {
    const pageSize = 5;
    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
    ];
    return (
        <DataGrid
            rows={People}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
            getRowId={(row: any) => row.id}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize,
                    },
                },
            }}
            pageSizeOptions={[5, 10, 25]}
        />);
};

export default Home;
