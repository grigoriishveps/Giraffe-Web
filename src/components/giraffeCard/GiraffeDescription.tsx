import React, { ChangeEventHandler } from 'react'
import ConfigurableField from 'src/components/giraffeCard/ConfigurableField'

interface GiraffeDescriptionProps {
  label: string
  value: string | number
  isEdit?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const GiraffeDescription = ({
  label,
  value,
  isEdit,
  onChange
}: GiraffeDescriptionProps) => {
  return (
    <div className="characteristic">
      <span>
        <b>{label}: </b>{' '}
      </span>
      <ConfigurableField isEdit={isEdit} value={value} onChange={onChange} />
    </div>
  )
}

export default GiraffeDescription
