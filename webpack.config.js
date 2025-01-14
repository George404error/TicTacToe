const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js'
    },
   
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            
        ],
       
        
    }
    
    
    
};