import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to SlowGrow Snails</h1>
        <p className="text-xl mb-8">Sustainable, Organic, and Delicious Escargot</p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-full text-lg">
          Explore Our Snails
        </Button>
      </div>
    </section>
  )
}

