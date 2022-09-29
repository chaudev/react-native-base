import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Live:
// Dev:

const appConfigs = {
  hostURL: 'https://',
  oneSignalID: '',
  colors: {
    primary: '#6CD4E5',
    placeholder: '#7C7C7C',
    boder: 'rgba(84, 84, 88, 0.2)',
    white: '#fff',
    black: '#000',
  },
  sizes: {
    dW: width,
    dH: height,
  },
  fonts: {
    Bold: 'GoogleSans-Bold',
    BoldItalic: 'GoogleSans-BoldItalic',
    Italic: 'GoogleSans-Italic',
    Medium: 'GoogleSans-Medium',
    MediumItalic: 'GoogleSans-MediumItalic',
    Regular: 'GoogleSans-Regular',
  },
};

const fonts = appConfigs.fonts;
const sizes = appConfigs.sizes;
const colors = appConfigs.colors;

export {fonts, sizes, colors};
export default appConfigs;
