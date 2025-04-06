// Створи і використай компонент
//  `<TodoList/>` для відображення масиву
//  тудушок на сторінці.

import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

// Компонент має приймати масив тудушок як пропс.
// Масив тудушок має наступну структуру.

const TodoList = ({ todos }) => {
  return (
    <div>
      <Grid>
        {todos.map(todo => (
          <GridItem key={todo.id}>
            <TodoListItem todo={todo} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default TodoList;
