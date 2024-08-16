import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import ReferralsnReviews from './Pages/ReferralsnReviews';
import OrderHistory from './Pages/OrderHistory';
import { Route,Router, Routes } from 'react-router-dom';
import Support from './Pages/Support';
import DealsAndDiacounts from './Pages/DealsAndDiacounts';
import FAQ from './Pages/FAQ';
import HomePage from './Forms/HomePage';
import Forwarderform from './Forms/Forwarderform';
import ReviewConfirm from './Components/ReviewConfirm';
import GetQuote from './Pages/GetQuote';

function App() {
  return (
    <div className=''>
     <div>
<NavBar />

        </div>
        <div className=''>
        </div>
        <main>
        <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/ReferralsnReviews' element={<ReferralsnReviews />} />
        <Route path='/OrderHistory' element={<OrderHistory />} />
        <Route path='/Support' element={<Support />} />
        <Route path='/DealsAndDiacounts' element={<DealsAndDiacounts />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/ReferralsnReviews' element={<ReferralsnReviews />} />
        <Route path='/Forwarderform' element={<Forwarderform />} />
        <Route path='/ReviewConfirm' element={<ReviewConfirm />} />
        <Route path='/LandingPage' element={<LandingPage/>} />
        <Route path='/GetQuote' element={<GetQuote/>} />
      </Routes>

        </main>

    </div>
  );
}

export default App;
