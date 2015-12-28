var path = require('path');

module.exports = {
  extensions : ['', '.js', '.jsx'],
  alias: {
    actions: path.resolve(__dirname, 'src', 'actions'),
    assets: path.resolve(__dirname, 'src', 'assets'),
    components: path.resolve(__dirname, 'src', 'components'),
    constants: path.resolve(__dirname, 'src', 'constants'),
    containers: path.resolve(__dirname, 'src', 'containers'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    store: path.resolve(__dirname, 'src', 'store'),
    styles: path.resolve(__dirname, 'src', 'styles'),
    reducers: path.resolve(__dirname, 'src', 'reducers'),
    shared: path.resolve(__dirname, 'src', 'shared'),
    utils: path.resolve(__dirname, 'src', 'utils'),
    config: path.resolve(__dirname, 'src', 'config.js')
  }
}
