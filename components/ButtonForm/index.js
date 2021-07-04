import Icon from 'components/Icon'
import Color from './Color'
import Disabled from './Disabled'
import DisabledShadow from './DisabledShadow'
import Size from './Size'
import Variant from './Variant'

export default function ButtonForm ({
  setColor,
  setVariant,
  setSize,
  setDisabled,
  setIconName,
  setIconPosition,
  setDisabledShadow
}) {
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

  const handleIconName = (e) => {
    setIconName(e.target.value)
  }

  const handleIconPosition = (e) => {
    setIconPosition(e.target.value)
  }

  const handleDisabledShadow = (e) => {
    const value = e.target.value === ''
    setDisabledShadow(value)
  }
  return (
    <>
      <section className="form">
        <h1>Edita tu botón</h1>
        <Color onChange={handleChangeColor} />
        <Variant onChange={handleChangeVariant} />
        <Size onChange={handleChangeSize} />
        <Disabled onChange={handleChangeDisabled} />
        <DisabledShadow onChange={handleDisabledShadow} />
        <Icon
          onChangeIconName={handleIconName}
          onChangeIconPosition={handleIconPosition}
        />
      </section>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
          alig-items: center;
          width: 35vw;
          padding: 0 2em;
          padding-bottom: 2em;
          height: 100vh;
          overflow-y: scroll;
        }

        h1 {
          margin-bottom: 0;
        }

        p {
          font-size: 18px;
          color: #e55768;
        }

        label {
          font-size: 18px;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </>
  )
}
