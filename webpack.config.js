const path = require("path")
const MiniCssExtractPlugin =require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")


module.exports={
    mode:"production",
    devtool:"source-map",
    entry:"./js/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
    },
    plugins:[new MiniCssExtractPlugin()],
    optimization:{
        minimizer:[     new CssMinimizerWebpackPlugin({
            minimizerOptions: {
              preset: [
                "default",
                {
                  // Disable merging longhand properties (e.g., margin: 1px 2px 3px 4px -> margin: 1px 2px)
                  mergeLonghand: true,
                  // Disable unused CSS removal
                  discardUnused: true,
                  // Don't remove white space completely, allow some whitespace to remain for readability
                  normalizeWhitespace: true,
                  // Retain CSS comments for debugging purposes (optional)
                  discardComments: { removeAll: true },
                },
              ],
            },
          }),, new TerserPlugin(), new ImageMinimizerPlugin({
            minimizer:{
                implementation: ImageMinimizerPlugin.imageminMinify,
                options:{
                    plugins:[
                        ["imagemin-pngquant", {quality:[0.3,0.5]}]
                    ]
                }
            }
        })]
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                test:/\.png$/i,
                type:"asset",
            }
        ]
    }
}