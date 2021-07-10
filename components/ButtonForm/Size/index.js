export default function Size ({ onChange }) {
  return (
    <>
      <p>Tamaño: </p>
      <div>
        <label htmlFor="Small">
          <input
            type="radio"
            id="Small"
            name="size"
            value="sm"
            onChange={onChange}
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
            onChange={onChange}
          />
          Mediano
        </label>
        <label htmlFor="Large">
          <input
            type="radio"
            id="Large"
            name="size"
            value="lg"
            onChange={onChange}
          />
          Grande
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
