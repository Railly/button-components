import getColor from 'utils/getColor'
import THEME from 'utils/theme'

export default function useGetColors (variantName, disabled) {
  const VARIANT_COLORS = {
    default: {
      color: getColor(disabled, variantName, {
        default: THEME.fontDark,
        disabled: THEME.fontDisabled,
        outline: THEME.fontDark,
        text: THEME.fontDark
      }),
      backgroundColorHover: getColor(disabled, variantName, {
        default: THEME.defaultHover,
        disabled: THEME.disabled,
        outline: `${THEME.defaultBg}aa`,
        text: `${THEME.defaultBg}aa`
      }),
      backgroundColor: getColor(disabled, variantName, {
        default: THEME.defaultBg,
        disabled: THEME.disabled,
        outline: THEME.white,
        text: THEME.white
      })
    },
    primary: {
      color: getColor(disabled, variantName, {
        default: THEME.fontLight,
        disabled: THEME.fontDisabled,
        outline: THEME.primary,
        text: THEME.primary
      }),
      backgroundColorHover: getColor(disabled, variantName, {
        default: THEME.primaryHover,
        disabled: THEME.disabled,
        outline: `${THEME.primary}33`,
        text: `${THEME.primary}33`
      }),
      backgroundColor: getColor(disabled, variantName, {
        default: THEME.primary,
        disabled: THEME.disabled,
        outline: THEME.white,
        text: THEME.white
      })
    },
    secondary: {
      color: getColor(disabled, variantName, {
        default: THEME.fontLight,
        disabled: THEME.fontDisabled,
        outline: THEME.secondary,
        text: THEME.secondary
      }),
      backgroundColorHover: getColor(disabled, variantName, {
        default: THEME.secondaryHover,
        disabled: THEME.disabled,
        outline: `${THEME.secondary}33`,
        text: `${THEME.secondary}33`
      }),
      backgroundColor: getColor(disabled, variantName, {
        default: THEME.secondary,
        disabled: THEME.disabled,
        outline: THEME.white,
        text: THEME.white
      })
    },
    danger: {
      color: getColor(disabled, variantName, {
        default: THEME.fontLight,
        disabled: THEME.fontDisabled,
        outline: THEME.danger,
        text: THEME.danger
      }),
      backgroundColorHover: getColor(disabled, variantName, {
        default: THEME.dangerHover,
        disabled: THEME.disabled,
        outline: `${THEME.danger}33`,
        text: `${THEME.danger}33`
      }),
      backgroundColor: getColor(disabled, variantName, {
        default: THEME.danger,
        disabled: THEME.disabled,
        outline: THEME.white,
        text: THEME.white
      })
    }
  }
  return [VARIANT_COLORS]
}
