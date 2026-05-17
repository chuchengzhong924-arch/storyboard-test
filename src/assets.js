export function assetUrl(fileName) {
  return `${import.meta.env.BASE_URL}${fileName}`;
}

export function backgroundImage(fileName) {
  return { '--bg-image': `url("${assetUrl(fileName)}")` };
}
