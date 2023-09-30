import React, { ChangeEventHandler } from 'react'

interface ConfigurableFieldProps {
  isEdit?: boolean
  value: string | number
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const ConfigurableField = ({
  isEdit = false,
  value,
  onChange
}: ConfigurableFieldProps) => {
  if (!isEdit) {
    return <span>{value}</span>
  }

  return (
    <input
      type="text"
      className="charField"
      value={value}
      onChange={onChange}
    />
  )
}

export default ConfigurableField
