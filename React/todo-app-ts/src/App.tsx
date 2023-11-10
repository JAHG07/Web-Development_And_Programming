import { Todos } from './components/Todos'
import { useState } from 'react'
import { type TodoId, type Todo as TodoType } from './types'

const mocksToDo = [
  {
    id: 1,
    title: 'Limpiar la cocina',
    completed: true
  },
  {
    id: 2,
    title: 'Hacer las tareas de la casa',
    completed: false
  },
  {
    id: 3,
    title: 'Ir al supermercado',
    completed: false
  }
]

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksToDo)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemove={handleRemove}
        todos={todos} />
    </div>
  )
}

export default App
