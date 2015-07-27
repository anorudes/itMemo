import template from './notePreview.html!text';
import controller from './notePreview.controller';

let notePreviewComponent = function() {
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {
      note: "=",
      stretchToggle: "&",
      closePreview: "&"
    },
    bindToController: true
  };
};

export default notePreviewComponent;
