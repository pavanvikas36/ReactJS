import React from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "white",
    };
  }
  handColor = (clr) => {
    this.setState({ color: (this.state.color = clr) });
  };
  render() {
    // Inside your component
    const bgColorClass =
      {
        indigo: "bg-indigo-500",
        fuchsia: "bg-fuchsia-500",
        slate: "bg-slate-500",
        neutral: "bg-neutral-500",
      }[this.state.color] || "bg-white";

    return (
      <div
        className={`p-8 text-white h-screen flex flex-col items-center justify-center space-y-4 ${bgColorClass}`}
      >
        <div className="space-x-4">
          <button
            onClick={() => this.handColor("indigo")}
            className="px-4 py-2 bg-indigo-700 border-4 border-double hover:bg-indigo-800 rounded"
          >
            Indigo
          </button>
          <button
            onClick={() => this.handColor("fuchsia")}
            className="px-4 py-2 bg-fuchsia-700 border-4 border-double hover:bg-fuchsia-800 rounded"
          >
            Fuchsia
          </button>
          <button
            onClick={() => this.handColor("slate")}
            className="px-4 py-2 bg-slate-700 border-4 border-double hover:bg-slate-800 rounded"
          >
            Slate
          </button>
          <button
            onClick={() => this.handColor("neutral")}
            className="px-4 py-2 bg-neutral-700 border-4 border-double hover:bg-neutral-800 rounded"
          >
            Neutral
          </button>
        </div>
      </div>
    );
  }
}
export default Color;
