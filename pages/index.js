import Head from 'next/head'
import Button from 'components/Button'
import ButtonLibrary from 'components/ButtonLibrary'
import { useState } from 'react'

export default function Home () {
  const [color, setColor] = useState('primary')
  const [variant, setVariant] = useState('default')
  const [size, setSize] = useState('md')
  const [disabled, setDisabled] = useState(false)
  console.log(disabled)

  const handleChangeColor = (e) => {
    setColor(e.target.value)
  }

  const handleChangeVariant = (e) => {
    setVariant(e.target.value)
  }

  const handleChangeSize = (e) => {
    setSize(e.target.value)
  }

  const handleChangeDisabled = (e) => {
    const value = e.target.value === ''
    setDisabled(value)
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Button Components</title>
      </Head>
      <main>
        <ButtonLibrary />
        <section className="preview">
          <h1>Aquí puedes personalizar tu botón como desees</h1>
          <p>Color: </p>
          <div>
            <label htmlFor="Default">
              <input
                type="radio"
                id="Default"
                name="color"
                value="default"
                onChange={handleChangeColor}
              />
              Default
            </label>
            <label htmlFor="Primary">
              <input
                type="radio"
                id="Primary"
                name="color"
                value="primary"
                defaultChecked={true}
                onChange={handleChangeColor}
              />
              Primary
            </label>
            <label htmlFor="Secondary">
              <input
                type="radio"
                id="Secondary"
                name="color"
                value="secondary"
                onChange={handleChangeColor}
              />
              Secondary
            </label>
            <label htmlFor="Danger">
              <input
                type="radio"
                id="Danger"
                name="color"
                value="danger"
                onChange={handleChangeColor}
              />
              Danger
            </label>
          </div>
          <p>Variante: </p>
          <div>
            <label htmlFor="variantDefault">
              <input
                type="radio"
                id="variantDefault"
                name="variant"
                value="default"
                defaultChecked={true}
                onChange={handleChangeVariant}
              />
              Default
            </label>
            <label htmlFor="Outline">
              <input
                type="radio"
                id="Outline"
                name="variant"
                value="outline"
                onChange={handleChangeVariant}
              />
              Outline
            </label>
            <label htmlFor="Text">
              <input
                type="radio"
                id="Text"
                name="variant"
                value="text"
                onChange={handleChangeVariant}
              />
              Text
            </label>
          </div>
          <p>Tamaño: </p>
          <div>
            <label htmlFor="Small">
              <input
                type="radio"
                id="Small"
                name="size"
                value="sm"
                onChange={handleChangeSize}
              />
              Pequeño
            </label>
            <label htmlFor="Medium">
              <input
                type="radio"
                id="Medium"
                name="size"
                value="md"
                defaultChecked={true}
                onChange={handleChangeSize}
              />
              Mediano
            </label>
            <label htmlFor="Large">
              <input
                type="radio"
                id="Large"
                name="size"
                value="lg"
                onChange={handleChangeSize}
              />
              Grande
            </label>
          </div>
          <p>Deshabilitado: </p>
          <div>
            <label htmlFor="NotDisabled">
              <input
                id="NotDisabled"
                type="radio"
                name="state"
                value=""
                onChange={handleChangeDisabled}
              />
              Si
            </label>
            <label htmlFor="Disabled">
              <input
                type="radio"
                id="Disabled"
                name="state"
                value="true"
                defaultChecked={true}
                onChange={handleChangeDisabled}
              />
              No
            </label>
          </div>
          <p>Icono</p>
          <div>
            <input
              type="text"
              placeholder="Nombre del ícono"
              defaultValue="local_grocery_store"
            />
          </div>

          <p>Ubicación del ícono: </p>
          <div>
            <label htmlFor="Left">
              <input
                type="radio"
                id="Left"
                name="position"
                value="positionLeft"
                defaultChecked={true}
              />
              Izquierda
            </label>
            <label htmlFor="Right">
              <input
                type="radio"
                id="Right"
                name="position"
                value="positionRight"
              />
              Derecha
            </label>
          </div>
          <p> Resultado: </p>
          <div>
            <Button
              color={color}
              variant={variant}
              size={size}
              disabled={disabled}
            />
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        h1 {
          margin-bottom: 0;
        }

        p {
          font-size: 18px;
        }

        label {
          font-size: 18px;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .preview {
          display: flex;
          flex-direction: column;
          alig-items: center;
          background-color: #ffd;
          width: 50vw;
          height: 100%;
          padding-bottom: 2em;
        }
      `}</style>
    </>
  )
}
