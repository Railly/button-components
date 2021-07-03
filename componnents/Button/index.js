import THEME from 'utils/theme'
import useGetColors from './hooks/useGetColors'

export default function Button ({ variant, disableShadow, disabled, color }) {
  const currColor = !color ? 'default' : color
  const variantName = variant || 'default'
  const [VARIANT_COLORS] = useGetColors(variantName, disabled)

  return (
    <>
      <button>Default</button>
      <style jsx>{`
        button {
          color: ${VARIANT_COLORS[currColor].color};
          background-color: ${VARIANT_COLORS[currColor].backgroundColor};
          border: ${variantName === 'outline' ? '1px solid' : '0'};
          border-color: ${disabled ? '' : THEME[currColor]};
          box-shadow: ${disableShadow
            ? ''
            : VARIANT_COLORS[currColor].boxShadow};
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: ${disabled ? '' : 'pointer'};
          font-size: 14px;
          transition: 0.35s;
        }

        button :hover {
          background-color: ${disabled
            ? ''
            : VARIANT_COLORS[currColor].backgroundColorHover};
        }
      `}</style>
    </>
  )
}
