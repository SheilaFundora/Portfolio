import axios from "axios";

export const getDataByParamer = async (endpoint, setData) => {

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + endpoint
    )
    await setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
