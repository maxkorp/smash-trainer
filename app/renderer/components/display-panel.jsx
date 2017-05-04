const React = require('react');
const DrawHandler = require('./draw-handler');

class DisplayPanel extends React.Component {
  render() {
    return (
      <div className="top">
        <svg id="octagon" className="octagon" width="284.261px" height="284.261px">
          <path xmlns="http://www.w3.org/2000/svg" style={{fill:'none','strokeWidth':1,'strokeLinecap':'butt','strokeLinejoin':'miter',stroke:'rgb(0%,0%,0%)','strokeOpacity':1,'strokeMiterlimit':10}} d="M 141.732281 0.00109375 L 100.220563 100.219844 L 0.0018125 141.735469 L -100.220844 100.219844 L -141.732563 0.00109375 L -100.220844 -100.221563 L 0.0018125 -141.733281 L 100.220563 -100.221563 Z M 141.732281 0.00109375 " transform="matrix(1,0,0,-1,142.131,142.13)" id="path44"/>
          <path xmlns="http://www.w3.org/2000/svg" style={{stroke:'none',fillRule:'nonzero',fill:'rgb(0%,0%,0%)',fillOpacity:1}} d="M 144.117188 142.128906 C 144.117188 141.035156 143.226563 140.144531 142.132813 140.144531 C 141.035156 140.144531 140.148438 141.035156 140.148438 142.128906 C 140.148438 143.226563 141.035156 144.113281 142.132813 144.113281 C 143.226563 144.113281 144.117188 143.226563 144.117188 142.128906 Z M 144.117188 142.128906 " id="path46"/>
        </svg>

        <svg id="input-indicator" className="input-indicator" width="284.261px" height="284.261px">
          <path xmlns="http://www.w3.org/2000/svg" style={{stroke:'none',fillRule:'nonzero',fill:'rgb(100%,0%,0%)',fillOpacity:1}} d="M 144.117188 142.128906 C 144.117188 141.035156 143.226563 140.144531 142.132813 140.144531 C 141.035156 140.144531 140.148438 141.035156 140.148438 142.128906 C 140.148438 143.226563 141.035156 144.113281 142.132813 144.113281 C 143.226563 144.113281 144.117188 143.226563 144.117188 142.128906 Z M 144.117188 142.128906 " id="path46"/>
        </svg>

        <svg id="expected-indicator" className="expected-indicator" width="284.261px" height="284.261px">
          <path xmlns="http://www.w3.org/2000/svg" style={{stroke:'none',fillRule:'nonzero',fill:'rgb(0%,100%,0%)',fillOpacity:1}} d="M 144.117188 142.128906 C 144.117188 141.035156 143.226563 140.144531 142.132813 140.144531 C 141.035156 140.144531 140.148438 141.035156 140.148438 142.128906 C 140.148438 143.226563 141.035156 144.113281 142.132813 144.113281 C 143.226563 144.113281 144.117188 143.226563 144.117188 142.128906 Z M 144.117188 142.128906 " id="path46"/>
        </svg>
        <DrawHandler/>
      </div>
    );
  }
}

module.exports = DisplayPanel;
