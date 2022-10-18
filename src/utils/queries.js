export const getTopics = (name) => `
    query { 
    topic(name: "${name}") { 
        relatedTopics(first: 10) {
        name,
        stargazerCount
        }
    }
}
`;