import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <img
          src="/images/hero-horse.jpg"
          alt="Majestic Horse"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">Welcome to Horse Haven</h1>
          <p className="mt-4 text-xl">Your ultimate destination for horse riding and care</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Horse Riding Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn to ride with our experienced instructors.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Horse Care Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get the best tips for taking care of your horse.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Equestrian Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join our exciting equestrian events and competitions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <blockquote className="text-center">
              <p className="text-xl italic">"Horse Haven has transformed my riding skills. The instructors are amazing!"</p>
              <footer className="mt-4">- Jane Doe</footer>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-xl italic">"The best place for horse care tips. My horse has never been healthier!"</p>
              <footer className="mt-4">- John Smith</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
          <p className="mt-4">&copy; 2023 Horse Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;