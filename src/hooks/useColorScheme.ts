import { ColorScheme } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { ColorSchemeProps, ColorSchemeReturn } from '@interfaces/ColorScheme'

export function useColorScheme ({ shortCutKey = 'ctrl+shift+j' }: ColorSchemeProps = {}): ColorSchemeReturn {
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const defaultColorScheme = matchMedia.matches ? 'dark' : 'light'

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: defaultColorScheme
  })

  const toggleColorScheme = (value?: ColorScheme): void =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([[shortCutKey, () => toggleColorScheme()]])

  matchMedia.addEventListener('change', (e) => {
    setColorScheme(e.matches ? 'dark' : 'light')
  })

  return { colorScheme, toggleColorScheme }
}
