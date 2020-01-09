import Avatar from '../cellRenderers/Avatar';
import PhoneNumber from '../cellRenderers/PhoneNumber';
import Email from '../cellRenderers/Email';
import MaritalStatus from '../cellRenderers/MaritalStatus';
import withCellErrors from '../cellRenderers/withCellErrors';

const defaultColDef = {
    width: 180
};

const associate = Object.assign({}, defaultColDef, {
    headerName: 'Associate',
    field: 'associate',
    cellRendererFramework: Avatar
});

const phone = Object.assign({}, defaultColDef, {
    headerName: 'Phone',
    field: 'phoneNumber',
    cellRendererFramework: PhoneNumber
});

const email = Object.assign({}, defaultColDef, {
    headerName: 'E-mail',
    field: 'email',
    cellRendererFramework: Email
});

const maritalStatus = Object.assign({}, defaultColDef, {
    headerName: 'Marital Status',
    field: 'maritalStatus',
    cellRendererFramework: MaritalStatus
});

const emergencyContact = Object.assign({}, defaultColDef, {
    headerName: 'Emergency Contact',
    field: 'emergencyContact',
    cellRendererFramework: Avatar
});

const columnDefinitions = [
    associate,
    phone,
    email,
    maritalStatus,
    emergencyContact
];

const  gridColumns = columnDefinitions.map(colDef => withCellErrors(colDef));

export default gridColumns;
