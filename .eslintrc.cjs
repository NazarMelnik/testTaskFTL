module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
// describe('objCreator function', () => {
//   it('should return the expected object', () => {
//     const data = [
//       { status: 'In Progress', dueDate: 'new Date("2023-11-15")', assignee: 'UserA' },
//       { status: 'Done', dueDate: 'new Date("2023-10-20")', assignee: 'UserB' },
//       { status: 'In Progress', dueDate: 'new Date("2023-10-30")', assignee: 'UserA' },
//     ];

//     const expectedObject = {
//       taskStatus: { 'In Progress': 2, Done: 1 },
//       assigneeStats: { UserA: 2, UserB: 1 },
//       dueDateStats: { '2Weeks': 2, '1Weeks': 1 },
//     };

//     const result = objCreator(data);

//     expect(result).toEqual(expectedObject);
//   });

//   it('should return an empty object for empty input data', () => {
//     const data = [];
//     const result = objCreator(data);

//     expect(result).toEqual({ taskStatus: {}, assigneeStats: {}, dueDateStats: {} });
//   });

//   it('should handle missing properties gracefully', () => {
//     const data = [
//       { status: 'In Progress', assignee: 'UserA' },
//       { dueDate: 'new Date("2023-10-20")', assignee: 'UserB' },
//     ];

//     const expectedObject = {
//       taskStatus: { 'In Progress': 1 },
//       assigneeStats: { UserA: 1, UserB: 1 },
//       dueDateStats: { '2Weeks': 1 },
//     };

//     const result = objCreator(data);

//     expect(result).toEqual(expectedObject);
//   });
// });
