import React from 'react'

export default function RelatedBlogs() {
    const articles = [
  {
    id: 1,
    title:
      "Distributor Management involves planning, monitoring, and optimizing the flow of goods",
    description:
      "Discover the top challenges facing the distribution industry and effective ways to overcome them using modern technology solutions.",
    image: "./aianddata.webp",
    slug: "#",
  },
  {
    id: 2,
    title:
      "Asset Management in a Distributor Management System (DMS)",
    description:
      "In the dynamic landscape of Consumer Packaged Goods (CPG) companies, having a robust DMS is crucial for scaling and efficiency.",
    image: "./assetmanagement.webp",
    slug: "#",
  },
  {
    id: 3,
    title:
      "Complete Guide A Distributor Management System (DMS)",
    description:
      "Explore our comprehensive guide to Distribution Management Systems (DMS), covering features, benefits, and implementation strategies.",
    image: "./distributerplateform.webp",
    slug: "#",
  },
  {
    id: 4,
    title:
      "Retailer Application in Distributor Management System",
    description:
      "Discover the top challenges facing the distribution industry and effective ways to overcome them using modern technology solutions.",
    image: "/retailerpartnerapp.webp",
    slug: "/blog/retailer-application",
  },
];
  return (
    <section className="w-full bg-white py-5 sm:py-10 md:py-20 px-4">
  <div className=" container mx-auto">
    <h1 className="text-primary font-semibold mb-4 sm:mb-14 text-center text-3xl">
      Related Blogs
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
  {articles.map((item) => {
    return (
      <div
        className="bg-white shadow-lg overflow-hidden flex flex-col"
        key={item.id}
      >
        <div className="relative w-full h-40 sm:h-48 p-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="p-4 pt-0 sm:pt-4 flex flex-col flex-1">
          <h2 className="text-primary font-semibold mb-2 sm:mb-3 leading-snug line-clamp-2 sm:line-clamp-none">
            {item.title}
          </h2>

          <p className="text-sm text-gray-600 mb-3 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
            {item.description}
          </p>

          <a
            href={item.slug}
            className="inline-block mx-auto bg-(--secondary--bg) text-white text-sm font-medium px-3 sm:px-6 py-1.5 sm:py-3 rounded-md w-fit hover:bg-black transition"
          >
            Read More
          </a>
        </div>
      </div>
    );
  })}
</div>
  </div>

</section>
  )
}
