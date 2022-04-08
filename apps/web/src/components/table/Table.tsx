import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { TrySVG, DollarSVG, GbtSVG } from "../../assets/svg/currency"
import { Button } from '../common';




const handleIcon = (row: any) => {
    if (row.currency === "TRY") {
        return <TrySVG />
    }
    if (row.currency === "GBP") {
        return <GbtSVG />
    }
    return <DollarSVG />
}

const columns = [
    {
        name: '',
        selector: (row: any) => handleIcon(row),
        center: true,
    },
    {
        name: 'HESAP ADI',
        selector: (row: any) => row.name,
        center: true,
    },
    {
        name: 'PARA BİRİMİ',
        selector: (row: any) => row.currency,
        center: true,
    },
    {
        name: 'HESAP NO',
        selector: (row: any) => row.accountNumber,
        center: true,
    },
    {
        name: 'İNCELE',
        selector: (row: any) => (<Link to={`/accounts/${row.id}`}><Button
            flexDirection='row'
            display='flex'
            border="1px solid #FA4616"
            color="#fff"
            background="#FA4616"
            padding="5px 30px"
            height="50px"
            onClick={() => { localStorage.setItem('item', JSON.stringify(row)) }}
            radius="12px"
            width="100%"
            justifyContent='space-evenly'
            alignItems='center'>İncele</Button></Link>),
        center: true,
    },
];

const customStyles = {
    table: {
        style: {
            width: '100%',
            border: '0 solid transparent',
            borderRadius: '12px ',
            zIndex: '1',
        }
    },
    rows: {
        style: {
            border: "none"
            // override the row alignment
        },
    },
    cells: {
        style: {
            borderRight: '1px solid #F3F3F3',
            borderLeft: '1px solid #F3F3F3',
            borderRadius: '12px ',
        },
    },

    headCells: {
        style: {
            background: '#F3F3F3',
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '12px ',

        }
    }

};

function StyledTable({ data }: any): JSX.Element {
    return (<DataTable columns={columns} data={data} customStyles={customStyles} />);
}

export default StyledTable;





