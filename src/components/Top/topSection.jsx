import React from "react";
import { Manager, Reference, Popper } from 'react-popper';
import "./style.scss";
import Weather from "./weather";

class TopSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSelectLocationOpen: false
        }
    }
    
    onToggleSelectLocation(){
        this.setState((prevState)=>
        ({
            isSelectLocationOpen: !prevState.isSelectLocationOpen
        })
        );
    }
    render(){
        const { isSelectLocationOpen}= this.state;
        return (
            <div className="top-container">
                <div className="title">Weather</div>
                <Weather {...this.props}/>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                           <button 
                            className="btn btn-select-location" 
                            ref={ref}
                            onClick={this.onToggleSelectLocation.bind(this)}>
                               Select Location
                           </button>
                        )}
                    </Reference>
                    <Popper placement="right">
                        {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen &&
                            <div className="popup-container" ref={ref} style={style} data-placement={placement}>
                            Popper element
                            <div ref={arrowProps.ref} style={arrowProps.style} />
                            </div>
                        )}
                    </Popper>
                </Manager>
            </div>
        );
    }
}

export default TopSection;