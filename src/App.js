import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/Sign_up'
import Index from './Components/Index'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp name='Sign Up' Text='CSS Gradient is a happy little website and free tool that lets you create a gradient background for websites. Besides being a css gradient generator, the site is also chock-full of colorful content about gradients from technical articles to real life gradient examples like Stripe and Instagram.' next='/home'/>}/>
      <Route path='/SignIn' element={<SignUp name='Sign In'Text="Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones." next='/'/>}/>
      <Route path='/home' element={<Index/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
