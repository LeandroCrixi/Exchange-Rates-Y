async function fetchData(url) {
    try {
        const response = await fetch(url)

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status} (${response.statusText})`)
        }

        // Handle empty response (204 No Content)
        if (response.status === 204) {
            return null;
        }

        // Parse response (auto-detects JSON, text, or blob)
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
            return await response.json();
        } else if (contentType?.includes("text")) {
            return await response.text();
        } else {
            return await response.blob(); // Handle images/files
        }
    } catch (error) {
        if (error.name === "AbortError") {
            console.error("Request timed out");
        } else {
            console.error("Fetch error:", error.message);
        }
        return null;
    }
}

export {fetchData}
