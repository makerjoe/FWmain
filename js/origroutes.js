routes = [
	// {	
		// path: '/',
    // componentUrl: './login-screen.html',
	// },
	{	
		path: '/',
    url: 'index.html',
	},
  {
    path: '/menu/',
    componentUrl: './pages/menu.html',
  },
  {
    path: '/popover/',
    url: './pages/popover.html',
  },
  {
    path: '/cardsexpandable/',
    url: './pages/cardsexpandable.html',
  },
  {
    path: '/photobrowser/',
    componentUrl: './pages/photobrowser.html',
  },
  {
    path: '/formdata/',
    componentUrl: './pages/formdata.html',
  },
  {
    path: '/formv2x/',
    componentUrl: './pages/formv2x.html',
  },
  {
    path: '/formv2/',
    componentUrl: './pages/formv2.html',
  },
  {
    path: '/about/',
    componentUrl: './pages/about.html',
  },
  {
    path: '/CRUDstate/',
    componentUrl: './pages/CRUDstate.html',
  },

  {
    path: '/CRUDmdstate/',
    componentUrl: './pages/CRUDmdstate.html',
  },

  {
    path: '/setstate/',
    componentUrl: './pages/setstate.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      console.log('loading router.js')
      var router = this;
			// console.log(routeTo)
			// console.log(routeFrom)
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
