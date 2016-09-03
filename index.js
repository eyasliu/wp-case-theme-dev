import 'babel-polyfill';
import {render} from 'react-dom';
import 'common/style';
import './utils/globals';
import beforeRender from './utils/beforeRender';
import APP from 'fw';

if(process.env.NODE_ENV == 'development'){
	__webpack_public_path__ = 'http://127.0.0.1:3000/assets/'
} else {
	__webpack_public_path__ = serverConfig.assetPath
}

beforeRender()
.then(() => {
	render(APP, document.getElementById('root'))
})