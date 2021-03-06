module.exports = {
 mode: 'development',
 devtool: 'eval',
 cache: true,
 performance: {
   hints: false
 },
 output: {
   pathinfo: true
 },
 optimization: {
   namedModules: true,
   namedChunks: true,
   nodeEnv: 'development',
   flagIncludedChunks: false,
   occurrenceOrder: false,
   sideEffects: false,
   usedExports: false,
   concatenateModules: false,
   splitChunks: {
     hidePathInfo: false,
     minSize: 10000,
     maxAsyncRequests: Infinity,
     maxInitialRequests: Infinity,
   },
   noEmitOnErrors: false,
   checkWasmTypes: false,
   minimize: false,
   removeAvailableModules: false
 },
 plugins: [
   new webpack.NamedModulesPlugin(),
   new webpack.NamedChunksPlugin(),
   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
 ]
}
