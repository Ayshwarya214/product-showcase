import Greeting from './components/Greeting';
import ProductCard from './components/ProductCard';
export default function Home() {
  return (
    <main>
      <h1>My Product Store</h1>
      <Greeting name="Developer" />
      
      <div>
        <ProductCard 
          title="Mechanical Keyboard" 
          price={89} 
          inStock={true} 
        />
        <ProductCard 
          title="Wireless Mouse" 
          price={45} 
          inStock={false} 
        />
      </div>
    </main>
  );
}