
import './App.css';
// import landingPage from './landingPage';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './Navbar';
import About from './About';
import FeaturedProjects from './FeaturedProjects';

function App() {

  const theme= createTheme({
    palette: {
      type: 'light',
      primary: {
        main: 'rgb(86,198,254)',
        light: '#606060',
      },
      secondary: {
        main: '#000000',
      },
    },



  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

         <Switch>
       
        <Route path='/about'>
         <About />
          
        </Route>
        <Route path='/contact'>
          <Contact> </Contact>
        </Route>
        <Route path='/featured_projects'>
          <FeaturedProjects />
        </Route>
        <Route path='/freelance_inquiries'>
          <h1>freelance Inquiries</h1>
        </Route>
        <Route path='/'>
          <LandingPage ></LandingPage>
        </Route>
      </Switch>
      </ThemeProvider>
     

    </div>
  );
}

export default App;
