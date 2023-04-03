import { TitlePageProps } from '@interfaces/TitlePage'

export function TitlePage ({ title, subtitle }: TitlePageProps): JSX.Element {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {subtitle != null && <h2>{subtitle}</h2>}
      </header>
    </>
  )
}
