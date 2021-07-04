export default function Disabled ({ onChange }) {
  return (
    <>
      <p>Deshabilitar botón?: </p>
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
