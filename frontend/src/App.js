import { Container } from 'react-bootstrap'

import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Header />
      <main className="py-5">
        <Container>
        <h1>imgay</h1>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
