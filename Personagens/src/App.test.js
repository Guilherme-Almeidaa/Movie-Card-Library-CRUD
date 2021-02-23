import { screen , fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWitthRouter';
import userEvent from '@testing-library/user-event';
import App from './App';

const inputNameId = 'input-name-register';
const inputRyusId = 'input-ryos-register';
const inputImgid = 'input-img-register';
const imgPreviusId = 'img-previus';
const buttonAddId = 'button-add';

describe ('Teste tela inicial' , () => {
  test('Se existe os elemtnos corretos na tela', () => {
    renderWithRouter(<App />);
    const title = screen.getByText(/Cadastrar/i);
    const textNameInput = screen.getByText(/Nome:/i);
    const inputName = screen.getByTestId(inputNameId)
    const textRyosInput = screen.getByText(/Ryus:/i);
    const inputRyus = screen.getByTestId(inputRyusId);
    const textInputImg = screen.getByText(/Insira o Link da imagem:/i)
    const inputImg = screen.getByTestId(inputImgid);
    const buttonAdd = screen.getByTestId(buttonAddId);
   
    expect(title).toBeInTheDocument();
    expect(textNameInput).toBeInTheDocument();
    expect(textRyosInput).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputRyus).toBeInTheDocument();
    expect(textInputImg).toBeInTheDocument();
    expect(inputImg).toBeInTheDocument();
    expect(buttonAdd).toBeInTheDocument();
    
    
   
    
  });

  test('Se inserir link de imagem a imagem aparece na tela' , () => {
    renderWithRouter(<App />);
    const inputImg = screen.getByTestId(inputImgid);
    userEvent.type(inputImg,'https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');
     
    expect(screen.getByTestId(imgPreviusId).src).toBe('https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');

  })

  test('Se o alerta aparece quando não é dijitado o nome do personagem' ,() => {
    renderWithRouter(<App/>);
    
    const buttonAdd = screen.getByTestId(buttonAddId);
    
    fireEvent.click(buttonAdd);
    const  alert = screen.getByRole('alert')
    
    expect(alert).toHaveTextContent('Dijite o nome do Personagem');

    
  })

})

