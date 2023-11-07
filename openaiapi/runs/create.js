(async () => {
    console.log("run_Bi334irlSw55utqnHtI32zDX")
    const response = await window.fetch("https://run.dingjunjie.com/v1/threads/thread_cC1ove5VRXP98AImZ2oa4RyT/runs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + window.apikey,
            'OpenAI-Beta': "assistants=v1"
        },
        body: JSON.stringify({ assistant_id: "asst_ZNRgdIeNyYk3iWQeIOUXnvC9" }),
    })
    const embeddedQuestion = await response.json();
})()