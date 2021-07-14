/** @format */

import React from 'react';
import articles from './article-content';
import ArticleList from '../components/ArticleList';
const ArticleListPage = () => (
	<React.Fragment>
		<h1>ArticleList</h1>
		<ArticleList articles={articles} />
	</React.Fragment>
);

export default ArticleListPage;
