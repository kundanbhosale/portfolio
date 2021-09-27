export interface Data {
  name: string
  description: string
  topics: Array<string>
  html_url: string
}

export interface IProps {
  data: Data[]
}
export interface IActions {
  type: 'failure' | 'success'
  message: string
}
