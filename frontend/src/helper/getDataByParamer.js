import axios from "axios";

export const getDataByParamer = async (endpoint, setData) => {

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint
    )
    console.log(response)
    await setData(response.data[0])
  } catch (error) {
    console.log(error)
  }
}

export const getProjectById = async (endpoint, setData) => {

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint
    )
    console.log(response)
    await setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
