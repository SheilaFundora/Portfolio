export function convertViewUrl(previewUrl) {
  // Extraer el ID del archivo de la URL de vista previa
  const fileIdMatch = previewUrl.match(/\/file\/d\/(.*?)\//);
  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    // Construir la URL directa usando el ID del archivo
    const directLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
    return directLink;
  }
  // Si no se puede extraer el ID, devolver la URL original
  return previewUrl;
}
