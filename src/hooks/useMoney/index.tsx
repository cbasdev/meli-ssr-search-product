type ConfigMoneyType = {
  style: string
  currency: string
  minimunFractionDigits: number
}

export function useMoney(countryCode: string, config?: ConfigMoneyType) {
  const formatter = new Intl.NumberFormat(countryCode, {
    style: config?.style || 'currency',
    currency: config?.currency || 'COP',
    minimumFractionDigits: config?.minimunFractionDigits || 0,
  })

  return { formatter }
}
