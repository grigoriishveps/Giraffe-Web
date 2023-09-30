import React from 'react'

interface UploadImage {
  id?: string
  value?: string
  onChange: () => void
}

const UploadImage = ({ id = 'file', value, onChange }: UploadImage) => {
  return (
    <label htmlFor="file">
      <input
        type="file"
        accept="image/*"
        name="photo"
        id={id}
        hidden
        onChange={onChange}
      />
      <img className="photoImg" src={value} alt="Ошибка открытия аватара" />
    </label>
  )
}

export default UploadImage
