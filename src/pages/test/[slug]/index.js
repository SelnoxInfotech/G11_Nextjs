import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const ProductDetailsPage = ({ product }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  if (router.isFallback || loading) {
    return <div>Loading...</div>; // Render loading state
  }

  // Render your product details
  return (
    <div>
      {/* Render your product details here */}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* Render other product details as needed */}
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    // Set loading state to true
    // setLoading(true);

    // Simulate a delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Fetch product details from your API
    const res = await fetch(`https://www.g11fantasy.com/NewsSection/Get-News/${1}`);
    
    // Check if response status is ok
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    // Parse the response as JSON
    const product = await res.json();

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: { product }, // Pass fetched product data to the component
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {
        product: null // Pass null product to indicate error
      },
    };
  } finally {
    // Set loading state to false after data fetching is complete (either successful or failed)
    setLoading(false);
  }
}

export default ProductDetailsPage;
