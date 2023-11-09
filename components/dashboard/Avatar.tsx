"use client"
import React from 'react'
import Avatar, { ReactAvatarProps } from 'react-avatar'

export const CustomAvatar: React.FC<ReactAvatarProps> = (props) => {
  return <Avatar {...props} />
}
