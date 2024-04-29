import {useState} from "react";

export default function Accordian(props) {
    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapsed() {
        setCollapsed(!collapsed);
    }

    return <div style={{width: props.width}} className="accordian-fold">
        <div className="accordian-tab" onClick={toggleCollapsed}>
            <p className={(collapsed ? "collapsed " : "") + "accordian-icon"}>{"\u203a"}</p>
            <p className="accordian-label">{props.label}</p>
        </div>
        <div style={{height: props.contentHeight}} className={(collapsed ? "collapsed " : "") + "accordian-content"}>
            {props.children}
        </div>
    </div>
}