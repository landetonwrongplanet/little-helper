
export const state = () => ({
  todos: [{
    title: 'Hausaufgaben vergessen',
    project: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Goldfisch rutschte auf dem Parkett aus',
    project: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    title: 'Essen verbrannt',
    project: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Cellosaite gerissen',
    project: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addTodo (state, addedTodo) {
    state.todos.push({
      title: addedTodo.title,
      project: addedTodo.project,
      done: false,
      date: addedTodo.date
    })
  },
  deleteTodo (state, deletedTodo) {
    const todoIndex = state.todos.indexOf(deletedTodo)
    state.todos.splice(todoIndex, 1)
  },
  updateTodo (state, updatedTodo) {
    const todoIndex = state.todos.indexOf(updatedTodo.old)
    state.todos[todoIndex].title = updatedTodo.new.title
    state.todos[todoIndex].project = updatedTodo.new.project
  }

}
