(async () => {
    const response = await window.fetch("https://run.dingjunjie.com/v1/threads/thread_cC1ove5VRXP98AImZ2oa4RyT/runs/run_Bi334irlSw55utqnHtI32zDX", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + window.apikey,
            'OpenAI-Beta': "assistants=v1"
        },
    })
    const embeddedQuestion = await response.json();
})()