declare module '*.jpg'
declare module '*.png'
declare module '*.svg'

type Nullable<T> = T | null | undefined

type Children = React.ReactNode

interface ChildProps {
  children: Children
}
