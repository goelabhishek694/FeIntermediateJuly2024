//redenr function is sued to redner a react component into vdom for testing 
// screen object is sued to access the o/p of the rendered component 
import { render, screen } from '@testing-library/react';
//import component 
import App from './App';

//1st arg => string defines what we are testing, 2nd arg => is cb function which is the actual test 
test('renders learn react link', () => {
  //render
  render(<App />); 
  //select the element / statement 
  //getByText function from screen object to query the Vdom for any element that cintains the text 
  const linkElement = screen.getByText(/learn react/i);
  //check -> assertion 
  // expect function from Jest  to check that the linkElement is present in the document 
  expect(linkElement).toBeInTheDocument();
});
