import axios from "axios";

export const getData = async (endpoint, setData) => {
  const username = window.localStorage.getItem('username')

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint + '/user/' + username + '/'
    )
    console.log(response)
    await setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
