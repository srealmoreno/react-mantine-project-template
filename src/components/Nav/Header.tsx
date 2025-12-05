import {
  createStyles,
  Header,
  Container,
  Burger,
  Paper,
  Transition,
  rem,
  Group,
  SimpleGrid
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from '@mantine/ds'
import { ButtonTheme } from '@components/Nav/ButtonTheme'
import { Link } from 'wouter'
import { IconHome } from '@tabler/icons-react'
import HeaderLink from './HeaderLink'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    display: 'flex',
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },
  theme: {
    [theme.fn.largerThan('sm')]: {
      width: rem(20)
    }
  }
}))

export function HeaderApp (): JSX.Element {
  const [opened, { toggle, close }] = useDisclosure(false)
  const { classes } = useStyles()

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          <HeaderLink onClick={close} link={{ link: '/', text: 'Home', icon: <IconHome size={20} /> }} />
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
        <Transition transition='slide-down' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles} withBorder>
              <SimpleGrid cols={3} spacing='sm'>
                <HeaderLink onClick={close} link={{ link: '/', text: 'Home', icon: <IconHome size={20} /> }} />
              </SimpleGrid>
            </Paper>
          )}
        </Transition>
        <Link href='/'>
          <MantineLogo size={30} />
        </Link>
        <Group spacing={5} noWrap className={classes.theme}>
          <ButtonTheme />
        </Group>
      </Container>
    </Header>
  )
}
