import { ColorScheme } from '@mantine/core'

type command = 'mod' | 'ctrl' | 'alt' | 'shift' | 'meta'
type key = string
export interface ColorSchemeProps {
  shortCutKey?:
  | `${command}+${key}`
  | `${command}+${command}+${key}`
  | `${command}+${command}+${command}+${key}`
  | `${command}+${command}+${command}+${command}+${key}`
  | `${command}+${command}+${command}+${command}+${command}+${key}`
}

export interface ColorSchemeReturn {
  colorScheme: ColorScheme
  toggleColorScheme: (value?: ColorScheme) => void
}
