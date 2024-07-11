export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Untuk format nomor agar memiliki decimal
export function formatNumber(number: number): string {
  // Use toLocaleString for formatting
  return number.toLocaleString("id-ID", {
    style: "decimal",
  });
}
