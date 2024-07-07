export const formatDate = (dateString = null) => {
  if ( dateString === null|| dateString === ''){
    return ''
  }else {
    return dateString.split('T')[0];
  }
};

export const extractMonthYear = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  const year = date.getFullYear();
  return `${month < 10 ? '0' : ''}${month}/${year}`; // Añadir un cero delante si el mes es menor que 10
};
