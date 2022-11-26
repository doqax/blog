const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function format(dateString, full = false) {
  const date = new Date(dateString);
  const month = MONTHS[date.getMonth()];
  if (full) return `${date.getDate()} ${month} ${date.getFullYear()}`;
  return `${month} ${date.getDate()}`;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isCurrentPathName(pathname, currentPathname) {
  const pathnames = currentPathname.split("/").filter((path) => path !== "");
  const isHome = pathnames.length == 0 && pathname == "";
  return isHome || pathnames.includes(pathname);
}
