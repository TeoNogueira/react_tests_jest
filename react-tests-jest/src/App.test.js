import App from './App'
import {fireEvent, render, screen} from '@testing-library/react'



describe('Testes para o componente principal', () => {

  test('Deve renderizar corretamente', () => {

render(<App />)
 
    expect(screen.getByText('register')).toBeInTheDocument()
  })

test('Deve adicionar "estudar react" na lista', () => {
 render(<App />)
   fireEvent.change(screen.getByTestId('campo-tarefa'), {
    target: {

      value: 'Estudar react'
    } 
   })

   fireEvent.click(screen.getByTestId('btn-cadastrar')) 

    expect(screen.getByText('estudar react')).toBeInTheDocument()

   
})
})