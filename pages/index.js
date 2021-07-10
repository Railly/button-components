import Head from 'next/head'
import ButtonLibrary from 'components/ButtonLibrary'
import { useState } from 'react'
import ButtonForm from 'components/ButtonForm'
import ButtonPreview from 'components/ButtonPreview'

export default function Home () {
  const [color, setColor] = useState('primary')
  const [variant, setVariant] = useState('default')
  const [size, setSize] = useState('md')
  const [disabled, setDisabled] = useState(false)
  const [iconName, setIconName] = useState('local_grocery_store')
  const [iconPosition, setIconPosition] = useState('left')
  const [disabledShadow, setDisabledShadow] = useState(false)

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Button Components</title>
      </Head>
      <main>
        <ButtonLibrary />
        <ButtonForm
          setColor={setColor}
          setVariant={setVariant}
          setSize={setSize}
          setDisabled={setDisabled}
          setIconName={setIconName}
          setIconPosition={setIconPosition}
          setDisabledShadow={setDisabledShadow}
        />
        <ButtonPreview
          color={color}
          variant={variant}
          size={size}
          disabled={disabled}
          iconPosition={iconPosition}
          iconName={iconName}
          disabledShadow={disabledShadow}
        />
      </main>

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
    </>
  )
}
