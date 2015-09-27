Package.describe({
  name: 'ldk:iron-router-protected',
  version: '1.1.1',
  summary: 'Create protected and meteor-roles restricted routes within iron-router',
  git: 'https://github.com/VeliovGroup/Meteor-iron-router-protected',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['coffeescript', 'iron:router@1.0.7', 'ostrio:iron-router-helper-class@1.0.0'], 'client');
  api.addFiles('iron-router-protected.coffee', 'client');
  api.imply('ostrio:iron-router-helper-class@1.0.0');
});
