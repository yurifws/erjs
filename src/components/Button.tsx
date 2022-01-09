import { Component } from "react";

interface ButtonProps {
  onClick?: () => any
  initialazeClicked?: boolean
}

interface ButtonState {
  alreadyClicked: boolean
}

class Button extends Component<ButtonProps, ButtonState> {

  constructor(props: ButtonProps) {
    super(props)

    this.state = {
      alreadyClicked: !!props.initialazeClicked
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        alreadyClicked: false
      })
      
    }, 5000)
  }
  componentDidUpdate(prevProps: ButtonProps, prevState: ButtonState){
    console.log('anterior', prevState)
    console.log('atual', this.state)
    console.log('anterior', prevProps)
    console.log('atual', this.props)
  }

  render() {
    console.log('render')
    return <button 
      onClick={() => {
        this.setState({
          alreadyClicked: true
        })
        this.props.onClick?.call([])
      }}
      disabled={this.state.alreadyClicked}
      >
      {this.props.children}
    </button>
  }

}

export default Button