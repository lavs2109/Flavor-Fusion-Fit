
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { DietRecommendation, Meal } from "@/data/recommendations";

interface RecommendationCardProps {
  recommendation: DietRecommendation;
}

const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4">
      <div className="w-full md:w-1/3 h-32 rounded-lg overflow-hidden">
        <img
          src={meal.imageUrl}
          alt={meal.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-lg">{meal.name}</h4>
        <p className="text-muted-foreground text-sm mb-2">{meal.description}</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            {meal.calories} cal
          </span>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
            P: {meal.protein}g
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            C: {meal.carbs}g
          </span>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            F: {meal.fat}g
          </span>
        </div>
      </div>
    </div>
  );
};

const EmptyMealMessage = () => (
  <div className="py-8 text-center">
    <p className="text-muted-foreground">No meals available for this category. Try another option.</p>
  </div>
);

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const { nationality, goal } = recommendation;
  const nationalityName = nationality.charAt(0).toUpperCase() + nationality.slice(1);
  const goalName = goal.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {nationalityName} Diet Plan for {goalName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="breakfast">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Breakfast Options</h3>
              <Separator />
              {recommendation.breakfast.length > 0 ? (
                recommendation.breakfast.map((meal) => (
                  <MealItem key={meal.id} meal={meal} />
                ))
              ) : (
                <EmptyMealMessage />
              )}
            </div>
          </TabsContent>

          <TabsContent value="lunch">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Lunch Options</h3>
              <Separator />
              {recommendation.lunch.length > 0 ? (
                recommendation.lunch.map((meal) => (
                  <MealItem key={meal.id} meal={meal} />
                ))
              ) : (
                <EmptyMealMessage />
              )}
            </div>
          </TabsContent>

          <TabsContent value="dinner">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Dinner Options</h3>
              <Separator />
              {recommendation.dinner.length > 0 ? (
                recommendation.dinner.map((meal) => (
                  <MealItem key={meal.id} meal={meal} />
                ))
              ) : (
                <EmptyMealMessage />
              )}
            </div>
          </TabsContent>

          <TabsContent value="snacks">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Snack Options</h3>
              <Separator />
              {recommendation.snacks.length > 0 ? (
                recommendation.snacks.map((meal) => (
                  <MealItem key={meal.id} meal={meal} />
                ))
              ) : (
                <EmptyMealMessage />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
