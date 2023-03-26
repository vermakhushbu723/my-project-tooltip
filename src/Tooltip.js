import React from 'react';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                thanks for hovering !! i am a tooltip !
            </div>
        )
    }
}


export default Tooltip;