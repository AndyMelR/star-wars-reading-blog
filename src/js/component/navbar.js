import React from "react";
import { useContext } from "react";
import { Context} from "../store/appContext";
import starwars from '../../img/starwars.png'
import {FaTrash} from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions } = useContext(Context);
	const {favorites} = store;
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 ">
  				<div className="container-fluid justify-content-between">
				  <Link to="/">
					<div>
						<a className="navbar-brand ps-4" href="#"><img id="logo" src={starwars} width="150" height="80"></img></a>
					</div>
					</Link>
    				<div className="pe-5">
						<div className="bg-primary rounded p-1">
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      							<span className="navbar-toggler-icon"></span>
    						</button>
    						<div className="collapse navbar-collapse" id="navbarNavDropdown">
      							<ul className="navbar-nav">
        							<li className="nav-item dropdown">
          								<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            								Favorites <span className="bg-secondary rounded ps-1 pe-1"width="1" height="1">{store.favorites.length}</span>
          								</a>
          								<ul className="dropdown-menu">
            								{store.favorites.length==0 ? <li className="ps-5">(empty)</li> : favorites.map((item)=>{
												return <li>
													<div className="dropdown-item" href="#">{item}<span className="material-symbols-outlined ps-4 text-center" onClick={()=>{actions.deleteFavorites(item)}}>
														<FaTrash />
													</span>	</div>
												</li>
											})}
          								</ul>
        							</li>
      							</ul>
    						</div>
						</div>
					</div>
    				
  				</div>
			</nav>
		</>
	);
};