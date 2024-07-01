import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    // Handle form submission logic here
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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Welcome to Horse Haven</h1>
          <p className="mt-4 text-xl text-white">Your ultimate destination for horse riding and care</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid gap-8 mt-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Riding Lessons</CardTitle>
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
              <p>Get expert advice on how to take care of your horse.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Trail Rides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enjoy scenic trail rides through beautiful landscapes.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Testimonials</h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            <Card>
              <CardContent>
                <p>"Horse Haven has the best riding lessons! My skills have improved tremendously."</p>
                <p className="mt-4 font-bold">- Jane Doe</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>"The trail rides are absolutely breathtaking. Highly recommend!"</p>
                <p className="mt-4 font-bold">- John Smith</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>"Great tips on horse care. My horse has never been healthier."</p>
                <p className="mt-4 font-bold">- Emily Johnson</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
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
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2023 Horse Haven. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
            <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            <a href="#" className="text-white hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;