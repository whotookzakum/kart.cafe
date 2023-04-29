export async function load() {
    const post = await import('./changelog.md')
    return { content: post.default }
}