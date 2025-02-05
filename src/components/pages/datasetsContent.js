const datasetsContent = {
    header: "LLM Datasets for Fine-tuning",
    text: `LLM datasets are large sets of text data that are used to train large language models (LLMs).`,
    contents: [
        {
            type: "header",
            text: "Text Classification Datasets"
        },
        {
            type: "text",
            text: `These datasets help train models to categorize text into predefined categories like sentiment analysis, topic classification, or spam detection.`
        },
        {
            type: "header",
            text: "Text Generation Datasets"
        },
        {
            type: "text",
            text: `These consist of prompts and corresponding responses, useful for training models to generate contextually appropriate and coherent text.`
        },
        {
            type: "header",
            text: "Summarization Datasets"
        },
        {
            type: "text",
            text: `These datasets contain long documents paired with summaries, designed to train models to generate or refine summaries.`
        },
        {
            type: "header",
            text: "Question-Answering Datasets"
        },
        {
            type: "text",
            text: `These datasets include questions and their correct answers, often derived from FAQs, support dialogues, or knowledge bases.`
        },
        {
            type: "header",
            text: "Mask Modeling Datasets"
        },
        {
            type: "text",
            text: `These are used to train models with masked language modeling (MLM), where parts of the text are hidden, and the model predicts the missing words or tokens. This method is crucial in the pre-training phase for models like BERT.`
        },
        {
            type: "header",
            text: "Instruction Fine-Tuning Datasets"
        },
        {
            type: "text",
            text: `These datasets consist of instructions paired with expected responses, guiding the model to execute tasks based on user commands.
            The input and output string follow a template known as an instruction dataset format. Some popular ones are Alpaca, Vicuna, Databricks, LIMA.`
        },
        {
            type: "reference",
            href: "https://www.ruder.io/an-overview-of-instruction-tuning-data",
            text: "an-overview-of-instruction-tuning-data"
        },
        {
            type: "reference",
            href: "https://lightning.ai/pages/community/tutorial/optimizing-llms-from-a-dataset-perspective/",
            text: "optimizing-llms-from-a-dataset-perspective"
        },
        {
            type: "header",
            text: "- Alpaca Instruction Dataset"
        },
        {
            type: "text",
            text: `52k English instruction examples generated using OpenAI’s text-davinci-003 with self-instruct.
            This instruction data can be used to conduct instruction-tuning for language models and make the language model follow instruction better.`
        },
        {
            type: "reference",
            href: "https://huggingface.co/datasets/tatsu-lab/alpaca",
            text: "alpaca"
        },
        {
            type: "reference",
            href: "https://zackproser.com/blog/how-to-create-a-custom-alpaca-dataset",
            text: "how-to-create-a-custom-alpaca-dataset"
        },
        {
            type: "header",
            text: "- Alpaca Dataset format"
        },
        {
            type: "code",
            code: `
// instruction: A prompt or question that guides the model's response.
// input: Additional context or information (can be empty).
// output: The desired response from the model.

[
  {
    "instruction": "Write a short story about a robot learning to cook.",
    "input": "",
    "output": "In a bustling kitchen of the future, Robot X-5 stood motionless, its optical sensors fixed on the sizzling pan before it. 'Crack two eggs,' the recipe instructed. With precision, X-5 selected an egg from the carton, but its metallic fingers crushed the delicate shell, sending yolk dripping down its chassis. Undeterred, X-5 tried again, this time adjusting its grip strength. Success! The egg cracked perfectly into the pan. As the day progressed, X-5 learned to chop vegetables without pulverizing them and to measure ingredients with increasing accuracy. By evening, a slightly lopsided but edible omelet sat on a plate, steam rising from its golden surface. X-5's LED display flickered in what could only be described as pride. It had taken its first step in mastering the art of cooking, proving that even robots can find joy in creating something delicious."
  },
  {
    "instruction": "Summarize below input",
    "input": "The main difference between instruction tuning and standard supervised fine-tuning lies in the data that the model is trained on. 
              Whereas supervised fine-tuning trains models on input examples and their corresponding outputs, instruction tuning augments input-output examples with instructions, 
              which enables instruction-tuned models to generalize more easily to new tasks.",
    "output": "The key difference between instruction tuning and standard supervised fine-tuning is the training data. 
              Supervised fine-tuning uses input-output pairs, while instruction tuning adds instructions to these pairs, helping models generalize better to new tasks."
   }
]`
        },
        {
            type: "header",
            text: "Conversational Datasets"
        },
        {
            type: "text",
            text: `These datasets are designed for training dialogue models, with conversations between users and systems or among multiple users.`
        },
        {
            type: "header",
            text: "Named Entity Recognition (NER) Datasets"
        },
        {
            type: "text",
            text: `These datasets teach models to identify and categorize entities like names, locations, dates, etc.`
        },
        {
            type: "reference",
            href: "https://ubiai.tools/fine-tune-llama-3-psychology-question-unsloth/",
            text: "What is an LLM Dataset?"
        }
    ]
}
export default datasetsContent;