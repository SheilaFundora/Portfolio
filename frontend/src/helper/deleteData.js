import axios from "axios";
import Swal from "sweetalert2";

export const handleDelete = async (handleOpenDelete, end, handleRefreshTable, name ) => {

  try{
    const resp = await axios.delete(process.env.NEXT_PUBLIC_API_HOST + end)
    await handleOpenDelete();

    if (resp.status === 200) {
      await handleRefreshTable();
      await Swal.fire('Success', name + "deleted with exit.", 'success');

    }else{
      await Swal.fire('Error', "Server Error", 'error');
    }
  } catch (error) {
    console.log(error);
  }
}
