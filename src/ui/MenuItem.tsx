import React from 'react'

interface MenuItemProps {
  icon?: string
  children: Children
}

const MenuItem = ({ icon, children }: MenuItemProps) => {
  return (
    <button className="menuButton">
      <img src={icon} />
      <span>{children}</span>
    </button>
  )
}

export default MenuItem
