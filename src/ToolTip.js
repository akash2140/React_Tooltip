import { render } from '@testing-library/react';
import React, { Component, createRef } from 'react';
import './style/Tooltip.css'


class ToolTip extends Component {

    constructor() {
        super();

        this.spanRef = createRef();

    }


    componentDidMount() {


        //top tooltip
        if (this.props.position === 'top') {
            this.spanRef.current.style.bottom = '120%';
            this.spanRef.current.style.left = '50%';
            this.spanRef.current.style.marginLeft = '-110px';
        }

        //bottom tooltip
        if (this.props.position === 'bottom') {
            this.spanRef.current.style.top = '140%';
            this.spanRef.current.style.left = '50%';
            this.spanRef.current.style.marginLeft = '-110px';
        }

        //left tooltip
        if (this.props.position === 'left') {
            this.spanRef.current.style.top = '-50%';
            this.spanRef.current.style.right = '110%';
        }

        //right tooltip
        if (this.props.position === 'right') {
            this.spanRef.current.style.top = '-50%';
            this.spanRef.current.style.left = '110%';
        }



    }


    render() {

        return (

            <div className="tooltip">Hover over me!
                <span ref={this.spanRef} className="tooltiptext">Thanks for hovering! I'm a tooltip</span>
            </div>
        )

    }
}

export default ToolTip;