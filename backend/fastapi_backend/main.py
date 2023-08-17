import os
import config
from thinkgpt.llm import ThinkGPT
from fastapi import FastAPI, File, UploadFile 
from knowledge_base import knowledge, old_memory

import pdfplumber
# from docx import Document
import io
import uvicorn

app = FastAPI()

os.environ['OPENAI_API_KEY'] = config.api_key
llm = ThinkGPT(model_name="gpt-3.5-turbo", openai_api_key=os.environ['OPENAI_API_KEY'])



@app.post("/upload_pdf")
async def upload_pdf(file: UploadFile):
    # Read the PDF file content
    with pdfplumber.open(file.file) as pdf:
        content = pdf.pages[0].extract_text()
        #Teach the LLM the old memory
        llm.memorize(content)

        # Induce reflections based on the old memory
        new_observations = llm.infer(facts=llm.remember())
        print('new thoughts:')
        print('\n'.join(new_observations))

        llm.memorize(new_observations)
        return {
            "pred": new_observations
        }


# Predicting context from long memory
@app.post("/long_memory_prediction")
async def long_memory_prediction(input_text: str):
    llm.memorize(knowledge)
    predictions = llm.predict(
        input_text, 
        remember=llm.remember('DocArray schemas and types')
    )
    return {
        "pred": predictions
    }
    
   
   
if __name__ == "__main__":
    uvicorn.run(app, host="192.168.0.108/24", port=int(os.getenv('PORT')))
    
    