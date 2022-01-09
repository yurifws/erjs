import { PropsWithChildren, ReactNode } from "react"

//interface CardProps {
//  title: string
//}

//outro modo de ser feito
//export default function Card(props: PropsWithChildren<CardProps>) {

//outro modo de ser feito
//interface CardProps {
//  title: string
//  children?: ReactNode
//}

type CardProps = PropsWithChildren<{
  title: string
}>

export default function Card(props: CardProps) {
  console.log(props)

  return <div
    style={{
      background: 'rgba(0,0,0,.25)',
      borderRadius: 8,
      padding: 16
    }}
  >
    <div>{props.title}</div>
    { props.children}
  </div>
}