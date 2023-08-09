import getBillboards from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboards('20396e81-1355-47ac-885c-f8130db73447');
  const featuredProducts = await getProducts({ isFeatured: true });
  const products = await getProducts({ isFeatured: false });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts} />
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Explore Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
