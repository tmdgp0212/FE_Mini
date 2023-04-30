export interface ApiResponse<T = boolean> {
  status: number
  message: string
  data: T
}
