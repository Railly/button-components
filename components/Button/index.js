import useGetColors from 'hooks/useGetColors'
import THEME, { POSITION_ICON, PADDING } from 'utils/theme'

export default function Button ({
  variant,
  disableShadow,
  disabled,
  color,
  size,
  endIcon,
  startIcon
}) {
  const currColor = !color ? 'default' : color
  const variantName = variant || 'default'
  const sizeName = size || 'default'
  const positionIcon = endIcon ? 'endIcon' : startIcon ? 'startIcon' : 'default'
  const currIcon = endIcon || startIcon
  const [VARIANT_COLORS] = useGetColors(variantName, disabled)

  return (
    <>
      <button>
        {positionIcon !== 'default' && (
          <span className="material-icons">{currIcon}</span>
        )}
        <span>Default</span>
      </button>
      <style jsx>{`
        button {
          align-items: center;
          background-color: ${VARIANT_COLORS[currColor].backgroundColor};
          border-color: ${disabled ? '' : THEME[currColor]};
          border-radius: 6px;
          border: ${variantName === 'outline' ? '1px solid' : '0'};
          box-shadow: ${disableShadow
            ? ''
            : '0px 2px 3px rgba(51, 51, 51, 0.2)'};
          color: ${VARIANT_COLORS[currColor].color};
          cursor: ${disabled ? '' : 'pointer'};
          display: flex;
          flex-direction: ${POSITION_ICON[positionIcon].flexDirection};
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 500;
          height: 36px;
          justify-content: ${POSITION_ICON[positionIcon].justifyContent};
          line-height: 20px;
          padding: ${PADDING[sizeName]};
          transition: 0.35s;
        }

        button :hover {
          background-color: ${disabled
            ? ''
            : VARIANT_COLORS[currColor].backgroundColorHover};
        }

        span {
          font-size: 14px;
        }

        .material-icons {
          ${endIcon
            ? 'margin-left: 8px'
            : startIcon
            ? 'margin-right: 8px'
            : ''};
        }
      `}</style>
    </>
  )
}
