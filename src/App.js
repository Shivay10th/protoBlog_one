/** @format */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './Navbar';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div id="page-body">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/about" component={AboutPage} />
						<Route
							exact
							path="/article-list"
							component={ArticleListPage}
						/>
						<Route
							exact
							path="/article/:name"
							component={ArticlePage}
						/>
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
