import Button from 'components/Button'

export default function ButtonLibrary () {
  return (
    <>
      <section className="library">
        <h1>Componente de React</h1>
        <h1>Botón</h1>
        <p>Boton para Angelica</p>
        <Button startIcon="favorite_border" color="danger" size="lg" />
        <p>{'<Button />'}</p>
        <Button />

        <p>{'<Button variant="outline" />'}</p>
        <Button variant="outline" />

        <p>{'<Button variant="text" />'}</p>
        <Button variant="text" />

        <p>{'<Button disableShadow />'}</p>
        <Button disableShadow />

        <p>{'<Button disabled />'}</p>
        <Button disabled />

        <p>{'<Button color="default" />'}</p>
        <Button color="default" />

        <p>{'<Button color="primary" /> csp'}</p>
        <Button color="primary" />

        <p>{'<Button color="secondary" />'}</p>
        <Button color="secondary" />

        <p>{'<Button color="danger" />'}</p>
        <Button color="danger" />

        <p>{'<Button variant="outline" color="danger" />'}</p>
        <Button variant="outline" color="danger" />

        <p>{'<Button variant="outline" color="primary" />'}</p>
        <Button variant="outline" color="primary" />

        <p>{'<Button variant="text" color="primary" disabled />'}</p>
        <Button variant="text" color="primary" disabled />

        <p>{'<Button variant="outline" color="primary" disabled />'}</p>
        <Button variant="outline" color="primary" disabled />

        <p>{'<Button color="secondary" />'}</p>
        <Button color="secondary" />

        <p>{'<Button variant="outline" color="secondary" />'}</p>
        <Button variant="outline" color="secondary" />

        <p>{'<Button variant="text" color="secondary" />'}</p>
        <Button variant="text" color="secondary" />

        <p>{'<Button color="danger" size="lg"/>'}</p>
        <Button color="danger" size="lg" />

        <p>{'<Button color="danger" size="md"/>'}</p>
        <Button color="danger" size="md" />

        <p>{'<Button color="danger" size="sm"/>'}</p>
        <Button color="danger" size="sm" />

        <p>{'<Button color="primary" startIcon="local_grocery_store"/>'}</p>
        <Button color="primary" size="sm" startIcon="local_grocery_store" />

        <p>
          {
            '<Button color="secondary" endIcon="local_grocery_store"/> size="lg"'
          }
        </p>
        <Button color="secondary" endIcon="local_grocery_store" size="lg" />

        <p>{'<Button color="danger" startIcon="lock"/>'}</p>
        <Button color="danger" size="sm" startIcon="lock" />
        <p>...</p>
        <p>...</p>
      </section>
      <style>{`
        h1 {
          text-align: center;
        }

        p {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
        }

        .library {
          display: grid;
          place-items: center;
          gap: 1em;
          grid-template-columns: 1fr 1fr;
          width: 50vw;
          height: 100vh;
          padding-bottom: 2em;
          overflow-y: scroll;
        }

        @media (max-width: 730px) {
          .library {
            grid-template-columns: 1fr;
          }
        }
        
      `}</style>
    </>
  )
}
