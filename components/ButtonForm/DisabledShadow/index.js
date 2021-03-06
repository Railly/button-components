export default function DisabledShadow ({ onChange }) {
  return (
    <>
      <p>Deshabilitar sombra?: </p>
      <div>
        <label htmlFor="NotDisabledShadow">
          <input
            id="NotDisabledShadow"
            type="radio"
            name="stateShadow"
            value=""
            onChange={onChange}
          />
          Si
        </label>
        <label htmlFor="DisabledShadow">
          <input
            type="radio"
            id="DisabledShadow"
            name="stateShadow"
            value="true"
            defaultChecked={true}
            onChange={onChange}
          />
          No
        </label>
      </div>

      <style jsx>{`
        p {
          font-size: 18px;
          color: #e55768;
        }

        label {
          font-size: 16px;
          text-align: center;
          padding-right: 0.5em;
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
