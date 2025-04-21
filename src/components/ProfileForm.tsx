
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { nationalities } from "@/data/nationalities";
import { goals } from "@/data/goals";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface ProfileFormProps {
  onSubmit: (data: ProfileData) => void;
}

export interface ProfileData {
  age: number;
  gender: string;
  activityLevel: string;
  height: number;
  weight: number;
  nationality: string;
  goal: string;
  dietaryPreferences: string[];
}

const ProfileForm = ({ onSubmit }: ProfileFormProps) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    age: 30,
    gender: "female",
    activityLevel: "moderate",
    height: 165,
    weight: 65,
    nationality: "american",
    goal: "weight-loss",
    dietaryPreferences: [],
  });

  const handleChange = (
    field: keyof ProfileData,
    value: string | number | string[]
  ) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profileData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto" id="get-started">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Create Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  type="number" 
                  placeholder="30" 
                  value={profileData.age}
                  onChange={(e) => handleChange("age", parseInt(e.target.value))}
                  min={18}
                  max={100}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup 
                  value={profileData.gender}
                  onValueChange={(value) => handleChange("gender", value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input 
                  id="height" 
                  type="number" 
                  placeholder="165" 
                  value={profileData.height}
                  onChange={(e) => handleChange("height", parseInt(e.target.value))}
                  min={100}
                  max={250}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  placeholder="65" 
                  value={profileData.weight}
                  onChange={(e) => handleChange("weight", parseInt(e.target.value))}
                  min={30}
                  max={250}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="activityLevel">Activity Level</Label>
              <Select 
                value={profileData.activityLevel}
                onValueChange={(value) => handleChange("activityLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="light">Lightly active (1-3 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderately active (3-5 days/week)</SelectItem>
                  <SelectItem value="very">Very active (6-7 days/week)</SelectItem>
                  <SelectItem value="extra">Extra active (physical job or 2x training)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Cultural Background</Label>
              <Select 
                value={profileData.nationality}
                onValueChange={(value) => handleChange("nationality", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your cultural background" />
                </SelectTrigger>
                <SelectContent>
                  {nationalities.map((nationality) => (
                    <SelectItem key={nationality.id} value={nationality.id}>
                      {nationality.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>Health Goal</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={16} className="text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-80">
                        Choose a goal that best matches your health objectives. Each goal comes with a 
                        tailored diet plan optimized for your cultural background.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {goals.map((goal) => (
                  <div 
                    key={goal.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-all hover:border-primary ${
                      profileData.goal === goal.id 
                        ? "border-primary bg-primary/10" 
                        : "border-muted"
                    }`}
                    onClick={() => handleChange("goal", goal.id)}
                  >
                    <div className="font-medium">{goal.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {goal.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
