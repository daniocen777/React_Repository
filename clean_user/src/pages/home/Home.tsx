import React, { useEffect, useState } from "react";

import Checkbox from '@mui/material/Checkbox';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "../../data/people";
import { Person } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addPeple } from "../../redux/states";
import { AppStore } from "../../redux/store";

// React.FunctionComponent (FC)
// !! => Esto es una forma de convertir un valor en su equivalente booleano de manera eficiente y concisa

export interface HomeInterface { }
const Home: React.FC<HomeInterface> = () => {
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
    const pageSize = 5;
    const dispatch = useDispatch();
    const statePeople = useSelector((store: AppStore) => store.people);

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);
    const handleChange = (person: Person) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorite(filteredPeople));
        setSelectedPeople(filteredPeople);
    };

    const columns: GridColDef[] = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => <>
                <Checkbox size="small"
                    checked={findPerson(params.row)}
                    onChange={() => handleChange(params.row)} />
            </>
        },
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
        }
    ];

    useEffect(() => {
        dispatch(addPeple(People));
    }, [])


    return (
        <DataGrid
            rows={statePeople}
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
