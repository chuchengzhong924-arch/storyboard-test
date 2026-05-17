const baseUrl = import.meta.env.BASE_URL || '/';

export function assetUrl(path) {
  const cleanPath = path.replace(/^\/+/, '');
  return `${baseUrl}${cleanPath}`;
}

export function assetBackground(path) {
  return `url("${assetUrl(path)}")`;
}
