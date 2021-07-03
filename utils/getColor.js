const getColor = (disabled, variantName, colors) => {
  if (disabled) return colors.disabled
  if (variantName === 'outline') return colors.outline
  if (variantName === 'text') return colors.text
  return colors.default
}

export default getColor
