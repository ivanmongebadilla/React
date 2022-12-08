1. In index.js
2. import {BrowserRouter} from "react-router-dom";
3. Enclosed <App /> with <BrowserRouter><BrowserRouter/>
4. In App.js import the Routes and Route components from react-router-dom
5. Import pages that you want to use (created components)
6. Render <Routes><Routes />. -   Nested inside it, render Route components, each with a self-closing tag.

Example of a App.js function:
```javascript
function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
```