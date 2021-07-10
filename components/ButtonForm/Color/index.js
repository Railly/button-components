export default function Color ({ onChange }) {
  return (
    <>
      <p>Color: </p>
      <div>
        <label htmlFor="Default">
          <input
            type="radio"
            id="Default"
            name="color"
            value="default"
            onChange={onChange}
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
            onChange={onChange}
          />
          Primary
        </label>
        <label htmlFor="Secondary">
          <input
            type="radio"
            id="Secondary"
            name="color"
            value="secondary"
            onChange={onChange}
          />
          Secondary
        </label>
        <label htmlFor="Danger">
          <input
            type="radio"
            id="Danger"
            name="color"
            value="danger"
            onChange={onChange}
          />
          Danger
        </label>
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  )
}
