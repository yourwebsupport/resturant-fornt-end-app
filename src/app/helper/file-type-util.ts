const video = 'avi,flv,m2v,m4u,m4v,mj2,mjp2,mov,mp4,mp4v,mpa,mpe,mpeg,mpg,mpg4,wmv'.split(',');
const audio = 'aac,m2a,m3a,m3u,mid,midi,mp2,mp2a,mp3,mp4a,mpga,oga,ogg,wav,wma'.split(',');
const image = 'bmp,btif,gif,ico,jpe,jpeg,jpg,png,svg,svgz,tif,tiff,wbmp,xbm'.split(',');

function ext2Type(ext: string) {
  if (ext === 'pdf') {
    return 'pdf';
  }
  if (image.includes(ext)) {
    return 'image';
  }
  if (audio.includes(ext)) {
    return 'audio';
  }
  if (video.includes(ext)) {
    return 'video';
  }

  return 'document';
}

function getExtension(name) {
  const parts = name.split('.');
  return parts[parts.length - 1].toLowerCase();
}

export const getFileType = (name) => {
  const ext = getExtension(name);
  return ext2Type(ext);
};

export const getMimeType = (name) => {
  const ext = getExtension(name);

  if (ext === 'pdf') {
    return 'application/pdf';
  }

  return ext2Type(ext) + '/*';
};
