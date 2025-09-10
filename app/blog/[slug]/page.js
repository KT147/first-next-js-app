
export default function BlogPagePage({ params }) {
    return (
    <main>
        <h1>Blog Post</h1>
        {params.slug}
    </main>
    )
}