import { HeaderApp } from '@components/Nav/Header'
import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { App } from './App'
import { name } from '../package.json'
import { HashRouter } from '@components/HashRouter'
import { useColorScheme } from '@hooks/useColorScheme'

export function MantineApp (): JSX.Element {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <ModalsProvider>
          <Notifications />
          <HashRouter base={`/${name}`}>
            <AppShell header={<HeaderApp />}>
              <App />
            </AppShell>
          </HashRouter>
        </ModalsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
