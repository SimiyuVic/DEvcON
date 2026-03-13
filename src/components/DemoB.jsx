import { Component } from "react";


class DemoB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Victor Charles"
        }
        console.log("Constructor has been exectuted in Demo B!")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps has been executed in Demo B!")
        return null;
    }

    componentDidMount()
    {
        console.log("componentDidMount has been executed in Demo B!")
    }

    render() {
        console.log("Render method has been executed in Demo B !")
        return (
            <div>
                <p>Hello from Demo B {this.state.name}</p>
            </div>
        )
        
    }

}
export default DemoB;