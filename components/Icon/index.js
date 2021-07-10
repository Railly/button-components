export default function Icon ({ onChangeIconName, onChangeIconPosition }) {
  return (
    <>
      <p>
        Icono <br />
        <span>Consulta el nombre de los íconos aqui:{'   >>>  '}</span>
        <a href="https://fonts.google.com/icons">
          https://fonts.google.com/icons
        </a>
      </p>
      <div>
        <input
          type="text"
          placeholder="Nombre del ícono"
          defaultValue="local_grocery_store"
          onChange={onChangeIconName}
          className="iconName"
        />
      </div>

      <p>Ubicación del ícono: </p>
      <div>
        <label htmlFor="Left">
          <input
            type="radio"
            id="Left"
            name="position"
            value="left"
            defaultChecked={true}
            onChange={onChangeIconPosition}
          />
          Izquierda
        </label>
        <label htmlFor="Right">
          <input
            type="radio"
            id="Right"
            name="position"
            value="right"
            onChange={onChangeIconPosition}
          />
          Derecha
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
        span {
          font-weight: 400;
          color: black;
        }

        input {
          border: 0; // remove default border
          border-bottom: 1px solid #eee; // add only bottom border
        }

        input[type='text'] {
          padding: 10px;
          border: 0;
          box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
          padding: 10px;
          border-radius: 10px;
        }

        .iconName:focus {
          outline: 2px solid orange;
        }
      `}</style>
    </>
  )
}
