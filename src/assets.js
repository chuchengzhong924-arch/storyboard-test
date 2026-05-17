export function assetUrl(fileName) {
  const isViteBuild = Boolean(import.meta.env?.BASE_URL);
  const baseUrl = isViteBuild ? import.meta.env.BASE_URL : './public/';
  return `${baseUrl}${fileName}`;
}

export function backgroundImage(fileName) {
  return { '--bg-image': `url("${assetUrl(fileName)}")` };
}
