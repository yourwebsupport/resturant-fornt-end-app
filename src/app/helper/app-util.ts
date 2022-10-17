const a =  document.createElement('a');

export function getAbsoluteUrl(url) {
  a.href = url;
  return a.href;
}
