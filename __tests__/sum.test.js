const {getServiceDescription} = require ('../controllers/UPSAPI')

const testCases = [
    [{Code: "03", Description: ""}, {Code: "03", Description: "UPS Ground"}],
    [{Code: "14", Description: ""}, {Code: "14", Description: "UPS Next Day Air Early"}],
    [{Code: "01", Description: ""}, {Code: "01", Description: "UPS Next Day Air"}],
    [{Code: "13", Description: ""}, {Code: "13", Description: "UPS Next Day Air Saver"}],
    [{Code: "59", Description: ""}, {Code: "59", Description: "UPS 2nd Day Air A.M."}],
    [{Code: "02", Description: ""}, {Code: "02", Description: "UPS 2nd Day Air"}],
    [{Code: "12", Description: ""}, {Code: "12", Description: "UPS 3 Day Select"}]
];

test.each(testCases)('returns the correct service description for the code', (a, expected) => {
  expect(getServiceDescription(a)).toMatchObject(expected);
});