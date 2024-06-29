import {fetchData} from "@/helper/fetch";
import Swal from "sweetalert2";

export const handleSubmitData = async (handleClickOpen, endpoint, data, handleRefreshTable, name, setErrorMessage ) => {
  data.user_id = window.localStorage.getItem('id')

  try{
    const resp = await fetchData(endpoint, data, "POST");

    if (resp.status === 500) {
     await setErrorMessage("The Section already exist");
    }else{
      await handleClickOpen();
      if (resp.status === 201) {
        await handleRefreshTable();
        await Swal.fire('Exit', name  + " created with exit.", 'success');
      }else{
        await Swal.fire('Error', "Server Error", 'error');
      }
    }
  }catch (e) {
    console.log(e);
  }
}
