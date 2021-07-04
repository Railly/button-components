import Button from 'components/Button'

export default function ButtonPreview ({
  color,
  variant,
  size,
  disabled,
  iconPosition,
  iconName,
  disabledShadow
}) {
  return (
    <>
      <section className="button">
        <p> Resultado: </p>
        <div>
          {iconPosition === 'left'
            ? (
            <Button
              color={color}
              variant={variant}
              size={size}
              disabled={disabled}
              startIcon={iconName}
              disableShadow={disabledShadow}
            />
              )
            : (
            <Button
              color={color}
              variant={variant}
              size={size}
              disabled={disabled}
              endIcon={iconName}
              disableShadow={disabledShadow}
            />
              )}
        </div>
      </section>
      <style jsx>{`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 15vw;
        }
      `}</style>
    </>
  )
}
