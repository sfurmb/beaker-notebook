;(function(angular) {
  window.bunsen = angular.module('bunsen',
    ['beaker',
     'ui.router',
     'ui.bootstrap',
     'restangular',
     'treeControl',
     'marketPlaceFilters',
     'publicationFilters',
     'truncate',
     'ngStorage',
     'ngCookies',
     'beakerNotebook',
     'angularFileUpload',
     'stopEvent',
     'filterMarketPlace',
     'sticky',
     'hiddenUpload',
     'truncate',
     'underscore.string',
     'angularSpinner',
     'angular-humanize',
     'ngSanitize',
     'hljs',
     'hc.marked',
     'ui.gravatar',
     'localytics.directives'
    ], ['RestangularProvider', function(RestangularProvider) {
      RestangularProvider.setBaseUrl('/api');
    }]);

  window.bunsen.run(['$templateCache', function($templateCache) {
    $templateCache.put('publication_cell_markdown', templates['publications/publication_cell_markdown']());
    $templateCache.put('publication_cell_code', templates['publications/publication_cell_code']());
    $templateCache.put('publication_cell_text', templates['publications/publication_cell_text']());
    $templateCache.put('publication_cell_section', templates['publications/publication_cell_section']());
  }]);
})(angular);
