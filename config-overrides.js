const { override } = require('customize-cra');
const addLessLoader = require("customize-cra-less-loader");


module.exports = override(
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                ocalIndentName: '[local]-[hass:base64:5]'
            }
        }
    })
)