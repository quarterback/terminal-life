
import { getAllPosts } from 'outstatic/server'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'slug', 'description', 'publishedAt'], 'content')
  const sorted = posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { props: { posts: sorted } }
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Out of Scope</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-[#1C1C1C]">Out of Scope</h1>
          <p className="mt-4 text-xl text-[#444]">
            Writing on friction, consequence, and systems behaving badly. Companion to{' '}
            <a href="https://consequencedesign.org" className="underline hover:text-red-600">Consequence Design</a>.
          </p>
        </header>
        <div className="space-y-12">
          {posts.map((post) => (
            <div key={post.slug}>
              <h2 className="text-2xl font-semibold text-[#C0392B]">
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-[#888]">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <p className="mt-2 text-[#2C3E50]">{post.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
