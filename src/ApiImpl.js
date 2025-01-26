import axios from 'axios';

const getAIMessage = async (message, sessionId) => {
    const headers = {
        'Content-Type': 'application/json',
        'Session-Id': sessionId
    }
    const aiMessage = await axios.post('http://127.0.0.1:8000/digitalExpGenAI/v1/chat', {
        message: message
    }, {
        headers: headers
    })

    return aiMessage;
}

export { getAIMessage };