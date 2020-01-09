// node ./src/util/dataGen.js > ./src/util/data.js

console.log("const gridRowData = [{");

const numRows = 300;

for (let i = 0; i <= numRows; i++) {
    console.log(`\tassociate: { name: 'Associate ${i}' },`);
    console.log(`\tphoneNumber: { countryCode: '001', number: '555-1234' },`);
    console.log(`\temail: { email: 'associate${i}@test.com' },`);
    console.log(`\tmaritalStatus: { maritalStatus: 'married' },`);
    console.log(`\temergencyContact: { name: 'Contact ${i}'}`);
    if (i < numRows) {
        console.log('}, {');
    }
}

console.log('}];');
console.log('');
console.log('export default gridRowData;');
