import React from "react"

class Count extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    handleAdd = ()=>{
        this.setState({count:this.state.count + 1})
    }
    handleSub = ()=>{
        this.setState({count:this.state.count - 1})
    }
    render() {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-[350px] p-6 rounded-xl shadow-lg border border-gray-300 flex flex-col items-center space-y-5">
                <h1 className="text-4xl font-bold text-gray-800">Count</h1>
                <h1 className="text-5xl font-semibold text-blue-600">{this.state.count}</h1>
                <div className="flex space-x-4">
                    <button onClick={this.handleAdd} disabled={this.state.count == 10}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                        Increment
                    </button>
                    <button onClick={this.handleSub} disabled={this.state.count == 0}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Decrement
                    </button>
            </div>
        </div>
        </div>

      )
    }
}
export default Count