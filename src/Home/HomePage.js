import React from 'react';

export default class HomePage extends React.Component
{
	render()
	{
		return(
			<div>
			<img src="/homepage.jpg" alt="planning" style={{
							maxWidth:"100%", zIndex:"-1", position:"fixed"
						}} />
			<div className="container mt-5 pt-5">
						
				<div className="p-5 bg-dark text-white rounded-3 mb-4">
					
					<div className="container">
						<h1 className="text-warning mb-4"><i className="fas fa-star"></i>{' '}The Achiever</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<div className="row mb-3 ">
					<div className="col-6">
						<div className="card bg-dark text-white p-3">
							<div className="card-body">
								<h1 className="card-title text-success"> Goals </h1>
								<p className="card-text"> 
									Cupidatat occaecat adipisicing nostrud ut exercitation
									in exercitation pariatur duis aliqua duis ad incididunt
									consectetur veniam anim incididunt dolore occaecat elit
									esse ea occaecat labore eu dolor mollit minim culpa
									cillum amet esse nostrud ut nisi tempor dolore.
								</p>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card bg-dark text-white p-3">
							<div className="card-body">
								<h1 className="card-title text-primary"> Routine </h1>
								<p className="card-text"> 
									Cupidatat occaecat adipisicing nostrud ut exercitation
									in exercitation pariatur duis aliqua duis ad incididunt
									consectetur veniam anim incididunt dolore occaecat elit
									esse ea occaecat labore eu dolor mollit minim culpa
									cillum amet esse nostrud ut nisi tempor dolore.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="p-5 bg-dark text-white rounded-3 mb-4">
					<div className="container">
						<h1 className="text-warning mb-4">Benefits</h1>
						<p className="text-dark">
							<div className="mb-4">
								<span className="bg-warning p-2 rounded-2">1</span>
								<span className="bg-warning p-2 rounded-2 mx-2">
							 	Exercitation et esse labore qui pariatur amet pariatur ex sint fugiat amet voluptate elit.
								</span>
							</div>
							<div className="mb-4">
								<span className="bg-warning p-2 rounded-2">2</span>
								<span className="bg-warning p-2 rounded-2 mx-2">
							 	Exercitation et esse labore qui pariatur amet pariatur ex sint fugiat amet voluptate elit.
								</span>
							</div>
							<div className="mb-4">
								<span className="bg-warning p-2 rounded-2">3</span>
								<span className="bg-warning p-2 rounded-2 mx-2">
							 	Exercitation et esse labore qui pariatur amet pariatur ex sint fugiat amet voluptate elit.
								</span>
							</div>
							<div className="mb-4">
								<span className="bg-warning p-2 rounded-2">4</span>
								<span className="bg-warning p-2 rounded-2 mx-2">
							 	Exercitation et esse labore qui pariatur amet pariatur ex sint fugiat amet voluptate elit.
								</span>
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>
		);
	}
}