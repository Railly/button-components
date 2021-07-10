export default function IconName ({ onChange }) {
  return (
    <>
      <p>Deshabilitado: </p>
      <div>
        <label htmlFor="NotDisabled">
          <input
            id="NotDisabled"
            type="radio"
            name="state"
            value=""
            onChange={onChange}
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
