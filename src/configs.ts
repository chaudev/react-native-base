import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

// Live:
// Dev:

const appConfigs = {
  hostURL: 'https://ischau.org',
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
    Bold: 'SFProDisplay-Bold',
    Medium: 'SFProDisplay-Medium',
    Semibold: 'SFProDisplay-Semibold',
    Regular: 'SFProDisplay-Regular',
  },
}

const fonts = appConfigs.fonts
const sizes = appConfigs.sizes
const colors = appConfigs.colors

export {fonts, sizes, colors}
export default appConfigs
