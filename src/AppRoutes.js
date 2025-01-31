import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import ChatterBug from './components/ChatterBug';
import AI from './components/AI';
import PromptEngineeringPage from './components/pages/PromptEngineeringPage';
import FunctionCallingPage from './components/pages/FunctionCallingPage';
import DevelopmentInPython from './components/pages/DevelopmentInPython';
import DevelopmentInLangChain from './components/pages/DevelopmentInLangChain';
import LLMTraining from './components/pages/LLMTraining';

const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/index.html" element={<Home />} />
        <Route exact path="/chatterbug" element={<ChatterBug />} />
        <Route exact path="/ai" element={<AI />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/maths" element={<About />} />
        <Route exact path="/science" element={<About />} />
        <Route exact path="/philosophy" element={<About />} />
        <Route exact path="/history" element={<About />} />
        <Route exact path="/watches" element={<About />} />
        <Route exact path="/books" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/prompt" element={<PromptEngineeringPage />} />
        <Route exact path="/function-call" element={<FunctionCallingPage />} />
        <Route exact path="/dev-python" element={<DevelopmentInPython />} />
        <Route exact path="/dev-langchain" element={<DevelopmentInLangChain />} />
        <Route exact path="/llm-training" element={<LLMTraining />} />
    </Routes>
);
export default AppRoutes;