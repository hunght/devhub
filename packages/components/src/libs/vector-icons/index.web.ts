import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Octicons from 'react-native-vector-icons/dist/Octicons'
import FontAwesomeFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf'
import MaterialIconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf'
import OcticonsFont from 'react-native-vector-icons/Fonts/Octicons.ttf'

export * from './index.shared'

export { Octicons, MaterialIcons, FontAwesome }

const iconStyles = [
  `@font-face { src:url(${MaterialIconFont});font-family: MaterialIcons; }`,
  `@font-face { src:url(${OcticonsFont});font-family: Octicons; }`,
  `@font-face { src:url(${FontAwesomeFont});font-family: FontAwesome; }`,
].join('\n')

const style = document.createElement('style')
style.type = 'text/css'

if ((style as any).styleSheet) {
  ;(style as any).styleSheet.cssText = iconStyles
} else {
  style.appendChild(document.createTextNode(iconStyles))
}

if (document.head) document.head.appendChild(style)
