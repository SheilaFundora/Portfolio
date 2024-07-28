import axios from "axios";

export const getData = async (endpoint, setData) => {
  const username = window.localStorage.getItem('username')

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint +  '/user/' + username  + '/'
    )
    await setData(response.data)
  } catch (error) {
    console.log(error)
  }
}

export const getDataPortfolio = async (endpoint, setData, user = 'admin') => {
  const username = process.env.NEXT_PUBLIC_USERNAME

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint +  '/user/' + username  + '/'
    )

    await setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
