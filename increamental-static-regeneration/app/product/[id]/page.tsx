
interface Product {
  id: string;
  name: string;
  price: number;
}

// This function generates the static paths at build time (Optional but recommended)
export async function generateStaticParams() {
  const res = await fetch('https://api.example.com/products');
  const products: Product[] = await res.json();
 
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Fetch data and tell Next.js to cache it for a maximum of 60 seconds
  const res = await fetch(`https://api.example.com/products/${params.id}`, {

    //it is hte time time period in which each page reenrate like whether app update data if user 
    // visit after 60 second then it will update data otherwise it will show old data
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const product: Product = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <small>Generated at: {new Date().toLocaleTimeString()}</small>
    </main>
  );
}