export default function DisabledShadow ({ onChange }) {
  return (
    <>
      <p>Deshabilitar sombra?: </p>
      <div>
        <label htmlFor="NotDisabledShadow">
          <input
            id="NotDisabledShadow"
            type="radio"
            name="state"
            value=""
            onChange={onChange}
          />
          Si
        </label>
        <label htmlFor="DisabledShadow">
          <input
            type="radio"
            id="DisabledShadow"
            name="state"
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
