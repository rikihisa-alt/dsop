export function canAccessDetail(
  isPurchased: boolean,
  isFreeSection: boolean
): boolean {
  return isFreeSection || isPurchased;
}
