import axios from 'axios';
import Swal from 'sweetalert2';

export const handleDelete = async (handleOpenDelete, end, handleRefreshTable, name) => {
  const token = localStorage.getItem('token') || '';

  try {
    const resp = await axios.delete(process.env.NEXT_PUBLIC_API_HOST + end, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    await handleOpenDelete();

    if (resp.status === 200) {
      await handleRefreshTable();
      await Swal.fire('Success', name + " deleted with exit.", 'success');
    } else {
      await Swal.fire('Error', "Server Error", 'error');
    }
  } catch (error) {
    await Swal.fire('Error', "Server Error", 'error');
  }
}
