import calculate from "../calculate";

const objParamAc = [
  {
    identifier: 'AC',
    returnObj: {
      total: null,
      next: null,
      operation: null,
    },
  },
  {
    identifier: '=',
    returnObj: {},
  },
];

for (let i = 0; i < objParamAc.length; i += 1) {
  test('calculate function returns object based on parameter', () => {
    expect(calculate(
      objParamAc[i].identifier, objParamAc[i].identifier
    )).toEqual(objParamAc[i].returnObj);
  });
}
