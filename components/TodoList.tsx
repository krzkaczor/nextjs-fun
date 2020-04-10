import { Todo } from "@prisma/client";

interface Props {
  todos: Todo[];
}

export function TodoList(props: Props) {
  if (props.todos.length === 0) {
    return <p>No todos :(</p>;
  }

  return (
    <div>
      {props.todos.map((t, i) => (
        <p>
          {i + 1}. {t.name} {t.done ? 'DONE!' : 'NOT-DONE!'}
        </p>
      ))}
    </div>
  );
}
