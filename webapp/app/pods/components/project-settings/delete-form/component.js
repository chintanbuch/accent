import Component from '@ember/component';
import {inject as service} from '@ember/service';

// Attributes
// project: Object <project>
// onSubmit: Function
export default Component.extend({
  intl: service('intl'),

  actions: {
    deleteProject() {
      /* eslint-disable no-alert */
      if (
        !window.confirm(
          this.intl.t(
            'components.project_settings.delete_form.delete_project_confirm'
          )
        )
      )
        return;
      /* eslint-enable no-alert */

      this.onSubmit();
    }
  }
});
