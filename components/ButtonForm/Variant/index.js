export default function Variant ({ onChange }) {
  return (
    <>
      <p>Variante: </p>
      <div>
        <label htmlFor="variantDefault">
          <input
            type="radio"
            id="variantDefault"
            name="variant"
            value="default"
            defaultChecked={true}
            onChange={onChange}
          />
          Default
        </label>
        <label htmlFor="Outline">
          <input
            type="radio"
            id="Outline"
            name="variant"
            value="outline"
            onChange={onChange}
          />
          Outline
        </label>
        <label htmlFor="Text">
          <input
            type="radio"
            id="Text"
            name="variant"
            value="text"
            onChange={onChange}
          />
          Text
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
