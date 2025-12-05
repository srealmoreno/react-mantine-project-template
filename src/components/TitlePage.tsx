import { TitlePageProps } from '@interfaces/TitlePage'
import { Title, Text } from '@mantine/core'

export function TitlePage ({ title, subtitle }: TitlePageProps): JSX.Element {
  return (
    <>
      <Title>{title}</Title>
      {(subtitle != null) && <Text mb='1rem' color='dimmed'>{subtitle}</Text>}
    </>
  )
}
