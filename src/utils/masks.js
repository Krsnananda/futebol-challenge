export const dateMask = (value) => {
  let v = value.replace(/\D/g, '').slice(0, 10);
  if (v.length >= 5) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  }
  else if (v.length >= 3) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v
}

export const cpfMask = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}