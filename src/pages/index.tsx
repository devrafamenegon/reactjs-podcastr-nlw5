export default function Home(props) {
  //chamada API no formato SPA (ñ é indexável à google pois "demora" um pouco para carregar)
    // useEffect(() => {
    //   fetch('http://localhost:3333/episodes')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }, [])

  return (
      <div>
          <h1>Index</h1>

          <p>{JSON.stringify(props.episodes)}</p>
      </div>
  )
}
//chamada API em SSR(Server side rendering) => basta ir em qualquer arquivo da pasta pages e fazer o seguinte:
//executa a função toda vez que a pagina é carregada por alguem
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

//chamada API em SSG(Static site generator) => faz o mesmo que o SSR porém mudando o nome da função e 
//passando no return a opção de revalidate com os segundos para acontecer o recarregamento da api
//então com este metodo quando uma pessoa acessar a home, é gerado um html estático que será mostrado para
//as proximas pessoa que acessarem o site, e mudará apenas quando a api carregar novamente, assim repetindo o processo
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
      props: {
          episodes: data,
      },
      revalidate: 60 * 60 * 8,
  }
}