(async () => {
    const response = await window.fetch("https://run.dingjunjie.com/v1/assistants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + window.apikey,
            'OpenAI-Beta': "assistants=v1"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-16k-0613",
            instructions:
                "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
            name: "Math Tutor",
            tools: [{ type: "code_interpreter" }],
        }),
    })
    const myAssistant = await response.json();
    window.assistant = myAssistant
})()