import React from 'react';

var bgColor = "#F5D76E",
    bgColorDisabled = "#BDBDBD";

const Temperature = ({enable, temp}) => {
    enable = !!enable;

    let cardBgColor = enable ? bgColor : bgColorDisabled;
    let cardValue = enable ? temp : undefined;

    return (
        <div style={{width: "100%", height: "100%", backgroundColor: cardBgColor}}>
            <div style={{float: "left", width: "50%", height: "100%"}}>
                <div style={{position: "relative", top: "15%", left: "15%", width: "70%", height: "70%"}}>
                    <svg fill="white" height="100%" viewBox="0 0 483 483" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M261.67,296.581v-180.47h-49.168v180.462c-19.719,9.275-33.468,29.171-33.468,52.41c0,32.06,25.985,58.044,58.045,58.044   c32.058,0,58.051-25.985,58.051-58.044C295.13,325.752,281.389,305.858,261.67,296.581z" fill="#FFFFFF"/>
                        <path d="M364.786,157.086c9.051,0,16.389-7.338,16.389-16.39c0-9.051-7.338-16.39-16.389-16.39h-35.782V91.927   c0-0.136-0.015-0.264-0.015-0.4h35.797c9.051,0,16.389-7.339,16.389-16.39c0-9.051-7.338-16.39-16.389-16.39h-42.071   C309.368,24.424,276.06,0,237.079,0c-50.69,0-91.929,41.238-91.929,91.927v158.431c-27.289,25.465-42.799,60.949-42.799,98.441   c0,74.291,60.445,134.728,134.735,134.728c74.281,0,134.719-60.437,134.719-134.728c0-37.5-15.51-72.984-42.8-98.449v-27.706   h35.782c9.051,0,16.389-7.339,16.389-16.39c0-9.051-7.338-16.39-16.389-16.39h-35.782v-32.779H364.786z M341.586,348.799   c0,57.628-46.881,104.509-104.5,104.509c-57.628,0-104.516-46.88-104.516-104.509c0-30.945,13.637-60.132,37.405-80.075   c3.417-2.865,5.395-7.106,5.395-11.572V91.927c0-34.028,27.681-61.709,61.709-61.709c34.027,0,61.708,27.681,61.708,61.709v165.217   c0,4.466,1.977,8.707,5.395,11.572C327.95,288.659,341.586,317.854,341.586,348.799z" fill="#FFFFFF"/>
                    </svg>
                </div>
            </div>

            <div style={{float: "left", width: "50%", height: "100%"}}>
                <div style={{position: "absolute", top: "30%", bottom: "0", left: "50%", right: "0", margin: "0", textAlign: "center", fontSize: "1.5em", color: "white"}}>
                    {cardValue} °C
                </div>
            </div>
        </div>
    );
}

export default Temperature
