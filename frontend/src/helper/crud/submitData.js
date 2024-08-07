import {fetchData, fetchDataToken} from "@/helper/fetch";
import Swal from "sweetalert2";

export const handleSubmitData = async (handleClickOpen, endpoint, data, handleRefreshTable, name, setErrorMessage ) => {

  if (name === 'project'){
    data.user_id = { id: window.localStorage.getItem('id')}

  }else{
    data.user_id = window.localStorage.getItem('id')
  }

  try{
    const resp = await fetchDataToken(endpoint, data, "POST");

    console.log(JSON.stringify( data ))
    console.log(resp)

    if (resp.status === 409) {
     await setErrorMessage("That " + name + " already exist");
    }else{
      await handleClickOpen();
      if (resp.status === 201) {
        await handleRefreshTable();
        await Swal.fire('Success', name  + " created with exit.", 'success');
      }else{
        await Swal.fire('Error', "Server Error", 'error');
      }
    }
  }catch (e) {
    console.log(e);
  }
}
