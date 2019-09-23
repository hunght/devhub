import React from 'react'
import { StyleProp } from 'react-native'

import { Theme, ThemeColors, ThemeTransformer } from '@devhub/core'
import { FontAwesome, OcticonIconProps } from '../../libs/vector-icons'
import { useTheme } from '../context/ThemeContext'
import { getThemeColorOrItself } from './helpers'

export interface ThemedIconProps
  extends Omit<OcticonIconProps, 'color' | 'style'> {
  color?: keyof ThemeColors | ((theme: Theme) => string)
  style?: StyleProp<Omit<OcticonIconProps['style'], 'color'>>
  themeTransformer?: ThemeTransformer
}

export const ThemedIcon = React.memo(
  React.forwardRef<FontAwesome, ThemedIconProps>((props, ref) => {
    const { color: _color, themeTransformer, ...otherProps } = props

    const theme = useTheme({ themeTransformer })

    const color = getThemeColorOrItself(theme, _color, {
      enableCSSVariable: true,
    })

    return <FontAwesome ref={ref} {...otherProps} color={color} />
  }),
)

ThemedIcon.displayName = 'ThemedIcon'

export type ThemedIcon = FontAwesome
