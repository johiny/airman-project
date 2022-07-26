import React from "react";
import styled from "styled-components";

const Loading = ({className}) => {
    return(
        <div className={className}>
            <span/>
        </div>
    )
}

// NobuakiHonma loading design
export default styled(Loading)`
    height: 12vh;
	width: 12vh;
	-webkit-animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: loader-5-1 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
@-webkit-keyframes loader-5-1  {
	0%   { -webkit-transform: rotate(0deg); }
	100% { -webkit-transform: rotate(360deg); }
}
@keyframes loader-5-1 {
	0%   { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
::before{
    content: "";
	display: block;
	position: absolute;
	top: 0; left: 0;
	bottom: 0; right: auto;
	margin: auto;
	width: 2.5vh;
	height: 2.5vh;
	background: #2A2550;
	border-radius: 50%;
	-webkit-animation: loader-5-2 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: loader-5-2 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@-webkit-keyframes loader-5-2 {
	0%   { -webkit-transform: translate3d(0, 0, 0) scale(1); }
	50%  { -webkit-transform: translate3d(8vh, 0, 0) scale(.5); }
	100% { -webkit-transform: translate3d(0, 0, 0) scale(1); }
}
@keyframes loader-5-2 {
	0%   { transform: translate3d(0, 0, 0) scale(1); }
	50%  { transform: translate3d(8vh, 0, 0) scale(.5); }
	100% { transform: translate3d(0, 0, 0) scale(1); }
}
::after{
	content: "";
	display: block;
	position: absolute;
	top: 0; left: auto;
	bottom: 0; right: 0;
	margin: auto;
	width: 2.5vh;
	height: 2.5vh;
	background: #2A2550;
	border-radius: 50%;
	-webkit-animation: loader-5-3 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: loader-5-3 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@-webkit-keyframes loader-5-3 {
	0%   { -webkit-transform: translate3d(0, 0, 0) scale(1); }
	50%  { -webkit-transform: translate3d(-8vh, 0, 0) scale(.5); }
	100% { -webkit-transform: translate3d(0, 0, 0) scale(1); }
}
@keyframes loader-5-3 {
	0%   { transform: translate3d(0, 0, 0) scale(1); }
	50%  { transform: translate3d(-8vh, 0, 0) scale(.5); }
	100% { transform: translate3d(0, 0, 0) scale(1); }
}
>span {
	display: block;
	position: absolute;
	top: 0; left: 0;
	bottom: 0; right: 0;
	margin: auto;
	height: 12vh;
	width: 12vh;

	::before{
		content: "";
	display: block;
	position: absolute;
	top: 0; left: 0;
	bottom: auto; right: 0;
	margin: auto;
	width: 2.5vh;
	height: 2.5vh;
	background: #E04D01;
	border-radius: 50%;
	-webkit-animation: loader-5-4 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: loader-5-4 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	}

	::after{
		content: "";
	display: block;
	position: absolute;
	top: auto; left: 0;
	bottom: 0; right: 0;
	margin: auto;
	width: 2.5vh;
	height: 2.5vh;
	background: #E04D01;
	border-radius: 50%;
	-webkit-animation: loader-5-5 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	        animation: loader-5-5 2s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
	}
}
@-webkit-keyframes loader-5-4 {
	0%   { -webkit-transform: translate3d(0, 0, 0) scale(1); }
	50%  { -webkit-transform: translate3d(0, 8vh, 0) scale(.5); }
	100% { -webkit-transform: translate3d(0, 0, 0) scale(1); }
    
}
@keyframes loader-5-4 {
	0%   { transform: translate3d(0, 0, 0) scale(1); }
	50%  { transform: translate3d(0, 8vh, 0) scale(.5); }
	100% { transform: translate3d(0, 0, 0) scale(1); }
}
@keyframes loader-5-5 {
	0%   { transform: translate3d(0, 0, 0) scale(1); }
	50%  { transform: translate3d(0, -8vh, 0) scale(.5); }
	100% { transform: translate3d(0, 0, 0) scale(1); }
}
`