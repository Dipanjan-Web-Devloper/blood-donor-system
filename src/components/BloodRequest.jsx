import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Heart, Phone, MapPin } from 'lucide-react';

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    unitsNeeded: '',
    urgency: '',
    hospitalName: '',
    hospitalAddress: '',
    city: '',
    state: '',
    contactPerson: '',
    contactNumber: '',
    alternateNumber: '',
    email: '',
    whenNeeded: '',
    additionalInfo: '',
    reason: ''
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

  const urgencyLevels = [
    { value: 'immediate', label: 'Immediate (Within 24 hours)', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent (Within 2-3 days)', color: 'text-orange-600' },
    { value: 'normal', label: 'Normal (Within a week)', color: 'text-green-600' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Blood request form:', formData);
    alert('Blood request submitted successfully! We will notify nearby donors.');
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-600 text-2xl">
            <AlertCircle className="h-8 w-8" />
            <span>Blood Request Form</span>
          </CardTitle>
          <p className="text-gray-600">
            Submit your blood requirement details. We will notify registered donors in your area to help you find the blood you need.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Patient Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    placeholder="Enter patient's full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group Required *
                  </label>
                  <Select value={formData.bloodGroup} onValueChange={(value) => 
                    handleInputChange('bloodGroup', value)
                  }>
                    <SelectTrigger>
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
                    Units Needed *
                  </label>
                  <Input
                    type="number"
                    value={formData.unitsNeeded}
                    onChange={(e) => handleInputChange('unitsNeeded', e.target.value)}
                    placeholder="Number of units"
                    min="1"
                    max="10"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <Select value={formData.urgency} onValueChange={(value) => 
                    handleInputChange('urgency', value)
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <span className={level.color}>{level.label}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When Needed *
                  </label>
                  <Input
                    type="datetime-local"
                    value={formData.whenNeeded}
                    onChange={(e) => handleInputChange('whenNeeded', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Blood Requirement
                  </label>
                  <Select value={formData.reason} onValueChange={(value) => 
                    handleInputChange('reason', value)
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="accident">Accident</SelectItem>
                      <SelectItem value="cancer">Cancer Treatment</SelectItem>
                      <SelectItem value="anemia">Anemia</SelectItem>
                      <SelectItem value="childbirth">Childbirth Complications</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Hospital Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hospital Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.hospitalName}
                    onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                    placeholder="Enter hospital name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <Input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter city"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital Address *
                </label>
                <Textarea
                  value={formData.hospitalAddress}
                  onChange={(e) => handleInputChange('hospitalAddress', e.target.value)}
                  placeholder="Enter complete hospital address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <Select value={formData.state} onValueChange={(value) => 
                  handleInputChange('state', value)
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    placeholder="Name of person to contact"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Contact Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                    placeholder="Primary contact number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alternate Contact Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.alternateNumber}
                    onChange={(e) => handleInputChange('alternateNumber', e.target.value)}
                    placeholder="Alternate contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email for updates"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any additional details that might help donors (e.g., specific requirements, visiting hours, etc.)"
                rows={4}
              />
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Guidelines:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Ensure all contact information is accurate and reachable</li>
                <li>• Be available to respond to donor calls promptly</li>
                <li>• Verify blood group requirements with the hospital</li>
                <li>• Keep hospital staff informed about potential donors</li>
                <li>• Thank donors for their time, even if they cannot donate</li>
              </ul>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
              <Heart className="h-5 w-5 mr-2" />
              Submit Blood Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BloodRequest;

