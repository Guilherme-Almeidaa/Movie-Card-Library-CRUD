import { screen, fireEvent, cleanup } from '@testing-library/react';
import renderWithRouter from './renderWitthRouter';
import userEvent from '@testing-library/user-event';
import InitialPage from './pages/initialPage'
import Header from './components/Header';
import Provider from './context/Provider';

import InfoPerson from './pages/infoPerson';



const inputNameId = 'input-name-register';
const inputRyusId = 'input-ryos-register';
const inputImgid = 'input-img-register';
const imgPreviusId = 'img-previus';
const buttonAddId = 'button-add';
const buttonLinkRegisterid = 'characters';
const cardNameId = 'card-name';
const cardRyusId = 'card-ryus';
const cardImgID = 'card-img'


describe('Teste tela inicial', () => {
  
 
  
  test('Se existe os elemtnos corretos na tela', () => {
    renderWithRouter(
      <Provider>
        <Header />
        <InitialPage />
      </Provider>
    );

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

  test('Se inserir link de imagem a imagem aparece na tela', () => {
    renderWithRouter(
      <Provider>
        <Header />
        <InitialPage />
      </Provider>
    );
    const inputImg = screen.getByTestId(inputImgid);
    userEvent.type(inputImg, 'https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');
    expect(screen.getByTestId(imgPreviusId)).toBeVisible();

    expect(screen.getByTestId(imgPreviusId).src).toBe('https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');

  })

  test('Se ao clicar em adicionar a iamgem desaparece da tela', () => {
    renderWithRouter(
      <Provider>
        <Header />
        <InitialPage />
      </Provider>
    );
    const inputImg = screen.getByTestId(inputImgid);
    const inputName = screen.getByTestId(inputNameId)
    const buttonAdd = screen.getByTestId(buttonAddId);
    userEvent.type(inputName, 'Sakura');
    userEvent.type(inputImg, 'https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');

   
    fireEvent.click(buttonAdd);
    expect(screen.getByTestId(imgPreviusId)).not.toBeVisible();
    localStorage.clear()

  })

  test('Se clicar no Botão Personagens vai para tela de personagens', () => {
    const { history } = renderWithRouter(
      <Provider>
        <Header />
        <InitialPage />
      </Provider>
    );
    const characters = screen.getByTestId(buttonLinkRegisterid)
    fireEvent.click(characters)

    const { pathname } = history.location;

    expect(pathname).toBe('/infoperson')



  })


  test('Se dijitar as informaões e clciar em adicionar o personagem é adicionado a lista', () => {
    renderWithRouter(
      <Provider>
        <Header />
        <InitialPage />
      </Provider>
    );
    const inputRyus = screen.getByTestId(inputRyusId);
    const inputImg = screen.getByTestId(inputImgid);
    const inputName = screen.getByTestId(inputNameId)
    const buttonAdd = screen.getByTestId(buttonAddId);

    userEvent.type(inputName, 'Sakura');

    userEvent.type(inputImg, 'https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');
    userEvent.type(inputRyus , '10000')
    expect(inputRyus.value).toBe('10000')
    fireEvent.click(buttonAdd);

    renderWithRouter(
      <Provider>
        <InfoPerson />
      </Provider>
    )
  
    expect(screen.queryAllByTestId(cardNameId)[0]).toHaveTextContent('Sakura');
    expect(screen.queryAllByTestId(cardRyusId)[0]).toHaveTextContent('$10000');
    expect(screen.queryAllByTestId(cardImgID)[0]).toBeVisible();
    expect(screen.queryAllByTestId(cardImgID)[0].src).toBe('https://i.pinimg.com/originals/92/b5/e8/92b5e8ece07d6274a3e5f576b1306a5b.jpg');




  })


})

