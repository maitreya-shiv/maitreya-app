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
import baseVsInstruct from './contents/baseVsInstruct';
import llmInstructionTuning from './contents/llmInstructionTuning';
import peft from './contents/peft';
import dataSetsForFinetuning from './contents/dataSetsForFinetuning';
import llmParamters from './contents/llmParamters';
import modelQuantization from './contents/modelQuantization';
import aiAgents from './contents/aiAgents';


const item = {
    header: "Artificial Intelligence",
    contents: [
        {
            text: "What is an AI agent?", href: "#/ai-agent"
        },
        {
            text: "Training LLM Locally", href: "#/llm-training"
        },
        {
            text: "Parameter-Efficient Fine-Tuning", href: "#/peft"
        },
        {
            text: "What is Instruction Tuning in LLM?", href: "#/instruct-tuning"
        },
        {
            text: "Parameter-Efficient Fine-Tuning using unsloth", href: "#/peft-unsloth"
        },
        {
            text: "LLM Datasets for Fine-tuning", href: "#/data-sets"
        },
        {
            text: "Function/Tool callling", href: "#/function-call"
        },
        {
            text: "Intstalling llama.cpp Windows", href: "#/install-llamacpp"
        },
        {
            text: "Intstalling Unsloth on Windows", href: "#/install-unsloth"
        },
        {
            text: "Intstalling Unsloth on Windows", href: "#/install-unsloth"
        },
        {
            text: "How to write effective Prompts", href: "#/prompt"
        },
    ]
}



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
            {BlogItem(item)}
        </Box>
    );
}