import { useRouter } from "next/router";

export default function () {
  const CLIENT_ID = process.env.CLIENT_ID;
  const SUAP_URL = process.env.SUAP_URL;
  const SCOPE = process.env.SCOPE;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const router = useRouter();

  async function handleClick () {
    const accessTokenOfSUAP = router.asPath.match(/access_token=(\w+)/)
    if(!accessTokenOfSUAP || !accessTokenOfSUAP[1]) return
    const accessTokeOfSUAPValue = accessTokenOfSUAP[1]

    const requestParam = {
      scope: SCOPE
    }
    const queryString = new URLSearchParams(requestParam).toString();

    const response = await fetch(`${SUAP_URL}/api/eu/?${queryString}`,{
      headers: {
        "Authorization": "Bearer " + accessTokeOfSUAPValue
      }
    })
  }

  return(
    <>
      <button className='bg-blue-500 py-1 px-4 rounded text-lg' onClick={handleClick}>
        Busar infos
      </button>
    </>
  )
}