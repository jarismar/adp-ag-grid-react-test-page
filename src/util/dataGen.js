// node ./src/util/dataGen.js > ./src/util/data.js

console.log("const gridRowData = [{");

const numRows = 300;

for (let i = 0; i <= numRows; i++) {
    console.log(`\tassociateID: { text: 'A${i}' },`);
    console.log(`\tassociate: { name: 'Associate ${i}' },`);
    console.log(`\tphoneNumber: { countryCode: '001', number: '555-1234' },`);
    console.log(`\temail: { email: 'associate${i}@test.com' },`);
    console.log(`\tmaritalStatus: { maritalStatus: 'married' },`);
    console.log(`\tnickName: { text: 'nick_name_${i}' },`);
    console.log(`\temergencyContact: { name: 'Contact ${i}'},`);
    console.log(`\tbloodType: { text: 'A+' },`);
    console.log(`\tdob: { date: '2020-01-10' },`);
    console.log(`\tgender: { text: '${ i % 2 ? 'male' : 'female' }' },`);
    console.log(`\thireDate: { date: '2019-01-01' },`);
    console.log(`\theight: { text: '5.9 ft' },`);
    console.log(`\tcountry: { text: 'US' },`);
    console.log(`\tcity: { text: 'New York' },`);
    console.log(`\tstreetAddress: { text: 'St unamed, ${i}' },`);
    console.log(`\tcomments: { text: 'loren ipsun dolor set ${i}' },`);

    if (i < numRows) {
        console.log('}, {');
    }
}

console.log('}];');
console.log('');
console.log('export default gridRowData;');
