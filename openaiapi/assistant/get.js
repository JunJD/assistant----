(async () => {
    const response = await window.fetch("https://run.dingjunjie.com/v1/assistants/asst_ZNRgdIeNyYk3iWQeIOUXnvC9", {
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