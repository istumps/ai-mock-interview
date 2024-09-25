import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; // Ensure correct import path

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Sign Up or Log In',
      description: 'Create an account or log in to start your AI-powered mock interview experience.',
      icon: '👤',
    },
    {
      id: 2,
      title: 'Start the Mock Interview',
      description: 'Choose the type of interview and begin answering questions from our AI interviewer.',
      icon: '🎤',
    },
    {
      id: 3,
      title: 'Receive Feedback',
      description: 'Get detailed feedback on your performance, including strengths and areas for improvement.',
      icon: '💡',
    },
    {
      id: 4,
      title: 'Review and Improve',
      description: 'Review your feedback and practice regularly to improve your interview skills.',
      icon: '📈',
    },
  ];

  return (
    <div className="mt-20 min-h-screen">
      {/* Header Section */}
      <header className="text-black py-12 mb-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">How It Works</h1>
          <p className="text-lg mt-4">Master your interview skills with our AI-powered mock interviews</p>
        </div>
      </header>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <Card
              key={step.id}
              style={{ height: '20rem' }}
              className="shadow-lg h-96 transform transition-transform duration-300 hover:scale-105"
            >
              <CardHeader className="flex items-center justify-center bg-indigo-100 mt-7 h-20 w-20 rounded-full mx-auto text-3xl">
                {step.icon}
              </CardHeader>
              <CardContent className="text-center pt-8">
                <CardTitle className="text-2xl font-semibold">{step.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
