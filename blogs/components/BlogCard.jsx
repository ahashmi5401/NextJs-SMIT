import Link from "next/link"

export default function BlogCard({ post }) {

  return (
    <article className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col p-5">
      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Author Info */}
        <div className="mb-4">
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            {post.author.name}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xs">
            {post.author.role}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
          <span>{post.readingTime}</span>
          <span>{post.publishedAt}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Link 
        href={`/blog/${post.slug}`} 
        className="mt-auto block w-full text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Read More
      </Link>
      </div>
    </article>
  )
}
