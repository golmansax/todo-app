Chk.TodoApp = (function () {
  'use strict';

  var TodoApp = function () { };
  _(TodoApp.prototype).extend({

    _todos: null,

    init: function () {
      this._todos = new Chk.TodoCollection([
        { name: 'Hello', due_date: '2014-01-01', id: 0 },
        { name: 'Second', due_date: '2014-01-01', id: 1 }
      ], { parse: true });

      this._todos.on('add remove change', this._render.bind(this));

      this._render();
    },

    _render: function () {
      React.render(
        <Chk.TodoList
          todos={this._todos.toJSON()}
          remove={this._todos.remove.bind(this._todos)}
        />,
        window.document.getElementById('react-container')
      );
    }

  });

  return TodoApp;
})();

(function () {
  'use strict';

  var app = new Chk.TodoApp();
  app.init();
})();