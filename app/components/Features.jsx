import { Leaf, Award, Utensils } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    title: 'Organic Farming',
    description: 'Our snails are raised in a 100% organic environment, ensuring the highest quality and taste.'
  },
  {
    icon: <Award className="w-12 h-12 text-green-600" />,
    title: 'Award-Winning',
    description: 'Recognized for our sustainable practices and exceptional flavor profile.'
  },
  {
    icon: <Utensils className="w-12 h-12 text-green-600" />,
    title: 'Culinary Delight',
    description: 'Perfect for gourmet dishes, our snails are favored by top chefs worldwide.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Why Choose SlowGrow Snails?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

