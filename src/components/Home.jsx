import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Droplets, Users, Clock, Shield } from 'lucide-react';

const Home = () => {
  const [searchForm, setSearchForm] = useState({
    bloodGroup: '',
    country: 'INDIA',
    state: '',
    district: '',
    city: ''
  });

  const bloodGroups = [
    'A+', 'A-', 'A1+', 'A1-', 'A1B+', 'A1B-', 'A2+', 'A2-', 'A2B+', 'A2B-',
    'AB+', 'AB-', 'B+', 'B-', 'Bombay Blood Group', 'INRA', 'O+', 'O-'
  ];

  const states = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
    'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttaranchal', 'Uttar Pradesh', 'West Bengal'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search form:', searchForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 blood-drop">
              <Droplets className="w-full h-full text-red-600" />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="float-animation mb-6">
              <img 
                src="/src/assets/BHO.jpg" 
                alt="Blood Help Online" 
                className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto hover-lift"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Save Lives by Finding Blood Donors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with voluntary blood donors across India. A single click platform for both blood donors and people in need. 
              Join our mission to save lives, one donation at a time.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-red-600">10,000+</div>
                <div className="text-gray-600">Registered Donors</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-red-600">5,000+</div>
                <div className="text-gray-600">Lives Saved</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600">Available Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <Card className="max-w-3xl mx-auto mb-16 hover-lift glass-effect border-red-100">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-red-600 text-2xl">
              <Search className="h-8 w-8 pulse-red" />
              <span>Find Blood Donors</span>
            </CardTitle>
            <p className="text-gray-600 mt-2">Search for available blood donors in your area</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group *
                  </label>
                  <Select value={searchForm.bloodGroup} onValueChange={(value) => 
                    setSearchForm({...searchForm, bloodGroup: value})
                  }>
                    <SelectTrigger className="hover:border-red-300 transition-colors">
                      <SelectValue placeholder="Select Blood Group" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodGroups.map((group) => (
                        <SelectItem key={group} value={group}>{group}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <Select value={searchForm.country} onValueChange={(value) => 
                    setSearchForm({...searchForm, country: value})
                  }>
                    <SelectTrigger className="hover:border-red-300 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INDIA">INDIA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <Select value={searchForm.state} onValueChange={(value) => 
                    setSearchForm({...searchForm, state: value})
                  }>
                    <SelectTrigger className="hover:border-red-300 transition-colors">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <Select value={searchForm.city} onValueChange={(value) => 
                    setSearchForm({...searchForm, city: value})
                  }>
                    <SelectTrigger className="hover:border-red-300 transition-colors">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 hover-lift pulse-red">
                <Search className="h-5 w-5 mr-2" />
                Search Blood Donors
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover-lift glass-effect border-red-100 group">
            <CardContent className="pt-8 pb-8">
              <div className="blood-drop mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <Droplets className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Find Donors</h3>
              <p className="text-gray-600 leading-relaxed">
                Search for blood donors by location and blood group across India. Connect instantly with verified donors.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift glass-effect border-red-100 group">
            <CardContent className="pt-8 pb-8">
              <div className="blood-drop mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <Users className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Register as Donor</h3>
              <p className="text-gray-600 leading-relaxed">
                Join our community of voluntary blood donors and save lives. Your registration helps us connect you with people in need.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift glass-effect border-red-100 group">
            <CardContent className="pt-8 pb-8">
              <div className="blood-drop mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Request Blood</h3>
              <p className="text-gray-600 leading-relaxed">
                Post your blood requirement and connect with available donors. Get help when you need it most.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover-lift glass-effect border-red-100">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-800">24/7 Emergency Support</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our platform is available round the clock for emergency blood requirements. Get immediate assistance when every minute counts.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift glass-effect border-red-100">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <Shield className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-800">Verified & Safe</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                All donors are verified and screened. Your privacy and safety are our top priorities in this life-saving mission.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-12 hover-lift">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of heroes who are making a difference every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3 hover-lift"
              onClick={() => window.location.href = '/register'}
            >
              <Users className="h-5 w-5 mr-2" />
              Become a Donor
            </Button>
            <Button 
              className="bg-red-800 hover:bg-red-900 text-lg px-8 py-3 hover-lift"
              onClick={() => window.location.href = '/request'}
            >
              <Droplets className="h-5 w-5 mr-2" />
              Request Blood
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

