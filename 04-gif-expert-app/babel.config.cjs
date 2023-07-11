module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

// ------------ Other options ----------------

// export const presets = [
//   ["@babel/preset-env", { targets: { esmodules: true } }],
//   ["@babel/preset-react", { runtime: "automatic" }],
// ];

// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         targets: {
//           esmodules: true,
//           node: 'current',
//         },
//       },
//     ],
//     [
//       '@babel/preset-react',
//       {
//        runtime: 'automatic'
//       },
//     ],
//   ],
// };
