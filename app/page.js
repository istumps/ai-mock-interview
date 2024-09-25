import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header"; 
import Link from "next/link";
export default function Home() {



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}

    
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-opacity-50">

        </div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ace Your Next Interview with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get personalized feedback and improve your interview skills with our AI-powered mock interviews.
          </p>
          <Link href={'/dashboard'}><Button className="px-8 py-4 bg-white text-indigo-600 rounded-md shadow-lg hover:bg-gray-200">
            Get Started
          </Button></Link>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Why Choose Our AI Mock Interview?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
          <div className="p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image src="/feedback.jpg" alt="Real-time Simulation" width={700} height={200} className="mx-auto" />
              
              <div className="text-xs text-gray-300"><a href="https://www.freepik.com/">Image by vectorjuice on Freepik</a></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Feedback</h3>
              <p className="text-gray-600">
              Receive detailed feedback tailored to your responses and improve with every session.
              </p>

            </div>
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image src="/simulation.jpg" alt="Real-time Simulation" width={400} height={200} className="mx-auto " />
              <div className="text-xs text-gray-300"><a href="https://www.freepik.com/">Image by vectorjuice on Freepik</a></div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-time Simulation</h3>
              <p className="text-gray-600">
                Experience realistic interview scenarios with our AI-driven simulations.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition">
              <Image src="/analytics.jpg" alt="AI Analytics" width={400} height={100} className="mx-auto " />
              <div className="text-xs text-gray-300"><a href="https://www.freepik.com/">Image by vectorjuice on Freepik</a></div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 ">AI-driven Analytics</h3>
              <p className="text-gray-600">
                Track your progress with in-depth analytics and insights provided by AI.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "The AI feedback was spot-on! I felt much more prepared for my actual interview."
              </p>
              <p className="font-semibold text-gray-900">— Sarah L., Software Engineer</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "This platform helped me identify and improve my weak areas. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">— Mark D., Data Scientist</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                "I landed my dream job thanks to the realistic practice sessions."
              </p>
              <p className="font-semibold text-gray-900">— Emily R., Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Excel?</h2>
          <p className="text-xl mb-8">
            Sign up today and start your journey to interview success.
          </p>
<Link href={'/dashboard'}><Button className="px-8 py-4 bg-white text-indigo-600 rounded-md shadow-lg hover:bg-gray-100 transition">
            Sign Up Now
          </Button></Link>
          

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <p>&copy; 2024 AI Interview Coach. All rights reserved.</p>
          <nav className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white px-4">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white px-4">FAQs</a>
            <a href="#" className="text-gray-400 hover:text-white px-4">Support</a>
            <a href="#" className="text-gray-400 hover:text-white px-4">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
