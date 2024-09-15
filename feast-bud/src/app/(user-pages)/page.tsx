import RecipeSearchBar from '@/src/components/RecipeSearchBar';
import './home.css';
import { Button } from '@/src/components/ui/button';
import PopularSection from '@/src/components/PopularSection';

export default async function Home() {
  return (
    <>
      <section className="relative w-screen h-dvh custom-bg">
        <div className="relative mx-4 pt-14 sm:mx-12 sm:pt-24 text-white">
          <div className="p-2 relative rounded-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold pb-6">
              Food Recipe
            </h1>
            <p className="text-2xl font-semibold">
              Helping you find the best recipes to fulfill your nutritional needs.
            </p>

            <ul className="relative flex space-x-8 pt-4 text-xl font-bold">
              <li>
                500+ Recipes
              </li>
              <li>
                300+ Cities
              </li>
              <li>
                900+ Blogs
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-0 px-4 absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/2 w-full sm:w-2/3 lg:w-1/2">
          {/* make this into a seperate component */}
          <div className="relative p-4 space-y-4 bg-white rounded-xl opacity-80 shadow-md shadow-black">
            <RecipeSearchBar />
            <Button type="button" variant="viewBtn">View All</Button>
          </div>
        </div>
      </section>
      <section className="h-full bg-neutral-100 overflow-clip">
        <PopularSection />
      </section>
    </>
  );
}
