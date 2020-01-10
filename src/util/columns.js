import withCellErrors from '../cellRenderers/withCellErrors';
import withCellComments from '../cellRenderers/withCellComments';
import Avatar from '../cellRenderers/Avatar';
import PhoneNumber from '../cellRenderers/PhoneNumber';
import Email from '../cellRenderers/Email';
import MaritalStatus from '../cellRenderers/MaritalStatus';
import Date from '../cellRenderers/Date';
import Text from '../cellRenderers/Text';

const defaultColDef = {
    width: 180
};

const associateID = Object.assign({}, defaultColDef, {
    headerName: 'ID',
    field: 'associateID',
    cellRendererFramework: Text,
    width: 60
});

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

const nickName = Object.assign({}, defaultColDef, {
    headerName: 'NickName',
    field: 'nickName',
    cellRendererFramework: Text
});

const emergencyContact = Object.assign({}, defaultColDef, {
    headerName: 'Emergency Contact',
    field: 'emergencyContact',
    cellRendererFramework: Avatar
});

const bloodType = Object.assign({}, defaultColDef, {
    headerName: 'Blood',
    field: 'bloodType',
    width: 100,
    cellRendererFramework: Text
});

const dateOfBirth = Object.assign({}, defaultColDef, {
    headerName: 'Date of Birth',
    field: 'dob',
    cellRendererFramework: Date
});

const gender = Object.assign({}, defaultColDef, {
    headerName: 'Gender',
    field: 'gender',
    cellRendererFramework: Text
});

const hireDate = Object.assign({}, defaultColDef, {
    headerName: 'Hire Date',
    field: 'hireDate',
    cellRendererFramework: Date
});

const height = Object.assign({}, defaultColDef, {
    headerName: 'Height',
    field: 'height',
    cellRendererFramework: Text
});

const country = Object.assign({}, defaultColDef, {
    headerName: 'Country',
    field: 'country',
    cellRendererFramework: Text
});

const city = Object.assign({}, defaultColDef, {
    headerName: 'City',
    field: 'city',
    cellRendererFramework: Text
});

const comments = Object.assign({}, defaultColDef, {
    headerName: 'Comments',
    field: 'comments',
    cellRendererFramework: Text
});

const columnDefinitions = [
    associateID,
    associate,
    phone,
    email,
    maritalStatus,
    nickName,
    emergencyContact,
    bloodType,
    dateOfBirth,
    gender,
    hireDate,
    height,
    country,
    city,
    comments
];

const  gridColumns = columnDefinitions.map(
    colDef => withCellComments(
        withCellErrors(
            colDef
        )
    )
);

export default gridColumns;
