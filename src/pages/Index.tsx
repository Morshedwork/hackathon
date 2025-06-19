import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Globe, MessageCircle, MapPin, Camera, Mic, Languages, Navigation, HelpCircle } from 'lucide-react'

const Index = () => {
  const [isListening, setIsListening] = useState(false)

  const features = [
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Real-time Translation",
      description: "Break language barriers with instant voice and text translation in 100+ languages"
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Smart Navigation",
      description: "Get personalized directions and local insights powered by AI"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Visual Recognition",
      description: "Point your camera at signs, menus, or landmarks for instant information"
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "24/7 Travel Assistant",
      description: "Get help with bookings, recommendations, and emergency situations"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600 animate-rotate-globe" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TravelMate
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              🚀 Now with AI-powered voice assistance
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Your AI Travel
              <br />
              Companion
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Break language barriers, navigate like a local, and solve any travel problem with your intelligent AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of travel with cutting-edge artificial intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-fit text-blue-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Try TravelMate Now</h2>
            <p className="text-xl text-gray-600">
              Experience the power of AI-assisted travel
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">AI Travel Assistant</CardTitle>
                <CardDescription>
                  Ask me anything about your travel plans, translations, or local recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Ask me anything... 'How do I say hello in Japanese?'" 
                    className="flex-1 text-lg py-6"
                  />
                  <Button 
                    size="lg" 
                    className={`px-6 ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
                    onClick={() => setIsListening(!isListening)}
                  >
                    <Mic className={`h-5 w-5 ${isListening ? 'animate-pulse' : ''}`} />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="p-4 h-auto flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Translate Text
                  </Button>
                  <Button variant="outline" className="p-4 h-auto flex-col">
                    <MapPin className="h-6 w-6 mb-2" />
                    Find Places
                  </Button>
                  <Button variant="outline" className="p-4 h-auto flex-col">
                    <Camera className="h-6 w-6 mb-2" />
                    Scan & Translate
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Sample Conversations:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="text-sm text-gray-600">You: "How do I get to the nearest pharmacy?"</p>
                      <p className="text-sm font-medium">TravelMate: "The closest pharmacy is 'Farmacia Central' just 2 blocks away. Here's the walking route..."</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                      <p className="text-sm text-gray-600">You: "What does this menu say?"</p>
                      <p className="text-sm font-medium">TravelMate: "This is a traditional Italian menu. The first item is 'Spaghetti Carbonara' - pasta with eggs, cheese, and pancetta..."</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Globe className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">TravelMate</span>
          </div>
          <p className="text-gray-400 mb-6">
            Your intelligent travel companion, powered by advanced AI
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index