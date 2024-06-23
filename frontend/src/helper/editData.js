import {fetchData} from "@/helper/fetch";
import Swal from "sweetalert2";

export const handleEditData = async (handleClickOpen, endpoint, data, handleRefreshTable, name, ) => {
  data.user_id = window.localStorage.getItem('id')

  try {
    const resp = await fetchData(endpoint, data, "PATCH");
    await handleClickOpen();

    if (resp.status === 200) {
      await handleRefreshTable();
      await Swal.fire('Exit', name + " edit with exit.", 'success');
    }else{
      await Swal.fire('Error', "Server Error", 'error');
    }
  } catch (error) {
    console.error(error);
  }
}
