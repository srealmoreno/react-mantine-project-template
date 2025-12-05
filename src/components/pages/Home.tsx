import { useCounter } from '@hooks/useCounter'
import { Button, Group, Stack, Text, Title } from '@mantine/core'
import { IconPlus, IconMinus, IconForbid2 } from '@tabler/icons-react'

export function Home (): JSX.Element {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <>
      <Stack spacing={10} align='center' mb={20}>
        <Title order={2}>Counter</Title>
        <Title order={3}>{count}</Title>
      </Stack>

      <Group noWrap spacing={10} mt={3} position='center'>
        <Button leftIcon={<IconPlus />} onClick={increment}>Increment</Button>
        <Button leftIcon={<IconMinus />} onClick={decrement}>Decrement</Button>
        <Button leftIcon={<IconForbid2 />} onClick={reset} color='red'>Reset</Button>
      </Group>
    </>
  )
}
