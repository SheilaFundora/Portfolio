import axios from "axios";
import {user_end} from "@/constants/endpoints";

export const getDataPerson = async (setPersonData) => {
  const username = window.localStorage.getItem('username')

  try {
    await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + user_end + '/' + username + '/'
    )
      .then(response => {
        setPersonData([response.data])
      })
  } catch (error) {
    console.log(error)
  }
}
