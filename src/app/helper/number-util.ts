export function formatNumber(amount) {
  if (isNaN(amount)) {
    return '';
  }
  // this puts commas into the number eg 1000 goes to 1,000,
  // i pulled this from stack overflow, i have no idea how it works
  return (Math.round(amount * 100) / 100)
  .toFixed(2)
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
