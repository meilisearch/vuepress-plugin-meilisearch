module.exports = {
    title: "Welcome to the Playground!",
    plugins: [
        [
          "meilisearch",
          {
            // Testing with MeiliSearch documentation content
            "hostUrl": "https://e10b17e6.getmeili.com",
            "apiKey": "b4ff9313299e65ce4e259d3aa59730d2829c9a6805aa15b83cdbd63b20563155",
            "indexUid": "docs",
            "maxSuggestions": 10,
            "placeholder": "Search as you type..."
          }
        ],
    ],
}
