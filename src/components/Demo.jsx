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
    shouldComponentUpdate()
    {
        console.log("Demo A shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("Demo A getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate()
    {
        console.log("Demo A componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "Charles Dev"
        })
    }

    render() {
        console.log("Render method has been executed !")
        return (
            <div>
                <p>Hello {this.state.name}</p>
                <button onClick={this.changeState}>Change State</button>
                <DemoB />
            </div>
        )
        
    }

}
export default Demo;