(async () => {
    const response = await window.fetch("https://run.dingjunjie.com/v1/threads/thread_cC1ove5VRXP98AImZ2oa4RyT/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + window.apikey,
            'OpenAI-Beta': "assistants=v1"
        },
        body: JSON.stringify({ role: "user", content: "How does AI work? Explain it in simple terms." }),
    })
    const embeddedQuestion = await response.json();
})()