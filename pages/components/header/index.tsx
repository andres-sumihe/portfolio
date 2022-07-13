import { useEffect } from "react";
import $ from "jquery";
import { IoClose } from "react-icons/io5";
import variabels from "../../../styles/_variables.module.scss";

export default function Header(){
		
	useEffect(()=> {
		$(window).on("scroll", function(){
			var s = $(window).scrollTop(),
				d = $(document).height(),
				c = $(window).height();
		  
			var scrollPercent = (s! / (d! - c!)) * 101;
			console.log(scrollPercent )
			$(".progress-indicator").width(Math.round(scrollPercent) + "%");
		  })
		var t = $(".nav-item-link");
		t.each(e => {
			t[e].addEventListener("click" ,function(){
				t.removeClass("active");
				$(this).addClass("active")
				
			});
		});
		$("#nav-toggle").on("click", function(){
			$("#mobile-menu").addClass("active");
		})
		$("#close-menu").on("click", function(){
			$("#mobile-menu").removeClass("active");
		})

	},[])	

    return (
    <nav className="flex items-center justify-between flex-wrap p-6 fixed w-full z-10 top-0 main">
		<div className="reading-indicator">
			<div className="progress-indicator"></div>
		</div>
		<div className="flex items-center flex-shrink-0 mr-6 title-left">
			<a className="no-underline hover:no-underline" href="#">
				<span className="text-2xl pl-2 font-semibold ">Andres</span>
			</a>
		</div>

		<div className="block lg:hidden">
			<button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0" id="nav-content">
			<ul className="list-reset lg:flex justify-end flex-1 items-center">
				<li className="mr-3">
					<a className="inline-block nav-item-link py-2 px-4 no-underline" href="#">Home</a>
				</li>
				<li className="mr-3">
					<a className="inline-block nav-item-link no-underline hover:text-underline py-2 px-4" href="#">About</a>
				</li>
				<li className="mr-3">
					<a className="inline-block nav-item-link no-underline hover:text-underline py-2 px-4" href="#">Resume</a>
				</li>
				<li className="mr-3">
					<a className="inline-block nav-item-link no-underline hover:text-underline py-2 px-4" href="#">Portfolio</a>
				</li>
				<li className="mr-3">
					<a className="inline-block nav-item-link no-underline hover:text-underline py-2 px-4" href="#">Portfolio</a>
				</li>
			</ul>
		</div>
		<div id="mobile-menu">
			<button id="close-menu" className="absolute right-8 top-8"><IoClose size={36} color={variabels.aliceBlue} /></button>
		</div>
	</nav>
	);
}