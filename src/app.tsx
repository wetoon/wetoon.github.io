
import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'

import './tailwind.init.css'
import './custom.css'

import Home from './components/Home.tsx'
import PageNotFound from './components/PageNotFound.tsx'

createRoot( document.getElementById('app') as HTMLDivElement ).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='*' element={ <PageNotFound /> }></Route>
        </Routes>
    </BrowserRouter>
)
