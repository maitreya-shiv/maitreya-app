import React from 'react';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem';
import llmThinkingModels from './contents/llmThinkingModels';
import promptTypes from './contents/promptTypes';
import stochasticParrots from './contents/stochasticParrots';
import ai from './contents/ai';
import aiTypes from './contents/aiTypes';
import agi from './contents/agi';
import promptEngineering from './contents/promptEngineering';
import functionCalling from './contents/functionCalling';
import ggufggml from './contents/ggufggml';
import devInLangChain from './contents/devInLangChain';
import llmTraining from './contents/llmTraining';
import smallLLMForFun from './contents/smallLLMForFun';

export default function AI() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '90%',
                overflow: "scroll",
                padding: '10px'
            }}
        >
            {BlogItem(ai)}
            {BlogItem(aiTypes)}
            {BlogItem(agi)}
            {BlogItem(ggufggml)}
            {BlogItem(smallLLMForFun)}
            {BlogItem(llmTraining)}            
            {BlogItem(promptTypes)}
            {BlogItem(promptEngineering)}
            {BlogItem(stochasticParrots)}
            {BlogItem(llmThinkingModels)}
            {BlogItem(functionCalling)}            
            {BlogItem(devInLangChain)}
        </Box>
    );
}