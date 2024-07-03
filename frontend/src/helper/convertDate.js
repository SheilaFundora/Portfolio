export const formatDate = (dateString = null) => {
  if ( dateString === null|| dateString === ''){
    return ''
  }else {
    return dateString.split('T')[0];
  }
};
