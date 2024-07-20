import {fetchData, fetchDataToken} from "@/helper/fetch";
import Swal from "sweetalert2";

export const handleEditData = async (handleClickOpen, endpoint, data, handleRefreshTable, name, setErrorMessage ) => {
  data.user_id = window.localStorage.getItem('id')

  try {
    const resp = await fetchDataToken(endpoint, data, "PATCH");

    console.log(resp)


    if (resp.status === 409) {
      await setErrorMessage("That " + name + " already exist");
    }else{
      await handleClickOpen();

      if (resp.status === 200) {
        await handleRefreshTable();
        await Swal.fire('Success', name + " edit with exit.", 'success');
      }else{
        await Swal.fire('Error', "Server Error", 'error');
      }
    }

  } catch (error) {
    console.error(error);
  }
}
