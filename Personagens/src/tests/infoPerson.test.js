import React from 'react';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import renderWithRouter from '../renderWitthRouter';
import userEvent from '@testing-library/user-event';
import InitialPage from '../pages/initialPage'
import Header from '../components/Header';
import Provider from '../context/Provider';
import InfoPerson from '../pages/infoPerson';

const inputNameId = 'input-name-register';
const inputRyusId = 'input-ryos-register';
const inputImgid = 'input-img-register';
const imgPreviusId = 'img-previus';
const buttonAddId = 'button-add';
const buttonLinkRegisterid = 'characters';
const cardNameId = 'card-name';
const cardRyusId = 'card-ryus';
const cardImgID = 'card-img';
const searchTextId = 'search-chacteres';


afterEach(cleanup)



describe('Teste tela de Personagens' ,() => {
    test('Se existe os elementos corretos na tela',() => {
        renderWithRouter(<Provider>
           <InfoPerson/>
          </Provider>);
      const title = screen.getByText(/Personagens/i)
      const searchText = screen.getByText(/Pesquisa:/i)
      const textRyus = screen.getByText(/Ryus/i);
      const inputSearch = screen.getByTestId(searchTextId)

      expect(title).toBeInTheDocument();
      expect(searchText).toBeInTheDocument();
      expect(textRyus).toBeInTheDocument();
      expect(inputSearch).toBeInTheDocument();
        
    

    })

})

