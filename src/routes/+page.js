export async function load() {
    const post = await import('./changelog/changelog.md')
    return { content: post.default }
}