module.exports = {
  roots: ['<rootDir>/__test__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // testRegex: '(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  // collectCoverage: true,
//   collectCoverageFrom: [
//     "src/**/*.ts"
//   ]
};
