export default function () {

  const CLIENT_ID = process.env.CLIENT_ID;
  const SUAP_URL = process.env.SUAP_URL;
  const SCOPE = process.env.SCOPE;

  const loginURL = SUAP_URL + '/o/authorize/' + "?response_type=" + 'token' + "&grant_type=" + 'implict' + "&client_id=" + CLIENT_ID + "&scope=" + SCOPE;

  function handleClick () {
    console.log(loginURL)
  }

  return(
    <>
      <a href={loginURL}>
        <button className='bg-blue-500 py-1 px-4 rounded text-lg' onClick={handleClick}>
          Entrar com o SUAP
        </button>
      </a>
    </>
  )
}