import '../home.css';
import RecipeGrid from "@/src/components/RecipeGrid";

export default async function Home() {
  return (
    <>
    <section className="relative w-screen h-dvh custom-bg">
      <div className="relative px-16 pt-24 text-white">
        <div className="p-2 absolute rounded-xl"> 
          <h1 className="text-5xl font-extrabold pb-6">
            Food Recipe
          </h1>
          <p className="text-2xl font-semibold">
            Helping you find the best recipes to fulfill your nutritional needs.
          </p>
        </div> 
      </div>
      <div className="pt-12 bottom-0 absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
        {/* make this into a seperate component */}
        <div className="p-4 bg-white rounded-xl opacity-70 shadow-md shadow-black">
          <div>
            <p>Search Recipe</p>
            <button>hello</button>
          </div>
        </div>
      </div>
    </section>
    <section className="h-dvh bg-neutral-100 overflow-clip">
      <div className="flex flex-col justify-center items-center p-10 gap-10">
        <p className="text-3xl font-bold underline underline-offset-2">Most Popular</p>
        <RecipeGrid />        
      </div>
    </section>
    </>
  );
}
