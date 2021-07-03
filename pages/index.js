import Head from 'next/head'
import Button from 'componnents/Button'

export default function Home () {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Button Components</title>
      </Head>
      <main>
        <section className="library">
          <h1>Library of buttons</h1>
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

          <p>{'<Button variant="text" color="danger" />'}</p>
          <Button variant="text" color="danger" />
        </section>
        <section className="preview">
          <Button />
        </section>
      </main>
      <style jsx>{`
        h1 {
          margin: 0;
        }

        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .library {
          width: 40vw;
          height: 100%;
        }

        .preview {
          background-color: #a12;
          width: 60vw;
          height: 100%;
        }
      `}</style>
    </>
  )
}

// <span className="material-icons">local_grocery_store</span>
