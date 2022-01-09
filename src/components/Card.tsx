import { PropsWithChildren } from "react"
import * as C from './Card.styles'

type CardProps = PropsWithChildren<{
  title: string
  align?: 'center' | 'left' | 'right'
}>

export default function Card(props: CardProps) {
  console.log(props)

  return <C.Wrapper align={props.align || 'center'}>
    <C.Title>{props.title}</C.Title>
    {props.children}
  </C.Wrapper>
}