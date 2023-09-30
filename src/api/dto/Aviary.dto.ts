import { Giraffe } from 'src/api/dto/Giraffe.dto'

export interface Aviary {
  id: string
  name: string
  giraffes: Giraffe[]
}
