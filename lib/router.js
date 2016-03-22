if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('recipe-book');
    });
    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}
FlowRouter.triggers.enter([function(context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}])
FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {
            main: 'Recipes'
        });
    }
});
FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {
            main: 'RecipeSingle'
        });
    }
});

FlowRouter.route('/menu', {
	name: 'menu',
	action () {
		BlazeLayout.render('mainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action () {
		BlazeLayout.render('mainLayout', {main: 'ShoppingList'});
	}
});