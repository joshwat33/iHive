import App from "./App";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import IdeaPage from "./IdeaPage";
import IdeaSubmission from "./IdeaSubmission";
import SuccessPage from "./SuccessPage";

function RoutePage(){
    return(
        <BrowserRouter>
    <Routes>
      <Route path = "/home" element={<App />}></Route>
      <Route path="/idea" element={<IdeaPage />}></Route>
      <Route path="/submit" element={<IdeaSubmission />}></Route>
      <Route path="/success" element={<SuccessPage />}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default RoutePage