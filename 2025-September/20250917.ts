class FoodRatings {
  private foods: string[] = [];
  private cuisines: string[] = [];
  private ratings: number[] = [];

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const i = this.foods.findIndex((f) => f === food);
    this.ratings[i] = newRating;
  }

  highestRated(cuisine: string): string {
    let food = '';
    let rate = -1;

    for (let i = 0; i < this.cuisines.length; i++) {
      if (this.cuisines[i] !== cuisine) continue;
      if (this.ratings[i] > rate) {
        food = this.foods[i];
        rate = this.ratings[i];
        continue;
      }
      if (this.ratings[i] === rate) {
        food = food < this.foods[i] ? food : this.foods[i];
      }
    }
    return food;
  }
}
