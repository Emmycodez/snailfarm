import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">SlowGrow Snails</h2>
            <p className="mt-2">Bringing gourmet escargot to your table</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: info@slowgrowsnails.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 SlowGrow Snails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

