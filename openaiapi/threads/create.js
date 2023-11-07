(async () => {
    console.log("thread_cC1ove5VRXP98AImZ2oa4RyT")
    const response = await window.fetch("https://run.dingjunjie.com/v1/threads", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + window.apikey,
            'OpenAI-Beta': "assistants=v1"
        },
        body: JSON.stringify({}),
    })
    const embeddedQuestion = await response.json();
})()