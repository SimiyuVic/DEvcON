import { Component } from "react";
import DemoB from "./DemoB";


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Victor Charles"
        }
        console.log("Constructor has been exectuted !")
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps has been executed !")
        return null;
    }

    componentDidMount()
    {
        console.log("componentDidMount has been executed !")
    }

    render() {
        console.log("Render method has been executed !")
        return (
            <div>
                <p>Hello {this.state.name}</p>
                <DemoB />
            </div>
        )
        
    }

}
export default Demo;