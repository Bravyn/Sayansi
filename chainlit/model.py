from langchain import PromptTemplate
from langchain.embeddings import HuggingFaceBgeEmbeddings
from langchain.vectorstores import FAISS
from langchain.llms import CTransformers
from langchain.chains import RetrievalQA
import chainlit as cl

DB_FAISS_PATH = "vectorstores/db_faiss"

custom_prompt_template = """Use the following pieces of information to answer the user's question. If you don't know the answer please just say you don't know the answer. Don't try to make up the answer.

context: {}
Questions: {question}

Only returns the helpful answer below and nothing else.
Helpful answer:
"""

def set_custom_prompt():
    """
    Prompt template for QA retrieval for each vector stores
    """

    prompt = PromptTemplate(template=custom_prompt_template, input_variables=['context', 'question'])
    
    return prompt

def load_llm():
    llm = CTransformers(
        model = "model"
    )