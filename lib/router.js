FlowRouter.route('/', {
	name: 'home',
	action () {
		GAnalytics.pageview();
		BlazeLayout.render('homeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action () {
		GAnalytics.pageview();
		BlazeLayout.render('mainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action () {
		GAnalytics.pageview();
		BlazeLayout.render('mainLayout', {main: 'RecipeSingle'});
	}
});