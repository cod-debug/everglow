export function formatNumber(number){
    const nFormat = new Intl.NumberFormat(undefined, {maximumFractionDigits: 0});
    return nFormat.format(number);
}